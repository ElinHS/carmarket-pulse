// ⚠ 本檔為 index.html 抽出的純資料檔，需在 index.html 主程式之前載入。
// 每月更新資料時只需修改本檔，不必動 index.html 的程式邏輯。
//
// ── MODEL_NEWS：汽車品牌活動動態 ──
// 收錄各品牌繞著特定車款推動的市場活動：異業合作、代言、體驗活動、產品話題、通路操作等。
// 與其他頁面的分工：
//   品牌動態（launch.js）→ 上市／改款／特仕／預售等產品時程；本檔內容亦併入該頁顯示
//   競車促銷方案（promos.js）→ 每月價格與方案
//   本檔                     → 上述以外、品牌繞著特定車款推動的市場活動
//
// 欄位：
//   ym      ：'2026-10' 排序與分組用
//   date    ：顯示用日期字串，可為區間（'2026/10/03–10/04'）或單日；未定可省略
//   brand   ：品牌（對應品牌色，未列入配色者顯示灰色）
//   model   ：車款名稱
//   type    ：異業合作｜代言｜體驗活動｜產品話題｜通路｜展間活動｜KOL合作｜車主活動
//             ｜戶外展車｜品牌活動｜新車上市｜社群招募｜特仕車｜其他
//             （決定徽章顏色；一則活動橫跨多個類型時用「＆」串接，例 '異業合作＆產品話題'，
//               會拆成多顆徽章顯示。未列入上表的類型顯示為灰色）
//   title   ：一句話標題
//   summary ：摘要段落，可省略
//   points  ：重點條列（陣列），可省略
//   links   ：出處連結 [{label, url}]，可省略；建議保留以便回查

