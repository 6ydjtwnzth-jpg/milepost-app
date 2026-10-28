var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var KEY="cinese-per-italiani-v1";
var state={best:{},box:{},can:{}};
try{var raw=localStorage.getItem(KEY);if(raw){var p=JSON.parse(raw);state.best=p.best||{};state.box=p.box||{};state.can=p.can||{}}}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify({best:state.best,box:state.box,can:state.can}))}catch(e){}}
var prefs={tr:true,slow:false,fcm:"ear",furi:true,hz:true};
try{var pr=JSON.parse(localStorage.getItem(KEY+"-prefs")||"{}");["tr","slow","fcm","furi","hz","fcr"].forEach(function(k){if(pr[k]!==undefined)prefs[k]=pr[k]})}catch(e){}
function savePrefs(){try{localStorage.setItem(KEY+"-prefs",JSON.stringify(prefs))}catch(e){}}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
function rmotion(){try{return matchMedia("(prefers-reduced-motion: reduce)").matches}catch(e){return false}}

/* ---------- voce ----------
   File audio pre-registrati (audio/<hash>.mp3); se manca un file si usa la voce cinese del dispositivo. */
var voice=null,hasTTS=("speechSynthesis" in window),speakSeq=0,players=[];
var AUD=null;try{AUD=new Audio();AUD.preload="auto"}catch(e){}
function cyrb53(str){var h1=0xdeadbeef,h2=0x41c6ce57;for(var i=0,ch;i<str.length;i++){ch=str.charCodeAt(i);h1=Math.imul(h1^ch,2654435761);h2=Math.imul(h2^ch,1597334677)}
  h1=Math.imul(h1^(h1>>>16),2246822507);h1^=Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507);h2^=Math.imul(h1^(h1>>>13),3266489909);return 4294967296*(2097151&h2)+(h1>>>0)}
function akey(t){return String(t).trim().replace(/\s+/g," ")}
function audioSrc(t){return "audio/"+cyrb53(akey(t)).toString(36)+".mp3"}
function pickVoice(){if(!hasTTS)return;try{var vs=speechSynthesis.getVoices();voice=vs.filter(function(v){return /^zh[-_]CN/i.test(v.lang)})[0]||vs.filter(function(v){return /^zh/i.test(v.lang)&&!/HK|TW|yue/i.test(v.lang)})[0]||null}catch(e){}}
if(hasTTS){pickVoice();try{speechSynthesis.onvoiceschanged=pickVoice}catch(e){}}
function stopAll(){try{if(AUD)AUD.pause()}catch(e){}try{if(hasTTS)speechSynthesis.cancel()}catch(e){}}
function stopPlayers(except){players.forEach(function(p){if(p!==except)p.stop(true)})}
function ttsSpeak(t,fin,wait){var txt=jplain(t);
  if(!hasTTS){if(wait)setTimeout(fin,Math.max(800,txt.length*160));return}
  try{speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(txt);u.lang="zh-CN";if(voice)u.voice=voice;u.rate=prefs.slow?.65:.95;
    u.onend=fin;u.onerror=function(){setTimeout(fin,200)};speechSynthesis.speak(u);
    if(wait)setTimeout(fin,Math.max(2500,txt.length*(prefs.slow?260:180)));
  }catch(e){if(wait)setTimeout(fin,800)}}
function speak(t,cb,opt){
  opt=opt||{};if(!opt.chain)stopPlayers();
  var my=++speakSeq,done=false,fell=false;
  function fin(){if(done)return;done=true;if(cb&&my===speakSeq)cb()}
  function fallback(){if(fell||done||my!==speakSeq)return;fell=true;ttsSpeak(t,fin,!!cb)}
  stopAll();if(!AUD){ttsSpeak(t,fin,!!cb);return}
  try{AUD.onended=function(){if(my===speakSeq)fin()};AUD.onerror=fallback;AUD.src=audioSrc(t);
    var r=prefs.slow?.75:1;AUD.defaultPlaybackRate=r;AUD.playbackRate=r;try{AUD.preservesPitch=true}catch(e){}
    var pp=AUD.play();if(pp&&pp.catch)pp.catch(function(err){if(err&&err.name==="AbortError")return;fallback()});
  }catch(e){fallback()}}
var SPK='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
var MIC='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>';

/* ---------- parole cinesi cliccabili ---------- */
function jpHTML(s,plain){var out=[];jtoks(s).forEach(function(t){var su=jsurf(t);
  if(JP_PUNCT.test(su)||!JRUN.test(su)&&!/[A-Za-z0-9]/.test(su)){var pu='<span class="pu">'+esc(su)+'</span>';
    if(out.length&&/^[，。！？、：；”’）》…]/.test(su))out[out.length-1]='<span class="nw">'+out[out.length-1]+pu+'</span>';else out.push(pu);return}
  if(!JRUN.test(su)){out.push('<span class="tk lat">'+esc(su)+'</span>');return}
  out.push(plain?'<span class="tk">'+jruby(t)+'</span>':'<span class="w" tabindex="0" role="button" data-say="'+esc(t)+'">'+jruby(t)+'</span>')});
  return out.join("")}
