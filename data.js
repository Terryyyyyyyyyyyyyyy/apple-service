/**
 * Apple 官方维修价格与服务网点快查 - 核心数据集
 * 数据结构严格匹配 apple_service_lookup.docx 规范
 */

var pricesData = [
  // ================= iPhone 16 系列 =================
  {
    category: "iPhone",
    model: "iPhone 16 Pro Max",
    part: "电池",
    out_of_warranty: 809,
    applecare: 0
  },
  {
    category: "iPhone",
    model: "iPhone 16 Pro Max",
    part: "屏幕维修 (仅正面)",
    out_of_warranty: 3198,
    applecare: 188
  },
  {
    category: "iPhone",
    model: "iPhone 16 Pro Max",
    part: "背面玻璃",
    out_of_warranty: 1548,
    applecare: 188
  },
  {
    category: "iPhone",
    model: "iPhone 16 Pro Max",
    part: "屏幕和背面玻璃",
    out_of_warranty: 3799,
    applecare: 376
  },
  {
    category: "iPhone",
    model: "iPhone 16 Pro Max",
    part: "后置相机",
    out_of_warranty: 1949,
    applecare: 628
  },
  {
    category: "iPhone",
    model: "iPhone 16 Pro Max",
    part: "其他损坏 (整机/主板)",
    out_of_warranty: 5699,
    applecare: 628
  },
  {
    category: "iPhone",
    model: "iPhone 16 Pro",
    part: "电池",
    out_of_warranty: 809,
    applecare: 0
  },
  {
    category: "iPhone",
    model: "iPhone 16 Pro",
    part: "屏幕维修 (仅正面)",
    out_of_warranty: 2698,
    applecare: 188
  },
  {
    category: "iPhone",
    model: "iPhone 16 Pro",
    part: "背面玻璃",
    out_of_warranty: 1298,
    applecare: 188
  },
  {
    category: "iPhone",
    model: "iPhone 16 Pro",
    part: "屏幕和背面玻璃",
    out_of_warranty: 3299,
    applecare: 376
  },
  {
    category: "iPhone",
    model: "iPhone 16 Pro",
    part: "后置相机",
    out_of_warranty: 1949,
    applecare: 628
  },
  {
    category: "iPhone",
    model: "iPhone 16 Pro",
    part: "其他损坏 (整机/主板)",
    out_of_warranty: 5299,
    applecare: 628
  },
  {
    category: "iPhone",
    model: "iPhone 16 Plus",
    part: "电池",
    out_of_warranty: 729,
    applecare: 0
  },
  {
    category: "iPhone",
    model: "iPhone 16 Plus",
    part: "屏幕维修 (仅正面)",
    out_of_warranty: 2698,
    applecare: 188
  },
  {
    category: "iPhone",
    model: "iPhone 16 Plus",
    part: "背面玻璃",
    out_of_warranty: 1548,
    applecare: 188
  },
  {
    category: "iPhone",
    model: "iPhone 16 Plus",
    part: "后置相机",
    out_of_warranty: 1298,
    applecare: 628
  },
  {
    category: "iPhone",
    model: "iPhone 16 Plus",
    part: "其他损坏 (整机/主板)",
    out_of_warranty: 4799,
    applecare: 628
  },
  {
    category: "iPhone",
    model: "iPhone 16",
    part: "电池",
    out_of_warranty: 729,
    applecare: 0
  },
  {
    category: "iPhone",
    model: "iPhone 16",
    part: "屏幕维修 (仅正面)",
    out_of_warranty: 2298,
    applecare: 188
  },
  {
    category: "iPhone",
    model: "iPhone 16",
    part: "背面玻璃",
    out_of_warranty: 1298,
    applecare: 188
  },
  {
    category: "iPhone",
    model: "iPhone 16",
    part: "后置相机",
    out_of_warranty: 1298,
    applecare: 628
  },
  {
    category: "iPhone",
    model: "iPhone 16",
    part: "其他损坏 (整机/主板)",
    out_of_warranty: 4399,
    applecare: 628
  },

  // ================= iPhone 15 系列 =================
  {
    category: "iPhone",
    model: "iPhone 15 Pro Max",
    part: "电池",
    out_of_warranty: 729,
    applecare: 0
  },
  {
    category: "iPhone",
    model: "iPhone 15 Pro Max",
    part: "屏幕维修 (仅正面)",
    out_of_warranty: 3198,
    applecare: 188
  },
  {
    category: "iPhone",
    model: "iPhone 15 Pro Max",
    part: "背面玻璃",
    out_of_warranty: 1548,
    applecare: 188
  },
  {
    category: "iPhone",
    model: "iPhone 15 Pro Max",
    part: "后置相机",
    out_of_warranty: 1949,
    applecare: 628
  },
  {
    category: "iPhone",
    model: "iPhone 15 Pro Max",
    part: "其他损坏 (整机/主板)",
    out_of_warranty: 5699,
    applecare: 628
  },
  {
    category: "iPhone",
    model: "iPhone 15 Pro",
    part: "电池",
    out_of_warranty: 729,
    applecare: 0
  },
  {
    category: "iPhone",
    model: "iPhone 15 Pro",
    part: "屏幕维修 (仅正面)",
    out_of_warranty: 2698,
    applecare: 188
  },
  {
    category: "iPhone",
    model: "iPhone 15 Pro",
    part: "背面玻璃",
    out_of_warranty: 1298,
    applecare: 188
  },
  {
    category: "iPhone",
    model: "iPhone 15 Pro",
    part: "后置相机",
    out_of_warranty: 1749,
    applecare: 628
  },
  {
    category: "iPhone",
    model: "iPhone 15 Pro",
    part: "其他损坏 (整机/主板)",
    out_of_warranty: 5299,
    applecare: 628
  },
  {
    category: "iPhone",
    model: "iPhone 15",
    part: "电池",
    out_of_warranty: 729,
    applecare: 0
  },
  {
    category: "iPhone",
    model: "iPhone 15",
    part: "屏幕维修 (仅正面)",
    out_of_warranty: 2298,
    applecare: 188
  },
  {
    category: "iPhone",
    model: "iPhone 15",
    part: "背面玻璃",
    out_of_warranty: 1298,
    applecare: 188
  },
  {
    category: "iPhone",
    model: "iPhone 15",
    part: "后置相机",
    out_of_warranty: 1298,
    applecare: 628
  },
  {
    category: "iPhone",
    model: "iPhone 15",
    part: "其他损坏 (整机/主板)",
    out_of_warranty: 4399,
    applecare: 628
  },

  // ================= iPhone 14 & 13 系列 =================
  {
    category: "iPhone",
    model: "iPhone 14 Pro",
    part: "电池",
    out_of_warranty: 729,
    applecare: 0
  },
  {
    category: "iPhone",
    model: "iPhone 14 Pro",
    part: "屏幕维修 (仅正面)",
    out_of_warranty: 2698,
    applecare: 188
  },
  {
    category: "iPhone",
    model: "iPhone 14 Pro",
    part: "背面玻璃",
    out_of_warranty: 3598,
    applecare: 628
  },
  {
    category: "iPhone",
    model: "iPhone 14",
    part: "电池",
    out_of_warranty: 729,
    applecare: 0
  },
  {
    category: "iPhone",
    model: "iPhone 14",
    part: "屏幕维修 (仅正面)",
    out_of_warranty: 2298,
    applecare: 188
  },
  {
    category: "iPhone",
    model: "iPhone 14",
    part: "背面玻璃",
    out_of_warranty: 1298,
    applecare: 188
  },
  {
    category: "iPhone",
    model: "iPhone 13 Pro",
    part: "电池",
    out_of_warranty: 729,
    applecare: 0
  },
  {
    category: "iPhone",
    model: "iPhone 13 Pro",
    part: "屏幕维修 (仅正面)",
    out_of_warranty: 2298,
    applecare: 188
  },
  {
    category: "iPhone",
    model: "iPhone 13",
    part: "电池",
    out_of_warranty: 729,
    applecare: 0
  },
  {
    category: "iPhone",
    model: "iPhone 13",
    part: "屏幕维修 (仅正面)",
    out_of_warranty: 2298,
    applecare: 188
  },
  {
    category: "iPhone",
    model: "iPhone SE (第 3 代)",
    part: "电池",
    out_of_warranty: 559,
    applecare: 0
  },
  {
    category: "iPhone",
    model: "iPhone SE (第 3 代)",
    part: "屏幕维修 (仅正面)",
    out_of_warranty: 1049,
    applecare: 188
  },

  // ================= Mac 系列 =================
  {
    category: "Mac",
    model: "MacBook Pro 16 英寸 (M3/M4)",
    part: "电池服务",
    out_of_warranty: 1999,
    applecare: 0
  },
  {
    category: "Mac",
    model: "MacBook Pro 16 英寸 (M3/M4)",
    part: "屏幕损坏更换",
    out_of_warranty: 5998,
    applecare: 799
  },
  {
    category: "Mac",
    model: "MacBook Pro 16 英寸 (M3/M4)",
    part: "主板及其他硬件损坏",
    out_of_warranty: 7499,
    applecare: 2299
  },
  {
    category: "Mac",
    model: "MacBook Pro 14 英寸 (M3/M4)",
    part: "电池服务",
    out_of_warranty: 1999,
    applecare: 0
  },
  {
    category: "Mac",
    model: "MacBook Pro 14 英寸 (M3/M4)",
    part: "屏幕损坏更换",
    out_of_warranty: 5298,
    applecare: 799
  },
  {
    category: "Mac",
    model: "MacBook Pro 14 英寸 (M3/M4)",
    part: "外壳与键盘组件",
    out_of_warranty: 3698,
    applecare: 799
  },
  {
    category: "Mac",
    model: "MacBook Pro 14 英寸 (M3/M4)",
    part: "主板及其他硬件损坏",
    out_of_warranty: 6899,
    applecare: 2299
  },
  {
    category: "Mac",
    model: "MacBook Air 15 英寸 (M2/M3)",
    part: "电池服务",
    out_of_warranty: 1299,
    applecare: 0
  },
  {
    category: "Mac",
    model: "MacBook Air 15 英寸 (M2/M3)",
    part: "屏幕损坏更换",
    out_of_warranty: 3998,
    applecare: 799
  },
  {
    category: "Mac",
    model: "MacBook Air 15 英寸 (M2/M3)",
    part: "主板及其他硬件损坏",
    out_of_warranty: 4899,
    applecare: 2299
  },
  {
    category: "Mac",
    model: "MacBook Air 13 英寸 (M2/M3)",
    part: "电池服务",
    out_of_warranty: 1299,
    applecare: 0
  },
  {
    category: "Mac",
    model: "MacBook Air 13 英寸 (M2/M3)",
    part: "屏幕损坏更换",
    out_of_warranty: 3598,
    applecare: 799
  },
  {
    category: "Mac",
    model: "MacBook Air 13 英寸 (M2/M3)",
    part: "主板及其他硬件损坏",
    out_of_warranty: 4299,
    applecare: 2299
  },
  {
    category: "Mac",
    model: "Mac mini (M2/M4)",
    part: "电源模块更换",
    out_of_warranty: 1199,
    applecare: 799
  },
  {
    category: "Mac",
    model: "Mac mini (M2/M4)",
    part: "主板及其他硬件损坏",
    out_of_warranty: 3299,
    applecare: 2299
  },

  // ================= iPad 系列 =================
  {
    category: "iPad",
    model: "iPad Pro 13 英寸 (M4)",
    part: "电池服务",
    out_of_warranty: 1499,
    applecare: 0
  },
  {
    category: "iPad",
    model: "iPad Pro 13 英寸 (M4)",
    part: "屏幕/整机置换",
    out_of_warranty: 7999,
    applecare: 368
  },
  {
    category: "iPad",
    model: "iPad Pro 11 英寸 (M4)",
    part: "电池服务",
    out_of_warranty: 1199,
    applecare: 0
  },
  {
    category: "iPad",
    model: "iPad Pro 11 英寸 (M4)",
    part: "屏幕/整机置换",
    out_of_warranty: 6899,
    applecare: 368
  },
  {
    category: "iPad",
    model: "iPad Air 11 英寸 (M2)",
    part: "电池服务",
    out_of_warranty: 999,
    applecare: 0
  },
  {
    category: "iPad",
    model: "iPad Air 11 英寸 (M2)",
    part: "整机维修置换",
    out_of_warranty: 3899,
    applecare: 368
  },
  {
    category: "iPad",
    model: "iPad (第 10 代)",
    part: "电池服务",
    out_of_warranty: 799,
    applecare: 0
  },
  {
    category: "iPad",
    model: "iPad (第 10 代)",
    part: "屏幕/整机置换",
    out_of_warranty: 2499,
    applecare: 368
  },
  {
    category: "iPad",
    model: "iPad mini (第 6 代 / A17 Pro)",
    part: "电池服务",
    out_of_warranty: 899,
    applecare: 0
  },
  {
    category: "iPad",
    model: "iPad mini (第 6 代 / A17 Pro)",
    part: "整机维修置换",
    out_of_warranty: 3199,
    applecare: 368
  },

  // ================= Apple Watch 系列 =================
  {
    category: "Apple Watch",
    model: "Apple Watch Ultra 2",
    part: "电池服务",
    out_of_warranty: 809,
    applecare: 0
  },
  {
    category: "Apple Watch",
    model: "Apple Watch Ultra 2",
    part: "屏幕及其他综合维修",
    out_of_warranty: 3998,
    applecare: 628
  },
  {
    category: "Apple Watch",
    model: "Apple Watch Series 10 (46毫米)",
    part: "电池服务",
    out_of_warranty: 729,
    applecare: 0
  },
  {
    category: "Apple Watch",
    model: "Apple Watch Series 10 (46毫米)",
    part: "屏幕及其他综合维修",
    out_of_warranty: 2698,
    applecare: 528
  },
  {
    category: "Apple Watch",
    model: "Apple Watch Series 10 (42毫米)",
    part: "电池服务",
    out_of_warranty: 729,
    applecare: 0
  },
  {
    category: "Apple Watch",
    model: "Apple Watch Series 10 (42毫米)",
    part: "屏幕及其他综合维修",
    out_of_warranty: 2498,
    applecare: 528
  },
  {
    category: "Apple Watch",
    model: "Apple Watch SE (第 2 代)",
    part: "电池服务",
    out_of_warranty: 729,
    applecare: 0
  },
  {
    category: "Apple Watch",
    model: "Apple Watch SE (第 2 代)",
    part: "屏幕及其他综合维修",
    out_of_warranty: 1798,
    applecare: 528
  },

  // ================= AirPods 系列 =================
  {
    category: "AirPods",
    model: "AirPods Pro (第 2 代)",
    part: "单只耳机电池服务",
    out_of_warranty: 399,
    applecare: 0
  },
  {
    category: "AirPods",
    model: "AirPods Pro (第 2 代)",
    part: "无线充电盒电池服务",
    out_of_warranty: 399,
    applecare: 0
  },
  {
    category: "AirPods",
    model: "AirPods Pro (第 2 代)",
    part: "单只耳机损坏更换",
    out_of_warranty: 699,
    applecare: 199
  },
  {
    category: "AirPods",
    model: "AirPods 4 (主动降噪款)",
    part: "单只耳机电池服务",
    out_of_warranty: 379,
    applecare: 0
  },
  {
    category: "AirPods",
    model: "AirPods 4 (主动降噪款)",
    part: "单只耳机损坏更换",
    out_of_warranty: 579,
    applecare: 199
  },
  {
    category: "AirPods",
    model: "AirPods Max",
    part: "电池服务",
    out_of_warranty: 699,
    applecare: 0
  },
  {
    category: "AirPods",
    model: "AirPods Max",
    part: "耳机损坏综合维修",
    out_of_warranty: 2399,
    applecare: 199
  }
];
if (typeof window !== "undefined") window.pricesData = pricesData;

