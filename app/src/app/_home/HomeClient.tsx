'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { WebhubLink } from '@/components/legal/WebhubLink';
import ReformAlertStrip from '@/components/home/ReformAlertStrip';
import Hero from '@/components/home/Hero';
import StatsBand from '@/components/home/StatsBand';
import CarrierRow from '@/components/home/CarrierRow';
import ProductSelector from '@/components/home/ProductSelector';
import ReformSpotlight from '@/components/home/ReformSpotlight';
import HowItWorks from '@/components/home/HowItWorks';
import MeetBo from '@/components/home/MeetBo';

export default function HomeClient() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!email.includes('@') || submitting) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, source: 'home_bottom_cta' }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (!res.ok || !data.ok) {
        setSubmitError("Couldn't save your spot. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitError("Couldn't reach the server. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <ReformAlertStrip />
      <Hero />
      <StatsBand />
      <CarrierRow />

      <ProductSelector />
      <ReformSpotlight />
      <HowItWorks />
      <MeetBo />

      {/* ===== FEATURED GUIDES ===== */}
      <section style={{ padding: '80px 32px', background: '#f8fafb' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#0A7E8C', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>Latest Guides</div>
              <h2 style={{ fontFamily: "'Inter Tight'", fontWeight: 800, fontSize: 30, color: '#1B2A4A', margin: 0 }}>
                Ontario insurance, explained simply
              </h2>
            </div>
            <Link href="/blog" style={{ fontSize: 14, fontWeight: 600, color: '#0A7E8C', textDecoration: 'none' }}>
              View all guides →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { tag: 'REFORM', tagColor: '#CC3333', tagBg: '#FFF0F0', title: 'Ontario Auto Insurance Changes 2026: Everything You Need to Know', date: 'May 4, 2026', read: '12 min read' },
              { tag: 'GUIDE', tagColor: '#0A7E8C', tagBg: '#E6F4F6', title: 'Which Accident Benefits Are Becoming Optional? Complete Breakdown', date: 'May 6, 2026', read: '8 min read' },
              { tag: 'REFORM', tagColor: '#CC3333', tagBg: '#FFF0F0', title: 'Income Replacement Benefits: Do You Need Them?', date: 'May 11, 2026', read: '7 min read' },
              { tag: 'PERSONA', tagColor: '#B8960C', tagBg: '#FDF6E3', title: 'Self-Employed & Gig Workers: Why Coverage Matters More Than Ever', date: 'May 27, 2026', read: '6 min read' },
              { tag: 'TOOL', tagColor: '#6B46C1', tagBg: '#F3EEFF', title: 'Self-Assessment Checklist: Which Optional Benefits Do You Need?', date: 'May 22, 2026', read: 'Interactive' },
              { tag: 'COMPARE', tagColor: '#0D8050', tagBg: '#E6F5ED', title: 'Ontario Car Insurance in 2026: A Complete Guide to What You Pay', date: 'Jun 5, 2026', read: '10 min read' },
            ].map((article, i) => {
              const bar =
                article.tag === 'REFORM' ? 'linear-gradient(90deg, #CC3333, #e05555)' :
                article.tag === 'TOOL' ? 'linear-gradient(90deg, #6B46C1, #8b6dd1)' :
                article.tag === 'COMPARE' ? 'linear-gradient(90deg, #0D8050, #10a065)' :
                article.tag === 'PERSONA' ? 'linear-gradient(90deg, #B8960C, #d4ad0e)' :
                'linear-gradient(90deg, #0A7E8C, #12a3b3)';
              return (
                <Link
                  key={i}
                  href="/blog"
                  style={{
                    background: '#fff', borderRadius: 16,
                    border: '1px solid #e8ecf0', overflow: 'hidden',
                    transition: 'all 0.3s', textDecoration: 'none', color: 'inherit',
                    display: 'block',
                  }}
                >
                  <div style={{ height: 8, background: bar }} />
                  <div style={{ padding: '20px 22px' }}>
                    <div style={{ marginBottom: 12 }}>
                      <span
                        style={{
                          fontSize: 10, fontWeight: 700,
                          color: article.tagColor, background: article.tagBg,
                          padding: '3px 8px', borderRadius: 6, letterSpacing: 0.8,
                        }}
                      >
                        {article.tag}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: "'Inter Tight'", fontWeight: 700, fontSize: 17, color: '#1B2A4A', margin: '0 0 12px', lineHeight: 1.3 }}>
                      {article.title}
                    </h3>
                    <div style={{ display: 'flex', gap: 12, fontSize: 12, color: '#98a2b3' }}>
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.read}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== GOT QUESTIONS / WHAT WE ARE ===== */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#0A7E8C', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>Got Questions?</div>
            <h2 style={{ fontFamily: "'Inter Tight'", fontWeight: 800, fontSize: 30, color: '#1B2A4A', margin: '0 0 12px' }}>
              We help Canadians make better insurance<br />and money decisions
            </h2>
            <p style={{ fontSize: 15, color: '#6b7b8d', maxWidth: 520, margin: '0 auto' }}>
              Here&rsquo;s exactly how TopRates.ca works — no jargon, no fine print.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 20, marginBottom: 40, flexWrap: 'wrap' }}>
            <div
              style={{
                flex: '1 1 320px', background: 'linear-gradient(135deg, #f0fafb, #e6f7f8)',
                borderRadius: 20, padding: '32px 28px',
                border: '2px solid rgba(10,126,140,0.12)',
              }}
            >
              <div
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(10,126,140,0.1)', borderRadius: 20,
                  padding: '6px 14px', marginBottom: 20,
                }}
              >
                <span style={{ fontSize: 16 }}>✅</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#0A7E8C' }}>What we are</span>
              </div>
              {([
                'An independent insurance education platform; quote engine planned for KLC Group Canada Inc. RIBO-registered launch with 30+ carriers',
                <>Operated by <WebhubLink />; KLC Group (a separate company) will handle quoting at the RIBO-registered launch</>,
                'Life insurance content reviewed by LLQP-licensed advisors at KLC Group Canada Inc.',
                'Educational guides and a newsletter today; no policies sold yet',
                '100% Canadian-owned and operated, based in Ontario',
              ] as React.ReactNode[]).map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: '#0A7E8C', fontSize: 14, marginTop: 2, flexShrink: 0 }}>●</span>
                  <span style={{ fontSize: 14, color: '#1B2A4A', lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                flex: '1 1 320px', background: '#fafbfc',
                borderRadius: 20, padding: '32px 28px',
                border: '2px solid #f0f2f5',
              }}
            >
              <div
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#f0f2f5', borderRadius: 20,
                  padding: '6px 14px', marginBottom: 20,
                }}
              >
                <span style={{ fontSize: 16 }}>🚫</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#98a2b3' }}>What we&rsquo;re not</span>
              </div>
              {[
                "Not an insurance company — we don't underwrite or issue policies",
                'Not a lead-gen site — we never sell your information to third parties',
                'Not biased — our rankings are based on price and fit, not who pays us more',
                'Not complicated — no 40-field forms, no hour-long phone calls',
                'Not going to spam you — ever',
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: '#c0c5cc', fontSize: 14, marginTop: 2, flexShrink: 0 }}>●</span>
                  <span style={{ fontSize: 14, color: '#6b7b8d', lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section style={{ padding: '80px 32px', background: '#f8fafb' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#0A7E8C', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>Compare & Save</div>
            <h2 style={{ fontFamily: "'Inter Tight'", fontWeight: 800, fontSize: 30, color: '#1B2A4A', margin: 0 }}>
              One platform for all your insurance needs
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {[
              { icon: '🚗', title: 'Auto Insurance', desc: 'Plain-English Ontario auto insurance education', status: 'Editorial today', live: false, href: '/auto-insurance' },
              { icon: '🏠', title: 'Home Insurance', desc: 'Plain-English Canadian home insurance education', status: 'Editorial today', live: false, href: '/home-insurance' },
              { icon: '🛡️', title: 'Life Insurance', desc: 'Talk to a LLQP-licensed advisor at KLC Group', status: 'Available now', live: true, href: '/life-insurance' },
              { icon: '💳', title: 'Credit Cards', desc: 'Independent reviews with affiliate disclosure', status: 'Editorial today', live: false, href: '/credit-cards' },
              { icon: '📊', title: 'Mortgage Rates', desc: 'Plain-English Canadian mortgage education', status: 'Editorial today', live: false, href: '/mortgages' },
            ].map((prod) => (
              <Link
                key={prod.title}
                href={prod.href}
                style={{
                  background: '#fff', borderRadius: 16, padding: '28px 22px',
                  border: prod.live ? '2px solid rgba(10,126,140,0.2)' : '2px solid #f0f2f5',
                  textAlign: 'center', textDecoration: 'none', color: 'inherit',
                  display: 'block', transition: 'all 0.3s',
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>{prod.icon}</div>
                <h3 style={{ fontFamily: "'Inter Tight'", fontWeight: 700, fontSize: 17, color: '#1B2A4A', margin: '0 0 8px' }}>{prod.title}</h3>
                <p style={{ fontSize: 13, color: '#6b7b8d', lineHeight: 1.5, margin: '0 0 14px' }}>{prod.desc}</p>
                <span
                  style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
                    color: prod.live ? '#0A7E8C' : '#98a2b3',
                    background: prod.live ? 'rgba(10,126,140,0.08)' : '#f0f2f5',
                    padding: '4px 10px', borderRadius: 8,
                  }}
                >
                  {prod.status}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section
        style={{
          padding: '80px 32px',
          background: 'linear-gradient(135deg, #1B2A4A 0%, #0f1e38 100%)',
          position: 'relative', overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(10,126,140,0.06)' }} />
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Inter Tight'", fontWeight: 800, fontSize: 30, color: '#fff', margin: '0 0 12px' }}>
            Be the first to compare
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', margin: '0 0 32px' }}>
            TopRates.ca quote comparison launches once KLC Group Canada Inc. completes RIBO registration. Join the launch list to be first when carriers turn on.
          </p>
          {!submitted ? (
            <div style={{ display: 'flex', gap: 10, maxWidth: 420, margin: '0 auto' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                style={{
                  flex: 1, padding: '14px 18px', borderRadius: 12,
                  border: '2px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.07)',
                  color: '#fff', fontSize: 15, fontFamily: "'Inter Tight'", outline: 'none',
                }}
              />
              <button
                onClick={handleSubmit}
                disabled={submitting}
                style={{
                  background: 'linear-gradient(135deg, #0A7E8C, #0d9aa8)',
                  color: '#fff', border: 'none', borderRadius: 12,
                  padding: '14px 28px', fontSize: 15, fontWeight: 700,
                  cursor: submitting ? 'wait' : 'pointer', fontFamily: "'Inter Tight'",
                  boxShadow: '0 4px 20px rgba(10,126,140,0.35)', whiteSpace: 'nowrap',
                  opacity: submitting ? 0.7 : 1,
                }}
              >
                {submitting ? 'Saving…' : 'Join Waitlist'}
              </button>
            </div>
          ) : (
            <div
              style={{
                background: 'rgba(10,126,140,0.15)', border: '1px solid rgba(10,126,140,0.3)',
                borderRadius: 12, padding: '14px 20px',
                display: 'inline-flex', alignItems: 'center', gap: 10,
              }}
            >
              <span style={{ fontSize: 20 }}>✅</span>
              <span style={{ color: '#12b8ca', fontWeight: 600, fontSize: 14 }}>You&rsquo;re on the list!</span>
            </div>
          )}
          {submitError && !submitted && (
            <div style={{ marginTop: 12, fontSize: 13, color: '#f59e0b' }}>{submitError}</div>
          )}
          {!submitted && (
            <p style={{
              fontSize: 11,
              color: 'rgba(255,255,255,0.4)',
              marginTop: 14,
              maxWidth: 420,
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.5,
            }}>
              By joining, you agree to receive launch updates and Canadian insurance education content
              from <WebhubLink /> (operator of TopRates.ca). Unsubscribe anytime. See our{' '}
              <a href="/privacy" style={{ color: '#0fbdc9' }}>Privacy Policy</a>.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
