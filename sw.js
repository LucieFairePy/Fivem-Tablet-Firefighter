const VERSION = 'tablette-secourisme-v2';

const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './css/tokens.css',
  './css/base.css',
  './css/layout.css',
  './css/components.css',
  './css/animations.css',
  './css/device.css',
  './css/responsive.css',
  './js/main.js',
  './js/router.js',
  './js/store.js',
  './js/search.js',
  './js/icons.js',
  './js/nui.js',
  './js/device.js',
  './js/data/index.js',
  './js/data/taxonomy.js',
  './js/data/vitals.js',
  './js/data/cards.constantes.js',
  './js/data/cards.urgences.js',
  './js/data/cards.pathologies.js',
  './js/data/cards.publics.js',
  './js/views/components.js',
  './js/views/dashboard.js',
  './js/views/card.js',
  './js/views/lists.js',
  './js/views/tools.js',
  './js/views/static.js',
  './assets/icon-192.png',
  './assets/icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION)

      .then((cache) => Promise.allSettled(PRECACHE.map((url) => cache.add(url))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== VERSION).map((key) => caches.delete(key)),
      ))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') return;
  if (new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(staleWhileRevalidate(event));
});

async function staleWhileRevalidate(event) {
  const { request } = event;
  const cache = await caches.open(VERSION);
  const cached = await cache.match(request);

  const network = fetch(request)
    .then((response) => {

      if (response && response.status === 200 && response.type === 'basic') {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);

  if (cached) {

    event.waitUntil(network);
    return cached;
  }

  const fresh = await network;
  if (fresh) return fresh;

  const fallback = await cache.match('./index.html');
  return fallback || Response.error();
}
