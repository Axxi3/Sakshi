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
    name: "Minimalist Desk Lamp",
    price: 89,
    originalPrice: 129,
    image: "/api/placeholder/280/280",
    category: "Home & Living",
    brand: "Nordic",
    rating: 4.8,
    reviews: 124,
    inStock: true,
  },
  {
    id: 2,
    name: "Ceramic Coffee Mug",
    price: 24,
    image: "/api/placeholder/280/280",
    category: "Kitchen",
    brand: "Artisan",
    rating: 4.6,
    reviews: 89,
    inStock: true,
  },
  {
    id: 3,
    name: "Wool Throw Blanket",
    price: 78,
    originalPrice: 95,
    image: "/api/placeholder/280/280",
    category: "Home & Living",
    brand: "Cozy Co",
    rating: 4.7,
    reviews: 203,
    inStock: false,
  },
  {
    id: 4,
    name: "Glass Water Bottle",
    price: 32,
    image: "/api/placeholder/280/280",
    category: "Lifestyle",
    brand: "Pure",
    rating: 4.5,
    reviews: 67,
    inStock: true,
  }
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
