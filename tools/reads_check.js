/* Check the graded stories (courses/<id>/src/reads.js): every word should already appear in the course
   up to the recommended lesson, or be glossed in the story. Also lists words without a meaning.
   usage: node tools/reads_check.js <course-id> */
const fs=require('fs'),vm=require('vm'),path=require('path');
const cid=process.argv[2],SRC=path.join(__dirname,'..','courses',cid,'src');
const ctx={DLG:{},EX:{},VOC:{},CULT:{},DICT:{},Object,JSON,console};vm.createContext(ctx);
const run=f=>{if(fs.existsSync(f))vm.runInContext(fs.readFileSync(f,'utf8').replace(/^\s*var\s+DICT\s*=/m,'DICT='),ctx)};
run(path.join(SRC,'js','dict.js'));run(path.join(SRC,'js','dict2.js'));
const course=JSON.parse(fs.readFileSync(path.join(SRC,'course.json'),'utf8'));
const order=[];course.parts.forEach(p=>p.items.forEach(i=>{if((i.kind||'lesson')!=='app')order.push(i.id)}));
order.forEach(id=>run(path.join(SRC,'content',id+'.js')));run(path.join(SRC,'culture.js'));
run(path.join(SRC,'reads.js'));const READS=vm.runInContext('typeof READS!=="undefined"?READS:[]',ctx);
const IT=cid==='it-zh';
const surf=t=>t.replace(/\[[^\]]*\]/g,'');
function words(s){s=String(s);if(IT)return s.toLowerCase().replace(/[’]/g,"'").split(/[^a-zàèéìòóù']+/).map(w=>w.replace(/^'+|'+$/g,'')).filter(Boolean).flatMap(w=>{const i=w.indexOf("'");return i>0&&i<w.length-1?[w.slice(0,i+1),w.slice(i+1)]:[w]});
  return s.trim().split(/\s+/).map(surf).filter(w=>w&&!/^[。、，！？「」『』…：；“”（）!?,.\-—]+$/.test(w))}
function strs(x,out){if(x==null)return out;if(Array.isArray(x))x.forEach(y=>strs(y,out));else if(typeof x==='object')Object.values(x).forEach(y=>strs(y,out));else if(typeof x==='string')out.push(x);return out}
function known(upto){const k=new Set(),n=order.indexOf(upto);
  order.slice(0,n+1).forEach(id=>{strs([(ctx.VOC[id]||[]).map(v=>v[0]),(ctx.DLG[id]||[]).map(r=>r[1]),(ctx.EX[id]||[]).map(e=>[e.au,e.jp,e.it,e.full,e.a,e.o,e.w]),(ctx.CULT[id]||[]).map(c=>(c.w||[]).map(w=>w[0]))],[]).forEach(s=>words(s).forEach(w=>k.add(w)))});return k}
let bad=0;
READS.forEach(r=>{const k=known(r.after),gl=new Set((r.gloss||[]).map(g=>IT?g[0].toLowerCase():surf(g[0]))),seen=new Map();
  r.lines.forEach(l=>words(l[0]).forEach(w=>seen.set(w,(seen.get(w)||0)+1)));
  const tot=[...seen.values()].reduce((a,b)=>a+b,0),unk=[...seen.keys()].filter(w=>!k.has(w)&&!gl.has(w)),
    unkN=unk.reduce((a,w)=>a+seen.get(w),0),glN=[...seen.keys()].filter(w=>gl.has(w)&&!k.has(w)).reduce((a,w)=>a+seen.get(w),0);
  console.log(`\n# ${r.id} (dopo ${r.after}) · ${r.lines.length} frasi · ${tot} parole · note ${glN} · nuove senza nota ${unkN} (${(100*(tot-unkN-glN)/tot).toFixed(1)}% già viste)`);
  if(unk.length)console.log('  da controllare:',unk.join(' · '));
  const gUnused=[...gl].filter(g=>!seen.has(g));if(gUnused.length)console.log('  note non usate:',gUnused.join(' · '));
  (r.q||[]).forEach((q,i)=>{if(!(q.a>=0&&q.a<q.o.length)){console.log('  domanda',i,'senza risposta valida');bad++}});
});
process.exit(bad?1:0);
