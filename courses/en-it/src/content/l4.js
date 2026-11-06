DLG.l4=[["A","Welcome! This is my flat.","Benvenuta! Questo è il mio appartamento."],["B","Wow, it's big!","Wow, è grande!"],["A","This is the kitchen, and that's my room.","Questa è la cucina, e quella è la mia stanza."],["B","Are those your books?","Quelli sono i tuoi libri?"],["A","Yes, they are. There are a lot of books here!","Sì. Qui ci sono un sacco di libri!"],["B","Is there a TV?","C'è una TV?"],["A","No, there isn't. But there's a computer.","No. Ma c'è un computer."],["B","It's a nice flat, Tom.","È un bell'appartamento, Tom."]];
EX.l4=[
 {q:"«un ombrello»:",o:["{an umbrella}","{a umbrella}","{one umbrellas}"],e:"Davanti a un suono di vocale: {an}."},
 {q:"«un'università»:",o:["{a university}","{an university}","{the universities}"],e:"{university} comincia con il suono «iu», una consonante: {a}."},
 {q:"«due stanze grandi»:",o:["{two big rooms}","{two bigs rooms}","{two rooms big}"],e:"L'aggettivo va prima del nome e non prende la -s."},
 {q:"Il plurale di {child}:",o:["{children}","{childs}","{childes}"],e:"Irregolare: {child} → {children}."},
 {q:"Il plurale di {city}:",o:["{cities}","{citys}","{cityes}"],e:"Consonante + y → -ies."},
 {q:"«Nella mia stanza c'è una TV.»",o:["{There's a TV in my room.}","{It's a TV in my room.}","{There are a TV in my room.}"],e:"«c'è» = {there is}, «ci sono» = {there are}."},
 {q:"Indichi delle chiavi sul tavolo, lontane da te:",o:["{Are those your keys?}","{Are these your keys?}","{Is that your keys?}"],e:"Plurale e lontano: {those}."},
 {q:"Ascolta: quante persone ci sono?",au:"There are three people here.",o:["tre","una","trenta"],e:"{three people} = tre persone. {people} è plurale."},
 {q:"Ascolta: quale parola senti?",au:"these",o:["{these}","{this}"],e:"{these} (questi) ha la «i» lunga; {this} (questo) la «i» breve."},
 {t:"type",q:"Completa: {Is there a lift? — No, there} ＿ {.}",a:["isn't","is not"],full:"No, there isn't."},
 {t:"type",q:"Completa: ＿ {apple and a banana}",a:["an"],full:"an apple and a banana"},
 {t:"dict",au:"There's a big window in my room."},
 {t:"say",zh:"Descrivi la tua stanza: «Nella mia stanza c'è un letto e ci sono due sedie.»",it:"In my room there's a bed and there are two chairs."},
 {t:"say",zh:"Presenta un'amica: «Questa è la mia amica Anna.»",it:"This is my friend Anna."}
];
VOC.l4=[
 ["a","un, uno, una",""],["an","un, uno, una (davanti a vocale)",""],["the","il, lo, la, i, gli, le",""],["this","questo",""],["that","quello",""],["these","questi",""],["those","quelli",""],
 ["there is","c'è",""],["there are","ci sono",""],["any","alcuno, nessuno (domande e negazioni)",""],["a lot of","molti, un sacco di",""],["but","ma",""],["in","in, dentro",""],["friend","amico, amica",""],["welcome","benvenuto",""],
 ["flat","appartamento",""],["room","stanza, camera",""],["kitchen","cucina",""],["bed","letto",""],["chair","sedia",""],["table","tavolo",""],["window","finestra",""],["door","porta",""],["lift","ascensore",""],
 ["book","libro",""],["bag","borsa",""],["key","chiave",""],["phone","telefono",""],["computer","computer",""],["TV","TV, televisione",""],["umbrella","ombrello",""],["apple","mela",""],["banana","banana",""],["hour","ora",""],["university","università",""],
 ["big","grande",""],["small","piccolo",""],["new","nuovo",""],["man","uomo",""],["woman","donna",""],["child","bambino, bambina",""],["person","persona",""],["people","persone, gente",""],["city","città",""]
];
EX.l4=EX.l4.concat([
 {t:"dict",au:"Are those your books?"},
 {t:"say",zh:"Chiedi a un amico: «C'è un ascensore?»",it:"Is there a lift?"},
 {t:"type",q:"Completa: {one woman, two} ＿",a:["women"],full:"one woman, two women"}
]);
