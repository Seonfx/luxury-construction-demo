"use client";

import React from "react";
import { FullScreenScrollFX, FullScreenFXAPI } from "@/components/ui/full-screen-scroll-fx";

const sections = [
  {
    leftLabel: "Vision",
    title: "Architecture & Design",
    rightLabel: "Precision",
    background: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    leftLabel: "Elegance",
    title: "Interior Masterpieces",
    rightLabel: "Comfort",
    background: "https://images.unsplash.com/photo-1600607687940-c52fc042939b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    leftLabel: "Future",
    title: "Sustainable Building",
    rightLabel: "Nature",
    background: "https://images.unsplash.com/photo-1518005020251-58296b97b1bb?q=80&w=2021&auto=format&fit=crop",
  },
  {
    leftLabel: "Control",
    title: "Smart Home Tech",
    rightLabel: "Innovation",
    background: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Services() {
  const apiRef = React.useRef<FullScreenFXAPI>(null);

  return (
    <section id="services">
      <FullScreenScrollFX
        sections={sections}
        header={
          <>
            <div>Our Luxury</div>
            <div>Services</div>
          </>
        }
        footer={<div>Defining Modern Living</div>}
        showProgress
        durations={{ change: 0.7, snap: 800 }}
        apiRef={apiRef}
      />
    </section>
  );
}
