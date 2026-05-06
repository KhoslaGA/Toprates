import type { Metadata } from 'next';
import WaitlistForm from './_client/WaitlistForm';
import { WebhubLink } from '@/components/legal/WebhubLink';

/**
 * About page — Webhub4u Inc. + KLC Group Canada Inc. corporate story.
 *
 * Strategy doc rules:
 *   - Entity-named only (NO individual names anywhere)
 *   - Partnership scope is LLQP / life insurance review today
 *   - P&C scope expands summer 2027 once KLC Group is RIBO-registered
 */

const TEAL = '#0A7E8C';
const NAVY = '#1B2A4A';

export const metadata: Metadata = {
  title: 'About — TopRates.ca · Insurance, in plain English',
  description:
    'TopRates.ca is operated by Webhub4u Inc. Life insurance content is reviewed by LLQP-licensed advisors at KLC Group Canada Inc., an independent Canadian insurance brokerage. Full brokerage services launch summer 2027.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: '64px 32px 56px', background: '#fbf8f0', borderBottom: '1px solid #f0f2f5' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: TEAL,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              marginBottom: 10,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            INDEPENDENT CANADIAN INSURANCE EDUCATION
          </div>
          <h1
            style={{
              fontFamily: "'Inter Tight'",
              fontWeight: 900,
              fontSize: 44,
              color: NAVY,
              margin: '0 0 16px',
              lineHeight: 1.1,
              letterSpacing: '-1.2px',
            }}
          >
            Insurance, in plain English.
          </h1>
          <p
            style={{
              fontFamily: "'Inter Tight', Georgia, serif",
              fontSize: 19,
              color: '#6b7b8d',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Independent Canadian insurance education. Life insurance content reviewed by
            LLQP-licensed advisors at KLC Group Canada Inc., an independent Canadian insurance
            brokerage. Quote comparison and full brokerage services launch summer 2027.
          </p>
        </div>
      </section>

      {/* WHAT WE ARE */}
      <section style={{ padding: '56px 32px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Inter Tight'", fontWeight: 800, fontSize: 26, color: NAVY, margin: '0 0 16px' }}>
            What we are
          </h2>
          <div style={{ fontFamily: "'Inter Tight', Georgia, serif", fontSize: 17, lineHeight: 1.8, color: '#374151' }}>
            <p>
              TopRates.ca is operated by <strong><WebhubLink /></strong>, a Canadian financial
              technology company. We publish plain-English Canadian insurance education — auto,
              home, life, business, travel, mortgage — and we review credit cards with full
              affiliate disclosure.
            </p>
          </div>
        </div>
      </section>

      {/* THE PARTNERSHIP */}
      <section style={{ padding: '56px 32px', background: '#f8fafb' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Inter Tight'", fontWeight: 800, fontSize: 26, color: NAVY, margin: '0 0 16px' }}>
            The partnership
          </h2>
          <div style={{ fontFamily: "'Inter Tight', Georgia, serif", fontSize: 17, lineHeight: 1.8, color: '#374151' }}>
            <p>
              For life insurance content, TopRates.ca partners with{' '}
              <strong>KLC Group Canada Inc.</strong>, an independent Canadian insurance brokerage.
              KLC Group has LLQP-licensed advisors on staff who review our life insurance content
              for accuracy and regulatory compliance.
            </p>
            <p>
              <WebhubLink /> and KLC Group Canada Inc. are independent companies — separate
              ownership, separate management, with a partnership agreement scoped specifically to
              LLQP-related content review. The scope today is life insurance only. It does not
              extend to property &amp; casualty (auto, home, business, travel) until summer 2027,
              and it does not cover mortgage (separate MBLAA regulatory regime) or credit cards
              (banking, not insurance).
            </p>
          </div>
        </div>
      </section>

      {/* SUMMER 2027 */}
      <section style={{ padding: '56px 32px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: TEAL,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              marginBottom: 10,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Summer 2027
          </div>
          <h2 style={{ fontFamily: "'Inter Tight'", fontWeight: 800, fontSize: 26, color: NAVY, margin: '0 0 16px' }}>
            What we&rsquo;re building
          </h2>
          <div style={{ fontFamily: "'Inter Tight', Georgia, serif", fontSize: 17, lineHeight: 1.8, color: '#374151' }}>
            <p>
              Summer 2027, KLC Group Canada Inc. completes registration with the Registered
              Insurance Brokers of Ontario (RIBO) for property &amp; casualty brokerage. At that
              point, the partnership expands to cover all insurance verticals, and TopRates.ca
              launches a quote comparison engine connected to KLC Group&rsquo;s brokerage
              operations.
            </p>
            <p>
              Until then, TopRates.ca operates as an educational platform only for P&amp;C
              content. The forward-looking date is on every page; the work it represents is
              already underway.
            </p>
          </div>
        </div>
      </section>

      {/* WHY THIS STRUCTURE */}
      <section style={{ padding: '56px 32px', background: '#f8fafb' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Inter Tight'", fontWeight: 800, fontSize: 26, color: NAVY, margin: '0 0 16px' }}>
            Why this structure
          </h2>
          <div style={{ fontFamily: "'Inter Tight', Georgia, serif", fontSize: 17, lineHeight: 1.8, color: '#374151' }}>
            <p>
              Most Canadian insurance comparison sites have a quote engine attached to their
              content — the content exists to feed the funnel. We took a different approach:
              build the educational layer first, properly, with licensed advisor review where
              required. The brokerage launches when it&rsquo;s ready, not before.
            </p>
            <p>
              The educational layer comes first because that&rsquo;s the foundation a good
              comparison engine rests on.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN EXPECT */}
      <section style={{ padding: '56px 32px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Inter Tight'", fontWeight: 800, fontSize: 26, color: NAVY, margin: '0 0 20px' }}>
            What you can expect
          </h2>
          <ul
            style={{
              fontFamily: "'Inter Tight', Georgia, serif",
              fontSize: 16,
              lineHeight: 1.85,
              color: '#374151',
              paddingLeft: 22,
              margin: 0,
            }}
          >
            <li>Plain-English guides written by people who actually read the policy</li>
            <li>LLQP-reviewed accuracy on life insurance content (via KLC Group Canada Inc.)</li>
            <li>Affiliate disclosure on credit cards, always above the fold</li>
            <li>No fabricated savings claims, no countdown-timer urgency, no upsell language</li>
            <li>A summer 2027 brokerage launch — and we&rsquo;ll tell you about it then, not pressure you now</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: '48px 32px', background: '#f8fafb', borderTop: '1px solid #e8ecf0' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Inter Tight'", fontWeight: 700, fontSize: 22, color: NAVY, margin: '0 0 8px' }}>
            Get in touch
          </h2>
          <p style={{ fontSize: 15, color: '#6b7b8d', margin: '0 0 20px' }}>
            All inquiries — privacy, general, editorial: toprates56@gmail.com
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ padding: '56px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Inter Tight'", fontWeight: 800, fontSize: 26, color: NAVY, margin: '0 0 10px' }}>
            Get the next guide.
          </h2>
          <p style={{ fontSize: 15, color: '#6b7b8d', margin: '0 0 24px' }}>
            Be there when quotes go live in summer 2027.
          </p>
          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
