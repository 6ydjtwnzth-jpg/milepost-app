DLG.l17=[["A","Mamie, quand tu étais petite, tu habitais où ?","Nonna, quando eri piccola, dove abitavi?"],["B","Nous habitions à la campagne, près de Dijon. La maison était petite mais il y avait un grand jardin.","Abitavamo in campagna, vicino a Digione. La casa era piccola ma c'era un grande giardino."],["A","Et qu'est-ce que tu faisais après l'école ?","E che cosa facevi dopo la scuola?"],["B","On jouait dehors avec mes frères. Il n'y avait pas de télé, tu sais !","Giocavamo fuori con i miei fratelli. Non c'era la tv, sai!"],["A","Et l'été ?","E d'estate?"],["B","Tous les étés, nous allions chez ma tante, au bord de la mer.","Ogni estate andavamo da mia zia, al mare."],["A","Ça devait être génial !","Doveva essere fantastico!"]];
EX.l17=[
 {q:"{je} + {avoir}, imparfait:",o:["{j'avais}","{j'aivais}","{j'ais}"],e:"{nous avons} → radice {av-}: {j'avais}."},
 {q:"{nous} + {être}, imparfait:",o:["{nous étions}","{nous êtions}","{nous étons}"],e:"Radice irregolare {ét-}."},
 {q:"{je} + {faire}, imparfait:",o:["{je faisais}","{je fairais}","{je fesais}"],e:"{nous faisons} → {je faisais}."},
 {q:"«Ogni estate andavamo al mare»:",o:["{Tous les étés, nous allions à la mer.}","{Tous les étés, nous sommes allés à la mer.}","{Tous les étés, nous allons à la mer.}"],e:"Abitudine nel passato: imparfait."},
 {q:"Ascolta: quante persone?",au:"Ils jouaient dehors.",o:["più persone, ma suona come {il jouait}","una sola persona"],e:"{il jouait} e {ils jouaient} si pronunciano uguali."},
 {q:"«Non c'era la tv»:",o:["{Il n'y avait pas de télé.}","{Il n'était pas de télé.}","{Il n'y a pas eu télé.}"],e:"{il y a} → {il y avait}."},
 {t:"type",q:"Completa: {Quand j'}＿ {petit, j'habitais à Rome.} (être)",a:["étais"],full:"Quand j'étais petit, j'habitais à Rome."},
 {t:"dict",au:"La maison était petite."},
 {t:"say",zh:"Racconta: quando eri piccolo/a, dove abitavi e che cosa facevi d'estate",it:"Quand j'étais petit, j'habitais à Naples. L'été, j'allais à la plage avec mes cousins."}
];
VOC.l17=[
 ["vérité", "verità", "f"],["rêve", "sogno", "m"],["cœur", "cuore", "m"],
 ["mamie","nonna (familiare)","f"],["papi","nonno (familiare)","m"],["petit","piccolo",""],["autrefois","una volta, in passato",""],["d'habitude","di solito",""],["tous les jours","tutti i giorni",""],
 ["dehors","fuori",""],["après l'école","dopo la scuola",""],["au bord de la mer","al mare",""],["grands-parents","nonni","mp"],["boulanger","panettiere","m"],["enfance","infanzia","f"],["souvenir","ricordo","m"],
 ["génial","fantastico, geniale",""],["savoir","sapere",""],["plein","pieno",""],["vieux","vecchio",""],["village","paese, villaggio","m"],["ferme","fattoria","f"],["vache","mucca","f"],["arbre","albero","m"],["rivière","fiume","f"]
];
EX.l17=EX.l17.concat([
 {t:"dict",au:"Il n'y avait pas de télé, tu sais !"},
 {t:"say",zh:"Chiedi alla nonna dove abitava quando era piccola",it:"Mamie, quand tu étais petite, tu habitais où ?"},
 {t:"type",q:"Completa: {Tous les étés, nous} ＿ {chez ma tante.} (aller, imparfait)",a:["allions"],full:"Tous les étés, nous allions chez ma tante, au bord de la mer."}
]);
