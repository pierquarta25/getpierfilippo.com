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
    'hero.title': 'OTTIMIZZO LA PERFORMANCE',
    'hero.title.span': 'ATTRAVERSO IL CODICE',
    'hero.description': 'Appassionato di tecnologia e sfide complesse, sviluppo soluzioni web complete mettendo al centro la qualità e l\'esperienza utente.',
    'hero.work': 'i miei progetti',
    'hero.about': 'scopri di più',
    'nav.home': 'HOME',
    'nav.work': 'LAVORI',
    'nav.about': 'CHI SONO',
    'nav.contact': 'CONTATTI',
    'nav.menu': 'MENU',
    'about.title': 'CHI SONO',
    'about.bio': 'Sviluppatore Full Stack con una solida base tecnica acquisita presso Aulab Hackademy e specializzazione avanzata in React.js, JavaScript e TypeScript. Il mio background accademico in Scienze Motorie mi ha fornito un mindset analitico e una naturale propensione alla disciplina operativa, competenze che oggi applico alla scrittura di codice pulito e scalabile per lo Sviluppo Web. Attualmente impegnato in uno stage presso MacNil (Gravina in Puglia), fondo la creatività dello sviluppo software con il rigore metodologico forgiato in anni di esperienza professionale tra Altamura e dintorni. Il mio obiettivo è trasformare sfide tecniche complesse in soluzioni digitali performanti e orientate all\'utente.',
    'about.resume': 'scarica cv',
    'about.logic': 'Ottimizzazione Logica',
    'about.performance': 'Performance Fisica',
    'work.title': 'LAVORI',
    'work.category.portfolio': 'Portfolio',
    'work.category.software': 'Software B2B',
    'work.category.fleet': 'Portale Valutazione Flotte',
    'work.category.final': 'Progetto Finale Aulab',
    'contact.title': 'CONTATTI',
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
    'hero.title': 'SOLVING PROBLEMS',
    'hero.title.span': 'THROUGH CODE',
    'hero.description': 'Passionate about technology and complex challenges, I develop complete web solutions focusing on quality and user experience.',
    'hero.work': 'my projects',
    'hero.about': 'more about me',
    'nav.home': 'HOME',
    'nav.work': 'WORK',
    'nav.about': 'ABOUT',
    'nav.contact': 'CONTACT',
    'nav.menu': 'MENU',
    'about.title': 'ABOUT ME',
    'about.bio': 'Full Stack Developer based in Puglia (Italy) with a solid technical foundation from Aulab Hackademy and advanced specialization in React.js, JavaScript, and TypeScript. My academic background in Sports Science has provided me with an analytical mindset and a natural aptitude for operational discipline—skills I now apply to writing clean, scalable code for Web Development. Currently interning at MacNil (Gravina in Puglia), I blend software development creativity with the methodological rigor forged through years of professional experience. My goal is to transform complex technical challenges into high-performance, user-oriented digital solutions.',
    'about.resume': 'Resume',
    'about.logic': 'Logic Optimization',
    'about.performance': 'Physical Performance',
    'work.title': 'WORK',
    'work.category.portfolio': 'Portfolio',
    'work.category.software': 'B2B Software',
    'work.category.fleet': 'Fleet Assessment Portal',
    'work.category.final': 'Aulab Final Project',
    'contact.title': 'CONTACT',
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
