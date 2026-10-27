/* Milepost shell: language → course → 3 questions → honest plan → home.
   Course progress is read from each course's own storage (same origin), so the plan
   always reflects what the learner has really done. */
(function(){
"use strict";
var KEY="milepost-v1", THEME="milepost-theme";
var app=document.getElementById("app");
function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}

/* ---------- storage (always behind try/catch) ---------- */
var store={
  get:function(k){try{return JSON.parse(localStorage.getItem(k)||"null")}catch(e){return null}},
  set:function(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},
  del:function(k){try{localStorage.removeItem(k)}catch(e){}}
};
var ST=store.get(KEY)||{};
ST.plans=ST.plans||{};
function save(){store.set(KEY,ST)}

/* ---------- language ---------- */
function detect(){
  var ls=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""];
  for(var i=0;i<ls.length;i++){var l=String(ls[i]).toLowerCase();if(l.indexOf("zh")===0)return "zh";if(l.indexOf("it")===0)return "it"}
  return null}
var T=I18N.it;
function setLang(l){T=I18N[l]||I18N.it;document.documentElement.lang=T.htmlLang}
if(!ST.speak){var d=detect();if(d){ST.speak=d;save()}}
setLang(ST.speak||"it");

/* ---------- catalog helpers ---------- */
function course(id){for(var i=0;i<CATALOG.courses.length;i++)if(CATALOG.courses[i].id===id)return CATALOG.courses[i];return null}
function coursesFor(l){return CATALOG.courses.filter(function(c){return c.speak===l})}
function examOf(c,id){for(var i=0;i<c.exams.length;i++)if(c.exams[i].id===id)return c.exams[i];return null}
function uIndex(c,id){for(var i=0;i<c.units.length;i++)if(c.units[i].id===id)return i;return c.units.length-1}
function weight(u){return u.kind==="review"?0.6:1}
function sum(a,f){return a.reduce(function(s,x){return s+f(x)},0)}

/* ---------- course progress (owned by the course page) ---------- */
function pathKey(c){return c.storageKey+"-path"}
function prog(c){var p=store.get(pathKey(c))||{};p.stars=p.stars||{};p.days=p.days||{};p.goal=p.goal||3;p.skip=p.skip||1;return p}
function passed(p,id){return (p.stars[id]||0)>=1}
var GOAL_STEPS={15:2,30:3,60:5};

/* ---------- dates ---------- */
function iso(d){return d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2)}
function parseISO(s){var a=String(s).split("-");return new Date(+a[0],+a[1]-1,+a[2])}
function today(){var d=new Date();d.setHours(0,0,0,0);return d}
function addDays(d,n){var x=new Date(d.getTime());x.setDate(x.getDate()+Math.round(n));return x}
function daysBetween(a,b){return Math.round((b-a)/864e5)}
function fmt(d,o){try{return new Intl.DateTimeFormat(T.locale,o||{day:"numeric",month:"long",year:"numeric"}).format(d)}catch(e){return iso(d)}}
function fmtMonth(d){return fmt(d,{month:"short",year:"numeric"})}

/* ---------- the plan: honest hours, not just lesson time ----------
   Hours per goal come from courses.json (typical total study time, review and practice included).
   Units already known (start level) are removed proportionally; an exam goal keeps 15 % for exam practice. */
