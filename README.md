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
4. Dentro il corso, cinque schede:
   - **Oggi**: il prossimo passo, il ripasso delle parole, la curiosità del giorno, la settimana, l'esame.
   - **Corso**: tutte le lezioni aperte, con tempo stimato, stato e "Sei qui". Ogni lezione ha sezioni sempre uguali
     (dialogo, parole, grammatica, suoni e scrittura, cultura, verifica). Niente lucchetti: se vai avanti, l'app consiglia, non blocca.
   - **Esame**: conto alla rovescia, piano con le date e, per il giapponese, la **simulazione JLPT N5** nel formato reale:
     tre sezioni a tempo (20 + 40 + 30 minuti), istruzioni come nel libretto, niente furigana, ascolto una sola volta,
     punteggio stimato su 180 con i minimi per sezione, ripasso di ogni domanda con spiegazione e trascrizione.
     Allenamento anche su una sola sezione; la preparazione per sezione si aggiorna con i risultati.
   - **Cultura**: tutte le schede illustrate, Italia a confronto con il paese della lingua, con la curiosità del giorno.
   - **Strumenti**: flashcard, coniugatore, kana, frasario, vocabolario.

## Sviluppo
```
python3 build.py                 # tutto
python3 build.py none            # solo l'app (shell)
cd docs && python3 -m http.server 8765
```
Pubblicazione: GitHub Pages dal branch `main`, cartella `/docs`.

Vedi `PRINCIPI.md` per i capisaldi del prodotto e `CLAUDE.md` per le regole di lavoro.
