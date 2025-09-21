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
    price: 89,
    originalPrice: 129,
    image: "https://drive.google.com/uc?export=view&id=1mdK8WPOrduWnjkPlquQj5r8UMxMo2gVA",
    category: "Home & Living",
    brand: "Nordic",
    rating: 4.8,
    reviews: 124,
    inStock: true,
  },
  {
    id: 2,
    name: "Product 2",
    price: 24,
    image: "https://drive.google.com/uc?export=view&id=1L6emI2g3s_cr7sbJKHN2JsrrK_R1Zacg",
    category: "Kitchen", 
    brand: "Artisan",
    rating: 4.6,
    reviews: 89,
    inStock: true,
  },
  {
    id: 3,
    name: "Elixr",
    price: 78,
    originalPrice: 95,
    image: "https://drive.google.com/uc?export=view&id=1MkIpI0JyWI7V4_gsTNqMOYOQy_sU7grC",
    category: "Home & Living",
    brand: "Cozy Co", 
    rating: 4.7,
    reviews: 203,
    inStock: false,
  },
  {
    id: 4,
    name: "Keshamrit Hair Oil",
    price: 32,
    image: "https://drive.google.com/uc?export=view&id=1gOCRaNfJbuqg6WgGYJWsghSm9rvQnGQd",
    category: "Lifestyle",
    brand: "Pure",
    rating: 4.5,
    reviews: 67,
    inStock: true,
  },
  {
    id: 5,
    name: "Sattva Roll",
    price: 45,
    image: "https://drive.google.com/uc?export=view&id=1a77e0b4hDC4yjjZUrCJ-6wGKUL3tdqSh",
    category: "Lifestyle",
    brand: "Pure",
    rating: 4.3,
    reviews: 34,
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
