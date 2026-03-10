import React from 'react';

const SocialProof = () => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-4 px-6 lg:px-16 pb-12 lg:pb-16 mt-auto">
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
      <div className="text-center lg:text-left">
        <span className="font-serif text-[2.5rem] lg:text-[3.5rem] text-white italic block leading-none mb-1">
          12m<span className="text-[0.6em] ml-1">+</span>
        </span>
        <span className="text-[0.65rem] lg:text-[0.75rem] text-luxury-dim uppercase tracking-widest font-semibold">
          Customers
        </span>
      </div>
    </div>
  );
};

export default SocialProof;
