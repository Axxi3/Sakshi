// components/FAQSection.tsx
'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import GlobalPresence from './maps';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}


const faqData: FAQ[] = [
  {
    id: 1,
    question: "What is Ayurveda and how does it work?",
    answer: "Ayurveda is an ancient Indian system of medicine that focuses on balancing the body, mind, and spirit. Treatments are customized based on your unique body constitution (dosha) and aim to promote holistic wellness and natural healing."
  },
  {
    id: 2,
    question: "What types of treatments do you offer?",
    answer: "We offer a wide range of Ayurvedic therapies including Panchakarma, Abhyanga, Shirodhara, Nasya, Udvartana, Marma therapy, leech therapy, and other specialized treatments for detoxification, pain relief, and rejuvenation."
  },
  {
    id: 3,
    question: "Do I need a consultation before starting treatment?",
    answer: "Yes, an initial consultation with our Ayurvedic practitioner is recommended. This helps assess your dosha, current health condition, and determines the most suitable treatments for you."
  },
  {
    id: 4,
    question: "How long are the treatments and how often should I visit?",
    answer: "Treatment duration varies from 20 minutes to 1 hour depending on the therapy. Frequency depends on your health goals and the practitioner’s recommendations."
  },
  {
    id: 5,
    question: "Are the treatments safe?",
    answer: "Yes, all treatments are conducted by trained Ayurvedic practitioners using natural herbs, oils, and traditional methods. We ensure hygiene and safety protocols are strictly followed."
  },
  {
    id: 6,
    question: "Can Ayurveda help with chronic health issues?",
    answer: "Ayurvedic therapies can support management of chronic conditions such as joint pain, skin disorders, digestive issues, stress, and hormonal imbalances. Personalized treatment plans provide long-term benefits."
  },
  {
    id: 7,
    question: "Do you offer diet and lifestyle guidance?",
    answer: "Yes, along with treatments, we provide personalized dietary recommendations, daily routines, and lifestyle guidance to help maintain balance and optimize health."
  },
  {
    id: 8,
    question: "How do I book a session?",
    answer: "You can book a session by contacting us via phone, WhatsApp, or through our online booking form. We also offer WhatsApp links with pre-filled messages for quick inquiries."
  }
];
const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1); // First FAQ open by default

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section
 
    className="py-20 bg-[#FDF8F3] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#d4c4a8] rounded-full opacity-20 -z-10"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#a8b5a8] rounded-full opacity-20 -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#8b8680] text-sm font-normal tracking-wider uppercase mb-4">
            — FAQS —
          </div>
          
          <h2 className="font-philosopher text-3xl md:text-5xl lg:text-6xl font-normal text-[#2d3020] leading-tight mb-8">
            Frequently Asked Questions
          </h2>
          
          <p className="text-[#6b6b6b] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Stay informed about new treatments, events, and health tips from our physiotherapy clinic to support your wellbeing.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq) => (
            <motion.div
              key={faq.id}
              className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 overflow-hidden hover:bg-white/80 transition-all duration-300"
              initial={false}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/20 transition-colors duration-200"
              >
                <h3 className="font-philosopher text-lg md:text-xl lg:text-2xl font-normal text-[#2d3020] pr-4">
                  {faq.question}
                </h3>
                
                <motion.div
                  animate={{ rotate: openFAQ === faq.id ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0 w-8 h-8 bg-[#8b8680] rounded-full flex items-center justify-center text-white"
                >
                  {openFAQ === faq.id ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </motion.div>
              </button>

              {/* Answer Content */}
              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <div className="border-t border-[#8b8680]/20 pt-6">
                        <p className="text-[#6b6b6b] leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      
      </div>

       <GlobalPresence/>
    </section>
  );
};

export default FAQSection;
