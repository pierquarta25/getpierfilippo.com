# Project Design: Footer Verticale Laterale

## Obiettivo
Spostare il footer in una posizione verticale sul lato sinistro dello schermo per migliorare la visibilità e l'integrazione con la nuova navigazione "Floating Command Bar".

## Modifiche
- **Componente `Footer.tsx`:** 
  - Trasformato in un elemento `fixed` ancorato a sinistra (`left-8`).
  - Layout verticale (`flex-col`) che centra i link social sopra una linea decorativa e il testo del copyright ruotato di 90 gradi.
  - Utilizzo di opacità ridotta e `pointer-events-none` per non interferire con il contenuto, con riattivazione al passaggio del mouse.
- **Componente `MainLayout.tsx`:**
  - Il footer rimane integrato nel layout ma agisce come overlay fisso.

## File Interessati
- `src/components/sharlee/Footer.tsx`

## Validazione
- Verifica che il footer sia visibile su desktop e non ostruisca la lettura.
- Verifica del comportamento responsive (nascosto su schermi piccoli per evitare sovrapposizioni).
