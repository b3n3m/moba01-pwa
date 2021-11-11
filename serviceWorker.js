const staticDevCoffee = "dev-coffee-site-v2";
const assets = [
  "/moba01-pwa/",
  "/moba01-pwa/index.html",
  "/moba01-pwa/css/style.css",
  "/moba01-pwa/js/app.js",
  "/moba01-pwa/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  "/images/coffee4.jpg",
  "/images/coffee5.jpg",
  "/images/coffee6.jpg",
  "/images/coffee7.jpg",
  "/images/coffee8.jpg",
  "/images/coffee9.jpg"
];

self.addEventListener("install", installEvent => {
  console.log("install begin")
  installEvent.waitUntil(
    console.log("wait until begin"),
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
      console.log("Data cached");
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
