var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var KEY="francese-per-italiani-v1";
var state={best:{},box:{},can:{}};
try{var raw=localStorage.getItem(KEY);if(raw){var p=JSON.parse(raw);state.best=p.best2||{};state.box=p.box||{};state.can=p.can||{}}}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify({best2:state.best,box:state.box,can:state.can}))}catch(e){}}
var prefs={tr:true,slow:false,fcm:"ear"};
try{var pr=JSON.parse(localStorage.getItem(KEY+"-prefs")||"{}");if(pr.tr===false)prefs.tr=false;if(pr.slow)prefs.slow=true;if(pr.fcm)prefs.fcm=pr.fcm;if(typeof pr.fcr==="number")prefs.fcr=pr.fcr}catch(e){}
function savePrefs(){try{localStorage.setItem(KEY+"-prefs",JSON.stringify(prefs))}catch(e){}}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}

/* ---------- voice ----------
   First choice: recorded files (Kokoro, voice "Siwis", audio/<hash>.mp3).
   If a file is missing or fails, the device's French voice reads the text. */
var voice=null,hasTTS=("speechSynthesis" in window),speakSeq=0,players=[];
var AUD=null;try{AUD=new Audio();AUD.preload="auto"}catch(e){}
function cyrb53(str){var h1=0xdeadbeef,h2=0x41c6ce57;for(var i=0,ch;i<str.length;i++){ch=str.charCodeAt(i);h1=Math.imul(h1^ch,2654435761);h2=Math.imul(h2^ch,1597334677)}
  h1=Math.imul(h1^(h1>>>16),2246822507);h1^=Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507);h2^=Math.imul(h1^(h1>>>13),3266489909);return 4294967296*(2097151&h2)+(h1>>>0)}
function akey(t){t=String(t).replace(/[’]/g,"'").replace(/[  ]/g," ").trim().replace(/\s+/g," ");if(!/\s/.test(t))t=t.toLowerCase();return t}
function audioSrc(t){return "audio/"+cyrb53(akey(t)).toString(36)+".mp3"}
function scoreVoice(v){var n=(v.name+" "+(v.voiceURI||"")).toLowerCase(),s=0;
  if(/^fr[-_]fr/i.test(v.lang))s+=5;else if(/^fr/i.test(v.lang))s+=3;else return -99;
  if(/natural|neural|online|premium|enhanced|siri|wavenet|google/.test(n))s+=4;
  if(/compact|espeak|eloquence/.test(n))s-=4;return s}
function pickVoice(){if(!hasTTS)return;try{var best=null,bs=-99;speechSynthesis.getVoices().forEach(function(v){var s=scoreVoice(v);if(s>bs){bs=s;best=v}});voice=bs>0?best:null}catch(e){}}
if(hasTTS){pickVoice();try{speechSynthesis.onvoiceschanged=pickVoice}catch(e){}}
function stopAll(){try{if(AUD)AUD.pause()}catch(e){}try{if(hasTTS)speechSynthesis.cancel()}catch(e){}}
function stopPlayers(except){players.forEach(function(p){if(p!==except)p.stop(true)})}
function ttsSpeak(t,fin,wait,pitch){
  if(!hasTTS){if(wait)setTimeout(fin,Math.max(800,t.length*80));return}
  try{speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(t);u.lang="fr-FR";if(voice)u.voice=voice;u.rate=prefs.slow?.65:.95;if(pitch)u.pitch=pitch;
    u.onend=fin;u.onerror=function(){setTimeout(fin,200)};speechSynthesis.speak(u);
    if(wait)setTimeout(fin,Math.max(2500,t.length*(prefs.slow?140:95)));
  }catch(e){if(wait)setTimeout(fin,800)}
}
function speak(t,cb,opt){
  opt=opt||{};if(!opt.chain)stopPlayers();
  var my=++speakSeq,done=false,fell=false;
  function fin(){if(done)return;done=true;if(cb&&my===speakSeq)cb()}
  function fallback(){if(fell||done||my!==speakSeq)return;fell=true;ttsSpeak(t,fin,!!cb,opt.pitch)}
  stopAll();
  if(!AUD){ttsSpeak(t,fin,!!cb,opt.pitch);return}
  try{
    AUD.onended=function(){if(my===speakSeq)fin()};
    AUD.onerror=fallback;
    AUD.src=audioSrc(t);
    var r=prefs.slow?.75:1;AUD.defaultPlaybackRate=r;AUD.playbackRate=r;try{AUD.preservesPitch=true}catch(e){}
    var pr=AUD.play();if(pr&&pr.catch)pr.catch(function(err){if(err&&err.name==="AbortError")return;fallback()});
  }catch(e){fallback()}
}
var SPK='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
var MIC='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>';

/* ---------- French words you can tap ---------- */
var LET=/[A-Za-zÀ-ÖØ-öø-ÿœŒæÆ]/;
/* French typography: a no-break space before ! ? ; : » and after «, so the mark never starts a line */
function frSp(t){return String(t).replace(/ ([!?;:»])/g," $1").replace(/« /g,"« ")}
function itHTML(text,plain){return frSp(text).split(/([\s ]+)/).map(function(tok){
  if(!tok)return "";if(/^[\s ]*$/.test(tok))return tok.replace(/ /g,"&nbsp;");
  var m=tok.match(/^([«"(¿¡—–\-…]*)(.*?)([.,!?;:»")…—]*)$/);var core=m?m[2]:tok;
  if(!core||!LET.test(core))return esc(tok);
  return esc(m[1])+(plain?esc(core):'<span class="w" tabindex="0" role="button" data-say="'+esc(core)+'">'+esc(core)+'</span>')+esc(m[3]);
}).join("")}
function norm(w){return w.toLowerCase().replace(/[’]/g,"'")}
function look(x){return DICT[x]||(typeof CONJ_IDX!=="undefined"&&CONJ_IDX[x])||""}
function meaning(w){var k=norm(w);if(look(k))return look(k);
  /* elision: l'école, j'ai, qu'il, c'est */
  var i=k.indexOf("'");if(i>0&&i<k.length-1){var a=k.slice(0,i+1),b=k.slice(i+1),mb=meaning(b);if(look(a)||mb)return (look(a)||a)+" + "+(mb||b)}
  /* hyphenated: est-ce, lève-toi, peut-être, vingt-deux */
  if(k.indexOf("-")>0){var ps=k.split("-").filter(Boolean),ms=ps.map(function(x){return look(x)||look(x.replace(/^t$/,""))||formMeaning(x)});
    if(ms.every(Boolean))return ps.map(function(x,j){return x+" ("+ms[j]+")"}).join(" + ")}
  /* a capital letter at the start of a sentence is not a name: try the known forms first */
  var f=formMeaning(k);if(f||!/^[A-ZÀ-Ý]/.test(w))return f;return "nome proprio"}
