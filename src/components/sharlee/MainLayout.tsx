'use client';

import React from 'react';
import { Background } from './Background';
import { TopBar } from './TopBar';
import { Footer } from './Footer';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen selection:bg-foreground selection:text-background flex flex-col">
      <Background />
      <TopBar />
      
      <main className="flex-1 flex flex-col items-center justify-center pt-32">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};
