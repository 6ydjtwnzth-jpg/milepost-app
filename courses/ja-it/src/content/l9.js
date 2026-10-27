DLG.l9=[["A","すみません 、 ゆき さん は どこ です か 。","Scusa, dov'è Yuki?"],["B","ゆき さん です か 。 今[いま] 、 としょかん です よ 。","Yuki? Adesso è in biblioteca."],["A","そう です か 。 いつ 来[き]ます か 。","Ah. Quando arriva?"],["B","さあ … 。 あ 、 けん さん 、 あの 人[ひと] は だれ です か 。","Mah… Ah, Ken, chi è quella persona?"],["A","マルコ さん です 。 イタリア から 来[き]ました 。","È Marco. Viene dall'Italia."],["B","へえ 。 どうして 日本[にほん] に 来[き]ました か 。","Ah sì? Perché è venuto in Giappone?"],["A","日本[にほん] の アニメ が 好[す]き です から 。 日本語[にほんご] も 上手[じょうず] です よ 。","Perché gli piacciono gli anime giapponesi. E parla bene giapponese, sai."],["B","すごい です ね 。","Fantastico!"]];
EX.l9=[
 {q:"Ascolta: che cosa chiede?",au:"トイレ は どこ です か 。",o:["Dov'è il bagno?","Quando apre il bagno?","Che cos'è il bagno?"],e:"どこ = dove."},
 {q:"Ascolta: perché studia giapponese?",au:"日本[にほん] の アニメ が 好[す]き です から 。",o:["perché gli piacciono gli anime","perché lavora in Giappone","perché la sua ragazza è giapponese"],e:"〜 から = perché…"},
 {q:"«Come si chiama?» (cortese)",o:["お名前[なまえ] は 何[なん] です か 。","お名前[なまえ] は だれ です か 。","お名前[なまえ] は どこ です か 。"],e:"Per i nomi si usa 何."},
 {q:"«Chi è quella persona?»",o:["あの 人[ひと] は だれ です か 。","あの 人[ひと] は 何[なに] です か 。","あの 人[ひと] は どれ です か 。"],e:"だれ = chi."},
 {q:"«Quando vieni?»",o:["いつ 来[き]ます か 。","どこ 来[き]ます か 。","どう 来[き]ます か 。"],e:"いつ = quando."},
 {q:"«Che tipo di film guardi?»",o:["どんな えいが を 見[み]ます か 。","どう えいが を 見[み]ます か 。","どれ えいが を 見[み]ます か 。"],e:"どんな + nome = che tipo di."},
 {q:"Vuoi dire all'amico «guarda che domani è festa»: che cosa aggiungi alla fine?",o:["よ","ね","か"],e:"よ dà un'informazione nuova."},
 {q:"«Che bel tempo, eh?» cerca l'accordo:",o:["いい 天気[てんき] です ね 。","いい 天気[てんき] です よ 。","いい 天気[てんき] です か 。"],e:"ね = vero?, eh?"},
 {q:"何 davanti a です si legge:",o:["なん","なに","なな"],e:"何[なん] です か 。"},
 {t:"ord",q:"Componi: «Da dove vieni?»",w:["どこ","から","来[き]ました","か","。"],a:["どこ から 来[き]ました か 。"]},
 {t:"type",q:"Completa: トイレ は ___ です か 。 (dove)",a:["どこ"],full:"トイレ は どこ です か 。"},
 {t:"type",q:"Completa: ___ 日本語[にほんご] を 勉強[べんきょう]します か 。 (perché)",a:["どうして"],full:"どうして 日本語[にほんご] を 勉強[べんきょう]します か 。"},
 {t:"dict",au:"お名前[なまえ] は 何[なん] です か 。"},
 {t:"say",it:"Ferma uno sconosciuto e chiedi dov'è la stazione.",jp:"すみません 、 えき は どこ です か 。"},
 {t:"say",it:"Rispondi: «Studio giapponese perché mi piace il Giappone.»",jp:"日本[にほん] が 好[す]き です から 。"}
];
VOC.l9=[
 ["どこ","dove?","x"],["いつ","quando?","x"],["どうして","perché?","x"],["どんな","che tipo di?","x"],["どう","come?","x"],["〜 から","da; perché","x"],["ね","vero? eh? (alla fine)","x"],["よ","sai, guarda che (alla fine)","x"],
 ["今[いま]","adesso","n"],["名前[なまえ]","nome","n"],["国[くに]","paese, nazione","n"],["英語[えいご]","inglese (lingua)","n"],["トイレ","bagno, toilette","n"],["えき","stazione","n"],["アニメ","anime, cartoni animati","n"],["音楽[おんがく]","musica","n"],["えいが","film","n"],["天気[てんき]","tempo (meteo)","n"],
 ["好[す]き","che piace","a"],["上手[じょうず]","bravo (in qualcosa)","a"],["すごい","fantastico, incredibile","a"],["休[やす]み","vacanza, giorno libero","n"],["来[き]ました","è venuto, sono venuto","v"],["さあ","mah, chissà","x"],["えーと","ehm…","x"]
];
