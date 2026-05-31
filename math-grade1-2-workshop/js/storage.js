/**
 * storage.js - 学习进度存储管理
 * 处理LocalStorage的读写操作，包含完整的错误处理
 */

const Storage = {
  KEY: 'math-grade1-2-progress',

  /**
   * 安全地从LocalStorage读取数据
   * @returns {Object} 进度数据
   */
  load: function() {
    try {
      const data = localStorage.getItem(this.KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('读取进度数据失败：', e);
    }

    // 默认数据结构
    return {
      mastered: [],  // 已掌握的知识点ID数组
      lastVisit: null,
      visitCount: 0
    };
  },

  /**
   * 安全地保存数据到LocalStorage
   * @param {Object} data - 要保存的数据
   * @returns {boolean} 是否保存成功
   */
  save: function(data) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error('保存进度数据失败：', e);
      return false;
    }
  },

  /**
   * 标记知识点为已掌握
   * @param {number} id - 知识点ID
   */
  markMastered: function(id) {
    const data = this.load();
    if (!data.mastered.includes(id)) {
      data.mastered.push(id);
      data.lastVisit = new Date().toISOString();
      this.save(data);
    }
  },

  /**
   * 取消已掌握标记
   * @param {number} id - 知识点ID
   */
  unmarkMastered: function(id) {
    const data = this.load();
    const index = data.mastered.indexOf(id);
    if (index > -1) {
      data.mastered.splice(index, 1);
      data.lastVisit = new Date().toISOString();
      this.save(data);
    }
  },

  /**
   * 检查知识点是否已掌握
   * @param {number} id - 知识点ID
   * @returns {boolean}
   */
  isMastered: function(id) {
    const data = this.load();
    return data.mastered.includes(id);
  },

  /**
   * 获取已掌握数量
   * @returns {number}
   */
  getMasteredCount: function() {
    const data = this.load();
    return data.mastered.length;
  },

  /**
   * 获取总进度百分比
   * @param {number} total - 总知识点数
   * @returns {number}
   */
  getProgressPercent: function(total) {
    if (!total || total === 0) return 0;
    const mastered = this.getMasteredCount();
    return Math.round((mastered / total) * 100);
  },

  /**
   * 记录访问
   */
  recordVisit: function() {
    const data = this.load();
    data.lastVisit = new Date().toISOString();
    data.visitCount = (data.visitCount || 0) + 1;
    this.save(data);
  },

  /**
   * 清除所有进度
   * @returns {boolean}
   */
  clearAll: function() {
    try {
      localStorage.removeItem(this.KEY);
      return true;
    } catch (e) {
      console.error('清除进度数据失败：', e);
      return false;
    }
  }
};

// 页面加载时自动记录访问
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    try {
      Storage.recordVisit();
    } catch (e) {
      console.error('记录访问失败：', e);
    }
  });
}
