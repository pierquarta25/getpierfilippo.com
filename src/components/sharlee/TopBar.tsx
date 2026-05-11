'use client';

import React, { useEffect, useState, startTransition } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/lib/LanguageContext';
import { cn } from '@/lib/utils';
import { Logo } from './Logo';
import { OverlayMenu } from './OverlayMenu';

export const TopBar = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  const navItems = [
    { id: '01', label: t('nav.home'), href: '/' },
    { id: '02', label: t('nav.work'), href: '/work' },
    { id: '03', label: t('nav.about'), href: '/about' },
    { id: '04', label: t('nav.contact'), href: '/contact' },
  ];

  if (!mounted) return null;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md text-black dark:text-white">
        <div className="flex h-16">
          {/* Brand/Logo Cell */}
          <div className="flex items-center px-6 border-r border-black/10 dark:border-white/10">
            <Link href="/" className="w-10 h-10 flex items-center justify-center hover:opacity-50 transition-opacity text-black dark:text-white">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation Grid - Hidden on Mobile */}
          <nav className="hidden md:flex flex-1 overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "flex flex-col justify-center px-8 min-w-[140px] border-r border-black/10 dark:border-white/10 transition-all duration-300 group relative overflow-hidden",
                    isActive ? "bg-black/5 dark:bg-white/5" : "hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                  )}
                >
                  <span className={cn(
                    "text-[10px] font-mono font-bold tracking-[0.2em] transition-all",
                    isActive ? "text-black dark:text-white" : "text-black/60 dark:text-white/50 group-hover:text-black dark:group-hover:text-white"
                  )}>
                    {item.label}
                  </span>
                  
                  {/* CAD Construction Line Effect */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black dark:bg-white animate-in slide-in-from-left duration-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle - Visible only on Mobile */}
          <div className="flex-1 flex md:hidden items-center justify-center border-r border-black/10 dark:border-white/10">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors rounded-full"
            >
              <Menu size={18} />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase">{t('nav.menu') || 'MENU'}</span>
            </button>
          </div>

          {/* Utility Actions Cell */}
          <div className="flex items-center gap-4 md:gap-6 px-4 md:px-8 border-l border-black/10 dark:border-white/10">
            <button 
              onClick={() => setLanguage(language === 'EN' ? 'IT' : 'EN')}
              className="text-[10px] font-mono font-bold tracking-widest hover:opacity-50 transition-opacity text-black dark:text-white"
            >
              [{language}]
            </button>
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hover:opacity-50 transition-opacity text-black dark:text-white"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>

      <OverlayMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
