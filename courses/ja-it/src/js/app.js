var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var KEY="giapponese-per-italiani-v1";
var state={best:{},box:{},can:{}};
try{var raw=localStorage.getItem(KEY);if(raw){var p=JSON.parse(raw);state.best=p.best||{};state.box=p.box||{};state.can=p.can||{}}}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify({best:state.best,box:state.box,can:state.can}))}catch(e){}}
var prefs={tr:true,slow:false,fcm:"ear",furi:true,ro:"auto"};
try{var pr=JSON.parse(localStorage.getItem(KEY+"-prefs")||"{}");["tr","slow","fcm","furi","ro","fcr"].forEach(function(k){if(pr[k]!==undefined)prefs[k]=pr[k]})}catch(e){}
function savePrefs(){try{localStorage.setItem(KEY+"-prefs",JSON.stringify(prefs))}catch(e){}}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
function rmotion(){try{return matchMedia("(prefers-reduced-motion: reduce)").matches}catch(e){return false}}

/* ---------- voce ----------
   File audio pre-registrati (audio/<hash>.mp3); se manca un file si usa la voce giapponese del dispositivo. */
var voice=null,hasTTS=("speechSynthesis" in window),speakSeq=0,players=[];
var AUD=null;try{AUD=new Audio();AUD.preload="auto"}catch(e){}
function cyrb53(str){var h1=0xdeadbeef,h2=0x41c6ce57;for(var i=0,ch;i<str.length;i++){ch=str.charCodeAt(i);h1=Math.imul(h1^ch,2654435761);h2=Math.imul(h2^ch,1597334677)}
  h1=Math.imul(h1^(h1>>>16),2246822507);h1^=Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507);h2^=Math.imul(h1^(h1>>>13),3266489909);return 4294967296*(2097151&h2)+(h1>>>0)}
