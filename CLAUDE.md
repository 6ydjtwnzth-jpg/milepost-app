# Milepost — app di corsi di lingua

App mobile-first (oggi PWA statica, domani app iOS/Android dallo stesso codice) che riunisce i corsi di lingua.
Ogni corso è una coppia "lingua da imparare / lingua di chi studia" (es. `ja-it` = giapponese per italiani).

## Capisaldi non negoziabili
Leggi `PRINCIPI.md` prima di ogni modifica. In breve:
1. Ti porto all'esame, in modo concreto (simulazioni nel formato reale, punteggio onesto; mai "ufficiale").
2. Spiegato per chi studia (errori tipici della sua lingua madre, niente corsi generici tradotti).
3. Costa una frazione di una scuola.
4. Paghi una volta, resta tuo.
Design: bello e mai invadente (niente vite, cuori, lucchetti, ansia da streak). La cultura ha una scheda tutta sua: è un punto di forza, va sempre curata e messa in evidenza. Non promettere funzioni che non esistono ancora:
ciò che manca si mostra come "In arrivo".

## Struttura
- `shell/`: l'app. Vanilla JS, nessuna dipendenza.
  - `index.html` + `app.js`: ingresso (lingua → corso → 3 domande → piano), poi rimanda al corso attivo.
  - `course-app.js/.css`: l'interfaccia dentro ogni corso, con 5 schede (Oggi, Corso, Esame, Cultura, Strumenti)
    e la pagina lezione. Niente lucchetti né stelle: le lezioni sono consigliate, mai bloccate. Il build la inserisce
    nella stessa closure del motore del corso, così riusa tappe, quiz e audio.
  - `plan.js`: catalogo, progressi e piano onesto, condivisi da ingresso e corsi.
  - `courses.json`: metadati dei corsi (esami, ore tipiche, livelli di partenza). Le unità vengono da `courses/<id>/src/course.json`.
  - `i18n.js`: testi dell'interfaccia (`it`, `zh`). L'interfaccia parla sempre la lingua di chi studia.
- `courses/<id>/`: sorgenti di ogni corso (contenuti, motore, `build.py`).
  - `courses/ja-it/src/exam/*.json`: simulazioni JLPT (formato reale: sezioni, もんだい, istruzioni del libretto).
    L'audio d'ascolto è in `docs/c/ja-it/audio/exam/<id>-<もんだい>-<n>.mp3` (voci Kokoro: F, M, narratore; ogni frase
    verificata con il riconoscimento vocale). Punteggio stimato: 120 × giuste/totale (lingua+lettura), 60 × (ascolto).
  - `courses/zh-it/`: cinese per italiani. Il cinese nei dati è scritto a parole con il pinyin tra parentesi quadre,
    una sillaba per carattere separata da trattini: `我[wǒ] 是[shì] 意大利人[Yì-dà-lì-rén] 。` (`src/js/zh.js` ne ricava rubino
    colorato per tono, pinyin e controllo delle risposte). L'audio (`docs/c/zh-it/audio/`) è generato dal pinyin del corso,
    non da una conversione automatica dei caratteri, con il cambio di tono 3-3 applicato; ogni frase è verificata con il
    riconoscimento vocale (SenseVoice), le sillabe isolate con la curva d'intonazione.
- `docs/`: sito generato (GitHub Pages, cartella `/docs`). L'audio dei corsi vive direttamente in `docs/c/<id>/audio/`.

## Comandi
- `python3 build.py` — costruisce tutto in `docs/` (`python3 build.py ja-it` solo un corso, `python3 build.py none` solo la shell).
- Anteprima: `cd docs && python3 -m http.server 8765`.

## Regole
- Ogni parola cliccabile deve avere un significato (tocco e passaggio del mouse). Verifica: apri un corso con `?audit=1`
  e chiama `MPAUDIT()` in console (deve restituire `miss: []`). Significati aggiunti: `courses/<id>/src/js/dict2.js`.
- La pagina lezione mostra sempre: introduzione, "alla fine saprai", tappe, regole leggibili sul posto, parole.
- Il piano è onesto: ore tipiche di studio per livello/esame (ripasso incluso), mai solo il tempo delle lezioni.
- Progressi: li possiede la pagina del corso (`<storageKey>-path` in localStorage); la shell li legge e scrive solo `skip` e `goal`.
- Storage sempre dietro try/catch. Animazioni rispettano `prefers-reduced-motion`. Target di tocco ≥ 44 px. Tema chiaro e scuro.
- Colori e misure dai token in `shell/app.css` (`:root`). Stile "Vivace": colori pieni, forme morbide, Bricolage Grotesque.
- Ogni modifica visiva: screenshot 390×844, chiaro e scuro, interfaccia italiana e cinese.
- Testi e documenti in italiano; codice, commenti e commit in inglese.
