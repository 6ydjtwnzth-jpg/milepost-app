/* ---------- English for Hindi speakers: the rules of the language used by the engine (app.js, path.js) ----------
   British English (spelling and voice), as in the Cambridge English exams. */
var KEY="english-hindi-v1";
var LANG={code:"en",name:"अंग्रेज़ी",Name:"अंग्रेज़ी",tts:"en-GB",ttsBest:/^en[-_]gb/i,ttsAny:/^en/i,
  voiceNote:"Kokoro, आवाज़ें «Emma» और «George» (ब्रिटिश अंग्रेज़ी)",
  acc:[],nearMsg:"वर्तनी (spelling) पर ध्यान दें।",caseMatters:false,genders:false,dlg:"Dialogue",hello:"Hello!",
  groups:["irr","reg"],streak:"days in a row",cmp:["ब्रिटेन","United Kingdom"],
  stepn:{rec:["पिछले शब्द","Words from before","i-loop"],dlg:["संवाद","Dialogue","i-ear"],voc:["शब्द","Vocabulary","i-cards"],rule:["व्याकरण","Grammar","i-bulb"],rev:["दोहराव","Review","i-loop"],snd:["उच्चारण","Pronunciation","i-wave"],cult:["संस्कृति","Culture","i-moka"],test:["जाँच","Check","i-check"]},
  cjNote:function(v,t){if(t==="ps"||t==="pp"){return " तीन रूप: "+v.i+" – "+psOf(v)+" – "+ppOf(v)+"।"}if(t==="pr")return " he / she / it के साथ -s लगता है: "+s3(v)+"।";if(t==="pg"&&v.stv)return " «"+v.i+"» स्थिति बताने वाली क्रिया है: आम तौर पर present continuous में नहीं आती। कहते हैं I "+(v.i==="be"?"am":v.i)+", न कि I am "+ingOf(v)+"।";return ""}};

/* ---------- meanings of tapped words ----------
   Exact form first (names, «I»), then lower case, then the verb forms of the conjugator. */
