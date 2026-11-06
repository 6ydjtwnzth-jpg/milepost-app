/* ---------- Spanish for Italians: the rules of the language used by the engine (app.js, path.js) ----------
   Spanish from Spain (vosotros, pretérito perfecto for today), as in the DELE exams of the Instituto Cervantes. */
var KEY="spagnolo-per-italiani-v1";
var LANG={code:"es",name:"spagnolo",Name:"Spagnolo",tts:"es-ES",ttsBest:/^es[-_]es/i,ttsAny:/^es/i,
  voiceNote:"Kokoro, voci «Dora» e «Alex»",
  acc:["á","é","í","ó","ú","ñ","ü","¿","¡"],nearMsg:"Attenzione agli accenti.",caseMatters:false,genders:true,dlg:"Diálogo",hello:"¡Hola!",
  groups:["irr","ar","er","ir","pro"],streak:"días seguidos",cmp:["Spagna","España"],
  stepn:{rec:["Parole di prima","Palabras de antes","i-loop"],dlg:["Dialogo","Diálogo","i-ear"],voc:["Parole","Vocabulario","i-cards"],rule:["Grammatica","Gramática","i-bulb"],rev:["Ripasso","Repaso","i-loop"],snd:["Pronuncia","Pronunciación","i-wave"],cult:["Cultura","Cultura","i-moka"],test:["Verifica","Prueba","i-check"]},
  cjNote:function(v,t){if(t==="pf")return " Ausiliare: haber (sempre); participio: "+ppOf(v)+".";if(t==="pr"&&v.st)return " Cambia la vocale della radice ("+v.st+") con yo, tú, él ed ellos; nosotros e vosotros restano regolari.";if(t==="ge"&&v.nog)return " Con «"+v.i+"» estar + gerundio non si usa (o quasi mai): si dice "+prForms(v)[0].p+", non estoy "+gerOf(v)+".";if(t==="ge")return " Gerundio: "+gerOf(v)+".";return ""}};

/* ---------- meanings of tapped words ---------- */
function norm(w){return w.toLowerCase().replace(/[’]/g,"'")}
function look(x){return DICT[x]||DICT[x.toLowerCase()]||CONJ_IDX[x.toLowerCase()]||""}
function noTilde(s){return s.normalize("NFD").replace(/[́]/g,"").normalize("NFC")}
function meaning(w){var k=norm(w);if(look(w))return look(w);
  if(k.indexOf("-")>0){var ps=k.split("-").filter(Boolean),ms=ps.map(function(x){return look(x)||formMeaning(x)});
    if(ms.every(Boolean))return ps.map(function(x,j){return x+" ("+ms[j]+")"}).join(" + ")}
  return formMeaning(k)}
var CLIT={me:"mi",te:"ti",se:"si",lo:"lo",la:"la",le:"gli, le",nos:"ci",os:"vi",los:"li",las:"le",les:"gli, loro"};
/* forms of known words: plural, feminine, verb + attached pronouns (llámame, levantarse, dímelo) */
function formMeaning(k){var c,m;
  function f(base,lab){return look(base)?lab+" di «"+base+"» ("+look(base)+")":""}
  if(k.length>3&&/ces$/.test(k)&&(c=f(k.slice(0,-3)+"z","plurale")))return c;
  if(k.length>3&&/es$/.test(k)&&(c=f(k.slice(0,-2),"plurale")||f(noTilde(k.slice(0,-2)),"plurale")))return c;
  if(k.length>2&&/s$/.test(k)&&(c=f(k.slice(0,-1),"plurale")))return c;
  var FEM=[["as","os","femminile plurale"],["a","o","femminile"],["ora","or","femminile"],["oras","or","femminile plurale"],["esa","és","femminile"],["esas","és","femminile plurale"],["ana","án","femminile"],["ona","ón","femminile"]];
  for(var j=0;j<FEM.length;j++){var e=FEM[j];if(k.length>e[0].length+1&&k.slice(-e[0].length)===e[0]&&(c=f(k.slice(0,-e[0].length)+e[1],e[2])))return c}
  /* attached pronouns, one or two */
  var mm=k.match(/^(.+?)(me|te|se|nos|os|lo|la|los|las|le|les)(me|te|se|nos|os|lo|la|los|las|le|les)?$/);
  if(mm){var base=mm[1],b2=noTilde(base),mv=look(base)||look(b2);
    if(!mv&&/r$/.test(b2)===false&&look(b2+"r"))mv="";
    if(mv)return "«"+b2+"» ("+mv+") + "+[mm[2],mm[3]].filter(Boolean).map(function(p){return p+" ("+CLIT[p]+")"}).join(" + ")}
  return ""}