function plan(c,p,pr,from){
  var ex=p.goal==="exam"?examOf(c,p.exam):null;
  var all=c.units.slice(0,uIndex(c,ex?ex.upto:null)+1);
  var inc=all.filter(function(u){return u.w>=p.start});
  var H=ex?ex.hours:c.courseHours, prac=ex?0.15:0;
  var Wall=sum(all,weight)||1,Winc=sum(inc,weight);
  var contentH=H*(1-prac)*Winc/Wall, pracH=H*prac;
  var rate=p.mins/60*6/7;                       /* hours per calendar day */
  var Wdone=pr?sum(inc.filter(function(u){return passed(pr,u.id)}),weight):0;
  var hPerW=contentH/Math.max(Winc,0.001);
  var remH=(Winc-Wdone)*hPerW+pracH;
  var start=from||today();
  /* milestones: end of each part, then exam practice */
  var ms=[],cum=Wdone*hPerW,worlds={};
  inc.forEach(function(u){worlds[u.w]=(worlds[u.w]||0)+weight(u)});
  var doneByW={};inc.forEach(function(u){if(pr&&passed(pr,u.id))doneByW[u.w]=(doneByW[u.w]||0)+weight(u)});
  var t=0;
  c.worlds.forEach(function(w){if(!worlds[w.w])return;
    var left=(worlds[w.w]-(doneByW[w.w]||0))*hPerW;t+=left;
    ms.push({w:w,done:left<=0.001,date:addDays(start,t/rate),units:inc.filter(function(u){return u.w===w.w})})});
  if(pracH){t+=pracH;ms.push({practice:true,date:addDays(start,t/rate)})}
  var ready=addDays(start,remH/rate);
  var r={ex:ex,inc:inc,ready:ready,ms:ms,rate:rate,remH:remH,Winc:Winc,Wdone:Wdone,hPerW:hPerW,contentH:contentH,lastLevel:inc.length?c.worlds[inc[inc.length-1].w-1].level:""};
  if(ex&&p.date){var ed=parseISO(p.date);r.examDate=ed;r.marginW=Math.floor(daysBetween(ready,ed)/7);
    var avail=daysBetween(start,ed)-7;
    r.needMins=avail>0?Math.ceil(remH/avail*7/6*60/5)*5:Infinity}
  return r}
/* where the learner should be today according to the plan made on p.since */
function status(c,p,pr){
  var since=p.since?parseISO(p.since):today();
  var base=plan(c,p,null,since);
  var elapsedH=Math.max(0,daysBetween(since,today()))*base.rate;
  var expectedW=Math.min(base.Winc,elapsedH/base.hPerW);
  var doneW=sum(base.inc.filter(function(u){return passed(pr,u.id)}),weight);
  var days=Math.round((doneW-expectedW)*base.hPerW/base.rate);
  return days}

/* ---------- routing (hash, so the back button works) ---------- */
var ON={};   /* onboarding draft */
function go(h){if(location.hash===h)render();else location.hash=h}
window.addEventListener("hashchange",render);
function route(){return (location.hash||"#/").slice(1)}

function top(right){return '<div class="top"><div class="brand">'+LOGO+'<span>Milepost</span></div>'+(right||"")+'</div>'}
function steps(n){var s='<div class="steps" aria-hidden="true">';for(var i=1;i<=3;i++)s+='<i'+(i<=n?' class="on"':'')+'></i>';return s+'</div>'}
function screen(html){app.innerHTML='<div class="scr">'+html+'</div>';var h=$("h1",app)||$(".hello",app);if(h){h.setAttribute("tabindex","-1");try{h.focus({preventScroll:true})}catch(e){}}window.scrollTo(0,0)}

function render(){
  var r=route();
  if(!ST.speak&&r!=="/lingua")return go("#/lingua");
  var active=ST.active&&course(ST.active),hasPlan=active&&ST.plans[active.id];
  if(r==="/lingua")return vSpeak();
  if(r==="/corso")return vCourses();
  if(/^\/(obiettivo|livello|tempo|piano)$/.test(r)){if(!ON.cid||!course(ON.cid))return go("#/corso");
    return {"/obiettivo":vGoal,"/livello":vStart,"/tempo":vTime,"/piano":vPlan}[r]()}
  if(!hasPlan)return go("#/corso");
  vHome(active)}

/* ---------- 0 · which language do you speak ---------- */
function vSpeak(){
  screen(top()+'<h1>'+esc(I18N.it.speakQ)+'<br><span lang="zh-CN">'+esc(I18N.zh.speakQ)+'</span></h1>'+
    '<div class="opts" role="radiogroup">'+
    ['it','zh'].map(function(l){var lab=l==="it"?["Italiano","Corsi spiegati in italiano"]:["中文","用中文讲解的课程"];
      return '<button class="opt" role="radio" aria-checked="'+(ST.speak===l)+'" data-l="'+l+'" lang="'+I18N[l].htmlLang+'"><span class="ic">'+(l==="it"?"IT":"中")+'</span><span><b>'+lab[0]+'</b><small>'+lab[1]+'</small></span></button>'}).join("")+
    '<button class="opt" disabled lang="en"><span class="ic">EN</span><span><b>English</b><small>Coming soon</small></span><span class="tag">Soon</span></button>'+
    '</div>');
  $$(".opt[data-l]",app).forEach(function(b){b.onclick=function(){ST.speak=b.dataset.l;save();setLang(ST.speak);go("#/corso")}})}

