/* ---------- Milepost account and progress sync ----------
   No library: it speaks directly to Supabase (Auth for the email code, PostgREST for the «progress» table, see
   supabase/schema.sql). Sign-in is by a 6-digit code sent by email: no passwords, and it works inside the installed
   app on iPhone (a magic link would open Safari instead).
   What is synced: every localStorage key of Milepost («milepost-…») and of the courses (their storageKey…),
   except what only makes sense on this device (saved audio, the session itself).
   How: each key is compared with what was last synced (a hash) and with the server time of its row. Changed here →
   sent; changed there → taken; changed on both, or first sign-in on a device that already has progress → merged
   (steps done, stars, best scores and study days are joined, never lost).
   Disabled until sync-config.js gives the project address and its public key. */
(function(){
"use strict";
var CFG=window.MP_SYNC_CONFIG||null,ON=!!(CFG&&CFG.url&&CFG.key);
var SK="milepost-sync-session",MK="milepost-sync-meta";
function lsGet(k){try{return localStorage.getItem(k)}catch(e){return null}}
function lsSet(k,v){try{localStorage.setItem(k,v);return true}catch(e){return false}}
function lsDel(k){try{localStorage.removeItem(k)}catch(e){}}
function jget(k){try{return JSON.parse(lsGet(k)||"null")}catch(e){return null}}
function jset(k,v){lsSet(k,JSON.stringify(v))}
function now(){return Date.now()}
function hash(s){var h1=0xdeadbeef,h2=0x41c6ce57;s=String(s);for(var i=0,c;i<s.length;i++){c=s.charCodeAt(i);h1=Math.imul(h1^c,2654435761);h2=Math.imul(h2^c,1597334677)}
  h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);return (4294967296*(2097151&h2)+(h1>>>0)).toString(36)}

/* ---------- which keys travel ---------- */
function prefixes(){var p=["milepost-"];try{(window.CATALOG&&CATALOG.courses||[]).forEach(function(c){if(c.storageKey)p.push(c.storageKey)})}catch(e){}return p}
function syncable(k){if(!k||/^milepost-sync/.test(k)||/-offline$/.test(k))return false;var p=prefixes();for(var i=0;i<p.length;i++)if(k.indexOf(p[i])===0)return true;return false}
function localKeys(){var out=[];try{for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);if(syncable(k))out.push(k)}}catch(e){}return out}

/* ---------- merging two versions of the same key ----------
   objects: key by key; numbers: the larger (steps, stars, counters only grow); arrays of numbers of the same length
   (best scores [right, total]): element by element; other arrays (exam attempts, lists): joined without duplicates;
   anything else: the most recent side wins. */
function merge(a,b,bNewer){
  if(a===null||a===undefined)return b;if(b===null||b===undefined)return a;
  if(typeof a==="number"&&typeof b==="number")return Math.max(a,b);
  if(Array.isArray(a)&&Array.isArray(b)){
    if(a.length===b.length&&a.every(function(x){return typeof x==="number"})&&b.every(function(x){return typeof x==="number"}))return a.map(function(x,i){return Math.max(x,b[i])});
    var seen={},out=[];(bNewer?b.concat(a):a.concat(b)).forEach(function(x){var s=JSON.stringify(x);if(!seen[s]){seen[s]=1;out.push(x)}});return out}
  if(typeof a==="object"&&typeof b==="object"&&!Array.isArray(a)&&!Array.isArray(b)){var o={},k;
    for(k in a)if(Object.prototype.hasOwnProperty.call(a,k))o[k]=a[k];
    for(k in b)if(Object.prototype.hasOwnProperty.call(b,k))o[k]=Object.prototype.hasOwnProperty.call(a,k)?merge(a[k],b[k],bNewer):b[k];return o}
  return bNewer?b:a}
function mergeText(local,server){var a,b;try{a=JSON.parse(local)}catch(e){return server}try{b=JSON.parse(server)}catch(e){return local}
  return JSON.stringify(merge(a,b,true))}

