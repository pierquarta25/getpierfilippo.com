# Proposta Restyling Logo - 11 Maggio 2026

## Obiettivo
Sperimentare diverse varianti del logo con lettere bianche e fondo nero per ottimizzare l'identità visiva del sito.

## Stato Attuale
Il logo attuale è composto da un cerchio nero (`rgb(0, 0, 0)`) con all'interno le lettere "P" e "Q" in bianco (`#ffffff`).

## Opzioni Proposte

### Opzione 1: Minimalismo Puro (Senza Cerchio)
- **Descrizione:** Rimozione del cerchio di sfondo. Rimangono solo le lettere "P" e "Q" bianche.
- **Vantaggi:** Massima pulizia, si integra perfettamente con qualsiasi sfondo scuro della pagina.
- **Impatto:** Molto moderno e leggero.

### Opzione 2: Icona Moderna (Quadrato Arrotondato)
- **Descrizione:** Sostituzione del cerchio con un quadrato ad angoli arrotondati (tipo icona iOS/Android).
- **Vantaggi:** Richiama lo stile delle applicazioni moderne e offre una base più solida visivamente.
- **Impatto:** Look professionale e strutturato.

### Opzione 3: Contrasto Accentuato (Cerchio con Bordo)
- **Descrizione:** Mantenimento del cerchio nero ma con l'aggiunta di un sottile bordo bianco (1-2px) per separarlo meglio dagli sfondi scuri non perfettamente neri.
- **Vantaggi:** Migliore leggibilità su diverse tonalità di grigio scuro/nero.
- **Impatto:** Definizione superiore dei bordi.

## Piano di Esecuzione
1. Presentazione delle opzioni all'utente. (Completato)
2. Ricezione del feedback e scelta dell'opzione preferita. (Scelta: Opzione 1)
3. Aggiornamento del file `public/media/logo.svg` con la versione scelta. (Completato)
4. Verifica della resa visiva nella TopBar e nel Footer. (In corso)

## Opzioni di Ridimensionamento (11 Maggio 2026)
Per migliorare la leggibilità e la presenza del brand, sono state valutate le seguenti opzioni di grandezza:

### Opzione A: Incremento Sottile (w-9 / 36px)
- **Descrizione:** Un aumento leggero rispetto agli attuali 32px.
- **Vantaggi:** Mantiene un profilo molto discreto ed elegante, in linea con l'altezza della TopBar (h-16).

### Opzione B: Presenza Marcata (w-10 / 40px)
- **Descrizione:** Un logo più visibile che riempie meglio lo spazio della cella di navigazione.
- **Vantaggi:** Equilibrio ideale tra visibilità e ingombro visivo. È la scelta consigliata per un look professionale.

### Opzione C: Impatto Visivo (w-12 / 48px)
- **Descrizione:** Il logo diventa l'elemento dominante della barra.
- **Vantaggi:** Massima riconoscibilità, adatto se si vuole che l'identità visiva sia molto forte fin dal primo sguardo.

## Piano di Esecuzione (Dimensioni)
1. Proposta delle 3 opzioni di grandezza. (Completato)
2. Applicazione della classe Tailwind scelta in `TopBar.tsx`. (Scelta: Opzione B - w-10)
3. Verifica dell'allineamento verticale e del padding. (Completato)

## Aggiornamento Finale (Dimensioni)
In data 11 Maggio 2026, il logo è stato ingrandito a **40px (`w-10 h-10`)**. Questa dimensione offre una presenza più marcata all'interno della barra di navigazione, bilanciando perfettamente visibilità e pulizia del design.

