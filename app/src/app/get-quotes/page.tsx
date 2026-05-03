import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/contact/ContactForm';
import { Bo } from '@/components/brand/Bo';
import { colors, fonts } from '@/styles/tokens';

export const metadata: Metadata = {
  title: 'Quote Comparison Launches Summer 2027 — TopRates.ca',
  description:
    'TopRates.ca quote comparison and brokerage launch summer 2027 alongside KLC Group Canada Inc.’s RIBO registration. Education today; talk to a licensed advisor or join the launch list.',
  alternates: { canonical: '/get-quotes' },
  robots: { index: false, follow: true },
};

export default function GetQuotesPage() {
  return (
    <>
      <section
        style={{
          background: `linear-gradient(135deg, ${colors.navy} 0%, #0f1e38 100%)`,
          padding: '64px 24px',
        }}
      >
        <div
          style={{
            maxWidth: 880,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: 32,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: '0 0 auto' }}>
            <Bo pose="clipboard" accessory="none" size={140} />
          </div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                letterSpacing: 2,
                color: colors.gold,
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: 10,
              }}
            >
              Education today · Quotes summer 2027
            </div>
            <h1
              style={{
                fontFamily: fonts.heading,
                fontWeight: 900,
                fontSize: 36,
                color: '#fff',
                margin: '0 0 14px',
                lineHeight: 1.15,
                letterSpacing: '-1px',
              }}
            >
              The quote engine isn&rsquo;t live yet.
            </h1>
            <p
              style={{
                fontFamily: fonts.heading,
                fontSize: 16,
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              TopRates.ca is operated by Webhub4u Inc., a Canadian financial technology company.
              Quote comparison and brokerage services launch summer 2027 alongside KLC Group
              Canada Inc.&rsquo;s RIBO registration. Until then, you have two options below.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: '#fbf8f0', padding: '64px 24px' }}>
        <div
          style={{
            maxWidth: 880,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 16,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: 14,
              padding: '24px 22px',
              border: `1px solid ${colors.borderSoft}`,
            }}
          >
            <h2
              style={{
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 18,
                color: colors.navy,
                margin: '0 0 8px',
                letterSpacing: '-0.4px',
              }}
            >
              Talk to a licensed advisor today
            </h2>
            <p
              style={{
                fontFamily: fonts.heading,
                fontSize: 14,
                color: colors.muted,
                lineHeight: 1.55,
                margin: '0 0 14px',
              }}
            >
              Life, critical illness, disability, and travel insurance content is reviewed by
              LLQP-licensed advisors at KLC Group Canada Inc. Send a note via the form below and
              we&rsquo;ll respond within one business day.
            </p>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                color: colors.teal,
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              Available now ↓
            </span>
          </div>
          <div
            style={{
              background: '#fff',
              borderRadius: 14,
              padding: '24px 22px',
              border: `1px solid ${colors.borderSoft}`,
            }}
          >
            <h2
              style={{
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 18,
                color: colors.navy,
                margin: '0 0 8px',
                letterSpacing: '-0.4px',
              }}
            >
              Read the education library
            </h2>
            <p
              style={{
                fontFamily: fonts.heading,
                fontSize: 14,
                color: colors.muted,
                lineHeight: 1.55,
                margin: '0 0 14px',
              }}
            >
              Plain-English coverage breakdowns across auto, home, life, business, travel, and
              mortgage. Updated as Canadian regulations change.
            </p>
            <Link
              href="/learn"
              style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                color: colors.teal,
                fontWeight: 700,
                letterSpacing: 1,
                textDecoration: 'none',
              }}
            >
              Browse /learn →
            </Link>
          </div>
          <div
            style={{
              background: '#fff',
              borderRadius: 14,
              padding: '24px 22px',
              border: `1px solid ${colors.borderSoft}`,
            }}
          >
            <h2
              style={{
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 18,
                color: colors.navy,
                margin: '0 0 8px',
                letterSpacing: '-0.4px',
              }}
            >
              See what&rsquo;s coming
            </h2>
            <p
              style={{
                fontFamily: fonts.heading,
                fontSize: 14,
                color: colors.muted,
                lineHeight: 1.55,
                margin: '0 0 14px',
              }}
            >
              The full timeline for the summer 2027 quote-comparison platform launch and the
              KLC Group Canada Inc. RIBO registration.
            </p>
            <Link
              href="/whats-coming"
              style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                color: colors.teal,
                fontWeight: 700,
                letterSpacing: 1,
                textDecoration: 'none',
              }}
            >
              Read the roadmap →
            </Link>
          </div>
        </div>

        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 900,
              fontSize: 26,
              color: colors.navy,
              margin: '0 0 8px',
              letterSpacing: '-0.6px',
            }}
          >
            Send us a note
          </h2>
          <p
            style={{
              fontFamily: fonts.heading,
              fontSize: 15,
              color: colors.muted,
              lineHeight: 1.55,
              margin: '0 0 24px',
            }}
          >
            Tell us what you&rsquo;re looking for. For insurance inquiries, your information may be
            shared with KLC Group Canada Inc. See our{' '}
            <Link href="/privacy" style={{ color: colors.teal }}>
              Privacy Policy
            </Link>
            .
          </p>
          <div
            style={{
              background: '#fff',
              borderRadius: 14,
              padding: '28px 24px',
              border: `1px solid ${colors.borderSoft}`,
            }}
          >
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
