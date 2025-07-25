import { FaLeaf, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { generateAboutMetadata } from '@/lib/metadata';

// Generate metadata for the page
export async function generateMetadata() {
  return await generateAboutMetadata();
}

export default function About() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='relative py-20 md:py-32 flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <img
            src='/images/michigan_summer.png'
            alt='Michigan Summer'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/40'></div>
        </div>

        {/* Hero Content */}
        <div className='relative z-10 text-center text-white px-4 max-w-4xl mx-auto'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4 tracking-tight'>
            Our Story
          </h1>
          <p className='text-lg md:text-xl mb-6 text-gray-200 max-w-2xl mx-auto leading-relaxed'>
            Born in the heart of Michigan
          </p>
          <div className='w-16 h-1 bg-white mx-auto'></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-20 px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                Handcrafted with Michigan Love
              </h2>
              <p className='text-lg text-gray-600 leading-relaxed mb-6'>
                We're a little soap shop with big mitten-state energy. Every bar
                is hand-crafted from locally sourced oils, butters, and
                botanicals-because we like our carbon footprint as clean as your
                skin.
              </p>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Picture the smell of pine-lined trails, dune-side bonfires, and
                crisp fall orchards swirling together in a bubbly handshake.
                That's the Soap Stache vibe: outdoorsy, playful, and
                unmistakably fresh.
              </p>
            </div>
            <div className='relative'>
              <div className='aspect-square bg-gray-100 rounded-2xl overflow-hidden'>
                <div className='w-full h-full flex items-center justify-center text-8xl'>
                  🧼
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-20 bg-gray-50 px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              What Makes Us Different
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Three simple principles guide everything we do
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* Local Sourcing */}
            <div className='text-center'>
              <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <FaMapMarkerAlt className='text-2xl text-green-600' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Locally Sourced
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                We partner with Michigan beekeepers, farmers, and artisans to
                bring you the finest local ingredients, supporting our community
                while reducing our environmental impact.
              </p>
            </div>

            {/* Natural Ingredients */}
            <div className='text-center'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <FaLeaf className='text-2xl text-amber-600' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                All Natural
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                No harsh chemicals, no artificial fragrances. Just pure, natural
                ingredients that your skin will love. From honey to essential
                oils, every ingredient serves a purpose.
              </p>
            </div>

            {/* Handcrafted */}
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <FaHeart className='text-2xl text-blue-600' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Handcrafted
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Each bar is carefully crafted by hand in small batches. This
                ensures quality, consistency, and that personal touch that makes
                every bar special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-20 px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              The Soap Stache Story
            </h2>
          </div>

          <div className='space-y-12'>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  From Michigan to Your Shower
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  It all started with a simple idea: create soap that captures
                  the essence of Michigan's natural beauty. Our founder,
                  inspired by childhood memories of Lake Michigan sunsets and
                  northern Michigan camping trips, set out to create something
                  special.
                </p>
              </div>
              <div className='bg-gray-100 rounded-2xl aspect-video flex items-center justify-center'>
                <span className='text-6xl'>🌅</span>
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div className='order-2 md:order-1 bg-gray-100 rounded-2xl aspect-video flex items-center justify-center'>
                <span className='text-6xl'>🌲</span>
              </div>
              <div className='order-1 md:order-2'>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  The Great Lakes Difference
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  We source fine sand from Lake Superior's pristine shores for
                  natural exfoliation, honey from Michigan beekeepers for
                  moisture, and essential oils that evoke memories of pine
                  forests and apple orchards. Every ingredient tells a story.
                </p>
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Community First
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  We're proud to be part of the Michigan community. From
                  supporting local farmers to participating in craft fairs and
                  farmers markets, we believe in building connections and giving
                  back to the place that inspires everything we do.
                </p>
              </div>
              <div className='bg-gray-100 rounded-2xl aspect-video flex items-center justify-center'>
                <span className='text-6xl'>🤝</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gray-900 text-white px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Ready to Experience Michigan?
          </h2>
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
            Grab a bar, lather up, and let every shower feel like a Great Lakes
            adventure-no flannel beard required.
          </p>
          <a
            href='/products'
            className='inline-block bg-white text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200'
          >
            Shop Our Soaps
          </a>
        </div>
      </section>
    </div>
  );
}
