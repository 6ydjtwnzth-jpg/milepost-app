/* Check the Milepost exercises (courses/<id>/src/drills.js): shape of every item, tiles that really build the answer,
   one blank per «gap», a real word as the error, and (Chinese) the tone changes of 不 and 一 in the pinyin.
   usage: node tools/drills_check.js <course-id> */
const fs=require('fs'),vm=require('vm'),path=require('path');
const cid=process.argv[2],SRC=path.join(__dirname,'..','courses',cid,'src');
const ctx={EX:{}};vm.createContext(ctx);vm.runInContext(fs.readFileSync(path.join(SRC,'drills.js'),'utf8'),ctx);
const IT=cid==='it-zh',ZH=cid==='zh-it';
const PU=/^[。、，！？「」『』…：；“”（）.,!?;:«»"'-]+$/;
const surf=t=>t.replace(/\[[^\]]*\]/g,'');
const toks=s=>String(s).trim().split(/\s+/).filter(t=>!PU.test(IT?t:surf(t)));
const key=t=>IT?t.toLowerCase().replace(/[.,!?;:«»]/g,''):surf(t);
let bad=0,n=0;const by={};
function fail(id,i,msg){bad++;console.log(`✗ ${id} #${i}: ${msg}`)}
function tones(s){/* Chinese: 不 and 一 before the next syllable */
  const T=String(s).trim().split(/\s+/),out=[];
  const toneOf=p=>{if(/[āēīōūǖ]/.test(p))return 1;if(/[áéíóúǘ]/.test(p))return 2;if(/[ǎěǐǒǔǚ]/.test(p))return 3;if(/[àèìòùǜ]/.test(p))return 4;return 5};
  T.forEach((t,k)=>{const m=t.match(/^(不|一)\[([^\]]+)\]$/);if(!m)return;const nx=T[k+1]&&T[k+1].match(/\[([^\]]+)\]/);if(!nx)return;
    const next=toneOf(nx[1].split('-')[0]),p=m[2].toLowerCase();
    if(m[1]==='不'&&p!=='bu'){const want=next===4?'bú':'bù';if(p!==want)out.push(`不 before tone ${next} should be ${want}`)}
    if(m[1]==='一'){const want=next===4?'yí':next===5?null:'yì';if(want&&p!==want&&p!=='yī')out.push(`一 before tone ${next} should be ${want}`)}});
  return out}
Object.keys(ctx.EX).forEach(id=>ctx.EX[id].forEach((it,i)=>{n++;by[it.t]=(by[it.t]||0)+1;
  const all=[];
  if(it.t==='ord'){const w=(it.w||[]).map(key).sort().join('|');
    (it.a||[]).forEach(a=>{if(toks(a).map(key).sort().join('|')!==w)fail(id,i,'tiles do not build: '+a)});
    (it.x||[]).forEach(x=>{if(toks(it.a[0]).map(key).includes(key(x)))fail(id,i,'trap tile is in the answer: '+x)});
    if(!it.q)fail(id,i,'no prompt');all.push(...it.a)}
  else if(it.t==='gap'){const k=(String(it.s).match(/＿/g)||[]).length;if(k!==1)fail(id,i,k+' blanks');
    if(!(it.o&&it.o.length>=3))fail(id,i,'needs 3 options');if(new Set(it.o).size!==it.o.length)fail(id,i,'repeated option');all.push(it.s.replace('＿',it.o[0]))}
  else if(it.t==='err'){const T=String(it.s).split(/\s+/);if(!(it.bad>=0&&it.bad<T.length))fail(id,i,'bad index out of range');
    else if(PU.test(IT?T[it.bad]:surf(T[it.bad])))fail(id,i,'bad index is punctuation');if(!it.fix||it.fix===it.s)fail(id,i,'no fix');all.push(it.s,it.fix)}
  else if(it.t==='rep'){if(!(it.o&&it.o.length>=3&&it.o.every(o=>o.length===2)))fail(id,i,'options must be [text, translation] ×3');all.push(it.ask,...(it.o||[]).map(o=>o[0]))}
  else if(it.t==='chr'){if(!(it.p&&it.p.length>=2))fail(id,i,'needs 2+ pieces');const ps=new Set((it.p||[]).map(p=>p[0]));(it.d||[]).forEach(d=>{if(ps.has(d[0]))fail(id,i,'distractor equals a piece: '+d[0])})}
  else if(it.t==='tone'){if(!/^[㐀-鿿]\[[^\]\-]+\]$/.test(it.s||''))fail(id,i,'tone wants one character with its pinyin')}
  else fail(id,i,'unknown type '+it.t);
  if(ZH)all.forEach(s=>tones(s).forEach(m=>fail(id,i,m+' — '+surf(s))));
}));
console.log(`${cid}: ${n} items`,JSON.stringify(by),bad?`· ${bad} problems`:'· ok');process.exit(bad?1:0);
