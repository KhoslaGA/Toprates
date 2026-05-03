'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '../brand/Icon';
import { HorizontalLockup } from '../brand/Logo';
import { colors, fonts } from '@/styles/tokens';
import { NAV_DATA, type NavCategory } from './navData';

const ACCENT: Record<'gold' | 'green' | 'teal', string> = {
  gold: colors.gold,
  green: colors.green,
  teal: colors.teal,
};

function StatusPill({ tone, children }: { tone: 'live' | 'soon'; children: React.ReactNode }) {
  const palette =
    tone === 'live'
      ? { bg: 'rgba(13,128,80,0.12)', fg: colors.green }
      : { bg: 'rgba(184,150,12,0.15)', fg: colors.gold };
  return (
    <span
      style={{
        fontFamily: fonts.mono,
        fontSize: 8,
        fontWeight: 800,
        letterSpacing: 1,
        padding: '2px 5px',
        borderRadius: 3,
        background: palette.bg,
        color: palette.fg,
      }}
    >
      {children}
    </span>
  );
}

function DesktopNav({
  open,
  setOpen,
}: {
  open: string | null;
  setOpen: (id: string | null) => void;
}) {
  return (
    <div className="meganav-desktop" onMouseLeave={() => setOpen(null)}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 0',
          gap: 24,
        }}
      >
        <Link href="/" style={{ textDecoration: 'none' }}>
          <HorizontalLockup height={40} outline accessory="hardhat" />
        </Link>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button
            aria-label="Search"
            style={{
              background: 'transparent',
              border: `1px solid ${colors.borderSoft}`,
              width: 36,
              height: 36,
              borderRadius: 10,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.navy,
            }}
          >
            <Icon name="search" size={15} color={colors.navy} />
          </button>
          <Link
            href="/coming-soon"
            style={{
              background: 'transparent',
              color: colors.navy,
              border: `1px solid ${colors.borderSoft}`,
              borderRadius: 999,
              padding: '8px 14px',
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 12,
              textDecoration: 'none',
            }}
          >
            Sign in
          </Link>
          <Link
            href="/contact"
            style={{
              background: colors.teal,
              color: '#fff',
              borderRadius: 999,
              padding: '8px 14px',
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 12,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            Talk to us <Icon name="arrow" size={12} color="#fff" />
          </Link>
        </div>
      </div>

      <div style={{ display: 'flex', borderTop: `1px solid ${colors.borderFaint}`, paddingTop: 2 }}>
        {NAV_DATA.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setOpen(item.id)}
            style={{ position: 'relative', flex: 1 }}
          >
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                width: '100%',
                padding: '14px 12px',
                background: open === item.id ? 'rgba(10,126,140,0.06)' : 'transparent',
                color: open === item.id ? colors.teal : colors.navy,
                border: 'none',
                cursor: 'pointer',
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: '-0.1px',
                borderBottom: open === item.id ? `2px solid ${colors.teal}` : '2px solid transparent',
                marginBottom: -1,
              }}
            >
              {item.label}
              <Icon name="arrowDown" size={10} color="currentColor" strokeWidth={2.2} />
            </button>
          </div>
        ))}
      </div>

      {NAV_DATA.map((item) => (
        <DropdownPanel key={item.id} item={item} active={open === item.id} />
      ))}
    </div>
  );
}

