'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Edit2, Trash2, MoreHorizontal, Plus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  isActive: boolean;
}

// Sample data - replace with your actual data
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Ayurvedic Face Cream',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=100&h=100&fit=crop&crop=center',
    isActive: true,
  },
  {
    id: '2', 
    name: 'Herbal Tea Blend',
    price: 15.50,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=100&h=100&fit=crop&crop=center',
    isActive: false,
  },
  {
    id: '3',
    name: 'Essential Oil Set',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=100&h=100&fit=crop&crop=center',
    isActive: true,
  },
  {
    id: '4',
    name: 'Meditation Cushion',
    price: 35.99,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop&crop=center',
    isActive: true,
  },
];

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600 hover:peer-checked:bg-pink-700"></div>
    </label>
  );
}

export default function ProductsTable() {
  const [products, setProducts] = useState<Product[]>(sampleProducts);

  const handleToggleActive = (productId: string, isActive: boolean) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === productId 
          ? { ...product, isActive }
          : product
      )
    );
    console.log(`Product ${productId} active status: ${isActive}`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
      {/* Table Header */}
      <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              All Products ({products.length})
            </h2>
            <p className="text-sm text-gray-600 sm:hidden">
              Manage your product inventory
            </p>
          </div>
          <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </button>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-lg object-cover border border-gray-200"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {product.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        ID: {product.id}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-gray-900">
                    {formatPrice(product.price)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <Toggle
                      checked={product.isActive}
                      onChange={(checked) => handleToggleActive(product.id, checked)}
                    />
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      product.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Edit Product"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Product"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <button
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      title="More Options"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden divide-y divide-gray-200">
        {products.map((product) => (
          <div key={product.id} className="p-4 sm:p-6">
            <div className="flex items-start space-x-4">
              {/* Product Image */}
              <div className="flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={60}
                  height={60}
                  className="h-15 w-15 sm:h-16 sm:w-16 rounded-lg object-cover border border-gray-200"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-medium text-gray-900 truncate">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      ID: {product.id}
                    </p>
                  </div>
                  
                  {/* Actions Menu */}
                  <div className="flex items-center space-x-1 ml-2">
                    <button
                      className="p-1.5 sm:p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Edit Product"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button
                      className="p-1.5 sm:p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Product"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Price and Status Row */}
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-sm sm:text-base font-semibold text-gray-900">
                    {formatPrice(product.price)}
                  </div>
                  
                  {/* Status Toggle */}
                  <div className="flex items-center space-x-2">
                    <Toggle
                      checked={product.isActive}
                      onChange={(checked) => handleToggleActive(product.id, checked)}
                    />
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      product.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {products.length === 0 && (
        <div className="text-center py-12 px-4">
          <div className="text-gray-500">
            <p className="text-base sm:text-lg font-medium mb-2">No products found</p>
            <p className="text-sm">Get started by adding your first product.</p>
          </div>
        </div>
      )}

      {/* Table Footer */}
      <div className="bg-gray-50 px-4 sm:px-6 py-3 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-sm text-gray-700 text-center sm:text-left">
            Showing {products.length} products
          </div>
          <div className="flex items-center justify-center space-x-2">
            <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 border border-gray-300 rounded-md">
              Previous
            </button>
            <span className="px-3 py-1 text-sm bg-pink-50 text-pink-700 rounded-md border border-pink-200">
              1
            </span>
            <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 border border-gray-300 rounded-md">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
