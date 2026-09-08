# Ottimizzazione Speed Index Mobile — Opzione A

**Data:** 2026-09-08  
**Stato:** ✅ Completato

## Problema

Speed Index mobile a 3,6s (arancione, +9 punti) su PageSpeed Insights, mentre tutte le altre metriche (FCP, LCP, TBT, CLS) erano verdi.

## Cause Identificate

1. **TopBar con skeleton gate** — renderizzava un `<div>` vuoto fino all'idratazione JS
2. **TypingText con delay 2s** — ritardava la visibilità del testo animato
3. **Background con 3 layer** — sub-grid e radial gradient pesanti su mobile

## Modifiche Effettuate

### TopBar.tsx
- Rimosso il gate `!mounted` → la TopBar renderizza sempre il contenuto completo da SSR
- Solo l'icona tema usa `mounted` con un placeholder `<span>` invisibile

### TypingText.tsx
- Delay iniziale ridotto da 2000ms a 500ms

### Background.tsx
- Sub-grid 10px: aggiunto `hidden md:block` (nascosto su mobile)
- Radial gradient: aggiunto `hidden md:block` (nascosto su mobile)
- Su desktop tutto resta invariato

## Verifica
- Build: ✅ compilata con successo (5,9s)
- TypeScript: ✅ nessun errore
- Pagine statiche: ✅ 17/17 generate
