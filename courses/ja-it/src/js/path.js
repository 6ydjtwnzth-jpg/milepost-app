/* ---------- percorso a livelli ----------
   Ogni lezione è un'unità divisa in tappe brevi: ascolto, parole, regola, suono, cultura, sfida.
   Superare la sfida (≥ 70 %) apre l'unità successiva; il ripasso di fine mondo vale anche come
   test per saltare al mondo successivo. Le lezioni intere restano sempre leggibili nel libro. */
var PK=KEY+"-path";
var P={done:{},stars:{},sc:{},skip:1,days:{},goal:3};
try{var pj=JSON.parse(localStorage.getItem(PK)||"null");if(pj)for(var pk in P)if(pj[pk]!==undefined)P[pk]=pj[pk]}catch(e){}
function pSave(){try{localStorage.setItem(PK,JSON.stringify(P))}catch(e){}}
var UNITS=LESSONS.filter(function(L){return L.kind==="lesson"||L.kind==="review"});
var WCOL=["red","blue","green"];
function uIdx(id){for(var i=0;i<UNITS.length;i++)if(UNITS[i].id===id)return i;return -1}
function passed(id){return (P.stars[id]||0)>=1}
function pathStarted(id){var d=P&&P.done[id];return !!d&&Object.keys(d).length>0}
function firstOfWorld(i){return i===0||UNITS[i-1].w!==UNITS[i].w}
function unlocked(i){if(i<=0)return true;var U=UNITS[i];return passed(UNITS[i-1].id)||U.w<P.skip||(U.w===P.skip&&firstOfWorld(i))||pathStarted(U.id)}
function reviewOf(w){for(var i=0;i<UNITS.length;i++)if(UNITS[i].w===w&&UNITS[i].kind==="review")return UNITS[i];return null}
function dayKey(off){var d=new Date();d.setDate(d.getDate()-(off||0));return d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2)}
function streak(){var o=P.days[dayKey(0)]?0:1,n=0;while(P.days[dayKey(o+n)])n++;return n}
function tick(){var t=dayKey(0);P.days[t]=(P.days[t]||0)+1;var ks=Object.keys(P.days).sort();while(ks.length>90)delete P.days[ks.shift()];pSave()}
CULT=CULT||{};Object.keys(CULT).forEach(function(id){CULT[id].forEach(function(c){(c.w||[]).forEach(function(w){var k=jsurf(w[0]);if(!DICT[k])DICT[k]=w[1];if(!DICT[w[0]])DICT[w[0]]=w[1]})})});

/* ---------- contenuto delle tappe, preso dalle lezioni del libro ---------- */
var STEPN={dlg:["Ascolta","聞く","i-ear"],voc:["Parole","ことば","i-cards"],rule:["Regola","文法","i-bulb"],rev:["Ripasso","復習","i-loop"],snd:["Scrittura e suoni","文字","i-wave"],cult:["Cultura","文化","i-moka"],test:["Verifica","テスト","i-check"]};
function sec(id){return document.getElementById(id)}
function readingNodes(id){var s=sec(id),rd=$("#reading",s);if(!rd||$(".dialog",s))return [];
  return Array.prototype.filter.call(s.children,function(c){return c===rd||c.contains($("#rdplay",s))||(c.matches("ul.plain")&&c.nextElementSibling&&c.nextElementSibling.contains($("#rdplay",s)))})}
function bodyNodes(id){var s=sec(id),rn=readingNodes(id);
  return Array.prototype.filter.call(s.children,function(c){return !c.matches("header,.dialog,.suono,.words-head,.words,.drill,.cando,p.lead")&&rn.indexOf(c)<0})}
function tlen(n){return n.textContent.replace(/\s+/g,"").length}
function ruleChunks(id){var ns=bodyNodes(id),tot=0;ns.forEach(function(n){tot+=tlen(n)});
  if(tot<1000||ns.length<3)return ns.length?[ns]:[];
  var best=-1,bd=1e9,acc=0;
  for(var i=0;i<ns.length;i++){if(i>0&&ns[i].matches("h3,details,.rule,.task,.summary-grid,.speech")&&!ns[i-1].matches("h3")){var d=Math.abs(acc-tot/2);if(d<bd){bd=d;best=i}}acc+=tlen(ns[i])}
  return best>0?[ns.slice(0,best),ns.slice(best)]:[ns]}
