# Progetto: Sistemazione Sezione Progetti con Casi Reali

**Data:** 2026-06-17
**Stato:** Completato
**Autore:** Antigravity

## Obiettivo
Aggiornare la sezione "Lavori" del portfolio inserendo i progetti reali estratti dal Curriculum Vitae di Pierfilippo Quartarella:
1. **getpierfilippo.com** (Portfolio)
2. **Iveco Scraper** (CLI Web Scraping)
3. **MacNil Contact Manager** (Web App Mobile-First)
4. **GtFleet365** (SPA Configurazione Flotte - precedentemente indicato come gt-fleet265)
5. **LeadGen** (Business Intelligence)

Rimuovere il progetto dimostrativo non reale `Presto.it`.

---

## Implementazione Effettuata

È stata implementata con successo l'**Opzione A: Riorganizzazione Completa e Pulizia Strutturale**.

### Dettaglio azioni eseguite:
1. Rimosso definitivamente il progetto obsoleto `presto-it` (sorgenti in `/src/app/work/presto-it` e asset in `/public/work/presto-it`).
2. Ridenominato il progetto `gt-fleet265` in `gt-fleet365` (sia la directory sorgente che la cartella degli asset statici) e modificati i riferimenti a livello di codice ed immagini per puntare a `gt-fleet365`.
3. Creati i percorsi per i nuovi progetti reali `/work/iveco-scraper` e `/work/macnil-contact-manager`.
4. Inseriti i contenuti completi in lingua italiana e inglese per tutte le pagine dei progetti basandosi sul CV.
5. In linea con la scelta dell'utente, non sono state generate immagini per i nuovi progetti (l'array di immagini è vuoto ed il componente lo gestisce in modo sicuro senza mostrare placeholder).
6. Verificato il corretto funzionamento con `npm run lint` e `npm run build` (tutte le rotte statiche compilano correttamente).

---

## Triple Option Mandate (Tre Opzioni per l'Implementazione)

Per soddisfare le richieste del Triple Option Mandate, abbiamo offerto tre opzioni:

### Opzione A: Riorganizzazione Completa e Pulizia Strutturale (Scelta consigliata)
* **Descrizione:**
  - Eliminiamo definitivamente il progetto `presto-it` (codice e media).
  - Rinominiamo la cartella fisica `gt-fleet265` e i suoi riferimenti in `gt-fleet365`.
  - Creiamo i nuovi percorsi fisici `/work/iveco-scraper` e `/work/macnil-contact-manager`.
  - Generiamo immagini mockup ad hoc per i nuovi progetti con AI (`generate_image`).
* **Pro:** Struttura del codice pulitissima, routing coerente con i nomi dei progetti, zero codice morto.
* **Contro:** Richiede più tempo per la build e rinomina fisica delle cartelle.

### Opzione B: Riorganizzazione Logica con Routing Conservativo
* **Descrizione:**
  - Non modifichiamo i nomi delle cartelle fisiche (quindi `gt-fleet265` rimane la cartella fisica e `/work/gt-fleet265` rimane l'URL).
  - Riadattiamo `/work/presto-it` per visualizzare in realtà `Iveco Scraper` o `MacNil Contact Manager`.
  - Aggiorniamo solo i testi e i titoli visibili al visitatore.
* **Pro:** Evita modifiche strutturali al routing di Next.js e riduce il rischio di link rotti se la pagina fosse già indicizzata.
* **Contro:** Il codice sorgente e gli URL risulteranno incoerenti (es. la pagina di Iveco Scraper avrà l'URL `/work/presto-it`).

### Opzione C: Architettura Dinamica basata su Configurazione Centralizzata
* **Descrizione:**
  - Creiamo una rotta dinamica `/work/[slug]/page.tsx` che legge i dettagli dei progetti da un file JSON centralizzato (`src/lib/projects-data.json`).
  - Definiamo tutti i 5 progetti in questo file JSON in italiano e inglese.
  - Eliminiamo le singole cartelle dei progetti sostituendole con una singola rotta dinamica.
* **Pro:** Massima flessibilità futura. Aggiungere un nuovo progetto richiederà solo di modificare il file JSON e caricare le immagini, senza dover creare nuove pagine o cartelle.
* **Contro:** Richiede la riscrittura del meccanismo di routing per i dettagli dei progetti (passando da rotte statiche a dinamiche).

---

## Modifiche Proposte (Per Opzione A)

### File da modificare:
* [WorkSection.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/WorkSection.tsx): Aggiornare la lista dei progetti reali e le rispettive chiavi i18n.
* [LanguageContext.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/lib/LanguageContext.tsx): Aggiungere le traduzioni per le categorie e descrizioni dei nuovi progetti.

### File da rinominare/spostare:
* Da `/src/app/work/gt-fleet265/` a `/src/app/work/gt-fleet365/` (e aggiornamento interno a `page.tsx`).
* Da `/public/work/gt-fleet265/` a `/public/work/gt-fleet365/`.

### Nuove pagine di progetto:
* [NEW] `/src/app/work/iveco-scraper/page.tsx`
* [NEW] `/src/app/work/macnil-contact-manager/page.tsx`

### File da rimuovere:
* [DELETE] `/src/app/work/presto-it/`
* [DELETE] `/public/work/presto-it/`

---

## Piano di Verifica
1. Esecuzione di `npm run lint` e `npm run build` per accertare che la build non fallisca con i nuovi percorsi.
2. Navigazione manuale tra le schede dei progetti per verificare la correttezza dei testi in italiano e inglese.
