"use client";
import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';

const PrivacyPolicyPage = () => {
  return (
    <>
      <BreadCumb bgimg="/assets/img/BeatPrice.jpg" Title="Privacy Policy" />
      
      <div className="privacy-policy-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="privacy-content">
                
                {/* Header */}
                <div className="privacy-header mb-5">
                  <h1 className="mb-3">Privacy Policy – M-R Tours</h1>
                  <p className="text-muted"><strong>Last Updated:</strong> December 2026</p>
                  <p>
                    M-R Tours (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy and ensuring that your personal data is handled safely, securely, and responsibly. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website, submit a booking inquiry, contact us, or use our services related to Hajj, Umrah, or travel packages.
                  </p>
                  <p>
                    By using our website or submitting your information through any platform, you agree to the terms outlined in this Privacy Policy.
                  </p>
                </div>

                {/* Section 1 */}
                <div className="privacy-section mb-5">
                  <h2 className="section-title mb-4">1. Information We Collect</h2>
                  <p>We collect personal information in the following ways:</p>
                  
                  <h4 className="mt-4 mb-3">a. Information You Provide Directly</h4>
                  <p>When you fill out a form, register interest, make a booking, or contact us through:</p>
                  <ul className="privacy-list">
                    <li>Website forms</li>
                    <li>Meta (Facebook/Instagram) lead forms</li>
                    <li>WhatsApp messages</li>
                    <li>Email</li>
                    <li>Phone calls</li>
                    <li>Booking forms</li>
                  </ul>
                  <p>We may collect:</p>
                  <ul className="privacy-list">
                    <li>Full name</li>
                    <li>Phone number</li>
                    <li>WhatsApp number</li>
                    <li>Email address</li>
                    <li>Passport details</li>
                    <li>Date of birth</li>
                    <li>Address</li>
                    <li>Emergency contact information</li>
                    <li>Room type preferences</li>
                    <li>Package selection (Hajj, Umrah, etc.)</li>
                    <li>Payment and billing details</li>
                    <li>Special requests or dietary needs</li>
                  </ul>

                  <h4 className="mt-4 mb-3">b. Information Collected Automatically</h4>
                  <p>When you visit our website, we may automatically collect:</p>
                  <ul className="privacy-list">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Pages visited</li>
                    <li>Cookies and tracking data</li>
                    <li>Location (approximate, based on IP)</li>
                  </ul>

                  <h4 className="mt-4 mb-3">c. Information from Third Parties</h4>
                  <p>We may receive information through:</p>
                  <ul className="privacy-list">
                    <li>Facebook/Instagram Ads Manager</li>
                    <li>WhatsApp Business Platform</li>
                    <li>Payment processors (Stripe, banks, remittance services)</li>
                    <li>Airline partners and booking agents</li>
                    <li>Travel insurance providers</li>
                    <li>Analytics tools (e.g., Google Analytics)</li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div className="privacy-section mb-5">
                  <h2 className="section-title mb-4">2. How We Use Your Information</h2>
                  <p>We use your data for the following purposes:</p>
                  
                  <h4 className="mt-4 mb-3">a. To Provide Travel Services</h4>
                  <ul className="privacy-list">
                    <li>Process bookings for Hajj, Umrah, and tours</li>
                    <li>Arrange flights, hotels, visas, transportation, and meals</li>
                    <li>Prepare group lists and room allocations</li>
                    <li>Contact you for schedule updates</li>
                    <li>Send booking confirmations and itineraries</li>
                  </ul>

                  <h4 className="mt-4 mb-3">b. For Communication</h4>
                  <ul className="privacy-list">
                    <li>Respond to inquiries</li>
                    <li>Contact you via WhatsApp, SMS, phone, or email</li>
                    <li>Send travel updates, reminders, and instructions</li>
                    <li>Notify you of payment schedules</li>
                  </ul>

                  <h4 className="mt-4 mb-3">c. For Marketing (With Consent)</h4>
                  <ul className="privacy-list">
                    <li>Send promotional offers</li>
                    <li>Share new package announcements</li>
                    <li>Run retargeting ads on Facebook/Instagram</li>
                    <li>Add you to WhatsApp broadcast lists (optional)</li>
                  </ul>

                  <h4 className="mt-4 mb-3">d. For Legal & Compliance</h4>
                  <ul className="privacy-list">
                    <li>Identity verification</li>
                    <li>Processing visa applications</li>
                    <li>Meeting airline, hotel, and Hajj ministry requirements</li>
                    <li>Fraud prevention</li>
                    <li>Financial reporting</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div className="privacy-section mb-5">
                  <h2 className="section-title mb-4">3. Legal Basis for Processing (GDPR)</h2>
                  <p>For customers in the UK or EU, we process your data under:</p>
                  <ul className="privacy-list">
                    <li><strong>Contractual obligation</strong> (to fulfil your travel booking)</li>
                    <li><strong>Legitimate interest</strong> (customer service, internal reporting)</li>
                    <li><strong>Consent</strong> (marketing, lead forms)</li>
                    <li><strong>Legal requirement</strong> (visa or government processes)</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div className="privacy-section mb-5">
                  <h2 className="section-title mb-4">4. How We Store & Protect Your Data</h2>
                  <p>We take strong measures to protect your information:</p>
                  <ul className="privacy-list">
                    <li>Encrypted storage for sensitive data</li>
                    <li>Secure servers and firewalls</li>
                    <li>Restricted staff access</li>
                    <li>Encrypted WhatsApp communication</li>
                    <li>Two-factor authentication for systems</li>
                    <li>Regular security reviews</li>
                  </ul>
                  <p className="highlight-text mt-3"><strong>We never sell your data to third parties.</strong></p>
                </div>

                {/* Section 5 */}
                <div className="privacy-section mb-5">
                  <h2 className="section-title mb-4">5. Sharing Your Information</h2>
                  <p>We only share data when necessary and only with trusted partners:</p>
                  <ul className="privacy-list">
                    <li>Airlines (for ticketing)</li>
                    <li>Hotels in Makkah, Madina, and Azizia</li>
                    <li>Transport providers</li>
                    <li>Hajj Ministry or local agents in Saudi Arabia</li>
                    <li>Payment processors</li>
                    <li>Insurance companies</li>
                  </ul>
                  <p className="mt-3">Partners only receive the information required to deliver their service.</p>
                  <p className="highlight-text"><strong>We do not sell, rent, or trade your personal information.</strong></p>
                </div>

                {/* Section 6 */}
                <div className="privacy-section mb-5">
                  <h2 className="section-title mb-4">6. Cookies & Tracking Technologies</h2>
                  <p>Our website uses cookies to:</p>
                  <ul className="privacy-list">
                    <li>Improve website performance</li>
                    <li>Track analytics</li>
                    <li>Optimise ads via Facebook Pixel & Google Analytics</li>
                  </ul>
                  <p className="mt-3">You may disable cookies in your browser settings at any time.</p>
                </div>

                {/* Section 7 */}
                <div className="privacy-section mb-5">
                  <h2 className="section-title mb-4">7. Your Rights (UK & EU GDPR)</h2>
                  <p>You have the right to:</p>
                  <ul className="privacy-list">
                    <li>Access your personal data</li>
                    <li>Request correction of data</li>
                    <li>Request deletion (&quot;right to be forgotten&quot;)</li>
                    <li>Restrict processing</li>
                    <li>Opt-out of marketing</li>
                    <li>Request a copy of your data</li>
                    <li>Withdraw consent anytime</li>
                  </ul>
                  <p className="mt-3">To exercise these rights, email:</p>
                  <p className="contact-highlight">📧 <a href="mailto:info@m-rtours.co.uk">info@m-rtours.co.uk</a></p>
                </div>

                {/* Section 8 */}
                <div className="privacy-section mb-5">
                  <h2 className="section-title mb-4">8. Data Retention</h2>
                  <p>We keep your information only as long as needed:</p>
                  <ul className="privacy-list">
                    <li><strong>Lead form inquiries:</strong> 12 months</li>
                    <li><strong>Booking information:</strong> Up to 7 years (legal requirement)</li>
                    <li><strong>Passport/visa documents:</strong> Deleted after travel completion</li>
                    <li><strong>Marketing data:</strong> Until you unsubscribe</li>
                  </ul>
                </div>

                {/* Section 9 */}
                <div className="privacy-section mb-5">
                  <h2 className="section-title mb-4">9. WhatsApp & Messaging Consent</h2>
                  <p>By submitting your phone number, you consent to receiving:</p>
                  <ul className="privacy-list">
                    <li>WhatsApp messages</li>
                    <li>Travel instructions</li>
                    <li>Booking updates</li>
                    <li>Customer support messages</li>
                    <li>Marketing (optional)</li>
                  </ul>
                  <p className="mt-3">You can reply <strong>STOP</strong> anytime to unsubscribe.</p>
                </div>

                {/* Section 10 */}
                <div className="privacy-section mb-5">
                  <h2 className="section-title mb-4">10. Children&apos;s Privacy</h2>
                  <p>We do not knowingly collect information from children under 16 unless provided by parents/guardians for Hajj/Umrah bookings.</p>
                </div>

                {/* Section 11 */}
                <div className="privacy-section mb-5">
                  <h2 className="section-title mb-4">11. International Transfers</h2>
                  <p>Your data may be processed in:</p>
                  <ul className="privacy-list">
                    <li>United Kingdom</li>
                    <li>Saudi Arabia</li>
                    <li>Any country required for airline/hotel coordination</li>
                  </ul>
                  <p className="mt-3">All transfers comply with GDPR and local regulations.</p>
                </div>

                {/* Section 12 */}
                <div className="privacy-section mb-5">
                  <h2 className="section-title mb-4">12. Changes to This Privacy Policy</h2>
                  <p>We may update this policy periodically.</p>
                  <p>Revisions will be posted with the updated date at the top.</p>
                </div>

                {/* Section 13 */}
                <div className="privacy-section mb-5">
                  <h2 className="section-title mb-4">13. Contact Us</h2>
                  <p>If you have questions or requests about this Privacy Policy, contact us:</p>
                  <div className="contact-info-box mt-4 p-4">
                    <p className="mb-2">📧 <a href="mailto:info@m-rtours.co.uk">info@m-rtours.co.uk</a></p>
                    <p className="mb-2">📞 <a href="tel:+442034110076">+44 20 3411 0076</a></p>
                    <p className="mb-2">📱 WhatsApp: <a href="https://wa.me/447908967952">+44 7908 967952</a></p>
                    <p className="mb-0">🌐 <a href="https://m-rtours.co.uk" target="_blank" rel="noopener noreferrer">m-rtours.co.uk</a></p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .privacy-policy-section {
          padding: 80px 0;
          background: var(--bg);
        }

        .privacy-content {
          background: var(--white);
          padding: 60px;
          border-radius: 10px;
          box-shadow: var(--box-shadow);
        }

        @media (max-width: 767px) {
          .privacy-content {
            padding: 30px 20px;
          }
          .privacy-policy-section {
            padding: 60px 0;
          }
        }

        .privacy-header h1 {
          color: var(--header);
          font-size: 42px;
          font-weight: 700;
          line-height: 1.3;
        }

        @media (max-width: 767px) {
          .privacy-header h1 {
            font-size: 32px;
          }
        }

        .privacy-header p {
          font-size: 16px;
          line-height: 1.8;
          color: var(--text);
        }

        .section-title {
          color: var(--theme-2);
          font-size: 28px;
          font-weight: 700;
          padding-bottom: 10px;
          border-bottom: 3px solid var(--theme);
          display: inline-block;
        }

        @media (max-width: 767px) {
          .section-title {
            font-size: 24px;
          }
        }

        .privacy-section h4 {
          color: var(--header);
          font-size: 20px;
          font-weight: 600;
        }

        .privacy-section p {
          font-size: 16px;
          line-height: 1.8;
          color: var(--text);
        }

        .privacy-list {
          list-style: none;
          padding-left: 0;
          margin-top: 15px;
        }

        .privacy-list li {
          position: relative;
          padding-left: 30px;
          margin-bottom: 10px;
          font-size: 16px;
          line-height: 1.8;
          color: var(--text);
        }

        .privacy-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--theme);
          font-weight: 700;
          font-size: 18px;
        }

        .highlight-text {
          color: var(--theme-2);
          font-weight: 600;
          font-size: 17px;
        }

        .contact-highlight {
          font-size: 18px;
          font-weight: 600;
        }

        .contact-highlight a {
          color: var(--theme);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-highlight a:hover {
          color: var(--theme-2);
        }

        .contact-info-box {
          background: var(--bg);
          border-left: 4px solid var(--theme);
          border-radius: 8px;
        }

        .contact-info-box p {
          margin-bottom: 12px;
          font-size: 16px;
        }

        .contact-info-box a {
          color: var(--theme);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .contact-info-box a:hover {
          color: var(--theme-2);
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default PrivacyPolicyPage;
