// Ogden's Basic English - 850词核心数据
// 按 Ogden 原始分类整理

const CATEGORIES = {
  operations: { id: 'operations', name: 'Operations', nameCN: '操作词', count: 100, color: '#6366f1', desc: '动词、介词、代词等结构词' },
  things_general: { id: 'things_general', name: 'General Things', nameCN: '通用名词', count: 400, color: '#10b981', desc: '抽象名词与通用事物' },
  things_picturable: { id: 'things_picturable', name: 'Picturable', nameCN: '图示词', count: 200, color: '#f59e0b', desc: '可画出来的具体事物' },
  qualities: { id: 'qualities', name: 'Qualities', nameCN: '性质词', count: 100, color: '#3b82f6', desc: '形容词' },
  opposites: { id: 'opposites', name: 'Opposites', nameCN: '反义对', count: 50, color: '#ec4899', desc: '成对的反义形容词' },
};

// 18个核心操作动词（operators）
const OPERATORS = [
  {
    id: 1, word: 'be', phonetic: '/biː/', category: 'operations', subtype: 'operator',
    meaning: '是，存在', exampleEN: 'I am happy. She is a teacher. They are here.',
    exampleCN: '我很开心。她是老师。他们在这里。',
    notes: '最重要的词！am/is/are/was/were 都是它的形式',
    sentences: [
      { en: 'I am a student.', cn: '我是学生。' },
      { en: 'The sky is blue.', cn: '天空是蓝色的。' },
      { en: 'They are happy.', cn: '他们很开心。' },
    ]
  },
  {
    id: 2, word: 'have', phonetic: '/hæv/', category: 'operations', subtype: 'operator',
    meaning: '有，持有', exampleEN: 'I have a book. She has a cat.',
    exampleCN: '我有一本书。她有一只猫。',
    notes: 'have + 名词 可以替代很多动词，如 have a look = look',
    sentences: [
      { en: 'I have a red ball.', cn: '我有一个红球。' },
      { en: 'He has a good idea.', cn: '他有一个好主意。' },
      { en: 'We have dinner at six.', cn: '我们六点吃晚饭。' },
    ]
  },
  {
    id: 3, word: 'do', phonetic: '/duː/', category: 'operations', subtype: 'operator',
    meaning: '做（泛指活动）', exampleEN: 'What do you do? Do your work.',
    exampleCN: '你做什么？做你的功课。',
    notes: '也用于构成疑问句和否定句',
    sentences: [
      { en: 'Do your best.', cn: '尽你所能。' },
      { en: 'What do you do?', cn: '你是做什么的？' },
      { en: 'I do not like rain.', cn: '我不喜欢下雨。' },
    ]
  },
  {
    id: 4, word: 'come', phonetic: '/kʌm/', category: 'operations', subtype: 'operator',
    meaning: '来', exampleEN: 'Come here. Come into the room.',
    exampleCN: '过来这里。进来。',
    notes: 'come + 方向词 = 很多意思，如 come across = 发现/遇到',
    sentences: [
      { en: 'Come and see me.', cn: '来看我。' },
      { en: 'She came into the room.', cn: '她走进房间。' },
      { en: 'Come across a new word.', cn: '遇到一个新单词。' },
    ]
  },
  {
    id: 5, word: 'go', phonetic: '/ɡoʊ/', category: 'operations', subtype: 'operator',
    meaning: '去', exampleEN: 'Go home. Go up the stairs.',
    exampleCN: '回家。上楼梯。',
    notes: 'go + 方向词组合很多：go on=继续, go up=上升, go down=下降',
    sentences: [
      { en: 'Go to school.', cn: '去上学。' },
      { en: 'The sun goes down.', cn: '太阳落山。' },
      { en: 'Go on, keep reading.', cn: '继续，继续读。' },
    ]
  },
  {
    id: 6, word: 'put', phonetic: '/pʊt/', category: 'operations', subtype: 'operator',
    meaning: '放，放置', exampleEN: 'Put the book on the table.',
    exampleCN: '把书放在桌子上。',
    notes: 'put in = 放入/插入, put out = 熄灭/发布, put down = 放下',
    sentences: [
      { en: 'Put it on the desk.', cn: '把它放在桌子上。' },
      { en: 'Put out the light.', cn: '关灯。' },
      { en: 'Put the idea in order.', cn: '整理思路。' },
    ]
  },
  {
    id: 7, word: 'take', phonetic: '/teɪk/', category: 'operations', subtype: 'operator',
    meaning: '拿，取', exampleEN: 'Take the ball. Take care.',
    exampleCN: '拿球。保重。',
    notes: 'take away = 带走/减去, take off = 起飞/脱下, take in = 吸收',
    sentences: [
      { en: 'Take a book from the shelf.', cn: '从书架上取一本书。' },
      { en: 'Take care of the baby.', cn: '照顾宝宝。' },
      { en: 'The plane takes off.', cn: '飞机起飞了。' },
    ]
  },
  {
    id: 8, word: 'give', phonetic: '/ɡɪv/', category: 'operations', subtype: 'operator',
    meaning: '给', exampleEN: 'Give me the pen. Give help.',
    exampleCN: '给我钢笔。给予帮助。',
    notes: 'give up = 放弃, give a smile = 微笑一下（替代动词 smile）',
    sentences: [
      { en: 'Give the book to me.', cn: '把书给我。' },
      { en: 'Give me a smile.', cn: '给我一个微笑。' },
      { en: 'Do not give up.', cn: '不要放弃。' },
    ]
  },
  {
    id: 9, word: 'get', phonetic: '/ɡet/', category: 'operations', subtype: 'operator',
    meaning: '得到，变得', exampleEN: 'Get the answer. Get ready.',
    exampleCN: '得到答案。准备好。',
    notes: 'get ready = prepare, get off = 下车, get on = 上车/进展',
    sentences: [
      { en: 'Get the sense of it.', cn: '理解它的意思。' },
      { en: 'Get ready for school.', cn: '准备去上学。' },
      { en: 'Get off the bus.', cn: '下公共汽车。' },
    ]
  },
  {
    id: 10, word: 'keep', phonetic: '/kiːp/', category: 'operations', subtype: 'operator',
    meaning: '保持，保留', exampleEN: 'Keep quiet. Keep the door open.',
    exampleCN: '保持安静。让门开着。',
    notes: 'keep on = 继续, keep up = 维持, keep away = 远离',
    sentences: [
      { en: 'Keep the room clean.', cn: '保持房间整洁。' },
      { en: 'Keep on reading.', cn: '继续阅读。' },
      { en: 'Keep away from danger.', cn: '远离危险。' },
    ]
  },
  {
    id: 11, word: 'let', phonetic: '/let/', category: 'operations', subtype: 'operator',
    meaning: '让，允许', exampleEN: 'Let me help. Let the door open.',
    exampleCN: '让我来帮忙。让门开着。',
    notes: 'let + 人 + 动词：允许某人做某事',
    sentences: [
      { en: 'Let me see it.', cn: '让我看看。' },
      { en: 'Let the child play.', cn: '让孩子玩耍。' },
      { en: 'Let go of my hand.', cn: '放开我的手。' },
    ]
  },
  {
    id: 12, word: 'make', phonetic: '/meɪk/', category: 'operations', subtype: 'operator',
    meaning: '制造，使得', exampleEN: 'Make a cake. Make her happy.',
    exampleCN: '做蛋糕。使她高兴。',
    notes: 'make + 名词 替代动词：make an attempt = attempt（尝试）',
    sentences: [
      { en: 'Make a cup of tea.', cn: '泡一杯茶。' },
      { en: 'Make a decision.', cn: '做出决定。' },
      { en: 'Make the room ready.', cn: '准备好房间。' },
    ]
  },
  {
    id: 13, word: 'send', phonetic: '/send/', category: 'operations', subtype: 'operator',
    meaning: '送，发送', exampleEN: 'Send a letter. Send it to me.',
    exampleCN: '发一封信。把它发给我。',
    notes: 'send out = 发出, send in = 提交',
    sentences: [
      { en: 'Send me a message.', cn: '发消息给我。' },
      { en: 'She sent a letter to her friend.', cn: '她给朋友寄了一封信。' },
      { en: 'Send in your work.', cn: '提交你的作业。' },
    ]
  },
  {
    id: 14, word: 'see', phonetic: '/siː/', category: 'operations', subtype: 'operator',
    meaning: '看，明白', exampleEN: 'See the stars. I see what you mean.',
    exampleCN: '看星星。我明白你的意思。',
    notes: 'see to = 负责处理, see through = 看穿',
    sentences: [
      { en: 'I can see the mountain.', cn: '我能看见山。' },
      { en: 'Do you see what I mean?', cn: '你明白我的意思吗？' },
      { en: 'See to it that the work is done.', cn: '负责把工作做好。' },
    ]
  },
  {
    id: 15, word: 'say', phonetic: '/seɪ/', category: 'operations', subtype: 'operator',
    meaning: '说', exampleEN: 'Say hello. What did she say?',
    exampleCN: '打招呼。她说了什么？',
    notes: '说话的动词，say + that 引导宾语从句',
    sentences: [
      { en: 'Say it again.', cn: '再说一遍。' },
      { en: 'He said he was tired.', cn: '他说他累了。' },
      { en: 'What do you say?', cn: '你说呢？' },
    ]
  },
  {
    id: 16, word: 'seem', phonetic: '/siːm/', category: 'operations', subtype: 'operator',
    meaning: '似乎，看起来', exampleEN: 'It seems cold. She seems happy.',
    exampleCN: '好像很冷。她看起来很高兴。',
    notes: '描述外表或印象，不确定时用 seem',
    sentences: [
      { en: 'It seems like rain.', cn: '好像要下雨了。' },
      { en: 'She seems to be happy.', cn: '她看起来很高兴。' },
      { en: 'Things are not always as they seem.', cn: '事情不总是表面看起来那样。' },
    ]
  },
  {
    id: 17, word: 'may', phonetic: '/meɪ/', category: 'operations', subtype: 'operator',
    meaning: '可能，可以', exampleEN: 'It may rain. You may go.',
    exampleCN: '可能会下雨。你可以走了。',
    notes: '表示可能性或允许',
    sentences: [
      { en: 'It may be true.', cn: '这可能是真的。' },
      { en: 'You may take one.', cn: '你可以拿一个。' },
      { en: 'She may not come.', cn: '她可能不来。' },
    ]
  },
  {
    id: 18, word: 'will', phonetic: '/wɪl/', category: 'operations', subtype: 'operator',
    meaning: '将会', exampleEN: 'I will go. It will rain tomorrow.',
    exampleCN: '我会去。明天会下雨。',
    notes: '表示将来时间，Basic 中不区分 shall/will',
    sentences: [
      { en: 'I will be there.', cn: '我会在那里。' },
      { en: 'It will get better.', cn: '它会好起来的。' },
      { en: 'We will have dinner soon.', cn: '我们很快就要吃晚饭了。' },
    ]
  }
];

