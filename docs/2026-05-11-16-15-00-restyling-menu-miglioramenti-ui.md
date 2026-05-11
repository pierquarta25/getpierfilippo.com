# Progetto: Restyling Menu e Ottimizzazione UI (2026-05-11)

## Obiettivo
Elevare l'estetica del portfolio di Pierfilippo Quartarella, integrando in modo fluido l'identità di Sviluppatore Full Stack e quella di Personal Trainer attraverso un design "Tech Grid" avanzato.

## Stato Attuale
- Background a griglia tecnica implementato.
- Stack: Next.js 15+, Tailwind v4, shadcn/ui.
- Identità duale: Dev + Sport.

## Proposte di Restyling Menu

### Opzione 1: The Lab Side-Drawer
- **Descrizione:** Menu laterale tecnico (destra) con estetica da laboratorio.
- **Caratteristiche:**
  - Utilizzo di `Sheet` (shadcn).
  - Bordo millimetrato (CAD style).
  - Tipografia Geist Mono per numerazioni sezioni (es. 01// HOME).
  - Effetto laser hover sui link.

### Opzione 2: Floating Command Bar
- **Descrizione:** Barra di comando flottante in basso, ispirata a Raycast/Spotlight.
- **Caratteristiche:**
  - Design a "pillola" con backdrop-blur profondo.
  - Scorciatoie da tastiera visibili (es. [H] Home).
  - Transizioni di colore tra Blue (Dev) e Orange (Sport).

### Opzione 3: Structured Grid Overlay
- **Descrizione:** Overlay modulare a tutto schermo integrato nella griglia di sfondo.
- **Caratteristiche:**
  - Layout a matrice.
  - Celle dedicate a link, social e bio rapida.
  - Suddivisione visuale "Logic" vs "Motion".

## Miglioramenti UI/UX Proposti

### Hero Section
- **Dynamic Typing:** Testo che alterna skill di programmazione e termini sportivi.
- **Interactive Grid:** Griglia che reagisce al movimento del mouse con bagliori sulle intersezioni.

### About Section
- **Dual Column Layout:** Confronto semantico tra ottimizzazione del codice e ottimizzazione del corpo.
- **Iconografia Ibrida:** Mix di icone Lucide React (es. `CodeXml` e `Dumbbell`).

### Micro-interazioni
- **Spring Physics:** Animazioni di entrata che richiamano il dinamismo atletico.
- **Compiler Progress:** Barra di scroll ispirata ai terminali.

## Piano di Implementazione
1. Selezione dell'opzione menu da parte dell'utente.
2. Definizione della palette cromatica (Accenti Tailwind v4).
3. Aggiornamento dei componenti `TopBar` e `OverlayMenu`.
4. Refactoring della `HeroSection` per includere le nuove animazioni.

---
*Documento creato da Senior UI Designer - 11 Maggio 2026*