function jLine(s){return '<span class="jl" lang="zh-CN">'+jpHTML(s)+'</span><span class="ro">'+pyLine(s)+'</span>'}
var MIXRE=/([\u3400-\u9fff\u3007](?:[\u3400-\u9fff\u3007，。！？、：；“”…—]|\[[^\]]+\]| (?=[\u3400-\u9fff\u3007，。！？、：；“”…—]))*)/;
/* characters without a [pinyin] are mentions of the character itself (strokes, radicals): show them plain */
var BAREKJ=/[\u3400-\u9fff\u3007](?![\u3400-\u9fff\u3007]*\[)/;
function mixHTML(text){return String(text).split(MIXRE).map(function(part,i){if(i%2===0)return esc(part);
  if(BAREKJ.test(part))return '<span class="jx hzb" lang="zh-CN">'+esc(part)+'</span>';
  return '<span class="jx" lang="zh-CN">'+jpHTML(part.replace(/ +$/,""))+'</span>'+(/ $/.test(part)?" ":"")}).join("")}
function hasJ(s){return JRUN.test(String(s))}
/* meaning of a clicked word: dictionary first, then readable rules (numbers, measure words, particles, negation, verb + complement) */
var ZDIG={"零":0,"〇":0,"一":1,"二":2,"两":2,"三":3,"四":4,"五":5,"六":6,"七":7,"八":8,"九":9};
function zhNum(x){if(!/^[零〇一二两三四五六七八九十百千万]+$/.test(x))return null;var tot=0,sec=0,cur=0;
  for(var i=0;i<x.length;i++){var c=x[i];if(c in ZDIG)cur=ZDIG[c];else if(c==="十"||c==="百"||c==="千"){sec+=(cur||1)*{"十":10,"百":100,"千":1000}[c];cur=0}else if(c==="万"){tot+=((sec+cur)||1)*10000;sec=0;cur=0}}
  return tot+sec+cur}
var MESI=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];
var GIORNI=["","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"];
var MW={"个":"(classificatore generico)","杯":"bicchieri, tazze","本":"libri","张":"oggetti piatti: fogli, biglietti, tavoli","件":"vestiti, faccende","口":"persone in famiglia","只":"animali","条":"cose lunghe: pantaloni, strade, pesci","瓶":"bottiglie","碗":"ciotole","块":"yuan; pezzi","次":"volte","遍":"volte (dall'inizio alla fine)","辆":"veicoli","位":"persone (cortese)","双":"paia","份":"porzioni","岁":"anni di età","天":"giorni","年":"anni","分":"minuti","刻":"quarti d'ora","点":"ore (dell'orologio)","层":"piani","页":"pagine","种":"tipi","些":"alcuni","家":"negozi, aziende","门":"materie","节":"lezioni (ore di lezione)","公里":"chilometri","米":"metri","元":"yuan","毛":"decimi di yuan","号":"giorno del mese; numero","月":"mese","小时":"ore (durata)","分钟":"minuti","星期":"settimane","个月":"mesi","个小时":"ore (durata)","斤":"mezzo chilo"};
function numMeaning(sf){var n=zhNum(sf);if(n!=null)return String(n);
  var m=sf.match(/^第(.+)$/);if(m){var k=zhNum(m[1]);if(k!=null)return k+"° (ordinale)"}
  m=sf.match(/^([零〇一二两三四五六七八九十百千万几多]+)(.+)$/);if(m&&MW[m[2]]){var v=m[1]==="几"?"quanti/quante?":m[1]==="多"?"più di":zhNum(m[1]);
    if(m[2]==="月"&&typeof v==="number")return MESI[v-1]||v+" mesi";if(m[2]==="点"&&typeof v==="number")return "le "+v+" (ora)";if(m[2]==="号"&&typeof v==="number")return "il giorno "+v;
    if(m[2]==="岁")return v+" anni (età)";return v+" + "+m[2]+" ("+MW[m[2]]+")"}
  m=sf.match(/^星期([一二三四五六日天])$/);if(m)return m[1]==="日"||m[1]==="天"?"domenica":GIORNI[zhNum(m[1])];
  return ""}
var PART={"了":"azione compiuta o cambiamento (了)","过":"esperienza: l'ho già fatto (过)","着":"stato che dura (着)","们":"plurale (们)","的":"di… / che… (的)","吗":"domanda sì/no (吗)","呢":"e…? / sta… (呢)","吧":"proposta: dai, …! (吧)","得":"come si fa (得)"};
function partsMeaning(sf){var m=sf.match(/^(.+?)(了|过|着|们|的|吗|呢|吧)$/);if(m&&DICT[m[1]])return DICT[m[1]]+" + "+PART[m[2]];
  m=sf.match(/^(不|没|没有|别)(.+)$/);if(m&&DICT[m[2]])return {"不":"non ","没":"non (nel passato) ","没有":"non (nel passato) ","别":"non… ! (divieto) "}[m[1]]+DICT[m[2]];
  m=sf.match(/^(.+?)(得|不)(.+)$/);if(m&&DICT[m[1]]&&DICT[m[3]]&&m[1].length<=2&&m[3].length<=2)return (m[2]==="得"?"riuscire a ":"non riuscire a ")+DICT[m[1]]+" (+ "+m[3]+": "+DICT[m[3]]+")";
  if(sf.length===2&&sf[0]===sf[1]&&DICT[sf[0]])return DICT[sf[0]]+" (ripetuto: «un po'», in modo leggero)";
  m=sf.match(/^(.)一\1$/);if(m&&DICT[m[1]])return DICT[m[1]]+" un po' (V一V)";
  return ""}
