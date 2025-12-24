'use client';

import React, { useRef, useState, useEffect } from 'react';

const videos = [
  '/video/1.mp4',
  '/video/2.mp4',
  '/video/3.mp4',
  '/video/4.mp4',

];

const ReelsVideosCarousel: React.FC = () => {
  return (
    <section className="w-full bg-[#FDF8F3] py-10">
      <div className="relative overflow-hidden">
        {/* Scroller */}
        <div className="flex gap-4 animate-reels-scroll">
          {/* Duplicate loop for infinite scroll */}
          {[0, 1].map((loop) => (
            <div key={loop} className="flex gap-4">
              {videos.map((src, index) => (
                <LazyVideoItem key={`${loop}-${index}`} src={src} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes reels-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-reels-scroll {
          animation: reels-scroll 40s linear infinite;
        }
        /* Pauses scroll on hover for better UX */
        .animate-reels-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ReelsVideosCarousel;

// ------------------------------------------------------------------
// Lazy Video Component (The Performance Fix)
// ------------------------------------------------------------------
const LazyVideoItem: React.FC<{ src: string }> = ({ src }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Load video when it enters viewport, unload when it leaves to save RAM
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Optional: Set to true if you want them to stay loaded once seen
        }
      },
      { rootMargin: '200px' } // Preload 200px before it appears
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-[210px] sm:w-[230px] md:w-[260px] lg:w-[280px] aspect-[9/16] rounded-2xl overflow-hidden bg-gray-900 border border-white/10"
    >
      {/* Loading Spinner */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 z-10">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mb-2" />
        </div>
      )}

      {/* Conditionally Render Video only when visible */}
      {isVisible ? (
        <video
          src={src}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsLoaded(true)}
        />
      ) : (
        /* Placeholder to keep layout stable while video is unloaded */
        <div className="w-full h-full bg-[#FDF8F3]" />
      )}
    </div>
  );
};
