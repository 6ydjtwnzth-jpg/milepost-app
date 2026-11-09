/* Progression check: does each lesson build on the previous ones, without jumps?
   For every lesson it measures, in the dialogue and in the examples of the lesson page:
   - new words that were neither seen earlier in the course nor listed in the lesson's own word list;
   - how long the sentences are, compared with the lesson before;
   - how many examples each rule has.
   A word counts as seen when it, or a form of it (same beginning), appeared in an earlier lesson or is in the
   lesson's word list. usage: node tools/progress_check.js <course-id> [--words] */
const fs=require('fs'),vm=require('vm'),path=require('path');
const cid=process.argv[2],SHOW=process.argv.includes('--words'),RULES=process.argv.includes('--rules'),THIN=[],SRC=path.join(__dirname,'..','courses',cid,'src');
const ctx={DLG:{},EX:{},VOC:{},CULT:{},DICT:{},Object,JSON,console};vm.createContext(ctx);
const run=f=>{if(fs.existsSync(f))vm.runInContext(fs.readFileSync(f,'utf8').replace(/^\s*var\s+DICT\s*=/m,'DICT='),ctx)};
const course=JSON.parse(fs.readFileSync(path.join(SRC,'course.json'),'utf8'));
const order=[];course.parts.forEach(p=>p.items.forEach(i=>{if((i.kind||'lesson')!=='app')order.push(i.id)}));
order.forEach(id=>run(path.join(SRC,'content',id+'.js')));run(path.join(SRC,'culture.js'));
const LAT=['it-zh','fr-it','it-es','en-it','es-it','de-it','it-hi','it-tl','en-hi','en-tl'].includes(cid),EN=/^en-/.test(cid),JA=cid==='ja-it',ZH=cid==='zh-it';
const ATTR=JA?'data-jp':ZH?'data-zh':'data-it';
/* grammar words are taught by the rules, not by the word lists; names and numbers are not vocabulary to learn */
const GRAM={'ja-it':'は が を に で へ と も の か ね よ な から まで より や だ です ます でした ません じゃ ありません です か い く て た ない','zh-it':'的 了 吗 呢 吧 是 不 也 都 很 和 在 有 没 个 这 那','it-zh':'il lo la l\' i gli le un uno una un\' di a da in con su per tra fra e o ma che non è sono sei siamo siete ho hai ha abbiamo avete hanno del della dei delle al alla ai alle nel nella sul sulla mi ti si ci vi',
 'it-es':'il lo la l\' i gli le un uno una un\' di a da in con su per tra fra e o ma che non è sono sei siamo siete ho hai ha abbiamo avete hanno del della dei delle al alla ai alle nel nella sul sulla mi ti si ci vi',
 'en-it':"the a an and or but in on at to of for from with is am are was were be i you he she it we they me him us them my your his her its our their this that these those not no do does did don't doesn't didn't i'm you're he's she's it's we're they're isn't aren't wasn't weren't i've you've we've they've i'll i'd can can't there here what's that's",
 'fr-it':'le la l\' les un une des de du d\' à au aux en et ou mais que qu\' ne pas je j\' tu il elle on nous vous ils elles me m\' te t\' se s\' est suis es sont ce c\' y'}[({'it-hi':'it-es','it-tl':'it-es','en-hi':'en-it','en-tl':'en-it'})[cid]||cid]||'';
