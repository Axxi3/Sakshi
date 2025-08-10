'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#f8f6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6">
            
            {/* Section Label */}
            <div className="text-[#8b8680] text-xs sm:text-sm font-normal tracking-wider uppercase">
              — OUR STORY
            </div>

            {/* Main Heading */}
            <h2 className="font-philosopher text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2d3020] leading-snug sm:leading-tight">
              Dedicated to your
              <span className="italic"> physical wellbeing</span>
            </h2>

            {/* Description */}
            <p className="text-[#6b6b6b] text-sm sm:text-base leading-relaxed max-w-lg">
              We focus on delivering compassionate, effective physiotherapy services to help you regain strength and improve daily living activities.
            </p>

            {/* Features List */}
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Check className="w-5 h-5 text-[#8b8680]" />
                <span className="text-[#6b6b6b]">35 years experience</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Check className="w-5 h-5 text-[#8b8680]" />
                <span className="text-[#6b6b6b]">Flexible appointment times</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Check className="w-5 h-5 text-[#8b8680]" />
                <span className="text-[#6b6b6b]">Ongoing progress monitoring</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 sm:pt-6">
              <Link 
                href="/services" 
                className="group flex items-center justify-center space-x-2 sm:space-x-3 bg-[#8b8680] hover:bg-[#7a7570] text-white 
                           px-5 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-sm sm:text-base 
                           transition-all duration-300 w-full sm:w-auto"
              >
                <span>OUR SERVICES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Physiotherapy treatment session"
                className="w-full h-64 sm:h-96 lg:h-[700px] object-cover"
              />
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 bg-[#d4c4a8] rounded-full opacity-40 -z-10"></div>
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 bg-[#a8b5a8] rounded-full opacity-40 -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