/* ---------- 1 · what do you want to learn ---------- */
function vCourses(){
  var cs=coursesFor(ST.speak);
  screen(top('<button class="chip" id="chlang">'+esc(T.speaks)+' · <b>'+esc(T.change)+'</b></button>')+
    '<h1>'+esc(T.learnQ)+'</h1><p class="lead">'+esc(T.learnSub)+'</p>'+
    cs.map(function(c){return '<button class="course '+c.color+'" data-c="'+c.id+'"><div class="art">'+ART[c.learn]+'</div>'+
      '<div class="body"><div><h3>'+esc(c.name)+'<span lang="'+c.learn+'">'+esc(c.native)+'</span></h3><p>'+esc(c.levelsLabel)+'<br>'+esc(c.exams.filter(function(e){return !e.soon}).map(function(e){return e.name}).join(" · "))+'</p></div>'+
      '<span class="go">'+ICO.arrow+'</span></div></button>'}).join("")+
    '<div class="soon">'+esc(T.soon)+'</div><div class="soonrow">'+
    (CATALOG.soon[ST.speak]||[]).map(function(s){return '<span><b>'+esc(s[0])+'</b>'+esc(s[1])+'</span>'}).join("")+'</div>');
  $("#chlang").onclick=function(){go("#/lingua")};
  $$(".course",app).forEach(function(b){b.onclick=function(){var c=course(b.dataset.c),old=ST.plans[c.id];
    ON=old?JSON.parse(JSON.stringify(old)):{cid:c.id,goal:null,exam:null,date:null,start:1,mins:30};ON.cid=c.id;go("#/obiettivo")}})}

/* ---------- 2 · why ---------- */
function vGoal(){
  var c=course(ON.cid);
  var exams=c.exams.map(function(e){return '<button class="pill" data-e="'+e.id+'" aria-pressed="'+(ON.exam===e.id)+'"'+(e.soon?' disabled':'')+'>'+esc(e.name)+(e.soon?' · '+esc(T.soonTag):'')+'</button>'}).join("");
  screen(top('<button class="ghost" id="skip">'+esc(T.skip)+'</button>')+steps(1)+
    '<h1>'+esc(T.goalQ(c))+'</h1><p class="lead">'+esc(T.goalSub)+'</p>'+
    '<div class="opts">'+["exam","travel","work","passion"].map(function(g){var L=T.goals[g];
      return '<button class="opt" data-g="'+g+'" aria-pressed="'+(ON.goal===g)+'"><span class="ic">'+ICO[g]+'</span><span><b>'+esc(L[0])+'</b><small>'+esc(L[1])+'</small></span>'+(g==="exam"?'<span class="tag">'+esc(c.exams[0].name.split(" ")[0])+'</span>':'')+'</button>'}).join("")+'</div>'+
    '<div class="sub" id="exbox"'+(ON.goal==="exam"?'':' hidden')+'><b>'+esc(T.whichExam)+'</b><div class="pills" id="exams">'+exams+'</div>'+
      '<div id="datebox"><b class="sublbl">'+esc(T.examDate)+'</b><div class="pills" id="dates"></div><p class="note" id="exnote"></p></div></div>'+
    '<div class="foot"><span class="ghost" aria-hidden="true">'+esc(T.stepOf(1))+'</span><button class="btn grow" id="next">'+esc(T.next)+'</button></div>');
  function dates(){var e=examOf(c,ON.exam),box=$("#dates");$("#datebox").hidden=!e;if(!e)return;
    var ds=(e.dates||[]).filter(function(d){return parseISO(d)>addDays(today(),14)}).slice(0,2);
    var custom=ON.date&&ds.indexOf(ON.date)<0;
    box.innerHTML=ds.map(function(d){return '<button class="pill" data-d="'+d+'" aria-pressed="'+(ON.date===d)+'">'+esc(fmt(parseISO(d)))+'</button>'}).join("")+
      '<button class="pill" data-d="other" aria-pressed="'+custom+'">'+esc(T.otherDate)+'</button>'+
      '<button class="pill" data-d="none" aria-pressed="'+(ON.date===null&&ON._noDate===true)+'">'+esc(T.noDate)+'</button>'+
      '<input class="datein" type="date" id="din" min="'+iso(addDays(today(),14))+'"'+(custom?' value="'+ON.date+'"':' hidden')+' aria-label="'+esc(T.examDate)+'">';
    $("#exnote").textContent=(e.partial?T.partialExam+" ":"")+(c.examNote||"");
    $$("[data-d]",box).forEach(function(b){b.onclick=function(){var v=b.dataset.d;
      if(v==="other"){$$("[data-d]",box).forEach(function(x){x.setAttribute("aria-pressed",x===b)});var i=$("#din");i.hidden=false;try{i.showPicker&&i.showPicker()}catch(er){}i.focus();return}
      ON.date=v==="none"?null:v;ON._noDate=v==="none";dates();upd()}});
    $("#din").onchange=function(){ON.date=this.value||null;ON._noDate=false;upd()}}
  function upd(){$("#next").disabled=!ON.goal||(ON.goal==="exam"&&!ON.exam)}
  $$(".opt[data-g]",app).forEach(function(b){b.onclick=function(){ON.goal=b.dataset.g;
    $$(".opt[data-g]",app).forEach(function(x){x.setAttribute("aria-pressed",x===b)});
    $("#exbox").hidden=ON.goal!=="exam";if(ON.goal==="exam"&&!ON.exam){var f=c.exams.filter(function(e){return !e.soon})[0];ON.exam=f&&f.id;
      $$("#exams .pill").forEach(function(x){x.setAttribute("aria-pressed",x.dataset.e===ON.exam)});dates()}upd()}});
  $$("#exams .pill").forEach(function(b){b.onclick=function(){ON.exam=b.dataset.e;ON.date=null;ON._noDate=false;$$("#exams .pill").forEach(function(x){x.setAttribute("aria-pressed",x===b)});dates();upd()}});
  if(ON.goal==="exam")dates();
  $("#skip").onclick=function(){if(!ON.goal)ON.goal="passion";go("#/livello")};
  $("#next").onclick=function(){go("#/livello")};upd()}

