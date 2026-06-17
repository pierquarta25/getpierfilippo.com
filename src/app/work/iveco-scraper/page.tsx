'use client';

import React from 'react';
import { ProjectLayout } from '@/components/sharlee/ProjectLayout';
import { useLanguage } from '@/lib/LanguageContext';
import ReactMarkdown from 'react-markdown';

export default function IvecoScraperPage() {
  const { language, t } = useLanguage();

  const seo = {
    IT: {
      title: "Iveco Scraper | Estrazione & Analisi Dati Concessionari",
      description: "Script CLI Python per l'estrazione automatizzata dei dati di tutti i concessionari Iveco in Italia tramite reverse engineering e scraping."
    },
    EN: {
      title: "Iveco Scraper | Dealership Data Extraction & Analysis",
      description: "Python CLI script for automated data extraction of all Iveco dealerships in Italy via reverse engineering and web scraping."
    }
  };

  const content = {
    IT: {
      category: t('work.category.scraper'),
      description: "Script CLI professionale per il recupero massivo e l'analisi dei dati geografici e di contatto di tutta la rete di concessionari Iveco in Italia, sviluppato attraverso tecniche avanzate di reverse engineering.",
      role: "Sviluppatore Backend & Automazione",
      year: "2026",
      status: "Completato",
      markdown: `
## Obiettivi del Progetto
Il progetto risponde alla necessità di estrarre in modo rapido e strutturato le informazioni di contatto, localizzazione e operatività di tutte le sedi di concessionari Iveco dislocate in Italia. Lo strumento è concepito per operare via riga di comando (CLI) per facilitare integrazioni future in pipeline ETL.

## Dettagli Tecnici & Implementazione
- **Reverse Engineering:** Analisi dei flussi di rete (XHR/Fetch) del localizzatore ufficiale per individuare gli endpoint API interni e ricostruire le query di richiesta dati.
- **Data Cleansing & Normalization:** Utilizzo di **Pandas** per la pulizia dei dati grezzi ricevuti (rimozione duplicati, formattazione standard dei numeri telefonici ed email, normalizzazione dei CAP).
- **Integrazione Geografica:** Database locale integrato con le coordinate delle province italiane per un sistema di filtraggio interattivo ed immediato.
- **Esportazione Professionale:** Utilizzo di **OpenPyXL** per la generazione di report in formato Excel ordinati per regione o provincia.
      `
    },
    EN: {
      category: t('work.category.scraper'),
      description: "Professional CLI script for bulk retrieval and analysis of geographical and contact data for the entire Iveco dealership network in Italy, built using advanced reverse engineering.",
      role: "Backend & Automation Developer",
      year: "2026",
      status: "Completed",
      markdown: `
## Project Goals
The project fulfills the need to quickly extract structured contact, location, and operational info for all Iveco dealership branches in Italy. The tool operates via command line (CLI) to ease future integrations into ETL pipelines.

## Technical Details & Implementation
- **Reverse Engineering:** Network flow analysis (XHR/Fetch) of the official locator to identify internal API endpoints and reconstruct data queries.
- **Data Cleansing & Normalization:** Used **Pandas** for cleaning raw data (removing duplicates, standardizing phone/email formats, and normalizing postal codes).
- **Geographic Integration:** Integrated local database with Italian province coordinates for an interactive filtering system.
- **Professional Export:** Used **OpenPyXL** to generate formatted Excel reports sorted by region or province.
      `
    }
  };

  const currentContent = content[language];
  const currentSeo = seo[language];

  return (
    <>
      <title>{currentSeo.title}</title>
      <meta name="description" content={currentSeo.description} />
      
      <ProjectLayout
        title="Iveco Scraper"
        category={currentContent.category}
        description={currentContent.description}
        tags={['Python', 'Pandas', 'OpenPyXL', 'Requests', 'Web Scraping', 'API Reverse Engineering']}
        role={currentContent.role}
        year={currentContent.year}
        status={currentContent.status}
        images={[]}
      >
        <ReactMarkdown>{currentContent.markdown}</ReactMarkdown>
      </ProjectLayout>
    </>
  );
}
