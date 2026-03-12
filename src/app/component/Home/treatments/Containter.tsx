// components/TreatmentsSection.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const DiseasesSection = () => {
  const diseases = [
    {
      id: 1,
      name: "Joint Problems",
      icon: "🦴",
      description: "Chronic pain, RA, OA, AVN, Cervical & Lumbar spondylitis",
      image: "/diseases/1.png"
    },
    {
      id: 2,
      name: "Respiratory Diseases",
      icon: "🫁",
      description: "Asthma, Rhinitis, Sinusitis, Bronchitis, Chronic cough",
      image: "/diseases/2.png"
    },
    {
      id: 3,
      name: "Digestive Disorders",
      icon: "🫃",
      description: "IBS, Gastritis, Acidity, Ulcers, Lactose intolerance, GERD",
      image: "/diseases/3.png"
    },
    {
      id: 4,
      name: "Skin Diseases",
      icon: "✨",
      description: "Eczema, Psoriasis, Fungal, Acne, Vitiligo",
      image: "/diseases/4.png"
    },
    {
      id: 5,
      name: "Kidney Disorders",
      icon: "🫘",
      description: "CKD, Kidney stones, Renal failure",
      image: "/diseases/5.png"
    },
    {
      id: 6,
      name: "Liver Diseases",
      icon: "🟤",
      description: "Fatty liver, Alcoholic liver disease, Recurrent fever",
      image: "/diseases/6.png"
    },
    {
      id: 7,
      name: "Urinary Diseases",
      icon: "💧",
      description: "Recurrent UTI, Incontinence, BPH, Dribbling urine",
      image: "/diseases/7.png"
    },
    {
      id: 8,
      name: "Gynaecological Issues",
      icon: "🌺",
      description: "PCOD/PCOS, Irregular/painful periods, Leucorrhea, Infections",
      image: "/diseases/8.png"
    },
    {
      id: 9,
      name: "Garbhsanskar",
      icon: "👶",
      description: "Male and Female Infertility, 9 months PCPD programme, Suwarnprashan Sanskar",
      image: "/10.png"
    }
  ];


  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Ayurvedic herbs and natural medicine"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-emerald-300/20 rounded-full opacity-40 z-20"></div>
      <div className="absolute bottom-20 right-10 w-20 sm:w-24 h-20 sm:h-24 bg-amber-300/20 rounded-full opacity-40 z-20"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-300/20 rounded-full opacity-30 z-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-30">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-emerald-200/80 text-xs sm:text-sm font-normal tracking-wider uppercase mb-3 sm:mb-4">
            — OUR SPECIALIZATIONS —
          </div>

          <h2 className="font-philosopher text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 sm:mb-6">
            Diseases We Specialized In Treating
          </h2>

          <p className="text-emerald-100/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2">
            Our comprehensive Ayurvedic approach addresses a wide range of health conditions through natural healing methods, personalized treatments, and time-tested remedies.
          </p>
        </div>

        {/* Diseases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {diseases.map((disease) => (
            <div
              key={disease.id}
              className="group bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <img
                  src={disease.image}
                  alt={disease.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {disease.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {disease.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-emerald-600 text-sm font-medium group-hover:text-emerald-700 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default DiseasesSection;
