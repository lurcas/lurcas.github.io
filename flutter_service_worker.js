'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e64d3591e1e14981dff86d1a86971fb7",
".git/config": "c7c7d0a1ec2eb7783fe9edc209b958f7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2cdad9345b2f22a13fe505b933722fb8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d9c477c9360086b27f5b58fc065809aa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3276cf49ec970148daeeaf1bfe279f2c",
".git/logs/refs/heads/main": "3276cf49ec970148daeeaf1bfe279f2c",
".git/logs/refs/remotes/origin/main": "af3c94ce1c1ce11f1c3f50077596c6ef",
".git/objects/00/c4f3a925d62e0d79168190c57e57a2c5f4567e": "db49c4fc6a6460272d21979cdb7332f0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/7c6e4dec56401e7de96290012029f664e230dd": "ff7bed3b462c44c31c4f7dfa9f201d1c",
".git/objects/18/2ad70cc2b53d9685ec64bb5a0f6a037249a462": "5423a14b14634bdebf7edc07fbc2638b",
".git/objects/1c/1f8ca9761e3c258f499ca0e647d76a8b1afd49": "35df5953267786753a6f1ef851fe8e2f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/09c403e7cba6529ebd068e9be950744e0dd3a8": "4dc44995f309ee98cd45168e60e4746b",
".git/objects/44/aae59683c541b1afb396a7925d0fc15b5caa49": "9cf1181dcaee3d459cdbbaf48fa82de6",
".git/objects/45/398f84a722d285cb81bd23cbd439c705410f67": "d599f4eb114c2709c6d3b910867bf529",
".git/objects/45/e93da0ab635432e377109584aa6d77cb606caa": "4940ff9dd8636cc2f35ba64edfbe0687",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/53/93a25bf4f5b476f20fc106ddebcbdc21d5b30f": "36a62d5e1e04eb8460546a01a3ab7598",
".git/objects/6e/68e088604cc3b9eef33380ed67bb1a36e2c956": "ba3686f1ac1425e0838bb842db6ab89c",
".git/objects/71/c0dca0c83aeceb4ec17862fe043408b8d4baa0": "f3da30f1624e4de5ce7adf10bfb1d225",
".git/objects/76/05a6932315ba9c7dfeffacd002b277e9e25cdf": "3d20760ed5541ee57742178627ff9b93",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/e21b5500d50d99e4dee03fdedf723ffd8980af": "8e50faf205fc772fadbc3c0f34246380",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/9f9eebb3403c8c990ba811e22ebfe158d96caa": "10d4e27e3f2490f423c639d4815a5ff7",
".git/objects/8d/a6a9ff4f928236093e071febd30c29657f5ee7": "43b85d7458b1f0265a6dc5a54f0f801a",
".git/objects/8d/b7198f35558babbd245ed0017b9e8bfa958127": "59c1556b8d67774e02afd214866a36a7",
".git/objects/93/c9b9e4b6637e9f9195eb5c5f848a00226075d6": "4af066d1b7e5fe762c1a6dd86bf86bfc",
".git/objects/9b/5f2f96c6bb5ca79aa4056c0b2108e5f3f8a52e": "391dd9972ae2b7194bbd7c54e65dd72f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/2514d993837d3e06c3e621a8d6a3e11927b8a8": "e81582561a5901809ab1ca6a113dc5fd",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/51fb2916861c0b63a0a47ee18267062e8b3b25": "8aadbdcda30c5aacce6b327c6df771f7",
".git/objects/b4/be46e2ca3edbb24568e9c20b538fb5aedba11c": "8a8139bd564444bb056137f5104d9dd5",
".git/objects/b6/3cd6a7e5fca167713dd25e7a9d00cc031c1e2a": "c05dc69a38596e11a426a500c803a60d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c0/4d102e1e374c3ad850220bc6776153fa1cda0e": "12d0860d1b54d1b8d7be8ef9934dd026",
".git/objects/ca/19619b9d85b6342dc363558cc067c2244aa908": "6d3390b48f37874ad4ef18940aa42928",
".git/objects/cc/6716de78abf0eefc9a02322d55fb60981005bd": "5254f8761b8e686b90e51d88a3c83981",
".git/objects/e0/40155a54508c03cd34d4a1e88f6582c1e5fbb9": "6f0f80bae7cadea3e3c3b59f5fb1d6ce",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/29dbe2268b28856c41885ee66d1e38fbefa1a4": "89431a75c39250723215732dfe1e5fd2",
".git/objects/e7/bb0d09d943db53b98a9a5e046fc9a0bf622fa9": "323385546c22b0ddac5c15abed213196",
".git/objects/ec/7bedbf41d299ac23b52be1f4b2583d60fda64a": "038a54766126161ad9fcee4d7b054e31",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/dad9e6472f8c270d351b37338a25fe4c52c90f": "e8c20551b1bc8990da67de9f1e2716ee",
".git/objects/f9/b1c06cb73a3aad563ba60c79b05f06554cbbd9": "57a9d3a2ebf19e1639f07d4c24418620",
".git/ORIG_HEAD": "4f2b08f99114bd2e2237d81ef8a39bb2",
".git/refs/heads/main": "40cc3a5c6aba3cd5ffbce62c7656bdbc",
".git/refs/remotes/origin/main": "40cc3a5c6aba3cd5ffbce62c7656bdbc",
"assets/AssetManifest.json": "467c5b22e7332f8b4da14ddb52139a9e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/sudoku.jpeg": "e18d35106a7679acddff62fa9849e78f",
"assets/images/sudoku.png": "484429ef0dea82b2af12898836639c93",
"assets/NOTICES": "db0d7cd70164046e1ee2ba9cbd1a41f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "4ce1cb5c2b462cd559a42469fa611cb9",
"/": "4ce1cb5c2b462cd559a42469fa611cb9",
"main.dart.js": "de1b52f8fba2c0c145c46944109cd09c",
"manifest.json": "8fb499f1084ad803a4e3f31e31fc94eb",
"README.md": "82b41626a3bb2e6c55322d43bda2cf58",
"version.json": "6b5dff19ba452d7e71f51709063ade5e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
