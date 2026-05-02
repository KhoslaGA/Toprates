'use client';

import { useState } from 'react';
import { Icon, type IconName } from '../brand/Icon';
import { colors, fonts } from '@/styles/tokens';

type TabId = 'auto' | 'home' | 'cards' | 'life' | 'travel' | 'mortgage';

interface Tab {
  id: TabId;
  label: string;
  icon: IconName;
  status: 'live' | 'soon';
  when?: string;
}

const TABS: Tab[] = [
  { id: 'auto', label: 'Car', icon: 'car', status: 'live' },
  { id: 'home', label: 'Home', icon: 'home', status: 'live' },
  { id: 'cards', label: 'Credit Cards', icon: 'card', status: 'live' },
  { id: 'life', label: 'Life', icon: 'leaf', status: 'soon', when: '2028' },
  { id: 'travel', label: 'Travel', icon: 'plane', status: 'soon', when: '2028' },
  { id: 'mortgage', label: 'Mortgage', icon: 'piggy', status: 'soon', when: '2029' },
];

function Btn({
  variant = 'primary',
  size = 'md',
  children,
  style,
  ...rest
}: {
  variant?: 'primary' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  style?: React.CSSProperties;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const padY = size === 'lg' ? 14 : size === 'sm' ? 8 : 11;
  const padX = size === 'lg' ? 26 : size === 'sm' ? 14 : 20;
  const fs = size === 'lg' ? 15 : size === 'sm' ? 12 : 13;
  const variants: Record<string, React.CSSProperties> = {
    primary: { background: colors.teal, color: '#fff' },
    ghost: { background: 'transparent', color: colors.navy, border: `1px solid ${colors.borderSoft}` },
    dark: { background: colors.navy, color: '#fff' },
  };
  return (
    <button
      {...rest}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: `${padY}px ${padX}px`,
        borderRadius: 999,
        fontFamily: fonts.heading,
        fontWeight: 800,
        fontSize: fs,
        letterSpacing: '-0.2px',
        cursor: 'pointer',
        border: '1px solid transparent',
        whiteSpace: 'nowrap',
        ...variants[variant],
        ...style,
      }}
    >
      {children}
    </button>
  );
}

function SavingsCoin({
  label,
  value,
  sub,
  tone = 'teal',
}: {
  label: string;
  value: string;
  sub?: string;
  tone?: 'teal' | 'gold';
}) {
  const bg = tone === 'gold' ? 'rgba(184,150,12,0.1)' : 'rgba(10,126,140,0.1)';
  const c = tone === 'gold' ? colors.gold : colors.teal;
  return (
    <div
      style={{
        background: bg,
        borderRadius: 14,
        padding: '18px 22px',
        textAlign: 'center',
        flexShrink: 0,
        minWidth: 140,
      }}
    >
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 9,
          fontWeight: 800,
          color: c,
          letterSpacing: 1.5,
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: fonts.heading,
          fontWeight: 900,
          fontSize: 32,
          color: c,
          letterSpacing: '-1px',
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      {sub && (
        <div style={{ fontFamily: fonts.heading, fontSize: 11, color: colors.muted, marginTop: 4 }}>
          {sub}
        </div>
      )}
    </div>
  );
}

