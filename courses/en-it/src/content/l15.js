DLG.l15=[["A","Hi, Laura! How was your weekend?","Ciao, Laura! Com'è andato il fine settimana?"],["B","It was great, thanks!","Benissimo, grazie!"],["A","Where were you?","Dov'eri?"],["B","I was in Brighton with my sister.","Ero a Brighton con mia sorella."],["A","Was the weather good?","Il tempo era bello?"],["B","Yes, it was sunny. We walked on the beach.","Sì, c'era il sole. Abbiamo passeggiato sulla spiaggia."],["B","And we visited the Royal Pavilion.","E abbiamo visitato il Royal Pavilion."],["A","Lovely! I stayed at home.","Che bello! Io sono rimasto a casa."],["A","I cleaned the flat and cooked for my parents.","Ho pulito l'appartamento e ho cucinato per i miei genitori."],["B","That's nice!","Che carino!"]];
EX.l15=[
 {q:"«Ero a casa.»",o:["{I was at home.}","{I were at home.}","{I am been at home.}"],e:"{I was}, {you were}, {he was}, {we were}, {they were}."},
 {q:"«Erano stanchi.»",o:["{They were tired.}","{They was tired.}","{They are tired.}"],e:"{they} vuole {were}."},
 {q:"{Were you in London last week?} Rispondi di no:",o:["{No, I wasn't.}","{No, I weren't.}","{No, I didn't.}"],e:"Risposta breve con {was}: {No, I wasn't}."},
 {q:"Il passato di {study}:",o:["{studied}","{studyed}","{studed}"],e:"Consonante + y → -ied."},
 {q:"Il passato di {stop}:",o:["{stopped}","{stoped}","{stopt}"],e:"Vocale breve + consonante: raddoppia."},
 {q:"«la settimana scorsa»:",o:["{last week}","{the last week}","{week last}"],e:"{last} senza articolo."},
 {q:"«tre anni fa»:",o:["{three years ago}","{ago three years}","{before three years}"],e:"{ago} va dopo il periodo."},
 {q:"«Ieri sera abbiamo guardato un film.»",o:["{Last night we watched a film.}","{Yesterday night we watched a film.}","{Last night we have watched a film.}"],e:"«ieri sera» = {last night}, e per un fatto finito il {past simple}."},
 {q:"Ascolta: quante sillabe ha la parola?",au:"visited",o:["tre: vi-si-tid","due: vi-sit","quattro"],e:"Dopo {t} la {-ed} è una sillaba: «vì-zi-tid»."},
 {q:"Ascolta: come suona la -ed?",au:"walked",o:["come una «t»","come «ed»","come una «d»"],e:"Dopo {k} la {-ed} suona «t»: «uookt»."},
 {q:"Ascolta: com'era il tempo?",au:"It was sunny, but it was very windy.",o:["sole e tanto vento","pioggia e vento","nuvoloso e caldo"],e:"{sunny} e {very windy}."},
 {t:"type",q:"Completa: {We} ＿ {our grandparents last Sunday.} (visit)",a:["visited"],full:"We visited our grandparents last Sunday."},
 {t:"type",q:"Completa: {How} ＿ {the film? — It was boring.}",a:["was"],full:"How was the film? — It was boring."},
 {t:"dict",au:"I stayed at home and cleaned the flat."},
 {t:"say",zh:"Racconta il tuo ultimo fine settimana: dov'eri, con chi, due cose che hai fatto (verbi regolari)",it:"Last weekend I was in Florence with my friends. We walked in the centre and visited a museum."}
];
VOC.l15=[
 ["was","ero, fui, sono stato (I / he / she / it)",""],["were","eri, eravamo, erano (you / we / they)",""],["wasn't","non ero, non era",""],["weren't","non eravate, non erano",""],["yesterday","ieri",""],["last night","ieri sera",""],["last week","la settimana scorsa",""],["last","scorso, ultimo",""],["ago","fa",""],
 ["beach","spiaggia",""],["visit","visitare, andare a trovare",""],["clean","pulire",""],["move","trasferirsi, traslocare",""],["try","provare",""],["plan","programmare",""],["stop","fermare, smettere",""],["finish","finire",""],
 ["lovely","bello, carino",""],["that's nice","che carino, che bello",""],["boring","noioso",""],["interesting","interessante",""],["all weekend","tutto il fine settimana",""],["year","anno",""],["holiday","vacanza",""],["party","festa",""],["concert","concerto",""],["call","telefonare, chiamare",""],["return", "tornare; restituire", ""],["invite", "invitare", ""],["celebrate", "festeggiare", ""],["climb", "salire, scalare", ""]
];
EX.l15=EX.l15.concat([
 {t:"dict",au:"How was your weekend? — It was great!"},
 {t:"say",zh:"Di': «Due anni fa ci siamo trasferiti a Manchester.»",it:"Two years ago we moved to Manchester."},
 {t:"type",q:"Completa: {She} ＿ {all weekend.} (study)",a:["studied"],full:"She studied all weekend."}
]);
