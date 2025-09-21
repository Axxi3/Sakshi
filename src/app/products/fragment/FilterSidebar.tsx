import React from 'react';
import { Product, FilterOptions } from '../interface';

interface FilterSidebarProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  products: Product[];
}

export default function FilterSidebar({ filters, onFiltersChange, products }: FilterSidebarProps) {
  const categories = [...new Set(products.map(p => p.category))];
  const brands = [...new Set(products.map(p => p.brand))];

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.categories, category]
      : filters.categories.filter(c => c !== category);
    
    onFiltersChange({ ...filters, categories: newCategories });
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    const newBrands = checked
      ? [...filters.brands, brand]
      : filters.brands.filter(b => b !== brand);
    
    onFiltersChange({ ...filters, brands: newBrands });
  };

  const clearFilters = () => {
    onFiltersChange({
      categories: [],
      brands: [],
      priceRange: [0, 200],
      minRating: 0,
      inStockOnly: false
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <h3 className="text-lg font-medium text-gray-900">Filters</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors"
        >
          Clear all
        </button>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Category</h4>
        <div className="space-y-3">
          {categories.map(category => (
            <label key={category} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={(e) => handleCategoryChange(category, e.target.checked)}
                className="rounded border-gray-300 text-gray-900 focus:ring-1 focus:ring-gray-400"
              />
              <span className="ml-3 text-sm text-gray-600">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Brand</h4>
        <div className="space-y-3">
          {brands.map(brand => (
            <label key={brand} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={(e) => handleBrandChange(brand, e.target.checked)}
                className="rounded border-gray-300 text-gray-900 focus:ring-1 focus:ring-gray-400"
              />
              <span className="ml-3 text-sm text-gray-600">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Price range</h4>
        <div className="flex gap-3">
          <div className="flex-1">
            <input
              type="number"
              value={filters.priceRange[0]}
              onChange={(e) => onFiltersChange({ 
                ...filters, 
                priceRange: [Number(e.target.value), filters.priceRange[1]] 
              })}
              placeholder="Min"
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg 
                       focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
          <div className="flex-1">
            <input
              type="number"
              value={filters.priceRange[1]}
              onChange={(e) => onFiltersChange({ 
                ...filters, 
                priceRange: [filters.priceRange[0], Number(e.target.value)] 
              })}
              placeholder="Max"
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg 
                       focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Stock Status */}
      <div className="space-y-4">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onFiltersChange({ ...filters, inStockOnly: e.target.checked })}
            className="rounded border-gray-300 text-gray-900 focus:ring-1 focus:ring-gray-400"
          />
          <span className="ml-3 text-sm text-gray-600">In stock only</span>
        </label>
      </div>
    </div>
  );
}