// 20个方向词（directives/prepositions）
const DIRECTIVES = [
  { id: 101, word: 'about', phonetic: '/əˈbaʊt/', category: 'operations', subtype: 'directive', meaning: '关于，大约', exampleEN: 'Tell me about it.', exampleCN: '告诉我关于它的事。', combos: ['about to = 即将', 'talk about = 谈论'], sentences: [{ en: 'Tell me about your day.', cn: '告诉我你今天的情况。' }, { en: 'She is about to go.', cn: '她即将离开。' }] },
  { id: 102, word: 'across', phonetic: '/əˈkrɒs/', category: 'operations', subtype: 'directive', meaning: '横过，穿越', exampleEN: 'Go across the street.', exampleCN: '穿越街道。', combos: ['come across = 偶然发现'], sentences: [{ en: 'Go across the bridge.', cn: '过桥。' }, { en: 'I came across an old friend.', cn: '我碰见了一位老朋友。' }] },
  { id: 103, word: 'after', phonetic: '/ˈɑːftər/', category: 'operations', subtype: 'directive', meaning: '在...之后', exampleEN: 'Come after dinner.', exampleCN: '晚饭后来。', combos: ['look after = 照顾'], sentences: [{ en: 'Come after school.', cn: '放学后来。' }, { en: 'Look after your sister.', cn: '照顾你妹妹。' }] },
  { id: 104, word: 'against', phonetic: '/əˈɡenst/', category: 'operations', subtype: 'directive', meaning: '反对，靠着', exampleEN: 'Put it against the wall.', exampleCN: '把它靠着墙放。', combos: ['go against = 违背'], sentences: [{ en: 'Push against the door.', cn: '推着门。' }, { en: 'Do not go against the rules.', cn: '不要违反规则。' }] },
  { id: 105, word: 'at', phonetic: '/æt/', category: 'operations', subtype: 'directive', meaning: '在（某点）', exampleEN: 'Be at school at eight.', exampleCN: '八点在学校。', combos: ['at once = 立刻', 'get at = 触及'], sentences: [{ en: 'Get up at six.', cn: '六点起床。' }, { en: 'Be there at once.', cn: '马上到那里。' }] },
  { id: 106, word: 'before', phonetic: '/bɪˈfɔːr/', category: 'operations', subtype: 'directive', meaning: '在...之前', exampleEN: 'Come before noon.', exampleCN: '中午之前来。', combos: [], sentences: [{ en: 'Wash hands before eating.', cn: '吃饭前洗手。' }, { en: 'Read it before the test.', cn: '考试前读它。' }] },
  { id: 107, word: 'between', phonetic: '/bɪˈtwiːn/', category: 'operations', subtype: 'directive', meaning: '在...之间', exampleEN: 'Sit between us.', exampleCN: '坐在我们中间。', combos: [], sentences: [{ en: 'The ball is between the boxes.', cn: '球在盒子之间。' }, { en: 'Between you and me.', cn: '你我之间（秘密）。' }] },
  { id: 108, word: 'by', phonetic: '/baɪ/', category: 'operations', subtype: 'directive', meaning: '在旁，通过，被', exampleEN: 'Come by ten. Made by hand.', exampleCN: '十点前来。手工制作的。', combos: ['by the way = 顺便说', 'step by step = 一步一步'], sentences: [{ en: 'Come by the house.', cn: '从房子旁边走过。' }, { en: 'It is made by children.', cn: '这是孩子们做的。' }] },
  { id: 109, word: 'down', phonetic: '/daʊn/', category: 'operations', subtype: 'directive', meaning: '向下', exampleEN: 'Go down the stairs.', exampleCN: '下楼梯。', combos: ['put down = 放下', 'sit down = 坐下', 'write down = 写下'], sentences: [{ en: 'Come down from the tree.', cn: '从树上下来。' }, { en: 'Write down your name.', cn: '写下你的名字。' }] },
  { id: 110, word: 'from', phonetic: '/frɒm/', category: 'operations', subtype: 'directive', meaning: '从，来自', exampleEN: 'Come from China. Take it from the bag.', exampleCN: '来自中国。从包里拿出来。', combos: ['far from = 远离'], sentences: [{ en: 'I am from Beijing.', cn: '我来自北京。' }, { en: 'Take the book from the shelf.', cn: '从书架上取书。' }] },
  { id: 111, word: 'in', phonetic: '/ɪn/', category: 'operations', subtype: 'directive', meaning: '在...里面', exampleEN: 'Put it in the box.', exampleCN: '把它放进盒子里。', combos: ['come in = 进来', 'put in = 放入', 'in time = 及时'], sentences: [{ en: 'The cat is in the house.', cn: '猫在房子里。' }, { en: 'Come in, please.', cn: '请进。' }] },
  { id: 112, word: 'off', phonetic: '/ɒf/', category: 'operations', subtype: 'directive', meaning: '离开，脱落', exampleEN: 'Get off the bus. Take off your coat.', exampleCN: '下公共汽车。脱下外套。', combos: ['take off = 脱下/起飞', 'get off = 下车/离开'], sentences: [{ en: 'Take off your shoes.', cn: '脱掉鞋子。' }, { en: 'Get off the bus here.', cn: '在这里下车。' }] },
  { id: 113, word: 'on', phonetic: '/ɒn/', category: 'operations', subtype: 'directive', meaning: '在...上面', exampleEN: 'Put it on the table. Come on!', exampleCN: '把它放在桌子上。来吧！', combos: ['go on = 继续', 'put on = 穿上', 'come on = 加油'], sentences: [{ en: 'The book is on the desk.', cn: '书在桌子上。' }, { en: 'Go on with your work.', cn: '继续你的工作。' }] },
  { id: 114, word: 'over', phonetic: '/ˈoʊvər/', category: 'operations', subtype: 'directive', meaning: '在...上方，超过', exampleEN: 'Fly over the mountain.', exampleCN: '飞越山脉。', combos: ['get over = 克服', 'all over = 到处'], sentences: [{ en: 'The bird flies over the house.', cn: '鸟飞过房子上空。' }, { en: 'Get over your fear.', cn: '克服你的恐惧。' }] },
  { id: 115, word: 'through', phonetic: '/θruː/', category: 'operations', subtype: 'directive', meaning: '穿过，通过', exampleEN: 'Go through the door.', exampleCN: '穿过门。', combos: ['go through = 经历/检查'], sentences: [{ en: 'Walk through the park.', cn: '穿过公园走。' }, { en: 'Go through the book.', cn: '通读这本书。' }] },
  { id: 116, word: 'to', phonetic: '/tuː/', category: 'operations', subtype: 'directive', meaning: '到，向', exampleEN: 'Go to school. Give it to me.', exampleCN: '去上学。给我。', combos: [], sentences: [{ en: 'Come to me.', cn: '来找我。' }, { en: 'I go to school every day.', cn: '我每天去上学。' }] },
  { id: 117, word: 'under', phonetic: '/ˈʌndər/', category: 'operations', subtype: 'directive', meaning: '在...下方', exampleEN: 'Look under the bed.', exampleCN: '看床底下。', combos: ['under control = 在控制之下'], sentences: [{ en: 'The cat is under the table.', cn: '猫在桌子下面。' }, { en: 'Keep it under control.', cn: '保持控制。' }] },
  { id: 118, word: 'up', phonetic: '/ʌp/', category: 'operations', subtype: 'directive', meaning: '向上', exampleEN: 'Go up the stairs. Look up.', exampleCN: '上楼梯。向上看。', combos: ['give up = 放弃', 'get up = 起床', 'look up = 查找'], sentences: [{ en: 'Get up early.', cn: '早起。' }, { en: 'Look up the word.', cn: '查一下这个词。' }] },
  { id: 119, word: 'with', phonetic: '/wɪð/', category: 'operations', subtype: 'directive', meaning: '和，用', exampleEN: 'Come with me. Write with a pen.', exampleCN: '跟我来。用笔写。', combos: [], sentences: [{ en: 'Come with me.', cn: '跟我来。' }, { en: 'Write with your right hand.', cn: '用右手写字。' }] },
  { id: 120, word: 'for', phonetic: '/fɔːr/', category: 'operations', subtype: 'directive', meaning: '为了，对于', exampleEN: 'Do it for me. Good for you.', exampleCN: '为我做这件事。对你有益。', combos: ['wait for = 等待', 'look for = 寻找'], sentences: [{ en: 'Wait for me.', cn: '等我。' }, { en: 'Look for the key.', cn: '找钥匙。' }] },
];

