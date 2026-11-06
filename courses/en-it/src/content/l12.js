DLG.l12=[["A","Hi, Mum! Can you see me?","Ciao, mamma! Mi vedi?"],["B","Yes! Hi, Chiara! What are you doing?","Sì! Ciao, Chiara! Che cosa stai facendo?"],["A","I'm walking in the park. It's sunny today!","Sto camminando nel parco. Oggi c'è il sole!"],["B","Lucky you! Here it's raining.","Beata te! Qui piove."],["A","Is Dad watching football?","Papà guarda il calcio?"],["B","No, he isn't. He's cooking dinner.","No. Sta preparando la cena."],["A","Are you wearing a jumper? Is it cold?","Hai un maglione? Fa freddo?"],["B","Yes, it's very cold and windy.","Sì, fa molto freddo e c'è vento."],["A","I'm wearing a T-shirt!","Io ho una maglietta!"],["B","You're lucky!","Che fortuna!"]];
EX.l12=[
 {q:"«Che cosa stai facendo?»",o:["{What are you doing?}","{What do you do?}","{What you doing?}"],e:"Adesso: {be} + {-ing}."},
 {q:"«Piove.» (adesso, guardando fuori)",o:["{It's raining.}","{It rains.}","{It's rain.}"],e:"Pioggia che cade adesso: {It's raining}."},
 {q:"Di solito vai a piedi, oggi prendi l'autobus:",o:["{I usually walk, but today I'm taking the bus.}","{I'm usually walking, but today I take the bus.}","{I usually walk, but today I take the bus.}"],e:"Abitudine: {present simple}; oggi: {present continuous}."},
 {q:"«So la risposta.»",o:["{I know the answer.}","{I'm knowing the answer.}","{I'm know the answer.}"],e:"{know} è un verbo di stato: niente {-ing}."},
 {q:"«Lei non lavora oggi.»",o:["{She isn't working today.}","{She doesn't working today.}","{She not working today.}"],e:"Negazione del {present continuous} con {be}: {isn't working}."},
 {q:"«pantaloni» in inglese britannico:",o:["{trousers}","{pants}","{jumpers}"],e:"{pants} in Gran Bretagna sono le mutande!"},
 {q:"Ascolta: che tempo fa?",au:"It's cloudy and windy.",o:["nuvoloso e ventoso","soleggiato e caldo","piove e fa freddo"],e:"{cloudy} = nuvoloso, {windy} = ventoso."},
 {q:"Ascolta: che cosa sta facendo papà?",au:"He's cooking dinner.",o:["prepara la cena","guarda il calcio","dorme"],e:"{cooking dinner}."},
 {q:"Ascolta: che cosa indossa?",au:"She's wearing a red dress and black shoes.",o:["un vestito rosso e scarpe nere","una gonna rossa e scarpe nere","un vestito nero e scarpe rosse"],e:"{a red dress} = un vestito rosso; {black shoes} = scarpe nere."},
 {t:"type",q:"Completa: {Look! The children} ＿ {in the garden.} (play)",a:["are playing","'re playing"],full:"Look! The children are playing in the garden."},
 {t:"type",q:"Completa: {What's the weather} ＿ {?}",a:["like"],full:"What's the weather like?"},
 {t:"dict",au:"What are you doing? — I'm watching a film."},
 {t:"say",zh:"Di' che tempo fa oggi dove sei",it:"It's sunny and warm today.",e:"Per esempio: {It's cloudy and cold}, {It's raining}…"},
 {t:"say",zh:"Descrivi che cosa indossi adesso",it:"I'm wearing jeans, a white T-shirt and trainers."}
];
VOC.l12=[
 ["now","adesso",""],["right now","proprio adesso",""],["at the moment","in questo momento",""],["look","guarda; guardare",""],["lucky","fortunato",""],["lucky you","beato te",""],["see","vedere",""],["sleep","dormire",""],["stay","stare, alloggiare",""],["want","volere",""],["need","avere bisogno di",""],
 ["weather","tempo (atmosferico)",""],["what's the weather like","che tempo fa",""],["sunny","soleggiato",""],["cloudy","nuvoloso",""],["windy","ventoso",""],["rain","piovere; pioggia",""],["snow","nevicare; neve",""],["cold","freddo",""],["hot","caldo (molto)",""],["warm","caldo (piacevole)",""],
 ["wear","indossare, portare",""],["clothes","vestiti",""],["coat","cappotto",""],["jacket","giacca",""],["jumper","maglione",""],["T-shirt","maglietta",""],["shirt","camicia",""],["trousers","pantaloni",""],["jeans","jeans",""],["shorts","pantaloncini",""],
 ["dress","vestito (da donna)",""],["skirt","gonna",""],["shoes","scarpe",""],["trainers","scarpe da ginnastica",""],["hat","cappello",""],["red","rosso",""],["black","nero",""],["white","bianco",""],["blue","blu",""],["colour", "colore", ""],["green", "verde", ""],["yellow", "giallo", ""],["grey", "grigio", ""],["brown", "marrone", ""]
];
EX.l12=EX.l12.concat([
 {t:"dict",au:"It's raining. Take an umbrella!"},
 {t:"say",zh:"Al telefono: chiedi a un amico che cosa sta facendo e se fa freddo",it:"What are you doing? Is it cold?"},
 {t:"type",q:"Completa: {I usually drink tea, but today I} ＿ {coffee.} (drink)",a:["am drinking","'m drinking"],full:"I usually drink tea, but today I'm drinking coffee."}
]);
