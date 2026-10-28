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
  cult:"Cultura",cultLead:"Italia e Giappone a confronto: abitudini, cibo, lavoro, feste. Ogni scheda ha parole da ascoltare e una domanda.",
  all:"Tutte",readCount:function(a,b){return a+" di "+b+" lette"},readMark:"Letta",fromLesson:function(n){return "Lezione "+n},
  tools:"Strumenti",toolList:{flash:["Flashcard","Ripasso a intervalli"],verbi:["Coniugatore","Tutte le forme dei verbi"],kana:["Kana","Hiragana e katakana con audio"],frasi:["Frasario","Frasi pronte"],vocab:["Vocabolario","Tutte le parole del corso"]},
  dailyRev:["Ripasso del giorno","Le parole che stai per dimenticare"],
  settings:"Impostazioni",readingT:"Lettura e voce",theme:"Tema",themes:["Auto","Chiaro","Scuro"],redoPlan:"Rifai il piano",changeCourse:"Cambia corso o lingua",reset:"Cancella tutto e ricomincia",resetQ:"Cancellare piano e progressi salvati in questo dispositivo?",close:"Chiudi",back:"Indietro"},
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
  all:"全部",readCount:function(a,b){return "已读 "+a+" / "+b},readMark:"已读",fromLesson:function(n){return "第 "+n+" 课"},
  tools:"工具",toolList:{flash:["单词卡","间隔重复"],verbi:["动词变位","所有动词形式"],frasi:["常用句","现成的句子"],vocab:["词汇表","课程里的所有单词"]},
  dailyRev:["今日复习","快要忘记的单词"],
  settings:"设置",readingT:"阅读和语音",theme:"主题",themes:["自动","浅色","深色"],redoPlan:"重新制定计划",changeCourse:"更换课程或语言",reset:"清除全部并重新开始",resetQ:"清除本设备上保存的计划和进度？",close:"关闭",back:"返回"}
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
  var active=tab==="l"?"corso":tab==="leggi"?(UNITS.some(function(u){return u.id===parts[1]})?"corso":"strumenti"):tab;
  qa("[data-tab]",bar).forEach(function(a){var on=a.getAttribute("data-tab")===active;a.classList.toggle("on",on);if(on)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
  ({oggi:vToday,corso:vCourse,l:function(){vLesson(parts[1])},esame:vExam,cultura:vCult,strumenti:vTools,leggi:function(){vRead(parts[1])}}[tab]||vToday)();
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
    if(ex&&pl.examDate){var left=M.daysBetween(M.today(),pl.examDate);html+='<a class="mp-tile mp-ex" href="#/esame"><span class="mp-lbl">'+h(ex.name)+'</span><div class="mp-big">'+Math.max(0,left)+'<small> '+h(S.examIn(left))+'</small></div><p>'+h(pl.marginW>=0?S.margin(pl.marginW):S.late(-pl.marginW).split(":")[0])+'</p></a>'}
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
      html+='<a class="mp-les'+(isH?' here':'')+'" href="#/l/'+U.id+'"><span class="num t-'+U.color+'">'+(U.kind==="lesson"?U.n:"★")+'</span><span>'+(isH?'<em>'+h(S.here)+'</em>':'')+'<b>'+h(title(U))+'</b><small'+(ZH?' lang="it"':' lang="ja"')+'>'+h(subT(U))+'</small><small> · '+inf.tot+' '+h(S.min)+'</small></span>'+st+'</a>'});
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
    '<div class="mp-k">'+h(kick(U))+'</div><h1 tabindex="-1">'+h(title(U))+'</h1><div class="sub" lang="'+(ZH?"it":"ja")+'">'+h(subT(U))+'</div>'+
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
  if(!ex){html=head(C.native,S.exam)+'<div class="mp-card"><p class="mp-p"><b>'+h(S.examNone)+'</b> '+h(S.examNoneS)+'</p><a class="mp-cta" href="../../#/rifai/'+C.id+'">'+h(S.chooseExam)+I.arrow+'</a></div>'}
  else{html=head(S.exam,ex.name);
    if(pl.examDate){var left=M.daysBetween(M.today(),pl.examDate);
      html+='<div class="mp-ehead"><div class="cd"><b>'+Math.max(0,left)+'</b><small>'+h(S.examIn(left))+'</small></div><p><b>'+h(fmt(pl.examDate))+'</b>. '+h(S.ready(fmt(pl.ready,{month:"long",year:"numeric"})))+' '+h(pl.marginW>=0?S.margin(pl.marginW):S.late(-pl.marginW))+'</p></div>'}
    else html+='<div class="mp-ehead"><p>'+h(S.noDate)+' '+h(S.ready(fmt(pl.ready,{month:"long",year:"numeric"})))+'</p></div>';
    html+='<h2 class="mp-h2">'+h(S.sections)+'</h2><div class="mp-card"><p class="mp-p">'+h(S.sectionsSoon)+'</p><span class="mp-soon">'+h(S.soon)+'</span></div>';
    html+='<div class="mp-acts"><div class="mp-act pri"><b>'+h(S.sim)+'</b><small>'+h(S.simS)+'</small><span class="mp-soon">'+h(S.soon)+'</span></div>'+
      '<div class="mp-act"><b>'+(avg!=null?avg+'%':'—')+'</b><small>'+h(S.mastery)+'</small></div></div>'}
  if(pl){var stt=M.status(C,p,P);
    html+='<h2 class="mp-h2">'+h(S.planT)+' <span class="mp-pill'+(stt<-2?' late':'')+'">'+h(Math.abs(stt)<=2?S.onTrack:stt>0?S.ahead2(stt):S.behind(-stt))+'</span></h2><div class="mp-card mp-tl">'+
      pl.ms.map(function(m){if(m.practice)return '<div><i></i><span><b>'+h(S.practice)+'</b></span><small>'+h(fmt(m.date,{month:"short",year:"numeric"}))+'</small></div>';
        return '<div class="'+(m.done?'done':'')+'"><i></i><span><b>'+h(m.w.level+" · "+m.w.title.replace(/^[^·]*·\s*/,""))+'</b></span><small>'+(m.done?'✓':h(fmt(m.date,{month:"short",year:"numeric"})))+'</small></div>'}).join("")+
      (pl.examDate?'<div class="exam"><i></i><span><b>'+h(ex.name)+'</b></span><small>'+h(fmt(pl.examDate,{day:"numeric",month:"short"}))+'</small></div>':'')+'</div>'}
  show(html)}

