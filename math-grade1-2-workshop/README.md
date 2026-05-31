# 一年级下册数学知识点汇总网站

## 项目简介

这是一个基于人教版一年级下册数学教材的知识点学习网站，包含以下功能：

### 核心功能
- **学习模式**：渐进式学习每个知识点，包含详细说明、例题和测试
- **闪卡复习**：快速翻转复习卡片，支持键盘快捷键
- **知识点索引**：搜索和筛选所有知识点
- **进度追踪**：记录已掌握的知识点，显示学习成就
- **离线支持**：PWA应用，支持安装到桌面

### 内容覆盖
- 第1章：认识图形（二）- 长方形、正方形、三角形、圆、平行四边形、七巧板
- 第2章：20以内退位减法 - 破十法、平十法、想加法算减法
- 第3章：分类与整理 - 单一标准分类、多标准分类、统计表
- 第4章：100以内数的认识 - 数数方法、数的组成、读写规则、百数表、比大小
- 第5章：认识人民币 - 人民币单位、换算、计算、付钱方法

**知识点总数**：23个

---

## 快速开始

### 方式1：本地预览（推荐）

1. 安装 Node.js（如果还没有）: https://nodejs.org/

2. 进入项目目录：
   ```bash
   cd D:\works\WorkBuddy\math-grade1-2-workshop
   ```

3. 使用 Python 启动本地服务器：
   ```bash
   # Windows
   python -m http.server 8080

   # 或使用 Node.js
   npx serve .
   ```

4. 在浏览器中打开：http://localhost:8080

### 方式2：部署到 Vercel（推荐用于分享）

1. 安装 Vercel CLI：
   ```bash
   npm install -g vercel
   ```

2. 登录 Vercel：
   ```bash
   vercel login
   ```

3. 部署到生产环境：
   ```bash
   vercel --prod
   ```

4. 访问生成的 URL 即可

### 方式3：部署到其他平台

项目是纯静态网站，可以部署到任何静态托管服务：
- **Netlify**: https://www.netlify.com/
- **GitHub Pages**: https://pages.github.com/
- **阿里云OSS**: https://www.aliyun.com/product/oss
- **腾讯云COS**: https://cloud.tencent.com/product/cos

---

## 项目结构

```
math-grade1-2-workshop/
├── index.html          # 首页
├── learn.html          # 学习页面
├── flashcard.html      # 闪卡页面
├── roots.html          # 知识点索引
├── progress.html       # 学习进度
├── root-detail.html    # 知识点详情
├── css/
│   └── minimal.css     # 样式文件
├── js/
│   ├── wordData.js     # 知识点数据
│   ├── siteConfig.js   # 网站配置
│   └── storage.js      # 本地存储
├── manifest.json       # PWA配置
├── sw.js              # Service Worker
├── sitemap.xml        # 网站地图
├── robots.txt         # 爬虫规则
├── icon-192.png       # PWA图标
└── icon-512.png       # PWA图标
```

---

## 技术特点

### 设计系统
- **配色**：黄色主题色 (#FBBF24)，灰色系文字和背景
- **字体**：Inter 字体族
- **风格**：极简主义，大留白，清晰层级
- **响应式**：支持桌面和移动设备

### 学习模式
- **渐进式学习**：从简单到复杂，逐步掌握
- **即时反馈**：每个知识点配有练习题
- **进度追踪**：自动保存学习进度
- **成就系统**：学习达到不同阶段解锁成就

### 离线支持
- **PWA应用**：可安装到桌面
- **Service Worker**：缓存静态资源
- **本地存储**：学习进度保存在浏览器

---

## 自定义内容

### 修改知识点数据

编辑 `js/wordData.js` 文件，修改 `WordRoots` 数组中的内容：

```javascript
{
  id: 1,
  root: "知识点名称",
  origin: "章节/分类",
  meaning: "一句话解释",
  description: "详细说明...",
  examples: [
    { word: "例题", meaning: "解释", explanation: "详细解析" }
  ],
  quiz: {
    question: "测试题",
    options: ["A", "B", "C", "D"],
    correctAnswer: 0  // 正确答案索引
  }
}
```

### 修改网站配置

编辑 `js/siteConfig.js` 文件：

```javascript
{
  topic: "主题",
  siteName: "网站名称",
  itemName: "知识点",
  itemCount: 23,
  hero: { ... },
  stats: [ ... ],
  footer: { ... },
  cta: { ... }
}
```

---

## 常见问题

### Q: 如何添加更多知识点？
A: 在 `js/wordData.js` 中的 `WordRoots` 数组末尾添加新的对象，确保 `id` 唯一。

### Q: 学习进度会丢失吗？
A: 进度保存在浏览器本地存储中，清除浏览器数据会丢失。不同浏览器数据不共享。

### Q: 如何在手机上使用？
A: 网站已响应式设计，完美适配手机。也可以"添加到主屏幕"作为App使用。

### Q: 支持离线使用吗？
A: 是的，首次访问后即可离线使用（需要浏览器支持Service Worker）。

---

## 技术栈

- **HTML5**: 语义化标签
- **CSS3**: 现代布局和动画
- **JavaScript**: 原生ES6+，无框架依赖
- **PWA**: Service Worker + Manifest
- **LocalStorage**: 数据持久化

---

## 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 许可证

MIT License - 可自由使用、修改和分发

---

## 更新日志

### v1.0.0 (2026-05-07)
- 初始版本
- 包含23个人教版一年级下册数学知识点
- 实现学习、闪卡、索引、进度四大功能
- 支持PWA离线访问
- 完整的SEO优化
