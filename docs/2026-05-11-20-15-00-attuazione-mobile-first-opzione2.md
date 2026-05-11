# Documento di Design: Attuazione Mobile-First (Opzione 2)

**Data:** 11 Maggio 2026
**Stato:** Completato (Opzione 2 per Mobile)

## Obiettivo
Implementare l'**Opzione 2: Mobile-First Interactive** esclusivamente per i dispositivi mobili, mantenendo l'attuale layout CAD/Minimalista per tablet e desktop.

## Modifiche Implementate

### 1. Navigazione Mobile (Bottom/Floating)
- **TopBar:** Su mobile (< md), la navigazione orizzontale viene nascosta. È stato aggiunto un pulsante "Menu" (burger) che apre il nuovo drawer.
- **Drawer (OverlayMenu):** Rifattorizzato come un "Drawer" dal basso per mobile, con backdrop sfocato e animazioni di scorrimento. Su desktop mantiene un'estetica a pieno schermo.

### 2. Riordino Sezioni (About)
- **AboutSection:** Su mobile, l'immagine di Pierfilippo viene ora visualizzata *prima* del testo bio per un impatto visivo immediato. Su desktop rimane l'attuale griglia a due colonne (testo a sinistra, immagine a destra).

### 3. Ottimizzazione Interazioni (Tap Targets) & Spaziature
- Aumento della "tap target area" per tutti i pulsanti e link su mobile.
- Riduzione dei padding verticali (`py-32` -> `py-16`) in tutte le sezioni principali (`About`, `Work`, `Contact`) solo per schermi piccoli per massimizzare lo spazio utile.

### 4. Tipografia Responsive
- Rafforzato l'uso di `clamp()` e classi responsive per garantire che i titoli non causino overflow su schermi piccoli.

---

## Lavoro Svolto
- **TopBar.tsx:** Implementata logica condizionale per nascondere la nav grid su mobile e mostrare il toggle "MENU".
- **OverlayMenu.tsx:** Rifattorizzato come drawer dal basso per mobile con backdrop sfocato, animazioni fluide e pulsante di chiusura ottimizzato per il touch.
- **AboutSection.tsx:** Invertito l'ordine degli elementi (immagine sopra il testo) su mobile e ridotti i padding verticali.
- **WorkSection.tsx & ContactSection.tsx:** Ridotti i padding verticali (`py-16`) per dispositivi mobili.
- **LanguageContext.tsx:** Aggiunta chiave di traduzione `nav.menu`.
- **Validazione:** Verificato il comportamento responsive tra i breakpoint `sm`, `md` e `lg`, confermando che l'esperienza desktop/tablet rimane invariata.