/* ---------- 3 · where do you start ---------- */
function vStart(){
  var c=course(ON.cid);
  screen(top('<button class="ghost" id="skip">'+esc(T.skip)+'</button>')+steps(2)+
    '<h1>'+esc(T.startQ)+'</h1><p class="lead">'+esc(T.startSub)+'</p>'+
    '<div class="opts">'+c.starts.map(function(s,i){var lv=c.worlds[s.skip-1];
      return '<button class="opt" data-s="'+s.skip+'" aria-pressed="'+(ON.start===s.skip)+'"><span class="ic">'+esc(lv?lv.level:(i+1))+'</span><span><b>'+esc(s.t)+'</b><small>'+esc(s.s)+'</small></span></button>'}).join("")+'</div>'+
    '<div class="foot"><button class="ghost" id="back">'+ICO.back+esc(T.back)+'</button><button class="btn grow" id="next">'+esc(T.next)+'</button></div>');
  $$(".opt[data-s]",app).forEach(function(b){b.onclick=function(){ON.start=+b.dataset.s;$$(".opt[data-s]",app).forEach(function(x){x.setAttribute("aria-pressed",x===b)})}});
  $("#back").onclick=function(){history.back()};
  $("#skip").onclick=$("#next").onclick=function(){go("#/tempo")}}

/* ---------- 4 · how much time ---------- */
function vTime(){
  screen(top('<button class="ghost" id="skip">'+esc(T.skip)+'</button>')+steps(3)+
    '<h1>'+esc(T.timeQ)+'</h1><p class="lead">'+esc(T.timeSub)+'</p>'+
    '<div class="opts">'+[15,30,60].map(function(m){var L=T.times[m];
      return '<button class="opt" data-m="'+m+'" aria-pressed="'+(ON.mins===m)+'"><span class="ic">'+m+'′</span><span><b>'+esc(L[0])+'</b><small>'+esc(L[1])+'</small></span></button>'}).join("")+'</div>'+
    '<div class="foot"><button class="ghost" id="back">'+ICO.back+esc(T.back)+'</button><button class="btn grow" id="next">'+esc(T.next)+'</button></div>');
  $$(".opt[data-m]",app).forEach(function(b){b.onclick=function(){ON.mins=+b.dataset.m;$$(".opt[data-m]",app).forEach(function(x){x.setAttribute("aria-pressed",x===b)})}});
  $("#back").onclick=function(){history.back()};
  $("#skip").onclick=$("#next").onclick=function(){go("#/piano")}}

