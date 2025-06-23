import ProductGrid from '@/components/ProductGrid';
import FeaturedProducts from '@/components/FeaturedProducts';
import MichiganPrideSection from '@/components/MichiganPrideSection';
import ShopAllSection from '@/components/ShopAllSection';
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
