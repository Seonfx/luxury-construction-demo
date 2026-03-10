import React from 'react';

const BottomBar = () => {
  return (
    <div className="relative z-10 w-full flex flex-col md:flex-row justify-around items-center md:items-end px-6 lg:px-24 pb-8 lg:pb-12 mt-auto gap-8 md:gap-0">
      {/* Stats Container */}
      <div className="flex flex-col items-center gap-2 lg:gap-4">
        <div className="flex -space-x-2">
          <div 
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white/20 bg-center bg-cover"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop)' }}
          />
          <div 
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white/20 bg-center bg-cover"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop)' }}
          />
        </div>
        <div className="text-center">
          <span className="font-serif text-[2.5rem] lg:text-[3.5rem] text-white italic block leading-none mb-1">
            12m<span className="text-[0.6em] ml-1">+</span>
          </span>
          <span className="text-[0.65rem] lg:text-[0.75rem] text-luxury-dim uppercase tracking-widest font-semibold">
            Customers
          </span>
        </div>
      </div>

      {/* Nature Card */}
      <div className="w-full md:w-auto max-w-[400px] text-center md:text-left">
        <h3 className="text-[1.2rem] lg:text-[1.5rem] font-sans font-normal uppercase text-white tracking-wider leading-[1.3] mb-4 lg:mb-6">
          WE CAN COMBINE<br className="hidden md:block" /> NATURE & HOME<br className="hidden md:block" /> COMFORT
        </h3>
        <a href="#" className="inline-flex items-center gap-3 text-white text-[0.8rem] lg:text-[0.9rem] font-semibold tracking-widest pb-1.5 border-b border-white/30 hover:border-white transition-colors">
          LEARN MORE
        </a>
      </div>
    </div>
  );
};

export default BottomBar;
