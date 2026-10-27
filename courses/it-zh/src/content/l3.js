DLG.l3=[["A","Buongiorno!","早上好！"],["B","Buongiorno! Come sta?","早上好！您好吗？"],["A","Bene, grazie. E Lei?","很好，谢谢。您呢？"],["B","Molto bene, grazie. Lei è il nuovo insegnante?","很好，谢谢。您是新来的老师吗？"],["A","Sì, sono Paolo Rossi. Piacere!","是的，我是保罗·罗西。幸会！"],["B","Piacere! Arrivederci, buona giornata!","幸会！再见，祝您一天愉快！"]];
EX.l3=[
 {q:"听：是哪个词？",au:"papà",o:["papà（爸爸）","papa（教皇）"],e:"重音在最后一个音节：pa-PÀ。"},
 {q:"听：这是疑问句还是陈述句？",au:"Sei italiano?",o:["疑问句","陈述句"],e:"句尾上升，是问句。"},
 {q:"听：这是疑问句还是陈述句？",au:"Sei italiano.",o:["陈述句","疑问句"],e:"句尾下降，是陈述句。"},
 {q:"telefono 的重音在哪儿？",o:["te-LE-fono","te-le-FO-no","TE-le-fono"],e:"倒数第三个音节，要单独记。"},
 {q:"晚上九点走进餐厅，你说：",o:["Buonasera!","Buongiorno!","Buonanotte!"],e:"Buonanotte 只在睡前用。"},
 {q:"问一位不认识的老先生「您好吗？」：",o:["Come sta?","Come stai?","Ciao, come va?"],e:"对陌生人和长辈用 Lei：Come sta?"},
 {q:"famiglia 中的 gli 怎么读？",o:["类似 ly","格利","gi-li"],e:"gli 是舌面贴上颚的 l。"},
 {t:"dict",au:"Come sta?"},
 {t:"dict",au:"Sei studente?"},
 {t:"type",q:"填空（用 Lei）：Lei ___ italiano?（essere）",a:["è"],full:"Lei è italiano?"},
 {t:"say",zh:"用升调问朋友：「你是中国人吗？」",it:"Sei cinese?"},
 {t:"say",zh:"说出你的电话号码（一个一个数字读）。",it:"Tre quattro sette, due due uno, otto nove zero.",e:"换成你自己的号码。"},
 {t:"say",zh:"礼貌地告别：「再见，祝您一天愉快！」",it:"Arrivederci, buona giornata!"}
];
VOC.l3=[
 ["buona giornata","祝你（您）一天愉快",""],["salve","你好",""],["come va?","怎么样？",""],["a dopo","待会儿见",""],["molto","很、非常",""],
 ["numero","号码、数字","m"],["telefono","电话","m"],["cellulare","手机","m"],["signore","先生","m"],["signora","女士","f"],["signorina","小姐","f"],
 ["nuovo","新的",""],["papà","爸爸","m"],["perché","为什么；因为",""],["sei","六",""],["sette","七",""],["otto","八",""],["nove","九",""],["quattro","四",""],
 ["bagno","洗手间","m"],["figlio","儿子","m"],["Spagna","西班牙","f"]
];
