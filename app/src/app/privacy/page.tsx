import React from 'react';
import Link from 'next/link';
import PageWrapper from '@/components/layout/PageWrapper';

export const metadata = {
  title: 'Privacy Policy | TopRates.ca',
  description:
    'TopRates.ca privacy policy. Operated by Webhub4u Inc. PIPEDA-compliant practices covering newsletter signups, contact-form inquiries, and analytics.',
};

const LAST_UPDATED = 'May 2026';

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1a365d] to-[#0d9488] text-white py-16">
        <PageWrapper>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-100">
              How TopRates.ca (Webhub4u Inc.) handles your personal information
            </p>
          </div>
        </PageWrapper>
      </div>

      <PageWrapper maxWidth="2xl">
        <div className="prose prose-lg max-w-none py-12">
          <div className="bg-blue-50 border-l-4 border-[#0d9488] p-4 mb-8">
            <p className="text-sm text-gray-700">
              <strong>Last Updated:</strong> {LAST_UPDATED}
            </p>
            <p className="text-sm text-gray-700">
              TopRates.ca is operated by <strong>Webhub4u Inc.</strong>, a Canadian technology
              company. This Privacy Policy describes how we collect, use, and protect personal
              information, in compliance with the{' '}
              <strong>Personal Information Protection and Electronic Documents Act (PIPEDA)</strong>{' '}
              and applicable provincial privacy laws.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">1. Who we are</h2>
            <p>
              TopRates.ca is operated by <strong>Webhub4u Inc.</strong>, a private Canadian
              corporation. Webhub4u Inc. is the entity responsible for personal information
              collected through this website. <strong>Webhub4u Inc. is not a licensed insurance
              broker, mortgage broker, credit advisor, or investment advisor.</strong> Insurance
              inquiries received through TopRates.ca are referred to{' '}
              <strong>KLC Group Canada Inc.</strong>, an independent insurance advisory firm
              licensed under Ontario&rsquo;s life-insurance agent licensing framework administered
              by FSRA. See <Link href="/legal" className="text-[#0d9488] underline">/legal</Link>{' '}
              for full partnership and licensing disclosure.
            </p>
            <p className="mt-4">
              <strong>Privacy Officer:</strong>{' '}
              <a href="mailto:toprates56@gmail.com" className="text-[#0d9488] underline">
                toprates56@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">2. What we collect</h2>
            <p>The personal information we collect is limited to:</p>
            <ul>
              <li>
                <strong>Newsletter signups:</strong> email address, the page where you signed up,
                the consent text shown to you, your IP address, your browser user agent, and the
                referring URL. (We capture the consent record so we can demonstrate, under CASL,
                exactly what you agreed to and when.)
              </li>
              <li>
                <strong>Contact form (/contact and product-page CTAs):</strong> when you submit the
                form we collect the product category you selected, your name, email, phone
                (optional), postal code (optional), and the message you wrote. We also store the
                consent text shown at submission, your IP address, browser user agent, and a
                timestamp. None of this is collected until you actively submit the form with
                explicit consent.
              </li>
              <li>
                <strong>Standard analytics:</strong> page views, referrer, browser type, language,
                approximate location (IP-based), and how you navigate the site. Where we use a
                privacy-respecting analytics provider (e.g. Plausible), no cookies are set and
                visits are not associated with an identifiable individual.
              </li>
              <li>
                <strong>Cookies:</strong> we may set a small number of cookies for site
                functionality (e.g. preserving form state). We do not currently use third-party
                advertising or tracking cookies.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              3. What we do <em>not</em> collect
            </h2>
            <p>
              The following categories of information are common in insurance underwriting but are{' '}
              <strong>not</strong> collected by TopRates.ca. If you choose to be referred to KLC
              Group Canada Inc. or another regulated partner, those providers may collect
              additional information directly from you under their own privacy practices:
            </p>
            <ul>
              <li>Driver&rsquo;s licence numbers</li>
              <li>Vehicle identification numbers (VINs)</li>
              <li>Claims history</li>
              <li>Driving records</li>
              <li>Financial information (income, banking details, payment data)</li>
              <li>Health information (medical records, medication, etc.)</li>
              <li>Call recordings or call-centre logs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">4. Why we collect it</h2>
            <p>The personal information we collect is used only for the following purposes:</p>
            <ul>
              <li>
                <strong>To respond to your inquiry.</strong> If you submitted the contact form, we
                use your information to reply, and where appropriate, to refer you to a regulated
                partner (see Section 5).
              </li>
              <li>
                <strong>To send the newsletter.</strong> If you subscribed, we send Canadian
                insurance and personal-finance educational content.
              </li>
              <li>
                <strong>To improve the website</strong> using aggregate analytics (no individual
                tracking).
              </li>
              <li>
                <strong>To comply with legal obligations</strong> (audit, regulator inquiries,
                court orders).
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">5. Who we share it with</h2>
            <p>We share personal information with the following parties only:</p>
            <ul>
              <li>
                <strong>Sanity (sanity.io)</strong> &mdash; our headless content management
                system, which hosts newsletter records, contact-inquiry records, and the public
                website&rsquo;s content. Data is stored on servers operated by Sanity in their
                selected region.
              </li>
              <li>
                <strong>Vercel</strong> &mdash; our hosting provider. Vercel processes site
                requests and may log standard server-side metadata (IP, user agent, request path).
              </li>
              <li>
                <strong>Plausible Analytics</strong> (or equivalent privacy-respecting analytics
                provider, if enabled) &mdash; aggregate visit metrics. No cookies, no
                identifiable-person tracking.
              </li>
              <li>
                <strong>KLC Group Canada Inc.</strong> &mdash; an independent insurance advisory
                firm licensed under Ontario&rsquo;s life-insurance agent licensing framework
                administered by FSRA. Inquiries about life insurance, critical illness, disability,
                or travel insurance submitted through our contact form are referred to KLC Group
                Canada Inc. with your consent. KLC Group Canada Inc. operates under its own
                privacy practices.
              </li>
              <li>
                <strong>Mortgage brokerage partner</strong> &mdash; a registered Ontario mortgage
                brokerage (under MBLAA). Mortgage inquiries submitted through our contact form may
                be referred under the MBLAA referral-arrangement exemption with your consent.
              </li>
              <li>
                <strong>Credit-card issuers and affiliate networks</strong> &mdash; where you click
                an affiliate link on a credit-cards page and apply for a card, the card issuer (or
                an affiliate-tracking provider) collects your application data directly.
                TopRates.ca only receives anonymized referral confirmations.
              </li>
              <li>
                <strong>Future P&amp;C insurance partner</strong> &mdash; we anticipate launching
                auto, home, business, and tenant insurance comparison in 2027 alongside KLC Group
                Canada Inc.&rsquo;s registration as a RIBO-licensed brokerage. Until then, no P&amp;C
                inquiries are forwarded; they are held internally on a future-quote list with your
                consent.
              </li>
              <li>
                <strong>Law enforcement, regulators, or courts</strong> &mdash; only when required
                by law (subpoena, regulatory inquiry, court order) or to protect against fraud or
                physical harm.
              </li>
            </ul>
            <p>
              We do <strong>not</strong> sell personal information. We do not share it with
              advertisers or data brokers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">6. How long we keep it</h2>
            <p>
              We retain personal information only as long as necessary for the purposes for which
              it was collected (PIPEDA Principle 5):
            </p>
            <ul>
              <li>
                <strong>Newsletter records:</strong> retained until you unsubscribe, plus an
                additional 12-month audit window to demonstrate consent compliance under CASL.
                Default purge target is 24 months from signup unless renewed consent is given.
              </li>
              <li>
                <strong>Contact inquiries (unconverted):</strong> retained for 90 days if no policy,
                referral conversion, or other follow-up action results, then purged.
              </li>
              <li>
                <strong>Contact inquiries (converted to a policy or product):</strong> retained for
                the period required by the regulator governing the product (RIBO, FSRA, MBLAA, or
                the issuer&rsquo;s rules) &mdash; typically 7 years.
              </li>
              <li>
                <strong>Analytics data:</strong> aggregated event-level data retained for service
                improvement; individual server logs are retained for the duration of our hosting
                provider&rsquo;s default policy (typically 30&ndash;90 days).
              </li>
              <li>
                <strong>Withdrawn consent records:</strong> we retain a record of withdrawal
                indefinitely for CASL audit purposes, but we cease all commercial messaging to the
                address.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">7. Your rights</h2>
            <p>Under PIPEDA you have the right to:</p>
            <ul>
              <li>
                <strong>Access</strong> &mdash; request a copy of the personal information we hold
                about you.
              </li>
              <li>
                <strong>Correction</strong> &mdash; ask us to correct inaccurate or incomplete
                information.
              </li>
              <li>
                <strong>Deletion</strong> &mdash; request deletion of your personal information,
                subject to our legal retention obligations.
              </li>
              <li>
                <strong>Withdraw consent</strong> &mdash; opt out of marketing emails (every email
                contains an unsubscribe link), or revoke consent for any other use of your
                information.
              </li>
              <li>
                <strong>Complain</strong> &mdash; if you believe we have mishandled your personal
                information, you can complain to our Privacy Officer at{' '}
                <a href="mailto:toprates56@gmail.com" className="text-[#0d9488] underline">
                  toprates56@gmail.com
                </a>{' '}
                or to the Office of the Privacy Commissioner of Canada (OPC) at{' '}
                <a
                  href="https://www.priv.gc.ca/en/report-a-concern/"
                  className="text-[#0d9488] underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  priv.gc.ca/en/report-a-concern
                </a>
                .
              </li>
            </ul>
            <p>
              To exercise any of these rights, email{' '}
              <a href="mailto:toprates56@gmail.com" className="text-[#0d9488] underline">
                toprates56@gmail.com
              </a>{' '}
              from the address associated with your record. We aim to respond within 30 days as
              required by PIPEDA.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">8. How we protect it</h2>
            <p>
              We use industry-standard physical, administrative, and technical safeguards to
              protect personal information:
            </p>
            <ul>
              <li>
                Encryption in transit (HTTPS/TLS) on every page that collects personal information.
              </li>
              <li>Encryption at rest for our content and inquiry databases.</li>
              <li>Access controls limiting who at Webhub4u Inc. can access raw records.</li>
              <li>
                Service providers (Sanity, Vercel, Plausible) are contractually bound to handle
                personal information consistent with PIPEDA.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">9. Cross-border data</h2>
            <p>
              Some of our service providers (including Sanity and Vercel) may store data on
              servers located outside Canada. When personal information is transferred outside
              Canada, it may be subject to the laws of the country where the servers are located
              (typically the United States or the European Union for Sanity / Vercel). We rely on
              contractual safeguards with each provider to ensure equivalent protection.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              10. Changes to this policy
            </h2>
            <p>
              We will update this Privacy Policy when our data practices change &mdash; including
              before the planned 2027 launch of P&amp;C insurance comparison alongside KLC Group
              Canada Inc.&rsquo;s RIBO registration. Changes will be reflected in the
              &ldquo;Last Updated&rdquo; date at the top. Material changes will be communicated to
              newsletter subscribers via email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">11. Contact</h2>
            <p>
              <strong>Webhub4u Inc.</strong>
              <br />
              For privacy, data protection, general inquiries, editorial complaints, or website
              operations:{' '}
              <a href="mailto:toprates56@gmail.com" className="text-[#0d9488] underline">
                toprates56@gmail.com
              </a>
              <br />
              Mailing address: available on request via toprates56@gmail.com
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Operating from Brampton, Ontario, Canada.
            </p>
          </section>

          <section className="bg-blue-50 border-l-4 border-[#0d9488] p-4 mt-8">
            <p className="text-sm text-gray-700">
              <strong>Acknowledgment:</strong> By using TopRates.ca, you acknowledge that you have
              read and understood this Privacy Policy. If you do not agree with any part of this
              policy, please do not use the site or submit personal information through any of our
              forms.
            </p>
          </section>
        </div>
      </PageWrapper>
    </>
  );
}
