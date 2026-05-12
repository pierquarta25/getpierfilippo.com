# Project Design: Restyling Carousel e Spaziatura Testi Progetti

L'utente ha espresso insoddisfazione riguardo a due elementi chiave dell'interfaccia nelle pagine di dettaglio dei progetti:
1.  **Carosello Verticale:** Identificato come "brutto", probabilmente riferendosi alla galleria verticale utilizzata su dispositivi mobili in `ProjectLayout.tsx`.
2.  **Spaziatura Testi:** I contenuti testuali dei progetti (Markdown) risultano troppo "attaccati" e difficili da leggere.

L'obiettivo di questo intervento è migliorare l'esperienza visiva e la leggibilità di queste sezioni.

## Analisi dello Stato Attuale
- **Carousel:** In `ProjectLayout.tsx`, su mobile viene renderizzata una `div` con `flex-col gap-4` che elenca tutte le immagini. Su desktop viene usato un `Carousel` orizzontale.
- **Testi:** Il contenuto Markdown viene renderizzato all'interno di un contenitore con classi `prose dark:prose-invert`. Nonostante le classi Tailwind Typography, l'utente percepisce una mancanza di respiro tra gli elementi (titoli, paragrafi, liste).

## Proposte di Miglioramento (Triple Option Mandate)

### Opzione 1: "Minimalist Breathing Space" (Focus sulla Leggibilità)
- **Carousel Mobile:** Sostituzione della galleria verticale con un carosello orizzontale (uguale al desktop) con indicatori di paginazione (dots) per mantenere il layout compatto.
- **Spaziatura:** Aumento sistematico dei margini verticali nelle classi `prose` (es. `prose-p:mt-8`, `prose-headings:mt-12`). Aggiunta di un padding maggiore tra la sezione media e la sezione testo.
- **Vantaggi:** Massima pulizia, coerenza tra mobile e desktop.

### Opzione 2: "Modern Editorial Layout" (Focus sul Design)
- **Carousel Mobile:** Trasformazione della galleria verticale in una "Masonry-like" grid o una galleria con immagini a larghezza sfalsata per un look più editoriale e meno "stack statico".
- **Spaziatura:** Utilizzo di una griglia di layout più ariosa, separando nettamente la panoramica (Overview) dai dettagli tecnici con divisori sottili o spazi bianchi generosi (`space-y-32`).
- **Vantaggi:** Estetica ricercata, valorizza le immagini e il testo come in una rivista digitale.

### Opzione 3: "Interactive Content First" (Focus sull'Interazione)
- **Carousel Mobile:** Mantenimento dello scroll verticale ma con un effetto di "snap-to-image" e transizioni più fluide. Aggiunta di una didascalia opzionale o un contatore flottante.
- **Spaziatura:** Implementazione di un sistema di "Content Sections" più marcate, dove ogni blocco Markdown ha il proprio contenitore con padding interno generoso e sfondo leggermente differenziato per staccare visivamente i paragrafi.
- **Vantaggi:** Migliore navigazione mobile, chiara distinzione tra le diverse parti del testo.

## Scelta Consigliata
Si consiglia l'**Opzione 1** per la sua semplicità e coerenza, integrando alcuni elementi di spaziatura dell'**Opzione 2** per garantire il "respiro" richiesto dall'utente.

## Prossimi Passi
1. Attendere la conferma dell'utente su una delle opzioni.
2. Implementazione delle modifiche in `ProjectLayout.tsx`.
3. Validazione visiva su diverse risoluzioni.
