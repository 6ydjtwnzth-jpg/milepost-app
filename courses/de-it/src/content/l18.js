DLG.l18=[["A","Warum bist du gestern so spät gekommen?","Perché ieri sei arrivata così tardi?"],["B","Ach, das war ein Tag! Ich war in der U-Bahn und habe ein Buch gelesen.","Ah, che giornata! Ero in metropolitana e leggevo un libro."],["A","Und dann?","E poi?"],["B","Plötzlich ist die U-Bahn im Tunnel stehen geblieben.","All'improvviso la metro si è fermata nella galleria."],["A","Oh nein! Wie lange?","Oh no! Per quanto tempo?"],["B","Fast eine Stunde! Es war sehr heiß und alle waren nervös.","Quasi un'ora! Faceva molto caldo e tutti erano nervosi."],["A","Und wie bist du nach Hause gekommen?","E come sei arrivata a casa?"],["B","Am Ende sind wir zu Fuß zur nächsten Station gegangen.","Alla fine siamo andati a piedi fino alla stazione successiva."],["A","Was für ein Abenteuer!","Che avventura!"],["B","Ja, aber dabei habe ich einen sehr netten Mann kennengelernt.","Sì, ma intanto ho conosciuto un uomo molto simpatico."]];
EX.l18=[
 {q:"«All'improvviso la metro si è fermata.»",o:["{Plötzlich ist die U-Bahn stehen geblieben.}","{Plötzlich die U-Bahn ist stehen geblieben.}","{Plötzlich hat die U-Bahn stehen geblieben.}"],e:"Verbo al secondo posto; {stehen bleiben} vuole {sein}."},
 {q:"Il {Präteritum} di {gehen} (er):",o:["{ging}","{gehte}","{gang}"],e:"Verbo forte: {er ging}."},
 {q:"Il {Präteritum} di {sagen} (sie, lei):",o:["{sagte}","{sag}","{sagt}"],e:"Regolare: {-te}."},
 {q:"«Ho freddo.»",o:["{Mir ist kalt.}","{Ich bin kalt.}","{Ich habe kalt.}"],e:"Per una sensazione: {mir ist kalt / warm}."},
 {q:"«C'è il sole.»",o:["{Die Sonne scheint.}","{Es ist Sonne.}","{Es macht Sonne.}"],e:"{Die Sonne scheint} o {Es ist sonnig}."},
 {q:"In una conversazione, «sono andato al cinema» si dice:",o:["{Ich bin ins Kino gegangen.}","{Ich ging ins Kino.}","{Ich gehte ins Kino.}"],e:"Nel parlato: {Perfekt}. {Ich ging} è da racconto scritto."},
 {q:"Ascolta: dov'era Lisa?",au:"Ich war in der U-Bahn und habe ein Buch gelesen.",o:["in metropolitana","in autobus","in treno"],e:"{in der U-Bahn}."},
 {q:"Ascolta: quanto tempo è rimasta ferma?",au:"Fast eine Stunde! Es war sehr heiß.",o:["quasi un'ora","mezz'ora","due ore"],e:"{fast eine Stunde}."},
 {q:"Ascolta: com'è finita?",au:"Am Ende sind wir zu Fuß zur nächsten Station gegangen.",o:["sono andati a piedi alla stazione successiva","hanno preso un taxi","sono tornati indietro"],e:"{zu Fuß zur nächsten Station}."},
 {t:"type",q:"Completa: {Zuerst haben wir gegessen, dann} ＿ {wir tanzen gegangen.} (sein)",a:["sind"],full:"Zuerst haben wir gegessen, dann sind wir tanzen gegangen."},
 {t:"type",q:"Completa: {Es war einmal ein Mädchen. Es} ＿ {im Wald.} (wohnen, Präteritum)",a:["wohnte"],full:"Es war einmal ein Mädchen. Es wohnte im Wald."},
 {t:"dict",au:"Plötzlich ist das Licht ausgegangen."},
 {t:"say",zh:"Comincia un racconto: che giorno era e che tempo faceva",it:"Es war Samstag, die Sonne hat geschienen und ich bin im Park spazieren gegangen."},
 {t:"say",zh:"Di' che hai caldo e chiedi di aprire la finestra",it:"Mir ist warm. Kannst du das Fenster aufmachen?"}
];
VOC.l18=[
 ["plötzlich","all'improvviso",""],["zuerst","prima, per prima cosa",""],["später","più tardi",""],["am Ende","alla fine",""],["schließlich","alla fine, infine",""],["in diesem Moment","in quel momento",""],["während","mentre; durante",""],["Es war einmal…","c'era una volta…",""],["eines Tages","un giorno",""],["fast","quasi",""],["dabei","intanto, nel farlo",""],["kennenlernen","conoscere (una persona per la prima volta)",""],["stehen bleiben","fermarsi",""],["spazieren gehen","passeggiare",""],
 ["ging","andò (gehen)",""],["kam","venne, arrivò (kommen)",""],["sah","vide (sehen)",""],["sagte","disse (sagen)",""],["fragte","chiese (fragen)",""],["fuhr","andò (fahren)",""],["stand","stava (stehen)",""],
 ["Wetter","tempo (meteo)","n:-"],["Es regnet.","piove",""],["Es schneit.","nevica",""],["Die Sonne scheint.","c'è il sole",""],["warm","caldo",""],["heiß","molto caldo",""],["windig","ventoso",""],["bewölkt","nuvoloso",""],["Mir ist kalt.","ho freddo",""],["Regen","pioggia","m:-"],["Schnee","neve","m:-"],
 ["Tunnel","galleria, tunnel","m:Tunnel"],["Station","stazione (della metro)","f:Stationen"],["Abenteuer","avventura","n:Abenteuer"],["Licht","luce","n:Lichter"],["Wald","bosco","m:Wälder"],["nervös","nervoso",""],["nett","gentile, simpatico",""],["zumachen", "chiudere", ""],["aufmachen", "aprire", ""],
 ["Wind", "vento", "m:Winde"],
 ["Wolke", "nuvola", "f:Wolken"],
 ["Himmel", "cielo", "m:Himmel"],
 ["Grad", "grado (di temperatura)", "m:Grad"]
];
EX.l18=EX.l18.concat([
 {t:"dict",au:"Die Sonne scheint, aber es ist kalt."},
 {t:"say",zh:"Di': «Che avventura!»",it:"Was für ein Abenteuer!"},
 {t:"type",q:"Completa: {Eines Tages} ＿ {sie zu ihrer Großmutter.} (gehen, Präteritum)",a:["ging"],full:"Eines Tages ging sie zu ihrer Großmutter."}
]);
