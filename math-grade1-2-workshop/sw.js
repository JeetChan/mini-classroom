/**
 * Service Worker for Math Grade 1-2 Workshop
 * 缓存静态资源，支持离线访问
 */

const CACHE_NAME = 'math-grade1-2-v1';

// 要缓存的资源
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/learn.html',
  '/flashcard.html',
  '/roots.html',
  '/progress.html',
  '/root-detail.html',
  '/css/minimal.css',
  '/js/siteConfig.js',
  '/js/wordData.js',
  '/js/storage.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

/**
 * 安装Service Worker
 * 缓存静态资源
 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('缓存静态资源');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

/**
 * 激活Service Worker
 * 清理旧缓存
 */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

/**
 * 拦截网络请求
 * 优先从缓存返回，缓存不存在则请求网络
 */
self.addEventListener('fetch', (event) => {
  // 忽略非GET请求
  if (event.request.method !== 'GET') {
    return;
  }

  // 忽略Chrome扩展和其他非http请求
  if (!event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // 缓存存在，直接返回
          return cachedResponse;
        }

        // 缓存不存在，请求网络
        return fetch(event.request)
          .then((networkResponse) => {
            // 检查是否是有效的响应
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            // 克隆响应以便缓存
            const responseToCache = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          })
          .catch(() => {
            // 网络请求失败，返回离线页面
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            return null;
          });
      })
  );
});

/**
 * 处理推送通知（预留）
 */
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body || '有新内容更新！',
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };

    event.waitUntil(
      self.registration.showNotification(data.title || '一年级数学', options)
    );
  }
});

/**
 * 处理通知点击（预留）
 */
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow('/')
  );
});
