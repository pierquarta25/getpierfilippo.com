import React from 'react';
import { ProjectLayout } from '@/components/sharlee/ProjectLayout';

export default function LeadGenPage() {
  return (
    <ProjectLayout
      title="LeadGen"
      category="Software B2B"
      description="LeadGen è una piattaforma SaaS progettata per ottimizzare l'acquisizione di contatti B2B. Il software permette di gestire campagne di marketing, tracciare le interazioni con i potenziali clienti e analizzare i dati di conversione in tempo reale."
      tags={['React', 'Node.js', 'PostgreSQL', 'Redux']}
    >
      <div className="space-y-6">
        <h3 className="text-xl font-bold uppercase tracking-tight">Funzionalità Chiave</h3>
        <ul className="list-disc list-inside space-y-2 text-foreground/70">
          <li>Dashboard analitica interattiva</li>
          <li>Automazione dei workflow di email marketing</li>
          <li>Integrazione API con CRM esterni</li>
        </ul>
      </div>
    </ProjectLayout>
  );
}