function meaning(t){var s=jsurf(t),hit=DICT[t]||DICT[s];if(hit)return hit;
  var r=numMeaning(s)||partsMeaning(s);if(r)return r;
  /* compound: meanings of the pieces, longest pieces first */
  if(s.length>1){var out=[],i=0;while(i<s.length){var L=Math.min(4,s.length-i),f="";for(;L>0;L--){var p=s.substr(i,L);if(DICT[p]&&!(L===s.length)){f=p;break}}
      if(!f)return "";out.push(f+": "+DICT[f]);i+=f.length}return out.join(" + ")}
  return ""}
/* ---------- audio al clic ---------- */
document.addEventListener("click",function(e){var b=e.target.closest("[data-say]");if(b)speak(b.getAttribute("data-say"))});
document.addEventListener("keydown",function(e){var t=e.target;if((e.key==="Enter"||e.key===" ")&&t.classList&&t.classList.contains("w")){e.preventDefault();speak(t.getAttribute("data-say"))}});

/* ---------- tooltip: carattere, pinyin, significato ---------- */
var tip=document.createElement("div");tip.className="tip";tip.setAttribute("role","tooltip");tip.hidden=true;document.body.appendChild(tip);
var tipTimer=null,tipFor=null;
function showTip(w){var h=w.getAttribute("data-say"),s=jsurf(h),m=meaning(h);
  tip.innerHTML='<span class="tip-w" lang="zh-CN">'+esc(s)+'</span><span class="tip-r">'+pyLine(h)+'</span>'+(m?'<span class="tip-m">'+esc(m)+'</span>':'');
  tip.hidden=false;tipFor=w;
  var rc=w.getBoundingClientRect(),tw=tip.offsetWidth,th=tip.offsetHeight,vw=document.documentElement.clientWidth;
  var x=Math.max(8,Math.min(vw-tw-8,rc.left+rc.width/2-tw/2)),y=rc.top-th-8;if(y<8)y=rc.bottom+8;
  tip.style.left=x+"px";tip.style.top=y+"px"}
function hideTip(){tip.hidden=true;tipFor=null;clearTimeout(tipTimer)}
document.addEventListener("mouseover",function(e){var w=e.target.closest&&e.target.closest(".w");if(w&&w!==tipFor)showTip(w);else if(!w&&tipFor)hideTip()});
document.addEventListener("focusin",function(e){var w=e.target.closest&&e.target.closest(".w");if(w)showTip(w)});
document.addEventListener("focusout",function(e){if(e.target===tipFor)hideTip()});
document.addEventListener("click",function(e){var w=e.target.closest&&e.target.closest(".w");if(w){showTip(w);clearTimeout(tipTimer)}else if(tipFor&&!(e.target.closest&&e.target.closest(".tip")))hideTip()});
window.addEventListener("scroll",function(){if(tipFor)hideTip()},{passive:true});

/* ---------- esempi ---------- */
function renderExamples(root){$$("div[data-zh]",root).forEach(function(d){if(d.classList.contains("ex"))return;var j=d.getAttribute("data-zh");d.className="ex";
  d.innerHTML='<div class="ex-body"><div class="it-l">'+jLine(j)+'</div><div class="tr">'+esc(d.getAttribute("data-it")||"")+'</div></div><button class="say" data-say="'+esc(j)+'" aria-label="Ascolta">'+SPK+'</button>'})}
renderExamples(document);

/* ---------- lettore continuo ---------- */
function Player(getLines,ui){
  var p={tok:null,wait:null};
  p.stop=function(quiet){p.tok=null;p.wait=null;if(!quiet){speakSeq++;stopAll()}getLines().forEach(function(l){l.el.classList.remove("now")});ui.idle()};
  p.play=function(){stopPlayers(p);var tok={};p.tok=tok;ui.busy();step(0);
    function step(i){if(p.tok!==tok)return;var L=getLines();L.forEach(function(l){l.el.classList.remove("now")});
      if(i>=L.length){p.tok=null;ui.idle();return}
      var l=L[i];l.el.classList.add("now");try{l.el.scrollIntoView({block:"nearest",behavior:"smooth"})}catch(e){}
      if(l.mine&&!l.el.classList.contains("open")){p.wait={i:i,go:function(){step(i+1)},tok:tok};return}
      speak(l.say,function(){setTimeout(function(){step(i+1)},500)},{chain:true})}};
  p.answer=function(i,l){l.el.classList.add("open");var w=p.wait;p.wait=null;
    speak(l.say,function(){if(w&&w.i===i&&p.tok===w.tok)setTimeout(w.go,500)},{chain:!!w})};
  players.push(p);return p}

