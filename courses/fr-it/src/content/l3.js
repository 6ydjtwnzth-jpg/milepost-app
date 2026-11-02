DLG.l3=[["A","Bonjour, madame Dubois ! Comment allez-vous ?","Buongiorno, signora Dubois! Come sta?"],["B","Très bien, merci, Lucas. Et vous ?","Molto bene, grazie, Lucas. E Lei?"],["A","Ça va, merci. Je vous présente Sara, une amie italienne.","Bene, grazie. Le presento Sara, un'amica italiana."],["B","Enchantée, Sara. Vous êtes en vacances ?","Piacere, Sara. È in vacanza?"],["A","Non, madame, je suis étudiante ici.","No, signora, sono studentessa qui."],["B","Très bien ! Bonne journée !","Benissimo! Buona giornata!"],["A","Merci, à vous aussi !","Grazie, anche a Lei!"]];
EX.l3=[
 {q:"Incontri la tua vicina anziana. Che cosa le dici?",o:["{Bonjour, madame. Comment allez-vous ?}","{Salut ! Ça va ?}","{Coucou !}"],e:"Con una persona anziana e non intima: {vous} e {madame}."},
 {q:"Il tuo amico Paul ti chiede {Ça va ?}. Rispondi:",o:["{Ça va bien, et toi ?}","{Très bien, et vous ?}","{Bonne nuit !}"],e:"Con un amico si resta sul {tu}: {et toi ?}"},
 {q:"Dove cade l'accento in {Paris}?",o:["sull'ultima sillaba: pa-RIS","sulla prima: PA-ris","su nessuna"],e:"In francese l'accento cade sempre in fondo; e la s finale non si sente."},
 {q:"Ascolta: quante sillabe senti?",au:"Vous êtes italien ?",o:["cinque: vu-zè-ti-ta-lièn","sei: vus-è-tes-i-ta-lien","quattro"],e:"Con la liaison la s di {vous} si lega: «vu-zè»."},
 {q:"Sono le 21. Saluti uscendo da un ristorante:",o:["{Bonne soirée !}","{Bonne nuit !}","{Bonjour !}"],e:"{bonne nuit} si dice solo andando a dormire."},
 {q:"{vous} può voler dire:",o:["«voi» oppure «Lei»","solo «voi»","solo «Lei»"],e:"Come il «voi» di cortesia di una volta in italiano."},
 {t:"type",q:"Completa: {Comment} ＿-{vous} ?",a:["allez"],full:"Comment allez-vous ?"},
 {t:"dict",au:"Très bien, merci."},
 {t:"say",zh:"Saluta la signora Martin alle 9 di mattina e chiedile come sta",it:"Bonjour, madame Martin. Comment allez-vous ?"},
 {t:"say",zh:"Di' «Molto bene, grazie. E tu?»",it:"Très bien, merci. Et toi ?"}
];
VOC.l3=[
 ["monsieur","signore","m"],["madame","signora","f"],["mademoiselle","signorina","f"],["ça va","va bene; come va?",""],["très","molto",""],
 ["bonne nuit","buonanotte",""],["bonne journée","buona giornata",""],["bonne soirée","buona serata",""],
 ["comment allez-vous","come sta",""],["ici","qui",""],["vacances","vacanze","fp"],["en vacances","in vacanza",""],["présenter","presentare",""],
 ["un","un, uno",""],["une","una",""],["voisin","vicino di casa","m"],["voisine","vicina di casa","f"],["à vous aussi","anche a Lei",""],["coucou","ciao! (molto familiare)",""]
];
EX.l3=EX.l3.concat([
 {t:"dict",au:"Comment allez-vous ?"},
 {t:"say",zh:"Presenta Sara, un'amica italiana, alla signora Dubois",it:"Je vous présente Sara, une amie italienne."},
 {t:"type",q:"Completa: {Vous} ＿ {en vacances ?} (être)",a:["êtes"],full:"Vous êtes en vacances ?"}
]);
