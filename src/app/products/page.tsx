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
    price: 1299,
    originalPrice: 1499,
    image: "https://ik.imagekit.io/oa7uh5z0ty/1.jpg?updatedAt=1758807321598",
    description: "Natural Pitta balance with cooling herbs for digestion & energy.",
    category: "Ayurvedic Food",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.6,
    reviews: 43,
    inStock: true,
  },
  {
    id: 2,
    name: "Keshamrit Hair Oil",
    price: 599,
    originalPrice: 699,
    image: "https://ik.imagekit.io/oa7uh5z0ty/4%20-%20Copy.jpg?updatedAt=1758807321917",
    description: "Handmade Ayurvedic oil reduces hair fall & promotes growth.",
    category: "Hair Care",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.5,
    reviews: 67,
    inStock: true,
  },
  {
    id: 3,
    name: "Suwarnprashan Avleha",
    price: 2400,
    originalPrice: 2600,
    image: "https://ik.imagekit.io/oa7uh5z0ty/2.jpg?updatedAt=1758807322131",
    description: "Boosts children's immunity, memory & overall development.",
    category: "Ayurvedic Medicine",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.8,
    reviews: 52,
    inStock: true,
  },
  {
    id: 4,
    name: "Varicoveda Oil",
    price: 699,
    originalPrice: 799,
    image: "https://ik.imagekit.io/oa7uh5z0ty/7.jpg?updatedAt=1758807321661",
    description: "Reduces varicose vein swelling, pain & improves circulation.",
    category: "Therapeutic Oil",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.9,
    reviews: 80,
    inStock: true,
  },
  {
    id: 5,
    name: "Kesh Grow Roll on",
    price: 999,
    originalPrice: 1199,
    image: "https://ik.imagekit.io/oa7uh5z0ty/6.jpg?updatedAt=1758807321397",
    description: "Easy roll-on promotes hair growth & prevents hair fall.",
    category: "Hair Care",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.7,
    reviews: 41,
    inStock: true,
  },
  {
    id: 6,
    name: "Shatdhaut Ghrita Elixir",
    price: 499,
    originalPrice: 599,
    image: "https://ik.imagekit.io/oa7uh5z0ty/3%20-%20Copy.jpg?updatedAt=1758807321679",
    description: "100x churned ghee soothes skin, burns & inflammation.",
    category: "Ayurvedic Medicine",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.6,
    reviews: 73,
    inStock: true,
  },
  {
    id: 7,
    name: "Vatakapha Soothing Candies",
    price: 299,
    originalPrice: 399,
    image: "https://ik.imagekit.io/oa7uh5z0ty/8.jpg?updatedAt=1758807354818",
    description: "Relieves sore throat, boosts appetite & strengthens voice.",
    category: "Ayurvedic Supplements",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.5,
    reviews: 38,
    inStock: true,
  },
  {
    id: 8,
    name: "Satva Amritprash",
    price: 2400,
    originalPrice: 2600,
    image: "/agg.png",
    description: "Boosts libido, vitality & improves semen quality.",
    category: "Ayurvedic Medicine",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.7,
    reviews: 29,
    inStock: true,
  },
  {
    id: 9,
    name: "Pitta Soothing Candies",
    price: 299,
    originalPrice: 399,
    image: "/psc.png",
    description: "Cools Pitta, aids digestion & reduces itching/rashes.",
    category: "Ayurvedic Supplements",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.6,
    reviews: 34,
    inStock: true,
  },
  {
    id: 10,
    name: "Sattva Roll On",
    price: 999,
    originalPrice: 1199,
    image: "/sro.png",
    description: "Balances mind, boosts digestion with soothing aroma.",
    category: "Ayurvedic Supplements",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.8,
    reviews: 45,
    inStock: true,
  },
  {
    id: 11,
    name: "Shree Rasayanam",
    price: 899,
    originalPrice: 999,
    image: "/sr.png",
    description: "For kids under 18: boosts metabolism & immunity.",
    category: "Ayurvedic Supplements",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.4,
    reviews: 22,
    inStock: true,
  },
  {
    id: 12,
    name: "Shree Prabala Avleha",
    price: 1800,
    originalPrice: 2000,
    image: "/last.png",
    description: "For adults 18+: balances Tridoshas & strengthens bones.",
    category: "Ayurvedic Medicine",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.9,
    reviews: 61,
    inStock: true,
  },
  {
    id: 13,
    name: "Agni Sandeepak",
    price: 599,
    originalPrice: 699,
    image: "/asp.png",
    description: "Helps to increase metabolism, increase appetite, and helps in absorption.",
    category: "Ayurvedic Medicine",
    brand: "Shree Samadhan Ayurveda",
    rating: 4.8,
    reviews: 35,
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
          <ProductGrid products={mockProducts} />
        </div>
      </div>
    </div>

  );
}
