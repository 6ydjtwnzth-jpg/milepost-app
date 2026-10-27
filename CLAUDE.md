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
- `docs/`: sito generato (GitHub Pages, cartella `/docs`). L'audio dei corsi vive direttamente in `docs/c/<id>/audio/`.

## Comandi
- `python3 build.py` — costruisce tutto in `docs/` (`python3 build.py ja-it` solo un corso, `python3 build.py none` solo la shell).
- Anteprima: `cd docs && python3 -m http.server 8765`.

## Regole
- Il piano è onesto: ore tipiche di studio per livello/esame (ripasso incluso), mai solo il tempo delle lezioni.
- Progressi: li possiede la pagina del corso (`<storageKey>-path` in localStorage); la shell li legge e scrive solo `skip` e `goal`.
- Storage sempre dietro try/catch. Animazioni rispettano `prefers-reduced-motion`. Target di tocco ≥ 44 px. Tema chiaro e scuro.
- Colori e misure dai token in `shell/app.css` (`:root`). Stile "Vivace": colori pieni, forme morbide, Bricolage Grotesque.
- Ogni modifica visiva: screenshot 390×844, chiaro e scuro, interfaccia italiana e cinese.
- Testi e documenti in italiano; codice, commenti e commit in inglese.
