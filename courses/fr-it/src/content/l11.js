DLG.l11=[["A","Qu'est-ce que tu fais le week-end, Hugo ?","Che cosa fai nel fine settimana, Hugo?"],["B","Le samedi matin, je fais du vélo. Et l'après-midi, je joue au foot.","Il sabato mattina vado in bici. E il pomeriggio gioco a calcio."],["A","Tu es très sportif ! Moi, je déteste le sport.","Sei molto sportivo! Io odio lo sport."],["B","Ah bon ? Qu'est-ce que tu aimes, alors ?","Ah sì? Che cosa ti piace, allora?"],["A","J'adore la musique. Je joue de la guitare et je vais souvent à des concerts.","Adoro la musica. Suono la chitarra e vado spesso ai concerti."],["B","Et le cinéma ?","E il cinema?"],["A","J'aime bien, mais je n'y vais pas souvent.","Mi piace, ma non ci vado spesso."]];
EX.l11=[
 {q:"«Mi piace il calcio»:",o:["{J'aime le foot.}","{J'aime foot.}","{Me plaît le foot.}"],e:"{aimer} + articolo determinativo."},
 {q:"«Gioco a tennis»:",o:["{Je joue au tennis.}","{Je joue le tennis.}","{Je fais au tennis.}"],e:"{jouer à} + {le} = {au}."},
 {q:"«Suona il pianoforte»:",o:["{Il joue du piano.}","{Il joue au piano.}","{Il fait le piano.}"],e:"Strumenti: {jouer de} + {le} = {du}."},
 {q:"{vous} + {faire}:",o:["{vous faites}","{vous faisez}","{vous fais}"],e:"{faire} è irregolare: {vous faites}, {ils font}."},
 {q:"«Non guardo mai la tv»:",o:["{Je ne regarde jamais la télé.}","{Je regarde jamais ne la télé.}","{Je ne regarde pas jamais la télé.}"],e:"{ne… jamais} prende il posto di {ne… pas}."},
 {q:"{le samedi} vuol dire:",o:["ogni sabato","questo sabato","sabato scorso"],e:"Con l'articolo: un'abitudine."},
 {q:"Ascolta: che cosa senti?",au:"Je ne sais pas.",o:["Non lo so.","Non sono qui.","Non mi piace."],e:"{je ne sais pas}, nel parlato spesso «ché pa»."},
 {t:"type",q:"Completa: {Je fais} ＿ {natation.} (de + la)",a:["de la"],full:"Je fais de la natation."},
 {t:"dict",au:"J'adore la musique."},
 {t:"say",zh:"Di' che cosa ti piace fare nel fine settimana e una cosa che odi",it:"Le week-end, j'aime faire du vélo et lire. Je déteste faire le ménage."}
];
VOC.l11=[
 ["jeu", "gioco", "m"],["drôle", "divertente, buffo", ""],["sympa", "simpatico, carino", ""],["gagner", "vincere; guadagnare", ""],["perdre", "perdere", ""],["surprise", "sorpresa", "f"],
 ["temps libre","tempo libero","m"],["détester","odiare",""],["faire","fare",""],["jouer","giocare; suonare",""],["regarder","guardare",""],["lire","leggere",""],["écouter","ascoltare",""],
 ["sport","sport","m"],["sportif","sportivo",""],["foot","calcio","m"],["tennis","tennis","m"],["vélo","bicicletta","m"],["natation","nuoto","f"],["musique","musica","f"],["guitare","chitarra","f"],["piano","pianoforte","m"],
 ["cinéma","cinema","m"],["concert","concerto","m"],["film","film","m"],["samedi","sabato","m"],["souvent","spesso",""],["parfois","a volte",""],["rarement","raramente",""],["ne… jamais","mai",""],
 ["maintenant","adesso",""],["ménage","faccende di casa","m"],["y","ci, là",""]
];
EX.l11=EX.l11.concat([
 {t:"dict",au:"Je joue de la guitare."},
 {t:"say",zh:"Di' che il sabato mattina vai in bici",it:"Le samedi matin, je fais du vélo. Et l'après-midi, je joue au foot."},
 {t:"type",q:"Completa: {L'après-midi, je joue} ＿ {foot.}",a:["au"],full:"Le samedi matin, je fais du vélo. Et l'après-midi, je joue au foot."}
]);
