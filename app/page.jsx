import ProductGrid from '@/components/ProductGrid';
import Hero from '@/components/layout/Hero';

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <main>
        <Hero />

        {/* Products Section */}
        <section className='bg-gray-50'>
          <ProductGrid />
        </section>
      </main>
    </div>
  );
}
