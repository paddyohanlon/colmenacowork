const version = "V1";
const staticCacheName = version + "staticfiles";
const imageCacheName = "images";
const urlsToCache = ["/", "/assets/css/main.css", "/assets/js/main.js", "/offline.html"];

const cacheList = [staticCacheName, imageCacheName];

self.addEventListener("install", (installEvent) => {
  // Perform install steps
  skipWaiting();

  installEvent.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("activate", (activateEvent) => {
  activateEvent.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheList.includes(cacheName)) {
              return caches.delete(cacheName);
            } // end if
          }), // end map
        ); // end return Promise.all
      }) // end keys then
      .then(() => {
        /* eslint-disable-next-line no-undef */
        return clients.claim();
      }), // end then
  ); // end waitUntil
}); // end addEventListener

addEventListener("fetch", (fetchEvent) => {
  const request = fetchEvent.request;
  // When the user requests an HTML file
  if (request.headers.get("Accept").includes("text/html")) {
    console.log("html request");
    fetchEvent.respondWith(
      // Fetch that page from the network
      fetch(request).catch((error) => {
        // Otherwise show the fallback page
        return caches.match("/offline.html");
      }), // end fetch catch
    ); // end respondWith
    return; // Go no further
  } // end if
  // When the user requests an image
  if (request.headers.get("Accept").includes("image")) {
    console.log("image request");
    fetchEvent.respondWith(
      // Look for a cached version of the image
      caches.match(request).then((responseFromCache) => {
        if (responseFromCache) {
          return responseFromCache;
        } // end if
        // Otherwise fetch the image from the network
        return fetch(request).then((responseFromFetch) => {
          // Put a copy in the cache
          const copy = responseFromFetch.clone();
          fetchEvent.waitUntil(
            caches.open(imageCacheName).then((imageCache) => {
              return imageCache.put(request, copy);
            }), // end open then
          ); // end waitUntil
          return responseFromFetch;
        }); // end fetch then and return
      }), // end match then
    ); // end respondWith
    return; // Go no further
  } // end if
  console.log("some other request");
  // For everything else...
  fetchEvent.respondWith(
    // Look for a cached version of the file
    caches.match(request).then((responseFromCache) => {
      if (responseFromCache) {
        return responseFromCache;
      } // end if
      // Otherwise fetch the file from the network
      return fetch(request);
    }), // end match then
  ); // end respondWith
}); // end addEventListener
