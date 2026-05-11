import React from 'react';
import { ProjectLayout } from '@/components/sharlee/ProjectLayout';

export default function PrestoPage() {
  return (
    <ProjectLayout
      title="Presto.it"
      category="Progetto Finale Aulab"
      description="Presto.it è un marketplace di annunci ispirato ai giganti dell'e-commerce. Sviluppato come progetto finale del bootcamp Aulab, mette in pratica tutte le conoscenze acquisite su architettura MVC, gestione database e UX/UI design."
      tags={['Laravel', 'Blade', 'MySQL', 'SASS']}
    >
      <div className="space-y-6">
        <h3 className="text-xl font-bold uppercase tracking-tight">Esperienza Formativa</h3>
        <p className="text-foreground/70">
          Questo progetto ha rappresentato il culmine del mio percorso formativo, permettendomi di gestire un'applicazione complessa con autenticazione, caricamento immagini e filtri di ricerca avanzati.
        </p>
      </div>
    </ProjectLayout>
  );
}
