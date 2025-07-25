import { Metadata } from 'next';

export const metadata = {
  title: 'Shipping Policy - Soap Stache',
  description:
    'Learn about our shipping policies, delivery times, and shipping options.',
};

export default function ShippingPolicyPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gray-900 text-white py-20'>
        <div className='container mx-auto px-6 max-w-4xl text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            Shipping Policy
          </h1>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Fast, reliable shipping to get your premium grooming products to you
            quickly and safely.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='py-16'>
        <div className='container mx-auto px-6 max-w-4xl'>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <div className='space-y-8'>
              {/* Shipping Options */}
              <div>
                <h2 className='text-2xl font-bold mb-6 text-gray-900'>
                  Shipping Options
                </h2>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='border border-gray-200 rounded-lg p-6'>
                    <h3 className='text-xl font-semibold mb-3 text-gray-900'>
                      Standard Shipping
                    </h3>
                    <p className='text-3xl font-bold text-green-600 mb-2'>
                      $5.99
                    </p>
                    <p className='text-gray-600 mb-4'>3-5 business days</p>
                    <ul className='space-y-2 text-sm text-gray-600'>
                      <li>• Free on orders over $50</li>
                      <li>• Tracking included</li>
                      <li>• Insurance included</li>
                      <li>• Continental US only</li>
                    </ul>
                  </div>

                  <div className='border border-gray-200 rounded-lg p-6'>
                    <h3 className='text-xl font-semibold mb-3 text-gray-900'>
                      Express Shipping
                    </h3>
                    <p className='text-3xl font-bold text-green-600 mb-2'>
                      $12.99
                    </p>
                    <p className='text-gray-600 mb-4'>1-2 business days</p>
                    <ul className='space-y-2 text-sm text-gray-600'>
                      <li>• Priority handling</li>
                      <li>• Real-time tracking</li>
                      <li>• Insurance included</li>
                      <li>• Continental US only</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Delivery Times */}
              <div>
                <h2 className='text-2xl font-bold mb-6 text-gray-900'>
                  Delivery Times
                </h2>
                <div className='bg-gray-50 rounded-lg p-6'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                        Processing Time
                      </h3>
                      <p className='text-gray-600'>
                        Orders are typically processed and shipped within 1-2
                        business days. Orders placed after 2 PM EST will be
                        processed the next business day.
                      </p>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                        Shipping Time
                      </h3>
                      <p className='text-gray-600'>
                        Once shipped, delivery times depend on your location and
                        chosen shipping method. Most orders arrive within 3-5
                        business days with standard shipping.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Destinations */}
              <div>
                <h2 className='text-2xl font-bold mb-6 text-gray-900'>
                  Shipping Destinations
                </h2>
                <div className='space-y-4'>
                  <div className='border-b border-gray-200 pb-4'>
                    <h3 className='text-lg font-semibold mb-2 text-gray-900'>
                      Continental United States
                    </h3>
                    <p className='text-gray-600'>
                      We currently ship to all 48 contiguous states. Standard
                      and express shipping options available.
                    </p>
                  </div>
                  <div className='border-b border-gray-200 pb-4'>
                    <h3 className='text-lg font-semibold mb-2 text-gray-900'>
                      Alaska & Hawaii
                    </h3>
                    <p className='text-gray-600'>
                      Additional shipping charges apply. Delivery may take 5-10
                      business days.
                    </p>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-2 text-gray-900'>
                      International Shipping
                    </h3>
                    <p className='text-gray-600'>
                      We're working on expanding our shipping options to include
                      international destinations. Please check back soon or
                      contact us for updates.
                    </p>
                  </div>
                </div>
              </div>

              {/* Order Tracking */}
              <div>
                <h2 className='text-2xl font-bold mb-6 text-gray-900'>
                  Order Tracking
                </h2>
                <div className='bg-gray-50 rounded-lg p-6'>
                  <p className='text-gray-600 mb-4'>
                    Once your order ships, you'll receive a confirmation email
                    with tracking information. You can also track your order
                    status by logging into your account.
                  </p>
                  <div className='grid md:grid-cols-3 gap-4 text-sm'>
                    <div className='text-center'>
                      <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2'>
                        <span className='text-green-600 font-bold'>1</span>
                      </div>
                      <p className='font-semibold'>Order Placed</p>
                      <p className='text-gray-600'>Confirmation sent</p>
                    </div>
                    <div className='text-center'>
                      <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2'>
                        <span className='text-green-600 font-bold'>2</span>
                      </div>
                      <p className='font-semibold'>Order Shipped</p>
                      <p className='text-gray-600'>Tracking number sent</p>
                    </div>
                    <div className='text-center'>
                      <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2'>
                        <span className='text-green-600 font-bold'>3</span>
                      </div>
                      <p className='font-semibold'>Delivered</p>
                      <p className='text-gray-600'>Package received</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Restrictions */}
              <div>
                <h2 className='text-2xl font-bold mb-6 text-gray-900'>
                  Shipping Restrictions
                </h2>
                <div className='space-y-4'>
                  <div className='border-b border-gray-200 pb-4'>
                    <h3 className='text-lg font-semibold mb-2 text-gray-900'>
                      PO Boxes
                    </h3>
                    <p className='text-gray-600'>
                      We can ship to PO Boxes, but delivery times may be longer.
                      Express shipping is not available to PO Boxes.
                    </p>
                  </div>
                  <div className='border-b border-gray-200 pb-4'>
                    <h3 className='text-lg font-semibold mb-2 text-gray-900'>
                      APO/FPO Addresses
                    </h3>
                    <p className='text-gray-600'>
                      We currently do not ship to APO/FPO addresses. We're
                      working on adding this service.
                    </p>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-2 text-gray-900'>
                      Signature Required
                    </h3>
                    <p className='text-gray-600'>
                      Orders over $100 require a signature upon delivery for
                      security purposes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Damaged or Lost Packages */}
              <div>
                <h2 className='text-2xl font-bold mb-6 text-gray-900'>
                  Damaged or Lost Packages
                </h2>
                <div className='bg-gray-50 rounded-lg p-6'>
                  <p className='text-gray-600 mb-4'>
                    We take great care in packaging your orders to ensure they
                    arrive safely. However, if your package arrives damaged or
                    is lost in transit, we're here to help.
                  </p>
                  <div className='space-y-3'>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Damaged Packages
                      </h4>
                      <p className='text-sm text-gray-600'>
                        If your package arrives damaged, please take photos and
                        contact us within 48 hours of delivery.
                      </p>
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Lost Packages
                      </h4>
                      <p className='text-sm text-gray-600'>
                        If your package doesn't arrive within the expected
                        timeframe, contact us and we'll investigate.
                      </p>
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Claims Process
                      </h4>
                      <p className='text-sm text-gray-600'>
                        We'll work with the shipping carrier to resolve the
                        issue and ensure you receive your order or a full
                        refund.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className='text-center bg-green-50 rounded-lg p-8'>
                <h3 className='text-xl font-semibold mb-4 text-gray-900'>
                  Questions About Shipping?
                </h3>
                <p className='text-gray-600 mb-6'>
                  Our customer service team is here to help with any shipping
                  questions or concerns.
                </p>
                <div className='space-y-2'>
                  <p className='text-gray-600'>
                    <strong>Email:</strong> hello@soapstache.com
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
