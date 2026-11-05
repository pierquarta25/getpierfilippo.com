'use client';

import React, { createContext, useContext, useState, useEffect, startTransition } from 'react';

type Language = 'IT' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  IT: {
    'hero.claim': 'FULL STACK DEVELOPER',
    'hero.title': 'FACCIO WEB APP',
    'hero.title.span': 'CHE LE AZIENDE USANO DAVVERO',
    'hero.description': 'Nell’ultimo anno ho costruito cinque applicazioni per un’azienda vera: un configuratore di flotte, uno scanner di biglietti da visita, uno strumento per trovare nuovi clienti. Uso React, Next.js, TypeScript e Laravel. Sono disponibile full time.',
    'hero.work': 'Esplora i progetti',
    'hero.about': 'Chi sono',
    'nav.home': 'HOME',
    'nav.work': 'LAVORI',
    'nav.about': 'CHI SONO',
    'nav.contact': 'CONTATTI',
    'nav.menu': 'MENU',
    'about.title': 'CHI SONO',
    'about.seo.title': 'Chi sono | Pierfilippo Quartarella, Full Stack Developer',
    'about.seo.description': 'Full Stack Developer con focus su React e Laravel, laureato in Scienze dello Sport. Cinque applicazioni B2B consegnate in meno di 12 mesi.',
    'about.bio': 'Sono un **Full Stack Developer**. Scrivo codice per risolvere problemi concreti e intanto continuo a imparare. Lavoro soprattutto con **ReactJs, Angular e TypeScript**, e ci tengo che un’applicazione funzioni bene sia sotto il cofano sia per chi la usa.\n\nMi trovo bene in un team, con un metodo chiaro e la voglia di adattarmi a quello che serve. Lo stesso vale fuori dal lavoro, nello sport. Voglio scrivere software pulito e veloce, che serva davvero a qualcuno.',
    'about.resume': 'scarica cv (pdf)',
    'about.logic': 'Logica',
    'about.performance': 'Corpo',
    'work.title': 'LAVORI',
    'work.category.portfolio': 'Portfolio',
    'work.category.software': 'Software B2B',
    'work.category.fleet': 'Configuratore Flotte',
    'work.category.scraper': 'Web Scraping & Automazione',
    'work.category.mobile': 'Applicazione Mobile-First',
    'contact.title': 'CONTATTI',
    'contact.subtitle': 'Hai un progetto o un’offerta di lavoro, o vuoi semplicemente parlare di sviluppo web? Scrivimi.',
    'contact.mail': 'EMAIL',
    'contact.social': 'SOCIAL MEDIA',
    'contact.availability': '● Disponibile full time',
    'project.visit': 'Visita il sito',
    'project.back': 'Torna ai lavori',
    'error.404.title': '404',
    'error.404.subtitle': 'PAGINA NON TROVATA',
    'error.404.description': 'Questa pagina non esiste, o l’hanno spostata.',
    'error.403.title': '403',
    'error.403.subtitle': 'ACCESSO NEGATO',
    'error.403.description': 'Non hai i permessi per vedere questa pagina.',
    'error.back': 'Torna alla Home',
  },
  EN: {
    'hero.claim': 'FULL STACK DEVELOPER',
    'hero.title': 'I MAKE WEB APPS',
    'hero.title.span': 'THAT COMPANIES ACTUALLY USE',
    'hero.description': 'Over the past year I built five apps for a real company: a fleet configurator, a business card scanner, a tool for finding new customers. I work with React, Next.js, TypeScript and Laravel. I am available full time.',
    'hero.work': 'Explore projects',
    'hero.about': 'About me',
    'nav.home': 'HOME',
    'nav.work': 'WORK',
    'nav.about': 'ABOUT',
    'nav.contact': 'CONTACT',
    'nav.menu': 'MENU',
    'about.title': 'ABOUT ME',
    'about.seo.title': 'About | Pierfilippo Quartarella, Full Stack Developer',
    'about.seo.description': 'Full Stack Developer focused on React and Laravel, with a degree in Sport Science. Five B2B apps shipped in under 12 months.',
    'about.bio': 'I am a **Full Stack Developer**. I write code to solve concrete problems, and I keep learning as I go. Most of my work is in **ReactJs, Angular, and TypeScript**, and I care that an app works well both under the hood and for the person using it.\n\nI work well in a team, with a clear process and a willingness to adapt to what the job needs. The same goes for my life outside work, in sport. I want to write clean, fast software that is actually useful to someone.',
    'about.resume': 'Resume (PDF)',
    'about.logic': 'Logic',
    'about.performance': 'Body',
    'work.title': 'WORK',
    'work.category.portfolio': 'Portfolio',
    'work.category.software': 'B2B Software',
    'work.category.fleet': 'Fleet Configurator',
    'work.category.scraper': 'Web Scraping & Automation',
    'work.category.mobile': 'Mobile-First Application',
    'contact.title': 'CONTACT',
    'contact.subtitle': 'Got a project, a job offer, or just want to talk web development? Drop me a line.',
    'contact.mail': 'EMAIL',
    'contact.social': 'SOCIAL MEDIA',
    'contact.availability': '● Available full time',
    'project.visit': 'Visit site',
    'project.back': 'Back to work',
    'error.404.title': '404',
    'error.404.subtitle': 'PAGE NOT FOUND',
    'error.404.description': 'This page does not exist, or it has been moved.',
    'error.403.title': '403',
    'error.403.subtitle': 'ACCESS FORBIDDEN',
    'error.403.description': 'You do not have permission to view this page.',
    'error.back': 'Back to Home',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('EN');

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'IT' || savedLang === 'EN') {
      startTransition(() => {
        setLanguage(savedLang as Language);
      });
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string) => {
    const langDict = translations[language];
    return langDict[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
