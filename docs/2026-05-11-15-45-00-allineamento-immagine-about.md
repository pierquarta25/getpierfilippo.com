# Project Design: Allineamento e Inserimento Immagine Sezione About

## Obiettivo
Centrare verticalmente l'immagine (portrait) rispetto al blocco di testo nella sezione "About" e sostituire il placeholder con la foto reale di Pierfilippo Quartarella.

## Modifiche
- Modifica del container grid in `src/components/sharlee/AboutSection.tsx` (da `items-start` a `items-center`).
- Sostituzione del placeholder con il componente `next/image`.
- Utilizzo dell'immagine `public/media/pierfilippo-portrait.jpg` (rinominata da `IMG_3020 (1).jpg`).
- Aggiunta di un leggero effetto zoom al passaggio del mouse (`group-hover:scale-105`) e un'ombra (`shadow-2xl`) per dare profondità.

## File Interessati
- `src/components/sharlee/AboutSection.tsx`
- `public/media/pierfilippo-portrait.jpg`

## Validazione
- Verifica visiva della centratura e del corretto caricamento dell'immagine con aspect ratio 4:5.
