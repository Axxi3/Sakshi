'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  FolderOpen, 
  FileText, 
  Save,
  AlertCircle
} from 'lucide-react';

interface CategoryFormData {
  name: string;
  description: string;
  isActive: boolean;
}

export default function CreateCategoryForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<CategoryFormData>({
    name: '',
    description: '',
    isActive: true
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof CategoryFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Category name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Category name must be at least 2 characters';
    } else if (formData.name.length > 50) {
      newErrors.name = 'Category name must be less than 50 characters';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    } else if (formData.description.length > 200) {
      newErrors.description = 'Description must be less than 200 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would create the category
      console.log('Category data:', formData);
      
      // Redirect to categories list
      router.push('/admin/categories');
    } catch (error) {
      console.error('Error creating category:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Categories
        </button>
        
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 bg-pink-100 rounded-lg">
            <FolderOpen className="h-6 w-6 text-pink-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Create Category</h1>
        </div>
        <p className="text-gray-600">Add a new category to organize your products</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category Details Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="h-5 w-5 text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900">Category Details</h2>
          </div>

          <div className="space-y-6">
            {/* Category Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Category Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full px-4 py-3 border text-black rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors ${
                  errors.name ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="e.g., Face Care, Essential Oils"
                maxLength={50}
              />
              <div className="flex justify-between items-center mt-2">
                {errors.name && (
                  <div className="flex items-center text-sm text-red-600">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.name}
                  </div>
                )}
                <div className="text-xs text-gray-500 ml-auto">
                  {formData.name.length}/50 characters
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                rows={4}
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors resize-none ${
                  errors.description ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Describe what products belong in this category..."
                maxLength={200}
              />
              <div className="flex justify-between items-center mt-2">
                {errors.description && (
                  <div className="flex items-center text-sm text-red-600">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.description}
                  </div>
                )}
                <div className="text-xs text-gray-500 ml-auto">
                  {formData.description.length}/200 characters
                </div>
              </div>
            </div>

            {/* Active Status */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) => handleInputChange('isActive', e.target.checked)}
                  className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                />
                <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
                  Make this category active and visible
                </label>
              </div>
              <p className="text-xs text-gray-500 ml-7 mt-1">
                Active categories will be shown when adding products
              </p>
            </div>
          </div>
        </div>

        {/* Preview Card */}
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Preview</h3>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-lg bg-pink-100 flex items-center justify-center">
                <FolderOpen className="h-5 w-5 text-pink-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  {formData.name || 'Category Name'}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  {formData.description || 'Category description will appear here...'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:justify-end pt-6">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors order-2 sm:order-1"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center order-1 sm:order-2"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Creating Category...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Create Category
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
