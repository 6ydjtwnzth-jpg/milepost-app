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

/* ---------- shared helpers (plan.js) ---------- */
var course=MPPlan.course,coursesFor=MPPlan.coursesFor,examOf=MPPlan.examOf,uIndex=MPPlan.uIndex,weight=MPPlan.weight,sum=MPPlan.sum,
    pathKey=MPPlan.pathKey,prog=MPPlan.prog,passed=MPPlan.passed,GOAL_STEPS=MPPlan.GOAL_STEPS,iso=MPPlan.iso,parseISO=MPPlan.parseISO,
    today=MPPlan.today,addDays=MPPlan.addDays,daysBetween=MPPlan.daysBetween,plan=MPPlan.plan,status=MPPlan.status;
function fmt(d,o){try{return new Intl.DateTimeFormat(T.locale,o||{day:"numeric",month:"long",year:"numeric"}).format(d)}catch(e){return iso(d)}}
function fmtMonth(d){return fmt(d,{month:"short",year:"numeric"})}

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
  var m=r.match(/^\/rifai\/([\w-]+)$/);
  if(m&&course(m[1])&&ST.plans[m[1]]){ON=JSON.parse(JSON.stringify(ST.plans[m[1]]));ON.cid=m[1];return go("#/obiettivo")}
  if(!hasPlan)return go("#/corso");
  location.replace("c/"+active.id+"/#/oggi")}

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
  $("#start").onclick=function(){commit();location.href="c/"+c.id+"/#/l/"+first.id}}
function commit(){
  var c=course(ON.cid),p={goal:ON.goal||"passion",exam:ON.goal==="exam"?ON.exam:null,date:ON.goal==="exam"?ON.date:null,start:ON.start||1,mins:ON.mins||30,since:iso(today())};
  ST.plans[c.id]=p;ST.active=c.id;save();
  var pr=store.get(pathKey(c))||{done:{},stars:{},sc:{},skip:1,days:{},goal:3};
  pr.skip=Math.max(pr.skip||1,p.start);pr.goal=GOAL_STEPS[p.mins]||3;store.set(pathKey(c),pr)}

/* ---------- offline ---------- */
/* registered right away: a returning user is sent to the course page before the "load" event */
if("serviceWorker" in navigator&&(location.protocol==="https:"||location.hostname==="localhost")){try{navigator.serviceWorker.register("sw.js").catch(function(){})}catch(e){}}

render();
})();
