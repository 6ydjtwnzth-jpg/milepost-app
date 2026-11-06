/* ---------- German for Italians: the rules of the language used by the engine (app.js, path.js) ----------
   Standard German of Germany, as in the Goethe-Zertifikat exams. Nouns keep their capital letter (LANG.caseMatters). */
var KEY="tedesco-per-italiani-v1";
var LANG={code:"de",name:"tedesco",Name:"Tedesco",tts:"de-DE",ttsBest:/^de[-_]de/i,ttsAny:/^de/i,
  voiceNote:"Piper, voci «Thorsten» ed «Eva»",
  acc:["ä","ö","ü","ß","Ä","Ö","Ü"],nearMsg:"Attenzione alle maiuscole e alle dieresi (ä, ö, ü).",caseMatters:true,genders:true,dlg:"Dialog",hello:"Hallo!",
  groups:["irr","mod","reg","sep","pro"],streak:"Tage in Folge",cmp:["Germania","Deutschland"],
  stepn:{rec:["Parole di prima","Wörter von vorher","i-loop"],dlg:["Dialogo","Dialog","i-ear"],voc:["Parole","Wortschatz","i-cards"],rule:["Grammatica","Grammatik","i-bulb"],rev:["Ripasso","Wiederholung","i-loop"],snd:["Pronuncia","Aussprache","i-wave"],cult:["Cultura","Kultur","i-moka"],test:["Verifica","Test","i-check"]},
  cjNote:function(v,t){if(t==="pf")return " Ausiliare: "+(v.aux==="sein"?"sein":"haben")+"; participio: "+ppOf(v)+".";
    if(t==="pr"&&v.sep)return " Verbo separabile: il prefisso «"+v.sep+"» va in fondo alla frase (ich "+prForms(v)[0].p+" … ).";
    if(t==="pr"&&v.vc)return " Cambia la vocale con du ed er / sie / es: "+prForms(v)[1].p+", "+prForms(v)[2].p+".";return ""}};

/* ---------- meanings of tapped words ---------- */
function norm(w){return w.replace(/[’]/g,"'")}
function look(x){return DICT[x]||DICT[x.toLowerCase()]||DICT[x.charAt(0).toUpperCase()+x.slice(1)]||CONJ_IDX[x.toLowerCase()]||PL_IDX[x]||""}
function meaning(w){var k=norm(w);if(look(k))return look(k);
  if(k.indexOf("-")>0){var ps=k.split("-").filter(Boolean),ms=ps.map(function(x){return look(x)||formMeaning(x)});
    if(ms.every(Boolean))return ps.map(function(x,j){return x+" ("+ms[j]+")"}).join(" + ")}
  return formMeaning(k)}
/* forms of known words: adjective endings (schöne, schönen…), comparatives (größer, am größten), genitive -s */
function formMeaning(k){var c,lo=k.toLowerCase();
  function f(base,lab){var m=look(base);return m?lab+" di «"+base+"» ("+m+")":""}
  var END=[["sten","superlativo"],["ste","superlativo"],["er","forma"],["es","forma"],["en","forma"],["em","forma"],["e","forma"]];
  for(var j=0;j<END.length;j++){var e=END[j][0];if(lo.length>e.length+2&&lo.slice(-e.length)===e){var b=lo.slice(0,-e.length);
    if(e==="er"||e==="sten"||e==="ste"){var u=b.replace(/ä(?=[^aeiouäöü]*$)/,"a").replace(/ö(?=[^aeiouäöü]*$)/,"o").replace(/ü(?=[^aeiouäöü]*$)/,"u");
      if(e==="er"){if(u!==b&&(c=f(u,"comparativo")))return c;if((c=f(b,"forma declinata o comparativo")))return c}
      else if((c=f(b,"superlativo"))||(c=f(u,"superlativo")))return c}
    if((c=f(b,"forma declinata")))return c}}
  if(/s$/.test(k)&&k.length>3&&(c=f(k.slice(0,-1),"genitivo")))return c;
  return ""}

