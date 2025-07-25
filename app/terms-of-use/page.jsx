import { Metadata } from 'next';

export const metadata = {
  title: 'Terms of Use - Soap Stache',
  description:
    'Terms and conditions for using the Soap Stache website and services.',
};

export default function TermsOfUsePage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gray-900 text-white py-20'>
        <div className='container mx-auto px-6 max-w-4xl text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>Terms of Use</h1>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Please read these terms carefully before using our website and
            services.
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

              {/* Agreement */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  1. Agreement to Terms
                </h2>
                <p className='text-gray-600 mb-4'>
                  By accessing and using the Soap Stache website
                  (soapstache.com), you accept and agree to be bound by the
                  terms and provision of this agreement. If you do not agree to
                  abide by the above, please do not use this service.
                </p>
                <p className='text-gray-600'>
                  These Terms of Use ("Terms") govern your use of our website
                  and services. By using our website, you agree to these Terms
                  in full.
                </p>
              </div>

              {/* Use License */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  2. Use License
                </h2>
                <p className='text-gray-600 mb-4'>
                  Permission is granted to temporarily download one copy of the
                  materials (information or software) on Soap Stache's website
                  for personal, non-commercial transitory viewing only. This is
                  the grant of a license, not a transfer of title, and under
                  this license you may not:
                </p>
                <ul className='list-disc list-inside space-y-2 text-gray-600 ml-4'>
                  <li>Modify or copy the materials</li>
                  <li>
                    Use the materials for any commercial purpose or for any
                    public display (commercial or non-commercial)
                  </li>
                  <li>
                    Attempt to decompile or reverse engineer any software
                    contained on Soap Stache's website
                  </li>
                  <li>
                    Remove any copyright or other proprietary notations from the
                    materials
                  </li>
                  <li>
                    Transfer the materials to another person or "mirror" the
                    materials on any other server
                  </li>
                </ul>
              </div>

              {/* Disclaimer */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  3. Disclaimer
                </h2>
                <p className='text-gray-600 mb-4'>
                  The materials on Soap Stache's website are provided on an 'as
                  is' basis. Soap Stache makes no warranties, expressed or
                  implied, and hereby disclaims and negates all other warranties
                  including without limitation, implied warranties or conditions
                  of merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation
                  of rights.
                </p>
                <p className='text-gray-600'>
                  Further, Soap Stache does not warrant or make any
                  representations concerning the accuracy, likely results, or
                  reliability of the use of the materials on its website or
                  otherwise relating to such materials or on any sites linked to
                  this site.
                </p>
              </div>

              {/* Limitations */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  4. Limitations
                </h2>
                <p className='text-gray-600 mb-4'>
                  In no event shall Soap Stache or its suppliers be liable for
                  any damages (including, without limitation, damages for loss
                  of data or profit, or due to business interruption) arising
                  out of the use or inability to use the materials on Soap
                  Stache's website, even if Soap Stache or a Soap Stache
                  authorized representative has been notified orally or in
                  writing of the possibility of such damage.
                </p>
                <p className='text-gray-600'>
                  Because some jurisdictions do not allow limitations on implied
                  warranties, or limitations of liability for consequential or
                  incidental damages, these limitations may not apply to you.
                </p>
              </div>

              {/* Accuracy of Materials */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  5. Accuracy of Materials
                </h2>
                <p className='text-gray-600'>
                  The materials appearing on Soap Stache's website could include
                  technical, typographical, or photographic errors. Soap Stache
                  does not warrant that any of the materials on its website are
                  accurate, complete or current. Soap Stache may make changes to
                  the materials contained on its website at any time without
                  notice. However, Soap Stache does not make any commitment to
                  update the materials.
                </p>
              </div>

              {/* Links */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  6. Links
                </h2>
                <p className='text-gray-600 mb-4'>
                  Soap Stache has not reviewed all of the sites linked to its
                  website and is not responsible for the contents of any such
                  linked site. The inclusion of any link does not imply
                  endorsement by Soap Stache of the site. Use of any such linked
                  website is at the user's own risk.
                </p>
              </div>

              {/* Modifications */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  7. Modifications
                </h2>
                <p className='text-gray-600'>
                  Soap Stache may revise these terms of service for its website
                  at any time without notice. By using this website you are
                  agreeing to be bound by the then current version of these
                  Terms of Service.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  8. Governing Law
                </h2>
                <p className='text-gray-600'>
                  These terms and conditions are governed by and construed in
                  accordance with the laws of Michigan and you irrevocably
                  submit to the exclusive jurisdiction of the courts in that
                  State or location.
                </p>
              </div>

              {/* Privacy Policy */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  9. Privacy Policy
                </h2>
                <p className='text-gray-600 mb-4'>
                  Your privacy is important to us. Please review our Privacy
                  Policy, which also governs your use of the website, to
                  understand our practices.
                </p>
                <a
                  href='/privacy-policy'
                  className='text-green-600 hover:text-green-700 underline'
                >
                  View our Privacy Policy
                </a>
              </div>

              {/* User Accounts */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  10. User Accounts
                </h2>
                <p className='text-gray-600 mb-4'>
                  When you create an account with us, you must provide
                  information that is accurate, complete, and current at all
                  times. You are responsible for safeguarding the password and
                  for all activities that occur under your account.
                </p>
                <p className='text-gray-600'>
                  You agree not to disclose your password to any third party and
                  to take sole responsibility for any activities or actions
                  under your account, whether or not you have authorized such
                  activities or actions.
                </p>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  11. Intellectual Property
                </h2>
                <p className='text-gray-600 mb-4'>
                  The Service and its original content, features, and
                  functionality are and will remain the exclusive property of
                  Soap Stache and its licensors. The Service is protected by
                  copyright, trademark, and other laws.
                </p>
                <p className='text-gray-600'>
                  Our trademarks and trade dress may not be used in connection
                  with any product or service without our prior written consent.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                  12. Termination
                </h2>
                <p className='text-gray-600'>
                  We may terminate or suspend your account immediately, without
                  prior notice or liability, for any reason whatsoever,
                  including without limitation if you breach the Terms. Upon
                  termination, your right to use the Service will cease
                  immediately.
                </p>
              </div>

              {/* Contact Information */}
              <div className='text-center bg-gray-50 rounded-lg p-8'>
                <h3 className='text-xl font-semibold mb-4 text-gray-900'>
                  Questions About These Terms?
                </h3>
                <p className='text-gray-600 mb-6'>
                  If you have any questions about these Terms of Use, please
                  contact us.
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