/* forms of known words: plural, feminine, participles */
function formMeaning(k){var c,m;
  function f(base,lab){return look(base)?lab+" di «"+base+"» ("+look(base)+")":""}
  if(k.length>3&&/aux$/.test(k)&&(c=f(k.slice(0,-3)+"al","plurale")))return c;
  if(k.length>2&&/[sx]$/.test(k)){if((c=f(k.slice(0,-1),"plurale")))return c;
    if(/es$/.test(k)&&(c=formMeaning(k.slice(0,-1))))return c.replace(/^femminile/,"femminile plurale")}
  var FEM=[["euse","eux"],["euse","eur"],["trice","teur"],["ive","if"],["elle","el"],["enne","en"],["ette","et"],["ère","er"],["ce","x"],["e",""]];
  for(var j=0;j<FEM.length;j++){var e=FEM[j];if(k.length>e[0].length+1&&k.slice(-e[0].length)===e[0]&&(c=f(k.slice(0,-e[0].length)+e[1],"femminile")))return c}
  if((m=k.match(/^(.+)é(e?s?)$/))&&look(m[1]+"er"))return "participio passato di «"+m[1]+"er» ("+look(m[1]+"er")+")";
  if((m=k.match(/^(.+)i(e?s?)$/))&&look(m[1]+"ir"))return "participio passato di «"+m[1]+"ir» ("+look(m[1]+"ir")+")";
  if((m=k.match(/^(.+)u(e?s?)$/))&&(c=[m[1]+"re",m[1]+"oir",m[1]+"ir"].filter(look)[0]))return "participio passato di «"+c+"» ("+look(c)+")";
  if((m=k.match(/^(.+)ant$/))&&(c=[m[1]+"er",m[1]+"ir",m[1]+"re"].filter(look)[0]))return "gerundio / participio presente di «"+c+"» ("+look(c)+")";
  return ""}

/* ---------- French inside Italian text: {braces} mark the French ---------- */
var W=[];LESSONS.forEach(function(L,li){(VOC[L.id]||[]).forEach(function(r){W.push([r[0],r[1],r[2],li,L.id]);var k=r[0].toLowerCase();if(!DICT[k])DICT[k]=r[1]})});
function wordSpan(say,inner){return '<span class="w" tabindex="0" role="button" data-say="'+esc(say)+'">'+inner+'</span>'}
function mixHTML(text){return String(text).split(/\{([^{}]*)\}/).map(function(t,i){return i%2?'<i class="it-l fr-in" lang="fr">'+itHTML(t)+'</i>':esc(t)}).join("")}
var linkMixed=mixHTML;
function isFr(o){return /^\{[^{}]*\}$/.test(o)}
function unbrace(o){return isFr(o)?o.slice(1,-1):o}

/* ---------- verbs: data and conjugation rules ---------- */
var PZ=["je","tu","il / elle","nous","vous","ils / elles"],PS=["je","tu","il","nous","vous","ils"],RF=["me","te","se","nous","vous","se"];
var PIT=["io","tu","lui / lei","noi","voi","loro"];
var AV=["ai","as","a","avons","avez","ont"],ES=["suis","es","est","sommes","êtes","sont"];
var ENDS={er:["e","es","e","ons","ez","ent"],ir:["is","is","it","issons","issez","issent"],re:["s","s","","ons","ez","ent"]};
var FUT=["ai","as","a","ons","ez","ont"],IMP=["ais","ais","ait","ions","iez","aient"];
var GRP={irr:"I verbi irregolari più usati",er:"Primo gruppo -er",ir:"Secondo gruppo -ir (finir)",re:"Verbi in -re (attendre)",pro:"Verbi pronominali"};
var TN={pr:"présent",pc:"passé composé",im:"imparfait",fu:"futur simple",co:"conditionnel"};
var TIP={pr:"Presente: quello che fai adesso o di solito. Spesso anche il futuro vicino.",
  pc:"Passé composé: un fatto finito nel passato, come il passato prossimo italiano.",
  im:"Imparfait: abitudini e descrizioni nel passato, come l'imperfetto italiano.",
  fu:"Futur simple: progetti e previsioni. Nel parlato il futuro vicino si dice spesso con aller + infinito.",
  co:"Conditionnel: desideri e richieste gentili (je voudrais), consigli (tu devrais), ipotesi."};
var VERBS=[
 {i:"être",z:"essere",g:"re",k:"irr",pr:["suis","es","est","sommes","êtes","sont"],im:"ét",fu:"ser",pp:"été"},
 {i:"avoir",z:"avere",g:"re",k:"irr",pr:["ai","as","a","avons","avez","ont"],fu:"aur",pp:"eu"},
 {i:"aller",z:"andare",g:"er",k:"irr",pr:["vais","vas","va","allons","allez","vont"],fu:"ir",pp:"allé",es:1},
 {i:"faire",z:"fare",g:"re",k:"irr",pr:["fais","fais","fait","faisons","faites","font"],fu:"fer",pp:"fait"},
 {i:"venir",z:"venire",g:"ir",k:"irr",pr:["viens","viens","vient","venons","venez","viennent"],fu:"viendr",pp:"venu",es:1},
 {i:"vouloir",z:"volere",g:"ir",k:"irr",pr:["veux","veux","veut","voulons","voulez","veulent"],fu:"voudr",pp:"voulu"},
 {i:"pouvoir",z:"potere",g:"ir",k:"irr",pr:["peux","peux","peut","pouvons","pouvez","peuvent"],fu:"pourr",pp:"pu"},
 {i:"devoir",z:"dovere",g:"ir",k:"irr",pr:["dois","dois","doit","devons","devez","doivent"],fu:"devr",pp:"dû"},
 {i:"prendre",z:"prendere",g:"re",k:"irr",pr:["prends","prends","prend","prenons","prenez","prennent"],pp:"pris"},
 {i:"dire",z:"dire",g:"re",k:"irr",pr:["dis","dis","dit","disons","dites","disent"],pp:"dit"},
 {i:"savoir",z:"sapere",g:"ir",k:"irr",pr:["sais","sais","sait","savons","savez","savent"],fu:"saur",pp:"su"},
 {i:"voir",z:"vedere",g:"ir",k:"irr",pr:["vois","vois","voit","voyons","voyez","voient"],fu:"verr",pp:"vu"},
 {i:"mettre",z:"mettere",g:"re",k:"irr",pr:["mets","mets","met","mettons","mettez","mettent"],pp:"mis"},
 {i:"partir",z:"partire",g:"ir",k:"irr",pr:["pars","pars","part","partons","partez","partent"],pp:"parti",es:1},
 {i:"sortir",z:"uscire",g:"ir",k:"irr",pr:["sors","sors","sort","sortons","sortez","sortent"],pp:"sorti",es:1},
 {i:"dormir",z:"dormire",g:"ir",k:"irr",pr:["dors","dors","dort","dormons","dormez","dorment"],pp:"dormi"},
 {i:"boire",z:"bere",g:"re",k:"irr",pr:["bois","bois","boit","buvons","buvez","boivent"],pp:"bu"},
 {i:"lire",z:"leggere",g:"re",k:"irr",pr:["lis","lis","lit","lisons","lisez","lisent"],pp:"lu"},
 {i:"écrire",z:"scrivere",g:"re",k:"irr",pr:["écris","écris","écrit","écrivons","écrivez","écrivent"],pp:"écrit"},
 {i:"connaître",z:"conoscere",g:"re",k:"irr",pr:["connais","connais","connaît","connaissons","connaissez","connaissent"],pp:"connu"},
 {i:"parler",z:"parlare",g:"er"},{i:"habiter",z:"abitare",g:"er"},{i:"travailler",z:"lavorare",g:"er"},{i:"aimer",z:"amare, piacere",g:"er"},
 {i:"étudier",z:"studiare",g:"er"},{i:"regarder",z:"guardare",g:"er"},{i:"écouter",z:"ascoltare",g:"er"},{i:"chercher",z:"cercare",g:"er"},
 {i:"manger",z:"mangiare",g:"er"},{i:"commencer",z:"cominciare",g:"er"},{i:"acheter",z:"comprare",g:"er",grave:1},{i:"préférer",z:"preferire",g:"er",grave:1},
 {i:"appeler",z:"chiamare",g:"er",dbl:1},{i:"payer",z:"pagare",g:"er"},{i:"arriver",z:"arrivare",g:"er",es:1},{i:"rentrer",z:"rientrare, tornare a casa",g:"er",es:1},
 {i:"rester",z:"restare",g:"er",es:1},{i:"tomber",z:"cadere",g:"er",es:1},
 {i:"finir",z:"finire",g:"ir"},{i:"choisir",z:"scegliere",g:"ir"},{i:"réussir",z:"riuscire",g:"ir"},
 {i:"attendre",z:"aspettare",g:"re"},{i:"répondre",z:"rispondere",g:"re"},{i:"vendre",z:"vendere",g:"re"},{i:"entendre",z:"sentire (con le orecchie)",g:"re"},{i:"descendre",z:"scendere",g:"re",es:1},
 {i:"se lever",b:"lever",z:"alzarsi",g:"er",k:"pro",grave:1,es:1},{i:"s'appeler",b:"appeler",z:"chiamarsi",g:"er",k:"pro",dbl:1,es:1},
 {i:"se coucher",b:"coucher",z:"andare a letto",g:"er",k:"pro",es:1},{i:"s'habiller",b:"habiller",z:"vestirsi",g:"er",k:"pro",es:1}
];
function vbase(v){return v.b||v.i}
function vstem(v){var b=vbase(v);return b.slice(0,-2)}
var VOW=/^[aeiouyhéèêàâîôûœ]/i;
/* present stem changes of -er verbs: j'achète, je préfère, j'appelle, je paie */
function erStem(v,i){var s=vstem(v);if(i===3||i===4)return s;
  if(v.dbl)return s.replace(/([lt])$/,"$1$1");
  if(v.grave)return s.replace(/[eé]([^aeiouyéè]+)$/,"è$1");
  if(/[aou]y$/.test(s))return s.slice(0,-1)+"i";
  return s}
