DLG.l22=[["A","Guten Tag, Herr Rossi. Was fehlt Ihnen?","Buongiorno, signor Rossi. Che cos'ha?"],["B","Mir tut der Hals weh und ich habe Fieber.","Mi fa male la gola e ho la febbre."],["A","Seit wann haben Sie das?","Da quando ce l'ha?"],["B","Seit drei Tagen. Und ich habe auch Kopfschmerzen.","Da tre giorni. E ho anche mal di testa."],["A","Das ist eine Grippe. Sie sollten im Bett bleiben und viel trinken.","È un'influenza. Dovrebbe restare a letto e bere molto."],["B","Könnten Sie mir etwas gegen das Fieber geben?","Potrebbe darmi qualcosa contro la febbre?"],["A","Ja, ich schreibe Ihnen ein Rezept. Nehmen Sie die Tabletten dreimal am Tag.","Sì, le scrivo una ricetta. Prenda le pastiglie tre volte al giorno."],["B","Ich hätte gern auch eine Krankschreibung für die Arbeit.","Vorrei anche un certificato di malattia per il lavoro."],["A","Natürlich. Und gute Besserung!","Certo. E buona guarigione!"],["B","Vielen Dank, Frau Doktor.","Grazie mille, dottoressa."]];
EX.l22=[
 {q:"«Mi fa male la testa.»",o:["{Mir tut der Kopf weh.}","{Ich habe Kopf weh.}","{Mich tut der Kopf weh.}"],e:"{wehtun}: la persona al dativo, la parte del corpo è il soggetto."},
 {q:"«Mi fanno male i piedi.»",o:["{Mir tun die Füße weh.}","{Mir tut die Füße weh.}","{Mir tun die Fuße weh.}"],e:"Plurale: {tun}; {der Fuß} → {die Füße}."},
 {q:"«Potrebbe aiutarmi?»",o:["{Könnten Sie mir helfen?}","{Können Sie mich helfen?}","{Könnten Sie mich helfen?}"],e:"Cortesia: {könnten}; {helfen} + dativo: {mir}."},
 {q:"«Dovresti riposare.»",o:["{Du solltest dich ausruhen.}","{Du sollst dich ausruhen.}","{Du musstest dich ausruhen.}"],e:"Consiglio: {solltest}. {du musstest} = dovevi."},
 {q:"«da tre giorni»:",o:["{seit drei Tagen}","{seit drei Tage}","{vor drei Tagen}"],e:"{seit} + dativo plurale ({-n}); {vor drei Tagen} = tre giorni fa."},
 {q:"Imperativo con {du}: «Prendi la medicina!»",o:["{Nimm das Medikament!}","{Nehm das Medikament!}","{Nimmst das Medikament!}"],e:"e → i anche all'imperativo: {nimm}."},
 {q:"Ascolta: che cosa gli fa male?",au:"Mir tut der Hals weh und ich habe Fieber.",o:["la gola","la testa","la pancia"],e:"{der Hals} = la gola."},
 {q:"Ascolta: che cosa consiglia la dottoressa?",au:"Sie sollten im Bett bleiben und viel trinken.",o:["restare a letto e bere molto","andare al lavoro","fare sport"],e:"{im Bett bleiben und viel trinken}."},
 {q:"Ascolta: quante volte al giorno?",au:"Nehmen Sie die Tabletten dreimal am Tag.",o:["tre volte","due volte","una volta"],e:"{dreimal} = tre volte."},
 {t:"type",q:"Completa: {An deiner Stelle} ＿ {ich zum Arzt gehen.} (werden, Konjunktiv II)",a:["würde"],full:"An deiner Stelle würde ich zum Arzt gehen."},
 {t:"type",q:"Completa: {Ich habe seit zwei} ＿ {Husten.} (Tag)",a:["Tagen"],full:"Ich habe seit zwei Tagen Husten."},
 {t:"dict",au:"Ich habe seit drei Tagen Kopfschmerzen."},
 {t:"say",zh:"Dal medico: di' che hai la febbre e la tosse",it:"Ich habe Fieber und Husten."},
 {t:"say",zh:"Al telefono con un'amica malata: dille di restare a letto e di bere molto tè",it:"Bleib im Bett und trink viel Tee!"}
];
VOC.l22=[
 ["Was fehlt Ihnen?","che cos'ha?",""],["wehtun","fare male",""],["Mir tut … weh.","mi fa male…",""],["Seit wann?","da quando?",""],["seit","da (+ tempo)",""],["gegen","contro",""],["dreimal","tre volte",""],["Gute Besserung!","buona guarigione!",""],["würde","(ich würde…) -rei: condizionale",""],["hätte","avrei (haben)",""],["wäre","sarei (sein)",""],["könnte","potrei (können)",""],["sollte","dovrei (sollen)",""],["An deiner Stelle…","al posto tuo…",""],["sich ausruhen","riposarsi",""],["erkältet","raffreddato",""],
 ["Gesundheit","salute","f:-"],["Körper","corpo","m:Körper"],["Kopf","testa","m:Köpfe"],["Hals","gola; collo","m:Hälse"],["Bauch","pancia","m:Bäuche"],["Rücken","schiena","m:Rücken"],["Arm","braccio","m:Arme"],["Bein","gamba","n:Beine"],["Fuß","piede","m:Füße"],["Hand","mano","f:Hände"],["Zahn","dente","m:Zähne"],["Auge","occhio","n:Augen"],
 ["Schmerz","dolore","m:Schmerzen"],["Kopfschmerzen","mal di testa","p"],["Fieber","febbre","n:-"],["Husten","tosse","m:-"],["Schnupfen","raffreddore","m:-"],["Grippe","influenza","f:Grippen"],["Rezept","ricetta","n:Rezepte"],["Tablette","pastiglia","f:Tabletten"],["Medikament","medicina, farmaco","n:Medikamente"],["Krankschreibung","certificato di malattia","f:Krankschreibungen"],["Doktor","dottore","m:Doktoren"],["leben", "vivere", ""]
];
EX.l22=EX.l22.concat([
 {t:"dict",au:"Könnten Sie mir etwas gegen das Fieber geben?"},
 {t:"say",zh:"Dai un consiglio a un amico stanco",it:"Du solltest mehr schlafen."},
 {t:"type",q:"Completa: {Mir} ＿ {die Augen weh.} (tun)",a:["tun"],full:"Mir tun die Augen weh."}
]);
