'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-35">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Ayurvedic spa treatment"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-6xl">
          {/* Trust Badge */}
          <div className="flex flex-wrap items-center space-x-2 mb-6 sm:mb-8">
            <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-white/20">
              <div className="flex -space-x-1">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/80 rounded-full border-2 border-white"></div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/60 rounded-full border-2 border-white"></div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/40 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-white text-xs sm:text-sm font-medium ml-2">
                Trusted by 3000+ Customers
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-philosopher text-3xl sm:text-4xl md:text-6xl lg:text-[50px] font-semibold text-white mb-4 sm:mb-6 leading-tight">
            Experience Holistic{' '}
            <span className="text-orange-400">Healing and Serenity</span>{' '}
            with Ayurveda at Wivana
          </h1>

          {/* Subtitle */}
          <p className="text-white/60 text-sm sm:text-base md:text-xl mb-6 sm:mb-8 leading-relaxed font-light max-w-2xl">
            We design digital platforms that move fast, feel great, and actually convert. Whether you&apos;re scaling a 
            startup or refreshing a brand — we&apos;ve got your back.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/consultation" 
              className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 
                        text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold transition-all duration-300 
                        transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 w-full sm:w-fit"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              href="/learn-more" 
              className="bg-transparent hover:bg-white/10 text-white border border-white/50 hover:border-white 
                        px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold transition-all duration-300 
                        w-full sm:w-fit text-center"
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