/* ---------- verbs ----------
   g: ar / er / ir; st: stem change in the present (e>ie, o>ue, u>ue, e>i); pr/in/fu: irregular forms or stems;
   nog: no estar + gerundio (estar, saber, querer…: «estoy sabiendo» is not Spanish). */
var PZ=["yo","tú","él / ella / usted","nosotros / nosotras","vosotros / vosotras","ellos / ellas / ustedes"],PS=["yo","tú","él","nosotros","vosotros","ellos"],RF=["me","te","se","nos","os","se"];
var PIT=["io","tu","lui / lei / Lei","noi","voi","loro / Loro"];
var GRP={irr:"I verbi irregolari più usati",ar:"Verbi in -ar",er:"Verbi in -er",ir:"Verbi in -ir",pro:"Verbi riflessivi"};
var TN={pr:"presente",ge:"estar + gerundio",pf:"pretérito perfecto",in:"pretérito indefinido",im:"imperfecto",fu:"futuro",co:"condicional"};
var TIP={pr:"Presente: quello che fai di solito o adesso. Come in italiano, il soggetto di solito non si dice: hablo = parlo.",
  ge:"Estar + gerundio: un'azione in corso adesso, come «sto facendo».",
  pf:"Pretérito perfecto: fatti passati in un periodo che non è finito (hoy, esta semana, este año) ed esperienze. Haber + participio.",
  in:"Pretérito indefinido: fatti finiti in un momento chiuso del passato (ayer, el año pasado, en 2019), come il passato remoto, ma molto più usato.",
  im:"Imperfecto: abitudini e descrizioni nel passato, come l'imperfetto italiano.",
  fu:"Futuro: progetti e previsioni. Nel parlato si usa molto anche ir a + infinito (voy a viajar).",
  co:"Condicional: desideri e richieste gentili (me gustaría, ¿podría…?), consigli (deberías)."};
var END={pr:{ar:["o","as","a","amos","áis","an"],er:["o","es","e","emos","éis","en"],ir:["o","es","e","imos","ís","en"]},
  in:{ar:["é","aste","ó","amos","asteis","aron"],er:["í","iste","ió","imos","isteis","ieron"],ir:["í","iste","ió","imos","isteis","ieron"]},
  im:{ar:["aba","abas","aba","ábamos","abais","aban"],er:["ía","ías","ía","íamos","íais","ían"],ir:["ía","ías","ía","íamos","íais","ían"]}};
