// pages/treatments/page.tsx or treatments.tsx
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, Users, Star } from 'lucide-react';
import PageHeader from '../component/About-us/Header';

interface Treatment {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  suitableFor: string[];
  benefits: string[];
  price: string;
  image: string;
  featured: boolean;
}

const treatmentsData: Treatment[] = [
  {
    id: 'panchakarma',
    title: 'Panchakarma',
    shortDescription: 'Complete detoxification and rejuvenation therapy to restore balance and vitality to mind, body, and spirit.',
    fullDescription: 'Panchakarma is the ultimate Ayurvedic detoxification and rejuvenation program. This comprehensive five-action therapy removes deep-seated toxins, balances the doshas, and revitalizes your entire system through personalized treatments.',
    duration: '7-21 days',
    suitableFor: ['Chronic conditions', 'Stress relief', 'Preventive care'],
    benefits: ['Deep detoxification', 'Improved immunity', 'Mental clarity', 'Enhanced vitality'],
    price: 'From ₹15,000',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=300&fit=crop',
    featured: true
  },
  {
    id: 'abhyanga',
    title: 'Abhyanga Massage',
    shortDescription: 'Full-body therapeutic oil massage to improve circulation, promote relaxation, and nourish the skin.',
    fullDescription: 'Abhyanga is a full-body warm oil massage that stimulates circulation, tones muscles, and calms the nervous system. Using specially selected herbal oils based on your constitution.',
    duration: '60-90 minutes',
    suitableFor: ['Stress relief', 'Muscle tension', 'Skin health'],
    benefits: ['Improved circulation', 'Muscle relaxation', 'Better sleep', 'Glowing skin'],
    price: 'From ₹2,500',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&h=300&fit=crop',
    featured: true
  },
  {
    id: 'shirodhara',
    title: 'Shirodhara Therapy',
    shortDescription: 'Continuous oil pouring therapy for mental relaxation, stress relief, and nervous system balance.',
    fullDescription: 'Shirodhara involves a continuous stream of warm medicated oil poured over the forehead. This deeply relaxing treatment calms the mind, reduces stress, and promotes mental clarity.',
    duration: '45-60 minutes',
    suitableFor: ['Stress', 'Insomnia', 'Mental fatigue', 'Anxiety'],
    benefits: ['Deep relaxation', 'Better sleep', 'Mental clarity', 'Stress reduction'],
    price: 'From ₹3,000',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop',
    featured: true
  },
  {
    id: 'nasya',
    title: 'Nasya Treatment',
    shortDescription: 'Nasal administration of medicated oils for respiratory health and neurological wellness.',
    fullDescription: 'Nasya therapy involves the administration of medicated oils through the nasal passages. This treatment is excellent for respiratory conditions, headaches, and neurological disorders.',
    duration: '30-45 minutes',
    suitableFor: ['Respiratory issues', 'Headaches', 'Sinus problems'],
    benefits: ['Clear breathing', 'Reduced headaches', 'Better concentration', 'Sinus relief'],
    price: 'From ₹1,800',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=300&fit=crop',
    featured: false
  },
  {
    id: 'udvartana',
    title: 'Udvartana',
    shortDescription: 'Herbal powder massage for weight management, skin rejuvenation, and improved circulation.',
    fullDescription: 'Udvartana is a therapeutic massage using herbal powders. This treatment helps in weight management, improves skin texture, and enhances circulation while detoxifying the body.',
    duration: '45-60 minutes',
    suitableFor: ['Weight management', 'Skin issues', 'Poor circulation'],
    benefits: ['Weight reduction', 'Improved skin texture', 'Better circulation', 'Cellulite reduction'],
    price: 'From ₹2,200',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
    featured: false
  },
  {
    id: 'marma-therapy',
    title: 'Marma Therapy',
    shortDescription: 'Vital point stimulation to enhance energy flow, healing, and overall wellness.',
    fullDescription: 'Marma therapy focuses on vital energy points in the body. This ancient technique helps balance energy flow, promotes healing, and enhances overall physical and mental well-being.',
    duration: '60 minutes',
    suitableFor: ['Energy imbalance', 'Chronic pain', 'Emotional issues'],
    benefits: ['Balanced energy', 'Pain relief', 'Emotional stability', 'Enhanced vitality'],
    price: 'From ₹2,800',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop',
    featured: false
  },
  {
    id: 'karna-purana',
    title: 'Karna Purana',
    shortDescription: 'Ear therapy with medicated oils for hearing issues and neurological conditions.',
    fullDescription: 'Karna Purana involves filling the ears with warm medicated oil. This treatment helps with hearing problems, ear infections, tinnitus, and certain neurological conditions.',
    duration: '30 minutes',
    suitableFor: ['Hearing issues', 'Ear problems', 'Tinnitus'],
    benefits: ['Improved hearing', 'Ear health', 'Reduced tinnitus', 'Better balance'],
    price: 'From ₹1,500',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&h=300&fit=crop',
    featured: false
  },
  {
    id: 'akshi-tarpana',
    title: 'Akshi Tarpana',
    shortDescription: 'Eye therapy with medicated ghee for vision improvement and eye health.',
    fullDescription: 'Akshi Tarpana is a specialized eye treatment where medicated ghee is pooled around the eyes. This therapy helps improve vision, reduces eye strain, and treats various eye disorders.',
    duration: '45 minutes',
    suitableFor: ['Eye strain', 'Vision problems', 'Dry eyes'],
    benefits: ['Better vision', 'Reduced eye strain', 'Healthy eyes', 'Clear sight'],
    price: 'From ₹2,000',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
    featured: false
  },
  {
    id: 'spine-basti',
    title: 'Spine Basti',
    shortDescription: 'Specialized treatment for spine and back issues using warm medicated oils.',
    fullDescription: 'Spine Basti is a therapeutic treatment where warm medicated oil is pooled on the spine. This treatment is excellent for back pain, spinal disorders, and nervous system issues.',
    duration: '60 minutes',
    suitableFor: ['Back pain', 'Spinal issues', 'Nerve problems'],
    benefits: ['Pain relief', 'Improved mobility', 'Stronger spine', 'Better posture'],
    price: 'From ₹2,500',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=300&fit=crop',
    featured: false
  }
];