// 可画名词（图示词，选精华100个）
const PICTURABLE_WORDS = [
  // 身体
  { id: 201, word: 'arm', phonetic: '/ɑːrm/', category: 'things_picturable', meaning: '手臂', exampleEN: 'Raise your arm.', exampleCN: '举起手臂。', tag: 'body', sentences: [{ en: 'My arm is strong.', cn: '我的手臂很有力。' }, { en: 'She has a cut on her arm.', cn: '她手臂上有个伤口。' }] },
  { id: 202, word: 'eye', phonetic: '/aɪ/', category: 'things_picturable', meaning: '眼睛', exampleEN: 'Open your eyes.', exampleCN: '睁开眼睛。', tag: 'body', sentences: [{ en: 'Her eyes are blue.', cn: '她的眼睛是蓝色的。' }, { en: 'Keep your eyes open.', cn: '睁大眼睛。' }] },
  { id: 203, word: 'face', phonetic: '/feɪs/', category: 'things_picturable', meaning: '脸', exampleEN: 'Wash your face.', exampleCN: '洗脸。', tag: 'body', sentences: [{ en: 'She has a kind face.', cn: '她有一张和蔼的脸。' }, { en: 'Put water on your face.', cn: '往脸上洒水。' }] },
  { id: 204, word: 'hand', phonetic: '/hænd/', category: 'things_picturable', meaning: '手', exampleEN: 'Give me your hand.', exampleCN: '给我你的手。', tag: 'body', sentences: [{ en: 'Wash your hands before eating.', cn: '吃饭前洗手。' }, { en: 'She took my hand.', cn: '她握住了我的手。' }] },
  { id: 205, word: 'head', phonetic: '/hed/', category: 'things_picturable', meaning: '头', exampleEN: 'Shake your head.', exampleCN: '摇头。', tag: 'body', sentences: [{ en: 'Use your head.', cn: '动动脑筋。' }, { en: 'Put your hat on your head.', cn: '把帽子戴在头上。' }] },
  { id: 206, word: 'heart', phonetic: '/hɑːrt/', category: 'things_picturable', meaning: '心，心脏', exampleEN: 'My heart is beating fast.', exampleCN: '我的心跳得很快。', tag: 'body', sentences: [{ en: 'The heart sends blood through the body.', cn: '心脏将血液输送到全身。' }, { en: 'She has a kind heart.', cn: '她有一颗善良的心。' }] },
  { id: 207, word: 'leg', phonetic: '/leɡ/', category: 'things_picturable', meaning: '腿', exampleEN: 'He hurt his leg.', exampleCN: '他伤了腿。', tag: 'body', sentences: [{ en: 'The dog has four legs.', cn: '这条狗有四条腿。' }, { en: 'She ran until her legs were tired.', cn: '她跑到腿都累了。' }] },
  { id: 208, word: 'mouth', phonetic: '/maʊθ/', category: 'things_picturable', meaning: '嘴，口', exampleEN: 'Open your mouth.', exampleCN: '张开嘴。', tag: 'body', sentences: [{ en: 'Keep your mouth shut.', cn: '保持沉默。' }, { en: 'She put the food in her mouth.', cn: '她把食物放进嘴里。' }] },
  // 动物
  { id: 211, word: 'bird', phonetic: '/bɜːrd/', category: 'things_picturable', meaning: '鸟', exampleEN: 'A bird is in the tree.', exampleCN: '一只鸟在树上。', tag: 'animal', sentences: [{ en: 'The bird sings in the morning.', cn: '鸟儿在早晨歌唱。' }, { en: 'A bird has two wings.', cn: '鸟有两只翅膀。' }] },
  { id: 212, word: 'cat', phonetic: '/kæt/', category: 'things_picturable', meaning: '猫', exampleEN: 'The cat is on the mat.', exampleCN: '猫在垫子上。', tag: 'animal', sentences: [{ en: 'The cat drinks milk.', cn: '猫喝牛奶。' }, { en: 'She has a black cat.', cn: '她有一只黑猫。' }] },
  { id: 213, word: 'dog', phonetic: '/dɒɡ/', category: 'things_picturable', meaning: '狗', exampleEN: 'The dog is my friend.', exampleCN: '狗是我的朋友。', tag: 'animal', sentences: [{ en: 'The dog runs fast.', cn: '狗跑得很快。' }, { en: 'He has a big dog.', cn: '他有一只大狗。' }] },
  { id: 214, word: 'fish', phonetic: '/fɪʃ/', category: 'things_picturable', meaning: '鱼', exampleEN: 'The fish is in the water.', exampleCN: '鱼在水里。', tag: 'animal', sentences: [{ en: 'Fish need water to live.', cn: '鱼需要水才能生活。' }, { en: 'He went to get fish.', cn: '他去钓鱼了。' }] },
  { id: 215, word: 'horse', phonetic: '/hɔːrs/', category: 'things_picturable', meaning: '马', exampleEN: 'The horse runs in the field.', exampleCN: '马在田野里奔跑。', tag: 'animal', sentences: [{ en: 'She got on the horse.', cn: '她骑上了马。' }, { en: 'A horse has four legs.', cn: '马有四条腿。' }] },
  // 自然
  { id: 221, word: 'flower', phonetic: '/ˈflaʊər/', category: 'things_picturable', meaning: '花', exampleEN: 'The flower is red.', exampleCN: '花是红色的。', tag: 'nature', sentences: [{ en: 'Give her the flower.', cn: '把花给她。' }, { en: 'Flowers come out in spring.', cn: '花在春天开放。' }] },
  { id: 222, word: 'leaf', phonetic: '/liːf/', category: 'things_picturable', meaning: '叶子', exampleEN: 'The leaf fell from the tree.', exampleCN: '叶子从树上落下来。', tag: 'nature', sentences: [{ en: 'Green leaves are on the tree.', cn: '树上有绿叶。' }, { en: 'The wind took the leaf away.', cn: '风把叶子吹走了。' }] },
  { id: 223, word: 'river', phonetic: '/ˈrɪvər/', category: 'things_picturable', meaning: '河', exampleEN: 'The river is long.', exampleCN: '河很长。', tag: 'nature', sentences: [{ en: 'Fish live in the river.', cn: '鱼生活在河里。' }, { en: 'Go across the river.', cn: '渡过河。' }] },
  { id: 224, word: 'sea', phonetic: '/siː/', category: 'things_picturable', meaning: '海', exampleEN: 'The sea is deep.', exampleCN: '海很深。', tag: 'nature', sentences: [{ en: 'The ship goes out to sea.', cn: '船驶向大海。' }, { en: 'The sea is blue and wide.', cn: '大海蔚蓝而宽广。' }] },
  { id: 225, word: 'star', phonetic: '/stɑːr/', category: 'things_picturable', meaning: '星星', exampleEN: 'I can see a star.', exampleCN: '我能看见一颗星星。', tag: 'nature', sentences: [{ en: 'Stars come out at night.', cn: '星星在夜晚出现。' }, { en: 'The star is far away.', cn: '星星离我们很远。' }] },
  { id: 226, word: 'sun', phonetic: '/sʌn/', category: 'things_picturable', meaning: '太阳', exampleEN: 'The sun is up.', exampleCN: '太阳升起来了。', tag: 'nature', sentences: [{ en: 'The sun gives us light.', cn: '太阳给我们光亮。' }, { en: 'The sun goes down in the evening.', cn: '太阳在傍晚落山。' }] },
  { id: 227, word: 'tree', phonetic: '/triː/', category: 'things_picturable', meaning: '树', exampleEN: 'The tree is tall.', exampleCN: '树很高。', tag: 'nature', sentences: [{ en: 'A bird is in the tree.', cn: '树上有一只鸟。' }, { en: 'She sat under the tree.', cn: '她坐在树下。' }] },
  { id: 228, word: 'water', phonetic: '/ˈwɔːtər/', category: 'things_picturable', meaning: '水', exampleEN: 'Drink water every day.', exampleCN: '每天喝水。', tag: 'nature', sentences: [{ en: 'Put water in the glass.', cn: '把水倒进杯子里。' }, { en: 'Water is important for life.', cn: '水对生命很重要。' }] },
  // 生活用品
  { id: 231, word: 'book', phonetic: '/bʊk/', category: 'things_picturable', meaning: '书', exampleEN: 'Read the book.', exampleCN: '读这本书。', tag: 'daily', sentences: [{ en: 'Put the book on the desk.', cn: '把书放在桌子上。' }, { en: 'She has many books.', cn: '她有很多书。' }] },
  { id: 232, word: 'box', phonetic: '/bɒks/', category: 'things_picturable', meaning: '盒子', exampleEN: 'Put it in the box.', exampleCN: '把它放进盒子里。', tag: 'daily', sentences: [{ en: 'Open the box.', cn: '打开盒子。' }, { en: 'The box is full of books.', cn: '盒子里装满了书。' }] },
  { id: 233, word: 'cup', phonetic: '/kʌp/', category: 'things_picturable', meaning: '杯子', exampleEN: 'Fill the cup with water.', exampleCN: '把杯子装满水。', tag: 'daily', sentences: [{ en: 'She drank from the cup.', cn: '她从杯子里喝水。' }, { en: 'Give me a cup of tea.', cn: '给我一杯茶。' }] },
  { id: 234, word: 'table', phonetic: '/ˈteɪbəl/', category: 'things_picturable', meaning: '桌子', exampleEN: 'Put it on the table.', exampleCN: '把它放在桌子上。', tag: 'daily', sentences: [{ en: 'Sit at the table.', cn: '坐在桌子旁。' }, { en: 'The food is on the table.', cn: '食物在桌子上。' }] },
  { id: 235, word: 'bag', phonetic: '/bæɡ/', category: 'things_picturable', meaning: '袋子，包', exampleEN: 'Put it in the bag.', exampleCN: '把它放进包里。', tag: 'daily', sentences: [{ en: 'Take the book out of the bag.', cn: '从包里拿出书。' }, { en: 'Her bag is very heavy.', cn: '她的包很重。' }] },
];

