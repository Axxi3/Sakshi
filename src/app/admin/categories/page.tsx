'use client';

import { useState } from 'react';
import { Edit2, Trash2, Plus, FolderOpen, Calendar, Hash } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string;
  productCount: number;
  createdAt: string;
  isActive: boolean;
}

// Sample data - replace with your actual data
const sampleCategories: Category[] = [
  {
    id: '1',
    name: 'Face Care',
    description: 'Natural skincare products for face and complexion',
    productCount: 12,
    createdAt: '2024-01-15',
    isActive: true,
  },
  {
    id: '2',
    name: 'Body Care',
    description: 'Ayurvedic products for body wellness and care',
    productCount: 8,
    createdAt: '2024-01-10',
    isActive: true,
  },
  {
    id: '3',
    name: 'Essential Oils',
    description: 'Pure and therapeutic essential oil collection',
    productCount: 15,
    createdAt: '2024-01-08',
    isActive: false,
  },
  {
    id: '4',
    name: 'Herbal Teas',
    description: 'Organic herbal tea blends for wellness',
    productCount: 6,
    createdAt: '2024-01-05',
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

export default function CategoriesTable() {
  const [categories, setCategories] = useState<Category[]>(sampleCategories);

  const handleToggleActive = (categoryId: string, isActive: boolean) => {
    setCategories(prev => 
      prev.map(category => 
        category.id === categoryId 
          ? { ...category, isActive }
          : category
      )
    );
    console.log(`Category ${categoryId} active status: ${isActive}`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Categories ({categories.length})
            </h2>
            <p className="text-sm text-gray-600 sm:hidden">
              Manage product categories and organization
            </p>
          </div>
          <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Add Category
          </button>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Products
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created
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
            {categories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-50 transition-colors">
                {/* Category Info */}
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-lg bg-pink-100 flex items-center justify-center">
                        <FolderOpen className="h-5 w-5 text-pink-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {category.name}
                      </div>
                      <div className="text-sm text-gray-500 max-w-xs truncate">
                        {category.description}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Product Count */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Hash className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-sm font-semibold text-gray-900">
                      {category.productCount}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      {category.productCount === 1 ? 'product' : 'products'}
                    </span>
                  </div>
                </td>

                {/* Created Date */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-900">
                      {formatDate(category.createdAt)}
                    </span>
                  </div>
                </td>

                {/* Status */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <Toggle
                      checked={category.isActive}
                      onChange={(checked) => handleToggleActive(category.id, checked)}
                    />
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      category.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {category.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Edit Category"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Category"
                    >
                      <Trash2 className="h-4 w-4" />
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
        {categories.map((category) => (
          <div key={category.id} className="p-4 sm:p-6">
            <div className="flex items-start justify-between">
              {/* Category Info */}
              <div className="flex items-start space-x-3 flex-1 min-w-0">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-pink-100 flex items-center justify-center">
                    <FolderOpen className="h-5 w-5 text-pink-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-1 ml-2">
                <button
                  className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Edit Category"
                >
                  <Edit2 className="h-4 w-4" />
                </button>
                <button
                  className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Delete Category"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Meta Info */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Hash className="h-4 w-4 mr-1" />
                  <span>{category.productCount} products</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{formatDate(category.createdAt)}</span>
                </div>
              </div>

              {/* Status Toggle */}
              <div className="flex items-center space-x-2">
                <Toggle
                  checked={category.isActive}
                  onChange={(checked) => handleToggleActive(category.id, checked)}
                />
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                  category.isActive
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {category.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {categories.length === 0 && (
        <div className="text-center py-12 px-4">
          <div className="text-gray-500">
            <FolderOpen className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <p className="text-base sm:text-lg font-medium mb-2">No categories found</p>
            <p className="text-sm">Create your first category to organize your products.</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-gray-50 px-4 sm:px-6 py-3 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-sm text-gray-700 text-center sm:text-left">
            Showing {categories.length} categories
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
