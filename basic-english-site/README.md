# Basic 850 — Ogden's Basic English Learning Site

基于 Ogden Basic English 体系的单词与造句学习网站。纯静态，无后端依赖，开箱即用。

---

## 背景

1930 年，英国语言学家 C.K. Ogden 提出了 Basic English 理论：用 **850 个精选核心词**，就能覆盖日常英语表达的绝大部分需要。其核心思路不是背更多单词，而是把最高频的词用透——尤其是 18 个操作动词（operators），配合 20 个方向词，可以替代数百个复杂动词。

本项目将这套内容整理成可交互的学习工具，面向英语基础学习，也适合用来帮助孩子建立词汇框架。

---

## 功能模块

| 页面 | 文件 | 说明 |
|------|------|------|
| 首页 | `index.html` | 概览 + 各模块入口 |
| 词汇表 | `words.html` | 850词按5个类别浏览，支持搜索和随机排序，点击查看详情 |
| 闪卡练习 | `flashcard.html` | 翻转闪卡，支持键盘操作（空格翻转，←→切换），可选自动朗读 |
| 核心动词 | `operators.html` | 18个操作词的变位表、用法说明，以及与20个方向词的组合对照 |
| 造句练习 | `sentences.html` | 6种句型模板 + 翻译挑战，练习「操作词+名词替代复杂动词」的表达方式 |
| 学习进度 | `progress.html` | 本地记录已掌握词汇，可视化分类进度 |

---

## 词汇分类

Ogden 原始分类体系，共 850 词：

- **Operations（操作词）** — 100词：动词、介词、代词等结构性词汇
- **General Things（通用名词）** — 400词：抽象名词与通用事物
- **Picturable Things（图示词）** — 200词：可具象描述的事物
- **Qualities（性质词）** — 100词：形容词
- **Opposites（反义对）** — 50词：成对的反义形容词

---

## 18 个核心操作动词

```
be  have  do  come  go  get  give  keep  let  make
put  seem  take  send  say  see  send  come
```

配合 20 个方向词（in / out / up / down / over / under / about…），形成「操作词 + 方向词」组合，可替代大量复杂词汇：

```
go up       → rise / climb
put out     → extinguish
get in      → enter
give up     → abandon
come across → encounter
```

---

## 使用方式

### 直接打开

项目为纯静态文件，无需任何构建步骤：

```bash
# 克隆后直接用浏览器打开
open index.html
```

或通过任意静态服务器启动：

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .
```

### 文件结构

```
basic-english-site/
├── index.html          # 首页
├── words.html          # 词汇表
├── flashcard.html      # 闪卡练习
├── operators.html      # 核心动词
├── sentences.html      # 造句练习
├── progress.html       # 学习进度
├── css/
│   └── style.css       # 全局样式
└── js/
    ├── wordData.js     # 词汇数据（850词 + 例句）
    └── app.js          # 交互逻辑
```

---

## 数据说明

所有词汇数据存放于 `js/wordData.js`，每个词条结构如下：

```js
{
  word: 'get',
  phonetic: '/ɡet/',
  category: 'operations',
  meaning: '得到，获得',
  exampleEN: 'Get a book from the shelf.',
  exampleCN: '从书架上拿一本书。',
  sentences: [
    { en: 'Get up early.', cn: '早点起床。' },
    // ...
  ]
}
```

进度数据使用浏览器 `localStorage` 存储，不依赖服务端。

---

## 技术栈

- 纯 HTML / CSS / JavaScript，无框架依赖
- 朗读功能使用浏览器内置 Web Speech API
- 字体：[Inter](https://fonts.google.com/specimen/Inter)（Google Fonts CDN）
- 进度存储：`localStorage`

---

## 参考资料

- [Ogden's Basic English](https://en.wikipedia.org/wiki/Basic_English) — Wikipedia
- [ogden.munch.love](https://ogden.munch.love/) — 原始词表参考
- C.K. Ogden, *Basic English: A General Introduction with Rules and Grammar*, 1930

---

## License

内容整理自公开资料，代码部分采用 [MIT License](LICENSE)。