/* ---------- dialoghi ---------- */
function renderDialog(el){
  var id=el.getAttribute("data-dlg"),L=DLG[id];if(!L)return;
  el.innerHTML='<div class="dl-head"><h3>Dialogo<i lang="zh-CN">对话</i></h3><div class="dl-ctrl"><button class="btn pri dl-play" type="button">'+SPK+' Ascolta tutto</button><button class="btn dl-role" type="button" aria-pressed="false">'+MIC+' Faccio io B</button></div></div>'+
   '<div class="dl-lines">'+L.map(function(r,i){return '<div class="dl who'+r[0]+'" data-i="'+i+'"><span class="who">'+r[0]+'</span><div class="dl-body"><div class="dl-text"><div class="it-l">'+jLine(r[1])+'</div><div class="tr">'+esc(r[2])+'</div></div><div class="dl-turn">Tocca a te. Di\' ad alta voce: <b>«'+esc(r[2])+'»</b><button class="btn pri dl-next" type="button">Fatto, ascolta l\'originale</button></div></div><button class="say" data-say="'+esc(r[1])+'" aria-label="Ascolta">'+SPK+'</button></div>'}).join("")+'</div>';
  var lines=$$(".dl",el),role=false,playBtn=$(".dl-play",el),roleBtn=$(".dl-role",el);
  function get(){return lines.map(function(ln,i){return {el:ln,say:L[i][1],mine:role&&L[i][0]==="B"}})}
  var pl=Player(get,{busy:function(){playBtn.innerHTML="■ Stop";playBtn.dataset.on="1"},idle:function(){playBtn.innerHTML=SPK+" Ascolta tutto";playBtn.dataset.on=""}});
  playBtn.onclick=function(){if(playBtn.dataset.on)pl.stop();else pl.play()};
  roleBtn.onclick=function(){role=!role;el.classList.toggle("role",role);roleBtn.setAttribute("aria-pressed",role?"true":"false");lines.forEach(function(l){l.classList.remove("open")});pl.stop()};
  lines.forEach(function(ln,i){$(".dl-next",ln).onclick=function(){pl.answer(i,get()[i])}})}
$$(".dialog[data-dlg]").forEach(renderDialog);

