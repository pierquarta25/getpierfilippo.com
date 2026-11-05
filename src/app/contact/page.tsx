import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Contatti | Pierfilippo Quartarella, Full Stack Developer' },
  description: 'Scrivimi per un’opportunità full time o un progetto web. Email, LinkedIn e GitHub di Pierfilippo Quartarella.',
};

import { ContactSection } from '@/components/sharlee/ContactSection';

export default function ContactPage() {
  return (
    <div id="contact">
      <ContactSection />
    </div>
  );
}
