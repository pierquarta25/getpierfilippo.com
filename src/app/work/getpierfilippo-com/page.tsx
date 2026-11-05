'use client';

import React from 'react';
import { ProjectLayout } from '@/components/sharlee/ProjectLayout';
import { useLanguage } from '@/lib/LanguageContext';
import ReactMarkdown from 'react-markdown';

export default function GetPierfilippoPage() {
  const { language, t } = useLanguage();

  const seo = {
    IT: {
      title: "getpierfilippo.com | Portfolio in Next.js 16 e Tailwind 4",
      description: "Come ho costruito questo portfolio: Next.js 16, TypeScript, Tailwind CSS v4, i18n italiano/inglese, dark mode e chat AI integrata."
    },
    EN: {
      title: "getpierfilippo.com | Next.js 16 and Tailwind v4 Portfolio",
      description: "How I built this portfolio: Next.js 16, TypeScript, Tailwind CSS v4, Italian/English i18n, dark mode and a built-in AI chat."
    }
  };

  const content = {
    IT: {
      category: t('work.category.portfolio'),
      description: "Il mio portfolio, costruito con Next.js 16 e Tailwind CSS v4. Non volevo solo una vetrina: volevo un sito veloce e con un design pulito, che mostrasse anche come lavoro.",
      role: "Lead Developer & Designer",
      year: "2026",
      status: "Attivo",
      markdown: `
## Obiettivi del Progetto
Volevo un sito che mostrasse i miei lavori e che fosse anche una prova tecnica. Ho usato Next.js 16 e la nuova versione di Tailwind CSS per tenere i tempi di caricamento al minimo.

## Sfide Tecniche
Ho scritto un sistema i18n per italiano e inglese e una modalità scura che segue le preferenze del sistema, senza il flash di contenuto non stilizzato al caricamento.
      `
    },
    EN: {
      category: t('work.category.portfolio'),
      description: "This is my portfolio, built with Next.js 16 and Tailwind CSS v4. I didn't want just a showcase: I wanted a fast site with a clean design that also shows how I work.",
      role: "Lead Developer & Designer",
      year: "2026",
      status: "Active",
      markdown: `
## Project Goals
I wanted a site that showed my work and doubled as a technical test. I used Next.js 16 and the new version of Tailwind CSS to keep load times as low as possible.

## Technical Challenges
I built an i18n system for Italian and English, plus a dark mode that follows the system setting without a flash of unstyled content on load.
      `
    }
  };

  const currentContent = content[language];
  const currentSeo = seo[language];

  const projectImages = [
    '/work/getpierfilippo-com/media/work1.png',
    '/work/getpierfilippo-com/media/work2.png',
    '/work/getpierfilippo-com/media/work3.png',
    '/work/getpierfilippo-com/media/work4.png',
  ];

  return (
    <>
      <title>{currentSeo.title}</title>
      <meta name="description" content={currentSeo.description} />
      
      <ProjectLayout
        title="getpierfilippo.com"
        category={currentContent.category}
        description={currentContent.description}
        tags={['Next.js 16', 'Tailwind CSS v4', 'TypeScript', 'shadcn/ui']}
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
