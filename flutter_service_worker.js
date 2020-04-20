'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d55951122f5727e1e9081e3a89f1adef",
"assets/assets/bacground/bac.jpg": "d52ddca5b2c949cdfb123037ddeb0a99",
"assets/assets/bacground/bacg.GIF": "63836c1123f2714b897735775d54831b",
"assets/assets/bacground/bacgr.gif": "2fc45a38f1d6ff8f69c799a9c921b283",
"assets/assets/icons/animalshelter.png": "fbb225ecd548428706d622034650294b",
"assets/assets/icons/dogpark.png": "b20b0589265d3111ffa18201f83c39b3",
"assets/assets/icons/facebookcircled.png": "4a8906fc891d6028dfc95bfd16ba6299",
"assets/assets/icons/google.png": "6d3605ce4fc7165d9027aff38269e0c5",
"assets/assets/icons/person.png": "b7119239e6f770b16d433df0c6fb2f52",
"assets/assets/icons/picUser.png": "7944b394dd01fd090e883a9838e21601",
"assets/assets/icons/shop.png": "d9874b2a0448a1847f0799732bccd040",
"assets/assets/icons/stethoscope.png": "cce1a0178d49162341361f5e1166a78f",
"assets/assets/loading/loader.gif": "6834a5cfc6ce80c7b00d6c5067728e6e",
"assets/assets/splashscreen/logo.png": "222974a8076a11e901e9092bea2c2793",
"assets/assets/splashscreen/sfsid.png": "0c154bd72536e032dcc027d46764506e",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "c142c9b7a3e1a50a4060f327629d1d34",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f1a8b05e9d7f85a507ac22e896f87f4a",
"/": "f1a8b05e9d7f85a507ac22e896f87f4a",
"main.dart.js": "84d6c11acb6952fcc1a92e25dcd8a8dc",
"manifest.json": "be098138491fee13a29486f24742eed1"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