/* ---------- talking to the server ---------- */
function api(path,opt){opt=opt||{};var h={"apikey":CFG.key,"Content-Type":"application/json"},s=jget(SK);
  if(opt.auth!==false&&s&&s.access_token)h.Authorization="Bearer "+s.access_token;else if(/^eyJ/.test(CFG.key))h.Authorization="Bearer "+CFG.key;/* new sb_publishable_ keys are not JWTs: apikey alone */
  for(var k in (opt.headers||{}))h[k]=opt.headers[k];
  return fetch(CFG.url.replace(/\/$/,"")+path,{method:opt.method||"GET",headers:h,body:opt.body?JSON.stringify(opt.body):undefined,keepalive:!!opt.keepalive})
    .then(function(r){return r.text().then(function(t){var d=null;try{d=t?JSON.parse(t):null}catch(e){}if(!r.ok){var e=new Error((d&&(d.msg||d.message||d.error_description||d.error))||("HTTP "+r.status));e.status=r.status;e.code=d&&(d.error_code||d.code);throw e}return d})})}
function keepSession(d){if(!d||!d.access_token)return null;var s={access_token:d.access_token,refresh_token:d.refresh_token,expires_at:now()+((d.expires_in||3600)*1000),
  user:{id:d.user&&d.user.id,email:d.user&&d.user.email}};var old=jget(SK);if(!s.user.id&&old)s.user=old.user;jset(SK,s);return s}
function fresh(){var s=jget(SK);if(!s)return Promise.reject(new Error("signed out"));if(s.expires_at-now()>60000)return Promise.resolve(s);
  return api("/auth/v1/token?grant_type=refresh_token",{method:"POST",auth:false,body:{refresh_token:s.refresh_token}}).then(keepSession)
    .catch(function(e){if(e.status===400||e.status===401){lsDel(SK);emit()}throw e})}

/* ---------- sign in with an email code ---------- */
function sendCode(email){return api("/auth/v1/otp",{method:"POST",auth:false,body:{email:email,create_user:true}})}
function verify(email,code){return api("/auth/v1/verify",{method:"POST",auth:false,body:{type:"email",email:email,token:code}}).then(function(d){var s=keepSession(d);try{sessionStorage.setItem("mp-signed-in-now","1")}catch(e){}emit();return sync({first:true}).then(function(){return s})})}
function signOut(){var s=jget(SK);lsDel(SK);lsDel(MK);emit();
  if(s)return fetch(CFG.url.replace(/\/$/,"")+"/auth/v1/logout",{method:"POST",headers:{apikey:CFG.key,Authorization:"Bearer "+s.access_token}}).catch(function(){});return Promise.resolve()}
function deleteAccount(){return fresh().then(function(){return api("/rest/v1/rpc/delete_my_account",{method:"POST",body:{}})}).then(function(){lsDel(SK);lsDel(MK);emit()})}

