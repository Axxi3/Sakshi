// components/TreatmentsSection.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import TreatmentCard from './Card';
import { treatmentsData } from '../mockdata';
import { ArrowRight } from 'lucide-react';

const TreatmentsSection = () => {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Ayurvedic spa treatment"
          className="w-full h-full object-cover opacity-35"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-[#d4c4a8] rounded-full opacity-20 z-20"></div>
      <div className="absolute bottom-20 right-10 w-20 sm:w-24 h-20 sm:h-24 bg-[#a8b5a8] rounded-full opacity-20 z-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-30">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-white/60 text-xs sm:text-sm font-normal tracking-wider uppercase mb-3 sm:mb-4">
            — WHAT WE OFFER —
          </div>
          
          <h2 className="font-philosopher text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-orange-400 mb-4 sm:mb-6">
            Effective recovery treatments
          </h2>
          
          <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2">
            Our clinic offers a broad range of physiotherapy services designed to address different physical conditions and needs.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {treatmentsData.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <Link 
            href="/treatments"
            className="group inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-[#8b8680] hover:bg-[#7a7570] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