const GW=new Set(GRAM.split(' '));
const isNum=w=>/^[0-9一二三四五六七八九十百千万]+/.test(w);
const isName=(raw)=>LAT?/^[A-ZÀ-Ý]/.test(raw):false;
const surf=t=>t.replace(/\[[^\]]*\]/g,'');
function words(s){s=String(s);
  if(LAT)return s.toLowerCase().replace(/[’]/g,"'").split(/[^a-zàâäçèéêëîïôöùûüÿœæñáíóúß']+/).map(w=>w.replace(/^'+|'+$/g,'')).filter(Boolean)
    .flatMap(w=>{if(EN)return [w.replace(/'s$/,'')];const i=w.indexOf("'");return i>0&&i<w.length-1?[w.slice(0,i+1),w.slice(i+1)]:[w]});
  return s.trim().split(/\s+/).map(surf).filter(w=>w&&!/^[。、，！？「」『』…：；“”（）!?,.\-—〜・/]+$/.test(w))}
function strs(x,out){if(x==null)return out;if(Array.isArray(x))x.forEach(y=>strs(y,out));else if(typeof x==='object')Object.values(x).forEach(y=>strs(y,out));else if(typeof x==='string')out.push(x);return out}
const html=id=>{const f=path.join(SRC,'content',id+'.html');return fs.existsSync(f)?fs.readFileSync(f,'utf8'):''};
const examples=id=>[...html(id).matchAll(new RegExp(ATTR+'="([^"]*)"','g'))].map(m=>m[1]);
const ruleExamples=id=>[...html(id).matchAll(/<div class="rule"[\s\S]*?<\/div>\s*<\/div>/g)].flatMap(m=>[...m[0].matchAll(new RegExp(ATTR+'="([^"]*)"','g'))].map(x=>x[1]));
function rawWords(s){s=String(s);if(LAT)return s.replace(/[’]/g,"'").split(/[^A-Za-zÀ-ÿœæñ']+/).filter(Boolean);return null}
/* «same word»: identical, or (for words of 5+ letters) the same beginning except the last 1–3 letters: parlo ≈ parlare */
const stem=w=>LAT?w.slice(0,Math.max(4,w.length-3)):JA?w.replace(/[ぁ-ゖ]+$/,'')||w:w;
function knows(set,stems,w){if(set.has(w))return true;if(LAT&&w.length>=5)return stems.has(stem(w));if(JA&&/[一-鿿]/.test(w))return stems.has(stem(w));return false}
const seen=new Set(),seenSt=new Set();let prevLen=0,flags=0;const rows=[];
function add(w){seen.add(w);seenSt.add(stem(w))}
order.forEach(id=>{
  const voc=(ctx.VOC[id]||[]).map(v=>v[0]);const vset=new Set(),vst=new Set();voc.forEach(s=>words(s).forEach(w=>{vset.add(w);vst.add(stem(w))}));
  const dlg=(ctx.DLG[id]||[]).map(r=>r[1]);const exs=examples(id);
  const all=[...dlg,...exs],judged=[...dlg,...ruleExamples(id)];const unk=new Map();let toks=0;
  const names=new Set();judged.forEach(x=>{const r=rawWords(x);if(r)r.forEach((w,i)=>{if(isName(w))names.add(w.toLowerCase())})});
  judged.forEach(x=>words(x).forEach(w=>{toks++;if(GW.has(w)||isNum(w)||names.has(w)||(JA&&/^[ァ-ヺー・]+$/.test(w)&&w.length>1&&/^[A-Z]/.test('')))return;
    if(!knows(seen,seenSt,w)&&!knows(vset,vst,w))unk.set(w,(unk.get(w)||0)+1)}));
  const lens=dlg.map(s=>words(s).length),avg=lens.length?lens.reduce((a,b)=>a+b,0)/lens.length:0;
  const rb=[...html(id).matchAll(/<div class="rule"[\s\S]*?(?=<div class="rule"|<div class="warn"|<div class="speech"|<div class="suono"|<div class="words-head"|<details|$)/g)].map(m=>({n:(m[0].match(new RegExp(ATTR+'="','g'))||[]).length,t:((m[0].match(/<h3>([\s\S]*?)<\/h3>/)||[])[1]||'').replace(/<[^>]+>/g,'')}));
  const rules=rb.map(r=>r.n);if(RULES)rb.filter(r=>r.n<3).forEach(r=>THIN.push(id+' · '+r.n+' · '+r.t));
  const thin=rules.filter(n=>n<3).length;
  const pctNew=toks?100*[...unk.values()].reduce((a,b)=>a+b,0)/toks:0;
  const jump=prevLen&&avg>prevLen*1.4&&avg-prevLen>2;
  const f=[];if(pctNew>12)f.push('troppe parole nuove');if(jump)f.push('frasi molto più lunghe');if(thin)f.push(thin+' regole con meno di 3 esempi');
  if(f.length)flags++;
  rows.push({id,voc:voc.length,dlg:dlg.length,avg:avg.toFixed(1),maxLen:lens.length?Math.max(...lens):0,ex:exs.length,unknown:unk.size,pctNew:pctNew.toFixed(1),rules:rules.join(','),f:f.join('; '),words:[...unk.keys()]});
  if(avg)prevLen=avg;
  /* everything in this lesson counts as seen for the next ones */
  voc.forEach(s=>words(s).forEach(add));all.forEach(s=>words(s).forEach(add));
  strs([(ctx.EX[id]||[]).map(e=>[e.au,e.jp,e.it,e.full,e.a,e.o,e.w]),(ctx.CULT[id]||[]).map(c=>(c.w||[]).map(w=>w[0]))],[]).forEach(s=>words(s).forEach(add));
});
console.log(`${cid}: lezione · parole nuove della lezione · righe di dialogo · lunghezza media/massima · esempi · parole non introdotte (% del testo) · esempi per regola`);
rows.forEach(r=>{console.log(`${r.id.padEnd(4)} voc ${String(r.voc).padStart(2)} · dlg ${String(r.dlg).padStart(2)} · ${r.avg}/${r.maxLen} · es ${String(r.ex).padStart(2)} · nuove ${String(r.unknown).padStart(2)} (${r.pctNew}%) · regole [${r.rules}]${r.f?'  ⚠ '+r.f:''}`);
  if(SHOW&&r.words.length)console.log('      '+r.words.slice(0,40).join(' · '))});
if(RULES)console.log('\nRegole con meno di 3 esempi:\n'+THIN.join('\n'));
console.log(flags?`${flags} lezioni da rivedere`:'progressione ok');