function prForms(v){if(v.pr)return v.pr.map(function(f){return {h:esc(f),p:f}});
  if(v.g==="er")return ENDS.er.map(function(x,i){var st=erStem(v,i);if(i===3&&/g$/.test(st))st+="e";if(i===3&&/c$/.test(st))st=st.slice(0,-1)+"ç";return {h:esc(st)+'<b class="end">'+x+'</b>',p:st+x}});
  var s=vstem(v);return ENDS[v.g].map(function(x){return {h:esc(s)+'<b class="end">'+esc(x)+'</b>',p:s+x}})}
function nousStem(v){if(v.im&&typeof v.im==="string")return v.im;var n=prForms(v)[3].p;return n.slice(0,-3)}
function imForms(v){var s=nousStem(v);return IMP.map(function(x){var st=s;if(/^i/.test(x)){if(/ge$/.test(st))st=st.slice(0,-1);if(/ç$/.test(st))st=st.slice(0,-1)+"c"}return {h:esc(st)+'<b class="end">'+x+'</b>',p:st+x}})}
function futStem(v){if(v.fu)return v.fu;var b=vbase(v);if(v.g==="re")return b.slice(0,-1);
  if(v.g==="er"){var s=erStem(v,0);if(v.grave&&/é/.test(vstem(v)))s=vstem(v);return s+"er"}return b}
function fuForms(v,ends){var fs=futStem(v);return (ends||FUT).map(function(x){return {h:esc(fs)+'<b class="end">'+x+'</b>',p:fs+x}})}
function ppOf(v){return v.pp||vstem(v)+{er:"é",ir:"i",re:"u"}[v.g]}
function pcForms(v){var pp=ppOf(v),aux=v.es?ES:AV;
  return aux.map(function(a,i){var d=v.es?pp+(i<3?"(e)":"(e)s"):pp,f=v.es&&i>=3?pp+"s":pp;return {h:'<span class="cj-aux">'+a+'</span> <b class="end">'+esc(d)+'</b>',p:a+" "+f}})}
function cjForms(v,t){return t==="pr"?prForms(v):t==="im"?imForms(v):t==="fu"?fuForms(v):t==="co"?fuForms(v,IMP):pcForms(v)}
/* pronoun + form, with elision: j'ai, je m'appelle, il s'habille */
function withPron(i,v,f){var rf=v.k==="pro"?RF[i]:"";
  if(rf){var r=VOW.test(f)&&i!==3&&i!==4?rf.slice(0,1)+"'":rf+" ";return (i===0?"je ":PS[i]+" ")+r+f}
  return i===0&&VOW.test(f)?"j'"+f:PS[i]+" "+f}
function cjSay(v,t,i,f){return withPron(i,v,f.p)}
var CONJ_IDX={};
VERBS.forEach(function(v){var z=v.z;
  ["pr","im","fu","co"].forEach(function(t){cjForms(v,t).forEach(function(f,i){var k=f.p.toLowerCase();if(!CONJ_IDX[k])CONJ_IDX[k]=z+" ("+v.i+") · "+PZ[i]+" · "+TN[t]})});
  if(!DICT[vbase(v)]&&!CONJ_IDX[vbase(v)])CONJ_IDX[vbase(v)]=z+" (infinito)";
  var pp=ppOf(v);if(!CONJ_IDX[pp])CONJ_IDX[pp]="participio passato di «"+v.i+"» ("+z+")"});

/* ---------- audio on tap ---------- */
document.addEventListener("click",function(e){var b=e.target.closest("[data-say]");if(b)speak(b.getAttribute("data-say"))});
document.addEventListener("keydown",function(e){var t=e.target;if((e.key==="Enter"||e.key===" ")&&t.classList&&t.classList.contains("w")){e.preventDefault();speak(t.getAttribute("data-say"))}});

/* ---------- tooltip ---------- */
var tip=document.createElement("div");tip.className="tip";tip.setAttribute("role","tooltip");tip.hidden=true;document.body.appendChild(tip);
var tipTimer=null,tipFor=null;
function showTip(w){var h=w.getAttribute("data-say"),m=meaning(h);
  tip.innerHTML='<span class="tip-w" lang="fr">'+esc(h)+'</span>'+(m?'<span class="tip-m">'+esc(m)+'</span>':'');
  tip.hidden=false;tipFor=w;
  var r=w.getBoundingClientRect(),tw=tip.offsetWidth,th=tip.offsetHeight,vw=document.documentElement.clientWidth;
  var x=Math.max(8,Math.min(vw-tw-8,r.left+r.width/2-tw/2)),y=r.top-th-8;if(y<8)y=r.bottom+8;
  tip.style.left=x+"px";tip.style.top=y+"px"}
function hideTip(){tip.hidden=true;tipFor=null;clearTimeout(tipTimer)}
/* hover opens and closes the meaning only with a real mouse: after a tap, phones send «mouse» events that would close it at once */
var tipTouch=0;document.addEventListener("touchstart",function(){tipTouch=Date.now()},{passive:true,capture:true});
document.addEventListener("mouseover",function(e){if(Date.now()-tipTouch<1500)return;var w=e.target.closest&&e.target.closest(".w");if(w&&w!==tipFor)showTip(w);else if(!w&&tipFor)hideTip()});
document.addEventListener("focusin",function(e){var w=e.target.closest&&e.target.closest(".w");if(w)showTip(w)});
document.addEventListener("focusout",function(e){if(e.target===tipFor)hideTip()});
document.addEventListener("click",function(e){var w=e.target.closest&&e.target.closest(".w");if(w){showTip(w);clearTimeout(tipTimer)}else if(tipFor&&!(e.target.closest&&e.target.closest(".tip")))hideTip()});
window.addEventListener("scroll",function(){if(tipFor)hideTip()},{passive:true});

