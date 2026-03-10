'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

const StickyScroll = forwardRef<HTMLElement>((props, ref) => {
  return (
    <ReactLenis root options={{ 
      lerp: 0.25, 
      duration: 0.5, 
      smoothWheel: true,
      wheelMultiplier: 1.5,
      touchMultiplier: 2,
      infinite: false,
    }}>
      <main className='bg-luxury-brand' ref={ref}>
        <div className='wrapper'>
          <section className='text-white h-[60vh] lg:h-[40vh] w-full bg-luxury-brand grid place-content-center sticky top-0'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <div className="relative z-10 text-center px-4">
              <span className="text-gold-500 font-medium tracking-widest uppercase text-sm mb-4 block">Portfolio</span>
              <h1 className='2xl:text-7xl text-5xl font-semibold tracking-tight leading-[120%]'>
                Exceptional Homes<br />
                Crafted for Perfection
              </h1>
            </div>
          </section>
        </div>

        <section className='text-white w-full bg-luxury-brand px-2 pb-2'>
          <div className='grid grid-cols-12 gap-2'>
            {/* Left Column */}
            <div className='grid gap-2 col-span-4'>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop'
                  alt='Modern Luxury Mansion'
                  className='transition-all duration-300 w-full h-72 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop'
                  alt='Luxury Pool Side'
                  className='transition-all duration-300 w-full h-72 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop'
                  alt='Luxury Living Room'
                  className='transition-all duration-300 w-full h-72 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='/portfolio/modern-architecture-dusk.png'
                  alt='Modern Architecture at Dusk'
                  className='transition-all duration-300 w-full h-72 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop'
                  alt='Luxury Bathroom Design'
                  className='transition-all duration-300 w-full h-72 align-bottom object-cover rounded-md'
                />
              </figure>
            </div>

            {/* Middle Column (Sticky) */}
            <div className='sticky top-0 h-screen w-full col-span-4 gap-2 grid grid-rows-3 py-2'>
              <figure className='w-full h-full'>
                <img
                  src='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop'
                  alt='Classic Estate Exterior'
                  className='transition-all duration-300 h-full w-full align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full h-full'>
                <img
                  src='https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&auto=format&fit=crop'
                  alt='Luxury Dining Area'
                  className='transition-all duration-300 h-full w-full align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full h-full'>
                <img
                  src='https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&auto=format&fit=crop'
                  alt='Modern Staircase'
                  className='transition-all duration-300 h-full w-full align-bottom object-cover rounded-md'
                />
              </figure>
            </div>

            {/* Right Column */}
            <div className='grid gap-2 col-span-4'>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop'
                  alt='European Villa Exterior'
                  className='transition-all duration-300 w-full h-72 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&auto=format&fit=crop'
                  alt='Grand Kitchen'
                  className='transition-all duration-300 w-full h-72 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop'
                  alt='Modern Home Design'
                  className='transition-all duration-300 w-full h-72 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop'
                  alt='Glass Architecture'
                  className='transition-all duration-300 w-full h-72 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='/portfolio/luxury-terrace.png'
                  alt='Luxury Terrace'
                  className='transition-all duration-300 w-full h-72 align-bottom object-cover rounded-md'
                />
              </figure>
            </div>
          </div>
        </section>

      </main>
    </ReactLenis>
  );
});

StickyScroll.displayName = 'StickyScroll';

export default StickyScroll;
