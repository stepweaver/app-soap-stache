import { Metadata } from 'next';

export const metadata = {
  title: 'Privacy Policy - Soap Stache',
  description:
    'Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gray-900 text-white py-20'>
        <div className='container mx-auto px-6 max-w-4xl text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            Privacy Policy
          </h1>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Your privacy is important to us. Learn how we collect, use, and
            protect your information.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='py-16'>
        <div className='container mx-auto px-6 max-w-4xl'>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <div className='space-y-8'>
              {/* Last Updated */}
              <div className='text-center bg-gray-50 rounded-lg p-6'>
                <p className='text-gray-600'>
                  <strong>Last Updated:</strong> January 1, 2025
                </p>
              </div>

              {/* Introduction */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  Introduction
                </h2>
                <p className='text-gray-600 mb-4'>
                  Soap Stache ("we," "our," or "us") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you visit
                  our website (soapstache.com) or make a purchase.
                </p>
                <p className='text-gray-600'>
                  By using our website, you consent to the data practices
                  described in this policy.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  Information We Collect
                </h2>
                <div className='space-y-6'>
                  <div>
                    <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                      Personal Information
                    </h3>
                    <p className='text-gray-600 mb-3'>
                      We may collect personal information that you voluntarily
                      provide to us when you:
                    </p>
                    <ul className='list-disc list-inside space-y-2 text-gray-600 ml-4'>
                      <li>Create an account</li>
                      <li>Make a purchase</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Contact customer service</li>
                      <li>Participate in surveys or promotions</li>
                    </ul>
                    <p className='text-gray-600 mt-3'>
                      This information may include your name, email address,
                      phone number, shipping address, billing address, and
                      payment information.
                    </p>
                  </div>

                  <div>
                    <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                      Automatically Collected Information
                    </h3>
                    <p className='text-gray-600 mb-3'>
                      When you visit our website, we automatically collect
                      certain information about your device, including:
                    </p>
                    <ul className='list-disc list-inside space-y-2 text-gray-600 ml-4'>
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Pages visited and time spent on each page</li>
                      <li>Referring website</li>
                      <li>Device identifiers</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                      Cookies and Tracking Technologies
                    </h3>
                    <p className='text-gray-600'>
                      We use cookies and similar tracking technologies to
                      enhance your browsing experience, analyze website traffic,
                      and understand where our visitors are coming from. You can
                      control cookie settings through your browser preferences.
                    </p>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  How We Use Your Information
                </h2>
                <p className='text-gray-600 mb-4'>
                  We use the information we collect for various purposes,
                  including:
                </p>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='space-y-3'>
                    <div className='flex items-start'>
                      <span className='text-green-600 mr-2'>•</span>
                      <span className='text-gray-600'>
                        Process and fulfill your orders
                      </span>
                    </div>
                    <div className='flex items-start'>
                      <span className='text-green-600 mr-2'>•</span>
                      <span className='text-gray-600'>
                        Send order confirmations and updates
                      </span>
                    </div>
                    <div className='flex items-start'>
                      <span className='text-green-600 mr-2'>•</span>
                      <span className='text-gray-600'>
                        Provide customer support
                      </span>
                    </div>
                    <div className='flex items-start'>
                      <span className='text-green-600 mr-2'>•</span>
                      <span className='text-gray-600'>
                        Send marketing communications (with consent)
                      </span>
                    </div>
                  </div>
                  <div className='space-y-3'>
                    <div className='flex items-start'>
                      <span className='text-green-600 mr-2'>•</span>
                      <span className='text-gray-600'>
                        Improve our website and services
                      </span>
                    </div>
                    <div className='flex items-start'>
                      <span className='text-green-600 mr-2'>•</span>
                      <span className='text-gray-600'>
                        Analyze website usage and trends
                      </span>
                    </div>
                    <div className='flex items-start'>
                      <span className='text-green-600 mr-2'>•</span>
                      <span className='text-gray-600'>
                        Prevent fraud and ensure security
                      </span>
                    </div>
                    <div className='flex items-start'>
                      <span className='text-green-600 mr-2'>•</span>
                      <span className='text-gray-600'>
                        Comply with legal obligations
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Sharing */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  Information Sharing and Disclosure
                </h2>
                <p className='text-gray-600 mb-4'>
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except in
                  the following circumstances:
                </p>
                <div className='space-y-4'>
                  <div>
                    <h3 className='text-lg font-semibold mb-2 text-gray-900'>
                      Service Providers
                    </h3>
                    <p className='text-gray-600'>
                      We may share your information with trusted third-party
                      service providers who assist us in operating our website,
                      processing payments, shipping orders, and providing
                      customer service.
                    </p>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-2 text-gray-900'>
                      Legal Requirements
                    </h3>
                    <p className='text-gray-600'>
                      We may disclose your information if required by law or in
                      response to valid legal requests, such as subpoenas or
                      court orders.
                    </p>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-2 text-gray-900'>
                      Business Transfers
                    </h3>
                    <p className='text-gray-600'>
                      In the event of a merger, acquisition, or sale of assets,
                      your information may be transferred as part of the
                      business transaction.
                    </p>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-2 text-gray-900'>
                      Protection of Rights
                    </h3>
                    <p className='text-gray-600'>
                      We may disclose your information to protect our rights,
                      property, or safety, or that of our customers or others.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  Data Security
                </h2>
                <p className='text-gray-600 mb-4'>
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction. These measures include:
                </p>
                <ul className='list-disc list-inside space-y-2 text-gray-600 ml-4'>
                  <li>SSL encryption for data transmission</li>
                  <li>Secure payment processing through Stripe</li>
                  <li>Regular security assessments and updates</li>
                  <li>
                    Limited access to personal information on a need-to-know
                    basis
                  </li>
                  <li>Secure data storage and backup procedures</li>
                </ul>
                <p className='text-gray-600 mt-4'>
                  However, no method of transmission over the internet or
                  electronic storage is 100% secure. While we strive to protect
                  your information, we cannot guarantee absolute security.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  Your Rights and Choices
                </h2>
                <div className='space-y-4'>
                  <div>
                    <h3 className='text-lg font-semibold mb-2 text-gray-900'>
                      Access and Update
                    </h3>
                    <p className='text-gray-600'>
                      You have the right to access, update, or correct your
                      personal information. You can do this by logging into your
                      account or contacting us directly.
                    </p>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-2 text-gray-900'>
                      Opt-Out
                    </h3>
                    <p className='text-gray-600'>
                      You can opt out of receiving marketing communications from
                      us by clicking the unsubscribe link in our emails or
                      contacting us directly.
                    </p>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-2 text-gray-900'>
                      Data Deletion
                    </h3>
                    <p className='text-gray-600'>
                      You may request deletion of your personal information,
                      subject to certain legal and contractual obligations.
                    </p>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-2 text-gray-900'>
                      Cookies
                    </h3>
                    <p className='text-gray-600'>
                      You can control cookie settings through your browser
                      preferences. However, disabling cookies may affect website
                      functionality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  Children's Privacy
                </h2>
                <p className='text-gray-600'>
                  Our website is not intended for children under the age of 13.
                  We do not knowingly collect personal information from children
                  under 13. If you are a parent or guardian and believe your
                  child has provided us with personal information, please
                  contact us immediately.
                </p>
              </div>

              {/* Third-Party Links */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  Third-Party Links
                </h2>
                <p className='text-gray-600'>
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices or content of these
                  websites. We encourage you to review the privacy policies of
                  any third-party sites you visit.
                </p>
              </div>

              {/* Changes to Privacy Policy */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  Changes to This Privacy Policy
                </h2>
                <p className='text-gray-600'>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last Updated" date. We encourage
                  you to review this Privacy Policy periodically.
                </p>
              </div>

              {/* International Users */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  International Users
                </h2>
                <p className='text-gray-600'>
                  If you are accessing our website from outside the United
                  States, please be aware that your information may be
                  transferred to, stored, and processed in the United States
                  where our servers are located. By using our website, you
                  consent to the transfer of your information to the United
                  States.
                </p>
              </div>

              {/* Contact Information */}
              <div className='text-center bg-gray-50 rounded-lg p-8'>
                <h3 className='text-xl font-semibold mb-4 text-gray-900'>
                  Contact Us
                </h3>
                <p className='text-gray-600 mb-6'>
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us.
                </p>
                <div className='space-y-2'>
                  <p className='text-gray-600'>
                    <strong>Email:</strong> hello@soapstache.com
                  </p>
                  <p className='text-gray-600'>
                    <strong>Address:</strong> Muskegon, MI
                  </p>
                  <p className='text-gray-600'>
                    <strong>Hours:</strong> Monday - Friday, 9 AM - 5 PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
