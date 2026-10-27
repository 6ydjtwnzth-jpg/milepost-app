/* Offline support: pages network-first (always fresh when online), audio cache-first (file names never change). */
var V="milepost-v1",AUDIO="milepost-audio-v1";
self.addEventListener("install",function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(["./","./index.html","./manifest.webmanifest","./icons/icon.svg"])}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==V&&k!==AUDIO}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){
  var r=e.request,u=new URL(r.url);
  if(r.method!=="GET"||u.origin!==location.origin)return;
  if(/\/audio\/[^/]+\.mp3$/.test(u.pathname)){
    e.respondWith(caches.open(AUDIO).then(function(c){return c.match(r).then(function(hit){return hit||fetch(r).then(function(res){if(res.ok)c.put(r,res.clone());return res})})}));return}
  e.respondWith(fetch(r).then(function(res){if(res.ok){var cp=res.clone();caches.open(V).then(function(c){c.put(r,cp)})}return res}).catch(function(){return caches.match(r).then(function(hit){return hit||caches.match("./")})}));
});
