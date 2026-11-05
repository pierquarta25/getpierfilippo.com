import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Pierfilippo Quartarella | Full Stack Developer' },
  description: 'Full Stack Developer: sviluppo web con React, Next.js, TypeScript e Laravel, più automazioni Python e integrazioni AI. Disponibile full time.',
};

import { HeroSection } from '@/components/sharlee/HeroSection';

export default function Home() {
  return (
    <div id="hero">
      <HeroSection />
    </div>
  );
}
