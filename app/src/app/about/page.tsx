import type { Metadata } from 'next';
import WaitlistForm from './_client/WaitlistForm';

/**
 * About page — ported from design/mockups/toprates-about.jsx
 * Server component except for the WaitlistForm (client island).
 */

const TEAL = '#0A7E8C';
const NAVY = '#1B2A4A';

export const metadata: Metadata = {
  title: 'About TopRates.ca — AI-powered Canadian insurance comparison',
  description:
    'TopRates.ca is an AI-powered insurance comparison platform for Canadians, powered by Insurimple, a RIBO-licensed Ontario brokerage. Built by an engineer, not a salesperson.',
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
            We help Canadians make better insurance decisions
          </h1>
          <p style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: 19, color: '#6b7b8d', lineHeight: 1.65, margin: 0 }}>
            TopRates.ca is an AI-powered insurance comparison platform. We believe shopping for insurance shouldn&rsquo;t take hours, require phone calls, or leave you wondering if you got the best deal.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section style={{ padding: '56px 32px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 24, color: NAVY, margin: '0 0 16px' }}>
            Why we built this
          </h2>
          <div style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: 18, lineHeight: 1.85, color: '#374151' }}>
            <p>Insurance in Canada is broken — not the product itself, but the way consumers buy it. Every year, millions of Ontarians overpay because shopping around means calling multiple brokers, filling out the same forms over and over, and never being sure you&rsquo;re getting the best rate.</p>
            <p>We built TopRates.ca to fix that. Snap a photo of your pink slip, and our AI extracts your details, compares 30+ carriers simultaneously, and shows you real quotes in under two minutes. No phone calls. No spam. No guessing.</p>
            <p>Behind every quote is Insurimple, a RIBO-licensed brokerage that ensures your coverage is right — not just cheap. We&rsquo;re not a lead-generation site that sells your information to the highest bidder. We&rsquo;re a technology platform powered by a real, licensed brokerage.</p>
          </div>
        </div>
      </section>

      {/* HOW WE'RE DIFFERENT */}
      <section style={{ padding: '56px 32px', background: '#f8fafb' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 24, color: NAVY, margin: '0 0 28px' }}>
            How we&rsquo;re different
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { title: 'AI-powered, not sales-powered', desc: 'Our comparison engine is built on machine learning, not a call centre. No one will pressure you into a policy. The technology finds the best match — you decide.', icon: '🤖' },
              { title: 'Licensed brokerage behind every quote', desc: 'Insurimple is registered with RIBO (Registered Insurance Brokers of Ontario). Every recommendation meets regulatory standards. Your interests come first.', icon: '🛡️' },
              { title: 'Your data, your control', desc: 'We never sell your personal information. Uploaded documents are deleted immediately after extraction. No spam calls, no third-party data sharing.', icon: '🔒' },
              { title: 'Same rates as going direct', desc: "The quotes on TopRates.ca are identical to what you'd get calling the carrier yourself. Insurance companies pay us — you don't.", icon: '💰' },
              { title: 'Built by an engineer, not a broker', desc: 'TopRates.ca was built by an ML/AI engineer who wanted to solve the insurance comparison problem with technology, not more salespeople.', icon: '⚡' },
              { title: '100% Canadian', desc: 'Built in Ontario, for Ontarians. We understand RIBO regulations, SABS changes, and the specific challenges Canadian consumers face.', icon: '🍁' },
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

      {/* INSURIMPLE PARTNERSHIP */}
      <section style={{ padding: '56px 32px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 300 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: TEAL, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 8 }}>
                Our Brokerage Partner
              </div>
              <h2 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 24, color: NAVY, margin: '0 0 14px' }}>
                Powered by Insurimple
              </h2>
              <p style={{ fontSize: 15, color: '#6b7b8d', lineHeight: 1.65, margin: '0 0 20px' }}>
                TopRates.ca is the consumer-facing technology platform. Insurimple is the RIBO-licensed brokerage that handles the insurance side — carrier relationships, policy binding, compliance, and regulatory oversight.
              </p>
              <p style={{ fontSize: 15, color: '#6b7b8d', lineHeight: 1.65, margin: '0 0 20px' }}>
                This partnership means you get the speed and convenience of a digital platform backed by the regulatory protection of a licensed brokerage. Every quote, every recommendation, and every policy is overseen by licensed insurance professionals.
              </p>
            </div>
            <div style={{ flex: '0 0 300px' }}>
              <div style={{ background: '#f8fafb', borderRadius: 12, border: '1px solid #e8ecf0', padding: '28px 24px' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#b0b8c4', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>
                  Regulatory Details
                </div>
                {[
                  { label: 'Brokerage', value: 'Insurimple' },
                  { label: 'Regulator', value: 'RIBO (Ontario)' },
                  { label: 'Oversight', value: 'FSRA' },
                  { label: 'E&O Insurance', value: 'Active' },
                  { label: 'Carrier Appointments', value: '30+' },
                  { label: 'Status', value: 'Registered May 2027' },
                ].map((r, i, arr) => (
                  <div
                    key={r.label}
                    style={{
                      display: 'flex', justifyContent: 'space-between',
                      padding: '8px 0',
                      borderBottom: i < arr.length - 1 ? '1px solid #f0f2f5' : 'none',
                    }}
                  >
                    <span style={{ fontSize: 13, color: '#6b7b8d' }}>{r.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT RIBO MEANS */}
      <section style={{ padding: '48px 32px', background: '#f8fafb' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 22, color: NAVY, margin: '0 0 14px' }}>
            What does RIBO-licensed mean for you?
          </h2>
          <p style={{ fontSize: 15, color: '#6b7b8d', lineHeight: 1.65, margin: '0 0 20px' }}>
            RIBO (Registered Insurance Brokers of Ontario) is the regulatory body that licenses and oversees insurance brokers in Ontario. When a brokerage is RIBO-registered, it means:
          </p>
          <ul style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, paddingLeft: 20, margin: '0 0 16px' }}>
            <li>Every broker must pass qualification exams and maintain continuing education</li>
            <li>The brokerage carries Errors &amp; Omissions (E&amp;O) insurance to protect you</li>
            <li>Your personal information is handled according to strict privacy regulations</li>
            <li>You have access to RIBO&rsquo;s complaint process if anything goes wrong</li>
            <li>A needs assessment is conducted before any coverage recommendation</li>
          </ul>
          <p style={{ fontSize: 15, color: '#6b7b8d', lineHeight: 1.65, margin: 0 }}>
            In short: your interests are legally protected. That&rsquo;s the difference between a licensed brokerage and a lead-generation website.
          </p>
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
                <span style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 18, color: NAVY }}>Gautam</span>
                <span style={{ fontSize: 12, color: '#b0b8c4' }}>Founder &amp; CEO</span>
              </div>
              <p style={{ fontSize: 14, color: '#6b7b8d', lineHeight: 1.6, margin: '8px 0 0' }}>
                ML/AI engineer by background. Built TopRates.ca to solve the insurance comparison problem with technology instead of salespeople. Responsible for the AI/ML stack, platform architecture, content strategy, and business development.
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
            TopRates.ca launches May 2027. Be first to compare insurance from 30+ carriers.
          </p>
          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
