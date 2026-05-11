# Documento di Design: Ottimizzazione Mobile First

**Data:** 11 Maggio 2026
**Stato:** In attesa di approvazione

## Obiettivo
Trasformare il portfolio in un'esperienza "Mobile First", risolvendo le attuali criticità di responsività (menu affollato, spaziature eccessive su schermi piccoli, tipografia non ottimizzata).

## Analisi Criticità Attuali
1. **TopBar:** La navigazione è una griglia orizzontale che causa overflow su mobile o appare troppo compressa. Manca un menu a comparsa (burger menu).
2. **Tipografia:** Titoli come `text-8xl` o `text-9xl` possono risultare troppo grandi su schermi stretti (es. iPhone SE), portando a troncamenti o layout sbilanciati.
3. **Spaziature:** Il padding verticale `py-32` e il padding della pagina `pt-32` sottraggono troppo spazio utile su mobile.
4. **Layout:** Alcune sezioni non sfruttano appieno la verticalità del mobile, mantenendo distanze troppo ampie tra gli elementi.

---

## Proposte di Implementazione

### Opzione 1: Minimalist Adaptive (Surgical Fix)
Punta a correggere gli elementi critici mantenendo l'attuale estetica CAD/Minimalista.
- **Navigazione:** Introduzione di un burger menu per schermi `< md`. La `TopBar` mostrerà solo Logo, Lingua e Icona Menu.
- **Tipografia:** Uso sistematico di `clamp()` o utility Tailwind personalizzate per scalare i titoli in modo fluido tra mobile e desktop.
- **Spaziature:** Riduzione proporzionale dei padding (es. `py-16` su mobile, `py-32` su desktop).
- **Vantaggio:** Implementazione rapida, basso rischio di regressioni estetiche.

### Opzione 2: Mobile-First Interactive (App-Like Experience)
Rivede il modo in cui l'utente interagisce con il sito da smartphone.
- **Navigazione:** Menu "Floating" o Drawer dal basso, più facile da raggiungere con il pollice.
- **Interazione:** Ottimizzazione di tutti i bottoni e link per una "tap target area" minima di 44px. Animazioni di ingresso specifiche per mobile.
- **Contenuti:** Riordino di alcune sezioni (es. About) per dare precedenza all'immagine o a punti chiave su mobile, espandendosi su desktop.
- **Vantaggio:** User experience superiore su dispositivi touch, look moderno e dinamico.

### Opzione 3: Deep CAD Architecture (Responsive Grid)
Utilizza la metafora del disegno tecnico (CAD) per guidare la responsività.
- **Layout:** La griglia di sfondo e le linee di costruzione si adattano dinamicamente. Su mobile, il sito sembra uno "schema tecnico" compatto.
- **Navigazione:** Integrazione dell' `OverlayMenu` già esistente (ma non usato) con animazioni "blueprint".
- **Visuals:** Uso di `text-[8vw]` per i titoli in modo che occupino sempre la stessa proporzione di schermo, garantendo un impatto visivo costante.
- **Vantaggio:** Massima coerenza stilistica con il tema del progetto, impatto visivo "Wow" su ogni dispositivo.

---

## Piano d'Azione (Esempio per Opzione 1/3)
1. Modifica di `TopBar.tsx` per gestire lo stato mobile/desktop.
2. Integrazione di `OverlayMenu.tsx` nella logica di navigazione.
3. Refactoring dei componenti `HeroSection`, `WorkSection`, `AboutSection` e `ContactSection` per usare classi responsive (`py-16 md:py-32`, ecc.).
4. Test su vari breakpoint (Mobile, Tablet, Desktop).

**Nota:** Una volta completata l'implementazione, questo documento verrà aggiornato con i dettagli del lavoro svolto.
