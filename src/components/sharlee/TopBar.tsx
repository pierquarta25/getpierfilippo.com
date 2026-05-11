'use client';

import React, { useEffect, useState, startTransition } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/lib/LanguageContext';
import { cn } from '@/lib/utils';

export const TopBar = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  const navItems = [
    { id: '01', label: 'HOME', href: '/' },
    { id: '02', label: 'WORK', href: '/work' },
    { id: '03', label: 'ABOUT', href: '/about' },
    { id: '04', label: 'CONTACT', href: '/contact' },
  ];

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md">
      <div className="flex h-16">
        {/* Brand/Logo Cell */}
        <div className="flex items-center px-6 border-r border-black/10 dark:border-white/10">
          <div className="w-8 h-8 relative grayscale dark:invert">
            <Image 
              src="/media/logo.svg" 
              alt="Logo" 
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Navigation Grid */}
        <nav className="flex-1 flex overflow-x-auto no-scrollbar">
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
                <span className="text-[8px] font-mono text-black/40 dark:text-white/30 mb-1 group-hover:text-black dark:group-hover:text-white transition-colors">
                  MOD_{item.id}
                </span>
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

        {/* Utility Actions Cell */}
        <div className="flex items-center gap-6 px-8 border-l border-black/10 dark:border-white/10">
          <button 
            onClick={() => setLanguage(language === 'EN' ? 'IT' : 'EN')}
            className="text-[10px] font-mono font-bold tracking-widest hover:opacity-50 transition-opacity"
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
  );
};
