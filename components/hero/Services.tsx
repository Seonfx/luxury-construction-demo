"use client";

import React from "react";
import {
  FullScreenScrollFX,
  FullScreenFXAPI,
} from "@/components/ui/full-screen-scroll-fx";

const sections = [
  {
    leftLabel: "Design",
    title: "Bespoke Architectural Design",
    description:
      "Award-winning architects crafting unique, timeless structures tailored to your vision and lifestyle.",
    rightLabel: "Aesthetics",
    background: "/architectural-drawaings.png",
  },
  {
    leftLabel: "Quality",
    title: "Premium Material Procurement",
    description:
      "Sourcing the world's finest, rarest materials to ensure unparalleled quality and enduring beauty in every detail.",
    rightLabel: "Sourcing",
    background: "/luxury-material-service.png",
  },
  {
    leftLabel: "Structure",
    title: "Advanced Structural Engineering",
    description:
      "State-of-the-art engineering practices guaranteeing uncompromising safety, longevity, and structural integrity.",
    rightLabel: "Precision",
    background: "/strucutural-build.png",
  },
  {
    leftLabel: "Ecology",
    title: "Environmental & Landscape Integration",
    description:
      "Harmonizing luxury living with nature through sustainable practices and breathtaking landscape design.",
    rightLabel: "Nature",
    background: "/landscape-integration.png",
  },
];

export default function Services() {
  const apiRef = React.useRef<FullScreenFXAPI>(null);

  return (
    <section id="services">
      <FullScreenScrollFX
        sections={sections}
        showProgress
        durations={{ change: 0.7, snap: 800 }}
        apiRef={apiRef}
      />
    </section>
  );
}
