DLG.l14=[["A","Good evening. Are you ready to order?","Buonasera. Siete pronti per ordinare?"],["B","Yes. What do you recommend?","Sì. Che cosa ci consiglia?"],["A","The fish is very good today.","Oggi il pesce è molto buono."],["B","OK, the fish with potatoes for my husband.","Va bene, il pesce con patate per mio marito."],["A","And for you, madam?","E per lei, signora?"],["B","Have you got any vegetarian dishes?","Avete piatti vegetariani?"],["A","Yes, the mushroom soup and the pasta.","Sì, la zuppa di funghi e la pasta."],["B","The soup, please.","La zuppa, per favore."],["A","Would you like some water?","Volete dell'acqua?"],["B","Yes, a bottle of sparkling water, please.","Sì, una bottiglia d'acqua frizzante, per favore."],["A","Any dessert?","Un dolce?"],["B","No, thanks. I don't want any dessert. Could we have the bill, please?","No, grazie. Non voglio il dolce. Potremmo avere il conto, per favore?"]];
EX.l14=[
 {q:"«delle informazioni»:",o:["{some information}","{some informations}","{an information}"],e:"{information} non si conta: niente plurale."},
 {q:"«Non c'è latte.»",o:["{There isn't any milk.}","{There isn't some milk.}","{There aren't any milks.}"],e:"Negazione: {any}; {milk} non ha plurale."},
 {q:"Offri dei biscotti a un ospite:",o:["{Would you like some biscuits?}","{Would you like any biscuits?}","{Would you like a biscuits?}"],e:"Nelle offerte si usa {some}."},
 {q:"«Quante uova?»",o:["{How many eggs?}","{How much eggs?}","{How many egg?}"],e:"Numerabili: {How many} + plurale."},
 {q:"«Quanto zucchero?»",o:["{How much sugar?}","{How many sugar?}","{How many sugars?}"],e:"Non numerabili: {How much}."},
 {q:"«una pagnotta»:",o:["{a loaf of bread}","{a bread}","{one bread}"],e:"{bread} non si conta: {a loaf of bread}, {some bread}."},
 {q:"Al ristorante, per ordinare:",o:["{I'll have the soup, please.}","{I take the soup.}","{Give me the soup.}"],e:"{I'll have…} = prendo…"},
 {q:"Ascolta: che cosa ordina?",au:"I'll have the fish with potatoes.",o:["pesce con patate","pollo con patate","pesce con insalata"],e:"{the fish with potatoes}."},
 {q:"Ascolta: che acqua vuole?",au:"A bottle of sparkling water, please.",o:["frizzante","naturale","del rubinetto"],e:"{sparkling} = frizzante; naturale = {still}."},
 {q:"Ascolta: quale parola senti?",au:"food",o:["{food}","{foot}"],e:"{food} ha la «u» lunga; {foot} (piede) la «u» breve."},
 {t:"type",q:"Completa: {We need} ＿ {tomatoes.} (dei)",a:["some"],full:"We need some tomatoes."},
 {t:"type",q:"Completa: {How} ＿ {apples do you want?}",a:["many"],full:"How many apples do you want?"},
 {t:"dict",au:"Could we have the bill, please?"},
 {t:"say",zh:"Al mercato: chiedi due chili di patate e mezzo chilo di pomodori",it:"Two kilos of potatoes and half a kilo of tomatoes, please."},
 {t:"say",zh:"Al ristorante: chiedi che cosa ti consiglia il cameriere e se hanno piatti vegetariani",it:"What do you recommend? Have you got any vegetarian dishes?"}
];
VOC.l14=[
 ["some","un po' di, qualche, del",""],["much","molto (non numerabili)",""],["many","molti (numerabili)",""],["how many","quanti",""],["food","cibo",""],["bread","pane",""],["loaf","pagnotta",""],["egg","uovo",""],["rice","riso",""],["pasta","pasta",""],
 ["meat","carne",""],["fish","pesce",""],["chicken","pollo",""],["vegetables","verdure",""],["potato","patata",""],["tomato","pomodoro",""],["mushroom","fungo",""],["salad","insalata",""],["fruit","frutta",""],["biscuit","biscotto",""],
 ["bottle","bottiglia",""],["kilo","chilo",""],["half","mezzo, metà",""],["sparkling water","acqua frizzante",""],["still water","acqua naturale",""],["soup","minestra, zuppa",""],["dish","piatto (pietanza)",""],["vegetarian","vegetariano",""],
 ["menu","menù",""],["starter","antipasto",""],["main course","piatto principale",""],["dessert","dolce, dessert",""],["ready","pronto",""],["order","ordinare",""],["recommend","consigliare",""],["I'll have","prendo (ordinando)",""],["madam","signora",""],
 ["buy","comprare",""],["money","soldi",""],["information","informazioni",""],["advice","consigli",""],["drinks","bevande",""],["oil", "olio", ""],["problem", "problema", ""],["ice cream", "gelato", ""]
];
EX.l14=EX.l14.concat([
 {t:"dict",au:"There isn't any bread. Can you buy some?"},
 {t:"say",zh:"Chiedi al cameriere il conto, con gentilezza",it:"Could we have the bill, please?"},
 {t:"type",q:"Completa: {I haven't got} ＿ {money.} (nessun)",a:["any"],full:"I haven't got any money."}
]);
