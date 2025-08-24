'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
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

// Existing + New Procedures
const treatmentsData: Treatment[] = [

  {
    id: 'alabu-chikitsa',
    title: 'Alabu Chikitsa',
    shortDescription: 'Traditional therapy using bottle gourd for blood detox and pain relief.',
    fullDescription:
      'Alabu Chikitsa is a traditional Ayurvedic bloodletting procedure that uses a specially prepared bottle gourd shell to create negative pressure, drawing out stagnated blood and toxins. Effective for localised pain, swelling, and certain skin disorders.',
    duration: '30-45 minutes',
    suitableFor: ['Localised swelling', 'Skin disorders', 'Joint pain'],
    benefits: ['Improved circulation', 'Pain relief', 'Detoxification', 'Reduced inflammation'],
    price: 'From ₹1,500',
    image:
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=468,h=468,fit=crop/AGBGGww0nbhV780Q/photo-2024-05-12-12-30-32-2-mp8nve4BMPsDzDeZ.jpg',
    featured: false,
  },
  {
    id: 'agnikarma-chikitsa',
    title: 'AgniKarma Chikitsa',
    shortDescription: 'Thermal cauterization for pain management and musculoskeletal issues.',
    fullDescription:
      'AgniKarma Chikitsa is an Ayurvedic para-surgical procedure involving controlled therapeutic heat application using heated metal instruments. It’s highly effective for localized pain, joint stiffness, and certain skin conditions.',
    duration: '30 minutes',
    suitableFor: ['Joint disorders', 'Chronic pain', 'Tendinitis'],
    benefits: ['Instant pain relief', 'Improved mobility', 'Stimulates healing'],
    price: 'From ₹2,000',
    image:
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=468,h=468,fit=crop/AGBGGww0nbhV780Q/photo-2024-05-12-12-30-33-YBgprLjJEnhxMGke.jpg',
    featured: false,
  },
  {
    id: 'vidhikarma-chikitsa',
    title: 'Vidhikarma Chikitsa',
    shortDescription: 'Special Ayurvedic surgical and para-surgical techniques.',
    fullDescription:
      'Vidhikarma refers to minor Ayurvedic surgical interventions that are non-invasive and aim to heal conditions without major surgery. These are performed under strict hygienic conditions with herbal support.',
    duration: 'Varies by case',
    suitableFor: ['Minor surgical needs', 'Removal of growths', 'Skin ailments'],
    benefits: ['Minimally invasive', 'Quick recovery', 'Natural healing support'],
    price: 'From ₹2,500',
    image:
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=468,h=468,fit=crop/AGBGGww0nbhV780Q/photo-2024-05-12-12-29-28-Yg2lWO4E9rtp602n.jpg',
    featured: false,
  },
  {
    id: 'siravedhan-chikitsa',
    title: 'Siravedhan Chikista',
    shortDescription: 'Bloodletting technique for reducing high pitta and toxin load.',
    fullDescription:
      'Siravedhan is a bloodletting therapy in Ayurveda used to relieve conditions caused by localised toxin accumulation and aggravated pitta. It improves circulation and is especially beneficial for certain skin and vascular disorders.',
    duration: '30 minutes',
    suitableFor: ['Skin diseases', 'Varicose veins', 'Gout'],
    benefits: ['Detoxification', 'Improved blood flow', 'Reduced inflammation'],
    price: 'From ₹1,500',
    image:
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=468,h=468,fit=crop/AGBGGww0nbhV780Q/photo-2024-05-12-12-29-27-2-YKbJ6L879EuReB5w.jpg',
    featured: false,
  },
  {
    id: 'uttar-basti-chikitsa',
    title: 'Uttar Basti Chikista',
    shortDescription: 'Specialized medicated enema for reproductive and urinary health.',
    fullDescription:
      'Uttar Basti is an Ayurvedic Panchakarma therapy involving intravesical or intrauterine administration of medicated oils or decoctions. Highly effective for fertility enhancement, menstrual issues, and urinary tract disorders.',
    duration: '30-45 minutes',
    suitableFor: ['Infertility', 'Menstrual disorders', 'Urinary tract issues'],
    benefits: ['Reproductive health', 'Hormonal balance', 'Strengthens bladder/uterus'],
    price: 'From ₹3,000',
    image:
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=468,h=468,fit=crop/AGBGGww0nbhV780Q/photo-2024-05-12-12-29-27-dOqbyrZwqqUNOE50.jpg',
    featured: false,
  },
  {
    id: 'agnividdh-chikitsa',
    title: 'AgniViddh Chikitsa',
    shortDescription: 'Therapeutic puncturing and cauterization for chronic ailments.',
    fullDescription:
      'AgniViddh is a unique Ayurvedic technique that combines puncturing with therapeutic heat for treating chronic inflammatory lesions, joint pain, and muscular disorders.',
    duration: '30 minutes',
    suitableFor: ['Chronic abscess', 'Joint pain', 'Localized infection'],
    benefits: ['Quick healing', 'Pain relief', 'Removes stagnated toxins'],
    price: 'From ₹2,200',
    image:
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=468,h=468,fit=crop/AGBGGww0nbhV780Q/photo-2024-05-12-12-29-28-2-AE0po573oyFwERX7.jpg',
    featured: false,
  },
  {
    id: 'leech-chikitsa',
    title: 'Leech Chikitsa',
    shortDescription: 'Therapy using medicinal leeches for detoxification and healing.',
    fullDescription:
      'Leech Therapy is a natural bloodletting method that uses live medicinal leeches to remove impure blood from affected areas. Beneficial for skin diseases, arthritis, and chronic wounds.',
    duration: '20-40 minutes',
    suitableFor: ['Varicose veins', 'Psoriasis', 'Joint pain', 'Non-healing wounds'],
    benefits: ['Improved circulation', 'Detoxification', 'Pain relief'],
    price: 'From ₹1,800',
    image:
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=468,h=468,fit=crop/AGBGGww0nbhV780Q/photo-2024-05-12-12-30-32-AzGreEMa5afZZEDp.jpg',
    featured: false,
  },
  {
    id: 'lepa-chikitsa',
    title: 'Lepa Chikitsa',
    shortDescription: 'Topical herbal paste applications for localized healing.',
    fullDescription:
      'Lepa Chikitsa involves applying freshly prepared herbal pastes to affected areas to reduce pain, inflammation, and skin irritations. Each paste is customised for the patient’s condition.',
    duration: '20-30 minutes',
    suitableFor: ['Joint swelling', 'Skin rashes', 'Muscle pain'],
    benefits: ['Reduced swelling', 'Relieves pain', 'Skin healing'],
    price: 'From ₹900',
    image:
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=468,h=468,fit=crop/AGBGGww0nbhV780Q/photo-2024-05-12-12-29-29-YX4PyWjOP9fbKBeP.jpg',
    featured: false,
  },
  {
    id: 'fire-cupping',
    title: 'Fire Cupping',
    shortDescription: 'Thermal suction cups to stimulate circulation and detoxify.',
    fullDescription:
      'Fire Cupping is a therapy where heated cups are placed on the skin to create suction. It helps mobilize blood flow, relieve muscle tension, and detoxify.',
    duration: '20-30 minutes',
    suitableFor: ['Muscle stiffness', 'Detox', 'Back pain'],
    benefits: ['Pain relief', 'Better circulation', 'Relaxation'],
    price: 'From ₹1,200',
    image:
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=334,fit=crop/AGBGGww0nbhV780Q/img_9263-AE0a5GBaMOFqpqko.jpg',
    featured: false,
  },
  {
    id: 'raktamokshan',
    title: 'Raktamokshan',
    shortDescription: 'Ayurvedic blood cleansing therapy for various diseases.',
    fullDescription:
      'Raktamokshan is a detoxifying bloodletting procedure aimed at removing impurities from the bloodstream, reducing pitta disorders, and improving overall health.',
    duration: '30-45 minutes',
    suitableFor: ['Skin diseases', 'Gout', 'High pitta conditions'],
    benefits: ['Blood purification', 'Reduced inflammation', 'Improved immunity'],
    price: 'From ₹1,500',
    image:
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=335,fit=crop/AGBGGww0nbhV780Q/img_9471-m6LjqGNNeyf41Qj1.jpg',
    featured: false,
  },
  
];




