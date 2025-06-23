'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { client, urlFor } from '@/lib/sanity';

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
            displayStatus
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
              displayStatus
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
    <section className='relative h-[70vh] flex items-center overflow-hidden'>
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
                <span className='bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide'>
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

                {/* Product Details */}
                <div className='flex gap-3 mb-6'>
                  {/* Price */}
                  <div className='bg-black/30 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 w-24 h-16 flex flex-col justify-center text-center'>
                    <div className='text-lg font-bold text-yellow-400'>
                      ${heroProduct.price}
                    </div>
                    <div className='text-xs text-gray-300'>
                      {heroProduct.weight || 5} oz
                    </div>
                  </div>

                  {/* Grit Level */}
                  <div className='bg-black/30 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 w-24 h-16 flex flex-col justify-center text-center'>
                    <div className='text-lg font-bold text-white'>
                      {heroProduct.grit}/5
                    </div>
                    <div className='text-xs text-gray-300'>Grit</div>
                  </div>
                </div>
              </>
            )}

            {/* Call to Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-3'>
              <button className='bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-bold text-base transition-all duration-300 shadow-2xl transform hover:scale-105 hover:shadow-yellow-400/50 cursor-pointer'>
                SHOP NOW
              </button>
              <button className='border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-bold text-base transition-all duration-300 backdrop-blur-sm cursor-pointer'>
                VIEW ALL SOAPS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Badge - Bottom Right */}
      {!loading && heroProduct?.photo && (
        <div className='absolute bottom-4 right-4 z-10 cursor-pointer group'>
          <div className='bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40 group-hover:scale-105 group-hover:shadow-2xl'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 rounded-lg overflow-hidden'>
                <img
                  src={urlFor(heroProduct.photo)
                    .width(100)
                    .height(100)
                    .quality(80)
                    .url()}
                  alt={heroProduct.title}
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                />
              </div>
              <div className='text-white'>
                <div className='font-semibold text-xs group-hover:text-yellow-100 transition-colors duration-300'>
                  {heroProduct.title}
                </div>
                <div className='text-yellow-400 font-bold text-sm group-hover:text-yellow-300 transition-colors duration-300'>
                  ${heroProduct.price}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