// 通用名词精选（200个→精选50个核心词）
const GENERAL_THINGS = [
  { id: 301, word: 'day', phonetic: '/deɪ/', category: 'things_general', meaning: '天，一天', exampleEN: 'Have a good day.', exampleCN: '祝你有美好的一天。', sentences: [{ en: 'Every day is a new start.', cn: '每天都是新的开始。' }, { en: 'The day is long in summer.', cn: '夏天的白天很长。' }] },
  { id: 302, word: 'night', phonetic: '/naɪt/', category: 'things_general', meaning: '夜晚', exampleEN: 'Good night.', exampleCN: '晚安。', sentences: [{ en: 'Stars come out at night.', cn: '夜晚星星出现了。' }, { en: 'She reads before going to sleep at night.', cn: '她晚上睡前读书。' }] },
  { id: 303, word: 'time', phonetic: '/taɪm/', category: 'things_general', meaning: '时间', exampleEN: 'What time is it?', exampleCN: '现在几点了？', sentences: [{ en: 'It is time to go.', cn: '该走了。' }, { en: 'Time goes by quickly.', cn: '时间过得真快。' }] },
  { id: 304, word: 'year', phonetic: '/jɪr/', category: 'things_general', meaning: '年', exampleEN: 'A year has twelve months.', exampleCN: '一年有十二个月。', sentences: [{ en: 'She is ten years old.', cn: '她十岁了。' }, { en: 'A new year is coming.', cn: '新年来了。' }] },
  { id: 305, word: 'work', phonetic: '/wɜːrk/', category: 'things_general', meaning: '工作，作品', exampleEN: 'Good work!', exampleCN: '做得好！', sentences: [{ en: 'Do your work well.', cn: '把工作做好。' }, { en: 'She went to work early.', cn: '她很早去工作了。' }] },
  { id: 306, word: 'word', phonetic: '/wɜːrd/', category: 'things_general', meaning: '词，单词', exampleEN: 'What does this word mean?', exampleCN: '这个词是什么意思？', sentences: [{ en: 'Say the word out loud.', cn: '大声说出这个词。' }, { en: 'I know 850 basic words.', cn: '我知道850个基本单词。' }] },
  { id: 307, word: 'idea', phonetic: '/aɪˈdiːə/', category: 'things_general', meaning: '想法，主意', exampleEN: 'That is a good idea.', exampleCN: '那是个好主意。', sentences: [{ en: 'She had a new idea.', cn: '她有了一个新想法。' }, { en: 'What is your idea?', cn: '你的想法是什么？' }] },
  { id: 308, word: 'place', phonetic: '/pleɪs/', category: 'things_general', meaning: '地方，位置', exampleEN: 'This is a good place.', exampleCN: '这是个好地方。', sentences: [{ en: 'Put it in the right place.', cn: '把它放在正确的位置。' }, { en: 'This is a quiet place.', cn: '这是一个安静的地方。' }] },
  { id: 309, word: 'question', phonetic: '/ˈkwestʃən/', category: 'things_general', meaning: '问题，疑问', exampleEN: 'Ask a question.', exampleCN: '提一个问题。', sentences: [{ en: 'Do you have any questions?', cn: '你有什么问题吗？' }, { en: 'That is a good question.', cn: '那是个好问题。' }] },
  { id: 310, word: 'answer', phonetic: '/ˈɑːnsər/', category: 'things_general', meaning: '答案，回答', exampleEN: 'What is the answer?', exampleCN: '答案是什么？', sentences: [{ en: 'She gave an answer.', cn: '她给出了答案。' }, { en: 'The answer is simple.', cn: '答案很简单。' }] },
  { id: 311, word: 'name', phonetic: '/neɪm/', category: 'things_general', meaning: '名字', exampleEN: 'What is your name?', exampleCN: '你叫什么名字？', sentences: [{ en: 'My name is Tom.', cn: '我叫汤姆。' }, { en: 'Put your name on the book.', cn: '在书上写上你的名字。' }] },
  { id: 312, word: 'number', phonetic: '/ˈnʌmbər/', category: 'things_general', meaning: '数字，号码', exampleEN: 'What is your number?', exampleCN: '你的号码是什么？', sentences: [{ en: 'Write the number five.', cn: '写下数字5。' }, { en: 'A small number of people.', cn: '少数人。' }] },
  { id: 313, word: 'money', phonetic: '/ˈmʌni/', category: 'things_general', meaning: '钱，金钱', exampleEN: 'Save your money.', exampleCN: '存钱。', sentences: [{ en: 'How much money do you have?', cn: '你有多少钱？' }, { en: 'Money is not everything.', cn: '金钱不是一切。' }] },
  { id: 314, word: 'food', phonetic: '/fuːd/', category: 'things_general', meaning: '食物', exampleEN: 'The food is good.', exampleCN: '食物很好吃。', sentences: [{ en: 'We need food to live.', cn: '我们需要食物来生活。' }, { en: 'She made food for the family.', cn: '她为家人做了食物。' }] },
  { id: 315, word: 'school', phonetic: '/skuːl/', category: 'things_general', meaning: '学校', exampleEN: 'Go to school.', exampleCN: '去上学。', sentences: [{ en: 'I go to school every day.', cn: '我每天去上学。' }, { en: 'School starts at eight.', cn: '学校八点开始上课。' }] },
  { id: 316, word: 'house', phonetic: '/haʊs/', category: 'things_general', meaning: '房子，家', exampleEN: 'This is my house.', exampleCN: '这是我的家。', sentences: [{ en: 'She lives in a big house.', cn: '她住在一栋大房子里。' }, { en: 'Come to my house.', cn: '来我家。' }] },
  { id: 317, word: 'room', phonetic: '/ruːm/', category: 'things_general', meaning: '房间，空间', exampleEN: 'Come into the room.', exampleCN: '进到房间里来。', sentences: [{ en: 'The room is clean.', cn: '房间很整洁。' }, { en: 'There is no room here.', cn: '这里没有空间了。' }] },
  { id: 318, word: 'family', phonetic: '/ˈfæməli/', category: 'things_general', meaning: '家庭，家人', exampleEN: 'My family is here.', exampleCN: '我的家人在这里。', sentences: [{ en: 'I love my family.', cn: '我爱我的家人。' }, { en: 'The family has dinner together.', cn: '家人一起吃晚饭。' }] },
  { id: 319, word: 'friend', phonetic: '/frend/', category: 'things_general', meaning: '朋友', exampleEN: 'She is my friend.', exampleCN: '她是我的朋友。', sentences: [{ en: 'Be kind to your friends.', cn: '对朋友要友善。' }, { en: 'He came with a friend.', cn: '他和一个朋友来了。' }] },
  { id: 320, word: 'help', phonetic: '/help/', category: 'things_general', meaning: '帮助', exampleEN: 'Give help to others.', exampleCN: '给别人帮助。', sentences: [{ en: 'I need your help.', cn: '我需要你的帮助。' }, { en: 'Give help to those in need.', cn: '帮助有需要的人。' }] },
  { id: 321, word: 'story', phonetic: '/ˈstɔːri/', category: 'things_general', meaning: '故事', exampleEN: 'Tell me a story.', exampleCN: '给我讲个故事。', sentences: [{ en: 'She told a story to the children.', cn: '她给孩子们讲了个故事。' }, { en: 'It is a long story.', cn: '这是一个很长的故事。' }] },
  { id: 322, word: 'music', phonetic: '/ˈmjuːzɪk/', category: 'things_general', meaning: '音乐', exampleEN: 'I love music.', exampleCN: '我喜欢音乐。', sentences: [{ en: 'Music makes me happy.', cn: '音乐让我开心。' }, { en: 'She plays music every day.', cn: '她每天演奏音乐。' }] },
  { id: 323, word: 'game', phonetic: '/ɡeɪm/', category: 'things_general', meaning: '游戏，比赛', exampleEN: 'Let us play a game.', exampleCN: '我们来玩个游戏吧。', sentences: [{ en: 'The game is starting.', cn: '游戏开始了。' }, { en: 'Let us play a game together.', cn: '我们一起玩个游戏吧。' }] },
  { id: 324, word: 'color', phonetic: '/ˈkʌlər/', category: 'things_general', meaning: '颜色', exampleEN: 'What color is it?', exampleCN: '它是什么颜色？', sentences: [{ en: 'What is your favorite color?', cn: '你最喜欢的颜色是什么？' }, { en: 'The colors of the rainbow are beautiful.', cn: '彩虹的颜色很美丽。' }] },
  { id: 325, word: 'letter', phonetic: '/ˈletər/', category: 'things_general', meaning: '信，字母', exampleEN: 'Write a letter to her.', exampleCN: '给她写封信。', sentences: [{ en: 'She sent a letter to me.', cn: '她给我寄了一封信。' }, { en: 'A is the first letter of the alphabet.', cn: 'A是字母表中的第一个字母。' }] },
];

