export type RateLimitInfo = {
  count: number;
  resetTime: number;
};

// In-memory map — funziona su Node.js tradizionale.
// Su Vercel serverless ogni cold start azzera i contatori: usa Upstash Redis
// (https://upstash.com) per un rate limit persistente tra invocazioni.
const ipMap = new Map<string, RateLimitInfo>();

// Pulizia periodica per evitare memory leak su processi long-running
const CLEANUP_INTERVAL = 5 * 60 * 1000; // 5 minuti
let lastCleanup = Date.now();

function cleanupExpired(now: number) {
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;
  for (const [ip, info] of ipMap.entries()) {
    if (now > info.resetTime) ipMap.delete(ip);
  }
}

export function rateLimit(limit: number = 10, windowMs: number = 60000) {
  return function check(ip: string): boolean {
    const now = Date.now();
    cleanupExpired(now);

    const info = ipMap.get(ip);

    if (!info) {
      ipMap.set(ip, { count: 1, resetTime: now + windowMs });
      return true;
    }

    if (now > info.resetTime) {
      ipMap.set(ip, { count: 1, resetTime: now + windowMs });
      return true;
    }

    if (info.count >= limit) {
      return false;
    }

    info.count += 1;
    return true;
  };
}

// Rate limit persistente via Upstash Redis (REST API, nessuna dipendenza).
// Richiede UPSTASH_REDIS_REST_URL e UPSTASH_REDIS_REST_TOKEN; se mancano o
// Upstash non risponde, ripiega sul limiter in memoria.
export function distributedRateLimit(limit: number = 10, windowMs: number = 60000) {
  const fallback = rateLimit(limit, windowMs);
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  return async function check(ip: string): Promise<boolean> {
    if (!url || !token) return fallback(ip);

    try {
      const key = `ratelimit:chat:${ip}`;
      const res = await fetch(`${url}/pipeline`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify([
          ['INCR', key],
          ['EXPIRE', key, String(Math.ceil(windowMs / 1000)), 'NX'],
        ]),
        signal: AbortSignal.timeout(2000),
      });
      if (!res.ok) return fallback(ip);
      const [incr] = (await res.json()) as { result?: number }[];
      if (typeof incr?.result !== 'number') return fallback(ip);
      return incr.result <= limit;
    } catch {
      return fallback(ip);
    }
  };
}
