/* ---------- Milepost exercises, shared by every course ----------
   Built into each course's closure next to the engine; renderSet() hands these item types to exExtra():
   ord  rebuild the sentence      {t:"ord", q, w:[tokens], x:[extra tokens], a:[answers], ear:1 = listen first}
   gap  complete by choosing      {t:"gap", s:"… ＿ …", o:[right, wrong…], it, e}
   err  find the typical error    {t:"err", s, bad:token index, fix, it, e}
   chr  build the character       {t:"chr", c, m, p:[[piece, meaning]…], d:[[piece, meaning]…], e}
   rep  answer in the dialogue    {t:"rep", ask, who, o:[[right, translation], [wrong, translation]…], e}
   tone recognise the tone (zh)   {t:"tone", s:"妈[mā]"}
   Everything here is a function declaration, so the engine can call it while the page loads. */
function exLang(){return typeof itHTML==="function"?"it":typeof pyWord==="function"?"zh":"ja"}
function exS(){return exLang()==="it"?{
    ord:"组句",ear:"听后组句",gap:"选词填空",err:"找错误",rep:"回答",tone:"声调",chk:"检查",rst:"重来",ok:"正确！",no:"不对。",ans:"答案：",
    play:"听",again:"再听一遍",errQ:"点出用错的那个词。",errFine:"这个词没问题。",fixed:"正确的句子：",earQ:"听，然后把句子拼出来。",
    repQ:"选择合适的回答。",useSome:"先选几个词。",next:"还差一个部分。"}:{
    ord:"Componi",ear:"Ascolta e ricomponi",gap:"Completa",err:"Trova l'errore",chr:"Costruisci",rep:"Rispondi",tone:"Tono",chk:"Controlla",rst:"Ricomincia",ok:"Giusto!",no:"Non proprio.",ans:"Risposta:",
    play:"Ascolta",again:"Ascolta di nuovo",errQ:"Tocca la parola sbagliata.",errFine:"Questa va bene.",fixed:"La frase corretta:",earQ:"Ascolta e ricomponi la frase.",
    repQ:"Scegli la risposta giusta.",useSome:"Scegli prima qualche parola.",next:"Manca ancora un pezzo.",chrQ:function(c,m){return "Costruisci "+c+" («"+m+"»): scegli i pezzi."},
    toneQ:"Ascolta la sillaba e scegli il tono."}}
function exLangAttr(){var l=exLang();return l==="it"?"it":l==="zh"?"zh-CN":"ja"}
/* a sentence you can read, tap and hear */
function exSay(t){return exLang()==="it"?itLine(t):jLineSay(t)}
/* explanations mix the learner's language with words of the course */
function exRich(t){t=t||"";return exLang()==="it"?linkMixed(t):mixHTML(t)}
/* one token as a tile: reading above (furigana / pinyin) follows the reading switches */
function exTile(t){return exLang()==="it"?esc(t):jpHTML(t,true)}
function exPlain(s){return exLang()==="it"?nrm(s):jplain(s).replace(/[。、，！？「」『』…：；“”,.!?]/g,"")}
function exTag(k){return '<span class="qtag">'+esc(k)+'</span>'}
function exHead(q,i,tag,txt){q.innerHTML='<div class="qt"><span class="qn">'+(i+1)+'</span><span>'+tag+txt+'</span></div>'}
function exFb(q){var d=document.createElement("div");d.className="expl";q.appendChild(d);return d}
function exBtn(cls,html,lang){var b=document.createElement("button");b.type="button";b.className=cls;b.innerHTML=html;if(lang)b.setAttribute("lang",lang);return b}

