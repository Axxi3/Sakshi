// components/ProcessSection.tsx
'use client'

import React from 'react';

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    id: "01",
    number: "01",
    title: "Initial Consultant",
    description: "Your journey begins with a personalized consultation where we assess your health"
  },
  {
    id: "02", 
    number: "02",
    title: "Customized Plan",
    description: "Based on your dosha (body constitution) and consultation, we create a tailored plan"
  },
  {
    id: "03",
    number: "03", 
    title: "Therapeutic Sessions",
    description: "Experience our diverse range of treatments, detox therapies, and wellness"
  },
  {
    id: "04",
    number: "04",
    title: "Ongoing Support", 
    description: "We provide continuous guidance and support throughout your wellness"
  }
];

const ProcessSection = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#F2A62B] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-6 sm:top-10 right-6 sm:right-10 w-28 h-28 sm:w-40 sm:h-40 bg-[#d4c4a8] rounded-full opacity-10 -z-10"></div>
      <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#a8b5a8] rounded-full opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-[#8b8680] text-xs sm:text-sm font-normal tracking-wider uppercase mb-3 sm:mb-4">
            — OUR PROCESS
          </div>
          
          <h2 className="font-philosopher text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#2d3020] leading-tight">
            Holistic Steps to Wellness 
            <br className="hidden sm:block" />
            <span className="italic">and Healing</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative group">
              {/* Connecting Line (desktop only) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-[#8b8680]/30 z-10"></div>
              )}
              
              {/* Step Card */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/80 transition-all duration-500 hover:-translate-y-2 border border-white/50 hover:shadow-xl group">
                {/* Step Number */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#8b8680] text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg mb-4 sm:mb-6 group-hover:bg-[#2d3020] transition-colors duration-300">
                  {step.number}
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="font-philosopher text-lg sm:text-xl font-semibold text-[#2d3020] leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-[#6b6b6b]/80 leading-relaxed text-sm sm:text-base font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-[#6b6b6b] text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Ready to begin your wellness journey? Let our experienced practitioners guide you through each step.
          </p>
          
          <button className="bg-[#C84F1A] hover:bg-[#7a7570] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
