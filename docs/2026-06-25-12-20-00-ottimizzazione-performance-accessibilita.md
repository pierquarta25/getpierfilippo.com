# Progetto: Ottimizzazione Performance e Accessibilità per Mobile (PageSpeed)

**Data:** 2026-06-25
**Stato:** Completato
**Autore:** Antigravity

## Implementazione Effettuata

È stata implementata una soluzione combinata per ottimizzare sia le prestazioni che l'accessibilità:
1. **Ottimizzazione del Background**: Nascondiamo il filtro SVG del rumore (noise) su mobile tramite la classe Tailwind `hidden md:block` in [Background.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/Background.tsx) per risparmiare risorse di calcolo su CPU/GPU dei telefoni cellulari.
2. **Accessibilità in TopBar**: Aggiunto l'attributo `aria-label` dinamico al pulsante di switch lingua in [TopBar.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/TopBar.tsx).
3. **Gerarchia di Intestazione**: Sostituito il tag `h2` con `h1` nei titoli principali di [AboutSection.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/AboutSection.tsx), [WorkSection.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/WorkSection.tsx) e [ContactSection.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/ContactSection.tsx) per correggere la gerarchia HTML nelle rispettive pagine.

---

## Obiettivo
Migliorare le prestazioni e l'accessibilità del sito web su dispositivi mobili per raggiungere un punteggio di 100/100 su PageSpeed Insights.

---

## Modifiche Proposte

### 1. Ottimizzazione del Background (Prestazioni)
Nel file [Background.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/Background.tsx), l'elemento che genera il filtro SVG `feTurbulence` (rumore/grana) richiede calcoli complessi e rallenta le prestazioni di pittura (paint times) e interattività su mobile.
* **Azione**: Nasconderemo questo elemento su dispositivi mobili utilizzando la classe Tailwind `hidden md:block`. In questo modo la CPU e la GPU dei dispositivi mobili non dovranno calcolare il filtro durante lo scroll, riducendo drasticamente il Total Blocking Time (TBT).

### 2. Miglioramento dell'Accessibilità (Accessibilità a 100/100)
Aggiungeremo e correggeremo i tag ed etichette accessibili per raggiungere la piena conformità dei parametri di accessibilità:
* **TopBar.tsx**:
  - Aggiungere `aria-label={language === 'EN' ? 'Passa alla lingua italiana' : 'Switch to English'}` al pulsante di selezione della lingua.
* **Sezioni del Portfolio (About, Work, Contact)**:
  - Cambiare il titolo principale da `h2` a `h1` in [AboutSection.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/AboutSection.tsx), [WorkSection.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/WorkSection.tsx) e [ContactSection.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/ContactSection.tsx). Ciascuna di queste pagine viene visualizzata come rotta separata (es. `/about`, `/work`, `/contact`), pertanto il titolo principale deve essere un tag `h1` anziché `h2`.

---

## Modifiche Proposte per File

#### [MODIFY] [Background.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/Background.tsx)
Aggiunta di `hidden md:block` all'overlay del rumore/noise SVG.

#### [MODIFY] [TopBar.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/TopBar.tsx)
Aggiunta dell'attributo `aria-label` al bottone di switch della lingua.

#### [MODIFY] [AboutSection.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/AboutSection.tsx)
Sostituzione di `h2` con `h1` alla riga 53 per il titolo "CHI SONO".

#### [MODIFY] [WorkSection.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/WorkSection.tsx)
Sostituzione di `h2` con `h1` alla riga 22 per il titolo "LAVORI".

#### [MODIFY] [ContactSection.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/ContactSection.tsx)
Sostituzione di `h2` con `h1` alla riga 13 per il titolo "CONTATTI".

---

## Piano di Verifica
1. Esecuzione di `npm run lint` per validare la sintassi del codice.
2. Esecuzione di `npm run build` per verificare che non ci siano errori di compilazione TypeScript o Next.js.
3. Test locali sul corretto rendering del background sui dispositivi desktop ed esclusione su mobile.
