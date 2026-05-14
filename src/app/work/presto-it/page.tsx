'use client';

import React from 'react';
import { ProjectLayout } from '@/components/sharlee/ProjectLayout';
import { useLanguage } from '@/lib/LanguageContext';
import ReactMarkdown from 'react-markdown';

export default function PrestoItPage() {
  const { language } = useLanguage();

  const seo = {
    IT: {
      title: "Presto.it | Marketplace con AI Google Vision e Laravel Scout",
      description: "Piattaforma di annunci multilingua con moderazione automatica tramite Google Vision API e ricerca full-text ultra-rapida con Laravel Scout."
    },
    EN: {
      title: "Presto.it | Marketplace with Google Vision AI & Laravel Scout",
      description: "Multilingual ads platform featuring automated moderation via Google Vision API and ultra-fast full-text search with Laravel Scout."
    }
  };

  const content = {
    IT: {
      category: "E-commerce & Marketplace",
      description: "Una moderna piattaforma di compravendita dove la sicurezza è al primo posto. L'integrazione con Google Vision AI permette una moderazione automatica delle immagini, garantendo un ambiente protetto e professionale per ogni transazione.",
      role: "Full-Stack Developer",
      year: "2025",
      status: "Completato",
      markdown: `
## Marketplace Sicuro e Scalabile
Presto.it è una piattaforma di annunci che combina un'interfaccia utente reattiva con una logica di backend complessa. Il focus principale è stato posto sulla sicurezza degli utenti e sulla facilità di ricerca.

## Integrazione AI (Google Vision)
Ogni immagine caricata sulla piattaforma viene analizzata asincronamente per rilevare contenuti inappropriati, identificare volti (per l'applicazione di watermark) e generare tag descrittivi automatici, migliorando l'indicizzazione dei prodotti.
      `
    },
    EN: {
      category: "E-commerce & Marketplace",
      description: "A modern marketplace where safety comes first. Integration with Google Vision AI enables automatic image moderation, ensuring a protected and professional environment for every transaction.",
      role: "Full-Stack Developer",
      year: "2025",
      status: "Completed",
      markdown: `
## Secure and Scalable Marketplace
Presto.it is a classifieds platform that combines a responsive user interface with complex backend logic. The main focus was placed on user safety and ease of search.

## AI Integration (Google Vision)
Every image uploaded to the platform is analyzed asynchronously to detect inappropriate content, identify faces (for watermark application), and generate automatic descriptive tags, improving product indexing.

## Technologies Used
- **Laravel 11 & Livewire:** For a dynamic user experience without page reloads.
- **Laravel Scout:** Full-text search engine for instant results.
- **Google Cloud Vision:** Artificial intelligence for content moderation.
- **Queue Management (Jobs):** Asynchronous image processing to maintain high site performance.
      `
    }
  };

  const currentContent = content[language];
  const currentSeo = seo[language];

  const projectImages = [
    '/work/presto-it/media/work10.png',
    '/work/presto-it/media/work11.png',
    '/work/presto-it/media/work12.png',
    '/work/presto-it/media/work13.png',
    '/work/presto-it/media/work14.png',
    '/work/presto-it/media/work15.png',
  ];

  return (
    <>
      <title>{currentSeo.title}</title>
      <meta name="description" content={currentSeo.description} />
      
      <ProjectLayout
        title="Presto.it"
        category={currentContent.category}
        description={currentContent.description}
        tags={['Laravel', 'Livewire', 'Google Vision AI', 'Bootstrap']}
        role={currentContent.role}
        year={currentContent.year}
        status={currentContent.status}
        images={projectImages}
      >
        <ReactMarkdown>{currentContent.markdown}</ReactMarkdown>
      </ProjectLayout>
    </>
  );
}
