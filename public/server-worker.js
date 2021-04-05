const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";
const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/db.js",
    "/index.js",
    "/styles.css",
    "/manifest.webmanifest",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png",
];

//Install

self.addEventListener("install", function(evt){
    evt.waitUntil(
        caches.open(DATA_CACHE_NAME).then((cache) => cache.add("/api/images"))
    );

    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
    );

    self.skipWaiting();
});

//Activate

self.addEventListener("activate", function(evt){
   evt.waitUntil(
       caches.keys().then(keyList => {
           return Promise.all(
               keyList.map(key => {
                   if (key !== CACHE_NAME && key !== DATA_CACHE_NAME){
                       console.log("Removing old cache data", key);
                       return caches.delete(key);
                   }
               })
           );
       })
   );

   self.clients.claim();
});