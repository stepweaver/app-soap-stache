'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { client, urlFor } from '@/lib/sanity';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { FaChevronLeft } from 'react-icons/fa6';

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const productData = await client.fetch(
          `
          *[_type == "soap" && slug.current == $slug] | order(_updatedAt desc) [0] {
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
            weight,
            available
          }
        `,
          { slug: params.slug }
        );

        if (!productData) {
          setError('Product not found');
        } else {
          setProduct(productData);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchProduct();
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className='min-h-screen bg-black flex items-center justify-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-green-800'></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className='min-h-screen bg-black flex items-center justify-center'>
        <div className='text-center text-white'>
          <h1 className='text-4xl font-bold mb-4'>Product Not Found</h1>
          <p className='text-gray-300 mb-6'>
            Sorry, we couldn't find the product you're looking for.
          </p>
          <Link
            href='/products'
            className='bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-md font-bold transition-colors duration-200'
          >
            View All Products
          </Link>
        </div>
      </div>
    );
  }

  const isProductNew = product?.isNew === true;

  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      {/* Dynamic Background */}
      <div className='absolute inset-0 z-0 bg-black'>
        {product?.photo && (
          <img
            src={urlFor(product.photo)
              .width(1920)
              .height(1080)
              .quality(90)
              .url()}
            alt={product.title}
            className='w-full h-full object-cover scale-110'
          />
        )}

        {/* Gradient Overlays for better text readability */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20'></div>
      </div>

      {/* Product Content */}
      <div className='relative z-10 container mx-auto px-4 py-16'>
        <div className='max-w-3xl'>
          <div className='text-white'>
            {/* Back to Products Link */}
            <div className='mb-6'>
              <Link
                href='/products'
                className='inline-flex items-center text-green-100 hover:text-white transition-colors duration-200'
              >
                <FaChevronLeft className='w-5 h-5 mr-2' />
                Back to Products
              </Link>
            </div>

            {/* NEW Badge */}
            {isProductNew && (
              <div className='mb-4'>
                <span className='bg-green-800 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide'>
                  NEW
                </span>
              </div>
            )}

            {/* Product Title */}
            <h1 className='text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl leading-tight'>
              {product.title?.toUpperCase()}
            </h1>

            {/* Product Blurb */}
            {product.blurb && (
              <p className='text-xl md:text-2xl mb-6 drop-shadow-lg text-gray-100 max-w-3xl leading-relaxed'>
                {product.blurb}
              </p>
            )}

            {/* Product Description */}
            {product.description && (
              <div className='mb-8'>
                <p className='text-lg md:text-xl text-gray-200 drop-shadow-md max-w-2xl leading-relaxed'>
                  {product.description}
                </p>
              </div>
            )}

            {/* Product Details */}
            <div className='flex flex-row flex-wrap gap-2 mb-3 items-center'>
              {/* Bar Price */}
              <div className='bg-black/50 rounded px-3 py-1 border border-white/10 text-center min-w-[80px]'>
                <div className='text-base font-bold'>${product.price}</div>
                <div className='text-[11px] text-gray-300 leading-tight'>
                  Bar ({product.weight || 5} oz)
                </div>
              </div>
              {/* Grit Level */}
              <div className='bg-black/50 rounded px-3 py-1 border border-white/10 text-center min-w-[80px]'>
                <div className='text-base font-bold text-white'>
                  {product.grit}/5
                </div>
                <div className='text-[11px] text-gray-300 leading-tight'>
                  Grit
                </div>
              </div>
              {/* Status */}
              <div className='bg-black/50 rounded px-3 py-1 border border-white/10 text-center min-w-[80px]'>
                <div
                  className={`text-base font-bold ${
                    product.available !== false
                      ? 'text-green-100'
                      : 'text-red-400'
                  }`}
                >
                  {product.available !== false ? 'Available' : 'Sold Out'}
                </div>
                <div className='text-[11px] text-gray-300 leading-tight'>
                  Status
                </div>
              </div>
            </div>

            {/* Scent Profile - Separate from grid */}
            {product.scent && (
              <div className='mb-4'>
                <div className='bg-black/40 rounded px-4 py-2 border border-white/10 max-w-xl'>
                  <div className='text-xs text-gray-300 mb-0.5'>
                    Smells Like
                  </div>
                  <div className='text-base font-semibold text-white'>
                    {product.scent}
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className='flex flex-row gap-3 max-w-xl mt-2'>
              {product.available !== false ? (
                <>
                  <button
                    onClick={() => addToCart(product, 'bar')}
                    className='bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-md font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer'
                  >
                    Add to Cart - ${product.price}
                  </button>
                  <Link
                    href='/products'
                    className='border border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-5 py-2 rounded-md font-bold text-base transition-all duration-300 text-center transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer'
                  >
                    View More Products
                  </Link>
                </>
              ) : (
                <div className='w-full max-w-2xl mx-auto bg-black/40 border border-white/10 rounded px-4 py-3 text-white mt-2'>
                  <div className='text-base font-semibold mb-2'>
                    This product is out of stock. Subscribe for updates:
                  </div>
                  <form className='flex flex-col md:flex-row items-center gap-2 w-full'>
                    <input
                      type='email'
                      required
                      placeholder='Enter your email'
                      className='flex-1 px-3 py-2 rounded-md bg-white/90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700 min-w-[140px]'
                    />
                    <button
                      type='submit'
                      className='bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer'
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Product Badge - Bottom Right */}
      {product?.photo && (
        <div className='absolute bottom-4 right-4 z-10'>
          <div className='bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 rounded-lg overflow-hidden'>
                <img
                  src={urlFor(product.photo)
                    .width(100)
                    .height(100)
                    .quality(80)
                    .url()}
                  alt={product.title}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='text-white'>
                <div className='font-semibold text-xs'>{product.title}</div>
                <div className='text-green-600 font-bold text-sm'>
                  ${product.price}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
