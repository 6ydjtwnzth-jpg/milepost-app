/* Offline support.
   - On install, the shell and every course page are saved, so the app opens without a connection
     even on the first day (the course pages are small; the build fills in the list and the version).
   - Pages: network-first (always fresh when online), saved copy when offline.
   - Audio: cache-first (file names never change); a course can save all its audio from Settings.
   - Google Fonts: saved copy first, refreshed in the background. */
var VERSION="050538149286",V="milepost-"+VERSION,AUDIO="milepost-audio-v1",FONTS="milepost-fonts-v1";
var COURSES=["ja-it", "zh-it", "it-zh"];
var CORE=["./","./index.html","./manifest.webmanifest","./catalog.js","./plan.js","./course-app.css","./icons/icon.svg","./icons/icon-192.png","./icons/icon-512.png"];
self.addEventListener("install",function(e){
  var urls=CORE.concat(COURSES.map(function(id){return "./c/"+id+"/"}));
  e.waitUntil(caches.open(V).then(function(c){
    /* one by one, so a single failure does not stop the others */
    return Promise.all(urls.map(function(u){return fetch(u,{cache:"reload"}).then(function(r){if(r.ok)return c.put(u,r)}).catch(function(){})}))
  }).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==V&&k!==AUDIO&&k!==FONTS}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
function fromCache(r){return caches.match(r,{ignoreSearch:true}).then(function(hit){if(hit)return hit;
  /* a course page asked as …/c/<id>/index.html or …/c/<id>/: try the other spelling, then the shell */
  var u=new URL(r.url),p=u.pathname,alt=/\/index\.html$/.test(p)?p.replace(/index\.html$/,""):(/\/$/.test(p)?p+"index.html":null);
  return (alt?caches.match(alt,{ignoreSearch:true}):Promise.resolve(null)).then(function(h2){return h2||(r.mode==="navigate"?caches.match("./"):undefined)})})}
self.addEventListener("fetch",function(e){
  var r=e.request;if(r.method!=="GET")return;var u=new URL(r.url);
  if(u.hostname==="fonts.googleapis.com"||u.hostname==="fonts.gstatic.com"){
    e.respondWith(caches.open(FONTS).then(function(c){return c.match(r).then(function(hit){
      var net=fetch(r).then(function(res){if(res&&(res.ok||res.type==="opaque"))c.put(r,res.clone());return res}).catch(function(){return hit||Response.error()});
      return hit||net})}));return}
  if(u.origin!==location.origin)return;
  if(/\/audio\/.+\.mp3$/.test(u.pathname)){
    e.respondWith(caches.open(AUDIO).then(function(c){return c.match(r).then(function(hit){return hit||fetch(r).then(function(res){if(res.ok)c.put(r,res.clone());return res})})}));return}
  e.respondWith(fetch(r).then(function(res){if(res.ok){var cp=res.clone();caches.open(V).then(function(c){c.put(r,cp)})}return res}).catch(function(){return fromCache(r).then(function(hit){return hit||Response.error()})}));
});
