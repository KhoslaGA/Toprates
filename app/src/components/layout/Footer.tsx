'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Footer — ported from design/mockups/toprates-homepage.jsx (lines 941-975)
 */
const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Insurance',
    links: [
      { label: 'Car Insurance Ontario', href: '/auto-insurance' },
      { label: 'Home Insurance Ontario', href: '/home-insurance' },
      { label: 'Business Insurance', href: '/business-insurance' },
      { label: 'Travel Insurance', href: '/travel-insurance' },
      { label: 'Compare All Rates', href: '/get-quotes' },
    ],
  },
  {
    title: 'Financial',
    links: [
      { label: 'Mortgage Rates', href: '/mortgages' },
      { label: 'Credit Cards', href: '/credit-cards' },
      { label: 'Cashback Cards', href: '/credit-cards' },
      { label: 'Travel Rewards Cards', href: '/credit-cards' },
      { label: 'No-Fee Cards', href: '/credit-cards' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Guides & Articles', href: '/blog' },
      { label: '2026 Reform Guide', href: '/blog' },
      { label: 'Coverage Calculator', href: '/blog' },
      { label: 'Self-Assessment Tool', href: '/blog' },
      { label: 'About TopRates.ca', href: '/about' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Accessibility', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
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
        padding: '48px 32px 32px',
        borderTop: '1px solid #1e2d3d',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(220px, 1.6fr) repeat(4, minmax(150px, 1fr))',
            gap: 40,
            marginBottom: 40,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Outfit'",
                fontWeight: 900,
                fontSize: 22,
                color: '#0A7E8C',
                marginBottom: 12,
              }}
            >
              TopRates<span style={{ color: 'rgba(255,255,255,0.5)' }}>.ca</span>
            </div>
            <p
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.35)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Independent insurance education platform for Canadians.
              Operated by Webhub4u Inc. Comparison engine launching summer 2027.
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
                      color: 'rgba(255,255,255,0.3)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0A7E8C')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
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
            paddingTop: 20,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
            © 2026 TopRates.ca, a brand of Webhub4u Inc. Education today · Quotes summer 2027 — not yet a registered insurance broker.
          </span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.15)' }}>
            Made in Canada 🇨🇦
          </span>
        </div>
      </div>
    </footer>
  );
}