function akey(t){return String(t).trim().replace(/\s+/g," ")}
function audioSrc(t){return "audio/"+cyrb53(akey(t)).toString(36)+".mp3"}
function pickVoice(){if(!hasTTS)return;try{var vs=speechSynthesis.getVoices();voice=vs.filter(function(v){return /^ja[-_]JP/i.test(v.lang)})[0]||vs.filter(function(v){return /^ja/i.test(v.lang)})[0]||null}catch(e){}}
if(hasTTS){pickVoice();try{speechSynthesis.onvoiceschanged=pickVoice}catch(e){}}
function stopAll(){try{if(AUD)AUD.pause()}catch(e){}try{if(hasTTS)speechSynthesis.cancel()}catch(e){}}
function stopPlayers(except){players.forEach(function(p){if(p!==except)p.stop(true)})}
function ttsSpeak(t,fin,wait){var txt=jplain(t);
  if(!hasTTS){if(wait)setTimeout(fin,Math.max(800,txt.length*160));return}
  try{speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(txt);u.lang="ja-JP";if(voice)u.voice=voice;u.rate=prefs.slow?.65:.95;
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

/* ---------- parole giapponesi cliccabili ---------- */
function jpHTML(s,plain){var out=[];jtoks(s).forEach(function(t){var su=jsurf(t);
  if(JP_PUNCT.test(su)||!JRUN.test(su)&&!/[A-Za-z0-9]/.test(su)){var pu='<span class="pu">'+esc(su)+'</span>';
    if(out.length&&/^[。、！？」』）…]/.test(su))out[out.length-1]='<span class="nw">'+out[out.length-1]+pu+'</span>';else out.push(pu);return}
  out.push(plain||/^[っッー゛゜]$/.test(su)?'<span class="tk">'+jruby(t)+'</span>':'<span class="w" tabindex="0" role="button" data-say="'+esc(t)+'">'+jruby(t)+'</span>')});
  return out.join("")}
function jLine(s){return '<span class="jl" lang="ja">'+jpHTML(s)+'</span><span class="ro">'+esc(jromaji(s))+'</span>'}
var MIXRE=/([぀-ヿ一-鿿々〆ー〜～「](?:[぀-ヿ一-鿿々〆ー〜～・。、！？「」]|\[[぀-ヿ]+\]| (?=[぀-ヿ一-鿿「〜。、！？]))*)/;
/* kanji without a [reading] are mentions of the character itself: show them plain */
var BAREKJ=/[一-鿿々〆](?![一-鿿々〆]*\[)/;
function mixHTML(text){return String(text).split(MIXRE).map(function(part,i){if(i%2===0)return esc(part);
  if(BAREKJ.test(part))return '<span class="jx" lang="ja">'+esc(part)+'</span>';
  return '<span class="jx" lang="ja">'+jpHTML(part)+'</span><span class="ro-i"> ('+esc(jromaji(part))+')</span>'}).join("")}
function hasJ(s){return JRUN.test(String(s))}
/* meaning of a clicked word: dictionary first, then readable rules (numbers, syllables, polite prefixes, forms of known words) */
var KDIG={"〇":0,"一":1,"二":2,"三":3,"四":4,"五":5,"六":6,"七":7,"八":8,"九":9};
function kanjiNum(x){if(!/^[〇一二三四五六七八九十百千万]+$/.test(x))return null;var tot=0,sec=0,cur=0;
  for(var i=0;i<x.length;i++){var c=x[i];if(c in KDIG)cur=KDIG[c];else if(c==="十"||c==="百"||c==="千"){sec+=(cur||1)*{"十":10,"百":100,"千":1000}[c];cur=0}else if(c==="万"){tot+=((sec+cur)||1)*10000;sec=0;cur=0}}
  return tot+sec+cur}
var MESI=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];
var COUNTERS=[["時間",function(n){return n+(n===1?" ora":" ore")+" (durata)"}],["番線",function(n){return "binario "+n}],["年前",function(n){return n+(n===1?" anno fa":" anni fa")}],
  ["さい",function(n){return n+(n===1?" anno":" anni")+" (età)"}],["歳",function(n){return n+" anni (età)"}],["人",function(n){return n===1?"una persona, da solo":n+" persone"}],["名",function(n){return n+" persone (cortese)"}],
  ["円",function(n){return n+" yen"}],["時",function(n){return "le "+n+" (ora)"}],["分",function(n){return n+(n===1?" minuto":" minuti")}],["本",function(n){return n+" (oggetti lunghi: bottiglie, penne…)"}],
  ["枚",function(n){return n+" (oggetti piatti: fogli, biglietti…)"}],["杯",function(n){return n+" (bicchieri, tazze)"}],["回",function(n){return n+(n===1?" volta":" volte")}],
  ["月",function(n){return MESI[n-1]||(n+" mesi")}],["日",function(n){return n===1?"il primo del mese":"il giorno "+n+"; "+n+" giorni"}],["年",function(n){return n+(n===1?" anno":" anni")}],
  ["番",function(n){return "numero "+n}],["つ",function(n){return n+(n===1?" (una cosa)":" (cose)")}],["つ目",function(n){return n+"° (il "+n+"°)"}]];
function numMeaning(sf){if(/^[〇一二三四五六七八九十百千万]+$/.test(sf))return String(kanjiNum(sf));
  for(var i=0;i<COUNTERS.length;i++){var c=COUNTERS[i][0];if(sf.length>c.length&&sf.slice(-c.length)===c){var head=sf.slice(0,-c.length);
    if(head==="何")return "quanti/quante? (con "+c+")";var n=kanjiNum(head);if(n!=null)return COUNTERS[i][1](n)}}return ""}
function verbOf(form){var v=CONJ_IDX[form];return v?v.split(" · ")[0]:""}
var VRULES=[[/^(.+)たくなかった$/,"ます","non voleva/non volevo: "],[/^(.+)たかった$/,"ます","voleva/volevo: "],[/^(.+)たくない$/,"ます","non voglio: "],[/^(.+)たい$/,"ます","voglio, vorrei: "],
  [/^(.+)ましょうか$/,"ます","facciamo…? (proposta): "],[/^(.+)ましょう$/,"ます","facciamo…! (proposta): "],[/^(.+)ませんか$/,"ます","perché non…? (invito): "],
  [/^(.+)なければ$/,"ない","bisogna, devo (…nakereba naranai): "],[/^(.+)なきゃ$/,"ない","devo (parlato): "],[/^(.+)ないで$/,"ない","senza…; non… (per favore): "],[/^(.+)なくて$/,"ない","non… e (forma -nakute): "],
  [/^(.+[たっんい])たら$/,"た","se/quando… (forma -tara): "],[/^(.+[だ])ら$/,"だ","se/quando… (forma -tara): "],[/^(.+)たら$/,"た","se/quando… (forma -tara): "],
  [/^(.+[てで])(?:います|いる|ます|る|た|ました)$/,"","sta…, ha… (forma -te iru): "],[/^(.+)に$/,"ます","(andare/venire) a… per: "]];
function verbMeaning(sf){for(var i=0;i<VRULES.length;i++){var m=sf.match(VRULES[i][0]);if(!m)continue;var st=m[1],end=VRULES[i][1];
  var v=end===""?verbOf(st):end==="た"||end==="だ"?verbOf(st+end):verbOf(st+end);if(v)return VRULES[i][2]+v}return ""}
var AJ=[["くなかった","non era "],["かった","era (passato): "],["くない","non "],["くて","… e (forma -te): "],["そう","sembra "],["く","in modo… (avverbio): "]];
function adjMeaning(sf){for(var i=0;i<AJ.length;i++){var e=AJ[i][0];if(sf.length>e.length&&sf.slice(-e.length)===e){var b=sf.slice(0,-e.length)+"い";
  var m=DICT[b]||(b==="よい"?DICT["いい"]:"");if(m)return AJ[i][1]+m}}
  var na=sf.match(/^(.+?)(じゃない|じゃありません|ではない|じゃなかった|だった|でした|に|な)$/);if(na&&DICT[na[1]])return DICT[na[1]]+" ("+na[2]+")";return ""}
var READIX=null;
function readIndex(){if(READIX)return READIX;READIX={};Object.keys(DICT).forEach(function(k){if(/\[/.test(k)){var r=jkana(k);if(!READIX[r])READIX[r]=DICT[k]}});return READIX}
function meaning(t){var s=jsurf(t),hit=DICT[t]||DICT[s]||(typeof CONJ_IDX!=="undefined"&&(CONJ_IDX[s]||CONJ_IDX[t]));if(hit)return hit;
  var sf=jplain(t).replace(/^〜/,"");if(sf!==jplain(t)&&(DICT[sf]||DICT["〜"+sf]))return DICT[sf]||DICT["〜"+sf];
  var r=numMeaning(sf)||adjMeaning(sf)||(typeof CONJ_IDX!=="undefined"?verbMeaning(sf):"");if(r)return r;
  if(/^[おご]/.test(sf)&&DICT[sf.slice(1)])return DICT[sf.slice(1)]+" (con お/ご di cortesia)";
  if(/さん$/.test(sf)&&sf.length>2){var b=sf.slice(0,-2);if(DICT[b])return DICT[b]+" (di altri, cortese)";if(/^[ァ-ヺー]+$/.test(b))return "sig./sig.ra "+b}
  if(/^[ぁ-ゖ]+$/.test(sf)){var ri=readIndex()[sf];if(ri)return ri}
  if(/^[ぁ-ゖァ-ヺ][ゃゅょャュョァィゥェォ]?$/.test(sf))return "sillaba «"+jromaji(sf)+"»";
  if(/^[ゃゅょャュョ]$/.test(sf))return "piccola "+jromaji(sf.replace(/./,function(c){return {"ゃ":"や","ゅ":"ゆ","ょ":"よ","ャ":"ヤ","ュ":"ユ","ョ":"ヨ"}[c]}))+": si unisce alla sillaba prima (kya, sho…)";
  return ""}

/* ---------- verbi ---------- */
var GI={"う":"い","く":"き","ぐ":"ぎ","す":"し","つ":"ち","ぬ":"に","ぶ":"び","む":"み","る":"り"},GA={"う":"わ","く":"か","ぐ":"が","す":"さ","つ":"た","ぬ":"な","ぶ":"ば","む":"ま","る":"ら"},
    GE={"う":"え","く":"け","ぐ":"げ","す":"せ","つ":"て","ぬ":"ね","ぶ":"べ","む":"め","る":"れ"},GO={"う":"お","く":"こ","ぐ":"ご","す":"そ","つ":"と","ぬ":"の","ぶ":"ぼ","む":"も","る":"ろ"},
    GTE={"う":"って","つ":"って","る":"って","ぬ":"んで","ぶ":"んで","む":"んで","く":"いて","ぐ":"いで","す":"して"};
var VFORMS=[["dict","forma base (dizionario)","%"],["masu","-masu: presente / futuro cortese","%"],["masen","-masen: negativo cortese","non %"],["mashita","-mashita: passato cortese","%·p"],["masendeshita","-masen deshita: passato negativo cortese","non %·p"],
  ["nai","-nai: negativo informale","non %"],["ta","-ta: passato informale","%·p"],["nakatta","-nakatta: passato negativo informale","non %·p"],["te","forma -te","%·te"],["pot","potenziale: «posso / so»","poter %"],["vol","volitiva: «facciamo! / vorrei fare»","%·v"]];
var VGROUPS=[["Forme cortesi (-masu)",["masu","masen","mashita","masendeshita"]],["Forme informali",["dict","nai","ta","nakatta"]],["Forma -te, potenziale, volitiva",["te","pot","vol"]]];
function vconj(v,f){var d=v.d;
  if(v.g==="irr"){var kuru=/(来\[く\]る|くる)$/.test(d),pre=kuru?d.replace(/(来\[く\]る|くる)$/,""):d.replace(/する$/,"");
    var K=kuru?{dict:"来[く]る",masu:"来[き]ます",masen:"来[き]ません",mashita:"来[き]ました",masendeshita:"来[き]ません でした",nai:"来[こ]ない",ta:"来[き]た",nakatta:"来[こ]なかった",te:"来[き]て",pot:"来[こ]られる",vol:"来[こ]よう"}
      :{dict:"する",masu:"します",masen:"しません",mashita:"しました",masendeshita:"しません でした",nai:"しない",ta:"した",nakatta:"しなかった",te:"して",pot:"できる",vol:"しよう"};
    return pre+K[f]}
  var last=d.slice(-1),stem=d.slice(0,-1),ru=v.g==="ru";
  if(ru){return stem+{dict:"る",masu:"ます",masen:"ません",mashita:"ました",masendeshita:"ません でした",nai:"ない",ta:"た",nakatta:"なかった",te:"て",pot:"られる",vol:"よう"}[f]}
  var te=v.iku?"って":GTE[last],ta=te.replace(/て$/,"た").replace(/で$/,"だ"),na=v.aru?"":stem+GA[last];
  switch(f){case "dict":return d;case "masu":return stem+GI[last]+"ます";case "masen":return stem+GI[last]+"ません";case "mashita":return stem+GI[last]+"ました";
    case "masendeshita":return stem+GI[last]+"ません でした";case "nai":return v.aru?"ない":na+"ない";case "ta":return stem+ta;case "nakatta":return v.aru?"なかった":na+"なかった";
    case "te":return stem+te;case "pot":return stem+GE[last]+"る";case "vol":return stem+GO[last]+"う"}}
function vMeaning(v,f){var z=v.zz||v.z,L=VFORMS.filter(function(x){return x[0]===f})[0];return L?L[1].split(":")[0]:z}
var CONJ_IDX={};
VERBS.forEach(function(v){VFORMS.forEach(function(F){var s=jplain(vconj(v,F[0]));if(!CONJ_IDX[s])CONJ_IDX[s]=v.z+" ("+jplain(v.d)+") · "+F[1].split(":")[0]})});

/* ---------- audio al clic ---------- */
document.addEventListener("click",function(e){var b=e.target.closest("[data-say]");if(b)speak(b.getAttribute("data-say"))});
document.addEventListener("keydown",function(e){var t=e.target;if((e.key==="Enter"||e.key===" ")&&t.classList&&t.classList.contains("w")){e.preventDefault();speak(t.getAttribute("data-say"))}});

/* ---------- tooltip: scrittura, lettura, rōmaji, significato ---------- */
var tip=document.createElement("div");tip.className="tip";tip.setAttribute("role","tooltip");tip.hidden=true;document.body.appendChild(tip);
var tipTimer=null,tipFor=null;
function showTip(w){var h=w.getAttribute("data-say"),s=jsurf(h),r=jread(h),m=meaning(h);
  tip.innerHTML='<span class="tip-w" lang="ja">'+esc(s)+'</span><span class="tip-r">'+(r!==s?'<span lang="ja">'+esc(r)+'</span> · ':'')+esc(jromaji(h))+'</span>'+(m?'<span class="tip-m">'+esc(m)+'</span>':'');
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
function renderExamples(root){$$("div[data-jp]",root).forEach(function(d){if(d.classList.contains("ex"))return;var j=d.getAttribute("data-jp");d.className="ex";
  d.innerHTML='<div class="ex-body"><div class="it-l">'+jLine(j)+'</div><div class="tr">'+esc(d.getAttribute("data-it")||"")+'</div></div><button class="say" data-say="'+esc(j)+'" aria-label="Ascolta">'+SPK+'</button>'})}
renderExamples(document);

/* ---------- tabelle dei kana ---------- */
var KROWS={base:[["","あいうえお"],["k","かきくけこ"],["s","さしすせそ"],["t","たちつてと"],["n","なにぬねの"],["h","はひふへほ"],["m","まみむめも"],["y","や・ゆ・よ"],["r","らりるれろ"],["w","わ・・・を"],["n","ん・・・・"]],
  dak:[["g","がぎぐげご"],["z","ざじずぜぞ"],["d","だぢづでど"],["b","ばびぶべぼ"],["p","ぱぴぷぺぽ"]],
  yoon:[["ky",["きゃ","きゅ","きょ"]],["sh",["しゃ","しゅ","しょ"]],["ch",["ちゃ","ちゅ","ちょ"]],["ny",["にゃ","にゅ","にょ"]],["hy",["ひゃ","ひゅ","ひょ"]],["my",["みゃ","みゅ","みょ"]],["ry",["りゃ","りゅ","りょ"]],["gy",["ぎゃ","ぎゅ","ぎょ"]],["j",["じゃ","じゅ","じょ"]],["by",["びゃ","びゅ","びょ"]],["py",["ぴゃ","ぴゅ","ぴょ"]]]};
function hira2kata(s){return String(s).replace(/[ぁ-ゖ]/g,function(c){return String.fromCharCode(c.charCodeAt(0)+0x60)})}
$$("table.kana").forEach(function(t){var g=t.getAttribute("data-g")||"base",kat=t.getAttribute("data-k")==="kata",rows=KROWS[g],only=(t.getAttribute("data-rows")||"").split(",").filter(Boolean);
  var h="";rows.forEach(function(r,ri){if(only.length&&only.indexOf(String(ri))<0)return;var cells=Array.isArray(r[1])?r[1]:r[1].split("");
    h+='<tr>'+cells.map(function(c){if(c==="・")return '<td class="nk"></td>';var k=kat?hira2kata(c):c;
      return '<td><button class="kc" type="button"'+(/^[っッー゛゜]$/.test(k)?'':' data-say="'+esc(k)+'"')+' aria-label="'+esc(toRomaji(c))+'"><span lang="ja">'+esc(k)+'</span><small>'+esc(toRomaji(c))+'</small></button></td>'}).join("")+'</tr>'});
  t.innerHTML=h});

/* ---------- numeri ---------- */
var NUMJ={base:[["1","一[いち]"],["2","二[に]"],["3","三[さん]"],["4","四[よん]"],["5","五[ご]"],["6","六[ろく]"],["7","七[なな]"],["8","八[はち]"],["9","九[きゅう]"],["10","十[じゅう]"],["11","十一[じゅういち]"],["12","十二[じゅうに]"],["20","二十[にじゅう]"],["30","三十[さんじゅう]"],["0","ゼロ"]],
  big:[["100","百[ひゃく]"],["200","二百[にひゃく]"],["300","三百[さんびゃく]"],["600","六百[ろっぴゃく]"],["800","八百[はっぴゃく]"],["1000","千[せん]"],["3000","三千[さんぜん]"],["8000","八千[はっせん]"],["10000","一万[いちまん]"],["20000","二万[にまん]"],["500","五百[ごひゃく]"],["5000","五千[ごせん]"]]};
$$("table.numtbl").forEach(function(nt){var L=NUMJ[nt.getAttribute("data-set")||"base"],r2='';
  for(var j=0;j<L.length;j+=3){r2+='<tr>'+L.slice(j,j+3).map(function(n){return '<td class="big" style="font-variant-numeric:tabular-nums">'+n[0]+'</td><td class="jpc">'+jLine(n[1])+'</td><td><button class="say sm" data-say="'+esc(n[1])+'" aria-label="Ascolta">'+SPK+'</button></td>'}).join("")+'</tr>'}
  nt.innerHTML=r2});

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
  el.innerHTML='<div class="dl-head"><h3>Dialogo<i lang="ja">会話</i></h3><div class="dl-ctrl"><button class="btn pri dl-play" type="button">'+SPK+' Ascolta tutto</button><button class="btn dl-role" type="button" aria-pressed="false">'+MIC+' Faccio io B</button></div></div>'+
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
/* pronunciation line: kana reading under words with kanji, plus rōmaji unless switched off */
function pronHTML(m){if(!hasJ(m))return "";var k=/[一-鿿々〆]/.test(jplain(m)),ro=prefs.ro!=="off"?jromaji(m):"";
  if(!k&&!ro)return "";return '<span class="opron">'+(k?'<span class="pk" lang="ja">'+esc(jkana(m))+'</span>':'')+(ro?'<span class="pr">'+esc(ro)+'</span>':'')+'</span>'}
function optHTML(o){return hasJ(o)?'<span class="ow">'+jpHTML(o,true)+'</span>'+pronHTML(o):esc(o)}
function renderSet(el,opt){
  opt=opt||{};var id=el.getAttribute("data-set"),items=opt.items||EX[id];if(!items)return;var res=new Array(items.length),one=!!opt.one,qs=[];
  if(one){el.classList.add("one");el.innerHTML='<div class="dhead"><span>'+(opt.head||"")+'</span><span><span class="score">0 / '+items.length+'</span></span></div>'}
  else el.innerHTML='<div class="dhead"><span>Conta la prima risposta. Il «Di\' ad alta voce» lo valuti tu; nei dettati e nei completamenti puoi scrivere in kana o in rōmaji.</span><span>Punti <span class="score">0 / '+items.length+'</span>'+(state.best[id]?' · record '+state.best[id][0]+'/'+state.best[id][1]:'')+'</span></div>';
  var scoreEl=$(".score",el);
  function mark(i,ok){if(res[i]!==undefined)return;res[i]=ok;var n=res.filter(Boolean).length,done=res.filter(function(x){return x!==undefined}).length;scoreEl.textContent=n+" / "+items.length;
    if(opt.onMark)opt.onMark(i,ok,items[i]);
    if(one){qs[i].classList.add(ok?"q-ok":"q-no");if(done<items.length){var nx=document.createElement("div");nx.className="acts qnext";nx.innerHTML='<button class="btn pri" type="button">Avanti →</button>';
        nx.firstChild.onclick=function(){nx.remove();qs[i].hidden=true;var q2=qs[i+1];q2.hidden=false;try{q2.scrollIntoView({block:"start",behavior:rmotion()?"auto":"smooth"})}catch(e){}var f=q2.querySelector(".lsp");if(f&&!opt.noAuto)f.click()};qs[i].appendChild(nx)}
      else if(opt.onDone)opt.onDone(n,items.length,res);return}
    if(done===items.length){var b=state.best[id];if(!b||n>=b[0]){state.best[id]=[n,items.length];save();updateToc()}var r=document.createElement("div");r.className="acts";r.style.marginLeft="0";r.innerHTML='<button class="btn pri">Rifai da capo</button>';r.firstChild.onclick=function(){renderSet(el)};el.appendChild(r)}}
  items.forEach(function(it,i){
    var q=document.createElement("div");q.className="q";
    if(typeof exExtra==="function"&&exExtra(q,it,i,mark)){if(one&&i>0)q.hidden=true;qs.push(q);el.appendChild(q);return}
    var tag=it.t==="say"?'<span class="qtag say-t">'+MIC+'Parla</span>':it.t==="ord"?'<span class="qtag">Componi</span>':it.t==="dict"?'<span class="qtag wr-t">Dettato</span>':it.t==="type"?'<span class="qtag wr-t">Completa</span>':(it.au?'<span class="qtag ear-t">'+SPK+'Ascolta</span>':'<span class="qtag">Scegli</span>');
    if(it.t==="dict"||it.t==="type"){
      var isD=it.t==="dict";
      q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+(isD?'Ascolta e scrivi quello che senti (in kana o in rōmaji).':mixHTML(it.q))+'</span></div>'+
        (isD?'<div class="acts"><button class="btn pri lsp" type="button">'+SPK+' Ascolta</button><span class="lsh">Puoi ascoltare quante volte vuoi.</span></div>':'')+
        '<div class="tin-row"><input class="tin" type="text" lang="ja" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Risposta" placeholder="kana / rōmaji"><button class="btn pri ck" type="button">Controlla</button></div><div class="expl"></div>';
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
      q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+'Di\' in giapponese, ad alta voce: <b>'+mixHTML(it.it)+'</b></span></div>'+
        '<div class="acts"><button class="btn pri sv">Fatto, mostra la risposta</button></div>'+
        '<div class="expl sayans" hidden>'+jLineSay(it.jp)+(it.e?'<span class="sayn">'+mixHTML(it.e)+'</span>':'')+'</div>'+
        '<div class="acts sg" hidden><span class="sgq">Ascolta e confronta. Com\'è andata?</span><button class="btn sgno">Devo esercitarmi</button><button class="btn pri sgok">Giusto</button></div>';
      var ans2=$(".sayans",q),sg=$(".sg",q);
      $(".sv",q).onclick=function(){this.disabled=true;ans2.hidden=false;sg.hidden=false;speak(it.jp)};
      $(".sgok",q).onclick=function(){fin(true)};$(".sgno",q).onclick=function(){fin(false)};
      function fin(ok){$$(".sg button",q).forEach(function(b){b.disabled=true});$(".sgq",q).innerHTML=ok?'<b class="ok">Bravo!</b> Ripeti ancora due volte con ▶.':'<b class="no">Nessun problema.</b> Premi ▶, ripeti insieme alla voce e riprova.';mark(i,ok)}
    }else if(it.t==="ord"){
      q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+mixHTML(it.q)+'</span></div>';
      var line=document.createElement("div");line.className="ordline";var pool=document.createElement("div");pool.className="ordpool";
      var w=shuffle(it.w),g=0;while(w.join(" ")===it.a[0]&&g++<10)w=shuffle(it.w);
      w.forEach(function(t){var b=document.createElement("button");b.className="tok";b.setAttribute("lang","ja");b.setAttribute("data-t",t);b.innerHTML=jpHTML(t,true);b.onclick=function(){if(q.dataset.locked)return;(b.parentNode===pool?line:pool).appendChild(b)};pool.appendChild(b)});
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
      order.forEach(function(k){var o=it.o[k];var b=document.createElement("button");b.className="opt";if(hasJ(o))b.setAttribute("lang","ja");b.innerHTML=optHTML(o,it);
        b.onclick=function(){var ok=k===0;$$(".opt",opts).forEach(function(x,xi){x.disabled=true;var ov=it.o[order[xi]];if(hasJ(ov)&&!$(".opron",x))x.insertAdjacentHTML("beforeend",pronHTML(ov))});opts.children[order.indexOf(0)].classList.add("right");if(!ok)b.classList.add("wrong");
          ex2.innerHTML=(ok?'<b class="ok">Giusto!</b> ':'<b class="no">No.</b> ')+(it.w?'<span class="wline"><span lang="ja">'+jpHTML(it.w[0])+'</span>'+pronHTML(it.w[0])+'</span> = '+esc(it.w[1]):mixHTML(it.e||""))+(hasJ(it.o[0])&&!/[A-Za-zÀ-ÿ]{2}/.test(it.o[0])&&jtoks(it.o[0]).length>1&&!it.au?' '+jLineSay(it.o[0]):'');
          if(it.au){var r=$(".lsr",q);r.hidden=false;r.innerHTML='Hai sentito: '+jLineSay(it.au)+(it.w?pronHTML(it.au):'')}
          mark(i,ok)};opts.appendChild(b)});
      q.appendChild(opts);q.appendChild(ex2);
    }
    if(one&&i>0)q.hidden=true;qs.push(q);el.appendChild(q);
  })}
$$(".drill[data-set]").forEach(function(d){renderSet(d)});
updateToc();

/* ---------- frasario ---------- */
var fr=$("#frasario");if(fr){fr.innerHTML=FRASI.map(function(g){return '<h3>'+esc(g[0])+'</h3><div class="exs">'+g[1].map(function(r){return '<div data-jp="'+esc(r[0])+'" data-it="'+esc(r[1])+'"></div>'}).join("")+'</div>'}).join("");renderExamples(fr)}

/* ---------- parole e vocabolario ---------- */
var W=[];LESSONS.forEach(function(L,li){(VOC[L.id]||[]).forEach(function(r){W.push([r[0],r[1],r[2],li,L.id]);var s=jsurf(r[0]);if(!DICT[s])DICT[s]=r[1];if(!DICT[r[0]])DICT[r[0]]=r[1]})});
var TYP={n:"nome",v:"verbo",a:"aggettivo",x:"espressione"};
function wordHTML(r){return '<span class="jl" lang="ja">'+jpHTML(r[0],true)+'</span>'}
function lessonLabel(L){return L.kind==="lesson"?"Lezione "+L.n+" · "+L.t:L.t}
var vt=$("#vocabtbl");if(vt){var rowsV=['<tr><th>Giapponese</th><th>Italiano</th><th></th></tr>'];
  LESSONS.forEach(function(L){var ws=VOC[L.id];if(!ws||!ws.length)return;rowsV.push('<tr class="grp"><td colspan="3">'+esc(lessonLabel(L))+'</td></tr>');
    ws.forEach(function(r){rowsV.push('<tr><td class="jpc">'+wordHTML(r)+'<span class="rom">'+esc(jromaji(r[0]))+'</span></td><td>'+esc(r[1])+'</td><td><button class="say sm" data-say="'+esc(r[0])+'" aria-label="Ascolta">'+SPK+'</button></td></tr>')})});
  vt.innerHTML=rowsV.join("")}
function renderWords(el){var ws=VOC[el.getAttribute("data-voc")]||[];
  el.innerHTML=ws.map(function(r){return '<div class="wd"><span class="wi">'+wordHTML(r)+'<span class="ro">'+esc(jromaji(r[0]))+'</span></span><span class="wz">'+esc(r[1])+'</span><button class="say sm" data-say="'+esc(r[0])+'" aria-label="Ascolta">'+SPK+'</button></div>'}).join("")}
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
function FW(){var lim=typeof prefs.fcr==="number"?prefs.fcr:-1;if(lim<0){var hi=0;LESSONS.forEach(function(L,li){if(state.best[L.id]||(typeof pathStarted==="function"&&pathStarted(L.id)))hi=li});lim=Math.max(hi+1,LESSONS.findIndex(function(L){return L.id==="l8"}))}return W.filter(function(w){return w[3]<=lim})}
function pick(){var WW=FW(),tot=0,ws=WW.map(function(w){var x=Math.pow(2,5-bx(w));if(w===fcCur)x=0;tot+=x;return x});var r=Math.random()*tot;for(var i=0;i<WW.length;i++){r-=ws[i];if(r<=0)return WW[i]}return WW[0]}
function drawBoxes(){var b=$("#fcboxes");if(!b)return;var c=[0,0,0,0,0];FW().forEach(function(w){c[bx(w)-1]++});var mx=Math.max.apply(null,c)||1;
  b.innerHTML=c.map(function(n,i){return '<div><div class="bar"><i style="height:'+(n/mx*100)+'%"></i></div><b>'+n+'</b><span>scatola '+(i+1)+'</span></div>'}).join("")}
function drawCard(auto){var card=$("#fccard");if(!card||!fcCur)return;var w=fcCur,m=prefs.fcm;
  var word='<div class="fc-word">'+wordHTML(w)+'<span class="ro fc-ro">'+esc(jromaji(w[0]))+'</span></div>';
  var front=m==="ear"?'<button class="fc-ear" id="fcplay" type="button" aria-label="Ascolta la parola">'+SPK+'</button><p class="fc-hint">Ascolta: che cosa significa? Dillo, poi guarda la risposta.</p>'
    :m==="say"?'<p class="fc-zh">'+esc(w[1])+'</p><p class="fc-hint">Dillo ad alta voce in giapponese, poi guarda la risposta.</p>'
    :'<div class="fc-word">'+wordHTML(w)+'</div><p class="fc-hint">Che cosa significa? Dillo, poi guarda la risposta.</p>';
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
var ROL={auto:"auto",on:"sì",off:"no"};
$("#totop").onclick=function(){try{window.scrollTo({top:0,behavior:rmotion()?"auto":"smooth"})}catch(e){window.scrollTo(0,0)}};
function applyPrefs(){var B=document.body;B.classList.toggle("no-tr",!prefs.tr);B.classList.toggle("no-furi",!prefs.furi);B.classList.toggle("ro-on",prefs.ro==="on");B.classList.toggle("ro-auto",prefs.ro==="auto");
  $("#tbtr").setAttribute("aria-pressed",prefs.tr?"true":"false");$("#tbtrl").textContent=prefs.tr?"sì":"no";
  $("#tbfuri").setAttribute("aria-pressed",prefs.furi?"true":"false");$("#tbfuril").textContent=prefs.furi?"sì":"no";
  $("#tbro").setAttribute("aria-pressed",prefs.ro!=="off"?"true":"false");$("#tbrol").textContent=ROL[prefs.ro];
  $("#tbslow").setAttribute("aria-pressed",prefs.slow?"true":"false");$("#tbslowl").textContent=prefs.slow?"lenta":"normale"}
$("#tbtr").onclick=function(){prefs.tr=!prefs.tr;savePrefs();applyPrefs()};
$("#tbfuri").onclick=function(){prefs.furi=!prefs.furi;savePrefs();applyPrefs()};
$("#tbro").onclick=function(){prefs.ro=prefs.ro==="auto"?"on":prefs.ro==="on"?"off":"auto";savePrefs();applyPrefs()};
$("#tbslow").onclick=function(){prefs.slow=!prefs.slow;savePrefs();applyPrefs();speak("こんにちは")};
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
  var t=$("#tgtxt",root);t.onclick=function(){var h=rd.classList.toggle("hide-it");t.textContent=h?"Mostra il testo giapponese":"Nascondi il testo giapponese";t.setAttribute("aria-pressed",h?"true":"false")}}
setupReading(document);

/* ---------- coniugatore ---------- */
(function(){var sel=$("#cjverb");if(!sel)return;var grp=0,rows=[],G={u:"Gruppo 1 (godan, -u)",ru:"Gruppo 2 (ichidan, -ru)",irr:"Irregolari"};
  sel.innerHTML=["u","ru","irr"].map(function(k){return '<optgroup label="'+G[k]+'">'+VERBS.map(function(v,i){return v.g===k?'<option value="'+i+'">'+esc(jplain(v.d))+' · '+esc(v.z)+'</option>':''}).join("")+'</optgroup>'}).join("");
  var btn=$("#cjplay");
  var pl=Player(function(){return rows},{busy:function(){btn.textContent="■ Stop";btn.dataset.on="1"},idle:function(){btn.textContent="▶ Ascolta tutto";btn.dataset.on=""}});
  btn.onclick=function(){if(btn.dataset.on)pl.stop();else pl.play()};
  function draw(){if(btn.dataset.on)pl.stop();var v=VERBS[+sel.value];
    $("#cjinfo").innerHTML='<span class="cj-inf">'+jLine(v.d)+'</span><span>'+esc(v.z)+'</span><span>'+G[v.g]+'</span>';
    $("#cjtable").innerHTML='<tr><th>Forma</th><th>Giapponese</th><th></th></tr>'+VGROUPS[grp][1].map(function(f){var F=VFORMS.filter(function(x){return x[0]===f})[0],j=vconj(v,f);
      return '<tr><td class="cj-p">'+esc(F[1])+'</td><td class="cj-f">'+jLine(j)+'</td><td class="cj-play"><button class="say sm" type="button" data-say="'+esc(j)+'" aria-label="Ascolta">'+SPK+'</button></td></tr>'}).join("");
    rows=$$("#cjtable tr").slice(1).map(function(tr){return {el:tr,say:$(".say",tr).getAttribute("data-say"),mine:false}})}
  sel.onchange=draw;
  $$("#cjtense .btn").forEach(function(b,bi){b.onclick=function(){grp=bi;$$("#cjtense .btn").forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")});draw()}});
  draw()})();

/* ---------- tema chiaro / scuro ---------- */
(function(){var b=$("#tbtheme");if(!b)return;var TK=KEY+"-theme",root=document.documentElement,mq=null;try{mq=matchMedia("(prefers-color-scheme: dark)")}catch(e){}
  var MOON='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1z"/></svg>';
  function cur(){return root.getAttribute("data-theme")||(mq&&mq.matches?"dark":"light")}
  function draw(){var d=cur()==="dark";b.setAttribute("aria-pressed",d?"true":"false");b.title=d?"Tema scuro: attivo":"Tema scuro: spento";b.setAttribute("aria-label","Tema scuro");b.innerHTML=MOON+'<span class="tbl">scuro</span>'}
  b.onclick=function(){var n=cur()==="dark"?"light":"dark";root.setAttribute("data-theme",n);try{localStorage.setItem(TK,n)}catch(e){}draw()};
  if(mq){try{mq.addEventListener("change",draw)}catch(e){}}
  draw()})();

/* ---------- tutto il giapponese nel testo diventa cliccabile ---------- */
var SKIPJ=".hero-card,.stats,.legend,.lhead,.partttl,.toc,.kj,button,.w,.tk,.jl,.jx,.ro,.ro-i,script,style,.tok,.opts,.fc-card,#fcboxes,.toc,.stats,.kicker,.tip,input,select,.fc-range,.kana,rt";
function jpZone(root){var out=[],tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null),n;
  while((n=tw.nextNode())){if(!JRUN.test(n.nodeValue))continue;var p=n.parentElement;if(!p||p.closest(SKIPJ))continue;out.push(n)}
  out.forEach(function(n){var t=document.createElement("template");t.innerHTML=mixHTML(n.nodeValue);n.parentNode.replaceChild(t.content,n)})}
jpZone($("main")||document.body);

/* ---------- indice ---------- */
var tocd=$("#tocd");try{if(tocd&&matchMedia("(min-width:1000px)").matches)tocd.open=true}catch(e){}
$$(".toc a").forEach(function(a){a.addEventListener("click",function(){try{if(!matchMedia("(min-width:1000px)").matches)tocd.open=false}catch(e){}})});
