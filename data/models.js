// ⚠ 本檔為 index.html 抽出的純資料檔，需在 index.html 主程式之前載入。
// 每月更新資料時只需修改本檔，不必動 index.html 的程式邏輯。
//
// ── MODEL_NEWS：汽車品牌活動動態 ──
// 收錄各品牌繞著特定車款推動的市場活動：異業合作、代言、體驗活動、產品話題、通路操作等。
// 與其他頁面的分工：
//   新車上市月曆（launch.js）→ 上市／改款／特仕／預售等產品時程
//   競車促銷方案（promos.js）→ 每月價格與方案
//   本檔                     → 上述以外、品牌繞著特定車款推動的市場活動
//
// 欄位：
//   ym      ：'2026-10' 排序與分組用
//   date    ：顯示用日期字串，可為區間（'2026/10/03–10/04'）或單日；未定可省略
//   brand   ：品牌（對應品牌色，未列入配色者顯示灰色）
//   model   ：車款名稱
//   type    ：異業合作｜代言｜體驗活動｜產品話題｜通路｜展間活動｜KOL合作｜車主活動｜其他
//             （決定徽章顏色；一則活動橫跨多個類型時用「＆」串接，例 '異業合作＆產品話題'，
//               會拆成多顆徽章顯示。未列入上表的類型顯示為灰色）
//   title   ：一句話標題
//   summary ：摘要段落，可省略
//   points  ：重點條列（陣列），可省略
//   links   ：出處連結 [{label, url}]，可省略；建議保留以便回查

const MODEL_NEWS = [
  {ym:'2026-09', date:'2026/09/07–10/07', brand:'FORD', model:'Territory',
   type:'異業合作＆產品話題',
   title:'Ford Territory ×「有飲 Youin」全台巡迴開跑',
   summary:'Ford Territory 攜手「有飲 Youin」展開全台巡迴，於官方 Facebook 完成 #指定任務，即有機會獲得有飲烏龍奶茶包。',
   points:[
     '活動時間：2026 年 9 月 7 日至 10 月 7 日',
     '參與方式：於 Ford 官方 Facebook 貼文完成 #指定任務',
     '活動好禮：有飲烏龍奶茶包',
   ],
   links:[
     {label:'Ford Facebook 活動貼文', url:'https://www.facebook.com/share/p/14qyZvvhDGA/'},
   ]},

  {ym:'2026-09', date:'2026/09–10/04', brand:'FORD', model:'Territory',
   type:'異業合作＆車主活動',
   title:'FORD × SKRABUR 黑膠漢堡 ｜ #FORD牛肉就是比較多',
   summary:'FORD 與 SKRABUR 黑膠漢堡（信義店、台南店）合作，9 月起至 10/4 出示 FORD 車主鑰匙即可兌換福特專屬餐點，並以限動或打卡搭配指定 hashtag 完成社群任務。',
   points:[
     '活動時間：2026 年 9 月起至 10 月 4 日',
     '合作店點：SKRABUR 黑膠漢堡 信義店、台南店',
     '參與資格：出示 FORD 車主鑰匙',
     '車主權益：兌換福特專屬餐點',
     '社群任務：上傳限動或打卡並搭配指定 hashtag ＃FORD牛肉就是比較多',
   ],
   links:[
     {label:'Ford Facebook 活動貼文', url:'https://www.facebook.com/share/p/1Ym1MUy7YD/'},
   ]},

  {ym:'2026-08', date:'2026/08/29', brand:'FORD', model:'Territory',
   type:'展間活動＆KOL合作',
   title:'小小造車家',
   summary:'活動邀請知名親子教育作家「神老師＆神媽咪」與社團法人台灣麵包花與紙黏土推展協會跨界合作，帶領現場超過 60 位大小朋友一起捏出專屬的夢想車車 Ford Territory。',
   points:[
     '活動日期：2026 年 8 月 29 日',
     '合作對象：親子教育作家 神老師＆神媽咪、社團法人台灣麵包花與紙黏土推展協會',
     '現場規模：超過 60 位大小朋友參與',
     '延伸操作：9/1 起透過各經銷商電話預約領取時間，免費領取黏土材料包',
     '領取期間：9/5–9/20 至 Ford 指定展間領取',
   ],
   links:[
     {label:'Ford Facebook 活動貼文', url:'https://www.facebook.com/share/p/1DRKziY4MZ/'},
   ]},

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