var FUT=["é","ás","á","emos","éis","án"],CON=["ía","ías","ía","íamos","íais","ían"],HAB=["he","has","ha","hemos","habéis","han"],EST=["estoy","estás","está","estamos","estáis","están"];
var VERBS=[
 {i:"ser",nog:1,z:"essere",g:"er",k:"irr",pr:["soy","eres","es","somos","sois","son"],in:["fui","fuiste","fue","fuimos","fuisteis","fueron"],im:["era","eras","era","éramos","erais","eran"],pp:"sido",ger:"siendo"},
 {i:"estar",nog:1,z:"essere, stare (stati, luoghi)",g:"ar",k:"irr",pr:["estoy","estás","está","estamos","estáis","están"],in:["estuve","estuviste","estuvo","estuvimos","estuvisteis","estuvieron"]},
 {i:"ir",z:"andare",g:"ir",k:"irr",pr:["voy","vas","va","vamos","vais","van"],in:["fui","fuiste","fue","fuimos","fuisteis","fueron"],im:["iba","ibas","iba","íbamos","ibais","iban"],ger:"yendo"},
 {i:"tener",z:"avere",g:"er",k:"irr",pr:["tengo","tienes","tiene","tenemos","tenéis","tienen"],in:["tuve","tuviste","tuvo","tuvimos","tuvisteis","tuvieron"],fu:"tendr"},
 {i:"hacer",z:"fare",g:"er",k:"irr",pr:["hago","haces","hace","hacemos","hacéis","hacen"],in:["hice","hiciste","hizo","hicimos","hicisteis","hicieron"],fu:"har",pp:"hecho"},
 {i:"poder",nog:1,z:"potere",g:"er",k:"irr",st:"o → ue",pr:["puedo","puedes","puede","podemos","podéis","pueden"],in:["pude","pudiste","pudo","pudimos","pudisteis","pudieron"],fu:"podr",ger:"pudiendo"},
 {i:"querer",nog:1,z:"volere; voler bene",g:"er",k:"irr",st:"e → ie",pr:["quiero","quieres","quiere","queremos","queréis","quieren"],in:["quise","quisiste","quiso","quisimos","quisisteis","quisieron"],fu:"querr"},
 {i:"decir",z:"dire",g:"ir",k:"irr",pr:["digo","dices","dice","decimos","decís","dicen"],in:["dije","dijiste","dijo","dijimos","dijisteis","dijeron"],fu:"dir",pp:"dicho",ger:"diciendo"},
 {i:"venir",z:"venire",g:"ir",k:"irr",pr:["vengo","vienes","viene","venimos","venís","vienen"],in:["vine","viniste","vino","vinimos","vinisteis","vinieron"],fu:"vendr",ger:"viniendo"},
 {i:"saber",nog:1,z:"sapere",g:"er",k:"irr",pr:["sé","sabes","sabe","sabemos","sabéis","saben"],in:["supe","supiste","supo","supimos","supisteis","supieron"],fu:"sabr"},
 {i:"poner",z:"mettere",g:"er",k:"irr",pr:["pongo","pones","pone","ponemos","ponéis","ponen"],in:["puse","pusiste","puso","pusimos","pusisteis","pusieron"],fu:"pondr",pp:"puesto"},
 {i:"salir",z:"uscire, partire",g:"ir",k:"irr",pr:["salgo","sales","sale","salimos","salís","salen"],fu:"saldr"},
 {i:"ver",z:"vedere",g:"er",k:"irr",pr:["veo","ves","ve","vemos","veis","ven"],in:["vi","viste","vio","vimos","visteis","vieron"],im:["veía","veías","veía","veíamos","veíais","veían"],pp:"visto"},
 {i:"dar",z:"dare",g:"ar",k:"irr",pr:["doy","das","da","damos","dais","dan"],in:["di","diste","dio","dimos","disteis","dieron"]},
 {i:"traer",z:"portare (qui)",g:"er",k:"irr",pr:["traigo","traes","trae","traemos","traéis","traen"],in:["traje","trajiste","trajo","trajimos","trajisteis","trajeron"],ger:"trayendo",pp:"traído"},
 {i:"conocer",z:"conoscere",g:"er",k:"irr",pr:["conozco","conoces","conoce","conocemos","conocéis","conocen"]},
 {i:"oír",b:"oir",z:"sentire, udire",g:"ir",k:"irr",pr:["oigo","oyes","oye","oímos","oís","oyen"],in:["oí","oíste","oyó","oímos","oísteis","oyeron"],im:["oía","oías","oía","oíamos","oíais","oían"],fu:"oir",ger:"oyendo",pp:"oído"},
 {i:"leer",z:"leggere",g:"er",ch:1,in:["leí","leíste","leyó","leímos","leísteis","leyeron"],ger:"leyendo",pp:"leído"},
 {i:"dormir",z:"dormire",g:"ir",st:"o → ue",in3:"durm",ger:"durmiendo"},
 {i:"pedir",z:"chiedere (per avere), ordinare",g:"ir",st:"e → i",in3:"pid",ger:"pidiendo"},
 {i:"jugar",z:"giocare",g:"ar",st:"u → ue",in1:"jugué"},
 {i:"empezar",z:"cominciare",g:"ar",st:"e → ie",in1:"empecé"},
 {i:"volver",z:"tornare",g:"er",st:"o → ue",pp:"vuelto"},
 {i:"preferir",nog:1,z:"preferire",g:"ir",st:"e → ie",in3:"prefir",ger:"prefiriendo"},
 {i:"pensar",z:"pensare",g:"ar",st:"e → ie"},
 {i:"entender",z:"capire",g:"er",st:"e → ie"},
 {i:"cerrar",z:"chiudere",g:"ar",st:"e → ie"},
 {i:"encontrar",z:"trovare",g:"ar",st:"o → ue"},
 {i:"costar",z:"costare",g:"ar",st:"o → ue"},
 {i:"hablar",z:"parlare",g:"ar"},{i:"trabajar",z:"lavorare",g:"ar"},{i:"estudiar",z:"studiare",g:"ar"},{i:"comprar",z:"comprare",g:"ar"},{i:"escuchar",z:"ascoltare",g:"ar"},
 {i:"mirar",z:"guardare",g:"ar"},{i:"tomar",z:"prendere (cibo, bevande, mezzi)",g:"ar"},{i:"cenar",z:"cenare",g:"ar"},{i:"desayunar",z:"fare colazione",g:"ar"},{i:"viajar",z:"viaggiare",g:"ar"},
 {i:"visitar",z:"visitare",g:"ar"},{i:"cocinar",z:"cucinare",g:"ar"},{i:"bailar",z:"ballare",g:"ar"},{i:"cantar",z:"cantare",g:"ar"},{i:"nadar",z:"nuotare",g:"ar"},
 {i:"llegar",z:"arrivare",g:"ar",in1:"llegué"},{i:"pagar",z:"pagare",g:"ar",in1:"pagué"},{i:"buscar",z:"cercare",g:"ar",in1:"busqué"},{i:"tocar",z:"suonare (uno strumento); toccare",g:"ar",in1:"toqué"},
 {i:"llevar",z:"portare (via); indossare",g:"ar"},{i:"necesitar",nog:1,z:"avere bisogno di",g:"ar"},{i:"ayudar",z:"aiutare",g:"ar"},{i:"terminar",z:"finire",g:"ar"},{i:"preguntar",z:"domandare",g:"ar"},
 {i:"contestar",z:"rispondere",g:"ar"},{i:"esperar",z:"aspettare; sperare",g:"ar"},{i:"llamar",z:"chiamare, telefonare",g:"ar"},{i:"alquilar",z:"affittare, noleggiare",g:"ar"},{i:"quedar",z:"vedersi, darsi appuntamento; restare",g:"ar"},
 {i:"comer",z:"mangiare",g:"er"},{i:"beber",z:"bere",g:"er"},{i:"aprender",z:"imparare",g:"er"},{i:"comprender",z:"capire",g:"er"},{i:"correr",z:"correre",g:"er"},{i:"vender",z:"vendere",g:"er"},
 {i:"vivir",z:"vivere, abitare",g:"ir"},{i:"escribir",z:"scrivere",g:"ir",pp:"escrito"},{i:"abrir",z:"aprire",g:"ir",pp:"abierto"},{i:"subir",z:"salire",g:"ir"},{i:"recibir",z:"ricevere",g:"ir"},{i:"decidir",z:"decidere",g:"ir"},
 {i:"levantarse",b:"levantar",z:"alzarsi",g:"ar",k:"pro"},{i:"llamarse",b:"llamar",z:"chiamarsi",g:"ar",k:"pro"},{i:"ducharse",b:"duchar",z:"fare la doccia",g:"ar",k:"pro"},
 {i:"acostarse",b:"acostar",z:"andare a letto",g:"ar",k:"pro",st:"o → ue"},{i:"despertarse",b:"despertar",z:"svegliarsi",g:"ar",k:"pro",st:"e → ie"},{i:"vestirse",b:"vestir",z:"vestirsi",g:"ir",k:"pro",st:"e → i",in3:"vist",ger:"vistiendo"}
];
function vbase(v){return v.b||v.i}
function vstem(v){return vbase(v).slice(0,-2)}
/* stem change of the present (only yo, tú, él, ellos): quiero, puedo, juego, pido */
function stStem(v,i){var s=vstem(v);if(!v.st||i===3||i===4)return s;var fr=v.st.split(" → ");
  var at=s.lastIndexOf(fr[0]);return at<0?s:s.slice(0,at)+fr[1]+s.slice(at+fr[0].length)}
