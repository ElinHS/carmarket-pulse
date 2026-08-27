# lab／測試頁

與正式儀表板分開的實驗場。`index.html` 不受這裡的改動影響。

## 現有測試頁

| 檔案 | 內容 | 網址（GitHub Pages） |
|---|---|---|
| `actions.html` | 品牌行動 × 銷量 | `<站台網址>/lab/actions.html` |

## 產生方式

```bash
python3 lab/build.py
```

腳本會從 `index.html` 抽出三塊組成獨立頁面：

1. `<style>` 全部樣式
2. `<div class="page" id="page-actions">` 版面區塊
3. `const AX_BRANDS=[` 到 `// ── URL 深連結` 之間的程式（AX 系列函式）

外加 11 個共用工具（`csvEscape`／`downloadCSV`／`MONTHS_AVAIL`／`MONTH_LABELS`／
`PROMO_SIGNALS`／`promoIntensity`／`promoLevel`／`promoBrandIndex`／`ESOV_BRANDS`／
`nielsenShare`／`TL_YM`），以及 7 個資料檔（以 `../data/` 相對路徑載入，不複製）。

抽取以「行」為單位：本檔頂層宣告一律從第 0 欄開始、內容縮排，因此讀到下一個
第 0 欄宣告為止即可。不做 JS 語法解析——字串、樣板字面量與正規表達式字面量
（例如 `csvEscape` 裡的 `/[",]/`）都會讓字元級掃描誤判。

## 改動流程

**先改 `index.html`，再跑 `build.py` 重新產生測試頁。**
`actions.html` 是產物，直接手改會在下次重建時被覆蓋。

這樣正式版與測試版永遠同步；等測試頁的內容確定要上線，正式版其實已經是新的，
把 `lab/` 整個刪掉即可。

若要反過來只在測試頁試新東西、暫時不動正式版，就直接編輯 `actions.html`，
但完成後要把改動手動搬回 `index.html` 的對應區塊，再重跑一次 `build.py` 確認一致。

## 注意

- `buildBrandTimeline()` 與 `TL_YM` 名稱看似屬於本頁，實際是「數位廣告監測」頁在用
  （`buildNielsenCharts` 會呼叫），移除 `page-actions` 時不能一併刪除。
- `data/creatives.js`（35 MB）只在 AX 程式引用 `Q1_CREATIVE_IMGS` 或 `_cac` 時才載入，
  目前不需要，`build.py` 會自動判斷。
