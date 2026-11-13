var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var KEY="italiano-filipino-v1";
var state={best:{},box:{},can:{}};
try{var raw=localStorage.getItem(KEY);if(raw){var p=JSON.parse(raw);state.best=p.best2||{};state.box=p.box||{};state.can=p.can||{}}}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify({best2:state.best,box:state.box,can:state.can}))}catch(e){}}
var prefs={tr:true,slow:false,fcm:"ear"};
try{var pr=JSON.parse(localStorage.getItem(KEY+"-prefs")||"{}");if(pr.tr===false)prefs.tr=false;if(pr.slow)prefs.slow=true;if(pr.fcm)prefs.fcm=pr.fcm;if(typeof pr.fcr==="number")prefs.fcr=pr.fcr}catch(e){}
function savePrefs(){try{localStorage.setItem(KEY+"-prefs",JSON.stringify(prefs))}catch(e){}}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}

/* ---------- voice ----------
   First choice: recorded files (Kokoro, voice "Sara", audio/<hash>.mp3), the same as the Italian course for Chinese speakers.
   If a file is missing or fails, the device's Italian voice reads the text. */
var voice=null,hasTTS=("speechSynthesis" in window),speakSeq=0,players=[];
var AUD=null;try{AUD=new Audio();AUD.preload="auto"}catch(e){}
function cyrb53(str){var h1=0xdeadbeef,h2=0x41c6ce57;for(var i=0,ch;i<str.length;i++){ch=str.charCodeAt(i);h1=Math.imul(h1^ch,2654435761);h2=Math.imul(h2^ch,1597334677)}
  h1=Math.imul(h1^(h1>>>16),2246822507);h1^=Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507);h2^=Math.imul(h1^(h1>>>13),3266489909);return 4294967296*(2097151&h2)+(h1>>>0)}
function akey(t){t=String(t).replace(/[’]/g,"'").replace(/[  ]/g," ").trim().replace(/\s+/g," ");if(!/\s/.test(t))t=t.toLowerCase();return t}
function audioSrc(t){return "audio/"+cyrb53(akey(t)).toString(36)+".mp3"}
function scoreVoice(v){var n=(v.name+" "+(v.voiceURI||"")).toLowerCase(),s=0;
  if(/^it[-_]it/i.test(v.lang))s+=5;else if(/^it/i.test(v.lang))s+=3;else return -99;
  if(/natural|neural|online|premium|enhanced|siri|wavenet|google/.test(n))s+=4;
  if(/compact|espeak|eloquence/.test(n))s-=4;return s}
