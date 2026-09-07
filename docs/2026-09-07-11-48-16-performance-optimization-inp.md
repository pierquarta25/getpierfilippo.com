# Ottimizzazione Performance INP — Input Delay 205ms

## Contesto

L'analisi Web Vitals ha rivelato un **Input Delay di 205,7ms** sul pulsante di download CV in `AboutSection.tsx`. Il problema principale è che il Main Thread del browser è occupato da lavoro JavaScript pesante durante l'interazione dell'utente.

L'analisi approfondita del codebase ha rivelato diverse cause concorrenti che contribuiscono a saturare il thread principale.

## Cause Identificate

### Causa Principale — Main Thread sovraccarico
| Problema | Impatto | File |
|---|---|---|
| `react-markdown` caricata client-side in 6 componenti | ~30-50KB gzipped di JS inutile per contenuti statici | `AboutSection.tsx`, 5 pagine `/work/*` |
| `TypingText.tsx` esegue `setTimeout` continui (50ms/100ms) | Main Thread sempre occupato, anche a pagina inattiva | `TypingText.tsx` |
| `MainLayout.tsx` è `'use client'` | Forza l'intera UI ad essere client-rendered, aumentando idratazione | `MainLayout.tsx` |
| Nessun dynamic import per componenti pesanti | `react-markdown`, Embla carousel, `OverlayMenu` tutti nel bundle iniziale | Vari |

### Causa Secondaria — CSS & Rendering
| Problema | Impatto | File |
|---|---|---|
| 16 occorrenze di `transition-all` | Il browser interpola tutte le proprietà CSS ad ogni hover/interazione | Vari (vedi lista sotto) |
| SVG `feTurbulence` con `numOctaves=3` a schermo intero | Rasterizzazione GPU continua durante scroll/resize su desktop | `globals.css`, `Background.tsx` |

### Causa Terziaria — Asset & Preloading
| Problema | Impatto | File |
|---|---|---|
| Nessun prefetch del PDF del CV | Download non inizia finché l'utente non clicca | `AboutSection.tsx` |
| 4 immagini PNG non compresse (~17MB totali) in `/public/work/` | Rallentano il caricamento delle pagine progetto | `public/work/getpierfilippo-com/media/` |

---

## Proposed Changes

### Componente 1 — Code-Splitting & Dynamic Imports

> [!IMPORTANT]
> Questo è l'intervento con il maggior impatto sull'Input Delay.

#### [MODIFY] [AboutSection.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/AboutSection.tsx)
- Sostituire l'import diretto di `react-markdown` con un `dynamic()` import (`ssr: false`).
- In questo modo `react-markdown` (~30-50KB) viene scaricata solo quando il componente è visibile, senza bloccare il Main Thread durante il render iniziale.

#### [MODIFY] [OverlayMenu.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/OverlayMenu.tsx)
- Trasformare in dynamic import con `ssr: false` dall'interno di `TopBar.tsx`, dato che il menu overlay serve solo al click su "MENU".

#### [MODIFY] [TypingText.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/TypingText.tsx)
- Sostituire la catena di `setTimeout` continui con `requestAnimationFrame` per allineare l'animazione ai frame del browser e ridurre il carico sul Main Thread.
- Aggiungere un check di visibilità (`IntersectionObserver`) per **fermare l'animazione quando il componente non è visibile** (es. l'utente è su `/about`).

---

### Componente 2 — Ottimizzazione CSS & Interazioni

#### [MODIFY] Tutti i file con `transition-all` (16 occorrenze)

Sostituire `transition-all` con transizioni mirate. Mappa delle modifiche:

| File | Riga | Sostituzione |
|---|---|---|
| `AboutSection.tsx` | 43, 97 | `transition-opacity` / `transition-[opacity,transform]` |
| `HeroSection.tsx` | 39, 46 | `transition-opacity` |
| `TopBar.tsx` | 59, 64 | `transition-colors` |
| `OverlayMenu.tsx` | 76 | `transition-[opacity,transform]` |
| `WorkSection.tsx` | 31, 34 | `transition-[opacity,transform]` |
| `button.tsx` | 7 | `transition-[colors,opacity]` |
| `badge.tsx` | 8 | `transition-colors` |
| `chat-widget-dynamic.tsx` | 30 | `transition-[opacity,transform]` |
| `errors/403/page.tsx` | 36 | `transition-[colors,opacity]` |
| `errors/404/page.tsx` | 36 | `transition-[colors,opacity]` |
| `not-found.tsx` | 36 | `transition-[colors,opacity]` |
| `gt-fleet365/page.tsx` | 49 | `transition-[opacity,transform]` |

#### [MODIFY] [AboutSection.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/AboutSection.tsx)
- Aggiungere `touch-action: manipulation` (classe Tailwind `touch-manipulation`) al pulsante di download CV per eliminare il delay di 300ms del tap su mobile.

---

### Componente 3 — Prefetch & Asset Optimization

#### [MODIFY] [AboutSection.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/AboutSection.tsx)
- Aggiungere un tag `<link rel="prefetch" href="/CV_Pierfilippo_Quartarella.pdf" />` tramite il componente Next.js `<Head>` o inserendolo direttamente nel metadata della route `/about`.

---

## Fuori Scope (da affrontare separatamente)

I seguenti problemi sono emersi dall'analisi ma **non rientrano in questo intervento** per mantenere il focus sull'INP:

- Compressione delle 4 immagini PNG (~17MB) in `/public/work/`
- Migrazione di `MainLayout.tsx` da client a server component (refactor architetturale maggiore)
- Rimozione dei tag `<title>`/`<meta>` dal JSX client a favore di `generateMetadata`
- Rimozione della dipendenza inutilizzata `@vercel/speed-insights`
- Fix del mismatch di idratazione lingua (SSR `lang="it"` vs default client `'EN'`)

---

## Verification Plan

### Automated Tests
```bash
npm run build
npm run lint
```
Verifica che il build di produzione non introduca errori e che il bundle size sia ridotto.

### Manual Verification
- Riprodurre la misurazione INP sul pulsante download CV in `AboutSection` e verificare che l'Input Delay scenda sotto i 50ms.
- Verificare visivamente che tutte le transizioni/hover funzionino correttamente dopo la sostituzione di `transition-all`.
- Verificare che `TypingText` si comporti normalmente nella Hero.
- Verificare che il menu overlay si apra correttamente dopo il dynamic import.
