import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { distributedRateLimit } from '@/lib/rate-limit';

const limiter = distributedRateLimit(10, 60000); // 10 richieste al minuto

export const maxDuration = 30;

const ALLOWED_ORIGIN = 'https://www.getpierfilippo.com';

function isOriginAllowed(origin: string | null) {
  return origin === ALLOWED_ORIGIN || process.env.NODE_ENV === 'development';
}

function getCorsHeaders(origin: string | null) {
  const allowed = isOriginAllowed(origin);
  return {
    'Access-Control-Allow-Origin': allowed ? (origin ?? ALLOWED_ORIGIN) : ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export async function OPTIONS(req: Request) {
  const origin = req.headers.get('origin');
  return new Response(null, { status: 204, headers: getCorsHeaders(origin) });
}

export async function POST(req: Request) {
  const origin = req.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);

  // Origini diverse dal sito (se dichiarate) vengono rifiutate prima di consumare token
  if (origin && !isOriginAllowed(origin)) {
    return new Response('Forbidden', { status: 403, headers: corsHeaders });
  }

  // IP: preferisci header impostati dall'infrastruttura (non falsificabili su Vercel)
  const ip =
    req.headers.get('x-real-ip') ??
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    '127.0.0.1';

  const isAllowed = await limiter(ip);
  if (!isAllowed) {
    return new Response('Rate limit exceeded. Please try again later.', {
      status: 429,
      headers: corsHeaders,
    });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response('Invalid JSON', { status: 400, headers: corsHeaders });
  }

  // Validazione struttura
  if (
    typeof body !== 'object' ||
    body === null ||
    !Array.isArray((body as { messages?: unknown }).messages)
  ) {
    return new Response('Invalid request body', { status: 400, headers: corsHeaders });
  }

  const rawMessages = (body as { messages: unknown[] }).messages;

  // Limite numero messaggi
  if (rawMessages.length > 20) {
    return new Response('Too many messages', { status: 400, headers: corsHeaders });
  }

  type RawMessage = {
    role: string;
    content?: string;
    parts?: { type: string; text: string }[];
  };

  // Sanitizzazione: solo role user/assistant, contenuto stringa troncato a 2000 char
  const messages = rawMessages
    .filter((m): m is RawMessage =>
      typeof m === 'object' &&
      m !== null &&
      typeof (m as RawMessage).role === 'string' &&
      (typeof (m as RawMessage).content === 'string' ||
        Array.isArray((m as RawMessage).parts))
    )
    .map((m) => {
      const role = m.role === 'user' ? 'user' : 'assistant';
      const content =
        typeof m.content === 'string'
          ? m.content.slice(0, 2000)
          : m.parts?.find((p) => p.type === 'text')?.text?.slice(0, 2000) ?? '';
      return { role, content };
    });

  if (messages.length === 0) {
    return new Response('No valid messages', { status: 400, headers: corsHeaders });
  }

  const systemPrompt = `
Sei l'assistente virtuale del sito portfolio di Pierfilippo Quartarella.
Il tuo tono deve essere sempre cordiale, professionale, entusiasta e accogliente.
Devi rispondere alle domande su Pierfilippo basandoti rigorosamente sulle seguenti informazioni fornite dal suo curriculum aggiornato.

Informazioni Base su Pierfilippo Quartarella:
- Ruolo: Sviluppatore Full Stack Junior | Specializzazione Front-End in React.js
- Residenza: Altamura (BA), Italy
- Telefono: +39 3758595678
- Email: info@getpierfilippo.com

Profilo Riepilogativo:
Sviluppatore Full Stack Junior con specializzazione React.js, attualmente in stage full-time presso MacNil S.r.l. Ho consegnato 5 applicazioni in produzione in meno di 12 mesi: da uno scraper Python che ha normalizzato 2.000+ record aziendali, a una web app mobile-first con AI Integration (Google Gemini + HubSpot API) che ha ridotto il tempo di acquisizione lead del ~70%. Stack principale: React, TypeScript, Next.js, Laravel, Supabase, Tailwind CSS, REST API. Disponibile per inserimento full time.

Competenze Tecniche:
- Back-end & Framework: Laravel, Next.js, Node.js, PHP, MySQL, Supabase, REST API design, Java Spring, Python.
- Front-end & Linguaggi: React, TypeScript, JavaScript, Tailwind CSS, shadcn/ui, Livewire, HTML, CSS, Bootstrap.
- Strumenti & Versionamento: GitHub (branch strategy, PR review), Agile/Scrum, Vite, HubSpot API, Google Gemini API, Figma.

Esperienze Professionali:
1. Software Developer (Stage) | MacNil S.R.L, Gravina in Puglia (BA) | 04/2026 – In corso | Full-time
   - Gestito in completa autonomia l'intero ciclo di sviluppo di 4 progetti digitali aziendali, prendendo in carico i requisiti tecnici assegnati dalla referente e traducendoli in soluzioni software funzionanti e approvate internamente.
   - Sviluppato architetture Full Stack (React / Laravel) e script di automazione, focalizzandomi sull'integrazione di API (Google Gemini, HubSpot CRM) e sistemi di estrazione dati per ottimizzare i processi aziendali.

2. Personal Trainer | Up Level Altamura - Light S.r.l Matera | 2022-2025
   - Gestito in autonomia un portfolio di clienti con pianificazione di percorsi personalizzati e monitoraggio dei progressi nel tempo.

Istruzione e Formazione:
- Corso di specializzazione in React.js | Aulab Hackademy | 05/2026-05/2026
  (Creazione interfacce moderne con React.js, gestione stato, hooks, API REST)
- Corso Full Stack Web Developer | Aulab Hackademy | 12/2025-04/2026
  (Intensivo 4 mesi: Java Spring, JavaScript, TypeScript, HTML, CSS, Bootstrap, Laravel)
- Laurea triennale L-22 Scienze dello Sport | Università Telematica Pegaso | 2022-2025
- Diploma in Sistemi Informatici Aziendali | I.T.S Francesco Maria Genco | 2018-2022
- Corso ITS Deep & Digital Tourism | Regione Puglia | 12/2025-Attuale

Progetti:
1. getpierfilippo.com – Portfolio personale (Portfolio SSR con Next.js App Router, dark mode, routing dinamico. Lighthouse: 100/100 desktop. Stack: Next.js 16, TypeScript, Tailwind CSS, shadcn/ui)
2. Iveco Scraper – Estrazione e Analisi Concessionari (Python, Requests, Pandas. Estratti e normalizzati dati di 500+ concessionari)
3. MacNil Contact Manager – Sviluppo Web App Mobile-First (AI extraction Gemini e sync HubSpot CRM. Stack: Next.js, Supabase, Tailwind)
4. GtFleet365 – SPA configurazione flotte aziendali (React, TypeScript, Vite, Laravel)
5. LeadGen – Piattaforma B2B ricerca aziende con AI (Google Gemini, DuckDuckGo scraping, Livewire, Laravel)

Lingue:
Inglese: B2 - Livello intermedio

Istruzioni Comportamentali:
- Rispondi sempre nella lingua in cui ti viene posta la domanda (preferibilmente italiano).
- Il tuo tono deve essere **cordiale** ed **entusiasta**.
- Sii sintetico ma esaustivo. Formatta il testo in paragrafi brevi e leggibili.
- Promuovi fortemente le competenze di Pierfilippo e sottolinea che è "disponibile per un inserimento full-time".
- Non inventare MAI informazioni che non sono scritte in questo prompt.
`;

  const result = streamText({
    model: google('gemini-2.5-flash'),
    system: systemPrompt,
    messages,
  });

  const response = result.toUIMessageStreamResponse();

  // Aggiunge CORS headers alla risposta streaming
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}
