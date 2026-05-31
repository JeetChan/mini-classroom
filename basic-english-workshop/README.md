# Basic English 核心词工坊

> 用 850 个词覆盖日常 90% 表达 — 奥格登基础英语互动学习站点

![Static Site](https://img.shields.io/badge/type-static%20site-blue)
![PWA](https://img.shields.io/badge/PWA-supported-green)
![License](https://img.shields.io/badge/license-MIT-yellow)
![Words](https://img.shields.io/badge/vocabulary-850%20words-orange)

---

## 简介

**Basic English**（奥格登基础英语）由语言学家 Charles K. Ogden 于 1930 年正式推出。核心思想：从标准英语中提炼出 **850 个核心词**，配合与标准英语完全一致的语法，即可表达日常交流中 90% 的概念。

它不是人造语言，也不是简化版英语——它是标准英语的最小可用子集，用最少的学习投入换取最大的沟通能力。

本项目将 Ogden Basic English 的知识体系梳理为 **30 个学习单元**，以交互式网站形式呈现，支持渐进学习、闪卡复习和进度追踪。

---

## 功能预览

| 页面 | 文件 | 说明 |
|------|------|------|
| 首页 | `index.html` | 动画演示 + 核心统计 + 导航入口 |
| 渐进学习 | `learn.html` | 按优先级顺序学习，含内联测试题 |
| 闪卡复习 | `flashcard.html` | 卡片翻转动画，支持键盘操作 |
| 词汇索引 | `roots.html` | 搜索 + 类型筛选 + 网格浏览 |
| 进度追踪 | `progress.html` | 掌握统计 + 进度条 + 重置功能 |
| 详情页 | `root-detail.html` | 单个知识点完整内容 + 前后导航 |

---

## 知识体系

30 个学习单元覆盖 Ogden Basic English 的完整框架：

### 核心框架（4 个）
- 操作词系统（Operations）
- 18 个核心操作动词（Operators）
- 21 个方向介词（Directions）
- 代词系统（Pronouns）

### 分类体系（4 个）
- 事物词（Things）：400 个一般名词 + 200 个图解名词
- 性质词（Qualities）：150 个形容词
- 反义词系统（Opposites）
- 国际词汇（International Words）

### 主题分类（16 个）
颜色 · 身体部位 · 食物 · 家庭 · 服装 · 动物 · 时间 · 交通 · 教育 · 商业 · 农业 · 数学 · 工具 · 人物 · 建筑 · 材料

### 设计理念与学习方法（6 个）
-er 造词法 · 复合词构建 · 设计哲学 · 学习优先级 · 扩展路径

---

## 项目结构

```
basic-english-workshop/
├── index.html          # 首页
├── learn.html          # 渐进学习页
├── flashcard.html      # 闪卡复习页
├── roots.html          # 词汇索引页
├── progress.html       # 进度追踪页
├── root-detail.html    # 详情页（动态加载）
├── css/
│   └── minimal.css     # 极简设计系统
├── js/
│   ├── siteConfig.js   # 站点配置（主题、统计数据、CTA 文案）
│   ├── wordData.js     # 30 个知识点数据（含示例、测试题）
│   └── storage.js      # 学习进度本地存储逻辑
├── manifest.json       # PWA 配置
├── sw.js               # Service Worker（离线缓存）
├── sitemap.xml         # SEO 站点地图
├── robots.txt          # 爬虫规则
├── icon-192.png        # PWA 图标（192×192）
└── icon-512.png        # PWA 图标（512×512）
```

---

## 技术栈

- **纯静态**：HTML + CSS + Vanilla JS，无框架依赖，无构建工具
- **PWA**：支持安装到主屏幕，Service Worker 实现离线访问
- **本地持久化**：学习进度通过 `localStorage` 保存，刷新不丢失
- **响应式**：适配桌面和移动端
- **无外部字体依赖**：使用系统字体栈，加载速度快

---

## 快速开始

无需安装任何依赖，直接用浏览器打开：

```bash
# 克隆或下载项目后，直接打开首页
open index.html

# 或者启动一个本地服务器（推荐，以启用 PWA 功能）
npx serve .
# 访问 http://localhost:3000
```

> **提示**：直接以 `file://` 协议打开时，PWA 和 Service Worker 功能不生效，其余功能正常。

---

## 数据结构

每个知识单元（`wordData.js`）遵循以下结构：

```js
{
  id: 1,                        // 唯一 ID，用于 URL 路由
  root: "操作词系统",            // 知识点名称
  origin: "核心框架",            // 分类标签
  meaning: "...",               // 一句话定义
  description: "...",           // 详细说明（50-1000 字）
  examples: [                   // 至少 3 个示例
    {
      word: "come / go",
      meaning: "来 / 去",
      breakdown: { root: "操作动词" },
      explanation: "..."
    }
  ],
  quiz: {                       // 四选一测试题
    question: "...",
    options: ["A", "B", "C", "D"],
    correctAnswer: 1            // 0-based 索引
  }
}
```

---

## 自定义配置

修改 `js/siteConfig.js` 可快速调整站点信息：

```js
const siteConfig = {
  topic: "奥格登基础英语",
  siteName: "Basic English 核心词工坊",
  itemName: "词汇分类",
  itemCount: 30,
  hero: {
    title: ["850个核心词", "覆盖日常90%表达", "最快掌握英语"],
    subtitle: "..."
  },
  stats: [
    { value: "850", label: "核心词汇" },
    { value: "90%", label: "日常覆盖率" },
    { value: "30天", label: "掌握周期" }
  ]
};
```

---

## 键盘快捷键

闪卡页面（`flashcard.html`）支持：

| 按键 | 操作 |
|------|------|
| `←` | 上一张 |
| `→` | 下一张 |
| `空格` | 翻转卡片 |

---

## 部署

任意静态托管平台均可：

**Vercel**
```bash
npx vercel --prod
```

**Netlify**
```bash
npx netlify deploy --prod --dir .
```

**GitHub Pages**：将仓库设置中的 Pages 来源指向 `main` 分支根目录即可。

---

## 背景资料

- [Basic English Institute](https://zbenglish.net/sites/basic/basiceng.html) — 词汇分类与规则参考
- [Ogden's Basic English](https://mehk3y.com/English) — 词汇表与使用示例
- Wikipedia: [Basic English](https://en.wikipedia.org/wiki/Basic_English)

---

## License

MIT — 自由使用、修改和分发。

知识内容基于 Ogden's Basic English 公共领域资料整理。
