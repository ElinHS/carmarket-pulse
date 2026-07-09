// ⚠ 本檔為 index.html 抽出的純資料檔，需在 index.html 主程式之前載入。
// 每月更新資料時只需修改本檔，不必動 index.html 的程式邏輯。

// 資料來源：Nielsen AdIntel Q1 2026（各月分攤估算，全季總數已確認）
const Q1_AD={
  HYUNDAI:{
    jan:{sp:14500, imp:14000, topCreative:'MUFASA Display 多版位', topCreativeNote:'MUFASA 上市蜜月期，全面鋪版曝光'},
    feb:{sp:13200, imp:12500, topCreative:'TUCSON L 客車版促銷', topCreativeNote:'春節淡季維持基本盤'},
    mar:{sp:15576, imp:13174, topCreative:'VENUE YouTube 影音', topCreativeNote:'VENUE 影片占比39%，精準年輕客群'},
    q1:{sp:43276, imp:39674, topCreative:'MUFASA 全季主力', topCreativeNote:'296萬集中MUFASA，多車款並打策略'},
  },
  FORD:{
    jan:{sp:11200, imp:8000, topCreative:'Territory 上市社群操作', topCreativeNote:'12月上市後蜜月期延續，迷因破圈'},
    feb:{sp:9800,  imp:7200, topCreative:'Territory Mobile01+自由時報', topCreativeNote:'3C科技族群精準版位'},
    mar:{sp:9874,  imp:6051, topCreative:'Territory Mobile01 300x250', topCreativeNote:'穩定維持中等規模展示廣告，靠口碑擴散'},
    q1:{sp:30874, imp:21251, topCreative:'Territory 全季主力', topCreativeNote:'308萬 99% 集中 Territory，單車重押策略'},
  },
  HONDA:{
    jan:{sp:900,  imp:1300, topCreative:'全車系品牌整合', topCreativeNote:'0利率+5年保固標準組合'},
    feb:{sp:850,  imp:1100, topCreative:'CR-V 完售壓軸', topCreativeNote:'出清汽油版，準備 Q2 油電改款'},
    mar:{sp:984,  imp:3754, topCreative:'UDN 1905x400 大橫幅 2,547萬次', topCreativeNote:'3月高成效第1名，單一素材創造巨量曝光，但受限等新車效應'},
    q1:{sp:2734,  imp:3754, topCreative:'UDN 全版面橫幅', topCreativeNote:'少花多效，CPM 73元全場最優'},
  },
  TOYOTA:{
    jan:{sp:330,  imp:380, topCreative:'Corolla Cross 0利率', topCreativeNote:'CC 靠品牌勢能自主運轉，廣告輔助'},
    feb:{sp:280,  imp:280, topCreative:'Vios/Altis 0利率', topCreativeNote:''},
    mar:{sp:339,  imp:926, topCreative:'RAV4 Mobile01 破億曝光', topCreativeNote:'新款 RAV4 防禦型聯播網廣告，破億次曝光'},
    q1:{sp:949,   imp:1058, topCreative:'RAV4 重點投資', topCreativeNote:'9.5萬花費卻是全場掛牌轉換最高，品牌力驅動'},
  },
  MAZDA:{
    jan:{sp:165,  imp:108, topCreative:'CX-5 7年保固', topCreativeNote:''},
    feb:{sp:170,  imp:104, topCreative:'CX-90 70期0利率', topCreativeNote:''},
    mar:{sp:172,  imp:117, topCreative:'Mazda 3/CX-30 HOMURA 特仕', topCreativeNote:'3月新上市，加配備不加價，月增267%'},
    q1:{sp:507,   imp:329, topCreative:'CX-5 末期收割', topCreativeNote:'精品定位，影片占比26%最高，CPM 154元'},
  },
  NISSAN:{
    jan:{sp:9500, imp:12800, topCreative:'X-Trail+全車系 Display', topCreativeNote:'X-Trail汽油版+全車系為主力，廣告重心偏Display'},
    feb:{sp:9800, imp:11600, topCreative:'X-Trail e-POWER 低月付', topCreativeNote:'e-POWER 2月補上方案，電池保固訴求'},
    mar:{sp:9843, imp:13328,
      topCreative:'Kicks Sakura Yahoo首頁 300x250（曝光624萬）\nKicks Sakura YouTube首頁 640x360影音（曝光518萬）',
      topCreativeNote:'3月高成效排行第6、第8；59.9萬定價帶動掛牌暴增183.9%',
      creativeImg:null // 待上傳截圖
    },
    q1:{sp:29143, imp:37793, topCreative:'Kicks Sakura 定價破局', topCreativeNote:'CPM 77元具競爭力；3月轉向Kicks特仕定價策略，方向正確'},
  },
};

