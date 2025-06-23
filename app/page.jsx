import ProductGrid from '@/components/ProductGrid';
import FeaturedProducts from '@/components/FeaturedProducts';
import Hero from '@/components/layout/Hero';

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <main>
        <Hero />

        {/* Featured Products Section */}
        <section className='bg-white'>
          <FeaturedProducts />
        </section>

        {/* All Products Section */}
        <section className='bg-gray-50'>
          <ProductGrid />
        </section>
      </main>
    </div>
  );
}
