// 一年级下册语文知识数据
// 数据来源：人教版一年级下册语文课本

// =====================
// 古诗文数据
// =====================
const poemsData = [
  {
    id: 1,
    title: "春晓",
    author: "孟浩然",
    dynasty: "唐",
    lines: ["春眠不觉晓，", "处处闻啼鸟。", "夜来风雨声，", "花落知多少。"],
    meaning: "春天的夜晚睡得很香，不知不觉天就亮了。醒来听到处处是鸟鸣声。昨夜刮风下雨，不知道花儿落了多少。",
    keyImages: ["春眠", "啼鸟", "风雨", "落花"],
    emotion: "对春天景物的喜爱，对落花的惋惜",
    quiz: {
      question: "《春晓》的作者是谁？",
      options: ["李白", "孟浩然", "杜甫", "白居易"],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    title: "寻隐者不遇",
    author: "贾岛",
    dynasty: "唐",
    lines: ["松下问童子，", "言师采药去。", "只在此山中，", "云深不知处。"],
    meaning: "在松树下问小童子，他说师傅去采药了。就在这座山里，但云雾太浓，不知道具体在哪儿。",
    keyImages: ["松", "童子", "山", "云"],
    emotion: "寻访不遇的怅惘，对隐者生活的向往",
    quiz: {
      question: "《寻隐者不遇》中，童子说师傅去干什么了？",
      options: ["打猎", "采药", "游山", "种田"],
      correctAnswer: 1
    }
  },
  {
    id: 3,
    title: "赠汪伦",
    author: "李白",
    dynasty: "唐",
    lines: ["李白乘舟将欲行，", "忽闻岸上踏歌声。", "桃花潭水深千尺，", "不及汪伦送我情。"],
    meaning: "我坐船正要出发，忽然听到岸上传来唱歌的声音。桃花潭的水即使有千尺深，也比不上汪伦对我的情谊深。",
    keyImages: ["舟", "踏歌", "桃花潭"],
    emotion: "对友情的珍视",
    technique: "夸张 + 对比（用潭水之深比喻友情之深）",
    quiz: {
      question: "\"桃花潭水深千尺，不及汪伦送我情\"用了什么修辞手法？",
      options: ["拟人", "夸张和对比", "比喻", "排比"],
      correctAnswer: 1
    }
  },
  {
    id: 4,
    title: "静夜思",
    author: "李白",
    dynasty: "唐",
    lines: ["床前明月光，", "疑是地上霜。", "举头望明月，", "低头思故乡。"],
    meaning: "月光照在床前，好像地上的白霜。抬头望着明亮的月亮，不由得低下头想念家乡。",
    keyImages: ["明月", "霜", "故乡"],
    emotion: "游子思乡",
    technique: "疑→举头→低头（由景到情）",
    quiz: {
      question: "《静夜思》中，诗人把月光比作什么？",
      options: ["白雪", "地上的霜", "白纸", "白云"],
      correctAnswer: 1
    }
  },
  {
    id: 5,
    title: "池上",
    author: "白居易",
    dynasty: "唐",
    lines: ["小娃撑小艇，", "偷采白莲回。", "不解藏踪迹，", "浮萍一道开。"],
    meaning: "小娃娃撑着小船，偷偷地采了白莲回来。他不懂得隐藏踪迹，水面的浮萍被船划开了一道线。",
    keyImages: ["小娃", "小艇", "白莲", "浮萍"],
    emotion: "顽皮、天真、可爱",
    note: "\"不解\"的\"解\"读 jiě：理解、懂得的意思",
    quiz: {
      question: "《池上》中，小娃娃\"偷采\"了什么回来？",
      options: ["荷叶", "白莲", "鱼儿", "菱角"],
      correctAnswer: 1
    }
  },
  {
    id: 6,
    title: "小池",
    author: "杨万里",
    dynasty: "宋",
    lines: ["泉眼无声惜细流，", "树阴照水爱晴柔。", "小荷才露尖尖角，", "早有蜻蜓立上头。"],
    meaning: "泉水眼悄悄地流淌，好像很珍惜这细细的水流。树荫倒映在水面上，喜爱晴天的柔和风光。嫩荷叶刚刚露出尖尖的角，就已经有蜻蜓停在上面了。",
    keyImages: ["泉眼", "细流", "小荷", "蜻蜓"],
    emotion: "对夏日小池美景的喜爱",
    technique: "拟人（\"惜\"\"爱\"）",
    quiz: {
      question: "\"小荷才露尖尖角，早有蜻蜓立上头\"出自哪首诗？",
      options: ["春晓", "池上", "小池", "静夜思"],
      correctAnswer: 2
    }
  },
  {
    id: 7,
    title: "画鸡",
    author: "唐寅",
    dynasty: "明",
    lines: ["头上红冠不用裁，", "满身雪白走将来。", "平生不敢轻言语，", "一叫千门万户开。"],
    meaning: "头上鲜红的冠子不用裁剪，浑身的雪白羽毛走来走去。一生中不敢随便说话，一叫起来千家万户的门都开了。",
    keyImages: ["红冠", "雪白", "公鸡"],
    emotion: "赞美公鸡",
    note: "\"走将来\"：走过来；寓意：不鸣则已，一鸣惊人",
    quiz: {
      question: "《画鸡》描写的是什么动物？",
      options: ["母鸡", "公鸡", "小鸭", "大鹅"],
      correctAnswer: 1
    }
  }
];

// =====================
// 课文背诵数据
// =====================
const lessonsData = [
  {
    id: 1,
    title: "春夏秋冬",
    type: "识字课",
    unit: "第一单元",
    content: "春风吹，夏雨落，秋霜降，冬雪飘。",
    moral: "描绘四季美丽景色，激发对大自然的热爱",
    keyPoints: ["春风：柳绿花红", "夏雨：荷花已开", "秋霜：树叶金黄", "冬雪：鹅毛大雪"],
    quiz: {
      question: "\"春风吹，夏雨____，秋霜降，冬雪____\"补全句子",
      options: ["下/落", "落/飘", "降/下", "吹/飘"],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    title: "姓氏歌",
    type: "识字课",
    unit: "第一单元",
    content: "你姓什么？我姓李。什么李？木子李。他姓张。什么张？弓长张。中国姓氏有很多：赵、钱、孙、李，周、吴、郑、王。",
    moral: "用分解部件和偏旁称说的方法介绍姓氏",
    keyPoints: ["李 = 木 + 子（上下分解）", "张 = 弓 + 长（左右分解）", "许 = 言 + 午（左右分解）", "徐 = 双人旁 + 余（偏旁称说）"],
    quiz: {
      question: "用姓氏分解法，\"张\"字怎么介绍？",
      options: ["弓长张", "木子张", "言午张", "双人张"],
      correctAnswer: 0
    }
  },
  {
    id: 3,
    title: "吃水不忘挖井人",
    type: "课文",
    unit: "第一单元",
    content: "毛主席带领乡亲们挖井，解决了乡亲们喝水难的问题。乡亲们为了纪念他，在井旁立了一块石碑。",
    moral: "幸福来之不易，学会感恩",
    keyPoints: ["饮水思源的道理", "感恩的重要性"],
    quiz: {
      question: "《吃水不忘挖井人》告诉我们什么道理？",
      options: ["要节约用水", "幸福来之不易，要学会感恩", "要保护环境", "要帮助他人"],
      correctAnswer: 1
    }
  },
  {
    id: 4,
    title: "树和喜鹊",
    type: "课文",
    unit: "第二单元",
    content: "树很孤单，喜鹊也很孤单。后来，这里种了好多树，来了好多喜鹊。树有了邻居，喜鹊也有了邻居，他们天天快快乐乐地生活在一起。",
    moral: "每个人都需要朋友，有朋友才快乐",
    keyPoints: ["孤单→快乐的转变", "朋友的重要性"],
    quiz: {
      question: "《树和喜鹊》中，树和喜鹊为什么从孤单变得快乐了？",
      options: ["天气变好了", "有了邻居和朋友", "找到了食物", "种了很多花"],
      correctAnswer: 1
    }
  },
  {
    id: 5,
    title: "端午粽",
    type: "课文",
    unit: "第三单元",
    content: "粽子是用青青的箬竹叶包的，里面裹着白白的糯米，中间有一颗红红的枣。",
    moral: "介绍粽子的外形和传统由来，表达对传统节日的热爱",
    keyPoints: ["粽子原料：箬竹叶、糯米、红枣", "端午节的由来"],
    quiz: {
      question: "粽子是用什么叶子包的？",
      options: ["竹叶", "箬竹叶", "荷叶", "柳叶"],
      correctAnswer: 1
    }
  },
  {
    id: 6,
    title: "古对今",
    type: "识字课",
    unit: "第四单元",
    content: "古对今，圆对方。严寒对酷暑，春暖对秋凉。晨对暮，雪对霜。和风对细雨，朝霞对夕阳。",
    moral: "四季轮回，昼夜交替，热爱大自然",
    keyPoints: ["古↔今", "圆↔方", "严寒↔酷暑", "晨↔暮"],
    quiz: {
      question: "\"严寒\"对什么？",
      options: ["春暖", "秋凉", "酷暑", "冬雪"],
      correctAnswer: 2
    }
  },
  {
    id: 7,
    title: "荷叶圆圆",
    type: "课文",
    unit: "第五单元",
    content: "荷叶圆圆的，绿绿的。小水珠说：'荷叶是我的摇篮。'小蜻蜓说：'荷叶是我的停机坪。'小青蛙说：'荷叶是我的歌台。'小鱼儿说：'荷叶是我的凉伞。'",
    moral: "描绘夏日荷塘，洋溢童真童趣",
    keyPoints: ["荷叶是小水珠的摇篮", "荷叶是小蜻蜓的停机坪", "荷叶是小青蛙的歌台", "荷叶是小鱼儿的凉伞"],
    quiz: {
      question: "在《荷叶圆圆》中，小青蛙把荷叶当作什么？",
      options: ["摇篮", "停机坪", "歌台", "凉伞"],
      correctAnswer: 2
    }
  },
  {
    id: 8,
    title: "小猴子下山",
    type: "课文",
    unit: "第七单元",
    content: "小猴子下山，先掰玉米，扔玉米去摘桃子，扔桃子去抱西瓜，扔西瓜去追兔子，兔子跑进树林不见了，小猴子只好空着手回家去了。",
    moral: "做事要有目标，始终如一，否则一无所获",
    keyPoints: ["掰玉米→摘桃子→抱西瓜→追兔子", "每次都扔掉手里的", "最终空手而归"],
    quiz: {
      question: "《小猴子下山》告诉我们什么道理？",
      options: ["要多吃水果", "做事要有目标，始终如一", "不要贪心", "要爱护小动物"],
      correctAnswer: 1
    }
  },
  {
    id: 9,
    title: "咕咚",
    type: "课文",
    unit: "第八单元",
    content: "木瓜掉进湖里，发出\"咕咚\"的声音，兔子以为是可怕的怪物，跑了起来，其他动物也跟着跑。后来大象拦住大家，才知道\"咕咚\"是木瓜落水声。",
    moral: "遇事要动脑筋，不要盲目跟从",
    keyPoints: ["咕咚 = 木瓜掉进湖里的声音", "遇事要问清楚再行动"],
    quiz: {
      question: "《咕咚》中，\"咕咚\"究竟是什么声音？",
      options: ["怪物的叫声", "打雷的声音", "木瓜掉进湖里的声音", "河里有大鱼"],
      correctAnswer: 2
    }
  },
  {
    id: 10,
    title: "小壁虎借尾巴",
    type: "课文",
    unit: "第八单元",
    content: "小壁虎向小鱼借尾巴——小鱼用尾巴拨水，不能借；向老牛借——老牛用尾巴赶蝇子，不能借；向燕子借——燕子用尾巴掌握方向，不能借。后来小壁虎自己长出了新尾巴。",
    moral: "壁虎的尾巴可以再生，各种动物尾巴各有用途",
    keyPoints: ["小鱼尾巴：拨水", "老牛尾巴：赶蝇子", "燕子尾巴：掌握方向", "壁虎尾巴：可以再生"],
    quiz: {
      question: "《小壁虎借尾巴》中，燕子用尾巴做什么？",
      options: ["拨水", "赶蝇子", "掌握方向", "飞翔"],
      correctAnswer: 2
    }
  }
];

// =====================
// 日积月累数据
// =====================
const rijiData = [
  {
    id: 1,
    category: "歇后语",
    unit: "园地五",
    items: [
      {
        front: "竹篮子打水",
        back: "一场空",
        meaning: "比喻白费力气，没有效果，劳而无功"
      },
      {
        front: "芝麻开花",
        back: "节节高",
        meaning: "形容事物不断进步、越来越好"
      },
      {
        front: "十五个吊桶打水",
        back: "七上八下",
        meaning: "形容心里慌乱不安，也指零乱不齐"
      }
    ],
    quiz: {
      question: "\"竹篮子打水——____\"",
      options: ["一场空", "满水桶", "节节高", "七上八下"],
      correctAnswer: 0
    }
  },
  {
    id: 2,
    category: "天气谚语",
    unit: "园地六",
    items: [
      {
        front: "朝霞不出门",
        back: "晚霞行千里",
        meaning: "早晨红霞预示有雨，不宜出门；傍晚红霞预示天晴，可以远行"
      },
      {
        front: "有雨山戴帽",
        back: "无雨半山腰",
        meaning: "云在山顶要下雨；云在半山腰不会下雨"
      },
      {
        front: "早晨下雨当日晴",
        back: "晚上下雨到天明",
        meaning: "早上下雨当天就会停；晚上下雨会一直下到天亮"
      },
      {
        front: "蚂蚁搬家蛇过道",
        back: "大雨不久要来到",
        meaning: "蚂蚁搬家、蛇过路预示不久有大雨"
      }
    ],
    quiz: {
      question: "看到蚂蚁在搬家，用谚语预测什么天气？",
      options: ["天气晴朗", "大雪要来", "大雨不久要来到", "起大风"],
      correctAnswer: 2
    }
  },
  {
    id: 3,
    category: "学习名言",
    unit: "园地七",
    items: [
      {
        front: "不知则问，不能则学",
        back: "出自《荀子》",
        meaning: "不知道的就要虚心请教，不会的就要深入学习"
      },
      {
        front: "读书百遍，而义自见",
        back: "出自《董遇》",
        meaning: "读书读多了，意思自然就明白了（\"见\"读 xiàn）"
      },
      {
        front: "读万卷书，行万里路",
        back: "出自董其昌",
        meaning: "多读书如同多走路一样，形容见多识广"
      }
    ],
    quiz: {
      question: "\"读书百遍，而义自见\"中的\"见\"读什么音？",
      options: ["jiàn", "xiàn", "jiā", "xiā"],
      correctAnswer: 1
    }
  },
  {
    id: 4,
    category: "家庭亲情四字词语",
    unit: "园地四",
    items: [
      { front: "尊老爱幼", back: "尊敬老人，爱护幼小", meaning: "中华传统美德" },
      { front: "同心协力", back: "齐心合力，共同努力", meaning: "形容团结一致" },
      { front: "其乐融融", back: "快乐和谐的样子", meaning: "描写家庭温馨" },
      { front: "同甘共苦", back: "一起享受幸福，一起承担困难", meaning: "形容患难与共" },
      { front: "天伦之乐", back: "家庭中亲人团聚的快乐", meaning: "家庭幸福" },
      { front: "手足情深", back: "兄弟姐妹感情深厚", meaning: "手足 = 兄弟姐妹" }
    ],
    quiz: {
      question: "\"手足情深\"中的\"手足\"指什么？",
      options: ["手和脚", "兄弟姐妹", "劳动人民", "好朋友"],
      correctAnswer: 1
    }
  },
  {
    id: 5,
    category: "对韵成语",
    unit: "识字6《古对今》",
    items: [
      { front: "莺歌燕舞", back: "黄莺唱歌，燕子飞舞", meaning: "形容大好春光" },
      { front: "鸟语花香", back: "鸟叫好听，花散芳香", meaning: "形容春天美景" },
      { front: "高山流水", back: "比喻知音难觅或乐曲高妙", meaning: "形容深情厚谊" },
      { front: "高瞻远瞩", back: "站得高看得远", meaning: "形容眼光远大" },
      { front: "足智多谋", back: "智慧丰富，善于谋划", meaning: "形容聪明能干" },
      { front: "破釜沉舟", back: "比喻下决心不顾一切干到底", meaning: "形容意志坚定" }
    ],
    quiz: {
      question: "哪个成语比喻\"下决心不顾一切干到底\"？",
      options: ["高瞻远瞩", "足智多谋", "破釜沉舟", "高山流水"],
      correctAnswer: 2
    }
  }
];

// =====================
// 词语积累数据
// =====================
const vocabData = [
  {
    id: 1,
    category: "AABB式词语",
    description: "叠字词语，读起来朗朗上口",
    items: [
      { word: "安安静静", type: "状态", usage: "教室里安安静静的。" },
      { word: "快快乐乐", type: "心情", usage: "小朋友快快乐乐地玩耍。" },
      { word: "干干净净", type: "状态", usage: "桌子擦得干干净净。" },
      { word: "叽叽喳喳", type: "声音", usage: "小鸟叽叽喳喳地叫。" },
      { word: "蹦蹦跳跳", type: "动作", usage: "兔子蹦蹦跳跳地跑来。" },
      { word: "开开心心", type: "心情", usage: "我们开开心心地过节。" },
      { word: "高高兴兴", type: "心情", usage: "大家高高兴兴地出发了。" },
      { word: "来来往往", type: "动作", usage: "街上的人来来往往。" }
    ],
    quiz: {
      question: "下面哪个是AABB式词语？",
      options: ["金灿灿", "安安静静", "碧绿碧绿", "静悄悄"],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    category: "ABB式词语",
    description: "后两个字相同，增强描写效果",
    items: [
      { word: "金灿灿", type: "颜色", usage: "金灿灿的麦穗在风中摇摆。" },
      { word: "绿油油", type: "颜色", usage: "绿油油的草地真好看。" },
      { word: "亮晶晶", type: "外观", usage: "亮晶晶的露珠挂在叶子上。" },
      { word: "静悄悄", type: "声音", usage: "夜里静悄悄的，没有声音。" },
      { word: "轰隆隆", type: "声音", usage: "轰隆隆的雷声响起来了。" },
      { word: "暖洋洋", type: "感受", usage: "阳光照在身上暖洋洋的。" },
      { word: "笑嘻嘻", type: "表情", usage: "小朋友笑嘻嘻地跑过来。" },
      { word: "喜洋洋", type: "心情", usage: "过节了，大家喜洋洋的。" }
    ],
    quiz: {
      question: "\"金灿灿\"是哪种结构的词语？",
      options: ["AABB式", "ABAB式", "ABB式", "叠词"],
      correctAnswer: 2
    }
  },
  {
    id: 3,
    category: "ABAB式词语",
    description: "前两个字重复，多用于描写颜色",
    items: [
      { word: "碧绿碧绿", type: "颜色", usage: "草地碧绿碧绿的，像一块大地毯。" },
      { word: "雪白雪白", type: "颜色", usage: "棉花姑娘长出了雪白雪白的棉花。" },
      { word: "瓦蓝瓦蓝", type: "颜色", usage: "天空瓦蓝瓦蓝的，没有一朵云。" },
      { word: "火红火红", type: "颜色", usage: "枫叶火红火红的，真好看。" }
    ],
    quiz: {
      question: "\"碧绿碧绿\"描写的是什么颜色？",
      options: ["红色", "蓝色", "绿色", "黄色"],
      correctAnswer: 2
    }
  },
  {
    id: 4,
    category: "拟声词",
    description: "模拟各种声音的词语",
    items: [
      { word: "哗哗哗", type: "自然声", usage: "下大雨了，哗哗哗的。" },
      { word: "轰隆隆", type: "自然声", usage: "轰隆隆，天空响起了雷声。" },
      { word: "叽叽喳喳", type: "动物声", usage: "小鸟叽叽喳喳地叫。" },
      { word: "嘎嘎嘎", type: "动物声", usage: "小鸭子嘎嘎嘎地叫着。" },
      { word: "滴答", type: "生活声", usage: "滴答滴答，钟声响了。" },
      { word: "叮咚", type: "生活声", usage: "叮咚叮咚，有人按门铃了。" },
      { word: "咕咚", type: "生活声", usage: "咕咚一声，东西掉进了水里。" },
      { word: "沙沙沙", type: "自然声", usage: "风吹树叶沙沙沙地响。" }
    ],
    quiz: {
      question: "\"滴答滴答\"是什么声音？",
      options: ["下雨声", "钟表声", "敲门声", "流水声"],
      correctAnswer: 1
    }
  },
  {
    id: 5,
    category: "四季词语",
    description: "描写四季景象的词语",
    items: [
      { word: "春风吹", type: "春天", usage: "春风吹，万物复苏。" },
      { word: "夏雨落", type: "夏天", usage: "夏雨落，荷花盛开。" },
      { word: "秋霜降", type: "秋天", usage: "秋霜降，枫叶变红。" },
      { word: "冬雪飘", type: "冬天", usage: "冬雪飘，大地一片白。" },
      { word: "百花开", type: "春天", usage: "春天百花开，真美丽。" },
      { word: "燕子归", type: "春天", usage: "春天燕子归来筑新巢。" },
      { word: "大雁飞", type: "秋天", usage: "秋天大雁飞向南方。" },
      { word: "北风吹", type: "冬天", usage: "冬天北风吹，天气寒冷。" }
    ],
    quiz: {
      question: "\"大雁飞\"描写的是哪个季节？",
      options: ["春天", "夏天", "秋天", "冬天"],
      correctAnswer: 2
    }
  }
];

// =====================
// 近反义词数据
// =====================
const synonymsData = [
  {
    id: 1,
    type: "近义词",
    pairs: [
      { word: "喜欢", synonym: "热爱", example: "我喜欢/热爱读书。" },
      { word: "保护", synonym: "爱护", example: "我们要保护/爱护小动物。" },
      { word: "忽然", synonym: "突然", example: "天气忽然/突然变冷了。" },
      { word: "快乐", synonym: "高兴", example: "和朋友在一起很快乐/高兴。" },
      { word: "从前", synonym: "以前", example: "从前/以前这里没有桥。" },
      { word: "仔细", synonym: "认真", example: "做作业要仔细/认真。" },
      { word: "非常", synonym: "特别", example: "今天非常/特别高兴。" },
      { word: "孤单", synonym: "孤独", example: "一个人时感到很孤单/孤独。" }
    ],
    quiz: {
      question: "\"忽然\"的近义词是什么？",
      options: ["从来", "突然", "以后", "慢慢"],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    type: "反义词",
    pairs: [
      { word: "古", antonym: "今", example: "古对今，这是反义词。" },
      { word: "好", antonym: "坏", example: "好事和坏事是相反的。" },
      { word: "热闹", antonym: "冷清", example: "市场很热闹，深夜很冷清。" },
      { word: "勇敢", antonym: "怯懦", example: "要做勇敢的人，不做怯懦的人。" },
      { word: "仔细", antonym: "马虎", example: "做事要仔细，不能马虎。" },
      { word: "快乐", antonym: "难过", example: "有朋友快乐，没朋友难过。" },
      { word: "潮湿", antonym: "干燥", example: "南方潮湿，北方干燥。" },
      { word: "严寒", antonym: "酷暑", example: "严寒的冬天和酷暑的夏天。" }
    ],
    quiz: {
      question: "\"仔细\"的反义词是什么？",
      options: ["认真", "马虎", "粗心", "慢慢"],
      correctAnswer: 1
    }
  }
];

// =====================
// 句式仿写数据
// =====================
const sentenceData = [
  {
    id: 1,
    pattern: "在……的句式",
    structure: "谁 + 在哪里 + 做什么",
    example: "花儿在阳光下开放。",
    practices: [
      "鱼儿在小河中游来游去。",
      "鸟儿在树枝上唱歌。",
      "同学们在教室里读书。"
    ],
    quiz: {
      question: "用\"在……\"句式，下面哪句话最完整？",
      options: ["小猫在。", "小猫在睡觉。", "小猫在沙发上睡觉。", "沙发上的小猫。"],
      correctAnswer: 2
    }
  },
  {
    id: 2,
    pattern: "就像……（比喻句）",
    structure: "A + 就像 + B",
    example: "浪花跑去又跑来，就像淘气的小娃娃。",
    practices: [
      "月亮像一个大圆盘挂在天上。",
      "云朵像棉花糖一样软绵绵的。",
      "秋天的枫叶就像一只只小手。"
    ],
    quiz: {
      question: "\"月亮像一个大圆盘\"用了什么修辞手法？",
      options: ["拟人", "比喻", "夸张", "排比"],
      correctAnswer: 1
    }
  },
  {
    id: 3,
    pattern: "一……就……",
    structure: "一 + 动作A，就 + 动作B",
    example: "贝贝一回到家，就向妈妈要新的铅笔。",
    practices: [
      "我一回到家，就开始写作业。",
      "小猫一看到老鼠，就扑了过去。",
      "妈妈一进门，就开始做饭。"
    ],
    quiz: {
      question: "\"____，就开始写作业。\"用\"一……就……\"句式填空最合适的是？",
      options: ["我放学了", "我一放学", "放学以后", "我放了学"],
      correctAnswer: 1
    }
  },
  {
    id: 4,
    pattern: "一边……一边……",
    structure: "同时做两件事",
    example: "大伙儿一边跑一边叫：\"快逃命啊！\"",
    practices: [
      "妈妈一边做饭一边唱歌。",
      "我一边走路一边背课文。",
      "同学们一边笑一边鼓掌。"
    ],
    quiz: {
      question: "\"一边……一边……\"句式表示什么？",
      options: ["先做一件，后做一件", "同时做两件事", "只做一件事", "交替做两件事"],
      correctAnswer: 1
    }
  },
  {
    id: 5,
    pattern: "要是……就……",
    structure: "假设条件 + 结果",
    example: "要是早一分钟就好了。",
    practices: [
      "要是明天不下雨，我们就去春游。",
      "要是我有翅膀，就能飞上天空了。",
      "要是天天都能见到彩虹，那多好啊。"
    ],
    quiz: {
      question: "\"要是……就……\"句式表示什么关系？",
      options: ["因果关系", "并列关系", "假设关系", "转折关系"],
      correctAnswer: 2
    }
  },
  {
    id: 6,
    pattern: "ABAB式（让句子更形象）",
    structure: "ABAB形容词 + 的 + 名词",
    example: "棉花姑娘长出了雪白雪白的棉花。",
    practices: [
      "天空瓦蓝瓦蓝的，像一片大海。",
      "草地碧绿碧绿的，像一块大地毯。",
      "桃花粉红粉红的，真漂亮。"
    ],
    quiz: {
      question: "用ABAB式写句子，下面哪句最好？",
      options: ["天空蓝蓝的。", "天空瓦蓝瓦蓝的，真美丽。", "天空是蓝色的。", "蓝天白云很好看。"],
      correctAnswer: 1
    }
  },
  {
    id: 7,
    pattern: "用拟声词写句子",
    structure: "拟声词 + 发出声音的事物 + 动作",
    example: "轰隆隆，天空响起了一阵雷声。",
    practices: [
      "丁零零……闹钟响了，欢欢伸了个懒腰。",
      "滴答滴答，小雨点落在窗户上。",
      "叽叽喳喳，小鸟在枝头欢快地叫着。"
    ],
    quiz: {
      question: "\"____，门铃响了，有人来了。\"填入哪个拟声词最合适？",
      options: ["轰隆隆", "哗哗哗", "叮咚叮咚", "嘎嘎嘎"],
      correctAnswer: 2
    }
  },
  {
    id: 8,
    pattern: "也……的句式",
    structure: "A + 形容词，B + 也 + 形容词",
    example: "树很孤单，喜鹊也很孤单。",
    practices: [
      "弟弟很开心，我也很开心。",
      "花儿很美丽，草儿也很美丽。",
      "哥哥很高兴，妹妹也很高兴。"
    ],
    quiz: {
      question: "仿照\"树很孤单，喜鹊也很孤单\"，下面哪句符合句式？",
      options: ["天很蓝，云很白。", "小鸟很快乐，蝴蝶也很快乐。", "春天来了，花开了。", "我和朋友一起玩。"],
      correctAnswer: 1
    }
  }
];

// 导出所有数据
const ChineseData = {
  poems: poemsData,
  lessons: lessonsData,
  riji: rijiData,
  vocab: vocabData,
  synonyms: synonymsData,
  sentences: sentenceData
};
