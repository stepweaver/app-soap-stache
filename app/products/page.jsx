'use client';

import { useEffect, useState } from 'react';
import { client } from '@/lib/sanity';
import ProductCard from '@/components/ProductCard';

export default function Products() {
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
            grit,
            isNew,
            scent,
            slug,
            displayStatus
          }
        `);

        // Sort: New first, then Featured, then rest
        const sortedSoaps = soapData.sort((a, b) => {
          // New products first
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;

          // If both or neither are new, then featured products next
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;

          // If same priority, maintain original order
          return 0;
        });

        setSoaps(sortedSoaps);
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
      <div className='min-h-screen bg-white'>
        <div className='container mx-auto px-4 py-12'>
          <div className='flex justify-center items-center min-h-[400px]'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-green-800'></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='min-h-screen bg-white'>
        <div className='container mx-auto px-4 py-12'>
          <div className='text-center py-8'>
            <p className='text-red-600 mb-4'>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className='bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200'
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white'>
      <div className='container mx-auto px-4 py-12'>
        {/* Page Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            OUR PRODUCTS
          </h1>
          <div className='w-24 h-1 bg-green-800 mx-auto mb-6'></div>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Handcrafted soaps made with love and natural ingredients from
            Michigan
          </p>
        </div>

        {/* Products Grid */}
        {soaps.length > 0 ? (
          <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8'>
              {soaps.map((soap) => (
                <ProductCard key={soap._id} soap={soap} />
              ))}
            </div>

            {/* Products Count */}
            <div className='text-center'>
              <p className='text-gray-500 text-sm'>
                Showing {soaps.length} product{soaps.length !== 1 ? 's' : ''}
              </p>
            </div>
          </>
        ) : (
          <div className='text-center py-12'>
            <p className='text-gray-600 text-lg mb-2'>No products found.</p>
            <p className='text-gray-500 text-sm'>
              Check back soon for new handcrafted soaps!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