// 促銷方案摘要（從 PROMO 資料提煉）
const Q1_PROMO_SUMMARY={
  HYUNDAI:{
    jan:'低月付 4,999元起 / 40萬40期零利率 / FSK全車藍鑽隔熱紙 / 5年6大系統保固',
    feb:'75.9萬 EASY GO方案 / 電子後視鏡 / FSK隔熱紙',
    mar:'最高補助20萬 / 99.9萬含舊換新（TUCSON）/ 試乘抽世足出國',
    q1:'全季策略：MUFASA 低月付入門 → 3月祭出最高補助20萬大招，補貼力道最強',
  },
  FORD:{
    jan:'Territory 84.9萬起（含舊換新及貨物稅） / 3年導航+手機鑰匙+行李艙套件',
    feb:'同1月方案持續 / 新春試駕抽黃金墜飾',
    mar:'Territory / Kuga 貨物稅最高10萬 / 全民挺棒球試乘抽東京機票',
    q1:'全季策略：Territory 持續收割上市紅利，以貨物稅優惠為核心武器',
  },
  HONDA:{
    jan:'CR-V 汰舊換新100.9萬 / 0利率 / 5年延長保固 / OVO投影機',
    feb:'同1月持續出清 / 春節好運促銷主題',
    mar:'CR-V 完售壓軸 / 最高20萬折扣出清 / HR-V 69.9萬起同套組合',
    q1:'全季策略：特仕車+高額折扣守住空窗期，等待 Q2 e:HEV 改款發動',
  },
  TOYOTA:{
    jan:'80萬30期0利率 / 三星微型投影機 / 5年14萬公里延長保固',
    feb:'貨物稅最高10萬 / 全車系零利率 / 5年延長保固',
    mar:'全車系零利率 / 新 RAV4 汰舊換新99萬起',
    q1:'全季策略：全線0利率為基礎，輔以贈品，靠產品力自主運轉',
  },
  MAZDA:{
    jan:'7年原廠保固 / CX-90 150萬70期0利率 / CX-5 60期高額0利率',
    feb:'7年原廠保固 / 同1月方案持續',
    mar:'全車系88.8萬起 / HOMURA車型新上市 / 指定車型5年保固',
    q1:'全季策略：7年保固作為差異化護城河，末期產品以配備升級而非降價應對',
  },
  NISSAN:{
    jan:'低月付 3,888元（Kicks）/ 5,888元（X-Trail）/ 9,900元（e-POWER）',
    feb:'低月付持續 / 1萬乙式險+盲點套件 / e-POWER 8年電池保固',
    mar:'低月付 3,888元起 / Kicks Sakura特仕版 59.9萬起 / ARIYA 送4萬充電金+4萬配件金',
    q1:'全季策略：低月付為主軸；3月Kicks Sakura定價破局，帶動掛牌暴增183.9%',
  },
};

// 掛牌數（各品牌 Q1 各月，來源：車市觀察報告）
const Q1_REG={
  HYUNDAI:{jan:800, feb:680, mar:900,  q1:2380},
  FORD:   {jan:2845,feb:1215,mar:1257, q1:5317},
  HONDA:  {jan:1252,feb:950, mar:2182, q1:4384},
  TOYOTA: {jan:4604,feb:1800,mar:4674, q1:11078},
  MAZDA:  {jan:281, feb:220, mar:1203, q1:1704},
  NISSAN: {jan:1141,feb:532, mar:1037, q1:2710},
};

const Q1_BRAND_ORDER=['NISSAN','HYUNDAI','FORD','HONDA','MAZDA','TOYOTA'];
const Q1_BRAND_COLORS={NISSAN:'#c8f55a',HYUNDAI:'#a78bfa',FORD:'#60a5fa',HONDA:'#fb7185',MAZDA:'#34d399',TOYOTA:'#f97316'};

