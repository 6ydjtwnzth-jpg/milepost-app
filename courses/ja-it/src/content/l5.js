DLG.l5=[["A","ゆき さん 、 それ は かぞく の しゃしん です か 。","Yuki, è una foto della tua famiglia?"],["B","はい 。 これ が 父[ちち] で 、 これ が 母[はは] です 。","Sì. Questo è mio padre e questa è mia madre."],["A","いい しゃしん です ね 。 この ひと は ？","Bella foto. E questa persona?"],["B","姉[あね] です 。 二十五[にじゅうご]さい です 。","È mia sorella maggiore. Ha 25 anni."],["A","何[なん]人[にん] かぞく です か 。","Quanti siete in famiglia?"],["B","五人[ごにん] かぞく です 。 弟[おとうと] も います 。 マルコ さん は ？","Siamo in cinque. Ho anche un fratello minore. E tu, Marco?"],["A","わたし は 三人[さんにん] かぞく です 。 きょうだい は いません 。 でも 、 いぬ が います 。","Noi siamo in tre. Non ho fratelli. Però ho un cane."]];
EX.l5=[
 {q:"Ascolta: quanti sono in famiglia?",au:"四人[よにん] かぞく です 。",o:["quattro","tre","sette"],e:"四人[よにん] = よにん, quattro persone."},
 {q:"Ascolta: quanti anni ha?",au:"兄[あに] は 二十八[にじゅうはっ]さい です 。",o:["28","18","82"],e:"二十八[にじゅうはち] = 28."},
 {q:"Parlando di TUA madre con un collega dici:",o:["母[はは]","お母[かあ]さん","母[はは]さん"],e:"Per la propria famiglia: 母[はは]."},
 {q:"Parlando del padre di Yuki dici:",o:["お父[とう]さん","父[ちち]","父[ちち]さん"],e:"Per la famiglia degli altri: お父[とう]さん."},
 {q:"«C'è un gatto.»",o:["ねこ が います 。","ねこ が あります 。","ねこ は です 。"],e:"Animali: います."},
 {q:"«C'è un libro.»",o:["ほん が あります 。","ほん が います 。","ほん の あります 。"],e:"Cose: あります."},
 {q:"Come si dice «due persone»?",o:["二人[ふたり]","二人[ににん]","二[に]さい"],e:"一人[ひとり] ひとり, 二人[ふたり] ふたり, poi さんにん…"},
 {q:"十五[じゅうご] si legge:",o:["じゅうご","ごじゅう","じゅうよん"],e:"10 + 5 = じゅうご; ごじゅう = 50."},
 {t:"ord",q:"Componi: «Ho un fratello minore.»",w:["弟[おとうと]","が","一人[ひとり]","います","。"],a:["弟[おとうと] が 一人[ひとり] います 。"]},
 {t:"type",q:"Scrivi in kana o rōmaji il numero 34:",a:["三十四[さんじゅうよん]","三十四[さんじゅうし]"],full:"三十四[さんじゅうよん]",e:"さん + じゅう + よん."},
 {t:"type",q:"Completa: 何[なん]さい ___ か 。 (Quanti anni hai?)",a:["です"],full:"何[なん]さい です か 。"},
 {t:"dict",au:"父[ちち] と 母[はは] が います 。"},
 {t:"say",it:"Di' quanti siete in famiglia e chi c'è (es. padre, madre e una sorella maggiore).",jp:"四人[よにん] かぞく です 。 父[ちち] と 母[はは] と 姉[あね] が います 。"},
 {t:"say",it:"Chiedi a Yuki quanti anni ha sua sorella maggiore.",jp:"お姉[ねえ]さん は 何[なん]さい です か 。"}
];
VOC.l5=[
 ["かぞく","famiglia","n"],["父[ちち]","(mio) padre","n"],["母[はは]","(mia) madre","n"],["お父[とう]さん","padre (di altri); papà","n"],["お母[かあ]さん","madre (di altri); mamma","n"],["兄[あに]","(mio) fratello maggiore","n"],["お兄[にい]さん","fratello maggiore (di altri)","n"],
 ["姉[あね]","(mia) sorella maggiore","n"],["お姉[ねえ]さん","sorella maggiore (di altri)","n"],["弟[おとうと]","fratello minore","n"],["妹[いもうと]","sorella minore","n"],["きょうだい","fratelli e sorelle","n"],["しゃしん","foto","n"],["いぬ","cane","n"],
 ["一人[ひとり]","una persona; da solo","n"],["二人[ふたり]","due persone","n"],["〜 人[にん]","… persone","x"],["〜 さい","… anni (età)","x"],["います","c'è, ci sono (persone, animali)","v"],["あります","c'è, ci sono (cose)","v"],["と","e (tra nomi)","x"],["でも","però","x"],["いい","buono, bello","a"]
];
