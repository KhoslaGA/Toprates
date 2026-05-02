import type { Metadata } from 'next';
import WaitlistForm from './_client/WaitlistForm';

/**
 * About page — pre-launch (April 2026).
 * Server component except for the WaitlistForm (client island).
 *
 * Compliance note: TopRates.ca is operated by Webhub4u Inc. and is NOT
 * currently a RIBO-licensed brokerage. Copy on this page must reflect
 * the pre-launch state honestly.
 */

const TEAL = '#0A7E8C';
const NAVY = '#1B2A4A';

export const metadata: Metadata = {
  title: 'About TopRates.ca — Insurance comparison for Canadians',
  description:
    'TopRates.ca is a pre-launch insurance comparison platform operated by Webhub4u Inc. Founded by a RIBO-licensed broker. Full comparison and brokerage launching 2027.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: '56px 32px 48px', borderBottom: '1px solid #f0f2f5' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: TEAL, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 8 }}>
            About TopRates.ca
          </div>
          <h1 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 34, color: NAVY, margin: '0 0 14px', lineHeight: 1.2 }}>
            Helping Canadians make better insurance decisions
          </h1>
          <p style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: 19, color: '#6b7b8d', lineHeight: 1.65, margin: 0 }}>
            TopRates.ca is a pre-launch insurance comparison platform operated by Webhub4u Inc. We&rsquo;re building the platform to make insurance shopping fast, fair, and transparent — launching 2027.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section style={{ padding: '56px 32px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 24, color: NAVY, margin: '0 0 16px' }}>
            Why we&rsquo;re building this
          </h2>
          <div style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: 18, lineHeight: 1.85, color: '#374151' }}>
            <p>Insurance shopping in Canada is broken — not the product itself, but the way consumers buy it. Every year, millions of Ontarians overpay because shopping around means calling multiple brokers, filling out the same forms over and over, and never being sure they&rsquo;re comparing the same coverage.</p>
            <p>We&rsquo;re building TopRates.ca to fix that. At launch, you&rsquo;ll be able to snap a photo of your pink slip and our comparison engine will surface real quotes from 30+ Canadian carriers in under two minutes. No phone calls, no spam, no guessing.</p>
            <p>Today, we&rsquo;re focused on the educational side: clear explainers, plain-language guides to the July 2026 Ontario auto reform, and a waitlist for early access at launch. We don&rsquo;t sell insurance yet, and we don&rsquo;t pretend to.</p>
          </div>
        </div>
      </section>

      {/* HOW WE'RE DIFFERENT */}
      <section style={{ padding: '56px 32px', background: '#f8fafb' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 24, color: NAVY, margin: '0 0 28px' }}>
            What sets us apart
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { title: 'Technology-first comparison', desc: 'Our comparison engine is built on automated data extraction and ranking — not a call centre. Nobody pressures you into a policy. The technology surfaces options; you decide.', icon: '⚡' },
              { title: 'Founded by a licensed broker', desc: 'TopRates.ca was founded by a RIBO-licensed broker. At launch, we will partner with a registered brokerage that handles the regulated activities under proper oversight.', icon: '🛡️' },
              { title: 'Your data, your control', desc: 'We never sell your personal information. Uploaded documents will be deleted immediately after extraction. No spam calls, no third-party data sharing.', icon: '🔒' },
              { title: 'Same rates as going direct', desc: 'When the platform launches, the quotes you see will match what you&rsquo;d get calling the carrier yourself. Insurance companies pay the partner brokerage — you don&rsquo;t.', icon: '💰' },
              { title: 'Built by an engineer', desc: 'TopRates.ca was built by an ML/AI engineer who wanted to solve the insurance comparison problem with technology, not more salespeople.', icon: '🤖' },
              { title: '100% Canadian', desc: 'Built in Ontario, for Canadians. We follow the rules — RIBO regulations, Competition Act substantiation requirements, PIPEDA, CASL, and provincial broker laws.', icon: '🍁' },
            ].map((d) => (
              <div key={d.title} style={{ padding: '24px 22px', background: '#fff', borderRadius: 10, border: '1px solid #e8ecf0' }}>
                <span style={{ fontSize: 24, display: 'block', marginBottom: 12 }}>{d.icon}</span>
                <h3 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 16, color: NAVY, margin: '0 0 6px' }}>{d.title}</h3>
                <p style={{ fontSize: 13, color: '#6b7b8d', lineHeight: 1.55, margin: 0 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE ARE TODAY */}
      <section style={{ padding: '56px 32px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: TEAL, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 8 }}>
            Where we are today
          </div>
          <h2 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 24, color: NAVY, margin: '0 0 14px' }}>
            What TopRates.ca is today
          </h2>
          <div style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: 17, lineHeight: 1.75, color: '#374151' }}>
            <p>TopRates.ca is a pre-launch insurance comparison platform operated by Webhub4u Inc. We are currently building the platform for a 2027 launch.</p>
            <p>Today, the site provides educational content about Canadian insurance — auto, home, life, business, travel — and lets visitors join our waitlist for the comparison platform launch. <strong>We do not currently sell insurance, take applications, or operate as a registered insurance broker.</strong></p>
            <p>At launch, TopRates.ca will partner with a RIBO-licensed brokerage to handle the regulated activities — quoting, application, policy placement. The licensed brokerage will be operated by the founder, who is currently working toward Level 3 management licence (expected May/June 2027).</p>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section style={{ padding: '56px 32px', background: '#f8fafb' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 24, color: NAVY, margin: '0 0 16px' }}>
            Founded by a licensed broker
          </h2>
          <div style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: 17, lineHeight: 1.75, color: '#374151' }}>
            <p>TopRates.ca was founded by Gautam Khosla, a RIBO-licensed insurance broker (Level 1, issued April 2025) and ML/AI engineer. Gautam is currently working toward Level 3 management licence (expected May/June 2027) to lead the partner brokerage that will launch alongside the comparison platform.</p>
            <p>Until the partner brokerage is operating, the content on this site is reviewed by a licensed broker — but the site itself is a pre-launch technology platform, not a registered brokerage. We&rsquo;re careful about that distinction because it matters legally and to anyone counting on us to do this honestly.</p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: '56px 32px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 24, color: NAVY, margin: '0 0 28px' }}>Team</h2>

          <div
            style={{
              display: 'flex', gap: 20, alignItems: 'flex-start',
              padding: 24, background: '#f8fafb',
              borderRadius: 12, border: '1px solid #e8ecf0',
            }}
          >
            <div
              style={{
                width: 64, height: 64, borderRadius: '50%', flexShrink: 0,
                background: `linear-gradient(135deg, ${NAVY}, #2a3f66)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <span style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 24, color: '#fff' }}>G</span>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 18, color: NAVY }}>Gautam Khosla</span>
                <span style={{ fontSize: 12, color: '#b0b8c4' }}>Founder &amp; CEO</span>
              </div>
              <p style={{ fontSize: 14, color: '#6b7b8d', lineHeight: 1.6, margin: '8px 0 0' }}>
                ML/AI engineer and RIBO-licensed broker (Level 1). Building TopRates.ca to solve the insurance comparison problem with technology rather than salespeople. Responsible for platform architecture, content strategy, and the partner-brokerage standup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: '48px 32px', background: '#f8fafb', borderTop: '1px solid #e8ecf0' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 22, color: NAVY, margin: '0 0 8px' }}>
            Get in touch
          </h2>
          <p style={{ fontSize: 15, color: '#6b7b8d', margin: '0 0 20px' }}>
            Questions about TopRates.ca, partnerships, or media inquiries? We&rsquo;d love to hear from you.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            <a
              href="mailto:hello@toprates.ca"
              style={{ fontSize: 14, color: TEAL, fontWeight: 600, textDecoration: 'none' }}
            >
              hello@toprates.ca
            </a>
            <span style={{ color: '#d0d5db' }}>·</span>
            <span style={{ fontSize: 14, color: TEAL, fontWeight: 600 }}>LinkedIn</span>
            <span style={{ color: '#d0d5db' }}>·</span>
            <span style={{ fontSize: 14, color: TEAL, fontWeight: 600 }}>Twitter / X</span>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ padding: '56px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 26, color: NAVY, margin: '0 0 10px' }}>
            Join the waitlist
          </h2>
          <p style={{ fontSize: 15, color: '#6b7b8d', margin: '0 0 24px' }}>
            TopRates.ca launches 2027. Be among the first to compare Canadian insurance options at scale.
          </p>
          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
