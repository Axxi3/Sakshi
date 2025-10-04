'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <section
      className="py-14 sm:py-20 bg-[#FDF8F3] "
      
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6">
            {/* Section Label */}
            <div className="text-[#7a756f] text-xs sm:text-sm tracking-wider uppercase">
              MY STORY
            </div>

            {/* Main Heading */}
            <h2 className="font-philosopher text-3xl sm:text-4xl lg:text-5xl font-normal text-[#101010] leading-snug sm:leading-tight">
              Namaste, I’m Vaidya Sakshi Mittal, 
              <span className="italic">Your Ayurveda doctor</span>
            </h2>

            {/* Description */}
            <p className="text-[#101010]/60 text-sm sm:text-base leading-relaxed max-w-lg">
             Ayurveda isn&apos;t only my job, it&apos;s my lifestyle. I try to make health easy, natural, and accessible to all through my practice. I am specialized in Nadi Parikshan and lifestyle healing, helping individuals to balance their body and mind. My work is based on the core cause of health issues, not temporary solutions. I particularly love to work with youth and families and assist them in finding out how small everyday habits, thoughtful eating, and Ayurveda&apos;s eternal principles can lead to long-lasting health and contentment.
            </p>

         

            {/* CTA Button */}
            <div className="pt-4 sm:pt-6">
              <Link
                href="/treatments"
                className="group flex items-center justify-center space-x-2 sm:space-x-3 
                           bg-[#C84F1A] hover:bg-[#7a7570] text-white 
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
                src="/me.jpg"
                alt="Physiotherapy treatment session"
                className="w-full h-64 sm:h-96 lg:h-[700px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