function DropdownPanel({ item, active }: { item: NavCategory; active: boolean }) {
  const accent = ACCENT[item.promo.accent];
  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        background: colors.paper,
        borderTop: `2px solid ${colors.teal}`,
        borderBottom: `1px solid ${colors.borderSoft}`,
        boxShadow: '0 30px 60px -20px rgba(27,42,74,0.12)',
        opacity: active ? 1 : 0,
        transform: active ? 'translateY(0)' : 'translateY(-6px)',
        pointerEvents: active ? 'auto' : 'none',
        transition: 'opacity 0.18s ease, transform 0.18s ease',
        zIndex: 50,
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '3fr 1fr',
            gap: 32,
            padding: '28px 0 24px',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {item.sections.map((sec) => (
              <div key={sec.title}>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 10,
                    letterSpacing: 1.5,
                    color: colors.teal,
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    marginBottom: 12,
                    paddingBottom: 10,
                    borderBottom: `1px solid ${colors.borderFaint}`,
                  }}
                >
                  {sec.title}
                </div>
                {sec.items.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.href}
                    style={{
                      display: 'block',
                      textDecoration: 'none',
                      padding: '8px 10px',
                      margin: '0 -10px',
                      borderRadius: 8,
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = colors.cream)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                      <span
                        style={{
                          fontFamily: fonts.heading,
                          fontSize: 13,
                          fontWeight: 700,
                          color: colors.navy,
                        }}
                      >
                        {sub.name}
                      </span>
                      {sub.live && <StatusPill tone="live">LIVE</StatusPill>}
                      {sub.soon && <StatusPill tone="soon">SOON</StatusPill>}
                    </div>
                    <div
                      style={{
                        fontFamily: fonts.heading,
                        fontSize: 12,
                        color: colors.muted,
                      }}
                    >
                      {sub.desc}
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div
            style={{
              background: colors.cream,
              borderRadius: 14,
              padding: 20,
              border: `1px solid ${colors.borderSoft}`,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: -30,
                right: -30,
                width: 100,
                height: 100,
                borderRadius: '50%',
                background: `${accent}18`,
              }}
            />
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 9,
                  fontWeight: 800,
                  color: accent,
                  letterSpacing: 1.5,
                  marginBottom: 8,
                }}
              >
                {item.promo.tag}
              </div>
              <div
                style={{
                  fontFamily: fonts.heading,
                  fontSize: 15,
                  fontWeight: 900,
                  color: colors.navy,
                  marginBottom: 8,
                  letterSpacing: '-0.3px',
                  lineHeight: 1.25,
                }}
              >
                {item.promo.title}
              </div>
              <p
                style={{
                  fontFamily: fonts.heading,
                  fontSize: 12,
                  color: colors.muted,
                  lineHeight: 1.5,
                  margin: '0 0 14px',
                }}
              >
                {item.promo.desc}
              </p>
              <Link
                href={item.promo.href}
                style={{
                  fontFamily: fonts.heading,
                  fontSize: 12,
                  fontWeight: 800,
                  color: accent,
                  textDecoration: 'none',
                }}
              >
                {item.promo.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileNav({ open, setOpen }: { open: boolean; setOpen: (b: boolean) => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
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
          <HorizontalLockup height={32} outline accessory="hardhat" />
        </Link>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
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
          <Icon name={open ? 'arrowDown' : 'menu'} size={18} color={colors.navy} />
        </button>
      </div>

      {open && (
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
          {NAV_DATA.map((item) => {
            const isOpen = expanded === item.id;
            return (
              <div key={item.id} style={{ borderBottom: `1px solid ${colors.borderFaint}` }}>
                <button
                  onClick={() => setExpanded(isOpen ? null : item.id)}
                  style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '14px 0',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: fonts.heading,
                    fontWeight: 800,
                    fontSize: 16,
                    color: colors.navy,
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    {item.label}
                  </span>
                  <Icon
                    name="arrowDown"
                    size={14}
                    color={colors.navy}
                    strokeWidth={2.2}
                  />
                </button>
                {isOpen && (
                  <div style={{ paddingBottom: 16 }}>
                    {item.sections.map((sec) => (
                      <div key={sec.title} style={{ marginBottom: 18 }}>
                        <div
                          style={{
                            fontFamily: fonts.mono,
                            fontSize: 10,
                            letterSpacing: 1.5,
                            color: colors.teal,
                            textTransform: 'uppercase',
                            fontWeight: 700,
                            marginBottom: 8,
                          }}
                        >
                          {sec.title}
                        </div>
                        {sec.items.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            style={{
                              display: 'block',
                              padding: '8px 0',
                              textDecoration: 'none',
                              color: colors.navy,
                              fontFamily: fonts.heading,
                              fontSize: 14,
                              fontWeight: 600,
                            }}
                          >
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                              {sub.name}
                              {sub.live && <StatusPill tone="live">LIVE</StatusPill>}
                              {sub.soon && <StatusPill tone="soon">SOON</StatusPill>}
                            </span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              style={{
                background: colors.teal,
                color: '#fff',
                borderRadius: 999,
                padding: '12px 20px',
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 14,
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              Talk to us
            </Link>
            <Link
              href="/coming-soon"
              onClick={() => setOpen(false)}
              style={{
                background: 'transparent',
                color: colors.navy,
                border: `1px solid ${colors.borderSoft}`,
                borderRadius: 999,
                padding: '12px 20px',
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 14,
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MegaNav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Hide nav on /studio
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
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
        <DesktopNav open={open} setOpen={setOpen} />
        <MobileNav open={mobileOpen} setOpen={setMobileOpen} />
      </div>
    </nav>
  );
}
