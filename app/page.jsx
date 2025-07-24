import FeaturedProducts from '@/components/FeaturedProducts';
import MichiganPrideSection from '@/components/MichiganPrideSection';
import ShopAllSection from '@/components/ShopAllSection';
import ReviewsSection from '@/components/ReviewsSection';
import Hero from '@/components/layout/Hero';

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <main>
        TEST
        <Hero />

        {/* Featured Products Section */}
        <section className='bg-white'>
          <FeaturedProducts />
        </section>

        {/* Shop All Section */}
        <ShopAllSection />

        {/* Michigan Pride Section */}
        <MichiganPrideSection />

        {/* Reviews Section */}
        <ReviewsSection />
      </main>
    </div>
  );
}
