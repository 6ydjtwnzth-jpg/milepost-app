/* Milepost course app: runs inside a course page and replaces the old map with
   five tabs (Today, Course, Exam, Culture, Tools). Nothing is locked: lessons are
   suggested, never gated. It reuses the course engine (steps, quizzes, audio). */
(function(){
"use strict";
if(!window.MPPlan||!window.CATALOG||typeof UNITS==="undefined"||typeof KEY==="undefined")return;
var M=MPPlan,C=null;
CATALOG.courses.forEach(function(c){if(c.storageKey===KEY)C=c});
if(!C)return;
var ZH=C.speak==="zh";
/* lang attribute of the language being learned */
var LL={ja:"ja",zh:"zh-CN",it:"it"}[C.learn]||C.learn;
var S={
it:{locale:"it-IT",tabs:["Oggi","Corso","Esame","Cultura","Strumenti"],hi:["Buongiorno","Buon pomeriggio","Buonasera"],
  steps:{dlg:"Dialogo",voc:"Parole",rule:"Grammatica",rev:"Ripasso",snd:"Suoni e scrittura",cult:"Cultura",test:"Verifica"},
  stepSub:{dlg:"Ascolta, leggi, recita",voc:function(n){return n+" parole nuove"},snd:"Ascolta e ripeti",cult:function(n){return n===1?"1 scheda":n+" schede"},test:function(n){return n+" domande · aggiorna la padronanza"}},
  lesson:function(n){return "Lezione "+n},review:"Ripasso",min:"min",left:function(m){return "circa "+m+" min rimasti"},
  forToday:"Per oggi",forTodaySub:function(m){return "Il tuo tempo: "+m+" min"},resume:"Riprendi",go:"Vai",
  next:"Prossimo passo",reviewT:"Ripasso parole",reviewS:function(n){return n+" parole: tornano più spesso quelle che dimentichi"},
  dayCult:"Curiosità del giorno",read:"Leggi",week:"Settimana",days:"giorni",canDo:"Ora sai fare",canDoEmpty:"Qui compariranno le cose che sai fare, man mano che verifichi le lezioni.",
  noPlan:"Crea il tuo piano",noPlanS:"Tre domande e sai quando arrivi al traguardo.",
  course:"Il corso",here:"Sei qui",todo:"Da fare",inProg:function(a,b){return a+" di "+b},verified:"Verificata",
  knowT:"Alla fine saprai",introT:"In questa lezione",stepsT:"Studia passo passo",stepsS:"Ogni tappa dura pochi minuti. L'ordine consigliato è questo, ma puoi aprirle come vuoi.",rulesT:"Le regole",rulesS:"Tocca una regola per leggerla qui. «Esercitati» apre la spiegazione con gli esercizi.",practiceBtn:"Esercitati",introR:"Introduzione",wordsT:"Le parole",wordsS:"Tocca ▶ per ascoltare, tocca la parola per lettura e significato.",showAll:function(n){return "Mostra tutte ("+n+")"},ahead:function(n){return "Stai andando avanti rispetto al percorso consigliato (sei alla lezione "+n+"). Puoi farlo: se qualcosa non torna, ripassa da lì."},
  backTo:"Torna alla lezione consigliata",readAll:"Leggi la lezione intera",cont:function(s){return "Continua: "+s},redo:"Rifai la verifica",start:"Comincia",
  exam:"Esame",examNone:"Non hai scelto un esame.",examNoneS:"Se ti prepari a un esame, il piano arriva fino al giorno della prova.",chooseExam:"Scegli un esame",
  examIn:function(n){return n===1?"giorno":"giorni"},ready:function(d){return "Al ritmo attuale sei pronto verso "+d+"."},margin:function(w){return w<=1?"Arrivi giusto in tempo.":w+" settimane di margine."},late:function(w){return "Al ritmo attuale arrivi "+w+" settimane dopo l'esame: aumenta un po' il tempo o scegli una sessione successiva."},
  noDate:"Data dell'esame non ancora scelta.",sections:"Per sezione",sectionsSoon:"La preparazione per sezione (vocabolario, grammatica, lettura, ascolto) arriva con le simulazioni d'esame.",
  sim:"Simulazione completa",simS:"Formato reale, a tempo",soon:"In arrivo",mastery:"Padronanza delle lezioni verificate",planT:"Il tuo piano",
  onTrack:"In linea col piano",ahead2:function(n){return "Avanti di "+n+(n===1?" giorno":" giorni")},behind:function(n){return "Indietro di "+n+(n===1?" giorno":" giorni")},practice:"Allenamento d'esame",
  cult:"Cultura",cultLead:C.learn==="zh"?"Italia e Cina a confronto: abitudini, cibo, lavoro, feste. Ogni scheda ha parole da ascoltare e una domanda.":"Italia e Giappone a confronto: abitudini, cibo, lavoro, feste. Ogni scheda ha parole da ascoltare e una domanda.",
  all:"Tutte",readCount:function(a,b){return a+" di "+b+" lette"},stories:"Racconti",storiesLead:"Letture brevi con audio: le parole nuove hanno il loro significato e la traduzione la apri solo quando ti serve.",afterL:function(n){return "dopo la lezione "+n},afterR:"dopo il ripasso",mins:function(m){return m+" min"},soonStories:"Altri racconti",soonT:"In arrivo",playAll:"Ascolta tutto",stopAll:"Stop",trAll:"Traduzione",trOne:"Traduci",newWords:function(n){return "Parole nuove · "+n},storyQ:"Hai capito?",storyDone:"Letto",storyDoneT:"Racconto letto",nextStory:"Prossimo racconto",backCult:"Torna a Cultura",storyListen:"Ascolta la frase",readMark:"Letta",fromLesson:function(n){return "Lezione "+n},
  tools:"Strumenti",toolList:C.learn==="zh"?{flash:["Flashcard","Ripasso a intervalli"],verbi:["I tempi del verbo","Senza coniugazioni: 了, 过, 着…"],frasi:["Frasario","Frasi pronte"],vocab:["Vocabolario","Tutte le parole del corso"],tratti:["Scrivere 1","I tratti e il loro ordine"],caratteri:["Scrivere 2","Com'è fatto un carattere"]}
    :{flash:["Flashcard","Ripasso a intervalli"],verbi:["Coniugatore","Tutte le forme dei verbi"],kana:["Kana","Hiragana e katakana con audio"],frasi:["Frasario","Frasi pronte"],vocab:["Vocabolario","Tutte le parole del corso"]},
  dailyRev:["Ripasso del giorno","Le parole che stai per dimenticare"],
  settings:"Impostazioni",readingT:"Lettura e voce",
  offT:"Senza connessione",offPages:"Le lezioni sono già salvate su questo dispositivo.",offBtn:function(mb){return "Scarica l'audio del corso ("+mb+" MB)"},offBusy:function(a,b){return "Scaricamento… "+a+" di "+b}
  ,offDone:"Fatto: lezioni e audio funzionano anche senza connessione.",offErr:"Download interrotto: riprova con una connessione stabile.",offVoice:"La voce è quella del tuo dispositivo: funziona anche senza connessione.",voiceT:"Voce cinese",voiceAuto:"Automatica",voiceTip:"Su iPhone la voce più naturale è una voce cinese «Premium» o «Ottimizzata»: si scarica gratis da Impostazioni › Accessibilità › Contenuto letto › Voci › Cinese (Cina continentale). Poi sceglila qui.",theme:"Tema",themes:["Auto","Chiaro","Scuro"],redoPlan:"Rifai il piano",changeCourse:"Cambia corso o lingua",reset:"Cancella tutto e ricomincia",resetQ:"Cancellare piano e progressi salvati in questo dispositivo?",close:"Chiudi",back:"Indietro"},
zh:{locale:"zh-CN",tabs:["今天","课程","考试","文化","工具"],hi:["早上好","下午好","晚上好"],
  steps:{dlg:"对话",voc:"单词",rule:"语法",rev:"复习",snd:"发音",cult:"文化",test:"小测验"},
  stepSub:{dlg:"听、读、跟着说",voc:function(n){return n+" 个新单词"},snd:"听和跟读",cult:function(n){return n+" 张卡片"},test:function(n){return n+" 道题 · 更新掌握度"}},
  lesson:function(n){return "第 "+n+" 课"},review:"复习",min:"分钟",left:function(m){return "还剩约 "+m+" 分钟"},
  forToday:"今天",forTodaySub:function(m){return "你的时间："+m+" 分钟"},resume:"继续",go:"开始",
  next:"下一步",reviewT:"复习单词",reviewS:function(n){return n+" 个单词：容易忘的会更常出现"},
  dayCult:"今日文化",read:"阅读",week:"本周",days:"天",canDo:"现在你能",canDoEmpty:"完成小测验后，这里会显示你学会做的事。",
  noPlan:"制定你的计划",noPlanS:"三个问题，就知道什么时候达到目标。",
  course:"课程",here:"你在这里",todo:"未开始",inProg:function(a,b){return a+" / "+b},verified:"已掌握",
  knowT:"学完后你能",introT:"这一课",stepsT:"一步一步学",stepsS:"每一步只需要几分钟。推荐按这个顺序，但你可以随意打开。",rulesT:"语法规则",rulesS:"点一条规则就在这里阅读。「练习」会打开讲解和练习。",practiceBtn:"练习",introR:"导入",wordsT:"单词",wordsS:"点 ▶ 听发音，点单词看意思。",showAll:function(n){return "显示全部（"+n+"）"},ahead:function(n){return "你比推荐的进度走得快（推荐第 "+n+" 课）。可以继续；如果有不懂的，回去复习。"},
  backTo:"回到推荐的课",readAll:"阅读整课内容",cont:function(s){return "继续："+s},redo:"再做一次小测验",start:"开始",
  exam:"考试",examNone:"你还没有选择考试。",examNoneS:"如果你在准备考试，计划会一直安排到考试那天。",chooseExam:"选择考试",
  examIn:function(){return "天"},ready:function(d){return "按现在的节奏，大约 "+d+" 准备好。"},margin:function(w){return w<=1?"刚好赶上。":"比考试提前 "+w+" 周。"},late:function(w){return "按现在的节奏，会比考试晚 "+w+" 周：每天多学一点，或者选择下一次考试。"},
  noDate:"还没有选择考试日期。",sections:"各部分",sectionsSoon:"各部分的准备情况（词汇、语法、阅读、听力）会和模拟考试一起推出。",
  sim:"完整模拟考试",simS:"真实格式，限时",soon:"即将推出",mastery:"已完成小测验的掌握度",planT:"你的计划",
  onTrack:"按计划进行",ahead2:function(n){return "提前 "+n+" 天"},behind:function(n){return "落后 "+n+" 天"},practice:"考前训练",
  cult:"文化",cultLead:"意大利和中国对比：习惯、饮食、工作、节日。每张卡片都有可以听的单词和一个问题。",
  all:"全部",readCount:function(a,b){return "已读 "+a+" / "+b},stories:"故事",storiesLead:"有录音的短篇阅读：生词都有解释，翻译需要时再打开。",afterL:function(n){return "学完第 "+n+" 课"},afterR:"复习之后",mins:function(m){return m+" 分钟"},soonStories:"更多故事",soonT:"即将推出",playAll:"全部播放",stopAll:"停止",trAll:"翻译",trOne:"翻译",newWords:function(n){return "生词 · "+n},storyQ:"读懂了吗？",storyDone:"已读",storyDoneT:"故事已读完",nextStory:"下一个故事",backCult:"回到文化",storyListen:"听这句话",readMark:"已读",fromLesson:function(n){return "第 "+n+" 课"},
  tools:"工具",toolList:{flash:["单词卡","间隔重复"],verbi:["动词变位","所有动词形式"],frasi:["常用句","现成的句子"],vocab:["词汇表","课程里的所有单词"]},
  dailyRev:["今日复习","快要忘记的单词"],
  settings:"设置",readingT:"阅读和语音",
  offT:"离线使用",offPages:"课程页面已保存在这台设备上。",offBtn:function(mb){return "下载课程音频（"+mb+" MB）"},offBusy:function(a,b){return "正在下载… "+a+" / "+b}
  ,offDone:"完成：没有网络也能上课和听音频。",offErr:"下载中断：请在网络稳定时重试。",offVoice:"使用设备自带的语音，没有网络也能用。",voiceT:"中文语音",voiceAuto:"自动",voiceTip:"在 iPhone 上，最自然的是「高品质」或「增强」中文语音：可在 设置 › 辅助功能 › 朗读内容 › 声音 › 中文（中国大陆） 免费下载，然后在这里选择。",theme:"主题",themes:["自动","浅色","深色"],redoPlan:"重新制定计划",changeCourse:"更换课程或语言",reset:"清除全部并重新开始",resetQ:"清除本设备上保存的计划和进度？",close:"关闭",back:"返回"}
}[C.speak];

function q(s,r){return (r||document).querySelector(s)}
function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function h(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function fmt(d,o){try{return new Intl.DateTimeFormat(S.locale,o||{day:"numeric",month:"long",year:"numeric"}).format(d)}catch(e){return M.iso(d)}}
function icon(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+p+'</svg>'}
var I={
  today:icon('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
  course:icon('<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M9 7h6"/>'),
  exam:icon('<path d="M5 3h10l4 4v14H5z"/><path d="M9 13l2.5 2.5L16 10"/>'),
  cult:icon('<path d="M3 10l9-6 9 6"/><path d="M5 10v9h14v-9M9 19v-5h6v5"/>'),
  tools:icon('<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>'),
  gear:icon('<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2.2"/><circle cx="10" cy="17" r="2.2"/>'),
  back:icon('<path d="M15 6l-6 6 6 6"/>'),arrow:icon('<path d="M5 12h14M13 6l6 6-6 6"/>'),check:icon('<path d="M5 12l5 5 9-10"/>'),
  dlg:icon('<path d="M3 12a9 9 0 1 1 4 7.5L3 21l1.5-4A9 9 0 0 1 3 12z"/>'),voc:icon('<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 10h8M8 14h5"/>'),
  rule:icon('<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>'),rev:icon('<path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/>'),
  snd:icon('<path d="M3 12h3l3-7 4 14 3-7h5"/>'),cultS:icon('<path d="M3 10l9-6 9 6M5 10v9h14v-9"/>'),test:icon('<path d="M5 3h10l4 4v14H5z"/><path d="M9 13l2.5 2.5L16 10"/>'),
  cards:icon('<rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>')
};

/* ---------- course data helpers ---------- */
function title(U){return ZH?U.zh:U.t}
function subT(U){return ZH?U.it:U.j}
function kick(U){var lv=(WORLDS[U.w-1]||{}).level||"";return (U.kind==="lesson"?S.lesson(U.n):S.review)+" · "+lv}
function stepMinutes(id,st){
  if(st.k==="dlg")return 6;
  if(st.k==="voc")return Math.max(4,Math.round(lessonWords(id).length*0.4));
  if(st.k==="rule"||st.k==="rev"){var t=0;st.n.forEach(function(n){t+=tlen(n)});return Math.max(4,Math.min(15,Math.round(t/260)+(st.k==="rule"&&st.i===st.of-1?3:0)))}
  if(st.k==="snd")return 5;
  if(st.k==="cult")return 3*(CULT[id]||[]).length;
  return Math.round(exSplit(id).t.length*0.6)+2}
function stepDone(id,st){return st.k==="test"?!!(P.sc[id]):!!(P.done[id]&&P.done[id][st.key])}
function info(id){var ss=stepsOf(id),tot=0,left=0,done=0;ss.forEach(function(st){var m=stepMinutes(id,st);tot+=m;if(stepDone(id,st))done++;else left+=m});
  var sc=P.sc[id],pc=sc?Math.round(sc[0]/Math.max(1,sc[1])*100):null;
  return {steps:ss,tot:tot,left:left,done:done,n:ss.length,pc:pc,verified:pc!=null&&pc>=70,started:done>0}}
function nextOf(id){var ss=stepsOf(id);for(var i=0;i<ss.length;i++)if(!stepDone(id,ss[i]))return ss[i];return null}
function hereIdx(){for(var i=0;i<UNITS.length;i++){var U=UNITS[i];if(U.w<(P.skip||1))continue;if(!info(U.id).verified)return i}return -1}
function canDo(id){var s=sec(id),cd=s&&q("ul.cando",s);if(!cd)return [];
  return qa("li:not(.cnt)",cd).map(function(li){var x=li.cloneNode(true);qa("input,rt,.ro-i,.ro",x).forEach(function(e){e.remove()});return x.textContent.replace(/\s+/g," ").trim()}).filter(Boolean)}
function stepSub(id,st){var d=S.stepSub[st.k];
  if(st.k==="voc")return d(lessonWords(id).length);
  if(st.k==="cult")return d((CULT[id]||[]).length);
  if(st.k==="test")return d(exSplit(id).t.length);
  if(st.k==="rule"||st.k==="rev"){var hd=null;st.n.some(function(n){if(n.matches&&n.matches("h3")){hd=n;return true}var x=n.querySelector&&n.querySelector("h3");if(x){hd=x;return true}return false});
    if(hd){var c=hd.cloneNode(true);qa("rt,.ro-i",c).forEach(function(e){e.remove()});return c.textContent.replace(/\s+/g," ").trim()}return ""}
  return typeof d==="string"?d:""}
function stepLabel(st){return S.steps[st.k]+(st.of>1?" "+(st.i+1)+"/"+st.of:"")}

/* ---------- culture ---------- */
var CK=KEY+"-cultread";
function cultRead(){return M.store.get(CK)||{}}
function allCult(){var out=[];UNITS.forEach(function(U){(CULT[U.id]||[]).forEach(function(c,i){out.push({c:c,u:U,key:U.id+":"+i})})});return out}
function plainCult(c){var t=document.createElement("div");t.innerHTML=cultHTML(c);qa("rt,.ro-i,.ro",t).forEach(function(e){e.remove()});
  var p=qa(".cc-body > p",t).filter(function(x){return !x.classList.contains("cc-it")})[0];return p?p.textContent.replace(/\s+/g," ").trim():""}
function dayCult(){var all=allCult();if(!all.length)return null;var hi=Math.max(0,hereIdx());
  var pool=all.filter(function(x){return UNITS.indexOf(x.u)<=hi+2});if(!pool.length)pool=all;
  var d=M.today(),n=d.getFullYear()*372+d.getMonth()*31+d.getDate();return pool[n%pool.length]}
function openCult(x){var c=x.c;
  runStage({title:S.cult+" · "+title(x.u),color:x.u.color,pages:[{gate:!!c.q,draw:function(box,rel){box.innerHTML=cultHTML(c);
    if(c.q){var d=document.createElement("div");d.className="drill cc-q";box.appendChild(d);renderSet(d,{items:[c.q],one:true,head:ZH?"问题":"Domanda",onDone:function(){rel()}})}},go:S.close}],
    done:function(){var r=cultRead();r[x.key]=1;M.store.set(CK,r);render()}})}
function cultCard(x,big){var r=cultRead()[x.key];
  return '<button class="mp-cc'+(big?' big':'')+'" data-ck="'+h(x.key)+'"><span class="art t-'+x.u.color+'">'+(x.c.s?'<svg viewBox="0 0 320 180" aria-hidden="true"><use href="#sc-'+x.c.s+'"/></svg>':'')+'</span>'+
    '<span class="tx"><b>'+h(x.c.t)+'</b>'+(big?'<small>'+h(plainCult(x.c).slice(0,140))+'…</small>':'')+'<em>'+h(x.u.kind==="lesson"?S.fromLesson(x.u.n):S.review)+(r?' · ✓ '+h(S.readMark):'')+'</em></span></button>'}
function bindCult(root){qa("[data-ck]",root).forEach(function(b){b.onclick=function(){var k=b.getAttribute("data-ck");allCult().forEach(function(x){if(x.key===k)openCult(x)})}})}

/* ---------- stories: short graded readings (courses/<id>/src/reads.js) ----------
   Words come from the lessons up to «after»; the few new ones are glossed. Translations stay hidden until asked. */
var RK=KEY+"-reads",READ=typeof READS!=="undefined"?READS:[],storyPl=null;
function readsDone(){return M.store.get(RK)||{}}
function sLine(t){return typeof jLine==="function"?jLine(t):'<span lang="it">'+itHTML(t)+'</span>'}
function sWord(t){return typeof jpHTML==="function"?'<span lang="'+LL+'">'+jpHTML(t)+'</span>':'<span lang="it">'+itHTML(t)+'</span>'}
function sRich(t){return typeof mixHTML==="function"?mixHTML(t):h(t)}
/* new words get a meaning on tap and hover, unless the course already has one */
READ.forEach(function(r){(r.gloss||[]).forEach(function(g){
  var k=ZH&&typeof norm==="function"?norm(g[0]):g[0];if(!DICT[k])DICT[k]=g[1];
  if(!ZH&&typeof jsurf==="function"){var sf=jsurf(g[0]);if(!DICT[sf])DICT[sf]=g[1]}})});
function storyAfter(r){var U=UNITS.filter(function(u){return u.id===r.after})[0];return U?(U.kind==="lesson"?S.afterL(U.n):S.afterR):""}
var SCOL=["red","blue","green","yellow","pink"];
function storyCard(r,i){var d=readsDone()[r.id];
  return '<a class="mp-story" href="#/racconto/'+h(r.id)+'"><span class="art t-'+SCOL[i%5]+'"><span class="j'+(!ZH&&r.j.length>5?' long':'')+'" lang="'+(ZH?"it":LL)+'">'+h(r.j)+'</span></span>'+
    '<span class="tx"><b>'+h(r.t)+'</b><em>'+h(r.kind+" · "+storyAfter(r))+'</em><em>'+h(S.mins(r.min))+(d?' · ✓ '+h(S.storyDone):'')+'</em></span></a>'}
function storiesBlock(){if(!READ.length)return "";
  return '<h2 class="mp-h2">'+h(S.stories)+'</h2><p class="mp-lead mp-lead0">'+h(S.storiesLead)+'</p><div class="mp-sgrid">'+READ.map(storyCard).join("")+
    '<div class="mp-story soon" aria-disabled="true"><span class="art"><span class="j" aria-hidden="true">…</span></span><span class="tx"><b>'+h(S.soonStories)+'</b><em>'+h(S.soonT)+'</em></span></div></div>'}
function vStory(id){var r=READ.filter(function(x){return x.id===id})[0];if(!r){location.replace("#/cultura");return}
  var i=READ.indexOf(r),nx=READ[i+1]||READ[0],tl=ZH?"zh-CN":"it";
  var html='<div class="mp-readbar"><a class="mp-ib" href="#/cultura" aria-label="'+h(S.backCult)+'">'+I.back+'</a><b>'+h(S.stories)+'</b><button class="mp-ib" id="mpset" aria-label="'+h(S.settings)+'">'+I.gear+'</button></div>'+
    '<header class="mp-sh"><div class="mp-k">'+h(r.kind+" · "+storyAfter(r)+" · "+S.mins(r.min))+'</div><h1 tabindex="-1">'+h(r.t)+'</h1><p class="j" lang="'+(ZH?"it":LL)+'">'+h(r.j)+'</p></header>'+
    '<p class="mp-lead">'+sRich(r.intro)+'</p>'+
    (r.gloss&&r.gloss.length?'<details class="mp-gl"><summary>'+h(S.newWords(r.gloss.length))+'</summary><ul>'+r.gloss.map(function(g){return '<li>'+sWord(g[0])+'<span lang="'+tl+'">'+h(g[1])+'</span></li>'}).join("")+'</ul></details>':'')+
    '<div class="mp-sctl"><button class="mp-cta" id="spl">'+SPK+'<span>'+h(S.playAll)+'</span></button><button class="mp-chip" id="str" aria-pressed="false">'+h(S.trAll)+'</button></div>'+
    '<div class="mp-stext" id="stx">'+r.lines.map(function(l,k){return '<div class="mp-sl" data-i="'+k+'"><div class="sb"><div class="it-l">'+sLine(l[0])+'</div>'+
      '<p class="stt" lang="'+tl+'" id="stt'+k+'">'+h(l[1])+'</p><button class="trb" aria-expanded="false" aria-controls="stt'+k+'">'+h(S.trOne)+'</button></div>'+
      '<button class="say" data-say="'+h(l[0])+'" aria-label="'+h(S.storyListen)+'">'+SPK+'</button></div>'}).join("")+'</div>'+
    '<h2 class="mp-h2">'+h(S.storyQ)+'</h2><div class="drill mp-sq" id="sq"></div><div id="sdone"></div>';
  show(html);
  var lines=qa(".mp-sl",view),pb=q("#spl",view),stx=q("#stx",view),tb=q("#str",view);
  if(storyPl)storyPl.stop(true);
  storyPl=Player(function(){return lines.map(function(el,k){return {el:el,say:r.lines[k][0],mine:false}})},
    {busy:function(){pb.innerHTML='<span aria-hidden="true">■</span><span>'+h(S.stopAll)+'</span>';pb.dataset.on="1"},idle:function(){pb.innerHTML=SPK+'<span>'+h(S.playAll)+'</span>';pb.dataset.on=""}});
  var pl=storyPl;pb.onclick=function(){if(pb.dataset.on)pl.stop();else pl.play()};
  tb.onclick=function(){var on=tb.getAttribute("aria-pressed")!=="true";tb.setAttribute("aria-pressed",String(on));tb.classList.toggle("on",on);stx.classList.toggle("tr-on",on)};
  lines.forEach(function(el){var b=q(".trb",el);b.onclick=function(){var on=!el.classList.contains("open");el.classList.toggle("open",on);b.setAttribute("aria-expanded",String(on))}});
  function finish(){var box=q("#sdone",view);box.innerHTML='<div class="mp-card mp-sdone"><p class="mp-p"><b>✓ '+h(S.storyDoneT)+'</b></p>'+(READ.length>1?'<p class="mp-p">'+h(S.nextStory)+': <b>'+h(nx.t)+'</b></p><a class="mp-cta" href="#/racconto/'+h(nx.id)+'">'+h(S.nextStory)+I.arrow+'</a>':'')+'<a class="mp-cta alt" href="#/cultura">'+h(S.backCult)+'</a></div>'}
  renderSet(q("#sq",view),{items:(r.q||[]).map(function(x){var o=x.o.slice(),c=o.splice(x.a||0,1)[0];return {q:x.q,o:[c].concat(o)}}),one:true,head:"",
    onDone:function(){var d=readsDone();d[r.id]=Date.now();M.store.set(RK,d);finish()}});
  if(readsDone()[r.id])finish()}
window.addEventListener("hashchange",function(){if(storyPl&&!/^#\/racconto\//.test(location.hash)){storyPl.stop();storyPl=null}});

/* ---------- plan ---------- */
function myPlan(){return M.load().plans[C.id]||null}
function weekActive(){var mon=M.addDays(M.today(),-((M.today().getDay()+6)%7)),n=0,cells="";
  var lbl=ZH?["一","二","三","四","五","六","日"]:["L","M","M","G","V","S","D"];
  for(var i=0;i<7;i++){var d=M.addDays(mon,i),on=!!P.days[M.iso(d)];if(on)n++;cells+='<span class="'+(on?'on':'')+(M.daysBetween(d,M.today())===0?' td':'')+'"><i></i>'+lbl[i]+'</span>'}
  return {n:n,html:cells}}

/* ---------- layout ---------- */
var root=document.createElement("div");root.id="mpapp";document.body.appendChild(root);
var view=document.createElement("div");view.className="mp-view";root.appendChild(view);
var TABS=[["oggi","today"],["corso","course"],["esame","exam"],["cultura","cult"],["strumenti","tools"]];
var bar=document.createElement("nav");bar.className="mp-tabs";bar.setAttribute("aria-label",S.course);
bar.innerHTML=TABS.map(function(t,i){return '<a href="#/'+t[0]+'" data-tab="'+t[0]+'">'+'<i>'+I[t[1]]+'</i><span>'+h(S.tabs[i])+'</span></a>'}).join("");
root.appendChild(bar);
document.documentElement.classList.add("mp");

function head(kick,ttl,extra){return '<header class="mp-h"><div>'+(kick?'<div class="mp-k">'+h(kick)+'</div>':'')+'<h1 tabindex="-1">'+h(ttl)+'</h1></div>'+(extra||'<button class="mp-ib" id="mpset" aria-label="'+h(S.settings)+'">'+I.gear+'</button>')+'</header>'}
function route(){var r=(location.hash||"").replace(/^#\/?/,"");return r||"oggi"}
function render(){
  var r=route(),parts=r.split("/"),tab=parts[0];
  if(document.getElementById(r)&&parts.length===1&&!/^(oggi|corso|esame|cultura|strumenti)$/.test(r)){var U0=UNITS.filter(function(u){return u.id===r})[0];location.replace(U0?"#/l/"+r:"#/leggi/"+r);return}
  if(r==="mappa"||r==="top"){location.replace("#/oggi");return}
  document.documentElement.classList.toggle("mp-read",tab==="leggi");
  qa(".mp-target").forEach(function(e){e.classList.remove("mp-target")});
  var active=tab==="racconto"?"cultura":tab==="simres"||tab==="simrev"?"esame":tab==="l"?"corso":tab==="leggi"?(UNITS.some(function(u){return u.id===parts[1]})?"corso":"strumenti"):tab;
  qa("[data-tab]",bar).forEach(function(a){var on=a.getAttribute("data-tab")===active;a.classList.toggle("on",on);if(on)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
  ({oggi:vToday,corso:vCourse,l:function(){vLesson(parts[1])},esame:vExam,cultura:vCult,strumenti:vTools,leggi:function(){vRead(parts[1])},racconto:function(){vStory(parts[1])},simres:function(){vSimRes(parts[1])},simrev:function(){vSimRev(parts[1])}}[tab]||vToday)();
  var st=q("#mpset",view);if(st)st.onclick=openSettings;
  if(!mstack.length){var h1=q("h1",view);if(h1)try{h1.focus({preventScroll:true})}catch(e){}}}
function show(html){view.innerHTML=html;window.scrollTo(0,0)}
window.addEventListener("hashchange",render);
/* the course engine calls these after a step: refresh our view instead of the old map/sheet */
drawPath=function(){if(!stCur)render()};
openSheet=function(){render()};

/* ---------- Oggi ---------- */
function vToday(){
  var p=myPlan(),hr=new Date().getHours(),hi=S.hi[hr<13?0:hr<18?1:2];
  var i=hereIdx(),U=i>=0?UNITS[i]:null,nx=U&&nextOf(U.id),inf=U&&info(U.id);
  var rw=reviewWords().length,dc=dayCult(),wk=weekActive();
  var html=head(fmt(new Date(),{weekday:"long",day:"numeric",month:"long"}),hi);
  html+='<section class="mp-today hc-blue"><div class="mp-k">'+h(S.forToday)+(p?' · '+h(S.forTodaySub(p.mins)):'')+'</div>';
  if(U&&nx)html+='<button class="mp-blk" id="mpnext"><span class="n">'+(U.kind==="lesson"?U.n:"★")+'</span><span><b>'+h(title(U))+'</b><small>'+h(S.next+": "+stepLabel(nx))+' · '+stepMinutes(U.id,nx)+' '+h(S.min)+'</small></span><em>'+I.arrow+'</em></button>';
  if(rw>=4)html+='<button class="mp-blk" id="mprev"><span class="n">↻</span><span><b>'+h(S.reviewT)+'</b><small>'+h(S.reviewS(Math.min(8,rw)))+'</small></span><em>'+I.arrow+'</em></button>';
  if(dc)html+='<button class="mp-blk" data-ck="'+h(dc.key)+'"><span class="n">'+(ZH?"文":"文")+'</span><span><b>'+h(S.dayCult)+'</b><small>'+h(dc.c.t)+'</small></span><em>'+I.arrow+'</em></button>';
  if(U&&nx)html+='<button class="mp-cta" id="mpgo">'+h(S.resume)+I.arrow+'</button>';
  html+='</section>';
  html+='<div class="mp-row2"><div class="mp-tile"><span class="mp-lbl">'+h(S.week)+'</span><div class="mp-big">'+wk.n+'<small> / 6 '+h(S.days)+'</small></div><div class="mp-week">'+wk.html+'</div></div>';
  if(p){var pl=M.plan(C,p,P),ex=pl.ex;
    if(ex&&pl.examDate){var left=M.daysBetween(M.today(),pl.examDate);html+='<a class="mp-tile mp-ex" href="#/esame"><span class="mp-lbl">'+h(ex.name)+'</span><div class="mp-big">'+Math.max(0,left)+'<small> '+h(S.examIn(left))+'</small></div><p>'+h(HASEX&&readiness().total!=null?"Stima: "+readiness().total+"/180 · soglia 80":(pl.marginW>=0?S.margin(pl.marginW):S.late(-pl.marginW).split(":")[0]))+'</p></a>'}
    else{var stt=M.status(C,p,P);html+='<a class="mp-tile" href="#/esame"><span class="mp-lbl">'+h(S.planT)+'</span><div class="mp-big" style="font-size:20px;line-height:1.2">'+h(Math.abs(stt)<=2?S.onTrack:stt>0?S.ahead2(stt):S.behind(-stt))+'</div><p>'+h(S.ready(fmt(pl.ready,{month:"long",year:"numeric"})))+'</p></a>'}}
  else html+='<a class="mp-tile" href="../../#/corso"><span class="mp-lbl">'+h(S.planT)+'</span><div class="mp-big" style="font-size:19px;line-height:1.2">'+h(S.noPlan)+'</div><p>'+h(S.noPlanS)+'</p></a>';
  html+='</div>';
  if(dc)html+='<h2 class="mp-h2">'+h(S.dayCult)+'</h2>'+cultCard(dc,true);
  var cds=[];for(var k=UNITS.length-1;k>=0&&cds.length<3;k--){if(info(UNITS[k].id).verified)canDo(UNITS[k].id).slice(0,3-cds.length).forEach(function(t){cds.push(t)})}
  html+='<h2 class="mp-h2">'+h(S.canDo)+'</h2><div class="mp-card mp-cando">'+(cds.length?cds.map(function(t){return '<div><span>✓</span>'+h(t)+'</div>'}).join(""):'<p>'+h(S.canDoEmpty)+'</p>')+'</div>';
  show(html);
  var a=q("#mpnext",view),g=q("#mpgo",view);if(a&&U)a.onclick=g.onclick=function(){openStep(U.id,nx.key)};
  var rv=q("#mprev",view);if(rv)rv.onclick=function(){openReview()};
  bindCult(view)}

/* ---------- Corso ---------- */
function vCourse(){
  var hi=hereIdx(),html=head(C.native+" · "+(WORLDS[0]||{}).level+" → "+(WORLDS[WORLDS.length-1]||{}).level,S.course);
  html+='<div class="mp-chips">'+WORLDS.map(function(W,wi){return '<a href="#mpw'+(wi+1)+'" class="mp-chip">'+h(W.level+" · "+W.title.replace(/^[^·]*·\s*/,""))+'</a>'}).join("")+'</div>';
  WORLDS.forEach(function(W,wi){var w=wi+1,us=UNITS.filter(function(u){return u.w===w}),vd=us.filter(function(u){return info(u.id).verified}).length;
    html+='<section class="mp-part" id="mpw'+w+'"><div class="hd hc-'+["red","blue","green"][wi%3]+'"><b><span class="lv">'+h(W.level)+'</span>'+h(W.title.replace(/^[^·]*·\s*/,""))+'</b><small>'+vd+' / '+us.length+'</small></div>';
    us.forEach(function(U){var inf=info(U.id),isH=UNITS.indexOf(U)===hi;
      var st=inf.verified?'<span class="mp-st v">✓ '+inf.pc+'%</span>':inf.pc!=null?'<span class="mp-st w">'+inf.pc+'%</span>':inf.started?'<span class="mp-st e">'+h(S.inProg(inf.done,inf.n))+'</span>':'<span class="mp-st r">'+h(S.todo)+'</span>';
      html+='<a class="mp-les'+(isH?' here':'')+'" href="#/l/'+U.id+'"><span class="num t-'+U.color+'">'+(U.kind==="lesson"?U.n:"★")+'</span><span>'+(isH?'<em>'+h(S.here)+'</em>':'')+'<b>'+h(title(U))+'</b><small'+(ZH?' lang="it"':' lang="'+LL+'"')+'>'+h(subT(U))+'</small><small> · '+inf.tot+' '+h(S.min)+'</small></span>'+st+'</a>'});
    html+='</section>'});
  show(html);
  qa(".mp-chip",view).forEach(function(a){a.onclick=function(e){e.preventDefault();var t=document.getElementById(a.getAttribute("href").slice(1));if(t)t.scrollIntoView({behavior:"smooth",block:"start"})}})}

/* ---------- Lezione ---------- */
/* rules of a lesson, split at each h3: what the learner can open and read on the lesson page */
function ruleGroups(id,steps){var gs=[],cur=null;
  function clean(el){var c=el.cloneNode(true);qa("rt,.ro-i,.ro",c).forEach(function(e){e.remove()});return c.textContent.replace(/\s+/g," ").trim()}
  bodyNodes(id).forEach(function(n){
    var t=n.matches("h3")?n:n.matches("details")?q("summary",n):q("h3",n);
    if(t){cur={t:t,box:n,nodes:[n],scopri:n.matches("details")};gs.push(cur)}
    else{if(!cur){cur={t:null,nodes:[]};gs.push(cur)}cur.nodes.push(n)}});
  gs.forEach(function(g){var st=steps.filter(function(x){return (x.k==="rule"||x.k==="rev")&&x.n.indexOf(g.nodes[0])>=0})[0];g.key=st?st.key:null;
    g.title=g.t?clean(g.t):S.introR;
    var p=null;g.nodes.some(function(n){p=n.matches("p")?n:q("p",n);if(p&&g.t&&g.t.contains(p))p=null;return !!p});g.ex=p?clean(p):""});
  return gs.filter(function(g){return g.nodes.length})}
function vLesson(id){
  var U=UNITS.filter(function(u){return u.id===id})[0];if(!U){location.replace("#/corso");return}
  var inf=info(id),nx=nextOf(id),hi=hereIdx(),idx=UNITS.indexOf(U),cds=canDo(id),s0=sec(id),lead=s0&&q("p.lead",s0);
  var pc=Math.round(inf.done/inf.n*100),rg=ruleGroups(id,inf.steps),nw=(VOC[id]||[]).length;
  var html='<section class="mp-lhero hc-'+U.color+'"><a class="mp-ib mp-back" href="#/corso" aria-label="'+h(S.back)+'">'+I.back+'</a>'+
    '<div class="mp-k">'+h(kick(U))+'</div><h1 tabindex="-1">'+h(title(U))+'</h1><div class="sub" lang="'+(ZH?"it":LL)+'">'+h(subT(U))+'</div>'+
    '<div class="pb"><span><i style="width:'+pc+'%"></i></span>'+pc+'% · '+h(S.left(inf.left))+'</div></section>';
  if(hi>=0&&idx>hi+1)html+='<div class="mp-hint">'+h(S.ahead(UNITS[hi].kind==="lesson"?UNITS[hi].n:title(UNITS[hi])))+' <a href="#/l/'+UNITS[hi].id+'">'+h(S.backTo)+' ›</a></div>';
  if(lead||cds.length){html+='<section class="mp-card mp-intro"><h2 class="mp-h3">'+h(S.introT)+'</h2><div id="mplead"></div>';
    if(cds.length)html+='<div class="mp-know"><b>'+h(S.knowT)+'</b><ul>'+cds.slice(0,5).map(function(t){return '<li>'+h(t)+'</li>'}).join("")+'</ul></div>';
    html+='</section>'}
  html+='<h2 class="mp-h2">'+h(S.stepsT)+'</h2><p class="mp-sub">'+h(S.stepsS)+'</p>';
  html+='<div class="mp-secs">'+inf.steps.map(function(st){var dn=stepDone(id,st),now=nx&&st.key===nx.key,m=stepMinutes(id,st),ic=I[st.k==="cult"?"cultS":st.k]||I.rule;
    var right=st.k==="test"&&inf.pc!=null?(inf.verified?'✓ ':'')+inf.pc+'%':dn?'✓ '+m+' '+S.min:m+' '+S.min;
    return '<button class="mp-sec'+(dn?' done':'')+(now?' now':'')+'" data-k="'+st.key+'"><span class="ic">'+(dn?I.check:ic)+'</span><span><b>'+h(stepLabel(st))+'</b><small>'+h(stepSub(id,st))+'</small></span><em>'+h(right)+'</em></button>'}).join("")+'</div>';
  html+='<button class="mp-cta" id="mpgo">'+h(nx?(inf.started?S.cont(stepLabel(nx)):S.start):S.redo)+I.arrow+'</button>';
  if(rg.length){html+='<h2 class="mp-h2">'+h(S.rulesT)+'</h2><p class="mp-sub">'+h(S.rulesS)+'</p><div class="mp-rules">'+
    rg.map(function(g,i){return '<details class="mp-rule'+(g.scopri?' mp-q':'')+'" data-g="'+i+'"><summary><span class="n">'+(g.scopri?'?':(i+1-rg.slice(0,i).filter(function(x){return x.scopri}).length))+'</span><span><b>'+h(g.title)+'</b>'+(g.ex?'<small>'+h(g.ex.slice(0,110))+(g.ex.length>110?'…':'')+'</small>':'')+'</span></summary><div class="mp-rbody"></div>'+
      (g.key?'<button class="mp-mini" data-k="'+g.key+'">'+h(S.practiceBtn)+I.arrow+'</button>':'')+'</details>'}).join("")+'</div>'}
  if(nw){html+='<h2 class="mp-h2">'+h(S.wordsT)+' <small class="mp-cnt">'+nw+'</small></h2><p class="mp-sub">'+h(S.wordsS)+'</p><div class="mp-card mp-words"><div class="words mp-wclip" data-voc="'+id+'"></div>'+
    (nw>8?'<button class="mp-mini alt" id="mpwall">'+h(S.showAll(nw))+'</button>':'')+'</div>'}
  html+='<a class="mp-link" href="#/leggi/'+id+'">'+h(S.readAll)+' ›</a>';
  show(html);
  var ld=q("#mplead",view);if(ld&&lead){var lc=lead.cloneNode(true);lc.classList.add("mp-leadp");ld.appendChild(lc)}
  qa(".mp-rule",view).forEach(function(d){d.addEventListener("toggle",function(){var b=q(".mp-rbody",d);if(d.open&&!b.firstChild){var g=rg[+d.getAttribute("data-g")];
    var src=g.scopri?Array.prototype.filter.call(g.box.children,function(c){return !c.matches("summary")}):g.nodes.filter(function(n){return n!==g.t});
    var cl=cloneNodes(src);
    if(g.t&&!g.scopri){var hh=q("h3",cl);if(hh)hh.remove()}
    qa("details",cl).forEach(function(x){x.open=true});b.appendChild(cl)}})});
  var wv=q(".words[data-voc]",view);if(wv)renderWords(wv);
  var wa=q("#mpwall",view);if(wa)wa.onclick=function(){wv.classList.remove("mp-wclip");wa.remove()};
  qa(".mp-sec,.mp-mini[data-k]",view).forEach(function(b){b.onclick=function(){openStep(id,b.getAttribute("data-k"))}});
  q("#mpgo",view).onclick=function(){openStep(id,nx?nx.key:"test")}}

/* ---------- Esame ---------- */
function vExam(){
  var p=myPlan(),pl=p&&M.plan(C,p,P),ex=pl&&pl.ex,html;
  var ver=UNITS.map(function(u){return info(u.id)}).filter(function(x){return x.pc!=null});
  var avg=ver.length?Math.round(ver.reduce(function(s,x){return s+x.pc},0)/ver.length):null;
  if(!ex){html=head(C.native,S.exam)+'<div class="mp-card"><p class="mp-p"><b>'+h(S.examNone)+'</b> '+h(S.examNoneS)+'</p><a class="mp-cta" href="../../#/rifai/'+C.id+'">'+h(S.chooseExam)+I.arrow+'</a></div>'+(HASEX?examBlock(null):'')}
  else{html=head(S.exam,ex.name);
    if(pl.examDate){var left=M.daysBetween(M.today(),pl.examDate);
      html+='<div class="mp-ehead"><div class="cd"><b>'+Math.max(0,left)+'</b><small>'+h(S.examIn(left))+'</small></div><p><b>'+h(fmt(pl.examDate))+'</b>. '+h(S.ready(fmt(pl.ready,{month:"long",year:"numeric"})))+' '+h(pl.marginW>=0?S.margin(pl.marginW):S.late(-pl.marginW))+'</p></div>'}
    else html+='<div class="mp-ehead"><p>'+h(S.noDate)+' '+h(S.ready(fmt(pl.ready,{month:"long",year:"numeric"})))+'</p></div>';
    if(HASEX)html+=examBlock(ex);else{
    html+='<h2 class="mp-h2">'+h(S.sections)+'</h2><div class="mp-card"><p class="mp-p">'+h(S.sectionsSoon)+'</p><span class="mp-soon">'+h(S.soon)+'</span></div>';
    html+='<div class="mp-acts"><div class="mp-act pri"><b>'+h(S.sim)+'</b><small>'+h(S.simS)+'</small><span class="mp-soon">'+h(S.soon)+'</span></div>'+
      '<div class="mp-act"><b>'+(avg!=null?avg+'%':'—')+'</b><small>'+h(S.mastery)+'</small></div></div>'}}
  if(pl){var stt=M.status(C,p,P);
    html+='<h2 class="mp-h2">'+h(S.planT)+' <span class="mp-pill'+(stt<-2?' late':'')+'">'+h(Math.abs(stt)<=2?S.onTrack:stt>0?S.ahead2(stt):S.behind(-stt))+'</span></h2><div class="mp-card mp-tl">'+
      pl.ms.map(function(m){if(m.practice)return '<div><i></i><span><b>'+h(S.practice)+'</b></span><small>'+h(fmt(m.date,{month:"short",year:"numeric"}))+'</small></div>';
        return '<div class="'+(m.done?'done':'')+'"><i></i><span><b>'+h(m.w.level+" · "+m.w.title.replace(/^[^·]*·\s*/,""))+'</b></span><small>'+(m.done?'✓':h(fmt(m.date,{month:"short",year:"numeric"})))+'</small></div>'}).join("")+
      (pl.examDate?'<div class="exam"><i></i><span><b>'+h(ex.name)+'</b></span><small>'+h(fmt(pl.examDate,{day:"numeric",month:"short"}))+'</small></div>':'')+'</div>'}
  show(html);if(HASEX)bindExam(view)}

/* ---------- Cultura ---------- */
var cultFilter=0;
function vCult(){
  var all=allCult(),rd=cultRead(),nr=all.filter(function(x){return rd[x.key]}).length,dc=dayCult();
  var html=head(S.readCount(nr,all.length),S.cult)+'<p class="mp-lead">'+h(S.cultLead)+'</p>';
  html+=storiesBlock();
  if(dc)html+='<h2 class="mp-h2">'+h(S.dayCult)+'</h2>'+cultCard(dc,true);
  html+='<div class="mp-chips" role="tablist">'+['<button class="mp-chip'+(cultFilter===0?' on':'')+'" data-f="0">'+h(S.all)+'</button>'].concat(WORLDS.map(function(W,wi){return '<button class="mp-chip'+(cultFilter===wi+1?' on':'')+'" data-f="'+(wi+1)+'">'+h(W.level)+'</button>'})).join("")+'</div>';
  html+='<div class="mp-cgrid">'+all.filter(function(x){return !cultFilter||x.u.w===cultFilter}).map(function(x){return cultCard(x,false)}).join("")+'</div>';
  show(html);bindCult(view);
  qa("[data-f]",view).forEach(function(b){b.onclick=function(){cultFilter=+b.getAttribute("data-f");vCult()}})}

/* ---------- Strumenti ---------- */
function vTools(){
  var html=head(C.native,S.tools)+'<div class="mp-tgrid">';
  var rw=reviewWords().length,cols=["red","blue","yellow","green","pink"],i=0;
  if(rw>=4)html+='<button class="mp-tool hc-pink" id="mprev"><span class="g">↻</span><b>'+h(S.dailyRev[0])+'</b><small>'+h(S.dailyRev[1])+'</small></button>';
  Object.keys(S.toolList).forEach(function(k){if(!document.getElementById(k))return;var L=S.toolList[k];
    var g={flash:"⇄",verbi:ZH?"essere":C.learn==="zh"?"了过":"行く",kana:"あア",frasi:C.learn==="zh"?"“”":"「」",vocab:"A–Z",tratti:"㇐㇑",caratteri:"亻木"}[k];
    html+='<a class="mp-tool hc-'+cols[i++%cols.length]+'" href="#/leggi/'+k+'"><span class="g"'+(/^(verbi|kana|tratti|caratteri)$/.test(k)?' lang="'+(ZH?"it":LL)+'"':'')+'>'+h(g)+'</span><b>'+h(L[0])+'</b><small>'+h(L[1])+'</small></a>'});
  html+='</div>';show(html);
  var rv=q("#mprev",view);if(rv)rv.onclick=function(){openReview()}}

/* ---------- reading view: a lesson or a tool from the book ---------- */
function vRead(id){var s=document.getElementById(id);if(!s){location.replace("#/oggi");return}
  s.classList.add("mp-target");
  var U=UNITS.filter(function(u){return u.id===id})[0],back=U?"#/l/"+id:"#/strumenti";
  var t=U?title(U):((S.toolList[id]||[])[0]||"");
  view.innerHTML='<div class="mp-readbar"><a class="mp-ib" href="'+back+'" aria-label="'+h(S.back)+'">'+I.back+'</a><b>'+h(t)+'</b><button class="mp-ib" id="mpset" aria-label="'+h(S.settings)+'">'+I.gear+'</button></div>';
  window.scrollTo(0,0);setTimeout(function(){var r=s.getBoundingClientRect();window.scrollTo(0,window.scrollY+r.top-70)},30)}

/* ---------- bottom sheets close by dragging down (finger or mouse), like the grab bar promises ----------
   The drag starts anywhere when the sheet is scrolled to the top, or on the grab bar/title at any time.
   A short tap on the grab bar also closes. */
function dragClose(el,back,close){var y0=null,dy=0,t0=0,on=false,mouse=false;
  function rm(){try{return matchMedia("(prefers-reduced-motion: reduce)").matches}catch(e){return false}}
  function start(y,target){if(target.closest&&target.closest("select,input,textarea"))return;
    var top=y-el.getBoundingClientRect().top;if(el.scrollTop>0&&top>72)return;y0=y;dy=0;t0=Date.now();on=false}
  function move(y,ev){if(y0==null)return;dy=y-y0;
    if(!on){if(dy<6)return;if(el.scrollTop>0&&y0-el.getBoundingClientRect().top>72){y0=null;return}on=true;el.style.transition="none"}
    if(ev&&ev.cancelable)ev.preventDefault();var d=Math.max(0,dy);el.style.transform="translateY("+d+"px)";back.style.opacity=String(Math.max(.2,1-d/400))}
  function end(){if(y0==null)return;var was=on,v=dy/Math.max(1,Date.now()-t0);y0=null;on=false;if(!was)return;
    var h=el.offsetHeight,go=dy>Math.min(140,h*.3)||(dy>40&&v>.6);
    el.style.transition=rm()?"none":"transform .2s ease";back.style.transition=rm()?"none":"opacity .2s ease";
    if(go){el.style.transform="translateY("+h+"px)";back.style.opacity="0";setTimeout(close,rm()?0:200)}
    else{el.style.transform="";back.style.opacity=""}}
  el.addEventListener("touchstart",function(e){if(e.touches.length===1)start(e.touches[0].clientY,e.target)},{passive:true});
  el.addEventListener("touchmove",function(e){if(e.touches.length===1)move(e.touches[0].clientY,e)},{passive:false});
  el.addEventListener("touchend",end);el.addEventListener("touchcancel",end);
  /* mouse: only from the top of the sheet, so text and controls keep working */
  el.addEventListener("mousedown",function(e){if(e.button!==0)return;if(e.clientY-el.getBoundingClientRect().top>72)return;mouse=true;start(e.clientY,e.target)});
  document.addEventListener("mousemove",function(e){if(mouse)move(e.clientY,e)});
  document.addEventListener("mouseup",function(){if(mouse){mouse=false;var was=on;end();if(was){var k=function(ev){ev.stopPropagation();ev.preventDefault()};document.addEventListener("click",k,{capture:true,once:true});setTimeout(function(){document.removeEventListener("click",k,true)},0)}}})}

/* ---------- settings ---------- */
var shb=document.createElement("div");shb.className="mp-sheetback";shb.hidden=true;
var sh=document.createElement("section");sh.className="mp-sheet";sh.hidden=true;sh.setAttribute("role","dialog");sh.setAttribute("aria-modal","true");
document.body.appendChild(shb);document.body.appendChild(sh);
var readCtl=document.createElement("div");readCtl.className="mp-readctl";
["tbfuri","tbro","tbtr","tbslow"].forEach(function(i){var b=document.getElementById(i);if(b)readCtl.appendChild(b)});
function themeNow(){try{return localStorage.getItem("milepost-theme")||"auto"}catch(e){return "auto"}}
function setTheme(t){try{if(t==="auto"){localStorage.removeItem("milepost-theme");localStorage.removeItem(KEY+"-theme")}else{localStorage.setItem("milepost-theme",t);localStorage.setItem(KEY+"-theme",t)}}catch(e){}
  if(t==="auto")document.documentElement.removeAttribute("data-theme");else document.documentElement.setAttribute("data-theme",t)}
function closeSettings(){sh.hidden=shb.hidden=true;sh.style.transform=sh.style.transition=shb.style.opacity=""}
shb.onclick=closeSettings;dragClose(sh,shb,closeSettings);document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!sh.hidden)closeSettings()});
/* ---------- offline: lessons are saved by the service worker; the audio can be saved here in one go ---------- */
var OFFK=KEY+"-offline",AUDC="milepost-audio-v1",offRun=null;
function offGet(){try{return +localStorage.getItem(OFFK)||0}catch(e){return 0}}
function offSet(n){try{localStorage.setItem(OFFK,String(n))}catch(e){}}
function drawOffline(box){if(!box)return;
  var dv=typeof deviceVoice==="function"&&deviceVoice();
  var html='<p class="mp-p">'+h(S.offPages)+'</p>';
  if(dv){box.innerHTML=html+'<p class="mp-p">'+h(S.offVoice)+'</p>';return}
  if(!("caches" in window)){box.innerHTML=html;return}
  box.innerHTML=html+'<p class="mp-p" id="mpoffs"></p><button class="mp-cta alt" id="mpoffb" hidden></button>';
  var st=q("#mpoffs",box),b=q("#mpoffb",box);
  fetch("audio/index.json").then(function(r){return r.json()}).then(function(ix){
    if(offRun){st.textContent=S.offBusy(offRun.done,ix.n);offRun.ui=function(a){st.textContent=S.offBusy(a,ix.n)};return}
    if(offGet()>=ix.n){st.textContent=S.offDone;return}
    b.hidden=false;b.textContent=S.offBtn(Math.max(1,Math.round(ix.bytes/1048576)));
    b.onclick=function(){b.hidden=true;offDownload(ix,function(a){st.textContent=S.offBusy(a,ix.n)},function(ok){st.textContent=ok?S.offDone:S.offErr;if(!ok){b.hidden=false}})}
  }).catch(function(){})}
function offDownload(ix,prog,fin){var run={done:0,ui:prog};offRun=run;
  caches.open(AUDC).then(function(c){var i=0,bad=0,active=0;
    function next(){if(i>=ix.files.length){if(active===0){offRun=null;if(!bad)offSet(ix.n);fin(!bad)}return}
      var url=new URL("audio/"+ix.files[i++],location.href).href;active++;
      c.match(url).then(function(hit){return hit||fetch(url).then(function(res){if(!res.ok)throw 0;return c.put(url,res)})})
        .catch(function(){bad++}).then(function(){active--;run.done++;if(run.done%10===0||run.done===ix.n)run.ui(run.done);next()})}
    for(var k=0;k<6;k++)next()}).catch(function(){offRun=null;fin(false)})}

/* ---------- voice: only in courses that speak with the device voice (they define voiceList/voiceNow/voiceSet) ---------- */
function drawVoice(box){if(!box)return;var vs=voiceList(),now=voiceNow();
  box.innerHTML='<label class="mp-set"><span>'+h(S.voiceT)+'</span><select id="mpvsel" class="mp-sel">'+
    '<option value="">'+h(S.voiceAuto)+'</option>'+vs.map(function(v){return '<option value="'+h(v.id)+'"'+(v.id===now?' selected':'')+'>'+h(v.name)+'</option>'}).join("")+
    '</select></label>'+(/iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent||"")?'<p class="mp-p">'+h(S.voiceTip)+'</p>':'');
  q("#mpvsel",box).onchange=function(){voiceSet(this.value)}}
function openSettings(){var th=themeNow(),hasV=typeof voiceList==="function";
  sh.innerHTML='<button class="grab" aria-label="'+h(S.close)+'"><i></i></button><h2>'+h(S.settings)+'</h2>'+
    (readCtl.children.length?'<div class="mp-lbl" style="margin-top:6px">'+h(S.readingT)+'</div><div id="mprc"></div>':'')+(hasV?'<div class="mp-off" id="mpvoice"></div>':'')+
    '<div class="mp-set"><span>'+h(S.theme)+'</span><div class="mp-seg">'+["auto","light","dark"].map(function(t,i){return '<button data-th="'+t+'" aria-pressed="'+(th===t)+'">'+h(S.themes[i])+'</button>'}).join("")+'</div></div>'+
    '<div class="mp-lbl" style="margin-top:6px">'+h(S.offT)+'</div><div class="mp-off" id="mpoff"></div>'+
    '<a class="mp-set mp-a" href="../../#/rifai/'+C.id+'">'+h(S.redoPlan)+' ›</a>'+
    '<a class="mp-set mp-a" href="../../#/corso">'+h(S.changeCourse)+' ›</a>'+
    '<button class="mp-set mp-a danger" id="mpreset">'+h(S.reset)+'</button>'+
    '<button class="mp-cta alt" id="mpclose">'+h(S.close)+'</button>';
  var rc=q("#mprc",sh);if(rc)rc.appendChild(readCtl);
  drawOffline(q("#mpoff",sh));if(hasV){drawVoice(q("#mpvoice",sh));try{speechSynthesis.addEventListener("voiceschanged",function(){if(!sh.hidden)drawVoice(q("#mpvoice",sh))},{once:true})}catch(e){}}
  qa("[data-th]",sh).forEach(function(b){b.onclick=function(){setTheme(b.getAttribute("data-th"));openSettings()}});
  q("#mpclose",sh).onclick=closeSettings;q(".grab",sh).onclick=closeSettings;
  q("#mpreset",sh).onclick=function(){if(!confirm(S.resetQ))return;
    CATALOG.courses.forEach(function(c){M.store.del(M.pathKey(c));M.store.del(c.storageKey);M.store.del(c.storageKey+"-cultread")});M.store.del("milepost-v1");location.href="../../"};
  sh.hidden=shb.hidden=false;try{q("button:not(.grab),a",sh).focus()}catch(e){}}


/* ---------- mock exams in the real JLPT format (only courses that ship EXAMS) ---------- */
var HASEX=typeof EXAMS!=="undefined"&&EXAMS.length>0,EK=KEY+"-exam";
var SK={vocab:["Vocabolario e kanji","文字・語彙"],grammar:["Grammatica","文法"],reading:["Lettura","読解"],listening:["Ascolto","聴解"]};
var EXS={start:"Inizia",full:"Simulazione completa",sec3:function(m){return "3 sezioni · "+m+" min a tempo"},train:"Allenati su una sezione",
  last:function(s,d){return "Ultima volta: "+s+"/180 · "+d},none:"Dopo la prima simulazione qui vedi la tua preparazione, sezione per sezione.",
  est:"Oggi prenderesti circa",pass:"Soglia per superare: 80/180, con almeno 38/120 in vocabolario, grammatica e lettura e 19/60 nell'ascolto.",
  weak:function(s){return "Ti manca soprattutto: "+s+"."},hist:"Le tue prove",notOfficial:"Simulazione nel formato del JLPT, non un test ufficiale: il punteggio è una stima.",
  q:function(n,t){return n+" / "+t},prev:"Indietro",next:"Avanti",finishSec:"Consegna la sezione",finishQ:"Consegnare la sezione? Le domande senza risposta contano come sbagliate.",
  exitQ:"Uscire dalla simulazione? Le risposte date andranno perse.",tr:"Traduci",listen:"Ascolta",once:"Si ascolta una volta sola, come all'esame.",heard:"Ascoltato",replay:"Riascolta",
  playing:"In ascolto…",introGo:"Inizia la sezione",introTime:function(m,n){return m+" minuti · "+n+" domande"},timeUp:"Tempo scaduto: la sezione è stata consegnata.",
  noFuri:"Come all'esame: niente furigana, niente traduzioni sulle parole.",result:"Risultato",passed:"Superato (stima)",notYet:"Non ancora superato",
  langS:"Vocabolario, grammatica e lettura",listenS:"Ascolto",min:function(n){return "minimo "+n},review:"Rivedi le risposte",back:"Torna all'esame",all:"Tutte le domande",done:function(n,t){return n+" di "+t+" con risposta"},legA:"con risposta",legT:"da fare",qLabel:function(n,a){return "Domanda "+n+(a?", con risposta":"")},
  your:"La tua risposta",right:"Risposta giusta",empty:"nessuna risposta",script:"Trascrizione",n4soon:"La simulazione N4 è in arrivo: intanto allenati con la N5, che copre la prima metà del programma.",
  secRes:function(c,t){return c+" giuste su "+t}};
function exStore(){var d=M.store.get(EK)||{};d.att=d.att||[];return d}
function exById(id){return EXAMS.filter(function(e){return e.id===id})[0]}
function flat(ex,secIds){var out=[];ex.sections.forEach(function(s,si){if(secIds.indexOf(s.id)<0)return;s.parts.forEach(function(p,pi){p.items.forEach(function(it,ii){out.push({s:si,p:pi,i:ii})})})});return out}
function itemOf(ex,f){var s=ex.sections[f.s],p=s.parts[f.p];return {sec:s,part:p,it:p.items[f.i]}}
/* score of one attempt: per section and per skill, scaled like the JLPT (lang 0-120, listening 0-60) */
function score(att){var ex=exById(att.id),r={sk:{},lang:[0,0],listen:[0,0]};if(!ex)return r;
  att.f.forEach(function(f,k){var o=itemOf(ex,f),ok=att.a[k]===o.it.a,sk=o.part.skill;r.sk[sk]=r.sk[sk]||[0,0];r.sk[sk][1]++;if(ok)r.sk[sk][0]++;
    var g=o.sec.score==="listen"?r.listen:r.lang;g[1]++;if(ok)g[0]++});
  r.langS=r.lang[1]?Math.round(r.lang[0]/r.lang[1]*120):null;r.listenS=r.listen[1]?Math.round(r.listen[0]/r.listen[1]*60):null;
  r.total=r.langS!=null&&r.listenS!=null?r.langS+r.listenS:null;r.pass=r.total!=null&&r.total>=80&&r.langS>=38&&r.listenS>=19;return r}
/* latest result per skill, and the estimate built from it */
function readiness(){var d=exStore(),sk={},lang=null,listen=null;
  d.att.forEach(function(a){var r=score(a);Object.keys(r.sk).forEach(function(k){sk[k]=r.sk[k]})});
  var L=["vocab","grammar","reading"].filter(function(k){return sk[k]});
  if(L.length===3){var c=0,t=0;L.forEach(function(k){c+=sk[k][0];t+=sk[k][1]});lang=Math.round(c/t*120)}
  if(sk.listening)listen=Math.round(sk.listening[0]/sk.listening[1]*60);
  var weak=null,wp=2;Object.keys(sk).forEach(function(k){var p=sk[k][0]/sk[k][1];if(p<wp){wp=p;weak=k}});
  return {sk:sk,lang:lang,listen:listen,total:lang!=null&&listen!=null?lang+listen:null,weak:weak}}
function pbar(pc,color,minPc){return '<div class="mp-bar"><b style="width:'+Math.round(pc*100)+'%;background:var(--'+color+')"></b>'+(minPc!=null?'<em style="left:'+(minPc*100).toFixed(1)+'%"></em>':'')+'</div>'}
function examBlock(planEx){var d=exStore(),rd=readiness(),ex=EXAMS[0],html="";
  if(planEx&&planEx.id!==ex.exam)html+='<div class="mp-hint">'+h(EXS.n4soon)+'</div>';
  if(rd.total!=null)html+='<div class="mp-card mp-gauge"><div class="mp-lbl">'+h(EXS.est)+'</div><div class="mp-score"><b class="'+(rd.total>=80&&rd.lang>=38&&rd.listen>=19?'ok':'no')+'">'+rd.total+'</b><small> / 180</small></div>'+
    pbar(rd.total/180,"red",80/180)+'<p class="mp-p">'+h(EXS.pass)+'</p>'+(rd.weak?'<p class="mp-p"><b>'+h(EXS.weak(SK[rd.weak][0]))+'</b></p>':'')+'</div>';
  html+='<h2 class="mp-h2">'+h(S.sections)+'</h2><div class="mp-card mp-skills">';
  if(Object.keys(rd.sk).length)html+=["vocab","grammar","reading","listening"].map(function(k){var v=rd.sk[k];
    return '<div class="sk"><div class="t"><span>'+h(SK[k][0])+'<i lang="ja">'+SK[k][1]+'</i></span><span>'+(v?Math.round(v[0]/v[1]*100)+'%':'—')+'</span></div>'+pbar(v?v[0]/v[1]:0,{vocab:"green",grammar:"blue",reading:"yellow",listening:"red"}[k],k==="listening"?19/60:null)+'</div>'}).join("");
  else html+='<p class="mp-p">'+h(EXS.none)+'</p>';
  html+='</div>';
  html+='<h2 class="mp-h2">'+h(EXS.full)+'</h2>';
  EXAMS.forEach(function(e){var mins=e.sections.reduce(function(s,x){return s+x.min},0),last=d.att.filter(function(a){return a.id===e.id&&a.mode==="full"}).pop(),r=last&&score(last);
    html+='<div class="mp-card mp-exc"><div><b>'+h(e.title)+' · JLPT '+h(e.exam.toUpperCase())+'</b><small>'+h(EXS.sec3(mins))+'</small>'+(r?'<small>'+h(EXS.last(r.total,fmt(new Date(last.d),{day:"numeric",month:"short"})))+'</small>':'')+'</div>'+
      '<button class="mp-cta" data-sim="'+e.id+'">'+h(EXS.start)+I.arrow+'</button></div>'});
  html+='<h2 class="mp-h2">'+h(EXS.train)+'</h2><div class="mp-trains">'+ex.sections.map(function(s){return '<button class="mp-train" data-sim="'+ex.id+'" data-sec="'+s.id+'"><b lang="ja">'+h(s.jp)+'</b><small>'+h(s.it)+' · '+s.min+' min</small></button>'}).join("")+'</div>';
  if(d.att.length)html+='<h2 class="mp-h2">'+h(EXS.hist)+'</h2><div class="mp-card mp-hist">'+d.att.map(function(a,k){var r=score(a),e=exById(a.id);
    var lbl=a.mode==="full"?e.title:(e.sections.filter(function(s){return s.id===a.mode})[0]||{}).it;
    return '<a href="#/simres/'+k+'"><span>'+h(lbl)+'</span><small>'+h(fmt(new Date(a.d),{day:"numeric",month:"short"}))+'</small><b>'+(r.total!=null?r.total+'/180':h(EXS.secRes((r.lang[0]+r.listen[0]),(r.lang[1]+r.listen[1]))))+'</b></a>'}).reverse().join("")+'</div>';
  html+='<p class="mp-note">'+h(EXS.notOfficial)+'</p>';
  return html}
function bindExam(root){qa("[data-sim]",root).forEach(function(b){b.onclick=function(){startExam(b.getAttribute("data-sim"),b.getAttribute("data-sec"))}})}

/* ---------- the exam itself: full screen, timer per section ---------- */
var XR=null,xel=document.createElement("div");xel.id="mpexam";xel.hidden=true;document.body.appendChild(xel);
var xau=null;function xstop(){if(xau){try{xau.pause()}catch(e){}xau=null}}
function startExam(id,secId){var ex=exById(id);if(!ex)return;
  var secs=secId?[secId]:ex.sections.map(function(s){return s.id});
  XR={ex:ex,mode:secId||"full",secs:secs,si:0,f:flat(ex,secs),a:[],pos:0,played:{},left:0,timer:null};
  document.documentElement.classList.add("mp-exam");xel.hidden=false;window.scrollTo(0,0);xIntro()}
function curSec(){return XR.ex.sections.filter(function(s){return s.id===XR.secs[XR.si]})[0]}
function secRange(){var sIdx=XR.ex.sections.indexOf(curSec()),a=-1,b=-1;XR.f.forEach(function(f,k){if(f.s===sIdx){if(a<0)a=k;b=k}});return [a,b]}
function xIntro(){var s=curSec(),r=secRange(),n=r[1]-r[0]+1;xstop();clearInterval(XR.timer);
  xel.innerHTML='<div class="xi"><button class="mp-ib xexit" aria-label="'+h(S.close)+'">'+icon('<path d="M6 6l12 12M18 6L6 18"/>')+'</button>'+
    '<div class="mp-k">'+h(XR.ex.title)+(XR.mode==="full"?' · '+(XR.si+1)+'/'+XR.secs.length:'')+'</div><h1 lang="ja">'+h(s.jp)+'</h1><p class="xit">'+h(s.it)+'</p>'+
    '<div class="mp-card"><p class="mp-p"><b>'+h(EXS.introTime(s.min,n))+'</b></p><p class="mp-p">'+h(s.score==="listen"?EXS.once:EXS.noFuri)+'</p></div>'+
    '<button class="mp-cta" id="xgo">'+h(EXS.introGo)+I.arrow+'</button><p class="mp-note">'+h(EXS.notOfficial)+'</p></div>';
  q(".xexit",xel).onclick=xExit;
  q("#xgo",xel).onclick=function(){XR.pos=r[0];XR.left=s.min*60;XR.timer=setInterval(tick,1000);xQ()}}
function tick(){XR.left--;var t=q(".xt",xel);if(t){t.textContent=mmss(XR.left);t.classList.toggle("low",XR.left<=120)}if(XR.left<=0){clearInterval(XR.timer);alert(EXS.timeUp);xEndSec()}}
function mmss(s){s=Math.max(0,s);return Math.floor(s/60)+":"+("0"+s%60).slice(-2)}
function ul(t){return h(t).replace(/\{([^}]*)\}/g,'<u>$1</u>').replace(/★/g,'<b class="star">★</b>').replace(/\n/g,"<br>")}
function xQ(){var r=secRange(),f=XR.f[XR.pos],o=itemOf(XR.ex,f),s=o.sec,p=o.part,it=o.it,num=XR.pos-r[0]+1,tot=r[1]-r[0]+1,isL=s.score==="listen";
  var first=f.i===0;xstop();
  var nums='',ans=0;for(var k=r[0];k<=r[1];k++){if(XR.a[k]!=null)ans++;nums+=xnBtn(k,r)}
  var html='<div class="xtop"><button class="mp-ib xexit" aria-label="'+h(S.close)+'">'+icon('<path d="M6 6l12 12M18 6L6 18"/>')+'</button><span class="xsec" lang="ja">'+h(s.jp)+'</span><span class="xt">'+mmss(XR.left)+'</span></div>'+
    '<div class="xnav"><div class="xnums">'+nums+'</div><button class="xall" aria-label="'+h(EXS.all)+'">'+icon('<rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><rect x="14" y="14" width="6" height="6" rx="1.5"/>')+'<small>'+ans+'/'+tot+'</small></button></div><div class="xbody">'+
    '<div class="xinst"><b lang="ja">もんだい'+p.n+'</b><p lang="ja">'+h(p.inst)+'</p><button class="xtr">'+h(EXS.tr)+'</button><p class="xitr" hidden>'+h(p.itInst)+'</p></div>';
  if(p.text)html+='<div class="xtext" lang="ja">'+ul(p.text)+'</div>';
  if(it.text)html+='<div class="xtext" lang="ja">'+ul(it.text)+'</div>';
  if(it.scene)html+='<div class="xscene"><span class="arr">➡</span><div><p lang="ja">'+h(it.scene)+'</p><small>'+h(it.sceneIt)+'</small></div></div>';
  if(isL){var name=XR.ex.id+"-"+p.n+"-"+(f.i+1),pl=XR.played[XR.pos],can=XR.mode!=="full"||!pl;
    html+='<div class="xaud"><button class="mp-cta" id="xplay"'+(can?'':' disabled')+'>'+(pl?h(XR.mode!=="full"?EXS.replay:EXS.heard):"▶ "+h(EXS.listen))+'</button><small>'+h(EXS.once)+'</small></div>'}
  html+='<div class="xq"><span class="xqn">'+(isL?(f.i+1):num)+'</span><div lang="ja">'+(it.q?ul(it.q):'')+'</div></div><div class="xopts">'+it.o.map(function(t,k){
    return '<button class="xo'+(XR.a[XR.pos]===k?' sel':'')+'" data-o="'+k+'"><span class="n">'+(k+1)+'</span><span lang="ja">'+(isL&&it.say?'':h(t))+'</span></button>'}).join("")+'</div></div>'+
    '<div class="xfoot"><button class="mp-cta alt" id="xprev"'+(XR.pos===r[0]?' disabled':'')+'>'+h(EXS.prev)+'</button>'+
    (XR.pos===r[1]?'<button class="mp-cta" id="xend">'+h(EXS.finishSec)+'</button>':'<button class="mp-cta" id="xnext">'+h(EXS.next)+I.arrow+'</button>')+'</div>';
  var prevX=XR.navX||0;xel.innerHTML=html;q(".xbody",xel).scrollTop=0;window.scrollTo(0,0);
  xNav(prevX);q(".xall",xel).onclick=xGrid;
  q(".xexit",xel).onclick=xExit;
  q(".xtr",xel).onclick=function(){var x=q(".xitr",xel);x.hidden=!x.hidden};
  qa(".xnums .xn",xel).forEach(function(b){b.onclick=function(){XR.pos=+b.getAttribute("data-k");xQ()}});
  qa(".xo",xel).forEach(function(b){b.onclick=function(){XR.a[XR.pos]=+b.getAttribute("data-o");qa(".xo",xel).forEach(function(x){x.classList.toggle("sel",x===b)});var nb=q('.xn[data-k="'+XR.pos+'"]',xel);if(nb)nb.classList.add("ans");xCount()}});
  var pv=q("#xprev",xel);if(pv)pv.onclick=function(){XR.pos--;xQ()};
  var nx=q("#xnext",xel);if(nx)nx.onclick=function(){XR.pos++;xQ()};
  var en=q("#xend",xel);if(en)en.onclick=function(){if(XR.f.slice(r[0],r[1]+1).some(function(_,k){return XR.a[r[0]+k]==null})&&!confirm(EXS.finishQ))return;xEndSec()};
  var bp=q("#xplay",xel);if(bp){var play=function(){xstop();xau=new Audio("audio/exam/"+name+".mp3");bp.disabled=true;bp.textContent=EXS.playing;
      xau.onended=function(){XR.played[XR.pos]=1;bp.textContent=XR.mode!=="full"?EXS.replay:EXS.heard;bp.disabled=XR.mode==="full"};
      xau.onerror=function(){bp.disabled=false;bp.textContent="▶ "+EXS.listen};var pr=xau.play();if(pr&&pr.catch)pr.catch(function(){bp.disabled=false;bp.textContent="▶ "+EXS.listen})};
    bp.onclick=play;if(!XR.played[XR.pos]&&!XR.played["a"+XR.pos]){XR.played["a"+XR.pos]=1;setTimeout(play,400)}}}
/* question numbers: answered ones are filled and carry a dot (not colour alone); a gap separates each もんだい */
function xnBtn(k,r){var f=XR.f[k],g=k>r[0]&&XR.f[k-1].p!==f.p,a=XR.a[k]!=null;
  return '<button class="xn'+(k===XR.pos?' on':'')+(a?' ans':'')+(g?' g':'')+'" data-k="'+k+'" aria-label="'+h(EXS.qLabel(k-r[0]+1,a))+'"'+(k===XR.pos?' aria-current="step"':'')+'>'+(k-r[0]+1)+'</button>'}
function xCount(){var r=secRange(),n=0;for(var k=r[0];k<=r[1];k++)if(XR.a[k]!=null)n++;var c=q(".xall small",xel);if(c)c.textContent=n+"/"+(r[1]-r[0]+1);return n}
/* the strip scrolls with finger, mouse wheel or trackpad, and keeps the current question in view */
function xNav(prevX){var st=q(".xnums",xel),cur=q(".xnums .on",xel);if(!st)return;st.scrollLeft=prevX;
  if(cur){var want=cur.offsetLeft-(st.clientWidth-cur.offsetWidth)/2,rm=false;try{rm=matchMedia("(prefers-reduced-motion: reduce)").matches}catch(e){}
    if(cur.offsetLeft<st.scrollLeft||cur.offsetLeft+cur.offsetWidth>st.scrollLeft+st.clientWidth||Math.abs(st.scrollLeft-want)>st.clientWidth/3){try{st.scrollTo({left:want,behavior:rm?"auto":"smooth"})}catch(e){st.scrollLeft=want}}}
  st.addEventListener("scroll",function(){if(XR)XR.navX=st.scrollLeft},{passive:true});
  st.addEventListener("wheel",function(e){if(Math.abs(e.deltaY)>Math.abs(e.deltaX)&&st.scrollWidth>st.clientWidth){st.scrollLeft+=e.deltaY;e.preventDefault()}},{passive:false});
  XR.navX=st.scrollLeft}
/* all questions at a glance, grouped by もんだい: one tap to jump anywhere */
function xGrid(){var r=secRange(),n=xCount(),tot=r[1]-r[0]+1,s=curSec(),groups=[],last=-1;
  for(var k=r[0];k<=r[1];k++){var f=XR.f[k];if(f.p!==last){groups.push({p:s.parts[f.p],ks:[]});last=f.p}groups[groups.length-1].ks.push(k)}
  var g=document.createElement("div");g.className="xgrid";g.setAttribute("role","dialog");g.setAttribute("aria-modal","true");g.setAttribute("aria-label",EXS.all);
  g.innerHTML='<div class="xgin"><div class="xgh"><div><b>'+h(EXS.all)+'</b><small>'+h(EXS.done(n,tot))+'</small></div><button class="mp-ib xgx" aria-label="'+h(S.close)+'">'+icon('<path d="M6 6l12 12M18 6L6 18"/>')+'</button></div>'+
    '<p class="xleg"><span class="xn ans" aria-hidden="true"></span>'+h(EXS.legA)+'<span class="xn" aria-hidden="true"></span>'+h(EXS.legT)+'</p>'+
    groups.map(function(G){return '<div class="xgg"><b lang="ja">もんだい'+G.p.n+'</b><div class="xgc">'+G.ks.map(function(k){return xnBtn(k,r).replace(' g"','"')}).join("")+'</div></div>'}).join("")+'</div>';
  xel.appendChild(g);
  function shut(){document.removeEventListener("keydown",esc,true);g.remove();var b=q(".xall",xel);if(b)try{b.focus()}catch(e){}}
  function esc(e){if(e.key==="Escape"){e.stopPropagation();shut()}}
  document.addEventListener("keydown",esc,true);
  g.addEventListener("click",function(e){if(e.target===g)shut()});q(".xgx",g).onclick=shut;
  qa(".xn[data-k]",g).forEach(function(b){b.onclick=function(){XR.pos=+b.getAttribute("data-k");g.remove();document.removeEventListener("keydown",esc,true);xQ()}});
  var cur=q(".xn.on",g);try{(cur||q(".xgx",g)).focus({preventScroll:true});if(cur)cur.scrollIntoView({block:"center"})}catch(e){}}
/* keyboard on a computer: arrows move between questions, 1–4 choose an answer */
document.addEventListener("keydown",function(e){if(!XR||xel.hidden||q(".xgrid",xel)||e.altKey||e.ctrlKey||e.metaKey)return;
  if(e.target&&/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;
  if(e.key==="ArrowRight"){var b=q("#xnext",xel);if(b){e.preventDefault();b.click()}}
  else if(e.key==="ArrowLeft"){var p=q("#xprev",xel);if(p&&!p.disabled){e.preventDefault();p.click()}}
  else if(/^[1-4]$/.test(e.key)){var o=q('.xo[data-o="'+(+e.key-1)+'"]',xel);if(o){e.preventDefault();o.click()}}});
function xEndSec(){clearInterval(XR.timer);xstop();if(XR.si<XR.secs.length-1){XR.si++;xIntro();return}
  var d=exStore();d.att.push({id:XR.ex.id,mode:XR.mode,d:Date.now(),f:XR.f,a:XR.f.map(function(_,k){return XR.a[k]==null?null:XR.a[k]})});
  if(d.att.length>30)d.att=d.att.slice(-30);M.store.set(EK,d);var idx=d.att.length-1;xClose();location.hash="#/simres/"+idx}
function xClose(){clearInterval(XR&&XR.timer);xstop();XR=null;xel.hidden=true;xel.innerHTML="";document.documentElement.classList.remove("mp-exam")}
function xExit(){if(confirm(EXS.exitQ))xClose()}

/* ---------- result and review ---------- */
function vSimRes(k){var d=exStore(),a=d.att[+k];if(!a){location.replace("#/esame");return}var r=score(a),e=exById(a.id),full=r.total!=null;
  var html=head(e.title+" · JLPT "+e.exam.toUpperCase(),EXS.result,'<a class="mp-ib" href="#/esame" aria-label="'+h(EXS.back)+'">'+I.back+'</a>');
  if(full)html+='<div class="mp-card mp-gauge"><div class="mp-score"><b class="'+(r.pass?'ok':'no')+'">'+r.total+'</b><small> / 180</small></div>'+pbar(r.total/180,"red",80/180)+
    '<p class="mp-pass '+(r.pass?'ok':'no')+'">'+h(r.pass?EXS.passed:EXS.notYet)+'</p>'+
    '<div class="mp-sub2"><div><span>'+h(EXS.langS)+'</span><b>'+r.langS+' / 120</b><small>'+h(EXS.min(38))+'</small>'+pbar(r.langS/120,"blue",38/120)+'</div>'+
    '<div><span>'+h(EXS.listenS)+'</span><b>'+r.listenS+' / 60</b><small>'+h(EXS.min(19))+'</small>'+pbar(r.listenS/60,"green",19/60)+'</div></div></div>';
  var weak=null,wp=2;Object.keys(r.sk).forEach(function(s){var p=r.sk[s][0]/r.sk[s][1];if(p<wp){wp=p;weak=s}});
  html+='<h2 class="mp-h2">'+h(S.sections)+'</h2><div class="mp-card mp-skills">'+Object.keys(r.sk).map(function(s){var v=r.sk[s];
    return '<div class="sk"><div class="t"><span>'+h(SK[s][0])+'<i lang="ja">'+SK[s][1]+'</i></span><span>'+v[0]+' / '+v[1]+'</span></div>'+pbar(v[0]/v[1],{vocab:"green",grammar:"blue",reading:"yellow",listening:"red"}[s])+'</div>'}).join("")+
    (weak?'<p class="mp-p" style="margin-top:12px"><b>'+h(EXS.weak(SK[weak][0]))+'</b></p>':'')+'</div>';
  html+='<a class="mp-cta" href="#/simrev/'+k+'">'+h(EXS.review)+I.arrow+'</a><p class="mp-note">'+h(EXS.notOfficial)+'</p>';
  show(html)}
function vSimRev(k){var d=exStore(),a=d.att[+k];if(!a){location.replace("#/esame");return}var e=exById(a.id);
  var html=head(e.title,EXS.review,'<a class="mp-ib" href="#/simres/'+k+'" aria-label="'+h(EXS.back)+'">'+I.back+'</a>'),lastS=-1;
  a.f.forEach(function(f,n){var o=itemOf(e,f),it=o.it,mine=a.a[n],ok=mine===it.a;
    if(f.s!==lastS){lastS=f.s;html+='<h2 class="mp-h2" lang="ja">'+h(o.sec.jp)+'</h2>'}
    var opt=function(i){return it.say?(i+1)+". "+it.say[i]:(i+1)+". "+it.o[i]};
    html+='<div class="mp-card mp-rv '+(ok?'ok':'no')+'"><div class="mp-k">もんだい'+o.part.n+' · '+h(o.part.kind)+'</div>'+
      (o.part.text&&f.i===0?'<div class="xtext" lang="ja">'+ul(o.part.text)+'</div>':'')+(it.text?'<div class="xtext" lang="ja">'+ul(it.text)+'</div>':'')+
      (it.scene?'<p lang="ja">➡ '+h(it.scene)+'</p>':'')+(it.q?'<p class="rq" lang="ja">'+ul(it.q)+'</p>':'')+
      (it.script?'<details class="rscript"><summary>'+h(EXS.script)+'</summary>'+it.script.map(function(l){return '<p><b>'+({N:"",F:"女: ",M:"男: "}[l[0]])+'</b>'+jpHTML(l[1])+'</p>'}).join("")+
        (it.say?it.say.map(function(t,i){return '<p><b>'+(i+1)+'.</b> '+jpHTML(t)+'</p>'}).join(""):'')+'<button class="mp-mini alt" data-au="'+e.id+'-'+o.part.n+'-'+(f.i+1)+'">▶ '+h(EXS.listen)+'</button></details>':'')+
      '<p class="ra"><span>'+h(EXS.your)+':</span> <b class="'+(ok?'ok':'no')+'" lang="ja">'+(mine==null?h(EXS.empty):h(opt(mine)))+'</b></p>'+
      (ok?'':'<p class="ra"><span>'+h(EXS.right)+':</span> <b class="ok" lang="ja">'+h(opt(it.a))+'</b></p>')+
      (it.full?'<p class="ra" lang="ja">'+h(it.full)+'</p>':'')+'<p class="re">'+h(it.e)+'</p></div>'});
  show(html);
  qa("[data-au]",view).forEach(function(b){b.onclick=function(){xstop();xau=new Audio("audio/exam/"+b.getAttribute("data-au")+".mp3");xau.play()}})}

/* quality check (only with ?audit=1): every clickable word must have a meaning */
if(/[?&]audit=1/.test(location.search))window.MPAUDIT=function(){
  var strs=[];function add(x){if(x==null)return;if(Array.isArray(x))x.forEach(add);else if(typeof x==="string")strs.push(x)}
  Object.keys(EX).forEach(function(k){(EX[k]||[]).forEach(function(it){add([it.q,it.e,it.a?it.a[0]:null,it.ask,it.au,it.jp,it.zh,it.it,it.full,it.fix,it.s?String(it.s).replace("＿",it.o?it.o[0]:""):null,it.t==="rep"?it.o.map(function(o){return o[0]}):null,it.t==="gap"?it.o:null,it.t==="ord"?[it.w,it.x]:null])})});
  Object.keys(DLG).forEach(function(k){(DLG[k]||[]).forEach(function(r){add(r[1])})});
  Object.keys(CULT).forEach(function(k){CULT[k].forEach(function(c){add([c.i,c.p,c.it,c.jp,c.cn,(c.w||[]).map(function(w){return w[0]}),c.q?[c.q.q,c.q.e]:null])})});
  if(typeof W!=="undefined")W.forEach(function(w){add(w[0])});
  READ.forEach(function(r){add(r.intro);r.lines.forEach(function(l){add(l[0])});(r.gloss||[]).forEach(function(g){add(g[0])})});
  var render=ZH?function(t){return /[一-鿿]/.test(t)?linkCult(t,[]):itHTML(t)}:mixHTML;
  var div=document.createElement("div"),seen={},miss={};
  function chk(e){var k=e.getAttribute("data-say");if(seen[k])return;seen[k]=1;var m=meaning(k);seen[k]=m||1;if(!m)miss[k]=1}
  strs.forEach(function(t){try{div.innerHTML=render(t)}catch(x){return}qa(".w[data-say]",div).forEach(chk)});
  qa(".book .w[data-say]").forEach(chk);
  /* everything the course can say aloud (to generate and check the audio files) */
  var says={};function sa(x){if(x&&typeof x==="string"&&(ZH?/[A-Za-zÀ-ÿ]/.test(x)&&!/[\u3040-\u9fff]/.test(x):/[\u3040-\u9fff]/.test(x)))says[x.trim().replace(/\s+/g," ")]=1}
  Object.keys(seen).forEach(sa);qa("[data-say]").forEach(function(e){sa(e.getAttribute("data-say"))});
  Object.keys(EX).forEach(function(k){(EX[k]||[]).forEach(function(it){sa(it.au);sa(it.jp);sa(it.zh);sa(it.full);if(it.a)it.a.forEach(sa);if(it.o)it.o.forEach(sa);if(it.w&&!it.w.length===2)it.w.forEach(sa);
    sa(it.fix);sa(it.ask);if(it.t==="gap")sa(String(it.s).replace("＿",it.o[0]));if(it.t==="rep")sa(it.o[0][0]);if(it.t==="tone")sa(it.s)})});
  Object.keys(DLG).forEach(function(k){(DLG[k]||[]).forEach(function(r){sa(r[1])})});
  if(typeof W!=="undefined")W.forEach(function(w){sa(w[0])});
  Object.keys(CULT).forEach(function(k){CULT[k].forEach(function(c){sa(c.i);(c.w||[]).forEach(function(w){sa(w[0])})})});
  (window.TONEDRILL||[]).forEach(function(r){sa(r[0])});
  return {total:Object.keys(seen).length,miss:Object.keys(miss),all:seen,says:Object.keys(says)}};
/* offline support: the same service worker as the home page (scope: the whole app) */
if("serviceWorker" in navigator&&(location.protocol==="https:"||location.hostname==="localhost")){try{navigator.serviceWorker.register("../../sw.js",{scope:"../../"}).catch(function(){})}catch(e){}}
/* first visit straight to the page: land on Today */
if(!location.hash||location.hash==="#"||location.hash==="#mappa")try{history.replaceState(null,"","#/oggi")}catch(e){}
render();
})();
