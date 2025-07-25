import { Metadata } from 'next';

export const metadata = {
  title: 'FAQ - Soap Stache',
  description:
    'Find answers to frequently asked questions about our premium grooming products and services.',
};

export default function FAQPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gray-900 text-white py-20'>
        <div className='container mx-auto px-6 max-w-4xl text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            Frequently Asked Questions
          </h1>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Can't find what you're looking for? Contact us and we'll be happy to
            help.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='py-16'>
        <div className='container mx-auto px-6 max-w-4xl'>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <div className='space-y-8'>
              {/* Product Questions */}
              <div>
                <h2 className='text-2xl font-bold mb-6 text-gray-900'>
                  Product Questions
                </h2>
                <div className='space-y-6'>
                  <div className='border-b border-gray-200 pb-6'>
                    <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                      How long does a bar of soap last?
                    </h3>
                    <p className='text-gray-600'>
                      A typical bar of Soap Stache soap lasts 3-4 weeks with
                      daily use, depending on how you store it. To extend the
                      life of your soap, keep it in a well-draining soap dish
                      and allow it to dry between uses.
                    </p>
                  </div>

                  <div className='border-b border-gray-200 pb-6'>
                    <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                      Are your products suitable for sensitive skin?
                    </h3>
                    <p className='text-gray-600'>
                      Yes! Our products are formulated with gentle, natural
                      ingredients that are suitable for most skin types,
                      including sensitive skin. We avoid harsh chemicals,
                      synthetic fragrances, and artificial preservatives that
                      can cause irritation.
                    </p>
                  </div>

                  <div className='border-b border-gray-200 pb-6'>
                    <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                      Do you test on animals?
                    </h3>
                    <p className='text-gray-600'>
                      No, we never test our products on animals. We're committed
                      to cruelty-free practices and use alternative testing
                      methods to ensure our products are safe and effective.
                    </p>
                  </div>

                  <div className='border-b border-gray-200 pb-6'>
                    <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                      Are your products vegan?
                    </h3>
                    <p className='text-gray-600'>
                      Most of our products are vegan-friendly. We use
                      plant-based oils and natural ingredients. However, some
                      products may contain honey or beeswax. Check individual
                      product descriptions for specific ingredient information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ordering & Shipping */}
              <div>
                <h2 className='text-2xl font-bold mb-6 text-gray-900'>
                  Ordering & Shipping
                </h2>
                <div className='space-y-6'>
                  <div className='border-b border-gray-200 pb-6'>
                    <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                      How long does shipping take?
                    </h3>
                    <p className='text-gray-600'>
                      Standard shipping typically takes 3-5 business days within
                      the continental United States. Expedited shipping options
                      are available at checkout for faster delivery.
                    </p>
                  </div>

                  <div className='border-b border-gray-200 pb-6'>
                    <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                      Do you ship internationally?
                    </h3>
                    <p className='text-gray-600'>
                      Currently, we only ship within the United States. We're
                      working on expanding our shipping options to include
                      international destinations.
                    </p>
                  </div>

                  <div className='border-b border-gray-200 pb-6'>
                    <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                      Can I track my order?
                    </h3>
                    <p className='text-gray-600'>
                      Yes! Once your order ships, you'll receive a tracking
                      number via email. You can also track your order status by
                      logging into your account.
                    </p>
                  </div>

                  <div className='border-b border-gray-200 pb-6'>
                    <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                      What payment methods do you accept?
                    </h3>
                    <p className='text-gray-600'>
                      We accept all major credit cards (Visa, MasterCard,
                      American Express, Discover), PayPal, and Apple Pay. All
                      payments are processed securely through Stripe.
                    </p>
                  </div>
                </div>
              </div>

              {/* Returns & Refunds */}
              <div>
                <h2 className='text-2xl font-bold mb-6 text-gray-900'>
                  Returns & Refunds
                </h2>
                <div className='space-y-6'>
                  <div className='border-b border-gray-200 pb-6'>
                    <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                      What is your return policy?
                    </h3>
                    <p className='text-gray-600'>
                      We offer a 30-day satisfaction guarantee. If you're not
                      completely satisfied with your purchase, you can return
                      unused products for a full refund or exchange. Contact our
                      customer service team to initiate a return.
                    </p>
                  </div>

                  <div className='border-b border-gray-200 pb-6'>
                    <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                      How do I return an item?
                    </h3>
                    <p className='text-gray-600'>
                      To return an item, contact our customer service team at
                      hello@soapstache.com with your order number and reason for
                      return. We'll provide you with a return shipping label and
                      instructions.
                    </p>
                  </div>

                  <div className='border-b border-gray-200 pb-6'>
                    <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                      How long does it take to process a refund?
                    </h3>
                    <p className='text-gray-600'>
                      Once we receive your return, we'll process your refund
                      within 3-5 business days. The refund will appear in your
                      original payment method within 5-10 business days,
                      depending on your bank or credit card company.
                    </p>
                  </div>
                </div>
              </div>

              {/* Customer Service */}
              <div>
                <h2 className='text-2xl font-bold mb-6 text-gray-900'>
                  Customer Service
                </h2>
                <div className='space-y-6'>
                  <div className='border-b border-gray-200 pb-6'>
                    <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                      How can I contact customer service?
                    </h3>
                    <p className='text-gray-600'>
                      You can reach our customer service team by email at
                      hello@soapstache.com or through our contact form. We
                      typically respond within 24 hours during business days.
                    </p>
                  </div>

                  <div className='border-b border-gray-200 pb-6'>
                    <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                      What are your business hours?
                    </h3>
                    <p className='text-gray-600'>
                      Our customer service team is available Monday through
                      Friday, 9 AM to 5 PM EST. We do our best to respond to
                      weekend inquiries on the following business day.
                    </p>
                  </div>

                  <div>
                    <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                      Can I change or cancel my order?
                    </h3>
                    <p className='text-gray-600'>
                      Orders can be modified or cancelled within 2 hours of
                      placement, as long as they haven't been processed for
                      shipping. Contact our customer service team immediately if
                      you need to make changes to your order.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className='mt-12 text-center bg-gray-50 rounded-lg p-8'>
              <h3 className='text-xl font-semibold mb-4 text-gray-900'>
                Still have questions?
              </h3>
              <p className='text-gray-600 mb-6'>
                Our customer service team is here to help. Don't hesitate to
                reach out!
              </p>
              <a
                href='/contact'
                className='inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium'
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
