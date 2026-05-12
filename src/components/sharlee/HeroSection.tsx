'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

export const HeroSection = () => {
  const { t } = useLanguage();
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const words = ['FULL STACK DEVELOPER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'REACT SPECIALIST', 'SOFTWARE DEVELOPER', 'UX DEVELOPER'];
    
    const timeout = setTimeout(() => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        if (typedText.length === 0) {
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
  }, [typedText, isDeleting, wordIndex]);

  return (
    <section className="flex flex-col items-center justify-center px-8 text-center py-24 md:py-12 relative min-h-[80vh] md:min-h-[60vh] overflow-hidden">
      
      {/* Mobile Background - Stile Riccardo */}
      <div className="absolute inset-0 lg:hidden pointer-events-none overflow-hidden">
        <Image 
          src="/media/pierfilippo-portrait.jpg"
          alt="Pierfilippo Quartarella Background"
          fill
          className="object-cover grayscale opacity-40 dark:opacity-30"
          priority
        />
        {/* Overlay gradiente radiale per far emergere il testo e sfumare l'immagine */}
        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-transparent via-white/60 to-white dark:via-black/70 dark:to-black" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold uppercase leading-[1.1] tracking-tighter max-w-5xl text-black dark:text-white">
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

        <p className="mt-8 text-lg md:text-xl text-black/60 dark:text-white/60 max-w-2xl leading-relaxed font-medium">
          {t('hero.description')}
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-12 font-bold uppercase text-[10px] tracking-[0.2em]">
          <Link href="/work" className="flex items-center gap-3 hover:opacity-50 transition-all hover:gap-5 group text-black dark:text-white">
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            {t('hero.work')}
          </Link>
          <Link href="/about" className="flex items-center gap-3 hover:opacity-50 transition-all hover:gap-5 group text-black dark:text-white">
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            {t('hero.about')}
          </Link>
        </div>
      </div>
    </section>
  );
};
