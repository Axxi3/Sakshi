export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  description: string;
}

export interface FilterOptions {
  categories: string[];
  brands: string[];
  priceRange: [number, number];
  minRating: number;
  inStockOnly: boolean;
}
