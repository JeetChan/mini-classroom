// ===== storage.js =====
// 学习进度本地存储管理

const Storage = {
  PREFIX: 'cn_grade1_',

  // 保存学习进度
  saveProgress(module, id, status) {
    try {
      const key = this.PREFIX + module;
      const data = this.getAll(module);
      data[id] = { status, time: Date.now() };
      localStorage.setItem(key, JSON.stringify(data));
    } catch(e) {
      console.warn('Storage error:', e);
    }
  },

  // 获取某模块所有进度
  getAll(module) {
    try {
      const key = this.PREFIX + module;
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : {};
    } catch(e) {
      return {};
    }
  },

  // 获取已掌握数量
  getMasteredCount(module) {
    const data = this.getAll(module);
    return Object.values(data).filter(v => v.status === 'mastered').length;
  },

  // 重置某模块进度
  resetModule(module) {
    try {
      localStorage.removeItem(this.PREFIX + module);
    } catch(e) {}
  },

  // 获取总体学习统计
  getStats() {
    const modules = ['poems', 'lessons', 'riji', 'vocab', 'synonyms', 'sentences'];
    let total = 0, mastered = 0;
    modules.forEach(m => {
      const data = this.getAll(m);
      Object.values(data).forEach(v => {
        total++;
        if (v.status === 'mastered') mastered++;
      });
    });
    return { total, mastered };
  }
};
