var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var KEY="primo-libro-italiano-v1";
var state={best:{},box:{},can:{}};
try{var raw=localStorage.getItem(KEY);if(raw){var p=JSON.parse(raw);state.best=p.best2||{};state.box=p.box||{};state.can=p.can||{}}}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify({best2:state.best,box:state.box,can:state.can}))}catch(e){}}
var prefs={tr:true,slow:false,fcm:"ear"};
try{var pr=JSON.parse(localStorage.getItem(KEY+"-prefs")||"{}");if(pr.tr===false)prefs.tr=false;if(pr.slow)prefs.slow=true;if(pr.fcm)prefs.fcm=pr.fcm;if(typeof pr.fcr==="number")prefs.fcr=pr.fcr}catch(e){}
function savePrefs(){try{localStorage.setItem(KEY+"-prefs",JSON.stringify(prefs))}catch(e){}}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
var hasHan=/[一-鿿]/;

/* ---------- voce ----------
   Prima scelta: file audio registrati con la voce neurale "Sara" (audio/<hash>.mp3).
   Se un file manca o non si carica, si usa la sintesi vocale del dispositivo. */
var voice=null,hasTTS=("speechSynthesis" in window),speakSeq=0,players=[];
/* Voce: file audio registrati con «Sara»; la sintesi del dispositivo resta come riserva se un file manca. */
var USE_DEVICE_VOICE=false;
var AUD=null;try{AUD=new Audio();AUD.preload="auto"}catch(e){}
function cyrb53(str){var h1=0xdeadbeef,h2=0x41c6ce57;for(var i=0,ch;i<str.length;i++){ch=str.charCodeAt(i);h1=Math.imul(h1^ch,2654435761);h2=Math.imul(h2^ch,1597334677)}
  h1=Math.imul(h1^(h1>>>16),2246822507);h1^=Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507);h2^=Math.imul(h1^(h1>>>13),3266489909);return 4294967296*(2097151&h2)+(h1>>>0)}
function akey(t){t=String(t).replace(/[’]/g,"'").trim().replace(/\s+/g," ");if(!/\s/.test(t))t=t.toLowerCase();return t}
function audioSrc(t){return "audio/"+cyrb53(akey(t)).toString(36)+".mp3"}
function scoreVoice(v){var n=(v.name+" "+(v.voiceURI||"")).toLowerCase(),s=0;
  if(/^it[-_]it/i.test(v.lang))s+=5;else if(/^it/i.test(v.lang))s+=3;else return -99;
  if(/natural|neural|online|premium|enhanced|siri|wavenet|google/.test(n))s+=4;
  if(/alice|federica|paola|elsa|isabella|fiamma|imelda|palmira|pierina|bianca|carla|giorgia|emma|sara|chiara|female/.test(n))s+=3;
  if(/\b(luca|diego|cosimo|giuseppe|benigno|calimero|cataldo|gianni|lisandro|rinaldo|roberto|male)\b/.test(n))s-=3;
  if(/compact|espeak/.test(n))s-=3;return s}
function pickVoice(){if(!hasTTS)return;try{var vs=speechSynthesis.getVoices();voice=vs.filter(function(v){return /^it[-_]IT/i.test(v.lang)})[0]||vs.filter(function(v){return /^it/i.test(v.lang)})[0]||null}catch(e){}}
setTimeout(function(){pickVoice();if(!hasTTS||!voice){var n=$("#ttsnote");if(n)n.textContent="你的浏览器似乎没有安装意大利语语音，▶ 按钮可能没有声音。手机上可以在「文字转语音」设置里添加「意大利语（意大利）」语音。练习成绩和单词卡进度保存在这个浏览器里。"}},1500);
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
  function fallback(){if(fell||done||my!==speakSeq)return;fell=true;ttsSpeak(t,fin,!!cb)}
  stopAll();
  /* Finché non ci sono le registrazioni nuove: voce italiana del dispositivo se esiste, file audio solo come riserva. */
  if(!AUD||USE_DEVICE_VOICE){ttsSpeak(t,fin,!!cb,opt.pitch);return}
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

/* ---------- parole cliccabili ---------- */
var LET=/[A-Za-zÀ-ÖØ-öø-ÿ]/;
function itHTML(text,plain){return String(text).split(/(\s+|[，。、；：！？])/).map(function(tok){
  if(!tok)return "";if(/^\s*$/.test(tok)||/^[，。、；：！？]$/.test(tok))return esc(tok);
  var m=tok.match(/^([«"(¿¡—–\-（「『…]*)(.*?)([.,!?;:»")…—。，！？；：、）」』]*)$/);var core=m?m[2]:tok;
  if(!core||!LET.test(core))return esc(tok);
  return esc(m[1])+(plain?esc(core):'<span class="w" tabindex="0" role="button" data-say="'+esc(core)+'">'+esc(core)+'</span>')+esc(m[3]);
}).join("")}
function norm(w){return w.toLowerCase().replace(/[’]/g,"'")}
function meaning(w){var k=norm(w);if(DICT[k])return DICT[k];if(typeof CONJ_IDX!=="undefined"&&CONJ_IDX[k])return CONJ_IDX[k];
  var i=k.indexOf("'");if(i>0&&i<k.length-1){var a=k.slice(0,i+1),b=k.slice(i+1),ma=DICT[a],mb=DICT[b];if(ma||mb)return (ma||a)+" + "+(mb||b)}
  if(/^[A-Z]/.test(w)&&!DICT[k])return "专有名词";
  return formMeaning(k)}
