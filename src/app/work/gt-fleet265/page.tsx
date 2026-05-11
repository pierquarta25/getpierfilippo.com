import React from 'react';
import { ProjectLayout } from '@/components/sharlee/ProjectLayout';

export default function GtFleet265Page() {
  return (
    <ProjectLayout
      title="Gt_Fleet265"
      category="Fleet Assessment Portal"
      description="Gt_Fleet265 è un portale professionale dedicato alla gestione e alla valutazione delle flotte aziendali. Offre strumenti avanzati per il monitoraggio dei costi, la manutenzione preventiva e l'ottimizzazione dei consumi energetici."
      tags={['Next.js', 'Firebase', 'Chart.js', 'Google Maps API']}
    >
      <div className="space-y-6">
        <h3 className="text-xl font-bold uppercase tracking-tight">Obiettivo del Progetto</h3>
        <p className="text-foreground/70">
          Fornire ai fleet manager una visione a 360 gradi del loro parco auto, riducendo le inefficienze operative attraverso grafici dinamici e reportistica automatizzata.
        </p>
      </div>
    </ProjectLayout>
  );
}
