DLG.l13=[["A","Hallo Tim! Hast du heute Abend Zeit? Ich will ins Kino gehen.","Ciao Tim! Hai tempo stasera? Voglio andare al cinema."],["B","Heute Abend kann ich leider nicht. Ich muss arbeiten.","Stasera purtroppo non posso. Devo lavorare."],["A","Schade. Und morgen? Hast du Lust auf ein Konzert?","Peccato. E domani? Hai voglia di un concerto?"],["B","Morgen? Ja, gern! Wann fängt es an?","Domani? Sì, volentieri! Quando comincia?"],["A","Um acht. Wollen wir vorher zusammen essen?","Alle otto. Vogliamo mangiare insieme prima?"],["B","Gute Idee! Treffen wir uns um sieben am Bahnhof?","Buona idea! Ci vediamo alle sette alla stazione?"],["A","Okay. Darf meine Schwester auch mitkommen?","Va bene. Può venire anche mia sorella?"],["B","Natürlich! Bis morgen!","Certo! A domani!"]];
EX.l13=[
 {q:"«Devo lavorare.»",o:["{Ich muss arbeiten.}","{Ich muss zu arbeiten.}","{Ich musst arbeiten.}"],e:"Modale + infinito, senza {zu}; {ich muss}."},
 {q:"«Qui non si può fumare.» (è vietato)",o:["{Hier darf man nicht rauchen.}","{Hier muss man nicht rauchen.}","{Hier kann man nicht rauchen.}"],e:"Divieto: {nicht dürfen}."},
 {q:"«Domani non devo alzarmi presto.» (non è necessario)",o:["{Morgen muss ich nicht früh aufstehen.}","{Morgen darf ich nicht früh aufstehen.}","{Morgen muss ich nicht früh auf stehen.}"],e:"Non necessario: {nicht müssen}; all'infinito {aufstehen} è unito."},
 {q:"«Puoi venire anche tu?»",o:["{Kannst du mitkommen?}","{Kannst du kommen mit?}","{Kannst du mitkommst?}"],e:"L'infinito in fondo, unito: {mitkommen}."},
 {q:"{er} + {wollen}:",o:["{er will}","{er willt}","{er wollt}"],e:"{ich will}, {er will}: senza {-t}."},
 {q:"Rifiuti un invito con gentilezza:",o:["{Leider kann ich nicht.}","{Ich will nicht.}","{Nein, nie.}"],e:"{Leider kann ich nicht} è il modo più cortese."},
 {q:"Ascolta: perché Tim non può stasera?",au:"Heute Abend kann ich leider nicht. Ich muss arbeiten.",o:["deve lavorare","deve studiare","è stanco"],e:"{Ich muss arbeiten}."},
 {q:"Ascolta: dove si vedono?",au:"Treffen wir uns um sieben am Bahnhof?",o:["alla stazione alle sette","al cinema alle otto","alla stazione alle otto"],e:"{um sieben am Bahnhof}."},
 {q:"Ascolta: chi vuole venire?",au:"Darf meine Schwester auch mitkommen?",o:["la sorella","il fratello","la madre"],e:"{meine Schwester}."},
 {t:"type",q:"Completa: {Wir} ＿ {heute früh aufstehen.} (müssen)",a:["müssen"],full:"Wir müssen heute früh aufstehen."},
 {t:"type",q:"Completa: {Hast du Lust auf ein Konzert? —} ＿ {, gern!}",a:["Ja"],full:"Hast du Lust auf ein Konzert? — Ja, gern!"},
 {t:"dict",au:"Leider kann ich nicht. Ich muss arbeiten."},
 {t:"say",zh:"Invita un'amica al cinema sabato alle nove",it:"Hast du Lust? Wollen wir am Samstag um neun ins Kino gehen?"},
 {t:"say",zh:"Di' che il medico dice che devi bere molta acqua",it:"Ich soll viel Wasser trinken."}
];
VOC.l13=[
 ["wollen","volere",""],["müssen","dovere (necessità)",""],["dürfen","potere (avere il permesso)",""],["sollen","dovere (su richiesta di altri)",""],["man","si (impersonale)",""],["rauchen","fumare",""],["treffen","incontrare",""],["sich treffen","incontrarsi, vedersi",""],["einladen","invitare; offrire",""],
 ["Lust","voglia","f:-"],["Hast du Lust auf…?","hai voglia di…?",""],["Kino","cinema","n:Kinos"],["ins Kino","al cinema",""],["Idee","idea","f:Ideen"],["Gute Idee!","buona idea!",""],["Mal","volta","n:Male"],["Vielleicht ein anderes Mal.","magari un'altra volta",""],["vielleicht","forse",""],["natürlich","naturalmente, certo",""],["klar","chiaro; certo!",""],["okay","va bene",""],["vorher","prima",""],["heute Abend","stasera",""],["Termin","appuntamento","m:Termine"],["Party","festa","f:Partys"]
];
EX.l13=EX.l13.concat([
 {t:"dict",au:"Hast du Lust auf ein Konzert?"},
 {t:"say",zh:"Rispondi a un invito: «Buona idea! A che ora?»",it:"Gute Idee! Um wie viel Uhr?"},
 {t:"type",q:"Completa: {Im Museum} ＿ {man nicht essen.} (dürfen)",a:["darf"],full:"Im Museum darf man nicht essen."}
]);