function pickVoice(){if(!hasTTS)return;try{var best=null,bs=-99;speechSynthesis.getVoices().forEach(function(v){var s=scoreVoice(v);if(s>bs){bs=s;best=v}});voice=bs>0?best:null}catch(e){}}
if(hasTTS){pickVoice();try{speechSynthesis.onvoiceschanged=pickVoice}catch(e){}}
function stopAll(){try{if(AUD)AUD.pause()}catch(e){}try{if(hasTTS)speechSynthesis.cancel()}catch(e){}}
function stopPlayers(except){players.forEach(function(p){if(p!==except)p.stop(true)})}
function ttsSpeak(t,fin,wait,pitch){
  if(!hasTTS){if(wait)setTimeout(fin,Math.max(800,t.length*80));return}
  try{speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(t);u.lang="it-IT";if(voice)u.voice=voice;u.rate=prefs.slow?.65:.95;if(pitch)u.pitch=pitch;
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

/* ---------- Italian words you can tap ---------- */
var LET=/[A-Za-zÀ-ÖØ-öø-ÿœŒæÆ]/;
/* Italian typography: nothing to add (kept as a function: the engine calls it) */
function frSp(t){return String(t)}
function itHTML(text,plain){return frSp(text).split(/([\s ]+)/).map(function(tok){
  if(!tok)return "";if(/^[\s ]*$/.test(tok))return tok.replace(/ /g,"&nbsp;");
  var m=tok.match(/^([«"(¿¡—–\-…]*)(.*?)([.,!?;:»")…—]*)$/);var core=m?m[2]:tok;
  if(!core||!LET.test(core))return esc(tok);
  return esc(m[1])+(plain?esc(core):'<span class="w" tabindex="0" role="button" data-say="'+esc(core)+'">'+esc(core)+'</span>')+esc(m[3]);
}).join("")}
function norm(w){return w.toLowerCase().replace(/[’]/g,"'")}
function look(x){return DICT[x]||(typeof CONJ_IDX!=="undefined"&&CONJ_IDX[x])||""}
function meaning(w){var k=norm(w);if(look(k))return look(k);
  /* elision: l'amica, dell'acqua, c'è, un'idea */
  var i=k.indexOf("'");if(i>0&&i<k.length-1){var a=k.slice(0,i+1),b=k.slice(i+1),mb=meaning(b);if(look(a)||mb)return (look(a)||a)+" + "+(mb||b)}
  /* a capital letter at the start of a sentence is not a name: try the known forms first */
  var f=formMeaning(k);if(f||!/^[A-ZÀ-Ý]/.test(w))return f;return "pangngalang pantangi"}
/* forms of known words: plural / feminine, participles, gerunds, imperfect, conditional, infinitive + pronoun */
function formMeaning(k){var c,m,i;
  var NOUN=[["chi","co"],["ghi","go"],["che","ca"],["ghe","ga"],["i","o"],["i","e"],["i","a"],["e","a"],["e","o"],["a","o"],["ie","ia"]];
  for(i=0;i<NOUN.length;i++){var e=NOUN[i];if(k.length>3&&k.slice(-e[0].length)===e[0]){c=k.slice(0,-e[0].length)+e[1];if(look(c))return look(c)+" (anyo ng «"+c+"»)"}}
  var inf=function(st){return [st+"are",st+"ere",st+"ire"].filter(function(x){return look(x)})[0]};
  if((m=k.match(/^(.+)(?:ando|endo)$/))&&(c=inf(m[1])))return "gerundio ng «"+c+"» ("+look(c)+")";
  if((m=k.match(/^(.+)(?:ato|ata|ati|ate)$/))&&look(m[1]+"are"))return "participio ng «"+m[1]+"are» ("+look(m[1]+"are")+")";
  if((m=k.match(/^(.+)(?:uto|uta|uti|ute)$/))&&look(m[1]+"ere"))return "participio ng «"+m[1]+"ere» ("+look(m[1]+"ere")+")";
  if((m=k.match(/^(.+)(?:ito|ita|iti|ite)$/))&&look(m[1]+"ire"))return "participio ng «"+m[1]+"ire» ("+look(m[1]+"ire")+")";
  if((m=k.match(/^(.+)(?:avo|avi|ava|avamo|avate|avano)$/))&&look(m[1]+"are"))return "imperfetto ng «"+m[1]+"are» ("+look(m[1]+"are")+")";
  if((m=k.match(/^(.+)(?:evo|evi|eva|evamo|evate|evano)$/))&&(c=inf(m[1])))return "imperfetto ng «"+c+"» ("+look(c)+")";
  if((m=k.match(/^(.+?)(?:erei|eresti|erebbe|eremmo|ereste|erebbero|rei|resti|rebbe|remmo|reste|rebbero)$/))&&(c=inf(m[1])))return "condizionale ng «"+c+"» ("+look(c)+")";
  if((m=k.match(/^(.+?)(mi|ti|ci|vi|si|lo|la|li|le|ne|gli)$/))&&m[1].length>2){c=/r$/.test(m[1])?m[1]+"e":m[1];if(look(c))return c+" + "+m[2]+" ("+look(c)+")"}
  return ""}

/* ---------- Italian inside Spanish text: {braces} mark the Italian ---------- */
var W=[];LESSONS.forEach(function(L,li){(VOC[L.id]||[]).forEach(function(r){W.push([r[0],r[1],r[2],li,L.id]);var k=r[0].toLowerCase();if(!DICT[k])DICT[k]=r[1]})});
function wordSpan(say,inner){return '<span class="w" tabindex="0" role="button" data-say="'+esc(say)+'">'+inner+'</span>'}
function mixHTML(text){return String(text).split(/\{([^{}]*)\}/).map(function(t,i){return i%2?'<i class="it-l fr-in" lang="it">'+itHTML(t)+'</i>':esc(t)}).join("")}
var linkMixed=mixHTML;
function isFr(o){return /^\{[^{}]*\}$/.test(o)}
function unbrace(o){return isFr(o)?o.slice(1,-1):o}

/* ---------- verbs: data and conjugation rules (same verbs as the course for Chinese speakers, so the recordings are shared) ---------- */
var PZ=["io","tu","lui / lei","noi","voi","loro"],PS=["io","tu","lui","noi","voi","loro"],PES=["ako","ikaw","siya","kami / tayo","kayo","sila"],RF=["mi","ti","si","ci","vi","si"];
var AV=["ho","hai","ha","abbiamo","avete","hanno"],ES=["sono","sei","è","siamo","siete","sono"];
var ENDS={are:["o","i","a","iamo","ate","ano"],ere:["o","i","e","iamo","ete","ono"],ire:["o","i","e","iamo","ite","ono"],isc:["isco","isci","isce","iamo","ite","iscono"]};
var FUT=["ò","ai","à","emo","ete","anno"],IMP=["vo","vi","va","vamo","vate","vano"],CON=["ei","esti","ebbe","emmo","este","ebbero"];
var GRP={irr:"Mga pinakagamiting di-regular na pandiwa",are:"Unang pangkat -are",ere:"Ikalawang pangkat -ere",ire:"Ikatlong pangkat -ire",isc:"Ikatlong pangkat -ire (may -isc-)",rif:"Mga pandiwang repleksibo (-rsi)"};
var TN={pr:"presente",pp:"passato prossimo",im:"imperfetto",fu:"futuro",co:"condizionale"};
var TIP={pr:"Presente: ang ginagawa mo ngayon o palagi; madalas, pati ang malapit na hinaharap.",
  pp:"Passato prossimo: tapos na pangyayari (ieri ho mangiato = kumain ako kahapon). Pantulong na avere o essere + participio.",
  im:"Imperfetto: mga nakagawian at paglalarawan sa nakaraan (da bambino giocavo = noong bata ako, naglalaro ako).",
  fu:"Futuro: mga plano at hula. Sa tiyak at malapit na plano, madalas presente na ang gamit.",
  co:"Condizionale: mga hiling at magalang na pakiusap (vorrei = gusto ko sana), payo at haka."};
var VERBS=[
 {i:"essere",z:"maging, nasa",g:"ere",k:"irr",pr:["sono","sei","è","siamo","siete","sono"],fu:"sar",im:["ero","eri","era","eravamo","eravate","erano"],pp:"stato",es:1},
 {i:"avere",z:"magkaroon, mayroon",g:"ere",k:"irr",pr:["ho","hai","ha","abbiamo","avete","hanno"],fu:"avr"},
 {i:"stare",z:"manatili; nasa (kalagayan)",g:"are",k:"irr",pr:["sto","stai","sta","stiamo","state","stanno"],fu:"star",pp:"stato",es:1},
 {i:"andare",z:"pumunta",g:"are",k:"irr",pr:["vado","vai","va","andiamo","andate","vanno"],fu:"andr",es:1},
 {i:"fare",z:"gawin, gumawa",g:"are",k:"irr",pr:["faccio","fai","fa","facciamo","fate","fanno"],fu:"far",im:"face",pp:"fatto"},
 {i:"venire",z:"dumating, pumunta rito",g:"ire",k:"irr",pr:["vengo","vieni","viene","veniamo","venite","vengono"],fu:"verr",pp:"venuto",es:1},
 {i:"volere",z:"gusto, gustuhin",g:"ere",k:"irr",pr:["voglio","vuoi","vuole","vogliamo","volete","vogliono"],fu:"vorr"},
 {i:"potere",z:"maaari, kaya",g:"ere",k:"irr",pr:["posso","puoi","può","possiamo","potete","possono"],fu:"potr"},
 {i:"dovere",z:"kailangan, dapat",g:"ere",k:"irr",pr:["devo","devi","deve","dobbiamo","dovete","devono"],fu:"dovr"},
 {i:"dire",z:"sabihin",g:"ire",k:"irr",pr:["dico","dici","dice","diciamo","dite","dicono"],fu:"dir",im:"dice",pp:"detto"},
 {i:"uscire",z:"lumabas",g:"ire",k:"irr",pr:["esco","esci","esce","usciamo","uscite","escono"],es:1},
 {i:"sapere",z:"malaman, alam",g:"ere",k:"irr",pr:["so","sai","sa","sappiamo","sapete","sanno"],fu:"sapr"},
 {i:"bere",z:"uminom",g:"ere",k:"irr",pr:["bevo","bevi","beve","beviamo","bevete","bevono"],fu:"berr",im:"beve",pp:"bevuto"},
 {i:"dare",z:"magbigay",g:"are",k:"irr",pr:["do","dai","dà","diamo","date","danno"],fu:"dar"},
 {i:"rimanere",z:"manatili, maiwan",g:"ere",k:"irr",pr:["rimango","rimani","rimane","rimaniamo","rimanete","rimangono"],fu:"rimarr",pp:"rimasto",es:1},
 {i:"parlare",z:"magsalita",g:"are"},{i:"abitare",z:"tumira",g:"are"},{i:"lavorare",z:"magtrabaho",g:"are"},{i:"studiare",z:"mag-aral",g:"are"},{i:"mangiare",z:"kumain",g:"are"},
 {i:"cercare",z:"maghanap",g:"are"},{i:"pagare",z:"magbayad",g:"are"},{i:"comprare",z:"bumili",g:"are"},{i:"arrivare",z:"dumating",g:"are",es:1},{i:"tornare",z:"bumalik",g:"are",es:1},
 {i:"prendere",z:"kumuha, sumakay",g:"ere",pp:"preso"},{i:"vedere",z:"makita",g:"ere",fu:"vedr",pp:"visto"},{i:"leggere",z:"magbasa",g:"ere",pp:"letto"},{i:"scrivere",z:"sumulat",g:"ere",pp:"scritto"},{i:"vivere",z:"mabuhay, tumira",g:"ere",fu:"vivr",pp:"vissuto"},
 {i:"dormire",z:"matulog",g:"ire"},{i:"partire",z:"umalis, lumisan",g:"ire",es:1},{i:"sentire",z:"marinig, maramdaman",g:"ire"},
 {i:"capire",z:"maintindihan",g:"isc"},{i:"finire",z:"tapusin",g:"isc"},{i:"preferire",z:"mas gusto",g:"isc"},
 {i:"alzarsi",b:"alzare",z:"bumangon",g:"are",k:"rif",es:1},{i:"chiamarsi",b:"chiamare",z:"tawagin, ang pangalan ay",g:"are",k:"rif",es:1}
];
function vbase(v){return v.b||v.i}
function vstem(v){return vbase(v).slice(0,-3)}
function futStem(v){if(v.fu)return v.fu;var b=vbase(v),s=b.slice(0,-3);
  if(v.g==="are"){if(/[cg]$/.test(s))return s+"her";if(/[cg]i$/.test(s))return s.slice(0,-1)+"er";return s+"er"}
  return b.slice(0,-1)}
function ppOf(v){return v.pp||vstem(v)+{are:"ato",ere:"uto",ire:"ito",isc:"ito"}[v.g]}
function cjForms(v,t){
  if(t==="pr"){if(v.pr)return v.pr.map(function(f){return {h:esc(f),p:f}});
    var s=vstem(v);return ENDS[v.g].map(function(x){var st=s;if(v.g==="are"&&/[cg]$/.test(st)&&/^[ie]/.test(x))st+="h";if(/i$/.test(st)&&/^i/.test(x))x=x.slice(1);return {h:esc(st)+'<b class="end">'+esc(x)+'</b>',p:st+x}})}
  if(t==="fu"||t==="co"){var fs=futStem(v);return (t==="fu"?FUT:CON).map(function(x){return {h:esc(fs)+'<b class="end">'+x+'</b>',p:fs+x}})}
  if(t==="im"){if(Array.isArray(v.im))return v.im.map(function(f){return {h:esc(f),p:f}});
    var is=typeof v.im==="string"?v.im:vbase(v).slice(0,-2);return IMP.map(function(x){return {h:esc(is)+'<b class="end">'+x+'</b>',p:is+x}})}
  var pp=ppOf(v),aux=v.es?ES:AV;
  return aux.map(function(a,i){var f=pp,d=pp;if(v.es){var r=pp.slice(0,-1);f=r+(i<3?"o":"i");d=r+(i<3?"o/a":"i/e")}return {h:'<span class="cj-aux">'+a+'</span> <b class="end">'+esc(d)+'</b>',p:a+" "+f}})}
function cjSay(v,t,i,f){return PS[i]+" "+(v.k==="rif"?RF[i]+" ":"")+f.p}
var CONJ_IDX={};
VERBS.forEach(function(v){var z=v.z;
  ["pr","im","fu","co"].forEach(function(t){cjForms(v,t).forEach(function(f,i){var k=f.p.toLowerCase();if(!CONJ_IDX[k])CONJ_IDX[k]=z+" ("+v.i+") · "+PZ[i]+" · "+TN[t]})});
  if(!DICT[v.i]&&!CONJ_IDX[v.i])CONJ_IDX[v.i]=z+" (pawatas)";
  var pp=ppOf(v);if(!CONJ_IDX[pp])CONJ_IDX[pp]="participio ng «"+v.i+"» ("+z+")"});

/* ---------- audio on tap ---------- */
document.addEventListener("click",function(e){var b=e.target.closest("[data-say]");if(b)speak(b.getAttribute("data-say"))});
document.addEventListener("keydown",function(e){var t=e.target;if((e.key==="Enter"||e.key===" ")&&t.classList&&t.classList.contains("w")){e.preventDefault();speak(t.getAttribute("data-say"))}});

/* ---------- tooltip ---------- */
var tip=document.createElement("div");tip.className="tip";tip.setAttribute("role","tooltip");tip.hidden=true;document.body.appendChild(tip);
var tipTimer=null,tipFor=null;
function showTip(w){var h=w.getAttribute("data-say"),m=meaning(h);
  tip.innerHTML='<span class="tip-w" lang="it">'+esc(h)+'</span>'+(m?'<span class="tip-m">'+esc(m)+'</span>':'');
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
  d.innerHTML='<div class="ex-body"><div class="it-l" lang="it">'+itHTML(it)+'</div><div class="tr">'+mixHTML(d.getAttribute("data-zh")||"")+'</div></div><button class="say" data-say="'+esc(it)+'" aria-label="Pakinggan">'+SPK+'</button>'});

