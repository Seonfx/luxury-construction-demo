"use client";

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = ['Services', 'Homes', 'About us', 'Cases'];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: "easeOut"
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.nav 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex justify-between items-center px-6 lg:px-16 py-8 lg:py-6 z-50 relative shrink-0"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-2 lg:gap-3 font-semibold tracking-widest text-[0.9rem] lg:text-[1.1rem]">
          <svg 
            className="w-5 h-5 lg:w-[22px] lg:h-[22px] stroke-current stroke-[1.5] fill-none" 
            viewBox="0 0 24 24"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="font-sans">RANTY</span>
        </motion.div>
        
        <div className="hidden lg:flex gap-14 items-center">
          {links.map((link) => (
            <motion.a 
              key={link} 
              variants={itemVariants}
              href="#" 
              className="text-luxury-dim hover:text-white transition-colors text-[0.85rem] font-normal tracking-wide"
            >
              {link}
            </motion.a>
          ))}
        </div>

        <motion.div variants={itemVariants} className="flex items-center gap-4 lg:gap-10">
          <span className="hidden sm:inline text-[0.7rem] lg:text-[0.8rem] text-luxury-dim font-semibold">ENG</span>
          <button className="bg-transparent border-none border-b border-white text-white pb-0.5 text-[0.7rem] lg:text-[0.8rem] font-semibold cursor-pointer tracking-widest hover:opacity-80 transition-opacity whitespace-nowrap uppercase">
            Contact Us
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6 stroke-current stroke-2 fill-none" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-40 lg:hidden transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((link) => (
            <a 
              key={link} 
              href="#" 
              onClick={() => setIsMenuOpen(false)}
              className="text-luxury-white text-2xl font-serif tracking-widest hover:text-luxury-tan transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="mt-8 flex flex-col items-center gap-6">
            <span className="text-luxury-dim font-semibold tracking-widest">ENG</span>
            <button className="border-b border-white text-white pb-1 tracking-widest uppercase text-sm">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
