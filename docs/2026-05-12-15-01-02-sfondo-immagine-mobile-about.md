# Progetto: Sfondo Immagine Mobile Sezione About

## Descrizione
L'obiettivo è modificare la sezione "About Me" per migliorare la visualizzazione su dispositivi mobile. Attualmente l'immagine appare sopra il testo. Si desidera spostare l'immagine sullo sfondo, rendendola semi-trasparente per non ostacolare la lettura del testo, in modo simile alla home di `getriccardo.com`.

## Opzioni di Implementazione

### Opzione 1: Full Background Watermark (Standard)
- **Mobile**: L'immagine viene posizionata in modo assoluto dietro il testo, coprendo l'intera area della sezione. Opacità ridotta (10-20%) e filtro grayscale per massima leggibilità.
- **Desktop**: L'immagine mantiene la sua posizione attuale nella colonna di destra.
- **Vantaggi**: Pulizia visiva e coerenza con il riferimento fornito.

### Opzione 2: Gradient Faded Background (Focus Leggibilità)
- **Mobile**: L'immagine occupa lo sfondo ma con un gradiente radiale o lineare che sfuma verso il colore di fondo della sezione (nero/bianco) in corrispondenza del testo più denso.
- **Desktop**: Nessun cambiamento.
- **Vantaggi**: Garantisce che anche con testi lunghi la leggibilità sia perfetta al 100%.

### Opzione 3: Artistic Ghost Image (Design-oriented)
- **Mobile**: L'immagine è ingrandita (zoom) e posizionata leggermente fuori asse, con un'opacità molto bassa (5-8%). Viene mantenuto un effetto di profondità.
- **Desktop**: Nessun cambiamento.
- **Vantaggi**: Look più "premium" e meno statico.

## Piano di Esecuzione
1. Ricezione feedback dell'utente sulla scelta dell'opzione.
2. Modifica di `src/components/sharlee/AboutSection.tsx`.
3. Test della responsività e della leggibilità in dark e light mode.
