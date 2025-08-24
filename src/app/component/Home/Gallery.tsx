// components/GallerySection.tsx
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title?: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/1.webp",
    alt: "Relaxing spa treatment",
    title: "Abhyanga Therapy"
  },
  {
    id: 2,
    src: "/2.webp",
    alt: "Ayurvedic massage session",
    title: "Therapeutic Massage"
  },
  {
    id: 3,
    src: "/3.webp",
    alt: "Ayurvedic herbs and oils",
    title: "Natural Herbs"
  },
  {
    id: 4,
    src: "/4.webp",
    alt: "Meditation and wellness",
    title: "Meditation Space"
  },
  {
    id: 5,
    src: "/5.webp",
    alt: "Wellness treatment room",
    title: "Treatment Room"
  },
  {
    id: 6,
    src: "/6.webp",
    alt: "Panchakarma therapy",
    title: "Panchakarma"
  }
];

// Duplicate images for infinite scroll
const infiniteImages = [...galleryImages, ...galleryImages, ...galleryImages];

const GallerySection: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section className="py-20 bg-[#FDF8F3] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-orange-100 rounded-full opacity-20 -z-10"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-green-100 rounded-full opacity-20 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-white/70 text-xs sm:text-sm font-normal tracking-wider uppercase mb-4">
           
            <span>— Gallery —</span>
          </div>
          
          <h2 className="font-philosopher text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#2d3020] leading-tight mb-6">
            Cherished moments with our
            <br />
            <span className="italic">wellness community</span>
          </h2>
          
          <p className="text-[#6b6b6b] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Take a glimpse into our serene wellness center and witness the transformative journey of our clients through authentic Ayurvedic treatments.
          </p>
        </div>

        {/* Single Row Gallery */}
        <div 
          className="relative overflow-hidden h-80"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            animate={{ x: [0, -50 * galleryImages.length] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
            className="flex space-x-6"
          >
            {infiniteImages.map((image, index) => (
              <GalleryCard key={`gallery-${image.id}-${index}`} image={image} />
            ))}
          </motion.div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#C84F1A] hover:bg-[#7a7570] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View More Gallery
          </motion.button>
        </div>
      </div>
    </section>
  );
};

// Gallery Card Component
interface GalleryCardProps {
  image: GalleryImage;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image }) => {
  return (
    <motion.div 
      className="flex-shrink-0 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="relative w-72 md:w-80 h-60">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-philosopher text-base sm:text-lg font-medium">
              {image.title}
            </h3>
          </div>
        </div>
        
        {/* Decorative Corner */}
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
};

export default GallerySection;