/* ---------- verbs ----------
   k: irr (strong / irregular), mod (modal), reg (regular), sep (separable), pro (reflexive);
   pr: present forms when irregular; vc: vowel change with du / er (fahren → fährst); pt: stem of the Präteritum (fuhr);
   pp: Partizip II when irregular; aux: "sein" for the Perfekt with sein; sep: separable prefix (an + rufen). */
var PZ=["ich","du","er / sie / es","wir","ihr","sie / Sie"],PS=["ich","du","er","wir","ihr","sie"],RF=["mich","dich","sich","uns","euch","sich"];
var PIT=["io","tu","lui / lei","noi","voi","loro / Lei"];
var GRP={irr:"I verbi irregolari più usati",mod:"I verbi modali",reg:"Verbi regolari",sep:"Verbi separabili",pro:"Verbi riflessivi"};
var TN={pr:"Präsens",pf:"Perfekt",pt:"Präteritum",fu:"Futur I",k2:"Konjunktiv II"};
var TIP={pr:"Präsens: quello che fai di solito, adesso e spesso anche nel futuro (Morgen fahre ich nach Berlin). Il verbo coniugato è sempre al secondo posto.",
  pf:"Perfekt: il passato del parlato, come il passato prossimo. haben o sein + participio, che va in fondo alla frase.",
  pt:"Präteritum: il passato dei racconti scritti. Nel parlato si usa soprattutto con sein, haben e i modali (war, hatte, konnte).",
  fu:"Futur I: werden + infinito in fondo. Per i progetti si usa spesso anche il presente con un'indicazione di tempo.",
  k2:"Konjunktiv II: desideri, richieste gentili e consigli (ich hätte gern, könnten Sie…?, du solltest). Per gli altri verbi: würde + infinito."};
