import Navbar from "@/components/hero/Navbar";
import HeroContent from "@/components/hero/HeroContent";
import HeroVideo from "@/components/hero/HeroVideo";
import SocialProof from "@/components/hero/SocialProof";
import Services from "@/components/hero/Services";

export default function Home() {
  return (
    <main className="relative min-h-dvh flex flex-col bg-black">
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
      <div className="relative z-10 bg-black">
        <Services />
      </div>
    </main>
  );
}

