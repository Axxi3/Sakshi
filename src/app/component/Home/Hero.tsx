'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-[100dvh] flex items-center overflow-hidden bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg.webp')", // Ensure absolute path for consistency
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay - Ensures text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="max-w-6xl flex flex-col gap-2">

          {/* Trust Badge */}
          <div className="flex flex-wrap items-center space-x-2 mb-6 sm:mb-4">
            <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-white/20">
              <span className="text-white text-xs sm:text-sm font-medium">
                Trusted by 3000+ Patients
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-philosopher text-3xl sm:text-4xl md:text-6xl lg:text-[64px] font-semibold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
            Experience Holistic{' '}
            <span className="text-orange-400">Healing and Serenity</span>{' '} <br className="hidden md:block" />
            at Shree Samadhan Ayurveda
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-sm sm:text-base md:text-xl mb-8 sm:mb-10 leading-relaxed font-light max-w-2xl drop-shadow-md">
            Embrace the Power of Authentic Ayurvedic Healing. Personalized Treatment Plans Rooted in Ancient Wisdom for Your Complete Well-being.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              href="https://api.whatsapp.com/send/?phone=917454058199&text=Hey%2C+I+want+to+visit+you.+When+are+you+free+to+attend+me%3F&type=phone_number&app_absent=0"
              className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 
                        text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-all duration-300 
                        transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2 w-full sm:w-fit"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href="/treatments"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/30 hover:border-white 
                        px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-all duration-300 
                        backdrop-blur-sm w-full sm:w-fit text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
