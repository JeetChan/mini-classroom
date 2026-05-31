const WordRoots = [
  {
    id: 1,
    root: "操作词系统 (Operations)",
    origin: "核心框架",
    meaning: "850词中最重要的100个功能性词汇，构成英语句子的语法骨架",
    description: "操作词（Operations）是 Ogden 基础英语的核心组件，共100个词，包括18个核心操作动词、21个方向介词、12个代词以及连词、副词等功能词。这些词虽然数量最少，但使用频率极高——在自然英语文本中，仅 'be, have, do, say, get, make, go' 这7个词就占了日常对话的15%以上。Ogden 的设计思路是：掌握了这些操作词，就等于掌握了英语的'操作系统'，其他词汇只是'应用程序'。",
    examples: [
      { word: "come / go", meaning: "来 / 去", breakdown: { root: "操作动词" }, explanation: "最基础的方向性动作词，取代 arrive、depart 等复杂表达" },
      { word: "get / give", meaning: "得到 / 给予", breakdown: { root: "操作动词" }, explanation: "get 搭配介词可替代 receive、obtain、understand 等多个动词" },
      { word: "put / take", meaning: "放 / 拿", breakdown: { root: "操作动词" }, explanation: "put 加不同介词可表达 put on（穿）、put off（推迟）等丰富含义" }
    ],
    quiz: {
      question: "Basic English 的 850 个词中，操作词（Operations）约占多少？",
      options: ["50 个", "100 个", "200 个", "400 个"],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    root: "18个核心操作动词 (Operators)",
    origin: "核心词汇",
    meaning: "come, get, give, go, keep, let, make, put, seem, take, be, do, have, say, see, send, push, pull",
    description: "Ogden 精心挑选的18个核心操作动词是 Basic English 最精妙的设计。这些动词涵盖了日常行为的基本类型：存在与感知（be, seem, see）、获取与转移（get, give, send, take）、创造与改变（make, put, keep, let）、动作与言语（go, come, do, say）、力量施加（push, pull）。关键优势在于：每个动词都与大量介词组合形成短语动词，如 'make up'（编造）、'put off'（推迟）、'take on'（承担），使得18个动词的实际表达能力远超表面数量。",
    examples: [
      { word: "make up", meaning: "编造；弥补", breakdown: { root: "make" }, explanation: "make + up 组合替代 invent 或 compensate" },
      { word: "put off", meaning: "推迟；使反感", breakdown: { root: "put" }, explanation: "替代 postpone 或 discourage" },
      { word: "take on", meaning: "承担；雇佣", breakdown: { root: "take" }, explanation: "替代 undertake 或 employ" }
    ],
    quiz: {
      question: "以下哪个不是 Ogden 的18个核心操作动词？",
      options: ["make", "run", "take", "give"],
      correctAnswer: 1
    }
  },
  {
    id: 3,
    root: "21个方向介词 (Directions)",
    origin: "核心词汇",
    meaning: "at, in, on, by, with, from, to, up, down, off, over, under, through, across, between, among, after, before, against, about, out",
    description: "这21个介词是 Basic English 的空间语法核心。Ogden 用它们替代了数百个复杂的空间表达词汇，体现了'以少胜多'的设计哲学。例如，'go up'替代 ascend，'go down'替代 descend，'go through'替代 penetrate。每个介词都有清晰的空间原型，从 at（点状位置）到 through（穿过空间）形成了一个完整的空间关系系统。更重要的是，这些介词与操作动词结合后，能表达更加抽象的隐喻含义，如 'think over'（仔细思考）、'look after'（照顾）。",
    examples: [
      { word: "go up / down", meaning: "上升 / 下降", breakdown: { root: "up / down" }, explanation: "替代 ascend / descend，更直观易懂" },
      { word: "get through", meaning: "通过；完成", breakdown: { root: "through" }, explanation: "空间义→隐喻义：从'穿过去'到'完成某事'" },
      { word: "look after", meaning: "照顾；照看", breakdown: { root: "after" }, explanation: "after 从'在后面'引申为'跟随照看'" }
    ],
    quiz: {
      question: "Basic English 中有多少个方向介词？",
      options: ["12个", "18个", "21个", "30个"],
      correctAnswer: 2
    }
  },
  {
    id: 4,
    root: "代词系统 (Pronouns)",
    origin: "核心词汇",
    meaning: "I, you, he, she, it, we, they — 主格与宾格的标准对应",
    description: "Basic English 保留了标准英语的完整代词系统，包括主格（I, you, he, she, it, we, they）和对应的宾格（me, you, him, her, it, us, them）。这是 Ogden 特意保留的'语法复杂度'——他本可以像某些人造语言那样设计中性代词，但选择保留自然英语的代词体系，以确保 Basic English 使用者说的仍然是'正确的英语'而非一门新语言。人称代词是任何语言中最常用的词汇类别，在英语中约占所有对话词汇的12%。",
    examples: [
      { word: "I → me", meaning: "我（主格 → 宾格）", breakdown: { root: "第一人称" }, explanation: "'I see him' vs 'He sees me'，主宾格变化体现语法角色" },
      { word: "we → us", meaning: "我们（主格 → 宾格）", breakdown: { root: "第一人称复数" }, explanation: "'We go' vs 'Give us'，复数形式保持一致性" },
      { word: "he/she/it → him/her/it", meaning: "他/她/它（主格 → 宾格）", breakdown: { root: "第三人称" }, explanation: "第三人称保留性别区分，这是自然语言的特征" }
    ],
    quiz: {
      question: "'I' 的宾格形式是什么？",
      options: ["my", "mine", "me", "myself"],
      correctAnswer: 2
    }
  },
  {
    id: 5,
    root: "普通事物词 (General Things)",
    origin: "分类体系",
    meaning: "400个抽象名词，表达思想、概念、情感等无形事物",
    description: "普通事物词（General Things）是850词中最大的一类，占400个词（47%）。这些词表达的不是具体的、可见的物体，而是抽象的概念：如 'idea'（想法）、'peace'（和平）、'growth'（成长）。Ogden 的设计原则是：如果一个抽象概念可以用更基础的词组合表达，就不单独收录。例如，不收录 'pessimism'（悲观主义），因为可以用 'bad feeling about future' 来表达。这400个词经过了极端严苛的筛选，每一个都必须无法由其他词汇合理替代。",
    examples: [
      { word: "education", meaning: "教育", breakdown: { root: "抽象名称" }, explanation: "涵盖 schooling、teaching、learning 等概念" },
      { word: "government", meaning: "政府；治理", breakdown: { root: "抽象名称" }, explanation: "同时表达机构和过程两个层次" },
      { word: "development", meaning: "发展；开发", breakdown: { root: "抽象名称" }, explanation: "一种可以用'getting better'替代但不精确的概念" }
    ],
    quiz: {
      question: "850词中，普通事物词（General Things）占多少比例？",
      options: ["24%", "12%", "47%", "6%"],
      correctAnswer: 2
    }
  },
  {
    id: 6,
    root: "可描绘事物词 (Picturable Things)",
    origin: "分类体系",
    meaning: "200个具体可视的事物名词，可用图片直接表示",
    description: "可描绘事物词（Picturable Things）共200个（占24%），涵盖所有看得见、摸得着、可以用图片直接展示的具体事物。这包括身体部位（arm, foot, eye）、日常物品（book, door, cup）、自然元素（sun, rain, tree）、动物（cat, fish, bird）等。Ogden 称这些为'picturable'，因为它们可以直接通过图片教学而不需要翻译——这是 Basic English 在国际推广中的重要优势：学习者看着图片就能理解词义，降低了母语干扰。",
    examples: [
      { word: "apple, bread, milk", meaning: "苹果、面包、牛奶", breakdown: { root: "食物类" }, explanation: "日常饮食的基本词汇，可直观展示" },
      { word: "arm, foot, head", meaning: "手臂、脚、头", breakdown: { root: "身体类" }, explanation: "身体部位是每门语言中最先学习的可描绘词" },
      { word: "book, door, cup", meaning: "书、门、杯子", breakdown: { root: "物品类" }, explanation: "生活场景中高频出现的物品" }
    ],
    quiz: {
      question: "可描绘事物词的特点是什么？",
      options: ["全部是抽象概念", "可以用图片直接教学", "只包含动物", "都是动词"],
      correctAnswer: 1
    }
  },
  {
    id: 7,
    root: "性质词系统 (Qualities)",
    origin: "分类体系",
    meaning: "100个一般形容词，描述事物的特征与属性",
    description: "性质词（Qualities）共100个（占12%），包括 good、bad、big、small、hot、cold、new、old 等基本形容词。这些词构成了 Basic English 的描述能力。Ogden 坚持只收录最基础、最通用的形容词，而省略了可以用 'not + 反义词' 表达的形容词。例如，有 'good' 和 'bad'，就不需要 'excellent'（= very good）或 'terrible'（= very bad）。这种设计迫使学习者用组合来表达更精确的含义，反而加深了对基础词汇的理解深度。",
    examples: [
      { word: "good / bad", meaning: "好 / 坏", breakdown: { root: "基础评价" }, explanation: "所有评价性表达的根基，可组合为 'very good'（= excellent）" },
      { word: "big / small", meaning: "大 / 小", breakdown: { root: "尺寸描述" }, explanation: "'very big' 替代 huge，'very small' 替代 tiny" },
      { word: "hot / cold", meaning: "热 / 冷", breakdown: { root: "温度描述" }, explanation: "搭配 'very' 可以表达各种温度级别" }
    ],
    quiz: {
      question: "在 Basic English 中，'excellent' 应该怎么表达？",
      options: ["excellent（保留使用）", "very good", "best thing", "super good"],
      correctAnswer: 1
    }
  },
  {
    id: 8,
    root: "反义词系统 (Opposites)",
    origin: "分类体系",
    meaning: "50个对立性质的反义形容词，以成对形式出现",
    description: "反义词（Opposites）共50个（占6%），是最小但最重要的词汇类别。它们以成对形式出现：big/small、hot/cold、wet/dry、full/empty、open/shut。这些词汇是语言认知的基础——人类对世界的理解往往始于对比。Ogden 将反义词单独分类的深层原因是：这类词汇的学习负担极低，学会一个词就自然理解了它的反面。50个词实际上是25对，学习者只需要记住25个基本概念，就能同时掌握50个词的用法。",
    examples: [
      { word: "wet / dry", meaning: "湿的 / 干的", breakdown: { root: "湿度对立" }, explanation: "一对反义词覆盖了从'潮湿'到'干燥'的整个湿度谱" },
      { word: "open / shut", meaning: "开的 / 关的", breakdown: { root: "状态对立" }, explanation: "注意 Ogden 用 shut 而非 closed，因为 shut 更短且与 open 形成更对称的对比" },
      { word: "full / empty", meaning: "满的 / 空的", breakdown: { root: "容量对立" }, explanation: "既可以描述容器，也可隐喻时间、情感等" }
    ],
    quiz: {
      question: "50个反义词实际上是多少对？",
      options: ["50对", "25对", "100对", "10对"],
      correctAnswer: 1
    }
  },
  {
    id: 9,
    root: "颜色词汇 (Colors)",
    origin: "主题分类",
    meaning: "black, white, red, blue, green, yellow, brown, gray, orange — 9个基础颜色词",
    description: "Basic English 的颜色系统极为精简，只收录了9个基础颜色词，加上 'light' 和 'dark' 两个修饰词来调整色调。这个选择基于颜色认知的跨文化研究：black 和 white 是所有语言都有的最基础颜色对立，red 是第三个出现的颜色词，之后才是 yellow 和 green，最后是 blue。brown 和 gray 则是中间色调。orange 的出现是为了覆盖常见水果和暖色调。加上 'color'、'clear'、'beautiful' 等辅助词，9个颜色词足够描述日常场景中的所有颜色需求。",
    examples: [
      { word: "light blue", meaning: "浅蓝色", breakdown: { root: "blue + light" }, explanation: "用 light + 颜色表示浅色调，替代 pale blue 等表达" },
      { word: "dark green", meaning: "深绿色", breakdown: { root: "green + dark" }, explanation: "用 dark + 颜色表示深色调，结构统一" },
      { word: "sky color", meaning: "天蓝色", breakdown: { root: "sky" }, explanation: "用实物 + color 来描述更具体的颜色，如 'blood red'" }
    ],
    quiz: {
      question: "Basic English 收录了多少个基础颜色词？",
      options: ["5个", "7个", "9个", "12个"],
      correctAnswer: 2
    }
  },
  {
    id: 10,
    root: "身体部位词汇 (Body Parts)",
    origin: "主题分类",
    meaning: "arm, back, body, bone, brain, chest, ear, eye, face, finger, foot, hair, hand, head, heart, knee, leg, lip, mouth, neck, nose, skin, stomach, throat, thumb, toe, tongue, tooth",
    description: "Basic English 收录了约28个身体部位名词，从头（head）到脚（foot），覆盖了人体的主要部位和器官。有趣的是，Ogden 选择收录的词反映了1930年代的语言习惯和医学认知：有 'brain' 和 'nerve' 但没有 'spine'（脊柱），有 'heart' 和 'stomach' 但没有 'lung'（肺）——因为 'breathing bag' 可以用现有词汇组合描述。这种选择展示了 Basic English 的核心原则：宁可用两个词组合表达，也不增加一个新词。",
    examples: [
      { word: "eye, ear, nose, mouth", meaning: "眼、耳、鼻、嘴", breakdown: { root: "面部器官" }, explanation: "四种感官器官，是日常交流中最核心的身体词汇" },
      { word: "hand, finger, thumb", meaning: "手、手指、拇指", breakdown: { root: "上肢部位" }, explanation: "Ogden 特意区分 finger 和 thumb，因为大拇指功能独特" },
      { word: "heart, brain, stomach", meaning: "心脏、大脑、胃", breakdown: { root: "内部器官" }, explanation: "覆盖了情感（heart）、思维（brain）、消化（stomach）三个维度" }
    ],
    quiz: {
      question: "Ogden 用已有词组合替代了哪些身体部位？",
      options: ["都能用基本组合表达", "lungs（肺）可用 'breathing bag'", "spine（脊柱）没有收录", "以上都是"],
      correctAnswer: 3
    }
  },
  {
    id: 11,
    root: "食物与饮料 (Food & Drink)",
    origin: "主题分类",
    meaning: "apple, bread, butter, cake, cheese, drink, egg, fish, fruit, grain, meal, meat, milk, orange, potato, rice, salt, soup, sugar, water, wine",
    description: "食物与饮料词汇覆盖了人类的日常饮食基础需求。Ogden 收录了约21个核心食物词，选择标准是'世界通用性'：apple、bread、rice、water 这些词在各个文化中都有对应物。值得注意的是，wine（酒）被收录而 beer（啤酒）被列为'国际词汇'——这意味着 beer 对英语学习者来说是可选的，因为它在不同语言中发音相似。此外，salt、sugar 这类调味品被收录，因为它们不仅是食物，也是基本的味觉概念（salty、sweet 的实物基础）。",
    examples: [
      { word: "bread and butter", meaning: "面包和黄油", breakdown: { root: "基本主食" }, explanation: "最基础的西式早餐组合，bread 也可泛指'食物'、'生计'" },
      { word: "rice and soup", meaning: "米饭和汤", breakdown: { root: "全球主食" }, explanation: "rice 在亚洲是核心主食，soup 是东西方共有的食物形式" },
      { word: "salt and sugar", meaning: "盐和糖", breakdown: { root: "调味基础" }, explanation: "两种基本味觉的物质化，也是烹饪的核心调味品" }
    ],
    quiz: {
      question: "beer（啤酒）在 Basic English 中被归为什么类别？",
      options: ["核心词汇", "可描绘事物词", "国际词汇（可选补充）", "普通事物词"],
      correctAnswer: 2
    }
  },
  {
    id: 12,
    root: "家庭用品 (Household Items)",
    origin: "主题分类",
    meaning: "bed, book, bottle, box, clock, cup, door, drawer, floor, fork, key, knife, lamp, map, match, mirror, needle, oven, plate, ring, shelf, spoon, table, umbrella, wall, watch, window 等",
    description: "家庭用品类词汇是850词中量最大的主题分类之一，包含约70个词。从家具（bed, table, shelf）到餐具（cup, plate, fork, spoon），从照明（lamp, match, candle）到储物（box, drawer, basket），几乎覆盖了一个家庭场景中可能用到的所有物品。Ogden 选择这些词的标准是'是否必须进入一个家的基本运作'——有 needle 和 thread（缝补衣物），有 key 和 lock（安全），有 pen 和 paper（书写交流），体现了1930年代中产阶级家庭的生活全景。",
    examples: [
      { word: "needle and thread", meaning: "针和线", breakdown: { root: "缝纫工具" }, explanation: "1930年代家家必备的缝补工具，现在这些词仍然高频使用" },
      { word: "cup, plate, fork, spoon", meaning: "杯子、盘子、叉子、勺子", breakdown: { root: "餐具组合" }, explanation: "一餐所需的完整餐具词汇" },
      { word: "bed, table, shelf", meaning: "床、桌子、架子", breakdown: { root: "核心家具" }, explanation: "最基础的家具词汇，覆盖休息、工作、收纳功能" }
    ],
    quiz: {
      question: "家庭用品类词汇的特点是什么？",
      options: ["只收录厨房用品", "覆盖家庭场景的完整功能需求", "全部是可描绘词", "比普通事物词数量少"],
      correctAnswer: 1
    }
  },
  {
    id: 13,
    root: "服装词汇 (Clothing)",
    origin: "主题分类",
    meaning: "boot, button, coat, collar, dress, glove, hat, shirt, shoe, skirt, sock, stocking, trousers, umbrella, watch",
    description: "服装词汇共约15个，覆盖了日常穿着的核心品类。有趣的是，Ogden 只收录了 clothing 的整体概念和具体单品，没有抽象的'fashion'或'style'——这些需要用组合表达。注意 umbrella（伞）和 watch（手表）被归入服装类，因为它们是有功能性的个人穿戴配件。shirt、trousers、dress、skirt 区分了性别着装，glove、hat 是配饰，boot、shoe 是鞋类。学习者可以用颜色词+服装词组合出几乎所有日常穿搭描述。",
    examples: [
      { word: "shirt and trousers", meaning: "衬衫和裤子", breakdown: { root: "男装基础" }, explanation: "最基础的男性着装描述" },
      { word: "dress and skirt", meaning: "连衣裙和裙子", breakdown: { root: "女装基础" }, explanation: "区分了全身（dress）和下半身（skirt）" },
      { word: "hat, glove, umbrella", meaning: "帽子、手套、雨伞", breakdown: { root: "配饰类" }, explanation: "功能性配饰，不仅仅是装饰" }
    ],
    quiz: {
      question: "以下哪个不属于 Basic English 服装类词汇？",
      options: ["coat（外套）", "fashion（时尚）", "hat（帽子）", "shoe（鞋）"],
      correctAnswer: 1
    }
  },
  {
    id: 14,
    root: "动物词汇 (Animals)",
    origin: "主题分类",
    meaning: "animal, ant, bee, bird, cat, cow, dog, egg, fish, fly, fowl, goat, horse, insect, monkey, pig, rat, sheep, snake, sponge, worm",
    description: "Basic English 收录了约23个动物名词，从家养动物（cat, dog, cow, horse, pig, sheep）到野生动物（bird, fish, snake, monkey, rat），再到昆虫（ant, bee, fly）。选择标准明显偏向实用性和普遍性：都是人类生活中常见或有重要经济价值的动物。没有收录 'elephant'、'tiger' 这类异域动物——它们被归为'国际词汇'，因为这些动物的名称在世界各语言中发音相近（elephant ≈ éléphant ≈ elefante）。动物词汇也是'学习优先级'理论的典范：先学高频通用的，再学低频专业的。",
    examples: [
      { word: "cat and dog", meaning: "猫和狗", breakdown: { root: "宠物" }, explanation: "全球最常见的两种伴侣动物" },
      { word: "cow, horse, sheep, pig", meaning: "牛、马、羊、猪", breakdown: { root: "家畜" }, explanation: "传统农业经济中的核心牲畜" },
      { word: "bird, fish, snake", meaning: "鸟、鱼、蛇", breakdown: { root: "野生动物" }, explanation: "三种不同生境的代表性动物（天空/水域/陆地）" }
    ],
    quiz: {
      question: "为什么 Basic English 没有收录 'elephant'（大象）？",
      options: ["Ogden 不喜欢大象", "大象不属于基础词汇", "作为国际词汇，不用额外学习拼写", "以上都错"],
      correctAnswer: 2
    }
  },
  {
    id: 15,
    root: "时间表达 (Time)",
    origin: "主题分类",
    meaning: "second, minute, hour, day, week, month, year, morning, night, spring, summer, winter, yesterday, today, tomorrow, now, then, ever, never",
    description: "时间表达词汇在 Basic English 中分为三个层次：精确度量词（second, minute, hour, day, week, month, year）、自然周期词（morning, night, spring, summer, autumn/fall, winter）和相对时间词（yesterday, today, tomorrow, now, then）。这套时间系统简洁但完整：从秒到年，从清晨到深夜，从昨天到明天。Ogden 特别收录了四季（spring, summer, winter, fall），因为农业社会需要谈论农时。时间副词如 'again'、'ever'、'never' 则被归入操作词体系。",
    examples: [
      { word: "day, week, month, year", meaning: "天、周、月、年", breakdown: { root: "时间单位" }, explanation: "从短到长的时间跨度层级" },
      { word: "yesterday, today, tomorrow", meaning: "昨天、今天、明天", breakdown: { root: "相对时间" }, explanation: "以'今天'为锚点的三个基本时间点" },
      { word: "spring, summer, winter", meaning: "春、夏、冬", breakdown: { root: "季节词" }, explanation: "注意 Ogden 用 fall 而非 autumn，因为 fall 更短更容易" }
    ],
    quiz: {
      question: "Basic English 中 '秋天' 用什么词？",
      options: ["autumn", "fall", "yellow time", "cold season"],
      correctAnswer: 1
    }
  },
  {
    id: 16,
    root: "交通运输 (Transport)",
    origin: "主题分类",
    meaning: "boat, bridge, carriage, harbor, sail, sea, train, plane, rail, river, road, wheel, whistle, transport",
    description: "交通类词汇约15个，反映了1930年代的交通方式及其基础设施：水路交通（boat, harbor, sea, river, sail）、铁路交通（train, rail, station, whistle）、道路（road, bridge, carriage, wheel）和空中交通（plane）。Ogden 的选词亮点在于收录了基础设施词（bridge, harbor, road, rail）而不只是交通工具本身——这使得学习者可以讨论整个交通系统。注意 'car' 没有被收录在850核心词中，因为1930年代汽车尚未普及到普通家庭，'carriage'（马车）在当时更通用。",
    examples: [
      { word: "boat and sail", meaning: "船和帆", breakdown: { root: "水路交通" }, explanation: "水运是最古老的交通方式之一" },
      { word: "train and rail", meaning: "火车和铁轨", breakdown: { root: "铁路交通" }, explanation: "rail 既指铁轨也指整个铁路系统" },
      { word: "road and bridge", meaning: "道路和桥梁", breakdown: { root: "基础设施" }, explanation: "交通不仅包括工具，还包括支撑它的基础建设" }
    ],
    quiz: {
      question: "为什么 'car'（汽车）不在 Basic English 850核心词中？",
      options: ["Ogden 反对汽车", "1930年代汽车尚未普及", "car 发音太难", "汽车可以用其他词替代"],
      correctAnswer: 1
    }
  },
  {
    id: 17,
    root: "教育词汇 (Education)",
    origin: "主题分类",
    meaning: "art, book, chalk, education, history, ink, language, learning, letter, music, news, paint, paper, pen, pencil, reading, reason, school, science, stamp, teaching, test, thought, word, writing",
    description: "教育类词汇约25个，覆盖了学习活动的基本要素：场所（school）、工具（book, paper, pen, pencil, chalk, ink）、内容（art, music, history, language, science）、认知过程（learning, teaching, reading, writing, thought, reason, test）。这是一个完整的学习生态。Ogden 将 'education' 本身作为普通事物词收录，同时收录了 'teaching' 和 'learning' 来区分教与学两个方向。'stamp'（邮票）和 'letter'（信）出现在教育类中，因为1930年代的书信是重要的文化实践方式。",
    examples: [
      { word: "pen, pencil, paper, book", meaning: "笔、铅笔、纸、书", breakdown: { root: "学习工具" }, explanation: "最基础的学习四件套" },
      { word: "teaching and learning", meaning: "教与学", breakdown: { root: "学习过程" }, explanation: "区分了教育的两个方向：施教与受教" },
      { word: "reading, writing, thought", meaning: "阅读、写作、思考", breakdown: { root: "认知技能" }, explanation: "从输入到输出再到内化的认知层级" }
    ],
    quiz: {
      question: "以下哪个不属于 Basic English 教育类词汇？",
      options: ["science（科学）", "computer（计算机）", "school（学校）", "book（书）"],
      correctAnswer: 1
    }
  },
  {
    id: 18,
    root: "商业贸易 (Business & Trade)",
    origin: "主题分类",
    meaning: "agreement, business, company, competition, credit, debt, exchange, industry, market, money, offer, owner, payment, profit, system, trade, transport, value",
    description: "商业词汇约20个，构成了一个简化的市场经济术语体系。从参与方（company, owner, market）到交易行为（exchange, trade, payment, offer），从财务概念（money, credit, debt, profit, value）到制度框架（agreement, system, competition, industry）。这套词汇虽然精简但逻辑完整，足以描述基本的商业运作。缺失的复杂概念可以用组合表达：例如 'stock market'（股票市场）就是 market + 一个可理解的概念，不需要单独收录 stock。",
    examples: [
      { word: "money and value", meaning: "金钱与价值", breakdown: { root: "财务基础" }, explanation: "value 是 money 的抽象对应，一个关注工具一个关注意义" },
      { word: "credit and debt", meaning: "信贷与债务", breakdown: { root: "借贷概念" }, explanation: "一对相反方向的财务关系" },
      { word: "trade and market", meaning: "贸易与市场", breakdown: { root: "交易框架" }, explanation: "trade 是行为，market 是场所和机制" }
    ],
    quiz: {
      question: "'stock market'（股票市场）在 Basic English 中怎么处理？",
      options: ["作为一个新词收录", "用现有词汇组合表达", "归为国际词汇", "被忽略"],
      correctAnswer: 1
    }
  },
  {
    id: 19,
    root: "农业与自然 (Agriculture & Nature)",
    origin: "主题分类",
    meaning: "air, animal, cloud, cotton, dust, earth, farm, field, fruit, garden, grain, grass, ice, land, leaf, moon, mountain, plant, rain, river, seed, sky, snow, star, sun, thunder, tree, water, weather, wind",
    description: "农业与自然类词汇约30个，是850词中最具画面感的类别。从天文（sun, moon, star, sky）到气象（rain, snow, wind, cloud, thunder, weather），从地理（earth, land, mountain, river）到农作（farm, field, plant, seed, grain, fruit, garden）。Ogden 在1930年代的选择强调人类与自然的互动关系：sun 不仅是一个天体，更是农业生产的能量来源；rain 不仅是气象现象，更是作物生长的必要条件。这些词也是'可描绘词'的主体——大部分可以直接用图片展示。",
    examples: [
      { word: "sun, moon, star, sky", meaning: "太阳、月亮、星星、天空", breakdown: { root: "天文类" }, explanation: "所有文化中共通的最基础天文概念" },
      { word: "rain, snow, wind, cloud", meaning: "雨、雪、风、云", breakdown: { root: "气象类" }, explanation: "日常经历的最基础天气现象" },
      { word: "farm, field, plant, seed", meaning: "农场、田地、植物、种子", breakdown: { root: "农作类" }, explanation: "从土地到作物的完整农业生产链条" }
    ],
    quiz: {
      question: "农业与自然类词汇约占850词的多少？",
      options: ["约5%", "约15%", "约30%", "约50%"],
      correctAnswer: 1
    }
  },
  {
    id: 20,
    root: "数学词汇 (Mathematics)",
    origin: "主题分类",
    meaning: "addition, amount, angle, arch, ball, circle, curve, division, equal, greater, less, line, number, plane, point, power, product, root, square, times",
    description: "数学类词汇约20个，分为代数和几何两部分。代数词汇（addition, division, number, times, power, root）覆盖基本运算和数概念；几何词汇（angle, circle, curve, line, point, square）覆盖形状与空间关系。Ogden 的选择展示了 Basic English 的'最低必要词汇'原则：有 addition 和 division（加减乘除的四则运算中的两个极端），加上 times 表达乘法，但没有专门的减法词——减法本质是加法取反，可以用 'take away' 表达。power 和 root 则覆盖了更高级的数学运算。",
    examples: [
      { word: "addition and division", meaning: "加法和除法", breakdown: { root: "运算" }, explanation: "四则运算的两个极端，times 覆盖乘法，减法用 take away" },
      { word: "circle, square, line, point", meaning: "圆、正方形、线、点", breakdown: { root: "几何" }, explanation: "欧几里得几何的最基础元素" },
      { word: "greater and less", meaning: "大于和小于", breakdown: { root: "比较" }, explanation: "数量比较的两个方向，equal 表示相等" }
    ],
    quiz: {
      question: "Basic English 中减法用什么表达？",
      options: ["subtraction（收录了）", "minus", "take away（用现有词组合）", "division"],
      correctAnswer: 2
    }
  },
  {
    id: 21,
    root: "工具词汇 (Tools)",
    origin: "主题分类",
    meaning: "band, blade, brush, bucket, cord, gun, hammer, hook, knife, knot, nail, needle, pin, pipe, plow, pump, ring, rod, screw, spade, wheel, wire",
    description: "工具类词汇约22个，覆盖从家务到农业的手工工具谱系。这些词体现了1930年代的生活生产方式：hammer, nail, screw 是木工工具；knife, hook, blade 是切割和钩挂工具；plow, spade, bucket 是农具；needle, pin 是缝纫工具；gun 是唯一的武器。注意 'wheel' 被归为工具类——它是人类最伟大的发明之一，也是机械文明的基础符号。工具类词汇也是词汇复用原则的代表：screw 既是名词（螺丝）也可用为动词（'give a screw' 拧紧）。",
    examples: [
      { word: "hammer and nail", meaning: "锤子和钉子", breakdown: { root: "木工工具" }, explanation: "最基础的木工组合，也是常用的隐喻表达" },
      { word: "knife and blade", meaning: "刀和刀刃", breakdown: { root: "切割工具" }, explanation: "knife 是整体，blade 是切割部分——学会区分整体与部分" },
      { word: "wheel and wire", meaning: "轮子和金属线", breakdown: { root: "机械元素" }, explanation: "工业文明的两个基础元件" }
    ],
    quiz: {
      question: "哪些工具词可以兼作动词？",
      options: ["只有 hammer", "hammer, nail, screw 等都可以", "都不能作动词", "只有 knife"],
      correctAnswer: 1
    }
  },
  {
    id: 22,
    root: "人物称谓 (People)",
    origin: "主题分类",
    meaning: "baby, boy, daughter, family, father, female, friend, girl, male, man, married, mother, person, sister, son, woman, chief, cook, manager, porter, secretary, servant",
    description: "人物称谓词汇分为两个层次：家庭关系词和职业角色词。家庭关系（father, mother, son, daughter, sister, boy, girl, baby）覆盖核心家庭成员和成长阶段；职业角色（chief, cook, manager, secretary, servant）代表了1930年代的基本社会分工。Ogden 用 male 和 female 而非更具体的性别词，保持了概念的通用性。'person' 是最万能的中性人称词。有趣的是，通过后缀 -er 可以将工具/动作转化为职业：worker（工人）、teacher（教师）、driver（司机）等，这些衍生词不计入850核心词。",
    examples: [
      { word: "father, mother, son, daughter", meaning: "父亲、母亲、儿子、女儿", breakdown: { root: "核心家庭" }, explanation: "最核心的四口之家关系网" },
      { word: "man, woman, boy, girl, baby", meaning: "男人、女人、男孩、女孩、婴儿", breakdown: { root: "泛指人群" }, explanation: "从年龄和性别两个维度区分人类" },
      { word: "chief, manager, secretary", meaning: "领导、经理、秘书", breakdown: { root: "职业角色" }, explanation: "1930年代办公室的三层层级结构" }
    ],
    quiz: {
      question: "'worker'（工人）和 'teacher'（教师）在 Basic English 中属于什么？",
      options: ["850核心词的一部分", "通过后缀 -er 衍生的扩展词", "国际词汇", "不能被 Basic English 表达"],
      correctAnswer: 1
    }
  },
  {
    id: 23,
    root: "建筑词汇 (Buildings)",
    origin: "主题分类",
    meaning: "bridge, building, church, hospital, house, library, prison, school, station, store, street, town, train, wall",
    description: "建筑类词汇约14个，覆盖了城乡环境中的基本建筑类型和城市要素。从个人居住（house）到公共建筑（school, hospital, church, library, store），从执法空间（prison）到交通枢纽（station），从城市尺度（street, town）到建筑构件（wall, bridge）。这个类别展示了 Ogden 对城市文明的理解：建筑不仅是物理结构，更是社会功能的载体——church 代表信仰，school 代表教育，hospital 代表医疗，prison 代表秩序。",
    examples: [
      { word: "house and building", meaning: "房子和建筑物", breakdown: { root: "居住与建筑" }, explanation: "house 是居住的，building 是泛化的——前者温暖后者中性" },
      { word: "school, hospital, church", meaning: "学校、医院、教堂", breakdown: { root: "公共建筑" }, explanation: "教育、医疗、信仰——三大公共功能建筑" },
      { word: "street and town", meaning: "街道和城镇", breakdown: { root: "城市要素" }, explanation: "从微观（street）到宏观（town）的城市尺度" }
    ],
    quiz: {
      question: "以下哪个建筑词在 Basic English 中被收录？",
      options: ["airport（机场）", "museum（博物馆）", "library（图书馆）", "cinema（电影院）"],
      correctAnswer: 2
    }
  },
  {
    id: 24,
    root: "材料词汇 (Materials)",
    origin: "主题分类",
    meaning: "brass, brick, canvas, cloth, coal, copper, glass, gold, iron, leather, linen, metal, silk, silver, steel, tin, tree, wool, wood",
    description: "材料类词汇约19个，涵盖金属（brass, copper, gold, iron, silver, steel, tin, metal）、纺织（canvas, cloth, linen, silk, wool, leather）、建材（brick, glass）和天然材料（coal, tree, wood）。这套材料词汇是一个完整的物质文化体系：金属对应工业制造，纺织对应服装制作，天然材料对应能源和建筑。Ogden 收录了 gold 和 silver 不仅有材料意义，还因为它们是货币和价值的物质化——在 Basic English 的商业词汇体系中，gold standard（金本位）可以用现有词组合理解。",
    examples: [
      { word: "gold and silver", meaning: "金和银", breakdown: { root: "贵金属" }, explanation: "既是材料也是价值符号，双重语义" },
      { word: "wool, silk, cotton", meaning: "羊毛、丝绸、棉花", breakdown: { root: "纺织材料" }, explanation: "三种天然纺织纤维，覆盖温暖（羊毛）、华贵（丝绸）、日常（棉花）" },
      { word: "wood, brick, stone", meaning: "木材、砖、石头", breakdown: { root: "建筑材料" }, explanation: "从原始（石头）到加工（砖）到天然（木材）的建筑材料谱系" }
    ],
    quiz: {
      question: "下列哪种材料在 Basic English 中被收录？",
      options: ["plastic（塑料）", "steel（钢铁）", "concrete（混凝土）", "nylon（尼龙）"],
      correctAnswer: 1
    }
  },
  {
    id: 25,
    root: "后缀 -er 造词法",
    origin: "语法规则",
    meaning: "在动词/名词后加 -er，形成新词（施事者/工具），不计入850核心词",
    description: "后缀 -er 是 Basic English 最重要的造词规则。将任何动作词加上 -er，就可以形成执行该动作的人或工具：work → worker（工人）、teach → teacher（教师）、paint → painter（画家/油漆工）、cook → cooker（炊具）。这条规则使得850核心词可以衍生出数百个扩展词而不增加学习负担。Ogden 的设计意图是：让学习者掌握一个生成性规则，而不是死记一长串职业名称。这也是 Basic English 区别于单纯'词汇表'的关键——它是一套有语法生成能力的语言系统。",
    examples: [
      { word: "work → worker", meaning: "工作 → 工人", breakdown: { root: "职业衍生" }, explanation: "从动作到人的最基础职业衍生" },
      { word: "paint → painter", meaning: "绘画 → 画家/油漆工", breakdown: { root: "多重职业" }, explanation: "一个词可能有多个职业含义，由上下文决定" },
      { word: "cook → cooker", meaning: "烹饪 → 炊具", breakdown: { root: "工具衍生" }, explanation: "注意：cooker 是工具（炊具），不是人（厨师是 cook）" }
    ],
    quiz: {
      question: "通过 -er 后缀衍生的词（如 worker、teacher）属于什么？",
      options: ["850核心词的一部分", "不计入核心词数的扩展词", "国际词汇", "不被 Basic English 接受"],
      correctAnswer: 1
    }
  },
  {
    id: 26,
    root: "复合词构建 (Compound Words)",
    origin: "语法规则",
    meaning: "将两个或多个基础词组合，形成新的概念表达",
    description: "复合词是 Basic English 表达力的关键来源。当现有词汇不足以描述某个概念时，将两个基础词直接组合即可。例如：'snowball'（雪球）= snow + ball、'newspaper'（报纸）= news + paper、'sunlight'（阳光）= sun + light、'bookstore'（书店）= book + store。这些复合词虽然在语义上是一个新概念，但 Ogden 认为只要学习者认识两个部件词，理解整体含义就不需要额外记忆。这体现了他的核心理念：语言能力不在于记忆多少词，而在于组合运用已知词汇的创造力。",
    examples: [
      { word: "doorway", meaning: "门口", breakdown: { root: "door + way" }, explanation: "两个基础空间词组合表达更精确的位置" },
      { word: "horseman", meaning: "骑马者", breakdown: { root: "horse + man" }, explanation: "人+动物的经典复合模式" },
      { word: "waterfall", meaning: "瀑布", breakdown: { root: "water + fall" }, explanation: "两个自然现象词汇组合出一个具体景观" }
    ],
    quiz: {
      question: "'newspaper'（报纸）在 Basic English 中是一个什么类型的词？",
      options: ["850核心词之一", "国际词汇", "复合词（news + paper）", "不被收录"],
      correctAnswer: 2
    }
  },
  {
    id: 27,
    root: "国际词汇补充 (International Words)",
    origin: "扩展体系",
    meaning: "世界各语言中近似发音/拼写的通用词，不计入850核心但可直接使用",
    description: "国际词汇是 Basic English 的'外挂词汇'——这些词在多数语言中发音或拼写相似，学习者通常已经认识，无需额外学习。例如：alcohol、beer、chocolate、coffee、hotel、telephone、radio、sport、taxi、tobacco、whisky。Ogden 将这些词分为'科学类'（如 atom、electron）、'饮食类'（如 chocolate、coffee）、'文化类'（如 opera、ballet）等。关键原则是：如果一个词的发音和拼写已经国际化，再列入学习清单就是浪费学习者的精力。国际词汇加上核心850词，实际可用的总词汇量可达1000+。",
    examples: [
      { word: "coffee, tea, chocolate", meaning: "咖啡、茶、巧克力", breakdown: { root: "饮食类国际词" }, explanation: "无论在中文、法文还是西班牙文中都发音相似" },
      { word: "telephone, radio, hotel", meaning: "电话、收音机、酒店", breakdown: { root: "科技/服务类" }, explanation: "现代生活的基础设施，全球通用" },
      { word: "sport, opera, ballet", meaning: "体育、歌剧、芭蕾", breakdown: { root: "文化类国际词" }, explanation: "从意大利语/法语进入国际通用词库的文化概念" }
    ],
    quiz: {
      question: "国际词汇在 Basic English 中的地位是什么？",
      options: ["必须学习的850词之一", "可选项，学习者通常已认识", "奥格登反对使用国际词", "只能用于书面语"],
      correctAnswer: 1
    }
  },
  {
    id: 28,
    root: "奥格登的设计哲学",
    origin: "核心理念",
    meaning: "用最少的必要词汇实现最大的表达能力，95%的情况下不需要造新词",
    description: "Charles K. Ogden（1889-1957）是英国语言学家、哲学家，同时也是剑桥大学 Heretics Society 的创始人之一。他的核心设计哲学是'语言的经济性'（linguistic economy）：如果850个词可以覆盖日常交流的90%，那么学习者就没有必要在初学阶段学习数千个词。他的选词方法论是：如果某个概念已经可以由两个或更多基础词组合表达，就不应该作为一个新词收录。例如，有 'go' 和 'in'，就不需要 'enter'——'go in' 已经完美表达了'进入'的含义。这套体系不是语言的缩减，而是语言核心的提炼。",
    examples: [
      { word: "go in = enter", meaning: "进入", breakdown: { root: "组合替代" }, explanation: "不需要 enter，go + in 已经足够清晰" },
      { word: "make bigger = enlarge", meaning: "放大", breakdown: { root: "组合替代" }, explanation: "不需要 enlarge，make + bigger 人人能懂" },
      { word: "give up = surrender", meaning: "放弃/投降", breakdown: { root: "组合替代" }, explanation: "操作动词+介词的强大表达能力" }
    ],
    quiz: {
      question: "Ogden 选词的核心原则是什么？",
      options: ["收录所有常用词", "能用组合表达就不收新词", "只收动词和名词", "优先收录长词"],
      correctAnswer: 1
    }
  },
  {
    id: 29,
    root: "学习优先级策略",
    origin: "学习方法",
    meaning: "第一优先学操作词，第二优先学性质词+反义词，第三可描绘词，最后普通事物词",
    description: "基于 Ogden 的体系，最优学习路径应该遵循'频率优先+组合力优先'原则。第一层（100词操作词）：学会语言的'语法骨架'，这些词在所有句子中出现频率最高；第二层（150词性质词+反义词）：获得描述和判断能力，可以对事物进行评价和比较；第三层（200词可描绘词）：建立具体世界的词汇图谱，这些词最容易通过图片学习；第四层（400词普通事物词）：深化抽象表达能力，这些词最需要语境学习。这个顺序不是绝对的——实际操作中，学习者可以同时进行多个层级，但注意力分配应遵循这个配比。",
    examples: [
      { word: "第一周：操作词100", meaning: "be, have, do, say, get, make, go 等", breakdown: { root: "第一层" }, explanation: "每天10-15个词，配合介词短语练习，掌握句子骨架" },
      { word: "第二周：性质词+反义词150", meaning: "good/bad, big/small, hot/cold 等", breakdown: { root: "第二层" }, explanation: "学习描述和比较事物，开始构建简单句子" },
      { word: "第三-四周：事物词600", meaning: "可描绘词200 + 普通事物词400", breakdown: { root: "第三四层" }, explanation: "每周300个词，配合主题分类和图片联想记忆" }
    ],
    quiz: {
      question: "按照学习优先级策略，最先应该学什么？",
      options: ["普通事物词（400个）", "可描绘事物词（200个）", "操作词（100个）", "反义词（50个）"],
      correctAnswer: 2
    }
  },
  {
    id: 30,
    root: "850词到2000词的扩展路径",
    origin: "扩展体系",
    meaning: "850核心词 → +150国际词 → +后缀衍生词 → +1500扩展级 → 2000词综合国际英语",
    description: "Basic English 不是封闭系统，而是有明确的扩展路径。第一级是850核心词，达成日常交流的基础能力。第二级是国际词汇（约150词），将实际可用词汇提升到1000+。第三级是利用造词规则（-er, -ing, -ed, un-）衍生数百个新词。第四级是1500词扩展级（Basic English 1500），包含科学、技术、政治等专业词汇。第五级是2000词综合级，能够阅读报纸和基础专业文献。这个渐进扩展的设计确保了学习者不会感到'学完850就没东西学了'的瓶颈——每完成一级都自然衔接到下一级。",
    examples: [
      { word: "850核心 → 日常交流", meaning: "覆盖90%日常表达", breakdown: { root: "第一级" }, explanation: "30天系统学习就能达到的基础交流能力" },
      { word: "+国际词150 → 1000+", meaning: "加入全球通用词", breakdown: { root: "第二级" }, explanation: "咖啡、巧克力、电话等已了解的词汇直接可用" },
      { word: "+扩展级1500 → 2000词", meaning: "报纸阅读级", breakdown: { root: "第五级" }, explanation: "达到阅读报刊和基础专业文献的水平" }
    ],
    quiz: {
      question: "Basic English 的最终扩展目标是多少词？",
      options: ["850词就够了", "1000词", "1500词", "2000词（综合国际英语）"],
      correctAnswer: 3
    }
  }
];
