import { Metadata } from 'next';

export const metadata = {
  title: 'Return Policy - Soap Stache',
  description:
    'Learn about our return policy, refund process, and satisfaction guarantee.',
};

export default function ReturnPolicyPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gray-900 text-white py-20'>
        <div className='container mx-auto px-6 max-w-4xl text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>Return Policy</h1>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Your satisfaction is our priority. We stand behind our products with
            a 30-day satisfaction guarantee.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='py-16'>
        <div className='container mx-auto px-6 max-w-4xl'>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <div className='space-y-8'>
              {/* Satisfaction Guarantee */}
              <div className='text-center bg-green-50 rounded-lg p-8'>
                <h2 className='text-3xl font-bold mb-4 text-gray-900'>
                  30-Day Satisfaction Guarantee
                </h2>
                <p className='text-xl text-gray-600 mb-6'>
                  If you're not completely satisfied with your purchase, we'll
                  make it right.
                </p>
                <div className='grid md:grid-cols-3 gap-6'>
                  <div>
                    <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <span className='text-2xl'>🔄</span>
                    </div>
                    <h3 className='font-semibold mb-2'>Easy Returns</h3>
                    <p className='text-sm text-gray-600'>
                      Simple return process with prepaid shipping
                    </p>
                  </div>
                  <div>
                    <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <span className='text-2xl'>💰</span>
                    </div>
                    <h3 className='font-semibold mb-2'>Full Refund</h3>
                    <p className='text-sm text-gray-600'>
                      100% refund or exchange option
                    </p>
                  </div>
                  <div>
                    <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <span className='text-2xl'>⚡</span>
                    </div>
                    <h3 className='font-semibold mb-2'>Quick Processing</h3>
                    <p className='text-sm text-gray-600'>
                      Refunds processed within 3-5 business days
                    </p>
                  </div>
                </div>
              </div>

              {/* Return Eligibility */}
              <div>
                <h2 className='text-2xl font-bold mb-6 text-gray-900'>
                  Return Eligibility
                </h2>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='border border-gray-200 rounded-lg p-6'>
                    <h3 className='text-lg font-semibold mb-4 text-green-600'>
                      ✅ Eligible for Return
                    </h3>
                    <ul className='space-y-2 text-sm text-gray-600'>
                      <li>• Unused products in original packaging</li>
                      <li>• Products within 30 days of purchase</li>
                      <li>• Damaged or defective items</li>
                      <li>• Wrong items received</li>
                      <li>• All subscription products</li>
                    </ul>
                  </div>
                  <div className='border border-gray-200 rounded-lg p-6'>
                    <h3 className='text-lg font-semibold mb-4 text-red-600'>
                      ❌ Not Eligible for Return
                    </h3>
                    <ul className='space-y-2 text-sm text-gray-600'>
                      <li>• Used or opened products</li>
                      <li>• Products beyond 30 days</li>
                      <li>• Sale or clearance items</li>
                      <li>• Gift cards</li>
                      <li>• Custom or personalized items</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Return Process */}
              <div>
                <h2 className='text-2xl font-bold mb-6 text-gray-900'>
                  How to Return
                </h2>
                <div className='space-y-6'>
                  <div className='grid md:grid-cols-4 gap-4'>
                    <div className='text-center'>
                      <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3'>
                        <span className='text-green-600 font-bold'>1</span>
                      </div>
                      <h3 className='font-semibold text-sm mb-2'>Contact Us</h3>
                      <p className='text-xs text-gray-600'>
                        Email us with your order number
                      </p>
                    </div>
                    <div className='text-center'>
                      <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3'>
                        <span className='text-green-600 font-bold'>2</span>
                      </div>
                      <h3 className='font-semibold text-sm mb-2'>Get Label</h3>
                      <p className='text-xs text-gray-600'>
                        We'll send a prepaid shipping label
                      </p>
                    </div>
                    <div className='text-center'>
                      <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3'>
                        <span className='text-green-600 font-bold'>3</span>
                      </div>
                      <h3 className='font-semibold text-sm mb-2'>Ship Back</h3>
                      <p className='text-xs text-gray-600'>
                        Package and ship your return
                      </p>
                    </div>
                    <div className='text-center'>
                      <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3'>
                        <span className='text-green-600 font-bold'>4</span>
                      </div>
                      <h3 className='font-semibold text-sm mb-2'>Get Refund</h3>
                      <p className='text-xs text-gray-600'>
                        Refund processed within 3-5 days
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Return Instructions */}
              <div>
                <h2 className='text-2xl font-bold mb-6 text-gray-900'>
                  Return Instructions
                </h2>
                <div className='bg-gray-50 rounded-lg p-6'>
                  <div className='space-y-4'>
                    <div>
                      <h3 className='font-semibold text-gray-900 mb-2'>
                        Step 1: Contact Customer Service
                      </h3>
                      <p className='text-gray-600 text-sm'>
                        Email us at hello@soapstache.com with your order number
                        and reason for return. Include photos if the item is
                        damaged or defective.
                      </p>
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900 mb-2'>
                        Step 2: Receive Return Authorization
                      </h3>
                      <p className='text-gray-600 text-sm'>
                        We'll review your request and send you a return
                        authorization number and prepaid shipping label.
                      </p>
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900 mb-2'>
                        Step 3: Package Your Return
                      </h3>
                      <p className='text-gray-600 text-sm'>
                        Securely package the item in its original packaging.
                        Include the return authorization number and reason for
                        return on a note inside the package.
                      </p>
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900 mb-2'>
                        Step 4: Ship Your Return
                      </h3>
                      <p className='text-gray-600 text-sm'>
                        Use the prepaid shipping label to send your return. You
                        can drop it off at any USPS location or schedule a
                        pickup.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Refund Information */}
              <div>
                <h2 className='text-2xl font-bold mb-6 text-gray-900'>
                  Refund Information
                </h2>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <h3 className='text-lg font-semibold mb-4 text-gray-900'>
                      Refund Processing
                    </h3>
                    <ul className='space-y-2 text-sm text-gray-600'>
                      <li>
                        • Refunds processed within 3-5 business days of
                        receiving your return
                      </li>
                      <li>• Refunded to original payment method</li>
                      <li>
                        • Full refund of product cost and original shipping
                      </li>
                      <li>
                        • Email confirmation sent when refund is processed
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-4 text-gray-900'>
                      Refund Timeline
                    </h3>
                    <ul className='space-y-2 text-sm text-gray-600'>
                      <li>
                        • <strong>Credit Cards:</strong> 5-10 business days
                      </li>
                      <li>
                        • <strong>PayPal:</strong> 3-5 business days
                      </li>
                      <li>
                        • <strong>Apple Pay:</strong> 5-10 business days
                      </li>
                      <li>
                        • <strong>Bank Transfers:</strong> 7-14 business days
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Exchanges */}
              <div>
                <h2 className='text-2xl font-bold mb-6 text-gray-900'>
                  Exchanges
                </h2>
                <div className='bg-gray-50 rounded-lg p-6'>
                  <p className='text-gray-600 mb-4'>
                    Prefer to exchange your item instead of getting a refund?
                    We're happy to help you find the perfect product.
                  </p>
                  <div className='space-y-3'>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Size or Scent Exchanges
                      </h4>
                      <p className='text-sm text-gray-600'>
                        If you'd like a different size or scent, we can exchange
                        your item for a similar product of equal value.
                      </p>
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Product Exchanges
                      </h4>
                      <p className='text-sm text-gray-600'>
                        Exchange for any other product in our catalog. If the
                        new item costs more, you'll pay the difference. If it
                        costs less, we'll refund the difference.
                      </p>
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Exchange Process
                      </h4>
                      <p className='text-sm text-gray-600'>
                        Follow the same return process, but specify that you'd
                        like an exchange. We'll ship your new item once we
                        receive your return.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Damaged or Defective Items */}
              <div>
                <h2 className='text-2xl font-bold mb-6 text-gray-900'>
                  Damaged or Defective Items
                </h2>
                <div className='border border-red-200 bg-red-50 rounded-lg p-6'>
                  <p className='text-gray-600 mb-4'>
                    If your item arrives damaged or is defective, we'll replace
                    it immediately at no cost to you.
                  </p>
                  <div className='space-y-3'>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        What to Do
                      </h4>
                      <p className='text-sm text-gray-600'>
                        Take photos of the damage and contact us within 48 hours
                        of delivery. We'll send a replacement item right away.
                      </p>
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        No Return Required
                      </h4>
                      <p className='text-sm text-gray-600'>
                        For damaged or defective items, you don't need to return
                        the original item. We'll send a replacement and cover
                        all shipping costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className='text-center bg-green-50 rounded-lg p-8'>
                <h3 className='text-xl font-semibold mb-4 text-gray-900'>
                  Need Help with a Return?
                </h3>
                <p className='text-gray-600 mb-6'>
                  Our customer service team is here to help make your return
                  experience smooth and easy.
                </p>
                <div className='space-y-2'>
                  <p className='text-gray-600'>
                    <strong>Email:</strong> hello@soapstache.com
                  </p>
                  <p className='text-gray-600'>
                    <strong>Hours:</strong> Monday - Friday, 9 AM - 5 PM EST
                  </p>
                  <p className='text-gray-600'>
                    <strong>Response Time:</strong> Within 24 hours
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