// 性质词（形容词，精选50个）
const QUALITIES = [
  { id: 401, word: 'good', phonetic: '/ɡʊd/', category: 'qualities', meaning: '好的', opposite: 'bad', exampleEN: 'That is a good idea.', exampleCN: '那是个好主意。', sentences: [{ en: 'She is a good student.', cn: '她是个好学生。' }, { en: 'Have a good day.', cn: '祝你有美好的一天。' }] },
  { id: 402, word: 'bad', phonetic: '/bæd/', category: 'qualities', meaning: '坏的', opposite: 'good', exampleEN: 'It is a bad idea.', exampleCN: '这是个坏主意。', sentences: [{ en: 'It is bad weather today.', cn: '今天天气很差。' }, { en: 'Bad habits are hard to change.', cn: '坏习惯很难改变。' }] },
  { id: 403, word: 'big', phonetic: '/bɪɡ/', category: 'qualities', meaning: '大的', opposite: 'small', exampleEN: 'A big dog.', exampleCN: '一只大狗。', sentences: [{ en: 'The city is very big.', cn: '城市非常大。' }, { en: 'She has big ideas.', cn: '她有很大的想法。' }] },
  { id: 404, word: 'small', phonetic: '/smɔːl/', category: 'qualities', meaning: '小的', opposite: 'big', exampleEN: 'A small cat.', exampleCN: '一只小猫。', sentences: [{ en: 'Take small steps.', cn: '迈小步。' }, { en: 'A small but good book.', cn: '一本小但好的书。' }] },
  { id: 405, word: 'long', phonetic: '/lɒŋ/', category: 'qualities', meaning: '长的', opposite: 'short', exampleEN: 'A long road.', exampleCN: '一条长路。', sentences: [{ en: 'It is a long way home.', cn: '回家的路很长。' }, { en: 'The river is very long.', cn: '这条河非常长。' }] },
  { id: 406, word: 'short', phonetic: '/ʃɔːrt/', category: 'qualities', meaning: '短的，矮的', opposite: 'long', exampleEN: 'A short story.', exampleCN: '一个短故事。', sentences: [{ en: 'Life is short, make it good.', cn: '生命短暂，让它变得美好。' }, { en: 'He is short but strong.', cn: '他矮小但强壮。' }] },
  { id: 407, word: 'old', phonetic: '/oʊld/', category: 'qualities', meaning: '老的，旧的', opposite: 'new', exampleEN: 'An old book.', exampleCN: '一本旧书。', sentences: [{ en: 'She is not old.', cn: '她不老。' }, { en: 'Old things have stories.', cn: '旧东西有故事。' }] },
  { id: 408, word: 'new', phonetic: '/njuː/', category: 'qualities', meaning: '新的', opposite: 'old', exampleEN: 'A new start.', exampleCN: '一个新的开始。', sentences: [{ en: 'I have a new book.', cn: '我有一本新书。' }, { en: 'Try something new.', cn: '尝试新事物。' }] },
  { id: 409, word: 'happy', phonetic: '/ˈhæpi/', category: 'qualities', meaning: '开心的，快乐的', exampleEN: 'I am happy today.', exampleCN: '今天我很开心。', sentences: [{ en: 'Be happy with what you have.', cn: '对你拥有的感到满足。' }, { en: 'She seems happy.', cn: '她看起来很开心。' }] },
  { id: 410, word: 'sad', phonetic: '/sæd/', category: 'qualities', meaning: '伤心的，难过的', exampleEN: 'She looks sad.', exampleCN: '她看起来很难过。', sentences: [{ en: 'He felt sad when his dog went away.', cn: '当他的狗走了，他感到很伤心。' }, { en: 'Do not be sad.', cn: '不要难过。' }] },
  { id: 411, word: 'hot', phonetic: '/hɒt/', category: 'qualities', meaning: '热的', opposite: 'cold', exampleEN: 'The food is hot.', exampleCN: '食物很烫。', sentences: [{ en: 'It is hot in summer.', cn: '夏天很热。' }, { en: 'Be careful, the water is hot.', cn: '小心，水很热。' }] },
  { id: 412, word: 'cold', phonetic: '/koʊld/', category: 'qualities', meaning: '冷的', opposite: 'hot', exampleEN: 'Cold water is good.', exampleCN: '冷水很好。', sentences: [{ en: 'It is cold outside.', cn: '外面很冷。' }, { en: 'She has a cold.', cn: '她感冒了。' }] },
  { id: 413, word: 'clean', phonetic: '/kliːn/', category: 'qualities', meaning: '干净的', opposite: 'dirty', exampleEN: 'Keep it clean.', exampleCN: '保持干净。', sentences: [{ en: 'Wash your hands and keep them clean.', cn: '洗手并保持双手干净。' }, { en: 'The room is clean and quiet.', cn: '房间干净又安静。' }] },
  { id: 414, word: 'dark', phonetic: '/dɑːrk/', category: 'qualities', meaning: '暗的，黑暗的', exampleEN: 'It is dark outside.', exampleCN: '外面很黑。', sentences: [{ en: 'It gets dark early in winter.', cn: '冬天天黑得早。' }, { en: 'She is afraid of the dark.', cn: '她害怕黑暗。' }] },
  { id: 415, word: 'light', phonetic: '/laɪt/', category: 'qualities', meaning: '明亮的，轻的', exampleEN: 'A light bag. The room is light.', exampleCN: '一个轻的包。房间很明亮。', sentences: [{ en: 'The room is light and warm.', cn: '房间明亮而温暖。' }, { en: 'This bag is light.', cn: '这个包很轻。' }] },
  { id: 416, word: 'true', phonetic: '/truː/', category: 'qualities', meaning: '真实的，真正的', exampleEN: 'Is it true?', exampleCN: '这是真的吗？', sentences: [{ en: 'That is true.', cn: '那是真的。' }, { en: 'Be true to yourself.', cn: '对自己诚实。' }] },
  { id: 417, word: 'wrong', phonetic: '/rɒŋ/', category: 'qualities', meaning: '错误的，不对的', exampleEN: 'That is wrong.', exampleCN: '那是错的。', sentences: [{ en: 'I gave the wrong answer.', cn: '我给了错误的答案。' }, { en: 'What went wrong?', cn: '什么地方出了问题？' }] },
  { id: 418, word: 'ready', phonetic: '/ˈredi/', category: 'qualities', meaning: '准备好的', exampleEN: 'Are you ready?', exampleCN: '你准备好了吗？', sentences: [{ en: 'Get ready to go.', cn: '准备好出发。' }, { en: 'I am ready.', cn: '我准备好了。' }] },
  { id: 419, word: 'quiet', phonetic: '/ˈkwaɪət/', category: 'qualities', meaning: '安静的', exampleEN: 'Be quiet.', exampleCN: '保持安静。', sentences: [{ en: 'Keep the room quiet.', cn: '保持房间安静。' }, { en: 'It is a quiet place.', cn: '这是一个安静的地方。' }] },
  { id: 420, word: 'beautiful', phonetic: '/ˈbjuːtɪfəl/', category: 'qualities', meaning: '美丽的', exampleEN: 'A beautiful flower.', exampleCN: '一朵美丽的花。', sentences: [{ en: 'The sunset is beautiful.', cn: '日落很美丽。' }, { en: 'She has a beautiful voice.', cn: '她有一把美丽的声音。' }] },
];

