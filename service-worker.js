"use strict";
var precacheConfig = [
    ["/Sela/index.html", "464e6a9eadaa2e502dfb5a92500fb3da"],
    ["/Sela/static/js/main.99ddfe66.js", "e608999c07c3d87b5501794d0543d8c1"],
    [
      "/Sela/static/media/background.496f16a1.svg",
      "496f16a1c1dda194cdfbec00200789ef"
    ],
    [
      "/Sela/static/media/chevron.58a28c1f.svg",
      "58a28c1f63da5c90bf94f7b812fa968f"
    ],
    [
      "/Sela/static/media/location.5b4c42d9.svg",
      "5b4c42d9fbac8f42f1a96dd018665840"
    ],
    [
      "/Sela/static/media/marker.87d7d574.svg",
      "87d7d574d04fc0091c97a3515e481691"
    ],
    [
      "/Sela/static/media/money.936d6e7f.svg",
      "936d6e7f76799cdd14bbed324dedba0f"
    ],
    [
      "/Sela/static/media/right-chevron.5c4e7d10.svg",
      "5c4e7d108a87243e830734cdf4f57a0a"
    ],
    [
      "/Sela/static/media/target.902b549b.svg",
      "902b549b863ecaf59c76edea84174fc0"
    ]
  ],
  cacheName =
    "sw-precache-v3-sw-precache-webpack-plugin-" +
    (self.registration ? self.registration.scope : ""),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function(e, t) {
    var n = new URL(e);
    return "/" === n.pathname.slice(-1) && (n.pathname += t), n.toString();
  },
  cleanResponse = function(t) {
    return t.redirected
      ? ("body" in t ? Promise.resolve(t.body) : t.blob()).then(function(e) {
          return new Response(e, {
            headers: t.headers,
            status: t.status,
            statusText: t.statusText
          });
        })
      : Promise.resolve(t);
  },
  createCacheKey = function(e, t, n, a) {
    var r = new URL(e);
    return (
      (a && r.pathname.match(a)) ||
        (r.search +=
          (r.search ? "&" : "") +
          encodeURIComponent(t) +
          "=" +
          encodeURIComponent(n)),
      r.toString()
    );
  },
  isPathWhitelisted = function(e, t) {
    if (0 === e.length) return !0;
    var n = new URL(t).pathname;
    return e.some(function(e) {
      return n.match(e);
    });
  },
  stripIgnoredUrlParameters = function(e, n) {
    var t = new URL(e);
    return (
      (t.hash = ""),
      (t.search = t.search
        .slice(1)
        .split("&")
        .map(function(e) {
          return e.split("=");
        })
        .filter(function(t) {
          return n.every(function(e) {
            return !e.test(t[0]);
          });
        })
        .map(function(e) {
          return e.join("=");
        })
        .join("&")),
      t.toString()
    );
  },
  hashParamName = "_sw-precache",
  urlsToCacheKeys = new Map(
    precacheConfig.map(function(e) {
      var t = e[0],
        n = e[1],
        a = new URL(t, self.location),
        r = createCacheKey(a, hashParamName, n, /\.\w{8}\./);
      return [a.toString(), r];
    })
  );
function setOfCachedUrls(e) {
  return e
    .keys()
    .then(function(e) {
      return e.map(function(e) {
        return e.url;
      });
    })
    .then(function(e) {
      return new Set(e);
    });
}
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function(a) {
        return setOfCachedUrls(a).then(function(n) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function(t) {
              if (!n.has(t)) {
                var e = new Request(t, { credentials: "same-origin" });
                return fetch(e).then(function(e) {
                  if (!e.ok)
                    throw new Error(
                      "Request for " +
                        t +
                        " returned a response with status " +
                        e.status
                    );
                  return cleanResponse(e).then(function(e) {
                    return a.put(t, e);
                  });
                });
              }
            })
          );
        });
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
}),
  self.addEventListener("activate", function(e) {
    var n = new Set(urlsToCacheKeys.values());
    e.waitUntil(
      caches
        .open(cacheName)
        .then(function(t) {
          return t.keys().then(function(e) {
            return Promise.all(
              e.map(function(e) {
                if (!n.has(e.url)) return t.delete(e);
              })
            );
          });
        })
        .then(function() {
          return self.clients.claim();
        })
    );
  }),
  self.addEventListener("fetch", function(t) {
    if ("GET" === t.request.method) {
      var e,
        n = stripIgnoredUrlParameters(
          t.request.url,
          ignoreUrlParametersMatching
        ),
        a = "index.html";
      (e = urlsToCacheKeys.has(n)) ||
        ((n = addDirectoryIndex(n, a)), (e = urlsToCacheKeys.has(n)));
      var r = "/Sela/index.html";
      !e &&
        "navigate" === t.request.mode &&
        isPathWhitelisted(["^(?!\\/__).*"], t.request.url) &&
        ((n = new URL(r, self.location).toString()),
        (e = urlsToCacheKeys.has(n))),
        e &&
          t.respondWith(
            caches
              .open(cacheName)
              .then(function(e) {
                return e.match(urlsToCacheKeys.get(n)).then(function(e) {
                  if (e) return e;
                  throw Error(
                    "The cached response that was expected is missing."
                  );
                });
              })
              .catch(function(e) {
                return (
                  console.warn(
                    'Couldn\'t serve response for "%s" from cache: %O',
                    t.request.url,
                    e
                  ),
                  fetch(t.request)
                );
              })
          );
    }
  });