/* ---------- esercizi ---------- */
function updateToc(){$$("[data-sc]").forEach(function(s){var b=state.best[s.getAttribute("data-sc")];s.textContent=b?b[0]+"/"+b[1]:"";s.classList.toggle("done",!!b&&b[0]===b[1])})}
function jLineSay(t){return '<span class="zp"><span class="it-l">'+jLine(t)+'</span><button class="say sm" data-say="'+esc(t)+'" aria-label="Ascolta">'+SPK+'</button></span>'}
/* pronunciation line: pinyin under the characters (unless pinyin is switched off) */
function pronHTML(m){if(!hasJ(m)||!prefs.furi)return "";return '<span class="opron"><span class="pr">'+pyLine(m)+'</span></span>'}
function optHTML(o,it){if(it&&it.p&&!hasJ(o))return '<span class="pyo">'+pyHTML(o)+'</span>';return hasJ(o)?'<span class="ow">'+jpHTML(o,true)+'</span>'+pronHTML(o):esc(o)}
function renderSet(el,opt){
  opt=opt||{};var id=el.getAttribute("data-set"),items=opt.items||EX[id];if(!items)return;var res=new Array(items.length),one=!!opt.one,qs=[];
  if(one){el.classList.add("one");el.innerHTML='<div class="dhead"><span>'+(opt.head||"")+'</span><span><span class="score">0 / '+items.length+'</span></span></div>'}
  else el.innerHTML='<div class="dhead"><span>Conta la prima risposta. Il «Di\' ad alta voce» lo valuti tu; nei dettati e nei completamenti puoi scrivere in caratteri o in pinyin, con o senza toni.</span><span>Punti <span class="score">0 / '+items.length+'</span>'+(state.best[id]?' · record '+state.best[id][0]+'/'+state.best[id][1]:'')+'</span></div>';
  var scoreEl=$(".score",el);
  function mark(i,ok){if(res[i]!==undefined)return;res[i]=ok;var n=res.filter(Boolean).length,done=res.filter(function(x){return x!==undefined}).length;scoreEl.textContent=n+" / "+items.length;
    if(opt.onMark)opt.onMark(i,ok,items[i]);
    if(one){qs[i].classList.add(ok?"q-ok":"q-no");if(done<items.length){var nx=document.createElement("div");nx.className="acts qnext";nx.innerHTML='<button class="btn pri" type="button">Avanti →</button>';
        nx.firstChild.onclick=function(){nx.remove();qs[i].hidden=true;var q2=qs[i+1];q2.hidden=false;try{q2.scrollIntoView({block:"start",behavior:rmotion()?"auto":"smooth"})}catch(e){}var f=q2.querySelector(".lsp");if(f&&!opt.noAuto)f.click()};qs[i].appendChild(nx)}
      else if(opt.onDone)opt.onDone(n,items.length,res);return}
    if(done===items.length){var b=state.best[id];if(!b||n>=b[0]){state.best[id]=[n,items.length];save();updateToc()}var r=document.createElement("div");r.className="acts";r.style.marginLeft="0";r.innerHTML='<button class="btn pri">Rifai da capo</button>';r.firstChild.onclick=function(){renderSet(el)};el.appendChild(r)}}
  items.forEach(function(it,i){
    var q=document.createElement("div");q.className="q";
    var tag=it.t==="say"?'<span class="qtag say-t">'+MIC+'Parla</span>':it.t==="ord"?'<span class="qtag">Componi</span>':it.t==="dict"?'<span class="qtag wr-t">Dettato</span>':it.t==="type"?'<span class="qtag wr-t">Completa</span>':(it.au?'<span class="qtag ear-t">'+SPK+'Ascolta</span>':'<span class="qtag">Scegli</span>');
    if(it.t==="dict"||it.t==="type"){
      var isD=it.t==="dict";
      q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+(isD?'Ascolta e scrivi quello che senti (in pinyin o in caratteri).':mixHTML(it.q))+'</span></div>'+
        (isD?'<div class="acts"><button class="btn pri lsp" type="button">'+SPK+' Ascolta</button><span class="lsh">Puoi ascoltare quante volte vuoi.</span></div>':'')+
        '<div class="tin-row"><input class="tin" type="text" lang="zh-CN" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Risposta" placeholder="pinyin / 汉字"><button class="btn pri ck" type="button">Controlla</button></div><div class="expl"></div>';
      var inp=$(".tin",q),exT=$(".expl",q),ck=$(".ck",q);
      if(isD)$(".lsp",q).onclick=function(){speak(it.au)};
      function check(){if(q.dataset.locked)return;var v=inp.value.trim();if(!v){exT.innerHTML="Scrivi prima la risposta.";return}
        var ans=it.a||[it.au],ok=ans.some(function(a){return jAnswerOk(v,a)});
        q.dataset.locked="1";inp.disabled=true;ck.disabled=true;inp.classList.add(ok?"ok":"no");
        var full=isD?it.au:(it.full||ans[0]);
        exT.innerHTML=(ok?'<b class="ok">Giusto!</b> ':'<b class="no">Non proprio.</b> ')+'Risposta: '+jLineSay(full)+(it.e?' '+mixHTML(it.e):'');
        if(!isD)speak(full);mark(i,ok)}
      ck.onclick=check;inp.onkeydown=function(e){if(e.key==="Enter"&&!e.isComposing){e.preventDefault();check()}};
    }else if(it.t==="say"){
      q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+'Di\' in cinese, ad alta voce: <b>'+mixHTML(it.it)+'</b></span></div>'+
        '<div class="acts"><button class="btn pri sv">Fatto, mostra la risposta</button></div>'+
        '<div class="expl sayans" hidden>'+jLineSay(it.zh)+(it.e?'<span class="sayn">'+mixHTML(it.e)+'</span>':'')+'</div>'+
        '<div class="acts sg" hidden><span class="sgq">Ascolta e confronta. Com\'è andata?</span><button class="btn sgno">Devo esercitarmi</button><button class="btn pri sgok">Giusto</button></div>';
      var ans2=$(".sayans",q),sg=$(".sg",q);
      $(".sv",q).onclick=function(){this.disabled=true;ans2.hidden=false;sg.hidden=false;speak(it.zh)};
      $(".sgok",q).onclick=function(){fin(true)};$(".sgno",q).onclick=function(){fin(false)};
      function fin(ok){$$(".sg button",q).forEach(function(b){b.disabled=true});$(".sgq",q).innerHTML=ok?'<b class="ok">Bravo!</b> Ripeti ancora due volte con ▶.':'<b class="no">Nessun problema.</b> Premi ▶, ripeti insieme alla voce e riprova.';mark(i,ok)}
    }else if(it.t==="ord"){
      q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+mixHTML(it.q)+'</span></div>';
      var line=document.createElement("div");line.className="ordline";var pool=document.createElement("div");pool.className="ordpool";
      var w=shuffle(it.w),g=0;while(w.join(" ")===it.a[0]&&g++<10)w=shuffle(it.w);
      w.forEach(function(t){var b=document.createElement("button");b.className="tok";b.setAttribute("lang","zh-CN");b.setAttribute("data-t",t);b.innerHTML=jpHTML(t,true);b.onclick=function(){if(q.dataset.locked)return;(b.parentNode===pool?line:pool).appendChild(b)};pool.appendChild(b)});
      var acts=document.createElement("div");acts.className="acts";acts.innerHTML='<button class="btn pri">Controlla</button><button class="btn">Ricomincia</button>';
      var ex=document.createElement("div");ex.className="expl";
      acts.children[1].onclick=function(){if(q.dataset.locked)return;$$(".tok",line).forEach(function(t){pool.appendChild(t)})};
      acts.children[0].onclick=function(){
        if(pool.children.length){ex.innerHTML="Usa prima tutte le parole.";return}
        var s=$$(".tok",line).map(function(t){return t.getAttribute("data-t")}).join(" ");var ok=it.a.some(function(a){return jplain(a)===jplain(s)});
        q.dataset.locked="1";acts.children[0].disabled=true;acts.children[1].disabled=true;
        ex.innerHTML=(ok?'<b class="ok">Giusto!</b> Ora dilla ad alta voce: ':'<b class="no">Non proprio.</b> Risposta: ')+jLineSay(it.a[0]);speak(it.a[0]);mark(i,ok)};
      q.appendChild(line);q.appendChild(pool);q.appendChild(acts);q.appendChild(ex);
    }else{
      q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+mixHTML(it.q)+'</span></div>'+
        (it.au?'<div class="acts"><button class="btn pri lsp">'+SPK+' Ascolta</button><span class="lsh">Puoi ascoltare quante volte vuoi. Il testo compare dopo la risposta.</span></div><div class="expl lsr" hidden></div>':'');
      if(it.au)$(".lsp",q).onclick=function(){speak(it.au)};
      var opts=document.createElement("div");opts.className="opts";var ex2=document.createElement("div");ex2.className="expl";
      var order=shuffle(it.o.map(function(_,k){return k}));
      order.forEach(function(k){var o=it.o[k];var b=document.createElement("button");b.className="opt";if(hasJ(o))b.setAttribute("lang","zh-CN");b.innerHTML=optHTML(o,it);
        b.onclick=function(){var ok=k===0;$$(".opt",opts).forEach(function(x,xi){x.disabled=true;var ov=it.o[order[xi]];if(hasJ(ov)&&!$(".opron",x))x.insertAdjacentHTML("beforeend",pronHTML(ov))});opts.children[order.indexOf(0)].classList.add("right");if(!ok)b.classList.add("wrong");
          ex2.innerHTML=(ok?'<b class="ok">Giusto!</b> ':'<b class="no">No.</b> ')+(it.w?'<span class="wline"><span lang="zh-CN">'+jpHTML(it.w[0])+'</span>'+pronHTML(it.w[0])+'</span> = '+esc(it.w[1]):mixHTML(it.e||""))+(hasJ(it.o[0])&&!/[A-Za-zÀ-ÿ]{2}/.test(it.o[0])&&jtoks(it.o[0]).length>1&&!it.au?' '+jLineSay(it.o[0]):'');
          if(it.au){var r=$(".lsr",q);r.hidden=false;r.innerHTML='Hai sentito: '+jLineSay(it.au)+(it.w?pronHTML(it.au):'')}
          mark(i,ok)};opts.appendChild(b)});
      q.appendChild(opts);q.appendChild(ex2);
    }
    if(one&&i>0)q.hidden=true;qs.push(q);el.appendChild(q);
  })}
