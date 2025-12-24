// components/ProductCard.tsx
import React, { useState } from 'react';
import { Product } from '../interface';
import { StarIcon, ChatBubbleLeftRightIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  // WhatsApp business number from your clinic
  const WHATSAPP_NUMBER = "+917454058199";

  const handleEnquire = () => {
    const message = `Hi! I'm interested in ${product.name} - ${product.description}. Price: ₹${product.price}. Please share more details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  const toggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group cursor-pointer bg-white rounded-2xl p-2 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-xl mb-4">
        <img
          src={product.image || '/api/placeholder/400/400?text=No+Image'}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-center justify-center rounded-xl">
            <span className="text-white font-semibold text-lg">Out of Stock</span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={toggleWishlist}
          className="absolute top-3 right-3 p-2.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-orange-50 border hover:border-orange-200"
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {isWishlisted ? (
            <HeartSolidIcon className="h-5 w-5 text-red-500" />
          ) : (
            <HeartIcon className="h-5 w-5 text-gray-600" />
          )}
        </button>

        {/* Enquire Now Button - Desktop */}
        <button
          onClick={(e) => { e.stopPropagation(); handleEnquire(); }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white text-sm font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:from-green-700 hover:to-green-800 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
        >
          
          Enquire Now
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-3 px-3">
        {/* Brand & Category */}
       

        {/* Name */}
        <h3 className="font-semibold text-lg text-gray-900 leading-tight line-clamp-2 group-hover:text-orange-800 transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        {product.description && (
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Price */}
        <div className="flex items-end gap-2 pt-1">
          <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
          
        </div>

        {/* Mobile Enquire Button */}
        <button
          onClick={handleEnquire}
          className="sm:hidden w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          
          Enquire Now
        </button>
      </div>
    </div>
  );
}
