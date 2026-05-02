/**
 * Feature flags for TopRates.ca
 *
 * The QUOTE_ENGINE flag gates the Track B quote-engine code. It MUST stay
 * false on production until KLC Group is registered with RIBO (target:
 * summer 2027). The build-time guard below throws if it's accidentally
 * enabled on Vercel production.
 *
 * Strategy doc: education today, quotes summer 2027.
 */

export const FEATURES = {
  /**
   * Quote engine — rate comparison + brokerage flow.
   * Production: must be false until KLC Group is RIBO-registered (summer 2027).
   * Preview / staging: may be true for internal testing only.
   */
  QUOTE_ENGINE: process.env.NEXT_PUBLIC_FEATURE_QUOTE_ENGINE === 'true',
} as const;

// Build-time guard: prevent the quote engine from leaking into production.
if (
  process.env.VERCEL_ENV === 'production' &&
  process.env.NEXT_PUBLIC_FEATURE_QUOTE_ENGINE === 'true'
) {
  throw new Error(
    'NEXT_PUBLIC_FEATURE_QUOTE_ENGINE must not be true on production. ' +
      'The quote engine is gated until KLC Group is RIBO-registered (summer 2027).',
  );
}
