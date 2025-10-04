// pages/gallery/page.tsx or gallery.tsx
'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeader from '../component/About-us/Header';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
  description?: string;
}

const galleryData: GalleryImage[] = [
  // Treatments in Action
  {
    id: 5,
    src: "https://ik.imagekit.io/oa7uh5z0ty/IMG-20250922-WA0026.jpg?updatedAt=1758740514384",
    alt: "Ayurvedic massage session",
    title: "Therapeutic Massage",
    category: "treatments",
    description: "Expert therapists performing traditional Ayurvedic massage"
  },
  {
    id: 6,
    src: "https://ik.imagekit.io/oa7uh5z0ty/IMG-20250922-WA0030.jpg?updatedAt=1758740513913",
    alt: "Herbal steam therapy",
    title: "Steam Therapy",
    category: "treatments",
    description: "Detoxifying herbal steam treatment in progress"
  },
  {
    id: 7,
    src: "https://ik.imagekit.io/oa7uh5z0ty/IMG-20250922-WA0029.jpg?updatedAt=1758740513837",
    alt: "Oil therapy treatment",
    title: "Oil Therapy Session",
    category: "treatments",
    description: "Specialized oil therapy for deep healing"
  },

  // Herbs & Products
  {
    id: 9,
    src: "https://ik.imagekit.io/oa7uh5z0ty/IMG-20250922-WA0033.jpg?updatedAt=1758740513064",
    alt: "Ayurvedic herbs collection",
    title: "Medicinal Herbs",
    category: "herbs-products",
    description: "Fresh organic herbs used in our treatments"
  },
  {
    id: 10,
    src: "https://ik.imagekit.io/oa7uh5z0ty/IMG-20250922-WA0039.jpg?updatedAt=1758740513063",
    alt: "Essential oils display",
    title: "Therapeutic Oils",
    category: "herbs-products",
    description: "Premium quality essential and carrier oils"
  },
  {
    id: 11,
    src: "https://ik.imagekit.io/oa7uh5z0ty/IMG-20250922-WA0031.jpg?updatedAt=1758740512492",
    alt: "Herbal preparations",
    title: "Herbal Preparations",
    category: "herbs-products",
    description: "Freshly prepared herbal medicines and supplements"
  },


  // Facility
  {
    id: 13,
    src: "https://ik.imagekit.io/oa7uh5z0ty/IMG-20250922-WA0036.jpg?updatedAt=1758740509924",
    alt: "Reception and waiting area",
    title: "Doctor",
    category: "facility",
    description: "Our Lead doctor"
  },
  {
    id: 14,
    src: "https://ik.imagekit.io/oa7uh5z0ty/IMG-20250922-WA0044.jpg?updatedAt=1758740507760",
    alt: "Meditation garden",
    title: "Doctor",
    category: "facility",
    description: "Our Lead doctor"
  },
  {
    id: 15,
    src: "https://ik.imagekit.io/oa7uh5z0ty/IMG-20250922-WA0051.jpg?updatedAt=1758740507772",
    alt: "Relaxation lounge",
    title: "Doctor",
    category: "facility",
    description: "Our Lead doctor"
  },
  {
    id: 16,
    src: "https://ik.imagekit.io/oa7uh5z0ty/IMG-20250922-WA0048.jpg?updatedAt=1758740506283",
    alt: "Yoga and meditation hall",
    title: "Doctor",
    category: "facility",
    description: "Our Lead doctor"
  },
    {
    id: 17,
    src: "https://ik.imagekit.io/oa7uh5z0ty/IMG-20250922-WA0028.jpg?updatedAt=1758740514954",
    alt: "Yoga and meditation hall",
    title: "Doctor",
    category: "facility",
    description: "Our Lead doctor"
  },
    {
    id: 18,
    src: "https://ik.imagekit.io/oa7uh5z0ty/IMG-20250922-WA0037.jpg?updatedAt=1758740510526",
    alt: "Yoga and meditation hall",
    title: "Doctor",
    category: "facility",
    description: "Our Lead doctor"
  },
    {
    id: 19,
    src: "https://ik.imagekit.io/oa7uh5z0ty/IMG-20250922-WA0046.jpg?updatedAt=1758740506270",
    alt: "Yoga and meditation hall",
    title: "Doctor",
    category: "facility",
    description: "Our Lead doctor"
  },
    {
    id: 20,
    src: "https://ik.imagekit.io/oa7uh5z0ty/IMG-20250922-WA0040.jpg?updatedAt=1758740508336",
    alt: "Yoga and meditation hall",
    title: "Doctor",
    category: "facility",
    description: "Our Lead doctor"
  },
    {
    id: 16,
    src: "https://ik.imagekit.io/oa7uh5z0ty/IMG-20250922-WA0044.jpg?updatedAt=1758740507760",
    alt: "Yoga and meditation hall",
    title: "Doctor",
    category: "facility",
    description: "Our Lead doctor"
  },
    {
    id: 16,
    src: "https://ik.imagekit.io/oa7uh5z0ty/IMG-20250922-WA0049.jpg?updatedAt=1758740507812",
    alt: "Yoga and meditation hall",
    title: "Doctor",
    category: "facility",
    description: "Our Lead doctor"
  },
    {
    id: 16,
    src: "https://ik.imagekit.io/oa7uh5z0ty/IMG-20250922-WA0048.jpg?updatedAt=1758740506283",
    alt: "Yoga and meditation hall",
    title: "Doctor",
    category: "facility",
    description: "Our Lead doctor"
  },
 
    {
    id: 16,
    src: "https://ik.imagekit.io/oa7uh5z0ty/IMG-20250922-WA0041.jpg?updatedAt=1758740509735",
    alt: "Yoga and meditation hall",
    title: "Doctor",
    category: "facility",
    description: "Our Lead doctor"
  }
];

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show all images since we removed filtering
  const filteredImages = galleryData;

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div>
      {/* Page Header */}
      <PageHeader 
        title="Gallery"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Gallery Content */}
      <section className="py-20 bg-[#FDF8F3]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Introduction */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="font-philosopher text-3xl md:text-4xl font-normal text-[#2d3020] mb-6">
              Experience Our Wellness Center
            </h2>
            <p className="text-[#6b6b6b] text-lg leading-relaxed">
              Take a visual journey through our authentic Ayurvedic wellness center. From our serene treatment 
              rooms to our expert therapists in action, discover the peaceful environment where healing happens.
            </p>
          </div>

          {/* Image Grid - No Category Filter */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-white/50 cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-philosopher text-lg font-semibold mb-1">
                          {image.title}
                        </h3>
                        {image.description && (
                          <p className="text-white/80 text-sm">
                            {image.description}
                          </p>
                        )}
                      </div>
                      
                      {/* Zoom Icon */}
                      <div className="absolute top-4 right-4">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <ZoomIn className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-white/50 max-w-4xl mx-auto">
              <h3 className="font-philosopher text-3xl text-[#2d3020] mb-6">
                Ready to Experience This Yourself?
              </h3>
              <p className="text-[#6b6b6b] text-lg mb-8 leading-relaxed">
                Visit our wellness center and experience the healing power of authentic Ayurveda 
                in our beautiful, tranquil environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="https://wa.me/917454058199?text=Hey%2C%20I%20want%20to%20visit%20you.%20When%20are%20you%20free%20to%20attend%20me%3F"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#8b8680] hover:bg-[#7a7570] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg"
                >
                  Book a Visit
                </motion.a>
                <motion.a 
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent hover:bg-white/20 text-[#8b8680] border border-[#8b8680] px-8 py-4 rounded-full font-medium transition-all duration-300"
                >
                  Get Directions
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl max-h-[90vh] w-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                {/* Image Info */}
                <div className="p-6">
                  <h3 className="font-philosopher text-2xl font-semibold text-[#2d3020] mb-2">
                    {selectedImage.title}
                  </h3>
                  {selectedImage.description && (
                    <p className="text-[#6b6b6b] leading-relaxed">
                      {selectedImage.description}
                    </p>
                  )}
                  <div className="text-sm text-[#8b8680] mt-4">
                    Image {currentIndex + 1} of {filteredImages.length}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
