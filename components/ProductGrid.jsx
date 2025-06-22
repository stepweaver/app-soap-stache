'use client';

import { useEffect, useState } from 'react';
import { client, urlFor } from '@/lib/sanity';

export default function ProductGrid() {
  const [soaps, setSoaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSoaps = async () => {
      try {
        setLoading(true);
        const soapData = await client.fetch(`
          *[_type == "soap"] | order(_createdAt desc) {
            _id,
            title,
            description,
            blurb,
            price,
            photo,
            featured,
            grit
          }
        `);
        setSoaps(soapData);
        setError(null);
      } catch (error) {
        console.error('Error fetching soaps:', error);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSoaps();
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-[200px]'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900'></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='text-center py-8'>
        <p className='text-red-600 mb-4'>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Retry
        </button>
      </div>
    );
  }

  if (soaps.length === 0) {
    return (
      <div className='text-center py-8'>
        <p className='text-gray-600 text-lg'>No soap products found.</p>
        <p className='text-gray-500 text-sm mt-2'>
          Add some products in your Sanity Studio!
        </p>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <h2 className='text-3xl font-bold text-gray-900 mb-2'>
          Our Soap Collection
        </h2>
        <p className='text-gray-600'>
          Handcrafted soaps made with love and natural ingredients
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {soaps.map((soap) => (
          <div
            key={soap._id}
            className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col'
          >
            {soap.photo && (
              <div className='aspect-square overflow-hidden'>
                <img
                  src={urlFor(soap.photo)
                    .width(400)
                    .height(400)
                    .quality(80)
                    .url()}
                  alt={soap.title}
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                />
              </div>
            )}

            <div className='p-4 flex flex-col flex-grow'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-semibold text-lg text-gray-900 line-clamp-1'>
                  {soap.title}
                </h3>
                {soap.featured && (
                  <span className='bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ml-2'>
                    ⭐ Featured
                  </span>
                )}
              </div>

              <p className='text-gray-600 text-sm mb-3 line-clamp-2 flex-grow'>
                {soap.blurb}
              </p>

              <div className='flex items-center justify-between mt-auto'>
                <div className='flex flex-col'>
                  <span className='text-2xl font-bold text-green-600'>
                    ${soap.price}
                  </span>
                  <span className='text-xs text-gray-500'>
                    Grit Level: {soap.grit}/5
                  </span>
                </div>

                <button className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200'>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {soaps.length > 0 && (
        <div className='mt-8 text-center'>
          <p className='text-gray-500 text-sm'>
            Showing {soaps.length} product{soaps.length !== 1 ? 's' : ''}
          </p>
        </div>
      )}
    </div>
  );
}
