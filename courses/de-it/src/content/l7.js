DLG.l7=[["A","Was machst du beruflich, Jonas?","Che lavoro fai, Jonas?"],["B","Ich bin Lehrer. Ich arbeite in Hamburg. Und du?","Sono insegnante. Lavoro ad Amburgo. E tu?"],["A","Ich bin Köchin.","Io sono cuoca."],["B","Toll! Kochst du auch zu Hause?","Fantastico! Cucini anche a casa?"],["A","Nein, zu Hause koche ich nicht. Mein Mann kocht!","No, a casa non cucino. Cucina mio marito!"],["B","Und arbeitest du viel?","E lavori molto?"],["A","Ja, ich arbeite abends und am Wochenende.","Sì, lavoro la sera e nel fine settimana."],["B","Am Wochenende? Das ist nicht so schön.","Nel fine settimana? Non è così bello."],["A","Nein, aber montags und dienstags habe ich frei.","No, ma il lunedì e il martedì sono libera."]];
EX.l7=[
 {q:"«Nel fine settimana lavoro.»",o:["{Am Wochenende arbeite ich.}","{Am Wochenende ich arbeite.}","{Ich am Wochenende arbeite.}"],e:"Il verbo al secondo posto, il soggetto subito dopo."},
 {q:"{du} + {arbeiten}:",o:["{du arbeitest}","{du arbeitst}","{du arbeite}"],e:"Radice in {-t}: si aggiunge una {e}."},
 {q:"«Sono cuoca.»",o:["{Ich bin Köchin.}","{Ich bin eine Köchin.}","{Ich bin Koch.}"],e:"Senza articolo; la forma femminile è {Köchin}."},
 {q:"«A casa non cucino.»",o:["{Zu Hause koche ich nicht.}","{Zu Hause ich koche nicht.}","{Zu Hause koche ich kein.}"],e:"Verbo secondo, {nicht} in fondo."},
 {q:"«Non ho una macchina.»",o:["{Ich habe kein Auto.}","{Ich habe nicht ein Auto.}","{Ich habe nicht Auto.}"],e:"Un nome con {ein}: {kein}."},
 {q:"«Lavori molto?»",o:["{Arbeitest du viel?}","{Du arbeitest viel?}","{Arbeitest viel du?}"],e:"Domanda sì/no: il verbo al primo posto."},
 {q:"Ascolta: che lavoro fa Jonas?",au:"Ich bin Lehrer. Ich arbeite in Hamburg.",o:["insegnante","cuoco","medico"],e:"{Lehrer} = insegnante."},
 {q:"Ascolta: chi cucina a casa?",au:"Zu Hause koche ich nicht. Mein Mann kocht!",o:["il marito","lei","nessuno"],e:"{Mein Mann kocht}."},
 {q:"Ascolta: quando è libera?",au:"Montags und dienstags habe ich frei.",o:["lunedì e martedì","sabato e domenica","venerdì"],e:"{montags und dienstags}."},
 {t:"type",q:"Completa: {Er} ＿ {in einem Büro.} (arbeiten)",a:["arbeitet"],full:"Er arbeitet in einem Büro."},
 {t:"type",q:"Completa: {Heute} ＿ {ich nicht.} (kochen)",a:["koche"],full:"Heute koche ich nicht."},
 {t:"dict",au:"Was machst du beruflich?"},
 {t:"say",zh:"Di' che lavoro fai e dove",it:"Ich bin Ingenieurin. Ich arbeite in Turin."},
 {t:"say",zh:"Di' che il sabato non lavori",it:"Am Samstag arbeite ich nicht."}
];
VOC.l7=[
 ["Was machst du beruflich?","che lavoro fai?",""],["Beruf","professione, lavoro","m:Berufe"],["arbeiten","lavorare",""],["machen","fare",""],["kochen","cucinare",""],["frei haben","essere libero (dal lavoro)",""],["abends","la sera",""],["morgens","la mattina",""],["zu Hause","a casa",""],["nicht","non",""],["so","così",""],
 ["Lehrer","insegnante","m:Lehrer"],["Lehrerin","insegnante (donna)","f:Lehrerinnen"],["Koch","cuoco","m:Köche"],["Köchin","cuoca","f:Köchinnen"],["Ärztin","medico (donna)","f:Ärztinnen"],["Verkäufer","commesso","m:Verkäufer"],["Verkäuferin","commessa","f:Verkäuferinnen"],["Kellner","cameriere","m:Kellner"],["Kellnerin","cameriera","f:Kellnerinnen"],["Ingenieur","ingegnere","m:Ingenieure"],["Ingenieurin","ingegnere (donna)","f:Ingenieurinnen"],["Krankenpfleger","infermiere","m:Krankenpfleger"],["Krankenpflegerin","infermiera","f:Krankenpflegerinnen"],
 ["Krankenhaus","ospedale","n:Krankenhäuser"],["Büro","ufficio","n:Büros"],["Restaurant","ristorante","n:Restaurants"],["Schule","scuola","f:Schulen"],["Firma","ditta, azienda","f:Firmen"],["Hamburg","Amburgo",""],["Ende","fine","n:Enden"]
];
EX.l7=EX.l7.concat([
 {t:"dict",au:"Am Wochenende arbeite ich."},
 {t:"say",zh:"Chiedi alla signora Bauer che lavoro fa (con Sie)",it:"Was machen Sie beruflich, Frau Bauer?"},
 {t:"type",q:"Completa: {Ich trinke} ＿ {Kaffee.} (nessun)",a:["keinen"],full:"Ich trinke keinen Kaffee."}
]);
