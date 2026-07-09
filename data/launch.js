// ⚠ 本檔為 index.html 抽出的純資料檔，需在 index.html 主程式之前載入。
// 每月更新資料時只需修改本檔，不必動 index.html 的程式邏輯。

// type: 新車/改款/特仕/預售; status: 已上市/預購中/預告/待確認
const LAUNCH_CALENDAR = [
  {ym:'2026-04', brand:'HYUNDAI', model:'TUCSON L 客車版', type:'新車', status:'已上市', note:'總價值最高20萬優惠開賣',
   img:'https://cdn.ettoday.net/images/7776/d7776341.jpg'},
  {ym:'2026-04', brand:'HYUNDAI', model:'VENUE Nordic 北歐版', type:'特仕', status:'已上市', note:'69.9萬起，簡約不簡單',
   img:'https://www.hyundai-motor.com.tw/assets/images/venue-vivid/kv-m.jpg'},
  {ym:'2026-05', brand:'NISSAN', model:'NISSAN Z / Fairlady Z', type:'新車', status:'已上市', note:'05/13發表，Re-shaping 品牌計畫首發，單日聲量244則',
   img:'https://www.hdcarwallpapers.com/walls/nissan_fairlady_z_2026-HD.jpg'},
  {ym:'2026-05', brand:'NISSAN', model:'SAKURA 櫻花特仕版（Kicks/Sentra）', type:'特仕', status:'已上市', note:'5月掛牌註記',
   img:'https://news.u-car.com.tw/cache/pcnews/700-0-0-0-0/64917.jpeg'},
  {ym:'2026-06', brand:'HONDA', model:'CR-V e:HEV 電油版', type:'新車', status:'預購中', note:'94.9萬起搶先預訂，鉅額廣告造勢收集訂單',
   img:'https://image.juksy.com/files/articles/136546/optimized_800_67e50d3ba0b8f.jpg'},
  {ym:'2026-06', brand:'HYUNDAI', model:'TUCSON L 26.5年式 Premium', type:'改款', status:'已上市', note:'Turbo Hybrid 自由時報高密度包版',
   img:'https://www.carnews.com/wp-content/uploads/2024/12/DSC_3799.jpg'},
  {ym:'2026-06', brand:'TOYOTA', model:'Corolla 六十週年典藏版', type:'特仕', status:'已上市', note:'Altis/Cross/Sport 全系列特仕',
   img:'https://img2.8891.com.tw/AhBVWvbHFn2ZzMxOGZmzw.jpg'},
  {ym:'2026-06', brand:'TOYOTA', model:'RAV4 PHEV', type:'新車', status:'已上市', note:'插電式油電，接單破2,500張，「直上PHEV」效應',
   img:'https://www.hdcarwallpapers.com/walls/2026_toyota_rav4_phev_awd_gr_sport-HD.jpg'},
  {ym:'2026-06', brand:'NISSAN', model:'SAKURA 2026', type:'新車', status:'預告', note:'6月素材已出現「新發售 立即預約試乘」',
   img:'https://carchannel.com/wp-content/uploads/2025/09/nissan-sakura-2026.jpg'},
  {ym:'2026-H2', brand:'NISSAN', model:'Elgrand', type:'新車', status:'待確認', note:'Z 發表期 Google Breakout 詞，13款新車計畫成員',
   img:'https://s1.cdn.autoevolution.com/images/news/2026-nissan-elgrand-specs-performance-photos.jpg'},
  {ym:'2026-H2', brand:'NISSAN', model:'Murano', type:'新車', status:'待確認', note:'13款新車計畫成員，時程待官方確認',
   img:'https://di-uploads-pod26.dealerinspire.com/royalnissan/uploads/2025/06/2026-nissan-murano.jpg'},
];