var VERBS=[
 {i:"sein",z:"essere",k:"irr",aux:"sein",pr:["bin","bist","ist","sind","seid","sind"],pts:["war","warst","war","waren","wart","waren"],pp:"gewesen",k2s:["wäre","wärst","wäre","wären","wärt","wären"]},
 {i:"haben",z:"avere",k:"irr",pr:["habe","hast","hat","haben","habt","haben"],pt:"hatte",ptw:1,pp:"gehabt",k2s:["hätte","hättest","hätte","hätten","hättet","hätten"]},
 {i:"werden",z:"diventare",k:"irr",aux:"sein",pr:["werde","wirst","wird","werden","werdet","werden"],pts:["wurde","wurdest","wurde","wurden","wurdet","wurden"],pp:"geworden",k2s:["würde","würdest","würde","würden","würdet","würden"]},
 {i:"können",z:"potere, sapere (fare)",k:"mod",pr:["kann","kannst","kann","können","könnt","können"],pt:"konnte",ptw:1,pp:"gekonnt",k2:"könnte"},
 {i:"müssen",z:"dovere",k:"mod",pr:["muss","musst","muss","müssen","müsst","müssen"],pt:"musste",ptw:1,pp:"gemusst",k2:"müsste"},
 {i:"wollen",z:"volere",k:"mod",pr:["will","willst","will","wollen","wollt","wollen"],pt:"wollte",ptw:1,pp:"gewollt",k2:"wollte"},
 {i:"dürfen",z:"potere (avere il permesso)",k:"mod",pr:["darf","darfst","darf","dürfen","dürft","dürfen"],pt:"durfte",ptw:1,pp:"gedurft",k2:"dürfte"},
 {i:"sollen",z:"dovere (consiglio, incarico)",k:"mod",pr:["soll","sollst","soll","sollen","sollt","sollen"],pt:"sollte",ptw:1,pp:"gesollt",k2:"sollte"},
 {i:"mögen",z:"piacere; möchten = vorrei",k:"mod",pr:["mag","magst","mag","mögen","mögt","mögen"],pt:"mochte",ptw:1,pp:"gemocht",k2:"möchte"},
 {i:"wissen",z:"sapere",k:"irr",pr:["weiß","weißt","weiß","wissen","wisst","wissen"],pt:"wusste",ptw:1,pp:"gewusst",k2:"wüsste"},
 {i:"gehen",z:"andare (a piedi)",k:"irr",aux:"sein",pt:"ging",pp:"gegangen"},
 {i:"kommen",z:"venire",k:"irr",aux:"sein",pt:"kam",pp:"gekommen"},
 {i:"fahren",z:"andare (con un mezzo), guidare",k:"irr",aux:"sein",vc:"äh",pt:"fuhr",pp:"gefahren"},
 {i:"essen",z:"mangiare",k:"irr",pr:["esse","isst","isst","essen","esst","essen"],pt:"aß",pp:"gegessen"},
 {i:"trinken",z:"bere",k:"irr",pt:"trank",pp:"getrunken"},
 {i:"sprechen",z:"parlare",k:"irr",pr:["spreche","sprichst","spricht","sprechen","sprecht","sprechen"],pt:"sprach",pp:"gesprochen"},
 {i:"sehen",z:"vedere",k:"irr",pr:["sehe","siehst","sieht","sehen","seht","sehen"],pt:"sah",pp:"gesehen"},
 {i:"lesen",z:"leggere",k:"irr",pr:["lese","liest","liest","lesen","lest","lesen"],pt:"las",pp:"gelesen"},
 {i:"nehmen",z:"prendere",k:"irr",pr:["nehme","nimmst","nimmt","nehmen","nehmt","nehmen"],pt:"nahm",pp:"genommen"},
 {i:"geben",z:"dare",k:"irr",pr:["gebe","gibst","gibt","geben","gebt","geben"],pt:"gab",pp:"gegeben"},
 {i:"schlafen",z:"dormire",k:"irr",pr:["schlafe","schläfst","schläft","schlafen","schlaft","schlafen"],pt:"schlief",pp:"geschlafen"},
 {i:"laufen",z:"correre; camminare",k:"irr",aux:"sein",pr:["laufe","läufst","läuft","laufen","lauft","laufen"],pt:"lief",pp:"gelaufen"},
 {i:"treffen",z:"incontrare",k:"irr",pr:["treffe","triffst","trifft","treffen","trefft","treffen"],pt:"traf",pp:"getroffen"},
 {i:"helfen",z:"aiutare",k:"irr",pr:["helfe","hilfst","hilft","helfen","helft","helfen"],pt:"half",pp:"geholfen"},
 {i:"finden",z:"trovare",k:"irr",pr:["finde","findest","findet","finden","findet","finden"],pt:"fand",pp:"gefunden"},
 {i:"schreiben",z:"scrivere",k:"irr",pt:"schrieb",pp:"geschrieben"},
 {i:"bleiben",z:"restare",k:"irr",aux:"sein",pt:"blieb",pp:"geblieben"},
 {i:"fliegen",z:"volare, andare in aereo",k:"irr",aux:"sein",pt:"flog",pp:"geflogen"},
 {i:"heißen",z:"chiamarsi",k:"irr",pr:["heiße","heißt","heißt","heißen","heißt","heißen"],pt:"hieß",pp:"geheißen"},
 {i:"tragen",z:"portare, indossare",k:"irr",pr:["trage","trägst","trägt","tragen","tragt","tragen"],pt:"trug",pp:"getragen"},
 {i:"waschen",z:"lavare",k:"irr",pr:["wasche","wäschst","wäscht","waschen","wascht","waschen"],pt:"wusch",pp:"gewaschen"},
 {i:"vergessen",z:"dimenticare",k:"irr",pr:["vergesse","vergisst","vergisst","vergessen","vergesst","vergessen"],pt:"vergaß",pp:"vergessen"},
 {i:"bringen",z:"portare",k:"irr",pt:"brachte",ptw:1,pp:"gebracht"},
 {i:"denken",z:"pensare",k:"irr",pt:"dachte",ptw:1,pp:"gedacht"},
 {i:"kennen",z:"conoscere",k:"irr",pt:"kannte",ptw:1,pp:"gekannt"},
 {i:"stehen",z:"stare in piedi; trovarsi",k:"irr",pt:"stand",pp:"gestanden"},
 {i:"liegen",z:"trovarsi, essere disteso",k:"irr",pt:"lag",pp:"gelegen"},
 {i:"sitzen",z:"stare seduto",k:"irr",pr:["sitze","sitzt","sitzt","sitzen","sitzt","sitzen"],pt:"saß",pp:"gesessen"},
 {i:"beginnen",z:"cominciare",k:"irr",pt:"begann",pp:"begonnen"},
 {i:"verstehen",z:"capire",k:"irr",pt:"verstand",pp:"verstanden"},
 {i:"anrufen",b:"rufen",sep:"an",z:"telefonare",k:"sep",pt:"rief",pp:"angerufen"},
 {i:"aufstehen",b:"stehen",sep:"auf",z:"alzarsi",k:"sep",aux:"sein",pt:"stand",pp:"aufgestanden"},
 {i:"einkaufen",b:"kaufen",sep:"ein",z:"fare la spesa, fare acquisti",k:"sep",pp:"eingekauft"},
 {i:"fernsehen",b:"sehen",sep:"fern",z:"guardare la tv",k:"sep",pr:["sehe","siehst","sieht","sehen","seht","sehen"],pt:"sah",pp:"ferngesehen"},
 {i:"mitkommen",b:"kommen",sep:"mit",z:"venire con (qualcuno)",k:"sep",aux:"sein",pt:"kam",pp:"mitgekommen"},
 {i:"ankommen",b:"kommen",sep:"an",z:"arrivare",k:"sep",aux:"sein",pt:"kam",pp:"angekommen"},
 {i:"abfahren",b:"fahren",sep:"ab",z:"partire (con un mezzo)",k:"sep",aux:"sein",pr:["fahre","fährst","fährt","fahren","fahrt","fahren"],pt:"fuhr",pp:"abgefahren"},
 {i:"einladen",b:"laden",sep:"ein",z:"invitare",k:"sep",pr:["lade","lädst","lädt","laden","ladet","laden"],pt:"lud",pp:"eingeladen"},
 {i:"anfangen",b:"fangen",sep:"an",z:"cominciare",k:"sep",pr:["fange","fängst","fängt","fangen","fangt","fangen"],pt:"fing",pp:"angefangen"},
 {i:"aufräumen",b:"räumen",sep:"auf",z:"mettere in ordine",k:"sep",pp:"aufgeräumt"},
 {i:"machen",z:"fare",k:"reg"},{i:"wohnen",z:"abitare",k:"reg"},{i:"lernen",z:"studiare, imparare",k:"reg"},{i:"spielen",z:"giocare; suonare",k:"reg"},{i:"kaufen",z:"comprare",k:"reg"},
 {i:"kochen",z:"cucinare",k:"reg"},{i:"hören",z:"sentire, ascoltare",k:"reg"},{i:"fragen",z:"chiedere, domandare",k:"reg"},{i:"sagen",z:"dire",k:"reg"},{i:"brauchen",z:"avere bisogno di",k:"reg"},
 {i:"suchen",z:"cercare",k:"reg"},{i:"zeigen",z:"mostrare",k:"reg"},{i:"glauben",z:"credere",k:"reg"},{i:"leben",z:"vivere",k:"reg"},{i:"lieben",z:"amare",k:"reg"},
 {i:"tanzen",z:"ballare",k:"reg"},{i:"reisen",z:"viaggiare",k:"reg",aux:"sein"},{i:"besuchen",z:"visitare, andare a trovare",k:"reg",pp:"besucht"},{i:"bezahlen",z:"pagare",k:"reg",pp:"bezahlt"},{i:"erzählen",z:"raccontare",k:"reg",pp:"erzählt"},
 {i:"arbeiten",z:"lavorare",k:"reg"},{i:"warten",z:"aspettare",k:"reg"},{i:"kosten",z:"costare",k:"reg"},{i:"antworten",z:"rispondere",k:"reg"},{i:"öffnen",z:"aprire",k:"reg"},
 {i:"studieren",z:"studiare (all'università)",k:"reg",pp:"studiert"},{i:"telefonieren",z:"telefonare",k:"reg",pp:"telefoniert"},{i:"passieren",z:"succedere",k:"reg",aux:"sein",pp:"passiert"},
 {i:"gefallen",z:"piacere",k:"irr",pr:["gefalle","gefällst","gefällt","gefallen","gefallt","gefallen"],pt:"gefiel",pp:"gefallen"},
 {i:"empfehlen",z:"consigliare",k:"irr",pr:["empfehle","empfiehlst","empfiehlt","empfehlen","empfehlt","empfehlen"],pt:"empfahl",pp:"empfohlen"},
 {i:"singen",z:"cantare",k:"irr",pt:"sang",pp:"gesungen"},
 {i:"schwimmen",z:"nuotare",k:"irr",aux:"sein",pt:"schwamm",pp:"geschwommen"},
 {i:"scheinen",z:"splendere; sembrare",k:"irr",pt:"schien",pp:"geschienen"},
 {i:"ausgehen",b:"gehen",sep:"aus",z:"uscire (la sera)",k:"sep",aux:"sein",pt:"ging",pp:"ausgegangen"},
 {i:"umziehen",b:"ziehen",sep:"um",z:"trasferirsi, traslocare",k:"sep",aux:"sein",pt:"zog",pp:"umgezogen"},
 {i:"zurückrufen",b:"rufen",sep:"zurück",z:"richiamare (al telefono)",k:"sep",pt:"rief",pp:"zurückgerufen"},
 {i:"kennenlernen",b:"lernen",sep:"kennen",z:"conoscere (per la prima volta)",k:"sep",pp:"kennengelernt"},
 {i:"wehtun",b:"tun",sep:"weh",z:"fare male",k:"sep",pr:["tue","tust","tut","tun","tut","tun"],pt:"tat",pp:"wehgetan"},
 {i:"anprobieren",b:"probieren",sep:"an",z:"provare (un vestito)",k:"sep",pp:"anprobiert"},
 {i:"aufmachen",b:"machen",sep:"auf",z:"aprire",k:"sep",pp:"aufgemacht"},{i:"zumachen",b:"machen",sep:"zu",z:"chiudere",k:"sep",pp:"zugemacht"},
 {i:"frühstücken",z:"fare colazione",k:"reg"},{i:"rauchen",z:"fumare",k:"reg"},{i:"lachen",z:"ridere",k:"reg"},{i:"schenken",z:"regalare",k:"reg"},{i:"schmecken",z:"avere un buon sapore, piacere (cibo)",k:"reg"},
 {i:"regnen",z:"piovere",k:"reg"},{i:"schneien",z:"nevicare",k:"reg"},{i:"probieren",z:"assaggiare, provare",k:"reg",pp:"probiert"},{i:"gehören",z:"appartenere",k:"reg",pp:"gehört"},{i:"erklären",z:"spiegare",k:"reg",pp:"erklärt"},
 {i:"verbessern",z:"migliorare",k:"reg",pp:"verbessert"},{i:"vermissen",z:"sentire la mancanza di",k:"reg",pp:"vermisst"},{i:"beenden",z:"finire, terminare",k:"reg",pp:"beendet"},{i:"eröffnen",z:"aprire (un'attività)",k:"reg",pp:"eröffnet"},{i:"heiraten",z:"sposarsi",k:"reg"},{i:"duschen",z:"fare la doccia",k:"reg"},{i:"wiederholen",z:"ripetere",k:"reg",pp:"wiederholt"},{i:"reservieren",z:"prenotare",k:"reg",pp:"reserviert"},
 {i:"sich waschen",b:"waschen",z:"lavarsi",k:"pro",pr:["wasche","wäschst","wäscht","waschen","wascht","waschen"],pt:"wusch",pp:"gewaschen"},
 {i:"sich freuen",b:"freuen",z:"essere contento, rallegrarsi",k:"pro"},{i:"sich duschen",b:"duschen",z:"farsi la doccia",k:"pro"},
 {i:"sich interessieren",b:"interessieren",z:"interessarsi",k:"pro",pp:"interessiert"},{i:"sich treffen",b:"treffen",z:"incontrarsi",k:"pro",pr:["treffe","triffst","trifft","treffen","trefft","treffen"],pt:"traf",pp:"getroffen"}
];
function vbase(v){return v.b||v.i}
function vstem(v){var b=vbase(v);return /eln$|ern$/.test(b)?b.slice(0,-1):b.replace(/en$/,"")}
function eIns(s){return /([td]|[^aeioulrh]n|[^aeioulrh]m)$/.test(s)&&!/(rn|rm|ln|lm|mm|nn)$/.test(s)}
function sib(s){return /(s|ß|z|x)$/.test(s)}
function F(h,p){return {h:h,p:p}}
function hl(b,x){var n=0;while(n<b.length&&n<x.length&&b[n]===x[n])n++;return n===x.length?esc(x):esc(x.slice(0,n))+'<b class="end">'+esc(x.slice(n))+'</b>'}
function prList(v){if(v.pr)return v.pr.slice();var s=vstem(v),b=vbase(v),e=eIns(s),vs=s;
  if(v.vc){vs=s.replace(/a(?=[^a]*$)/,"ä").replace(/au(?=[^a]*$)/,"äu")}
  var du=vs+(sib(vs)?"t":(e&&!v.vc?"est":"st")),er=vs+(e&&!v.vc?"et":"t");
  return [s+"e",du,er,/eln$|ern$/.test(b)?b:s+"en",s+(e?"et":"t"),/eln$|ern$/.test(b)?b:s+"en"]}