$$(".drill[data-set]").forEach(function(d){renderSet(d)});
updateToc();

/* ---------- parole e vocabolario ---------- */
var W=[];LESSONS.forEach(function(L,li){(VOC[L.id]||[]).forEach(function(r){W.push([r[0],r[1],r[2],li,L.id]);var s=jsurf(r[0]);if(!DICT[s])DICT[s]=r[1];if(!DICT[r[0]])DICT[r[0]]=r[1]})});
var TYP={n:"nome",v:"verbo",a:"aggettivo",x:"espressione"};
function wordHTML(r){return '<span class="jl" lang="zh-CN">'+jpHTML(r[0],true)+'</span>'}
function lessonLabel(L){return L.kind==="lesson"?"Lezione "+L.n+" · "+L.t:L.t}
var vt=$("#vocabtbl");if(vt){var rowsV=['<tr><th>Cinese</th><th>Italiano</th><th></th></tr>'];
  LESSONS.forEach(function(L){var ws=VOC[L.id];if(!ws||!ws.length)return;rowsV.push('<tr class="grp"><td colspan="3">'+esc(lessonLabel(L))+'</td></tr>');
    ws.forEach(function(r){rowsV.push('<tr><td class="jpc">'+wordHTML(r)+'<span class="rom">'+pyLine(r[0])+'</span></td><td>'+esc(r[1])+'</td><td><button class="say sm" data-say="'+esc(r[0])+'" aria-label="Ascolta">'+SPK+'</button></td></tr>')})});
  vt.innerHTML=rowsV.join("")}
function renderWords(el){var ws=VOC[el.getAttribute("data-voc")]||[];
  el.innerHTML=ws.map(function(r){return '<div class="wd"><span class="wi">'+wordHTML(r)+'<span class="ro">'+pyLine(r[0])+'</span></span><span class="wz">'+esc(r[1])+'</span><button class="say sm" data-say="'+esc(r[0])+'" aria-label="Ascolta">'+SPK+'</button></div>'}).join("")}
$$(".words[data-voc]").forEach(renderWords);
/* so fare */
$$("ul.cando[data-cando]").forEach(function(ul){var id=ul.getAttribute("data-cando"),lis=$$("li",ul),st=state.can[id]||[];
  lis.forEach(function(li,i){var lab=document.createElement("label"),cb=document.createElement("input");cb.type="checkbox";cb.checked=!!st[i];
    lab.appendChild(cb);lab.addEventListener("click",function(e){if(e.target.closest&&e.target.closest(".w"))e.preventDefault()});var sp=document.createElement("span");sp.innerHTML=li.innerHTML;lab.appendChild(sp);li.innerHTML="";li.appendChild(lab);
    cb.onchange=function(){var a=state.can[id]||[];a[i]=cb.checked;state.can[id]=a;save();cnt()}});
  var c=document.createElement("li");c.className="cnt";ul.appendChild(c);
  function cnt(){var a=state.can[id]||[],k=a.filter(Boolean).length;c.textContent=k===lis.length?"Tutto fatto! Puoi passare alla lezione successiva.":"Fatto "+k+" su "+lis.length}
  cnt()});