/* ---------- 5 · the plan ---------- */
function timeline(c,P,pr,isHome){
  var cur=null;
  var rows=P.ms.map(function(m){
    if(m.practice)return '<div><i></i><span><b>'+esc(T.practice[0])+'</b><s>'+esc(T.practice[1])+'</s></span><small>'+esc(fmtMonth(m.date))+'</small></div>';
    var now=!m.done&&!cur;if(now)cur=m;
    var first=m.units[0],last=m.units[m.units.length-1];
    return '<div class="'+(m.done?'done':now?'now':'')+'"><i></i><span><b>'+esc(m.w.level+' · '+m.w.title.replace(/^[^·]*·\s*/,""))+'</b><s>'+esc(first.t)+' → '+esc(last.t)+'</s></span><small>'+(m.done?'✓':esc(fmtMonth(m.date)))+'</small></div>'});
  if(P.examDate)rows.push('<div class="exam"><i style="background:var(--accent)"></i><span><b>'+esc(P.ex.name)+'</b><s>'+esc(fmt(P.examDate))+'</s></span><small>'+esc(T.examShort)+'</small></div>');
  return '<div class="tl">'+rows.join("")+'</div>'}
function bar(P,from){
  var end=P.examDate&&P.examDate>P.ready?P.examDate:P.ready,span=Math.max(1,daysBetween(from,end));
  var w=Math.min(100,daysBetween(from,P.ready)/span*100),ex=P.examDate?Math.min(100,daysBetween(from,P.examDate)/span*100):null;
  return '<div class="bar"><i style="width:'+w.toFixed(1)+'%"></i>'+(ex!=null?'<em style="left:calc('+ex.toFixed(1)+'% - 1px)"></em>':'')+'</div>'+
    '<div class="barlbl"><span>'+esc(T.today)+'</span><span>'+(P.examDate?esc(T.examShort+' · '+fmt(P.examDate,{day:"numeric",month:"short"})):esc(fmt(P.ready,{day:"numeric",month:"short"})))+'</span></div>'}
function vPlan(){
  var c=course(ON.cid),pr=prog(c),P=plan(c,ON,pr);
  var title,warn="";
  if(P.ex&&P.examDate){
    if(P.marginW>=0)title=T.planExamOk(P.ex.name,fmt(P.ready,{month:"long",year:"numeric"}));
    else{title=T.planExamLate(P.ex.name);
      var opt=[15,30,60].filter(function(m){return m>ON.mins&&m>=P.needMins})[0];
      warn='<div class="warn"><b>'+esc(T.lateBy(-P.marginW))+'</b> '+esc(P.needMins<=60?T.needMins(P.needMins):T.needImpossible)+
        '<div class="acts">'+(opt?'<button class="pill" id="usemins" data-m="'+opt+'">'+esc(T.useMins(opt))+'</button>':'')+'<button class="pill" id="otherdate">'+esc(T.otherSession)+'</button></div></div>'}}
  else if(P.ex)title=T.planNoDate(P.ex.name,fmt(P.ready,{month:"long",year:"numeric"}));
  else title=T.planNoExam(P.lastLevel,fmt(P.ready,{month:"long",year:"numeric"}));
  var first=P.inc.filter(function(u){return !passed(pr,u.id)})[0]||P.inc[0]||c.units.filter(function(u){return !passed(pr,u.id)})[0]||c.units[0];
  screen(top('<button class="ghost" id="edit">'+esc(T.back)+'</button>')+
    '<div class="kick">'+esc(T.planKick)+'</div><h1>'+esc(title)+'</h1>'+
    '<div class="card"><div class="big"><b>'+ON.mins+' '+esc(T.min)+'</b><span>'+esc(T.perDay)+(P.ex&&P.examDate&&P.marginW>=0?' · '+esc(T.marginOk(P.marginW)):'')+'</span></div>'+
    bar(P,today())+timeline(c,P,pr)+'</div>'+warn+
    '<p class="note">'+esc(T.planHonest)+'</p>'+
    '<div class="foot"><button class="btn full" id="start">'+esc(T.startCta(first.t))+ICO.arrow+'</button></div>');
  $("#edit").onclick=function(){history.back()};
  var um=$("#usemins");if(um)um.onclick=function(){ON.mins=+um.dataset.m;vPlan()};
  var od=$("#otherdate");if(od)od.onclick=function(){go("#/obiettivo")};
  $("#start").onclick=function(){commit();location.href="c/"+c.id+"/#mappa"}}
