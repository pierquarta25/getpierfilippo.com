'use client';

import React from 'react';
import { ProjectLayout } from '@/components/sharlee/ProjectLayout';
import { useLanguage } from '@/lib/LanguageContext';
import ReactMarkdown from 'react-markdown';

export default function IvecoScraperPage() {
  const { language, t } = useLanguage();

  const seo = {
    IT: {
      title: "Iveco Scraper | Script Python per dati concessionari",
      description: "CLI in Python che estrae e normalizza i dati dei concessionari Iveco in Italia con Requests e Pandas, ed esporta report Excel con OpenPyXL."
    },
    EN: {
      title: "Iveco Scraper | Python Dealership Data Script",
      description: "Python CLI that extracts and normalizes Iveco dealership data in Italy with Requests and Pandas, and exports Excel reports with OpenPyXL."
    }
  };

  const content = {
    IT: {
      category: t('work.category.scraper'),
      description: "Uno script CLI in Python che raccoglie i dati di contatto e di posizione di tutti i concessionari Iveco in Italia. Per trovare i dati ho fatto reverse engineering del localizzatore ufficiale.",
      role: "Full Stack Developer Intern · Data Automation",
      year: "2026",
      status: "Completato",
      markdown: `
## Obiettivi del Progetto
Serviva estrarre in modo rapido e ordinato contatti, posizione e operatività di tutte le sedi dei concessionari Iveco in Italia. Ho fatto lo strumento da riga di comando (CLI), così si può inserire più avanti in una pipeline ETL.

## Dettagli Tecnici & Implementazione
- **Reverse Engineering:** Ho analizzato le chiamate di rete (XHR/Fetch) del localizzatore ufficiale per trovare gli endpoint API interni e ricostruire le richieste.
- **Data Cleansing & Normalization:** Con **Pandas** ripulisco i dati grezzi: tolgo i duplicati e uniformo telefoni, email e CAP.
- **Integrazione Geografica:** Un database locale con le coordinate delle province italiane permette di filtrare i risultati al volo.
- **Esportazione Professionale:** Con **OpenPyXL** genero report Excel ordinati per regione o provincia.
      `
    },
    EN: {
      category: t('work.category.scraper'),
      description: "A Python CLI script that collects contact and location data for every Iveco dealership in Italy. To get at the data, I reverse engineered the official dealer locator.",
      role: "Full Stack Developer Intern · Data Automation",
      year: "2026",
      status: "Completed",
      markdown: `
## Project Goals
The goal was to pull contact, location, and operating details for every Iveco dealership branch in Italy, quickly and in a clean format. I built it as a command-line tool (CLI) so it can later plug into an ETL pipeline.

## Technical Details & Implementation
- **Reverse Engineering:** I analyzed the network calls (XHR/Fetch) of the official locator to find its internal API endpoints and rebuild the requests.
- **Data Cleansing & Normalization:** I clean the raw data with **Pandas**: I drop duplicates and standardize phone numbers, emails, and postal codes.
- **Geographic Integration:** A local database of Italian province coordinates lets me filter results on the fly.
- **Professional Export:** I use **OpenPyXL** to generate Excel reports sorted by region or province.
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
        isInternal={true}
        images={[]}
      >
        <ReactMarkdown>{currentContent.markdown}</ReactMarkdown>
      </ProjectLayout>
    </>
  );
}