/* ---------- the sync itself ---------- */
var running=null,listeners=[],state={busy:false,error:null};
function emit(){listeners.forEach(function(f){try{f()}catch(e){}})}
function sync(opt){opt=opt||{};if(!ON||!jget(SK))return Promise.resolve({pulled:0});if(running)return running;
  state.busy=true;state.error=null;emit();
  running=fresh().then(function(s){
    return api("/rest/v1/progress?select=key,value,updated_at",{}).then(function(rows){
      var meta=jget(MK)||{},first=opt.first||meta.user!==s.user.id;if(first)meta={user:s.user.id,keys:{}};meta.keys=meta.keys||{};
      var srv={};(rows||[]).forEach(function(r){srv[r.key]=r});
      var keys={};localKeys().forEach(function(k){keys[k]=1});Object.keys(srv).forEach(function(k){keys[k]=1});Object.keys(meta.keys).forEach(function(k){keys[k]=1});
      var push=[],del=[],pulled=0;
      Object.keys(keys).forEach(function(k){if(!syncable(k))return;
        var lv=lsGet(k),r=srv[k],m=meta.keys[k],lh=lv==null?null:hash(lv);
        var lChanged=lv!=null&&(!m||m.h!==lh),sChanged=!!r&&(!m||m.t!==r.updated_at),lGone=lv==null&&!!m&&!!m.h;
        if(r&&lv!=null&&r.value===lv){meta.keys[k]={h:lh,t:r.updated_at};return}
        if(lGone&&r&&!sChanged){del.push(k);delete meta.keys[k];return}
        if(lGone&&!r){delete meta.keys[k];return}
        if(r&&(lv==null||(sChanged&&!lChanged&&!first))){lsSet(k,r.value);meta.keys[k]={h:hash(r.value),t:r.updated_at};pulled++;return}
        if(lv!=null&&!r){push.push({key:k,value:lv});return}
        if(lv!=null&&r){var mv=(sChanged||first)?mergeText(lv,r.value):lv;if(mv!==lv){lsSet(k,mv);pulled++}push.push({key:k,value:mv})}});
      var jobs=[];
      if(push.length)jobs.push(api("/rest/v1/progress?on_conflict=user_id,key",{method:"POST",headers:{Prefer:"resolution=merge-duplicates,return=representation"},
        body:push.map(function(p){return {user_id:s.user.id,key:p.key,value:p.value}})}).then(function(out){(out||[]).forEach(function(r){meta.keys[r.key]={h:hash(r.value),t:r.updated_at}})}));
      del.forEach(function(k){jobs.push(api("/rest/v1/progress?key=eq."+encodeURIComponent(k),{method:"DELETE"}))});
      return Promise.all(jobs).then(function(){meta.last=now();jset(MK,meta);return {pulled:pulled,pushed:push.length}})})})
  .then(function(res){state.busy=false;state.error=null;running=null;emit();if(res.pulled&&opt.reload!==false)reloadOnce();return res},
        function(e){state.busy=false;state.error=e;running=null;emit();return {error:e}});
  return running}
/* data that arrived from another device: the page reads it at start, so it starts again (once) */
function reloadOnce(){try{var t=+sessionStorage.getItem("mp-sync-reload")||0;if(now()-t<15000)return;sessionStorage.setItem("mp-sync-reload",String(now()))}catch(e){}location.reload()}

/* ---------- when to sync: at start, every 2 minutes while open, when leaving the page, when back online ---------- */
if(ON){
  setTimeout(function(){sync()},1200);
  setInterval(function(){if(document.visibilityState==="visible")sync({reload:false})},120000);
  document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden")sync({reload:false});else sync()});
  window.addEventListener("online",function(){sync()});
  /* moving between screens: a light check after things settle */
  var hc=null;window.addEventListener("hashchange",function(){clearTimeout(hc);hc=setTimeout(function(){sync()},2500)});
}

