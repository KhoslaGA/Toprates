import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';

export const metadata = {
  title: 'Privacy Policy | Toprates.ca',
  description: 'Toprates.ca privacy policy - How we collect, use, and protect your personal information in compliance with Canadian PIPEDA.',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1a365d] to-[#0d9488] text-white py-16">
        <PageWrapper>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-100">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </PageWrapper>
      </div>

      <PageWrapper maxWidth="2xl">
        <div className="prose prose-lg max-w-none py-12">
          <div className="bg-blue-50 border-l-4 border-[#0d9488] p-4 mb-8">
            <p className="text-sm text-gray-700">
              <strong>Last Updated:</strong> April 2024
            </p>
            <p className="text-sm text-gray-700">
              Toprates.ca is committed to protecting your privacy in accordance with the <strong>Personal Information Protection and Electronic Documents Act (PIPEDA)</strong> and applicable provincial privacy laws.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              1. Introduction
            </h2>
            <p>
              Toprates.ca ("we," "us," "our," or "Company") respects your privacy and is committed to transparently collecting, using, and protecting your personal information. This Privacy Policy explains how we handle personal information collected through our website, phone, email, and other interactions with our organization.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              2. Information We Collect
            </h2>
            <p>We collect personal information in the following ways:</p>
            <h3 className="text-xl font-semibold text-[#1a365d] mt-4 mb-2">
              Information You Provide Directly
            </h3>
            <ul>
              <li>Contact information: name, email address, phone number, mailing address, postal code</li>
              <li>Insurance information: type of coverage needed, current policies, claims history, driving record</li>
              <li>Financial information: income level, employment status (only for underwriting purposes)</li>
              <li>Preference information: insurance preferences, communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a365d] mt-4 mb-2">
              Information Collected Automatically
            </h3>
            <ul>
              <li>Website usage: IP address, device type, browser information, pages visited, time spent on site</li>
              <li>Cookies and tracking technologies: We use cookies to enhance your experience</li>
              <li>Call recordings: With your consent, we may record phone calls for quality assurance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              3. How We Use Your Information
            </h2>
            <p>We use personal information for the following purposes:</p>
            <ul>
              <li>Providing insurance quotes and recommendations</li>
              <li>Processing insurance applications and policy updates</li>
              <li>Customer service and support</li>
              <li>Claims administration and settlement</li>
              <li>Fraud prevention and risk management</li>
              <li>Compliance with legal and regulatory obligations</li>
              <li>Marketing communications (with your consent)</li>
              <li>Improving our services and website functionality</li>
              <li>Conducting market research and analysis</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              4. Sharing Your Information
            </h2>
            <p>
              We only share personal information with third parties in the following circumstances:
            </p>
            <ul>
              <li><strong>Insurance Partners:</strong> We share information with insurance companies to provide you with quotes and coverage</li>
              <li><strong>Service Providers:</strong> Third-party vendors who assist us (payment processors, IT providers, customer service platforms)</li>
              <li><strong>Legal Obligations:</strong> When required by law or to protect against fraud</li>
              <li><strong>Consent:</strong> When you explicitly agree to sharing with specific third parties</li>
            </ul>
            <p className="mt-4">
              We do <strong>not</strong> sell, trade, or rent your personal information to third parties for marketing purposes without your explicit consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              5. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul>
              <li>SSL encryption for data transmitted over the internet</li>
              <li>Secure password protection for account access</li>
              <li>Regular security audits and updates</li>
              <li>Restricted access to personal information (employee access limited to job requirements)</li>
              <li>Secure disposal of personal information when no longer needed</li>
            </ul>
            <p className="mt-4">
              While we strive to protect your information, no method of internet transmission or storage is completely secure. You use our services at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              6. Retention of Information
            </h2>
            <p>
              We retain personal information only as long as necessary for the purposes outlined in this policy or as required by applicable laws. Typically:
            </p>
            <ul>
              <li>Active customer information is retained for the duration of the insurance relationship</li>
              <li>Non-customer quote information is retained for 12 months</li>
              <li>After policy termination, information is retained for 7 years for legal and compliance purposes</li>
              <li>You may request deletion of your information (subject to legal requirements)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              7. Your Privacy Rights (PIPEDA)
            </h2>
            <p>Under PIPEDA, you have the following rights:</p>
            <ul>
              <li><strong>Right to Access:</strong> Request access to your personal information held by us</li>
              <li><strong>Right to Correction:</strong> Request correction of inaccurate personal information</li>
              <li><strong>Right to Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
              <li><strong>Right to Opt-Out:</strong> Opt out of marketing communications at any time</li>
              <li><strong>Right to Know Uses:</strong> Request information about how your data is being used</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at <a href="mailto:privacy@toprates.ca" className="text-[#0d9488] hover:text-[#0a7566]">privacy@toprates.ca</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              8. Cookies and Tracking
            </h2>
            <p>
              Our website uses cookies and similar tracking technologies to improve your experience. You can control cookie settings in your browser. Some functionality may be limited if cookies are disabled.
            </p>
            <p className="mt-4">
              We use Google Analytics to understand website usage. You can opt out by installing the Google Analytics opt-out browser extension.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              9. Provincial Privacy Laws
            </h2>
            <p>
              In addition to PIPEDA, we comply with provincial privacy legislation including:
            </p>
            <ul>
              <li>Ontario: Freedom of Information and Protection of Privacy Act (FIPPA)</li>
              <li>Quebec: Law 25 (Bill 64) and Quebec's privacy laws</li>
              <li>British Columbia: Personal Information Protection Act (PIPA)</li>
              <li>Alberta: Personal Information Protection Act (PIPA)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              10. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review their privacy policies before providing personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              11. Marketing Communications
            </h2>
            <p>
              We may send marketing emails, SMS messages, or promotional materials with your consent. You can unsubscribe at any time by:
            </p>
            <ul>
              <li>Clicking "unsubscribe" in our emails</li>
              <li>Texting "STOP" to our SMS number</li>
              <li>Emailing us at <a href="mailto:privacy@toprates.ca" className="text-[#0d9488] hover:text-[#0a7566]">privacy@toprates.ca</a></li>
              <li>Calling us at 1-800-TOPRATES</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              12. Children's Privacy
            </h2>
            <p>
              Our services are not intended for individuals under 18 years old. We do not knowingly collect personal information from children. If we discover we have collected information from a child, we will promptly delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              13. Privacy Officer & Complaints
            </h2>
            <p>
              If you have privacy concerns or wish to file a complaint:
            </p>
            <p className="mt-4">
              <strong>Privacy Officer</strong><br />
              Toprates.ca<br />
              250 King Street West, Suite 1200<br />
              Toronto, ON M5H 3S5<br />
              Email: <a href="mailto:privacy@toprates.ca" className="text-[#0d9488] hover:text-[#0a7566]">privacy@toprates.ca</a><br />
              Phone: 1-800-TOPRATES
            </p>
            <p className="mt-4">
              If you are unsatisfied with our response, you may file a complaint with the Office of the Privacy Commissioner of Canada (OPC) at <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer" className="text-[#0d9488] hover:text-[#0a7566]">www.priv.gc.ca</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
              14. Policy Updates
            </h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be posted to this page with an updated "Last Updated" date. Continued use of our services indicates acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="bg-blue-50 border-l-4 border-[#0d9488] p-4 mt-8">
            <p className="text-sm text-gray-700">
              <strong>Contact Us:</strong> If you have questions about this Privacy Policy or our privacy practices, please contact our Privacy Officer at <a href="mailto:privacy@toprates.ca" className="text-[#0d9488] hover:text-[#0a7566]">privacy@toprates.ca</a> or call 1-800-TOPRATES.
            </p>
          </section>
        </div>
      </PageWrapper>
    </>
  );
}
