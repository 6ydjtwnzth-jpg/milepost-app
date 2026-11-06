DLG.l19=[["A","Edinburgh or London for our trip?","Edimburgo o Londra per il nostro viaggio?"],["B","London is bigger and more exciting.","Londra è più grande e più emozionante."],["A","Yes, but it's more expensive than Edinburgh.","Sì, ma è più cara di Edimburgo."],["B","That's true. Edinburgh is smaller and quieter.","È vero. Edimburgo è più piccola e più tranquilla."],["A","And some people say it's the most beautiful city in Britain.","E alcuni dicono che è la città più bella della Gran Bretagna."],["B","Is the weather better?","Il tempo è migliore?"],["A","No, it's colder and it rains more.","No, è più freddo e piove di più."],["B","Hmm. But the museums are as good as in London, and some are free.","Mmm. Ma i musei sono buoni come a Londra, e alcuni sono gratis."],["A","So let's go to Edinburgh! It's cheaper.","Allora andiamo a Edimburgo! Costa meno."]];
EX.l19=[
 {q:"Il comparativo di {cheap}:",o:["{cheaper}","{more cheap}","{cheapper}"],e:"Aggettivo corto: + -er."},
 {q:"Il comparativo di {beautiful}:",o:["{more beautiful}","{beautifuller}","{more beautifuller}"],e:"Aggettivo lungo: {more} + aggettivo."},
 {q:"Il comparativo di {good}:",o:["{better}","{gooder}","{more good}"],e:"Irregolare: {good} → {better} → {the best}."},
 {q:"«Roma è più calda di Londra.»",o:["{Rome is hotter than London.}","{Rome is more hot than London.}","{Rome is hotter of London.}"],e:"{hot} → {hotter} (raddoppia la t); «di» = {than}."},
 {q:"«il ristorante migliore della città»:",o:["{the best restaurant in town}","{the better restaurant of the town}","{the most good restaurant in town}"],e:"Superlativo {the best}; «della città» = {in town}."},
 {q:"Il superlativo di {easy}:",o:["{the easiest}","{the most easy}","{the easyest}"],e:"-y → -iest."},
 {q:"«Il mio appartamento è meno grande del tuo.» (naturale)",o:["{My flat isn't as big as yours.}","{My flat is less big than yours.}","{My flat isn't so big that yours.}"],e:"{not as… as} è il modo più naturale."},
 {q:"Ascolta: quale città è più cara?",au:"London is more expensive than Edinburgh.",o:["Londra","Edimburgo","costano uguale"],e:"{more expensive than}."},
 {q:"Ascolta: com'è il tempo?",au:"It's colder than yesterday.",o:["più freddo di ieri","più caldo di ieri","come ieri"],e:"{colder than yesterday}."},
 {q:"Ascolta: com'è il museo?",au:"The museum is as interesting as the castle.",o:["interessante quanto il castello","più interessante del castello","meno interessante del castello"],e:"{as interesting as} = tanto quanto."},
 {t:"type",q:"Completa: {My brother is} ＿ {than me.} (tall)",a:["taller"],full:"My brother is taller than me."},
 {t:"type",q:"Completa: {It's the} ＿ {day of the year!} (hot)",a:["hottest"],full:"It's the hottest day of the year!"},
 {t:"dict",au:"London is bigger than Edinburgh."},
 {t:"say",zh:"Confronta la tua città con Londra: più piccola, più economica, meno piovosa",it:"My city is smaller and cheaper than London, and it isn't as rainy."},
 {t:"say",zh:"Di' qual è secondo te il ristorante migliore della tua città",it:"I think the best restaurant in my city is Da Mario."}
];
VOC.l19=[
 ["than","di (nei confronti)",""],["more","più",""],["most","il più",""],["less","meno",""],["as … as","tanto … quanto",""],["better","migliore, meglio",""],["best","il migliore, il meglio",""],["bad","cattivo, brutto",""],["worse","peggiore, peggio",""],["worst","il peggiore",""],
 ["cheap","economico",""],["expensive","caro, costoso",""],["beautiful","bello",""],["exciting","emozionante",""],["quiet","tranquillo, silenzioso",""],["noisy","rumoroso",""],["busy","affollato, impegnato",""],["easy","facile",""],["difficult","difficile",""],
 ["tall","alto (persone)",""],["short","basso, corto",""],["long","lungo",""],["high","alto (cose)",""],["dirty","sporco",""],["safe","sicuro",""],["dangerous","pericoloso",""],["rainy","piovoso",""],["free","gratis; libero",""],
 ["trip","viaggio, gita",""],["team","squadra",""],["player","giocatore",""],["that's true","è vero",""],["some people","alcune persone",""],["let's","facciamo, andiamo (proposta)",""],["yours","il tuo, il vostro",""],["think","pensare, credere",""],["Britain","Gran Bretagna",""],["fat", "grasso", ""],["thin", "magro", ""],["ugly", "brutto", ""],["slow", "lento", ""],["same", "stesso", ""],["other", "altro", ""],["good", "buono, bravo", ""]
];
EX.l19=EX.l19.concat([
 {t:"dict",au:"It's the most beautiful city in Britain."},
 {t:"say",zh:"Di': «Il treno è più veloce dell'autobus, ma è più caro.»",it:"The train is faster than the bus, but it's more expensive."},
 {t:"type",q:"Completa: {This is the} ＿ {expensive hotel in London.} (il più)",a:["most"],full:"This is the most expensive hotel in London."}
]);