function stepsOf(id){var U=UNITS[uIdx(id)],s=sec(id),out=[],ch=ruleChunks(id);
  if(U.kind==="review"){ch.forEach(function(c,i){out.push({k:"rev",i:i,of:ch.length,n:c})})}
  else{if($(".dialog",s)||readingNodes(id).length)out.push({k:"dlg"});
    if((VOC[id]||[]).length)out.push({k:"voc"});
    ch.forEach(function(c,i){out.push({k:"rule",i:i,of:ch.length,n:c})});
    if($(".suono",s))out.push({k:"snd"})}
  if((CULT[id]||[]).length)out.push({k:"cult"});
  out.push({k:"test"});
  out.forEach(function(st){st.key=st.k+(st.of>1?st.i:"");var N=STEPN[st.k];st.zh=N[0]+(st.of>1?" "+(st.i+1)+"/"+st.of:"");st.it=N[1];st.icon=N[2]});
  return out}
function cloneNodes(ns){var f=document.createElement("div");f.className="st-clone";
  ns.forEach(function(n){var c=n.cloneNode(true);$$("details",c).forEach(function(d){d.open=false});if(c.matches&&c.matches("details"))c.open=false;f.appendChild(c)});
  setupReading(f);$$("[id]",f).forEach(function(e){e.removeAttribute("id")});return f}

/* ---------- quiz generati ---------- */
function pickN(a,n){return shuffle(a).slice(0,n)}
function dlgLines(id){var s=sec(id),L=[];
  $$(".dialog[data-dlg]",s).forEach(function(d){(DLG[d.getAttribute("data-dlg")]||[]).forEach(function(r){L.push([r[1],r[2]])})});
  if(!L.length)$$("#reading [data-jp]",s).forEach(function(d){L.push([d.getAttribute("data-jp"),d.getAttribute("data-it")])});
  return L.filter(function(l){return l[1]})}
function dlgQuiz(id,n){var L=[],seen={};dlgLines(id).forEach(function(l){if(!seen[l[0]]&&!seen[l[1]]){seen[l[0]]=seen[l[1]]=1;L.push(l)}});if(L.length<3)return [];
  return pickN(L,Math.min(n,L.length)).map(function(l){var others=L.filter(function(x){return x[1]!==l[1]}).map(function(x){return x[1]});
    return {q:"Ascolta e scegli il significato:",au:l[0],o:[l[1]].concat(pickN(others,2)),e:""}})}
function fullW(w){return w[0]}
function vocQuiz(words,n,pool){pool=pool&&pool.length>=6?pool:W;var out=[];
  pickN(words,Math.min(n,words.length)).forEach(function(w,k){
    var oth=shuffle(pool.filter(function(x){return x[1]!==w[1]&&x[0]!==w[0]})),d=[],seen={};
    oth.forEach(function(x){if(d.length<2&&!seen[x[1]]){seen[x[1]]=1;d.push(x)}});
    if(k%2===0)out.push({q:"Ascolta e scegli il significato:",au:fullW(w),o:[w[1]].concat(d.map(function(x){return x[1]})),e:fullW(w)+" = "+w[1],w:w});
    else out.push({q:"Come si dice «"+w[1]+"» in giapponese?",o:[fullW(w)].concat(d.map(fullW)),e:fullW(w)+" = "+w[1],w:w})});
  return out}
function lessonWords(id){return W.filter(function(w){return w[4]===id})}
function exSplit(id){var it=EX[id]||[],U=UNITS[uIdx(id)];
  if(U.kind==="review")return {p:[],t:it.slice()};
  var p=[],t=[],a=0;it.forEach(function(x){var pr=!x.au&&x.t!=="dict"&&x.t!=="say";if(pr&&a++%2===0&&p.length<4)p.push(x);else t.push(x)});
  if(t.length<8)t=t.concat(vocQuiz(lessonWords(id),8-t.length));
  return {p:p,t:t}}
function stars(n,m){var r=m?n/m:0;return r>=.999?3:r>=.85?2:r>=.7?1:0}
function starHTML(k){var s="";for(var i=0;i<3;i++)s+='<i class="'+(i<k?"on":"")+'">★</i>';return '<span class="stars" aria-label="'+k+' stelle su 3">'+s+'</span>'}

