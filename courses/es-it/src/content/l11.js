DLG.l11=[["A","Sofía, ¿qué haces en tu tiempo libre?","Sofía, che cosa fai nel tempo libero?"],["B","Me gusta bailar y toco la guitarra.","Mi piace ballare e suono la chitarra."],["A","¿Te gusta la música clásica?","Ti piace la musica classica?"],["B","No mucho. Pero me gustan mucho los conciertos de rock.","Non molto. Ma mi piacciono tanto i concerti rock."],["A","¡A mí también! ¿Y haces deporte?","Anche a me! E fai sport?"],["B","Sí, juego al tenis los sábados. ¿Y tú?","Sì, gioco a tennis il sabato. E tu?"],["A","A mí no me gusta mucho el deporte, pero me encanta nadar.","A me lo sport non piace molto, ma adoro nuotare."],["B","¿Vamos a la piscina el domingo?","Andiamo in piscina domenica?"],["A","¡Vale! Buena idea.","D'accordo! Buona idea."]];
EX.l11=[
 {q:"«Mi piacciono i libri.»",o:["{Me gustan los libros.}","{Me gusta los libros.}","{Yo gusto los libros.}"],e:"Cose al plurale: {gustan}."},
 {q:"«Ti piace ballare?»",o:["{¿Te gusta bailar?}","{¿Te gustan bailar?}","{¿Tú gustas bailar?}"],e:"Con un verbo: {gusta}."},
 {q:"«A mio padre non piace il calcio.»",o:["{A mi padre no le gusta el fútbol.}","{A mi padre no gusta el fútbol.}","{Mi padre no gusta el fútbol.}"],e:"Con {a mi padre} serve anche {le}."},
 {q:"«Non mi piace il caffè.» — «Neanche a me.»",o:["{A mí tampoco.}","{A mí también.}","{Yo tampoco no.}"],e:"Frase negativa: {a mí tampoco}."},
 {q:"«Suono la chitarra.»",o:["{Toco la guitarra.}","{Juego la guitarra.}","{Suono la guitarra.}"],e:"Strumenti: {tocar}."},
 {q:"«Gioco a calcio.»",o:["{Juego al fútbol.}","{Toco el fútbol.}","{Juego el fútbol.}"],e:"Sport: {jugar a} → {al fútbol}."},
 {q:"Ascolta: che cosa adora?",au:"Me encanta nadar.",o:["nuotare","ballare","cucinare"],e:"{nadar} = nuotare."},
 {q:"Ascolta: quando gioca a tennis?",au:"Juego al tenis los sábados.",o:["il sabato","la domenica","tutti i giorni"],e:"{los sábados} = il sabato."},
 {q:"Ascolta: è d'accordo?",au:"Me gusta el cine. — A mí también.",o:["sì, piace anche a lui","no","non dice niente"],e:"{a mí también} = anche a me."},
 {t:"type",q:"Completa: {Nos} ＿ {viajar.} (encantar)",a:["encanta"],full:"Nos encanta viajar."},
 {t:"type",q:"Completa: {¿Os} ＿ {los conciertos?} (gustar)",a:["gustan"],full:"¿Os gustan los conciertos?"},
 {t:"dict",au:"Me gusta mucho bailar."},
 {t:"say",zh:"Di' due cose che ti piacciono e una che non ti piace",it:"Me gusta leer y me encanta cocinar, pero no me gusta correr."},
 {t:"say",zh:"Chiedi a un amico se suona uno strumento",it:"¿Tocas algún instrumento?"}
];
VOC.l11=[
 ["gustar","piacere",""],["encantar","piacere moltissimo",""],["tiempo libre","tempo libero","m"],["bailar","ballare",""],["cantar","cantare",""],["nadar","nuotare",""],["correr","correre",""],["viajar","viaggiare",""],["cocinar","cucinare",""],["leer","leggere",""],
 ["tocar","suonare (uno strumento)",""],["hacer deporte","fare sport",""],["deporte","sport","m"],["fútbol","calcio","m"],["tenis","tennis","m"],["piscina","piscina","f"],["guitarra","chitarra","f"],["piano","pianoforte","m"],["instrumento","strumento","m"],["concierto","concerto","m"],["música clásica","musica classica","f"],
 ["fiesta","festa","f"],["gato","gatto","m"],["tampoco","neanche",""],["a mí también","anche a me",""],["a mí tampoco","neanche a me",""],["mucho","molto",""],["vale","d'accordo, va bene",""],["buena idea","buona idea",""],["algún","qualche, qualcuno",""],["montar en bici","andare in bici",""],["yoga","yoga","m"],["saber","sapere",""],["sé","so (saber)",""],["no lo sé","non lo so",""]
];
EX.l11=EX.l11.concat([
 {t:"dict",au:"A mi padre no le gusta el fútbol."},
 {t:"say",zh:"Proponi a un'amica: «Andiamo in piscina domenica?»",it:"¿Vamos a la piscina el domingo?"},
 {t:"type",q:"Completa: {A Juan} ＿ {gusta el tenis.}",a:["le"],full:"A Juan le gusta el tenis."},
 {q:"«So nuotare.»",o:["{Sé nadar.}","{Se nadar.}","{Puedo nadar.}"],e:"Una capacità imparata: {saber}; {sé} con l'accento."},
 {t:"type",q:"Completa: {¿} ＿ {cocinar paella?} (sapere, tu)",a:["sabes"],full:"¿Sabes cocinar paella?"}
]);