function prForms(v){var L=prList(v),s=vstem(v);return L.map(function(x){var y=x+(v.sep?" "+v.sep:"");return F(hl(s,x)+(v.sep?' <span class="cj-aux">'+v.sep+'</span>':''),y)})}
function ptList(v){if(v.pts)return v.pts.slice();
  if(v.pt&&!v.ptw){var t=v.pt,ss=sib(t)||/[td]$/.test(t);return [t,t+(ss?"est":"st"),t,t+"en",t+(/[td]$/.test(t)?"et":"t"),t+"en"]}
  var st=v.ptw?v.pt.replace(/e$/,""):vstem(v)+(eIns(vstem(v))?"ete":"te");if(!v.ptw)st=st.replace(/e$/,"");
  return [st+"e",st+"est",st+"e",st+"en",st+"et",st+"en"]}
function ptForms(v){return ptList(v).map(function(x){var y=x+(v.sep?" "+v.sep:"");return F('<b class="end">'+esc(x)+'</b>'+(v.sep?' <span class="cj-aux">'+v.sep+'</span>':''),y)})}
function ppOf(v){if(v.pp)return v.pp;var s=vstem(v);return "ge"+s+(eIns(s)?"et":"t")}
var HAB=["habe","hast","hat","haben","habt","haben"],SEIN=["bin","bist","ist","sind","seid","sind"],WERD=["werde","wirst","wird","werden","werdet","werden"],WUERD=["würde","würdest","würde","würden","würdet","würden"];
function k2List(v){if(v.k2s)return v.k2s.slice();if(v.k2){var t=v.k2;return [t,t+"st",t,t+"n",t+"t",t+"n"]}return null}
function aux(list,i,tail){return F('<span class="cj-aux">'+list[i]+'</span> <b class="end">'+esc(tail)+'</b>',list[i]+" "+tail)}
function cjForms(v,t){if(t==="pr")return prForms(v);if(t==="pt")return ptForms(v);
  if(t==="pf"){var pp=ppOf(v),A=v.aux==="sein"?SEIN:HAB;return A.map(function(a,i){return aux(A,i,pp)})}
  if(t==="fu")return WERD.map(function(a,i){return aux(WERD,i,v.i.replace(/^sich /,""))});
  var k=k2List(v);if(k)return k.map(function(x){return F('<b class="end">'+esc(x)+'</b>',x)});
  return WUERD.map(function(a,i){return aux(WUERD,i,v.i.replace(/^sich /,""))})}
