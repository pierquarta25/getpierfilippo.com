# Ottimizzazione SEO On-Page

## Descrizione del Task
L'obiettivo è migliorare il posizionamento e i clic su Google Search Console aggiornando i metadati SEO del sito. L'utente ha fornito i seguenti tag desiderati:
"Junior Full Stack Developer | React.js, Next.js, TypeScript, PHP e Laravel | Sviluppo applicazioni web moderne e automazioni AI"

## Tripla Opzione Proposta

### Opzione 1: Aggiornamento Metadati Base
- Sostituzione del `title` e `description` attuali nel file `src/app/layout.tsx` con i tag forniti.
- **Pro:** Veloce, immediato, copre le basi della SEO.
- **Contro:** Nessuna ottimizzazione per i social media o formati strutturati per i motori di ricerca.

### Opzione 2: Metadati Base + Open Graph (Consigliata per Social)
- Oltre a titolo e descrizione base, aggiungiamo i tag **Open Graph (og:)** e **Twitter Cards**.
- **Pro:** Quando condividerai il link del tuo portfolio su LinkedIn o WhatsApp, appariranno il titolo corretto, la descrizione estesa e un'anteprima elegante.
- **Contro:** Non fornisce dati semantici espliciti (JSON-LD) a Google.

### Opzione 3: Pacchetto SEO Completo (Base + Open Graph + Dati Strutturati JSON-LD)
- Include tutto ciò che c'è nell'Opzione 2.
- Aggiunge uno script **JSON-LD (Dati Strutturati)** all'interno della pagina. È un codice invisibile all'utente ma letto da Google che dichiara formalmente che sei una "Person" con qualifica "Junior Full Stack Developer" e competenze specifiche (React, Next.js, ecc.).
- **Pro:** È il massimo per la SEO. Google Search Console adora i dati strutturati perché gli permettono di categorizzarti in modo preciso senza dover interpretare il testo.
- **Contro:** Richiede qualche riga di codice in più nel layout.

## Implementazione Eseguita
L'utente ha scelto l'**Opzione 3 (Pacchetto SEO Definitivo)** ed ha richiesto di seguire le linee guida dell'agente `seo-specialist`.
I seguenti interventi sono stati completati:
1. Aggiornato l'`html lang="it"` per migliorare l'indicizzazione locale.
2. Inserito il `title` esatto richiesto dall'utente e una `description` ottimizzata in `layout.tsx`.
3. Inserito il blocco `openGraph` per le condivisioni social.
4. Inserito lo script JSON-LD strutturato (`@type: Person`) per far comprendere a Google le competenze tecniche esatte.
