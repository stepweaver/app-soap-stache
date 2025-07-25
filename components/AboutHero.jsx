export default function AboutHero() {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <img
          src='/images/michigan_summer.png'
          alt='Michigan Summer'
          className='w-full h-full object-cover scale-110'
        />
        {/* Gradient Overlays for better text readability */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30'></div>
      </div>

      {/* Hero Content */}
      <div className='relative z-10 container mx-auto px-4 py-16'>
        <div className='max-w-2xl'>
          <div className='text-white'>
            {/* Hero Title */}
            <h1 className='text-4xl md:text-6xl font-bold mb-8 drop-shadow-2xl leading-tight'>
              SOAP STACHE
            </h1>
            <p className='text-xl md:text-2xl mb-12 drop-shadow-lg max-w-2xl leading-relaxed'>
              Born on the breezy shores of Muskegon, Michigan
            </p>

            {/* Story Section */}
            <div className='max-w-3xl'>
              <h2 className='text-2xl md:text-3xl font-bold mb-6'>Our Story</h2>

              <div className='space-y-4 text-lg leading-relaxed'>
                <p className='text-gray-100'>
                  Born on the breezy shores of Muskegon, Michigan, Soap Stache
                  is a little soap shop with big mitten-state energy. We
                  hand-craft every bar from locally sourced oils, butters, and
                  botanicals-because we like our carbon footprint as clean as
                  your skin.
                </p>

                <p className='text-gray-100'>
                  Picture the smell of pine-lined trails, dune-side bonfires,
                  and crisp fall orchards swirling together in a bubbly
                  handshake. That's the Soap Stache vibe: outdoorsy, playful,
                  and unmistakably fresh (mustache logo and all).
                </p>

                <p className='text-gray-100'>
                  So grab a bar, lather up, and let every shower feel like a
                  Great Lakes adventure-no flannel beard required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
