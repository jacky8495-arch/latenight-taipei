// Service Worker — minimal, 不做離線快取
// 更新網站時不需要改任何東西，內容永遠是最新的
const CACHE_VERSION = 'v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// 故意不攔截 fetch — 全部走預設 network
self.addEventListener('fetch', (event) => {
  // 不呼叫 event.respondWith()，瀏覽器會自動走 network
});
