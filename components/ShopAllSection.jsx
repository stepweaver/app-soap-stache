import Link from 'next/link';

export default function ShopAllSection() {
  return (
    <div className='bg-gray-900 py-16'>
      <div className='container mx-auto px-4 text-center'>
        {/* Main Heading */}
        <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
          EXPLORE OUR FULL COLLECTION
        </h2>

        {/* Subheading */}
        <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
          Discover handcrafted soaps for every skin type, scent preference, and
          occasion. From invigorating morning blends to relaxing evening
          formulas.
        </p>

        {/* CTA Button */}
        <Link href='/products' className='bg-green-800 hover:bg-green-900 text-white font-bold py-4 px-8 rounded-md text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer'>
          Shop All Products
        </Link>
      </div>
    </div>
  );
}