function exExtra(q,it,i,mark){
  var T=it.t,S=exS(),LA=exLangAttr();
  if(T!=="ord"&&T!=="gap"&&T!=="err"&&T!=="chr"&&T!=="rep"&&T!=="tone")return false;
  q.classList.add("xq","xq-"+T);
  /* ---- rebuild the sentence: tap tiles in order; one or two tiles are traps ---- */
  if(T==="ord"){
    exHead(q,i,'<span class="qtag'+(it.ear?' ear-t':'')+'">'+(it.ear?SPK+S.ear:S.ord)+'</span>',it.ear?esc(S.earQ):exRich(String(it.q||"").replace(/^(Componi|Ricomponi|组句|连词成句)\s*[:：]\s*/,"")));
    if(it.ear){var pa=document.createElement("div");pa.className="acts";var lb=exBtn("btn pri lsp",SPK+" "+esc(S.play));lb.onclick=function(){speak(it.a[0])};pa.appendChild(lb);q.appendChild(pa)}
    var line=document.createElement("div");line.className="xline";line.setAttribute("aria-label",S.ans);
    var pool=document.createElement("div");pool.className="xpool";
    var all=it.w.concat(it.x||[]).filter(function(t){return exLang()==="it"?!/^[.,!?;:]+$/.test(t):!JP_PUNCT.test(jsurf(t))}),w=shuffle(all),g=0;while(w.join(" ")===it.a[0]&&g++<10)w=shuffle(all);
    w.forEach(function(t){var b=exBtn("xtile",exTile(t),LA);b.setAttribute("data-t",t);
      b.onclick=function(){if(q.dataset.locked)return;if(b.parentNode===pool){var gh=document.createElement("span");gh.className="xtile xghost";gh.innerHTML=b.innerHTML;b._g=gh;pool.replaceChild(gh,b);line.appendChild(b)}else{pool.replaceChild(b,b._g)}};
      pool.appendChild(b)});
    var acts=document.createElement("div");acts.className="acts";var ck=exBtn("btn pri",esc(S.chk)),rs=exBtn("btn",esc(S.rst));acts.appendChild(ck);acts.appendChild(rs);
    q.appendChild(line);q.appendChild(pool);q.appendChild(acts);var fb=exFb(q);
    rs.onclick=function(){if(q.dataset.locked)return;$$(".xtile",line).forEach(function(b){pool.replaceChild(b,b._g)})};
    ck.onclick=function(){if(q.dataset.locked)return;var got=$$(".xtile",line).map(function(b){return b.getAttribute("data-t")});
      if(!got.length){fb.innerHTML=esc(S.useSome);return}
      var s=got.join(" "),ok=it.a.some(function(a){return exPlain(a)===exPlain(s)});
      q.dataset.locked="1";ck.disabled=rs.disabled=true;$$(".xtile",line).forEach(function(b){b.classList.add(ok?"ok":"no")});
      fb.innerHTML=(ok?'<b class="ok">'+esc(S.ok)+'</b> ':'<b class="no">'+esc(S.no)+'</b> '+esc(S.ans)+' ')+exSay(it.a[0])+(it.e?' '+exRich(it.e):'')+(it.ear&&it.q?' <span class="xit">'+exRich(it.q)+'</span>':'');
      speak(it.a[0]);mark(i,ok)};
    return true}
  /* ---- complete the sentence by choosing a tile ---- */
  if(T==="gap"){
    var toks=String(it.s).split(/\s+/),full=it.s.replace("＿",it.o[0]);
    var html=exLang()==="it"?'<span class="xs" lang="it">'+toks.map(function(t){return t.indexOf("＿")>=0?esc(t.split("＿")[0])+'<span class="xgap">　</span>'+esc(t.split("＿")[1]):esc(t)}).join(" ")+'</span>'
      :'<span class="xs" lang="'+LA+'">'+toks.map(function(t){return t==="＿"?'<span class="xgap">　</span>':jpHTML(t,true)}).join(exLang()==="ja"?" ":"")+'</span>';
    exHead(q,i,exTag(S.gap),(it.it?'<span class="xit">'+exRich(it.it)+'</span>':''));
    var sent=document.createElement("div");sent.className="xsent";sent.innerHTML=html;q.appendChild(sent);
    var box=document.createElement("div");box.className="xtiles";q.appendChild(box);var fb2=exFb(q);
    var ord2=shuffle(it.o.map(function(_,k){return k}));
    ord2.forEach(function(k){var b=exBtn("xtile",exTile(it.o[k]),LA);box.appendChild(b);
      b.onclick=function(){if(q.dataset.locked)return;q.dataset.locked="1";var ok=k===0;
        $$(".xtile",box).forEach(function(x){x.disabled=true});box.children[ord2.indexOf(0)].classList.add("ok");if(!ok)b.classList.add("no");
        var gp=$(".xgap",sent);gp.innerHTML=exTile(it.o[0]);gp.classList.add("on");
        fb2.innerHTML=(ok?'<b class="ok">'+esc(S.ok)+'</b> ':'<b class="no">'+esc(S.no)+'</b> ')+exSay(full)+(it.e?' '+exRich(it.e):'');speak(full);mark(i,ok)}});
    return true}
  /* ---- find the error that speakers of your language make ---- */
  if(T==="err"){
    exHead(q,i,exTag(S.err),(it.it?exRich(it.it)+' ':'')+'<span class="xit">'+esc(S.errQ)+'</span>');
    var ws=String(it.s).split(/\s+/),row=document.createElement("div");row.className="xsent xwords";row.setAttribute("lang",LA);q.appendChild(row);var fb3=exFb(q);
    ws.forEach(function(t,k){var pu=exLang()==="it"?/^[.,!?;:«»]+$/.test(t):JP_PUNCT.test(jsurf(t));
      if(pu){var sp=document.createElement("span");sp.className="xpu";sp.textContent=exLang()==="it"?t:jsurf(t);row.appendChild(sp);return}
      var b=exBtn("xword",exTile(t),LA);row.appendChild(b);
      b.onclick=function(){if(q.dataset.locked)return;q.dataset.locked="1";var ok=k===it.bad;
        $$(".xword",row).forEach(function(x){x.disabled=true});row.children[it.bad].classList.add("no");if(!ok)b.classList.add("pick");
        fb3.innerHTML=(ok?'<b class="ok">'+esc(S.ok)+'</b> ':'<b class="no">'+esc(S.no)+'</b> ')+esc(S.fixed)+' '+exSay(it.fix)+(it.e?' '+exRich(it.e):'');speak(it.fix);mark(i,ok)}});
    return true}
  /* ---- build the character from its pieces ---- */
  if(T==="chr"){
    exHead(q,i,exTag(S.chr||"字"),esc(S.chrQ?S.chrQ(it.c,it.m):it.m));
    var wrap=document.createElement("div");wrap.className="xchr";var big=document.createElement("div");big.className="xbig";big.setAttribute("lang",LA);big.setAttribute("aria-live","polite");
    var bx=document.createElement("div");bx.className="xtiles";wrap.appendChild(big);wrap.appendChild(bx);q.appendChild(wrap);var fb4=exFb(q);
    var need=it.p.map(function(p){return p[0]}),got=[],bad=false;
    shuffle(it.p.concat(it.d||[])).forEach(function(p){var b=exBtn("xtile",esc(p[0])+'<small>'+esc(p[1])+'</small>',LA);bx.appendChild(b);
      b.onclick=function(){if(q.dataset.locked||b.classList.contains("ok"))return;
        if(need.indexOf(p[0])>=0){b.classList.add("ok");b.disabled=true;got.push(p[0]);big.textContent=got.length===need.length?it.c:got.join("");
          if(got.length===need.length){q.dataset.locked="1";$$(".xtile",bx).forEach(function(x){x.disabled=true});big.classList.add("done");
            fb4.innerHTML=(bad?'<b class="no">'+esc(S.no)+'</b> ':'<b class="ok">'+esc(S.ok)+'</b> ')+'<span class="xbigw" lang="'+LA+'">'+jpHTML(it.w||it.c)+'</span> '+exRich(it.e||"");mark(i,!bad)}
          else fb4.textContent=S.next}
        else{bad=true;b.classList.add("no");fb4.innerHTML='<b class="no">'+esc(p[0])+'</b> = '+esc(p[1]);setTimeout(function(){b.classList.remove("no")},rmotion()?0:700)}}});
    return true}
  /* ---- answer in the dialogue ---- */
  if(T==="rep"){
    exHead(q,i,'<span class="qtag ear-t">'+SPK+esc(S.rep)+'</span>',esc(S.repQ));
    var bub=document.createElement("div");bub.className="xbub";bub.innerHTML=(it.who?'<small>'+esc(it.who)+'</small>':'')+exSay(it.ask);q.appendChild(bub);
    var pa2=document.createElement("div");pa2.className="acts xhide";var lb2=exBtn("btn lsp",SPK+" "+esc(S.again));lb2.onclick=function(){speak(it.ask)};pa2.appendChild(lb2);q.appendChild(pa2);
    var op=document.createElement("div");op.className="xopts";q.appendChild(op);var fb5=exFb(q);
    var ord3=shuffle(it.o.map(function(_,k){return k}));
    ord3.forEach(function(k){var o=it.o[k],b=exBtn("xopt",'<span lang="'+LA+'">'+exTile(o[0])+'</span><small class="xtr" hidden>'+esc(o[1])+'</small>');op.appendChild(b);
      b.onclick=function(){if(q.dataset.locked)return;q.dataset.locked="1";var ok=k===0;
        $$(".xopt",op).forEach(function(x){x.disabled=true;$(".xtr",x).hidden=false});op.children[ord3.indexOf(0)].classList.add("ok");if(!ok)b.classList.add("no");
        fb5.innerHTML=(ok?'<b class="ok">'+esc(S.ok)+'</b> ':'<b class="no">'+esc(S.no)+'</b> ')+exSay(it.o[0][0])+(it.e?' '+exRich(it.e):'');speak(it.o[0][0]);mark(i,ok)}});
    return true}
  /* ---- tone of a syllable (Chinese only) ---- */
  if(T==="tone"){
    var m=String(it.s).match(/^(.+)\[([^\]]+)\]$/),py=m?m[2]:"",tn=tone(py),base=toneOff(py);
    exHead(q,i,'<span class="qtag ear-t">'+SPK+esc(S.tone)+'</span>',esc(S.toneQ));
    var pa3=document.createElement("div");pa3.className="acts";var lb3=exBtn("btn pri lsp",SPK+" "+esc(S.play));lb3.onclick=function(){speak(it.s)};pa3.appendChild(lb3);q.appendChild(pa3);
    var tb=document.createElement("div");tb.className="xtiles xtones";q.appendChild(tb);var fb6=exFb(q);
    [1,2,3,4].forEach(function(k){var v=toneOn(base,k),b=exBtn("xtile t"+k,'<span class="t'+k+'">'+esc(v)+'</span><small>'+["","‾ alto","／ sale","∨ scende e sale","＼ scende"][k]+'</small>');tb.appendChild(b);
      b.onclick=function(){if(q.dataset.locked)return;q.dataset.locked="1";var ok=k===tn;$$(".xtile",tb).forEach(function(x){x.disabled=true});tb.children[tn-1].classList.add("ok");if(!ok)b.classList.add("no");
        fb6.innerHTML=(ok?'<b class="ok">'+esc(S.ok)+'</b> ':'<b class="no">'+esc(S.no)+'</b> ')+exSay(it.s)+(it.e?' '+exRich(it.e):'');speak(it.s);mark(i,ok)}});
    return true}
  return false}
/* pinyin helpers for the tone exercise */
function exTM(){return {a:"āáǎà",e:"ēéěè",i:"īíǐì",o:"ōóǒò",u:"ūúǔù","ü":"ǖǘǚǜ"}}
function toneOff(p){var s=String(p).toLowerCase(),M=exTM();Object.keys(M).forEach(function(v){for(var k=0;k<4;k++)s=s.split(M[v][k]).join(v)});return s}
function toneOn(p,t){var s=toneOff(p),i=s.search(/[ae]/);if(i<0){i=s.indexOf("ou");if(i<0){var vs=s.match(/[aeiouü]/g)||[];if(!vs.length)return s;i=s.lastIndexOf(vs[vs.length-1])}}
  var v=s[i];return s.slice(0,i)+exTM()[v][t-1]+s.slice(i+1)}