/* pronoun + form; reflexive verbs add mich / dich / sich…: ich wasche mich, ich habe mich gewaschen */
function cjSay(v,t,i,f){var p=f.p,r=v.k==="pro"?RF[i]:"";if(!r)return PS[i]+" "+p;var w=p.split(" ");w.splice(1,0,r);return PS[i]+" "+w.join(" ")}
var CONJ_IDX={};
VERBS.forEach(function(v){var z=v.z;
  ["pr","pt","k2"].forEach(function(t){cjForms(v,t).forEach(function(f,i){var k=f.p.split(" ")[0].toLowerCase();if(f.p.indexOf(" ")>0&&!v.sep)return;var pre=z+" ("+v.i+") · ",suf=" · "+TN[t],cur=CONJ_IDX[k];if(!cur)CONJ_IDX[k]=pre+PZ[i]+suf;
    else if(cur.indexOf(pre)===0&&cur.slice(-suf.length)===suf&&cur.indexOf(PZ[i])<0)CONJ_IDX[k]=cur.slice(0,-suf.length)+", "+PZ[i]+suf})});
  var inf=v.i.replace(/^sich /,"");if(!DICT[inf]&&!CONJ_IDX[inf])CONJ_IDX[inf]=z+" (infinito)";
  if(!CONJ_IDX[ppOf(v)])CONJ_IDX[ppOf(v)]="participio di «"+v.i+"» ("+z+")"});