/* ---------- alphabet and numbers ---------- */
var ALF=[["A","a","a"],["B","bi","bi"],["C","ci","ci"],["D","di","di"],["E","e","e"],["F","effe","effe"],["G","gi","gi"],["H","acca","acca"],["I","i","i"],["L","elle","elle"],["M","emme","emme"],["N","enne","enne"],["O","o","o"],["P","pi","pi"],["Q","cu","cu"],["R","erre","erre"],["S","esse","esse"],["T","ti","ti"],["U","u","u"],["V","vu","vu"],["Z","zeta","zeta"]];
var at=$("#alfabeto");if(at){var rows='';for(var i=0;i<ALF.length;i+=3){rows+='<tr>'+ALF.slice(i,i+3).map(function(a){return '<td class="big">'+a[0]+' <span lang="it" style="font-weight:400;color:var(--muted);font-size:16px">'+a[1]+'</span></td><td><button class="say sm" data-say="'+a[2]+'" aria-label="Pakinggan '+a[0]+'">'+SPK+'</button></td>'}).join("")+'</tr>'}at.innerHTML='<tr><th>Titik</th><th></th><th>Titik</th><th></th><th>Titik</th><th></th></tr>'+rows}
var NUM=[["0","zero"],["1","uno"],["2","due"],["3","tre"],["4","quattro"],["5","cinque"],["6","sei"],["7","sette"],["8","otto"],["9","nove"],["10","dieci"],["11","undici"],["12","dodici"],["13","tredici"],["14","quattordici"],["15","quindici"],["16","sedici"],["17","diciassette"],["18","diciotto"],["19","diciannove"],["20","venti"],
  ["21","ventuno"],["22","ventidue"],["23","ventitré"],["28","ventotto"],["30","trenta"],["31","trentuno"],["40","quaranta"],["50","cinquanta"],["60","sessanta"],["70","settanta"],["80","ottanta"],["90","novanta"],["100","cento"],["200","duecento"],["1000","mille"],["2000","duemila"]];
