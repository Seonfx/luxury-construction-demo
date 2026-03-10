"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CoreValueCard from "./CoreValueCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const VALUES = [
  {
    title: "Masterful Craftsmanship",
    description: "Every joint, every finish, and every stone is placed with obsessive precision. We don't just build, we sculpt masterpieces that stand as a testament to human skill.",
    imageSrc: "/about/craftsmanship.png",
  },
  {
    title: "Unrivaled Exclusivity",
    description: "We work with a select few, ensuring each project receives our absolute attention. Your home is not a house, it's a private sanctuary designed for the singular few.",
    imageSrc: "/about/exclusivity.png",
  },
  {
    title: "Timeless Heritage",
    description: "Our builds are designed to transcend generations. By blending classical architectural principles with modern innovation, we create legacies that endure.",
    imageSrc: "/about/heritage.png",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const horizontalLength = horizontalRef.current?.scrollWidth || 0;
      const amountToScroll = horizontalLength - window.innerWidth;

      if (amountToScroll > 0) {
        gsap.to(horizontalRef.current, {
          x: -amountToScroll,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current, // Use the section as trigger
            start: "top top",
            end: () => `+=${amountToScroll + window.innerHeight}`,
            pin: pinRef.current, // Pin the inner wrapper
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-black"
    >
      <div 
        ref={pinRef}
        className="h-screen min-h-[800px] flex flex-col justify-center overflow-hidden"
      >
        {/* Quote Section (Always Visible Entrance) */}
        <div className="px-6 md:px-20 mb-20 lg:mb-0">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-light text-white max-w-6xl leading-[1.1] uppercase tracking-tighter">
            We don&apos;t build <span className="italic text-white/40 font-serif">houses</span>.<br />
            We curate <span className="bg-gradient-to-r from-white/80 to-white bg-clip-text text-transparent">legacies</span>.
          </h2>
        </div>

        {/* Horizontal Container */}
        <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full">
          <div 
            ref={horizontalRef}
            className="flex items-center px-[10vw] lg:px-0 lg:pl-[60vw] will-change-transform"
          >
            {VALUES.map((value, index) => (
              <CoreValueCard 
                key={value.title}
                index={index}
                {...value}
              />
            ))}
          </div>
        </div>

        {/* Decorative Scroller Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white/30 text-[10px] tracking-[0.5em] uppercase">
          <div className="w-12 h-px bg-white/10" />
          Scroll to explore values
          <div className="w-12 h-px bg-white/10" />
        </div>
      </div>
    </section>
  );
}