const TreatmentsPage: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <PageHeader 
        title="Our Treatments"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Treatments" }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Treatments Content */}
      <section className="py-20 bg-[#f8f6f0]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Introduction */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="font-philosopher text-3xl md:text-4xl font-normal text-[#2d3020] mb-6">
              Authentic Ayurvedic Treatments
            </h2>
            <p className="text-[#6b6b6b] text-lg leading-relaxed">
              Discover our comprehensive range of traditional Ayurvedic treatments designed to restore balance, 
              promote healing, and enhance your overall well-being. Each treatment is personalized based on your 
              unique constitution and health needs.
            </p>
          </div>

          {/* Featured Treatments */}
          <div className="mb-16">
            <h3 className="text-[#8b8680] text-sm font-normal tracking-wider uppercase mb-8 text-center">
              — FEATURED TREATMENTS
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentsData.filter(treatment => treatment.featured).map((treatment, index) => (
                <FeaturedTreatmentCard key={treatment.id} treatment={treatment} index={index} />
              ))}
            </div>
          </div>

          {/* All Treatments */}
          <div>
            <h3 className="text-[#8b8680] text-sm font-normal tracking-wider uppercase mb-8 text-center">
              — ALL TREATMENTS
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {treatmentsData.map((treatment, index) => (
                <TreatmentCard key={treatment.id} treatment={treatment} index={index} />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-white/50 max-w-4xl mx-auto">
              <h3 className="font-philosopher text-3xl text-[#2d3020] mb-6">
                Ready to Begin Your Wellness Journey?
              </h3>
              <p className="text-[#6b6b6b] text-lg mb-8 leading-relaxed">
                Our experienced Ayurvedic practitioners will help you choose the right treatment 
                based on your individual needs and health goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/consultation"
                  className="bg-[#8b8680] hover:bg-[#7a7570] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Book Consultation
                </Link>
                <Link 
                  href="/contact"
                  className="bg-transparent hover:bg-white/20 text-[#8b8680] border border-[#8b8680] px-8 py-4 rounded-full font-medium transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Featured Treatment Card Component
interface TreatmentCardProps {
  treatment: Treatment;
  index: number;
}

const FeaturedTreatmentCard: React.FC<TreatmentCardProps> = ({ treatment, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-white/50"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={treatment.image}
          alt={treatment.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
          Featured
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="font-philosopher text-2xl font-semibold text-[#2d3020]">
          {treatment.title}
        </h3>
        
        <p className="text-[#6b6b6b] text-sm leading-relaxed">
          {treatment.shortDescription}
        </p>

        {/* Details */}
        <div className="flex items-center space-x-4 text-xs text-[#8b8680]">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{treatment.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="font-semibold">{treatment.price}</span>
          </div>
        </div>

        {/* CTA */}
        <Link 
          href={`/treatments/${treatment.id}`}
          className="group/link inline-flex items-center space-x-2 text-[#8b8680] hover:text-[#2d3020] font-medium text-sm transition-all duration-300 pt-2"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};

// Regular Treatment Card Component
const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/50 hover:bg-white/80"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="md:w-1/3">
          <div className="relative h-32 md:h-full min-h-[150px] overflow-hidden rounded-xl">
            <img 
              src={treatment.image}
              alt={treatment.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Content */}
        <div className="md:w-2/3 space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="font-philosopher text-xl font-semibold text-[#2d3020]">
              {treatment.title}
            </h3>
            <span className="text-[#8b8680] font-semibold text-sm whitespace-nowrap ml-4">
              {treatment.price}
            </span>
          </div>
          
          <p className="text-[#6b6b6b] text-sm leading-relaxed">
            {treatment.shortDescription}
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap gap-2">
            {treatment.benefits.slice(0, 3).map((benefit, idx) => (
              <span 
                key={idx}
                className="bg-[#8b8680]/10 text-[#8b8680] text-xs px-3 py-1 rounded-full"
              >
                {benefit}
              </span>
            ))}
          </div>

          {/* Details and CTA */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-1 text-xs text-[#8b8680]">
              <Clock className="w-4 h-4" />
              <span>{treatment.duration}</span>
            </div>
            
            <Link 
              href={`/treatments/${treatment.id}`}
              className="group/link inline-flex items-center space-x-2 text-[#8b8680] hover:text-[#2d3020] font-medium text-sm transition-all duration-300"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TreatmentsPage;