$$("table.numtbl").forEach(function(nt){var lo=+nt.getAttribute("data-from"),hi=+nt.getAttribute("data-to"),L=NUM.filter(function(n){return +n[0]>=lo&&+n[0]<=hi}),r2='';
  for(var j=0;j<L.length;j+=3){r2+='<tr>'+L.slice(j,j+3).map(function(n){return '<td class="big" style="font-variant-numeric:tabular-nums">'+n[0]+'</td><td class="itc">'+itHTML(n[1])+'</td><td><button class="say sm" data-say="'+n[1]+'" aria-label="Pakinggan">'+SPK+'</button></td>'}).join("")+'</tr>'}
  nt.innerHTML='<tr><th>N.º</th><th>Italiano</th><th></th><th>N.º</th><th>Italiano</th><th></th><th>N.º</th><th>Italiano</th><th></th></tr>'+r2});

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
  el.innerHTML='<div class="dl-head"><h3>Usapan<i lang="it">Dialogo</i></h3><div class="dl-ctrl"><button class="btn pri dl-play" type="button">'+SPK+' Pakinggan lahat</button><button class="btn dl-role" type="button" aria-pressed="false">'+MIC+' Ako si B</button></div></div>'+
   '<div class="dl-lines">'+L.map(function(r,i){return '<div class="dl who'+r[0]+'" data-i="'+i+'"><span class="who">'+r[0]+'</span><div class="dl-body"><div class="dl-text"><div class="it-l" lang="it">'+itHTML(r[1])+'</div><div class="tr">'+esc(r[2])+'</div></div><div class="dl-turn">Ikaw na. Sabihin nang malakas: <b>«'+esc(r[2])+'»</b><button class="btn pri dl-next" type="button">Tapos na, pakinggan ang orihinal</button></div></div><button class="say" data-say="'+esc(r[1])+'" aria-label="Pakinggan">'+SPK+'</button></div>'}).join("")+'</div>';
  var lines=$$(".dl",el),role=false,playBtn=$(".dl-play",el),roleBtn=$(".dl-role",el);
  function get(){return lines.map(function(ln,i){return {el:ln,say:L[i][1],pitch:L[i][0]==="B"?1.2:1,mine:role&&L[i][0]==="B"}})}
  var pl=Player(get,{busy:function(){playBtn.innerHTML="■ Itigil";playBtn.dataset.on="1"},idle:function(){playBtn.innerHTML=SPK+" Pakinggan lahat";playBtn.dataset.on=""}});
  playBtn.onclick=function(){if(playBtn.dataset.on)pl.stop();else pl.play()};
  roleBtn.onclick=function(){role=!role;el.classList.toggle("role",role);roleBtn.setAttribute("aria-pressed",role?"true":"false");lines.forEach(function(l){l.classList.remove("open")});pl.stop()};
  lines.forEach(function(ln,i){$(".dl-next",ln).onclick=function(){pl.answer(i,get()[i])}});
}
$$(".dialog[data-dlg]").forEach(renderDialog);

/* ---------- exercises ----------
   Fields kept from the engine this course comes from: {t:"say", zh: prompt in Spanish, it: answer in Italian}.
   Options in Italian are written between braces: o:["{Io sono}","Yo soy"]. */
