import { FaLocationDot, FaStar, FaUsers } from 'react-icons/fa6';

export default function MichiganPrideSection() {
  return (
    <div className='bg-white py-16'>
      <div className='container mx-auto px-4'>
        {/* Values Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto'>
          {/* Michigan Sourced */}
          <div className='text-center'>
            <div className='w-16 h-16 mx-auto mb-4'>
              <FaLocationDot className='w-full h-full text-green-800' />
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
              <FaStar className='w-full h-full text-green-800' />
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
              <FaUsers className='w-full h-full text-green-800' />
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