// 反义对（50个形容词，以25对出现）
const OPPOSITES = [
  { id: 501, word: 'hard', phonetic: '/hɑːrd/', opposite: 'soft', category: 'opposites', meaning: '硬的，困难的', exampleEN: 'Hard work brings results.', exampleCN: '努力工作带来成果。', sentences: [{ en: 'The exam is hard.', cn: '考试很难。' }, { en: 'She worked hard.', cn: '她努力工作。' }] },
  { id: 502, word: 'soft', phonetic: '/sɒft/', opposite: 'hard', category: 'opposites', meaning: '软的，轻柔的', exampleEN: 'Soft music.', exampleCN: '轻柔的音乐。', sentences: [{ en: 'The bed is soft.', cn: '床很软。' }, { en: 'She has a soft voice.', cn: '她声音轻柔。' }] },
  { id: 503, word: 'thick', phonetic: '/θɪk/', opposite: 'thin', category: 'opposites', meaning: '厚的，粗的', exampleEN: 'A thick book.', exampleCN: '一本厚书。', sentences: [{ en: 'The wall is thick.', cn: '墙很厚。' }, { en: 'She put on thick clothes.', cn: '她穿上了厚衣服。' }] },
  { id: 504, word: 'thin', phonetic: '/θɪn/', opposite: 'thick', category: 'opposites', meaning: '薄的，细的', exampleEN: 'A thin paper.', exampleCN: '一张薄纸。', sentences: [{ en: 'The ice is thin, be careful.', cn: '冰很薄，小心点。' }, { en: 'He is thin but healthy.', cn: '他很瘦但很健康。' }] },
  { id: 505, word: 'fast', phonetic: '/fæst/', opposite: 'slow', category: 'opposites', meaning: '快的', exampleEN: 'Run fast!', exampleCN: '跑快点！', sentences: [{ en: 'The car goes fast.', cn: '汽车开得很快。' }, { en: 'She is a fast learner.', cn: '她学得很快。' }] },
  { id: 506, word: 'slow', phonetic: '/sloʊ/', opposite: 'fast', category: 'opposites', meaning: '慢的', exampleEN: 'Take it slow.', exampleCN: '慢慢来。', sentences: [{ en: 'A slow train is safer.', cn: '慢速的火车更安全。' }, { en: 'He walks slowly.', cn: '他走得很慢。' }] },
  { id: 507, word: 'high', phonetic: '/haɪ/', opposite: 'low', category: 'opposites', meaning: '高的', exampleEN: 'A high mountain.', exampleCN: '一座高山。', sentences: [{ en: 'The price is high.', cn: '价格很高。' }, { en: 'The bird flies high.', cn: '鸟飞得很高。' }] },
  { id: 508, word: 'low', phonetic: '/loʊ/', opposite: 'high', category: 'opposites', meaning: '低的', exampleEN: 'A low voice.', exampleCN: '低沉的声音。', sentences: [{ en: 'Speak in a low voice.', cn: '低声说话。' }, { en: 'The water level is low.', cn: '水位很低。' }] },
  { id: 509, word: 'open', phonetic: '/ˈoʊpən/', opposite: 'shut', category: 'opposites', meaning: '开着的，开放的', exampleEN: 'Keep the door open.', exampleCN: '让门开着。', sentences: [{ en: 'The shop is open.', cn: '商店开着。' }, { en: 'Open your eyes.', cn: '睁开眼睛。' }] },
  { id: 510, word: 'shut', phonetic: '/ʃʌt/', opposite: 'open', category: 'opposites', meaning: '关着的', exampleEN: 'Keep it shut.', exampleCN: '保持关闭。', sentences: [{ en: 'The door is shut.', cn: '门关着。' }, { en: 'Keep your mouth shut.', cn: '保持沉默。' }] },
  { id: 511, word: 'wet', phonetic: '/wet/', opposite: 'dry', category: 'opposites', meaning: '湿的', exampleEN: 'Wet paint!', exampleCN: '油漆未干！', sentences: [{ en: 'My clothes are wet.', cn: '我的衣服湿了。' }, { en: 'The grass is wet with water.', cn: '草地上都是水，湿漉漉的。' }] },
  { id: 512, word: 'dry', phonetic: '/draɪ/', opposite: 'wet', category: 'opposites', meaning: '干燥的，干的', exampleEN: 'Dry your hands.', exampleCN: '擦干手。', sentences: [{ en: 'The weather is dry.', cn: '天气干燥。' }, { en: 'Keep the food dry.', cn: '保持食物干燥。' }] },
  { id: 513, word: 'early', phonetic: '/ˈɜːrli/', opposite: 'late', category: 'opposites', meaning: '早的', exampleEN: 'Get up early.', exampleCN: '早起。', sentences: [{ en: 'She gets up early every day.', cn: '她每天早起。' }, { en: 'It is early in the morning.', cn: '早晨很早。' }] },
  { id: 514, word: 'late', phonetic: '/leɪt/', opposite: 'early', category: 'opposites', meaning: '晚的，迟的', exampleEN: 'Do not be late.', exampleCN: '不要迟到。', sentences: [{ en: 'She came home late.', cn: '她很晚才回家。' }, { en: 'It is late, time to sleep.', cn: '很晚了，该睡觉了。' }] },
  { id: 515, word: 'right', phonetic: '/raɪt/', opposite: 'wrong', category: 'opposites', meaning: '正确的，右边的', exampleEN: 'That is the right answer.', exampleCN: '那是正确答案。', sentences: [{ en: 'Turn right at the corner.', cn: '在拐角处右转。' }, { en: 'You are right.', cn: '你是对的。' }] },
];

