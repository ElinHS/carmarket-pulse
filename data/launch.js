// ⚠ 本檔為 index.html 抽出的純資料檔，需在 index.html 主程式之前載入。
// 每月更新資料時只需修改本檔，不必動 index.html 的程式邏輯。
//
// LAUNCH_2026：2026 年新車時程表（依月份分組）
//   ym    ：排序用鍵值（2026-01 ～ 2026-12、2026-Q4）
//   label ：月份顯示名稱
//   items ：該月各品牌動態
//     brand  ：品牌（對應品牌色）
//     title  ：車款／專案名稱
//     type   ：新車｜特仕｜改款｜預售｜年式｜活動｜動態
//     points ：亮點說明（陣列，每項一個重點）

const LAUNCH_2026 = [
  {ym:'2026-01', label:'1月', items:[
    {brand:'TOYOTA', title:'第六代 RAV4 大改款 GR Sport 特仕版', type:'特仕',
     points:[
       '導入單一 2.5 HEV 動力，104 萬起，首度將官方運動化 GR Sport 作為獨立常販特仕車型',
       '專屬黑化蜂巢水箱護罩、GR 專屬運動化懸吊調校與座艙專屬徽飾',
     ]},
    {brand:'FORD', title:'品牌車展進駐台北三創（1/15–1/26）', type:'活動',
     points:[
       '現場以最新發表的 The All-New Ford Territory 國產油電雙能休旅為核心主力，展開全台巡迴與首波大量交車',
     ]},
    {brand:'HYUNDAI', title:'INSTER 全新上市', type:'新車',
     points:[
       '定位都會精品純電小休旅，擁有最高 465 公里續航力',
       '首波 300 台預接單優惠在 1 月正式展開全台巡迴展示',
     ]},
    {brand:'MAZDA', title:'正 2026 年式全面到港與保固特仕禮遇', type:'年式',
     points:[
       '新年式 MAZDA3、CX-30、MX-5 陸續抵台交付，全面標配 10.25 吋中央資訊顯示幕',
       '「駕趣隨行」限時特仕專案：全車系限量提供最高 7 年原廠保固',
       '旗艦七人座休旅 CX-90 再加碼 150 萬元 70 期 0 利率優惠',
     ]},
  ]},
  {ym:'2026-02', label:'2月', items:[
    {brand:'TOYOTA', title:'純電精品休旅 Urban Cruiser 新上市', type:'新車',
     points:[
       '車展首發後正式啟動交車，鎖定都會小休旅級距，127 萬元起',
     ]},
    {brand:'HONDA', title:'CR-V 限時越級升等版', type:'特仕',
     points:[
       '因應農曆年前交車潮，推出罕見的規格免費升等',
       '買 VTi-S 車型免費升級 S 車型；買 S 車型則直接升等至頂規 Prestige',
     ]},
  ]},
  {ym:'2026-03', label:'3月', items:[
    {brand:'NISSAN', title:'Kicks / Sentra SAKURA 櫻花特仕車 — 日系質感特仕企劃', type:'特仕',
     points:[
       '開出超殺限定特仕價：Kicks SAKURA 59.9 萬起、Sentra SAKURA 68.5 萬起',
       '中高階車型升級「TAKUMI 匠人皮革座椅」',
       '頂規極綻版破天荒下放抗暑利器「雙前座吸風式通風座椅」',
     ]},
    {brand:'MAZDA', title:'賽道基因注入！HOMURA 雙雄特仕車上市', type:'特仕',
     points:[
       'MAZDA3 / CX-30「HOMURA」特仕車，以 20S Retro Sports Edition 車型為核心深度改裝',
       '首度無預警標配 MAZDA 官方指定日本性能品牌「AutoExe」運動化套件（空力精品、強化結構件），強化「人馬一体」操控',
       '98.8 萬元起',
     ]},
  ]},
  {ym:'2026-04', label:'4月', items:[
    {brand:'TOYOTA', title:'國產主力「車美仕電子後視鏡」特仕升級專案', type:'特仕',
     points:[
       '針對國產神車 Corolla Cross 與 Altis 推出限時升級',
       '入主指定等級，免費升級市價數萬元的「Drive+ Link 智慧電子後視鏡」，強化行車紀錄與盲區安全',
     ]},
    {brand:'NISSAN', title:'X-Trail 經典版「免費越級領航」特仕專案', type:'特仕',
     points:[
       '接續櫻花特仕車熱潮，針對主力 SUV X-Trail 經典版釋出限量 30 台的特仕升等',
       '舊換新 99.9 萬，免加價直接升級高階「領航版」的安全與便利科技（前方偵測、中控導航升級）',
       '加贈 4 萬元配件金',
     ]},
    {brand:'FORD', title:'2026 年式美製跑車 Mustang 提前預接', type:'預售',
     points:[
       '受惠於「ART 台美對等貿易協定」美製車預期政策，全車系打出相當具競爭力的優惠「立享價」',
     ]},
  ]},
  {ym:'2026-05', label:'5月', items:[
    {brand:'FORD', title:'Territory「Legend 66 無界版」黑化特仕車', type:'特仕',
     points:[
       '致敬美國 66 號公路百年傳奇',
       '以銷售比例最高、具備 LED 貫穿式識別燈的頂規「油電驚豔版」為基礎升級',
       '5 月底進入最後限量銷售倒數',
     ]},
  ]},
  {ym:'2026-06', label:'6月', items:[
    {brand:'TOYOTA', title:'RAV4 PHEV 新上市', type:'新車',
     points:[
       '插電式油電性能版，具備 329 匹綜效馬力，單一車型定價 149 萬元',
       '進口配備加碼，首波限時免費加贈總價值逾 5 萬元的專屬豪華套件',
     ]},
    {brand:'HONDA', title:'Prelude 新上市', type:'新車',
     points:[
       '雙門電油 GT 跑車，單一規格 174.9 萬元',
       '2026 年式首批 100 台配額已秒殺完售，官方規劃於 8 月展開 2027 年式接單',
     ]},
    {brand:'HONDA', title:'CR-V e:HEV 新上市', type:'新車',
     points:[
       '國產油電版新上市，確立補齊品牌最重要的電油化拼圖',
     ]},
    {brand:'NISSAN', title:'全車系「盲區防護＋Tomica 限量試乘」特仕優惠', type:'特仕',
     points:[
       '配合 6 月競賽月開跑，全車系主打安全配備常態升級',
       '入主國產熱門車款除高額分期外，直接免費特仕升級全方位盲區防護系統',
       '到店試乘送品牌特製限量 Tomica 小汽車',
     ]},
    {brand:'FORD', title:'Territory「旗艦響宴三件組」限時特仕升級', type:'特仕',
     points:[
       '針對常規車型加碼推出萬元限量升級方案',
       '入主即享「專屬行李艙旗艦套件」、「3 年原廠導航圖資更新」與「3 年 MyPaaK 手機鑰匙 2.0 服務」',
     ]},
    {brand:'HYUNDAI', title:'2026 年式改款／特仕 Tucson L', type:'改款',
     points:[
       '南陽實業針對百萬級距主力休旅 Tucson L 進行大動作策略調整，調整部分車型主動安全與科技配備',
       '採取「不增價反降價」的震盪攻勢（部分車型調降達 7 至 10 萬元）以迎戰競爭對手',
     ]},
    {brand:'MAZDA', title:'品牌通路硬體升級與出清倒數', type:'動態',
     points:[
       '第二代 CX-5 進入最終完售倒數',
     ]},
  ]},
  {ym:'2026-07', label:'7月', items:[
    {brand:'TOYOTA', title:'COROLLA 六十週年典藏特仕版', type:'特仕',
     points:[
       '和泰汽車 2026 年最具收藏價值的特仕企劃',
       '涵蓋國產 Corolla Altis、Corolla Cross 與進口 Corolla Sport 三大王牌',
     ]},
    {brand:'NISSAN', title:'X-Trail 粋．月 國產化小改款', type:'改款',
     points:[
       '國產化小改款，89.9 萬起',
     ]},
    {brand:'HONDA', title:'Civic e:HEV 黑翼特仕版', type:'特仕',
     points:[
       '提供專屬黑翼擾流尾翼、黑化後視鏡外蓋與專屬分期優惠，強化運動氛圍',
     ]},
    {brand:'MAZDA', title:'全新第三代大改款 CX-5（7/28 啟動預售）', type:'預售',
     points:[
       '時程：台灣馬自達定於 7 月 28 日舉辦「MAZDA 產品鑑賞會」並同步開啟全台新車預售',
       '亮點：日本 5 月底正式發表後火速導入台灣，換上更霸氣的魂動美學與全面升級的數位職人工藝座艙',
       '動力：經銷端透露，台灣首波導入的動力規格（預期包含 e-SKYACTIV G 輕油電）有望成為全球輸出最強的馬力版本之一（傳有 194 匹馬力）',
     ]},
  ]},
  {ym:'2026-08', label:'8月', items:[
    {brand:'MAZDA', title:'全新第三代 CX-5 上市（8/18）', type:'新車',
     points:[
       '8 月 18 日正式發表，售價 94.9 萬～116.9 萬，9 月 1 日起陸續交付',
       '動力：2.5L 自然進氣搭配 i-ACTIV AWD，全車系標配四輪驅動',
       '承接 7 月 28 日產品鑑賞會啟動的預售動能',
     ]},
    {brand:'VOLKSWAGEN', title:'第二代 T-Roc 發表', type:'新車',
     points:[
       '8 月發表，售價 129.8 萬～131.8 萬，9 月起交車',
       '動力：1.5L eTSI 輕油電',
     ]},
    {brand:'MG', title:'ZS 2027 年式', type:'年式',
     points:[
       '8 月推出新年式，售價 69.9 萬～74.9 萬，9 月持續銷售',
       '動力：1.5L 自然進氣',
     ]},
  ]},
  {ym:'2026-09', label:'9月', items:[
    {brand:'NISSAN', title:'X-Trail e-POWER 小改款（8/29 起預售）', type:'改款',
     points:[
       '9 月發表，8 月 29 日起展開預售；預售價 151.9 萬起，單一旗艦車型',
       '動力：e-POWER 電驅（馬達驅動）搭配 e-4ORCE 四驅',
       '鎖定 RAV4 Hybrid 等進口中大型 SUV 對手',
     ]},
    {brand:'HONDA', title:'ZR-V e:HEV 國內正式發表（9/15）', type:'新車',
     points:[
       '9 月 15 日正式發表',
       '動力：2.0L e:HEV 油電、單一動力前驅設定，油耗約 20.4 km/L',
       '售價待公布，媒體推測約 110～130 萬級距',
     ]},
    {brand:'TOYOTA', title:'Crown Crossover 新年式', type:'年式',
     points:[
       '經銷端已開始接單，預計 9 月登場',
       '動力以油電（HEV）為主；詳細規格與售價待原廠公布',
     ]},
    {brand:'MITSUBISHI', title:'第四代 Outlander', type:'新車',
     points:[
       '9 月下旬發表／上市，售價待公布，媒體推測約 130～160 萬級距',
       '動力：1.5L 渦輪搭配 48V 輕油電，配置 S-AWC 四驅',
       '提供 5 人座與 5＋2 七人座；具備完整 Level 2 ADAS',
     ]},
  ]},
  {ym:'2026-Q4', label:'第4季', items:[
    {brand:'NISSAN', title:'Qashqai e-Power', type:'新車',
     points:[
       '歐風跨界休旅，確認於第四季採進口身分重磅在台發表，搭載最新第三代油電技術',
     ]},
    {brand:'TOYOTA', title:'Crown Sport 導入評估 ＆ Corolla Cross 新年式', type:'動態',
     points:[
       '跨界運動美學跑旅 Crown Sport 持續評估導入中',
       '暢銷國產神車 Corolla Cross 釋出新年式調整資訊',
     ]},
    {brand:'HONDA', title:'ZR-V e:HEV Black Style ＆ Prelude 2027 Limited Edition', type:'預告',
     points:[
       'ZR-V e:HEV Black Style：海外主打燻黑輪圈與運動黑化外觀，國內有望在上市發表時同步列為首波特仕選配',
       'Prelude 2027 Limited Edition：首批 100 台已在台售罄，日本官方定於 8 月 20 日發表，台灣後續配額與時程待公布',
     ]},
    {brand:'HYUNDAI', title:'全新國產大改款壓軸（Q4 登場）', type:'新車',
     points:[
       '落實南陽實業「一年一款新國產車」承諾，預計於第四季發表',
       '高機率為目前已在台灣道路上被捕獲測試車身影的大改款新世代 Venue 跨界休旅',
     ]},
    {brand:'MAZDA', title:'新年式改款 MX-5 / Roadster（預計秋季導入）', type:'年式',
     points:[
       '日本於 6 月發表 Roadster 小改款並規畫於 9 月上市，台灣已在年初先行展開「正 2026 年式接單」',
       '預計年底前正式交付，升級全新車色、多項安全防護並微調操控性能的 FR 經典敞篷跑車',
     ]},
  ]},
];

// 供「品牌整合時間軸」tooltip 使用的扁平結構（自動由 LAUNCH_2026 產生，勿手動維護）
const LAUNCH_CALENDAR = LAUNCH_2026.flatMap(g =>
  g.items.map(it => ({ym: g.ym, brand: it.brand, model: it.title, type: it.type, status: ''}))
);
