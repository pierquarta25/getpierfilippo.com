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
    'hero.claim': 'OTTIMIZZO LA PERFORMANCE ATTRAVERSO IL CODICE',
    'hero.title': 'COSTRUISCO APPLICAZIONI WEB',
    'hero.title.span': 'PER PROBLEMI REALI',
    'hero.description': 'Sviluppo soluzioni full stack con React, Next.js, Laravel, Python e AI, collegando interfacce, dati e processi aziendali.',
    'hero.work': 'Esplora i progetti',
    'hero.about': 'Contattami',
    'nav.home': 'HOME',
    'nav.work': 'LAVORI',
    'nav.about': 'CHI SONO',
    'nav.contact': 'CONTATTI',
    'nav.menu': 'MENU',
    'about.title': 'CHI SONO',
    'about.seo.title': 'Chi sono | Pierfilippo Quartarella – Full Stack Developer',
    'about.seo.description': 'Scopri il profilo di Pierfilippo Quartarella, Full Stack Developer specializzato in React, Next.js, Laravel, TypeScript, Python, Supabase, AI e sviluppo di applicazioni web B2B.',
    'about.bio': 'Sono un **Full Stack Developer** guidato dalla passione per il codice, la risoluzione di problemi complessi e l’apprendimento continuo. Mi piace mettermi in gioco e approfondire tecnologie moderne come **ReactJs, Angular, TypeScript e Python**, sviluppando applicazioni web curate sia nella logica che nella user experience.\n\nCredo fortemente nella disciplina, nel lavoro di squadra e nell’adattabilità: valori che coltivo quotidianamente sia nella programmazione che nelle mie passioni personali. Il mio obiettivo è costruire software pulito, performante e di impatto reale.',
    'about.resume': 'scarica cv',
    'about.logic': 'Ottimizzazione Logica',
    'about.performance': 'Performance Fisica',
    'work.title': 'LAVORI',
    'work.category.portfolio': 'Portfolio',
    'work.category.software': 'Software B2B',
    'work.category.fleet': 'Configuratore Flotte',
    'work.category.scraper': 'Web Scraping & Automazione',
    'work.category.mobile': 'Applicazione Mobile-First',
    'contact.title': 'CONTATTI',
    'contact.subtitle': 'Hai un progetto, un’opportunità o vuoi confrontarti sullo sviluppo web? Scrivimi.',
    'contact.mail': 'EMAIL',
    'contact.social': 'SOCIAL MEDIA',
    'project.visit': 'Visita il sito',
    'project.back': 'Torna ai lavori',
    'error.404.title': '404',
    'error.404.subtitle': 'PAGINA NON TROVATA',
    'error.404.description': 'La pagina che stai cercando sembra essere svanita nel nulla o non è mai esistita.',
    'error.403.title': '403',
    'error.403.subtitle': 'ACCESSO NEGATO',
    'error.403.description': 'Non hai i permessi necessari per accedere a questa risorsa.',
    'error.back': 'Torna alla Home',
  },
  EN: {
    'hero.claim': 'OPTIMIZING PERFORMANCE THROUGH CODE',
    'hero.title': 'I BUILD WEB APPLICATIONS',
    'hero.title.span': 'FOR REAL-WORLD PROBLEMS',
    'hero.description': 'I develop full stack solutions with React, Next.js, Laravel, Python, and AI, connecting interfaces, data, and business processes.',
    'hero.work': 'Explore projects',
    'hero.about': 'Contact me',
    'nav.home': 'HOME',
    'nav.work': 'WORK',
    'nav.about': 'ABOUT',
    'nav.contact': 'CONTACT',
    'nav.menu': 'MENU',
    'about.title': 'ABOUT ME',
    'about.seo.title': 'About Me | Pierfilippo Quartarella – Full Stack Developer',
    'about.seo.description': 'Discover the profile of Pierfilippo Quartarella, Full Stack Developer specializing in React, Angular, Next.js, TypeScript, Python, and web application development.',
    'about.bio': 'I am a **Full Stack Developer** driven by a passion for code, solving complex problems, and continuous learning. I love challenging myself and exploring modern technologies like **ReactJs, Angular, TypeScript, and Python**, building web applications crafted with precision in both logic and user experience.\n\nI strongly believe in discipline, teamwork, and adaptability—values I cultivate daily through programming and personal passions. My goal is to build clean, high-performing software that makes a real impact.',
    'about.resume': 'Resume',
    'about.logic': 'Logic Optimization',
    'about.performance': 'Physical Performance',
    'work.title': 'WORK',
    'work.category.portfolio': 'Portfolio',
    'work.category.software': 'B2B Software',
    'work.category.fleet': 'Fleet Configurator',
    'work.category.scraper': 'Web Scraping & Automation',
    'work.category.mobile': 'Mobile-First Application',
    'contact.title': 'CONTACT',
    'contact.subtitle': 'Have a project, an opportunity, or want to discuss web development? Write to me.',
    'contact.mail': 'EMAIL',
    'contact.social': 'SOCIAL MEDIA',
    'project.visit': 'Visit site',
    'project.back': 'Back to work',
    'error.404.title': '404',
    'error.404.subtitle': 'PAGE NOT FOUND',
    'error.404.description': 'The page you are looking for seems to have vanished or never existed.',
    'error.403.title': '403',
    'error.403.subtitle': 'ACCESS FORBIDDEN',
    'error.403.description': 'You do not have the necessary permissions to access this resource.',
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
