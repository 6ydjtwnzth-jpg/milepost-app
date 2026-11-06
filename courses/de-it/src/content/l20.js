DLG.l20=[["A","Guten Tag! Kann ich Ihnen helfen?","Buongiorno! Posso aiutarla?"],["B","Ja, ich suche eine Jacke für den Winter.","Sì, cerco una giacca per l'inverno."],["A","Welche Größe haben Sie?","Che taglia porta?"],["B","Größe 40. Kann ich diese blaue Jacke anprobieren?","La 40. Posso provare questa giacca blu?"],["A","Natürlich. Die Umkleidekabine ist dort hinten.","Certo. Il camerino è là in fondo."],["B","Hm, sie ist ein bisschen zu klein. Haben Sie sie auch in Größe 42?","Hm, è un po' piccola. Ce l'ha anche nella 42?"],["A","In Blau leider nicht, aber ich habe diese schwarze Jacke in 42.","In blu purtroppo no, ma ho questa giacca nera nella 42."],["B","Die passt mir gut! Was kostet sie?","Questa mi va bene! Quanto costa?"],["A","Neunundsiebzig Euro. Sie steht Ihnen wirklich gut.","Settantanove euro. Le sta davvero bene."],["B","Gut, ich nehme sie.","Bene, la prendo."]];
EX.l20=[
 {q:"«una giacca rossa»:",o:["{eine rote Jacke}","{eine rot Jacke}","{eine roten Jacke}"],e:"Femminile dopo {eine}: {-e}."},
 {q:"«Cerco un maglione caldo.»",o:["{Ich suche einen warmen Pullover.}","{Ich suche einen warme Pullover.}","{Ich suche ein warmer Pullover.}"],e:"Accusativo maschile: {einen warmen}."},
 {q:"«La giacca è nera.»",o:["{Die Jacke ist schwarz.}","{Die Jacke ist schwarze.}","{Die Jacke ist schwarzen.}"],e:"Dopo {sein} nessuna terminazione."},
 {q:"«un bel vestito»:",o:["{ein schönes Kleid}","{ein schöne Kleid}","{ein schöner Kleid}"],e:"Neutro dopo {ein}: {-es}."},
 {q:"«Quale maglione prendi?»",o:["{Welchen Pullover nimmst du?}","{Welcher Pullover nimmst du?}","{Welches Pullover nimmst du?}"],e:"Accusativo maschile: {welchen}."},
 {q:"«I pantaloni non mi vanno.» (misura)",o:["{Die Hose passt mir nicht.}","{Die Hose steht mich nicht.}","{Die Hose passt mich nicht.}"],e:"{passen} + dativo: {mir}."},
 {q:"Ascolta: che cosa cerca?",au:"Ich suche eine Jacke für den Winter.",o:["una giacca","un cappotto","un maglione"],e:"{eine Jacke}."},
 {q:"Ascolta: quanto costa?",au:"Neunundsiebzig Euro.",o:["79 €","97 €","69 €"],e:"{neun} + {siebzig} = 79."},
 {q:"Ascolta: di che colore è la giacca nella 42?",au:"In Blau leider nicht, aber ich habe diese schwarze Jacke in 42.",o:["nera","blu","grigia"],e:"{schwarze}."},
 {t:"type",q:"Completa: {Kann ich} ＿ {Hose anprobieren?} (questi)",a:["diese"],full:"Kann ich diese Hose anprobieren?"},
 {t:"type",q:"Completa: {Ich nehme den} ＿ {Mantel.} (grau)",a:["grauen"],full:"Ich nehme den grauen Mantel."},
 {t:"dict",au:"Haben Sie die Jacke auch in Größe 42?"},
 {t:"say",zh:"Chiedi se puoi provare questi pantaloni",it:"Kann ich diese Hose anprobieren?"},
 {t:"say",zh:"Di' all'amica che il vestito rosso le sta molto bene",it:"Das rote Kleid steht dir sehr gut."}
];
VOC.l20=[
 ["dieser","questo",""],["suchen","cercare",""],["anprobieren","provare (un vestito)",""],["stehen","stare bene (a qualcuno); stare in piedi",""],["Größe","taglia; grandezza","f:Größen"],["Kann ich Ihnen helfen?","posso aiutarla?",""],["dort hinten","là in fondo",""],["wirklich","davvero",""],["Umkleidekabine","camerino","f:Umkleidekabinen"],["Kasse","cassa","f:Kassen"],["Kleidung","vestiti, abbigliamento","f:-"],
 ["Jacke","giacca","f:Jacken"],["Mantel","cappotto","m:Mäntel"],["Pullover","maglione","m:Pullover"],["Hemd","camicia","n:Hemden"],["T-Shirt","maglietta","n:T-Shirts"],["Hose","pantaloni","f:Hosen"],["Jeans","jeans","f:Jeans"],["Rock","gonna","m:Röcke"],["Kleid","vestito (da donna)","n:Kleider"],["Schuh","scarpa","m:Schuhe"],["Mütze","berretto","f:Mützen"],
 ["Farbe","colore","f:Farben"],["rot","rosso",""],["blau","blu, azzurro",""],["grün","verde",""],["schwarz","nero",""],["weiß","bianco",""],["grau","grigio",""],["braun","marrone",""],["lang","lungo",""],["kurz","corto",""],
 ["Mode", "moda", "f:Moden"],
 ["Bluse", "camicetta", "f:Blusen"],
 ["Socke", "calzino", "f:Socken"],
 ["orange", "arancione", ""],
 ["tragen", "portare (vestiti, occhiali); portare (un peso)", ""],
 ["Preis", "prezzo", "m:Preise"],
 ["Angebot", "offerta", "n:Angebote"],
 ["Brille", "occhiali", "f:Brillen"],
 ["aussehen", "sembrare, avere l'aspetto", ""]
];
EX.l20=EX.l20.concat([
 {t:"dict",au:"Die Hose ist zu klein."},
 {t:"say",zh:"Di': «La prendo.» (una giacca)",it:"Ich nehme sie."},
 {t:"type",q:"Completa: {Das ist ein} ＿ {Hemd.} (weiß)",a:["weißes"],full:"Das ist ein weißes Hemd."}
]);