function norm(w){return w.toLowerCase().replace(/[’]/g,"'")}
function look(x){return DICT[x]||DICT[x.toLowerCase()]||CONJ_IDX[x.toLowerCase()]||""}
function meaning(w){w=String(w).replace(/[’]/g,"'");var k=norm(w);if(look(w))return look(w);
  /* spelling letter by letter: B-I-A-N-C-H-I */
  if(/^([A-Z]-)+[A-Z]$/.test(w))return "स्पेलिंग, अक्षर-दर-अक्षर";
  /* possessive: Tom's, my sister's, the boys' (contractions like it's, what's are in the dictionary) */
  var m=w.match(/^(.+?)'s$/i);if(m&&!PRON[m[1].toLowerCase()]&&(look(m[1])||formMeaning(norm(m[1]))))return "«"+m[1]+"» का ("+(look(m[1])||formMeaning(norm(m[1])))+")";
  m=w.match(/^(.+s)'$/i);if(m&&(look(m[1])||formMeaning(norm(m[1]))))return "«"+m[1]+"» का ("+(look(m[1])||formMeaning(norm(m[1])))+")";
  /* hyphenated: twenty-one, thirty-five */
  if(k.indexOf("-")>0){var ps=k.split("-").filter(Boolean),ms=ps.map(function(x){return look(x)||formMeaning(x)});
    if(ms.every(Boolean))return ps.map(function(x,j){return x+" ("+ms[j]+")"}).join(" + ")}
  return formMeaning(k)}
var PRON={i:1,you:1,he:1,she:1,it:1,we:1,they:1,that:1,what:1,where:1,who:1,how:1,there:1,here:1,let:1,this:1};
/* adjectives that make comparatives with -er / -est */
var ADJ={big:1,small:1,cheap:1,cold:1,hot:1,warm:1,nice:1,large:1,quiet:1,easy:1,busy:1,happy:1,tall:1,short:1,long:1,high:1,clean:1,dirty:1,safe:1,young:1,old:1,new:1,fast:1,late:1,early:1,great:1,lucky:1,noisy:1,rainy:1,sunny:1,windy:1,cloudy:1,heavy:1,full:1,near:1,small:1,slow:1,good:1,bad:1};
/* regular forms of known words: plural or 3rd person -s, past -ed, -ing, comparatives */
function formMeaning(k){var b;
  function n(base,lab){return DICT[base]&&!VIDX[base]?"«"+base+"» का "+lab+" ("+DICT[base]+")":""}
  function v(base,lab){var d=VIDX[base]?VIDX[base].z:DICT[base];return d&&!ADJ[base]?"«"+base+"» का "+lab+" ("+d+")":""}
  function a(base,lab){return ADJ[base]&&DICT[base]?"«"+base+"» का "+lab+" ("+DICT[base]+")":""}
  function bases(stem){var o=[stem,stem+"e"];if(/([b-df-hj-np-tv-z])\1$/.test(stem))o.push(stem.slice(0,-1));if(/i$/.test(stem))o.push(stem.slice(0,-1)+"y");return o}
  function first(list,f,lab){for(var i=0;i<list.length;i++){var r=f(list[i],lab);if(r)return r}return ""}
  if(k.length>3&&/ies$/.test(k)&&(b=n(k.slice(0,-3)+"y","बहुवचन")))return b;
  if(k.length>3&&/(s|x|z|ch|sh|o)es$/.test(k)&&(b=n(k.slice(0,-2),"बहुवचन")))return b;
  if(k.length>2&&/[^s]s$/.test(k)&&(b=n(k.slice(0,-1),"बहुवचन")))return b;
  if(k.length>4&&/ed$/.test(k)&&(b=first(bases(k.slice(0,-2)).concat([k.slice(0,-1)]),v,"भूतकाल रूप")))return b;
  if(k.length>5&&/ing$/.test(k)&&(b=first(bases(k.slice(0,-3)),v,"-ing रूप")))return b;
  if(k.length>4&&/est$/.test(k)&&(b=first(bases(k.slice(0,-3)),a,"सर्वोच्च रूप")))return b;
  if(k.length>3&&/er$/.test(k)&&(b=first(bases(k.slice(0,-2)),a,"तुलना वाला रूप")))return b;
  return ""}

/* ---------- verbs ----------
   Regular verbs need only the infinitive; irregular ones give ps (past simple) and pp (past participle).
   dbl: the final consonant doubles (stop → stopped, stopping); stv: stative verb, no present continuous (I know, not I am knowing). */
var PZ=["I","you","he / she / it","we","you","they"],PS=["I","you","he","we","you","they"];
var PIT=["मैं","तुम / आप","वह","हम","तुम लोग / आप लोग","वे"];
var GRP={irr:"अनियमित क्रियाएँ",reg:"नियमित क्रियाएँ"};
var TN={pr:"present simple",pg:"present continuous",ps:"past simple",pp:"present perfect",fu:"future (will)",co:"would"};
var TIP={pr:"Present simple: आदतें, हमेशा सच बातें, समय-सारणी। he / she / it के साथ क्रिया में -s लगता है।",
  pg:"Present continuous: जो अभी या इन दिनों हो रहा है, या पहले से तय योजना। Be + क्रिया का -ing रूप।",
  ps:"Past simple: अतीत में किसी तय समय पर पूरा हुआ काम (yesterday, last week, in 2019)। सभी पुरुषों के लिए एक ही रूप।",
  pp:"Present perfect: अनुभव (ever, never) और बीती बातें जो अभी मायने रखती हैं (just, already, yet)। Have / has + participle।",
  fu:"Will: अनुमान, उसी पल लिए गए फ़ैसले, वादे। पहले से तय योजनाओं के लिए going to।",
  co:"Would: इच्छाएँ और विनम्र अनुरोध (I would like = I'd like), कल्पना।"};
var VERBS=[
 {i:"be",stv:1,z:"होना",k:"irr",pr:["am","are","is","are","are","are"],ps:"was",pp:"been"},
 {i:"have",z:"पास होना, रखना",k:"irr",s3:"has",ps:"had",pp:"had"},
 {i:"do",z:"करना",k:"irr",s3:"does",ps:"did",pp:"done"},
 {i:"go",z:"जाना",k:"irr",s3:"goes",ps:"went",pp:"gone"},
 {i:"get",z:"पाना, लेना, पहुँचना",k:"irr",ps:"got",pp:"got",dbl:1},
 {i:"make",z:"बनाना, करना",k:"irr",ps:"made",pp:"made"},
 {i:"say",z:"कहना",k:"irr",ps:"said",pp:"said"},
 {i:"see",z:"देखना",k:"irr",ps:"saw",pp:"seen"},
 {i:"come",z:"आना",k:"irr",ps:"came",pp:"come"},
 {i:"take",z:"लेना",k:"irr",ps:"took",pp:"taken"},
 {i:"give",z:"देना",k:"irr",ps:"gave",pp:"given"},
 {i:"know",stv:1,z:"जानना",k:"irr",ps:"knew",pp:"known"},
 {i:"think",z:"सोचना",k:"irr",ps:"thought",pp:"thought"},
 {i:"eat",z:"खाना",k:"irr",ps:"ate",pp:"eaten"},
 {i:"drink",z:"पीना",k:"irr",ps:"drank",pp:"drunk"},
 {i:"buy",z:"ख़रीदना",k:"irr",ps:"bought",pp:"bought"},
 {i:"pay",z:"भुगतान करना",k:"irr",ps:"paid",pp:"paid"},
 {i:"read",z:"पढ़ना",k:"irr",ps:"read",pp:"read"},
 {i:"write",z:"लिखना",k:"irr",ps:"wrote",pp:"written"},
 {i:"speak",z:"बोलना (भाषा)",k:"irr",ps:"spoke",pp:"spoken"},
 {i:"tell",z:"बताना, सुनाना",k:"irr",ps:"told",pp:"told"},
 {i:"find",z:"ढूँढ़ लेना, पाना",k:"irr",ps:"found",pp:"found"},
 {i:"leave",z:"निकलना, छोड़ना",k:"irr",ps:"left",pp:"left"},
 {i:"meet",z:"मिलना",k:"irr",ps:"met",pp:"met"},
 {i:"sleep",z:"सोना",k:"irr",ps:"slept",pp:"slept"},
 {i:"feel",z:"महसूस करना",k:"irr",ps:"felt",pp:"felt"},
 {i:"put",z:"रखना",k:"irr",ps:"put",pp:"put",dbl:1},
 {i:"run",z:"दौड़ना",k:"irr",ps:"ran",pp:"run",dbl:1},
 {i:"swim",z:"तैरना",k:"irr",ps:"swam",pp:"swum",dbl:1},
 {i:"sit",z:"बैठना",k:"irr",ps:"sat",pp:"sat",dbl:1},
 {i:"begin",z:"शुरू करना",k:"irr",ps:"began",pp:"begun",dbl:1},
 {i:"bring",z:"लाना",k:"irr",ps:"brought",pp:"brought"},
 {i:"send",z:"भेजना",k:"irr",ps:"sent",pp:"sent"},
 {i:"spend",z:"ख़र्च करना; (समय) बिताना",k:"irr",ps:"spent",pp:"spent"},
 {i:"lose",z:"खोना, हारना",k:"irr",ps:"lost",pp:"lost"},
 {i:"win",z:"जीतना",k:"irr",ps:"won",pp:"won",dbl:1},
 {i:"wear",z:"पहनना",k:"irr",ps:"wore",pp:"worn"},
 {i:"choose",z:"चुनना",k:"irr",ps:"chose",pp:"chosen"},
 {i:"fly",z:"उड़ना, हवाई जहाज़ से जाना",k:"irr",ps:"flew",pp:"flown"},
 {i:"drive",z:"गाड़ी चलाना",k:"irr",ps:"drove",pp:"driven"},
 {i:"ride",z:"सवारी करना (साइकिल, बाइक)",k:"irr",ps:"rode",pp:"ridden"},
 {i:"fall",z:"गिरना",k:"irr",ps:"fell",pp:"fallen"},
 {i:"break",z:"तोड़ना",k:"irr",ps:"broke",pp:"broken"},
 {i:"forget",z:"भूलना",k:"irr",ps:"forgot",pp:"forgotten",dbl:1},
 {i:"understand",stv:1,z:"समझना",k:"irr",ps:"understood",pp:"understood"},
 {i:"teach",z:"पढ़ाना, सिखाना",k:"irr",ps:"taught",pp:"taught"},
 {i:"sell",z:"बेचना",k:"irr",ps:"sold",pp:"sold"},
 {i:"hear",stv:1,z:"सुनना (सुनाई देना)",k:"irr",ps:"heard",pp:"heard"},
 {i:"become",z:"बनना",k:"irr",ps:"became",pp:"become"},
 {i:"grow",z:"बढ़ना, उगाना",k:"irr",ps:"grew",pp:"grown"},
 {i:"keep",z:"रखना, जारी रखना",k:"irr",ps:"kept",pp:"kept"},
 {i:"stand",z:"खड़े होना",k:"irr",ps:"stood",pp:"stood"},
 {i:"wake",z:"जागना",k:"irr",ps:"woke",pp:"woken"},
 {i:"sing",z:"गाना",k:"irr",ps:"sang",pp:"sung"},
 {i:"cut",z:"काटना",k:"irr",ps:"cut",pp:"cut",dbl:1},
 {i:"hurt",z:"दर्द होना, चोट पहुँचाना",k:"irr",ps:"hurt",pp:"hurt"},
 {i:"work",z:"काम करना; चलना (मशीन)"},{i:"live",z:"रहना, जीना"},{i:"like",stv:1,z:"पसंद करना"},{i:"love",stv:1,z:"प्यार करना, बहुत पसंद करना"},
 {i:"play",z:"खेलना; बजाना"},{i:"watch",z:"देखना (टीवी, मैच)"},{i:"listen",z:"सुनना (ध्यान से)"},{i:"study",z:"पढ़ाई करना"},
 {i:"want",stv:1,z:"चाहना"},{i:"need",stv:1,z:"ज़रूरत होना"},{i:"help",z:"मदद करना"},{i:"start",z:"शुरू करना"},{i:"finish",z:"ख़त्म करना"},
 {i:"open",z:"खोलना"},{i:"close",z:"बंद करना"},{i:"cook",z:"खाना पकाना"},{i:"clean",z:"साफ़ करना"},{i:"wash",z:"धोना"},
 {i:"walk",z:"पैदल चलना"},{i:"travel",z:"यात्रा करना",dblUK:1},{i:"visit",z:"घूमना, मिलने जाना"},{i:"stay",z:"रुकना, ठहरना"},
 {i:"arrive",z:"पहुँचना"},{i:"call",z:"बुलाना, फ़ोन करना"},{i:"ask",z:"पूछना"},{i:"answer",z:"जवाब देना"},
 {i:"try",z:"कोशिश करना"},{i:"carry",z:"उठाकर ले जाना"},{i:"stop",z:"रुकना, रोकना",dbl:1},{i:"plan",z:"योजना बनाना",dbl:1},
 {i:"look",z:"देखना; लगना"},{i:"wait",z:"इंतज़ार करना"},{i:"use",z:"इस्तेमाल करना"},{i:"move",z:"हिलाना; घर बदलना"},
 {i:"dance",z:"नाचना"},{i:"change",z:"बदलना"},{i:"rain",z:"बारिश होना"},{i:"enjoy",z:"मज़ा लेना"},{i:"hope",z:"आशा करना"},{i:"remember",stv:1,z:"याद रखना, याद आना"}
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
  if(!DICT[v.i])CONJ_IDX[v.i]=z+" (मूल रूप)";
  if(v.pr)v.pr.forEach(function(x,i){add(x,PZ[i]+" · present simple")});else add(s3(v),"he / she / it · present simple");
  add(ingOf(v),"-ing रूप");
  if(v.i==="be"){add("was","I / he / she / it · past simple");add("were","you / we / they · past simple")}else add(psOf(v),"past simple");
  add(ppOf(v),"past participle")});

/* ---------- alphabet and numbers: [letter, how a learner reads its name, what the voice says] ---------- */
var ALF=[["A","ए","A."],["B","बी","B."],["C","सी","C."],["D","डी","D."],["E","ई","E."],["F","एफ़","F."],["G","जी","G."],["H","एच","H."],["I","आई","I."],["J","जे","J."],["K","के","K."],["L","एल","L."],["M","एम","M."],
  ["N","एन","N."],["O","ओ","O."],["P","पी","P."],["Q","क्यू","Q."],["R","आर","R."],["S","एस","S."],["T","टी","T."],["U","यू","U."],["V","वी","V."],["W","डबल्यू","W."],["X","एक्स","X."],["Y","वाई","Y."],["Z","ज़ेड","Z."]];
var NUM=[["0","zero"],["1","one"],["2","two"],["3","three"],["4","four"],["5","five"],["6","six"],["7","seven"],["8","eight"],["9","nine"],["10","ten"],["11","eleven"],["12","twelve"],["13","thirteen"],["14","fourteen"],["15","fifteen"],["16","sixteen"],["17","seventeen"],["18","eighteen"],["19","nineteen"],["20","twenty"],
  ["21","twenty-one"],["22","twenty-two"],["30","thirty"],["40","forty"],["50","fifty"],["60","sixty"],["70","seventy"],["80","eighty"],["90","ninety"],["99","ninety-nine"],["100","a hundred"],["101","a hundred and one"],["250","two hundred and fifty"],["1000","a thousand"],["2000","two thousand"],["1000000","a million"]];

/* ---------- vocabulary: English nouns have no grammatical gender ---------- */
function art(w,g){return ""}
function gOf(g){return ""}
function wordHTML(r){return esc(r[0])}
function gLabel(g){return ""}
