/* ---------- Spaced review with due dates (shared by every course) ----------
   Each word has [due day, interval in days, correct reviews, lapses, last review day].
   A right answer pushes the next review further away (1, 3, 7, 16, 37, 85, 180 days), a wrong one brings it back
   to tomorrow. Answering early (before the word is due) does not inflate the interval: the growth is based on the
   days that really passed. This follows the research on distributed practice (Cepeda et al. 2006) and on retrieval
   practice (Karpicke & Roediger 2008). Stored under <course key>-srs, so it syncs with the account. */
var SRS=(function(){
  /* loaded on first use: this file sits before the course engine, which defines KEY and state */
  var K=null,LADDER=[1,3,7,16,37,85,180],NEW_PER_DAY=12,SESSION=20,D={w:{},log:{},nd:{}};
  function load(){if(K)return;K=KEY+"-srs";
    try{var raw=localStorage.getItem(K);if(raw){var p=JSON.parse(raw);D.w=p.w||{};D.log=p.log||{};D.nd=p.nd||{}}}catch(e){}
    migrate()}
  function day(){var n=new Date();return Math.floor((n.getTime()-n.getTimezoneOffset()*60000)/86400000)}
  function store(){try{
    var t=day(),k;for(k in D.log)if(+k<t-120)delete D.log[k];for(k in D.nd)if(+k<t-7)delete D.nd[k];
    localStorage.setItem(K,JSON.stringify(D))}catch(e){}}
  /* old flashcard boxes become intervals once, spread over the next days so they do not all fall due together */
  function migrate(){try{if(Object.keys(D.w).length||!state||!state.box)return;var t=day(),n=0,k;
    for(k in state.box){var b=state.box[k],iv={2:1,3:3,4:7,5:16}[b];if(!iv)continue;
      var h=0;for(var i=0;i<k.length;i++)h=(h*31+k.charCodeAt(i))>>>0;
      D.w[k]=[t+h%(iv+1),iv,b-1,0,t];n++}
    if(n)store()}catch(e){}}
  function rec(id){return D.w[id]||null}
  function next(iv,elapsed){
    /* the step after the current interval; when answered early, grow from the days that really passed */
    var base=Math.max(1,Math.min(iv,elapsed)),i=0;while(i<LADDER.length&&LADDER[i]<=base)i++;
    return Math.max(iv,i<LADDER.length?LADDER[i]:LADDER[LADDER.length-1])}
  function grade(id,ok,review){if(!id)return;var t=day(),r=D.w[id];
    /* only words first met in a review count towards the daily limit of new words (lesson quizzes do not) */
    if(!r){if(review)D.nd[t]=(D.nd[t]||0)+1;r=[t,0,0,0,0]}
    var due=r[0],iv=r[1],reps=r[2],lap=r[3],last=r[4],elapsed=last?t-last:0;
    if(reps>0&&elapsed>=7){var L=D.log[t]||[0,0];L[1]++;if(ok)L[0]++;D.log[t]=L}
    if(ok){if(last===t&&iv>0){/* already reviewed today: no extra credit */}
      else{iv=(reps===0||iv===0)?1:next(iv,Math.max(elapsed,due<=t?iv:elapsed));reps++}}
    else{if(iv>0)lap++;iv=1}
    D.w[id]=[t+iv,iv,reps,lap,t];store()}
  function box(id){var r=D.w[id];if(!r||r[1]===0||r[2]===0)return 1;var iv=r[1];return iv<=1?2:iv<=7?3:iv<=20?4:5}
  function isDue(id,t){var r=D.w[id];return !!r&&r[0]<=t}
  /* what today's review contains: every word that is due (oldest first), then a few words never reviewed */
  function plan(pool){var t=day(),due=pool.filter(function(w){return isDue(w[0],t)});
    due.sort(function(a,b){return D.w[a[0]][0]-D.w[b[0]][0]});
    var room=Math.max(0,NEW_PER_DAY-(D.nd[t]||0)),fresh=pool.filter(function(w){return !D.w[w[0]]}).slice(0,room);
    return {due:due,fresh:fresh,n:due.length+fresh.length}}
  function session(pool,max){var p=plan(pool);return p.due.concat(p.fresh).slice(0,max||SESSION)}
  /* nothing due: extra practice on the weakest words (it does not move their dates forward) */
  function practice(pool,n){var t=day(),known=pool.filter(function(w){return D.w[w[0]]});
    known.sort(function(a,b){var x=D.w[a[0]],y=D.w[b[0]];return (x[1]-y[1])||(y[3]-x[3])||(x[0]-y[0])});
    return (known.length?known:pool).slice(0,n)}
  function pick(pool,cur){var t=day(),p=plan(pool),c=p.due.concat(p.fresh).filter(function(w){return w!==cur});
    if(c.length)return c[0];
    var ws=pool.filter(function(w){return w!==cur}),tot=0,wt=ws.map(function(w){var x=Math.pow(2,5-box(w[0]));tot+=x;return x}),r=Math.random()*tot;
    for(var i=0;i<ws.length;i++){r-=wt[i];if(r<=0)return ws[i]}return ws[0]||cur}

  /* the "words from before" step of a lesson: due words first, then words of the lessons 1, 2, 4 and 8 back
     that were reviewed least, then the oldest reviews. Same lesson, same day, same list. */
  function recycle(pool,li,n){var t=day(),out=[],seen={};function put(w){if(out.length<n&&!seen[w[0]]){seen[w[0]]=1;out.push(w)}}
    var prev=pool.filter(function(w){return w[3]<li});if(prev.length<4)return [];
    prev.filter(function(w){return isDue(w[0],t)}).sort(function(a,b){return D.w[a[0]][0]-D.w[b[0]][0]}).forEach(put);
    var reps=function(w){var r=D.w[w[0]];return r?r[2]:-1},lessons=[];prev.forEach(function(w){if(lessons.indexOf(w[3])<0)lessons.push(w[3])});lessons.sort(function(a,b){return b-a});
    var groups=[1,2,4,8].map(function(k){var L=lessons.at(k-1);return L===undefined?[]:prev.filter(function(w){return w[3]===L}).sort(function(a,b){return reps(a)-reps(b)})});
    for(var r=0;out.length<n&&r<40;r++)groups.forEach(function(g){if(g.length>r)put(g.at(r))});
    prev.slice().sort(function(a,b){var x=D.w[a[0]],y=D.w[b[0]];return (x?x[4]:-1)-(y?y[4]:-1)}).forEach(put);
    return out}
  function stats(pool){var t=day(),n=0,solid=0,due=0,ok=0,tot=0,k;
    pool.forEach(function(w){var r=D.w[w[0]];if(!r)return;n++;if(r[1]>=21)solid++;if(r[0]<=t)due++});
    for(k in D.log)if(+k>=t-60){ok+=D.log[k][0];tot+=D.log[k][1]}
    return {learned:n,solid:solid,due:due,retention:tot>=10?Math.round(100*ok/tot):null,checks:tot}}
  /* when a word will come back, in days (0 = today) */
  function inDays(id){var r=D.w[id];return r?Math.max(0,r[0]-day()):null}
  function reset(){D.w={};D.log={};D.nd={};store()}
  function L(f){return function(){load();return f.apply(null,arguments)}}
  return {grade:L(grade),box:L(box),plan:L(plan),session:L(session),practice:L(practice),pick:L(pick),stats:L(stats),inDays:L(inDays),reset:L(reset),recycle:L(recycle),day:day}})();
/* per-question hook for quizzes that contain words (lesson word quiz, recycle step, daily review) */
function SRSMK(i,ok,it){if(it&&it.w)SRS.grade(it.w[0],ok)}
function SRSREV(i,ok,it){if(it&&it.w)SRS.grade(it.w[0],ok,1)}
if(/[?&]audit=1/.test(location.search))window.MPSRS=SRS;