function F(h,p){return {h:h,p:p}}
function hl(b,x){var n=0;while(n<b.length&&n<x.length&&b[n]===x[n])n++;return n===x.length?esc(x):esc(x.slice(0,n))+'<b class="end">'+esc(x.slice(n))+'</b>'}
function prForms(v){if(v.pr)return v.pr.map(function(x){return F('<b class="end">'+esc(x)+'</b>',x)});
  return END.pr[v.g].map(function(x,i){var st=stStem(v,i);return F(esc(st)+'<b class="end">'+x+'</b>',st+x)})}
function inForms(v){if(v.in)return v.in.map(function(x){return F('<b class="end">'+esc(x)+'</b>',x)});var s=vstem(v);
  return END.in[v.g].map(function(x,i){var p=s+x;if(i===0&&v.in1)p=v.in1;if((i===2||i===5)&&v.in3)p=v.in3+x;return F(hl(vbase(v),p),p)})}
function imForms(v){if(v.im)return v.im.map(function(x){return F('<b class="end">'+esc(x)+'</b>',x)});var s=vstem(v);
  return END.im[v.g].map(function(x){return F(esc(s)+'<b class="end">'+x+'</b>',s+x)})}
function futStem(v){return v.fu||vbase(v)}
function fuForms(v,ends){var s=futStem(v);return (ends||FUT).map(function(x){return F(esc(s)+'<b class="end">'+x+'</b>',s+x)})}
function ppOf(v){return v.pp||vstem(v)+(v.g==="ar"?"ado":"ido")}
function gerOf(v){return v.ger||vstem(v)+(v.g==="ar"?"ando":"iendo")}
function cjForms(v,t){if(t==="pr")return prForms(v);if(t==="in")return inForms(v);if(t==="im")return imForms(v);if(t==="fu")return fuForms(v);if(t==="co")return fuForms(v,CON);
  if(t==="ge"){if(v.nog)return [];var g=gerOf(v);return EST.map(function(a){return F('<span class="cj-aux">'+a+'</span> <b class="end">'+esc(g)+'</b>',a+" "+g)})}
  var pp=ppOf(v);return HAB.map(function(a){return F('<span class="cj-aux">'+a+'</span> <b class="end">'+esc(pp)+'</b>',a+" "+pp)})}
