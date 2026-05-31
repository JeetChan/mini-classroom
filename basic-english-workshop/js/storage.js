/* storage.js - Basic English 核心词工坊 */
const StorageManager = (() => {
  'use strict';

  const STORAGE_KEY = 'basic_english_progress';

  function _getDefaultProgress() {
    return {
      masteredRoots: [],
      currentRootIndex: 0,
      lastStudyDate: null,
      flashcardIndex: 0
    };
  }

  function _validateProgress(data) {
    return (
      data &&
      typeof data === 'object' &&
      Array.isArray(data.masteredRoots) &&
      typeof data.currentRootIndex === 'number'
    );
  }

  function getProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return _getDefaultProgress();
      const parsed = JSON.parse(raw);
      if (!_validateProgress(parsed)) {
        console.warn('Invalid progress data, resetting');
        return _getDefaultProgress();
      }
      return parsed;
    } catch (e) {
      console.error('Storage read failed:', e);
      return _getDefaultProgress();
    }
  }

  function _saveProgress(progress) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      return true;
    } catch (e) {
      console.error('Storage write failed:', e);
      return false;
    }
  }

  function markRootAsMastered(rootId) {
    const progress = getProgress();
    if (!progress.masteredRoots.includes(rootId)) {
      progress.masteredRoots.push(rootId);
      progress.lastStudyDate = new Date().toISOString();
      _saveProgress(progress);
    }
    return progress;
  }

  function unmarkRoot(rootId) {
    const progress = getProgress();
    progress.masteredRoots = progress.masteredRoots.filter(id => id !== rootId);
    _saveProgress(progress);
    return progress;
  }

  function isMastered(rootId) {
    const progress = getProgress();
    return progress.masteredRoots.includes(rootId);
  }

  function updateLearnIndex(index) {
    const progress = getProgress();
    progress.currentRootIndex = index;
    progress.lastStudyDate = new Date().toISOString();
    _saveProgress(progress);
    return progress;
  }

  function updateFlashcardIndex(index) {
    const progress = getProgress();
    progress.flashcardIndex = index;
    progress.lastStudyDate = new Date().toISOString();
    _saveProgress(progress);
    return progress;
  }

  function getMasteredCount() {
    return getProgress().masteredRoots.length;
  }

  function getTotalCount() {
    return (typeof WordRoots !== 'undefined') ? WordRoots.length : 0;
  }

  function getPercentage() {
    const total = getTotalCount();
    if (total === 0) return 0;
    return Math.round((getMasteredCount() / total) * 100);
  }

  function resetAll() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (e) {
      console.error('Storage reset failed:', e);
      return false;
    }
  }

  return {
    getProgress,
    markRootAsMastered,
    unmarkRoot,
    isMastered,
    updateLearnIndex,
    updateFlashcardIndex,
    getMasteredCount,
    getTotalCount,
    getPercentage,
    resetAll
  };
})();
