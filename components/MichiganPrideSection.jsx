export default function MichiganPrideSection() {
  return (
    <div className='bg-white py-16'>
      <div className='container mx-auto px-4'>
        {/* Values Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto'>
          {/* Michigan Sourced */}
          <div className='text-center'>
            <div className='w-16 h-16 mx-auto mb-4'>
              <svg
                className='w-full h-full text-green-800'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-3'>
              Locally Sourced
            </h3>
            <p className='text-gray-600'>
              Proudly sourcing ingredients from Michigan farms and suppliers.
              From forests to fields, we harness what the Great Lakes State has
              to offer.
            </p>
          </div>

          {/* No Harmful Ingredients */}
          <div className='text-center'>
            <div className='w-16 h-16 mx-auto mb-4'>
              <svg
                className='w-full h-full text-green-800'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-3'>
              Pure Natural Ingredients
            </h3>
            <p className='text-gray-600'>
              Clean, natural ingredients inspired by Michigan's rugged outdoors.
              No unnecessary chemicals, just honest soap.
            </p>
          </div>

          {/* Handcrafted Quality */}
          <div className='text-center'>
            <div className='w-16 h-16 mx-auto mb-4'>
              <svg
                className='w-full h-full text-green-800'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z' />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-3'>
              Small Batch Handcrafted
            </h3>
            <p className='text-gray-600'>
              Every bar is handcrafted in small batches right here in Michigan.
              Quality over quantity, the way it should be.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
