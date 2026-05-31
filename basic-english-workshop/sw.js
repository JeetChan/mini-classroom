const CACHE_NAME = 'basic-english-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/learn.html',
  '/flashcard.html',
  '/roots.html',
  '/progress.html',
  '/root-detail.html',
  '/css/minimal.css',
  '/js/wordData.js',
  '/js/storage.js',
  '/manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      return cached || fetch(event.request);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(name) { return name !== CACHE_NAME; })
             .map(function(name) { return caches.delete(name); })
      );
    })
  );
});