function commit(){
  var c=course(ON.cid),p={goal:ON.goal||"passion",exam:ON.goal==="exam"?ON.exam:null,date:ON.goal==="exam"?ON.date:null,start:ON.start||1,mins:ON.mins||30,since:iso(today())};
  ST.plans[c.id]=p;ST.active=c.id;save();
  var pr=store.get(pathKey(c))||{done:{},stars:{},sc:{},skip:1,days:{},goal:3};
  pr.skip=Math.max(pr.skip||1,p.start);pr.goal=GOAL_STEPS[p.mins]||3;store.set(pathKey(c),pr)}

/* ---------- home ---------- */
function vHome(c){
  var p=ST.plans[c.id],pr=prog(c),P=plan(c,p,pr);
  var nPass=P.inc.filter(function(u){return passed(pr,u.id)}).length,cur=P.inc.filter(function(u){return !passed(pr,u.id)})[0];
  var h=new Date().getHours(),hi=T.homeHi[h<13?0:h<18?1:2];
  var tsteps=pr.days[iso(today())]||0,g=pr.goal||3,C=2*Math.PI*24,fr=Math.min(1,tsteps/g);
  var mon=addDays(today(),-((today().getDay()+6)%7));
  var active=0;
  var week=T.weekDays.map(function(lbl,i){var d=addDays(mon,i),on=!!pr.days[iso(d)],isT=daysBetween(d,today())===0;
    if(on)active++;return '<span class="'+(on?'on ':'')+(isT?'today':'')+'"><i></i>'+esc(lbl)+'</span>'}).join("");
  var st=status(c,p,pr),stH=Math.abs(st)<=2?'<span class="status">'+esc(T.onTrack)+'</span>':st>0?'<span class="status">'+esc(T.ahead(st))+'</span>':'<span class="status late">'+esc(T.behind(-st))+'</span>';
  var exam="";
  if(P.ex){var left=P.examDate?daysBetween(today(),P.examDate):null;
    exam='<div class="card examcard">'+(left!=null&&left>=0?'<div class="days"><b>'+left+'</b><small>'+esc(T.examDays(left))+'</small></div>':'<div class="days"><b>'+ICO.clock.replace('<svg','<svg width="34" height="34" fill="none" stroke="currentColor" stroke-width="2.2"')+'</b></div>')+
      '<div><h3>'+esc(left!=null?T.examTo(P.ex.name):P.ex.name)+'</h3><p>'+esc(left!=null?(P.marginW>=0?T.marginOk(P.marginW):T.lateBy(-P.marginW)):T.examNoDate)+'</p><span class="soonbadge">'+esc(T.examSims)+' · '+esc(T.soonBadge)+'</span></div></div>'}
  screen(top('<button class="ibtn" id="gear" aria-label="'+esc(T.settingsAria)+'">'+ICO.gear+'</button>')+
    '<div class="hello">'+esc(hi)+'</div>'+
    '<a class="course '+c.color+'" href="c/'+c.id+'/#mappa"><div class="art">'+ART[c.learn]+'</div>'+
      '<div class="body"><div><h3>'+esc(c.name)+'<span lang="'+c.learn+'">'+esc(c.native)+'</span></h3>'+
      (cur?'<p>'+esc(T.nowUnit+T.colon+cur.t)+'</p>':'')+
      '<div class="prog"><span class="pb"><i style="width:'+(P.inc.length?nPass/P.inc.length*100:100).toFixed(0)+'%"></i></span>'+esc(T.units(nPass,P.inc.length))+'</div></div>'+
      '<span class="go" aria-label="'+esc(T.continueCta)+'">'+ICO.arrow+'</span></div></a>'+
    '<div class="row2">'+
      '<div class="tile"><span class="lbl">'+esc(T.todayLbl)+'</span><svg class="ring" viewBox="0 0 56 56" aria-hidden="true"><circle class="b" cx="28" cy="28" r="24"/><circle class="f" cx="28" cy="28" r="24" stroke-dasharray="'+(C*fr).toFixed(1)+' '+C.toFixed(1)+'"/></svg><p>'+esc(T.todaySteps(tsteps,g))+'</p></div>'+
      '<div class="tile"><span class="lbl">'+esc(T.weekLbl)+'</span><div class="val">'+active+'<small> / 6 '+esc(T.daysWord)+'</small></div><div class="week">'+week+'</div></div>'+
    '</div>'+exam+
    '<h2 class="sec">'+esc(T.planLbl)+' '+stH+'</h2>'+
    '<div class="card" style="margin-top:0">'+bar(P,today())+timeline(c,P,pr,true)+'</div>'+
    '<button class="addrow" id="add">'+ICO.plus+esc(T.addLang)+'</button>'+
    '<div class="foot"><a class="btn full" href="c/'+c.id+'/#mappa">'+esc(T.continueCta)+ICO.arrow+'</a></div>');
  $("#gear").onclick=openSettings;
  $("#add").onclick=function(){go("#/corso")}}