/* ---------- flashcard ---------- */
function bx(w){return state.box[w[0]]||1}
var fcCur=null,shown=false;
function FW(){var lim=typeof prefs.fcr==="number"?prefs.fcr:-1;if(lim<0){var hi=0;LESSONS.forEach(function(L,li){if(state.best[L.id]||(typeof pathStarted==="function"&&pathStarted(L.id)))hi=li});lim=Math.max(hi+1,LESSONS.findIndex(function(L){return L.id==="l6"}))}return W.filter(function(w){return w[3]<=lim})}
function pick(){var WW=FW(),tot=0,ws=WW.map(function(w){var x=Math.pow(2,5-bx(w));if(w===fcCur)x=0;tot+=x;return x});var r=Math.random()*tot;for(var i=0;i<WW.length;i++){r-=ws[i];if(r<=0)return WW[i]}return WW[0]}
function drawBoxes(){var b=$("#fcboxes");if(!b)return;var c=[0,0,0,0,0];FW().forEach(function(w){c[bx(w)-1]++});var mx=Math.max.apply(null,c)||1;
  b.innerHTML=c.map(function(n,i){return '<div><div class="bar"><i style="height:'+(n/mx*100)+'%"></i></div><b>'+n+'</b><span>scatola '+(i+1)+'</span></div>'}).join("")}
function drawCard(auto){var card=$("#fccard");if(!card||!fcCur)return;var w=fcCur,m=prefs.fcm;
  var word='<div class="fc-word">'+wordHTML(w)+'<span class="ro fc-ro">'+pyLine(w[0])+'</span></div>';
  var front=m==="ear"?'<button class="fc-ear" id="fcplay" type="button" aria-label="Ascolta la parola">'+SPK+'</button><p class="fc-hint">Ascolta: che cosa significa? Dillo, poi guarda la risposta.</p>'
    :m==="say"?'<p class="fc-zh">'+esc(w[1])+'</p><p class="fc-hint">Dillo ad alta voce in cinese, poi guarda la risposta.</p>'
    :'<div class="fc-word fc-read">'+wordHTML(w)+'</div><p class="fc-hint">Che cosa significa? Leggi i caratteri, dillo, poi guarda la risposta.</p>';
  card.innerHTML=shown?word+'<div class="fc-zh">'+esc(w[1])+'</div>'+(TYP[w[2]]?'<div class="fc-g">'+TYP[w[2]]+'</div>':'')+'<div class="acts" style="margin-left:0;justify-content:center"><button class="btn" id="fcno">Non la sapevo</button><button class="btn pri" id="fcyes">La sapevo</button><button class="say" data-say="'+esc(w[0])+'" aria-label="Ascolta">'+SPK+'</button></div>'
    :front+'<div class="acts" style="margin-left:0;justify-content:center"><button class="btn pri" id="fcshow">Mostra la risposta</button></div><p class="fc-box">scatola '+bx(w)+'</p>';
  if(shown){$("#fcno").onclick=function(){grade(false)};$("#fcyes").onclick=function(){grade(true)};speak(w[0])}
  else{$("#fcshow").onclick=function(){shown=true;drawCard()};var pb=$("#fcplay");if(pb){pb.onclick=function(){speak(w[0])};if(auto)speak(w[0])}}}
function grade(ok){state.box[fcCur[0]]=ok?Math.min(5,bx(fcCur)+1):1;save();drawBoxes();next(true)}
function next(auto){fcCur=pick();shown=false;drawCard(auto)}
function drawReset(conf){var r=$("#fcreset");if(!r)return;r.innerHTML=conf?'<span>Rimettere tutte le parole nella scatola 1?</span><button class="btn" id="rsy">Sì, azzera</button><button class="btn" id="rsn">Annulla</button>':'<button class="btn" id="rs">Azzera le flashcard</button>';
  if(conf){$("#rsy").onclick=function(){state.box={};save();drawBoxes();next();drawReset(false)};$("#rsn").onclick=function(){drawReset(false)}}else{$("#rs").onclick=function(){drawReset(true)}}}
(function(){var sel=$("#fcrange");if(!sel)return;var cur=FW().length?FW()[FW().length-1][3]:0;
  sel.innerHTML=LESSONS.map(function(L,li){var n=W.filter(function(w){return w[3]<=li}).length;return (VOC[L.id]&&VOC[L.id].length)?'<option value="'+li+'"'+(li===cur?' selected':'')+'>Fino a: '+esc(lessonLabel(L))+' ('+n+' parole)</option>':''}).join("");
  sel.onchange=function(){prefs.fcr=+sel.value;savePrefs();drawBoxes();next()}})();
