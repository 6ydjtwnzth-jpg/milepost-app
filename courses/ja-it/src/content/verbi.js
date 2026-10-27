/* verbi del coniugatore: d = forma base con letture, z = significato, g = gruppo (u = godan, ru = ichidan, irr = irregolare) */
var VERBS=[
 {d:"行[い]く",z:"andare",g:"u",iku:1},{d:"飲[の]む",z:"bere",g:"u"},{d:"読[よ]む",z:"leggere",g:"u"},{d:"書[か]く",z:"scrivere",g:"u"},{d:"聞[き]く",z:"ascoltare; chiedere",g:"u"},
 {d:"話[はな]す",z:"parlare",g:"u"},{d:"買[か]う",z:"comprare",g:"u"},{d:"会[あ]う",z:"incontrare",g:"u"},{d:"待[ま]つ",z:"aspettare",g:"u"},{d:"持[も]つ",z:"tenere, avere con sé",g:"u"},
 {d:"帰[かえ]る",z:"tornare (a casa)",g:"u"},{d:"入[はい]る",z:"entrare",g:"u"},{d:"分[わ]かる",z:"capire",g:"u"},{d:"作[つく]る",z:"fare, preparare",g:"u"},{d:"乗[の]る",z:"salire (su un mezzo)",g:"u"},
 {d:"ある",z:"esserci (cose)",g:"u",aru:1},{d:"遊[あそ]ぶ",z:"giocare, divertirsi",g:"u"},{d:"休[やす]む",z:"riposare",g:"u"},{d:"住[す]む",z:"abitare",g:"u"},{d:"歩[ある]く",z:"camminare",g:"u"},
 {d:"泳[およ]ぐ",z:"nuotare",g:"u"},{d:"使[つか]う",z:"usare",g:"u"},{d:"言[い]う",z:"dire",g:"u"},{d:"思[おも]う",z:"pensare",g:"u"},{d:"撮[と]る",z:"fotografare",g:"u"},
 {d:"食[た]べる",z:"mangiare",g:"ru"},{d:"見[み]る",z:"vedere, guardare",g:"ru"},{d:"起[お]きる",z:"alzarsi, svegliarsi",g:"ru"},{d:"寝[ね]る",z:"dormire, andare a letto",g:"ru"},{d:"いる",z:"esserci (persone, animali)",g:"ru"},
 {d:"着[き]る",z:"indossare (sopra la vita)",g:"ru"},{d:"教[おし]える",z:"insegnare",g:"ru"},{d:"出[で]かける",z:"uscire (di casa)",g:"ru"},{d:"始[はじ]める",z:"cominciare",g:"ru"},{d:"借[か]りる",z:"prendere in prestito",g:"ru"},
 {d:"する",z:"fare",g:"irr"},{d:"来[く]る",z:"venire",g:"irr"},{d:"勉強[べんきょう]する",z:"studiare",g:"irr"},{d:"料理[りょうり]する",z:"cucinare",g:"irr"},{d:"電話[でんわ]する",z:"telefonare",g:"irr"}
];
EX.verbi=[
 {q:"Forma -masu di 飲[の]む (bere):",o:["飲[の]みます","飲[の]めます","飲[の]います"],e:"Gruppo 1: la -u diventa -i + ます."},
 {q:"Forma -masu di 食[た]べる (mangiare):",o:["食[た]べます","食[た]べります","食[た]びます"],e:"Gruppo 2: si toglie る e si aggiunge ます."},
 {q:"Forma -te di 書[か]く (scrivere):",o:["書[か]いて","書[か]って","書[か]きて"],e:"-く → -いて."},
 {q:"Forma -te di 行[い]く (andare):",o:["行[い]って","行[い]いて","行[い]きて"],e:"Eccezione: 行[い]く → 行[い]って."},
 {q:"Forma -te di 飲[の]む:",o:["飲[の]んで","飲[の]って","飲[の]みて"],e:"-む, -ぶ, -ぬ → -んで."},
 {q:"Forma -nai di 買[か]う (comprare):",o:["買[か]わない","買[か]あない","買[か]いない"],e:"-う → -わない (non -あない)."},
 {q:"Forma -nai di ある (esserci):",o:["ない","あらない","あない"],e:"ある è irregolare: il negativo è semplicemente ない."},
 {q:"帰[かえ]る (tornare) è del gruppo…",o:["1 (godan): 帰[かえ]ります","2 (ichidan): 帰[かえ]ます","irregolare"],e:"Alcuni verbi in -eru/-iru sono del gruppo 1: 帰[かえ]る, 入[はい]る, 走[はし]る."},
 {q:"Passato informale di 来[く]る (venire):",o:["来[き]た","来[く]た","来[こ]た"],e:"来[く]る è irregolare: 来[こ]ない, 来[き]ます, 来[き]た."},
 {t:"type",q:"Forma -masu di する:",a:["します"],full:"します"},
 {t:"type",q:"Forma -te di 待[ま]つ (aspettare):",a:["待[ま]って"],full:"待[ま]って"},
 {t:"type",q:"Forma -ta di 話[はな]す (parlare):",a:["話[はな]した"],full:"話[はな]した"}
];
