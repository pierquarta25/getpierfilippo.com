# Design Document: Pagine Dettaglio Progetti

Data: 2026-05-11
Stato: Completato
Autore: Gemini CLI

## Obiettivo
Creare pagine di dettaglio per ogni progetto elencato nella sezione "Work", permettendo a Pierfilippo di descrivere in modo approfondito il lavoro svolto, le tecnologie utilizzate e i risultati ottenuti.

## Implementazione Eseguita (Opzione 1)
È stata scelta e implementata l'**Opzione 1**: Pagine statiche con componente template condiviso.

### Componenti Creati
- `src/components/sharlee/ProjectLayout.tsx`: Fornisce la struttura base (Header, Footer, Background, pulsante Back, griglia dei contenuti).

### Pagine Progetto Create
Ogni progetto ha ora la propria cartella e il proprio file `page.tsx` che può essere modificato singolarmente:
1. `src/app/work/getpierfilippo-com/page.tsx`
2. `src/app/work/leadgen/page.tsx`
3. `src/app/work/gt-fleet265/page.tsx`
4. `src/app/work/presto-it/page.tsx`

### Collegamenti
La `WorkSection.tsx` è stata aggiornata per puntare agli slug corretti dei progetti.

## Istruzioni per Pierfilippo
Ora puoi aprire singolarmente i file in `src/app/work/` per aggiungere immagini, cambiare i testi o inserire nuove sezioni personalizzate per ogni progetto.
