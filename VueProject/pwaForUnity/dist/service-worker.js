"use strict";var precacheConfig=[["dist/static/css/app.b8e908dd1983cadb5682ced0bf5a9f82.css","e34f0a7a106bffad54fa0ee0a5cd8616"],["dist/static/js/app.02c781f5a0f85b595468.js","7721063fd857f59c95c587d95fe9054d"],["dist/static/js/manifest.962c4e0e4910bd58d1bf.js","c971dbd624db7bd3d3db362372d4a7e9"],["dist/static/js/manifest.eff8244bf069398f81f6.js","220b6df78351f39bcc4fe58e26b4dd65"],["dist/static/js/vendor.90d7c1576bb1a7736533.js","4e2bc8adb38d430bd3b30cab1cc06064"],["dist/static/unityBuild/TemplateData/UnityProgress.js","167cabac2ccecfb25fd7453130f3bc0a"],["dist/static/unityBuild/TemplateData/style.css","f097d9ca2037c3e681c4a2448984aee1"],["dist/static/unityBuild/index.html","3d37591ea3fe5b360b38ebbdbae5f834"],["index.html","79707361fa8d1b5b3c8e618abada8318"],["service-worker.js","45fe179b45c798467cd68750a46508a9"],["static/css/app.b8e908dd1983cadb5682ced0bf5a9f82.css","e34f0a7a106bffad54fa0ee0a5cd8616"],["static/js/app.02c781f5a0f85b595468.js","7721063fd857f59c95c587d95fe9054d"],["static/js/manifest.3ad1d5771e9b13dbdad2.js","4cea3b7b78cabd329b2d518ee31ba3d3"],["static/js/manifest.eff8244bf069398f81f6.js","220b6df78351f39bcc4fe58e26b4dd65"],["static/js/vendor.90d7c1576bb1a7736533.js","4e2bc8adb38d430bd3b30cab1cc06064"],["static/unityBuild/TemplateData/UnityProgress.js","167cabac2ccecfb25fd7453130f3bc0a"],["static/unityBuild/TemplateData/style.css","f097d9ca2037c3e681c4a2448984aee1"],["static/unityBuild/index.html","3d37591ea3fe5b360b38ebbdbae5f834"]],cacheName="sw-precache-v3-PWAforUnity-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),s=createCacheKey(n,hashParamName,a,!1);return[n.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});