function AutoPanel() {
  return (
    <div className="ps-panel-v2" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 22, color: colors.navy, margin: '0 0 8px', letterSpacing: '-0.5px' }}>
          Compare car insurance from 30+ Ontario carriers
        </h3>
        <p style={{ fontFamily: fonts.heading, fontSize: 14, color: colors.muted, margin: '0 0 18px', lineHeight: 1.5 }}>
          Snap your pink slip to skip the typing — we pull the details in seconds. Or start with your postal code.
        </p>
        <div className="ps-form-v2" style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <input
            placeholder="Postal code"
            style={{
              flex: '0 1 220px',
              padding: '12px 14px',
              borderRadius: 10,
              border: `1.5px solid ${colors.border}`,
              fontFamily: fonts.heading,
              fontSize: 14,
              background: colors.paper,
              outline: 'none',
            }}
          />
          <Btn variant="primary">Get my quote</Btn>
          <span style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.muted }}>or</span>
          <Btn variant="ghost" style={{ borderColor: colors.teal, color: colors.teal }}>
            <Icon name="sparkle" size={13} color={colors.teal} /> Snap pink slip
          </Btn>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 14, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: fonts.heading, fontSize: 11, color: colors.muted }}>Pink slip auto-fills:</span>
          {['Policy #', 'Vehicle VIN', 'Carrier', 'Coverage dates'].map((t) => (
            <span
              key={t}
              style={{
                fontFamily: fonts.mono,
                fontSize: 9,
                fontWeight: 700,
                background: 'rgba(10,126,140,0.1)',
                color: colors.teal,
                padding: '3px 7px',
                borderRadius: 4,
                letterSpacing: 0.5,
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10, fontFamily: fonts.mono, fontSize: 10, color: colors.muted }}>
          <Icon name="lock" size={11} color={colors.muted} />
          Encrypted upload · deleted within 15 min · never shared with carriers
        </div>
      </div>
      <SavingsCoin label="SAVE UP TO" value="$612" sub="/year" />
    </div>
  );
}

function HomePanel() {
  return (
    <div className="ps-panel-v2" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 22, color: colors.navy, margin: '0 0 8px', letterSpacing: '-0.5px' }}>
          Protect your home at the best rate in Ontario
        </h3>
        <p style={{ fontFamily: fonts.heading, fontSize: 14, color: colors.muted, margin: '0 0 18px', lineHeight: 1.5 }}>
          Homeowner, condo, or tenant — snap your declaration page to skip the typing, or enter details manually.
        </p>
        <div className="ps-form-v2" style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <select
            defaultValue=""
            style={{
              padding: '12px 14px',
              borderRadius: 10,
              border: `1.5px solid ${colors.border}`,
              fontFamily: fonts.heading,
              fontSize: 14,
              color: colors.navy,
              background: colors.paper,
              outline: 'none',
            }}
          >
            <option value="" disabled>Property type</option>
            <option>Detached home</option>
            <option>Semi-detached</option>
            <option>Townhouse</option>
            <option>Condo</option>
            <option>Tenant</option>
          </select>
          <input
            placeholder="Postal code"
            style={{
              width: 160,
              padding: '12px 14px',
              borderRadius: 10,
              border: `1.5px solid ${colors.border}`,
              fontFamily: fonts.heading,
              fontSize: 14,
              background: colors.paper,
              outline: 'none',
            }}
          />
          <Btn variant="primary">Get my quote</Btn>
          <Btn variant="ghost" style={{ borderColor: colors.teal, color: colors.teal }}>
            <Icon name="sparkle" size={13} color={colors.teal} /> Snap dec page
          </Btn>
        </div>
      </div>
      <SavingsCoin label="BUNDLE UP TO" value="20%" sub="home + auto" />
    </div>
  );
}

function CardsPanel() {
  const cats = ['Cash back', 'Travel rewards', 'No fee', 'Low interest', 'Student', 'Business'];
  return (
    <div className="ps-panel-v2" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 22, color: colors.navy, margin: '0 0 8px', letterSpacing: '-0.5px' }}>
          Find the best credit card for your spending
        </h3>
        <p style={{ fontFamily: fonts.heading, fontSize: 14, color: colors.muted, margin: '0 0 18px', lineHeight: 1.5 }}>
          Cashback, travel rewards, no-fee, low interest — compare Canada&apos;s top cards side by side.
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {cats.map((c) => (
            <button
              key={c}
              style={{
                background: colors.paper,
                border: `1.5px solid ${colors.border}`,
                borderRadius: 10,
                padding: '10px 16px',
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 13,
                color: colors.navy,
                cursor: 'pointer',
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div
        style={{
          background: 'rgba(13,128,80,0.1)',
          borderRadius: 12,
          padding: '16px 22px',
          textAlign: 'center',
          minWidth: 130,
        }}
      >
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 9,
            fontWeight: 800,
            color: colors.green,
            letterSpacing: 1.5,
            marginBottom: 4,
          }}
        >
          STATUS
        </div>
        <div
          style={{
            fontFamily: fonts.heading,
            fontWeight: 900,
            fontSize: 22,
            color: colors.green,
            letterSpacing: '-0.5px',
          }}
        >
          Live now
        </div>
        <div style={{ fontFamily: fonts.heading, fontSize: 11, color: colors.muted, marginTop: 2 }}>50+ cards</div>
      </div>
    </div>
  );
}

function ComingSoonPanel({ tab, when }: { tab: TabId; when: string }) {
  const copy: Record<string, { h: string; p: string }> = {
    life: {
      h: 'Protect your loved ones with life insurance',
      p: "Term life, whole life, and critical illness coverage. Compare quotes from Canada's top insurers.",
    },
    travel: {
      h: 'Compare travel insurance for your next trip',
      p: 'Single-trip, multi-trip, or snowbird coverage. Medical, cancellation, and baggage protection.',
    },
    mortgage: {
      h: 'Compare mortgage rates from top Canadian lenders',
      p: 'Fixed, variable, and HELOC rates from banks, credit unions, and mortgage brokers across Canada.',
    },
  };
  const c = copy[tab];
  return (
    <div className="ps-panel-v2" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 22, color: colors.navy, margin: '0 0 8px', letterSpacing: '-0.5px' }}>
          {c.h}
        </h3>
        <p style={{ fontFamily: fonts.heading, fontSize: 14, color: colors.muted, margin: '0 0 20px', lineHeight: 1.5 }}>
          {c.p}
        </p>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(184,150,12,0.1)',
              border: '1px solid rgba(184,150,12,0.3)',
              borderRadius: 10,
              padding: '10px 16px',
              fontFamily: fonts.mono,
              fontSize: 11,
              color: colors.gold,
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            <Icon name="clock" size={13} color={colors.gold} /> COMING {when}
          </div>
          <Btn variant="dark">
            Notify me <Icon name="arrow" size={13} />
          </Btn>
        </div>
      </div>
      <SavingsCoin label="LAUNCHING" value={when} sub="" tone="gold" />
    </div>
  );
}

