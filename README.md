# carmarket-pulse

車市總覽 Dashboard — NISSAN 台灣市場競爭情報儀表板（掛牌追蹤、競品比對、Nielsen 數位廣告監測、促銷方案、社群聲量、車媒檢索、新車上市日曆）。

純靜態頁面，開啟 `index.html` 即可使用（GitHub Pages 部署亦同）。

## 專案結構

```
index.html            頁面版型與全部程式邏輯（不含資料）
data/                 純資料檔，每月更新只改這裡
  registrations.js    NISSAN 各車款月掛牌數（RAW）
  comp.js             競品掛牌比對（COMP_DATA）
  intel.js            車市銷售觀察月報（INTEL）
  promos.js           競品促銷方案文字（PROMO）
  nielsen.js          Nielsen 廣告監測（NIELSEN_MONTHLY 等）
  opview.js           Opview 社群聲量（OPVIEW_MONTHLY）
  launch.js           新車上市日曆（LAUNCH_CALENDAR）
  strategy.js         品牌策略大表（STRAT_DATA / CASES）
  q1_report.js        Q1 整合報告（Q1_AD / Q1_PROMO_SUMMARY / Q1_REG）
  kol.js              車媒 / KOL 名錄（KOL_DATA）
  creatives.js        廣告素材截圖 base64 圖庫（檔案很大，勿手動編輯）
```

`data/*.js` 以一般 `<script>` 於 `index.html` 主程式之前載入，宣告全域常數供頁面使用；
因此本機直接雙擊 `index.html`（file://）也能運作，不需起 server。

## 每月更新流程

1. 掛牌數：在 `data/registrations.js` 的 `RAW` 追加一列 `{yr, mo, kicks, ...}`；
   頁面右上的「資料至」標籤與各圖表會自動延長。
2. 促銷方案：在 `data/promos.js` 各車款列補上新月份欄位；促銷火力指數（0–5，規則式評分）會自動計算。
3. Nielsen：在 `data/nielsen.js` 的 `NIELSEN_MONTHLY` 新增月份物件；SOV 趨勢、SOV vs SOM（ESOV）、品牌整合時間軸的月份軸會自動延長。
   注意：各月花費單位只需「同月內一致」，跨月比較一律以份額（%）計算。
4. 聲量 / 上市日曆：同理更新 `data/opview.js`、`data/launch.js`。
5. 素材截圖：透過頁面上的上傳功能（Storage API），或更新 `data/creatives.js`。

## 分享特定視圖（URL 深連結）

網址 hash 會隨操作即時更新，複製網址即可分享當前視圖，例如：

- `#nielsen/mar` — 3 月數位廣告監測
- `#nielsen/jun/ford` — 6 月 + FORD 品牌整合時間軸
- `#promo/apr/HONDA` — 4 月 HONDA 促銷方案
- `#sales/2025`、`#intel/26.03`、`#strategy/MAZDA`、`#kol/matrix`、`#opview/may`

## 分析模組說明

- **促銷火力指數**：把文字方案量化為 0–5 分（價格讓利 +1.5、0利率 +1、低月付 +1、配件金/贈品 +1、舊換新/貨物稅 +0.5、延長保固 +0.5、試乘禮/抽獎 +0.5，讓利 ≥10 萬再 +0.5）。規則透明可稽核，徽章 tooltip 列出命中訊號；屬相對比較指標，非實際讓利金額。
- **SOV vs SOM（ESOV）**：數位投放聲量份額 vs 六品牌內掛牌份額；ESOV 為正代表投放領先市場地位。SOV 僅含 Nielsen 可監測之數位 Display/Video，不含電視/戶外等傳統媒體。
- **品牌整合時間軸**：單一品牌的 SOV、SOM、促銷火力沿同一月份軸對齊，並在 tooltip 帶出該月上市事件，用於判讀「投放 → 聲量 → 掛牌」的因果對應。
