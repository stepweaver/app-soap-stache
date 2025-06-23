import ProductGrid from '@/components/ProductGrid';
import FeaturedProducts from '@/components/FeaturedProducts';
import SubscribeSection from '@/components/SubscribeSection';
import ReviewsSection from '@/components/ReviewsSection';
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

        {/* Subscribe & Save Section */}
        <SubscribeSection />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* All Products Section */}
        <section className='bg-gray-50'>
          <ProductGrid />
        </section>
      </main>
    </div>
  );
}
