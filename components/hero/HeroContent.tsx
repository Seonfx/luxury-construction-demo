import React from 'react';

const HeroContent = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center lg:items-start lg:text-left h-full py-12 lg:py-0 lg:pb-32 px-6 lg:px-16">
      <h1 className="font-serif text-[clamp(3.5rem,12vw,8rem)] leading-[0.9] lg:leading-[0.85] font-normal tracking-tight lg:tracking-tighter uppercase text-white">
        THE<br />PERFECT<br />HOME
        <sup className="text-[0.35em] align-baseline relative -top-[1.1em] ml-0.5 lg:ml-1 opacity-80">®</sup>
      </h1>
      <p className="text-luxury-dim mt-6 lg:mt-8 mb-8 lg:mb-10 text-[0.9rem] lg:text-[1.1rem] tracking-widest lg:tracking-widest font-light italic lg:not-italic">
        / We craft custom homes /
      </p>
      <button className="bg-luxury-brand text-white px-10 lg:px-14 py-4 lg:py-5 rounded-full text-[0.8rem] lg:text-[0.9rem] font-semibold tracking-widest transition-all hover:bg-[#524238] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(255,255,255,0.05)]">
        START
      </button>
    </div>
  );
};

export default HeroContent;
