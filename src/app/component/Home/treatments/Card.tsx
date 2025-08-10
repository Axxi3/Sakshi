// components/TreatmentCard.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import { Treatment } from '../mockdata';
import { ArrowUpRight } from 'lucide-react';

interface TreatmentCardProps {
  treatment: Treatment;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment }) => {
  return (
    <div className="bg-white backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-500 border border-white/50 hover:border-[#8b8680]/20 hover:shadow-2xl hover:shadow-[#8b8680]/10 group hover:-translate-y-1">
      {/* Icon */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#8b8680]/10 to-[#8b8680]/20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 transition-transform duration-300 group-hover:scale-110">
        <span className="text-xl sm:text-2xl">{treatment.icon}</span>
      </div>

      {/* Content */}
      <div className="space-y-4 sm:space-y-6">
        <h3 className="font-philosopher text-xl sm:text-2xl font-normal text-[#2d3020] leading-tight">
          {treatment.title}
        </h3>
        
        <p className="text-[#6b6b6b]/80 leading-relaxed text-sm sm:text-base font-light">
          {treatment.description}
        </p>

        {/* Learn More */}
        <div className="pt-2 sm:pt-4">
          <Link 
            href={`/treatments/${treatment.id}`}
            className="group/link inline-flex items-center space-x-1.5 sm:space-x-2 text-[#8b8680] hover:text-[#2d3020] font-normal text-xs sm:text-sm transition-all duration-300"
          >
            <span className="relative">
              Learn more
              <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-current group-hover/link:w-full transition-all duration-300"></div>
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