var storesData = [
  {
    "name": "Apple 无锡恒隆广场",
    "type": "Apple Store 直营店",
    "city": "无锡",
    "district": "梁溪区",
    "address": "无锡市梁溪区 人民中路 139 号",
    "phone": "400-617-1325",
    "geo": {
      "lat": 31.574362,
      "lng": 120.297823
    }
  },
  {
    "name": "仲璇 I:DEA－无锡锡东八佰伴店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "无锡",
    "district": "锡山区",
    "address": "江苏省无锡市锡山区东亭街道锡沪路东亭西段1号八佰伴中心L005铺位",
    "phone": "0510-88992602",
    "geo": {
      "lat": 31.583653,
      "lng": 120.353581
    }
  },
  {
    "name": "百邦－江阴店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "江阴",
    "district": "江阴中心区",
    "address": "江苏省无锡市江阴市澄江街道人民中路158号四楼403号",
    "phone": "0510-86873064",
    "geo": {
      "lat": 31.906611,
      "lng": 120.268768
    }
  },
  {
    "name": "Apple 苏州",
    "type": "Apple Store 直营店",
    "city": "苏州",
    "district": "苏州工业园区",
    "address": "苏州市苏州工业园区 苏州中心商场",
    "phone": "400-613-9775",
    "geo": {
      "lat": 31.316167,
      "lng": 120.677169
    }
  },
  {
    "name": "iHub－张家港曼巴特店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "苏州",
    "district": "苏州中心区",
    "address": "江苏省张家港市杨舍镇河西路88号曼巴特第1层1112号商铺",
    "phone": "0512-55375288",
    "geo": {
      "lat": 31.860869,
      "lng": 120.545699
    }
  },
  {
    "name": "仲璇 I:DEA－苏州吴中SM广场店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "苏州",
    "district": "吴中区",
    "address": "江苏省苏州市吴中区吴中⼤道1109号SM城市广场A馆一层A127-A128",
    "phone": "0512-65288236",
    "geo": {
      "lat": 31.213659,
      "lng": 120.593589
    }
  },
  {
    "name": "仲璇 I:DEA－苏州吴江吾悦店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "苏州",
    "district": "吴江区",
    "address": "江苏省苏州市吴江区开平路2188号新城吾悦广场1F-003",
    "phone": "0512-63318603",
    "geo": {
      "lat": 31.137955,
      "lng": 120.615693
    }
  },
  {
    "name": "仲璇 I:DEA－苏州高新永旺店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "苏州",
    "district": "高新区",
    "address": "江苏省苏州市高新区城际路19号1层122号",
    "phone": "0512-65169692",
    "geo": {
      "lat": 31.370292,
      "lng": 120.529704
    }
  },
  {
    "name": "天音－苏州龙湖胥江天街店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "苏州",
    "district": "姑苏区",
    "address": "江苏省苏州市姑苏区劳动路777号胥江天街商场南馆A-4F-49,A-4F-50,A-4F-51",
    "phone": "0512-6515816665158266",
    "geo": {
      "lat": 31.290666,
      "lng": 120.597235
    }
  },
  {
    "name": "神汇－苏州永旺店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "苏州",
    "district": "工业园区",
    "address": "江苏省苏州市工业园区钟南街238号1层108商铺",
    "phone": "0512-68951016",
    "geo": {
      "lat": 31.322257,
      "lng": 120.758096
    }
  },
  {
    "name": "百邦－常熟店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "常熟",
    "district": "常熟中心区",
    "address": "江苏省苏州市常熟市海虞北路45号世界贸易中心B幢3楼0316-0318",
    "phone": "0512-52137537",
    "geo": {
      "lat": 31.676908,
      "lng": 120.75429
    }
  },
  {
    "name": "天音－昆山金鹰国际购物中心店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "昆山",
    "district": "昆山中心区",
    "address": "江苏省苏州市昆山市珠江中路198号昆山金鹰购物中心B05层B-F5035",
    "phone": "0512-57397789",
    "geo": {
      "lat": 31.375815,
      "lng": 120.973119
    }
  },
  {
    "name": "佩知－常州新北万达店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "常州",
    "district": "新北区",
    "address": "江苏省常州市新北区通江中路88号万达广场1层1027B",
    "phone": "0519-835555350519-83550114",
    "geo": {
      "lat": 31.819092,
      "lng": 119.970792
    }
  },
  {
    "name": "佩知－常州龙城天街店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "常州",
    "district": "钟楼区",
    "address": "江苏省常州市钟楼区勤业路295号龙湖常州龙城天街1层44A",
    "phone": "0519-888021690519-88802160",
    "geo": {
      "lat": 31.793851,
      "lng": 119.91512
    }
  },
  {
    "name": "美承－常州江南环球港店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "常州",
    "district": "新北区",
    "address": "江苏省常州市新北区通江中路598号江南环球港一层1035-1036号店铺",
    "phone": "0519-81005307",
    "geo": {
      "lat": 31.841244,
      "lng": 119.979275
    }
  },
  {
    "name": "Apple 新街口",
    "type": "Apple Store 直营店",
    "city": "南京",
    "district": "玄武区",
    "address": "南京市玄武区中山路 100 号",
    "phone": "400-617-1334",
    "geo": {
      "lat": 32.046185,
      "lng": 118.78461
    }
  },
  {
    "name": "Apple 玄武湖",
    "type": "Apple Store 直营店",
    "city": "南京",
    "district": "鼓楼区",
    "address": "南京市鼓楼区中央路 201 号",
    "phone": "400-613-9772",
    "geo": {
      "lat": 32.072666,
      "lng": 118.783395
    }
  },
  {
    "name": "Apple 虹悦城",
    "type": "Apple Store 直营店",
    "city": "南京",
    "district": "雨花台区",
    "address": "南京市雨花台区应天大街 619 号",
    "phone": "400-617-1332",
    "geo": {
      "lat": 32.009365,
      "lng": 118.764996
    }
  },
  {
    "name": "仲璇 I:DEA－南京仙林金鹰店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "南京",
    "district": "栖霞区",
    "address": "江苏省南京市栖霞区学津路1号金鹰湖滨天地B区1层1013室",
    "phone": "025-83463397",
    "geo": {
      "lat": 32.101062,
      "lng": 118.922737
    }
  },
  {
    "name": "仲璇 I:DEA－南京燕子矶万象汇店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "南京",
    "district": "栖霞区",
    "address": "江苏省南京市栖霞区栖霞大道108号万象汇A 馆一层L1059A",
    "phone": "025-83156993",
    "geo": {
      "lat": 32.119929,
      "lng": 118.834161
    }
  },
  {
    "name": "直信创邺－南京鼓楼店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "南京",
    "district": "鼓楼区",
    "address": "江苏省南京市鼓楼区中央路19号金峰大厦2808室",
    "phone": "025-83176731831767328317673483176735",
    "geo": {
      "lat": 32.062218,
      "lng": 118.783574
    }
  },
  {
    "name": "Apple 七宝",
    "type": "Apple Store 直营店",
    "city": "上海",
    "district": "闵行区",
    "address": "上海市闵行区漕宝路 3366 号 七宝领展广场",
    "phone": "400-613-9773",
    "geo": {
      "lat": 31.154593,
      "lng": 121.349805
    }
  },
  {
    "name": "Apple 上海环贸 iapm",
    "type": "Apple Store 直营店",
    "city": "上海",
    "district": "徐汇区",
    "address": "上海市徐汇区淮海中路 999 号 环贸 iapm 商场",
    "phone": "400-617-1324",
    "geo": {
      "lat": 31.215827,
      "lng": 121.457681
    }
  },
  {
    "name": "Apple 五角场",
    "type": "Apple Store 直营店",
    "city": "上海",
    "district": "杨浦区",
    "address": "上海市杨浦区翔殷路 1099 号 上海合生汇",
    "phone": "400-613-9771",
    "geo": {
      "lat": 31.299981,
      "lng": 121.517403
    }
  },
  {
    "name": "Apple 南京东路",
    "type": "Apple Store 直营店",
    "city": "上海",
    "district": "黄浦区",
    "address": "上海市黄浦区南京东路 300 号",
    "phone": "400-663-9988",
    "geo": {
      "lat": 31.237586,
      "lng": 121.483976
    }
  },
  {
    "name": "Apple 浦东",
    "type": "Apple Store 直营店",
    "city": "上海",
    "district": "浦东新区",
    "address": "上海市浦东新区陆家嘴世纪大道 8 号 上海国金中心 IFC 商场 LG2－27 号店铺",
    "phone": "400-617-1305",
    "geo": {
      "lat": 31.237363,
      "lng": 121.501386
    }
  },
  {
    "name": "Apple 环球港",
    "type": "Apple Store 直营店",
    "city": "上海",
    "district": "普陀区",
    "address": "上海市普陀区中山北路 3300 号",
    "phone": "400-617-1335",
    "geo": {
      "lat": 31.232052,
      "lng": 121.411833
    }
  },
  {
    "name": "Apple 静安",
    "type": "Apple Store 直营店",
    "city": "上海",
    "district": "静安区",
    "address": "上海市静安区南京西路 1699 号",
    "phone": "400-000-3235",
    "geo": {
      "lat": 31.222821,
      "lng": 121.445653
    }
  },
  {
    "name": "Apple 香港广场",
    "type": "Apple Store 直营店",
    "city": "上海",
    "district": "黄浦区",
    "address": "上海市黄浦区淮海中路 282 号 香港广场北座",
    "phone": "400-617-1312",
    "geo": {
      "lat": 31.223602,
      "lng": 121.47446
    }
  },
  {
    "name": "iGallery－上海吴泾宝龙广场店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "上海",
    "district": "闵行区",
    "address": "上海市闵行区尚义路39弄3号1层152-b,153-a,153-b室",
    "phone": "021-60453394",
    "geo": {
      "lat": 31.037809,
      "lng": 121.451338
    }
  },
  {
    "name": "仲璇 I:DEA－上海宝山日月光店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "上海",
    "district": "宝山区",
    "address": "上海市宝山区沪太路1933号一层H-106",
    "phone": "021-56550793",
    "geo": {
      "lat": 31.294928,
      "lng": 121.417254
    }
  },
  {
    "name": "仲璇 I:DEA－上海森兰花园城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "上海",
    "district": "浦东新区",
    "address": "上海市浦东新区启帆路517号L1层132号",
    "phone": "021-56420621",
    "geo": {
      "lat": 31.313374,
      "lng": 121.591341
    }
  },
  {
    "name": "仲璇 I:DEA－上海漕河泾印象城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "上海",
    "district": "徐汇区",
    "address": "上海市徐汇区古美路1520号漕河泾印象城L1-18B",
    "phone": "021-65127721",
    "geo": {
      "lat": 31.161801,
      "lng": 121.400348
    }
  },
  {
    "name": "仲璇 I:DEA－上海百联嘉定店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "上海",
    "district": "嘉定区",
    "address": "上海市嘉定区澄浏中路3128弄26号1层001室",
    "phone": "021-56333285",
    "geo": {
      "lat": 31.386662,
      "lng": 121.278335
    }
  },
  {
    "name": "仲璇 I:DEA－上海龙湖虹桥天街店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "上海",
    "district": "闵行区",
    "address": "上海市闵行区申长路869号一层139",
    "phone": "021-56067390",
    "geo": {
      "lat": 31.192184,
      "lng": 121.31344
    }
  },
  {
    "name": "佩知－上海松江印象城",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "上海",
    "district": "松江区",
    "address": "上海市松江区广富林路1788弄松江印象城L124-1 ( Mac 产品提供送修服务 )",
    "phone": "021-37688659",
    "geo": {
      "lat": 31.061326,
      "lng": 121.222345
    }
  },
  {
    "name": "佩知－上海青浦吾悦广场－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "上海",
    "district": "青浦区",
    "address": "上海市青浦区淀山湖大道218号吾悦广场1F-032-1商铺",
    "phone": "021-59237658",
    "geo": {
      "lat": 31.143729,
      "lng": 121.093576
    }
  },
  {
    "name": "百邦－上海金桥国际商业广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "上海",
    "district": "浦东新区",
    "address": "上海市浦东新区张杨路3611弄金桥国际商业广场6座1009单元",
    "phone": "021-56528702",
    "geo": {
      "lat": 31.255629,
      "lng": 121.579487
    }
  },
  {
    "name": "直信创邺－上海徐家汇店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "上海",
    "district": "徐汇区",
    "address": "上海市徐汇区斜土路2570号1号楼10楼1018A单元",
    "phone": "021-33680030",
    "geo": {
      "lat": 31.188358,
      "lng": 121.446131
    }
  },
  {
    "name": "酷动－上海嘉定南翔印象城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "上海",
    "district": "嘉定区",
    "address": "上海市嘉定区南翔镇陈翔路2299号南翔印象城L1-47",
    "phone": "021-69120889",
    "geo": {
      "lat": 31.304749,
      "lng": 121.305907
    }
  },
  {
    "name": "Apple 杭州万象城",
    "type": "Apple Store 直营店",
    "city": "杭州",
    "district": "上城区",
    "address": "杭州市上城区富春路 701 号",
    "phone": "400-617-1304",
    "geo": {
      "lat": 30.252037,
      "lng": 120.213813
    }
  },
  {
    "name": "Apple 西湖",
    "type": "Apple Store 直营店",
    "city": "杭州",
    "district": "上城区",
    "address": "杭州市上城区平海路 100 号",
    "phone": "400-617-1302",
    "geo": {
      "lat": 30.254203,
      "lng": 120.1634
    }
  },
  {
    "name": "佩知－杭州杭州大厦店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "杭州",
    "district": "下城区",
    "address": "浙江省杭州市下城区武林广场11号杭州大厦中央广场B134",
    "phone": "0571-8693529586935219",
    "geo": {
      "lat": 30.271301,
      "lng": 120.162705
    }
  },
  {
    "name": "佩知－杭州滨江宝龙城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "杭州",
    "district": "滨江区",
    "address": "浙江省杭州市滨江区滨盛路3867号滨江宝龙城市广场3幢1楼M1-L1-053",
    "phone": "0571-87836528",
    "geo": {
      "lat": 30.186578,
      "lng": 120.167729
    }
  },
  {
    "name": "品丰科技－杭州下沙店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "杭州",
    "district": "富阳区",
    "address": "浙江省杭州市下沙街道金沙大道97号金沙印象城一层135号 ( Mac 产品提供送修服务 )",
    "phone": "0571-85181086",
    "geo": {
      "lat": 30.308527,
      "lng": 120.336694
    }
  },
  {
    "name": "品丰科技－杭州临平银泰城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "杭州",
    "district": "临平区",
    "address": "浙江省杭州市临平区世纪大道西1号临平银泰城01038号商铺 （Mac产品提供送修服务）",
    "phone": "0571-87605529",
    "geo": {
      "lat": 30.40517,
      "lng": 120.30213
    }
  },
  {
    "name": "品丰科技－杭州城西银泰店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "杭州",
    "district": "拱墅区",
    "address": "浙江省杭州市拱墅区丰潭路380号银泰城1幢1F059商铺 ( Mac 产品提供送修服务 )",
    "phone": "0571-85390772",
    "geo": {
      "lat": 30.298768,
      "lng": 120.10714
    }
  },
  {
    "name": "品丰科技－杭州奥体印象城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "杭州",
    "district": "萧山区",
    "address": "浙江省杭州市萧山区盈丰街道飞虹路1408号印象城1层30号 ( Mac 产品提供送修服务 )",
    "phone": "0571-56121829",
    "geo": {
      "lat": 30.223509,
      "lng": 120.253125
    }
  },
  {
    "name": "品丰科技－杭州西溪店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "杭州",
    "district": "余杭区",
    "address": "浙江省杭州市余杭区五常街道五常大道1号西溪印象城P1-01-35号",
    "phone": "0571-88031257",
    "geo": {
      "lat": 30.247945,
      "lng": 120.052133
    }
  },
  {
    "name": "天音－杭州黄龙国际中心店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "杭州",
    "district": "西湖区",
    "address": "浙江省杭州市西湖区学院路77号黄龙国际中心AB楼231室 ( Mac 产品提供送修服务 )",
    "phone": "0571-87352758",
    "geo": {
      "lat": 30.276228,
      "lng": 120.128866
    }
  },
  {
    "name": "百邦－杭州解百店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "杭州",
    "district": "上城区",
    "address": "浙江省杭州市上城区解放路251号1幢解百B座3楼321室商铺",
    "phone": "0571-87999858",
    "geo": {
      "lat": 30.249779,
      "lng": 120.164826
    }
  },
  {
    "name": "直信创邺－杭州西溪银泰店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "杭州",
    "district": "西湖区",
    "address": "浙江省杭州市西湖区西溪银泰城2F02003",
    "phone": "0571-88361591",
    "geo": {
      "lat": 30.293321,
      "lng": 120.076599
    }
  },
  {
    "name": "酷动－杭州乐堤港店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "杭州",
    "district": "拱墅区",
    "address": "浙江省杭州市拱墅区丽水路58号远洋乐堤港1FA128",
    "phone": "0571-86929485",
    "geo": {
      "lat": 30.304957,
      "lng": 120.142284
    }
  },
  {
    "name": "酷动－杭州萧山银隆百货店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "杭州",
    "district": "萧山区",
    "address": "浙江省杭州市萧山区北干街道市心中路268号银隆百货B座一层B116-1号 ( Mac 产品提供送修服务 )",
    "phone": "0571-86050309",
    "geo": {
      "lat": 30.170562,
      "lng": 120.268092
    }
  },
  {
    "name": "Apple 天一广场",
    "type": "Apple Store 直营店",
    "city": "宁波",
    "district": "海曙区",
    "address": "宁波市海曙区碶闸街 155 号 天一广场",
    "phone": "400-613-9774",
    "geo": {
      "lat": 29.870195,
      "lng": 121.553484
    }
  },
  {
    "name": "品丰科技－宁波万象城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "宁波",
    "district": "江北区",
    "address": "浙江省宁波市江北区清河路265号万象城L1层L111号",
    "phone": "0574-87286215",
    "geo": {
      "lat": 29.897883,
      "lng": 121.551965
    }
  },
  {
    "name": "品丰科技－宁波印象城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "宁波",
    "district": "鄞州区",
    "address": "浙江省宁波市鄞州区钱湖北路288号鄞州印象城01-08A商铺 ( Mac 产品提供送修服务 )",
    "phone": "0574-88383193",
    "geo": {
      "lat": 29.832862,
      "lng": 121.566744
    }
  },
  {
    "name": "百邦－宁波复悦城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "宁波",
    "district": "海曙区",
    "address": "浙江省宁波市海曙区南站西路108号复悦城2F-09商铺",
    "phone": "0574-87748755",
    "geo": {
      "lat": 29.866109,
      "lng": 121.536121
    }
  },
  {
    "name": "Apple 三里屯",
    "type": "Apple Store 直营店",
    "city": "北京",
    "district": "朝阳区",
    "address": "北京市朝阳区三里屯路 19 号院 三里屯太古里南区 7 号楼",
    "phone": "400-617-1363",
    "geo": {
      "lat": 39.934782,
      "lng": 116.453687
    }
  },
  {
    "name": "Apple 北京荟聚",
    "type": "Apple Store 直营店",
    "city": "北京",
    "district": "大兴区",
    "address": "北京市大兴区欣宁街 15 号 北京荟聚 1 层",
    "phone": "400-009-6560",
    "geo": {
      "lat": 39.78787,
      "lng": 116.327194
    }
  },
  {
    "name": "Apple 华贸购物中心",
    "type": "Apple Store 直营店",
    "city": "北京",
    "district": "朝阳区",
    "address": "北京市朝阳区建国路 81 号华贸购物中心",
    "phone": "400-617-1210",
    "geo": {
      "lat": 39.909443,
      "lng": 116.47952
    }
  },
  {
    "name": "Apple 朝阳大悦城",
    "type": "Apple Store 直营店",
    "city": "北京",
    "district": "朝阳区",
    "address": "北京市朝阳区朝阳北路 101 号",
    "phone": "400-617-1284",
    "geo": {
      "lat": 39.924736,
      "lng": 116.51838
    }
  },
  {
    "name": "Apple 王府井",
    "type": "Apple Store 直营店",
    "city": "北京",
    "district": "东城区",
    "address": "北京市东城区王府井大街 138 号北京 apm",
    "phone": "400-617-1205",
    "geo": {
      "lat": 39.915142,
      "lng": 116.411789
    }
  },
  {
    "name": "Apple 西单大悦城",
    "type": "Apple Store 直营店",
    "city": "北京",
    "district": "西城区",
    "address": "北京市西城区西单北大街 131 号大悦城",
    "phone": "400-617-1204",
    "geo": {
      "lat": 39.910559,
      "lng": 116.373508
    }
  },
  {
    "name": "DREAMROOM－北京五棵松华熙店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "北京",
    "district": "海淀区",
    "address": "北京市海淀区复兴路69号16幢-1层-101-079复兴路69号16幢-1层-101-079",
    "phone": "010-86226850",
    "geo": {
      "lat": 39.908627,
      "lng": 116.277255
    }
  },
  {
    "name": "DREAMROOM－北京合生汇店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "北京",
    "district": "朝阳区",
    "address": "北京市朝阳区西大望路甲22号院1号楼子-44A&44B&45",
    "phone": "010-67721240",
    "geo": {
      "lat": 39.893998,
      "lng": 116.479398
    }
  },
  {
    "name": "DREAMROOM－北京大兴大族店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "北京",
    "district": "大兴区",
    "address": "北京市大兴区经济技术开发区荣华南路2号院8号楼1层F1-13",
    "phone": "010-86226859",
    "geo": {
      "lat": 39.792003,
      "lng": 116.511727
    }
  },
  {
    "name": "DREAMROOM－北京房山熙悦店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "北京",
    "district": "房山区",
    "address": "北京市房山区长于大街28号院3号楼A馆-1F-12 ( Mac 产品提供送修服务 )",
    "phone": "010-69361924",
    "geo": {
      "lat": 39.732563,
      "lng": 116.184776
    }
  },
  {
    "name": "DREAMROOM－北京西三旗万象汇店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "北京",
    "district": "海淀区",
    "address": "北京市海淀区建材城东路33号院1号楼一层L114、L115",
    "phone": "010-56352996",
    "geo": {
      "lat": 40.061331,
      "lng": 116.366001
    }
  },
  {
    "name": "DREAMROOM－北京长楹天街店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "北京",
    "district": "朝阳区",
    "address": "北京市朝阳区常通镇常通路2号院A栋-1F-04",
    "phone": "010-85707551",
    "geo": {
      "lat": 39.92511,
      "lng": 116.598093
    }
  },
  {
    "name": "iGallery－北京世贸天阶店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "北京",
    "district": "朝阳区",
    "address": "北京市朝阳区光华路9号2号楼1层商业内L114号号2号楼1层商业内L114号",
    "phone": "010-65872668",
    "geo": {
      "lat": 39.916737,
      "lng": 116.452618
    }
  },
  {
    "name": "iGallery－北京中关村大融城店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "北京",
    "district": "海淀区",
    "address": "北京市海淀区中关村大街15-9号-1层-101",
    "phone": "010-84862734",
    "geo": {
      "lat": 39.98007,
      "lng": 116.314534
    }
  },
  {
    "name": "iGallery－北京祥云小镇店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "北京",
    "district": "顺义区",
    "address": "北京市顺义区安泰大街6号院12号楼1层103号",
    "phone": "010-82308335",
    "geo": {
      "lat": 40.086604,
      "lng": 116.538373
    }
  },
  {
    "name": "iHub－北京富力中心店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "北京",
    "district": "朝阳区",
    "address": "北京市朝阳区东三环中路双井富力中心写字楼一层A102内148-1号商铺",
    "phone": "13811723394",
    "geo": {
      "lat": 39.89653,
      "lng": 116.460445
    }
  },
  {
    "name": "天音－北京金城中心店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "北京",
    "district": "通州区",
    "address": "北京市通州区翠景北里21号金成中心1408室",
    "phone": "010-68026400",
    "geo": {
      "lat": 39.889365,
      "lng": 116.65912
    }
  },
  {
    "name": "百邦－北京中关村鼎好店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "北京",
    "district": "海淀区",
    "address": "北京市海淀区海淀大街3号鼎好DH3大厦B座地下二层206A",
    "phone": "010-61625115",
    "geo": {
      "lat": 39.977426,
      "lng": 116.307911
    }
  },
  {
    "name": "百邦－北京天通苑店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "北京",
    "district": "昌平区",
    "address": "北京市昌平区立汤路186号龙德广场购物中心4层F4142、F4143",
    "phone": "010-84365262",
    "geo": {
      "lat": 40.059732,
      "lng": 116.415562
    }
  },
  {
    "name": "直信创邺－北京上地店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "北京",
    "district": "海淀区",
    "address": "北京市海淀区安宁庄西路9号院29号楼金泰富地大厦一层116室",
    "phone": "010-85175288",
    "geo": {
      "lat": 40.042478,
      "lng": 116.315717
    }
  },
  {
    "name": "直信创邺－北京通州店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "北京",
    "district": "通州区",
    "address": "北京市通州区新华西街58号万达广场B座802室",
    "phone": "010-80570784",
    "geo": {
      "lat": 39.905078,
      "lng": 116.640839
    }
  },
  {
    "name": "英龙华辰－北京国贸店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "北京",
    "district": "朝阳区",
    "address": "北京市朝阳区建国门外大街1号国贸商城3期地下二层3B213",
    "phone": "010-65059860",
    "geo": {
      "lat": 39.912173,
      "lng": 116.459161
    }
  },
  {
    "name": "英龙华辰－北京顺义欧陆店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "北京",
    "district": "顺义区",
    "address": "北京市顺义区天竺镇裕翔路99号欧陆时尚购物中心L117号 ( Mac 产品提供送修服务 )",
    "phone": "010-80464885",
    "geo": {
      "lat": 40.066941,
      "lng": 116.547592
    }
  },
  {
    "name": "Apple 前海壹方城",
    "type": "Apple Store 直营店",
    "city": "深圳",
    "district": "宝安区",
    "address": "深圳市宝安区新湖路 99 号 前海壹方城 L1 层",
    "phone": "400-002-7805",
    "geo": {
      "lat": 22.552292,
      "lng": 113.888401
    }
  },
  {
    "name": "Apple 深圳万象城",
    "type": "Apple Store 直营店",
    "city": "深圳",
    "district": "罗湖区",
    "address": "深圳市罗湖区宝安南路 1881 号 深圳万象城（一期）B1 层",
    "phone": "400-050-1588",
    "geo": {
      "lat": 22.541535,
      "lng": 114.110748
    }
  },
  {
    "name": "Apple 深圳益田假日广场",
    "type": "Apple Store 直营店",
    "city": "深圳",
    "district": "南山区",
    "address": "深圳市南山区深南大道 9028 号益田假日广场",
    "phone": "400-617-1254",
    "geo": {
      "lat": 22.536878,
      "lng": 113.975969
    }
  },
  {
    "name": "天音－深圳宝安海雅店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "深圳",
    "district": "宝安区",
    "address": "广东省深圳市宝安区宝城5区建安一路99号宝安海雅缤纷城五楼L513号商铺 ( Mac 产品提供送修服务 )",
    "phone": "0755-26573011",
    "geo": {
      "lat": 22.559897,
      "lng": 113.905927
    }
  },
  {
    "name": "天音－深圳龙华宝银坊店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "深圳",
    "district": "龙华区",
    "address": "广东省深圳市龙华区龙华街道景龙社区和平路289号富通天骏L2-26，27，28，29",
    "phone": "0755-27858423",
    "geo": {
      "lat": 22.650534,
      "lng": 114.022828
    }
  },
  {
    "name": "尚派正品－深圳同泰时代广场店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "深圳",
    "district": "宝安区",
    "address": "广东省深圳市宝安区福海街道桥头社区同泰总部产业园厂房1栋同泰时代中心1栋L1层39",
    "phone": "0755-23001653",
    "geo": {
      "lat": 22.678388,
      "lng": 113.80517
    }
  },
  {
    "name": "新联－深圳皇庭广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "深圳",
    "district": "福田区",
    "address": "广东省深圳市福田区福安社区福华三路118号皇庭国商购物广场L2-36/36A ( Mac 产品提供送修服务 )",
    "phone": "0755-82722417",
    "geo": {
      "lat": 22.53362,
      "lng": 114.059844
    }
  },
  {
    "name": "畅航－深圳罗湖益田假日广场店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "深圳",
    "district": "罗湖区",
    "address": "广东省深圳市罗湖区华丽路益田假日广场L1-50铺铺",
    "phone": "0755-22322901",
    "geo": {
      "lat": 22.554575,
      "lng": 114.131929
    }
  },
  {
    "name": "畅航－深圳领展店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "深圳",
    "district": "福田区",
    "address": "广东省深圳市福田区福华一路3号领展中心城L层RL1030B铺 ( Mac 产品提供送修服务 )",
    "phone": "0755-88303192",
    "geo": {
      "lat": 22.535155,
      "lng": 114.059005
    }
  },
  {
    "name": "百邦－深圳龙岗珠江国际店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "深圳",
    "district": "龙岗区",
    "address": "广东省深圳市龙岗区龙翔大道9009号珠江国际中心11楼1106室",
    "phone": "0755-28351166",
    "geo": {
      "lat": 22.722707,
      "lng": 114.250281
    }
  },
  {
    "name": "直信创邺－ 深圳中银大厦店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "深圳",
    "district": "福田区",
    "address": "广东省深圳市福田区彩田路5015号中银大厦B座20楼20Cb-A8（莲花村地铁站A2出口）",
    "phone": "0755-83769657",
    "geo": {
      "lat": 22.547119,
      "lng": 114.067322
    }
  },
  {
    "name": "酷动－深圳万丰海岸城店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "深圳",
    "district": "宝安区",
    "address": "广东省深圳市宝安区新桥街道南环路与中心路交界处万丰海岸城玺园3栋一层F126",
    "phone": "0755-23001723",
    "geo": {
      "lat": 22.712222,
      "lng": 113.822487
    }
  },
  {
    "name": "酷动－深圳后浪新天地店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "深圳",
    "district": "龙华区",
    "address": "广东省深圳市龙华区大浪街道同胜社区同富裕工业园第9栋1-2 层HLS09L1001、HLS09L2181号铺",
    "phone": "0755-27743603",
    "geo": {
      "lat": 22.674637,
      "lng": 113.995379
    }
  },
  {
    "name": "酷动－深圳观澜湖新城店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "深圳",
    "district": "龙华区",
    "address": "广东省深圳市龙华区观澜街道高尔夫大道8号观澜湖新城 MH1层L136号",
    "phone": "0755-27614864",
    "geo": {
      "lat": 22.722104,
      "lng": 114.075226
    }
  },
  {
    "name": "酷动－深圳龙华壹方城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "深圳",
    "district": "龙华区",
    "address": "广东省深圳市龙华区龙华街道景龙社区龙华大道3639号环智中心C座壹方天地C区LG-039",
    "phone": "0755-23768846",
    "geo": {
      "lat": 22.644686,
      "lng": 114.029204
    }
  },
  {
    "name": "Apple 天环广场",
    "type": "Apple Store 直营店",
    "city": "广州",
    "district": "天河区",
    "address": "广州市天河区天河路 218 号",
    "phone": "400-613-9742",
    "geo": {
      "lat": 23.132007,
      "lng": 113.325278
    }
  },
  {
    "name": "Apple 珠江新城",
    "type": "Apple Store 直营店",
    "city": "广州",
    "district": "广州中心区",
    "address": "广州珠江新城兴民路 222 号 天汇广场 1 层",
    "phone": "400-639-3601",
    "geo": {
      "lat": 23.115845,
      "lng": 113.332705
    }
  },
  {
    "name": "新联－广州天河城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "广州",
    "district": "天河区",
    "address": "广东省广州市天河区天河路208号天河城四层413A、413铺",
    "phone": "020-38818334",
    "geo": {
      "lat": 23.132189,
      "lng": 113.322698
    }
  },
  {
    "name": "新联－广州太古汇店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "广州",
    "district": "天河区",
    "address": "广东省广州市天河区天河路383号太古汇商场裙楼地铁层M10-M11铺 ( Mac 产品提供送修服务 )",
    "phone": "020-87581286",
    "geo": {
      "lat": 23.134159,
      "lng": 113.332602
    }
  },
  {
    "name": "新联－广州番禺天河城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "广州",
    "district": "番禺区",
    "address": "广东省广州市番禺区南村镇万博一路201号B1103商铺 ( Mac 产品提供送修服务 )",
    "phone": "020-84821809",
    "geo": {
      "lat": 23.003281,
      "lng": 113.348427
    }
  },
  {
    "name": "新联－广州百信广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "广州",
    "district": "白云区",
    "address": "广东省广州市白云区机场路1309号百信广信BX3L1001号商铺",
    "phone": "020-36164600",
    "geo": {
      "lat": 23.194228,
      "lng": 113.261878
    }
  },
  {
    "name": "新联－广州融创茂店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "广州",
    "district": "花都区",
    "address": "广东省广州市花都区凤凰北路63号室内步行街一层1061号商铺 ( Mac 产品提供送修服务 )",
    "phone": "020-36960086",
    "geo": {
      "lat": 23.426299,
      "lng": 113.233279
    }
  },
  {
    "name": "畅航－广州丽影广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "广州",
    "district": "海珠区",
    "address": "广东省广州市海珠区新港中路356号丽影广场B区B1-026-028号",
    "phone": "020-34393241",
    "geo": {
      "lat": 23.09605,
      "lng": 113.321743
    }
  },
  {
    "name": "百邦－广州越秀好世界店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "广州",
    "district": "越秀区",
    "address": "广东省广州市越秀区环市东路362-366号好世界广场2307房",
    "phone": "020-83633688",
    "geo": {
      "lat": 23.136419,
      "lng": 113.284875
    }
  },
  {
    "name": "直信创邺－广州天河店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "广州",
    "district": "天河区",
    "address": "广东省广州市天河区天河路242号丰兴广场B栋910室",
    "phone": "020-38889171",
    "geo": {
      "lat": 23.132971,
      "lng": 113.333179
    }
  },
  {
    "name": "Apple 成都万象城",
    "type": "Apple Store 直营店",
    "city": "成都",
    "district": "成华区",
    "address": "成都市成华区双庆路 8 号万象城",
    "phone": "400-617-1214",
    "geo": {
      "lat": 30.649725,
      "lng": 104.114951
    }
  },
  {
    "name": "Apple 成都太古里",
    "type": "Apple Store 直营店",
    "city": "成都",
    "district": "锦江区",
    "address": "成都市锦江区中纱帽街 8 号",
    "phone": "400-617-1275",
    "geo": {
      "lat": 30.652084,
      "lng": 104.083722
    }
  },
  {
    "name": "FASTLEAP－成都科华王府井店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "成都",
    "district": "武侯区",
    "address": "四川省成都市武侯区科华中路2号1栋1单元第2层L02101号",
    "phone": "028-86651892",
    "geo": {
      "lat": 30.61928,
      "lng": 104.075632
    }
  },
  {
    "name": "FASTLEAP－成都金牛凯德广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "成都",
    "district": "金牛区",
    "address": "四川省成都市金牛区交大路183号凯德广场(金牛店)二期B01层22号 ( Mac 产品提供送修服务 )",
    "phone": "028-87575128",
    "geo": {
      "lat": 30.703705,
      "lng": 104.043619
    }
  },
  {
    "name": "FASTLEAP－成都高新伊藤店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "成都",
    "district": "武侯区",
    "address": "四川省成都市武侯区天府2街999号伊藤洋华堂1层 ( Mac 产品提供送修服务 )",
    "phone": "028-85316691",
    "geo": {
      "lat": 30.550645,
      "lng": 104.043713
    }
  },
  {
    "name": "天音－成都青羊浣花香店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "成都",
    "district": "青羊区",
    "address": "四川省成都市青羊区一环路西二段2号浣花香大厦1栋6层605号",
    "phone": "028-86748541",
    "geo": {
      "lat": 30.659682,
      "lng": 104.040131
    }
  },
  {
    "name": "尚易－成都恒大购物中心店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "成都",
    "district": "青羊区",
    "address": "四川省成都市青羊区提督街99号恒大广场TheOne购物中心负一层B1012号",
    "phone": "028-86629303",
    "geo": {
      "lat": 30.661239,
      "lng": 104.073913
    }
  },
  {
    "name": "尚派正品－成都群光广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "成都",
    "district": "锦江区",
    "address": "四川省成都市锦江区春熙路南段8号群光广场一层1B-03号",
    "phone": "028-65970216",
    "geo": {
      "lat": 30.653996,
      "lng": 104.076331
    }
  },
  {
    "name": "尚派正品－成都远大购物中心店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "成都",
    "district": "高新区",
    "address": "四川省成都市高新区远大购物中心1层A-L102",
    "phone": "028-85184024",
    "geo": {
      "lat": 30.530192,
      "lng": 104.071241
    }
  },
  {
    "name": "时代印象－成都世茂广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "成都",
    "district": "龙泉驿区",
    "address": "四川省成都市龙泉驿区大面街道金枫路833号世茂广场第L1层L1-54、L1-55号 ( Mac 产品提供送修服务 )",
    "phone": "028-88455277",
    "geo": {
      "lat": 30.581361,
      "lng": 104.189222
    }
  },
  {
    "name": "时代印象－成都来福士店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "成都",
    "district": "武侯区",
    "address": "四川省成都市武侯区人民南路四段3号来福士广场1F-1039",
    "phone": "028-87057457",
    "geo": {
      "lat": 30.63202,
      "lng": 104.06728
    }
  },
  {
    "name": "时代印象－成都蜀都万达店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "成都",
    "district": "郫都区",
    "address": "四川省成都市郫都区望丛东路139号蜀都万达广场1F-1067",
    "phone": "028-61548968",
    "geo": {
      "lat": 30.807793,
      "lng": 103.906418
    }
  },
  {
    "name": "时代印象－成都银泰城店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "成都",
    "district": "高新区",
    "address": "四川省成都市高新区益州大道1999号银泰城L1071",
    "phone": "028-62035229",
    "geo": {
      "lat": 30.541136,
      "lng": 104.058039
    }
  },
  {
    "name": "直信创邺－成都大陆国际店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "成都",
    "district": "武侯区",
    "address": "四川省成都市武侯区人民南路四段11号附1号1栋写字楼11楼06号",
    "phone": "028-60199355",
    "geo": {
      "lat": 30.629194,
      "lng": 104.06746
    }
  },
  {
    "name": "Apple 解放碑",
    "type": "Apple Store 直营店",
    "city": "重庆",
    "district": "渝中区",
    "address": "重庆市渝中区邹容路 108 号",
    "phone": "400-617-1224",
    "geo": {
      "lat": 29.558094,
      "lng": 106.575921
    }
  },
  {
    "name": "Apple 重庆万象城",
    "type": "Apple Store 直营店",
    "city": "重庆",
    "district": "九龙坡区",
    "address": "重庆市九龙坡区谢家湾正街 55 号",
    "phone": "400-617-1215",
    "geo": {
      "lat": 29.516154,
      "lng": 106.518048
    }
  },
  {
    "name": "Apple 重庆北城天街",
    "type": "Apple Store 直营店",
    "city": "重庆",
    "district": "两江新区",
    "address": "重庆市两江新区北城天街 8 号",
    "phone": "400-617-1240",
    "geo": {
      "lat": 29.577951,
      "lng": 106.53349
    }
  },
  {
    "name": "天音－重庆龙湖光年店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "重庆",
    "district": "沙坪坝区",
    "address": "重庆市沙坪坝区北站东路188号附1号（龙湖光年5号楼）17-15/17-16",
    "phone": "023-65413032",
    "geo": {
      "lat": 29.554015,
      "lng": 106.462036
    }
  },
  {
    "name": "尚派正品－重庆巴南万达店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "重庆",
    "district": "巴南区",
    "address": "重庆市巴南区渝南大道297号万达广场1B035号 ( Mac 产品提供送修服务 )",
    "phone": "023-62566556",
    "geo": {
      "lat": 29.39905,
      "lng": 106.544647
    }
  },
  {
    "name": "尚派正品－重庆渝北SKLP店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "重庆",
    "district": "渝北区",
    "address": "重庆市渝北区红锦大道89号SKLP 一层1030号商铺",
    "phone": "023-63211211",
    "geo": {
      "lat": 29.594333,
      "lng": 106.52236
    }
  },
  {
    "name": "时代印象－重庆大渡口万象汇店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "重庆",
    "district": "大渡口区",
    "address": "重庆市大渡口区文体路99号大渡口万象汇LG10号",
    "phone": "023-68151638",
    "geo": {
      "lat": 29.481676,
      "lng": 106.484459
    }
  },
  {
    "name": "直信创邺－重庆大西洋国际店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "重庆",
    "district": "九龙坡区",
    "address": "重庆市九龙坡区渝州路街道科园一路2号大西洋国际大厦2501号",
    "phone": "023-60332633",
    "geo": {
      "lat": 29.53202,
      "lng": 106.48468
    }
  },
  {
    "name": "Apple 武汉",
    "type": "Apple Store 直营店",
    "city": "武汉",
    "district": "江汉区",
    "address": "武汉市江汉区解放大道 690 号 武商 MALL B 座 2F",
    "phone": "400-638-3818",
    "geo": {
      "lat": 30.57989,
      "lng": 114.27149
    }
  },
  {
    "name": "天音－武汉平安大厦店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "武汉",
    "district": "江汉区",
    "address": "湖北省武汉市江汉区中山大道818号平安大厦37层02号",
    "phone": "027-82851995",
    "geo": {
      "lat": 30.5784,
      "lng": 114.291084
    }
  },
  {
    "name": "新联－武汉摩尔城店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "武汉",
    "district": "汉阳区",
    "address": "湖北省武汉市汉阳区龙阳大道特6号武汉摩尔城一层A区L1A-009",
    "phone": "027-87888849",
    "geo": {
      "lat": 30.554125,
      "lng": 114.203486
    }
  },
  {
    "name": "新联－武汉销品茂店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "武汉",
    "district": "武昌区",
    "address": "湖北省武汉市武昌区徐东大街18号销品茂一层F1035A铺",
    "phone": "027-86828488",
    "geo": {
      "lat": 30.586256,
      "lng": 114.342532
    }
  },
  {
    "name": "百邦－武汉世贸大厦店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "武汉",
    "district": "江汉区",
    "address": "湖北省武汉市江汉区解放大道686号武汉世界贸易大厦26层12号",
    "phone": "027-85711628027-85711658",
    "geo": {
      "lat": 30.579945,
      "lng": 114.268907
    }
  },
  {
    "name": "直信创邺－武汉梦时代亚贸广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "武汉",
    "district": "武昌区",
    "address": "湖北省武汉市武昌区武珞路628号亚贸写字楼B座21楼2178B室（宝通寺站B出口）",
    "phone": "027-87868911",
    "geo": {
      "lat": 30.529645,
      "lng": 114.342107
    }
  },
  {
    "name": "美承－武汉万科未来中心店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "武汉",
    "district": "汉阳区",
    "address": "湖北省武汉市汉阳区汉阳大道408号万科未来中心1楼1-19",
    "phone": "027-84658582",
    "geo": {
      "lat": 30.553854,
      "lng": 114.244041
    }
  },
  {
    "name": "美承－武汉楚河汉街店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "武汉",
    "district": "武昌区",
    "address": "湖北省武汉市武昌区楚河汉街第三街区J4-2-9号",
    "phone": "027-87685740",
    "geo": {
      "lat": 30.558584,
      "lng": 114.336945
    }
  },
  {
    "name": "酷动－武汉光谷世界城广场店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "武汉",
    "district": "洪山区",
    "address": "湖北省武汉市洪山区东湖新技术开发区珞瑜路766号光谷世界城广场一楼GC150",
    "phone": "027-82659906",
    "geo": {
      "lat": 30.505856,
      "lng": 114.405344
    }
  },
  {
    "name": "酷动－武汉白沙龙湖天街店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "武汉",
    "district": "洪山区",
    "address": "湖北省武汉市洪山区白沙三路48号白沙龙湖天街A-1F-27",
    "phone": "027-88010935",
    "geo": {
      "lat": 30.474314,
      "lng": 114.293412
    }
  },
  {
    "name": "酷动－武汉金桥永旺梦乐城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "武汉",
    "district": "江岸区",
    "address": "湖北省武汉市江岸区金桥大道15号金桥永旺梦乐城1楼131铺",
    "phone": "027-65598825",
    "geo": {
      "lat": 30.630391,
      "lng": 114.283951
    }
  },
  {
    "name": "天音－西安宏府大厦店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "西安",
    "district": "莲湖区",
    "address": "陕西省西安市莲湖区北大街118号二层第2–18× 2–19×号",
    "phone": "029-87254502",
    "geo": {
      "lat": 34.267336,
      "lng": 108.94661
    }
  },
  {
    "name": "尚派正品－西安大都荟店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "西安",
    "district": "雁塔区",
    "address": "陕西省西安市雁塔区科技路305号西安大都荟D04",
    "phone": "029-88613515",
    "geo": {
      "lat": 34.237515,
      "lng": 108.893552
    }
  },
  {
    "name": "尚派正品－西安长安万科广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "西安",
    "district": "长安区",
    "address": "陕西省西安市长安区西长安街919号长安万科广场1F-29、1F-36号",
    "phone": "029-84153890",
    "geo": {
      "lat": 34.158362,
      "lng": 108.895961
    }
  },
  {
    "name": "尚派正品－西安高新万达店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "西安",
    "district": "高新区",
    "address": "陕西省西安市高新区木塔寨西路719号西安高新万达广场室内步行街1F层1080号商铺",
    "phone": "029-88453190",
    "geo": {
      "lat": 34.208352,
      "lng": 108.890935
    }
  },
  {
    "name": "百邦－西安小寨军民服务社店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "西安",
    "district": "雁塔区",
    "address": "陕西省西安市雁塔区长安中路30号融通商服服务社购物中心一层050号",
    "phone": "029-87873267",
    "geo": {
      "lat": 34.21995,
      "lng": 108.946237
    }
  },
  {
    "name": "直信创邺－西安东新科贸店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "西安",
    "district": "碑林区",
    "address": "陕西省西安市碑林区雁塔路中段甲字16号东新科贸A栋一层门面02号",
    "phone": "029-85538721",
    "geo": {
      "lat": 34.235864,
      "lng": 108.963218
    }
  },
  {
    "name": "立兴－西安盛龙广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "西安",
    "district": "未央区",
    "address": "陕西省西安市未央区未央路80号盛龙广场购物中心步行街二层2F2002号商铺",
    "phone": "029-81612598",
    "geo": {
      "lat": 34.299317,
      "lng": 108.946323
    }
  },
  {
    "name": "酷动－西安华阳城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "西安",
    "district": "灞桥区",
    "address": "陕西省西安市灞桥区长乐东路999号华阳城购物广场1F-HY-108铺 ( Mac 产品提供送修服务 )",
    "phone": "029-83543356",
    "geo": {
      "lat": 34.280472,
      "lng": 109.071524
    }
  },
  {
    "name": "Apple 长沙",
    "type": "Apple Store 直营店",
    "city": "长沙",
    "district": "芙蓉区",
    "address": "长沙市芙蓉区解放西路 188 号 长沙国金中心一层",
    "phone": "400-604-3168",
    "geo": {
      "lat": 28.192427,
      "lng": 112.976772
    }
  },
  {
    "name": "天音－长沙绿地中央广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "长沙",
    "district": "岳麓区",
    "address": "湖南省长沙市岳麓区银杉路31号绿地中央广场5栋2307室",
    "phone": "0731-84452175",
    "geo": {
      "lat": 28.227256,
      "lng": 112.951983
    }
  },
  {
    "name": "新联－长沙梅溪湖步步高店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "长沙",
    "district": "高新开发区",
    "address": "湖南省长沙市高新开发区步步高梅溪湖商业中心D区G06-2号商铺",
    "phone": "0731-89675708",
    "geo": {
      "lat": 28.199942,
      "lng": 112.862003
    }
  },
  {
    "name": "新胜－长沙砂之船奥特莱斯店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "长沙",
    "district": "望城区",
    "address": "湖南省长沙市望城区砂之船长沙奥莱L1-03",
    "phone": "0731-85152684",
    "geo": {
      "lat": 28.288476,
      "lng": 112.918467
    }
  },
  {
    "name": "新胜－长沙芙蓉天街店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "长沙",
    "district": "芙蓉区",
    "address": "湖南省长沙市芙蓉区人民东路与望龙路交叉口东南角长沙芙蓉龙湖天街A-1F-38&39",
    "phone": "0731-85535363",
    "geo": {
      "lat": 28.190366,
      "lng": 113.074288
    }
  },
  {
    "name": "百邦－长沙店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "长沙",
    "district": "雨花区",
    "address": "湖南省长沙市雨花区韶山中路18号中设广场2楼",
    "phone": "0731-85997099",
    "geo": {
      "lat": 28.16882,
      "lng": 112.993784
    }
  },
  {
    "name": "直信创邺－长沙火车站店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "长沙",
    "district": "芙蓉区",
    "address": "湖南省长沙市芙蓉区五一大道158号和谐潇湘大厦1幢1416室",
    "phone": "0731-84137108",
    "geo": {
      "lat": 28.194711,
      "lng": 113.004146
    }
  },
  {
    "name": "美承－长沙大悦城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "长沙",
    "district": "开福区",
    "address": "湖南省长沙市开福区湘江大道1500号长沙大悦城北区G层14号商铺 ( Mac 产品提供送修服务 )",
    "phone": "0731-89679055",
    "geo": {
      "lat": 28.237766,
      "lng": 112.979086
    }
  },
  {
    "name": "酷动－长沙珠江星环店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "长沙",
    "district": "开福区",
    "address": "湖南省长沙市开福区浏阳河街道福元西路109号珠江星环购物中心1层1034号",
    "phone": "0731-89690267",
    "geo": {
      "lat": 28.252283,
      "lng": 112.995654
    }
  },
  {
    "name": "Apple 郑州万象城",
    "type": "Apple Store 直营店",
    "city": "郑州",
    "district": "二七区",
    "address": "郑州市二七区民主路 10 号",
    "phone": "400-617-1264",
    "geo": {
      "lat": 34.754959,
      "lng": 113.662759
    }
  },
  {
    "name": "天音－郑州升龙天玺店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "郑州",
    "district": "二七区",
    "address": "河南省郑州市二七区政通路68号升龙国际C区8号楼2120室 ( Mac 产品提供送修服务 )",
    "phone": "0371-60999586",
    "geo": {
      "lat": 34.724932,
      "lng": 113.64468
    }
  },
  {
    "name": "尚派正品－郑州信万广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "郑州",
    "district": "金水区",
    "address": "河南省郑州市金水区国基路87号信万广场A1F-03 ( Mac 产品提供送修服务 )",
    "phone": "0371-61735305",
    "geo": {
      "lat": 34.819585,
      "lng": 113.647792
    }
  },
  {
    "name": "百邦－郑州万象城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "郑州",
    "district": "二七区",
    "address": "河南省郑州市二七区民主路10号华润万象城4楼428号",
    "phone": "0371-66219111",
    "geo": {
      "lat": 34.755334,
      "lng": 113.660879
    }
  },
  {
    "name": "直信创邺－郑州金水店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "郑州",
    "district": "金水区",
    "address": "河南省郑州市金水区花园路39号招银大厦16层1606室",
    "phone": "0371-87512248",
    "geo": {
      "lat": 34.785981,
      "lng": 113.680962
    }
  },
  {
    "name": "立兴－郑州郑东新区店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "郑州",
    "district": "金水区",
    "address": "河南省郑州市郑东新区金水东路80号绿地新都会2号楼C座703室",
    "phone": "0371-55556671",
    "geo": {
      "lat": 34.769713,
      "lng": 113.767966
    }
  },
  {
    "name": "酷动－郑州中原万达店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "郑州",
    "district": "中原区",
    "address": "河南省郑州市中原区中原西路171号万达广场1楼1号门1051A号",
    "phone": "0371-86552707",
    "geo": {
      "lat": 34.746485,
      "lng": 113.601512
    }
  },
  {
    "name": "酷动－郑州银泰inpark店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "郑州",
    "district": "金水区",
    "address": "河南省郑州市金水区龙湖金融中心1楼 3-L1012号",
    "phone": "0371-60331018",
    "geo": {
      "lat": 34.814212,
      "lng": 113.730676
    }
  },
  {
    "name": "飒铂－郑州惠济万达店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "郑州",
    "district": "惠济区",
    "address": "河南省郑州市惠济区开元路68号惠济万达广场室内步行街1层1057号商铺",
    "phone": "0371-55616821",
    "geo": {
      "lat": 34.868693,
      "lng": 113.637828
    }
  },
  {
    "name": "Apple 青岛万象城",
    "type": "Apple Store 直营店",
    "city": "青岛",
    "district": "青岛中心区",
    "address": "青岛市市南区山东路 6A 号",
    "phone": "400-617-1285",
    "geo": {
      "lat": 36.0663,
      "lng": 120.378775
    }
  },
  {
    "name": "亿维－青岛凯德广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "青岛",
    "district": "北区",
    "address": "山东省青岛市市北区黑龙江路凯德Mall一层01-07/08 ( Mac 产品提供送修服务 )",
    "phone": "0532-80933096",
    "geo": {
      "lat": 36.113857,
      "lng": 120.396525
    }
  },
  {
    "name": "亿维－青岛李沧乐客城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "青岛",
    "district": "李沧区",
    "address": "山东省青岛市李沧区夏庄路1号乐客城购物中心B1-B-05 ( Mac 产品提供送修服务 )",
    "phone": "0532-87699088",
    "geo": {
      "lat": 36.159597,
      "lng": 120.427369
    }
  },
  {
    "name": "亿维－青岛金狮广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "青岛",
    "district": "崂山区",
    "address": "山东省青岛市崂山区香港东路195号乙金狮广场L1-57商铺",
    "phone": "0532-55716315",
    "geo": {
      "lat": 36.095705,
      "lng": 120.464672
    }
  },
  {
    "name": "青岛龙腾－青岛合肥路永旺店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "青岛",
    "district": "3、T104区",
    "address": "山东省青岛市市北区合肥路672号第一层T103、T104区",
    "phone": "0532-66002147",
    "geo": {
      "lat": 36.111979,
      "lng": 120.413545
    }
  },
  {
    "name": "Apple 济南恒隆广场",
    "type": "Apple Store 直营店",
    "city": "济南",
    "district": "历下区",
    "address": "济南市历下区泉城路 188 号",
    "phone": "400-613-9743",
    "geo": {
      "lat": 36.664472,
      "lng": 117.024129
    }
  },
  {
    "name": "亿维－济南万象城店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "济南",
    "district": "历下区",
    "address": "山东省济南市历下区经十路11111号华润中心万象城第L2层第L203号",
    "phone": "0531-88935335",
    "geo": {
      "lat": 36.658413,
      "lng": 117.100034
    }
  },
  {
    "name": "亿维－济南世纪大道万达店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "济南",
    "district": "历城区",
    "address": "山东省济南市历城区唐冶街道世纪大道万达商业广场室内步行街LG层1007、1008号商铺",
    "phone": "0531-88877877",
    "geo": {
      "lat": 36.689194,
      "lng": 117.177117
    }
  },
  {
    "name": "亿维－济南华山环宇城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "济南",
    "district": "历城区",
    "address": "山东省济南市历城区将军路华山中海环宇城L1-121",
    "phone": "0531-69957711",
    "geo": {
      "lat": 36.714327,
      "lng": 117.053401
    }
  },
  {
    "name": "亿维－济南印象城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "济南",
    "district": "历城区",
    "address": "山东省济南市历城区花园路136号印象城一楼L131B ( Mac 产品提供送修服务 )",
    "phone": "0531-55658111",
    "geo": {
      "lat": 36.682602,
      "lng": 117.061515
    }
  },
  {
    "name": "天音－济南嘉华店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "济南",
    "district": "槐荫区",
    "address": "山东省济南市槐荫区经二路588号嘉华购物广场4楼 ( Mac 产品提供送修服务 )",
    "phone": "0531-66686088",
    "geo": {
      "lat": 36.660741,
      "lng": 116.975431
    }
  },
  {
    "name": "百邦－济南缤纷五洲店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "济南",
    "district": "天桥区",
    "address": "山东省济南市天桥区济泺路96号缤纷五洲商业广场一楼143D号",
    "phone": "0531-88256579",
    "geo": {
      "lat": 36.69627,
      "lng": 116.995341
    }
  },
  {
    "name": "直信创邺－济南高新区店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "济南",
    "district": "高新区",
    "address": "山东省济南市高新区工业南路57号高新万达写字楼J1-15A06",
    "phone": "0531-829300000531-87922229",
    "geo": {
      "lat": 36.686385,
      "lng": 117.131083
    }
  },
  {
    "name": "酷动－济南魏家庄万达店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "济南",
    "district": "中区",
    "address": "山东省济南市市中区经四路5号万达广场一层Y102",
    "phone": "0531-86653428",
    "geo": {
      "lat": 36.663393,
      "lng": 117.008244
    }
  },
  {
    "name": "直信创邺－三亚店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "三亚",
    "district": "吉阳区",
    "address": "海南省三亚市吉阳区迎宾路145号天际大厦5层503房",
    "phone": "0898-88239240",
    "geo": {
      "lat": 18.270293,
      "lng": 109.506064
    }
  },
  {
    "name": "美承－三亚大悦城店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "三亚",
    "district": "吉阳区",
    "address": "海南省三亚市吉阳区迎宾路三亚大悦城购物中心L1-30",
    "phone": "0898-88368660",
    "geo": {
      "lat": 18.282343,
      "lng": 109.519272
    }
  },
  {
    "name": "百邦－东莞东城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "东莞",
    "district": "东城街道",
    "address": "广东省东莞市东城街道鸿福东路1号国贸中心T1栋2103房",
    "phone": "0769-26670667",
    "geo": {
      "lat": 23.032063,
      "lng": 113.770495
    }
  },
  {
    "name": "飒铂－东莞厚街万达店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "东莞",
    "district": "厚街镇宝屯社区",
    "address": "广东省东莞市厚街镇宝屯社区康乐北路6号1029-1031A",
    "phone": "0769-83086138",
    "geo": {
      "lat": 22.943034,
      "lng": 113.675062
    }
  },
  {
    "name": "直信创邺－中山店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "中山",
    "district": "西区",
    "address": "广东省中山市西区富华道41号金嘉创新港5楼504室",
    "phone": "0760-89889768",
    "geo": {
      "lat": 22.519783,
      "lng": 113.346648
    }
  },
  {
    "name": "尚派正品－乌鲁木齐会展吾悦广场店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "乌鲁木齐",
    "district": "水磨沟区",
    "address": "新疆乌鲁木齐水磨沟区会展大道会展吾悦广场1026号",
    "phone": "0991-4151231",
    "geo": {
      "lat": 43.878469,
      "lng": 87.628316
    }
  },
  {
    "name": "尚派正品－乌鲁木齐天山万科店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "乌鲁木齐",
    "district": "天山区",
    "address": "新疆维吾尔族自治区乌鲁木齐市天山区大湾南路299号天山万科广场L1-121号 ( Mac 产品提供送修服务 )",
    "phone": "0991-2566630",
    "geo": {
      "lat": 43.757637,
      "lng": 87.627873
    }
  },
  {
    "name": "尚派正品－乌鲁木齐汇嘉店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "乌鲁木齐",
    "district": "区",
    "address": "新疆乌鲁木齐市新市区北京路147号汇嘉时代广场1楼",
    "phone": "0991-3682699",
    "geo": {
      "lat": 43.87544,
      "lng": 87.557562
    }
  },
  {
    "name": "天音－佛山南海悦汇店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "佛山",
    "district": "南海区",
    "address": "佛山市南海区桂城街道南海大道北84号越秀星汇云锦广场B区一楼B104-2天音科技 ( Mac 产品提供送修服务 )",
    "phone": "0757-82294986",
    "geo": {
      "lat": 23.030504,
      "lng": 113.141556
    }
  },
  {
    "name": "畅航－佛山顺德中海汇德里店 - Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "佛山",
    "district": "顺德区",
    "address": "广东省佛山市顺德区北滘镇君兰社区乐创路9号中海汇德里公馆13栋106、107室",
    "phone": "0757-29238996",
    "geo": {
      "lat": 22.944213,
      "lng": 113.20343
    }
  },
  {
    "name": "百邦－佛山美的置业写字楼店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "佛山",
    "district": "顺德区",
    "address": "广东省佛山市顺德区北滘镇诚德路1号美的置业写字楼21楼05室",
    "phone": "0757-22910080",
    "geo": {
      "lat": 22.930714,
      "lng": 113.215514
    }
  },
  {
    "name": "直信创邺－佛山禅城金海店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "佛山",
    "district": "禅城区",
    "address": "广东省佛山市禅城区季华五路21号金海广场6楼606室",
    "phone": "0757-82299430",
    "geo": {
      "lat": 23.012203,
      "lng": 113.109599
    }
  },
  {
    "name": "酷动－佛山禅西环宇城店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "佛山",
    "district": "禅城区",
    "address": "广东省佛山市禅城区季华一路21号东基禅西环宇城1F-L1115-16号",
    "phone": "0757-82138958",
    "geo": {
      "lat": 23.012024,
      "lng": 113.0546
    }
  },
  {
    "name": "天音－兰州万商国际店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "兰州",
    "district": "城关区",
    "address": "甘肃省兰州市城关区东岗东路万商国际A塔1711室",
    "phone": "0931-8165072",
    "geo": {
      "lat": 36.046521,
      "lng": 103.87253
    }
  },
  {
    "name": "尚派正品－兰州万象城店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "兰州",
    "district": "城关区",
    "address": "甘肃省兰州市城关区庆阳路2号兰州万象城一层LG32号",
    "phone": "0931-8840229",
    "geo": {
      "lat": 36.05373,
      "lng": 103.845282
    }
  },
  {
    "name": "尚派正品－兰州中心店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "兰州",
    "district": "七里河区",
    "address": "甘肃省兰州市七里河区西津西路16号兰州中心1层1-017",
    "phone": "0931-2402836",
    "geo": {
      "lat": 36.06796,
      "lng": 103.774967
    }
  },
  {
    "name": "直信创邺－兰州张掖路步行街店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "兰州",
    "district": "城关区",
    "address": "甘肃省兰州市城关区张掖路137号民基大厦A座1206室（大玻璃门）",
    "phone": "0931-8860801",
    "geo": {
      "lat": 36.059233,
      "lng": 103.820915
    }
  },
  {
    "name": "Apple 南宁万象城",
    "type": "Apple Store 直营店",
    "city": "南宁",
    "district": "广西壮族自治区",
    "address": "南宁市青秀区民族大道 136 号",
    "phone": "400-617-1265",
    "geo": {
      "lat": 22.811023,
      "lng": 108.392463
    }
  },
  {
    "name": "天音－南宁新朝阳商业广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "南宁",
    "district": "兴宁区",
    "address": "广西省南宁市兴宁区朝阳路38号新朝阳商业广场4层A4040-A4041商铺 ( Mac 产品提供送修服务 )",
    "phone": "0771-2622899",
    "geo": {
      "lat": 22.8169,
      "lng": 108.321559
    }
  },
  {
    "name": "直信创邺－南宁大学东路店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "南宁",
    "district": "西乡塘区",
    "address": "广西南宁市西乡塘区大学东路35号万达广场6楼6015铺",
    "phone": "0771-4817961",
    "geo": {
      "lat": 22.832482,
      "lng": 108.286417
    }
  },
  {
    "name": "酷动－南宁万象城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "南宁",
    "district": "青秀区",
    "address": "广西省南宁市青秀区民族大道136号南宁华润中心万象城第L1层001号商铺酷动苹果专卖店",
    "phone": "0771-2812281",
    "geo": {
      "lat": 22.81204,
      "lng": 108.393421
    }
  },
  {
    "name": "天音－南昌红谷滩万达店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "南昌",
    "district": "红谷滩新区",
    "address": "江西省南昌市红谷滩新区凤凰中大道1000号万达中心B2写字楼7楼703室 ( Mac 产品提供送修服务 )",
    "phone": "0791-86230316",
    "geo": {
      "lat": 28.696144,
      "lng": 115.850154
    }
  },
  {
    "name": "新胜－南昌王府井店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "南昌",
    "district": "青云谱区",
    "address": "江西省南昌市青云谱区洪城路188号王府井购物中心1F-023,024号",
    "phone": "0791-86315508",
    "geo": {
      "lat": 28.653851,
      "lng": 115.905393
    }
  },
  {
    "name": "新胜－南昌铜锣湾购物中心店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "南昌",
    "district": "红谷滩区",
    "address": "江西省南昌市红谷滩区庐山大道369号南昌铜锣湾广场T16mall购物中心L1-22号",
    "phone": "0791-86315505",
    "geo": {
      "lat": 28.704339,
      "lng": 115.863414
    }
  },
  {
    "name": "直信创邺－南昌八一广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "南昌",
    "district": "西湖区",
    "address": "江西省南昌市西湖区广场南路205号恒茂国际中心16栋A单元801",
    "phone": "0791-86669017",
    "geo": {
      "lat": 28.670832,
      "lng": 115.90676
    }
  },
  {
    "name": "立兴－南昌财富广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "南昌",
    "district": "东湖区",
    "address": "江西省南昌市东湖区八一大道财富广场B座25楼2503室",
    "phone": "0791-86269971",
    "geo": {
      "lat": 28.677644,
      "lng": 115.904572
    }
  },
  {
    "name": "酷动－南昌万象汇店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "南昌",
    "district": "青山湖区",
    "address": "江西省南昌市青山湖区高新大道1918号",
    "phone": "0791-88196291",
    "geo": {
      "lat": 28.675436,
      "lng": 115.959374
    }
  },
  {
    "name": "百邦－南通王府商业广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "南通",
    "district": "崇川区",
    "address": "江苏省南通市崇川区人民中路116号王府商业广场F1层1010-1号商铺",
    "phone": "0513-85589003",
    "geo": {
      "lat": 32.018086,
      "lng": 120.870968
    }
  },
  {
    "name": "酷动－南通万象城店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "南通",
    "district": "崇川区",
    "address": "江苏省南通市崇川区唐闸镇街道北大街111号南通万象城购物中心1层L142L141A号",
    "phone": "0513-89076786",
    "geo": {
      "lat": 32.052004,
      "lng": 120.85878
    }
  },
  {
    "name": "Apple 厦门新生活广场",
    "type": "Apple Store 直营店",
    "city": "厦门",
    "district": "思明区",
    "address": "厦门市思明区嘉禾路 399 号 SM 新生活广场",
    "phone": "400-617-1383",
    "geo": {
      "lat": 24.499998,
      "lng": 118.124958
    }
  },
  {
    "name": "新联－厦门万象城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "厦门",
    "district": "思明区",
    "address": "福建省厦门市思明区湖滨东路99号厦门万象城L408铺",
    "phone": "0592-5820562",
    "geo": {
      "lat": 24.472567,
      "lng": 118.112155
    }
  },
  {
    "name": "新联－厦门宝龙一城店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "厦门",
    "district": "思明区",
    "address": "福建省厦门市思明区金山路1号宝龙一城二区2-1号楼第F1层编号M-F1-044商铺",
    "phone": "0592-5960946",
    "geo": {
      "lat": 24.485645,
      "lng": 118.172508
    }
  },
  {
    "name": "直信创邺－厦门集美诚毅柒号店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "厦门",
    "district": "思明区",
    "address": "福建省厦门市集美区诚毅大街7-2号诚毅柒号B区332单元",
    "phone": "0592-2210032",
    "geo": {
      "lat": 24.602078,
      "lng": 118.056229
    }
  },
  {
    "name": "酷动－厦门集美世茂广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "厦门",
    "district": "集美区",
    "address": "福建省厦门市集美区集美大道2号厦门集美世茂广场l1-015",
    "phone": "0592-5072516",
    "geo": {
      "lat": 24.602722,
      "lng": 118.07633
    }
  },
  {
    "name": "品丰科技－台州黄岩吾悦广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "台州",
    "district": "黄岩区",
    "address": "浙江省台州市黄岩区西城街道大桥路1号吾悦广场商铺1039号",
    "phone": "0576-88170933",
    "geo": {
      "lat": 28.653674,
      "lng": 121.260417
    }
  },
  {
    "name": "直信创邺－台州椒江店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "台州",
    "district": "椒江区",
    "address": "浙江省台州市椒江区市府大道289号耀达大厦23-A南间",
    "phone": "13306562557",
    "geo": {
      "lat": 28.651369,
      "lng": 121.429998
    }
  },
  {
    "name": "Apple 合肥万象城",
    "type": "Apple Store 直营店",
    "city": "合肥",
    "district": "蜀山区",
    "address": "合肥市蜀山区潜山路 111 号 合肥万象城商场一层",
    "phone": "400-000-5292",
    "geo": {
      "lat": 31.799447,
      "lng": 117.23167
    }
  },
  {
    "name": "STUDIO A－合肥银泰中心二期店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "合肥",
    "district": "庐阳区",
    "address": "安徽省合肥市庐阳区长江中路98号银泰中心二期F2层2-01号",
    "phone": "0551-65296696",
    "geo": {
      "lat": 31.86258,
      "lng": 117.290625
    }
  },
  {
    "name": "天音－合肥新天地广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "合肥",
    "district": "庐阳区",
    "address": "安徽省合肥市庐阳区濉溪路168号新天地广场办公8-1609室 ( Mac 产品提供送修服务 )",
    "phone": "0551-62860115",
    "geo": {
      "lat": 31.879893,
      "lng": 117.279327
    }
  },
  {
    "name": "直信创邺－合肥之心城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "合肥",
    "district": "蜀山区",
    "address": "安徽省合肥市蜀山区长江西路189号三里庵之心城环球中心B座19楼1905室",
    "phone": "0551-658778576587785865877859",
    "geo": {
      "lat": 31.853758,
      "lng": 117.257877
    }
  },
  {
    "name": "蜂星生达－合肥四牌楼安徽中心店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "合肥",
    "district": "庐阳区",
    "address": "安徽省合肥市庐阳区长江中路146号徽盐.安徽中心2306",
    "phone": "0551-62679869",
    "geo": {
      "lat": 31.862562,
      "lng": 117.284385
    }
  },
  {
    "name": "酷动－合肥包河万象汇店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "合肥",
    "district": "包河区",
    "address": "安徽省合肥市包河区龙川路包河万象汇1F-L142商铺",
    "phone": "0551-62887655",
    "geo": {
      "lat": 31.808178,
      "lng": 117.308126
    }
  },
  {
    "name": "直信创邺－呼和浩特诚信店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "呼和浩特",
    "district": "新城区",
    "address": "内蒙古自治区呼和浩特市新城区中山东路7号诚信数码大厦10层1005室",
    "phone": "0471-6928052",
    "geo": {
      "lat": 40.820369,
      "lng": 111.674389
    }
  },
  {
    "name": "光线科技－哈尔滨西城红场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "哈尔滨",
    "district": "南岗区",
    "address": "黑龙江省哈尔滨市南岗区哈西大街299号西城红场一层F1014号",
    "phone": "0451-51501517",
    "geo": {
      "lat": 45.703787,
      "lng": 126.592828
    }
  },
  {
    "name": "天音－哈尔滨道里百盛店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "哈尔滨",
    "district": "道里区",
    "address": "黑龙江省哈尔滨市道里区中央大街222号百盛购物中心5楼",
    "phone": "0451-82618833",
    "geo": {
      "lat": 45.778882,
      "lng": 126.61663
    }
  },
  {
    "name": "直信创邺－哈尔滨南岗博物馆店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "哈尔滨",
    "district": "南岗区",
    "address": "黑龙江省哈尔滨南岗区西大直街4号久久旺年商场二层",
    "phone": "0451-55625512",
    "geo": {
      "lat": 45.755121,
      "lng": 126.646117
    }
  },
  {
    "name": "英龙华辰－哈尔滨哈西万达店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "哈尔滨",
    "district": "南岗区",
    "address": "黑龙江省哈尔滨市南岗区中兴大道168号1层1005B号",
    "phone": "0451-86616112",
    "geo": {
      "lat": 45.700796,
      "lng": 126.58921
    }
  },
  {
    "name": "百邦－嘉兴戴梦得店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "嘉兴",
    "district": "南湖区",
    "address": "浙江省嘉兴市南湖区禾兴南路520号戴梦得商场3楼S301",
    "phone": "0573-82094099",
    "geo": {
      "lat": 30.760697,
      "lng": 120.748958
    }
  },
  {
    "name": "Apple 大连恒隆广场",
    "type": "Apple Store 直营店",
    "city": "大连",
    "district": "西岗区",
    "address": "大连市西岗区五四路 66 号",
    "phone": "400-613-9741",
    "geo": {
      "lat": 38.906849,
      "lng": 121.610091
    }
  },
  {
    "name": "光线科技－大连华南店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "大连",
    "district": "甘井子区",
    "address": "辽宁省大连市甘井子区山东路350、352号（华润置地（大连）有限公司内LG209号商铺））",
    "phone": "0411-82446074",
    "geo": {
      "lat": 38.98473,
      "lng": 121.578829
    }
  },
  {
    "name": "天音－大连店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "大连",
    "district": "金州区",
    "address": "辽宁省大连市经济技术开发区本溪街3-2号友谊商城开发区店五层 ( Mac 产品提供送修服务 )",
    "phone": "0411-82562596",
    "geo": {
      "lat": 39.046499,
      "lng": 121.780739
    }
  },
  {
    "name": "Apple 天津万象城",
    "type": "Apple Store 直营店",
    "city": "天津",
    "district": "河西区",
    "address": "天津市河西区乐园道 9 号",
    "phone": "400-613-9745",
    "geo": {
      "lat": 39.089781,
      "lng": 117.213889
    }
  },
  {
    "name": "Apple 天津大悦城",
    "type": "Apple Store 直营店",
    "city": "天津",
    "district": "南开区",
    "address": "天津市南开区南门外大街 2 号",
    "phone": "400-617-1262",
    "geo": {
      "lat": 39.135669,
      "lng": 117.180132
    }
  },
  {
    "name": "Apple 天津恒隆广场",
    "type": "Apple Store 直营店",
    "city": "天津",
    "district": "和平区",
    "address": "天津市和平区兴安路 166 号",
    "phone": "400-613-9744",
    "geo": {
      "lat": 39.12758,
      "lng": 117.199874
    }
  },
  {
    "name": "天音－天津万达苹果店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "天津",
    "district": "河西区",
    "address": "天津市河东区万达广场写字楼A座1402室 ( Mac 产品提供送修服务 )",
    "phone": "022-22753210",
    "geo": {
      "lat": 39.124145,
      "lng": 117.253236
    }
  },
  {
    "name": "酷动－天津东丽万达店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "天津",
    "district": "红桥区",
    "address": "天津市东丽区先锋东路6号天津东丽万达广场1F层1065铺",
    "phone": "022-58301290",
    "geo": {
      "lat": 39.080717,
      "lng": 117.326743
    }
  },
  {
    "name": "iGallery－太原万象城店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "太原",
    "district": "万柏林区",
    "address": "山西省太原市万柏林区长风商务区长兴路5号万象城L2层L244号商铺",
    "phone": "0351-6072665",
    "geo": {
      "lat": 37.807623,
      "lng": 112.528557
    }
  },
  {
    "name": "天音－太原华宇店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "太原",
    "district": "迎泽区",
    "address": "山西省太原市迎泽区开化寺街181号华宇写字楼10层1001室 ( Mac 产品提供送修服务 )",
    "phone": "0351-8308980",
    "geo": {
      "lat": 37.865331,
      "lng": 112.561589
    }
  },
  {
    "name": "百邦－太原贵都店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "太原",
    "district": "迎泽区",
    "address": "山西省太原市迎泽区柳巷南路19号贵都世纪广场212-01",
    "phone": "0351-5253648",
    "geo": {
      "lat": 37.864071,
      "lng": 112.567484
    }
  },
  {
    "name": "直信创邺－太原茂业店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "太原",
    "district": "小店区",
    "address": "山西省太原市小店区亲贤街79号茂业中心1802A室",
    "phone": "0351-75285407528541",
    "geo": {
      "lat": 37.825678,
      "lng": 112.568911
    }
  },
  {
    "name": "亿维－宿迁吾悦广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "宿迁",
    "district": "宿城区",
    "address": "江苏省宿迁市宿城区青海湖西路222号吾悦广场1059、1060号 ( Mac 产品提供送修服务 )",
    "phone": "0527-81187676",
    "geo": {
      "lat": 33.950599,
      "lng": 118.250435
    }
  },
  {
    "name": "天音－宿迁金鹰天地广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "宿迁",
    "district": "宿城区",
    "address": "江苏省宿迁市宿城区西湖路1号天地内4层C01-402商铺",
    "phone": "0527-81888567",
    "geo": {
      "lat": 33.952518,
      "lng": 118.290719
    }
  },
  {
    "name": "天音－惠州华贸大厦店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "惠州",
    "district": "惠城区",
    "address": "广东省惠州市惠城区江北文昌一路11号华贸大厦3号楼38层12号",
    "phone": "0752-2211939",
    "geo": {
      "lat": 23.105082,
      "lng": 114.417085
    }
  },
  {
    "name": "百邦－惠州世贸中心店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "惠州",
    "district": "惠城区",
    "address": "广东省惠州市惠城区新岸路1号世贸中心17层G房",
    "phone": "0752-2230989",
    "geo": {
      "lat": 23.077533,
      "lng": 114.416274
    }
  },
  {
    "name": "百邦－扬州三盛国际广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "扬州",
    "district": "邗江区",
    "address": "江苏省扬州市邗江区江中路358号三盛国际广场4号楼6层5003室",
    "phone": "0514-87939878",
    "geo": {
      "lat": 32.38045,
      "lng": 119.397137
    }
  },
  {
    "name": "Apple 昆明",
    "type": "Apple Store 直营店",
    "city": "昆明",
    "district": "五华区",
    "address": "昆明市五华区东风西路 11 号 顺城购物中心",
    "phone": "400-639-3602",
    "geo": {
      "lat": 25.036014,
      "lng": 102.707263
    }
  },
  {
    "name": "天音－昆明保利中心店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "昆明",
    "district": "西山区",
    "address": "云南省昆明市西山区人民西路保利六合207号1-2108至1-2110室 ( Mac 产品提供送修服务 )",
    "phone": "0871-65382999",
    "geo": {
      "lat": 25.04383,
      "lng": 102.68354
    }
  },
  {
    "name": "尚易－昆明新西南广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "昆明",
    "district": "五华区",
    "address": "云南省昆明市五华区人民中路17号昆百大新西南广场西区二楼W02F02号",
    "phone": "0871-63661198",
    "geo": {
      "lat": 25.041678,
      "lng": 102.71464
    }
  },
  {
    "name": "尚派正品－昆明世纪金源店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "昆明",
    "district": "官渡区",
    "address": "云南省昆明市官渡区世纪金源购物中心C馆D区一层015号商铺",
    "phone": "0871-67213878",
    "geo": {
      "lat": 24.978286,
      "lng": 102.764459
    }
  },
  {
    "name": "尚派正品－昆明瑞鼎城购物公园店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "昆明",
    "district": "盘龙区",
    "address": "中国云南省昆明市盘龙区白云路168号瑞鼎城二期悦容匯购物公园室内一层F1023号商铺",
    "phone": "0871-68227785",
    "geo": {
      "lat": 25.054523,
      "lng": 102.741364
    }
  },
  {
    "name": "新联－江门健威广场店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "江门",
    "district": "蓬江区",
    "address": "广东省江门市蓬江区白石大道213号健威广场1幢第一层L125、L126号商铺",
    "phone": "0750-3213217",
    "geo": {
      "lat": 22.614063,
      "lng": 113.073496
    }
  },
  {
    "name": "新联－江门江海万达店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "江门",
    "district": "江海区",
    "address": "广东省江门市江海区金瓯路198号江海万达广场室内步行街1F层1010B、1011 ( Mac 产品提供送修服务 )",
    "phone": "0750-3388917",
    "geo": {
      "lat": 22.56103,
      "lng": 113.122439
    }
  },
  {
    "name": "直信创邺－江门店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "江门",
    "district": "蓬江区",
    "address": "广东省江门市蓬江区白沙街道港口一路2号（東）东湖E中心7楼702-03",
    "phone": "0750-3113503",
    "geo": {
      "lat": 22.584907,
      "lng": 113.091478
    }
  },
  {
    "name": "Apple 中街大悦城",
    "type": "Apple Store 直营店",
    "city": "沈阳",
    "district": "大东区",
    "address": "沈阳市大东区小东路 5 号",
    "phone": "400-617-1252",
    "geo": {
      "lat": 41.801822,
      "lng": 123.467134
    }
  },
  {
    "name": "Apple 沈阳万象城",
    "type": "Apple Store 直营店",
    "city": "沈阳",
    "district": "和平区",
    "address": "沈阳市和平区青年大街 288 号",
    "phone": "400-617-1274",
    "geo": {
      "lat": 41.775402,
      "lng": 123.434826
    }
  },
  {
    "name": "iHub－沈阳铁西万象汇店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "沈阳",
    "district": "铁西区",
    "address": "辽宁省沈阳市铁西区建设东路158号B193号",
    "phone": "024-85908998",
    "geo": {
      "lat": 41.794805,
      "lng": 123.372404
    }
  },
  {
    "name": "直信创邺－沈阳青年大街店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "沈阳",
    "district": "和平区",
    "address": "辽宁省沈阳市和平区青年大街320号昌鑫大厦E座7楼705室",
    "phone": "024-31897591",
    "geo": {
      "lat": 41.764487,
      "lng": 123.434461
    }
  },
  {
    "name": "天音－泰州茂业天地店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "泰州",
    "district": "海陵区",
    "address": "江苏省泰州市海陵区南通路399号101室（泰州茂业天地内F02005X） ( Mac 产品提供送修服务 )",
    "phone": "0523-86669789",
    "geo": {
      "lat": 32.495957,
      "lng": 119.929171
    }
  },
  {
    "name": "直信创邺－海口国机海南大厦店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "海口",
    "district": "龙华区",
    "address": "海南省海口市龙华区金贸街道国贸路22号国机海南大厦7层7130房",
    "phone": "0898-68529125",
    "geo": {
      "lat": 20.02706,
      "lng": 110.322329
    }
  },
  {
    "name": "立兴－海口东方广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "海口",
    "district": "龙华区",
    "address": "海南省海口市龙华区龙华一横路99号东方广场商场内一楼立兴（星巴克左侧商场入口进入）",
    "phone": "0898-66718005",
    "geo": {
      "lat": 20.039276,
      "lng": 110.337576
    }
  },
  {
    "name": "美承－海口友谊南海城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "海口",
    "district": "龙华区",
    "address": "海南省海口市龙华区南海大道115号友谊南海城一层 ( Mac 产品提供送修服务 )",
    "phone": "0898-66812919",
    "geo": {
      "lat": 19.996576,
      "lng": 110.296414
    }
  },
  {
    "name": "酷动－海口万象城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "海口",
    "district": "龙华区",
    "address": "海南省海口市龙华区金贸东路4号万象城3楼L362+L363铺",
    "phone": "0898-66773519",
    "geo": {
      "lat": 20.027577,
      "lng": 110.31468
    }
  },
  {
    "name": "酷动－海口龙湖天街店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "海口",
    "district": "龙华区",
    "address": "海南省海口市龙华区南海大道15号龙湖天街1楼B-1F-16号",
    "phone": "0898-66775031",
    "geo": {
      "lat": 19.996821,
      "lng": 110.331443
    }
  },
  {
    "name": "天音－淮安万达店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "淮安",
    "district": "清江浦区",
    "address": "江苏省淮安市清江浦区翔宇中道157号万达广场万达中心楼912室",
    "phone": "0517-83387788",
    "geo": {
      "lat": 33.599568,
      "lng": 119.048102
    }
  },
  {
    "name": "百邦－温岭店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "温岭",
    "district": "温岭中心区",
    "address": "浙江省台州市温岭市太平街道人民西路164-166号",
    "phone": "0576-80688660",
    "geo": {
      "lat": 28.364068,
      "lng": 121.362974
    }
  },
  {
    "name": "Apple 温州万象城",
    "type": "Apple Store 直营店",
    "city": "温州",
    "district": "瓯海区",
    "address": "浙江省温州市瓯海区瓯越大道1999号 温州万象城 L1层",
    "phone": "400-000-2385",
    "geo": {
      "lat": 27.953427,
      "lng": 120.68592
    }
  },
  {
    "name": "品丰科技－温州印象城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "温州",
    "district": "鹿城区",
    "address": "浙江省温州市鹿城区府东路333号印象城1楼23号",
    "phone": "0577-89791553",
    "geo": {
      "lat": 27.985551,
      "lng": 120.701568
    }
  },
  {
    "name": "百邦－温州瓯海银泰店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "温州",
    "district": "瓯海区",
    "address": "浙江省温州市瓯海区瓯海大道1299号大西洋银泰城F1层L1027号铺",
    "phone": "0577-89863933",
    "geo": {
      "lat": 27.956057,
      "lng": 120.597365
    }
  },
  {
    "name": "直信创邺－温州世贸店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "温州",
    "district": "鹿城区",
    "address": "浙江省温州市鹿城区大南街道大南路温州世贸中心2103室",
    "phone": "0577-88837709",
    "geo": {
      "lat": 28.00558,
      "lng": 120.66469
    }
  },
  {
    "name": "品丰科技－湖州东吴银泰城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "湖州",
    "district": "吴兴区",
    "address": "浙江省湖州市吴兴区爱山街道劳动路518号东吴国际广场龙玺公馆湖州银泰城F1-1-02号 ( Mac 产品提供送修服务 )",
    "phone": "0572-2022567",
    "geo": {
      "lat": 30.874357,
      "lng": 120.099072
    }
  },
  {
    "name": "亿维－烟台永旺梦乐城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "烟台",
    "district": "福山区",
    "address": "山东省烟台市福山区长江路120号永旺梦乐城152-A",
    "phone": "0535-6965854",
    "geo": {
      "lat": 37.56875,
      "lng": 121.189743
    }
  },
  {
    "name": "百邦－烟台店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "烟台",
    "district": "芝罘区",
    "address": "山东省烟台市芝罘区南大街158－3号鲁东国际3306室",
    "phone": "0535-62551306258766",
    "geo": {
      "lat": 37.543193,
      "lng": 121.372661
    }
  },
  {
    "name": "新联－珠海富华里店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "珠海",
    "district": "香洲区",
    "address": "广东省珠海市香洲区九州大道西2023号富华里中心之6栋102号、103铺",
    "phone": "0756-8892906",
    "geo": {
      "lat": 22.234455,
      "lng": 113.541259
    }
  },
  {
    "name": "畅航－珠海华发商都店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "珠海",
    "district": "香洲区",
    "address": "广东省珠海市香洲区珠海大道8号华发商都2号楼1层 B1021号商铺",
    "phone": "0756-8508505",
    "geo": {
      "lat": 22.22481,
      "lng": 113.511356
    }
  },
  {
    "name": "直信创邺－珠海梅溪商业广场店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "珠海",
    "district": "香洲区",
    "address": "广东省珠海市香洲区旅游路168号梅溪商业广场B栋正方云溪谷16楼1605室",
    "phone": "0756-8870122",
    "geo": {
      "lat": 22.281626,
      "lng": 113.512887
    }
  },
  {
    "name": "直信创邺－盐城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "盐城",
    "district": "亭湖区",
    "address": "江苏省盐城市建军中路177号汇金购物中心1410-1411室",
    "phone": "0515-88929888",
    "geo": {
      "lat": 33.38063,
      "lng": 120.127972
    }
  },
  {
    "name": "百邦－石家庄东方新世界店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "石家庄",
    "district": "桥西区",
    "address": "河北省石家庄市桥西区中山东路118号东方新世界2层l2-246",
    "phone": "0311-86988229",
    "geo": {
      "lat": 38.042849,
      "lng": 114.503766
    }
  },
  {
    "name": "直信创邺－石家庄东方大厦店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "石家庄",
    "district": "新华区",
    "address": "河北省石家庄市新华区中山西路83号东方大厦1216室",
    "phone": "0311-88611268",
    "geo": {
      "lat": 38.044169,
      "lng": 114.485188
    }
  },
  {
    "name": "酷动－石家庄北国先天下店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "石家庄",
    "district": "长安区",
    "address": "河北省石家庄市长安区中山东路326号北国先天下一层L162A",
    "phone": "0311-85114866",
    "geo": {
      "lat": 38.042132,
      "lng": 114.526703
    }
  },
  {
    "name": "酷动－石家庄欢乐汇店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "石家庄",
    "district": "裕华区",
    "address": "河北省石家庄市裕华区裕泰街77号欢乐汇一层110-112铺",
    "phone": "0311-85218359",
    "geo": {
      "lat": 37.9961,
      "lng": 114.535947
    }
  },
  {
    "name": "Apple 泰禾广场",
    "type": "Apple Store 直营店",
    "city": "福州",
    "district": "晋安区",
    "address": "福州市晋安区竹屿路 6 号 东二环泰禾广场",
    "phone": "400-617-1354",
    "geo": {
      "lat": 26.090806,
      "lng": 119.336831
    }
  },
  {
    "name": "天音－福州万达店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "福州",
    "district": "仓山区",
    "address": "福建省仓山区金山街道浦上大道272号仓山万达广场A2#楼8层03室",
    "phone": "0591-83364240",
    "geo": {
      "lat": 26.035884,
      "lng": 119.275043
    }
  },
  {
    "name": "直信创邺－福州五一北路店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "福州",
    "district": "鼓楼区",
    "address": "福建省福州市鼓楼区五一北路153号正祥中心3号楼9层03室",
    "phone": "0591-87806021",
    "geo": {
      "lat": 26.078372,
      "lng": 119.310952
    }
  },
  {
    "name": "酷动－福州万象城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "福州",
    "district": "台江区",
    "address": "福建省福州市台江区上海街道西环中路691号万象商业广场第一层编号105B号商铺",
    "phone": "0591-83734358",
    "geo": {
      "lat": 26.064668,
      "lng": 119.290057
    }
  },
  {
    "name": "品丰科技－绍兴苏宁广场店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "绍兴",
    "district": "越城区",
    "address": "浙江省绍兴市越城区灵芝街道解放大道190号绍兴苏宁广场第1层第156号商铺",
    "phone": "0575-88058500",
    "geo": {
      "lat": 30.045739,
      "lng": 120.579144
    }
  },
  {
    "name": "百邦－绍兴迪荡店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "绍兴",
    "district": "越城区",
    "address": "浙江省绍兴市越城区迪荡湖路68号昆仑国际2号楼502室",
    "phone": "0575-85229668",
    "geo": {
      "lat": 30.003717,
      "lng": 120.601073
    }
  },
  {
    "name": "尚派正品－西宁中惠万达店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "西宁",
    "district": "城东区",
    "address": "青海省西宁市城东区南山东路68号中惠万达广场步行街1F层1027号 ( Mac 产品提供送修服务 )",
    "phone": "0971-7281248",
    "geo": {
      "lat": 36.595192,
      "lng": 101.799044
    }
  },
  {
    "name": "百邦－西宁店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "西宁",
    "district": "城西区",
    "address": "青海省西宁市城西区西关大街46号纺织品商场5楼百邦苹果售后",
    "phone": "0971-6166196",
    "geo": {
      "lat": 36.628025,
      "lng": 101.759007
    }
  },
  {
    "name": "尚派正品－贵阳国贸逸天城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "贵阳",
    "district": "南明区",
    "address": "贵州省贵阳市南明区市南路42号国贸逸天城L1-122",
    "phone": "0851-85510880",
    "geo": {
      "lat": 26.564218,
      "lng": 106.723443
    }
  },
  {
    "name": "立兴－贵阳智诚潮流汇店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "贵阳",
    "district": "云岩区",
    "address": "贵州省贵阳市云岩区中山东路2号智诚潮流汇4层1号E-10区",
    "phone": "0851-85910011",
    "geo": {
      "lat": 26.577191,
      "lng": 106.712987
    }
  },
  {
    "name": "天音－连云港店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "连云港",
    "district": "海州区",
    "address": "江苏省连云港市海州区海连东路26号润潮国际大厦L16-03",
    "phone": "0518-85350888",
    "geo": {
      "lat": 34.602776,
      "lng": 119.194111
    }
  },
  {
    "name": "立兴－维修专车上门服务 ⛟",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "郑州全城可达。",
    "district": "金水区",
    "address": "认证的 Apple 技术人员将在预约的时间和地点抵达, 预约时敬请留存您的联系方式. 我们将在定制的维修专车内为您的设备进行服务, 更多信息请参看网站内容",
    "phone": "0371-55556672",
    "geo": {
      "lat": 34.803284,
      "lng": 113.581912
    }
  },
  {
    "name": "尚派正品－银川新百中心店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "银川",
    "district": "兴庆区",
    "address": "宁夏回族自治区银川市兴庆区新华街街道新百总店B馆店第1F层B1-05号",
    "phone": "18995091874",
    "geo": {
      "lat": 38.462208,
      "lng": 106.2809
    }
  },
  {
    "name": "百邦－银川店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "银川",
    "district": "兴庆区",
    "address": "宁夏回族自治区银川市兴庆区解放西街2号老大楼写字楼15楼1502-1504",
    "phone": "0951-6089966",
    "geo": {
      "lat": 38.46616,
      "lng": 106.275443
    }
  },
  {
    "name": "直信创邺－银川店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "银川",
    "district": "兴庆区",
    "address": "宁夏银川市兴庆区中山南街44号（宁夏日报社对面）",
    "phone": "136295009000951-2089777",
    "geo": {
      "lat": 38.461856,
      "lng": 106.285577
    }
  },
  {
    "name": "直信创邺－镇江八佰伴店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "镇江",
    "district": "京口区",
    "address": "江苏省镇江市京口区中山路288号902室",
    "phone": "0511-8808258085012229",
    "geo": {
      "lat": 32.205143,
      "lng": 119.449186
    }
  },
  {
    "name": "iGallery－长春万象城店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "长春",
    "district": "城关区",
    "address": "吉林省长春市城关区人民大街3388号华润置地长春万象城B154号商铺",
    "phone": "0431-81813002",
    "geo": {
      "lat": 43.879077,
      "lng": 125.325912
    }
  },
  {
    "name": "iGallery－长春万达店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "长春",
    "district": "朝阳区",
    "address": "吉林省长春市朝阳区红旗街616号万达广场2楼253、255室",
    "phone": "0431-80561339",
    "geo": {
      "lat": 43.867299,
      "lng": 125.296994
    }
  },
  {
    "name": "iGallery－长春摩天活力城店－Apple 优质合作商",
    "type": "Apple 优质合作商 (AASP)",
    "city": "长春",
    "district": "南关区",
    "address": "吉林省长春市经济开发区卫星路1777号长春摩天活力城购物中心一层129号商铺",
    "phone": "0431-80531930",
    "geo": {
      "lat": 43.834506,
      "lng": 125.379529
    }
  },
  {
    "name": "天音－长春活力城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "长春",
    "district": "南关区",
    "address": "吉林省长春市南关区重庆路88号长春活力城101号328号铺 ( Mac 产品提供送修服务 )",
    "phone": "0431-88593313",
    "geo": {
      "lat": 43.89111,
      "lng": 125.334032
    }
  },
  {
    "name": "百邦－长春欧亚春城店",
    "type": "Apple 授权服务提供商 (AASP)",
    "city": "长春",
    "district": "绿园区",
    "address": "吉林省长春市绿园区春城大街1077号欧亚春城购物中心3层001号",
    "phone": "0431-82726233",
    "geo": {
      "lat": 43.892817,
      "lng": 125.261473
    }
  }
];
if (typeof window !== "undefined") window.storesData = storesData;
