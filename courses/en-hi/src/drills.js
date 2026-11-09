/* Milepost exercises (generated from newc/board_en/drills.py): ord, gap, err, rep. Formats in shell/exercises.js. */
function XX(id,a){EX[id]=(EX[id]||[]).concat(a)}
XX("l1",[
 {t:"rep",ask:"Thank you!",who:"एक यात्री",o:[["You're welcome!", "कोई बात नहीं!"], ["Good night!", "शुभ रात्रि!"], ["Excuse me!", "माफ़ कीजिए!"]],e:"{Thank you} का जवाब {You're welcome}।"},
 {t:"rep",ask:"Good morning! Welcome aboard.",who:"गैंगवे पर अधिकारी",o:[["Good morning, sir. Thank you.", "सुप्रभात, सर। धन्यवाद।"], ["Good night, sir.", "शुभ रात्रि, सर।"], ["Goodbye!", "अलविदा!"]],e:"अभिवादन का जवाब अभिवादन।"},
 {t:"gap",s:"Your passport, ＿.",o:["please", "thanks", "sorry"],it:"आपका पासपोर्ट, कृपया।",e:"{please} = कृपया।"},
 {t:"err",s:"Good night, madam! Welcome aboard.",bad:1,fix:"Good evening, madam! Welcome aboard.",it:"शाम को एक यात्री जहाज़ पर आती हैं।",e:"मिलते समय {Good evening}; {Good night} सिर्फ़ विदा।"},
 {t:"ord",ear:1,q:"«जहाज़ पर स्वागत है, सर।»",w:["Welcome", "aboard,", "sir."],x:["the"],a:["Welcome aboard, sir."]}
]);
XX("l2",[
 {t:"err",s:"Myself Ravi, from Kochi.",bad:0,fix:"I'm Ravi, from Kochi.",it:"आप अपना परिचय देते हैं।",e:"{Myself Ravi} अंग्रेज़ी में नहीं: {I'm Ravi}।"},
 {t:"err",s:"I'm cabin steward.",bad:1,fix:"I'm a cabin steward.",it:"आप अपना काम बताते हैं।",e:"काम के साथ {a}।"},
 {t:"gap",s:"We ＿ colleagues.",o:["are", "is", "am"],it:"हम साथी हैं।",e:"{we are}."},
 {t:"rep",ask:"What's your name?",who:"एक नया साथी",o:[["My name's Joy.", "मेरा नाम जॉय है।"], ["I'm fine.", "मैं ठीक हूँ।"], ["I'm from Cebu.", "मैं सेबू से हूँ।"]],e:"नाम: {My name's…}"},
 {t:"ord",q:"«मैं भारत से हूँ।»",w:["I'm", "from", "India."],x:["the"],a:["I'm from India."]}
]);
XX("l3",[
 {t:"rep",ask:"Are you new?",who:"मिसेज़ टेलर",o:[["Yes, I am, madam.", "जी हाँ, मैडम।"], ["Yes, I'm.", "हाँ।"], ["Yes, I do.", "हाँ।"]],e:"छोटा जवाब: {Yes, I am} ({Yes, I'm} नहीं)।"},
 {t:"gap",s:"＿ you from London?",o:["Are", "Is", "Do"],it:"क्या आप लंदन से हैं?",e:"{be} वाला सवाल: {Are you…?}"},
 {t:"err",s:"You are from Manila?",bad:0,fix:"Are you from Manila?",it:"आप एक साथी से पूछते हैं।",e:"सवाल: {Are you…?}"},
 {t:"ord",ear:1,q:"«आप कहाँ से हैं?»",w:["Where", "are", "you", "from?"],x:["do"],a:["Where are you from?"]}
]);
XX("l4",[
 {t:"gap",s:"There ＿ two beds.",o:["are", "is", "be"],it:"दो बिस्तर हैं।",e:"बहुवचन: {there are}।"},
 {t:"gap",s:"This is ＿ alarm clock.",o:["an", "a", "the some"],it:"यह एक अलार्म घड़ी है।",e:"स्वर ध्वनि: {an}।"},
 {t:"err",s:"It's bathroom.",bad:1,fix:"It's a bathroom.",it:"आप केबिन दिखाते हैं।",e:"आर्टिकल चाहिए: {a bathroom}।"},
 {t:"ord",q:"«ये लॉकर हैं।»",w:["These", "are", "the", "lockers."],x:["this"],a:["These are the lockers."]}
]);
XX("l5",[
 {t:"err",s:"I am having two brothers.",bad:2,fix:"I have two brothers.",it:"आप अपना परिवार बताते हैं।",e:"{have} (के पास होना) में {-ing} नहीं।"},
 {t:"err",s:"Joy's son? Her name is Miguel.",bad:2,fix:"Joy's son? His name is Miguel.",it:"जॉय के बेटे के बारे में।",e:"बेटा पुरुष: {his}।"},
 {t:"gap",s:"She ＿ got a son.",o:["has", "have", "is"],it:"उसका एक बेटा है।",e:"{she has got}."},
 {t:"rep",ask:"Have you got any children?",who:"मिसेज़ टेलर",o:[["Yes, I have. A son.", "हाँ। एक बेटा।"], ["Yes, I am.", "हाँ।"], ["I'm six.", "मैं छह साल का हूँ।"]],e:"{Have you got…?} → {Yes, I have}।"},
 {t:"ord",q:"«मेरी बहन का नाम प्रिया है।»",w:["My", "sister's", "name", "is", "Priya."],x:["of"],a:["My sister's name is Priya."]}
]);
XX("l6",[
 {t:"gap",s:"My shift starts ＿ six.",o:["at", "on", "in"],it:"मेरी शिफ़्ट छह बजे शुरू होती है।",e:"घड़ी का समय: {at}।"},
 {t:"gap",s:"The drill is ＿ Tuesday.",o:["on", "at", "in"],it:"ड्रिल मंगलवार को है।",e:"दिन: {on}।"},
 {t:"err",s:"See you today morning.",bad:2,fix:"See you this morning.",it:"आप साथी से मिलने की बात करते हैं।",e:"{this morning} («आज सुबह»)।"},
 {t:"rep",ask:"What time is it?",who:"मार्क",o:[["It's half past five.", "साढ़े पाँच बजे हैं।"], ["It's Tuesday.", "मंगलवार है।"], ["At six.", "छह बजे।"]],e:"समय: {It's…}"},
 {t:"ord",ear:1,q:"«मेरी शिफ़्ट छह से दो बजे तक है।»",w:["My", "shift", "is", "from", "six", "to", "two."],x:["until"],a:["My shift is from six to two."]}
]);
XX("l7",[
 {t:"err",s:"Mark work on deck.",bad:1,fix:"Mark works on deck.",it:"मार्क का काम।",e:"एक व्यक्ति: {works}।"},
 {t:"err",s:"She doesn't works in the bar.",bad:2,fix:"She doesn't work in the bar.",it:"जॉय का काम।",e:"{doesn't} + मूल क्रिया।"},
 {t:"gap",s:"Ravi ＿ the cabins.",o:["cleans", "clean", "cleaning"],it:"रवि केबिन साफ़ करता है।",e:"{he} → {-s}।"},
 {t:"rep",ask:"What do you do?",who:"आना",o:[["I'm a waitress. I work in the restaurant.", "मैं वेट्रेस हूँ। रेस्टोरेंट में काम करती हूँ।"], ["I'm doing my work now.", "मैं अभी अपना काम कर रही हूँ।"], ["I'm fine, thanks.", "मैं ठीक हूँ।"]],e:"{What do you do?} = आपका काम?"},
 {t:"ord",q:"«वह बोसन की मदद करता है।»",w:["He", "helps", "the", "bosun."],x:["help"],a:["He helps the bosun."]}
]);
XX("l8",[
 {t:"rep",ask:"Good evening, sir. What can I get you?",who:"बार में",o:[["I'd like a coffee, please.", "मुझे एक कॉफ़ी चाहिए, कृपया।"], ["Give me coffee.", "मुझे कॉफ़ी दो।"], ["I want coffee now.", "मुझे अभी कॉफ़ी चाहिए।"]],e:"विनम्र: {I'd like…, please}।"},
 {t:"gap",s:"How much ＿ it?",o:["is", "are", "does"],it:"कितने का है?",e:"{How much is it?}"},
 {t:"err",s:"How much it is?",bad:2,fix:"How much is it?",it:"आप दाम पूछते हैं।",e:"सवाल में {is} पहले।"},
 {t:"err",s:"It's three dollar.",bad:2,fix:"It's three dollars.",it:"आप दाम बताते हैं।",e:"बहुवचन: {dollars}।"},
 {t:"ord",ear:1,q:"«क्या आप बर्फ़ लेंगे?»",w:["Would", "you", "like", "some", "ice?"],x:["want"],a:["Would you like some ice?"]}
]);
XX("r1",[
 {t:"rep",ask:"Where are you from?",who:"एक यात्री",o:[["I'm from Kochi, in India, sir.", "मैं भारत के कोच्चि से हूँ, सर।"], ["I'm a steward.", "मैं स्टीवर्ड हूँ।"], ["I'm twenty-nine.", "मैं उनतीस साल का हूँ।"]],e:"{from} + देश।"},
 {t:"gap",s:"I've ＿ a brother and a sister.",o:["got", "get", "have"],it:"मेरा एक भाई और एक बहन है।",e:"{I've got}."},
 {t:"err",s:"There is two lifts.",bad:1,fix:"There are two lifts.",it:"आप लिफ़्टें गिनते हैं।",e:"बहुवचन: {there are}।"}
]);
XX("l9",[
 {t:"err",s:"Where you work?",bad:1,fix:"Where do you work?",it:"आप एक साथी से पूछते हैं।",e:"{do} भूलें नहीं।"},
 {t:"err",s:"Does he speaks English?",bad:2,fix:"Does he speak English?",it:"आप मिस्टर हैरिस के बारे में पूछते हैं।",e:"{does} + मूल क्रिया।"},
 {t:"gap",s:"＿ is the chief officer? — Mr Harris.",o:["Who", "What", "Where"],it:"चीफ़ ऑफ़िसर कौन है?",e:"व्यक्ति: {who}।"},
 {t:"rep",ask:"Do you speak Tagalog?",who:"बोसन",o:[["Yes, I do.", "हाँ।"], ["Yes, I am.", "हाँ।"], ["Yes, I speak.", "हाँ, बोलता हूँ।"]],e:"{Do you…?} → {Yes, I do}।"},
 {t:"ord",ear:1,q:"«खाना कब शुरू होता है?»",w:["When", "does", "lunch", "start?"],x:["is"],a:["When does lunch start?"]}
]);
XX("l10",[
 {t:"err",s:"I go always to the gym.",bad:2,fix:"I always go to the gym.",it:"आप अपनी दिनचर्या बताते हैं।",e:"{always} क्रिया से पहले।"},
 {t:"err",s:"I don't never smoke.",bad:1,fix:"I never smoke.",it:"आप अपनी आदत बताते हैं।",e:"{never} में «नहीं» है।"},
 {t:"gap",s:"She is ＿ tired after work.",o:["usually", "usual", "use"],it:"वह आम तौर पर काम के बाद थकी होती है।",e:"{be} के बाद {usually}।"},
 {t:"rep",ask:"How often do you call your family?",who:"जॉय",o:[["Every day, after dinner.", "हर दिन, रात के खाने के बाद।"], ["At ten.", "दस बजे।"], ["In the cabin.", "केबिन में।"]],e:"{How often?} → {every day}…"},
 {t:"ord",q:"«मैं पाँच बजे उठता हूँ।»",w:["I", "get", "up", "at", "five."],x:["on"],a:["I get up at five."]}
]);
XX("l11",[
 {t:"err",s:"I like sing karaoke.",bad:2,fix:"I like singing karaoke.",it:"आप अपना शौक़ बताते हैं।",e:"{like} + {-ing}।"},
 {t:"err",s:"She can sings very well.",bad:2,fix:"She can sing very well.",it:"जॉय के बारे में।",e:"{can} + मूल क्रिया।"},
 {t:"gap",s:"Can you swim? — Yes, I ＿.",o:["can", "do", "am"],it:"क्या तुम तैर सकते हो? — हाँ।",e:"{Can you…?} → {Yes, I can}."},
 {t:"rep",ask:"Do you like dancing?",who:"टॉम",o:[["No, I hate dancing!", "नहीं, मुझे नाचना बिल्कुल पसंद नहीं!"], ["No, I can dancing.", "नहीं।"], ["Yes, I like dance yesterday.", "हाँ।"]],e:"{like}/{hate} + {-ing}।"},
 {t:"ord",q:"«मैं बिल्कुल नहीं नाच सकता।»",w:["I", "can't", "dance", "at", "all."],x:["to"],a:["I can't dance at all."]}
]);
XX("l12",[
 {t:"err",s:"I am knowing the captain.",bad:2,fix:"I know the captain.",it:"आप कप्तान के बारे में बताते हैं।",e:"{know}: {-ing} नहीं।"},
 {t:"err",s:"I cleaning cabin 2047.",bad:1,fix:"I'm cleaning cabin 2047.",it:"आप फ़ोन पर बताते हैं कि क्या कर रहे हैं।",e:"{be} + {-ing}।"},
 {t:"gap",s:"Look! The ship ＿ arriving.",o:["is", "are", "does"],it:"देखो! जहाज़ पहुँच रहा है।",e:"{The ship is arriving}."},
 {t:"rep",ask:"What are you doing?",who:"जॉय फ़ोन पर",o:[["I'm cleaning a cabin.", "मैं एक केबिन साफ़ कर रहा हूँ।"], ["I clean cabins every day.", "मैं हर दिन केबिन साफ़ करता हूँ।"], ["I'm a steward.", "मैं स्टीवर्ड हूँ।"]],e:"अभी: {present continuous}।"},
 {t:"ord",ear:1,q:"«जहाज़ बंदरगाह छोड़ रहा है।»",w:["The", "ship", "is", "leaving", "port."],x:["are"],a:["The ship is leaving port."]}
]);
XX("l13",[
 {t:"err",s:"The theatre is in deck five.",bad:3,fix:"The theatre is on deck five.",it:"आप रास्ता बताते हैं।",e:"डेक: {on}।"},
 {t:"err",s:"The life jacket is the bed under.",bad:6,fix:"The life jacket is under the bed.",it:"आप यात्री को बताते हैं।",e:"{under} संज्ञा से पहले।"},
 {t:"gap",s:"Port is ＿.",o:["left", "right", "forward"],it:"पोर्ट बायाँ है।",e:"{port} = बायाँ।"},
 {t:"rep",ask:"Excuse me, where's the medical centre?",who:"एक यात्री",o:[["It's on deck three, next to the lifts.", "डेक तीन पर, लिफ़्ट के बग़ल में।"], ["It's at three o'clock.", "तीन बजे।"], ["It's very nice.", "बहुत अच्छा है।"]],e:"जगह + दिशा।"},
 {t:"ord",ear:1,q:"«सीढ़ियों से ऊपर जाइए और दाएँ मुड़िए।»",w:["Go", "up", "the", "stairs", "and", "turn", "right."],x:["to"],a:["Go up the stairs and turn right."]}
]);
XX("l14",[
 {t:"err",s:"How much eggs are there?",bad:1,fix:"How many eggs are there?",it:"आप रसोई में अंडे गिनते हैं।",e:"गिनी जाने वाली: {how many}।"},
 {t:"err",s:"There isn't some milk.",bad:2,fix:"There isn't any milk.",it:"स्टोर में दूध नहीं है।",e:"नकार: {any}।"},
 {t:"gap",s:"We need ＿ tomatoes.",o:["some", "any", "a"],it:"हमें कुछ टमाटर चाहिए।",e:"हाँ वाला वाक्य: {some}।"},
 {t:"rep",ask:"Are there any onions?",who:"शेफ़ पाओलो",o:[["Yes, there are some.", "हाँ, कुछ हैं।"], ["Yes, there is any.", "हाँ।"], ["Yes, they are onions.", "हाँ, वे प्याज़ हैं।"]],e:"{Are there any…?} → {Yes, there are some}।"},
 {t:"ord",q:"«स्टोर में बहुत सारे चावल हैं।»",w:["There", "is", "a", "lot", "of", "rice", "in", "the", "store."],x:["many"],a:["There is a lot of rice in the store."]}
]);
XX("r2",[
 {t:"rep",ask:"What's the weather like?",who:"एक यात्री",o:[["It's sunny, but it's windy.", "धूप है, पर हवा चल रही है।"], ["I like it.", "मुझे पसंद है।"], ["At ten.", "दस बजे।"]],e:"मौसम: {It's…}"},
 {t:"gap",s:"She ＿ cleaning the bar right now.",o:["is", "does", "has"],it:"वह अभी बार साफ़ कर रही है।",e:"{is} + {-ing}."},
 {t:"err",s:"He usually get up at six.",bad:2,fix:"He usually gets up at six.",it:"रवि की दिनचर्या।",e:"{he} → {gets}।"}
]);
XX("l15",[
 {t:"err",s:"Yesterday I walk to the old town.",bad:2,fix:"Yesterday I walked to the old town.",it:"आप अपनी शोर लीव बताते हैं।",e:"भूतकाल: {walked}।"},
 {t:"err",s:"See you yesterday night.",bad:2,fix:"See you last night.",it:"एक साथी से बातचीत।",e:"{last night}।"},
 {t:"gap",s:"Where ＿ you yesterday?",o:["were", "was", "did"],it:"कल तुम कहाँ थे?",e:"{you} → {were}."},
 {t:"ord",ear:1,q:"«हमने एक सुंदर चर्च देखा।»",w:["We", "visited", "a", "beautiful", "church."],x:["visit"],a:["We visited a beautiful church."]}
]);
XX("l16",[
 {t:"err",s:"Did you went to Pompeii?",bad:2,fix:"Did you go to Pompeii?",it:"आप यात्री से पूछते हैं।",e:"{did} + मूल क्रिया।"},
 {t:"err",s:"I buyed a hat.",bad:1,fix:"I bought a hat.",it:"आपने एक टोपी ख़रीदी।",e:"{buy} → {bought}।"},
 {t:"gap",s:"Is ＿ raining?",o:["it", "this", "there"],it:"क्या बारिश हो रही है?",e:"मौसम: {it}।"},
 {t:"rep",ask:"Did you enjoy the excursion?",who:"रवि",o:[["Yes, I did! It was wonderful.", "हाँ! बहुत शानदार थी।"], ["Yes, I enjoyed.", "हाँ।"], ["Yes, I was.", "हाँ।"]],e:"{Did you…?} → {Yes, I did}।"},
 {t:"ord",q:"«आपने क्या ख़रीदा?»",w:["What", "did", "you", "buy?"],x:["bought"],a:["What did you buy?"]}
]);
XX("l17",[
 {t:"err",s:"When I was a child, I use to swim every day.",bad:6,fix:"When I was a child, I used to swim every day.",it:"आप अपना बचपन बताते हैं।",e:"भूतकाल: {used to}।"},
 {t:"err",s:"I could to swim when I was five.",bad:2,fix:"I could swim when I was five.",it:"एक साथी से बातचीत।",e:"{could} + मूल क्रिया।"},
 {t:"gap",s:"Did you ＿ to go fishing?",o:["use", "used", "using"],it:"क्या तुम मछली पकड़ने जाते थे?",e:"{Did you use to…?}"},
 {t:"ord",q:"«मैं कोच्चि में बड़ा हुआ।»",w:["I", "grew", "up", "in", "Kochi."],x:["growed"],a:["I grew up in Kochi."]}
]);
XX("l18",[
 {t:"err",s:"I sleeping when the alarm rang.",bad:1,fix:"I was sleeping when the alarm rang.",it:"आप तूफ़ान की रात बताते हैं।",e:"{was} + {-ing}।"},
 {t:"err",s:"They was waiting at the muster station.",bad:1,fix:"They were waiting at the muster station.",it:"एक साथी से बातचीत।",e:"{they} → {were}।"},
 {t:"gap",s:"While we ＿ waiting, we helped the passengers.",o:["were", "was", "are"],it:"जब हम इंतज़ार कर रहे थे, हमने यात्रियों की मदद की।",e:"{we were}."},
 {t:"ord",ear:1,q:"«अचानक हवा रुक गई।»",w:["Suddenly", "the", "wind", "stopped."],x:["was"],a:["Suddenly the wind stopped."]}
]);
XX("l19",[
 {t:"err",s:"The Aurora is more bigger than my last ship.",bad:3,fix:"The Aurora is bigger than my last ship.",it:"आप जहाज़ों की तुलना करते हैं।",e:"{more} और {-er} एक साथ नहीं।"},
 {t:"err",s:"Naples is cheaper from Barcelona.",bad:3,fix:"Naples is cheaper than Barcelona.",it:"एक साथी से बातचीत।",e:"तुलना: {than}।"},
 {t:"gap",s:"It's ＿ best port on our route.",o:["the", "a", "more"],it:"यह हमारे रास्ते का सबसे अच्छा बंदरगाह है।",e:"सबसे: {the best}।"},
 {t:"ord",q:"«यहाँ के केबिन ज़्यादा आरामदायक हैं।»",w:["The", "cabins", "are", "more", "comfortable", "here."],x:["comfortabler"],a:["The cabins are more comfortable here."]}
]);
XX("l20",[
 {t:"err",s:"I work here since five years.",bad:3,fix:"I've worked here for five years.",it:"आप अपना अनुभव बताते हैं।",e:"{present perfect} + {for}।"},
 {t:"err",s:"I've been to Spain last year.",bad:0,fix:"I went to Spain last year.",it:"एक साथी से बातचीत।",e:"ख़ास समय: {past simple}।"},
 {t:"gap",s:"Have you ever ＿ a whale?",o:["seen", "saw", "see"],it:"क्या तुमने कभी व्हेल देखी है?",e:"{seen}."},
 {t:"rep",ask:"How long have you worked on ships?",who:"इंटरव्यू में",o:[["For six years, since 2019.", "छह साल से, 2019 से।"], ["Since six years.", "छह साल से।"], ["Six years ago.", "छह साल पहले।"]],e:"{for} + अवधि, {since} + शुरुआत।"},
 {t:"ord",q:"«मैं कभी जापान नहीं गया।»",w:["I've", "never", "been", "to", "Japan."],x:["went"],a:["I've never been to Japan."]}
]);
XX("l21",[
 {t:"err",s:"If I will save money, I will open a restaurant.",bad:2,fix:"If I save money, I'll open a restaurant.",it:"आप अपनी योजना बताते हैं।",e:"{if} के बाद {will} नहीं।"},
 {t:"err",s:"I going to fly home in November.",bad:1,fix:"I'm going to fly home in November.",it:"एक साथी से बातचीत।",e:"{be} + {going to}।"},
 {t:"gap",s:"I'll ＿ your bag, madam.",o:["carry", "to carry", "carrying"],it:"मैं आपका बैग उठा लेता हूँ, मैडम।",e:"{will} + मूल क्रिया।"},
 {t:"rep",ask:"Will you come back to the Aurora?",who:"जॉय",o:[["I think so. If they offer me a contract, I'll come back.", "मुझे लगता है। अगर कॉन्ट्रैक्ट मिलेगा, तो लौटूँगा।"], ["Yes, I came back.", "हाँ, मैं लौटा।"], ["I am come back.", "मैं वापस हूँ।"]],e:"{will} और {if}।"},
 {t:"ord",q:"«मैं परिवार के साथ समय बिताऊँगा।»",w:["I'm", "going", "to", "spend", "time", "with", "my", "family."],x:["will"],a:["I'm going to spend time with my family."]}
]);
XX("l22",[
 {t:"err",s:"You must to wear a life jacket.",bad:2,fix:"You must wear a life jacket.",it:"सुरक्षा ब्रीफ़िंग।",e:"{must} + मूल क्रिया।"},
 {t:"err",s:"He have to work on Sunday.",bad:1,fix:"He has to work on Sunday.",it:"एक साथी से बातचीत।",e:"{he} → {has to}।"},
 {t:"gap",s:"You ＿ use the lifts in an emergency.",o:["mustn't", "don't have to", "should"],it:"आपातकाल में लिफ़्ट इस्तेमाल करना मना है।",e:"मना: {mustn't}।"},
 {t:"rep",ask:"Man overboard!",who:"डेक पर एक नाविक",o:[["Throw a lifebuoy! Keep your eyes on the person!", "लाइफ़बॉय फेंको! उस व्यक्ति पर नज़र रखो!"], ["Say again, please.", "फिर से कहिए।"], ["Good night!", "शुभ रात्रि!"]],e:"पहले लाइफ़बॉय, फिर नज़र व्यक्ति पर।"},
 {t:"ord",ear:1,q:"«आपको आराम करना चाहिए।»",w:["You", "should", "rest."],x:["to"],a:["You should rest."]}
]);
XX("l23",[
 {t:"err",s:"Paolo is the chef who he makes pizza.",bad:5,fix:"Paolo is the chef who makes pizza.",it:"आप पाओलो के बारे में बताते हैं।",e:"{who} के बाद {he} नहीं।"},
 {t:"err",s:"He is the waiter which helped me.",bad:4,fix:"He is the waiter who helped me.",it:"एक साथी से बातचीत।",e:"व्यक्ति: {who}।"},
 {t:"gap",s:"Kochi is the city ＿ I grew up.",o:["where", "which", "who"],it:"कोच्चि वह शहर है जहाँ मैं बड़ा हुआ।",e:"जगह: {where}।"},
 {t:"rep",ask:"Tell me about yourself.",who:"इंटरव्यू में",o:[["I'm Joy Reyes. I've worked on cruise ships for six years.", "मैं जॉय रेयेस हूँ। मैं छह साल से क्रूज़ जहाज़ों पर काम कर रही हूँ।"], ["Myself Joy.", "मैं जॉय।"], ["Yes, I tell.", "हाँ, बताती हूँ।"]],e:"नाम + अनुभव।"},
 {t:"ord",ear:1,q:"«आपके समय के लिए धन्यवाद।»",w:["Thank", "you", "for", "your", "time."],x:["of"],a:["Thank you for your time."]}
]);
XX("r3",[
 {t:"rep",ask:"Have you ever been to Japan?",who:"एक साथी",o:[["No, I haven't. But I've been to Norway.", "नहीं। पर मैं नॉर्वे जा चुका हूँ।"], ["No, I didn't went.", "नहीं।"], ["Yes, last year I have been.", "हाँ।"]],e:"{Have you ever…?} → {No, I haven't}।"},
 {t:"gap",s:"If it rains, we ＿ stay inside.",o:["will", "would", "did"],it:"अगर बारिश होगी, तो हम अंदर रहेंगे।",e:"{if} + present, {will}."},
 {t:"err",s:"When I was a child, I was live near the sea.",bad:6,fix:"When I was a child, I lived near the sea.",it:"आप बचपन बताते हैं।",e:"{past simple}: {lived}।"}
]);
