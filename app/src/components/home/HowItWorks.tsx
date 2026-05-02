import { Icon, type IconName } from '../brand/Icon';
import { colors, fonts } from '@/styles/tokens';

const STEPS: { n: string; icon: IconName; title: string; desc: string; time: string }[] = [
  {
    n: '01',
    icon: 'sparkle',
    title: 'Snap your pink slip or dec page',
    desc: 'Upload a photo — our OCR reads policy #, VIN, carrier, and coverage in seconds. Or enter details manually if you prefer.',
    time: '30 sec',
  },
  {
    n: '02',
    icon: 'chart',
    title: 'Compare quotes side by side',
    desc: 'See ranked offers from 30+ carriers. Filter by price, deductible, or coverage level. No personal data shared with carriers until you pick one.',
    time: '60 sec',
  },
  {
    n: '03',
    icon: 'check',
    title: "Save & switch — or don't",
    desc: "Found a better deal? We handle the switch-over paperwork. Happy with what you have? Nothing's pushed. Zero pressure, zero spam.",
    time: 'Your choice',
  },
];

export default function HowItWorks() {
  return (
    <section style={{ padding: '96px 0', background: colors.paper }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
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
            How it works
          </div>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 900,
              fontSize: 42,
              color: colors.navy,
              margin: '0 0 14px',
              letterSpacing: '-1.3px',
            }}
          >
            Real quotes in under two minutes.
          </h2>
          <p
            style={{
              fontFamily: fonts.heading,
              fontSize: 17,
              color: colors.muted,
              maxWidth: 600,
              margin: '0 auto',
              lineHeight: 1.55,
            }}
          >
            Faster than filling out a quote form on a single carrier&apos;s site. Because you
            shouldn&apos;t have to type your address fifteen times.
          </p>
        </div>

        <div
          className="hiw-grid-v2"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 16,
            position: 'relative',
          }}
        >
          {STEPS.map((s) => (
            <div
              key={s.n}
              style={{
                background: colors.cream,
                borderRadius: 18,
                border: `1px solid ${colors.borderSoft}`,
                padding: '28px 26px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 22,
                }}
              >
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: 14,
                    background: colors.teal,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name={s.icon} size={22} color="#fff" />
                </div>
                <div
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 900,
                    fontSize: 56,
                    color: `${colors.teal}22`,
                    letterSpacing: '-2px',
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>
              </div>

              <h3
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 900,
                  fontSize: 20,
                  color: colors.navy,
                  margin: '0 0 10px',
                  letterSpacing: '-0.5px',
                  lineHeight: 1.2,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: fonts.heading,
                  fontSize: 14,
                  color: colors.muted,
                  lineHeight: 1.55,
                  margin: '0 0 18px',
                }}
              >
                {s.desc}
              </p>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 1,
                  color: colors.gold,
                  background: 'rgba(184,150,12,0.12)',
                  padding: '4px 10px',
                  borderRadius: 999,
                }}
              >
                <Icon name="clock" size={11} color={colors.gold} />
                {s.time.toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <button
            style={{
              background: colors.teal,
              color: '#fff',
              border: 'none',
              borderRadius: 999,
              padding: '14px 26px',
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 15,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            Start my comparison <Icon name="arrow" size={14} color="#fff" />
          </button>
        </div>
      </div>
    </section>
  );
}
