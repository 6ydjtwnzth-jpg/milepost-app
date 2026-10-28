/* ---------- testo cinese ----------
   Formato dei dati: parole separate da spazi; il pinyin di ogni parola tra parentesi quadre,
   una sillaba per carattere separata da trattini. Esempio: "我[wǒ] 是[shì] 意大利人[Yì-dà-lì-rén] 。"
   - i caratteri (senza spazi e senza pinyin) sono quello che si legge e si ascolta;
   - il pinyin dà il rubino sopra ogni carattere, colorato secondo il tono, e serve per controllare le risposte.
   Le funzioni hanno gli stessi nomi del corso di giapponese (jtoks, jsurf, jread, jplain, jromaji…):
   l'app di Milepost le usa allo stesso modo per tutti i corsi. */
var JRUN=/[\u3400-\u9fff\u3007]/;
var FURI=/([\u3400-\u9fff\u3007]+)\[([^\]]+)\]/g;
var JP_PUNCT=/^[，。！？、：；“”‘’（）《》…—·～\/!?.,:;()"'\-]+$/;
function jtoks(s){return String(s).trim().split(/\s+/).filter(Boolean)}
function jsurf(t){return String(t).replace(FURI,"$1")}
/* tone of a pinyin syllable: 1-4, 5 = neutral */
var TONEC={"\u0304":1,"\u0301":2,"\u030c":3,"\u0300":4};
function tone(s){var d=String(s).normalize("NFD");for(var i=0;i<d.length;i++)if(TONEC[d[i]])return TONEC[d[i]];return 5}
function sylls(p){return String(p).split("-").filter(Boolean)}
/* word pinyin in standard spelling: syllables joined, apostrophe before a, o, e (Xī'ān) */
function pyWord(p){var s=sylls(p),out="";s.forEach(function(x,i){if(i&&/^[aeoāáǎàēéěèōóǒò]/i.test(x))out+="'";out+=x});return out}
function jread(t){var m=String(t).match(/^([\u3400-\u9fff\u3007]+)\[([^\]]+)\]$/);return m?pyWord(m[2]):String(t)}
function jplain(s){return jtoks(s).map(jsurf).join("")}
var PU2L={"，":",","。":".","！":"!","？":"?","、":",","：":":","；":";","“":"\u201c","”":"\u201d","‘":"\u2018","’":"\u2019","（":"(","）":")","《":"«","》":"»","…":"…","—":"—","～":"~"};
function puLat(s){return String(s).replace(/[，。！？、：；“”‘’（）《》…—～]/g,function(c){return PU2L[c]})}
/* pinyin sentence: Wǒ shì Yìdàlìrén. */
function jromaji(s){return jtoks(s).map(function(t){return JP_PUNCT.test(t)?puLat(t):jread(t)}).join(" ").replace(/ ([.,!?:;)»\u201d\u2019…~])/g,"$1").replace(/([(«\u201c\u2018]) /g,"$1").replace(/……/g,"…")}
function jkana(s){return jromaji(s)}
/* rubino: un carattere, una sillaba; 儿 dell'erhua non ha sillaba propria */
function jruby(t){var m=String(t).match(/^([\u3400-\u9fff\u3007]+)\[([^\]]+)\]$/);if(!m)return esc(t);
  var ch=Array.from(m[1]),sy=sylls(m[2]),er=sy.length<ch.length,out="",k=0;
  ch.forEach(function(c,i){var s="";
    if(er&&c==="儿"&&k>0&&/r$/i.test(sy[k-1])&&!/^[eéèěē]r$/i.test(sy[k-1]))s="";else{s=sy[k]||"";k++}
    out+='<ruby>'+esc(c)+'<rt class="t'+(s?tone(s):0)+'">'+esc(s)+'</rt></ruby>'});
  return out}
