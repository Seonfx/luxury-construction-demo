"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [projectType, setProjectType] = React.useState<string | null>(null);
  const [budget, setBudget] = React.useState<string | null>(null);
  const [timeline, setTimeline] = React.useState<string | null>(null);

  return (
    <section id="contact" className="h-fit lg:h-screen w-full bg-[#050505] text-white flex flex-col justify-start pt-32 md:pt-[18vh] px-6 md:px-20">
      <div className="flex-none grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-7xl mx-auto w-full pb-32">
        {/* Left Side: Large Typography */}
        <div className="space-y-8 lg:sticky lg:top-0 px-2 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-light leading-[1.1] uppercase tracking-tighter">
              Tell us about <br />
              <span className="italic text-white/40 font-serif">your vision</span>
            </h2>
            <div className="h-px w-24 bg-luxury-tan mt-8" />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white/50 text-lg md:text-xl font-light max-w-md leading-relaxed"
          >
            Crafting a masterpiece requires precision, patience, and a shared vision. 
            Let&apos;s begin a conversation about the sanctuary you envision.
          </motion.p>
        </div>

        {/* Right Side: Expanded Concierge Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10"
        >
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-8">
              {/* Basic Info Group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/20 py-3 outline-none transition-all focus:border-luxury-tan text-lg font-light"
                  />
                  <label 
                    htmlFor="name"
                    className="absolute left-0 top-3 text-white/40 transition-all pointer-events-none peer-focus:-top-6 peer-focus:text-xs peer-focus:text-luxury-tan peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs"
                  >
                    Full Name
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-luxury-tan transition-all duration-500 group-focus-within:w-full" />
                </div>

                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/20 py-3 outline-none transition-all focus:border-luxury-tan text-lg font-light"
                  />
                  <label 
                    htmlFor="email"
                    className="absolute left-0 top-3 text-white/40 transition-all pointer-events-none peer-focus:-top-6 peer-focus:text-xs peer-focus:text-luxury-tan peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs"
                  >
                    Email Address
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-luxury-tan transition-all duration-500 group-focus-within:w-full" />
                </div>
              </div>

              {/* Project Category */}
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-widest text-white/30 font-medium">Project Category</label>
                <div className="flex flex-wrap gap-3">
                  {['New Estate', 'Heritage Renovation', 'Interior Design'].map((cat) => (
                    <button 
                      key={cat}
                      type="button"
                      onClick={() => setProjectType(cat)}
                      className={`px-5 py-2 rounded-full border transition-all text-sm font-light ${
                        projectType === cat 
                          ? 'bg-luxury-tan border-luxury-tan text-black' 
                          : 'border-white/10 hover:border-luxury-tan hover:text-luxury-tan'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-widest text-white/30 font-medium">Investment Range</label>
                <div className="flex flex-wrap gap-3">
                  {['$2M - $5M', '$5M - $10M', '$10M+'].map((range) => (
                    <button 
                      key={range}
                      type="button"
                      onClick={() => setBudget(range)}
                      className={`px-5 py-2 rounded-full border transition-all text-sm font-light ${
                        budget === range 
                          ? 'bg-luxury-tan border-luxury-tan text-black' 
                          : 'border-white/10 hover:border-luxury-tan hover:text-luxury-tan'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-widest text-white/30 font-medium">Desired Timeline</label>
                <div className="flex flex-wrap gap-3">
                  {['Immediate', '6-12 Months', 'Planning Phase'].map((time) => (
                    <button 
                      key={time}
                      type="button"
                      onClick={() => setTimeline(time)}
                      className={`px-5 py-2 rounded-full border transition-all text-sm font-light ${
                        timeline === time 
                          ? 'bg-luxury-tan border-luxury-tan text-black' 
                          : 'border-white/10 hover:border-luxury-tan hover:text-luxury-tan'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="relative group">
                <textarea 
                  id="message"
                  required
                  rows={2}
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/20 py-3 outline-none transition-all focus:border-luxury-tan text-lg font-light resize-none transition-all"
                />
                <label 
                  htmlFor="message"
                  className="absolute left-0 top-3 text-white/40 transition-all pointer-events-none peer-focus:-top-6 peer-focus:text-xs peer-focus:text-luxury-tan peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Describe your dream home
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-luxury-tan transition-all duration-500 group-focus-within:w-full" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button 
                type="submit"
                className="group relative w-full lg:w-fit px-12 py-5 bg-luxury-tan hover:bg-luxury-gold text-black font-semibold rounded-full flex items-center justify-center gap-4 transition-all duration-300 hover:scale-[1.02] shadow-xl"
              >
                REQUEST CONSULTATION
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      
      {/* Footer Info */}
      <div className="relative lg:absolute lg:bottom-10 left-6 md:left-20 flex flex-col md:flex-row gap-8 text-white/30 text-xs tracking-widest uppercase pb-12 lg:pb-0">
        <div className="flex flex-col gap-1">
          <span className="text-white/10 mb-1">Inquiries</span>
          <span>hello@ranty.com</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-white/10 mb-1">Office</span>
          <span>123 Excellence Blvd, Beverly Hills</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-white/10 mb-1">Follow</span>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
          </div>
        </div>
      </div>
    </section>
  );
}
