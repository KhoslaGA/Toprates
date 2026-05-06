import type { Metadata } from 'next';
import Link from 'next/link';
import { Bo } from '@/components/brand/Bo';
import { colors, fonts } from '@/styles/tokens';

export const metadata: Metadata = {
  title: 'Glossary — Insurance terms in plain English | TopRates.ca',
  description:
    'A-to-Z glossary of Canadian insurance terms, defined in plain English. Independent Canadian insurance education.',
  alternates: { canonical: '/glossary' },
};

const TERMS: { term: string; def: string }[] = [
  { term: 'Accident benefits', def: 'Coverage that pays for medical, rehabilitation, and income replacement after an auto accident, regardless of who was at fault. In Ontario, much of this becomes optional after July 1, 2026.' },
  { term: 'Adjuster', def: 'The insurance company employee (or third party) who investigates a claim and decides how much the company pays.' },
  { term: 'Aggregate limit', def: 'The maximum amount your insurer will pay across all claims in a policy period — common in liability and business policies.' },
  { term: 'Beneficiary', def: 'The person who receives the payout from a life insurance policy when the insured person dies.' },
  { term: 'Binder', def: 'A short-term confirmation of coverage issued before the full policy is printed. Treat it like temporary insurance — read it.' },
  { term: 'Broker', def: 'A licensed intermediary who shops insurance from multiple carriers on your behalf. Different from an agent (who sells one company\'s products).' },
  { term: 'Claim', def: 'A request to your insurance company for payment after a covered loss.' },
  { term: 'Coverage', def: 'The protection provided by a policy. Each line item in your declaration page is a separate coverage with its own limit.' },
  { term: 'Deductible', def: "The amount you pay out of pocket on a claim before the insurance company pays. Higher deductible = lower premium." },
  { term: 'Endorsement', def: 'A modification to a standard policy — adding, removing, or changing coverage. Sometimes called a "rider."' },
  { term: 'Exclusion', def: 'Something a policy specifically does not cover. Read these carefully — they\'re the part of the policy that decides whether a claim gets paid.' },
  { term: 'Liability', def: "Coverage for harm or damage you cause to other people or their property. Required by law on every Canadian auto policy." },
  { term: 'Named perils', def: 'A policy that covers only the specific risks listed (e.g., fire, theft). Different from "all risks" which covers everything except listed exclusions.' },
  { term: 'Premium', def: 'What you pay for the insurance. Annual or monthly.' },
  { term: 'Pro-rata', def: 'A refund or charge calculated proportionally to the time used. If you cancel a policy 6 months in, you usually get a pro-rated refund of the remaining 6 months.' },
  { term: 'Replacement cost', def: "Coverage that pays to replace your damaged property with new equivalent items. The alternative is 'actual cash value,' which deducts depreciation." },
  { term: 'Subrogation', def: "Your insurer's right to recover money from a third party after paying your claim. If someone else caused your loss, your insurer can sue them to get the money back." },
  { term: 'Underwriting', def: "The insurance company's process of evaluating your risk and deciding what to charge — or whether to insure you at all." },
  { term: 'Waiver', def: 'A clause where you give up a right — for example, the "waiver of depreciation" endorsement on a new vehicle ensures you get full replacement cost in the first few years.' },
];

export default function GlossaryPage() {
  return (
    <main>
      <section style={{ background: colors.cream, padding: '64px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <Bo size={100} pose="wink" />
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 11,
              letterSpacing: 2,
              color: colors.teal,
              fontWeight: 700,
              textTransform: 'uppercase',
              marginTop: 18,
              marginBottom: 12,
            }}
          >
            INDEPENDENT CANADIAN INSURANCE EDUCATION
          </div>
          <h1
            style={{
              fontFamily: fonts.heading,
              fontWeight: 900,
              fontSize: 44,
              color: colors.navy,
              margin: '0 0 14px',
              letterSpacing: '-1.2px',
              lineHeight: 1.1,
            }}
          >
            The glossary.
          </h1>
          <p style={{ fontFamily: fonts.heading, fontSize: 17, color: colors.muted, lineHeight: 1.55, margin: 0 }}>
            Every insurance term that&rsquo;s ever confused you, defined in plain English. We&rsquo;ll
            keep adding to this. If you spot something missing, email{' '}
            <a href="mailto:toprates56@gmail.com" style={{ color: colors.teal }}>
              toprates56@gmail.com
            </a>
            .
          </p>
        </div>
      </section>

      <section style={{ padding: '64px 24px', background: colors.paper }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {TERMS.map((t) => (
            <div
              key={t.term}
              style={{
                padding: '18px 0',
                borderBottom: `1px solid ${colors.borderFaint}`,
              }}
            >
              <h2
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 800,
                  fontSize: 18,
                  color: colors.navy,
                  margin: '0 0 6px',
                  letterSpacing: '-0.2px',
                }}
              >
                {t.term}
              </h2>
              <p
                style={{
                  fontFamily: fonts.heading,
                  fontSize: 15,
                  color: colors.muted,
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {t.def}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '48px 24px', background: colors.cream, textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 24, color: colors.navy, margin: '0 0 12px' }}>
            More definitions coming.
          </h2>
          <p style={{ fontFamily: fonts.heading, fontSize: 15, color: colors.muted, marginBottom: 24 }}>
            Subscribe to get new entries (and full guides) in your inbox.
          </p>
          <Link
            href="/#newsletter"
            style={{
              display: 'inline-block',
              padding: '12px 26px',
              background: colors.teal,
              color: '#fff',
              borderRadius: 999,
              fontFamily: fonts.heading,
              fontWeight: 800,
              textDecoration: 'none',
              fontSize: 15,
            }}
          >
            Subscribe →
          </Link>
        </div>
      </section>
    </main>
  );
}