/* plurals given in the word lists (gender field «m:Tische») */
var PL_IDX={};
function plOf(g){var i=(g||"").indexOf(":");return i<0?"":g.slice(i+1)}

/* ---------- alphabet and numbers: [letter, name, what the voice says] ---------- */
var ALF=[["A","a","a"],["B","be","be"],["C","ce","ce"],["D","de","de"],["E","e","e"],["F","ef","eff"],["G","ge","ge"],["H","ha","ha"],["I","i","i"],["J","jot","jott"],["K","ka","ka"],["L","el","ell"],["M","em","emm"],["N","en","enn"],
  ["O","o","o"],["P","pe","pe"],["Q","ku","ku"],["R","er","err"],["S","es","ess"],["T","te","te"],["U","u","u"],["V","vau","fau"],["W","ve","we"],["X","ics","ix"],["Y","ypsilon","ypsilon"],["Z","zet","zett"],
  ["Ä","ä","ä"],["Ö","ö","ö"],["Ü","ü","ü"],["ß","esszet","eszett"]];
var NUM=[["0","null"],["1","eins"],["2","zwei"],["3","drei"],["4","vier"],["5","fünf"],["6","sechs"],["7","sieben"],["8","acht"],["9","neun"],["10","zehn"],["11","elf"],["12","zwölf"],["13","dreizehn"],["14","vierzehn"],["15","fünfzehn"],["16","sechzehn"],["17","siebzehn"],["18","achtzehn"],["19","neunzehn"],["20","zwanzig"],
  ["21","einundzwanzig"],["22","zweiundzwanzig"],["30","dreißig"],["31","einunddreißig"],["40","vierzig"],["50","fünfzig"],["60","sechzig"],["70","siebzig"],["80","achtzig"],["90","neunzig"],["99","neunundneunzig"],["100","hundert"],["101","hunderteins"],["200","zweihundert"],["500","fünfhundert"],["1000","tausend"],["2000","zweitausend"]];