function updateToc(){$$("[data-sc]").forEach(function(s){var b=state.best[s.getAttribute("data-sc")];s.textContent=b?b[0]+"/"+b[1]:"";s.classList.toggle("done",!!b&&b[0]===b[1])})}
function itLine(t){return '<span class="zp"><span class="it-l" lang="it">'+itHTML(t)+'</span><button class="say sm" data-say="'+esc(t)+'" aria-label="Pakinggan">'+SPK+'</button></span>'}
function nrm(s){return s.toLowerCase().replace(/[’]/g,"'").replace(/[.,!?;:«»"¿¡…—–]/g," ").replace(/\s+-\s+|-/g," ").replace(/\s+/g," ").trim()}
function noAcc(s){return s.normalize("NFD").replace(/[̀-ͯ]/g,"")}
function renderSet(el,opt){
  opt=opt||{};var id=el.getAttribute("data-set"),items=opt.items||EX[id];if(!items)return;var res=new Array(items.length),one=!!opt.one,qs=[];
  if(one){el.classList.add("one");el.innerHTML='<div class="dhead"><span>'+(opt.head||"")+'</span><span><span class="score">0 / '+items.length+'</span></span></div>'}
  else el.innerHTML='<div class="dhead"><span>Ang unang sagot ang binibilang. Sa mga pagsasanay na «Magsalita», ikaw mismo ang magmamarka; sa pagsulat, gamitin ang mga titik na may accent sa ibaba.</span><span>Puntos <span class="score">0 / '+items.length+'</span>'+(state.best[id]?' · pinakamataas '+state.best[id][0]+'/'+state.best[id][1]:'')+'</span></div>';
  var scoreEl=$(".score",el);
  function mark(i,ok){if(res[i]!==undefined)return;res[i]=ok;var n=res.filter(Boolean).length,done=res.filter(function(x){return x!==undefined}).length;scoreEl.textContent=n+" / "+items.length;
    if(opt.onMark)opt.onMark(i,ok,items[i]);
    if(one){qs[i].classList.add(ok?"q-ok":"q-no");if(done<items.length){var nx=document.createElement("div");nx.className="acts qnext";nx.innerHTML='<button class="btn pri" type="button">Susunod →</button>';
        nx.firstChild.onclick=function(){nx.remove();qs[i].hidden=true;var q2=qs[i+1];q2.hidden=false;try{q2.scrollIntoView({block:"start",behavior:rmotion()?"auto":"smooth"})}catch(e){}var f=q2.querySelector(".lsp");if(f&&!opt.noAuto)f.click()};qs[i].appendChild(nx)}
      else if(opt.onDone)opt.onDone(n,items.length,res);return}
    if(done===items.length){var b=state.best[id];if(!b||n>=b[0]){state.best[id]=[n,items.length];save();updateToc()}var r=document.createElement("div");r.className="acts";r.style.marginLeft="0";r.innerHTML='<button class="btn pri">Ulitin</button>';r.firstChild.onclick=function(){renderSet(el)};el.appendChild(r)}}
  items.forEach(function(it,i){
    var q=document.createElement("div");q.className="q";
    if(typeof exExtra==="function"&&exExtra(q,it,i,mark)){if(one&&i>0)q.hidden=true;qs.push(q);el.appendChild(q);return}
    var tag=it.t==="say"?'<span class="qtag say-t">'+MIC+'Magsalita</span>':it.t==="ord"?'<span class="qtag">Pagsunud-sunurin</span>':it.t==="dict"?'<span class="qtag wr-t">Diktasyon</span>':it.t==="type"?'<span class="qtag wr-t">Kumpletuhin</span>':(it.au?'<span class="qtag ear-t">'+SPK+'Makinig</span>':'<span class="qtag">Pumili</span>');
    if(it.t==="dict"||it.t==="type"){
      var isD=it.t==="dict";
      q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+(isD?'Makinig at isulat sa Italyano ang narinig mo.':mixHTML(it.q))+'</span></div>'+
        (isD?'<div class="acts"><button class="btn pri lsp" type="button">'+SPK+' Makinig</button><span class="lsh">Puwede kang makinig nang ilang beses mo gusto.</span></div>':'')+
        '<div class="tin-row"><input class="tin" type="text" lang="it" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Sagot"><button class="btn pri ck" type="button">Suriin</button></div>'+
        '<div class="acc" aria-label="Mga titik na may accent">'+["à","è","é","ì","ò","ù"].map(function(c){return '<button type="button" tabindex="-1">'+c+'</button>'}).join("")+'</div><div class="expl"></div>';
      var inp=$(".tin",q),exT=$(".expl",q),ck=$(".ck",q);
      if(isD)$(".lsp",q).onclick=function(){speak(it.au)};
      $$(".acc button",q).forEach(function(b){b.onmousedown=function(e){e.preventDefault()};b.onclick=function(){var p=inp.selectionStart||inp.value.length;inp.value=inp.value.slice(0,p)+b.textContent+inp.value.slice(inp.selectionEnd||p);inp.focus();try{inp.setSelectionRange(p+1,p+1)}catch(e){}}});
      function check(){if(q.dataset.locked)return;var v=inp.value.trim();if(!v){exT.innerHTML="Isulat muna ang sagot.";return}
        var ans=it.a||[it.au],ok=ans.some(function(a){return nrm(a)===nrm(v)}),near=!ok&&ans.some(function(a){return noAcc(nrm(a))===noAcc(nrm(v))});
        q.dataset.locked="1";inp.disabled=true;ck.disabled=true;inp.classList.add(ok||near?"ok":"no");
        exT.innerHTML=(ok?'<b class="ok">Tama!</b> ':near?'<b class="ok">Halos tama!</b> Pansinin ang mga accent. ':'<b class="no">Hindi pa eksakto.</b> ')+'Sagot: '+itLine(isD?it.au:(it.full||ans[0]))+(it.e?' '+mixHTML(it.e):'');
        if(!isD)speak(it.full||ans[0]);mark(i,ok||near)}
      ck.onclick=check;inp.onkeydown=function(e){if(e.key==="Enter"){e.preventDefault();check()}};
    }else if(it.t==="say"){
      q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+'Sabihin ito sa Italyano, nang malakas: <b>'+mixHTML(it.zh)+'</b></span></div>'+
        '<div class="acts"><button class="btn pri sv">Tapos na, tingnan ang sagot</button></div>'+
        '<div class="expl sayans" hidden>'+itLine(it.it)+(it.e?'<span class="sayn">'+mixHTML(it.e)+'</span>':'')+'</div>'+
        '<div class="acts sg" hidden><span class="sgq">Makinig at ihambing. Kumusta?</span><button class="btn sgno">Isa pa</button><button class="btn pri sgok">Ayos</button></div>';
      var ans=$(".sayans",q),sg=$(".sg",q);
      $(".sv",q).onclick=function(){this.disabled=true;ans.hidden=false;sg.hidden=false;speak(it.it)};
      $(".sgok",q).onclick=function(){fin(true)};$(".sgno",q).onclick=function(){fin(false)};
      function fin(ok){$$(".sg button",q).forEach(function(b){b.disabled=true});$(".sgq",q).innerHTML=ok?'<b class="ok">Magaling!</b> Ulitin pa nang dalawang beses kasabay ng ▶.':'<b class="no">Ayos lang.</b> Pindutin ang ▶, ulitin kasabay ng boses at subukan muli.';mark(i,ok)}
    }else if(it.t==="ord"){
      q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+mixHTML(it.q)+'</span></div>';
      var line=document.createElement("div");line.className="ordline";var pool=document.createElement("div");pool.className="ordpool";
      var w=shuffle(it.w),g=0;while(w.join(" ")===it.a[0]&&g++<10)w=shuffle(it.w);
      w.forEach(function(t){var b=document.createElement("button");b.className="tok";b.setAttribute("lang","it");b.textContent=t;b.onclick=function(){if(q.dataset.locked)return;(b.parentNode===pool?line:pool).appendChild(b)};pool.appendChild(b)});
      var acts=document.createElement("div");acts.className="acts";acts.innerHTML='<button class="btn pri">Suriin</button><button class="btn">Magsimula muli</button>';
      var ex=document.createElement("div");ex.className="expl";
      acts.children[1].onclick=function(){if(q.dataset.locked)return;$$(".tok",line).forEach(function(t){pool.appendChild(t)})};
      acts.children[0].onclick=function(){
        if(pool.children.length){ex.innerHTML="Gamitin muna ang lahat ng salita.";return}
        var s=$$(".tok",line).map(function(t){return t.textContent}).join(" ");var ok=it.a.some(function(a){return nrm(a)===nrm(s)});
        q.dataset.locked="1";acts.children[0].disabled=true;acts.children[1].disabled=true;
        ex.innerHTML=(ok?'<b class="ok">Tama!</b> Ahora dila en voz alta:':'<b class="no">Hindi pa eksakto.</b> Sagot:')+itLine(it.a[0]);speak(it.a[0]);mark(i,ok)};
      q.appendChild(line);q.appendChild(pool);q.appendChild(acts);q.appendChild(ex);
    }else{
      q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+mixHTML(it.q)+'</span></div>'+
        (it.au?'<div class="acts"><button class="btn pri lsp">'+SPK+' Makinig</button><span class="lsh">Puwede kang makinig nang ilang beses. Lalabas ang teksto pagkatapos sumagot.</span></div><div class="expl lsr" hidden></div>':'');
      if(it.au)$(".lsp",q).onclick=function(){speak(it.au)};
      var opts=document.createElement("div");opts.className="opts";var ex2=document.createElement("div");ex2.className="expl";
      var order=shuffle(it.o.map(function(_,k){return k}));
      order.forEach(function(k){var o=it.o[k],fr=isFr(o);var b=document.createElement("button");b.className="opt";if(fr)b.setAttribute("lang","it");b.textContent=fr?frSp(unbrace(o)):o.replace(/[{}]/g,"");
        b.onclick=function(){var ok=k===0;$$(".opt",opts).forEach(function(x){x.disabled=true});opts.children[order.indexOf(0)].classList.add("right");if(!ok)b.classList.add("wrong");
          ex2.innerHTML=(ok?'<b class="ok">Tama!</b> ':'<b class="no">Hindi.</b> ')+mixHTML(it.e||"")+(isFr(it.o[0])&&/\s/.test(unbrace(it.o[0]))?' '+itLine(unbrace(it.o[0])):'');
          if(it.au){var r=$(".lsr",q);r.hidden=false;r.innerHTML='Narinig mo: '+itLine(it.au)}
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
var fr=$("#frasario");if(fr){fr.innerHTML=FRASI.map(function(g){return '<h3>'+esc(g[0])+'</h3><div class="exs">'+g[1].map(function(r){return '<div class="ex"><div class="ex-body"><div class="it-l" lang="it">'+itHTML(r[0])+'</div><div class="tr">'+esc(r[1])+'</div></div><button class="say" data-say="'+esc(r[0])+'" aria-label="Pakinggan">'+SPK+'</button></div>'}).join("")+'</div>'}).join("")}

/* ---------- vocabulary ----------
   gender: m, f, mp / fp (plural only). */
function art(w,g){if(g==="mp")return /^[aeiou]/i.test(w)?"gli ":(/^(s[^aeiou]|z|gn|ps|y)/i.test(w)?"gli ":"i ");if(g==="fp")return "le ";
  if(g==="m")return /^[aeiouh]/i.test(w)?"l'":(/^(s[^aeiou]|z|gn|ps|y)/i.test(w)?"lo ":"il ");if(g==="f")return /^[aeiou]/i.test(w)?"l'":"la ";return ""}
function gOf(g){return g?g.charAt(0):""}
function wordHTML(r){var g=gOf(r[2]),a=art(r[0],r[2]);return g?'<span class="'+g+'"><span class="art">'+a+'</span>'+esc(r[0])+'</span>':esc(r[0])}
function gLabel(g){return {m:"panlalaki",f:"pambabae",mp:"panlalaki, maramihan",fp:"pambabae, maramihan"}[g]||""}
function lessonLabel(L){return L.kind==="lesson"?"Aralin "+L.n+" · "+L.t:L.t}
var vt=$("#vocabtbl");
function buildVocab(){if(!vt||vt.dataset.done)return;vt.dataset.done="1";var rowsV=['<tr><th>Italyano</th><th>Filipino</th><th>Kasarian</th><th></th></tr>'];
  LESSONS.forEach(function(L){var ws=VOC[L.id];if(!ws||!ws.length)return;rowsV.push('<tr class="grp"><td colspan="4">'+esc(lessonLabel(L))+'</td></tr>');
    ws.forEach(function(r){rowsV.push('<tr><td class="itc" lang="it">'+wordHTML(r)+'</td><td>'+esc(r[1])+'</td><td class="fc-g">'+gLabel(r[2])+'</td><td><button class="say sm" data-say="'+esc(art(r[0],r[2])+r[0])+'" aria-label="Pakinggan">'+SPK+'</button></td></tr>')})});
  vt.innerHTML=rowsV.join("");$$('td[lang="it"]',vt).forEach(frZone)}
/* words of each lesson */
function renderWords(el){var ws=VOC[el.getAttribute("data-voc")]||[];
  el.innerHTML=ws.map(function(r){return '<div class="wd"><span class="wi" lang="it">'+wordHTML(r)+'</span><span class="wz">'+esc(r[1])+'</span><button class="say sm" data-say="'+esc(art(r[0],r[2])+r[0])+'" aria-label="Pakinggan">'+SPK+'</button>'+wordExHTML(r)+'</div>'}).join("")}
$$(".words[data-voc]").forEach(renderWords);
/* I can */
$$("ul.cando[data-cando]").forEach(function(ul){var id=ul.getAttribute("data-cando"),lis=$$("li",ul),st=state.can[id]||[];
  lis.forEach(function(li,i){var lab=document.createElement("label"),cb=document.createElement("input");cb.type="checkbox";cb.checked=!!st[i];
    lab.appendChild(cb);lab.addEventListener("click",function(e){if(e.target.closest&&e.target.closest(".w"))e.preventDefault()});var sp=document.createElement("span");sp.innerHTML=li.innerHTML;lab.appendChild(sp);li.innerHTML="";li.appendChild(lab);
    cb.onchange=function(){var a=state.can[id]||[];a[i]=cb.checked;state.can[id]=a;save();cnt()}});
  var c=document.createElement("li");c.className="cnt";ul.appendChild(c);
  function cnt(){var a=state.can[id]||[],k=a.filter(Boolean).length;c.textContent=k===lis.length?"Tapos lahat! Puwede ka nang lumipat sa susunod na aralin.":"Tapos: "+k+" / "+lis.length}
  cnt()});

/* ---------- flashcards ---------- */
function bx(w){return SRS.box(w[0])}
var fcCur=null,shown=false;
function FW(){var lim=typeof prefs.fcr==="number"?prefs.fcr:-1;if(lim<0){var hi=0;LESSONS.forEach(function(L,li){if(state.best[L.id]||(typeof pathStarted==="function"&&pathStarted(L.id)))hi=li});lim=Math.max(hi+1,LESSONS.findIndex(function(L){return L.id==="l8"}))}return W.filter(function(w){return w[3]<=lim})}
function pick(){return SRS.pick(FW(),fcCur)}
function drawBoxes(){var el=$("#fcboxes");if(!el)return;var c=[0,0,0,0,0];FW().forEach(function(w){c[bx(w)-1]++});var mx=Math.max.apply(null,c)||1;
  el.innerHTML=c.map(function(n,i){return '<div><div class="bar"><i style="height:'+(n/mx*100)+'%"></i></div><b>'+n+'</b><span>caja '+(i+1)+'</span></div>'}).join("")}
function drawCard(auto){var card=$("#fccard");if(!card)return;var w=fcCur,m=prefs.fcm,full=art(w[0],w[2])+w[0];
  var word='<div class="fc-word" lang="it">'+wordHTML(w)+'</div>',gtxt=gLabel(w[2]);
  var front=m==="ear"?'<button class="fc-ear" id="fcplay" type="button" aria-label="Pakinggan ang salita">'+SPK+'</button><p class="fc-hint">Makinig: ano ang ibig sabihin? Sabihin, saka tingnan ang sagot.</p>'
    :m==="say"?'<p class="fc-zh">'+esc(w[1])+'</p><p class="fc-hint">Sabihin ito sa Italyano nang malakas'+(w[2]?' (kasama ang artikulo)':'')+', saka tingnan ang sagot.</p>'
    :word+'<p class="fc-hint">Sabihin ang ibig sabihin, saka tingnan ang sagot.</p>';
  card.innerHTML=shown?word+'<div class="fc-zh">'+esc(w[1])+'</div>'+(gtxt?'<div class="fc-g">'+gtxt+'</div>':'')+'<div class="acts" style="margin-left:0;justify-content:center"><button class="btn" id="fcno">Hindi ko alam</button><button class="btn pri" id="fcyes">Alam ko</button><button class="say" data-say="'+esc(full)+'" aria-label="Pakinggan">'+SPK+'</button></div>'
    :front+'<div class="acts" style="margin-left:0;justify-content:center"><button class="btn pri" id="fcshow">Ipakita</button></div><p class="fc-box">Kahon '+bx(w)+'</p>';
  if(shown){$("#fcno").onclick=function(){grade(false)};$("#fcyes").onclick=function(){grade(true)};speak(full)}
  else{$("#fcshow").onclick=function(){shown=true;drawCard()};var pb=$("#fcplay");if(pb){pb.onclick=function(){speak(full)};if(auto)speak(full)}}}
function grade(ok){SRS.grade(fcCur[0],ok,1);drawBoxes();next(true)}
function next(auto){fcCur=pick();shown=false;drawCard(auto)}
function drawReset(conf){var r=$("#fcreset");if(!r)return;r.innerHTML=conf?'<span>Ibalik ang lahat ng salita sa kahon 1?</span><button class="btn" id="rsy">Oo, i-reset</button><button class="btn" id="rsn">Kanselahin</button>':'<button class="btn" id="rs">I-reset ang mga kard</button>';
  if(conf){$("#rsy").onclick=function(){state.box={};save();SRS.reset();drawBoxes();next();drawReset(false)};$("#rsn").onclick=function(){drawReset(false)}}else{$("#rs").onclick=function(){drawReset(true)}}}
(function(){var sel=$("#fcrange");if(!sel)return;var cur=FW().length?FW()[FW().length-1][3]:0;
  sel.innerHTML=LESSONS.map(function(L,li){var n=W.filter(function(w){return w[3]<=li}).length;return (VOC[L.id]&&VOC[L.id].length)?'<option value="'+li+'"'+(li===cur?' selected':'')+'>Hanggang '+esc(lessonLabel(L))+' ('+n+' salita)</option>':''}).join("");
  sel.onchange=function(){prefs.fcr=+sel.value;savePrefs();drawBoxes();next()}})();
if($("#fccard")){drawBoxes();next();drawReset(false)}
function fcMode(m){prefs.fcm=m;savePrefs();$$("[data-fcm]").forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-fcm")===m?"true":"false")});shown=false;drawCard()}
$$("[data-fcm]").forEach(function(b){b.onclick=function(){fcMode(b.getAttribute("data-fcm"))};b.setAttribute("aria-pressed",b.getAttribute("data-fcm")===prefs.fcm?"true":"false")});

/* ---------- top bar ---------- */
$("#totop").onclick=function(){var rm=false;try{rm=matchMedia("(prefers-reduced-motion: reduce)").matches}catch(e){}try{window.scrollTo({top:0,behavior:rm?"auto":"smooth"})}catch(e){window.scrollTo(0,0)}};
function applyPrefs(){document.body.classList.toggle("no-tr",!prefs.tr);$("#tbtr").setAttribute("aria-pressed",prefs.tr?"true":"false");$("#tbtrl").textContent=prefs.tr?"oo":"hindi";$("#tbslow").setAttribute("aria-pressed",prefs.slow?"true":"false");$("#tbslowl").textContent=prefs.slow?"mabagal":"normal"}
$("#tbtr").onclick=function(){prefs.tr=!prefs.tr;savePrefs();applyPrefs()};
$("#tbslow").onclick=function(){prefs.slow=!prefs.slow;savePrefs();applyPrefs();speak("Ciao!")};
applyPrefs();

/* ---------- final listening ---------- */
function setupReading(root){var btn=$("#rdplay",root);if(!btn)return;var rd=$("#reading",root),lines=$$(".ex",rd);
  var pl=Player(function(){return lines.map(function(l){return {el:l,say:$(".say",l).getAttribute("data-say"),pitch:1.1,mine:false}})},{busy:function(){btn.textContent="■ Itigil";btn.dataset.on="1"},idle:function(){btn.textContent="▶ Pakinggan lahat";btn.dataset.on=""}});
  btn.onclick=function(){if(btn.dataset.on)pl.stop();else pl.play()};
  var t=$("#tgtxt",root);t.onclick=function(){var h=rd.classList.toggle("hide-it");t.textContent=h?"Ipakita ang tekstong Italyano":"Itago ang tekstong Italyano";t.setAttribute("aria-pressed",h?"true":"false")}}
setupReading(document);

/* ---------- conjugator ---------- */
(function(){var sel=$("#cjverb");if(!sel)return;var tense="pr",rows=[],groups={};
  VERBS.forEach(function(v,i){var k=v.k||v.g;(groups[k]=groups[k]||[]).push(i)});
  sel.innerHTML=["irr","are","ere","ire","isc","rif"].map(function(k){return '<optgroup label="'+GRP[k]+'">'+groups[k].map(function(i){return '<option value="'+i+'">'+VERBS[i].i+' · '+VERBS[i].z+'</option>'}).join("")+'</optgroup>'}).join("");
  var btn=$("#cjplay");
  var pl=Player(function(){return rows},{busy:function(){btn.textContent="■ Itigil";btn.dataset.on="1"},idle:function(){btn.textContent="▶ Pakinggan lahat";btn.dataset.on=""}});
  btn.onclick=function(){if(btn.dataset.on)pl.stop();else pl.play()};
  function draw(){if(btn.dataset.on)pl.stop();var v=VERBS[+sel.value],F=cjForms(v,tense);
    var irr=v.k==="irr"?'<span class="badge irr">irregular</span>':(v.pp||v.fu?'<span class="badge irr">parcialmente irregular</span>':'<span class="badge">regular</span>');
    $("#cjinfo").innerHTML='<span class="cj-inf" lang="it">'+v.i+'</span><span>'+v.z+'</span><span>'+GRP[v.k||v.g]+'</span>'+irr;
    $("#cjtable").innerHTML='<tr><th>Panauhan</th><th lang="it">'+TN[tense]+'</th><th>Filipino</th><th></th></tr>'+F.map(function(f,i){
      var say=cjSay(v,tense,i,f),shown=esc(say).replace(esc(f.p),f.h);
      return '<tr><td class="cj-p" lang="it">'+PZ[i]+'</td><td class="cj-f" lang="it">'+shown+'</td><td class="cj-zh">'+PES[i]+'</td><td class="cj-play"><button class="say sm" type="button" data-say="'+esc(say)+'" aria-label="Pakinggan">'+SPK+'</button></td></tr>'}).join("");
    rows=$$("#cjtable tr").slice(1).map(function(tr){return {el:tr,say:$(".say",tr).getAttribute("data-say"),mine:false}});
    $("#cjtip").textContent=TIP[tense]+(tense==="pp"?" Pantulong na pandiwa: "+(v.es?"essere":"avere")+"; participio: "+ppOf(v)+(v.es?" (umaayon sa kasarian at bilang ng simuno).":"."):"")}
  sel.onchange=draw;
  $$("#cjtense .btn").forEach(function(b){b.onclick=function(){tense=b.getAttribute("data-t");$$("#cjtense .btn").forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")});draw()}});
  draw();
})();

/* ---------- light / dark theme ---------- */
(function(){var b=$("#tbtheme");if(!b)return;var TK=KEY+"-theme",root=document.documentElement,mq=null;try{mq=matchMedia("(prefers-color-scheme: dark)")}catch(e){}
  var MOON='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1z"/></svg>';
  function cur(){return root.getAttribute("data-theme")||(mq&&mq.matches?"dark":"light")}
  function draw(){var d=cur()==="dark";b.setAttribute("aria-pressed",d?"true":"false");b.title=d?"Madilim na tema: oo":"Madilim na tema: hindi";b.setAttribute("aria-label","Madilim na tema");b.innerHTML=MOON+'<span class="tbl">madilim</span>'}
  b.onclick=function(){var n=cur()==="dark"?"light":"dark";root.setAttribute("data-theme",n);try{localStorage.setItem(TK,n)}catch(e){}draw()};
  if(mq){try{mq.addEventListener("change",draw)}catch(e){}}
  draw();
})();

/* ---------- every Italian word can be tapped ----------
   Italian lives in .it / .itc / .it-l elements (the build turns {braces} in lesson pages into <i class="it">). */
var FRSKIP="button,.w,script,style,.tok,.opts,.fc-card,#fcboxes,.toc,.stats,.kicker,.tip,.legend,#alfabeto,.conjugator,.demo,.map,.hero-card,.xref,.words,input,select,.fc-range";
function frText(root){var out=[],tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null),n;while((n=tw.nextNode())){if(!n.nodeValue.trim())continue;var p=n.parentElement;if(!p||p.closest(".w,button,script,style,input,select"))continue;out.push(n)}return out}
function frZone(el){
  if(el.closest(".w,button")||el.querySelector(".w"))return;
  el.setAttribute("lang","it");
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
  if(typeof EXW!=="undefined")Object.keys(EXW).forEach(function(k){fr(EXW[k][0])});
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
