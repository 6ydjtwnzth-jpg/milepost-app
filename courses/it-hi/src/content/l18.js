DLG.l18=[["A","Ravi, hai mai visto una tempesta in mare?","रवि, क्या तुमने कभी समुद्र में तूफ़ान देखा है?"],["B","Sì, una volta, l'anno scorso. Eravamo vicino alla Sicilia.","हाँ, एक बार, पिछले साल। हम सिसिली के पास थे।"],["A","Cosa è successo?","क्या हुआ था?"],["B","Era notte e pioveva forte. Io dormivo quando è suonato l'allarme.","रात थी और तेज़ बारिश हो रही थी। मैं सो रहा था जब अलार्म बजा।"],["A","E tu cosa hai fatto?","और तुमने क्या किया?"],["B","Mi sono alzato, ho preso il giubbotto e sono andato al punto di raccolta.","मैं उठा, लाइफ़ जैकेट ली और मस्टर स्टेशन गया।"],["A","Avevi paura?","क्या तुम्हें डर लग रहा था?"],["B","Un po'. Le onde erano altissime e la nave si muoveva molto.","थोड़ा। लहरें बहुत ऊँची थीं और जहाज़ बहुत हिल रहा था।"],["A","E i passeggeri?","और यात्री?"],["B","Mentre aspettavamo, abbiamo aiutato i passeggeri. All'improvviso il vento si è calmato.","जब हम इंतज़ार कर रहे थे, हमने यात्रियों की मदद की। अचानक हवा शांत हो गई।"],["A","Per fortuna!","शुक्र है!"],["B","Sì. Alle quattro siamo tornati in cabina. Nessuno si è fatto male.","हाँ। चार बजे हम केबिन लौट आए। किसी को चोट नहीं लगी।"]];
EX.l18=[
 {q:"«मैं सो रहा था जब अलार्म बजा।»",o:["{Dormivo quando è suonato l'allarme.}", "{Ho dormito quando suonava l'allarme.}", "{Dormivo quando suonava l'allarme.}"],e:"चलता काम: {dormivo}; घटना: {è suonato}।"},
 {q:"पृष्ठभूमि: «तेज़ बारिश हो रही थी।»",o:["{Pioveva forte.}", "{Ha piovuto forte.}", "{Piove forte.}"],e:"मौसम (पृष्ठभूमि) → {imperfetto}।"},
 {q:"«अचानक हवा शांत हो गई।»",o:["{All'improvviso il vento si è calmato.}", "{All'improvviso il vento si calmava.}", "{All'improvviso il vento ha calmato.}"],e:"अचानक घटना → {passato prossimo}।"},
 {q:"«जब हम इंतज़ार कर रहे थे…»",o:["{Mentre aspettavamo…}", "{Mentre abbiamo aspettato…}", "{Quando aspettiamo…}"],e:"{mentre} + {imperfetto}।"},
 {q:"«क्या तुमने कभी तूफ़ान देखा है?»",o:["{Hai mai visto una tempesta?}", "{Vedevi mai una tempesta?}", "{Hai visto mai tempesta?}"],e:"{Hai mai…?} + बीता रूप।"},
 {q:"«मुझे डर लग रहा था»:",o:["{Avevo paura.}", "{Ho avuto paura sempre.}", "{Ero paura.}"],e:"भावना → {imperfetto}, {avere paura}।"},
 {q:"सुनें: अलार्म बजा तब रवि क्या कर रहा था?",au:"Io dormivo quando è suonato l'allarme.",o:["सो रहा था", "काम कर रहा था", "खा रहा था"],e:"{dormivo}."},
 {q:"सुनें: लहरें कैसी थीं?",au:"Le onde erano altissime.",o:["बहुत ऊँची", "छोटी", "शांत"],e:"{altissime} = बहुत ऊँची।"},
 {t:"type",q:"पूरा करें: {Joy} ＿ {quando Ravi ha telefonato.} ({leggere})",a:["leggeva"],full:"Joy leggeva quando Ravi ha telefonato."},
 {t:"type",q:"पूरा करें: {All'improvviso} ＿ {il comandante.} ({arrivare})",a:["è arrivato"],full:"All'improvviso è arrivato il comandante."},
 {t:"ord",q:"क्रम में लगाएँ: «रात थी और तेज़ बारिश हो रही थी।»",a:["Era notte e pioveva forte."],w:["Era", "notte", "e", "pioveva", "forte."]},
 {t:"dict",au:"Nessuno si è fatto male."},
 {t:"say",zh:"बताइए: «मैं काम कर रहा था जब कप्तान आए।»",it:"Lavoravo quando è arrivato il comandante."}
];
VOC.l18=[
 ["hai mai…?","क्या तुमने कभी…?",""],
 ["una volta","एक बार",""],
 ["succedere","होना, घटना",""],
 ["forte","तेज़; मज़बूत",""],
 ["onda","लहर","f"],
 ["alto","ऊँचा; लंबा",""],
 ["altissimo","बहुत ऊँचा",""],
 ["muoversi","हिलना",""],
 ["aspettare","इंतज़ार करना",""],
 ["mentre","जबकि, जब",""],
 ["all'improvviso","अचानक",""],
 ["calmarsi","शांत होना",""],
 ["per fortuna","शुक्र है",""],
 ["nessuno","कोई नहीं",""],
 ["farsi male","चोट लगना",""],
 ["prima","पहले",""],
 ["alla fine","आख़िर में",""],
 ["chiamare","बुलाना; फ़ोन करना",""],
 ["enorme","बहुत बड़ा",""],
 ["balena","व्हेल","f"],
 ["anno scorso","पिछला साल","m"]
];
