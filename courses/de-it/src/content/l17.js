DLG.l17=[["A","Oma, bist du das auf dem Foto?","Nonna, sei tu nella foto?"],["B","Ja! Da war ich sieben. Wir haben in einem Dorf in Bayern gewohnt.","Sì! Lì avevo sette anni. Abitavamo in un paese in Baviera."],["A","Hattet ihr ein großes Haus?","Avevate una casa grande?"],["B","Nein, es war klein, aber wir hatten einen schönen Garten.","No, era piccola, ma avevamo un bel giardino."],["A","Was hast du gemacht, als du klein warst?","Che cosa facevi quando eri piccola?"],["B","Ich habe viel mit meinen Geschwistern gespielt. Einen Fernseher hatten wir nicht.","Giocavo molto con i miei fratelli. La televisione non l'avevamo."],["A","Musstest du auch im Haus helfen?","Dovevi anche aiutare in casa?"],["B","Ja, natürlich. Und ich durfte nie lange aufbleiben!","Sì, certo. E non potevo mai stare alzata fino a tardi!"],["A","Das war eine andere Zeit!","Erano altri tempi!"],["B","Ja, aber wir waren sehr glücklich.","Sì, ma eravamo molto felici."]];
EX.l17=[
 {q:"«Ero stanco.»",o:["{Ich war müde.}","{Ich habe müde gewesen.}","{Ich wurde müde.}"],e:"Con {sein} si usa il {Präteritum}: {war}."},
 {q:"«Avevamo un cane.»",o:["{Wir hatten einen Hund.}","{Wir hatten ein Hund.}","{Wir habten einen Hund.}"],e:"{hatten}; {Hund} maschile: {einen}."},
 {q:"«Dovevo aiutare.»",o:["{Ich musste helfen.}","{Ich müsste helfen.}","{Ich muste helfen.}"],e:"{müssen} → {musste}, senza dieresi. {müsste} è un'altra cosa (dovrei)."},
 {q:"«Quando ero piccolo…» (una volta sola, nel passato)",o:["{Als ich klein war, …}","{Wenn ich klein war, …}","{Als ich war klein, …}"],e:"Passato unico: {als}; il verbo in fondo."},
 {q:"«Quando avevo vent'anni mi sono trasferito.»",o:["{Als ich zwanzig war, bin ich umgezogen.}","{Als ich zwanzig war, ich bin umgezogen.}","{Wenn ich zwanzig war, bin ich umgezogen.}"],e:"Dopo la secondaria, la principale comincia con il verbo."},
 {q:"«Prima abitavo a Napoli.» (parlato)",o:["{Früher habe ich in Neapel gewohnt.}","{Früher bin ich in Neapel gewohnt.}","{Früher wohnte ich in Napoli.}"],e:"Nel parlato: {Perfekt} con {haben}."},
 {q:"Ascolta: quanti anni aveva la nonna nella foto?",au:"Da war ich sieben.",o:["7","17","70"],e:"{sieben} = 7."},
 {q:"Ascolta: com'era la casa?",au:"Es war klein, aber wir hatten einen schönen Garten.",o:["piccola, con un bel giardino","grande, con un giardino","piccola, senza giardino"],e:"{klein}, {einen schönen Garten}."},
 {q:"Ascolta: che cosa non poteva fare?",au:"Ich durfte nie lange aufbleiben!",o:["stare alzata fino a tardi","giocare fuori","guardare la tv"],e:"{lange aufbleiben}."},
 {t:"type",q:"Completa: {Als Kind} ＿ {ich sehr schüchtern.} (sein, Präteritum)",a:["war"],full:"Als Kind war ich sehr schüchtern."},
 {t:"type",q:"Completa: {Wir} ＿ {keinen Fernseher.} (haben, Präteritum)",a:["hatten"],full:"Wir hatten keinen Fernseher."},
 {t:"dict",au:"Als ich klein war, habe ich in einem Dorf gewohnt."},
 {t:"say",zh:"Di' dove abitavi da piccolo e com'era la casa",it:"Als ich klein war, habe ich in Rom gewohnt. Unser Haus war klein."},
 {t:"say",zh:"Racconta una cosa che dovevi fare da bambino",it:"Als Kind musste ich jeden Tag mein Zimmer aufräumen."}
];
VOC.l17=[
 ["war","ero, era (sein)",""],["hatte","avevo, aveva (haben)",""],["konnte","potevo, potè (können)",""],["musste","dovevo (müssen)",""],["wollte","volevo (wollen)",""],["durfte","potevo, avevo il permesso (dürfen)",""],["wenn","quando, ogni volta che; se",""],["früher","prima, una volta",""],["damals","allora, a quel tempo",""],["anders","diverso, in modo diverso",""],["Als Kind…","da bambino…",""],
 ["Oma","nonna","f:Omas"],["Opa","nonno","m:Opas"],["Foto","foto","n:Fotos"],["Garten","giardino","m:Gärten"],["Fernseher","televisore","m:Fernseher"],["Bayern","Baviera",""],["Geld","soldi, denaro","n:-"],["Kindheit","infanzia","f:-"],["Spielzeug","giocattolo","n:Spielzeuge"],["Nachbar","vicino di casa","m:Nachbarn"],
 ["helfen","aiutare",""],["aufbleiben","stare alzato",""],["umziehen","trasferirsi, traslocare",""],["schüchtern","timido",""],["andere","altro, altra",""]
];
EX.l17=EX.l17.concat([
 {t:"dict",au:"Früher war alles anders."},
 {t:"say",zh:"Di' in che anno e dove sei nato",it:"Ich bin neunzehnhundertachtundachtzig in Turin geboren."},
 {t:"type",q:"Completa: {Was hast du gemacht,} ＿ {du klein warst?}",a:["als"],full:"Was hast du gemacht, als du klein warst?"}
]);