export default function ProductSelector() {
  const [tab, setTab] = useState<TabId>('auto');

  return (
    <section style={{ padding: '80px 0', background: colors.paper, position: 'relative' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 11,
              letterSpacing: 2,
              color: colors.teal,
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Start comparing
          </div>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 900,
              fontSize: 34,
              color: colors.navy,
              margin: 0,
              letterSpacing: '-1px',
            }}
          >
            What are you shopping for today?
          </h2>
        </div>

        <div
          className="ps-tabs-v2"
          style={{
            display: 'flex',
            gap: 2,
            background: colors.cream,
            borderRadius: '14px 14px 0 0',
            padding: '6px 6px 0',
          }}
        >
          {TABS.map((t) => {
            const on = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className="ps-tab-v2"
                style={{
                  flex: 1,
                  padding: '16px 10px 14px',
                  background: on ? colors.paper : 'transparent',
                  border: 'none',
                  borderRadius: '10px 10px 0 0',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 6,
                  position: 'relative',
                  color: on ? colors.teal : colors.navy,
                  fontFamily: fonts.heading,
                  fontWeight: on ? 800 : 600,
                  fontSize: 12,
                  transition: 'all 0.18s',
                }}
              >
                <Icon name={t.icon} size={20} strokeWidth={1.8} color={on ? colors.teal : colors.navy} />
                <span>{t.label}</span>
                {t.status === 'soon' && t.when && (
                  <span
                    style={{
                      position: 'absolute',
                      top: 6,
                      right: 6,
                      fontFamily: fonts.mono,
                      fontSize: 8,
                      fontWeight: 800,
                      background: 'rgba(184,150,12,0.15)',
                      color: colors.gold,
                      padding: '1px 5px',
                      borderRadius: 3,
                      letterSpacing: 0.5,
                    }}
                  >
                    {t.when}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div
          style={{
            background: colors.paper,
            border: `1px solid ${colors.borderSoft}`,
            borderTop: `3px solid ${colors.teal}`,
            borderRadius: '0 0 18px 18px',
            padding: '32px 36px',
            boxShadow: '0 20px 40px -20px rgba(27,42,74,0.12)',
          }}
        >
          {tab === 'auto' && <AutoPanel />}
          {tab === 'home' && <HomePanel />}
          {tab === 'cards' && <CardsPanel />}
          {(tab === 'life' || tab === 'travel' || tab === 'mortgage') && (
            <ComingSoonPanel tab={tab} when={TABS.find((t) => t.id === tab)?.when ?? ''} />
          )}
        </div>

        <div
          className="ps-trustbar-v2"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            gap: 24,
            marginTop: 32,
            padding: '18px 24px',
            background: colors.cream,
            borderRadius: 14,
            border: `1px solid ${colors.borderSoft}`,
          }}
        >
          {[
            { icon: 'star' as IconName, title: '4.9/5 on Google', sub: 'Thousands of happy customers' },
            { icon: 'sparkle' as IconName, title: '1M+ Canadians helped', sub: 'Better rates since 2026' },
            { icon: 'check' as IconName, title: '30+ carrier partners', sub: 'Intact · Wawanesa · Aviva & more' },
          ].map((t) => (
            <div key={t.title} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: 'rgba(10,126,140,0.1)',
                  color: colors.teal,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon name={t.icon} size={16} color={colors.teal} />
              </div>
              <div>
                <div style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 13, color: colors.navy }}>{t.title}</div>
                <div style={{ fontFamily: fonts.heading, fontSize: 11, color: colors.muted }}>{t.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
