import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Contatti | Pierfilippo Quartarella' },
  description: 'Scrivimi per un progetto o un’opportunità: email, LinkedIn, GitHub. Disponibile full time.',
};

import { ContactSection } from '@/components/sharlee/ContactSection';

export default function ContactPage() {
  return (
    <div id="contact">
      <ContactSection />
    </div>
  );
}
