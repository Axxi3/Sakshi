// app/achievements/page.tsx
'use client';

import React from 'react';
import { Trophy, Heart, Users, Sparkles, Award, HandHeart, Leaf } from 'lucide-react';

// Data Configuration
const awards = [
  {
    id: 1,
    title: "Uttarakhand Salute Award",
    subtitle: "Youngest Entrepreneur in Ayurveda",
    description: "Honored for pioneering contributions and innovation in the field of Ayurveda at a young age.",
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "UMEED Award",
    subtitle: "Women’s Achiever’s Award",
    description: "Recognized for exemplary leadership and empowering women through holistic health practices.",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Divyang Mahakumbh Seva",
    subtitle: "Service Excellence",
    description: "Awarded for dedicated selfless service and medical support during the Uttarakhand Divyang Mahakumbh.",
    icon: <Award className="w-6 h-6" />,
  },
];

const socialWorks = [
  {
    id: 1,
    title: "Divyang Mahakumbh Camps",
    description: "Provided completely free medical services, consultations, and medicines at disability support camps.",
    icon: <HandHeart className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Women's Awareness Programs",
    description: "Conducting regular workshops on menstrual health, PCOD/PCOS management, and holistic well-being.",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Free NGO Medical Camps",
    description: "Organizing complimentary health check-up camps in remote areas with various partner NGOs.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Community Partnerships",
    description: "Collaborating with Nanhi Duniya, Noni Society, and Sankhya Yog Foundation to make Ayurveda accessible to everyone.",
    icon: <Leaf className="w-6 h-6" />,
  },
];

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
      

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-orange-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-wider uppercase mb-6">
            Our Legacy
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 leading-tight">
            Impact Beyond <br className="hidden md:block" />
            <span className="text-orange-600">Prescriptions</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Our journey is defined by the recognition we've received and the communities we've served. 
            Ayurveda is not just a treatment; it is a service to humanity.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Awards (Sticky on Desktop) */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-orange-600 rounded-xl text-white shadow-lg shadow-orange-200">
                  <Trophy className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-serif text-gray-900">Awards & Honors</h2>
              </div>
              
              <div className="space-y-6">
                {awards.map((item) => (
                  <div 
                    key={item.id}
                    className="group relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      {item.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-sm font-medium text-orange-600 mb-3">
                      {item.subtitle}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Social Work (Scrollable) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-green-700 rounded-xl text-white shadow-lg shadow-green-100">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-serif text-gray-900">Social Initiatives</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {socialWorks.map((item) => (
                <div 
                  key={item.id}
                  className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-green-100 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote / Summary Box */}
            <div className="mt-10 p-8 bg-orange-50 rounded-3xl border border-orange-100 text-center">
              <p className="text-xl font-serif text-gray-800 italic mb-4">
                "Seva (Service) is the highest form of healing."
              </p>
              <p className="text-sm text-gray-600">
                Dedicated to bringing the ancient wisdom of Ayurveda to every stratum of society.
              </p>
            </div>
          </div>

        </div>
      </div>

     
    </main>
  );
}
