DLG.l8=[["A","Hi! What would you like?","Ciao! Che cosa desidera?"],["B","Can I have a cappuccino, please?","Posso avere un cappuccino, per favore?"],["A","Small, medium or large?","Piccolo, medio o grande?"],["B","Medium, please. And I'd like a piece of cake.","Medio, per favore. E vorrei una fetta di torta."],["A","Chocolate or lemon?","Al cioccolato o al limone?"],["B","Lemon, please.","Al limone, per favore."],["A","Eat in or take away?","Da consumare qui o da portar via?"],["B","Eat in. How much is it?","Qui. Quanto costa?"],["A","That's six pounds twenty, please.","Sono sei sterline e venti, per favore."],["B","Can I pay by card?","Posso pagare con la carta?"],["A","Of course. Here's your receipt.","Certo. Ecco lo scontrino."]];
EX.l8=[
 {q:"Al bar, il modo più gentile:",o:["{Could I have a tea, please?}","{I want a tea.}","{Give me a tea.}"],e:"{Could I have…?} è molto gentile. {I want} e {Give me} suonano bruschi."},
 {q:"«Vorrei un panino.»",o:["{I'd like a sandwich.}","{I like a sandwich.}","{I would a sandwich.}"],e:"{I'd like} = {I would like} = vorrei. {I like} = mi piace."},
 {q:"«Quanto costa?» (una cosa)",o:["{How much is it?}","{How much it costs?}","{How many is it?}"],e:"{How much is it?} / {How much are they?}"},
 {q:"Il cameriere chiede {Anything else?} Non vuoi altro:",o:["{No, that's all, thanks.}","{No, nothing else is.}","{Yes, please, nothing.}"],e:"{That's all} = è tutto."},
 {q:"£4.50 si dice:",o:["{four pounds fifty}","{four pound and fifty}","{four comma fifty}"],e:"{four pounds fifty}, o semplicemente {four fifty}."},
 {q:"Vuoi un caffè come in Italia:",o:["{An espresso, please.}","{A coffee, please.}","{A black tea, please.}"],e:"{a coffee} è di solito un caffè lungo."},
 {q:"Ascolta: quanto deve pagare?",au:"That's six pounds twenty, please.",o:["£6.20","£6.02","£2.60"],e:"{six pounds twenty} = £6.20."},
 {q:"Ascolta: che cosa vuole?",au:"A tea with milk, no sugar.",o:["tè con latte, senza zucchero","tè con zucchero, senza latte","caffè con latte"],e:"{with milk} = con latte, {no sugar} = senza zucchero."},
 {q:"Ascolta: dove lo beve?",au:"Take away, please.",o:["lo porta via","lo beve al bar","non lo vuole"],e:"{take away} = da portar via."},
 {t:"type",q:"Completa: ＿ {I pay by card?}",a:["Can","Could"],full:"Can I pay by card?"},
 {t:"type",q:"Completa: {How much} ＿ {the cakes?}",a:["are"],full:"How much are the cakes?"},
 {t:"dict",au:"Can I have a cappuccino, please?"},
 {t:"say",zh:"Ordina gentilmente un tè grande e una fetta di torta al cioccolato",it:"Could I have a large tea and a piece of chocolate cake, please?"},
 {t:"say",zh:"Chiedi quanto costa e se puoi pagare con la carta",it:"How much is it? Can I pay by card?"}
];
VOC.l8=[
 ["can","potere",""],["could","potrei, potresti (più gentile)",""],["have","avere; prendere (cibo, bevande)",""],["I'd like","vorrei",""],["would like","vorrebbe, desidera",""],["what would you like","che cosa desidera",""],["anything else","altro? (qualcos'altro)",""],["that's all","è tutto",""],
 ["how much","quanto (costa)",""],["pound","sterlina",""],["pence","penny (centesimi di sterlina)",""],["each","l'uno, ciascuno",""],["pay","pagare",""],["by card","con la carta",""],["cash","contanti",""],["bill","conto",""],["receipt","scontrino, ricevuta",""],
 ["eat in","da consumare qui",""],["take away","da portar via",""],["of course","certo, naturalmente",""],["medium","medio",""],["large","grande",""],
 ["cappuccino","cappuccino",""],["espresso","caffè espresso",""],["latte","latte macchiato (caffè con molto latte)",""],["black coffee","caffè nero, senza latte",""],["milk","latte",""],["sugar","zucchero",""],["juice","succo",""],["orange juice","succo d'arancia",""],
 ["glass","bicchiere",""],["cup","tazza",""],["piece","pezzo, fetta",""],["cake","torta, dolce",""],["chocolate","cioccolato",""],["lemon","limone",""],["sandwich","panino, tramezzino",""],["cheese","formaggio",""],["with","con",""]
];
EX.l8=EX.l8.concat([
 {t:"dict",au:"How much is a coffee?"},
 {t:"say",zh:"Il cameriere chiede {Eat in or take away?}: rispondi «da portar via, per favore»",it:"Take away, please."},
 {t:"type",q:"Completa: {Would you like milk? — Yes,} ＿ {.}",a:["please"],full:"Yes, please."}
]);
