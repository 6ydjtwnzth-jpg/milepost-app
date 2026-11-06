/* ---------- English for Italians: the rules of the language used by the engine (app.js, path.js) ----------
   British English (spelling and voice), as in the Cambridge English exams. */
var KEY="inglese-per-italiani-v1";
var LANG={code:"en",name:"inglese",Name:"Inglese",tts:"en-GB",ttsBest:/^en[-_]gb/i,ttsAny:/^en/i,
  voiceNote:"Kokoro, voci «Emma» e «George» (inglese britannico)",
  acc:[],nearMsg:"Attenzione all'ortografia.",caseMatters:false,genders:false,dlg:"Dialogue",hello:"Hello!",
  groups:["irr","reg"],streak:"days in a row",cmp:["Regno Unito","United Kingdom"],
  stepn:{rec:["Parole di prima","Words from before","i-loop"],dlg:["Dialogo","Dialogue","i-ear"],voc:["Parole","Vocabulary","i-cards"],rule:["Grammatica","Grammar","i-bulb"],rev:["Ripasso","Review","i-loop"],snd:["Pronuncia","Pronunciation","i-wave"],cult:["Cultura","Culture","i-moka"],test:["Verifica","Check","i-check"]},
  cjNote:function(v,t){if(t==="ps"||t==="pp"){return " Paradigma: "+v.i+" – "+psOf(v)+" – "+ppOf(v)+"."}if(t==="pr")return " Alla 3ª persona singolare si aggiunge -s: "+s3(v)+".";if(t==="pg"&&v.stv)return " «"+v.i+"» è un verbo di stato: di solito non si usa al present continuous. Si dice I "+(v.i==="be"?"am":v.i)+", non I am "+ingOf(v)+".";return ""}};

/* ---------- meanings of tapped words ----------
   Exact form first (names, «I»), then lower case, then the verb forms of the conjugator. */
