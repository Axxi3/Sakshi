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
  // Treatment Rooms
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
    alt: "Panchakarma treatment room",
    title: "Panchakarma Suite",
    category: "treatment-rooms",
    description: "Serene treatment room designed for complete detoxification therapy"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop",
    alt: "Abhyanga massage room",
    title: "Abhyanga Therapy Room",
    category: "treatment-rooms",
    description: "Peaceful space for therapeutic oil massage treatments"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop",
    alt: "Shirodhara treatment area",
    title: "Shirodhara Chamber",
    category: "treatment-rooms",
    description: "Specialized room for oil pouring therapy"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    alt: "Private consultation room",
    title: "Consultation Room",
    category: "treatment-rooms",
    description: "Private space for doctor consultations and health assessments"
  },

  // Treatments in Action
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop",
    alt: "Ayurvedic massage session",
    title: "Therapeutic Massage",
    category: "treatments",
    description: "Expert therapists performing traditional Ayurvedic massage"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    alt: "Herbal steam therapy",
    title: "Steam Therapy",
    category: "treatments",
    description: "Detoxifying herbal steam treatment in progress"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Oil therapy treatment",
    title: "Oil Therapy Session",
    category: "treatments",
    description: "Specialized oil therapy for deep healing"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    alt: "Meditation therapy",
    title: "Meditation & Wellness",
    category: "treatments",
    description: "Guided meditation and wellness practices"
  },

  // Herbs & Products
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&focus=center",
    alt: "Ayurvedic herbs collection",
    title: "Medicinal Herbs",
    category: "herbs-products",
    description: "Fresh organic herbs used in our treatments"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=600&fit=crop",
    alt: "Essential oils display",
    title: "Therapeutic Oils",
    category: "herbs-products",
    description: "Premium quality essential and carrier oils"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1605300413442-5c264f0ea0f3?w=800&h=600&fit=crop",
    alt: "Herbal preparations",
    title: "Herbal Preparations",
    category: "herbs-products",
    description: "Freshly prepared herbal medicines and supplements"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&h=600&fit=crop",
    alt: "Ayurvedic skincare products",
    title: "Natural Skincare",
    category: "herbs-products",
    description: "Organic skincare products made with Ayurvedic ingredients"
  },

  // Facility
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop",
    alt: "Reception and waiting area",
    title: "Reception Area",
    category: "facility",
    description: "Welcoming reception and comfortable waiting area"
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop",
    alt: "Meditation garden",
    title: "Meditation Garden",
    category: "facility",
    description: "Peaceful outdoor space for meditation and relaxation"
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop&focus=right",
    alt: "Relaxation lounge",
    title: "Relaxation Lounge",
    category: "facility",
    description: "Comfortable space to relax before and after treatments"
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    alt: "Yoga and meditation hall",
    title: "Yoga Hall",
    category: "facility",
    description: "Spacious hall for yoga classes and group meditation"
  }
];

const categories = [
  { id: 'all', label: 'All Images', count: galleryData.length },
  { id: 'treatment-rooms', label: 'Treatment Rooms', count: galleryData.filter(img => img.category === 'treatment-rooms').length },
  { id: 'treatments', label: 'Treatments', count: galleryData.filter(img => img.category === 'treatments').length },
  { id: 'herbs-products', label: 'Herbs & Products', count: galleryData.filter(img => img.category === 'herbs-products').length },
  { id: 'facility', label: 'Our Facility', count: galleryData.filter(img => img.category === 'facility').length }
];

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = activeCategory === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCategory);

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
      <section 
       style={{
        background: 'linear-gradient(180deg, rgb(242, 180, 80), rgb(242, 180, 80))',
      }}
      className="py-20 bg-[#f8f6f0]">
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

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#8b8680] text-white shadow-lg'
                    : 'bg-white/60 text-[#6b6b6b] hover:bg-white/80 border border-white/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.label}</span>
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>

          {/* Image Grid */}
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
                  href="/consultation"
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
