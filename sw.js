self.addEventListener("install", () => {
  console.log("App Installed");
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});