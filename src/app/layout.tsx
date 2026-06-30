import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/sharlee/MainLayout";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

import Script from "next/script";

export const metadata: Metadata = {
  title: "Junior Full Stack Developer | React.js, Next.js, TypeScript, PHP e Laravel | Sviluppo applicazioni web moderne e automazioni AI",
  description: "Portfolio di Pierfilippo Quartarella, Junior Full Stack Developer specializzato in React.js, Next.js, TypeScript, PHP, Laravel e sviluppo di automazioni AI.",
  openGraph: {
    title: "Pierfilippo Quartarella | Junior Full Stack Developer",
    description: "Sviluppo applicazioni web moderne, piattaforme B2B e automazioni con integrazione AI.",
    url: "https://www.getpierfilippo.com",
    siteName: "Pierfilippo Quartarella Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pierfilippo Quartarella",
    "url": "https://www.getpierfilippo.com",
    "jobTitle": "Junior Full Stack Developer",
    "knowsAbout": [
      "React.js",
      "Next.js",
      "TypeScript",
      "PHP",
      "Laravel",
      "Artificial Intelligence",
      "Web Development"
    ]
  };

  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full" suppressHydrationWarning>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <MainLayout>
            {children}
          </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