/* ---------- schede culturali ---------- */
function cultHTML(c){
  return '<article class="cc">'+(c.s?'<svg class="cc-art" viewBox="0 0 320 180" role="img" aria-label="'+esc(c.t)+'"><use href="#sc-'+c.s+'"/></svg>':'')+
    '<div class="cc-body"><h3>'+esc(c.t)+'</h3><p class="cc-it"><span class="it-l">'+jLine(c.i)+'</span><button class="say sm" data-say="'+esc(c.i)+'" aria-label="Ascolta">'+SPK+'</button></p>'+
    c.p.map(function(x){return '<p>'+mixHTML(x)+'</p>'}).join("")+
    (c.it?'<div class="cc-cmp"><div class="cc-i"><b>Italia</b><p>'+mixHTML(c.it)+'</p></div><div class="cc-c"><b>Giappone · <i lang="ja">日本</i></b><p>'+mixHTML(c.jp)+'</p></div></div>':'')+
    ((c.w||[]).length?'<div class="cc-w">'+c.w.map(function(w){return '<button class="chip" type="button" data-say="'+esc(w[0])+'"><span lang="ja">'+jpHTML(w[0],true)+'</span><small>'+esc(w[1])+'</small></button>'}).join("")+'</div>':'')+
    '</div></article>'}

/* ---------- finestre (scheda unità, tappa) con il tasto indietro del telefono ---------- */
var mstack=[];
function openModal(el,onClose){el.hidden=false;mstack.push({el:el,close:onClose});document.documentElement.classList.add("modal-open");try{history.pushState({pm:mstack.length},"")}catch(e){}}
function dropModal(){var m=mstack.pop();if(!m)return;m.el.hidden=true;if(m.close)m.close();if(!mstack.length)document.documentElement.classList.remove("modal-open");if(m.after)setTimeout(m.after,0)}
/* chiude la finestra in cima; "after" parte solo quando è davvero chiusa */
function closeModal(after){if(!mstack.length){if(after)after();return}var m=mstack[mstack.length-1];if(after)m.after=after;
  var ok=false;try{if(history.state&&history.state.pm){history.back();ok=true}}catch(e){}if(!ok)dropModal()}
window.addEventListener("popstate",function(){if(mstack.length)dropModal()});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&mstack.length)closeModal()});
function quiet(){speakSeq++;stopAll();stopPlayers();hideTip()}
var toastEl=document.createElement("div");toastEl.className="toast";toastEl.setAttribute("role","status");toastEl.setAttribute("aria-live","polite");document.body.appendChild(toastEl);
var toastT=null;function toast(h){toastEl.innerHTML=h;toastEl.classList.add("on");clearTimeout(toastT);toastT=setTimeout(function(){toastEl.classList.remove("on")},2600)}

/* ---------- la tappa a schermo intero ---------- */
var ST=document.createElement("div");ST.className="stage";ST.hidden=true;ST.setAttribute("role","dialog");ST.setAttribute("aria-modal","true");
ST.innerHTML='<div class="st-top"><button class="st-x" type="button" aria-label="Chiudi">'+'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button><div class="st-prog" aria-hidden="true"><i></i></div><span class="st-t"></span></div><div class="st-body"><div class="st-in"></div></div><div class="st-foot"><button class="btn pri st-go" type="button">继续</button></div>';
document.body.appendChild(ST);
var stIn=$(".st-in",ST),stGo=$(".st-go",ST),stBody=$(".st-body",ST),stCur=null;
$(".st-x",ST).onclick=function(){closeModal()};stBody.addEventListener("scroll",function(){if(tipFor)hideTip()},{passive:true});
function runStage(o){/* o: {title,color,pages:[{draw(box,release),gate,go}],done()} */
  stCur=o;var i=0;ST.className="stage t-"+(o.color||"blue")+(o.early?" early":"");$(".st-t",ST).textContent=o.title;
  function show(){quiet();var pg=o.pages[i];stIn.innerHTML="";var box=document.createElement("div");box.className="st-page";stIn.appendChild(box);
    stGo.disabled=!!pg.gate;stGo.textContent=pg.go||(i<o.pages.length-1?"Continua":"Fine");
    pg.draw(box,function(label){stGo.disabled=false;if(label)stGo.textContent=label;stGo.classList.add("ready")});
    stGo.classList.toggle("ready",!pg.gate);
    $(".st-prog i",ST).style.width=Math.round(i/o.pages.length*100)+"%";stBody.scrollTop=0}
  stGo.onclick=function(){if(stGo.disabled)return;var pg=o.pages[i];if(pg.next&&pg.next()===false)return;
    if(i<o.pages.length-1){i++;show()}else{$(".st-prog i",ST).style.width="100%";var d=o.done;stCur=null;closeModal(d)}};
  if(!mstack.length||mstack[mstack.length-1].el!==ST)openModal(ST,function(){quiet();stIn.innerHTML=""});
  show()}
