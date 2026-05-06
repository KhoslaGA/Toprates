import type { Vertical as DisclaimerVertical } from '@/components/disclaimers/DisclaimerBlock';

/**
 * Site-wide vertical taxonomy for routing, layouts, disclaimers, and bylines.
 *
 * The DisclaimerBlock component owns the canonical 4-vertical type
 * (life / pc / mortgage / cards). This file extends that with 'general' for
 * pages that don't belong to a single vertical (homepage, about, glossary,
 * etc.) and provides path-based detection.
 *
 * Travel insurance: classified as 'life' here, not 'pc'. KLC Group Canada
 * Inc.'s LLQP / accident & sickness licensing covers travel medical and
 * trip coverage when the contract structure brings it under accident &
 * sickness scope. This matches the Tier 1 framing on /travel-insurance
 * today (LLQP-licensed referral, talk to a licensed advisor).
 */
export type Vertical = DisclaimerVertical | 'general';

/**
 * Determine the active vertical from a URL pathname.
 *
 * Supports both URL structures so a future migration from
 * /life-insurance, /auto-insurance, etc. to /learn/life/, /learn/auto/,
 * etc. is a no-op for callers of this helper.
 */
export function getVerticalFromPath(pathname: string): Vertical {
  // Life vertical — KLC Group LLQP-licensed referral, available today
  if (pathname.startsWith('/learn/life')) return 'life';
  if (pathname.startsWith('/life-insurance')) return 'life';
  if (pathname.startsWith('/health-insurance')) return 'life'; // critical illness, disability, A&S — LLQP scope
  if (pathname.startsWith('/travel-insurance')) return 'life'; // travel medical — A&S scope
  if (pathname.startsWith('/learn/travel')) return 'life';

  // P&C vertical — RIBO-regulated, KLC Group RIBO registration pending
  if (pathname.startsWith('/learn/auto')) return 'pc';
  if (pathname.startsWith('/auto-insurance')) return 'pc';
  if (pathname.startsWith('/learn/home')) return 'pc';
  if (pathname.startsWith('/home-insurance')) return 'pc';
  if (pathname.startsWith('/learn/business')) return 'pc';
  if (pathname.startsWith('/business-insurance')) return 'pc';

  // Mortgage vertical — MBLAA-regulated, no licensing today
  if (pathname.startsWith('/learn/mortgage')) return 'mortgage';
  if (pathname.startsWith('/mortgages')) return 'mortgage';

  // Cards vertical — affiliate disclosure, no insurance scope
  if (pathname.startsWith('/credit-cards')) return 'cards';

  return 'general';
}

/**
 * Returns true if active selling / regulated activity is permitted on this
 * path. Used to decide whether to render the LifeLeadForm, the active-
 * brokerage variant of the disclaimer block, the /life/ eyebrow, etc.
 *
 * Currently true ONLY for /life/ paths and adjacent A&S verticals
 * (/health-insurance, /travel-insurance) — KLC Group's LLQP licensing
 * covers life insurance and accident & sickness products today. When KLC
 * Group obtains RIBO registration, expand this to /auto-insurance,
 * /home-insurance, /business-insurance.
 */
export function isActiveCommercePath(pathname: string): boolean {
  return getVerticalFromPath(pathname) === 'life';
}
