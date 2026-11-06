DLG.l5=[["A","Ist das deine Familie?","Questa è la tua famiglia?"],["B","Ja, das sind meine Eltern. Mein Vater heißt Paolo und meine Mutter heißt Rita.","Sì, questi sono i miei genitori. Mio padre si chiama Paolo e mia madre Rita."],["A","Und wer ist das?","E chi è questo?"],["B","Das ist mein Bruder Marco. Er ist Arzt in Mailand.","È mio fratello Marco. Fa il medico a Milano."],["A","Hast du auch Schwestern?","Hai anche sorelle?"],["B","Ja, ich habe eine Schwester. Sie ist verheiratet und hat zwei Kinder.","Sì, ho una sorella. È sposata e ha due figli."],["A","Wie heißen ihre Kinder?","Come si chiamano i suoi figli?"],["B","Lea und Tim. Lea ist sechs und Tim ist drei.","Lea e Tim. Lea ha sei anni e Tim tre."],["A","Und du? Hast du Kinder?","E tu? Hai figli?"],["B","Nein, ich habe keine Kinder. Aber ich habe einen Hund!","No, non ho figli. Ma ho un cane!"]];
EX.l5=[
 {q:"«Ho un fratello.»",o:["{Ich habe einen Bruder.}","{Ich habe ein Bruder.}","{Ich bin einen Bruder.}"],e:"{Bruder} è maschile: dopo {haben} → {einen}."},
 {q:"«Non ho un cane.»",o:["{Ich habe keinen Hund.}","{Ich habe nicht einen Hund.}","{Ich habe kein Hund.}"],e:"Maschile all'accusativo: {keinen}."},
 {q:"«Anna e suo fratello»:",o:["{Anna und ihr Bruder}","{Anna und sein Bruder}","{Anna und ihre Bruder}"],e:"Il possessore è una donna: {ihr}; {Bruder} è maschile: niente {-e}."},
 {q:"«Paul e sua sorella»:",o:["{Paul und seine Schwester}","{Paul und ihre Schwester}","{Paul und sein Schwester}"],e:"Il possessore è un uomo: {sein}; {Schwester} è femminile: {seine}."},
 {q:"«i miei genitori»:",o:["{meine Eltern}","{mein Eltern}","{die meine Eltern}"],e:"Plurale: {meine}; niente articolo."},
 {q:"{du} + {haben}:",o:["{du hast}","{du habst}","{du habe}"],e:"{haben} è irregolare: {du hast}, {er hat}."},
 {q:"Ascolta: che lavoro fa Marco?",au:"Er ist Arzt in Mailand.",o:["medico","cuoco","insegnante"],e:"{Arzt} = medico."},
 {q:"Ascolta: quanti figli ha la sorella?",au:"Sie ist verheiratet und hat zwei Kinder.",o:["due","tre","nessuno"],e:"{zwei Kinder}."},
 {q:"Ascolta: che animale ha?",au:"Ich habe keine Kinder. Aber ich habe einen Hund!",o:["un cane","un gatto","nessuno"],e:"{einen Hund} = un cane."},
 {t:"type",q:"Completa: {Wir} ＿ {zwei Kinder.} (haben)",a:["haben"],full:"Wir haben zwei Kinder."},
 {t:"type",q:"Completa: {Das ist} ＿ {Mutter.} (mia)",a:["meine"],full:"Das ist meine Mutter."},
 {t:"dict",au:"Ich habe einen Bruder und eine Schwester."},
 {t:"say",zh:"Presenta la tua famiglia in due frasi",it:"Ich habe eine Schwester. Meine Eltern wohnen in Rom."},
 {t:"say",zh:"Chiedi a un'amica se ha fratelli o sorelle",it:"Hast du Geschwister?"}
];
VOC.l5=[
 ["haben","avere",""],["Familie","famiglia","f:Familien"],["Eltern","genitori","p"],["Vater","padre","m:Väter"],["Mutter","madre","f:Mütter"],["Schwester","sorella","f:Schwestern"],["Geschwister","fratelli e sorelle","p"],["Kind","bambino, figlio","n:Kinder"],["Sohn","figlio","m:Söhne"],["Tochter","figlia","f:Töchter"],
 ["Mann","uomo; marito","m:Männer"],["Großvater","nonno","m:Großväter"],["Großmutter","nonna","f:Großmütter"],["Onkel","zio","m:Onkel"],["Tante","zia","f:Tanten"],["Freund","amico; ragazzo (fidanzato)","m:Freunde"],["Freundin","amica; ragazza (fidanzata)","f:Freundinnen"],["Hund","cane","m:Hunde"],["Katze","gatto","f:Katzen"],["Haus","casa","n:Häuser"],
 ["mein","mio",""],["seine","sua, suoi (di lui)",""],["ihre","sua, suoi (di lei); loro",""],["unser","nostro",""],["euer","vostro",""],["Ihr","Suo (cortesia)",""],["einen","un (accusativo maschile)",""],["keinen","nessun (accusativo maschile)",""],
 ["wer","chi",""],["verheiratet","sposato",""],["ledig","celibe, nubile",""],["geschieden","divorziato",""],["Arzt","medico","m:Ärzte"],["lieben","amare",""],
 ["Ehemann", "marito", "m:Ehemänner"],
 ["Ehefrau", "moglie", "f:Ehefrauen"],
 ["Verwandte", "parenti", "p"],
 ["Junge", "ragazzo, bambino (maschio)", "m:Jungen"],
 ["Mensch", "persona, essere umano", "m:Menschen"],
 ["Leute", "gente, persone", "p"],
 ["Person", "persona", "f:Personen"],
 ["Tier", "animale", "n:Tiere"],
 ["Vogel", "uccello", "m:Vögel"],
 ["Haar", "capelli", "n:Haare"],
 ["lieb", "caro, affettuoso", ""]
];
EX.l5=EX.l5.concat([
 {t:"dict",au:"Meine Eltern wohnen in Neapel."},
 {t:"say",zh:"Di' che non hai un'auto ma hai una bici",it:"Ich habe kein Auto, aber ich habe ein Fahrrad."},
 {t:"type",q:"Completa: {Paul liebt} ＿ {Kinder.} (suoi)",a:["seine"],full:"Paul liebt seine Kinder."}
]);
