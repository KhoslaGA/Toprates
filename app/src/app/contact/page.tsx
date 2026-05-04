import React from 'react';
import Link from 'next/link';
import PageWrapper from '@/components/layout/PageWrapper';
import ContactForm from '@/components/contact/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { WebhubLink } from '@/components/legal/WebhubLink';

export const metadata = {
  title: 'Contact TopRates.ca | Get in Touch',
  description:
    'Contact TopRates.ca with questions about insurance, mortgages, credit cards, or investing. Operated by Webhub4u Inc. We respond within one business day.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1a365d] to-[#0d9488] text-white py-16">
        <PageWrapper>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in touch
            </h1>
            <p className="text-xl text-gray-100">
              Questions about Canadian insurance, mortgages, credit cards, or investing? Send us a quick note and we&rsquo;ll be in touch within one business day.
            </p>
          </div>
        </PageWrapper>
      </div>

      <PageWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#1a365d] mb-2">
                Send us a message
              </h2>
              <p className="text-gray-600 mb-6">
                Tell us what you&rsquo;re interested in. For insurance inquiries, your information may be shared with KLC Group Canada Inc., a licensed insurance advisory firm. See our{' '}
                <Link href="/privacy" className="text-[#0d9488] underline">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href="/legal" className="text-[#0d9488] underline">
                  legal disclosures
                </Link>
                .
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <Card className="mb-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-semibold mb-1">
                  <a
                    href="mailto:toprates56@gmail.com"
                    className="text-[#0d9488] hover:text-[#0a7566]"
                  >
                    toprates56@gmail.com
                  </a>
                </p>
                <p className="text-gray-600 text-sm">
                  General inquiries, privacy and data-protection requests, and complaints about
                  content or operations.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Operating from</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-semibold mb-1"><WebhubLink /></p>
                <p className="text-gray-600 text-sm">
                  Brampton, Ontario, Canada
                  <br />
                  Mailing address available on request via toprates56@gmail.com
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>About us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  TopRates.ca is operated by <WebhubLink />, a Canadian technology company. Insurance inquiries are referred to KLC Group Canada Inc., a licensed insurance advisory firm.
                </p>
                <Link
                  href="/legal"
                  className="text-[#0d9488] underline text-sm font-semibold"
                >
                  Read full disclosure →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <section className="py-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-8 text-center">
            Frequently asked questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-[#1a365d] mb-2">
                How quickly will I hear back?
              </h3>
              <p className="text-gray-700">
                We aim to respond to all contact-form submissions within one business day. Insurance inquiries are passed to KLC Group Canada Inc., who will reach out separately to discuss your needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1a365d] mb-2">
                Is TopRates.ca a licensed broker?
              </h3>
              <p className="text-gray-700">
                No. TopRates.ca is operated by <WebhubLink />, a technology company. <WebhubLink /> is not a licensed insurance broker, mortgage broker, credit advisor, or investment advisor. Insurance inquiries are referred to KLC Group Canada Inc., an independent insurance advisory firm. See{' '}
                <Link href="/legal" className="text-[#0d9488] underline">
                  /legal
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1a365d] mb-2">
                What insurance can I ask about today?
              </h3>
              <p className="text-gray-700">
                Through KLC Group Canada Inc., we can refer inquiries about life insurance, critical illness, disability, and travel insurance. Property and casualty (auto, home, business, tenant) is planned for 2027 alongside KLC Group Canada Inc.&rsquo;s RIBO registration.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1a365d] mb-2">
                What happens to my information?
              </h3>
              <p className="text-gray-700">
                Your information is collected by <WebhubLink /> and, with your consent, may be shared with the relevant regulated partner (e.g. KLC Group Canada Inc. for insurance, a registered mortgage brokerage for mortgages). See our{' '}
                <Link href="/privacy" className="text-[#0d9488] underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
