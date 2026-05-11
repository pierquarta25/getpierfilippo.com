# Progetto: Aggiornamento Logo Navbar

**Data:** 2026-05-11
**Stato:** Completato
**Autore:** Gemini CLI

## Obiettivo
Sostituire il logo testuale "PQ" nel cerchio all'interno della `TopBar` con il nuovo logo SVG situato in `public/media/logo.svg` e aggiungere un contorno circolare.

## Implementazione Effettuata
1. **Logo:** Utilizzato il componente `Image` di Next.js con attributo `priority`.
2. **Contorno:** Applicata l'**Opzione A**. Il logo è stato inserito in un contenitore circolare (`rounded-full`) con bordo nero (`border-black`) e sfondo bianco (`bg-white`) per garantire la massima visibilità.

## Dettagli Tecnici
- Componente modificato: `src/components/sharlee/TopBar.tsx`
- Classi Tailwind utilizzate: `w-10 h-10 border border-black rounded-full overflow-hidden flex items-center justify-center bg-white`
