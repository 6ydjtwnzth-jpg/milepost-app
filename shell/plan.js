/* Shared by the onboarding shell and the course app: catalog helpers, course progress and the honest study plan. */
var MPPlan=(function(){
"use strict";
var store={get:function(k){try{return JSON.parse(localStorage.getItem(k)||"null")}catch(e){return null}},set:function(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},del:function(k){try{localStorage.removeItem(k)}catch(e){}}};
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

return {store:store,course:course,coursesFor:coursesFor,examOf:examOf,uIndex:uIndex,weight:weight,sum:sum,pathKey:pathKey,prog:prog,passed:passed,GOAL_STEPS:GOAL_STEPS,
  iso:iso,parseISO:parseISO,today:today,addDays:addDays,daysBetween:daysBetween,plan:plan,status:status,
  load:function(){var s=store.get("milepost-v1")||{};s.plans=s.plans||{};return s},save:function(s){store.set("milepost-v1",s)}};
})();
