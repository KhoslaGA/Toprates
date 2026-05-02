import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';

export const metadata = {
  title: 'Privacy Policy | TopRates.ca',
  description:
    'TopRates.ca privacy policy. Operated by Webhub4u Inc. PIPEDA-compliant practices covering waitlist signups, quote requests, and analytics.',
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
              TopRates.ca is operated by <strong>Webhub4u Inc.</strong> as a pre-launch insurance
              comparison platform. This Privacy Policy describes how we collect, use, and protect
              personal information today, in compliance with the{' '}
              <strong>Personal Information Protection and Electronic Documents Act (PIPEDA)</strong>{' '}
              and applicable provincial privacy laws. The full comparison engine and brokerage
              services launch in 2027 — this Policy will be updated before that launch to reflect
              additional data flows (quote engine, partner brokerage).
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">1. Who we are</h2>
            <p>
              TopRates.ca is operated by <strong>Webhub4u Inc.</strong>, a private Canadian
              corporation. Webhub4u Inc. is the entity responsible for personal information
              collected through this website. TopRates.ca is currently a pre-launch platform; it is
              not yet a registered insurance broker and does not currently sell insurance, take
              applications, or place policies.
            </p>
            <p className="mt-4">
              <strong>Privacy Officer:</strong>{' '}
              <a href="mailto:privacy@toprates.ca" className="text-[#0d9488] underline">
                privacy@toprates.ca
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">2. What we collect today</h2>
            <p>At our current pre-launch stage, the personal information we collect is limited:</p>
            <ul>
              <li>
                <strong>Waitlist signups:</strong> email address, plus the page where you signed
                up, the consent text shown to you, your IP address, your browser user agent, and
                the referring URL. (We capture the consent record so we can demonstrate, under
                CASL, exactly what you agreed to and when.)
              </li>
              <li>
                <strong>Quote-request form (/get-quotes):</strong> when you fill out the form, we
                collect your name, email, phone number, postal code, and the type of insurance
                you&rsquo;re asking about. We do not collect any of this until you actively submit
                the form with explicit consent.
              </li>
              <li>
                <strong>Standard analytics:</strong> page views, referrer, browser type, language,
                approximate location (IP-based), and how you navigate the site. If we use a
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
              3. What we do <em>not</em> collect (yet)
            </h2>
            <p>
              The following categories of information are common in insurance quoting but are{' '}
              <strong>not</strong> collected today, because the platform doesn&rsquo;t support
              quoting yet. They will be collected through the partner brokerage at launch (2027),
              and this Privacy Policy will be updated before that happens:
            </p>
            <ul>
              <li>Driver&rsquo;s licence numbers</li>
              <li>Vehicle identification numbers (VINs)</li>
              <li>Claims history</li>
              <li>Driving records</li>
              <li>Financial information (income, banking details, payment data)</li>
              <li>Call recordings or call-centre logs</li>
              <li>Health information (relevant for life and health insurance only)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">4. Why we collect it</h2>
            <p>The personal information we collect today is used only for the following purposes:</p>
            <ul>
              <li>
                <strong>To notify you of launch.</strong> If you joined the waitlist, we&rsquo;ll
                email you when TopRates.ca goes live.
              </li>
              <li>
                <strong>To send pre-launch insurance content</strong> (only if you opted in to
                marketing). This includes guides, reform updates, and educational material.
              </li>
              <li>
                <strong>To pass quote requests to a partner broker</strong> (if you submitted the
                quote form with explicit consent). Today we are still finalizing partner
                arrangements; quote requests received now will be held until a registered broker
                partner is in place to fulfill them. You will be notified before any quote request
                is shared.
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
                <strong>Sanity (sanity.io)</strong> &mdash; our headless content management system,
                which hosts waitlist entries and the public website&rsquo;s content. Data is stored
                on servers operated by Sanity in their selected region.
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
                <strong>Licensed broker partner</strong> &mdash; at launch, quote requests will be
                forwarded to a RIBO-registered insurance brokerage to handle the regulated
                activity. We will name the partner brokerage on this page when the relationship is
                in place. You will provide explicit consent before any quote request is shared.
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
                <strong>Waitlist entries:</strong> retained until you unsubscribe, plus an
                additional 12-month audit window to demonstrate consent compliance under CASL.
                Default purge target is 24 months from signup unless extended consent is given.
              </li>
              <li>
                <strong>Quote requests:</strong> retained for 90 days if not converted into a
                policy purchase, then purged.
              </li>
              <li>
                <strong>Analytics data:</strong> aggregated event-level data retained for the
                purposes of service improvement; individual server logs are retained for the
                duration of our hosting provider&rsquo;s default policy (typically 30-90 days).
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
                <a href="mailto:privacy@toprates.ca" className="text-[#0d9488] underline">
                  privacy@toprates.ca
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
              <a href="mailto:privacy@toprates.ca" className="text-[#0d9488] underline">
                privacy@toprates.ca
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
              <li>Encryption at rest for our content and waitlist databases.</li>
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
              before the platform launches in 2027 with the partner brokerage and quote engine.
              Changes will be reflected in the &ldquo;Last Updated&rdquo; date at the top.
              Material changes will be communicated to anyone on the waitlist via email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">11. Contact</h2>
            <p>
              <strong>Webhub4u Inc.</strong>
              <br />
              Privacy Officer:{' '}
              <a href="mailto:privacy@toprates.ca" className="text-[#0d9488] underline">
                privacy@toprates.ca
              </a>
              <br />
              General contact:{' '}
              <a href="mailto:hello@toprates.ca" className="text-[#0d9488] underline">
                hello@toprates.ca
              </a>
              <br />
              Mailing address: available on request via privacy@toprates.ca
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
