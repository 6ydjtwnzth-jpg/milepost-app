DLG.l5=[["A","Tu as des frères et sœurs, Emma ?","Hai fratelli e sorelle, Emma?"],["B", "Oui, j'ai un frère et une sœur.", "Sì, ho un fratello e una sorella."],["A", "Comment s'appelle ton frère ?", "Come si chiama tuo fratello?"],["B", "Il s'appelle Hugo.", "Si chiama Hugo."],["A","Et ta sœur ?","E tua sorella?"],["B", "Ma sœur s'appelle Chloé.", "Mia sorella si chiama Chloé."],["A", "Elle est mariée ?", "È sposata?"],["B", "Oui, elle a un mari et deux enfants.", "Sì, ha un marito e due figli."],["A","Alors tu es tante !","Allora sei zia!"],["B","Oui ! Et toi, tu as une grande famille ?","Sì! E tu, hai una famiglia grande?"],["A","Non, je suis fils unique. Mais j'ai beaucoup de cousins.","No, sono figlio unico. Ma ho tanti cugini."]];
EX.l5=[
 {q:"{nous} + {avoir}:",o:["{nous avons}","{nous ont}","{nous avez}"],e:"{nous avons}, {vous avez}, {ils ont}."},
 {q:"Ascolta: «sono» o «hanno»?",au:"Ils ont deux enfants.",o:["hanno: {ils ont}","sono: {ils sont}"],e:"{ils ont} ha la liaison: «il-zon», con la s sonora."},
 {q:"«Mia sorella» si dice:",o:["{ma sœur}","{mon sœur}","{la ma sœur}"],e:"Femminile: {ma}, e senza articolo."},
 {q:"«La mia amica» si dice:",o:["{mon amie}","{ma amie}","{la mon amie}"],e:"Davanti a vocale si usa {mon} anche al femminile."},
 {q:"Marie parla di suo marito: ＿ {mari}",o:["{son mari}","{sa mari}","{leur mari}"],e:"Il possessivo concorda con {mari} (maschile): {son}."},
 {q:"«I loro figli» si dice:",o:["{leurs enfants}","{leur enfants}","{ses enfants}"],e:"Più possessori e più cose: {leurs}."},
 {t:"type",q:"Completa: {J'}＿ {un frère.}",a:["ai"],full:"J'ai un frère."},
 {t:"type",q:"Completa: {Vous} ＿ {des enfants ?}",a:["avez"],full:"Vous avez des enfants ?"},
 {t:"dict",au:"J'ai un frère et une sœur."},
 {t:"say",zh:"Presenta la tua famiglia: «Ho un fratello e una sorella. Mia madre si chiama…»",it:"J'ai un frère et une sœur. Ma mère s'appelle Anna."}
];
VOC.l5=[
 ["garçon", "ragazzo", "m"],["jeune", "giovane", ""],["mariage", "matrimonio", "m"],["ensemble", "insieme", ""],
 ["avoir","avere",""],["famille","famiglia","f"],["parents","genitori","mp"],["père","padre","m"],["mère","madre","f"],["frère","fratello","m"],["sœur","sorella","f"],
 ["fils","figlio","m"],["fille","figlia; ragazza","f"],["enfant","bambino, figlio","m"],["mari","marito","m"],["femme","moglie; donna","f"],["oncle","zio","m"],["tante","zia","f"],
 ["cousin","cugino","m"],["cousine","cugina","f"],["grand-père","nonno","m"],["grand-mère","nonna","f"],["fils unique","figlio unico","m"],
 ["mon","mio",""],["ma","mia",""],["mes","miei, mie",""],["ton","tuo",""],["son","suo",""],["notre","nostro",""],["votre","vostro; Suo",""],["leur","loro (possessivo); a loro",""],
 ["grand","grande, alto",""],["alors","allora",""],["beaucoup de","molto, tanti",""]
];
EX.l5=EX.l5.concat([
 {t:"say",zh:"Chiedi a un amico se ha fratelli o sorelle",it:"Tu as des frères et sœurs ?"}
]);