/* ---------- account box (course settings and the shell) ---------- */
var STR={it:{ttl:"Account",lead:"Con un account i progressi restano al sicuro e li ritrovi su ogni dispositivo.",email:"La tua email",send:"Ricevi il codice",sending:"Invio…",
  sent:function(e){return "Ti abbiamo scritto a "+e+": inserisci il codice di 6 cifre."},code:"Codice di 6 cifre",enter:"Entra",entering:"Controllo…",change:"Cambia email",
  as:"Sei entrato come",saved:function(t){return "Progressi salvati "+t+"."},never:"Progressi non ancora salvati.",busy:"Salvataggio in corso…",
  now:"Salva ora",out:"Esci",del:"Elimina account",delQ:"Eliminare l'account e i progressi salvati online? Su questo dispositivo restano.",
  eEmail:"Controlla l'indirizzo email.",eCode:"Codice non valido o scaduto: riprova o chiedine uno nuovo.",eNet:"Nessuna connessione: riprova quando sei online.",
  eMany:"Troppe richieste: aspetta qualche minuto e riprova.",eSync:"Non è stato possibile salvare: riprovo più tardi.",
  priv:"Salviamo solo la tua email e i tuoi progressi, su server in Europa. Niente pubblicità, niente tracciamento.",have:"Hai già un account? Accedi"},
 es:{ttl:"Cuenta",lead:"Con una cuenta tu progreso queda a salvo y lo encuentras en todos tus dispositivos.",email:"Tu email",send:"Recibir el código",sending:"Enviando…",
  sent:function(e){return "Te hemos escrito a "+e+": introduce el código de 6 cifras."},code:"Código de 6 cifras",enter:"Entrar",entering:"Comprobando…",change:"Cambiar email",
  as:"Has entrado como",saved:function(t){return "Progreso guardado "+t+"."},never:"Progreso todavía no guardado.",busy:"Guardando…",
  now:"Guardar ahora",out:"Salir",del:"Eliminar cuenta",delQ:"¿Eliminar la cuenta y el progreso guardado en línea? En este dispositivo se queda.",
  eEmail:"Revisa la dirección de email.",eCode:"Código no válido o caducado: inténtalo de nuevo o pide uno nuevo.",eNet:"Sin conexión: inténtalo cuando estés en línea.",
  eMany:"Demasiadas solicitudes: espera unos minutos y vuelve a intentarlo.",eSync:"No se ha podido guardar: lo intento más tarde.",
  priv:"Solo guardamos tu email y tu progreso, en servidores en Europa. Sin publicidad, sin seguimiento.",have:"¿Ya tienes cuenta? Entra"},
 zh:{ttl:"账户",lead:"有了账户，学习进度会安全保存，在每台设备上都能继续。",email:"你的邮箱",send:"获取验证码",sending:"发送中…",
  sent:function(e){return "我们已发邮件到 "+e+"，请输入 6 位验证码。"},code:"6 位验证码",enter:"登录",entering:"验证中…",change:"更换邮箱",
  as:"已登录：",saved:function(t){return "进度已保存（"+t+"）。"},never:"进度还没有保存。",busy:"正在保存…",
  now:"立即保存",out:"退出",del:"删除账户",delQ:"删除账户和在线保存的进度吗？这台设备上的进度会保留。",
  eEmail:"请检查邮箱地址。",eCode:"验证码无效或已过期，请重试或重新获取。",eNet:"没有网络，请联网后再试。",eMany:"请求太多，请过几分钟再试。",eSync:"暂时无法保存，稍后会再试。",
  priv:"我们只保存你的邮箱和学习进度，服务器在欧洲。没有广告，没有追踪。",have:"已有账户？登录"}};
function ago(t,lang){var s=Math.round((t-now())/1000),f;try{f=new Intl.RelativeTimeFormat({zh:"zh-CN",es:"es"}[lang]||"it",{numeric:"auto"})}catch(e){f=null}
  var a=Math.abs(s);if(!f)return new Date(t).toLocaleString();if(a<45)return f.format(0,"second");if(a<3600)return f.format(Math.round(s/60),"minute");if(a<86400)return f.format(Math.round(s/3600),"hour");return f.format(Math.round(s/86400),"day")}
function errText(e,S){if(!e)return "";if(!navigator.onLine||e.name==="TypeError")return S.eNet;if(e.status===429)return S.eMany;
  if(/otp|token|expired|invalid/i.test(e.code||e.message||"")&&e.status!==422)return S.eCode;if(e.status===422||/email/i.test(e.message))return S.eEmail;return e.message}
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function css(){if(document.getElementById("ms-css"))return;var st=document.createElement("style");st.id="ms-css";
  st.textContent='.ms{display:grid;gap:10px;padding:2px 2px 10px}.ms p{margin:0;font-size:15px;line-height:1.5}.ms .ms-muted{color:var(--muted);font-size:13.5px}'+
  '.ms label{display:grid;gap:6px;font-weight:700;font-size:14px}.ms input{min-height:48px;padding:0 14px;border-radius:14px;border:2px solid var(--line);background:var(--paper);color:var(--ink);font:inherit;font-size:16px;width:100%}'+
  '.ms input:focus-visible{outline:3px solid var(--blue);outline-offset:2px}.ms .ms-code{letter-spacing:.35em;font-variant-numeric:tabular-nums;font-size:22px;font-weight:700}'+
  '.ms .ms-row{display:flex;gap:8px;flex-wrap:wrap}.ms button{min-height:48px;padding:0 18px;border-radius:999px;border:0;font:inherit;font-weight:800;cursor:pointer}'+
  '.ms .ms-pri{background:var(--red);color:var(--on-accent,#fff)}.ms .ms-alt{background:var(--paper);color:var(--ink);box-shadow:inset 0 0 0 2px var(--line)}'+
  '.ms .ms-link{background:none;color:var(--muted);padding:0 4px;text-decoration:underline;font-weight:700}.ms .ms-danger{background:none;color:var(--red);padding:0 4px}'+
  '.ms button:disabled{opacity:.5;cursor:default}.ms .ms-err{color:var(--red);font-weight:700}.ms .ms-who{font-weight:800;word-break:break-all}';document.head.appendChild(st)}
