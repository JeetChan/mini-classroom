// 本地存储管理
const Storage = (() => {
  const KEY_MASTERED = 'ogden_mastered';
  const KEY_PROGRESS = 'ogden_progress';
  const KEY_STATS = 'ogden_stats';

  function getMastered() {
    try {
      return JSON.parse(localStorage.getItem(KEY_MASTERED) || '[]');
    } catch (e) {
      return [];
    }
  }

  function addMastered(wordId) {
    try {
      const list = getMastered();
      if (!list.includes(wordId)) {
        list.push(wordId);
        localStorage.setItem(KEY_MASTERED, JSON.stringify(list));
      }
    } catch (e) {}
  }

  function removeMastered(wordId) {
    try {
      const list = getMastered().filter(id => id !== wordId);
      localStorage.setItem(KEY_MASTERED, JSON.stringify(list));
    } catch (e) {}
  }

  function isMastered(wordId) {
    return getMastered().includes(wordId);
  }

  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem(KEY_PROGRESS) || '{}');
    } catch (e) {
      return {};
    }
  }

  function saveProgress(data) {
    try {
      localStorage.setItem(KEY_PROGRESS, JSON.stringify(data));
    } catch (e) {}
  }

  function getStats() {
    try {
      const defaultStats = {
        totalSessions: 0,
        flashcardsSeen: 0,
        lastVisit: null,
        streak: 0,
      };
      return Object.assign(defaultStats, JSON.parse(localStorage.getItem(KEY_STATS) || '{}'));
    } catch (e) {
      return { totalSessions: 0, flashcardsSeen: 0, lastVisit: null, streak: 0 };
    }
  }

  function updateStats(updates) {
    try {
      const stats = getStats();
      Object.assign(stats, updates);
      localStorage.setItem(KEY_STATS, JSON.stringify(stats));
    } catch (e) {}
  }

  function clearAll() {
    try {
      localStorage.removeItem(KEY_MASTERED);
      localStorage.removeItem(KEY_PROGRESS);
      localStorage.removeItem(KEY_STATS);
    } catch (e) {}
  }

  return { getMastered, addMastered, removeMastered, isMastered, getProgress, saveProgress, getStats, updateStats, clearAll };
})();

// 朗读功能
function speakWord(word, lang = 'en-US') {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(word);
  utter.lang = lang;
  utter.rate = 0.85;
  window.speechSynthesis.speak(utter);
}

// 分类名映射
function getCatName(catId) {
  const map = {
    operations: '操作词',
    things_general: '通用名词',
    things_picturable: '图示词',
    qualities: '性质词',
    opposites: '反义对',
    basics: '基础词',
  };
  return map[catId] || catId;
}

// 渲染词汇卡片
function renderWordCard(word, container) {
  const div = document.createElement('div');
  div.className = 'word-card fade-in' + (Storage.isMastered(word.id) ? ' mastered' : '');
  div.innerHTML = `
    <div class="word-main">${escapeHtml(word.word)}</div>
    <div class="word-phonetic">${escapeHtml(word.phonetic || '')}</div>
    <div class="word-meaning">${escapeHtml(word.meaning)}</div>
    <span class="word-cat-badge badge-${word.category}">${getCatName(word.category)}</span>
  `;
  div.addEventListener('click', () => showWordModal(word));
  if (container) container.appendChild(div);
  return div;
}

// 安全转义 HTML
function escapeHtml(str) {
  const el = document.createElement('div');
  el.textContent = String(str || '');
  return el.innerHTML;
}

