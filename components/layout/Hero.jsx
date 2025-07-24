'use client';

import { useEffect, useState } from 'react';
import { client, urlFor } from '@/lib/sanity';
import Link from 'next/link';

export default function Hero() {
  const [heroProduct, setHeroProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroProduct = async () => {
      try {
        setLoading(true);
        // Query for hero product first
        let productData = await client.fetch(`
          *[_type == "soap" && displayStatus == "hero"] | order(_updatedAt desc) [0] {
            _id,
            title,
            slug,
            description,
            blurb,
            price,
            photo,
            grit,
            isNew,
            featured,
            scent,
            launchDate,
            displayStatus,
            available
          }
        `);

        // If no hero product found, fall back to featured products
        if (!productData) {
          productData = await client.fetch(`
            *[_type == "soap" && featured == true] | order(_updatedAt desc) [0] {
              _id,
              title,
              slug,
              description,
              blurb,
              price,
              photo,
              grit,
              isNew,
              featured,
              scent,
              launchDate,
              displayStatus,
              available
            }
          `);
        }

        setHeroProduct(productData);
      } catch (error) {
        console.error('Error fetching hero product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroProduct();
  }, []);

  // Determine if product is "new"
  const isProductNew = heroProduct?.isNew === true;

  return (
    <section className='relative min-h-[70vh] flex items-center overflow-hidden pt-16 lg:pt-20'>
      {/* Dynamic Background - Fades in from black */}
      <div className='absolute inset-0 z-0 bg-black'>
        {!loading && heroProduct?.photo && (
          <img
            src={urlFor(heroProduct.photo)
              .width(1920)
              .height(1080)
              .quality(90)
              .url()}
            alt={heroProduct.title}
            className='w-full h-full object-cover scale-110'
          />
        )}

        {/* Gradient Overlays for better text readability */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20'></div>
      </div>

      {/* Hero Content */}
      <div className='relative z-10 container mx-auto px-4 py-8'>
        <div className='max-w-3xl'>
          <div className='text-white'>
            {/* NEW Badge */}
            {!loading && isProductNew && (
              <div className='mb-3'>
                <span className='bg-green-800 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide'>
                  NEW
                </span>
              </div>
            )}

            {!loading && heroProduct && (
              <>
                <h1 className='text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl leading-tight'>
                  {heroProduct.title?.toUpperCase()}
                </h1>

                <p className='text-lg md:text-xl mb-4 drop-shadow-lg text-gray-100 max-w-2xl'>
                  {heroProduct.heroTagline || heroProduct.blurb}
                </p>

                {heroProduct.description && (
                  <div className='mb-6'>
                    <p className='text-sm md:text-base text-gray-200 drop-shadow-md max-w-xl'>
                      {heroProduct.description}
                    </p>
                  </div>
                )}

                {/* Product Details + Shop Now Button */}
                <div className='flex gap-3 mb-6 items-center flex-wrap'>
                  {/* Price */}
                  <div className='bg-black/30 backdrop-blur-sm rounded-md px-4 py-3 border border-white/20 w-24 h-16 flex flex-col justify-center text-center'>
                    <div className='text-lg font-bold text-green-100'>
                      ${heroProduct.price}
                    </div>
                    <div className='text-xs text-gray-300'>
                      {heroProduct.weight || 5} oz
                    </div>
                  </div>

                  {/* Grit Level */}
                  <div className='bg-black/30 backdrop-blur-sm rounded-md px-4 py-3 border border-white/20 w-24 h-16 flex flex-col justify-center text-center'>
                    <div className='text-lg font-bold text-white'>
                      {heroProduct.grit}/5
                    </div>
                    <div className='text-xs text-gray-300'>Grit</div>
                  </div>

                  {/* Shop Now Button */}
                  <Link
                    href='/products'
                    className='bg-green-800 hover:bg-green-900 text-white px-4 py-3 rounded-md font-bold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-green-800/50 cursor-pointer w-64 h-16 border border-green-800 flex items-center justify-center'
                  >
                    SHOP NOW
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