/* forms of known words: plural/feminine, participles, gerunds, imperfect, conditional, infinitive + pronoun */
function look(x){return DICT[x]||(typeof CONJ_IDX!=="undefined"&&CONJ_IDX[x])||""}
function formMeaning(k){var c,m,i;
  var NOUN=[["chi","co"],["ghi","go"],["che","ca"],["ghe","ga"],["i","o"],["i","e"],["i","a"],["e","a"],["e","o"],["a","o"],["ie","ia"]];
  for(i=0;i<NOUN.length;i++){var e=NOUN[i];if(k.length>3&&k.slice(-e[0].length)===e[0]){c=k.slice(0,-e[0].length)+e[1];if(look(c))return look(c)+"（"+c+" 的变化形式）"}}
  var inf=function(st,cl){return [st+"are",st+"ere",st+"ire"].filter(function(x){return look(x)})[0]};
  if((m=k.match(/^(.+)(?:ando|endo)$/))&&(c=inf(m[1])))return "正在…（动名词，"+c+"："+look(c)+"）";
  if((m=k.match(/^(.+)(?:ato|ata|ati|ate)$/))&&look(m[1]+"are"))return "过去分词："+m[1]+"are（"+look(m[1]+"are")+"）";
  if((m=k.match(/^(.+)(?:uto|uta|uti|ute)$/))&&look(m[1]+"ere"))return "过去分词："+m[1]+"ere（"+look(m[1]+"ere")+"）";
  if((m=k.match(/^(.+)(?:ito|ita|iti|ite)$/))&&look(m[1]+"ire"))return "过去分词："+m[1]+"ire（"+look(m[1]+"ire")+"）";
  if((m=k.match(/^(.+)(?:avo|avi|ava|avamo|avate|avano)$/))&&look(m[1]+"are"))return "未完成过去时："+m[1]+"are（"+look(m[1]+"are")+"）";
  if((m=k.match(/^(.+)(?:evo|evi|eva|evamo|evate|evano)$/))&&(c=inf(m[1])))return "未完成过去时："+c+"（"+look(c)+"）";
  if((m=k.match(/^(.+?)(?:erei|eresti|erebbe|eremmo|ereste|erebbero|rei|resti|rebbe|remmo|reste|rebbero)$/))&&(c=inf(m[1])))return "条件式："+c+"（"+look(c)+"）";
  if((m=k.match(/^(.+?)(mi|ti|ci|vi|si|lo|la|li|le|ne|gli)$/))&&m[1].length>2){c=/r$/.test(m[1])?m[1]+"e":m[1];if(look(c))return c+" + "+m[2]+"（"+look(c)+"）"}
  return ""}


