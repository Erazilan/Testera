self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("bus-snake-cache").then(function(cache) {
      return cache.addAll([
        "/bus_snake_game_with_buttons.html",
        "/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
