'use client';

export default function SubscribeSection() {
  return (
    <section className='bg-amber-50 py-16'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Subscribe & Save
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto'>
          {/* Ships Every 3 Months */}
          <div className='text-center'>
            <div className='bg-green-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <svg
                className='w-8 h-8 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-2'>
              Ships Every 3 Months
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Customize your picks and scents, upgrade anytime, or hit snooze if
              you want. You're in control.
            </p>
          </div>

          {/* Free Delivery */}
          <div className='text-center'>
            <div className='bg-green-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <svg
                className='w-8 h-8 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-2'>
              Free Delivery
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Subscribe once and relax. All your shipping expenses are covered
              by Soap Stache.
            </p>
          </div>

          {/* Exclusive Benefits */}
          <div className='text-center'>
            <div className='bg-green-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <svg
                className='w-8 h-8 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-2'>
              Exclusive Benefits
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Gain exclusive subscriber-only benefits. Enjoy early access to new
              products and limited edition releases.
            </p>
          </div>
        </div>

        {/* Subscribe Button */}
        <div className='text-center'>
          <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer'>
            SUBSCRIBE & SAVE →
          </button>
        </div>
      </div>
    </section>
  );
}