/* ---------- examples ---------- */
$$("div[data-it]").forEach(function(d){var it=d.getAttribute("data-it");d.className="ex";
  d.innerHTML='<div class="ex-body"><div class="it-l" lang="fr">'+itHTML(it)+'</div><div class="tr">'+mixHTML(d.getAttribute("data-zh")||"")+'</div></div><button class="say" data-say="'+esc(it)+'" aria-label="Ascolta">'+SPK+'</button>'});

/* ---------- alphabet and numbers ---------- */
var ALF=[["A","a","a"],["B","bé","bé"],["C","cé","cé"],["D","dé","dé"],["E","e","e"],["F","effe","effe"],["G","gé","gé"],["H","hache","hache"],["I","i","i"],["J","ji","ji"],["K","ka","ka"],["L","elle","elle"],["M","emme","emme"],
  ["N","enne","enne"],["O","o","o"],["P","pé","pé"],["Q","cu","cu"],["R","erre","erre"],["S","esse","esse"],["T","té","té"],["U","u","u"],["V","vé","vé"],["W","double vé","double vé"],["X","ixe","ixe"],["Y","i grec","i grec"],["Z","zède","zède"]];
var at=$("#alfabeto");if(at){var rows='';for(var i=0;i<ALF.length;i+=3){rows+='<tr>'+ALF.slice(i,i+3).map(function(a){return '<td class="big">'+a[0]+' <span lang="fr" style="font-weight:400;color:var(--muted);font-size:16px">'+a[1]+'</span></td><td><button class="say sm" data-say="'+a[2]+'" aria-label="Ascolta '+a[0]+'">'+SPK+'</button></td>'}).join("")+'</tr>'}at.innerHTML='<tr><th>Lettera</th><th></th><th>Lettera</th><th></th><th>Lettera</th><th></th></tr>'+rows}
var NUM=[["0","zéro"],["1","un"],["2","deux"],["3","trois"],["4","quatre"],["5","cinq"],["6","six"],["7","sept"],["8","huit"],["9","neuf"],["10","dix"],["11","onze"],["12","douze"],["13","treize"],["14","quatorze"],["15","quinze"],["16","seize"],["17","dix-sept"],["18","dix-huit"],["19","dix-neuf"],["20","vingt"],
  ["21","vingt et un"],["22","vingt-deux"],["30","trente"],["40","quarante"],["50","cinquante"],["60","soixante"],["70","soixante-dix"],["71","soixante et onze"],["75","soixante-quinze"],["80","quatre-vingts"],["81","quatre-vingt-un"],["90","quatre-vingt-dix"],["99","quatre-vingt-dix-neuf"],["100","cent"],["200","deux cents"],["1000","mille"],["2000","deux mille"]];
$$("table.numtbl").forEach(function(nt){var lo=+nt.getAttribute("data-from"),hi=+nt.getAttribute("data-to"),L=NUM.filter(function(n){return +n[0]>=lo&&+n[0]<=hi}),r2='';
  for(var j=0;j<L.length;j+=3){r2+='<tr>'+L.slice(j,j+3).map(function(n){return '<td class="big" style="font-variant-numeric:tabular-nums">'+n[0]+'</td><td class="itc">'+itHTML(n[1])+'</td><td><button class="say sm" data-say="'+n[1]+'" aria-label="Ascolta">'+SPK+'</button></td>'}).join("")+'</tr>'}
  nt.innerHTML='<tr><th>N.</th><th>Francese</th><th></th><th>N.</th><th>Francese</th><th></th><th>N.</th><th>Francese</th><th></th></tr>'+r2});

/* ---------- continuous player ---------- */
function Player(getLines,ui){
  var p={tok:null,wait:null};
  p.stop=function(quiet){p.tok=null;p.wait=null;if(!quiet){speakSeq++;stopAll()}getLines().forEach(function(l){l.el.classList.remove("now")});ui.idle()};
  p.play=function(){stopPlayers(p);var tok={};p.tok=tok;ui.busy();step(0);
    function step(i){if(p.tok!==tok)return;var L=getLines();L.forEach(function(l){l.el.classList.remove("now")});
      if(i>=L.length){p.tok=null;ui.idle();return}
      var l=L[i];l.el.classList.add("now");try{l.el.scrollIntoView({block:"nearest",behavior:"smooth"})}catch(e){}
      if(l.mine&&!l.el.classList.contains("open")){p.wait={i:i,go:function(){step(i+1)},tok:tok};return}
      speak(l.say,function(){setTimeout(function(){step(i+1)},500)},{pitch:l.pitch,chain:true})}};
  p.answer=function(i,l){l.el.classList.add("open");var w=p.wait;p.wait=null;
    speak(l.say,function(){if(w&&w.i===i&&p.tok===w.tok)setTimeout(w.go,500)},{pitch:l.pitch,chain:!!w})};
  players.push(p);return p;
}

/* ---------- dialogues ---------- */
function renderDialog(el){
  var id=el.getAttribute("data-dlg"),L=DLG[id];if(!L)return;
  el.innerHTML='<div class="dl-head"><h3>Dialogo<i lang="fr">Dialogue</i></h3><div class="dl-ctrl"><button class="btn pri dl-play" type="button">'+SPK+' Ascolta tutto</button><button class="btn dl-role" type="button" aria-pressed="false">'+MIC+' Faccio io B</button></div></div>'+
   '<div class="dl-lines">'+L.map(function(r,i){return '<div class="dl who'+r[0]+'" data-i="'+i+'"><span class="who">'+r[0]+'</span><div class="dl-body"><div class="dl-text"><div class="it-l" lang="fr">'+itHTML(r[1])+'</div><div class="tr">'+esc(r[2])+'</div></div><div class="dl-turn">Tocca a te. Di\' ad alta voce: <b>«'+esc(r[2])+'»</b><button class="btn pri dl-next" type="button">Fatto, ascolta l\'originale</button></div></div><button class="say" data-say="'+esc(r[1])+'" aria-label="Ascolta">'+SPK+'</button></div>'}).join("")+'</div>';
  var lines=$$(".dl",el),role=false,playBtn=$(".dl-play",el),roleBtn=$(".dl-role",el);
  function get(){return lines.map(function(ln,i){return {el:ln,say:L[i][1],pitch:L[i][0]==="B"?1.2:1,mine:role&&L[i][0]==="B"}})}
  var pl=Player(get,{busy:function(){playBtn.innerHTML="■ Stop";playBtn.dataset.on="1"},idle:function(){playBtn.innerHTML=SPK+" Ascolta tutto";playBtn.dataset.on=""}});
  playBtn.onclick=function(){if(playBtn.dataset.on)pl.stop();else pl.play()};
  roleBtn.onclick=function(){role=!role;el.classList.toggle("role",role);roleBtn.setAttribute("aria-pressed",role?"true":"false");lines.forEach(function(l){l.classList.remove("open")});pl.stop()};
  lines.forEach(function(ln,i){$(".dl-next",ln).onclick=function(){pl.answer(i,get()[i])}});
}
$$(".dialog[data-dlg]").forEach(renderDialog);

/* ---------- exercises ----------
   Fields kept from the engine this course comes from: {t:"say", zh: prompt in Italian, it: answer in French}.
   Options in French are written between braces: o:["{Je suis}","Io sono"]. */
