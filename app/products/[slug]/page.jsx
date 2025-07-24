import { client, urlFor } from '@/lib/sanity';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa6';
import AddToCartButton from './AddToCartButton';

export default async function ProductPage({ params }) {
  const product = await client.fetch(
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

  if (!product) {
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

  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
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
        <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20'></div>
      </div>

      <div className='relative z-10 container mx-auto px-4 py-16'>
        <div className='max-w-3xl'>
          <div className='text-white'>
            <div className='mb-6'>
              <Link
                href='/products'
                className='inline-flex items-center text-green-100 hover:text-white transition-colors duration-200'
              >
                <FaChevronLeft className='w-5 h-5 mr-2' />
                Back to Products
              </Link>
            </div>

            <h1 className='text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl leading-tight'>
              {product.title?.toUpperCase()}
            </h1>

            {product.blurb && (
              <p className='text-xl md:text-2xl mb-6 drop-shadow-lg text-gray-100 max-w-3xl leading-relaxed'>
                {product.blurb}
              </p>
            )}

            {product.description && (
              <div className='mb-8'>
                <p className='text-lg md:text-xl text-gray-200 drop-shadow-md max-w-2xl leading-relaxed'>
                  {product.description}
                </p>
              </div>
            )}

            <div className='flex flex-row gap-3 max-w-xl mt-2'>
              {product.available !== false ? (
                <>
                  <AddToCartButton product={product} />
                  <Link
                    href='/products'
                    className='border border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-5 py-2 rounded-md font-bold text-base transition-all duration-300 text-center transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer'
                  >
                    View More Products
                  </Link>
                </>
              ) : (
                <div className='text-white'>Product is out of stock</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
