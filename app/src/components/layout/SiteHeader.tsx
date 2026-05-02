'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '../brand/Icon';
import { HorizontalLockup } from '../brand/Logo';
import { colors, fonts } from '@/styles/tokens';

/**
 * Education-first site header.
 *
 * Replaces the v1 MegaNav. Strategy doc dictates 5 primary nav items
 * (Learn / Credit cards / Glossary / What's coming / About) and a single
 * Subscribe CTA — no "Sign in" or "Get my rate" buttons.
 *
 * Hidden on /studio (Sanity Studio renders standalone).
 */
const NAV: { label: string; href: string }[] = [
  { label: 'Learn', href: '/learn' },
  { label: 'Credit cards', href: '/credit-cards' },
  { label: 'Glossary', href: '/glossary' },
  { label: "What's coming", href: '/whats-coming' },
  { label: 'About', href: '/about' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (pathname?.startsWith('/studio')) return null;

  return (
    <nav
      style={{
        background: colors.paper,
        borderBottom: `1px solid ${colors.borderSoft}`,
        position: 'sticky',
        top: 0,
        zIndex: 60,
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px' }}>
        {/* Desktop */}
        <div className="meganav-desktop">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 0',
              gap: 32,
            }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <HorizontalLockup height={40} outline />
            </Link>

            <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
              {NAV.map((item) => {
                const active = pathname === item.href || pathname?.startsWith(item.href + '/');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      fontFamily: fonts.heading,
                      fontWeight: 700,
                      fontSize: 14,
                      color: active ? colors.teal : colors.navy,
                      textDecoration: 'none',
                      letterSpacing: '-0.1px',
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <Link
              href="/#newsletter"
              style={{
                background: colors.teal,
                color: '#fff',
                borderRadius: 999,
                padding: '10px 18px',
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 13,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                whiteSpace: 'nowrap',
              }}
            >
              Subscribe <Icon name="arrow" size={12} color="#fff" />
            </Link>
          </div>
        </div>

        {/* Mobile */}
        <div className="meganav-mobile">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 0',
            }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <HorizontalLockup height={32} outline />
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'transparent',
                border: `1px solid ${colors.borderSoft}`,
                width: 38,
                height: 38,
                borderRadius: 10,
                cursor: 'pointer',
                color: colors.navy,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon name={mobileOpen ? 'arrowDown' : 'menu'} size={18} color={colors.navy} />
            </button>
          </div>

          {mobileOpen && (
            <div
              style={{
                position: 'fixed',
                top: 60,
                left: 0,
                right: 0,
                bottom: 0,
                background: colors.paper,
                zIndex: 60,
                overflowY: 'auto',
                padding: 24,
                borderTop: `1px solid ${colors.borderSoft}`,
              }}
            >
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block',
                    padding: '14px 0',
                    borderBottom: `1px solid ${colors.borderFaint}`,
                    fontFamily: fonts.heading,
                    fontWeight: 800,
                    fontSize: 18,
                    color: colors.navy,
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#newsletter"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  marginTop: 24,
                  padding: '14px 24px',
                  background: colors.teal,
                  color: '#fff',
                  borderRadius: 999,
                  fontFamily: fonts.heading,
                  fontWeight: 800,
                  fontSize: 15,
                  textAlign: 'center',
                  textDecoration: 'none',
                }}
              >
                Subscribe →
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
