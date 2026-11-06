DLG.l9=[["A","Hallo! Bist du neu hier?","Ciao! Sei nuova qui?"],["B","Ja, ich bin Elena. Ich komme aus Italien.","Sì, sono Elena. Vengo dall'Italia."],["A","Ich bin Ben. Sprichst du Deutsch?","Io sono Ben. Parli tedesco?"],["B","Ich spreche ein bisschen. Langsam, bitte!","Lo parlo un po'. Piano, per favore!"],["A","Kein Problem. Wo wohnst du?","Nessun problema. Dove abiti?"],["B","In der Bergstraße. Mein Freund wohnt auch hier. Er spricht sehr gut Deutsch.","In Bergstraße. Anche il mio ragazzo abita qui. Lui parla tedesco molto bene."],["A","Und was machst du in Freiburg?","E che cosa fai a Friburgo?"],["B","Ich studiere hier. Und du? Was liest du da?","Studio qui. E tu? Che cosa leggi?"],["A","Einen Roman. Ich lese sehr gern.","Un romanzo. Mi piace molto leggere."],["B","Wie bitte? Was bedeutet „Roman“?","Come, scusa? Che cosa vuol dire «Roman»?"],["A","Ein Buch, eine Geschichte. Auf Italienisch „romanzo“.","Un libro, una storia. In italiano «romanzo»."]];
EX.l9=[
 {q:"{du} + {sprechen}:",o:["{du sprichst}","{du sprechst}","{du spricht}"],e:"e → i con {du} ed {er}: {sprichst}, {spricht}."},
 {q:"{er} + {fahren}:",o:["{er fährt}","{er fahrt}","{er fährst}"],e:"a → ä: {er fährt}."},
 {q:"{sie} (lei) + {lesen}:",o:["{sie liest}","{sie lest}","{sie lesst}"],e:"e → ie: {sie liest}."},
 {q:"«Chi è?»",o:["{Wer ist das?}","{Wo ist das?}","{Was ist das?}"],e:"{wer} = chi; {wo} = dove; {was} = che cosa."},
 {q:"«Dove vai?» (in macchina)",o:["{Wohin fährst du?}","{Wo fährst du?}","{Woher fährst du?}"],e:"Movimento verso un luogo: {wohin}."},
 {q:"«Non capisco.»",o:["{Ich verstehe nicht.}","{Ich nicht verstehe.}","{Ich verstehe kein.}"],e:"{nicht} dopo il verbo."},
 {q:"Ascolta: che cosa legge Ben?",au:"Einen Roman. Ich lese sehr gern.",o:["un romanzo","il giornale","una lettera"],e:"{einen Roman} = un romanzo."},
 {q:"Ascolta: che cosa fa Elena a Friburgo?",au:"Ich studiere hier.",o:["studia","lavora","è in vacanza"],e:"{ich studiere} = studio (all'università)."},
 {q:"Ascolta: chi parla molto bene tedesco?",au:"Mein Freund wohnt auch hier. Er spricht sehr gut Deutsch.",o:["il ragazzo di Elena","Elena","Ben"],e:"{mein Freund… er spricht sehr gut}."},
 {t:"type",q:"Completa: {Was} ＿ {du gern?} (essen)",a:["isst"],full:"Was isst du gern?"},
 {t:"type",q:"Completa: {Er} ＿ {den Bus.} (nehmen)",a:["nimmt"],full:"Er nimmt den Bus."},
 {t:"dict",au:"Wie bitte? Ich verstehe nicht."},
 {t:"say",zh:"Chiedi a qualcuno di parlare piano e di ripetere",it:"Langsam, bitte! Können Sie das bitte wiederholen?"},
 {t:"say",zh:"Di' quali lingue parli",it:"Ich spreche Italienisch, Englisch und ein bisschen Deutsch."}
];
VOC.l9=[
 ["was","che cosa",""],["wohin","dove (verso dove)",""],["warum","perché (domanda)",""],["wie viel","quanto",""],["fahren","andare (con un mezzo), guidare",""],["gehen","andare (a piedi)",""],["sprechen","parlare",""],["lesen","leggere",""],["sehen","vedere",""],["geben","dare",""],["schlafen","dormire",""],["verstehen","capire",""],["bedeuten","significare",""],["sagen","dire",""],["wiederholen","ripetere",""],
 ["Wie bitte?","come, scusi?",""],["langsam","lento, piano",""],["Kein Problem.","nessun problema",""],["auf Deutsch","in tedesco",""],["Englisch","inglese (la lingua)",""],["Sprache","lingua","f:Sprachen"],
 ["Roman","romanzo","m:Romane"],["Geschichte","storia","f:Geschichten"],["Zeitung","giornale","f:Zeitungen"],["Fahrrad","bicicletta","n:Fahrräder"],["Bus","autobus","m:Busse"],["Straße","strada, via","f:Straßen"],["Arbeit","lavoro","f:Arbeiten"],["Pizza","pizza","f:Pizzas"],["Problem","problema","n:Probleme"],["jeden Tag","ogni giorno",""],["Freiburg","Friburgo",""],["man", "si (impersonale)", ""]
];
EX.l9=EX.l9.concat([
 {t:"dict",au:"Sprichst du Deutsch?"},
 {t:"say",zh:"Chiedi che cosa vuol dire «Brötchen»",it:"Was bedeutet Brötchen?"},
 {t:"type",q:"Completa: {Du} ＿ {sehr gut Deutsch!} (sprechen)",a:["sprichst"],full:"Du sprichst sehr gut Deutsch!"}
]);