// Regular Treatment Card
const TreatmentCard = ({ treatment, index }: { treatment: Treatment; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/50 hover:bg-white/80"
  >
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/3">
        <div className="relative h-32 md:h-full min-h-[150px] overflow-hidden rounded-xl">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="md:w-2/3 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="font-philosopher text-xl font-semibold text-[#2d3020]">{treatment.title}</h3>
          
        </div>
        <p className="text-[#6b6b6b] text-sm leading-relaxed">{treatment.shortDescription}</p>
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

const TreatmentsPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Our Treatments"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Treatments' },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2070&q=80"
      />
      <section
        
        className="py-20 bg-[#FDF8F3]"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Intro */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="font-philosopher text-3xl md:text-4xl text-[#2d3020] mb-6">
              Authentic Ayurvedic Treatments
            </h2>
            <p className="text-[#6b6b6b] text-lg">
              Discover our complete range of Panchakarma, Kerala therapies, and specialized Ayurvedic procedures – all tailored for your unique body constitution.
            </p>
          </div>
         
          {/* All */}
          <h3 className="text-[#8b8680] text-sm tracking-wider uppercase mb-8 text-center">
            — ALL TREATMENTS
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {treatmentsData.map((t, i) => (
              <TreatmentCard key={t.id} treatment={t} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentsPage;
