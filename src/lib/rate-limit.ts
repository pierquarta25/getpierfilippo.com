export type RateLimitInfo = {
  count: number;
  resetTime: number;
};

// Global map to hold rate limits in memory
const ipMap = new Map<string, RateLimitInfo>();

export function rateLimit(limit: number = 10, windowMs: number = 60000) {
  return function check(ip: string): boolean {
    const now = Date.now();
    const info = ipMap.get(ip);

    if (!info) {
      ipMap.set(ip, { count: 1, resetTime: now + windowMs });
      return true; // Allowed
    }

    // Reset se il tempo è passato
    if (now > info.resetTime) {
      ipMap.set(ip, { count: 1, resetTime: now + windowMs });
      return true; // Allowed
    }

    if (info.count >= limit) {
      return false; // Rate limited
    }

    info.count += 1;
    return true; // Allowed
  };
}
