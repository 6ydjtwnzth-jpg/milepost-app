DLG.l18=[["A","Ben! What happened to your arm?","Ben! Che cosa ti è successo al braccio?"],["B","I fell off my bike yesterday.","Ieri sono caduto dalla bici."],["A","Oh no! How did it happen?","Oh no! Com'è successo?"],["B","I was riding to work and it was raining.","Andavo al lavoro in bici e pioveva."],["A","Were you going fast?","Andavi veloce?"],["B","No, but I was crossing the road when a cat ran in front of me.","No, ma stavo attraversando la strada quando un gatto mi è corso davanti."],["A","And then?","E poi?"],["B","I stopped suddenly and I fell.","Mi sono fermato all'improvviso e sono caduto."],["A","Poor you! Did you go to hospital?","Poverino! Sei andato in ospedale?"],["B","Yes. Luckily it isn't broken.","Sì. Per fortuna non è rotto."]];
EX.l18=[
 {q:"«Alle otto stavo facendo colazione.»",o:["{At eight I was having breakfast.}","{At eight I had breakfast.}","{At eight I was have breakfast.}"],e:"Azione in corso in un momento passato: {was} + {-ing}."},
 {q:"«Che cosa stavate facendo?»",o:["{What were you doing?}","{What was you doing?}","{What did you doing?}"],e:"{you} vuole {were}."},
 {q:"«Stavo leggendo quando è arrivato.»",o:["{I was reading when he arrived.}","{I read when he was arriving.}","{I was reading when he was arriving.}"],e:"Azione lunga: {past continuous}; azione breve: {past simple}."},
 {q:"«Mentre cenavamo, ha squillato il telefono.»",o:["{While we were having dinner, the phone rang.}","{While we had dinner, the phone was ringing.}","{When we were having dinner, the phone was ringing.}"],e:"{while} + azione lunga, poi il fatto al {past simple}."},
 {q:"«Da bambino andavo al mare ogni estate.»",o:["{As a child I used to go to the sea every summer.}","{As a child I was going to the sea every summer.}","{As a child I was go to the sea every summer.}"],e:"Un'abitudine non è un'azione in corso: {used to}."},
 {q:"«alla fine del film»:",o:["{at the end of the film}","{in the end of the film}","{at the finish of the film}"],e:"{at the end of…}; {in the end} = alla fine, dopo tutto."},
 {q:"Ascolta: che tempo faceva?",au:"It was raining and it was very cold.",o:["pioveva e faceva freddo","c'era il sole","nevicava"],e:"{It was raining}."},
 {q:"Ascolta: che cosa è successo?",au:"Suddenly the lights went out.",o:["si sono spente le luci","è squillato il telefono","è caduto"],e:"{the lights went out} = le luci si sono spente."},
 {q:"Ascolta: come sono tornati a casa?",au:"In the end we took a taxi.",o:["in taxi","a piedi","in autobus"],e:"{took a taxi}."},
 {t:"type",q:"Completa: {I} ＿ {the road when I saw Tom.} (cross)",a:["was crossing"],full:"I was crossing the road when I saw Tom."},
 {t:"type",q:"Completa: {While she was cooking, the phone} ＿ {.} (ring)",a:["rang"],full:"While she was cooking, the phone rang."},
 {t:"dict",au:"What were you doing at ten last night?"},
 {t:"say",zh:"Racconta: «Stavo camminando nel parco quando ho visto un vecchio amico.»",it:"I was walking in the park when I saw an old friend."},
 {t:"say",zh:"Di' che cosa stavi facendo ieri alle otto di sera",it:"At eight o'clock last night I was cooking dinner."}
];
VOC.l18=[
 ["happen","succedere",""],["what happened","che cosa è successo",""],["fall","cadere",""],["fall off","cadere da",""],["fell","caddi, sono caduto (fall)",""],["ran","corsi, è corso (run)",""],["ride","andare (in bici, a cavallo)",""],["ring","squillare, suonare",""],["rang","squillò (ring)",""],["arrive","arrivare",""],["break","rompere",""],["broken","rotto",""],
 ["while","mentre",""],["suddenly","all'improvviso",""],["after that","dopo, in seguito",""],["luckily","per fortuna",""],["unfortunately","purtroppo",""],["in the end","alla fine",""],["at the end of","alla fine di",""],["poor you","poverino, povero te",""],
 ["arm","braccio",""],["leg","gamba",""],["lights","luci",""],["taxi","taxi",""],["accident","incidente",""],["as a child","da bambino",""],["story","storia, racconto",""],["sun", "sole", ""],["wind", "vento", ""],["cloud", "nuvola", ""]
];
EX.l18=EX.l18.concat([
 {t:"dict",au:"Luckily, my phone wasn't broken."},
 {t:"say",zh:"Racconta un imprevisto in quattro frasi: sfondo, fatto, poi, alla fine",it:"I was waiting for the bus and it was raining. Suddenly a car stopped. It was my friend Anna. In the end she drove me home."},
 {t:"type",q:"Completa: ＿ {the end we took a taxi.}",a:["in"],full:"In the end we took a taxi."}
]);
