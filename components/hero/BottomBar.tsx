import React from 'react';
import Image from 'next/image';

const BottomBar = () => {
  return (
    <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center lg:items-end mt-auto">
      {/* Material Card - Hidden on mobile, flush to corner on desktop */}
      <div className="hidden lg:flex bg-[#947a66] p-4 pl-16 pr-10 rounded-tr-[3rem] w-full lg:max-w-[480px] h-[220px] justify-between items-center relative overflow-hidden group border-none m-0">
        <div className="relative z-10">
          <h3 className="text-[1.75rem] font-sans font-medium text-white leading-[1.2]">
            We use best<br />materials!
          </h3>
          <p className="text-white text-[0.95rem] mt-16 leading-[1.2]">
            Working with verified<br />suppliers.
          </p>
        </div>
        <div className="absolute right-[-20px] bottom-[-40px] w-72 h-72 z-1">
          <img 
            src="/construction-material.png" 
            alt="Construction Materials" 
            className="w-full h-full object-contain mix-blend-multiply brightness-[1.05] contrast-[1.05]"
          />
        </div>
      </div>

      {/* Stats Container - Padding added back since parent padding was removed */}
      <div className="flex flex-col items-center gap-4 lg:gap-6 py-8 lg:pb-12">
        <div className="flex -space-x-2">
          <div 
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 lg:border-3 border-black bg-center bg-cover"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop)' }}
          />
          <div 
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 lg:border-3 border-black bg-center bg-cover"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop)' }}
          />
        </div>
        <div className="text-center">
          <span className="font-serif text-[2.5rem] lg:text-[3.5rem] italic block leading-none mb-1 lg:mb-2">
            12m<span className="text-[0.6em] ml-1">+</span>
          </span>
          <span className="text-[0.65rem] lg:text-[0.75rem] text-luxury-dim uppercase tracking-widest font-semibold">
            Customers
          </span>
        </div>
      </div>

      {/* Nature Card - Padding added back */}
      <div className="w-full lg:w-auto max-w-[350px] text-center lg:text-left px-8 lg:px-0 pb-12 lg:pb-12 lg:mr-16">
        <h3 className="text-[1.5rem] lg:text-[1.85rem] font-sans font-normal uppercase text-white tracking-wider leading-[1.2] mb-6 lg:mb-8">
          WE CAN COMBINE<br className="hidden lg:block" /> NATURE & HOME<br className="hidden lg:block" /> COMFORT
        </h3>
        <a href="#" className="inline-flex items-center gap-3 text-white text-[0.85rem] font-semibold tracking-widest pb-1.5 border-b border-white/30 hover:border-white transition-colors">
          LEARN MORE
        </a>
      </div>
    </div>
  );
};

export default BottomBar;
