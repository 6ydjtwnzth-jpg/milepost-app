# Account e salvataggio dei progressi: come attivarli

L'app è già pronta (`shell/sync.js`). Manca solo un progetto Supabase tuo: finché `sync-config.js` è vuoto,
l'app non mostra gli account e funziona come prima, con i progressi salvati solo sul dispositivo.

Tempo: circa 20 minuti. Costo: il piano gratuito di Supabase basta per partire.

## 1. Crea il progetto
1. Vai su supabase.com, crea un account e poi **New project**.
2. **Region**: scegli un server in Europa (per esempio *Frankfurt*): i dati restano nell'Unione europea.
3. Annota la password del database in un posto sicuro (non serve all'app, non va scritta da nessuna parte nel codice).

## 2. Crea la tabella dei progressi
1. Nel progetto apri **SQL Editor → New query**.
2. Incolla tutto il contenuto di `supabase/schema.sql` e premi **Run**.

Crea la tabella `progress` con le regole che permettono a ognuno di leggere e scrivere **solo i propri dati**,
e la funzione per eliminare il proprio account dall'app.

## 3. Accesso con codice via email
1. **Authentication → Sign In / Providers → Email**: deve essere attivo.
2. **Authentication → Emails → Templates**: nei modelli **Magic Link** e **Confirm signup** il messaggio deve
   contenere il codice. Sostituisci il testo con, per esempio:

   > Il tuo codice per Milepost è **{{ .Token }}**. Scade tra un'ora. Se non l'hai chiesto tu, ignora questa email.

   (In cinese, per chi studia italiano: 你的 Milepost 验证码是 **{{ .Token }}**，一小时内有效。)
3. **Authentication → URL Configuration → Site URL**: `https://6ydjtwnzth-jpg.github.io/milepost-app/`

## 4. Email vere (necessario prima di aprire agli utenti)
Il servizio email incluso in Supabase serve solo per le prove: invia pochissimi messaggi l'ora e solo agli
indirizzi del tuo team. Per gli utenti veri collega un servizio email (per esempio Resend, Brevo o Postmark) in
**Authentication → Emails → SMTP Settings**, con un mittente del tuo dominio.

## 5. Collega l'app
In **Project Settings → API** (o **API Keys**) trovi:
- **Project URL**, per esempio `https://abcdefghijkl.supabase.co`
- la chiave **publishable** (chiamata anche *anon*): è pensata per stare nel codice del sito, i dati sono protetti
  dalle regole del passo 2.

**Mai** usare la chiave *secret* / *service_role*: dà accesso a tutto.

Apri su GitHub i file `shell/sync-config.js` e `docs/sync-config.js` (il primo è la sorgente, il secondo è quello che
usa il sito) e in entrambi sostituisci `window.MP_SYNC_CONFIG = null;` con:

```js
window.MP_SYNC_CONFIG = { url: "https://abcdefghijkl.supabase.co", key: "sb_publishable_..." };
```

Dopo qualche minuto, nelle Impostazioni di ogni corso compare la sezione **Account**, e nella prima schermata
dell'app il link «Hai già un account? Accedi».

## Prima di aprire al pubblico
- Una pagina **privacy** con il nome del titolare del trattamento e un contatto (gli account raccolgono un'email).
- Prova completa: crea l'account su un telefono, entra da un secondo dispositivo e controlla che i progressi arrivino.
