'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "42c80d1880aa2a8bb8c0bf5cb40109c0",
".git/config": "c7c7d0a1ec2eb7783fe9edc209b958f7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e46947481405238d8301a90d4de39d0e",
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
".git/index": "3e208bc84fe2e7201a6bfc208591c5dd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ef4e54d716143e03fb7aac588d5cc579",
".git/logs/refs/heads/main": "ef4e54d716143e03fb7aac588d5cc579",
".git/logs/refs/remotes/origin/main": "157f58f12f6b306f917d2c444d72f95d",
".git/objects/00/c4f3a925d62e0d79168190c57e57a2c5f4567e": "db49c4fc6a6460272d21979cdb7332f0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/3edf61c69d17a688c54e530f647a7ae02f7b9f": "571bf9f3b3ad5f83de0edd67f3279d6f",
".git/objects/08/7c6e4dec56401e7de96290012029f664e230dd": "ff7bed3b462c44c31c4f7dfa9f201d1c",
".git/objects/09/2021c6b0b3ab294acdf7b2674a5ee95fe1fffc": "ab9486060201932a8204c940bb9932b9",
".git/objects/0a/af68051ff42c4524592f6007b4f861ea7ced9f": "47afde63e4c25086647a7a1a6806cf97",
".git/objects/12/1074e8ab46656b15a5114e6e4f3c675606a2f1": "3daa2cc795e22107da93bf15264de309",
".git/objects/16/03b79f86884656ddbfc647ae47c510d14e6312": "f01c96291943f8a60da62d319769c955",
".git/objects/18/2ad70cc2b53d9685ec64bb5a0f6a037249a462": "5423a14b14634bdebf7edc07fbc2638b",
".git/objects/19/ddf31d27588b93de6bbd81b93775ff2a89603d": "8174e5ec8d1b68da6b72e7a6f38ea72f",
".git/objects/1c/1f8ca9761e3c258f499ca0e647d76a8b1afd49": "35df5953267786753a6f1ef851fe8e2f",
".git/objects/1f/37f63b34a2d95d5cded5db1486bb326de94299": "7ceeab44c6c28354a7d8afa24e3ed806",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/09c403e7cba6529ebd068e9be950744e0dd3a8": "4dc44995f309ee98cd45168e60e4746b",
".git/objects/24/ba7d5d92e5737608a1fb27a03c5e22695a3a84": "5738441a7a5a4526ebf30172ca173609",
".git/objects/29/21de17c403e3af232ca9eb913dba07ba97d00b": "9225e6ed1b10091b006086e047e0e687",
".git/objects/2b/014788d2717099988b7601c7bf88fbc310b838": "c0b539ad7590d68f0822f81d74e68334",
".git/objects/2e/07f564d27d6b425fca30970b82c199ccc23c8d": "7380827158831e8821ddc97b5ca7e162",
".git/objects/2e/cbbc5f6e2b96e28ceaeb97dc6ab99171b17601": "11c236c5e29f14a0bbc1fbc8ec364609",
".git/objects/2e/f39043a53bda819bd803aa4d03d5011ad3d2f3": "8a58e63565d0b66495bcea6c01161224",
".git/objects/2f/ee869278edffd3883d8bf637a02e3671f029a8": "5b5401c64ef98cd90bd922ed687342a0",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/48779ff0b930f30b33efde744194e14e361330": "09d5e1f6237308e192478eb2296687ac",
".git/objects/32/58cc26c4b57dba03bfbf1657df83d6c17ef47b": "6c17be1805a4843f37525bf7bb55947b",
".git/objects/3a/0f30c4d340a20aae99cb4edd635cc74560205d": "7dbdd76f6b8d0c54b6298bb60d9fea8a",
".git/objects/3c/3168d2e47e9e101570c4c93a28207663322c73": "f5d03f05693ad177d500a9b5c4c83d8f",
".git/objects/44/aae59683c541b1afb396a7925d0fc15b5caa49": "9cf1181dcaee3d459cdbbaf48fa82de6",
".git/objects/45/398f84a722d285cb81bd23cbd439c705410f67": "d599f4eb114c2709c6d3b910867bf529",
".git/objects/45/e93da0ab635432e377109584aa6d77cb606caa": "4940ff9dd8636cc2f35ba64edfbe0687",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/303c5a21db55a2a8e36aca9032e4027d4ec567": "d864b83dd78fd73ba49c9bd4c6834072",
".git/objects/4c/b288d8ad3d826f0d390ea12463e7f924d2678b": "c3d6453409f6cf860589f8aa5d873f0b",
".git/objects/53/93a25bf4f5b476f20fc106ddebcbdc21d5b30f": "36a62d5e1e04eb8460546a01a3ab7598",
".git/objects/55/e5875f5ad987a6480c15c6549f5d97de523fba": "757309c4df640464650cf472565e8778",
".git/objects/5e/f2ac1a0b83ea2b84dd46092691e90746ef49aa": "8334bf72982736c06d238f65e187e86b",
".git/objects/65/6b59f9df38291542bbc802835fc6d64855b694": "2c71f345b198e1d23143eb0fe93dc337",
".git/objects/65/ce3b1a2800232ea79e42b9d5f70105d9b747eb": "def697b2fd9f7cfee8e3d74827aac330",
".git/objects/69/4d2e3230879ec8f8f91fa2f57cd009d18d627f": "dbb32af8d18f0dcd73fca45fb269396f",
".git/objects/6b/a58f0d62b81a2120b8ae826ab015fedceded8e": "cfe07dc2e4f58b276cde07be64df614f",
".git/objects/6e/68e088604cc3b9eef33380ed67bb1a36e2c956": "ba3686f1ac1425e0838bb842db6ab89c",
".git/objects/71/c0dca0c83aeceb4ec17862fe043408b8d4baa0": "f3da30f1624e4de5ce7adf10bfb1d225",
".git/objects/76/05a6932315ba9c7dfeffacd002b277e9e25cdf": "3d20760ed5541ee57742178627ff9b93",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/e21b5500d50d99e4dee03fdedf723ffd8980af": "8e50faf205fc772fadbc3c0f34246380",
".git/objects/82/29e7fb3a40c1244f44e077402956190380a14b": "32c636a67d83d37e57ae3bb77cfec20a",
".git/objects/83/494a1475e0402ddba7f8a9216f178109a2239f": "b918e0eaf45c114c1bbc284cde7b8597",
".git/objects/87/4abe77ef50894fd792e0dfb7b120a17709de14": "31b94d83aa2852ad03b2e16bd98d53d3",
".git/objects/87/d076d461eeb7e7b3db7f04a26007c52e22dc7a": "2b92376fa73ed64f3da2a56475d8d3d0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/9f9eebb3403c8c990ba811e22ebfe158d96caa": "10d4e27e3f2490f423c639d4815a5ff7",
".git/objects/8d/a6a9ff4f928236093e071febd30c29657f5ee7": "43b85d7458b1f0265a6dc5a54f0f801a",
".git/objects/8d/b7198f35558babbd245ed0017b9e8bfa958127": "59c1556b8d67774e02afd214866a36a7",
".git/objects/93/c9b9e4b6637e9f9195eb5c5f848a00226075d6": "4af066d1b7e5fe762c1a6dd86bf86bfc",
".git/objects/94/8ce2e51947a71e0663561489f9d640507a81b2": "1d8855287a50923b7f9ccd63a9051ec6",
".git/objects/94/b0dc5e488ba945dae557ca16a1620f1874a0e1": "4518b257e478372ca26067da3e8688c8",
".git/objects/95/543ef5e4e573974eb9bede662f76af34c63f2d": "797cc089ee749de3c451281a41b1e698",
".git/objects/99/6756512591a4873aa55b32ab73a91858d7b76e": "370d5f886c828e030f888f67e93ffa6c",
".git/objects/9b/5f2f96c6bb5ca79aa4056c0b2108e5f3f8a52e": "391dd9972ae2b7194bbd7c54e65dd72f",
".git/objects/9b/ffb6eb19644e43160ddb7789c3637f46a8ecef": "2185d487a27a6db44c61239eb523c371",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/32dc29b532642cfeec22c3f955c543fe447647": "28f5d6e36f55882d36f9e1a39280c23d",
".git/objects/a3/20efb03690c28f9e034e0bfa2a47a7576c0a38": "fb2b730c8f0e52a5b0e5b9b528ba47a3",
".git/objects/a5/2514d993837d3e06c3e621a8d6a3e11927b8a8": "e81582561a5901809ab1ca6a113dc5fd",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/4dc63a596253fdc1f5d27f153430331d453afa": "3fd14b74b578fcd52f48121796d8d8d6",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/51fb2916861c0b63a0a47ee18267062e8b3b25": "8aadbdcda30c5aacce6b327c6df771f7",
".git/objects/b0/538171fa01d7398179139ed463d6f540c5dd95": "4410a95b96482f6561e5f345f77d1b63",
".git/objects/b4/be46e2ca3edbb24568e9c20b538fb5aedba11c": "8a8139bd564444bb056137f5104d9dd5",
".git/objects/b6/3cd6a7e5fca167713dd25e7a9d00cc031c1e2a": "c05dc69a38596e11a426a500c803a60d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c0/4d102e1e374c3ad850220bc6776153fa1cda0e": "12d0860d1b54d1b8d7be8ef9934dd026",
".git/objects/c7/9c9f2e6b6b0aede2d3303cb786604ddf2d516e": "36fe8d3de6a7ea187a7dd8dc0431c608",
".git/objects/c7/d63b0fbf231fc992236f529ed1ce70449d29ad": "9920330d4dfc02e33425f8c5e6c6a53a",
".git/objects/c9/00c7d38c7bd1e869604add279074583bf728fe": "2f8566bfcc03e801de56df6b809ee5a4",
".git/objects/c9/36e6e51f0f9c1d0f99b0b8116fa16b5ae74a0c": "d0e22bd528518a237b39aea0407447b4",
".git/objects/ca/19619b9d85b6342dc363558cc067c2244aa908": "6d3390b48f37874ad4ef18940aa42928",
".git/objects/cc/6716de78abf0eefc9a02322d55fb60981005bd": "5254f8761b8e686b90e51d88a3c83981",
".git/objects/d4/5af747ab9524938e5322ba264142bc2bf40a7d": "05a25aafd4cef979c9b72e1a14a4d42e",
".git/objects/de/62444a952e55c25e6600990ab0b96e0d78fde3": "727a0bc73740af5046b7d05d44b1e355",
".git/objects/e0/40155a54508c03cd34d4a1e88f6582c1e5fbb9": "6f0f80bae7cadea3e3c3b59f5fb1d6ce",
".git/objects/e1/cef571a2ce253dd0b582e9d0c0795422943f61": "9597c46edcfbfac6564c265947a11686",
".git/objects/e3/a7fbb0cfdffbad27af9710d42b96e3e6533962": "70bb7db6e327587f949013f7ff1c5815",
".git/objects/e4/d639e5131dc948c5968c70e62acecce8459f2f": "c3fda60c40d668c60ceee3bafee6ad3d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/b0967e0bf1f7f42ea3a6f8f817b14eaaf0e9cc": "29676773e872d2850ffbf9cf3e2d9b03",
".git/objects/e6/29dbe2268b28856c41885ee66d1e38fbefa1a4": "89431a75c39250723215732dfe1e5fd2",
".git/objects/e6/4c5656a760a184e89d9bad060b6f9124526454": "3ca204e283fee10404d24863cda7ab2e",
".git/objects/e7/bb0d09d943db53b98a9a5e046fc9a0bf622fa9": "323385546c22b0ddac5c15abed213196",
".git/objects/ea/bf8d9df4901f5ff985b127936fcbdba96dc640": "219b7e373582f61fae739c99ffd5e91f",
".git/objects/ec/7bedbf41d299ac23b52be1f4b2583d60fda64a": "038a54766126161ad9fcee4d7b054e31",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/dad9e6472f8c270d351b37338a25fe4c52c90f": "e8c20551b1bc8990da67de9f1e2716ee",
".git/objects/f8/99296aa984f85d52b60160829fb1a7180c3660": "645bc55c8e76f0c5415f23ac1e76881f",
".git/objects/f8/de4dd98ceafebb1b3b4834de7b3fc374108bb0": "fb20a0b0cdb102ad27a1690900b2aded",
".git/objects/f9/b1c06cb73a3aad563ba60c79b05f06554cbbd9": "57a9d3a2ebf19e1639f07d4c24418620",
".git/ORIG_HEAD": "444b1b22ed9587333d005fb709ba14b1",
".git/refs/heads/main": "7a4458a9c86334e5df9b5d49ee2490bb",
".git/refs/remotes/origin/main": "7a4458a9c86334e5df9b5d49ee2490bb",
"assets/AssetManifest.json": "7ca1f9d24b109b5c529ab1f365a8b47b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/sudoku.png": "484429ef0dea82b2af12898836639c93",
"assets/NOTICES": "ab6cddd131cf85f2a2cc8e409378c0c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "662d3626233defc597901c82f9b22064",
"favicon_old.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-debug.log": "d22f1532f8b3108dda5dbaa731933419",
"icons/Icon-192.png": "662d3626233defc597901c82f9b22064",
"icons/Icon-192_old.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "584ec13f51cfc70a6c60ffa24bb9d09c",
"icons/Icon-512_old.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1164b59d14dfc9123f79afe6cfb9b346",
"/": "1164b59d14dfc9123f79afe6cfb9b346",
"main.dart.js": "9e06e68c60e4410f05931718c3c592e6",
"manifest.json": "5bb10f5b3c146eb664419214e2f27494",
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