function updateToc(){$$("[data-sc]").forEach(function(s){var b=state.best[s.getAttribute("data-sc")];s.textContent=b?b[0]+"/"+b[1]:"";s.classList.toggle("done",!!b&&b[0]===b[1])})}
function itLine(t){return '<span class="zp"><span class="it-l" lang="fr">'+itHTML(t)+'</span><button class="say sm" data-say="'+esc(t)+'" aria-label="Ascolta">'+SPK+'</button></span>'}
function nrm(s){return s.toLowerCase().replace(/[’]/g,"'").replace(/[.,!?;:«»"¿¡…—–]/g," ").replace(/\s+-\s+|-/g," ").replace(/\s+/g," ").trim()}
function noAcc(s){return s.normalize("NFD").replace(/[̀-ͯ]/g,"")}
function renderSet(el,opt){
  opt=opt||{};var id=el.getAttribute("data-set"),items=opt.items||EX[id];if(!items)return;var res=new Array(items.length),one=!!opt.one,qs=[];
  if(one){el.classList.add("one");el.innerHTML='<div class="dhead"><span>'+(opt.head||"")+'</span><span><span class="score">0 / '+items.length+'</span></span></div>'}
  else el.innerHTML='<div class="dhead"><span>Conta la prima risposta. Negli esercizi «Parla» ti valuti da solo; per dettato e completamento usa le lettere accentate qui sotto.</span><span>Punteggio <span class="score">0 / '+items.length+'</span>'+(state.best[id]?' · record '+state.best[id][0]+'/'+state.best[id][1]:'')+'</span></div>';
  var scoreEl=$(".score",el);
  function mark(i,ok){if(res[i]!==undefined)return;res[i]=ok;var n=res.filter(Boolean).length,done=res.filter(function(x){return x!==undefined}).length;scoreEl.textContent=n+" / "+items.length;
    if(opt.onMark)opt.onMark(i,ok,items[i]);
    if(one){qs[i].classList.add(ok?"q-ok":"q-no");if(done<items.length){var nx=document.createElement("div");nx.className="acts qnext";nx.innerHTML='<button class="btn pri" type="button">Avanti →</button>';
        nx.firstChild.onclick=function(){nx.remove();qs[i].hidden=true;var q2=qs[i+1];q2.hidden=false;try{q2.scrollIntoView({block:"start",behavior:rmotion()?"auto":"smooth"})}catch(e){}var f=q2.querySelector(".lsp");if(f&&!opt.noAuto)f.click()};qs[i].appendChild(nx)}
      else if(opt.onDone)opt.onDone(n,items.length,res);return}
    if(done===items.length){var b=state.best[id];if(!b||n>=b[0]){state.best[id]=[n,items.length];save();updateToc()}var r=document.createElement("div");r.className="acts";r.style.marginLeft="0";r.innerHTML='<button class="btn pri">Rifai</button>';r.firstChild.onclick=function(){renderSet(el)};el.appendChild(r)}}
  items.forEach(function(it,i){
    var q=document.createElement("div");q.className="q";
    if(typeof exExtra==="function"&&exExtra(q,it,i,mark)){if(one&&i>0)q.hidden=true;qs.push(q);el.appendChild(q);return}
    var tag=it.t==="say"?'<span class="qtag say-t">'+MIC+'Parla</span>':it.t==="ord"?'<span class="qtag">Componi</span>':it.t==="dict"?'<span class="qtag wr-t">Dettato</span>':it.t==="type"?'<span class="qtag wr-t">Completa</span>':(it.au?'<span class="qtag ear-t">'+SPK+'Ascolta</span>':'<span class="qtag">Scegli</span>');
    if(it.t==="dict"||it.t==="type"){
      var isD=it.t==="dict";
      q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+(isD?'Ascolta e scrivi in francese quello che senti.':mixHTML(it.q))+'</span></div>'+
        (isD?'<div class="acts"><button class="btn pri lsp" type="button">'+SPK+' Ascolta</button><span class="lsh">Puoi ascoltare quante volte vuoi.</span></div>':'')+
        '<div class="tin-row"><input class="tin" type="text" lang="fr" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Risposta"><button class="btn pri ck" type="button">Controlla</button></div>'+
        '<div class="acc" aria-label="Lettere accentate">'+["é","è","ê","à","â","ç","î","ô","û","ù","ë","ï","œ"].map(function(c){return '<button type="button" tabindex="-1">'+c+'</button>'}).join("")+'</div><div class="expl"></div>';
      var inp=$(".tin",q),exT=$(".expl",q),ck=$(".ck",q);
      if(isD)$(".lsp",q).onclick=function(){speak(it.au)};
      $$(".acc button",q).forEach(function(b){b.onmousedown=function(e){e.preventDefault()};b.onclick=function(){var p=inp.selectionStart||inp.value.length;inp.value=inp.value.slice(0,p)+b.textContent+inp.value.slice(inp.selectionEnd||p);inp.focus();try{inp.setSelectionRange(p+1,p+1)}catch(e){}}});
      function check(){if(q.dataset.locked)return;var v=inp.value.trim();if(!v){exT.innerHTML="Scrivi prima la risposta.";return}
        var ans=it.a||[it.au],ok=ans.some(function(a){return nrm(a)===nrm(v)}),near=!ok&&ans.some(function(a){return noAcc(nrm(a))===noAcc(nrm(v))});
        q.dataset.locked="1";inp.disabled=true;ck.disabled=true;inp.classList.add(ok||near?"ok":"no");
        exT.innerHTML=(ok?'<b class="ok">Giusto!</b> ':near?'<b class="ok">Quasi!</b> Attenzione agli accenti. ':'<b class="no">Non proprio.</b> ')+'Risposta: '+itLine(isD?it.au:(it.full||ans[0]))+(it.e?' '+mixHTML(it.e):'');
        if(!isD)speak(it.full||ans[0]);mark(i,ok||near)}
      ck.onclick=check;inp.onkeydown=function(e){if(e.key==="Enter"){e.preventDefault();check()}};
    }else if(it.t==="say"){
      q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+'Dillo in francese, ad alta voce: <b>'+mixHTML(it.zh)+'</b></span></div>'+
        '<div class="acts"><button class="btn pri sv">Fatto, mostra la risposta</button></div>'+
        '<div class="expl sayans" hidden>'+itLine(it.it)+(it.e?'<span class="sayn">'+mixHTML(it.e)+'</span>':'')+'</div>'+
        '<div class="acts sg" hidden><span class="sgq">Ascolta e confronta. Com\'è andata?</span><button class="btn sgno">Da rifare</button><button class="btn pri sgok">Giusto</button></div>';
      var ans=$(".sayans",q),sg=$(".sg",q);
      $(".sv",q).onclick=function(){this.disabled=true;ans.hidden=false;sg.hidden=false;speak(it.it)};
      $(".sgok",q).onclick=function(){fin(true)};$(".sgno",q).onclick=function(){fin(false)};
      function fin(ok){$$(".sg button",q).forEach(function(b){b.disabled=true});$(".sgq",q).innerHTML=ok?'<b class="ok">Bene!</b> Ripeti ancora due volte con ▶.':'<b class="no">Nessun problema.</b> Premi ▶, ripeti con la voce e riprova.';mark(i,ok)}
    }else if(it.t==="ord"){
      q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+mixHTML(it.q)+'</span></div>';
      var line=document.createElement("div");line.className="ordline";var pool=document.createElement("div");pool.className="ordpool";
      var w=shuffle(it.w),g=0;while(w.join(" ")===it.a[0]&&g++<10)w=shuffle(it.w);
      w.forEach(function(t){var b=document.createElement("button");b.className="tok";b.setAttribute("lang","fr");b.textContent=t;b.onclick=function(){if(q.dataset.locked)return;(b.parentNode===pool?line:pool).appendChild(b)};pool.appendChild(b)});
      var acts=document.createElement("div");acts.className="acts";acts.innerHTML='<button class="btn pri">Controlla</button><button class="btn">Ricomincia</button>';
      var ex=document.createElement("div");ex.className="expl";
      acts.children[1].onclick=function(){if(q.dataset.locked)return;$$(".tok",line).forEach(function(t){pool.appendChild(t)})};
      acts.children[0].onclick=function(){
        if(pool.children.length){ex.innerHTML="Usa prima tutte le parole.";return}
        var s=$$(".tok",line).map(function(t){return t.textContent}).join(" ");var ok=it.a.some(function(a){return nrm(a)===nrm(s)});
        q.dataset.locked="1";acts.children[0].disabled=true;acts.children[1].disabled=true;
        ex.innerHTML=(ok?'<b class="ok">Giusto!</b> Ora dilla ad alta voce:':'<b class="no">Non proprio.</b> Risposta:')+itLine(it.a[0]);speak(it.a[0]);mark(i,ok)};
      q.appendChild(line);q.appendChild(pool);q.appendChild(acts);q.appendChild(ex);
    }else{
      q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+mixHTML(it.q)+'</span></div>'+
        (it.au?'<div class="acts"><button class="btn pri lsp">'+SPK+' Ascolta</button><span class="lsh">Puoi ascoltare più volte. Il testo compare dopo la risposta.</span></div><div class="expl lsr" hidden></div>':'');
      if(it.au)$(".lsp",q).onclick=function(){speak(it.au)};
      var opts=document.createElement("div");opts.className="opts";var ex2=document.createElement("div");ex2.className="expl";
      var order=shuffle(it.o.map(function(_,k){return k}));
      order.forEach(function(k){var o=it.o[k],fr=isFr(o);var b=document.createElement("button");b.className="opt";if(fr)b.setAttribute("lang","fr");b.textContent=fr?frSp(unbrace(o)):o.replace(/[{}]/g,"");
        b.onclick=function(){var ok=k===0;$$(".opt",opts).forEach(function(x){x.disabled=true});opts.children[order.indexOf(0)].classList.add("right");if(!ok)b.classList.add("wrong");
          ex2.innerHTML=(ok?'<b class="ok">Giusto!</b> ':'<b class="no">No.</b> ')+mixHTML(it.e||"")+(isFr(it.o[0])&&/\s/.test(unbrace(it.o[0]))?' '+itLine(unbrace(it.o[0])):'');
          if(it.au){var r=$(".lsr",q);r.hidden=false;r.innerHTML='Hai sentito: '+itLine(it.au)}
          mark(i,ok)};opts.appendChild(b)});
      q.appendChild(opts);q.appendChild(ex2);
    }
    if(one&&i>0)q.hidden=true;qs.push(q);el.appendChild(q);
  });
}
function rmotion(){try{return matchMedia("(prefers-reduced-motion: reduce)").matches}catch(e){return false}}
/* the book's exercise sets are built only when their lesson is opened for reading */
function renderDrills(root){$$(".drill[data-set]:not([data-r])",root).forEach(function(d){d.setAttribute("data-r","1");renderSet(d)})}
updateToc();

/* ---------- phrasebook ---------- */
var fr=$("#frasario");if(fr){fr.innerHTML=FRASI.map(function(g){return '<h3>'+esc(g[0])+'</h3><div class="exs">'+g[1].map(function(r){return '<div class="ex"><div class="ex-body"><div class="it-l" lang="fr">'+itHTML(r[0])+'</div><div class="tr">'+esc(r[1])+'</div></div><button class="say" data-say="'+esc(r[0])+'" aria-label="Ascolta">'+SPK+'</button></div>'}).join("")+'</div>'}).join("")}

/* ---------- vocabulary ----------
   gender: m, f, mp / fp (plural only, les gens). Words with an aspirated h keep le / la (le haricot). */
var H_ASP=/^(haricot|héros|hibou|hall|hamburger|hasard|haut|hauteur|homard|honte|hors|huit|hockey|handicap|hamac|hâte|hache)/i;
function art(w,g){if(g==="mp"||g==="fp")return "les ";var el=VOW.test(w)&&!H_ASP.test(w);if(g==="m")return el?"l'":"le ";if(g==="f")return el?"l'":"la ";return ""}
function gOf(g){return g?g.charAt(0):""}
function wordHTML(r){var g=gOf(r[2]),a=art(r[0],r[2]);return g?'<span class="'+g+'"><span class="art">'+a+'</span>'+esc(r[0])+'</span>':esc(r[0])}
function gLabel(g){return {m:"maschile",f:"femminile",mp:"maschile plurale",fp:"femminile plurale"}[g]||""}
function lessonLabel(L){return L.kind==="lesson"?"Lezione "+L.n+" · "+L.t:L.t}
var vt=$("#vocabtbl");
function buildVocab(){if(!vt||vt.dataset.done)return;vt.dataset.done="1";var rowsV=['<tr><th>Francese</th><th>Italiano</th><th>Genere</th><th></th></tr>'];
  LESSONS.forEach(function(L){var ws=VOC[L.id];if(!ws||!ws.length)return;rowsV.push('<tr class="grp"><td colspan="4">'+esc(lessonLabel(L))+'</td></tr>');
    ws.forEach(function(r){rowsV.push('<tr><td class="itc" lang="fr">'+wordHTML(r)+'</td><td>'+esc(r[1])+'</td><td class="fc-g">'+gLabel(r[2])+'</td><td><button class="say sm" data-say="'+esc(art(r[0],r[2])+r[0])+'" aria-label="Ascolta">'+SPK+'</button></td></tr>')})});
  vt.innerHTML=rowsV.join("");$$('td[lang="fr"]',vt).forEach(frZone)}
/* words of each lesson */
function renderWords(el){var ws=VOC[el.getAttribute("data-voc")]||[];
  el.innerHTML=ws.map(function(r){return '<div class="wd"><span class="wi" lang="fr">'+wordHTML(r)+'</span><span class="wz">'+esc(r[1])+'</span><button class="say sm" data-say="'+esc(art(r[0],r[2])+r[0])+'" aria-label="Ascolta">'+SPK+'</button></div>'}).join("")}
$$(".words[data-voc]").forEach(renderWords);
/* I can */
$$("ul.cando[data-cando]").forEach(function(ul){var id=ul.getAttribute("data-cando"),lis=$$("li",ul),st=state.can[id]||[];
  lis.forEach(function(li,i){var lab=document.createElement("label"),cb=document.createElement("input");cb.type="checkbox";cb.checked=!!st[i];
    lab.appendChild(cb);lab.addEventListener("click",function(e){if(e.target.closest&&e.target.closest(".w"))e.preventDefault()});var sp=document.createElement("span");sp.innerHTML=li.innerHTML;lab.appendChild(sp);li.innerHTML="";li.appendChild(lab);
    cb.onchange=function(){var a=state.can[id]||[];a[i]=cb.checked;state.can[id]=a;save();cnt()}});
  var c=document.createElement("li");c.className="cnt";ul.appendChild(c);
  function cnt(){var a=state.can[id]||[],k=a.filter(Boolean).length;c.textContent=k===lis.length?"Fatto tutto! Puoi passare alla lezione successiva.":"Fatto: "+k+" / "+lis.length}
  cnt()});

/* ---------- flashcards ---------- */
function bx(w){return SRS.box(w[0])}
var fcCur=null,shown=false;
function FW(){var lim=typeof prefs.fcr==="number"?prefs.fcr:-1;if(lim<0){var hi=0;LESSONS.forEach(function(L,li){if(state.best[L.id]||(typeof pathStarted==="function"&&pathStarted(L.id)))hi=li});lim=Math.max(hi+1,LESSONS.findIndex(function(L){return L.id==="l8"}))}return W.filter(function(w){return w[3]<=lim})}
function pick(){return SRS.pick(FW(),fcCur)}
function drawBoxes(){var el=$("#fcboxes");if(!el)return;var c=[0,0,0,0,0];FW().forEach(function(w){c[bx(w)-1]++});var mx=Math.max.apply(null,c)||1;
  el.innerHTML=c.map(function(n,i){return '<div><div class="bar"><i style="height:'+(n/mx*100)+'%"></i></div><b>'+n+'</b><span>scatola '+(i+1)+'</span></div>'}).join("")}
function drawCard(auto){var card=$("#fccard");if(!card)return;var w=fcCur,m=prefs.fcm,full=art(w[0],w[2])+w[0];
  var word='<div class="fc-word" lang="fr">'+wordHTML(w)+'</div>',gtxt=gLabel(w[2]);
  var front=m==="ear"?'<button class="fc-ear" id="fcplay" type="button" aria-label="Ascolta la parola">'+SPK+'</button><p class="fc-hint">Ascolta: che cosa vuol dire? Dillo, poi guarda la risposta.</p>'
    :m==="say"?'<p class="fc-zh">'+esc(w[1])+'</p><p class="fc-hint">Dillo in francese ad alta voce'+(w[2]?' (con l\'articolo)':'')+', poi guarda la risposta.</p>'
    :word+'<p class="fc-hint">Di\' che cosa significa, poi guarda la risposta.</p>';
  card.innerHTML=shown?word+'<div class="fc-zh">'+esc(w[1])+'</div>'+(gtxt?'<div class="fc-g">'+gtxt+'</div>':'')+'<div class="acts" style="margin-left:0;justify-content:center"><button class="btn" id="fcno">Non la sapevo</button><button class="btn pri" id="fcyes">La sapevo</button><button class="say" data-say="'+esc(full)+'" aria-label="Ascolta">'+SPK+'</button></div>'
    :front+'<div class="acts" style="margin-left:0;justify-content:center"><button class="btn pri" id="fcshow">Mostra</button></div><p class="fc-box">Scatola '+bx(w)+'</p>';
  if(shown){$("#fcno").onclick=function(){grade(false)};$("#fcyes").onclick=function(){grade(true)};speak(full)}
  else{$("#fcshow").onclick=function(){shown=true;drawCard()};var pb=$("#fcplay");if(pb){pb.onclick=function(){speak(full)};if(auto)speak(full)}}}
function grade(ok){SRS.grade(fcCur[0],ok,1);drawBoxes();next(true)}
function next(auto){fcCur=pick();shown=false;drawCard(auto)}
function drawReset(conf){var r=$("#fcreset");if(!r)return;r.innerHTML=conf?'<span>Rimettere tutte le parole nella scatola 1?</span><button class="btn" id="rsy">Sì, azzera</button><button class="btn" id="rsn">Annulla</button>':'<button class="btn" id="rs">Azzera le flashcard</button>';
  if(conf){$("#rsy").onclick=function(){state.box={};save();SRS.reset();drawBoxes();next();drawReset(false)};$("#rsn").onclick=function(){drawReset(false)}}else{$("#rs").onclick=function(){drawReset(true)}}}
(function(){var sel=$("#fcrange");if(!sel)return;var cur=FW().length?FW()[FW().length-1][3]:0;
  sel.innerHTML=LESSONS.map(function(L,li){var n=W.filter(function(w){return w[3]<=li}).length;return (VOC[L.id]&&VOC[L.id].length)?'<option value="'+li+'"'+(li===cur?' selected':'')+'>Fino a: '+esc(lessonLabel(L))+' ('+n+' parole)</option>':''}).join("");
  sel.onchange=function(){prefs.fcr=+sel.value;savePrefs();drawBoxes();next()}})();
if($("#fccard")){drawBoxes();next();drawReset(false)}
function fcMode(m){prefs.fcm=m;savePrefs();$$("[data-fcm]").forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-fcm")===m?"true":"false")});shown=false;drawCard()}
$$("[data-fcm]").forEach(function(b){b.onclick=function(){fcMode(b.getAttribute("data-fcm"))};b.setAttribute("aria-pressed",b.getAttribute("data-fcm")===prefs.fcm?"true":"false")});

/* ---------- top bar ---------- */
$("#totop").onclick=function(){var rm=false;try{rm=matchMedia("(prefers-reduced-motion: reduce)").matches}catch(e){}try{window.scrollTo({top:0,behavior:rm?"auto":"smooth"})}catch(e){window.scrollTo(0,0)}};
function applyPrefs(){document.body.classList.toggle("no-tr",!prefs.tr);$("#tbtr").setAttribute("aria-pressed",prefs.tr?"true":"false");$("#tbtrl").textContent=prefs.tr?"sì":"no";$("#tbslow").setAttribute("aria-pressed",prefs.slow?"true":"false");$("#tbslowl").textContent=prefs.slow?"lenta":"normale"}
$("#tbtr").onclick=function(){prefs.tr=!prefs.tr;savePrefs();applyPrefs()};
$("#tbslow").onclick=function(){prefs.slow=!prefs.slow;savePrefs();applyPrefs();speak("Bonjour !")};
applyPrefs();

/* ---------- final listening ---------- */
function setupReading(root){var btn=$("#rdplay",root);if(!btn)return;var rd=$("#reading",root),lines=$$(".ex",rd);
  var pl=Player(function(){return lines.map(function(l){return {el:l,say:$(".say",l).getAttribute("data-say"),pitch:1.1,mine:false}})},{busy:function(){btn.textContent="■ Stop";btn.dataset.on="1"},idle:function(){btn.textContent="▶ Ascolta tutto";btn.dataset.on=""}});
  btn.onclick=function(){if(btn.dataset.on)pl.stop();else pl.play()};
  var t=$("#tgtxt",root);t.onclick=function(){var h=rd.classList.toggle("hide-it");t.textContent=h?"Mostra il testo francese":"Nascondi il testo francese";t.setAttribute("aria-pressed",h?"true":"false")}}
setupReading(document);

/* ---------- conjugator ---------- */
(function(){var sel=$("#cjverb");if(!sel)return;var tense="pr",rows=[],groups={};
  VERBS.forEach(function(v,i){var k=v.k||v.g;(groups[k]=groups[k]||[]).push(i)});
  sel.innerHTML=["irr","er","ir","re","pro"].map(function(k){return '<optgroup label="'+GRP[k]+'">'+groups[k].map(function(i){return '<option value="'+i+'">'+VERBS[i].i+' · '+VERBS[i].z+'</option>'}).join("")+'</optgroup>'}).join("");
  var btn=$("#cjplay");
  var pl=Player(function(){return rows},{busy:function(){btn.textContent="■ Stop";btn.dataset.on="1"},idle:function(){btn.textContent="▶ Ascolta tutto";btn.dataset.on=""}});
  btn.onclick=function(){if(btn.dataset.on)pl.stop();else pl.play()};
  function draw(){if(btn.dataset.on)pl.stop();var v=VERBS[+sel.value],F=cjForms(v,tense);
    var irr=v.k==="irr"?'<span class="badge irr">irregolare</span>':(v.grave||v.dbl?'<span class="badge irr">cambia l\'ortografia</span>':'<span class="badge">regolare</span>');
    $("#cjinfo").innerHTML='<span class="cj-inf" lang="fr">'+v.i+'</span><span>'+v.z+'</span><span>'+GRP[v.k||v.g]+'</span>'+irr;
    $("#cjtable").innerHTML='<tr><th>Persona</th><th lang="fr">'+TN[tense]+'</th><th>Italiano</th><th></th></tr>'+F.map(function(f,i){
      var say=cjSay(v,tense,i,f),shown=esc(say).replace(esc(f.p),f.h);
      return '<tr><td class="cj-p" lang="fr">'+PZ[i]+'</td><td class="cj-f" lang="fr">'+shown+'</td><td class="cj-zh">'+PIT[i]+'</td><td class="cj-play"><button class="say sm" type="button" data-say="'+esc(say)+'" aria-label="Ascolta">'+SPK+'</button></td></tr>'}).join("");
    rows=$$("#cjtable tr").slice(1).map(function(tr){return {el:tr,say:$(".say",tr).getAttribute("data-say"),mine:false}});
    $("#cjtip").textContent=TIP[tense]+(tense==="pc"?" Ausiliare: "+(v.es?"être":"avoir")+"; participio: "+ppOf(v)+(v.es?" (si accorda con il soggetto).":"."):"")}
  sel.onchange=draw;
  $$("#cjtense .btn").forEach(function(b){b.onclick=function(){tense=b.getAttribute("data-t");$$("#cjtense .btn").forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")});draw()}});
  draw();
})();

/* ---------- light / dark theme ---------- */
(function(){var b=$("#tbtheme");if(!b)return;var TK=KEY+"-theme",root=document.documentElement,mq=null;try{mq=matchMedia("(prefers-color-scheme: dark)")}catch(e){}
  var MOON='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1z"/></svg>';
  function cur(){return root.getAttribute("data-theme")||(mq&&mq.matches?"dark":"light")}
  function draw(){var d=cur()==="dark";b.setAttribute("aria-pressed",d?"true":"false");b.title=d?"Tema scuro: sì":"Tema scuro: no";b.setAttribute("aria-label","Tema scuro");b.innerHTML=MOON+'<span class="tbl">scuro</span>'}
  b.onclick=function(){var n=cur()==="dark"?"light":"dark";root.setAttribute("data-theme",n);try{localStorage.setItem(TK,n)}catch(e){}draw()};
  if(mq){try{mq.addEventListener("change",draw)}catch(e){}}
  draw();
})();

/* ---------- every French word can be tapped ----------
   French lives in .it / .itc / .it-l elements (the build turns {braces} in lesson pages into <i class="it">). */
var FRSKIP="button,.w,script,style,.tok,.opts,.fc-card,#fcboxes,.toc,.stats,.kicker,.tip,.legend,#alfabeto,.conjugator,.demo,.map,.hero-card,.xref,.words,input,select,.fc-range";
function frText(root){var out=[],tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null),n;while((n=tw.nextNode())){if(!n.nodeValue.trim())continue;var p=n.parentElement;if(!p||p.closest(".w,button,script,style,input,select"))continue;out.push(n)}return out}
function frZone(el){
  if(el.closest(".w,button")||el.querySelector(".w"))return;
  el.setAttribute("lang","fr");
  var kids=Array.prototype.slice.call(el.children);
  if(kids.length&&kids.every(function(k){return k.matches("span.st,span.end,b,u")&&!/\s/.test(k.textContent)})){
    var tags=[],h=el.innerHTML.replace(/<[^>]+>/g,function(m){tags.push(m);return "\u0001"+(tags.length-1)+"\u0002"});
    el.innerHTML=h.split(/(\s+)/).map(function(tok){
      if(/^\s*$/.test(tok))return tok;
      var plain=tok.replace(/\u0001\d+\u0002/g,""),m=plain.match(/^([«"(¿¡—–-]*)(.*?)([.,!?;:»")…—]*)$/),core=m?m[2]:plain;
      var back=tok.replace(/\u0001(\d+)\u0002/g,function(_,i){return tags[+i]});
      if(!core||!LET.test(core))return back;
      return wordSpan(core.replace(/&amp;/g,"&"),back)}).join("");
    return}
  frText(el).forEach(function(n){var t=document.createElement("template");t.innerHTML=itHTML(n.nodeValue);n.parentNode.replaceChild(t.content,n)});
}
(function(){var MAIN=$("main");if(!MAIN)return;
  $$('.it,.itc,td.big[lang=fr],.lhead h2 small',MAIN).forEach(function(el){if(!el.closest(FRSKIP))frZone(el)})})();

/* ---------- table of contents ---------- */
var d=$("#tocd");try{if(d&&matchMedia("(min-width:1000px)").matches)d.open=true}catch(e){}
$$(".toc a").forEach(function(a){a.addEventListener("click",function(){try{if(!matchMedia("(min-width:1000px)").matches)d.open=false}catch(e){}})});

/* ---------- everything the course can say (used to record and check the audio files) ---------- */
window.FRSAYS=function(){var S={},box=document.createElement("div");
  function add(t){if(!t||typeof t!=="string")return;t=t.trim().replace(/\s+/g," ");if(!t||!LET.test(t))return;S[akey(t)]=t}
  function words(html){box.innerHTML=html;$$(".w[data-say]",box).forEach(function(e){add(e.getAttribute("data-say"))})}
  function fr(t){if(!t)return;add(t);words(itHTML(t))}
  function mix(t){if(!t)return;String(t).replace(/\{([^{}]*)\}/g,function(_,x){fr(x)})}
  $$("[data-it]").forEach(function(d){fr(d.getAttribute("data-it"))});
  Object.keys(DLG).forEach(function(k){DLG[k].forEach(function(r){fr(r[1])})});
  W.forEach(function(w){var full=art(w[0],w[2])+w[0];fr(full);fr(w[0])});
  Object.keys(EX).forEach(function(k){EX[k].forEach(function(it){[it.au,it.full,it.it&&it.t==="say"?it.it:null,it.ask,it.fix,it.s&&it.t==="err"?it.s:null].forEach(fr);
    (it.a||[]).forEach(fr);if(it.t==="gap")fr(String(it.s).replace("＿",it.o[0]));if(it.t==="rep")it.o.forEach(function(o){fr(o[0])});
    if(it.t==="ord")(it.w||[]).concat(it.x||[]).forEach(fr);if(!it.t&&it.o)it.o.forEach(function(o){if(isFr(o))fr(unbrace(o));else mix(o)});
    [it.q,it.e,it.zh].forEach(mix)})});
  Object.keys(CULT).forEach(function(k){CULT[k].forEach(function(c){fr(c.i);(c.w||[]).forEach(function(w){fr(w[0])});[c.t].concat(c.p,[c.it,c.fr]).forEach(mix);if(c.q){mix(c.q.q);mix(c.q.e);c.q.o.forEach(function(o){isFr(o)?fr(unbrace(o)):mix(o)})}})});
  (typeof READS!=="undefined"?READS:[]).forEach(function(r){r.lines.forEach(function(l){fr(l[0])});(r.gloss||[]).forEach(function(g){fr(g[0])})});
  FRASI.forEach(function(g){g[1].forEach(function(r){fr(r[0])})});
  NUM.forEach(function(n){fr(n[1])});ALF.forEach(function(a){add(a[2])});
  VERBS.forEach(function(v){["pr","pc","im","fu","co"].forEach(function(t){cjForms(v,t).forEach(function(f,i){fr(cjSay(v,t,i,f))})})});
  renderDrills(document);buildVocab();$$("[data-say]").forEach(function(e){add(e.getAttribute("data-say"))});
  return Object.keys(S).map(function(k){return {t:S[k],f:audioSrc(S[k]).slice(6)}})};
