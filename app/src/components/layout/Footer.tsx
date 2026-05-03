'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Footer — strategy-doc compliant.
 * Brand line "Education today. Quotes summer 2027." appears prominently.
 * Operated by Webhub4u Inc. KLC Group brokerage launches summer 2027.
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
      { label: 'Newsletter', href: '/#newsletter' },
      { label: 'Glossary', href: '/glossary' },
      { label: 'Article archive', href: '/blog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: "What's coming summer 2027", href: '/whats-coming' },
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
                fontFamily: "'Inter Tight'",
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
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: 1.5,
                color: '#B8960C',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              Education today · Quotes summer 2027
            </div>
            <p
              style={{
                fontSize: 12,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.65,
                margin: 0,
                maxWidth: 380,
              }}
            >
              TopRates.ca is a brand of Webhub4u Inc. Webhub4u Inc. is a technology company; it
              is not a licensed insurance broker, mortgage broker, credit advisor, or investment
              advisor. Insurance distribution is provided through KLC Group Canada Inc., a
              licensed insurance advisory firm. Editorial content on this site is for general
              information only and does not constitute personalized financial, insurance,
              mortgage, credit, or investment advice.{' '}
              <Link
                href="/legal"
                style={{ color: '#0fbdc9', textDecoration: 'underline' }}
              >
                Read our full disclosure
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
              © 2026 TopRates.ca, a brand of Webhub4u Inc. All rights reserved.
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
