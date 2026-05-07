'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WebhubLink } from '@/components/legal/WebhubLink';

/**
 * Footer — Phase 1 compliance-final.
 * Brand line: "Independent Canadian insurance education." (site-wide).
 * Operated by Webhub4u Inc.; KLC Group Canada Inc. handles life insurance
 * referrals today via the LLQP partnership; P&C planned, once KLC Group
 * completes RIBO registration.
 */
const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Learn',
    links: [
      { label: 'Auto insurance', href: '/auto-insurance' },
      { label: 'Home insurance', href: '/home-insurance' },
      { label: 'Life insurance', href: '/life-insurance' },
      { label: 'Business insurance', href: '/business-insurance' },
      { label: 'Travel insurance', href: '/travel-insurance' },
      { label: 'All guides', href: '/learn' },
    ],
  },
  {
    title: 'Tools',
    links: [
      { label: 'Launch list', href: '/coming-soon' },
      { label: 'Glossary', href: '/glossary' },
      { label: 'Article archive', href: '/blog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: "Whatâs coming", href: '/whats-coming' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Legal & Disclosures', href: '/legal' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Affiliate disclosure', href: '/credit-cards/methodology' },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/studio')) return null;
  return (
    <footer
      style={{
        background: '#0a0f16',
        padding: '56px 32px 28px',
        borderTop: '1px solid #1e2d3d',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(260px, 1.6fr) repeat(4, minmax(150px, 1fr))',
            gap: 40,
            marginBottom: 40,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 900,
                fontSize: 22,
                color: '#0A7E8C',
                marginBottom: 12,
              }}
            >
              TopRates<span style={{ color: 'rgba(255,255,255,0.5)' }}>.ca</span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-sans), -apple-system, sans-serif",
                fontSize: 11,
                letterSpacing: 1.5,
                color: '#B8960C',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              INDEPENDENT CANADIAN INSURANCE EDUCATION
            </div>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 18,
                fontWeight: 700,
                color: 'rgba(255,255,255,0.85)',
                margin: '0 0 16px',
                lineHeight: 1.3,
                maxWidth: 380,
              }}
            >
              Independent Canadian insurance education.
            </p>
            <p
              style={{
                fontSize: 12,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.65,
                margin: 0,
                maxWidth: 380,
                fontStyle: 'italic',
              }}
            >
              TopRates.ca is operated by <WebhubLink />, a Canadian technology company.
              Webhub4u Inc. is not a licensed insurance broker, mortgage broker, credit advisor,
              or investment advisor. Insurance inquiries received through TopRates.ca are
              referred to KLC Group Canada Inc., an independent Ontario-based life insurance
              advisory firm licensed under FSRA. KLC Group&rsquo;s LLQP-licensed advisors provide
              quote, advisory, and policy-placement services for life insurance, accident &amp;
              sickness coverage, and insurance-based investment products today. KLC Group Canada
              Inc. plans to register as a RIBO-licensed property and casualty brokerage; until
              that registration is granted, no property and casualty insurance is sold or quoted
              on TopRates.ca.{' '}
              <Link
                href="/legal"
                style={{ color: '#0fbdc9', textDecoration: 'underline', fontStyle: 'normal' }}
              >
                Full disclosure
              </Link>
              .
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: 1.5,
                  textTransform: 'uppercase',
                  marginBottom: 16,
                }}
              >
                {col.title}
              </div>
              {col.links.map((l) => (
                <div key={l.label} style={{ marginBottom: 10 }}>
                  <Link
                    href={l.href}
                    style={{
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.32)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0A7E8C')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.32)')}
                  >
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: 22,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div style={{ maxWidth: 720 }}>
            <p
              style={{
                fontSize: 12,
                color: 'rgba(255,255,255,0.32)',
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              © 2026 TopRates.ca, a brand of <WebhubLink />. All rights reserved.
            </p>
          </div>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.18)' }}>
            Made in Canada 🇨🇦
          </span>
        </div>
      </div>
    </footer>
  );
}
