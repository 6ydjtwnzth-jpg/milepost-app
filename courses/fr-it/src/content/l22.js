DLG.l22=[["A","Bonjour, madame. Qu'est-ce qui ne va pas ?","Buongiorno, signora. Che cosa c'è che non va?"],["B","J'ai mal à la gorge et j'ai de la fièvre depuis hier.","Ho mal di gola e ho la febbre da ieri."],["A","Vous toussez ?","Ha la tosse?"],["B","Oui, un peu, surtout la nuit.","Sì, un po', soprattutto di notte."],["A","C'est une petite grippe. Il faut prendre ce sirop trois fois par jour, et vous devriez rester au lit deux jours.","È una piccola influenza. Bisogna prendere questo sciroppo tre volte al giorno, e dovrebbe restare a letto due giorni."],["B","Pourriez-vous me faire un certificat pour mon travail ?","Potrebbe farmi un certificato per il lavoro?"],["A","Bien sûr. Et buvez beaucoup d'eau !","Certo. E beva molta acqua!"]];
EX.l22=[
 {q:"Chiedi con gentilezza «Potrebbe aiutarmi?»",o:["{Pourriez-vous m'aider ?}","{Pouvez-vous m'aidez ?}","{Pourrez-vous m'aider ?}"],e:"{pourriez} = condizionale di {pouvoir}."},
 {q:"Un consiglio: «Dovresti riposarti»",o:["{Tu devrais te reposer.}","{Tu dois te reposer.}","{Tu devras te reposer.}"],e:"Consiglio: condizionale."},
 {q:"«Vorrei un appuntamento» (condizionale):",o:["{Je voudrais un rendez-vous.}","{Je voudrai un rendez-vous.}","{Je voulais un rendez-vous.}"],e:"{je voudrais} con la s: condizionale."},
 {q:"«Bisogna prendere il treno»:",o:["{Il faut prendre le train.}","{Il faut de prendre le train.}","{On faut prendre le train.}"],e:"{il faut} + infinito."},
 {q:"«Ho la febbre da tre giorni»:",o:["{J'ai de la fièvre depuis trois jours.}","{J'ai de la fièvre de trois jours.}","{J'ai fièvre pendant trois jours.}"],e:"«da» + durata = {depuis}."},
 {q:"Ascolta: che cosa le fa male?",au:"J'ai mal à la gorge.",o:["la gola","la testa","la pancia"],e:"{la gorge} = la gola."},
 {t:"type",q:"Completa: {J'}＿ {voyager au Japon.} (aimer, condizionale)",a:["aimerais"],full:"J'aimerais voyager au Japon."},
 {t:"dict",au:"Pourriez-vous m'aider ?"},
 {t:"say",zh:"In farmacia: hai mal di testa, chiedi con gentilezza se possono consigliarti qualcosa",it:"Bonjour, j'ai mal à la tête. Pourriez-vous me conseiller quelque chose ?"}
];
VOC.l22=[
 ["corps", "corpo", "m"],["main", "mano", "f"],["les yeux", "gli occhi (un œil: un occhio)", ""],["visage", "viso", "m"],["voix", "voce", "f"],["grave", "grave", ""],["peine", "pena, fatica (ça vaut la peine: ne vale la pena)", "f"],["service", "servizio; favore", "m"],["utiliser", "usare", ""],
 ["santé","salute","f"],["docteur","dottore","m"],["gorge","gola","f"],["ventre","pancia","m"],["dos","schiena","m"],["fièvre","febbre","f"],["grippe","influenza","f"],["rhume","raffreddore","m"],
 ["tousser","tossire",""],["sirop","sciroppo","m"],["médicament","medicina","m"],["ordonnance","ricetta medica","f"],["certificat","certificato","m"],["il faut","bisogna",""],["depuis","da (tempo)",""],
 ["surtout","soprattutto",""],["se reposer","riposarsi",""],["conseiller","consigliare",""],["conseil","consiglio","m"],["à ta place","al posto tuo",""],["fois","volta","f"],["fumer","fumare",""],
 ["poste","ufficio postale","f"],["colis","pacco","m"],["quelque chose","qualcosa",""],["avoir mal à","avere male a",""]
];
EX.l22=EX.l22.concat([
 {t:"dict",au:"J'ai mal à la gorge."},
 {t:"say",zh:"Chiedi al medico un certificato per il lavoro",it:"Pourriez-vous me faire un certificat pour mon travail ?"},
 {t:"type",q:"Completa: {Vous} ＿ {rester au lit deux jours.} (devoir, condizionale)",a:["devriez"],full:"C'est une petite grippe. Il faut prendre ce sirop trois fois par jour, et vous devriez rester au lit deux jours."}
]);
