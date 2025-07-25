import { Metadata } from 'next';

export const metadata = {
  title: 'Subscription - Soap Stache',
  description:
    'Subscribe to our premium grooming products and never run out of your favorites.',
};

export default function SubscriptionPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gray-900 text-white py-20'>
        <div className='container mx-auto px-6 max-w-4xl text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            Subscribe & Save
          </h1>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Never run out of your favorite grooming products. Subscribe to our
            premium soaps and get exclusive benefits.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='py-16'>
        <div className='container mx-auto px-6 max-w-4xl'>
          <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
            <h2 className='text-3xl font-bold mb-6 text-gray-900'>
              Subscription Plans
            </h2>
            <p className='text-gray-600 mb-8'>
              Choose the perfect subscription plan for your grooming needs. All
              plans include free shipping and exclusive member benefits.
            </p>

            <div className='grid md:grid-cols-3 gap-6 mb-8'>
              {/* Monthly Plan */}
              <div className='border border-gray-200 rounded-lg p-6'>
                <h3 className='text-xl font-semibold mb-4'>Monthly</h3>
                <p className='text-3xl font-bold text-green-600 mb-2'>$27</p>
                <p className='text-gray-600 mb-4'>per month</p>
                <ul className='space-y-2 text-sm text-gray-600'>
                  <li>• 3 premium soap bars</li>
                  <li>• Free shipping</li>
                  <li>• Member discounts</li>
                  <li>• Cancel anytime</li>
                </ul>
              </div>

              {/* Quarterly Plan */}
              <div className='border-2 border-green-500 rounded-lg p-6 bg-green-50'>
                <h3 className='text-xl font-semibold mb-4'>Quarterly</h3>
                <p className='text-3xl font-bold text-green-600 mb-2'>$75</p>
                <p className='text-gray-600 mb-4'>every 3 months</p>
                <ul className='space-y-2 text-sm text-gray-600'>
                  <li>• 9 premium soap bars</li>
                  <li>• Free shipping</li>
                  <li>• 10% member discount</li>
                  <li>• Priority customer support</li>
                </ul>
              </div>

              {/* Annual Plan */}
              <div className='border border-gray-200 rounded-lg p-6'>
                <h3 className='text-xl font-semibold mb-4'>Annual</h3>
                <p className='text-3xl font-bold text-green-600 mb-2'>$270</p>
                <p className='text-gray-600 mb-4'>per year</p>
                <ul className='space-y-2 text-sm text-gray-600'>
                  <li>• 36 premium soap bars</li>
                  <li>• Free shipping</li>
                  <li>• 15% member discount</li>
                  <li>• Exclusive seasonal scents</li>
                </ul>
              </div>
            </div>

            <div className='text-center'>
              <button className='bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium'>
                Coming Soon
              </button>
            </div>
          </div>

          {/* Benefits Section */}
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-3xl font-bold mb-6 text-gray-900'>
              Why Subscribe?
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-xl font-semibold mb-4 text-gray-900'>
                  Convenience
                </h3>
                <p className='text-gray-600'>
                  Never worry about running out of your favorite grooming
                  products. We'll deliver fresh, premium soap bars right to your
                  door on your schedule.
                </p>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-4 text-gray-900'>
                  Savings
                </h3>
                <p className='text-gray-600'>
                  Save money with exclusive member discounts and free shipping
                  on every order. The longer your subscription, the more you
                  save.
                </p>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-4 text-gray-900'>
                  Exclusive Access
                </h3>
                <p className='text-gray-600'>
                  Be the first to try new seasonal scents and limited edition
                  products. Subscribers get early access to our newest
                  creations.
                </p>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-4 text-gray-900'>
                  Flexibility
                </h3>
                <p className='text-gray-600'>
                  Pause, skip, or cancel your subscription anytime. You're in
                  complete control of your grooming routine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