function quizPage(items,head,cb,mk){return {gate:true,draw:function(box,rel){var d=document.createElement("div");d.className="drill";box.appendChild(d);
  renderSet(d,{items:items,one:true,head:head,onMark:mk,onDone:function(n,m,res){if(cb)cb(n,m,res);rel()}});
  var f=$(".lsp",d);if(f)setTimeout(function(){f.click()},300)}}}

function markStep(id,key){P.done[id]=P.done[id]||{};var fresh=!P.done[id][key];P.done[id][key]=1;if(fresh)tick();pSave();return fresh}
function goalMsg(){var t=P.days[dayKey(0)]||0;return t>=P.goal?"Obiettivo di oggi raggiunto":"Oggi "+t+" / "+P.goal+" tappe"}

function openStep(id,key,opt){opt=opt||{};var U=UNITS[uIdx(id)],steps=stepsOf(id),st=steps.filter(function(s){return s.key===key})[0];if(!st)return;
  var s=sec(id),pages=[],title=opt.skip?"Test di livello":(U.kind==="lesson"?"Lezione "+U.n+" · ":"")+st.zh;
  if(st.k==="dlg"){
    pages.push({draw:function(box){var rn=readingNodes(id);
      if(rn.length){box.appendChild(cloneNodes(rn))}
      else $$(".dialog[data-dlg]",s).forEach(function(d){var n=document.createElement("div");n.className="dialog";n.setAttribute("data-dlg",d.getAttribute("data-dlg"));box.appendChild(n);renderDialog(n)});
      var h=document.createElement("p");h.className="st-hint";h.textContent="Ascolta qualche volta: quanto capisci senza guardare la traduzione? Poi fai il quiz.";box.insertBefore(h,box.firstChild)},go:"Vai al quiz"});
    var dq=dlgQuiz(id,4);if(dq.length)pages.push(quizPage(dq,"Ascolta le frasi del dialogo e scegli il significato."))}
  else if(st.k==="voc"){
    pages.push({draw:function(box){box.innerHTML='<p class="st-hint">Premi ▶ su ogni parola e ripetila ad alta voce. Tocca la parola per vedere lettura e significato.</p>';var w=document.createElement("div");w.className="words";w.setAttribute("data-voc",id);box.appendChild(w);renderWords(w)},go:"Vai al quiz"});
    pages.push(quizPage(vocQuiz(lessonWords(id),6),"Ti ricordi queste parole?"))}
  else if(st.k==="rule"||st.k==="rev"){
    pages.push({draw:function(box){if(st.i===0){var ld=$("p.lead",s);if(ld)box.appendChild(ld.cloneNode(true))}box.appendChild(cloneNodes(st.n))},go:st.k==="rule"&&st.i===st.of-1&&exSplit(id).p.length?"Esercitati":null});
    if(st.k==="rule"&&st.i===st.of-1){var pr=exSplit(id).p;if(pr.length)pages.push(quizPage(pr,"Qualche esercizio sulla regola appena vista."))}}
  else if(st.k==="snd"){
    pages.push({draw:function(box){box.innerHTML='<p class="st-hint">Ascolta ogni esempio e ripetilo ad alta voce due o tre volte; se ci sono kana nuovi, prova a scriverli su un foglio.</p>';box.appendChild(cloneNodes([$(".suono",s)]))},go:"Fatto"})}
  else if(st.k==="cult"){
    CULT[id].forEach(function(c,ci){pages.push({gate:!!c.q,draw:function(box,rel){box.innerHTML=cultHTML(c);
      if(c.q){var d=document.createElement("div");d.className="drill cc-q";box.appendChild(d);renderSet(d,{items:[c.q],one:true,head:"Domanda",onDone:function(){rel()}})}},go:ci<CULT[id].length-1?"Scheda successiva":"Fine"})})}
  else if(st.k==="test"){
    var R={n:0,m:1},items=exSplit(id).t;
    pages.push(quizPage(items,opt.skip?"Test di livello: con il 70% di risposte giuste passi direttamente alla parte successiva.":"Verifica: vedi quanto hai capito. Il punteggio aggiorna la padronanza della lezione.",function(n,m){R.n=n;R.m=m}));
    pages.push({draw:function(box){var k=stars(R.n,R.m),old=P.stars[id]||0,pass=k>=1;
      if(k>old)P.stars[id]=k;var b=P.sc[id];if(!b||R.n>=b[0])P.sc[id]=[R.n,R.m];
      if(pass){P.done[id]=P.done[id]||{};if(!P.done[id].test){P.done[id].test=1;tick()}if(U.kind==="review"&&P.skip<U.w+1)P.skip=U.w+1}
      pSave();
      var cd=$("ul.cando",s),lis=cd?$$("li:not(.cnt)",cd).map(function(li){var x=li.cloneNode(true);$$("input",x).forEach(function(e){e.remove()});return '<li>'+x.textContent.trim()+'</li>'}).join(""):"";
      box.innerHTML='<div class="res '+(pass?"pass":"fail")+'"><div class="res-pc">'+Math.round(R.n/Math.max(1,R.m)*100)+'%</div><h3>'+(pass?(k===3?"Punteggio pieno! すごい！":"Lezione verificata"):"Da ripassare")+'</h3><p class="res-sc">'+R.n+' / '+R.m+'</p><p>'+(pass?(U.kind==="review"?"Hai completato questa parte: sei al livello "+(WORLDS[U.w-1]||{}).level+".":"La padronanza della lezione è aggiornata."):"Sotto il 70%: rivedi le parti più difficili e riprova quando vuoi. Puoi comunque andare avanti.")+'</p>'+
        (pass&&lis?'<div class="res-can"><b>Adesso sai:</b><ul>'+lis+'</ul></div>':'')+'<div class="acts" style="margin-left:0;justify-content:center"><button class="btn again" type="button">Riprova</button></div></div>';
      $(".again",box).onclick=function(){stCur=null;closeModal(function(){openStep(id,"test",opt)})};drawPath()},go:"Torna alla lezione"})}
  runStage({title:title,color:U.color,early:U.kind==="lesson"&&U.n<=4,pages:pages,done:function(){
    if(st.k!=="test"){var fresh=markStep(id,st.key);if(fresh)toast('<b>✓ '+esc(st.zh)+'</b> · '+goalMsg())}
    drawPath();if(!opt.skip)openSheet(id)}})}

