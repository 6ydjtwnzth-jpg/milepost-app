DLG.l15=[["A","Hallo Clara! Wie war dein Wochenende?","Ciao Clara! Com'è andato il fine settimana?"],["B","Sehr schön! Ich habe meine Großeltern besucht.","Molto bello! Sono andata a trovare i miei nonni."],["A","Was habt ihr gemacht?","Che cosa avete fatto?"],["B","Am Samstag haben wir zusammen gekocht und viel gelacht.","Sabato abbiamo cucinato insieme e abbiamo riso molto."],["A","Und am Sonntag?","E domenica?"],["B","Am Sonntag habe ich lange geschlafen. Dann haben wir einen Film gesehen. Und du?","Domenica ho dormito a lungo. Poi abbiamo visto un film. E tu?"],["A","Ich habe die Wohnung aufgeräumt und eingekauft. Nicht sehr spannend!","Ho messo in ordine l'appartamento e ho fatto la spesa. Niente di emozionante!"],["B","Hast du Paul gesehen?","Hai visto Paul?"],["A","Ja, gestern. Er hat gesagt, er ruft dich heute an.","Sì, ieri. Ha detto che oggi ti chiama."]];
EX.l15=[
 {q:"«Ho fatto una torta.»",o:["{Ich habe einen Kuchen gemacht.}","{Ich habe gemacht einen Kuchen.}","{Ich bin einen Kuchen gemacht.}"],e:"Il participio in fondo; {machen} vuole {haben}."},
 {q:"Il participio di {sehen}:",o:["{gesehen}","{gesieht}","{gesehet}"],e:"Verbo forte: {gesehen}."},
 {q:"Il participio di {einkaufen}:",o:["{eingekauft}","{geeinkauft}","{einkauft}"],e:"Separabile: {ge-} in mezzo."},
 {q:"Il participio di {besuchen}:",o:["{besucht}","{gebesucht}","{besuchen}"],e:"Con {be-} niente {ge-}."},
 {q:"Il participio di {telefonieren}:",o:["{telefoniert}","{getelefoniert}","{telefonierte}"],e:"I verbi in {-ieren} non prendono {ge-}."},
 {q:"«Che cosa avete fatto?»",o:["{Was habt ihr gemacht?}","{Was habt ihr machen?}","{Was seid ihr gemacht?}"],e:"{habt} + participio {gemacht}."},
 {q:"Ascolta: chi è andata a trovare Clara?",au:"Ich habe meine Großeltern besucht.",o:["i nonni","i genitori","un'amica"],e:"{meine Großeltern}."},
 {q:"Ascolta: che cosa ha fatto domenica?",au:"Am Sonntag habe ich lange geschlafen. Dann haben wir einen Film gesehen.",o:["ha dormito e ha visto un film","ha cucinato","ha lavorato"],e:"{geschlafen}, {einen Film gesehen}."},
 {q:"Ascolta: che cosa ha fatto lui?",au:"Ich habe die Wohnung aufgeräumt und eingekauft.",o:["ha messo in ordine e fatto la spesa","è andato al cinema","ha dormito"],e:"{aufgeräumt}, {eingekauft}."},
 {t:"type",q:"Completa: {Gestern habe ich viel} ＿ {.} (arbeiten)",a:["gearbeitet"],full:"Gestern habe ich viel gearbeitet."},
 {t:"type",q:"Completa: {Wir} ＿ {einen Film gesehen.} (haben)",a:["haben"],full:"Wir haben einen Film gesehen."},
 {t:"dict",au:"Was hast du am Wochenende gemacht?"},
 {t:"say",zh:"Racconta tre cose che hai fatto ieri",it:"Gestern habe ich gearbeitet, eingekauft und gekocht."},
 {t:"say",zh:"Chiedi a un amico se ha telefonato a sua madre",it:"Hast du deine Mutter angerufen?"}
];
VOC.l15=[
 ["gestern","ieri",""],["vorgestern","l'altro ieri",""],["gestern Abend","ieri sera",""],["letzte Woche","la settimana scorsa",""],["letztes Jahr","l'anno scorso",""],["lange","a lungo",""],["lachen","ridere",""],["besuchen","visitare, andare a trovare",""],["erzählen","raccontare",""],["telefonieren","telefonare",""],["spannend","emozionante, avvincente",""],["Wie war…?","com'era…? com'è andato…?",""],
 ["gemacht","fatto (machen)",""],["gekocht","cucinato (kochen)",""],["gekauft","comprato (kaufen)",""],["gearbeitet","lavorato (arbeiten)",""],["gesehen","visto (sehen)",""],["geschlafen","dormito (schlafen)",""],["gegessen","mangiato (essen)",""],["getrunken","bevuto (trinken)",""],["geschrieben","scritto (schreiben)",""],["gelesen","letto (lesen)",""],["gesprochen","parlato (sprechen)",""],["genommen","preso (nehmen)",""],["eingekauft","fatto la spesa (einkaufen)",""],["aufgeräumt","messo in ordine (aufräumen)",""],["angerufen","telefonato (anrufen)",""],["besucht","visitato (besuchen)",""],["verstanden","capito (verstehen)",""],
 ["Großeltern","nonni","p"],["Brief","lettera","m:Briefe"],["E-Mail","e-mail","f:E-Mails"]
];
EX.l15=EX.l15.concat([
 {t:"dict",au:"Am Sonntag habe ich die Wohnung aufgeräumt."},
 {t:"say",zh:"Di': «Ieri sera ho letto un libro.»",it:"Gestern Abend habe ich ein Buch gelesen."},
 {t:"type",q:"Completa: {Hast du die E-Mail} ＿ {?} (schreiben)",a:["geschrieben"],full:"Hast du die E-Mail geschrieben?"}
]);
