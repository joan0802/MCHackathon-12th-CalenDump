// sw.js

self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    // 可以在此處預快取資源
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/app.js',
          '/images/icon-192x192.png',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  