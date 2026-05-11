'use client';

import { useEffect, useState } from 'react';
import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import Link from 'next/link';

export const OverlayMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const menuItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.work'), href: '/work' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Menu Container */}
      <div className="relative w-full md:h-full bg-white dark:bg-black md:bg-white dark:md:bg-black rounded-t-[32px] md:rounded-none p-8 md:p-0 animate-in slide-in-from-bottom md:slide-in-from-top duration-500 ease-out border-t md:border-none border-black/10 dark:border-white/10 max-h-[90vh] md:max-h-full overflow-y-auto no-scrollbar">
        
        {/* Close Button - Visible on Desktop */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-black dark:text-white hover:opacity-50 transition-opacity font-mono text-xs tracking-widest hidden md:block"
        >
          [CLOSE]
        </button>

        {/* Handle for Mobile Drawer */}
        <div className="w-12 h-1.5 bg-black/10 dark:bg-white/20 rounded-full mx-auto mb-12 md:hidden" />
        
        <div className="flex flex-col md:flex-row items-center justify-center h-full gap-8 md:gap-16">
          <nav className="flex flex-col items-start md:items-center gap-6 md:gap-12 w-full md:w-auto">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-baseline gap-4 md:gap-8 w-full md:w-auto"
                >
                  <span className="text-xs font-mono opacity-30 group-hover:opacity-100 transition-opacity">
                    {item.href === '/' ? '00' : `0${menuItems.indexOf(item)}`}
                  </span>
                  <span className="text-4xl md:text-8xl font-bold uppercase tracking-tighter hover:italic text-black dark:text-white transition-all group-hover:translate-x-4 md:group-hover:translate-x-0 md:group-hover:scale-110">
                    {item.label}
                  </span>
                  {isActive && (
                    <div className="hidden md:block w-3 h-3 rounded-full bg-black dark:bg-white" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Specific Close Button - Bottom Right */}
          <button 
            onClick={onClose}
            className="md:hidden mt-12 p-6 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center self-center"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