/* ---------- ripasso del giorno ---------- */
function reviewWords(){var hi=-1;UNITS.forEach(function(U){if(pathStarted(U.id)){var li=LESSONS.findIndex(function(L){return L.id===U.id});if(li>hi)hi=li}});
  return W.filter(function(w){return w[3]<=hi})}
function openReview(){var ws=reviewWords();if(ws.length<4)return;
  var tot=0,wt=ws.map(function(w){var x=Math.pow(2,5-bx(w));tot+=x;return x}),pick=[],used={};
  for(var g=0;g<200&&pick.length<Math.min(8,ws.length);g++){var r=Math.random()*tot,j=0;for(;j<ws.length;j++){r-=wt[j];if(r<=0)break}j=Math.min(j,ws.length-1);if(!used[j]){used[j]=1;pick.push(ws[j])}}
  var items=vocQuiz(pick,pick.length,ws);
  runStage({title:"Ripasso del giorno",color:"pink",pages:[quizPage(items,"Ripassa le parole che hai studiato: quelle che dimentichi più spesso tornano più spesso.",null,function(i,ok,it){if(it.w){state.box[it.w[0]]=ok?Math.min(5,bx(it.w)+1):1;save()}})],
    done:function(){P.done._rev=P.done._rev||{};tick();pSave();toast('<b>✓ Ripasso fatto</b> · '+goalMsg());drawPath();try{drawBoxes()}catch(e){}}})}