/* el: where to draw; o.lang: "it" | "zh"; o.onIn: after signing in */
function ui(el,o){if(!ON||!el)return;o=o||{};var S=STR[o.lang]||STR.it,step={email:"",sent:false,err:""};css();
  function draw(){var s=jget(SK),meta=jget(MK)||{};
    if(s){el.innerHTML='<div class="ms"><p>'+esc(S.as)+' <span class="ms-who">'+esc(s.user.email)+'</span></p>'+
      '<p class="ms-muted" aria-live="polite">'+esc(state.busy?S.busy:state.error?S.eSync:meta.last?S.saved(ago(meta.last,o.lang)):S.never)+'</p>'+
      '<div class="ms-row"><button class="ms-alt" data-a="now"'+(state.busy?' disabled':'')+'>'+esc(S.now)+'</button><button class="ms-alt" data-a="out">'+esc(S.out)+'</button></div>'+
      '<div class="ms-row"><button class="ms-danger" data-a="del">'+esc(S.del)+'</button></div></div>'}
    else if(!step.sent){el.innerHTML='<form class="ms" novalidate><p>'+esc(S.lead)+'</p><label>'+esc(S.email)+'<input id="ms-email" type="email" autocomplete="email" inputmode="email" required value="'+esc(step.email)+'"></label>'+
      '<p class="ms-err" aria-live="polite">'+esc(step.err)+'</p><div class="ms-row"><button class="ms-pri" type="submit">'+esc(S.send)+'</button></div><p class="ms-muted">'+esc(S.priv)+'</p></form>'}
    else{el.innerHTML='<form class="ms" novalidate><p>'+esc(S.sent(step.email))+'</p><label>'+esc(S.code)+'<input id="ms-code" class="ms-code" inputmode="numeric" autocomplete="one-time-code" maxlength="8" pattern="[0-9]*" required></label>'+
      '<p class="ms-err" aria-live="polite">'+esc(step.err)+'</p><div class="ms-row"><button class="ms-pri" type="submit">'+esc(S.enter)+'</button><button class="ms-link" type="button" data-a="change">'+esc(S.change)+'</button></div></form>'}
    bind()}
  function busy(b,t){var x=el.querySelector('button[type="submit"]');if(x){x.disabled=b;if(t)x.textContent=t}}
  function bind(){var f=el.querySelector("form");
    if(f)f.onsubmit=function(ev){ev.preventDefault();step.err="";
      if(!step.sent){var em=el.querySelector("#ms-email").value.trim();step.email=em;if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){step.err=S.eEmail;draw();return}
        busy(true,S.sending);sendCode(em).then(function(){step.sent=true;draw();var c=el.querySelector("#ms-code");if(c)c.focus()},function(e){step.err=errText(e,S);draw()})}
      else{var code=el.querySelector("#ms-code").value.replace(/\D/g,"");if(code.length<6){step.err=S.eCode;draw();return}
        busy(true,S.entering);verify(step.email,code).then(function(){step={email:"",sent:false,err:""};draw();if(o.onIn)o.onIn()},function(e){step.err=errText(e,S);draw()})}};
    var a=el.querySelectorAll("[data-a]");for(var i=0;i<a.length;i++)a[i].onclick=function(){var k=this.getAttribute("data-a");
      if(k==="change"){step.sent=false;step.err="";draw()}
      else if(k==="now")sync();
      else if(k==="out")signOut().then(draw);
      else if(k==="del"&&confirm(S.delQ))deleteAccount().then(draw,function(e){alert(errText(e,S))})}}
  listeners.push(function(){if(!document.body.contains(el))return;if(el.querySelector("input")&&el.contains(document.activeElement))return;draw()});draw()}

window.MPSYNC={enabled:ON,ui:ui,sync:sync,signedIn:function(){return !!jget(SK)},str:function(l){return STR[l]||STR.it},
  _merge:merge,_syncable:syncable};
})();
