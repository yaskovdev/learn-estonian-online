"use strict";var precacheConfig=[["/index.html","ebb51949e1a5b52de3798fb70ea29433"],["/static/css/main.1b375130.css","9d6e0768082ff44d5b8c591fef6cb6e0"],["/static/js/main.3c5782b4.js","ee7b4503d65e0003246cbfcd7d935621"],["/static/media/exercise-1-card.a5288503.jpg","a5288503c9a6ef735bdfd3f477c7e2d9"],["/static/media/exercise-10-card.cc80493b.jpg","cc80493b9f273efc993b1cf9ad587573"],["/static/media/exercise-11-card.59df1c18.jpg","59df1c1859f516226a4598924f4fdaf3"],["/static/media/exercise-12-card.6ec310b8.jpg","6ec310b889d3301dd5fe8d51bc271486"],["/static/media/exercise-13-card.fd725295.jpg","fd72529591cbcad927e6bed56adef7bf"],["/static/media/exercise-14-card.559c63e4.jpg","559c63e4f2ee3fe22ec5feeff2dba238"],["/static/media/exercise-15-card.38f67b41.jpg","38f67b41705bd2253d733fa5d719f742"],["/static/media/exercise-16-card.a6969add.jpg","a6969add3499f6d965dfce3a428825ca"],["/static/media/exercise-17-card.8d2d6122.jpg","8d2d61229d4358896026dac312c28979"],["/static/media/exercise-2-card.8ee870ba.jpg","8ee870ba1ded4bf7a376d6b70b0a21ce"],["/static/media/exercise-3-card.7bcb33ab.jpg","7bcb33abe584af32cdcd3853203fab1f"],["/static/media/exercise-4-card.5e9d3985.jpg","5e9d3985734d511c63d03c2455ba3184"],["/static/media/exercise-5-card.04a5a30d.jpg","04a5a30d75f1d0eee8fb2334ed86d73e"],["/static/media/exercise-7-card.c78e54d1.jpg","c78e54d1394508d08ed6983ba23f4a60"],["/static/media/exercise-8-card.17161bf8.jpg","17161bf87690e0d0d99015c00eeae84f"],["/static/media/exercise-9-card.089d4a6b.jpg","089d4a6bd0afbfc12d5d0472b1dea9a6"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/lesson-1-card.95bfa996.jpg","95bfa9960aea09ce9549ac8e0bfee052"],["/static/media/lesson-10-card.d70e9a97.jpg","d70e9a97aef652a7a5871bff0a4163e6"],["/static/media/lesson-11-card.f49942cc.jpg","f49942cc7acebd99f7d71807f7fa4bd4"],["/static/media/lesson-12-card.2961c28e.jpg","2961c28e4c86727edab564003f767e93"],["/static/media/lesson-13-card.bc0649a6.jpg","bc0649a6d432b0ef9a38775fc06492df"],["/static/media/lesson-14-card.c72c5e1a.jpg","c72c5e1a4f38d0475557f552471ebe5e"],["/static/media/lesson-15-card.547e3d7c.jpg","547e3d7c222efdc4f4c3e1c201d39199"],["/static/media/lesson-16-card.a57efc29.jpg","a57efc29ed335dde92811330cd073cf9"],["/static/media/lesson-17-card.c33afc10.jpg","c33afc101f70bbdad4a22c695fe3372a"],["/static/media/lesson-2-card.1d019020.jpg","1d01902062ebace4ae0bf9c7afd56459"],["/static/media/lesson-3-card.42de09c0.jpg","42de09c06ad9c995256e94404a055519"],["/static/media/lesson-4-card.ac52821f.jpg","ac52821fcfcdad38bcb43ca944d1fd7a"],["/static/media/lesson-5-card.e38a785e.jpg","e38a785e63c00784f169f69de557f4e3"],["/static/media/lesson-6-card.38648fa2.jpg","38648fa24526ce330ab3f707908515bb"],["/static/media/lesson-7-card.89901aa7.jpg","89901aa7278adc68eb4b7859b8e07840"],["/static/media/lesson-8-card.d224033f.jpg","d224033fb74dd78264e9b7d5efe99be5"],["/static/media/lesson-9-card.539000b7.jpg","539000b7a5035230618280e0de0090e2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),s=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),a=urlsToCacheKeys.has(c));var s="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL(s,self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});