if($("#fccard")){drawBoxes();next();drawReset(false)}
function fcMode(m){prefs.fcm=m;savePrefs();$$("[data-fcm]").forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-fcm")===m?"true":"false")});shown=false;drawCard()}
$$("[data-fcm]").forEach(function(b){b.onclick=function(){fcMode(b.getAttribute("data-fcm"))};b.setAttribute("aria-pressed",b.getAttribute("data-fcm")===prefs.fcm?"true":"false")});

/* ---------- barra in alto ---------- */
$("#totop").onclick=function(){try{window.scrollTo({top:0,behavior:rmotion()?"auto":"smooth"})}catch(e){window.scrollTo(0,0)}};
function applyPrefs(){var B=document.body;B.classList.toggle("no-tr",!prefs.tr);B.classList.toggle("no-furi",!prefs.furi);B.classList.toggle("no-hz",!prefs.hz);
  $("#tbtr").setAttribute("aria-pressed",prefs.tr?"true":"false");$("#tbtrl").textContent=prefs.tr?"sì":"no";
  $("#tbfuri").setAttribute("aria-pressed",prefs.furi?"true":"false");$("#tbfuril").textContent=prefs.furi?"sì":"no";
  $("#tbro").setAttribute("aria-pressed",prefs.hz?"true":"false");$("#tbrol").textContent=prefs.hz?"sì":"no";
  $("#tbslow").setAttribute("aria-pressed",prefs.slow?"true":"false");$("#tbslowl").textContent=prefs.slow?"lenta":"normale"}
$("#tbtr").onclick=function(){prefs.tr=!prefs.tr;savePrefs();applyPrefs()};
$("#tbfuri").onclick=function(){prefs.furi=!prefs.furi;if(!prefs.furi)prefs.hz=true;savePrefs();applyPrefs()};
$("#tbro").onclick=function(){prefs.hz=!prefs.hz;if(!prefs.hz)prefs.furi=true;savePrefs();applyPrefs()};
$("#tbslow").onclick=function(){prefs.slow=!prefs.slow;savePrefs();applyPrefs();speak("你好[nǐ-hǎo]")};
applyPrefs();
(function(){var b=$("#tbset"),pn=$("#setp");if(!b||!pn)return;
  function show(o){pn.hidden=!o;b.setAttribute("aria-expanded",o?"true":"false")}
  b.onclick=function(e){e.stopPropagation();show(pn.hidden)};
  document.addEventListener("click",function(e){if(!pn.hidden&&!e.target.closest("#setp")&&!e.target.closest("#tbset"))show(false)});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!pn.hidden)show(false)})})();

/* ---------- lettura finale ---------- */
function setupReading(root){var btn=$("#rdplay",root);if(!btn)return;var rd=$("#reading",root),lines=$$(".ex",rd);
  var pl=Player(function(){return lines.map(function(l){return {el:l,say:$(".say",l).getAttribute("data-say"),mine:false}})},{busy:function(){btn.textContent="■ Stop";btn.dataset.on="1"},idle:function(){btn.textContent="▶ Ascolta tutto";btn.dataset.on=""}});
  btn.onclick=function(){if(btn.dataset.on)pl.stop();else pl.play()};
  var t=$("#tgtxt",root);t.onclick=function(){var h=rd.classList.toggle("hide-it");t.textContent=h?"Mostra il testo cinese":"Nascondi il testo cinese";t.setAttribute("aria-pressed",h?"true":"false")}}
setupReading(document);

/* ---------- tema chiaro / scuro ---------- */
(function(){var b=$("#tbtheme");if(!b)return;var TK=KEY+"-theme",root=document.documentElement,mq=null;try{mq=matchMedia("(prefers-color-scheme: dark)")}catch(e){}
  var MOON='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1z"/></svg>';
  function cur(){return root.getAttribute("data-theme")||(mq&&mq.matches?"dark":"light")}
  function draw(){var d=cur()==="dark";b.setAttribute("aria-pressed",d?"true":"false");b.title=d?"Tema scuro: attivo":"Tema scuro: spento";b.setAttribute("aria-label","Tema scuro");b.innerHTML=MOON+'<span class="tbl">scuro</span>'}
  b.onclick=function(){var n=cur()==="dark"?"light":"dark";root.setAttribute("data-theme",n);try{localStorage.setItem(TK,n)}catch(e){}draw()};
  if(mq){try{mq.addEventListener("change",draw)}catch(e){}}
  draw()})();

/* ---------- tutto il cinese nel testo diventa cliccabile ---------- */
var SKIPJ=".hero-card,.stats,.legend,.lhead,.partttl,.toc,.kj,button,.w,.tk,.jl,.jx,.ro,script,style,.tok,.opts,.fc-card,#fcboxes,.kicker,.tip,input,select,.fc-range,.zcard,.hzb,rt,svg";
function jpZone(root){var out=[],tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null),n;
  while((n=tw.nextNode())){if(!JRUN.test(n.nodeValue))continue;var p=n.parentElement;if(!p||p.closest(SKIPJ))continue;out.push(n)}
  out.forEach(function(n){var t=document.createElement("template");t.innerHTML=mixHTML(n.nodeValue);n.parentNode.replaceChild(t.content,n)})}
jpZone($("main")||document.body);

/* ---------- indice ---------- */
var tocd=$("#tocd");try{if(tocd&&matchMedia("(min-width:1000px)").matches)tocd.open=true}catch(e){}
$$(".toc a").forEach(function(a){a.addEventListener("click",function(){try{if(!matchMedia("(min-width:1000px)").matches)tocd.open=false}catch(e){}})});
