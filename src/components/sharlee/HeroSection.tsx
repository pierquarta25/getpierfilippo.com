'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export const HeroSection = () => {
  const { t } = useLanguage();
  const words = ['FULL STACK DEVELOPER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'REACT SPECIALIST', 'SOFTWARE DEVELOPER', 'UX DEVELOPER'];
  const [typedText, setTypedText] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setHasStarted(true);
      setIsDeleting(true);
    }, 2000);
    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const timeout = setTimeout(() => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        if (typedText.length <= 1) { // <= 1 to avoid empty string
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length + 1));
        if (typedText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, wordIndex, hasStarted]);

  return (
    <section className="flex flex-col items-center justify-center px-8 text-center py-24 md:py-12 relative min-h-[80vh] md:min-h-[60vh] overflow-hidden">
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
        <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-black/50 dark:text-white/40 mb-6 block text-center max-w-xl">
          {t('hero.claim')}
        </span>

        <h1 className="text-[clamp(2.2rem,7vw,4.5rem)] font-bold uppercase leading-[1.15] tracking-tighter max-w-4xl text-black dark:text-white">
          {t('hero.title')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black/60 to-black/40 dark:from-white/60 dark:to-white/40">
            {t('hero.title.span')}
          </span>
        </h1>

        <div className="h-8 mt-6 flex items-center justify-center">
          <span className="text-xs md:text-sm font-mono font-bold tracking-[0.3em] text-black/40 dark:text-white/30 uppercase flex items-center gap-1">
            {typedText}
            <span className="w-[1px] h-4 bg-black dark:bg-white animate-caret ml-1" />
          </span>
        </div>

        <p className="mt-8 text-base md:text-xl text-black/60 dark:text-white/60 max-w-2xl leading-relaxed font-medium">
          {t('hero.description')}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Link 
            href="/work" 
            className="flex items-center justify-center gap-3 bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition-all px-8 py-4 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-none border border-black dark:border-white w-full sm:w-auto"
          >
            {t('hero.work')}
            <ArrowRight size={14} />
          </Link>
          <Link 
            href="/contact" 
            className="flex items-center justify-center gap-3 border border-black/20 dark:border-white/20 bg-transparent text-black dark:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-all px-8 py-4 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-none w-full sm:w-auto"
          >
            {t('hero.about')}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};
