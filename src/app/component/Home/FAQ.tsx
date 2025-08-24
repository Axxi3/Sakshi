// components/FAQSection.tsx
'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    id: 1,
    question: "Why do I need to use a Design System?",
    answer: "A Design System is a super useful tool for designers. It helps keep designs consistent and makes the design process faster. You can use pre-designed stuff over and over, and it's helpful for both new and experienced designers. In short, a Design System is like a designer's toolbox for making great-looking and user-friendly designs."
  },
  {
    id: 2,
    question: "Is there a preview or a free trial available?",
    answer: "Yes, we offer a 7-day free trial for all new users. You can explore all our Ayurvedic treatments and wellness programs during this period. No credit card required to start your trial."
  },
  {
    id: 3,
    question: "How many components are available?",
    answer: "We offer over 15 different Ayurvedic treatments and wellness programs, including Panchakarma, Abhyanga, Shirodhara, Nasya, Udvartana, Marma therapy, and various specialized detox programs."
  },
  {
    id: 4,
    question: "Are there a sector-specific dashboards and widgets available?",
    answer: "Yes, we provide personalized wellness dashboards for each client where you can track your treatment progress, upcoming appointments, dietary recommendations, and wellness goals all in one place."
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

        {/* Contact Support */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50">
            <h3 className="font-philosopher text-xl md:text-2xl text-[#2d3020] mb-4">
              Still have questions?
            </h3>
            <p className="text-[#6b6b6b] text-sm md:text-base mb-6">
              Our wellness experts are here to help you on your Ayurvedic journey.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#8b8680] hover:bg-[#7a7570] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Support
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
