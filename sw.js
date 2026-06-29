const VERSION = 'v47';
const CACHE = 'lotcast-' + VERSION;
const FILES = [
  './',
  './index.html',
  './manifest.json',
  './img/top.webp',
  './img/icon-1.png',
  './img/result_o.webp',
  './img/result_x.webp',
  './img/result_retry.webp',
  './img/result_daji.webp',
  './img/result_ji.webp',
  './img/result_xiong.webp',
  './img/result_daxiong.webp',
  './img/硬幣1.webp',
  './img/硬幣2.webp',
  './img/籤0.webp',
  './img/籤1.webp',
  './img/籤2.webp',
  './img/圈A.webp',
  './img/圈B.webp',
  './img/圈C1.webp',
  './img/圈C2.webp',
  './img/圈C3.webp',
  './img/圈C4.webp',
  './img/裝飾-A.webp',
  './img/裝飾-B.webp',
  './img/statue_a_idle.webp',
  './img/statue_b_idle.webp',
  './img/statue_c_idle.webp',
  './img/statue_d_idle.webp',
  './img/statue_d_hover.webp',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
