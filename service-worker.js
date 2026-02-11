// Simple service worker for offline support
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('soulvest-cache-v1').then(cache => {
      return cache.addAll([
        './index.html',
        './style.css',
        './assets/soulvest_theme.mp3',
        // Add other assets as needed
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