// 显示单词详情弹窗
function showWordModal(word) {
  // 构建弹窗 HTML
  const mastered = Storage.isMastered(word.id);
  const combos = word.combos || [];
  const sentences = word.sentences || [];

  let combosHtml = '';
  if (combos.length > 0) {
    combosHtml = `
      <div class="modal-section">
        <div class="section-label">常用组合</div>
        <div class="combos-list">
          ${combos.map(c => `<span class="combo-tag">${escapeHtml(c)}</span>`).join('')}
        </div>
      </div>
    `;
  }

  let notesHtml = '';
  if (word.notes) {
    notesHtml = `
      <div class="modal-section">
        <div class="section-label">学习提示</div>
        <div class="modal-note">${escapeHtml(word.notes)}</div>
      </div>
    `;
  }

  let sentencesHtml = '';
  if (sentences.length > 0) {
    sentencesHtml = `
      <div class="modal-section">
        <div class="section-label">例句</div>
        <div class="sentence-list">
          ${sentences.map(s => `
            <div class="sentence-item">
              <div class="sentence-en">${escapeHtml(s.en)}</div>
              <div class="sentence-cn">${escapeHtml(s.cn)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  const opposite = word.opposite ? `<span class="combo-tag">反义词: ${escapeHtml(word.opposite)}</span>` : '';

  const html = `
    <div class="modal-overlay" id="wordModal">
      <div class="modal">
        <div class="modal-header">
          <div>
            <div class="modal-title">${escapeHtml(word.word)}</div>
            <div class="modal-phonetic">${escapeHtml(word.phonetic || '')}</div>
          </div>
          <button class="modal-close" onclick="closeModal()" aria-label="关闭">✕</button>
        </div>
        <div class="modal-body">
          <div class="modal-section">
            <div class="section-label">中文意思</div>
            <div class="modal-meaning">${escapeHtml(word.meaning)}</div>
          </div>
          ${opposite ? `<div class="modal-section"><div class="combos-list">${opposite}</div></div>` : ''}
          <div class="modal-section">
            <div class="section-label">例句（英→中）</div>
            <div class="sentence-item">
              <div class="sentence-en">${escapeHtml(word.exampleEN || '')}</div>
              <div class="sentence-cn">${escapeHtml(word.exampleCN || '')}</div>
            </div>
          </div>
          ${combosHtml}
          ${notesHtml}
          ${sentencesHtml}
          <div class="modal-actions">
            <button class="btn btn-sm btn-outline" onclick="speakWord('${escapeHtml(word.word)}')">🔊 朗读</button>
            <button class="btn btn-sm ${mastered ? 'btn-gray' : 'btn-success'}" id="masterBtn" onclick="toggleMastered(${word.id})">
              ${mastered ? '✓ 已掌握' : '标记已掌握'}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // 移除已有弹窗
  const existing = document.getElementById('wordModal');
  if (existing) existing.remove();

  document.body.insertAdjacentHTML('beforeend', html);

  // 触发动画
  requestAnimationFrame(() => {
    const modal = document.getElementById('wordModal');
    if (modal) modal.classList.add('show');
  });

  // 点击遮罩关闭
  document.getElementById('wordModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });

  // ESC 关闭
  document.addEventListener('keydown', handleModalEsc);
}

function handleModalEsc(e) {
  if (e.key === 'Escape') {
    closeModal();
    document.removeEventListener('keydown', handleModalEsc);
  }
}

function closeModal() {
  const modal = document.getElementById('wordModal');
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.remove(), 200);
  }
}

function toggleMastered(wordId) {
  if (Storage.isMastered(wordId)) {
    Storage.removeMastered(wordId);
    const btn = document.getElementById('masterBtn');
    if (btn) { btn.textContent = '标记已掌握'; btn.className = 'btn btn-sm btn-success'; }
  } else {
    Storage.addMastered(wordId);
    const btn = document.getElementById('masterBtn');
    if (btn) { btn.textContent = '✓ 已掌握'; btn.className = 'btn btn-sm btn-gray'; }
  }
  // 刷新词汇卡片样式（如果在词汇页）
  const cards = document.querySelectorAll('.word-card');
  cards.forEach(card => {
    // 无法直接关联，简单刷新不处理
  });
}

// 标记活跃导航链接
function markActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', markActiveNav);
