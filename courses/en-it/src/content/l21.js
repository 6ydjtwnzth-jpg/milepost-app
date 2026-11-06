DLG.l21=[["A","What are you going to do this summer, Chiara?","Che cosa farai quest'estate, Chiara?"],["B","I'm going to visit my cousins in Australia!","Andrò a trovare i miei cugini in Australia!"],["A","Wow! When are you leaving?","Wow! Quando parti?"],["B","On the fifteenth of July. I'm flying from Rome.","Il 15 luglio. Prendo l'aereo da Roma."],["A","Are you going to stay long?","Starai tanto?"],["B","A month. If I have time, I'll go to Sydney too.","Un mese. Se avrò tempo, andrò anche a Sydney."],["A","It'll be winter there, you know!","Sai che là sarà inverno!"],["B","Really? Then I'll take a jumper!","Davvero? Allora mi porto un maglione!"],["A","I think you'll love it.","Secondo me ti piacerà tantissimo."],["B","I'll send you some photos!","Ti manderò qualche foto!"]];
EX.l21=[
 {q:"Un progetto già deciso: «Quest'estate imparerò a nuotare.»",o:["{This summer I'm going to learn to swim.}","{This summer I learn to swim.}","{This summer I'm learning swim.}"],e:"Intenzione decisa: {be going to}."},
 {q:"Suona il telefono. Decidi adesso:",o:["{I'll answer it.}","{I'm going to answer it.}","{I answer it.}"],e:"Decisione presa sul momento: {will}."},
 {q:"«Se piove, restiamo a casa.»",o:["{If it rains, we'll stay at home.}","{If it will rain, we'll stay at home.}","{If it rains, we stay at home tomorrow.}"],e:"Dopo {if} il presente, poi {will}."},
 {q:"Hai il biglietto: «Venerdì vado a Londra.»",o:["{I'm going to London on Friday.}","{I go to London on Friday.}","{I will go to London Friday.}"],e:"Appuntamento fissato: {present continuous}."},
 {q:"«Non farò tardi.»",o:["{I won't be late.}","{I don't will be late.}","{I willn't be late.}"],e:"{won't} = {will not}."},
 {q:"Guardi le nuvole nere:",o:["{It's going to rain.}","{It will raining.}","{It rains soon.}"],e:"Previsione da quello che vedi: {going to}."},
 {q:"«Ti chiamo quando arrivo.»",o:["{I'll call you when I arrive.}","{I'll call you when I'll arrive.}","{I call you when I will arrive.}"],e:"Dopo {when} il presente."},
 {q:"Ascolta: quando parte?",au:"On the fifteenth of July. I'm flying from Rome.",o:["il 15 luglio","il 5 luglio","il 15 giugno"],e:"{the fifteenth of July}."},
 {q:"Ascolta: che cosa dice?",au:"I won't go.",o:["non andrà","vuole andare","è andato"],e:"{won't} ha il suono «ou»: non andrà."},
 {t:"type",q:"Completa: {If I have time, I} ＿ {go to Sydney.}",a:["will","'ll"],full:"If I have time, I'll go to Sydney."},
 {t:"type",q:"Completa: {What are you} ＿ {to do tomorrow?}",a:["going"],full:"What are you going to do tomorrow?"},
 {t:"dict",au:"What are you doing tomorrow evening?"},
 {t:"say",zh:"Racconta due progetti per l'estate con {going to}",it:"This summer I'm going to visit my sister in Dublin and I'm going to learn to surf."},
 {t:"say",zh:"Un amico ha le borse pesanti: offriti di aiutarlo",it:"I'll help you!"}
];
VOC.l21=[
 ["be going to","avere intenzione di, stare per",""],["will","(ausiliare del futuro)",""],["won't","non (futuro, will not)",""],["I'll","io + will",""],["if","se",""],["as soon as","appena",""],["I think","secondo me, penso",""],
 ["future","futuro",""],["send","mandare",""],["meet","incontrare, vedersi",""],["worry","preoccuparsi",""],["don't worry","non preoccuparti",""],["heavy","pesante",""],["sky","cielo",""],["clouds","nuvole",""],
 ["this summer","quest'estate",""],["next week","la settimana prossima",""],["next year","l'anno prossimo",""],["soon","presto",""],["one day","un giorno",""],["you know","sai, sapete",""],["learn to","imparare a",""],["surf","fare surf",""],["Australia","Australia",""],["perhaps","forse",""],["fifteenth","quindicesimo",""],["might","potrebbe (forse)",""],["maybe", "forse", ""],["suitcase", "valigia", ""]
];
EX.l21=EX.l21.concat([
 {t:"dict",au:"If it rains, we'll stay at home."},
 {t:"say",zh:"Di': «Forse domani piove. Se piove, andrò al cinema.»",it:"It might rain tomorrow. If it rains, I'll go to the cinema."},
 {t:"type",q:"Completa: {I'm} ＿ {Tom at the station at six.} (meet)",a:["meeting"],full:"I'm meeting Tom at the station at six."}
]);
