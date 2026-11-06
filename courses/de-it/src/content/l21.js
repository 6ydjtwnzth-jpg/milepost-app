DLG.l21=[["A","Was machst du nach dem Studium, Sofia?","Che cosa farai dopo l'università, Sofia?"],["B","Ich gehe nach Österreich! Ich werde in einem Hotel in Innsbruck arbeiten.","Vado in Austria! Lavorerò in un albergo a Innsbruck."],["A","Toll! Warum gerade Österreich?","Fantastico! Perché proprio l'Austria?"],["B","Weil ich die Berge liebe und weil ich mein Deutsch verbessern will.","Perché amo le montagne e perché voglio migliorare il mio tedesco."],["A","Wie lange bleibst du dort?","Quanto tempo resti lì?"],["B","Ein Jahr. Wenn mir die Arbeit gefällt, bleibe ich länger.","Un anno. Se il lavoro mi piace, resto di più."],["A","Und dein Freund? Kommt er mit?","E il tuo ragazzo? Viene con te?"],["B","Nein, er hat hier eine Stelle. Aber er sagt, dass er mich oft besuchen wird.","No, ha un lavoro qui. Ma dice che verrà spesso a trovarmi."],["A","Ich werde dich vermissen!","Mi mancherai!"],["B","Ich dich auch! Wenn du Zeit hast, kommst du mich besuchen, okay?","Anche tu a me! Se hai tempo, vieni a trovarmi, va bene?"]];
EX.l21=[
 {q:"«Imparo il tedesco perché voglio lavorare a Vienna.»",o:["{Ich lerne Deutsch, weil ich in Wien arbeiten will.}","{Ich lerne Deutsch, weil ich will in Wien arbeiten.}","{Ich lerne Deutsch, weil will ich in Wien arbeiten.}"],e:"Dopo {weil} il verbo coniugato in fondo, dopo l'infinito."},
 {q:"«Se ho tempo, ti chiamo.»",o:["{Wenn ich Zeit habe, rufe ich dich an.}","{Wenn ich Zeit habe, ich rufe dich an.}","{Wenn ich habe Zeit, rufe ich dich an.}"],e:"Verbo in fondo nella secondaria; la principale comincia con il verbo."},
 {q:"«Credo che sia una buona idea.»",o:["{Ich glaube, dass das eine gute Idee ist.}","{Ich glaube, dass ist das eine gute Idee.}","{Ich glaube dass das ist eine gute Idee.}"],e:"Virgola, {dass}, verbo in fondo."},
 {q:"«Lavorerò in un albergo.»",o:["{Ich werde in einem Hotel arbeiten.}","{Ich werde arbeiten in einem Hotel.}","{Ich wird in einem Hotel arbeiten.}"],e:"{werden} + infinito in fondo; {ich werde}."},
 {q:"«tra due anni»:",o:["{in zwei Jahren}","{nach zwei Jahren}","{zwischen zwei Jahren}"],e:"Nel futuro: {in}."},
 {q:"{du} + {werden}:",o:["{du wirst}","{du werdest}","{du wirdst}"],e:"{ich werde}, {du wirst}, {er wird}."},
 {q:"Ascolta: dove lavorerà Sofia?",au:"Ich werde in einem Hotel in Innsbruck arbeiten.",o:["in un albergo","in una scuola","in un ristorante"],e:"{in einem Hotel}."},
 {q:"Ascolta: perché l'Austria?",au:"Weil ich die Berge liebe.",o:["ama le montagne","ha parenti lì","è economica"],e:"{die Berge} = le montagne."},
 {q:"Ascolta: che cosa farà il ragazzo?",au:"Er sagt, dass er mich oft besuchen wird.",o:["andrà spesso a trovarla","andrà con lei","resterà lì un anno"],e:"{mich oft besuchen}."},
 {t:"type",q:"Completa: {Ich bleibe zu Hause, weil ich krank} ＿ {.} (sein)",a:["bin"],full:"Ich bleibe zu Hause, weil ich krank bin."},
 {t:"type",q:"Completa: {Morgen} ＿ {es regnen.} (werden)",a:["wird"],full:"Morgen wird es regnen."},
 {t:"dict",au:"Wenn ich Zeit habe, rufe ich dich an."},
 {t:"say",zh:"Racconta un progetto e spiega perché",it:"Nächstes Jahr fahre ich nach Berlin, weil ich mein Deutsch verbessern will."},
 {t:"say",zh:"Di' a un amico: «Mi mancherai!»",it:"Ich werde dich vermissen!"}
];
VOC.l21=[
 ["werden","diventare; ausiliare del futuro",""],["weil","perché (risposta)",""],["dass","che (congiunzione)",""],["glauben","credere",""],["verbessern","migliorare",""],["vermissen","sentire la mancanza di",""],["Ich werde dich vermissen!","mi mancherai!",""],["gerade","proprio; in questo momento",""],["länger","più a lungo",""],["nächstes Jahr","l'anno prossimo",""],["nächsten Monat","il mese prossimo",""],["in zwei Jahren","tra due anni",""],["bald","presto, tra poco",""],["Bis bald!","a presto!",""],["Plan","progetto, piano","m:Pläne"],["Zukunft","futuro","f:-"],
 ["Studium","studi (universitari)","n:Studien"],["Universität","università","f:Universitäten"],["Ausland","estero","n:-"],["im Ausland","all'estero",""],["Stelle","posto (di lavoro)","f:Stellen"],["Hotel","albergo","n:Hotels"],["Monat","mese","m:Monate"],["Visum","visto","n:Visa"],["heiraten","sposarsi",""],["krank","malato",""],["Innsbruck","Innsbruck",""]
];
EX.l21=EX.l21.concat([
 {t:"dict",au:"In zwei Jahren will ich in Deutschland wohnen."},
 {t:"say",zh:"Di' che credi che sia una buona idea",it:"Ich glaube, dass das eine gute Idee ist."},
 {t:"type",q:"Completa: {Er sagt,} ＿ {er morgen kommt.} (che)",a:["dass"],full:"Er sagt, dass er morgen kommt."}
]);
