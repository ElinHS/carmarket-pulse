// ⚠ 本檔為 index.html 抽出的純資料檔，需在 index.html 主程式之前載入。
// 每月更新資料時只需修改本檔，不必動 index.html 的程式邏輯。
//
// ── MODEL_NEWS：車款動態 ──
// 收錄單一車款層級的動態：異業合作、代言、體驗活動、產品話題、通路操作等。
// 與其他頁面的分工：
//   新車上市月曆（launch.js）→ 上市／改款／特仕／預售等產品時程
//   競車促銷方案（promos.js）→ 每月價格與方案
//   本檔                     → 上述以外、繞著「單一車款」發生的市場動態
//
// 欄位：
//   ym      ：'2026-10' 排序與分組用
//   date    ：顯示用日期字串，可為區間（'2026/10/03–10/04'）或單日；未定可省略
//   brand   ：品牌（對應品牌色，未列入配色者顯示灰色）
//   model   ：車款名稱
//   type    ：異業合作｜代言｜體驗活動｜產品話題｜通路｜其他（決定徽章顏色）
//   title   ：一句話標題
//   summary ：摘要段落，可省略
//   points  ：重點條列（陣列），可省略
//   links   ：出處連結 [{label, url}]，可省略；建議保留以便回查

const MODEL_NEWS = [
  {ym:'2026-10', date:'2026/10/03–10/04', brand:'MITSUBISHI', model:'XFORCE',
   type:'異業合作',
   title:'XFORCE × 2026 呼聲 VOICES 音樂節',
   summary:'中華三菱 XFORCE 攜手「2026 呼聲 VOICES 音樂節」，於台北大佳河濱公園展開為期兩天的活動；現場除豪華卡司開唱外，XFORCE 亦將攜手神祕嘉賓現身。',
   points:[
     '活動時間：2026 年 10 月 3 日（六）至 10 月 4 日（日）',
     '活動地點：台北大佳河濱公園（臺北市中山區濱江街 5 號）',
     '車款定位：跨界休旅，售價 79.9 萬～84.2 萬元',
     '產品連結：頂規狂享版搭載專屬 YAMAHA 音響，結合科技雙螢幕，與音樂節主題形成沉浸式體驗的溝通支點',
   ],
   links:[
     {label:'KKTIX 活動頁', url:'https://voicesmusicfest.kktix.cc/events/9b5e414f'},
     {label:'中華三菱 Facebook', url:'https://www.facebook.com/MitsubishiMotorsTaiwan/posts/1379260021024709/'},
   ]},
];
