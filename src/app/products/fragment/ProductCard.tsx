// components/ProductCard.tsx
import React, { useState } from 'react';
import { Product } from '../interface';
import { StarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // WhatsApp business number (replace with your actual WhatsApp business number)
  const WHATSAPP_NUMBER = "+917454058199"; // Replace with your WhatsApp number (without + or special characters)

  const handleEnquire = () => {
    // Create the pre-filled message
    const message = `Hi! I want more info on ${product.name}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab/window
    window.open(whatsappUrl, '_blank');
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group cursor-pointer ">
      
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-xl  mb-3">
        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out
                     ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium 
                         px-2 py-1 rounded-md">
            {discountPercentage}% off
          </div>
        )}

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-xl">
            <span className="text-white font-medium">Currently unavailable</span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={toggleWishlist}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full 
                   shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300
                   hover:scale-110 hover:bg-white"
        >
        </button>

        {/* Enquire Now Button */}
        <button
          onClick={handleEnquire}
          className="absolute bottom-3 left-1/2 transform -translate-x-1/2 
                   flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white text-sm 
                   font-medium rounded-lg opacity-0 group-hover:opacity-100 
                   transition-all duration-300 hover:bg-green-700 shadow-lg"
        >
          <ChatBubbleLeftRightIcon className="h-4 w-4" />
          Enquire Now
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Brand */}
        <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
          {product.brand}
        </div>

        {/* Name */}
        <h3 className="font-medium text-gray-900 leading-tight line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
      

        {/* Mobile Enquire Button */}
        <button
          onClick={handleEnquire}
          className="sm:hidden w-full mt-3 flex items-center justify-center gap-2 px-4 py-2.5 
                   bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 
                   transition-colors"
        >
          <ChatBubbleLeftRightIcon className="h-4 w-4" />
          Enquire Now
        </button>
      </div>
    </div>
  );
}