/* ---------- scheda dell'unità ---------- */
var SH=document.createElement("div");SH.className="sheet-back";SH.hidden=true;SH.innerHTML='<div class="sheet" role="dialog" aria-modal="true"></div>';document.body.appendChild(SH);
var sheet=$(".sheet",SH);SH.addEventListener("click",function(e){if(e.target===SH)closeModal()});
function plainText(el){var c=el.cloneNode(true);$$(".ro-i,rt",c).forEach(function(x){x.remove()});return c.textContent.replace(/\s+/g," ").trim()}
function nextStep(id){var ss=stepsOf(id),d=P.done[id]||{};for(var i=0;i<ss.length;i++)if(!d[ss[i].key])return ss[i];return ss[ss.length-1]}
function openSheet(id){var i=uIdx(id),U=UNITS[i],ss=stepsOf(id),d=P.done[id]||{},open=unlocked(i),nx=nextStep(id),s=sec(id),ld=$("p.lead",s);
  sheet.className="sheet t-"+U.color;
  var kick=U.kind==="lesson"?"Lezione "+U.n+" · 第"+U.n+"課":"Ripasso · 復習";
  sheet.innerHTML='<div class="sh-grab" aria-hidden="true"></div><div class="sh-head"><svg class="sh-ic" aria-hidden="true"><use href="#'+U.icon+'"/></svg><div><div class="sh-k">'+esc(kick)+'</div><h3>'+esc(U.t)+'</h3><i lang="ja">'+esc(U.j)+'</i></div>'+starHTML(P.stars[id]||0)+'</div>'+
    (ld?'<p class="sh-lead">'+esc(plainText(ld))+'</p>':'')+
    (open?'<ol class="sh-steps">'+ss.map(function(st){var ok=st.k==="test"?passed(id):!!d[st.key];return '<li><button class="srow'+(ok?" ok":"")+(st===nx&&!ok?" nx":"")+'" type="button" data-k="'+st.key+'"><svg aria-hidden="true"><use href="#'+st.icon+'"/></svg><span><b>'+esc(st.zh)+'</b><i lang="ja">'+st.it+'</i></span><span class="sst">'+(ok?'<svg aria-label="fatto"><use href="#i-check"/></svg>':'')+'</span></button></li>'}).join("")+'</ol>'
      :'<div class="sh-lock"><svg aria-hidden="true"><use href="#i-lock"/></svg><p>Supera la sfida della lezione precedente per aprire questa.'+(firstOfWorld(i)&&U.w>1?' Sai già un po\' di giapponese? Fai il test di livello: se lo superi puoi partire da qui.':'')+'</p></div>')+
    '<div class="sh-acts">'+(open?'<button class="btn pri sh-go" type="button">'+(pathStarted(id)?(passed(id)?"Rifai la sfida":"Continua: "+esc(nx.zh)):"Comincia")+'</button>':(firstOfWorld(i)&&U.w>1?'<button class="btn pri sh-skip" type="button">Test di livello</button>':''))+
    '<a class="btn sh-book" href="#'+id+'">Leggi la lezione intera</a><button class="btn sh-x" type="button">Chiudi</button></div>';
  $$(".srow",sheet).forEach(function(b){b.onclick=function(){openStep(id,b.getAttribute("data-k"))}});
  var go=$(".sh-go",sheet);if(go)go.onclick=function(){openStep(id,passed(id)?"test":nx.key)};
  var sk=$(".sh-skip",sheet);if(sk)sk.onclick=function(){skipTest(U.w)};
  $(".sh-x",sheet).onclick=function(){closeModal()};
  $(".sh-book",sheet).onclick=function(e){e.preventDefault();closeModal(function(){var t=sec(id);if(t)t.scrollIntoView({behavior:rmotion()?"auto":"smooth"});try{history.replaceState(null,"","#"+id)}catch(x){}})};
  if(!mstack.length||mstack[mstack.length-1].el!==SH)openModal(SH);
  setTimeout(function(){var f=$(".sh-go,.sh-skip",sheet);if(f)try{f.focus({preventScroll:true})}catch(e){}},50)}
