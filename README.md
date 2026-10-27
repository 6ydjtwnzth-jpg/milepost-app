# Milepost

Corsi di lingua seri, spiegati nella lingua di chi studia, con un piano onesto fino all'esame.

Corsi disponibili:
- **Giapponese per italiani** (`ja-it`): da zero all'A2, preparazione JLPT N5 (N4 in completamento).
- **Italiano per cinesi** (`it-zh`): da zero all'A2, preparazione CILS / PLIDA A2.

## Come funziona
1. Scegli la lingua che parli (rilevata dal telefono) e la lingua da imparare.
2. Tre domande: perché studi (esame con data, viaggio, lavoro, passione), da dove parti, quanto tempo hai.
3. Ricevi un piano con le date delle tappe, calcolato sulle ore di studio tipiche per quel livello o esame.
   Se il ritmo non basta per la data dell'esame, l'app lo dice e propone come rimediare.
4. La home mostra il corso, i progressi reali, la settimana e se sei in linea col piano.

## Sviluppo
```
python3 build.py                 # tutto
python3 build.py none            # solo l'app (shell)
cd docs && python3 -m http.server 8765
```
Pubblicazione: GitHub Pages dal branch `main`, cartella `/docs`.

Vedi `PRINCIPI.md` per i capisaldi del prodotto e `CLAUDE.md` per le regole di lavoro.
