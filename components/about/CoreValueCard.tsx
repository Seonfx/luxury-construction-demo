"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CoreValueCardProps {
  title: string;
  description: string;
  imageSrc: string;
  index: number;
}

export default function CoreValueCard({ title, description, imageSrc, index }: CoreValueCardProps) {
  return (
    <div className="shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] h-[70vh] relative group overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl mx-12">
      {/* Background Image with Hover Zoom */}
      <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover brightness-[0.7] group-hover:brightness-50 transition-all duration-500"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 p-8 md:p-12 flex flex-col justify-end bg-linear-to-t from-black via-transparent to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-white/50 text-sm tracking-[0.3em] uppercase mb-4">
            Value 0{index + 1}
          </span>
          <h3 className="text-4xl md:text-5xl font-light text-white mb-6 uppercase tracking-tight">
            {title}
          </h3>
          <p className="max-w-md text-lg text-white/70 leading-relaxed font-light">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Glass Boardy Decoration */}
      <div className="absolute top-8 right-8 w-12 h-12 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
      </div>
    </div>
  );
}
