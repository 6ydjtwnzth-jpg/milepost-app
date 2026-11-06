DLG.l5=[["A","Is this your family?","Questa è la tua famiglia?"],["B","Yes, it is. These are my parents.","Sì. Questi sono i miei genitori."],["A","Your mother is very young!","Tua madre è giovanissima!"],["B","This is my brother, Paul, and his wife.","Questo è mio fratello Paul, e sua moglie."],["A","Have they got any children?","Hanno figli?"],["B","Yes, they have. They've got a son, Sam.","Sì. Hanno un figlio, Sam."],["A","And who's that?","E quella chi è?"],["B","That's my sister and her children.","Quella è mia sorella con i suoi figli."],["A","Have you got any brothers or sisters, Marco?","Hai fratelli o sorelle, Marco?"],["B","No, I haven't. But I've got a lot of cousins!","No. Ma ho un sacco di cugini!"]];
EX.l5=[
 {q:"«Paul e sua moglie»:",o:["{Paul and his wife}","{Paul and her wife}","{Paul and the his wife}"],e:"Il possessore è Paul, un uomo: {his}."},
 {q:"«Anna e suo fratello»:",o:["{Anna and her brother}","{Anna and his brother}","{Anna and she brother}"],e:"Il possessore è Anna, una donna: {her}, anche se il fratello è maschio."},
 {q:"«la macchina di mia madre»:",o:["{my mother's car}","{the car of my mother}","{my mother car}"],e:"Prima il possessore con {'s}, poi la cosa: {my mother's car}."},
 {q:"«i miei genitori»:",o:["{my parents}","{the my parents}","{my relatives}"],e:"Senza articolo. E {relatives} sono i parenti, non i genitori."},
 {q:"{Have you got a car?} Rispondi di sì:",o:["{Yes, I have.}","{Yes, I've got.}","{Yes, I've.}"],e:"Risposta breve: {Yes, I have} / {No, I haven't}."},
 {q:"{She's got two sons} vuol dire:",o:["Ha due figli","È due figli","Sono i suoi due figli"],e:"Qui {she's} = {she has}: lo dice {got}."},
 {q:"Ascolta: quanti figli hanno?",au:"They've got a son and two daughters.",o:["tre","due","uno"],e:"{a son and two daughters}: un figlio e due figlie."},
 {q:"Ascolta: chi è Sam?",au:"Sam is my uncle's son.",o:["il cugino","lo zio","il fratello"],e:"Il figlio dello zio è il cugino: {cousin}."},
 {q:"«la casa dei miei genitori»:",o:["{my parents' house}","{my parents's house}","{my parent's house}"],e:"Plurale in -s: solo l'apostrofo, {parents'}."},
 {t:"type",q:"Completa: {We love} ＿ {grandmother.} (nostra)",a:["our"],full:"We love our grandmother."},
 {t:"type",q:"Completa: {He} ＿ {got a sister.}",a:["has","'s"],full:"He's got a sister."},
 {t:"dict",au:"I've got two brothers and a sister."},
 {t:"say",zh:"Presenta la tua famiglia: «Ho un fratello e una sorella. Mio fratello ha un cane.»",it:"I've got a brother and a sister. My brother has got a dog."},
 {t:"say",zh:"Chiedi a qualcuno se ha figli",it:"Have you got any children?"}
];
VOC.l5=[
 ["family","famiglia",""],["parents","genitori",""],["mother","madre",""],["father","padre",""],["mum","mamma",""],["dad","papà",""],["brother","fratello",""],["sister","sorella",""],
 ["son","figlio",""],["daughter","figlia",""],["children","figli; bambini",""],["husband","marito",""],["wife","moglie",""],["grandmother","nonna",""],["grandfather","nonno",""],["grandparents","nonni",""],
 ["uncle","zio",""],["aunt","zia",""],["cousin","cugino, cugina",""],["relatives","parenti",""],["boyfriend","ragazzo, fidanzato",""],["girlfriend","ragazza, fidanzata",""],["dog","cane",""],["cat","gatto",""],["car","macchina, auto",""],
 ["have got","avere (possesso, famiglia)",""],["his","suo (di lui)",""],["her","suo (di lei)",""],["its","suo (di una cosa)",""],["our","nostro",""],["their","loro (possessivo)",""],["who","chi",""],["or","o, oppure",""],
 ["very","molto",""],["young","giovane",""],["married","sposato",""],["single","single, non sposato",""],["love","amare, adorare",""],["boy", "ragazzo, bambino", ""],["girl", "ragazza, bambina", ""],["neighbour", "vicino di casa", ""],["hair", "capelli", ""],["nose", "naso", ""],["mouth", "bocca", ""]
];
EX.l5=EX.l5.concat([
 {t:"dict",au:"Our parents are from Turin."},
 {t:"say",zh:"Di': «La moglie di mio fratello è irlandese.»",it:"My brother's wife is Irish."},
 {t:"type",q:"Completa: {Has she got a car? — No, she} ＿ {.}",a:["hasn't","has not"],full:"No, she hasn't."}
]);
