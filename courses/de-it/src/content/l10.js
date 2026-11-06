DLG.l10=[["A","Wann stehst du morgens auf, Julia?","A che ora ti alzi la mattina, Julia?"],["B","Um halb sieben. Dann dusche ich und frühstücke.","Alle sei e mezza. Poi faccio la doccia e colazione."],["A","So früh! Ich stehe erst um acht auf.","Così presto! Io mi alzo solo alle otto."],["B","Mein Zug fährt um Viertel nach sieben ab.","Il mio treno parte alle sette e un quarto."],["A","Und wann fängt deine Arbeit an?","E quando comincia il tuo lavoro?"],["B","Um acht. Ich arbeite bis fünf. Dann kaufe ich ein.","Alle otto. Lavoro fino alle cinque. Poi faccio la spesa."],["A","Und abends?","E la sera?"],["B","Ich koche, rufe meine Mutter an und sehe ein bisschen fern.","Cucino, telefono a mia madre e guardo un po' la tv."],["A","Gehst du nie aus?","Non esci mai?"],["B","Doch, manchmal! Am Freitag gehe ich immer mit Freunden aus.","Sì che esco, a volte! Il venerdì esco sempre con gli amici."]];
EX.l10=[
 {q:"«Mi alzo alle sette.»",o:["{Ich stehe um sieben auf.}","{Ich aufstehe um sieben.}","{Ich stehe auf um sieben.}"],e:"Verbo separabile: il prefisso {auf} in fondo."},
 {q:"«Telefono a mia madre.»",o:["{Ich rufe meine Mutter an.}","{Ich anrufe meine Mutter.}","{Ich rufe an meine Mutter.}"],e:"{an} va in fondo alla frase."},
 {q:"{du} + {fernsehen}:",o:["{du siehst fern}","{du fernsiehst}","{du sehst fern}"],e:"{sehen} è forte: {siehst}; {fern} in fondo."},
 {q:"«Non esci mai? — Sì che esco!»",o:["{Gehst du nie aus? — Doch!}","{Gehst du nie aus? — Ja!}","{Gehst du nie aus? — Nein!}"],e:"Sì a una domanda negativa: {doch}."},
 {q:"«a volte»:",o:["{manchmal}","{meistens}","{nie}"],e:"{manchmal} = a volte; {meistens} = di solito; {nie} = mai."},
 {q:"Quale verbo non si separa?",o:["{verstehen}","{aufstehen}","{anrufen}"],e:"{ver-} non si stacca mai: {Ich verstehe}."},
 {q:"Ascolta: a che ora si alza Julia?",au:"Um halb sieben. Dann dusche ich und frühstücke.",o:["alle 6:30","alle 7:30","alle 8:00"],e:"{halb sieben} = 6:30."},
 {q:"Ascolta: che cosa fa dopo il lavoro?",au:"Ich arbeite bis fünf. Dann kaufe ich ein.",o:["fa la spesa","va in palestra","dorme"],e:"{einkaufen} = fare la spesa."},
 {q:"Ascolta: che cosa fa il venerdì?",au:"Am Freitag gehe ich immer mit Freunden aus.",o:["esce con gli amici","resta a casa","lavora"],e:"{ausgehen} = uscire (la sera)."},
 {t:"type",q:"Completa: {Der Film fängt um acht} ＿ {.}",a:["an"],full:"Der Film fängt um acht an."},
 {t:"type",q:"Completa: {Wann} ＿ {du auf?} (stehen)",a:["stehst"],full:"Wann stehst du auf?"},
 {t:"dict",au:"Ich stehe um sieben Uhr auf."},
 {t:"say",zh:"Racconta la tua mattina: quando ti alzi e quando cominci a lavorare",it:"Ich stehe um sieben auf. Meine Arbeit fängt um neun an."},
 {t:"say",zh:"Rispondi «Sì che ho tempo!» alla domanda «Hast du keine Zeit?»",it:"Doch, ich habe Zeit!"}
];
VOC.l10=[
 ["aufstehen","alzarsi",""],["anrufen","telefonare",""],["einkaufen","fare la spesa",""],["fernsehen","guardare la tv",""],["anfangen","cominciare",""],["abfahren","partire (con un mezzo)",""],["mitkommen","venire con (qualcuno)",""],["ausgehen","uscire (la sera); spegnersi (la luce)",""],["aufräumen","mettere in ordine",""],["duschen","fare la doccia",""],["frühstücken","fare colazione",""],
 ["mittags","a mezzogiorno",""],["nachmittags","il pomeriggio",""],["nachts","di notte",""],["immer","sempre",""],["meistens","di solito, quasi sempre",""],["manchmal","a volte",""],["selten","raramente",""],["nie","mai",""],["erst","solo, non prima di",""],["früh","presto",""],["spät","tardi",""],["doch","sì (a una domanda negativa); però",""],
 ["Frühstück","colazione","n:Frühstücke"],["Mittagessen","pranzo","n:Mittagessen"],["Abendessen","cena","n:Abendessen"],["Film","film","m:Filme"],["mit","con",""],["Tagesablauf","giornata (le cose che si fanno)","m:Tagesabläufe"]
];
EX.l10=EX.l10.concat([
 {t:"dict",au:"Abends sehe ich fern."},
 {t:"say",zh:"Di' che la sera telefoni sempre a tua madre",it:"Abends rufe ich immer meine Mutter an."},
 {t:"type",q:"Completa: {Nach der Arbeit} ＿ {ich ein.} (kaufen)",a:["kaufe"],full:"Nach der Arbeit kaufe ich ein."}
]);
