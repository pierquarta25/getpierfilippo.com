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
    'hero.title': 'RISOLVO PROBLEMI',
    'hero.title.span': 'ATTRAVERSO IL CODICE',
    'hero.description': 'Appassionato di tecnologia e sfide complesse, sviluppo soluzioni web complete mettendo al centro la qualità e l\'esperienza utente.',
    'hero.work': 'i miei progetti',
    'hero.about': 'scopri di più',
    'nav.home': 'Home',
    'nav.work': 'Lavori',
    'nav.about': 'Chi Sono',
    'nav.contact': 'Contatti',
    'about.title': 'CHI SONO',
    'about.bio': 'Sviluppatore Full Stack basato in Puglia con una solida base tecnica acquisita presso Aulab Hackademy e specializzazione avanzata in React.js, JavaScript e TypeScript. Il mio background accademico in Scienze Motorie mi ha fornito un mindset analitico e una naturale propensione alla disciplina operativa, competenze che oggi applico alla scrittura di codice pulito e scalabile per lo Sviluppo Web. Attualmente impegnato in uno stage presso MacNil (Gravina in Puglia), fondo la creatività dello sviluppo software con il rigore metodologico forgiato in anni di esperienza professionale tra Altamura e dintorni. Il mio obiettivo è trasformare sfide tecniche complesse in soluzioni digitali performanti e orientate all\'utente.',
    'about.resume': 'resume',
  },
  EN: {
    'hero.title': 'SOLVING PROBLEMS',
    'hero.title.span': 'THROUGH CODE',
    'hero.description': 'Passionate about technology and complex challenges, I develop complete web solutions focusing on quality and user experience.',
    'hero.work': 'see my projects',
    'hero.about': 'more about me',
    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'about.title': 'ABOUT',
    'about.bio': 'Full Stack Developer based in Puglia (Italy) with a solid technical foundation from Aulab Hackademy and advanced specialization in React.js, JavaScript, and TypeScript. My academic background in Sports Science has provided me with an analytical mindset and a natural aptitude for operational discipline—skills I now apply to writing clean, scalable code for Web Development. Currently interning at MacNil (Gravina in Puglia), I blend software development creativity with the methodological rigor forged through years of professional experience. My goal is to transform complex technical challenges into high-performance, user-oriented digital solutions.',
    'about.resume': 'resume',
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