/* ---------- parole italiane dentro il testo cinese ---------- */
var W=[];LESSONS.forEach(function(L,li){(VOC[L.id]||[]).forEach(function(r){W.push([r[0],r[1],r[2],li,L.id]);var k=r[0].toLowerCase();if(!DICT[k])DICT[k]=r[1]})});
function wordSpan(say,inner){return '<span class="w" tabindex="0" role="button" data-say="'+esc(say)+'">'+inner+'</span>'}
function linkable(w){if(w.replace(/'/g,"").length<2||/^[A-Z]{2,}$/.test(w))return false;var m=meaning(w);return !!m&&m!=="专有名词"&&!/^英语单词|错误形式|^（读音）/.test(m)}
function linkMixed(text){return String(text).split(/([A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ'’]*)/).map(function(t,i){
  if(i%2===0)return esc(t);var w=t.replace(/['’]+$/,function(q){return /^(un|l|d|dell|all|nell|dall|sull|anch|po|c|dov|com|cos|vent|quest|quell)$/i.test(t.slice(0,-q.length))?q:""});
  var rest=t.slice(w.length);return (linkable(w)?wordSpan(w,esc(w)):esc(w))+esc(rest)}).join("")}

/* ---------- verbi: dati e regole di coniugazione ---------- */
var PZ=["io","tu","lui / lei","noi","voi","loro"],PS=["io","tu","lui","noi","voi","loro"],PCN=["我","你","他／她","我们","你们","他们"],RF=["mi","ti","si","ci","vi","si"];
var AV=["ho","hai","ha","abbiamo","avete","hanno"],ES=["sono","sei","è","siamo","siete","sono"];
var ENDS={are:["o","i","a","iamo","ate","ano"],ere:["o","i","e","iamo","ete","ono"],ire:["o","i","e","iamo","ite","ono"],isc:["isco","isci","isce","iamo","ite","iscono"]};
var FUT=["ò","ai","à","emo","ete","anno"],IMP=["vo","vi","va","vamo","vate","vano"];
var GRP={irr:"最常用的不规则动词",are:"第一组 -are",ere:"第二组 -ere",ire:"第三组 -ire",isc:"第三组 -ire（加 -isc-）",rif:"反身动词"};
var TN={pr:"现在时",pp:"近过去时",im:"未完成过去时",fu:"将来时"};
var TIP={pr:"现在时：现在正在做的事、习惯，也可以表示不远的将来。",pp:"近过去时：已经完成的事，相当于中文的「了」「过」。",im:"未完成过去时：过去的状态和习惯，相当于「以前常常」「那时候」。",fu:"将来时：将来的计划，也可以表示猜测。口语里确定的近期计划常常直接用现在时。"};
var VERBS=[
 {i:"essere",z:"是",g:"ere",k:"irr",pr:["sono","sei","è","siamo","siete","sono"],fu:"sar",im:["ero","eri","era","eravamo","eravate","erano"],pp:"stato",es:1,st:1},
 {i:"avere",z:"有",g:"ere",k:"irr",pr:["ho","hai","ha","abbiamo","avete","hanno"],fu:"avr",st:1},
 {i:"stare",z:"待、（身体）状态",zz:"待",g:"are",k:"irr",pr:["sto","stai","sta","stiamo","state","stanno"],fu:"star",pp:"stato",es:1},
 {i:"andare",z:"去",g:"are",k:"irr",pr:["vado","vai","va","andiamo","andate","vanno"],fu:"andr",es:1},
 {i:"fare",z:"做",g:"are",k:"irr",pr:["faccio","fai","fa","facciamo","fate","fanno"],fu:"far",im:"face",pp:"fatto"},
 {i:"venire",z:"来",g:"ire",k:"irr",pr:["vengo","vieni","viene","veniamo","venite","vengono"],fu:"verr",pp:"venuto",es:1},
 {i:"volere",z:"想要",g:"ere",k:"irr",pr:["voglio","vuoi","vuole","vogliamo","volete","vogliono"],fu:"vorr",st:1},
 {i:"potere",z:"能、可以",zz:"能",g:"ere",k:"irr",pr:["posso","puoi","può","possiamo","potete","possono"],fu:"potr",st:1},
 {i:"dovere",z:"必须",g:"ere",k:"irr",pr:["devo","devi","deve","dobbiamo","dovete","devono"],fu:"dovr",st:1},
 {i:"dire",z:"说、告诉",zz:"说",g:"ire",k:"irr",pr:["dico","dici","dice","diciamo","dite","dicono"],fu:"dir",im:"dice",pp:"detto"},
 {i:"uscire",z:"出去",g:"ire",k:"irr",pr:["esco","esci","esce","usciamo","uscite","escono"],es:1},
 {i:"sapere",z:"知道",g:"ere",k:"irr",pr:["so","sai","sa","sappiamo","sapete","sanno"],fu:"sapr",st:1},
 {i:"bere",z:"喝",g:"ere",k:"irr",pr:["bevo","bevi","beve","beviamo","bevete","bevono"],fu:"berr",im:"beve",pp:"bevuto"},
 {i:"dare",z:"给",g:"are",k:"irr",pr:["do","dai","dà","diamo","date","danno"],fu:"dar"},
 {i:"rimanere",z:"留下",g:"ere",k:"irr",pr:["rimango","rimani","rimane","rimaniamo","rimanete","rimangono"],fu:"rimarr",pp:"rimasto",es:1},
 {i:"parlare",z:"说（讲话）",zz:"说",g:"are"},{i:"abitare",z:"住",g:"are"},{i:"lavorare",z:"工作",g:"are"},{i:"studiare",z:"学习",g:"are"},{i:"mangiare",z:"吃",g:"are"},
 {i:"cercare",z:"找",g:"are"},{i:"pagare",z:"付钱",g:"are"},{i:"comprare",z:"买",g:"are"},{i:"arrivare",z:"到达",g:"are",es:1},{i:"tornare",z:"回来",g:"are",es:1},
 {i:"prendere",z:"拿、点（餐）",zz:"拿",g:"ere",pp:"preso"},{i:"vedere",z:"看见",g:"ere",fu:"vedr",pp:"visto"},{i:"leggere",z:"读",g:"ere",pp:"letto"},{i:"scrivere",z:"写",g:"ere",pp:"scritto"},{i:"vivere",z:"生活、住",zz:"生活",g:"ere",fu:"vivr",pp:"vissuto"},
 {i:"dormire",z:"睡觉",g:"ire"},{i:"partire",z:"出发",g:"ire",es:1},{i:"sentire",z:"听见、感觉",zz:"听见",g:"ire"},
 {i:"capire",z:"懂",g:"isc"},{i:"finire",z:"结束、完成",zz:"完成",g:"isc"},{i:"preferire",z:"更喜欢",g:"isc"},
 {i:"alzarsi",b:"alzare",z:"起床",g:"are",k:"rif",es:1},{i:"chiamarsi",b:"chiamare",z:"叫（名字）",zz:"叫",g:"are",k:"rif",es:1,st:1}
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
  if(t==="fu"){var fs=futStem(v);return FUT.map(function(x){return {h:esc(fs)+'<b class="end">'+x+'</b>',p:fs+x}})}
  if(t==="im"){if(Array.isArray(v.im))return v.im.map(function(f){return {h:esc(f),p:f}});
    var is=typeof v.im==="string"?v.im:vbase(v).slice(0,-2);return IMP.map(function(x){return {h:esc(is)+'<b class="end">'+x+'</b>',p:is+x}})}
  var pp=ppOf(v),aux=v.es?ES:AV;
  return aux.map(function(a,i){var f=pp,d=pp;if(v.es){var r=pp.slice(0,-1);f=r+(i<3?"o":"i");d=r+(i<3?"o/a":"i/e")}return {h:'<span class="cj-aux">'+a+'</span> <b class="end">'+esc(d)+'</b>',p:a+" "+f}})}
function cjSay(v,t,i,f){return PS[i]+" "+(v.k==="rif"?RF[i]+" ":"")+f.p}
function cjZh(v,t,i){var z=v.zz||v.z,P=PCN[i];if(t==="pr")return P+z;if(t==="pp")return v.st?P+"曾经"+z:P+z+"了";if(t==="fu")return P+"会"+z;return P+"以前"+z}
var CONJ_IDX={};if(!DICT.voi)DICT.voi="你们";if(!DICT.loro)DICT.loro="他们";
VERBS.forEach(function(v){var z=v.zz||v.z;
  [["pr","现在时"],["fu","将来时"],["im","未完成过去时"]].forEach(function(T){cjForms(v,T[0]).forEach(function(f,i){var k=f.p.toLowerCase();if(!CONJ_IDX[k])CONJ_IDX[k]=z+"（"+v.i+"）· "+PZ[i]+" · "+T[1]})});
  if(!DICT[v.i]&&!CONJ_IDX[v.i])CONJ_IDX[v.i]=z+"（动词原形）";
  var pp=ppOf(v);if(!CONJ_IDX[pp])CONJ_IDX[pp]=v.i+" 的过去分词（"+z+"）"});

/* ---------- audio al clic ---------- */
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
document.addEventListener("mouseover",function(e){var w=e.target.closest&&e.target.closest(".w");if(w&&w!==tipFor)showTip(w);else if(!w&&tipFor)hideTip()});
document.addEventListener("focusin",function(e){var w=e.target.closest&&e.target.closest(".w");if(w)showTip(w)});
document.addEventListener("focusout",function(e){if(e.target===tipFor)hideTip()});
document.addEventListener("click",function(e){var w=e.target.closest&&e.target.closest(".w");if(w){showTip(w);clearTimeout(tipTimer)}else if(tipFor&&!(e.target.closest&&e.target.closest(".tip")))hideTip()});
window.addEventListener("scroll",function(){if(tipFor)hideTip()},{passive:true});

/* ---------- esempi e testo italiano nel testo ---------- */
$$("div[data-it]").forEach(function(d){var it=d.getAttribute("data-it");d.className="ex";
  d.innerHTML='<div class="ex-body"><div class="it-l" lang="it">'+itHTML(it)+'</div><div class="tr">'+esc(d.getAttribute("data-zh")||"")+'</div></div><button class="say" data-say="'+esc(it)+'" aria-label="播放">'+SPK+'</button>'});
$$(".it,.itc").forEach(function(el){if(el.children.length)return;el.setAttribute("lang","it");el.innerHTML=itHTML(el.textContent)});

/* ---------- alfabeto e numeri ---------- */
var ALF=[["A","a","a"],["B","bi","bi"],["C","ci","ci"],["D","di","di"],["E","e","e"],["F","effe","effe"],["G","gi","gi"],["H","acca","acca"],["I","i","i"],["L","elle","elle"],["M","emme","emme"],["N","enne","enne"],["O","o","o"],["P","pi","pi"],["Q","cu","cu"],["R","erre","erre"],["S","esse","esse"],["T","ti","ti"],["U","u","u"],["V","vu","vu"],["Z","zeta","zeta"]];
var at=$("#alfabeto");if(at){var rows='';for(var i=0;i<ALF.length;i+=3){rows+='<tr>'+ALF.slice(i,i+3).map(function(a){return '<td class="big">'+a[0]+' <span style="font-weight:400;color:var(--muted);font-size:16px">'+a[1]+'</span></td><td><button class="say sm" data-say="'+a[2]+'" aria-label="播放 '+a[0]+'">'+SPK+'</button></td>'}).join("")+'</tr>'}at.innerHTML='<tr><th>字母</th><th></th><th>字母</th><th></th><th>字母</th><th></th></tr>'+rows}
var NUM=[["0","zero"],["1","uno"],["2","due"],["3","tre"],["4","quattro"],["5","cinque"],["6","sei"],["7","sette"],["8","otto"],["9","nove"],["10","dieci"],["11","undici"],["12","dodici"],["13","tredici"],["14","quattordici"],["15","quindici"],["16","sedici"],["17","diciassette"],["18","diciotto"],["19","diciannove"],["20","venti"],
  ["21","ventuno"],["22","ventidue"],["23","ventitré"],["28","ventotto"],["30","trenta"],["31","trentuno"],["40","quaranta"],["50","cinquanta"],["60","sessanta"],["70","settanta"],["80","ottanta"],["90","novanta"],["100","cento"],["200","duecento"],["1000","mille"],["2000","duemila"]];
$$("table.numtbl").forEach(function(nt){var lo=+nt.getAttribute("data-from"),hi=+nt.getAttribute("data-to"),L=NUM.filter(function(n){return +n[0]>=lo&&+n[0]<=hi}),r2='';
  for(var j=0;j<L.length;j+=3){r2+='<tr>'+L.slice(j,j+3).map(function(n){return '<td class="big" style="font-variant-numeric:tabular-nums">'+n[0]+'</td><td class="itc">'+itHTML(n[1])+'</td><td><button class="say sm" data-say="'+n[1]+'" aria-label="播放">'+SPK+'</button></td>'}).join("")+'</tr>'}
  nt.innerHTML='<tr><th>数</th><th>意大利语</th><th></th><th>数</th><th>意大利语</th><th></th><th>数</th><th>意大利语</th><th></th></tr>'+r2});

/* ---------- lettore continuo ---------- */
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

/* ---------- dialoghi ---------- */
function renderDialog(el){
  var id=el.getAttribute("data-dlg"),L=DLG[id];if(!L)return;
  el.innerHTML='<div class="dl-head"><h3>对话<i>Dialogo</i></h3><div class="dl-ctrl"><button class="btn pri dl-play" type="button">'+SPK+' 全部播放</button><button class="btn dl-role" type="button" aria-pressed="false">'+MIC+' 我来说 B</button></div></div>'+
   '<div class="dl-lines">'+L.map(function(r,i){return '<div class="dl who'+r[0]+'" data-i="'+i+'"><span class="who">'+r[0]+'</span><div class="dl-body"><div class="dl-text"><div class="it-l" lang="it">'+itHTML(r[1])+'</div><div class="tr">'+esc(r[2])+'</div></div><div class="dl-turn">轮到你了。大声说：<b>「'+esc(r[2])+'」</b><button class="btn pri dl-next" type="button">说完了，听标准版本</button></div></div><button class="say" data-say="'+esc(r[1])+'" aria-label="播放">'+SPK+'</button></div>'}).join("")+'</div>';
  var lines=$$(".dl",el),role=false,playBtn=$(".dl-play",el),roleBtn=$(".dl-role",el);
  function get(){return lines.map(function(ln,i){return {el:ln,say:L[i][1],pitch:L[i][0]==="B"?1.2:1,mine:role&&L[i][0]==="B"}})}
  var pl=Player(get,{busy:function(){playBtn.innerHTML="■ 停止";playBtn.dataset.on="1"},idle:function(){playBtn.innerHTML=SPK+" 全部播放";playBtn.dataset.on=""}});
  playBtn.onclick=function(){if(playBtn.dataset.on)pl.stop();else pl.play()};
  roleBtn.onclick=function(){role=!role;el.classList.toggle("role",role);roleBtn.setAttribute("aria-pressed",role?"true":"false");lines.forEach(function(l){l.classList.remove("open")});pl.stop()};
  lines.forEach(function(ln,i){$(".dl-next",ln).onclick=function(){pl.answer(i,get()[i])}});
}
$$(".dialog[data-dlg]").forEach(renderDialog);

/* ---------- esercizi ---------- */
function updateToc(){$$("[data-sc]").forEach(function(s){var b=state.best[s.getAttribute("data-sc")];s.textContent=b?b[0]+"/"+b[1]:"";s.classList.toggle("done",!!b&&b[0]===b[1])})}
function itLine(t){return '<span class="zp"><span class="it-l" lang="it">'+itHTML(t)+'</span><button class="say sm" data-say="'+esc(t)+'" aria-label="播放">'+SPK+'</button></span>'}
function nrm(s){return s.toLowerCase().replace(/[’]/g,"'").replace(/[.,!?;:«»"¿¡…—–-]/g," ").replace(/\s+/g," ").trim()}
function noAcc(s){return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}
function renderSet(el,opt){
  opt=opt||{};var id=el.getAttribute("data-set"),items=opt.items||EX[id];if(!items)return;var res=new Array(items.length),one=!!opt.one,qs=[];
  if(one){el.classList.add("one");el.innerHTML='<div class="dhead"><span>'+(opt.head||"")+'</span><span><span class="score">0 / '+items.length+'</span></span></div>'}
  else el.innerHTML='<div class="dhead"><span>按第一次的回答计分。「说一说」由你自己评分，听写和填空可以用下面的重音字母。</span><span>得分 <span class="score">0 / '+items.length+'</span>'+(state.best[id]?' · 最好成绩 '+state.best[id][0]+'/'+state.best[id][1]:'')+'</span></div>';
  var scoreEl=$(".score",el);
  function mark(i,ok){if(res[i]!==undefined)return;res[i]=ok;var n=res.filter(Boolean).length,done=res.filter(function(x){return x!==undefined}).length;scoreEl.textContent=n+" / "+items.length;
    if(opt.onMark)opt.onMark(i,ok,items[i]);
    if(one){qs[i].classList.add(ok?"q-ok":"q-no");if(done<items.length){var nx=document.createElement("div");nx.className="acts qnext";nx.innerHTML='<button class="btn pri" type="button">下一题 →</button>';
        nx.firstChild.onclick=function(){nx.remove();qs[i].hidden=true;var q2=qs[i+1];q2.hidden=false;try{q2.scrollIntoView({block:"start",behavior:rmotion()?"auto":"smooth"})}catch(e){}var f=q2.querySelector(".lsp");if(f&&!opt.noAuto)f.click()};qs[i].appendChild(nx)}
      else if(opt.onDone)opt.onDone(n,items.length,res);return}
    if(done===items.length){var b=state.best[id];if(!b||n>=b[0]){state.best[id]=[n,items.length];save();updateToc()}var r=document.createElement("div");r.className="acts";r.style.marginLeft="0";r.innerHTML='<button class="btn pri">重新做一遍</button>';r.firstChild.onclick=function(){renderSet(el)};el.appendChild(r)}}
  items.forEach(function(it,i){
    var q=document.createElement("div");q.className="q";
    var tag=it.t==="say"?'<span class="qtag say-t">'+MIC+'说一说</span>':it.t==="ord"?'<span class="qtag">组句</span>':it.t==="dict"?'<span class="qtag wr-t">听写</span>':it.t==="type"?'<span class="qtag wr-t">填空</span>':(it.au?'<span class="qtag ear-t">'+SPK+'听</span>':'<span class="qtag">选择</span>');
    if(it.t==="dict"||it.t==="type"){
      var isD=it.t==="dict";
      q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+(isD?'听一听，把听到的意大利语写下来。':linkMixed(it.q))+'</span></div>'+
        (isD?'<div class="acts"><button class="btn pri lsp" type="button">'+SPK+' 听</button><span class="lsh">可以听很多遍。</span></div>':'')+
        '<div class="tin-row"><input class="tin" type="text" lang="it" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="答案"><button class="btn pri ck" type="button">检查</button></div>'+
        '<div class="acc" aria-label="重音字母">'+["à","è","é","ì","ò","ù"].map(function(c){return '<button type="button" tabindex="-1">'+c+'</button>'}).join("")+'</div><div class="expl"></div>';
      var inp=$(".tin",q),exT=$(".expl",q),ck=$(".ck",q);
      if(isD)$(".lsp",q).onclick=function(){speak(it.au)};
      $$(".acc button",q).forEach(function(b){b.onmousedown=function(e){e.preventDefault()};b.onclick=function(){var p=inp.selectionStart||inp.value.length;inp.value=inp.value.slice(0,p)+b.textContent+inp.value.slice(inp.selectionEnd||p);inp.focus();try{inp.setSelectionRange(p+1,p+1)}catch(e){}}});
      function check(){if(q.dataset.locked)return;var v=inp.value.trim();if(!v){exT.innerHTML="请先写答案。";return}
        var ans=it.a||[it.au],ok=ans.some(function(a){return nrm(a)===nrm(v)}),near=!ok&&ans.some(function(a){return noAcc(nrm(a))===noAcc(nrm(v))});
        q.dataset.locked="1";inp.disabled=true;ck.disabled=true;inp.classList.add(ok||near?"ok":"no");
        exT.innerHTML=(ok?'<b class="ok">正确！</b> ':near?'<b class="ok">基本正确！</b>注意重音符号。 ':'<b class="no">不太对。</b> ')+'正确答案：'+itLine(isD?it.au:(it.full||ans[0]))+(it.e?' '+linkMixed(it.e):'');
        if(!isD)speak(it.full||ans[0]);mark(i,ok||near)}
      ck.onclick=check;inp.onkeydown=function(e){if(e.key==="Enter"){e.preventDefault();check()}};
    }else if(it.t==="say"){
      q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+'用意大利语大声说：<b>'+linkMixed(it.zh)+'</b></span></div>'+
        '<div class="acts"><button class="btn pri sv">我说完了，看答案</button></div>'+
        '<div class="expl sayans" hidden>'+itLine(it.it)+(it.e?'<span class="sayn">'+linkMixed(it.e)+'</span>':'')+'</div>'+
        '<div class="acts sg" hidden><span class="sgq">听一下，和你说的比较。说得怎么样？</span><button class="btn sgno">还要再练</button><button class="btn pri sgok">说对了</button></div>';
      var ans=$(".sayans",q),sg=$(".sg",q);
      $(".sv",q).onclick=function(){this.disabled=true;ans.hidden=false;sg.hidden=false;speak(it.it)};
      $(".sgok",q).onclick=function(){fin(true)};$(".sgno",q).onclick=function(){fin(false)};
      function fin(ok){$$(".sg button",q).forEach(function(b){b.disabled=true});$(".sgq",q).innerHTML=ok?'<b class="ok">很好！</b>再用 ▶ 跟读两遍。':'<b class="no">没关系。</b>点 ▶，跟着声音说，然后再试一次。';mark(i,ok)}
    }else if(it.t==="ord"){
      q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+linkMixed(it.q)+'</span></div>';
      var line=document.createElement("div");line.className="ordline";var pool=document.createElement("div");pool.className="ordpool";
      var w=shuffle(it.w),g=0;while(w.join(" ")===it.a[0]&&g++<10)w=shuffle(it.w);
      w.forEach(function(t){var b=document.createElement("button");b.className="tok";b.setAttribute("lang","it");b.textContent=t;b.onclick=function(){if(q.dataset.locked)return;(b.parentNode===pool?line:pool).appendChild(b)};pool.appendChild(b)});
      var acts=document.createElement("div");acts.className="acts";acts.innerHTML='<button class="btn pri">检查</button><button class="btn">重来</button>';
      var ex=document.createElement("div");ex.className="expl";
      acts.children[1].onclick=function(){if(q.dataset.locked)return;$$(".tok",line).forEach(function(t){pool.appendChild(t)})};
      acts.children[0].onclick=function(){
        if(pool.children.length){ex.innerHTML="请先用上所有的词。";return}
        var s=$$(".tok",line).map(function(t){return t.textContent}).join(" ");var ok=it.a.some(function(a){return nrm(a)===nrm(s)});
        q.dataset.locked="1";acts.children[0].disabled=true;acts.children[1].disabled=true;
        ex.innerHTML=(ok?'<b class="ok">正确！</b>现在大声说一遍：':'<b class="no">不太对。</b>正确答案：')+itLine(it.a[0]);speak(it.a[0]);mark(i,ok)};
      q.appendChild(line);q.appendChild(pool);q.appendChild(acts);q.appendChild(ex);
    }else{
      q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+linkMixed(it.q)+'</span></div>'+
        (it.au?'<div class="acts"><button class="btn pri lsp">'+SPK+' 听</button><span class="lsh">可以听很多遍。回答后才显示文字。</span></div><div class="expl lsr" hidden></div>':'');
      if(it.au)$(".lsp",q).onclick=function(){speak(it.au)};
      var opts=document.createElement("div");opts.className="opts";var ex2=document.createElement("div");ex2.className="expl";
      var order=shuffle(it.o.map(function(_,k){return k}));
      order.forEach(function(k){var o=it.o[k],isIt=!hasHan.test(o);var b=document.createElement("button");b.className="opt";if(isIt)b.setAttribute("lang","it");b.textContent=o;
        b.onclick=function(){var ok=k===0;$$(".opt",opts).forEach(function(x){x.disabled=true});opts.children[order.indexOf(0)].classList.add("right");if(!ok)b.classList.add("wrong");
          ex2.innerHTML=(ok?'<b class="ok">正确！</b> ':'<b class="no">不对。</b> ')+linkMixed(it.e||"")+(!hasHan.test(it.o[0])&&/\s/.test(it.o[0])?' '+itLine(it.o[0]):'');
          if(it.au){var r=$(".lsr",q);r.hidden=false;r.innerHTML='你听到的是：'+itLine(it.au)}
          mark(i,ok)};opts.appendChild(b)});
      q.appendChild(opts);q.appendChild(ex2);
    }
    if(one&&i>0)q.hidden=true;qs.push(q);el.appendChild(q);
  });
}
function rmotion(){try{return matchMedia("(prefers-reduced-motion: reduce)").matches}catch(e){return false}}
$$(".drill[data-set]").forEach(renderSet);
updateToc();

/* ---------- frasario ---------- */
var fr=$("#frasario");if(fr){fr.innerHTML=FRASI.map(function(g){return '<h3>'+g[0]+'</h3><div class="exs">'+g[1].map(function(r){return '<div class="ex"><div class="ex-body"><div class="it-l" lang="it">'+itHTML(r[0])+'</div><div class="tr">'+esc(r[1])+'</div></div><button class="say" data-say="'+esc(r[0])+'" aria-label="播放">'+SPK+'</button></div>'}).join("")+'</div>'}).join("")}

/* ---------- vocabolario ---------- */
function art(w,g){if(g==="m")return /^[aeiouh]/i.test(w)?"l'":(/^(s[^aeiou]|z|gn|ps|y)/i.test(w)?"lo ":"il ");if(g==="f")return /^[aeiou]/i.test(w)?"l'":"la ";return ""}
function wordHTML(r){var g=r[2],a=art(r[0],g);return g?'<span class="'+g+'"><span class="art">'+a+'</span>'+esc(r[0])+'</span>':esc(r[0])}
function lessonLabel(L){return L.kind==="lesson"?"第 "+L.n+" 课 · "+L.zh:L.zh}
var vt=$("#vocabtbl");if(vt){var rowsV=['<tr><th>意大利语</th><th>中文</th><th>性</th><th></th></tr>'];
  LESSONS.forEach(function(L){var ws=VOC[L.id];if(!ws||!ws.length)return;rowsV.push('<tr class="grp"><td colspan="4">'+esc(lessonLabel(L))+'</td></tr>');
    ws.forEach(function(r){rowsV.push('<tr><td class="itc" lang="it">'+wordHTML(r)+'</td><td>'+esc(r[1])+'</td><td class="fc-g">'+(r[2]==="m"?"阳性":r[2]==="f"?"阴性":"")+'</td><td><button class="say sm" data-say="'+esc(art(r[0],r[2])+r[0])+'" aria-label="播放">'+SPK+'</button></td></tr>')})});
  vt.innerHTML=rowsV.join("")}
/* parole di ogni lezione */
function renderWords(el){var ws=VOC[el.getAttribute("data-voc")]||[];
  el.innerHTML=ws.map(function(r){return '<div class="wd"><span class="wi" lang="it">'+wordHTML(r)+'</span><span class="wz">'+esc(r[1])+'</span><button class="say sm" data-say="'+esc(art(r[0],r[2])+r[0])+'" aria-label="播放">'+SPK+'</button></div>'}).join("")}
$$(".words[data-voc]").forEach(renderWords);
/* sono capace di */
$$("ul.cando[data-cando]").forEach(function(ul){var id=ul.getAttribute("data-cando"),lis=$$("li",ul),st=state.can[id]||[];
  lis.forEach(function(li,i){var lab=document.createElement("label"),cb=document.createElement("input");cb.type="checkbox";cb.checked=!!st[i];
    lab.appendChild(cb);lab.addEventListener("click",function(e){if(e.target.closest&&e.target.closest(".w"))e.preventDefault()});var sp=document.createElement("span");sp.innerHTML=li.innerHTML;lab.appendChild(sp);li.innerHTML="";li.appendChild(lab);
    cb.onchange=function(){var a=state.can[id]||[];a[i]=cb.checked;state.can[id]=a;save();cnt()}});
  var c=document.createElement("li");c.className="cnt";ul.appendChild(c);
  function cnt(){var a=state.can[id]||[],k=a.filter(Boolean).length;c.textContent=k===lis.length?"全部做到了！可以进入下一课。":"已经做到 "+k+" / "+lis.length}
  cnt()});

/* ---------- flashcard ---------- */
function bx(w){return state.box[w[0]]||1}
var fcCur=null,shown=false;
function FW(){var lim=typeof prefs.fcr==="number"?prefs.fcr:-1;if(lim<0){var hi=0;LESSONS.forEach(function(L,li){if(state.best[L.id]||(typeof pathStarted==="function"&&pathStarted(L.id)))hi=li});lim=Math.max(hi+1,LESSONS.findIndex(function(L){return L.id==="l8"}))}return W.filter(function(w){return w[3]<=lim})}
function pick(){var WW=FW(),tot=0,ws=WW.map(function(w){var x=Math.pow(2,5-bx(w));if(w===fcCur)x=0;tot+=x;return x});var r=Math.random()*tot;for(var i=0;i<WW.length;i++){r-=ws[i];if(r<=0)return WW[i]}return WW[0]}
function drawBoxes(){var c=[0,0,0,0,0];FW().forEach(function(w){c[bx(w)-1]++});var mx=Math.max.apply(null,c)||1;
  $("#fcboxes").innerHTML=c.map(function(n,i){return '<div><div class="bar"><i style="height:'+(n/mx*100)+'%"></i></div><b>'+n+'</b><span>盒子 '+(i+1)+'</span></div>'}).join("")}
function drawCard(auto){var w=fcCur,m=prefs.fcm,full=art(w[0],w[2])+w[0];
  var word='<div class="fc-word" lang="it">'+wordHTML(w)+'</div>',gtxt=w[2]==="m"?"阳性名词":w[2]==="f"?"阴性名词":"";
  var front=m==="ear"?'<button class="fc-ear" id="fcplay" type="button" aria-label="播放单词">'+SPK+'</button><p class="fc-hint">听，这是什么意思？先说出来，再看答案。</p>'
    :m==="say"?'<p class="fc-zh">'+esc(w[1])+'</p><p class="fc-hint">用意大利语大声说出来'+(w[2]?'（带冠词）':'')+'，再看答案。</p>'
    :word+'<p class="fc-hint">说出它的意思，再看答案。</p>';
  $("#fccard").innerHTML=shown?word+'<div class="fc-zh">'+esc(w[1])+'</div>'+(gtxt?'<div class="fc-g">'+gtxt+'</div>':'')+'<div class="acts" style="margin-left:0;justify-content:center"><button class="btn" id="fcno">不会</button><button class="btn pri" id="fcyes">会了</button><button class="say" data-say="'+esc(full)+'" aria-label="播放">'+SPK+'</button></div>'
    :front+'<div class="acts" style="margin-left:0;justify-content:center"><button class="btn pri" id="fcshow">看答案</button></div><p class="fc-box">盒子 '+bx(w)+'</p>';
  if(shown){$("#fcno").onclick=function(){grade(false)};$("#fcyes").onclick=function(){grade(true)};speak(full)}
  else{$("#fcshow").onclick=function(){shown=true;drawCard()};var pb=$("#fcplay");if(pb){pb.onclick=function(){speak(full)};if(auto)speak(full)}}}
function grade(ok){state.box[fcCur[0]]=ok?Math.min(5,bx(fcCur)+1):1;save();drawBoxes();next(true)}
function next(auto){fcCur=pick();shown=false;drawCard(auto)}
function drawReset(conf){var r=$("#fcreset");r.innerHTML=conf?'<span>把所有单词放回第 1 个盒子？</span><button class="btn" id="rsy">是，清空</button><button class="btn" id="rsn">取消</button>':'<button class="btn" id="rs">清空单词卡进度</button>';
  if(conf){$("#rsy").onclick=function(){state.box={};save();drawBoxes();next();drawReset(false)};$("#rsn").onclick=function(){drawReset(false)}}else{$("#rs").onclick=function(){drawReset(true)}}}
(function(){var sel=$("#fcrange");if(!sel)return;var cur=FW().length?FW()[FW().length-1][3]:0;
  sel.innerHTML=LESSONS.map(function(L,li){var n=W.filter(function(w){return w[3]<=li}).length;return (VOC[L.id]&&VOC[L.id].length)?'<option value="'+li+'"'+(li===cur?' selected':'')+'>学到：'+esc(lessonLabel(L))+'（'+n+' 个词）</option>':''}).join("");
  sel.onchange=function(){prefs.fcr=+sel.value;savePrefs();drawBoxes();next()}})();
drawBoxes();next();drawReset(false);
function fcMode(m){prefs.fcm=m;savePrefs();$$("[data-fcm]").forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-fcm")===m?"true":"false")});shown=false;drawCard()}
$$("[data-fcm]").forEach(function(b){b.onclick=function(){fcMode(b.getAttribute("data-fcm"))};b.setAttribute("aria-pressed",b.getAttribute("data-fcm")===prefs.fcm?"true":"false")});

/* ---------- barra in alto ---------- */
$("#totop").onclick=function(){var rm=false;try{rm=matchMedia("(prefers-reduced-motion: reduce)").matches}catch(e){}try{window.scrollTo({top:0,behavior:rm?"auto":"smooth"})}catch(e){window.scrollTo(0,0)}};
function applyPrefs(){document.body.classList.toggle("no-tr",!prefs.tr);$("#tbtr").setAttribute("aria-pressed",prefs.tr?"true":"false");$("#tbtrl").textContent=prefs.tr?"显示":"隐藏";$("#tbslow").setAttribute("aria-pressed",prefs.slow?"true":"false");$("#tbslowl").textContent=prefs.slow?"慢":"正常"}
$("#tbtr").onclick=function(){prefs.tr=!prefs.tr;savePrefs();applyPrefs()};
$("#tbslow").onclick=function(){prefs.slow=!prefs.slow;savePrefs();applyPrefs();speak("Ciao!")};
applyPrefs();

/* ---------- ascolto finale ---------- */
function setupReading(root){var btn=$("#rdplay",root);if(!btn)return;var rd=$("#reading",root),lines=$$(".ex",rd);
  var pl=Player(function(){return lines.map(function(l){return {el:l,say:$(".say",l).getAttribute("data-say"),pitch:1.1,mine:false}})},{busy:function(){btn.textContent="■ 停止";btn.dataset.on="1"},idle:function(){btn.textContent="▶ 全部播放";btn.dataset.on=""}});
  btn.onclick=function(){if(btn.dataset.on)pl.stop();else pl.play()};
  var t=$("#tgtxt",root);t.onclick=function(){var h=rd.classList.toggle("hide-it");t.textContent=h?"显示意大利语文字":"隐藏意大利语文字";t.setAttribute("aria-pressed",h?"true":"false")}}
setupReading(document);


/* ---------- coniugatore ---------- */
(function(){var sel=$("#cjverb");if(!sel)return;var tense="pr",rows=[],groups={};
  VERBS.forEach(function(v,i){var k=v.k||v.g;(groups[k]=groups[k]||[]).push(i)});
  sel.innerHTML=["irr","are","ere","ire","isc","rif"].map(function(k){return '<optgroup label="'+GRP[k]+'">'+groups[k].map(function(i){return '<option value="'+i+'">'+VERBS[i].i+' · '+VERBS[i].z+'</option>'}).join("")+'</optgroup>'}).join("");
  var btn=$("#cjplay");
  var pl=Player(function(){return rows},{busy:function(){btn.textContent="■ 停止";btn.dataset.on="1"},idle:function(){btn.textContent="▶ 全部播放";btn.dataset.on=""}});
  btn.onclick=function(){if(btn.dataset.on)pl.stop();else pl.play()};
  function draw(){if(btn.dataset.on)pl.stop();var v=VERBS[+sel.value],F=cjForms(v,tense);
    var irr=v.k==="irr"?'<span class="badge irr">不规则</span>':(v.pp||v.fu?'<span class="badge irr">部分不规则</span>':'<span class="badge">规则</span>');
    $("#cjinfo").innerHTML='<span class="cj-inf" lang="it">'+v.i+'</span><span>'+v.z+'</span><span>'+GRP[v.k||v.g]+'</span>'+irr;
    $("#cjtable").innerHTML='<tr><th>人称</th><th>'+TN[tense]+'</th><th>中文</th><th></th></tr>'+F.map(function(f,i){
      var rf=v.k==="rif"?'<span class="cj-rf">'+RF[i]+'</span> ':"";
      return '<tr><td class="cj-p" lang="it">'+PZ[i]+'</td><td class="cj-f" lang="it">'+rf+f.h+'</td><td class="cj-zh">'+cjZh(v,tense,i)+'</td><td class="cj-play"><button class="say sm" type="button" data-say="'+esc(cjSay(v,tense,i,f))+'" aria-label="播放">'+SPK+'</button></td></tr>'}).join("");
    rows=$$("#cjtable tr").slice(1).map(function(tr){return {el:tr,say:$(".say",tr).getAttribute("data-say"),mine:false}});
    $("#cjtip").textContent=TIP[tense]+(tense==="pp"?" 助动词："+(v.es?"essere":"avere")+"；过去分词："+ppOf(v)+(v.es?"（和主语性数一致）":"")+"。":"")}
  sel.onchange=draw;
  $$("#cjtense .btn").forEach(function(b){b.onclick=function(){tense=b.getAttribute("data-t");$$("#cjtense .btn").forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")});draw()}});
  draw();
})();

/* ---------- tema chiaro / scuro ---------- */
(function(){var b=$("#tbtheme");if(!b)return;var TK=KEY+"-theme",root=document.documentElement,mq=null;try{mq=matchMedia("(prefers-color-scheme: dark)")}catch(e){}
  var MOON='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1z"/></svg>';
  function cur(){return root.getAttribute("data-theme")||(mq&&mq.matches?"dark":"light")}
  function draw(){var d=cur()==="dark";b.setAttribute("aria-pressed",d?"true":"false");b.title=d?"深色模式：开":"深色模式：关";b.setAttribute("aria-label","深色模式");b.innerHTML=MOON+'<span class="tbl">深色</span>'}
  b.onclick=function(){var n=cur()==="dark"?"light":"dark";root.setAttribute("data-theme",n);try{localStorage.setItem(TK,n)}catch(e){}draw()};
  if(mq){try{mq.addEventListener("change",draw)}catch(e){}}
  draw();
})();

/* ---------- tutte le parole italiane cliccabili ---------- */
(function(){
  var MAIN=$("main");if(!MAIN)return;
  var SKIP="button,.w,script,style,.tok,.opts,.fc-card,#fcboxes,.toc,.stats,.kicker,.tip,.legend,#alfabeto,.conjugator,.demo,.map,.hero-card,.xref,.words,.cando,input,select,.fc-range";
  function replaceText(node,html){var t=document.createElement("template");t.innerHTML=html;node.parentNode.replaceChild(t.content,node)}
  function textNodes(root){var out=[],tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null),n;while((n=tw.nextNode())){if(!n.nodeValue.trim())continue;var p=n.parentElement;if(!p||p.closest(SKIP))continue;out.push(n)}return out}
  /* zone tutte in italiano: ogni parola diventa cliccabile */
  function italianZone(el){
    if(el.closest(SKIP)||el.querySelector(".w"))return;
    var kids=Array.prototype.slice.call(el.children);
    if(kids.length&&kids.every(function(k){return k.matches("span.st,span.end")&&!/\s/.test(k.textContent)})){
      var tags=[],h=el.innerHTML.replace(/<[^>]+>/g,function(m){tags.push(m);return "\u0001"+(tags.length-1)+"\u0002"});
      el.innerHTML=h.split(/(\s+)/).map(function(tok){
        if(/^\s*$/.test(tok))return tok;
        var plain=tok.replace(/\u0001\d+\u0002/g,""),m=plain.match(/^([«"(¿¡—–-]*)(.*?)([.,!?;:»")…—]*)$/),core=m?m[2]:plain;
        var back=tok.replace(/\u0001(\d+)\u0002/g,function(_,i){return tags[+i]});
        if(!core||!LET.test(core)||hasHan.test(core))return back;
        return wordSpan(core,back)}).join("");
      return}
    textNodes(el).forEach(function(n){replaceText(n,hasHan.test(n.nodeValue)?linkMixed(n.nodeValue):itHTML(n.nodeValue))});
  }
  $$('.it,.itc,.conj td,td.big,.lhead h2 small,#vocabtbl td[lang="it"]',MAIN).forEach(italianZone);
  /* testo cinese: solo le parole italiane riconosciute dal dizionario */
  textNodes(MAIN).forEach(function(n){if(/[A-Za-zÀ-ÿ]{2}/.test(n.nodeValue)&&!n.parentElement.closest('[lang="it"],.it,.itc,.it-l'))replaceText(n,linkMixed(n.nodeValue))});
})();

/* ---------- indice ---------- */
var d=$("#tocd");try{if(matchMedia("(min-width:1000px)").matches)d.open=true}catch(e){}
$$(".toc a").forEach(function(a){a.addEventListener("click",function(){try{if(!matchMedia("(min-width:1000px)").matches)d.open=false}catch(e){}})});
