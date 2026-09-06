/**
 * Apple 官方服务快查 - PWA 离线服务工作线程 (Service Worker)
 * 策略：网络优先更新缓存 + 离线瞬间回退缓存 (Network-First with Cache Fallback)
 * 连线时自动拉取最新版本刷新缓存，离线时 100% 正常运行
 */

const CACHE_NAME = 'apple-service-v1.6';
const PRECACHE_ASSETS = [
  './',
  'index.html',
  'style.css',
  'app.js',
  'data.js',
  'manifest.json',
  'icon.svg',
  'apple-touch-icon.png',
  'icon-192.png',
  'icon-512.png'
];

// 1. 安装阶段：预缓存应用核心资产
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// 2. 激活阶段：清理旧版本缓存并立即接管
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// 3. 网络请求拦截策略
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 排除后台 API 请求（由 app.js 直接网络交互）
  if (url.pathname.startsWith('/api/')) {
    return;
  }

  // 只拦截 GET 请求
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    // 优先尝试从网络拉取（确保有新数据时及时刷新）
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // 网络不可用（处于离线模式或无信号），立即从本地缓存返回
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // 如果导航页面未直接命中，回退到主页 index.html
          if (event.request.mode === 'navigate') {
            return caches.match('index.html');
          }
          return new Response('离线内容暂不可用', { status: 503, statusText: 'Offline' });
        });
      })
  );
});
