DLG.l11=[["A","マルコ さん の しゅみ は 何[なん] です か 。","Marco, quali sono i tuoi hobby?"],["B","サッカー と りょうり です 。 けん さん は ？","Il calcio e la cucina. E tu, Ken?"],["A","わたし も サッカー が 大好[だいす]き です 。 よく 見[み]ます 。","Anche a me piace tantissimo il calcio. Lo guardo spesso."],["B","そう です か 。 じゃあ 、 日曜日[にちようび] に いっしょに しあい を 見[み]に 行[い]きません か 。","Davvero? Allora, domenica non andiamo insieme a vedere una partita?"],["A","いい です ね 。 行[い]きましょう ！ 何時[なんじ] から です か 。","Bello! Andiamo! A che ora comincia?"],["B","三時[さんじ] から です 。 そのあと 、 わたし の うち で パスタ を 作[つく]りましょう か 。","Alle tre. Dopo, vuoi che prepari la pasta a casa mia?"],["A","わあ 、 うれしい です 。 イタリア の パスタ 、 楽[たの]しみ です ！","Wow, che bello! Non vedo l'ora della pasta italiana!"]];
EX.l11=[
 {q:"Ascolta: che cosa gli piace?",au:"わたし は 音楽[おんがく] が 好[す]き です 。",o:["la musica","il calcio","la cucina"],e:"音楽[おんがく] = musica."},
 {q:"Ascolta: che cosa propone?",au:"いっしょに 昼[ひる] ごはん を 食[た]べません か 。",o:["di pranzare insieme","di cenare insieme","di guardare un film"],e:"昼[ひる]ごはん = pranzo; 〜ません か = invito."},
 {q:"«Mi piacciono i gatti.»",o:["ねこ が 好[す]き です 。","ねこ を 好[す]き です 。","ねこ は 好[す]きます 。"],e:"好[す]き vuole が."},
 {q:"Vuoi invitare un amico al cinema, in modo gentile:",o:["えいが を 見[み]ません か 。","えいが を 見[み]ません 。","えいが を 見[み]ました か 。"],e:"〜 ません か = non vuoi…?"},
 {q:"Accetti un invito:",o:["いい です ね 。 行[い]きましょう 。","ちょっと … 。","行[い]きません でした 。"],e:"〜 ましょう = facciamo!"},
 {q:"Rifiuti con gentilezza:",o:["すみません 、 その 日[ひ] は ちょっと … 。","いいえ 、 行[い]きません 。","きらい です 。"],e:"ちょっと … lascia intendere il no."},
 {q:"«Non guardo mai la TV.»",o:["ぜんぜん テレビ を 見[み]ません 。","ぜんぜん テレビ を 見[み]ます 。","よく テレビ を 見[み]ません 。"],e:"ぜんぜん + negativo."},
 {q:"«Yuki è brava a cucinare.»",o:["ゆき さん は りょうり が 上手[じょうず] です 。","ゆき さん は りょうり を 上手[じょうず] です 。","ゆき さん は りょうり が へた です 。"],e:"〜 が 上手[じょうず] です."},
 {t:"ord",q:"Componi: «Domenica non andiamo a vedere una partita?»",w:["日曜日[にちようび]","に","しあい","を","見[み]に","行[い]きません","か","。"],a:["日曜日[にちようび] に しあい を 見[み]に 行[い]きません か 。"]},
 {t:"type",q:"Trasforma in «facciamo!»: 食[た]べます → ___",a:["食[た]べましょう"],full:"食[た]べましょう"},
 {t:"type",q:"Completa: やさい ___ きらい です 。",a:["が"],full:"やさい が きらい です 。"},
 {t:"dict",au:"しゅみ は 何[なん] です か 。"},
 {t:"say",it:"Di' quali sono i tuoi hobby (es. il cinema e la musica).",jp:"しゅみ は えいが と 音楽[おんがく] です 。"},
 {t:"say",it:"Invita Yuki a bere un caffè insieme sabato.",jp:"土曜日[どようび] に いっしょに コーヒー を 飲[の]みません か 。"}
];
VOC.l11=[
 ["しゅみ","hobby","n"],["好[す]き","che piace","a"],["大好[だいす]き","che piace tantissimo","a"],["きらい","che non piace, odiato","a"],["上手[じょうず]","bravo","a"],["へた","negato, scarso","a"],["とくい","il proprio forte","a"],
 ["サッカー","calcio","n"],["しあい","partita","n"],["りょうり","cucina, piatto","n"],["うた","canzone","n"],["やさい","verdura","n"],["スポーツ","sport","n"],["ゲーム","videogioco","n"],["昼[ひる] ごはん","pranzo","n"],
 ["いっしょに","insieme","x"],["よく","spesso","x"],["ときどき","a volte","x"],["ぜんぜん","(con negativo) per niente, mai","x"],["作[つく]ります","fare, preparare","v"],["〜 ません か","non vuoi…? (invito)","x"],["〜 ましょう","facciamo…!","x"],["楽[たの]しい","divertente","a"],["楽[たの]しみ です","non vedo l'ora","x"],["うれしい","felice, contento","a"]
];
