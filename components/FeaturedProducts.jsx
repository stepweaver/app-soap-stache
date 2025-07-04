'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { client, urlFor } from '@/lib/sanity';
import { useCart } from '@/contexts/CartContext';

export default function FeaturedProducts() {
  const [featuredSoaps, setFeaturedSoaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchFeaturedSoaps = async () => {
      try {
        setLoading(true);
        const soapData = await client.fetch(`
          *[_type == "soap" && (isNew == true || displayStatus == "hero" || displayStatus == "featured")] | order(coalesce(isNew, false) desc, displayStatus desc, _createdAt desc) {
            _id,
            title,
            description,
            blurb,
            price,
            photo,
            featured,
            grit,
            isNew,
            displayStatus,
            scent,
            slug,
            available,
            preOrderEnabled,
            preOrderMinimum
          }
        `);
        setFeaturedSoaps(soapData);
        setError(null);
      } catch (error) {
        console.error('Error fetching featured soaps:', error);
        setError('Failed to load featured products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedSoaps();
  }, []);

  if (loading) {
    return (
      <div className='container mx-auto px-4 py-12'>
        <div className='flex justify-center items-center min-h-[200px]'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-green-800'></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='container mx-auto px-4 py-12'>
        <div className='text-center py-8'>
          <p className='text-red-600 mb-4'>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className='bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200'
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (featuredSoaps.length === 0) {
    return (
      <div className='container mx-auto px-4 py-12'>
        <div className='text-center py-8'>
          <p className='text-gray-600 text-lg'>No featured products found.</p>
          <p className='text-gray-500 text-sm mt-2'>
            Add some featured products in your Sanity Studio!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-12'>
      {/* Section Header */}
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-bold text-gray-900'>
          WHAT'S 🔥 AT SOAP STACHE
        </h2>
      </div>

      {/* Products Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {featuredSoaps.map((soap) => (
          <Link
            key={soap._id}
            href={`/products/${soap.slug?.current}`}
            className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 cursor-pointer transform hover:-translate-y-1 flex flex-col'
          >
            {/* Product Image */}
            <div className='relative aspect-[3/2] overflow-hidden bg-gray-50'>
              {soap.photo && (
                <img
                  src={urlFor(soap.photo)
                    .width(400)
                    .height(267)
                    .quality(85)
                    .url()}
                  alt={soap.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
              )}

              {/* NEW Badge */}
              {soap.isNew && (
                <div className='absolute top-3 left-3'>
                  <span className='bg-green-800 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide shadow-lg'>
                    NEW
                  </span>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className='p-3'>
              {/* Title */}
              <div className='h-12 mb-1'>
                <h3 className='font-bold text-lg text-gray-900 group-hover:text-gray-700 transition-colors duration-200 leading-tight'>
                  {soap.title}
                </h3>
              </div>

              {/* Description */}
              <div className='h-10 mb-2'>
                <p className='text-gray-600 text-sm leading-relaxed line-clamp-2'>
                  {soap.blurb || soap.description}
                </p>
              </div>

              {/* Price and Grit */}
              <div className='h-8 flex items-center gap-3 mb-2'>
                <span className='text-xl font-bold text-gray-900'>
                  ${soap.price}
                </span>
                <div className='text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full'>
                  Grit {soap.grit}/5
                </div>
              </div>

              {/* Purchase Options */}
              <div className='space-y-2'>
                {/* Only allow Add to Cart if available, otherwise show Sold Out */}
                {soap.available !== false ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(soap, 'bar');
                    }}
                    className='w-full bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-md transition-all duration-200 transform group-hover:scale-105 shadow-md hover:shadow-lg cursor-pointer'
                  >
                    + Add To Cart
                  </button>
                ) : (
                  <button
                    className='w-full bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded-md cursor-not-allowed opacity-75'
                    disabled
                  >
                    Sold Out
                  </button>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Products Link */}
      {featuredSoaps.length > 0 && (
        <div className='text-center mt-8'>
          <Link
            href='/products'
            className='bg-green-900 hover:bg-green-800 text-white font-bold py-2 px-6 rounded-md transition-all duration-200 transform hover:scale-105 cursor-pointer'
          >
            View All Products
          </Link>
        </div>
      )}
    </div>
  );
}
