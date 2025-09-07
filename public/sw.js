// Service Worker DESHABILITADO - Para evitar problemas de cache
console.log('Service Worker deshabilitado temporalmente');

// No hacer nada para evitar errores
self.addEventListener('install', event => {
  console.log('SW install - no action');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('SW activate - clearing cache');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // No interceptar requests - dejar que el navegador maneje todo
  return;
});