/* ---------- Cultura ---------- */
var cultFilter=0;
function vCult(){
  var all=allCult(),rd=cultRead(),nr=all.filter(function(x){return rd[x.key]}).length,dc=dayCult();
  var html=head(S.readCount(nr,all.length),S.cult)+'<p class="mp-lead">'+h(S.cultLead)+'</p>';
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
    var g={flash:"⇄",verbi:ZH?"essere":"行く",kana:"あア",frasi:"「」",vocab:"A–Z"}[k];
    html+='<a class="mp-tool hc-'+cols[i++%cols.length]+'" href="#/leggi/'+k+'"><span class="g"'+(k==="verbi"||k==="kana"?' lang="'+(ZH?"it":"ja")+'"':'')+'>'+h(g)+'</span><b>'+h(L[0])+'</b><small>'+h(L[1])+'</small></a>'});
  html+='</div>';show(html);
  var rv=q("#mprev",view);if(rv)rv.onclick=function(){openReview()}}

/* ---------- reading view: a lesson or a tool from the book ---------- */
function vRead(id){var s=document.getElementById(id);if(!s){location.replace("#/oggi");return}
  s.classList.add("mp-target");
  var U=UNITS.filter(function(u){return u.id===id})[0],back=U?"#/l/"+id:"#/strumenti";
  var t=U?title(U):((S.toolList[id]||[])[0]||"");
  view.innerHTML='<div class="mp-readbar"><a class="mp-ib" href="'+back+'" aria-label="'+h(S.back)+'">'+I.back+'</a><b>'+h(t)+'</b><button class="mp-ib" id="mpset" aria-label="'+h(S.settings)+'">'+I.gear+'</button></div>';
  window.scrollTo(0,0);setTimeout(function(){var r=s.getBoundingClientRect();window.scrollTo(0,window.scrollY+r.top-70)},30)}

