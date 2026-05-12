# Fix UI/UX Pagine Dettaglio Progetto

Problemi riscontrati nelle pagine di dettaglio dei progetti:
1.  **Immagini non visibili:** I percorsi delle immagini non sono corretti per il caricamento in Next.js.
2.  **Spaziatura testo:** Il contenuto markdown e la descrizione appaiono troppo compressi.
3.  **Ridondanza informazioni:** Lo stack tecnologico è ripetuto sia nel corpo del testo che nella sidebar.

## Proposta di Soluzione

### 1. Correzione Immagini
Le immagini sono attualmente posizionate in `src/app/work/[progetto]/media/`. Per essere servite correttamente come asset statici tramite URL, dovrebbero trovarsi nella cartella `public/`.
- **Opzione A:** Spostare le immagini in `public/media/work/[progetto]/`.
- **Opzione B:** Importare le immagini direttamente nel file `page.tsx` (meno scalabile per array di immagini).
- **Opzione C (Preferita):** Spostare le immagini in `public/work/[progetto]/media/` per mantenere una struttura coerente con le rotte.

### 2. Miglioramento Spaziatura
- Aumentare il `line-height` e il `margin-bottom` degli elementi `prose`.
- Aggiungere `gap` maggiore tra le sezioni del layout.
- Migliorare il padding della card dei dettagli.

### 3. Rimozione Ridondanze
- Eliminare la sezione "Tecnologie Utilizzate" (o "Stack tecnologico") dai file markdown dei progetti, poiché queste informazioni sono già presenti nella sidebar in modo più strutturato tramite i `Badge`.

## Piano d'Azione
1. Spostare le cartelle `media` da `src/app/work/[progetto]/` a `public/work/[progetto]/`.
2. Aggiornare i percorsi degli array `projectImages` in tutti i file `page.tsx` dei progetti.
3. Rimuovere le sezioni ridondanti dai contenuti markdown.
4. Aggiornare `ProjectLayout.tsx` per migliorare la leggibilità e la spaziatura.

## Opzioni richieste (Triple Option Mandate)

| Caratteristica | Opzione 1 (Minimalista) | Opzione 2 (Bilanciata - Proposta) | Opzione 3 (Espansiva) |
| :--- | :--- | :--- | :--- |
| **Immagini** | Solo fix dei percorsi attuali. | Spostamento in `public/` e ottimizzazione layout carousel. | Aggiunta di Lightbox/Zoom al click sulle immagini. |
| **Spaziatura** | Aumento margini standard. | Refactor `prose` con classi Tailwind v4 specifiche e `leading-relaxed`. | Introduzione di sezioni alternate con sfondi diversi. |
| **Contenuto** | Semplice rimozione duplicati. | Rimozione duplicati e arricchimento sidebar con link al repo/sito. | Refactor completo dei markdown in componenti React dedicati. |
