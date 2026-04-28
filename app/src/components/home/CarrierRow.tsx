'use client';

import { colors, fonts } from '@/styles/tokens';

const CARRIERS = [
  'INTACT', 'WAWANESA', 'AVIVA', 'ECONOMICAL', 'BELAIRDIRECT',
  'DESJARDINS', 'TRAVELERS', 'ALLSTATE', 'CAA', 'GORE MUTUAL',
  'PEMBRIDGE', 'COACHMAN',
];

export default function CarrierRow() {
  return (
    <section
      style={{
        background: colors.paper,
        padding: '44px 0',
        borderBottom: `1px solid ${colors.borderFaint}`,
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 10,
            letterSpacing: 2,
            color: colors.muted,
            fontWeight: 700,
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: 22,
          }}
        >
          Comparing quotes from 30+ Canadian carriers
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '28px 44px',
          }}
        >
          {CARRIERS.map((c) => (
            <div
              key={c}
              style={{
                fontFamily: fonts.heading,
                fontWeight: 900,
                fontSize: 15,
                color: colors.navy,
                opacity: 0.38,
                letterSpacing: 1.5,
                transition: 'opacity 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.38')}
            >
              {c}
            </div>
          ))}
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 11,
              color: colors.teal,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            +18 MORE
          </span>
        </div>
      </div>
    </section>
  );
}
