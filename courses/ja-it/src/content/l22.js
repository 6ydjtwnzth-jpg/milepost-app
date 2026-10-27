DLG.l22=[["A","どう しました か 。","Che cosa si sente?"],["B","きのう から あたま が いたい ん です 。 ねつ も あります 。","È che da ieri ho mal di testa. Ho anche la febbre."],["A","そう です か 。 ちょっと 口[くち] を あけて ください 。 … かぜ です ね 。","Capisco. Apra un po' la bocca, per favore. … È un raffreddore."],["B","仕事[しごと] に 行[い]けます か 。","Posso andare al lavoro?"],["A","二日[ふつか] ぐらい 休[やす]んだ ほう が いい です 。 この くすり を 一日[いちにち] 三回[さんかい] 飲[の]まなければ なりません 。","È meglio che riposi un paio di giorni. Deve prendere questa medicina tre volte al giorno."],["B","ごはん の 前[まえ] に 飲[の]みます か 。","La prendo prima dei pasti?"],["A","いいえ 、 ごはん の あと です 。 あまり 無理[むり] を しない で ください ね 。","No, dopo i pasti. Non si sforzi troppo, mi raccomando."],["B","わかりました 。 ありがとう ございました 。","D'accordo. Grazie mille."],["A","お大事[だいじ] に 。","Si riguardi."]];
EX.l22=[
 {q:"Ascolta: dove gli fa male?",au:"おなか が いたい です 。",o:["alla pancia","alla testa","ai denti"],e:"おなか = pancia."},
 {q:"Ascolta: che cosa deve fare?",au:"くすり を 飲[の]まなければ なりません 。",o:["prendere la medicina","andare in ospedale","riposare"],e:"〜なければ なりません = deve."},
 {q:"Ascolta: che cosa consiglia?",au:"早[はや]く ねた ほう が いい です よ 。",o:["andare a letto presto","non mangiare","fare sport"],e:"〜た ほう が いい = è meglio…"},
 {q:"Potenziale di 話[はな]す:",o:["話[はな]せる","話[はな]られる","話[はな]しえる"],e:"Gruppo 1: -u → -eru."},
 {q:"Potenziale di 食[た]べる:",o:["食[た]べられる","食[た]べれる","食[た]べける"],e:"Gruppo 2: る → られる (nel parlato anche 食[た]べれる)."},
 {q:"Potenziale di する:",o:["できる","しれる","すられる"],e:"する → できる."},
 {q:"«Non c'è bisogno che tu venga domani.»",o:["あした は 来[こ]なくて も いい です 。","あした は 来[こ]なければ なりません 。","あした は 来[こ]ない ほう が いい です 。"],e:"〜なくて も いい = non serve."},
 {q:"«Mi fa male la testa.»",o:["あたま が いたい です 。","あたま を いたい です 。","あたま に いたい です 。"],e:"〜 が いたい."},
 {q:"Salutando un malato dici:",o:["お大事[だいじ] に 。","がんばります 。","いただきます 。"],e:"お大事[だいじ]に = riguardati."},
 {t:"ord",q:"Componi: «Qui si può usare la carta?»",w:["ここ","で","カード","が","使[つか]えます","か","。"],a:["ここ で カード が 使[つか]えます か 。"]},
 {t:"type",q:"Potenziale cortese di 行[い]く: ___",a:["行[い]けます"],full:"行[い]けます"},
 {t:"type",q:"Completa: 休[やす]んだ ___ が いい です 。",a:["ほう"],full:"休[やす]んだ ほう が いい です 。"},
 {t:"dict",au:"ねつ が あります 。"},
 {t:"say",it:"Dal medico: «Da stamattina ho mal di testa e ho la febbre.»",jp:"けさ から あたま が いたくて 、 ねつ が ある ん です 。"},
 {t:"say",it:"Chiedi se qui si può pagare con la carta.",jp:"ここ で カード が 使[つか]えます か 。"}
];
VOC.l22=[
 ["いたい","che fa male","a"],["あたま","testa","n"],["おなか","pancia","n"],["歯[は]","denti","n"],["のど","gola","n"],["ねつ","febbre","n"],["せき","tosse","n"],["かぜ","raffreddore, influenza","n"],["くすり","medicina","n"],["病院[びょういん]","ospedale, clinica","n"],["お医者[いしゃ]さん","medico","n"],
 ["〜 なければ なりません","devo…","x"],["〜 なくて も いい","non c'è bisogno di…","x"],["〜 た ほう が いい","è meglio…","x"],["〜 ん です","è che… (spiegazione)","x"],["できる","potere, saper fare","v"],["休[やす]む","riposare; assentarsi","v"],["あける","aprire","v"],["無理[むり] を する","sforzarsi troppo","v"],
 ["一日[いちにち]","un giorno; al giorno","n"],["けさ","stamattina","n"],["ほけんしょう","tessera sanitaria","n"],["お大事[だいじ] に","riguardati","x"],["どう しました か","che cosa c'è? (medico)","x"]
];