/* ---------- settings ---------- */
var shb=document.createElement("div");shb.className="mp-sheetback";shb.hidden=true;
var sh=document.createElement("section");sh.className="mp-sheet";sh.hidden=true;sh.setAttribute("role","dialog");sh.setAttribute("aria-modal","true");
document.body.appendChild(shb);document.body.appendChild(sh);
var readCtl=document.createElement("div");readCtl.className="mp-readctl";
["tbfuri","tbro","tbtr","tbslow"].forEach(function(i){var b=document.getElementById(i);if(b)readCtl.appendChild(b)});
function themeNow(){try{return localStorage.getItem("milepost-theme")||"auto"}catch(e){return "auto"}}
function setTheme(t){try{if(t==="auto"){localStorage.removeItem("milepost-theme");localStorage.removeItem(KEY+"-theme")}else{localStorage.setItem("milepost-theme",t);localStorage.setItem(KEY+"-theme",t)}}catch(e){}
  if(t==="auto")document.documentElement.removeAttribute("data-theme");else document.documentElement.setAttribute("data-theme",t)}
function closeSettings(){sh.hidden=shb.hidden=true}
shb.onclick=closeSettings;document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!sh.hidden)closeSettings()});
function openSettings(){var th=themeNow();
  sh.innerHTML='<div class="grab" aria-hidden="true"></div><h2>'+h(S.settings)+'</h2>'+
    (readCtl.children.length?'<div class="mp-lbl" style="margin-top:6px">'+h(S.readingT)+'</div><div id="mprc"></div>':'')+
    '<div class="mp-set"><span>'+h(S.theme)+'</span><div class="mp-seg">'+["auto","light","dark"].map(function(t,i){return '<button data-th="'+t+'" aria-pressed="'+(th===t)+'">'+h(S.themes[i])+'</button>'}).join("")+'</div></div>'+
    '<a class="mp-set mp-a" href="../../#/rifai/'+C.id+'">'+h(S.redoPlan)+' ›</a>'+
    '<a class="mp-set mp-a" href="../../#/corso">'+h(S.changeCourse)+' ›</a>'+
    '<button class="mp-set mp-a danger" id="mpreset">'+h(S.reset)+'</button>'+
    '<button class="mp-cta alt" id="mpclose">'+h(S.close)+'</button>';
  var rc=q("#mprc",sh);if(rc)rc.appendChild(readCtl);
  qa("[data-th]",sh).forEach(function(b){b.onclick=function(){setTheme(b.getAttribute("data-th"));openSettings()}});
  q("#mpclose",sh).onclick=closeSettings;
  q("#mpreset",sh).onclick=function(){if(!confirm(S.resetQ))return;
    CATALOG.courses.forEach(function(c){M.store.del(M.pathKey(c));M.store.del(c.storageKey);M.store.del(c.storageKey+"-cultread")});M.store.del("milepost-v1");location.href="../../"};
  sh.hidden=shb.hidden=false;try{q("button",sh).focus()}catch(e){}}


/* quality check (only with ?audit=1): every clickable word must have a meaning */
if(/[?&]audit=1/.test(location.search))window.MPAUDIT=function(){
  var strs=[];function add(x){if(x==null)return;if(Array.isArray(x))x.forEach(add);else if(typeof x==="string")strs.push(x)}
  Object.keys(EX).forEach(function(k){(EX[k]||[]).forEach(function(it){add([it.q,it.e,it.a?it.a[0]:null,it.au,it.jp,it.it,it.full])})});
  Object.keys(DLG).forEach(function(k){(DLG[k]||[]).forEach(function(r){add(r[1])})});
  Object.keys(CULT).forEach(function(k){CULT[k].forEach(function(c){add([c.i,c.p,c.it,c.jp,c.cn,(c.w||[]).map(function(w){return w[0]}),c.q?[c.q.q,c.q.e]:null])})});
  if(typeof W!=="undefined")W.forEach(function(w){add(w[0])});
  var render=ZH?function(t){return /[一-鿿]/.test(t)?linkCult(t,[]):itHTML(t)}:mixHTML;
  var div=document.createElement("div"),seen={},miss={};
  function chk(e){var k=e.getAttribute("data-say");if(seen[k])return;seen[k]=1;if(!meaning(k))miss[k]=1}
  strs.forEach(function(t){try{div.innerHTML=render(t)}catch(x){return}qa(".w[data-say]",div).forEach(chk)});
  qa(".book .w[data-say]").forEach(chk);
  return {total:Object.keys(seen).length,miss:Object.keys(miss)}};
/* first visit straight to the page: land on Today */
if(!location.hash||location.hash==="#"||location.hash==="#mappa")try{history.replaceState(null,"","#/oggi")}catch(e){}
render();
})();
