'use client'
import React, { useState, useMemo } from 'react';
import SearchBar from './fragment/Searchbar';
import FilterSidebar from './fragment/FilterSidebar';
import ProductGrid from './fragment/ProductGrid';
import { Product, FilterOptions } from './interface';

// Mock data - replace with your API calls
const mockProducts: Product[] = [
   {
    id: 1,
    name: "Gulkand",
    price: 75,
    originalPrice: 130,
    image: "1.jpg", // Gulkand with red rose label
    category: "Ayurvedic Food",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.6,
    reviews: 43,
    inStock: true,
  },
  {
    id: 2,
    name: "Keshamrit Hair Oil",
    price: 120,
    originalPrice: 200,
    image: "2.jpg", // Three hair oil bottles
    category: "Hair Care",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.5,
    reviews: 67,
    inStock: true,
  },
  {
    id: 3,
    name: "Suvarnaprashana Avaleha",
    price: 89,
    originalPrice: 150,
    image: "3.jpg", // Three small jars with Sanskrit labels
    category: "Ayurvedic Medicine",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.2,
    reviews: 63,
    inStock: true,
  },
  {
    id: 4,
    name: "VaricoVeda Oil",
    price: 95,
    originalPrice: 160,
    image: "4.jpg", // White spray bottle with Samviran branding
    category: "Therapeutic Oil",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.9,
    reviews: 80,
    inStock: true,
  },
  {
    id: 5,
    name: "Kesha Griha Roll On",
    price: 120,
    originalPrice: 200,
    image: "5.jpg", // Two golden roll-on bottles
    category: "Hair Care",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.8,
    reviews: 37,
    inStock: true,
  },
  {
    id: 6,
    name: "Shat Dhaut Ghrita Elixir",
    price: 89,
    originalPrice: 150,
    image: "6.jpg", // Three small jars with black lids
    category: "Ayurvedic Medicine",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.2,
    reviews: 94,
    inStock: true,
  },
  {
    id: 7,
    name: "Vata Kapha Soothing Candies",
    price: 65,
    originalPrice: 110,
    image: "7.jpg", // Brown pouches with candies
    category: "Ayurvedic Supplements",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.6,
    reviews: 45,
    inStock: true,
  },
  {
    id: 8,
    name: "Srot Ashudhara",
    price: 89,
    originalPrice: 150,
    image: "8.jpg", // Single jar with red and white label
    category: "Ayurvedic Medicine",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.2,
    reviews: 68,
    inStock: true,
  },
];





export default function ProductPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    brands: [],
    priceRange: [0, 200],
    minRating: 0,
    inStockOnly: false
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = filters.categories.length === 0 || filters.categories.includes(product.category);
      const matchesBrand = filters.brands.length === 0 || filters.brands.includes(product.brand);
      const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const matchesRating = product.rating >= filters.minRating;
      const matchesStock = !filters.inStockOnly || product.inStock;

      return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesRating && matchesStock;
    });
  }, [searchQuery, filters]);

  return (
    <div className="min-h-screen bg-[#FDF8F3] pt-[90px]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl font-medium text-gray-900 mb-8">
            Discover unique finds
          </h1>
          
          <SearchBar 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onFilterToggle={() => setShowFilters(!showFilters)}
            resultsCount={filteredProducts.length}
          />
        </div>

        <div className="flex gap-12">
          {/* Filters */}

          </div>

          {/* Products */}
          <div className="flex-1">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>

  );
}