// 数字、颜色等基础词汇
const BASICS = [
  // 数字
  { id: 601, word: 'one', phonetic: '/wʌn/', category: 'basics', meaning: '一', exampleEN: 'One more step.', exampleCN: '再一步。', sentences: [{ en: 'I have one sister.', cn: '我有一个姐妹。' }] },
  { id: 602, word: 'two', phonetic: '/tuː/', category: 'basics', meaning: '二', exampleEN: 'Two cups of tea.', exampleCN: '两杯茶。', sentences: [{ en: 'She has two hands.', cn: '她有两只手。' }] },
  { id: 603, word: 'three', phonetic: '/θriː/', category: 'basics', meaning: '三', exampleEN: 'Three little birds.', exampleCN: '三只小鸟。', sentences: [{ en: 'There are three books.', cn: '有三本书。' }] },
  { id: 604, word: 'five', phonetic: '/faɪv/', category: 'basics', meaning: '五', exampleEN: 'Five fingers.', exampleCN: '五根手指。', sentences: [{ en: 'I have five books.', cn: '我有五本书。' }] },
  { id: 605, word: 'ten', phonetic: '/ten/', category: 'basics', meaning: '十', exampleEN: 'Ten minutes.', exampleCN: '十分钟。', sentences: [{ en: 'Count to ten.', cn: '数到十。' }] },
  // 颜色
  { id: 611, word: 'red', phonetic: '/red/', category: 'basics', meaning: '红色', exampleEN: 'A red flower.', exampleCN: '一朵红花。', sentences: [{ en: 'The apple is red.', cn: '苹果是红色的。' }] },
  { id: 612, word: 'blue', phonetic: '/bluː/', category: 'basics', meaning: '蓝色', exampleEN: 'The sky is blue.', exampleCN: '天空是蓝色的。', sentences: [{ en: 'She is wearing blue.', cn: '她穿着蓝色的衣服。' }] },
  { id: 613, word: 'green', phonetic: '/ɡriːn/', category: 'basics', meaning: '绿色', exampleEN: 'Green leaves.', exampleCN: '绿叶。', sentences: [{ en: 'The grass is green.', cn: '草是绿色的。' }] },
  { id: 614, word: 'white', phonetic: '/waɪt/', category: 'basics', meaning: '白色', exampleEN: 'White snow.', exampleCN: '白雪。', sentences: [{ en: 'She has white shoes.', cn: '她有白色的鞋子。' }] },
  { id: 615, word: 'black', phonetic: '/blæk/', category: 'basics', meaning: '黑色', exampleEN: 'A black cat.', exampleCN: '一只黑猫。', sentences: [{ en: 'The night is black.', cn: '夜晚是黑色的。' }] },
  // 代词
  { id: 621, word: 'I', phonetic: '/aɪ/', category: 'basics', meaning: '我（主格）', exampleEN: 'I am happy.', exampleCN: '我很开心。', sentences: [{ en: 'I go to school.', cn: '我去上学。' }] },
  { id: 622, word: 'you', phonetic: '/juː/', category: 'basics', meaning: '你/您', exampleEN: 'How are you?', exampleCN: '你好吗？', sentences: [{ en: 'I like you.', cn: '我喜欢你。' }] },
  { id: 623, word: 'he', phonetic: '/hiː/', category: 'basics', meaning: '他', exampleEN: 'He is my friend.', exampleCN: '他是我的朋友。', sentences: [{ en: 'He goes to school.', cn: '他去上学。' }] },
  { id: 624, word: 'she', phonetic: '/ʃiː/', category: 'basics', meaning: '她', exampleEN: 'She is happy.', exampleCN: '她很开心。', sentences: [{ en: 'She has a cat.', cn: '她有一只猫。' }] },
  { id: 625, word: 'we', phonetic: '/wiː/', category: 'basics', meaning: '我们', exampleEN: 'We are friends.', exampleCN: '我们是朋友。', sentences: [{ en: 'We go together.', cn: '我们一起走。' }] },
];

