DLG.l5=[["A","¿Esta es tu familia?","Questa è la tua famiglia?"],["B","Sí. Mis padres viven en Sevilla.","Sì. I miei genitori vivono a Siviglia."],["A","¡Tu madre es muy joven!","Tua madre è giovanissima!"],["B","Este es mi hermano, Pablo, y su mujer.","Questo è mio fratello Pablo, con sua moglie."],["A","¿Tienen hijos?","Hanno figli?"],["B","Sí, tienen una hija, Lola. Es mi sobrina.","Sì, hanno una figlia, Lola. È mia nipote."],["A","¿Y quién es este chico?","E chi è questo ragazzo?"],["B","Este es mi primo Diego.","Questo è mio cugino Diego."],["A","¿Tienes hermanas, Laura?","Hai sorelle, Laura?"],["B","No, pero tengo muchos primos.","No, ma ho tanti cugini."]];
EX.l5=[
 {q:"«mia madre»:",o:["{mi madre}","{la mi madre}","{mía madre}"],e:"Il possessivo non vuole l'articolo."},
 {q:"«i miei genitori»:",o:["{mis padres}","{los mis padres}","{mis parientes}"],e:"{padres} = genitori; {parientes} = parenti."},
 {q:"{mi primo} vuol dire:",o:["mio cugino","il mio primo figlio","mio fratello maggiore"],e:"Falso amico: {primo} = cugino."},
 {q:"Il figlio di tuo figlio è tuo…",o:["{nieto}","{sobrino}","{primo}"],e:"{nieto} = nipote di nonni; {sobrino} = nipote di zii."},
 {q:"«la nostra casa»:",o:["{nuestra casa}","{nuestro casa}","{la nuestra casa}"],e:"{nuestro} si accorda: {nuestra casa}."},
 {q:"«Mio fratello è alto.»",o:["{Mi hermano es alto.}","{Mi hermano tiene alto.}","{Mi hermano está alto.}"],e:"Aspetto fisico: {ser}."},
 {q:"Ascolta: quanti figli hanno?",au:"Tienen dos hijos y una hija.",o:["tre","due","uno"],e:"{dos hijos y una hija}."},
 {q:"Ascolta: chi è Diego?",au:"Diego es el hijo de mi tía.",o:["il cugino","lo zio","il nipote"],e:"Il figlio della zia è il cugino: {primo}."},
 {q:"«Ha gli occhi verdi.»",o:["{Tiene los ojos verdes.}","{Es los ojos verdes.}","{Tiene ojos verdos.}"],e:"Occhi e capelli con {tener}."},
 {t:"type",q:"Completa: {Pablo y} ＿ {mujer tienen una hija.} (sua)",a:["su"],full:"Pablo y su mujer tienen una hija."},
 {t:"type",q:"Completa: ＿ {hermanos viven en Madrid.} (i miei)",a:["mis"],full:"Mis hermanos viven en Madrid."},
 {t:"dict",au:"Mis padres viven en Sevilla."},
 {t:"say",zh:"Presenta la tua famiglia: «Ho un fratello e una sorella. Mio fratello è sposato.»",it:"Tengo un hermano y una hermana. Mi hermano está casado."},
 {t:"say",zh:"Chiedi a un amico se ha fratelli",it:"¿Tienes hermanos?"}
];
VOC.l5=[
 ["familia","famiglia","f"],["padres","genitori","mp"],["padre","padre","m"],["madre","madre","f"],["mi","mio, mia",""],["su","suo, sua; loro",""],["nuestro","nostro",""],["vuestro","vostro",""],["quién","chi",""],
 ["hija","figlia","f"],["hijos","figli","mp"],["hermanos","fratelli","mp"],["abuelo","nonno","m"],["abuela","nonna","f"],["tío","zio","m"],["tía","zia","f"],["primo","cugino","m"],["prima","cugina","f"],["sobrino","nipote (di zii)","m"],["sobrina","nipote (di zii)","f"],["nieto","nipote (di nonni)","m"],["nieta","nipote (di nonni)","f"],
 ["marido","marito","m"],["mujer","donna; moglie","f"],["novio","fidanzato","m"],["novia","fidanzata","f"],["parientes","parenti","mp"],["chico","ragazzo","m"],["chica","ragazza","f"],["vivir","vivere, abitare",""],
 ["casado","sposato",""],["soltero","single, non sposato",""],["joven","giovane",""],["alto","alto",""],["simpático","simpatico",""],["pelo","capelli","m"],["ojos","occhi","mp"],["rubio","biondo",""],["moreno","bruno, scuro",""],["verde","verde",""]
];
EX.l5=EX.l5.concat([
 {t:"dict",au:"Este es mi primo Diego."},
 {t:"say",zh:"Di': «Mia madre è molto simpatica.»",it:"Mi madre es muy simpática."},
 {t:"type",q:"Completa: {¿Tienes} ＿ {? — Sí, un hermano.} (fratelli)",a:["hermanos"],full:"¿Tienes hermanos? — Sí, un hermano."}
]);