/* pinyin colorato (testo libero, sillabe con trattini o parole intere) */
var SYLRE=/([A-Za-züÜāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜĀÁǍÀĒÉĚÈĪÍǏÌŌÓǑÒŪÚǓÙ]+)/g;
function pyHTML(p){return esc(String(p)).replace(SYLRE,function(w){return '<span class="t'+tone(w)+'">'+w+'</span>'})}
function pyLine(s){return jtoks(s).map(function(t){if(JP_PUNCT.test(t))return '<span class="pp">'+esc(puLat(t))+'</span>';var m=String(t).match(/^([\u3400-\u9fff\u3007]+)\[([^\]]+)\]$/);
    if(!m)return esc(t);return '<span class="pw">'+sylls(m[2]).map(function(x,i){return (i&&/^[aeoāáǎàēéěèōóǒò]/i.test(x)?"'":"")+'<span class="t'+tone(x)+'">'+esc(x)+'</span>'}).join("")+'</span>'}).join(" ").replace(/ (<span class="pp">[.,!?:;)»\u201d…~])/g,"$1")}

/* ---------- controllo delle risposte ----------
   si accettano i caratteri, oppure il pinyin con i segni dei toni, con i numeri (ni3 hao3) o senza toni */
var TONE_V={"ā":"a1","á":"a2","ǎ":"a3","à":"a4","ē":"e1","é":"e2","ě":"e3","è":"e4","ī":"i1","í":"i2","ǐ":"i3","ì":"i4","ō":"o1","ó":"o2","ǒ":"o3","ò":"o4","ū":"u1","ú":"u2","ǔ":"u3","ù":"u4","ǖ":"v1","ǘ":"v2","ǚ":"v3","ǜ":"v4","ü":"v"};
function pyNorm(s,keepTones){s=String(s).toLowerCase().normalize("NFC").replace(/u:/g,"v");
  var out="";for(var i=0;i<s.length;i++){var c=s[i],r=TONE_V[c];out+=r?(keepTones?r:r.charAt(0)):c}
  if(!keepTones)out=out.replace(/[1-5]/g,"");return out.replace(/[^a-z1-5v]/g,"")}
function hasToneInfo(s){return /[1-4]|[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/.test(String(s))}
function stripJ(s){return String(s).replace(/[\s，。！？、：；“”‘’（）《》…—·～!?.,:;()"'\-]/g,"")}
function jAnswerOk(user,ans){var u=stripJ(user);if(!u)return false;
  if(JRUN.test(u))return u===stripJ(jplain(ans));
  var syl=[];jtoks(ans).forEach(function(t){var m=t.match(/\[([^\]]+)\]$/);if(m)syl=syl.concat(sylls(m[1]));else if(!JP_PUNCT.test(t))syl.push(t)});
  var bases=syl.map(function(x){return pyNorm(x,false)});
  if(pyNorm(user,false)!==bases.join(""))return false;
  /* give each tone the user typed (mark or number) to its syllable */
  var ends=[],acc=0;bases.forEach(function(b){acc+=b.length;ends.push(acc)});
  var got=[],pos=0,d=String(user).toLowerCase().normalize("NFD").replace(/u:/g,"v");
  function sylAt(p){for(var i=0;i<ends.length;i++)if(p<ends[i])return i;return ends.length-1}
  for(var i=0;i<d.length;i++){var c=d[i];
    if(TONEC[c]){got[sylAt(pos-1)]=TONEC[c];continue}
    if(/[1-5]/.test(c)){if(pos>0)got[sylAt(pos-1)]=+c;continue}
    if(/[a-zv]/.test(c))pos++}
  return syl.every(function(x,i){var g=got[i],r=tone(x);if(!g||g===r||r===5||g===5)return true;
    if(bases[i]==="bu"||bases[i]==="yi")return true;
    if(r===3&&g===2){for(var j=i+1;j<syl.length;j++){var t=tone(syl[j]);if(t!==5)return t===3}}
    return false})}