// 合并所有词汇
const ALL_WORDS = [
  ...OPERATORS,
  ...DIRECTIVES,
  ...PICTURABLE_WORDS,
  ...GENERAL_THINGS,
  ...QUALITIES,
  ...OPPOSITES,
  ...BASICS,
];

// 特色句型模板（用于造句练习）
const SENTENCE_PATTERNS = [
  {
    id: 1,
    pattern: 'Subject + be + Adjective',
    patternCN: '主语 + be动词 + 形容词',
    examples: [
      { en: 'The sky is blue.', cn: '天空是蓝色的。' },
      { en: 'I am happy.', cn: '我很开心。' },
      { en: 'The food is good.', cn: '食物很好吃。' },
    ],
    template: '_____ is/are _____.',
    tips: '用 am(I), is(he/she/it), are(we/you/they)'
  },
  {
    id: 2,
    pattern: 'Subject + have + Object',
    patternCN: '主语 + have/has + 宾语',
    examples: [
      { en: 'I have a book.', cn: '我有一本书。' },
      { en: 'She has a cat.', cn: '她有一只猫。' },
      { en: 'We have a question.', cn: '我们有一个问题。' },
    ],
    template: 'I have _____. / She has _____.',
    tips: '主语是I/you/we/they 用 have，是 he/she/it 用 has'
  },
  {
    id: 3,
    pattern: 'go + direction',
    patternCN: 'go + 方向词（替代复杂动词）',
    examples: [
      { en: 'Go into the room. (enter)', cn: '进入房间。（等于enter）' },
      { en: 'Go up the stairs.', cn: '上楼梯。' },
      { en: 'Go on with your work. (continue)', cn: '继续工作。（等于continue）' },
    ],
    template: 'go + [in/out/up/down/on/off...]',
    tips: 'go + 方向词 可以替代很多英语动词！'
  },
  {
    id: 4,
    pattern: 'make + Noun',
    patternCN: 'make + 名词（替代动词）',
    examples: [
      { en: 'Make an attempt. (attempt)', cn: '做个尝试。（等于attempt）' },
      { en: 'Make a decision.', cn: '做出决定。' },
      { en: 'Make a start.', cn: '开始（等于start）。' },
    ],
    template: 'make a/an _____.',
    tips: 'make + 名词 是 Ogden Basic 的核心技巧，可以替代很多动词'
  },
  {
    id: 5,
    pattern: 'give + Noun',
    patternCN: 'give + 名词（替代动词）',
    examples: [
      { en: 'Give a smile. (smile)', cn: '给个微笑。（等于smile）' },
      { en: 'Give an answer. (answer)', cn: '给出回答。（等于answer）' },
      { en: 'Give help. (help)', cn: '给予帮助。（等于help）' },
    ],
    template: 'give a/an _____.',
    tips: 'give + 名词 也是常用替换技巧'
  },
  {
    id: 6,
    pattern: 'Subject + Operator + Object + Direction',
    patternCN: '主语 + 操作词 + 宾语 + 方向词',
    examples: [
      { en: 'Put the book on the table.', cn: '把书放在桌子上。' },
      { en: 'Take the cup from the shelf.', cn: '从架子上取下杯子。' },
      { en: 'Send the letter to him.', cn: '把信寄给他。' },
    ],
    template: '_____ put/take/give _____ on/in/to _____.',
    tips: '这是 Ogden 标准句型：主语 + 时间词 + 操作 + 宾语 + 方向'
  },
];

// 导出
if (typeof module !== 'undefined') {
  module.exports = { CATEGORIES, OPERATORS, DIRECTIVES, PICTURABLE_WORDS, GENERAL_THINGS, QUALITIES, OPPOSITES, BASICS, ALL_WORDS, SENTENCE_PATTERNS };
}
