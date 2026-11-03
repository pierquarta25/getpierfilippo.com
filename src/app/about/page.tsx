import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Chi sono | Pierfilippo Quartarella' },
  description: 'Full Stack Developer con laurea in Scienze dello Sport: React, Next.js, Laravel, TypeScript, Python e applicazioni web B2B.',
};

import { AboutSection } from '@/components/sharlee/AboutSection';

export default function AboutPage() {
  return (
    <div id="about">
      <AboutSection />
    </div>
  );
}
