'use client';

import { useState } from 'react';
import { Icon } from '../brand/Icon';
import { colors, fonts } from '@/styles/tokens';

function SampleSavingsCard() {
  const quotes = [
    { name: 'Carrier A', rate: '$1,838', save: 'Lower-tier example', best: true },
    { name: 'Carrier B', rate: '$1,956', save: 'Mid-tier example', best: false },
    { name: 'Carrier C', rate: '$2,104', save: 'Higher-tier example', best: false },
  ];
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(18px)',
          borderRadius: 22,
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '32px 28px 26px',
          width: 380,
          maxWidth: '100%',
          boxShadow: '0 40px 80px -30px rgba(0,0,0,0.5)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -12,
            left: 24,
            background: colors.gold,
            color: colors.navy,
            fontFamily: fonts.mono,
            fontSize: 9,
            fontWeight: 800,
            letterSpacing: 1.5,
            padding: '5px 11px',
            borderRadius: 999,
          }}
        >
          SAMPLE SAVINGS
        </div>

        <div style={{ textAlign: 'center', marginBottom: 20, paddingTop: 6 }}>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 10,
              letterSpacing: 1.5,
              color: 'rgba(255,255,255,0.4)',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: 4,
            }}
          >
            Current premium
          </div>
          <div
            style={{
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 28,
              color: 'rgba(255,255,255,0.3)',
              textDecoration: 'line-through',
              textDecorationColor: 'rgba(225,93,93,0.5)',
              letterSpacing: '-0.8px',
            }}
          >
            $2,450
            <span style={{ fontSize: 15 }}>/yr</span>
          </div>
        </div>

        {quotes.map((q) => (
          <div
            key={q.name}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '14px 16px',
              marginBottom: 8,
              background: q.best
                ? 'linear-gradient(135deg, rgba(15,189,201,0.16), rgba(10,126,140,0.08))'
                : 'rgba(255,255,255,0.03)',
              border: q.best
                ? '1px solid rgba(15,189,201,0.4)'
                : '1px solid rgba(255,255,255,0.06)',
              borderRadius: 12,
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: fonts.heading,
                  fontWeight: 800,
                  fontSize: 14,
                  color: '#fff',
                }}
              >
                {q.name}
                {q.best && (
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 8,
                      background: 'rgba(15,189,201,0.25)',
                      color: '#0fbdc9',
                      padding: '2px 6px',
                      borderRadius: 3,
                      fontWeight: 800,
                      letterSpacing: 1,
                    }}
                  >
                    BEST
                  </span>
                )}
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.35)',
                  marginTop: 3,
                }}
              >
                {q.save}
              </div>
            </div>
            <div
              style={{
                fontFamily: fonts.heading,
                fontWeight: 900,
                fontSize: 22,
                color: q.best ? '#0fbdc9' : 'rgba(255,255,255,0.7)',
                letterSpacing: '-0.8px',
              }}
            >
              {q.rate}
            </div>
          </div>
        ))}

        <div
          style={{
            textAlign: 'center',
            marginTop: 10,
            fontFamily: fonts.mono,
            fontSize: 10,
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: 0.5,
          }}
        >
          ILLUSTRATIVE EXAMPLE · NOT REAL QUOTES · ACTUAL RATES VARY
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    if (!email.includes('@') || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, source: 'home_hero' }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (!res.ok || !data.ok) {
        setError("Couldn't save your spot. Please try again.");
      } else {
        setDone(true);
      }
    } catch {
      setError("Couldn't reach the server. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      style={{
        background:
          'linear-gradient(160deg, #1B2A4A 0%, #0f1e38 40%, #132340 70%, #1B2A4A 100%)',
        padding: '88px 0 108px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.05,
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -100,
          right: -120,
          width: 520,
          height: 520,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(10,126,140,0.2) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: -140,
          left: -120,
          width: 440,
          height: 440,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(184,150,12,0.1) 0%, transparent 70%)',
        }}
      />

      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '0 32px',
          position: 'relative',
        }}
      >
        <div className="hero-grid-v2">
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: 'rgba(184,150,12,0.15)',
                border: '1px solid rgba(184,150,12,0.35)',
                borderRadius: 999,
                padding: '6px 14px',
                marginBottom: 26,
                fontFamily: fonts.mono,
                fontSize: 10,
                letterSpacing: 1.5,
                fontWeight: 700,
                color: colors.gold,
                textTransform: 'uppercase',
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: colors.gold,
                }}
              />
              Education today · Quotes summer 2027
            </div>
            <h1 className="hero-h1-v2">
              Insurance,
              <br />
              in <span style={{ color: '#0fbdc9' }}>plain English.</span>
            </h1>
            <p
              style={{
                fontFamily: fonts.heading,
                fontSize: 17,
                color: 'rgba(246,239,224,0.68)',
                maxWidth: 560,
                margin: '24px 0 32px',
                lineHeight: 1.6,
              }}
            >
              Reviewed by LLQP-licensed advisors at KLC Group Canada Inc. and the editorial team at TopRates.ca · operated by Webhub4u Inc. We read the fine print. We rewrite it in English. You decide what to do with it.
            </p>

            {!done ? (
              <div className="hero-form-v2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  onKeyDown={(e) => e.key === 'Enter' && submit()}
                  style={{
                    flex: 1,
                    padding: '14px 18px',
                    borderRadius: 12,
                    border: '1.5px solid rgba(255,255,255,0.12)',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#fff',
                    fontFamily: fonts.heading,
                    fontSize: 14,
                    outline: 'none',
                  }}
                />
                <button
                  onClick={submit}
                  disabled={submitting}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '14px 26px',
                    borderRadius: 999,
                    fontFamily: fonts.heading,
                    fontWeight: 800,
                    fontSize: 15,
                    letterSpacing: '-0.2px',
                    cursor: submitting ? 'wait' : 'pointer',
                    border: '1px solid transparent',
                    whiteSpace: 'nowrap',
                    background: colors.teal,
                    color: '#fff',
                    opacity: submitting ? 0.7 : 1,
                  }}
                >
                  {submitting ? 'Saving…' : 'Join waitlist'} <Icon name="arrow" size={14} />
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  background: 'rgba(15,189,201,0.12)',
                  border: '1px solid rgba(15,189,201,0.3)',
                  borderRadius: 12,
                  padding: '14px 20px',
                  fontFamily: fonts.heading,
                  fontWeight: 700,
                  fontSize: 14,
                  color: '#0fbdc9',
                }}
              >
                <Icon name="check" size={16} color="#0fbdc9" />
                You&rsquo;re on the list! We&rsquo;ll be in touch.
              </div>
            )}
            {error && !done && (
              <div
                style={{
                  marginTop: 12,
                  fontFamily: fonts.heading,
                  fontSize: 13,
                  color: '#f59e0b',
                }}
              >
                {error}
              </div>
            )}

            {!done && (
              <p
                style={{
                  fontFamily: fonts.heading,
                  fontSize: 11,
                  color: 'rgba(246,239,224,0.5)',
                  marginTop: 12,
                  marginBottom: 0,
                  lineHeight: 1.5,
                  maxWidth: 460,
                }}
              >
                By joining, you agree to receive launch updates and Canadian insurance education content
                from Webhub4u Inc. (operator of TopRates.ca). Unsubscribe anytime. See our{' '}
                <a href="/privacy" style={{ color: '#0fbdc9' }}>
                  Privacy Policy
                </a>
                .
              </p>
            )}

            <div style={{ display: 'flex', gap: 22, marginTop: 22, flexWrap: 'wrap' }}>
              {['No spam, ever', 'Free to compare', '100% Canadian'].map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 10,
                    letterSpacing: 0.5,
                    color: 'rgba(246,239,224,0.4)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span style={{ color: '#0fbdc9' }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>

          <SampleSavingsCard />
        </div>
      </div>
    </section>
  );
}
