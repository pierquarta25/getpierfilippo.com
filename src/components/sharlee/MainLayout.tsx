'use client';

import React, { useState } from 'react';
import { Background } from './Background';
import { TopBar } from './TopBar';
import { OverlayMenu } from './OverlayMenu';
import { Footer } from './Footer';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen selection:bg-foreground selection:text-background flex flex-col">
      <Background />
      <TopBar onMenuClick={() => setIsMenuOpen(true)} />
      <OverlayMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <main className="flex-1 flex flex-col items-center justify-center pt-20">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};
