# Progetto: Risoluzione Avviso di Accessibilità sul Pulsante Menu Mobile (PageSpeed)

**Data:** 2026-06-25
**Stato:** Completato
**Autore:** Antigravity

## Implementazione Effettuata

È stata scelta ed implementata l'**Opzione 3: Aggiunta di `aria-hidden` sull'icona SVG ed etichetta accessibile**:
1. Modificato il pulsante del menu mobile in [TopBar.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/TopBar.tsx) per includere l'attributo `aria-label={t('nav.menu') || 'MENU'}`.
2. Aggiunto l'attributo `aria-hidden="true"` sul componente SVG dell'icona `<Menu />` interno al pulsante per escluderlo dai lettori di schermo.
3. Eseguiti i test di linting e build con esito positivo.

---

## Obiettivo
Risolvere il warning residuo su PageSpeed Insights ("I pulsanti non hanno un nome accessibile") relativo al pulsante del menu mobile nella barra di navigazione (`TopBar.tsx`). Questo permetterà di raggiungere il 100/100 perfetto anche sotto la voce Accessibilità.

---

## Dettaglio dell'errore
L'elemento non conforme individuato è:
`header.fixed > div.flex > div.flex > button`

Codice originale in [TopBar.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/TopBar.tsx):
```tsx
<button 
  onClick={() => setIsMenuOpen(true)}
  className="flex items-center gap-2 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors rounded-full"
>
  <Menu size={18} />
  <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase">{t('nav.menu') || 'MENU'}</span>
</button>
```
Nonostante sia presente un tag `<span>` con il testo "MENU" all'interno, Lighthouse segnala il pulsante come privo di nome accessibile. Questo accade spesso perché l'icona SVG `<Menu />` (generata da Lucide React) non è contrassegnata come elemento decorativo nascosto (`aria-hidden="true"`) o perché il lettore/crawler analizza l'albero di accessibilità del bottone prima che il testo dinamico del client-side venga caricato/idratato.

---

## Triple Option Mandate (Tre Opzioni per l'Implementazione)

### Opzione 1: Aggiunta dell'attributo `aria-label` esplicito al pulsante
* **Descrizione:** Aggiungere l'attributo `aria-label={t('nav.menu') || 'MENU'}` direttamente al tag `<button>`.
* **Pro:** Risolve il problema alla radice e in modo esplicito per qualsiasi crawler o screen reader.
* **Contro:** Nessuno.

### Opzione 2: Collegamento tramite `aria-labelledby`
* **Descrizione:** Assegnare un `id` allo span di testo interno (es. `id="mobile-menu-label"`) e collegarlo al pulsante tramite `aria-labelledby="mobile-menu-label"`.
* **Pro:** Assicura che l'etichetta provenga direttamente dal testo visualizzato, evitando duplicazioni.
* **Contro:** Richiede l'aggiunta di un attributo `id` globale.

### Opzione 3: Aggiunta di `aria-hidden` sull'icona SVG ed etichetta accessibile (Consigliata per robustezza)
* **Descrizione:** Aggiungere `aria-hidden="true"` sul componente `<Menu />` (per evitare che i lettori provino ad interpretare l'icona) e specificare un `aria-label="Menu"` o `aria-label={t('nav.menu') || 'MENU'}` sul `<button>`.
* **Pro:** Soluzione più robusta in assoluto per gli standard di accessibilità web (WCAG).
* **Contro:** Modifica lievemente più righe.

---

## Modifiche Proposte

#### [MODIFY] [TopBar.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/TopBar.tsx)
Modifica del pulsante di toggle menu mobile.

---

## Piano di Verifica
1. Eseguire `npm run lint` per verificare la correttezza formale.
2. Eseguire `npm run build` per confermare la compilazione corretta.
