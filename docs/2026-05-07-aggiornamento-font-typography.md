# Design Document: Aggiornamento Font Geist e Tipografia shadcn/ui

Data: 2026-05-07
Stato: Completato

## Obiettivo
Aggiornare il font di tutto il sito utilizzando **Geist** (Sans e Mono) e implementare gli stili tipografici standard di **shadcn/ui** per garantire coerenza visiva, supporto completo a pesi/stili e una gerarchia testuale professionale.

## Modifiche Effettuate

### 1. Font Configuration (`src/app/layout.tsx`)
- Rinominate le variabili dei font Geist in `--font-sans` e `--font-mono` per una mappatura più diretta e pulita con Tailwind v4.
- I font sono caricati correttamente tramite `next/font/google` con subset `latin`.

### 2. Global Styles (`src/app/globals.css`)
- **Variabili Tema:** Mappate le variabili CSS `--font-sans` e `--font-mono` all'interno del blocco `@theme inline`.
- **Base Typography:** Aggiunti stili globali nel layer `@layer base` per i seguenti tag HTML:
    - `h1`: Titoli principali XL.
    - `h2`: Titoli di sezione con bordo inferiore.
    - `h3`, `h4`: Titoli secondari e sottotitoli.
    - `p`: Testo corpo con interlinea ottimizzata e margine superiore (eccetto il primo figlio).
    - `blockquote`: Citazioni con bordo laterale ed enfasi corsiva.
    - `ul`: Liste puntate con indentazione e spaziatura tra gli elementi.
    - `code`: Frammenti di codice con font mono, sfondo muto e bordi arrotondati.

### 3. Correzioni Extra (Linting)
- Durante la fase di validazione, sono stati corretti alcuni errori di linting preesistenti relativi a caratteri speciali non escapati (`'`) nei file:
    - `src/components/sharlee/AboutSection.tsx`
    - `src/components/sharlee/HeroSection.tsx`

## Risultato Finale
Il sito ora beneficia di una tipografia coerente e professionale gestita centralmente. Gli elementi testuali seguono automaticamente il design system di shadcn/ui, riducendo la necessità di classi Tailwind ripetitive e migliorando la leggibilità.

## Verifica
- `npm run lint`: Superato con successo.
- `npm run build`: Build di produzione completato correttamente.