function norm(w){return w.toLowerCase().replace(/[’]/g,"'")}
function look(x){return DICT[x]||DICT[x.toLowerCase()]||CONJ_IDX[x.toLowerCase()]||""}
function meaning(w){w=String(w).replace(/[’]/g,"'");var k=norm(w);if(look(w))return look(w);
  /* spelling letter by letter: B-I-A-N-C-H-I */
  if(/^([A-Z]-)+[A-Z]$/.test(w))return "lo spelling, lettera per lettera";
  /* possessive: Tom's, my sister's, the boys' (contractions like it's, what's are in the dictionary) */
  var m=w.match(/^(.+?)'s$/i);if(m&&!PRON[m[1].toLowerCase()]&&(look(m[1])||formMeaning(norm(m[1]))))return "di «"+m[1]+"» ("+(look(m[1])||formMeaning(norm(m[1])))+")";
  m=w.match(/^(.+s)'$/i);if(m&&(look(m[1])||formMeaning(norm(m[1]))))return "di «"+m[1]+"» ("+(look(m[1])||formMeaning(norm(m[1])))+")";
  /* hyphenated: twenty-one, thirty-five */
  if(k.indexOf("-")>0){var ps=k.split("-").filter(Boolean),ms=ps.map(function(x){return look(x)||formMeaning(x)});
    if(ms.every(Boolean))return ps.map(function(x,j){return x+" ("+ms[j]+")"}).join(" + ")}
  return formMeaning(k)}
var PRON={i:1,you:1,he:1,she:1,it:1,we:1,they:1,that:1,what:1,where:1,who:1,how:1,there:1,here:1,let:1,this:1};
/* adjectives that make comparatives with -er / -est */
var ADJ={big:1,small:1,cheap:1,cold:1,hot:1,warm:1,nice:1,large:1,quiet:1,easy:1,busy:1,happy:1,tall:1,short:1,long:1,high:1,clean:1,dirty:1,safe:1,young:1,old:1,new:1,fast:1,late:1,early:1,great:1,lucky:1,noisy:1,rainy:1,sunny:1,windy:1,cloudy:1,heavy:1,full:1,near:1,small:1,slow:1,good:1,bad:1};
/* regular forms of known words: plural or 3rd person -s, past -ed, -ing, comparatives */
function formMeaning(k){var b;
  function n(base,lab){return DICT[base]&&!VIDX[base]?lab+" di «"+base+"» ("+DICT[base]+")":""}
  function v(base,lab){var d=VIDX[base]?VIDX[base].z:DICT[base];return d&&!ADJ[base]?lab+" «"+base+"» ("+d+")":""}
  function a(base,lab){return ADJ[base]&&DICT[base]?lab+" di «"+base+"» ("+DICT[base]+")":""}
  function bases(stem){var o=[stem,stem+"e"];if(/([b-df-hj-np-tv-z])\1$/.test(stem))o.push(stem.slice(0,-1));if(/i$/.test(stem))o.push(stem.slice(0,-1)+"y");return o}
  function first(list,f,lab){for(var i=0;i<list.length;i++){var r=f(list[i],lab);if(r)return r}return ""}
  if(k.length>3&&/ies$/.test(k)&&(b=n(k.slice(0,-3)+"y","plurale")))return b;
  if(k.length>3&&/(s|x|z|ch|sh|o)es$/.test(k)&&(b=n(k.slice(0,-2),"plurale")))return b;
  if(k.length>2&&/[^s]s$/.test(k)&&(b=n(k.slice(0,-1),"plurale")))return b;
  if(k.length>4&&/ed$/.test(k)&&(b=first(bases(k.slice(0,-2)).concat([k.slice(0,-1)]),v,"passato di")))return b;
  if(k.length>5&&/ing$/.test(k)&&(b=first(bases(k.slice(0,-3)),v,"forma in -ing di")))return b;
  if(k.length>4&&/est$/.test(k)&&(b=first(bases(k.slice(0,-3)),a,"superlativo")))return b;
  if(k.length>3&&/er$/.test(k)&&(b=first(bases(k.slice(0,-2)),a,"comparativo")))return b;
  return ""}

/* ---------- verbs ----------
   Regular verbs need only the infinitive; irregular ones give ps (past simple) and pp (past participle).
   dbl: the final consonant doubles (stop → stopped, stopping); stv: stative verb, no present continuous (I know, not I am knowing). */
var PZ=["I","you","he / she / it","we","you","they"],PS=["I","you","he","we","you","they"];
var PIT=["io","tu","lui / lei","noi","voi","loro"];
var GRP={irr:"Verbi irregolari",reg:"Verbi regolari"};
var TN={pr:"present simple",pg:"present continuous",ps:"past simple",pp:"present perfect",fu:"future (will)",co:"would"};
var TIP={pr:"Present simple: abitudini, fatti sempre veri, orari. Con he / she / it il verbo prende -s.",
  pg:"Present continuous: quello che succede adesso, in questo periodo, o un programma già fissato. Be + verbo in -ing.",
  ps:"Past simple: un fatto finito, in un momento preciso del passato (yesterday, last week, in 2019). Una sola forma per tutte le persone.",
  pp:"Present perfect: esperienze (ever, never) e fatti passati che contano adesso (just, already, yet). Have / has + participio.",
  fu:"Will: previsioni, decisioni prese sul momento, promesse. Per i progetti già decisi si usa going to.",
  co:"Would: desideri e richieste gentili (I would like = I'd like), ipotesi."};
var VERBS=[
 {i:"be",stv:1,z:"essere",k:"irr",pr:["am","are","is","are","are","are"],ps:"was",pp:"been"},
 {i:"have",z:"avere",k:"irr",s3:"has",ps:"had",pp:"had"},
 {i:"do",z:"fare",k:"irr",s3:"does",ps:"did",pp:"done"},
 {i:"go",z:"andare",k:"irr",s3:"goes",ps:"went",pp:"gone"},
 {i:"get",z:"ottenere, prendere, arrivare",k:"irr",ps:"got",pp:"got",dbl:1},
 {i:"make",z:"fare, preparare",k:"irr",ps:"made",pp:"made"},
 {i:"say",z:"dire",k:"irr",ps:"said",pp:"said"},
 {i:"see",z:"vedere",k:"irr",ps:"saw",pp:"seen"},
 {i:"come",z:"venire",k:"irr",ps:"came",pp:"come"},
 {i:"take",z:"prendere",k:"irr",ps:"took",pp:"taken"},
 {i:"give",z:"dare",k:"irr",ps:"gave",pp:"given"},
 {i:"know",stv:1,z:"sapere, conoscere",k:"irr",ps:"knew",pp:"known"},
 {i:"think",z:"pensare",k:"irr",ps:"thought",pp:"thought"},
 {i:"eat",z:"mangiare",k:"irr",ps:"ate",pp:"eaten"},
 {i:"drink",z:"bere",k:"irr",ps:"drank",pp:"drunk"},
 {i:"buy",z:"comprare",k:"irr",ps:"bought",pp:"bought"},
 {i:"pay",z:"pagare",k:"irr",ps:"paid",pp:"paid"},
 {i:"read",z:"leggere",k:"irr",ps:"read",pp:"read"},
 {i:"write",z:"scrivere",k:"irr",ps:"wrote",pp:"written"},
 {i:"speak",z:"parlare (una lingua)",k:"irr",ps:"spoke",pp:"spoken"},
 {i:"tell",z:"dire, raccontare",k:"irr",ps:"told",pp:"told"},
 {i:"find",z:"trovare",k:"irr",ps:"found",pp:"found"},
 {i:"leave",z:"partire, lasciare",k:"irr",ps:"left",pp:"left"},
 {i:"meet",z:"incontrare, conoscere",k:"irr",ps:"met",pp:"met"},
 {i:"sleep",z:"dormire",k:"irr",ps:"slept",pp:"slept"},
 {i:"feel",z:"sentirsi",k:"irr",ps:"felt",pp:"felt"},
 {i:"put",z:"mettere",k:"irr",ps:"put",pp:"put",dbl:1},
 {i:"run",z:"correre",k:"irr",ps:"ran",pp:"run",dbl:1},
 {i:"swim",z:"nuotare",k:"irr",ps:"swam",pp:"swum",dbl:1},
 {i:"sit",z:"sedersi, stare seduto",k:"irr",ps:"sat",pp:"sat",dbl:1},
 {i:"begin",z:"cominciare",k:"irr",ps:"began",pp:"begun",dbl:1},
 {i:"bring",z:"portare (qui)",k:"irr",ps:"brought",pp:"brought"},
 {i:"send",z:"mandare, spedire",k:"irr",ps:"sent",pp:"sent"},
 {i:"spend",z:"spendere; passare (il tempo)",k:"irr",ps:"spent",pp:"spent"},
 {i:"lose",z:"perdere",k:"irr",ps:"lost",pp:"lost"},
 {i:"win",z:"vincere",k:"irr",ps:"won",pp:"won",dbl:1},
 {i:"wear",z:"indossare, portare",k:"irr",ps:"wore",pp:"worn"},
 {i:"choose",z:"scegliere",k:"irr",ps:"chose",pp:"chosen"},
 {i:"fly",z:"volare, andare in aereo",k:"irr",ps:"flew",pp:"flown"},
 {i:"drive",z:"guidare",k:"irr",ps:"drove",pp:"driven"},
 {i:"ride",z:"andare (in bici, a cavallo)",k:"irr",ps:"rode",pp:"ridden"},
 {i:"fall",z:"cadere",k:"irr",ps:"fell",pp:"fallen"},
 {i:"break",z:"rompere",k:"irr",ps:"broke",pp:"broken"},
 {i:"forget",z:"dimenticare",k:"irr",ps:"forgot",pp:"forgotten",dbl:1},
 {i:"understand",stv:1,z:"capire",k:"irr",ps:"understood",pp:"understood"},
 {i:"teach",z:"insegnare",k:"irr",ps:"taught",pp:"taught"},
 {i:"sell",z:"vendere",k:"irr",ps:"sold",pp:"sold"},
 {i:"hear",stv:1,z:"sentire, udire",k:"irr",ps:"heard",pp:"heard"},
 {i:"become",z:"diventare",k:"irr",ps:"became",pp:"become"},
 {i:"grow",z:"crescere, coltivare",k:"irr",ps:"grew",pp:"grown"},
 {i:"keep",z:"tenere, continuare a",k:"irr",ps:"kept",pp:"kept"},
 {i:"stand",z:"stare in piedi",k:"irr",ps:"stood",pp:"stood"},
 {i:"wake",z:"svegliarsi",k:"irr",ps:"woke",pp:"woken"},
 {i:"sing",z:"cantare",k:"irr",ps:"sang",pp:"sung"},
 {i:"cut",z:"tagliare",k:"irr",ps:"cut",pp:"cut",dbl:1},
 {i:"hurt",z:"fare male",k:"irr",ps:"hurt",pp:"hurt"},
 {i:"work",z:"lavorare; funzionare"},{i:"live",z:"vivere, abitare"},{i:"like",stv:1,z:"piacere (I like = mi piace)"},{i:"love",stv:1,z:"amare, adorare"},
 {i:"play",z:"giocare; suonare"},{i:"watch",z:"guardare (la TV, una partita)"},{i:"listen",z:"ascoltare"},{i:"study",z:"studiare"},
 {i:"want",stv:1,z:"volere"},{i:"need",stv:1,z:"avere bisogno di"},{i:"help",z:"aiutare"},{i:"start",z:"cominciare"},{i:"finish",z:"finire"},
 {i:"open",z:"aprire"},{i:"close",z:"chiudere"},{i:"cook",z:"cucinare"},{i:"clean",z:"pulire"},{i:"wash",z:"lavare"},
 {i:"walk",z:"camminare, andare a piedi"},{i:"travel",z:"viaggiare",dblUK:1},{i:"visit",z:"visitare, andare a trovare"},{i:"stay",z:"stare, restare, alloggiare"},
 {i:"arrive",z:"arrivare"},{i:"call",z:"chiamare, telefonare"},{i:"ask",z:"chiedere, domandare"},{i:"answer",z:"rispondere"},
 {i:"try",z:"provare"},{i:"carry",z:"portare (in mano)"},{i:"stop",z:"fermare, smettere",dbl:1},{i:"plan",z:"programmare",dbl:1},
 {i:"look",z:"guardare; sembrare"},{i:"wait",z:"aspettare"},{i:"use",z:"usare"},{i:"move",z:"muovere; traslocare"},
 {i:"dance",z:"ballare"},{i:"change",z:"cambiare"},{i:"rain",z:"piovere"},{i:"enjoy",z:"godersi, divertirsi"},{i:"hope",z:"sperare"},{i:"remember",stv:1,z:"ricordare"}
];
function s3(v){if(v.s3)return v.s3;var b=v.i;if(/(s|x|z|ch|sh|o)$/.test(b))return b+"es";if(/[^aeiou]y$/.test(b))return b.slice(0,-1)+"ies";return b+"s"}
function edOf(b,v){if(/e$/.test(b))return b+"d";if(/[^aeiou]y$/.test(b))return b.slice(0,-1)+"ied";if(v.dbl||v.dblUK)return b+b.slice(-1)+"ed";return b+"ed"}
function psOf(v){return v.ps||edOf(v.i,v)}
function ppOf(v){return v.pp||edOf(v.i,v)}
function ingOf(v){var b=v.i;if(v.ing)return v.ing;if(/ie$/.test(b))return b.slice(0,-2)+"ying";if(/[^aeiou]e$/.test(b)&&b!=="be")return b.slice(0,-1)+"ing";if(v.dbl||v.dblUK)return b+b.slice(-1)+"ing";return b+"ing"}
var BE=["am","are","is","are","are","are"],HV=["have","have","has","have","have","have"];
function F(h,p){return {h:h,p:p}}
/* the part that differs from the infinitive is shown in colour: work<b>s</b>, stud<b>ied</b>, <b>went</b> */
function hl(b,x){var n=0;while(n<b.length&&n<x.length&&b[n]===x[n])n++;return n===x.length?esc(x):esc(x.slice(0,n))+'<b class="end">'+esc(x.slice(n))+'</b>'}
function cjForms(v,t){var b=v.i;
  if(t==="pr"){if(v.pr)return v.pr.map(function(x){return F('<b class="end">'+esc(x)+'</b>',x)});
    return [0,1,2,3,4,5].map(function(i){return i===2?F(hl(b,s3(v)),s3(v)):F(esc(b),b)})}
  if(t==="pg"){if(v.stv)return [];var g=ingOf(v);return BE.map(function(a){return F('<span class="cj-aux">'+a+'</span> '+hl(b,g),a+" "+g)})}
  if(t==="ps"){if(b==="be")return ["was","were","was","were","were","were"].map(function(x){return F('<b class="end">'+x+'</b>',x)});var p=psOf(v);return PZ.map(function(){return F(hl(b,p),p)})}
  if(t==="pp"){var q=ppOf(v);return HV.map(function(a){return F('<span class="cj-aux">'+a+'</span> '+hl(b,q),a+" "+q)})}
  var aux=t==="fu"?"will":"would";return PZ.map(function(){return F('<span class="cj-aux">'+aux+'</span> '+esc(b),aux+" "+b)})}
function cjSay(v,t,i,f){return PS[i]+" "+f.p}
var CONJ_IDX={},VIDX={};
VERBS.forEach(function(v){VIDX[v.i]=v;var z=v.z;
  function add(f,lab){if(!CONJ_IDX[f])CONJ_IDX[f]=z+" ("+v.i+") · "+lab}
  if(!DICT[v.i])CONJ_IDX[v.i]=z+" (infinito)";
  if(v.pr)v.pr.forEach(function(x,i){add(x,PZ[i]+" · present simple")});else add(s3(v),"he / she / it · present simple");
  add(ingOf(v),"forma in -ing");
  if(v.i==="be"){add("was","I / he / she / it · past simple");add("were","you / we / they · past simple")}else add(psOf(v),"past simple");
  add(ppOf(v),"participio passato")});

/* ---------- alphabet and numbers: [letter, how an Italian reads its name, what the voice says] ---------- */
var ALF=[["A","ei","A."],["B","bi","B."],["C","si","C."],["D","di","D."],["E","i","E."],["F","ef","F."],["G","gi","G."],["H","eic","H."],["I","ai","I."],["J","gei","J."],["K","kei","K."],["L","el","L."],["M","em","M."],
  ["N","en","N."],["O","ou","O."],["P","pi","P."],["Q","kiu","Q."],["R","aa","R."],["S","es","S."],["T","ti","T."],["U","iu","U."],["V","vi","V."],["W","dabliu","W."],["X","eks","X."],["Y","uai","Y."],["Z","zed","Z."]];
var NUM=[["0","zero"],["1","one"],["2","two"],["3","three"],["4","four"],["5","five"],["6","six"],["7","seven"],["8","eight"],["9","nine"],["10","ten"],["11","eleven"],["12","twelve"],["13","thirteen"],["14","fourteen"],["15","fifteen"],["16","sixteen"],["17","seventeen"],["18","eighteen"],["19","nineteen"],["20","twenty"],
  ["21","twenty-one"],["22","twenty-two"],["30","thirty"],["40","forty"],["50","fifty"],["60","sixty"],["70","seventy"],["80","eighty"],["90","ninety"],["99","ninety-nine"],["100","a hundred"],["101","a hundred and one"],["250","two hundred and fifty"],["1000","a thousand"],["2000","two thousand"],["1000000","a million"]];

/* ---------- vocabulary: English nouns have no grammatical gender ---------- */
function art(w,g){return ""}
function gOf(g){return ""}
function wordHTML(r){return esc(r[0])}
function gLabel(g){return ""}