const MODEL_NEWS = [
  {ym:'2026-10', date:'2026/10/03', brand:'TOYOTA', model:'GR',
   type:'體驗活動＆產品話題',
   title:'GR 嘉年華（台南）',
   summary:'GR 嘉年華首度移師南部，並規劃「首度封街展演」；更邀請到全球車迷矚目的兩大新世代旗艦超跑 GR GT 與 GR GT3 首度在台亮相，是 2026 年台灣車壇不容錯過的熱血重頭戲。',
   points:[
     '活動日期：2026 年 10 月 3 日',
     '活動地點：台南（首度移師南部）',
     '活動亮點：首度封街展演',
     '重點展演車款：GR GT、GR GT3 兩款新世代旗艦超跑首度在台亮相',
   ],
   links:[
     {label:'TOYOTA GAZOO Racing 活動官網', url:'https://www.toyota.com.tw/toyotagazooracing/2026GRcityshowrun/'},
   ]},

  {ym:'2026-10', date:'2026/10/31', brand:'TOYOTA', model:'BRANDING',
   type:'品牌活動',
   title:'TOYOTA RUN ＃挺你一起跑',
   summary:'以「關懷」為核心，串連北中南四場主題路跑，讓參與者和毛孩、視障者或家人一起慢跑。',
   points:[
     '活動日期：2026 年 10 月 31 日',
     '場次規劃：台北、新竹 寵物專場｜台中 視障場｜高雄 樂齡場，共四場',
     '溝通核心：以「關懷」為主軸，結合陪跑對象設計各場主題',
   ],
   links:[
     {label:'TOYOTA RUN 活動官網', url:'https://www.toyota.com.tw/event/toyotarun/'},
   ]},

  {ym:'2026-09', date:'2026/09/19–10/20', brand:'HYUNDAI', model:'KONA',
   type:'新車上市＆展間活動',
   title:'KONA Hybrid 全台巡迴預賞會 ｜ 99 萬元起',
   summary:'南陽實業啟動 KONA Hybrid 大改款預接單，9/19 起於全台指定展示中心展開 VIP 巡迴預賞，讓消費者在 10 月正式發表前搶先看實車，並祭出限時早鳥預購優惠。',
   points:[
     '車型與預售價：雙車型編成，GLH-A 預售價 99 萬元、頂規 GLH-B 預售價 110 萬元',
     '巡迴預賞：9 月 19 日起於全台指定展示中心展開 VIP 巡迴預賞活動',
     '早鳥條件：2026 年 10 月 20 日前完成預訂，並於 12 月 31 日前完成領牌',
     '早鳥好禮：免費升級「5 年或 14 萬公里」全車延長保固',
     '電池保固：油電高壓電池提供 8 年不限里程保固',
     '產品訴求：同級最佳油耗',
   ],
   links:[
     {label:'HYUNDAI 官網新聞稿', url:'https://www.hyundai-motor.com.tw/news-in-588.html'},
   ]},

  {ym:'2026-09', date:'2026/09', brand:'HYUNDAI', model:'TUCSON L',
   type:'社群招募',
   title:'TUCSON L 車主最強油耗大募集',
   summary:'邀請 TUCSON L 車主拍下儀錶板上的最強油耗或超猛續航里程照片投稿，以車主自發的實測數據支撐油耗訴求。',
   points:[
     '參與對象：TUCSON L 車主',
     '參與方式：拍下儀錶板最強油耗或超猛續航里程照片投稿',
     '獎勵：最高 3,500 點 HYUNDAI POINTS',
     '溝通角度：UGC 型內容徵集，用車主實測數據取代品牌自述的油耗宣稱',
   ],
   links:[
     {label:'HYUNDAI Facebook 活動貼文', url:'https://www.facebook.com/photo?fbid=1862276389274323&set=a.688402963328344&locale=zh_TW'},
   ]},

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

  {ym:'2026-08', date:'2026/08/18', brand:'HYUNDAI', model:'Palisade',
   type:'代言＆新車上市',
   title:'崔始源代言，一則脆創下史上最多新聞話題',
   summary:'HYUNDAI 宣布由 SUPER JUNIOR 崔始源擔任 Palisade 代言人。其於脆（Threads）預告「8/20 現身信義區、不是拍戲」的神祕行程，在代言身分正式揭曉前即引爆大量媒體轉載與討論。',
   points:[
     '代言人：SUPER JUNIOR 崔始源',
     '操作手法：先以「8/20 現身信義區、不是拍戲」的神祕預告貼文鋪陳，再揭曉代言身分與新車發表',
     '成效：單則脆貼文創下品牌史上最多新聞話題量',
     '可借鏡之處：代言效益來自「懸念先行」的節奏設計，而非單純的人選聲量',
   ],
   links:[
     {label:'HYUNDAI 官網新聞稿', url:'https://www.hyundai-motor.com.tw/news-in-582.html'},
     {label:'鏡週刊報導', url:'https://www.mirrormedia.mg/external/mirrordaily_78794'},
   ]},

  {ym:'2026-08', date:'2026/08/29–08/30', brand:'TOYOTA', model:'COROLLA CROSS',
   type:'異業合作＆戶外展車',
   title:'《500碗》精選全台人氣小吃（高雄場）',
   summary:'《500碗》精選全台人氣小吃高雄場於 8/29–8/30 在高雄夢時代登場，以「開著 COROLLA CROSS 一起來尋找旅途中屬於你的那一碗」串連自駕出遊情境，現場並抽出限量《500碗》500 元折價券。',
   points:[
     '活動時間：2026 年 8 月 29 日至 8 月 30 日',
     '活動地點：高雄夢時代',
     '溝通主軸：帶上家人朋友，開著 COROLLA CROSS 尋找旅途中屬於你的那一碗',
     '活動好禮：限量抽《500碗》500 元折價券',
   ],
   links:[
     {label:'TOYOTA Facebook 活動貼文', url:'https://www.facebook.com/share/p/1Gt4xZgzKQ/'},
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

  {ym:'2026-04', date:'2026/04/01', brand:'HYUNDAI', model:'MUFASA Xplore',
   type:'特仕車',
   title:'MUFASA Xplore 超規格 SUV',
   summary:'MUFASA 推出 Xplore 特仕車型，入主價 86.9 萬元起，並提供戶外露營配件選購，把車款定位延伸至戶外休閒情境。',
   points:[
     '入主價：86.9 萬元起',
     '配件延伸：提供戶外露營配件選購',
   ],
   links:[
     {label:'HYUNDAI 官網新聞稿', url:'https://www.hyundai-motor.com.tw/news-in-550.html'},
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
