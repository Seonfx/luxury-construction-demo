"use client";

import Navbar from "@/components/hero/Navbar";
import HeroContent from "@/components/hero/HeroContent";
import HeroVideo from "@/components/hero/HeroVideo";
import SocialProof from "@/components/hero/SocialProof";
import Services from "@/components/hero/Services";
import HomesSection from "@/components/homes/HomesSection";
import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";
import { ChevronUp } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50 p-4 bg-white/5 backdrop-blur-2xl border border-white/10 text-white/50 rounded-full shadow-2xl hover:bg-luxury-tan hover:text-black hover:border-luxury-tan hover:text-opacity-100 transition-all duration-500 group"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5 stroke-[1.5px] group-hover:-translate-y-1 transition-transform duration-500" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default function Home() {
  return (
    <main className="relative min-h-dvh">
      {/* 
        CURTAIN REVEAL WRAPPER
        This relative container holds all the "top" content.
        The z-10 and bg-black ensure it masks the fixed contact section below.
      */}
      <div className="relative z-10 bg-black">
        {/* Hero Section Container - Sticky for Curtain Reveal Effect */}
        <div className="sticky top-0 h-dvh flex flex-col z-0">
          {/* Background Video (Hero Only) */}
          <HeroVideo src="/luxury-home-hero-video.mp4" />

          {/* Navigation - Overlay on video */}
          <Navbar />

          {/* Main Hero Content */}
          <div className="flex-1 flex flex-col relative z-10 overflow-auto no-scrollbar">
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] items-center">
              {/* Left Side: Content */}
              <HeroContent />
              
              {/* Right Side: Blank (Video shows through) */}
              <div className="hidden lg:block h-full" />
            </div>

            {/* Bottom Left Social Proof */}
            <SocialProof />
          </div>
        </div>

        {/* Services Section - Relative with higher z-index to slide over Hero */}
        <div className="relative z-10 bg-black shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          {/* Glass Edge Transition */}
          <div className="absolute -top-px left-0 right-0 h-24 bg-white/10 backdrop-blur-2xl border-t border-white/20 z-20 pointer-events-none" 
               style={{ maskImage: 'linear-gradient(to bottom, black, transparent)' }} />
          
          <Services />
        </div>

        {/* Homes Section */}
        <HomesSection />

        {/* About Us Section */}
        <AboutSection />
      </div>

      {/* 
        THE REVEALED SECTION (Contact)
        Fixed at the bottom, sitting behind the main content (-z-10).
      */}
      <div className="relative z-20 bg-[#050505] lg:fixed lg:bottom-0 lg:left-0 lg:w-full lg:h-screen lg:z-0 lg:flex lg:items-end">
        <ContactSection />
      </div>

      {/* 
        SCROLL SPACER
        This empty div provides the extra scroll height needed to "reveal" 
        the fixed section as the user scrolls to the end of the page.
      */}
      {/* 
        SCROLL SPACER
        This empty div provides the extra scroll height needed to "reveal" 
        the fixed section as the user scrolls to the end of the page.
      */}
      <div id="contact-reveal" className="hidden lg:block lg:h-screen w-full pointer-events-none bg-transparent" />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}

