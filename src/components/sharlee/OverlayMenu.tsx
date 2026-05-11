'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { usePathname } from 'next/navigation';

export const OverlayMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { t } = useLanguage();
  const pathname = usePathname();

  if (!isOpen) return null;

  // Base menu items
  const menuItems = [
    { label: t('nav.work'), href: '/work' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  // Aggiungi il link Home solo se non siamo già nella Home
  if (pathname !== '/') {
    menuItems.unshift({ label: t('nav.home'), href: '/' });
  }

  return (
    <div className="fixed inset-0 z-[100] bg-white dark:bg-black flex flex-col items-center justify-center animate-in fade-in duration-300">
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-black dark:text-white hover:opacity-50 transition-opacity"
      >
        CLOSE
      </button>
      
      <nav className="flex flex-col items-center gap-8">
        {menuItems.map((item) => (
          <a 
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="text-6xl md:text-8xl font-bold uppercase tracking-tighter hover:italic text-black dark:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};
