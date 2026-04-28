'use client';

import { useState } from 'react';
import { colors, fonts } from '@/styles/tokens';

type Carrier = { name: string; domain: string };

const CARRIERS: Carrier[] = [
  { name: 'INTACT', domain: 'intact.ca' },
  { name: 'WAWANESA', domain: 'wawanesa.com' },
  { name: 'AVIVA', domain: 'aviva.ca' },
  { name: 'ECONOMICAL', domain: 'economical.com' },
  { name: 'BELAIRDIRECT', domain: 'belairdirect.com' },
  { name: 'DESJARDINS', domain: 'desjardins.com' },
  { name: 'TRAVELERS', domain: 'travelers.com' },
  { name: 'ALLSTATE', domain: 'allstate.ca' },
  { name: 'CAA', domain: 'caa.ca' },
  { name: 'GORE MUTUAL', domain: 'goremutual.com' },
  { name: 'PEMBRIDGE', domain: 'pembridge.com' },
  { name: 'COACHMAN', domain: 'coachmaninsurance.ca' },
];

function CarrierBadge({ carrier }: { carrier: Carrier }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 22px',
        borderRadius: 14,
        background: '#fff',
        border: `1px solid ${colors.border}`,
        boxShadow: '0 1px 3px rgba(27,42,74,0.04)',
        flexShrink: 0,
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(27,42,74,0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(27,42,74,0.04)';
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: imgError ? colors.teal : '#f4f6f8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          overflow: 'hidden',
        }}
      >
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://logo.clearbit.com/${carrier.domain}`}
            alt={`${carrier.name} logo`}
            width={32}
            height={32}
            style={{ width: 32, height: 32, objectFit: 'contain' }}
            onError={() => setImgError(true)}
          />
        ) : (
          <span
            style={{
              fontFamily: fonts.heading,
              fontWeight: 900,
              fontSize: 14,
              color: '#fff',
              letterSpacing: '-0.5px',
            }}
          >
            {carrier.name.charAt(0)}
          </span>
        )}
      </div>
      <span
        style={{
          fontFamily: fonts.heading,
          fontWeight: 800,
          fontSize: 14,
          color: colors.navy,
          letterSpacing: 0.6,
          whiteSpace: 'nowrap',
        }}
      >
        {carrier.name}
      </span>
    </div>
  );
}

export default function CarrierRow() {
  // Duplicate list for seamless infinite scroll
  const loop = [...CARRIERS, ...CARRIERS];

  return (
    <section
      style={{
        background: colors.paper,
        padding: '56px 0',
        borderBottom: `1px solid ${colors.borderFaint}`,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 13,
            letterSpacing: 2,
            color: colors.muted,
            fontWeight: 700,
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: 32,
          }}
        >
          Comparing quotes from 30+ Canadian carriers
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          maskImage:
            'linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 18,
            width: 'max-content',
            animation: 'carrierMarquee 50s linear infinite',
          }}
        >
          {loop.map((c, i) => (
            <CarrierBadge key={`${c.name}-${i}`} carrier={c} />
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '24px 32px 0', textAlign: 'center' }}>
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 12,
            color: colors.teal,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          + 18 MORE
        </span>
      </div>
    </section>
  );
}
