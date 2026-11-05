DLG.l21=[["A","Alors, Yanis, quels sont tes projets après tes études ?","Allora, Yanis, quali sono i tuoi progetti dopo gli studi?"],["B","Je partirai au Canada en septembre. Je travaillerai à Montréal pendant un an.","Partirò per il Canada a settembre. Lavorerò a Montréal per un anno."],["A","C'est génial ! Tu parleras français là-bas aussi.","È fantastico! Parlerai francese anche là."],["B","Oui, mais avec l'accent québécois ! Et toi ?","Sì, ma con l'accento del Québec! E tu?"],["A","Moi, je resterai ici. Si je trouve un bon travail, j'achèterai un appartement.","Io resterò qui. Se trovo un buon lavoro, comprerò un appartamento."],["B","Tu viendras me voir à Montréal ?","Verrai a trovarmi a Montréal?"],["A","Si j'ai assez d'argent, je viendrai, promis !","Se avrò abbastanza soldi, verrò, promesso!"]];
EX.l21=[
 {q:"Futuro di {aller}, con {je}:",o:["{j'irai}","{j'allerai}","{je vais}"],e:"Radice irregolare {ir-}."},
 {q:"Futuro di {être}, con {nous}:",o:["{nous serons}","{nous êterons}","{nous serions}"],e:"Radice {ser-}; {serions} è il condizionale."},
 {q:"Futuro di {prendre}, con {tu}:",o:["{tu prendras}","{tu prenderas}","{tu prendreras}"],e:"I verbi in -re perdono la e: {prendr-}."},
 {q:"«Se domani farà bello, andremo al mare»:",o:["{S'il fait beau demain, nous irons à la mer.}","{S'il fera beau demain, nous irons à la mer.}","{Si il fait beau demain, nous allons à la mer.}"],e:"{si} + presente, poi futuro; {si il} → {s'il}."},
 {q:"Ascolta: presente o futuro?",au:"Ils parleront français.",o:["futuro","presente"],e:"{-ront} si sente: futuro."},
 {q:"«Verrai a trovarmi?»",o:["{Tu viendras me voir ?}","{Tu venirais me voir ?}","{Tu vas venir me voir ?}"],e:"{venir} → {viendr-}. (Anche {Tu vas venir me voir ?} è corretto, ma è il futuro vicino.)"},
 {t:"type",q:"Completa: {L'année prochaine, je} ＿ {en Espagne.} (aller, futur)",a:["irai"],full:"L'année prochaine, j'irai en Espagne."},
 {t:"dict",au:"Si j'ai le temps, je viendrai."},
 {t:"say",zh:"Racconta un progetto: l'anno prossimo, se avrai soldi, viaggerai in Francia",it:"L'année prochaine, si j'ai de l'argent, je voyagerai en France."}
];
VOC.l21=[
 ["plan", "piano, progetto", "m"],["risque", "rischio", "m"],["confiance", "fiducia", "f"],["situation", "situazione", "f"],["certains", "alcuni", ""],["ainsi", "così", ""],["probablement", "probabilmente", ""],["simplement", "semplicemente", ""],["complètement", "completamente", ""],["absolument", "assolutamente", ""],
 ["projet","progetto","m"],["études","studi","fp"],["septembre","settembre","m"],["l'année prochaine","l'anno prossimo",""],["année","anno","f"],["prochain","prossimo",""],["demain","domani",""],["avenir","futuro","m"],
 ["là-bas","laggiù, là",""],["accent","accento","m"],["québécois","del Québec",""],["appartement","appartamento","m"],["argent","soldi; argento","m"],["promis","promesso",""],
 ["venir voir","venire a trovare",""],["changer","cambiare",""],["devenir","diventare",""],["un jour","un giorno",""],["lentement","lentamente",""],["président","presidente","m"],["temps","tempo","m"]
];
EX.l21=EX.l21.concat([
 {t:"dict",au:"Je partirai au Canada en septembre."},
 {t:"say",zh:"Di' che, se trovi un buon lavoro, comprerai un appartamento",it:"Moi, je resterai ici. Si je trouve un bon travail, j'achèterai un appartement."},
 {t:"type",q:"Completa: {Si j'ai assez d'argent, je} ＿ {, promis !} (venir, futuro)",a:["viendrai"],full:"Si j'ai assez d'argent, je viendrai, promis !"}
]);
