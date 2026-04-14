import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'About Toprates.ca | Canadian Insurance Brokerage',
  description: 'Learn about Toprates.ca - Canada\'s trusted insurance broker with expert advisors dedicated to finding you the best coverage.',
};

export default function AboutPage() {
  const team = [
    {
      name: 'David Miller',
      role: 'Founder & Chief Insurance Officer',
      bio: 'With 20+ years of insurance industry experience, David founded Toprates.ca to bring transparency and personalized service to Canadian insurance customers.',
    },
    {
      name: 'Jessica Wong',
      role: 'VP of Client Relations',
      bio: 'Jessica ensures every client receives the best possible service and coverage recommendations tailored to their unique needs.',
    },
    {
      name: 'Robert Dubois',
      role: 'Lead Insurance Advisor',
      bio: 'A licensed insurance broker fluent in French and English, Robert specializes in commercial and personal insurance solutions.',
    },
    {
      name: 'Sarah Patel',
      role: 'Insurance Advisor',
      bio: 'Sarah focuses on helping young families and first-time homeowners navigate the Canadian insurance landscape.',
    },
  ];

  const values = [
    {
      title: 'Transparency',
      description: 'No hidden fees, no surprises. We clearly explain every detail of your coverage and why we recommend specific policies.',
    },
    {
      title: 'Expertise',
      description: 'Our licensed advisors have decades of combined experience across all types of Canadian insurance.',
    },
    {
      title: 'Personal Service',
      description: 'You\'re not just a number to us. We take time to understand your situation and recommend personalized solutions.',
    },
    {
      title: 'Canadian Knowledge',
      description: 'We specialize in understanding Canadian insurance regulations, provincial differences, and local market conditions.',
    },
    {
      title: 'Competitive Rates',
      description: 'We work with multiple insurers across Canada to ensure you get the best possible rates for your coverage.',
    },
    {
      title: 'Easy Process',
      description: 'Getting quotes and switching policies is simple with our streamlined online and phone-based services.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1a365d] to-[#0d9488] text-white py-16">
        <PageWrapper>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Toprates.ca
            </h1>
            <p className="text-xl text-gray-100">
              Canada's trusted insurance brokerage dedicated to helping you find the coverage you need at rates you can afford.
            </p>
          </div>
        </PageWrapper>
      </div>

      <PageWrapper>
        {/* Mission Section */}
        <section className="py-12 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1a365d] mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                At Toprates.ca, our mission is to simplify insurance for Canadians. We believe everyone deserves access to quality insurance coverage explained clearly by experts who understand their local market.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We've been helping Canadian families and businesses protect what matters most for over 15 years. Our success is measured by the trust our clients place in us and their peace of mind knowing they have the right coverage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're insuring your first car, protecting your family home, or securing your business, we're here to guide you every step of the way.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-[#1a365d] mb-2">50,000+</div>
                  <p className="text-gray-700">Happy customers across Canada</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#0d9488] mb-2">$2B+</div>
                  <p className="text-gray-700">In annual insurance premiums managed</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#f59e0b] mb-2">15+</div>
                  <p className="text-gray-700">Years of trusted service</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-12 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-12 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-blue-200 to-teal-200 h-48 flex items-center justify-center">
                  <div className="text-6xl text-white opacity-30">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-[#0d9488] font-semibold text-sm mt-1">
                    {member.role}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">
            Why Choose Toprates.ca?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#f59e0b] text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1a365d] mb-2">
                  Multi-Provider Access
                </h3>
                <p className="text-gray-700">
                  We work with Canada's top insurers, giving you access to competitive rates you won't find elsewhere.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#f59e0b] text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1a365d] mb-2">
                  Licensed Advisors
                </h3>
                <p className="text-gray-700">
                  All our advisors are fully licensed and undergo continuous professional development to stay current.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#f59e0b] text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1a365d] mb-2">
                  24/7 Support
                </h3>
                <p className="text-gray-700">
                  Have a question about your coverage? Our team is available via phone, email, and chat during business hours.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#f59e0b] text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1a365d] mb-2">
                  Canadian Expertise
                </h3>
                <p className="text-gray-700">
                  We understand provincial regulations, unique Canadian risks, and regional insurance requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Trust */}
        <section className="py-12 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">
            Trust & Certifications
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-[#1a365d] mb-2">A+</div>
                <p className="text-gray-700 font-semibold">BBB Rating</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#0d9488] mb-2">100%</div>
                <p className="text-gray-700 font-semibold">Customer Satisfaction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">IIROC</div>
                <p className="text-gray-700 font-semibold">Licensed & Regulated</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#1a365d] mb-2">ISO</div>
                <p className="text-gray-700 font-semibold">Certified</p>
              </div>
            </div>
            <p className="text-center text-gray-700 mt-6">
              Toprates.ca is fully licensed and regulated by provincial insurance regulators across Canada. We maintain the highest standards of professional conduct and customer protection.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="bg-gradient-to-r from-[#1a365d] to-[#0d9488] rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get the Best Insurance Rates?
            </h2>
            <p className="text-lg mb-8 text-gray-100">
              Join thousands of satisfied Canadian customers who trust Toprates.ca for their insurance needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/get-quotes" variant="accent" size="lg">
                Get a Quote Today
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1a365d]">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
