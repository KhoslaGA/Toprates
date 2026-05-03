import Link from 'next/link';
import { colors, fonts } from '@/styles/tokens';

/**
 * Vertical-specific in-page disclaimer block (Tier 3 of the disclaimer system).
 *
 * Usage:
 *   <DisclaimerBlock vertical="life" />     // /learn/life/* pages + life articles
 *   <DisclaimerBlock vertical="pc" />       // auto, home, business, travel
 *   <DisclaimerBlock vertical="mortgage" /> // /learn/mortgage/* + mortgage articles
 *   <DisclaimerBlock vertical="cards" />    // /credit-cards/* — appears ABOVE THE FOLD
 *
 * The "cards" variant has a distinct styling (amber callout, full-width band)
 * because affiliate disclosure has the strictest visibility requirement
 * (Competition Bureau 2024 Influencer Marketing Guidance + audit Task 5a).
 *
 * Each text below is true and specific to the vertical:
 *   - life:     true today (KLC Group LLQP advisors review life content)
 *   - pc:       true today (Webhub4u Inc. is fintech, not a broker; KLC Group P&C launches summer 2027)
 *   - mortgage: true today (no MBLAA registration, no mortgage broker activity)
 *   - cards:    true today (affiliate-disclosed, methodology-driven)
 */

export type Vertical = 'life' | 'pc' | 'mortgage' | 'cards';

const TEXT: Record<Exclude<Vertical, 'cards'>, string> = {
  life:
    'Reviewed by LLQP-licensed advisors at KLC Group Canada Inc., an independent Canadian insurance brokerage, in partnership with TopRates.ca. Educational content. For personal recommendations specific to your situation, consult a licensed life insurance advisor.',
  pc:
    'Educational content only. TopRates.ca is operated by Webhub4u Inc. and is not currently a registered insurance broker. For personal advice on your specific situation, consult a licensed insurance broker. Quote comparison and brokerage services launch summer 2027.',
  mortgage:
    'Educational content only. TopRates.ca is not a licensed mortgage broker under the Mortgage Brokerages, Lenders and Administrators Act, 2006 (MBLAA). For personal mortgage advice, consult a licensed mortgage agent or broker.',
};

export function DisclaimerBlock({ vertical }: { vertical: Vertical }) {
  if (vertical === 'cards') {
    return (
      <section
        style={{
          background: '#fef3c7',
          borderTop: '2px solid #fcd34d',
          borderBottom: '2px solid #fcd34d',
          padding: '16px 24px',
        }}
      >
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <span
              style={{
                color: '#92400e',
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 14,
                flexShrink: 0,
              }}
            >
              ⚡ Affiliate disclosure
            </span>
            <p
              style={{
                fontFamily: fonts.heading,
                fontSize: 14,
                color: '#1f2937',
                margin: 0,
                lineHeight: 1.55,
              }}
            >
              This page contains affiliate links. We may receive compensation if you apply for and
              are approved for a card through our links. Compensation does not influence our
              reviews or rankings — see our{' '}
              <Link
                href="/credit-cards/methodology"
                style={{ color: '#92400e', textDecoration: 'underline', fontWeight: 700 }}
              >
                methodology
              </Link>{' '}
              for how we evaluate cards.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div
      style={{
        borderLeft: `4px solid ${colors.teal}80`,
        background: `${colors.cream}80`,
        padding: '16px 20px',
        margin: '24px 0',
        borderRadius: '0 8px 8px 0',
      }}
    >
      <p
        style={{
          fontFamily: fonts.heading,
          fontSize: 14,
          color: colors.muted,
          margin: 0,
          fontStyle: 'italic',
          lineHeight: 1.6,
        }}
      >
        {TEXT[vertical]}
      </p>
    </div>
  );
}

export default DisclaimerBlock;
