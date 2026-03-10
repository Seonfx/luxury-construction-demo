"use client";

import React, { useEffect, useRef } from 'react';

interface HeroVideoProps {
  src: string;
}

const HeroVideo: React.FC<HeroVideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.loop = false;
    video.playbackRate = 2.0;
    video.play().catch(error => {
      console.log("Autoplay prevented by browser:", error);
    });

    const handleEnded = () => {
      if (video) {
        video.currentTime = video.duration;
        video.pause();
      }
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <video
        ref={videoRef}
        muted
        playsInline
        className="w-full h-full object-cover opacity-60 pointer-events-none"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent pointer-events-none" />
    </div>
  );
};

export default HeroVideo;