function skipTest(w){var R=reviewOf(w-1);if(!R)return;
  if(mstack.length&&mstack[mstack.length-1].el===SH)closeModal(function(){openStep(R.id,"test",{skip:true})});else openStep(R.id,"test",{skip:true})}

/* ---------- mappa ---------- */
var OFF=[0,1,1.6,1,0,-1,-1.6,-1];
function drawPath(){var root=$("#pathroot");if(!root)return;
  var cur=-1;for(var i=0;i<UNITS.length;i++)if(unlocked(i)&&!passed(UNITS[i].id)){cur=i;break}
  var t=P.days[dayKey(0)]||0,g=Math.min(1,t/P.goal),sk=streak(),rw=reviewWords().length;
  var C=2*Math.PI*20;
  var h='<div class="pday"><div class="pd-st'+(sk?" on":"")+'"><svg aria-hidden="true"><use href="#i-flame"/></svg><b>'+sk+'</b><span>giorni di fila<i lang="ja">れんぞく</i></span></div>'+
    '<div class="pd-goal"><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="20" class="rg-b"/><circle cx="24" cy="24" r="20" class="rg-f" stroke-dasharray="'+(C*g).toFixed(1)+' '+C.toFixed(1)+'"/></svg><span><b>'+Math.min(t,99)+' / '+P.goal+'</b>tappe di oggi</span></div>'+
    (rw>=4?'<button class="btn pri pd-rev" type="button"><svg aria-hidden="true"><use href="#i-cards"/></svg>Ripasso del giorno</button>':'')+'</div>';
  WORLDS.forEach(function(Wd,wi){var w=wi+1,us=UNITS.map(function(U,k){return [U,k]}).filter(function(x){return x[0].w===w}),pn=us.filter(function(x){return passed(x[0].id)}).length,
      wl=!unlocked(us[0][1]);
    h+='<div class="world t-'+WCOL[wi%3]+(wl?" wlock":"")+'"><div class="wh"><div class="wh-t"><span class="lvl">'+Wd.level+'</span><h3>'+esc(Wd.title.replace(/^.*·\s*/,""))+'</h3><i lang="ja">'+esc(Wd.j)+'</i></div>'+
      '<div class="wbar" aria-label="completate '+pn+' su '+us.length+'"><i style="width:'+Math.round(pn/us.length*100)+'%"></i></div><span class="wcnt">'+pn+' / '+us.length+'</span>'+
      (wl&&w>1?'<button class="btn wskip" type="button" data-w="'+w+'">Test di livello</button>':'')+'</div><ol class="nodes">';
    us.forEach(function(x,j){var U=x[0],k=x[1],op=unlocked(k),ps=passed(U.id),st=pathStarted(U.id),cls=!op?"lock":ps?"done":k===cur?"cur":st?"start":"open";
      var lab=U.kind==="lesson"?'<b>'+U.n+'</b> '+esc(U.t):'<b>★</b> '+esc(U.t);
      h+='<li class="node t-'+U.color+' '+cls+(U.kind==="review"?" rv":"")+'" style="--off:'+OFF[j%8]+'"><button class="nb" type="button" data-u="'+U.id+'" aria-label="'+esc((U.kind==="lesson"?"Lezione "+U.n+": ":"")+U.t+(op?"":" (chiusa)"))+'">'+
        '<svg class="ni" aria-hidden="true"><use href="#'+(U.kind==="review"?"i-trophy":U.icon)+'"/></svg>'+(op?'':'<span class="lk"><svg aria-hidden="true"><use href="#i-lock"/></svg></span>')+(k===cur?'<span class="bub">'+(st?"Continua":"Inizia")+'</span>':'')+'</button>'+
        '<span class="nl">'+lab+'</span>'+(ps||st?starHTML(P.stars[U.id]||0):'')+'</li>'});
    h+='</ol></div>'});
  root.innerHTML=h;
  $$(".nb",root).forEach(function(b){b.onclick=function(){openSheet(b.getAttribute("data-u"))}});
  $$(".wskip",root).forEach(function(b){b.onclick=function(){skipTest(+b.getAttribute("data-w"))}});
  var rv=$(".pd-rev",root);if(rv)rv.onclick=openReview;
  updateToc()}
drawPath();
