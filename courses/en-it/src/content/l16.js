DLG.l16=[["A","Did you have a good holiday, Marco?","Hai fatto una bella vacanza, Marco?"],["B","Yes, I did! We went to Ireland.","Sì! Siamo andati in Irlanda."],["A","When did you leave?","Quando siete partiti?"],["B","On the third of August. We flew to Dublin.","Il 3 agosto. Siamo andati a Dublino in aereo."],["A","Did you rent a car?","Avete noleggiato una macchina?"],["B","No, we didn't. We took the train to Galway.","No. Abbiamo preso il treno per Galway."],["A","What did you see?","Che cosa avete visto?"],["B","We saw the Cliffs of Moher. They were amazing!","Abbiamo visto le scogliere di Moher. Erano incredibili!"],["A","Did it rain?","Ha piovuto?"],["B","Yes, every day! But we had a great time.","Sì, tutti i giorni! Ma ci siamo divertiti un sacco."]];
EX.l16=[
 {q:"Il passato di {go}:",o:["{went}","{goed}","{gone}"],e:"{go} → {went} (e {gone} è il participio, lezione 20)."},
 {q:"Il passato di {buy}:",o:["{bought}","{buyed}","{brought}"],e:"{buy} → {bought}. {brought} è il passato di {bring} (portare)."},
 {q:"«Hai visto il castello?»",o:["{Did you see the castle?}","{Did you saw the castle?}","{Saw you the castle?}"],e:"Dopo {did} la forma base: {see}."},
 {q:"«Non abbiamo noleggiato una macchina.»",o:["{We didn't rent a car.}","{We didn't rented a car.}","{We not rented a car.}"],e:"{didn't} + forma base."},
 {q:"«Eravate stanchi?»",o:["{Were you tired?}","{Did you be tired?}","{Did you were tired?}"],e:"Con {be} niente {did}."},
 {q:"«il 3 agosto»:",o:["{on the third of August}","{in the three of August}","{on the three August}"],e:"Ordinale e {on}; maiuscola per il mese."},
 {q:"1998 si dice:",o:["{nineteen ninety-eight}","{one thousand nine hundred ninety-eight}","{nineteen nine eight}"],e:"Gli anni si dicono a coppie di cifre."},
 {q:"Ascolta: come sono andati a Dublino?",au:"We flew to Dublin.",o:["in aereo","in treno","in macchina"],e:"{flew} è il passato di {fly}."},
 {q:"Ascolta: quand'è il compleanno?",au:"My birthday is on the twenty-first of May.",o:["21 maggio","20 maggio","21 marzo"],e:"{the twenty-first of May}."},
 {q:"Ascolta: che cosa hanno comprato?",au:"They bought some presents for their friends.",o:["dei regali","dei biglietti","delle foto"],e:"{presents} = regali."},
 {t:"type",q:"Completa: {Where} ＿ {you stay?}",a:["did"],full:"Where did you stay?"},
 {t:"type",q:"Completa: {I} ＿ {a lot of photos.} (take)",a:["took"],full:"I took a lot of photos."},
 {t:"dict",au:"Did you have a good holiday?"},
 {t:"say",zh:"Racconta un viaggio: dove sei andato, quando, come e che cosa hai visto",it:"In June I went to London. I flew from Milan and I saw Buckingham Palace."},
 {t:"say",zh:"Chiedi a un amico dove è andato in vacanza e se gli è piaciuto",it:"Where did you go on holiday? Did you like it?"}
];
VOC.l16=[
 ["went","andai, sono andato (go)",""],["had","ebbi, ho avuto (have)",""],["saw","vidi, ho visto (see)",""],["took","presi, ho preso (take)",""],["got","presi, sono arrivato (get)",""],["ate","mangiai, ho mangiato (eat)",""],["bought","comprai, ho comprato (buy)",""],["flew","volai, sono andato in aereo (fly)",""],["came","venni, sono venuto (come)",""],
 ["did","aiutante del passato",""],["didn't","non (passato)",""],["eat","mangiare",""],["fly","volare, andare in aereo",""],["leave","partire, lasciare",""],["come","venire",""],["rent","noleggiare, affittare",""],["train","treno",""],["plane","aereo",""],["airport","aeroporto",""],["ticket","biglietto",""],
 ["photo","foto",""],["present","regalo",""],["amazing","incredibile, fantastico",""],["have a great time","divertirsi un sacco",""],["on holiday","in vacanza",""],["birthday","compleanno",""],
 ["January","gennaio",""],["February","febbraio",""],["March","marzo",""],["April","aprile",""],["May","maggio",""],["June","giugno",""],["July","luglio",""],["August","agosto",""],["September","settembre",""],["October","ottobre",""],["November","novembre",""],["December","dicembre",""],
 ["twenty-first","ventunesimo",""],["fourth","quarto (ordinale)",""],["fifth","quinto",""],["fourteenth","quattordicesimo",""],["boat", "barca, nave", ""],["passport", "passaporto", ""]
];
EX.l16=EX.l16.concat([
 {t:"dict",au:"We didn't rent a car."},
 {t:"say",zh:"Di' la data del tuo compleanno",it:"My birthday is on the fourteenth of February.",e:"Ordinale + {of} + mese."},
 {t:"type",q:"Completa: {Did you go to the museum? — No, we} ＿ {.}",a:["didn't","did not"],full:"No, we didn't."}
]);
