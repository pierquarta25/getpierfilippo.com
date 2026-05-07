import React from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const OverlayMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  const menuItems = [
    { id: '01', label: 'HOME', href: '/' },
    { id: '02', label: 'WORK', href: '/work' },
    { id: '03', label: 'ABOUT', href: '/about' },
    { id: '04', label: 'CONTACT', href: '/contact' },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex flex-col p-8 md:p-12 animate-in fade-in duration-300">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 border-2 border-current rounded-full flex items-center justify-center font-bold text-xl">
            L
          </div>
          <span className="font-medium text-sm text-foreground/60 uppercase tracking-widest">pierfilippo.com</span>
        </div>
        <button onClick={onClose} className="hover:opacity-50 transition-opacity">
          <X size={32} />
        </button>
      </div>

      <nav className="flex-1 flex flex-col justify-center gap-4 md:gap-8 mt-12">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={onClose}
            className="group flex items-baseline gap-4 hover:translate-x-4 transition-transform duration-300"
          >
            <span className="text-xs md:text-sm font-medium text-foreground/40">{item.id}</span>
            <span className="text-5xl md:text-8xl font-bold uppercase tracking-tighter group-hover:text-foreground/60 transition-colors">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto flex gap-8 font-medium">
        <a href="https://github.com/pierquarta25" className="flex items-center gap-1 hover:opacity-50 transition-opacity uppercase text-xs tracking-widest">
          <ArrowUpRight size={14} /> Github
        </a>
        <a href="https://www.linkedin.com/in/pier-quartarella/" className="flex items-center gap-1 hover:opacity-50 transition-opacity uppercase text-xs tracking-widest">
          <ArrowUpRight size={14} /> linkedin
        </a>
        <a href="https://t.me/Pier_Q" className="flex items-center gap-1 hover:opacity-50 transition-opacity uppercase text-xs tracking-widest">
          <ArrowUpRight size={14} /> telegram
        </a>
      </div>
    </div>
  );
};