/* ---------- vocabulary: gender m, f, n, p (plural only), with the plural after a colon: «m:Tische» ---------- */
function gOf(g){var c=(g||"").charAt(0);return /[mfnp]/.test(c)?c:""}
function art(w,g){return {m:"der ",f:"die ",n:"das ",p:"die "}[gOf(g)]||""}
function wordHTML(r){var g=gOf(r[2]),a=art(r[0],r[2]),pl=plOf(r[2]);
  return g?'<span class="'+({m:"m",f:"f",n:"nt",p:"f"}[g])+'"><span class="art">'+a+'</span>'+esc(r[0])+'</span>'+(pl?'<span class="pl"> · '+(pl==="-"?"senza plurale":"die "+esc(pl))+'</span>':''):esc(r[0])}
function gLabel(g){var x={m:"maschile",f:"femminile",n:"neutro",p:"plurale"}[gOf(g)]||"",pl=plOf(g);return x+(pl&&pl!=="-"?" · plurale: die "+pl:"")}
Object.keys(VOC).forEach(function(id){(VOC[id]||[]).forEach(function(r){var pl=plOf(r[2]);if(pl&&pl!=="-"&&!PL_IDX[pl])PL_IDX[pl]="plurale di «"+r[0]+"» ("+r[1]+")"})});
