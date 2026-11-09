/* Milepost exercises (generated from newc/board_en/drills.py): ord, gap, err, rep. Formats in shell/exercises.js. */
function XX(id,a){EX[id]=(EX[id]||[]).concat(a)}
XX("l1",[
 {t:"rep",ask:"Thank you!",who:"isang pasahero",o:[["You're welcome!", "Walang anuman po!"], ["Good night!", "Magandang gabi!"], ["Excuse me!", "Excuse me!"]],e:"Sagot sa {Thank you}: {You're welcome}."},
 {t:"rep",ask:"Good morning! Welcome aboard.",who:"opisyal sa gangway",o:[["Good morning, sir. Thank you.", "Magandang umaga po, sir. Salamat po."], ["Good night, sir.", "Magandang gabi po, sir."], ["Goodbye!", "Paalam!"]],e:"Bati ang sagot sa bati."},
 {t:"gap",s:"Your passport, ＿.",o:["please", "thanks", "sorry"],it:"Ang pasaporte mo, pakiusap.",e:"{please} = pakiusap."},
 {t:"err",s:"Good night, madam! Welcome aboard.",bad:1,fix:"Good evening, madam! Welcome aboard.",it:"Dumating ang isang pasahero sa gabi.",e:"Sa pagdating: {Good evening}; pamamaalam lang ang {Good night}."},
 {t:"ord",ear:1,q:"«Maligayang pagdating sa barko, sir.»",w:["Welcome", "aboard,", "sir."],x:["the"],a:["Welcome aboard, sir."]}
]);
XX("l2",[
 {t:"err",s:"Joy? He is a waitress.",bad:1,fix:"Joy? She is a waitress.",it:"Ikinukuwento mo si Joy.",e:"Babae: {she}, hindi {he}."},
 {t:"err",s:"I'm cabin steward.",bad:1,fix:"I'm a cabin steward.",it:"Sinasabi mo ang trabaho mo.",e:"May {a} bago ang trabaho."},
 {t:"gap",s:"We ＿ colleagues.",o:["are", "is", "am"],it:"Magkakasama kami sa trabaho.",e:"{we are}."},
 {t:"rep",ask:"What's your name?",who:"isang bagong kasamahan",o:[["My name's Joy.", "Joy ang pangalan ko."], ["I'm fine.", "Mabuti ako."], ["I'm from Cebu.", "Taga-Cebu ako."]],e:"Pangalan: {My name's…}"},
 {t:"ord",q:"«Taga-India ako.»",w:["I'm", "from", "India."],x:["the"],a:["I'm from India."]}
]);
XX("l3",[
 {t:"rep",ask:"Are you new?",who:"si Mrs Taylor",o:[["Yes, I am, madam.", "Opo, ma'am."], ["Yes, I'm.", "Oo."], ["Yes, I do.", "Oo."]],e:"Maikling sagot: {Yes, I am} (hindi {Yes, I'm})."},
 {t:"gap",s:"＿ you from London?",o:["Are", "Is", "Do"],it:"Taga-London ka ba?",e:"Tanong na may {be}: {Are you…?}"},
 {t:"err",s:"You are from Manila?",bad:0,fix:"Are you from Manila?",it:"Nagtatanong ka sa kasamahan.",e:"Tanong: {Are you…?}, walang «ba»."},
 {t:"err",s:"Is Joy Filipino? — Yes, he is.",bad:5,fix:"Is Joy Filipino? — Yes, she is.",it:"Maikling sagot.",e:"Babae: {she}."},
 {t:"ord",ear:1,q:"«Taga-saan po kayo?»",w:["Where", "are", "you", "from?"],x:["do"],a:["Where are you from?"]}
]);
XX("l4",[
 {t:"gap",s:"There ＿ two beds.",o:["are", "is", "be"],it:"May dalawang kama.",e:"Maramihan: {there are}."},
 {t:"gap",s:"This is ＿ alarm clock.",o:["an", "a", "the some"],it:"Alarm clock ito.",e:"Patinig: {an}."},
 {t:"err",s:"There are two locker.",bad:3,fix:"There are two lockers.",it:"Binibilang mo ang mga locker.",e:"Maramihan: {lockers} (hindi lang «mga»)."},
 {t:"err",s:"Please open the light.",bad:1,fix:"Please turn on the light.",it:"Pinakikiusapan mo ang kasamahan na buksan ang ilaw.",e:"{turn on the light}, hindi «open»."},
 {t:"ord",q:"«Ito ang mga locker.»",w:["These", "are", "the", "lockers."],x:["this"],a:["These are the lockers."]}
]);
XX("l5",[
 {t:"err",s:"Joy's son? Her name is Miguel.",bad:2,fix:"Joy's son? His name is Miguel.",it:"Tungkol sa anak ni Joy.",e:"Lalaki ang anak: {his}."},
 {t:"gap",s:"She ＿ got a son.",o:["has", "have", "is"],it:"May anak siyang lalaki.",e:"{she has got}."},
 {t:"rep",ask:"Have you got any children?",who:"si Mrs Taylor",o:[["Yes, I have. A son.", "Opo. Isang anak na lalaki."], ["Yes, I am.", "Opo."], ["I'm six.", "Anim na taon ako."]],e:"{Have you got…?} → {Yes, I have}."},
 {t:"ord",q:"«Priya ang pangalan ng kapatid kong babae.»",w:["My", "sister's", "name", "is", "Priya."],x:["of"],a:["My sister's name is Priya."]}
]);
XX("l6",[
 {t:"gap",s:"My shift starts ＿ six.",o:["at", "on", "in"],it:"Alas-sais nagsisimula ang shift ko.",e:"Oras: {at}."},
 {t:"gap",s:"The drill is ＿ Tuesday.",o:["on", "at", "in"],it:"Sa Martes ang drill.",e:"Araw: {on}."},
 {t:"rep",ask:"What time is it?",who:"si Mark",o:[["It's half past five.", "Alas-singko y medya na."], ["It's Tuesday.", "Martes ngayon."], ["At six.", "Nang alas-sais."]],e:"Oras: {It's…}"},
 {t:"ord",ear:1,q:"«Mula alas-sais hanggang alas-dos ang shift ko.»",w:["My", "shift", "is", "from", "six", "to", "two."],x:["until"],a:["My shift is from six to two."]}
]);
XX("l7",[
 {t:"err",s:"Mark work on deck.",bad:1,fix:"Mark works on deck.",it:"Ang trabaho ni Mark.",e:"Isang tao: {works}."},
 {t:"err",s:"She doesn't works in the bar.",bad:2,fix:"She doesn't work in the bar.",it:"Ang trabaho ni Joy.",e:"{doesn't} + payak."},
 {t:"gap",s:"Ravi ＿ the cabins.",o:["cleans", "clean", "cleaning"],it:"Naglilinis si Ravi ng mga kabina.",e:"{he} → {-s}."},
 {t:"rep",ask:"What do you do?",who:"si Ana",o:[["I'm a waitress. I work in the restaurant.", "Waitress ako. Sa restawran ako nagtatrabaho."], ["I'm doing my work now.", "Ginagawa ko ang trabaho ko ngayon."], ["I'm fine, thanks.", "Mabuti ako."]],e:"{What do you do?} = ano ang trabaho mo?"},
 {t:"ord",q:"«Tumutulong siya sa bosun.»",w:["He", "helps", "the", "bosun."],x:["help"],a:["He helps the bosun."]}
]);
XX("l8",[
 {t:"rep",ask:"Good evening, sir. What can I get you?",who:"sa bar",o:[["I'd like a coffee, please.", "Isang kape, pakiusap."], ["Give me coffee.", "Bigyan mo ako ng kape."], ["I want coffee now.", "Gusto ko ng kape ngayon."]],e:"Magalang: {I'd like…, please}."},
 {t:"gap",s:"How much ＿ it?",o:["is", "are", "does"],it:"Magkano?",e:"{How much is it?}"},
 {t:"err",s:"How much it is?",bad:2,fix:"How much is it?",it:"Nagtatanong ka ng presyo.",e:"Sa tanong, nauuna ang {is}."},
 {t:"err",s:"It's three dollar.",bad:2,fix:"It's three dollars.",it:"Sinasabi mo ang presyo.",e:"Maramihan: {dollars}."},
 {t:"ord",ear:1,q:"«Gusto po ba ninyo ng yelo?»",w:["Would", "you", "like", "some", "ice?"],x:["want"],a:["Would you like some ice?"]}
]);
XX("r1",[
 {t:"rep",ask:"Where are you from?",who:"isang pasahero",o:[["I'm from Kochi, in India, sir.", "Taga-Kochi po ako, sa India."], ["I'm a steward.", "Steward po ako."], ["I'm twenty-nine.", "Dalawampu't siyam na po ako."]],e:"{from} + bansa."},
 {t:"gap",s:"I've ＿ a brother and a sister.",o:["got", "get", "have"],it:"May kapatid akong lalaki at babae.",e:"{I've got}."},
 {t:"err",s:"There is two lifts.",bad:1,fix:"There are two lifts.",it:"Binibilang mo ang mga elevator.",e:"Maramihan: {there are}."}
]);
XX("l9",[
 {t:"err",s:"Where you work?",bad:1,fix:"Where do you work?",it:"Nagtatanong ka sa kasamahan.",e:"Huwag kalimutan ang {do}."},
 {t:"err",s:"Does he speaks English?",bad:2,fix:"Does he speak English?",it:"Nagtatanong ka tungkol kay Mr Harris.",e:"{does} + payak."},
 {t:"gap",s:"＿ is the chief officer? — Mr Harris.",o:["Who", "What", "Where"],it:"Sino ang chief officer?",e:"Tao: {who}."},
 {t:"rep",ask:"Do you speak Tagalog?",who:"ang bosun",o:[["Yes, I do.", "Oo."], ["Yes, I am.", "Oo."], ["Yes, I speak.", "Oo, nagsasalita."]],e:"{Do you…?} → {Yes, I do}."},
 {t:"ord",ear:1,q:"«Kailan nagsisimula ang tanghalian?»",w:["When", "does", "lunch", "start?"],x:["is"],a:["When does lunch start?"]}
]);
XX("l10",[
 {t:"err",s:"I go always to the gym.",bad:2,fix:"I always go to the gym.",it:"Ikinukuwento mo ang gawain mo.",e:"{always} bago ang pandiwa."},
 {t:"err",s:"I don't never smoke.",bad:1,fix:"I never smoke.",it:"Sinasabi mo ang gawi mo.",e:"May «hindi» na ang {never}."},
 {t:"gap",s:"She is ＿ tired after work.",o:["usually", "usual", "use"],it:"Karaniwang pagod siya pagkatapos ng trabaho.",e:"{usually} pagkatapos ng {be}."},
 {t:"rep",ask:"How often do you call your family?",who:"si Joy",o:[["Every day, after dinner.", "Araw-araw, pagkatapos ng hapunan."], ["At ten.", "Nang alas-diyes."], ["In the cabin.", "Sa kabina."]],e:"{How often?} → {every day}…"},
 {t:"ord",q:"«Gumigising ako nang alas-singko.»",w:["I", "get", "up", "at", "five."],x:["on"],a:["I get up at five."]}
]);
XX("l11",[
 {t:"err",s:"I like sing karaoke.",bad:2,fix:"I like singing karaoke.",it:"Sinasabi mo ang hilig mo.",e:"{like} + {-ing}."},
 {t:"err",s:"She can sings very well.",bad:2,fix:"She can sing very well.",it:"Tungkol kay Joy.",e:"{can} + payak."},
 {t:"gap",s:"Can you swim? — Yes, I ＿.",o:["can", "do", "am"],it:"Marunong ka bang lumangoy? — Oo.",e:"{Can you…?} → {Yes, I can}."},
 {t:"rep",ask:"Do you like dancing?",who:"si Tom",o:[["No, I hate dancing!", "Hindi, ayaw na ayaw kong sumayaw!"], ["No, I can dancing.", "Hindi."], ["Yes, I like dance yesterday.", "Oo."]],e:"{like}/{hate} + {-ing}."},
 {t:"ord",q:"«Hindi talaga ako marunong sumayaw.»",w:["I", "can't", "dance", "at", "all."],x:["to"],a:["I can't dance at all."]}
]);
XX("l12",[
 {t:"err",s:"I am knowing the captain.",bad:2,fix:"I know the captain.",it:"Tungkol sa kapitan.",e:"{know}: walang {-ing}."},
 {t:"err",s:"I cleaning cabin 2047.",bad:1,fix:"I'm cleaning cabin 2047.",it:"Sinasabi mo sa telepono ang ginagawa mo.",e:"{be} + {-ing}."},
 {t:"gap",s:"Look! The ship ＿ arriving.",o:["is", "are", "does"],it:"Tingnan mo! Dumarating ang barko.",e:"{The ship is arriving}."},
 {t:"rep",ask:"What are you doing?",who:"si Joy sa telepono",o:[["I'm cleaning a cabin.", "Naglilinis ako ng kabina."], ["I clean cabins every day.", "Araw-araw akong naglilinis ng kabina."], ["I'm a steward.", "Steward ako."]],e:"Ngayon: {present continuous}."},
 {t:"ord",ear:1,q:"«Umaalis na ang barko sa daungan.»",w:["The", "ship", "is", "leaving", "port."],x:["are"],a:["The ship is leaving port."]}
]);
XX("l13",[
 {t:"err",s:"The theatre is in deck five.",bad:3,fix:"The theatre is on deck five.",it:"Nagbibigay ka ng direksyon.",e:"Deck: {on}."},
 {t:"gap",s:"Port is ＿.",o:["left", "right", "forward"],it:"Kaliwa ang port.",e:"{port} = kaliwa."},
 {t:"rep",ask:"Excuse me, where's the medical centre?",who:"isang pasahero",o:[["It's on deck three, next to the lifts.", "Nasa deck tres po, katabi ng mga elevator."], ["It's at three o'clock.", "Alas-tres po."], ["It's very nice.", "Napakaganda po."]],e:"Lugar + direksyon."},
 {t:"ord",ear:1,q:"«Umakyat sa hagdan at lumiko sa kanan.»",w:["Go", "up", "the", "stairs", "and", "turn", "right."],x:["to"],a:["Go up the stairs and turn right."]}
]);
XX("l14",[
 {t:"err",s:"How much eggs are there?",bad:1,fix:"How many eggs are there?",it:"Binibilang mo ang itlog sa galley.",e:"Nabibilang: {how many}."},
 {t:"err",s:"There isn't some milk.",bad:2,fix:"There isn't any milk.",it:"Walang gatas sa bodega.",e:"Negatibo: {any}."},
 {t:"gap",s:"We need ＿ tomatoes.",o:["some", "any", "a"],it:"Kailangan natin ng kamatis.",e:"Positibo: {some}."},
 {t:"rep",ask:"Are there any onions?",who:"si Chef Paolo",o:[["Yes, there are some.", "Oo, mayroon."], ["Yes, there is any.", "Oo."], ["Yes, they are onions.", "Oo, sibuyas sila."]],e:"{Are there any…?} → {Yes, there are some}."},
 {t:"ord",q:"«Maraming bigas sa bodega.»",w:["There", "is", "a", "lot", "of", "rice", "in", "the", "store."],x:["many"],a:["There is a lot of rice in the store."]}
]);
XX("r2",[
 {t:"rep",ask:"What's the weather like?",who:"isang pasahero",o:[["It's sunny, but it's windy.", "Maaraw, pero mahangin."], ["I like it.", "Gusto ko."], ["At ten.", "Nang alas-diyes."]],e:"Panahon: {It's…}"},
 {t:"gap",s:"She ＿ cleaning the bar right now.",o:["is", "does", "has"],it:"Nililinis niya ang bar ngayon.",e:"{is} + {-ing}."},
 {t:"err",s:"He usually get up at six.",bad:2,fix:"He usually gets up at six.",it:"Ang gawain ni Ravi.",e:"{he} → {gets}."}
]);
XX("l15",[
 {t:"err",s:"Yesterday I walk to the old town.",bad:2,fix:"Yesterday I walked to the old town.",it:"Ikinukuwento mo ang shore leave mo.",e:"Nakaraan: {walked}."},
 {t:"err",s:"I was called my mother.",bad:1,fix:"I called my mother.",it:"Tinawagan mo ang nanay mo.",e:"Walang {was} sa {past simple}."},
 {t:"err",s:"See you yesterday night.",bad:2,fix:"See you last night.",it:"Kausap mo ang isang kasamahan.",e:"{last night}."},
 {t:"gap",s:"Where ＿ you yesterday?",o:["were", "was", "did"],it:"Nasaan ka kahapon?",e:"{you} → {were}."},
 {t:"ord",ear:1,q:"«Bumisita kami sa isang magandang simbahan.»",w:["We", "visited", "a", "beautiful", "church."],x:["visit"],a:["We visited a beautiful church."]}
]);
XX("l16",[
 {t:"err",s:"Did you went to Pompeii?",bad:2,fix:"Did you go to Pompeii?",it:"Nagtatanong ka sa pasahero.",e:"{did} + payak."},
 {t:"err",s:"I buyed a hat.",bad:1,fix:"I bought a hat.",it:"Bumili ka ng sumbrero.",e:"{buy} → {bought}."},
 {t:"gap",s:"Is ＿ raining?",o:["it", "this", "there"],it:"Umuulan ba?",e:"Panahon: {it}."},
 {t:"rep",ask:"Did you enjoy the excursion?",who:"si Ravi",o:[["Yes, I did! It was wonderful.", "Oo! Napakaganda."], ["Yes, I enjoyed.", "Oo."], ["Yes, I was.", "Oo."]],e:"{Did you…?} → {Yes, I did}."},
 {t:"ord",q:"«Ano ang binili mo?»",w:["What", "did", "you", "buy?"],x:["bought"],a:["What did you buy?"]}
]);
XX("l17",[
 {t:"err",s:"When I was a child, I use to swim every day.",bad:6,fix:"When I was a child, I used to swim every day.",it:"Ikinukuwento mo ang pagkabata mo.",e:"Nakaraan: {used to}."},
 {t:"err",s:"I could to swim when I was five.",bad:2,fix:"I could swim when I was five.",it:"Kausap mo ang isang kasamahan.",e:"{could} + payak."},
 {t:"gap",s:"Did you ＿ to go fishing?",o:["use", "used", "using"],it:"Nangingisda ka ba dati?",e:"{Did you use to…?}"},
 {t:"ord",q:"«Lumaki ako sa Kochi.»",w:["I", "grew", "up", "in", "Kochi."],x:["growed"],a:["I grew up in Kochi."]}
]);
XX("l18",[
 {t:"err",s:"I sleeping when the alarm rang.",bad:1,fix:"I was sleeping when the alarm rang.",it:"Ikinukuwento mo ang gabi ng bagyo.",e:"{was} + {-ing}."},
 {t:"err",s:"They was waiting at the muster station.",bad:1,fix:"They were waiting at the muster station.",it:"Kausap mo ang isang kasamahan.",e:"{they} → {were}."},
 {t:"gap",s:"While we ＿ waiting, we helped the passengers.",o:["were", "was", "are"],it:"Habang naghihintay kami, tinulungan namin ang mga pasahero.",e:"{we were}."},
 {t:"ord",ear:1,q:"«Biglang huminto ang hangin.»",w:["Suddenly", "the", "wind", "stopped."],x:["was"],a:["Suddenly the wind stopped."]}
]);
XX("l19",[
 {t:"err",s:"The Aurora is more bigger than my last ship.",bad:3,fix:"The Aurora is bigger than my last ship.",it:"Inihahambing mo ang mga barko.",e:"Hindi sabay ang {more} at {-er}."},
 {t:"err",s:"Naples is cheaper from Barcelona.",bad:3,fix:"Naples is cheaper than Barcelona.",it:"Kausap mo ang isang kasamahan.",e:"Paghahambing: {than}."},
 {t:"gap",s:"It's ＿ best port on our route.",o:["the", "a", "more"],it:"Ito ang pinakamagandang daungan sa ruta natin.",e:"Pinaka-: {the best}."},
 {t:"ord",q:"«Mas komportable ang mga kabina rito.»",w:["The", "cabins", "are", "more", "comfortable", "here."],x:["comfortabler"],a:["The cabins are more comfortable here."]}
]);
XX("l20",[
 {t:"err",s:"I work here since five years.",bad:3,fix:"I've worked here for five years.",it:"Sinasabi mo ang karanasan mo.",e:"{present perfect} + {for}."},
 {t:"err",s:"I've been to Spain last year.",bad:0,fix:"I went to Spain last year.",it:"Kausap mo ang isang kasamahan.",e:"May tiyak na panahon: {past simple}."},
 {t:"gap",s:"Have you ever ＿ a whale?",o:["seen", "saw", "see"],it:"Nakakita ka na ba ng balyena?",e:"{seen}."},
 {t:"rep",ask:"How long have you worked on ships?",who:"sa interview",o:[["For six years, since 2019.", "Anim na taon na, mula 2019."], ["Since six years.", "Anim na taon."], ["Six years ago.", "Anim na taon na ang nakalipas."]],e:"{for} + haba, {since} + simula."},
 {t:"ord",q:"«Hindi pa ako nakapunta sa Japan.»",w:["I've", "never", "been", "to", "Japan."],x:["went"],a:["I've never been to Japan."]}
]);
XX("l21",[
 {t:"err",s:"If I will save money, I will open a restaurant.",bad:2,fix:"If I save money, I'll open a restaurant.",it:"Sinasabi mo ang plano mo.",e:"Walang {will} pagkatapos ng {if}."},
 {t:"err",s:"I going to fly home in November.",bad:1,fix:"I'm going to fly home in November.",it:"Kausap mo ang isang kasamahan.",e:"{be} + {going to}."},
 {t:"gap",s:"I'll ＿ your bag, madam.",o:["carry", "to carry", "carrying"],it:"Ako na po ang magbubuhat ng bag ninyo.",e:"{will} + payak."},
 {t:"rep",ask:"Will you come back to the Aurora?",who:"si Joy",o:[["I think so. If they offer me a contract, I'll come back.", "Sa tingin ko. Kung bibigyan nila ako ng kontrata, babalik ako."], ["Yes, I came back.", "Oo, bumalik ako."], ["I am come back.", "Bumabalik ako."]],e:"{will} at {if}."},
 {t:"ord",q:"«Makakasama ko ang pamilya ko.»",w:["I'm", "going", "to", "spend", "time", "with", "my", "family."],x:["will"],a:["I'm going to spend time with my family."]}
]);
XX("l22",[
 {t:"err",s:"You must to wear a life jacket.",bad:2,fix:"You must wear a life jacket.",it:"Safety briefing.",e:"{must} + payak."},
 {t:"err",s:"He have to work on Sunday.",bad:1,fix:"He has to work on Sunday.",it:"Kausap mo ang isang kasamahan.",e:"{he} → {has to}."},
 {t:"gap",s:"You ＿ use the lifts in an emergency.",o:["mustn't", "don't have to", "should"],it:"Bawal gumamit ng elevator sa emergency.",e:"Bawal: {mustn't}."},
 {t:"rep",ask:"Man overboard!",who:"isang marino sa deck",o:[["Throw a lifebuoy! Keep your eyes on the person!", "Maghagis ng lifebuoy! Huwag alisin ang tingin sa tao!"], ["Say again, please.", "Pakiulit."], ["Good night!", "Magandang gabi!"]],e:"Una ang lifebuoy, saka bantayan ang tao."},
 {t:"ord",ear:1,q:"«Dapat kang magpahinga.»",w:["You", "should", "rest."],x:["to"],a:["You should rest."]}
]);
XX("l23",[
 {t:"err",s:"Paolo is the chef who he makes pizza.",bad:5,fix:"Paolo is the chef who makes pizza.",it:"Ikinukuwento mo si Paolo.",e:"Walang {he} pagkatapos ng {who}."},
 {t:"err",s:"He is the waiter which helped me.",bad:4,fix:"He is the waiter who helped me.",it:"Kausap mo ang isang kasamahan.",e:"Tao: {who}."},
 {t:"gap",s:"Kochi is the city ＿ I grew up.",o:["where", "which", "who"],it:"Ang Kochi ang lungsod kung saan ako lumaki.",e:"Lugar: {where}."},
 {t:"rep",ask:"Tell me about yourself.",who:"sa interview",o:[["I'm Joy Reyes. I've worked on cruise ships for six years.", "Ako si Joy Reyes. Anim na taon na akong nagtatrabaho sa mga cruise ship."], ["Myself Joy.", "Ako si Joy."], ["Yes, I tell.", "Oo, sasabihin ko."]],e:"Pangalan + karanasan."},
 {t:"ord",ear:1,q:"«Salamat sa oras ninyo.»",w:["Thank", "you", "for", "your", "time."],x:["of"],a:["Thank you for your time."]}
]);
XX("r3",[
 {t:"rep",ask:"Have you ever been to Japan?",who:"isang kasamahan",o:[["No, I haven't. But I've been to Norway.", "Hindi pa. Pero nakapunta na ako sa Norway."], ["No, I didn't went.", "Hindi."], ["Yes, last year I have been.", "Oo."]],e:"{Have you ever…?} → {No, I haven't}."},
 {t:"gap",s:"If it rains, we ＿ stay inside.",o:["will", "would", "did"],it:"Kung uulan, mananatili tayo sa loob.",e:"{if} + present, {will}."},
 {t:"err",s:"When I was a child, I was live near the sea.",bad:6,fix:"When I was a child, I lived near the sea.",it:"Ikinukuwento mo ang pagkabata mo.",e:"{past simple}: {lived}."}
]);