/* ---------- settings sheet ---------- */
var sheet=$("#sheet"),back=$("#sheetback"),lastFocus=null;
function closeSheet(){sheet.hidden=back.hidden=true;if(lastFocus)try{lastFocus.focus()}catch(e){}}
back.onclick=closeSheet;
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!sheet.hidden)closeSheet()});
function themeNow(){try{return localStorage.getItem(THEME)||"auto"}catch(e){return "auto"}}
function openSettings(){
  lastFocus=document.activeElement;
  var th=themeNow();
  sheet.innerHTML='<div class="grab" aria-hidden="true"></div><h2 id="sheetttl">'+esc(T.settings)+'</h2>'+
    '<div class="set"><span>'+esc(T.setSpeak)+'</span><div class="seg">'+['it','zh'].map(function(l){return '<button data-sp="'+l+'" aria-pressed="'+(ST.speak===l)+'">'+(l==="it"?"Italiano":"中文")+'</button>'}).join("")+'</div></div>'+
    '<div class="set"><span>'+esc(T.setTheme)+'</span><div class="seg">'+['auto','light','dark'].map(function(t){return '<button data-th="'+t+'" aria-pressed="'+(th===t)+'">'+esc(T.themes[t])+'</button>'}).join("")+'</div></div>'+
    '<div class="set"><button class="linkbtn" id="redo">'+esc(T.redoPlan)+'</button></div>'+
    '<div class="set"><button class="linkbtn danger" id="reset">'+esc(T.resetAll)+'</button></div>'+
    '<div class="set"><button class="btn alt full" id="sclose">'+esc(T.close)+'</button></div>';
  sheet.hidden=back.hidden=false;
  $$("[data-sp]",sheet).forEach(function(b){b.onclick=function(){ST.speak=b.dataset.sp;save();setLang(ST.speak);closeSheet();
    var a=ST.active&&course(ST.active);if(!a||a.speak!==ST.speak){go("#/corso")}else render()}});
  $$("[data-th]",sheet).forEach(function(b){b.onclick=function(){var t=b.dataset.th;try{if(t==="auto")localStorage.removeItem(THEME);else localStorage.setItem(THEME,t)}catch(e){}
    if(t==="auto")document.documentElement.removeAttribute("data-theme");else document.documentElement.setAttribute("data-theme",t);openSettings()}});
  $("#redo").onclick=function(){var a=course(ST.active);ON=JSON.parse(JSON.stringify(ST.plans[a.id]));ON.cid=a.id;closeSheet();go("#/obiettivo")};
  $("#reset").onclick=function(){if(!confirm(T.resetConfirm))return;CATALOG.courses.forEach(function(c){store.del(pathKey(c))});store.del(KEY);ST={plans:{}};closeSheet();ON={};
    var d=detect();if(d){ST.speak=d;save()}go(ST.speak?"#/corso":"#/lingua")};
  $("#sclose").onclick=closeSheet;
  $("button",sheet).focus()}

/* ---------- offline ---------- */
if("serviceWorker" in navigator&&location.protocol==="https:"){window.addEventListener("load",function(){navigator.serviceWorker.register("sw.js").catch(function(){})})}

render();
})();
