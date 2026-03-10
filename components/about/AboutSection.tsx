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
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Functional values for responsiveness
      const getScrollAmount = () => {
        const horizontalLength = horizontalRef.current?.scrollWidth || 0;
        return -(horizontalLength - window.innerWidth);
      };

      const getEndAmount = () => {
        const horizontalLength = horizontalRef.current?.scrollWidth || 0;
        return `+=${horizontalLength - window.innerWidth}`;
      };

      gsap.to(horizontalRef.current, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: getEndAmount,
          pin: pinRef.current,
          scrub: 1,
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      });

      // Desktop Only: Fade out heading
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.to(headingRef.current, {
          opacity: 0,
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${window.innerHeight * 0.5}`,
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    // Refresh after a small delay to ensure all images and layout are ready
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section 
      id="about"
      ref={sectionRef} 
      className="relative bg-black"
    >
      <div 
        ref={pinRef}
        className="h-screen flex flex-col justify-start pt-[12vh] md:pt-[15vh] overflow-hidden"
      >
        {/* Quote Section (Always Visible Entrance) */}
        <div ref={headingRef} className="px-6 md:px-20 z-10 relative pt-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white max-w-[85%] lg:max-w-4xl xl:max-w-5xl leading-[1.1] uppercase tracking-tighter">
            We don&apos;t build <span className="italic text-white/40 font-serif">houses</span>.<br />
            We curate <span className="bg-linear-to-r from-white/80 to-white bg-clip-text text-transparent">legacies</span>.
          </h2>
        </div>

        {/* Horizontal Container */}
        <div className="relative lg:absolute lg:right-0 lg:top-[50%] lg:-translate-y-1/2 w-full z-20">
          <div 
            ref={horizontalRef}
            className="flex items-center lg:pl-[80vw] will-change-transform"
          >
            {/* Added a starting spacer for mobile if needed, but pl-20 is fine */}
            <div className="shrink-0 w-6 md:w-20 lg:hidden" />
            
            {VALUES.map((value, index) => (
              <CoreValueCard 
                key={value.title}
                index={index}
                {...value}
              />
            ))}
            
            {/* The "Safe Zone" spacer at the end - reduced for mobile to feel less "empty" */}
            <div className="shrink-0 w-[20vw] lg:w-[10vw] h-10" />
          </div>
        </div>

        {/* Decorative Scroller Indicator - Hidden on mobile to prevent overlap */}
        <div className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 items-center gap-4 text-white/30 text-[10px] tracking-[0.5em] uppercase pointer-events-none">
          <div className="w-12 h-px bg-white/10" />
          Scroll to explore values
          <div className="w-12 h-px bg-white/10" />
        </div>
      </div>
    </section>
  );
}
