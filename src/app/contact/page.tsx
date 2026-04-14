import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import ContactForm from '@/components/shared/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata = {
  title: 'Contact Toprates.ca | Get in Touch with Our Insurance Experts',
  description: 'Contact Toprates.ca for insurance quotes, questions, or support. Available by phone, email, or contact form.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1a365d] to-[#0d9488] text-white py-16">
        <PageWrapper>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-100">
              Have questions about your insurance? Our friendly team is ready to help.
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
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            {/* Phone */}
            <Card className="mb-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.856l.851 4.694a1 1 0 01-.64 1.159l-1.423.713c.15.404.45.992.839 1.622.389.63.878 1.28 1.486 1.886.608.608 1.256 1.097 1.886 1.486.63.389 1.218.689 1.622.839l.713-1.423a1 1 0 011.159-.64l4.694.851a1 1 0 01.856.986v2.153a1 1 0 01-1 1h-2C7.82 19 4 15.18 4 10.5V5a1 1 0 011-1h2.153z" />
                  </svg>
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-semibold mb-2">1-800-TOPRATES</p>
                <p className="text-gray-600 text-sm mb-3">
                  Toll-free across Canada
                </p>
                <p className="text-gray-700 font-semibold mb-2">(416) 555-TOPS</p>
                <p className="text-gray-600 text-sm">
                  Toronto office local line
                </p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="mb-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-semibold mb-2">
                  <a href="mailto:hello@toprates.ca" className="text-[#0d9488] hover:text-[#0a7566]">
                    hello@toprates.ca
                  </a>
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  General inquiries
                </p>
                <p className="text-gray-700 font-semibold mb-2">
                  <a href="mailto:quotes@toprates.ca" className="text-[#0d9488] hover:text-[#0a7566]">
                    quotes@toprates.ca
                  </a>
                </p>
                <p className="text-gray-600 text-sm">
                  Quote requests
                </p>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="mb-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Head Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-semibold mb-1">Toprates.ca</p>
                <p className="text-gray-600 text-sm mb-3">
                  250 King Street West<br />
                  Suite 1200<br />
                  Toronto, ON M5H 3S5<br />
                  Canada
                </p>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card hover:shadow-lg transition-shadow>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-semibold">Monday - Friday</span>
                    <span className="text-gray-600">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-semibold">Saturday</span>
                    <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-semibold">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                  <p className="text-gray-500 italic mt-3">
                    All times in Eastern Time (ET)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <section className="py-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-6">
            Visit Us
          </h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-gray-300">
            <div className="text-center">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-600">
                Map will be integrated here
              </p>
              <p className="text-sm text-gray-500 mt-1">
                250 King Street West, Suite 1200, Toronto, ON M5H 3S5
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-[#1a365d] mb-2">
                How long does it take to get a quote?
              </h3>
              <p className="text-gray-700">
                Most quotes can be provided within 24 hours of submitting your information. For simple cases, we often provide same-day quotes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1a365d] mb-2">
                Do you offer quotes by phone?
              </h3>
              <p className="text-gray-700">
                Yes! Call our team at 1-800-TOPRATES to discuss your insurance needs and get a personalized quote over the phone.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1a365d] mb-2">
                Can I change my policy after purchase?
              </h3>
              <p className="text-gray-700">
                Absolutely. You can adjust your coverage, deductibles, and add-ons anytime. Just contact us to make changes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1a365d] mb-2">
                Are you licensed to sell insurance?
              </h3>
              <p className="text-gray-700">
                Yes, Toprates.ca is fully licensed and regulated by provincial insurance regulators across Canada.
              </p>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