/* pronoun + form; reflexive verbs put me / te / se… in front: yo me levanto, yo me he levantado, yo me estoy levantando */
function withPron(i,v,f){return PS[i]+" "+(v.k==="pro"?RF[i]+" ":"")+f}
function cjSay(v,t,i,f){return withPron(i,v,f.p)}
var CONJ_IDX={};
VERBS.forEach(function(v){var z=v.z;
  ["pr","in","im","fu","co"].forEach(function(t){cjForms(v,t).forEach(function(f,i){var k=f.p.toLowerCase();if(!CONJ_IDX[k])CONJ_IDX[k]=z+" ("+v.i+") · "+PZ[i]+" · "+TN[t]})});
  if(!DICT[vbase(v)]&&!CONJ_IDX[vbase(v)])CONJ_IDX[vbase(v)]=z+" (infinito)";
  if(!CONJ_IDX[ppOf(v)])CONJ_IDX[ppOf(v)]="participio di «"+v.i+"» ("+z+")";
  if(!CONJ_IDX[gerOf(v)])CONJ_IDX[gerOf(v)]="gerundio di «"+v.i+"» ("+z+")"});

/* ---------- alphabet and numbers: [letter, name, what the voice says] ---------- */
var ALF=[["A","a","a"],["B","be","be"],["C","ce","ce"],["D","de","de"],["E","e","e"],["F","efe","efe"],["G","ge","ge"],["H","hache","hache"],["I","i","i"],["J","jota","jota"],["K","ka","ka"],["L","ele","ele"],["M","eme","eme"],["N","ene","ene"],
  ["Ñ","eñe","eñe"],["O","o","o"],["P","pe","pe"],["Q","cu","cu"],["R","erre","erre"],["S","ese","ese"],["T","te","te"],["U","u","u"],["V","uve","uve"],["W","uve doble","uve doble"],["X","equis","equis"],["Y","ye","ye"],["Z","zeta","zeta"]];
var NUM=[["0","cero"],["1","uno"],["2","dos"],["3","tres"],["4","cuatro"],["5","cinco"],["6","seis"],["7","siete"],["8","ocho"],["9","nueve"],["10","diez"],["11","once"],["12","doce"],["13","trece"],["14","catorce"],["15","quince"],["16","dieciséis"],["17","diecisiete"],["18","dieciocho"],["19","diecinueve"],["20","veinte"],
  ["21","veintiuno"],["22","veintidós"],["30","treinta"],["31","treinta y uno"],["40","cuarenta"],["50","cincuenta"],["60","sesenta"],["70","setenta"],["80","ochenta"],["90","noventa"],["99","noventa y nueve"],["100","cien"],["101","ciento uno"],["200","doscientos"],["500","quinientos"],["1000","mil"],["2000","dos mil"]];

/* ---------- vocabulary: gender m, f, mp / fp (plural only). Feminine nouns starting with a stressed a- take «el»: el agua ---------- */
var EL_F=/^(agua|aula|águila|área|alma|arma|hambre|hacha|ala|haba)$/i;
function art(w,g){if(g==="mp")return "los ";if(g==="fp")return "las ";if(g==="m")return "el ";if(g==="f")return EL_F.test(w)?"el ":"la ";return ""}
function gOf(g){return g?g.charAt(0):""}
function wordHTML(r){var g=gOf(r[2]),a=art(r[0],r[2]);return g?'<span class="'+g+'"><span class="art">'+a+'</span>'+esc(r[0])+'</span>':esc(r[0])}
function gLabel(g){return {m:"maschile",f:"femminile",mp:"maschile plurale",fp:"femminile plurale"}[g]||""}
