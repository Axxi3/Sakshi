'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Image as ImageIcon, 
  FileText, 
  Save,
  AlertCircle,
  Palette,
  Eye
} from 'lucide-react';

interface GalleryCategoryFormData {
  name: string;
  description: string;
  color: string;
  isActive: boolean;
}

const categoryColors = [
  { name: 'Pink', value: '#EC4899', bg: 'bg-pink-500' },
  { name: 'Blue', value: '#3B82F6', bg: 'bg-blue-500' },
  { name: 'Green', value: '#10B981', bg: 'bg-green-500' },
  { name: 'Purple', value: '#8B5CF6', bg: 'bg-purple-500' },
  { name: 'Orange', value: '#F59E0B', bg: 'bg-orange-500' },
  { name: 'Red', value: '#EF4444', bg: 'bg-red-500' },
  { name: 'Indigo', value: '#6366F1', bg: 'bg-indigo-500' },
  { name: 'Teal', value: '#14B8A6', bg: 'bg-teal-500' },
];

export default function CreateGalleryCategoryForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<GalleryCategoryFormData>({
    name: '',
    description: '',
    color: categoryColors[0].value,
    isActive: true
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof GalleryCategoryFormData, value: string | boolean) => {
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
    } else if (formData.name.length > 30) {
      newErrors.name = 'Category name must be less than 30 characters';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    } else if (formData.description.length > 150) {
      newErrors.description = 'Description must be less than 150 characters';
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
      
      // Here you would create the gallery category
      console.log('Gallery category data:', formData);
      
      // Redirect to gallery categories list
      router.push('/admin/gallery/categories');
    } catch (error) {
      console.error('Error creating gallery category:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedColor = categoryColors.find(color => color.value === formData.color) || categoryColors[0];

  return (
    <div className="max-w-lg mx-auto">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Gallery Categories
        </button>
        
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 bg-pink-100 rounded-lg">
            <ImageIcon className="h-6 w-6 text-pink-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Create Gallery Category</h1>
        </div>
        <p className="text-gray-600">Add a new category to organize your gallery images</p>
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
                placeholder="e.g., Nature, Portraits, Products"
                maxLength={30}
              />
              <div className="flex justify-between items-center mt-2">
                {errors.name && (
                  <div className="flex items-center text-sm text-red-600">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.name}
                  </div>
                )}
                <div className="text-xs text-gray-500 ml-auto">
                  {formData.name.length}/30 characters
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
                rows={3}
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className={`w-full px-4 py-3 border text-black rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors resize-none ${
                  errors.description ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Describe what type of images belong in this category..."
                maxLength={150}
              />
              <div className="flex justify-between items-center mt-2">
                {errors.description && (
                  <div className="flex items-center text-sm text-red-600">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.description}
                  </div>
                )}
                <div className="text-xs text-gray-500 ml-auto">
                  {formData.description.length}/150 characters
                </div>
              </div>
            </div>

            {/* Category Color */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                <div className="flex items-center">
                  <Palette className="h-4 w-4 mr-2" />
                  Category Color
                </div>
              </label>
              <div className="grid grid-cols-4 gap-3">
                {categoryColors.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    onClick={() => handleInputChange('color', color.value)}
                    className={`relative p-3 rounded-lg border-2 transition-all ${
                      formData.color === color.value
                        ? 'border-gray-900 ring-2 ring-gray-900 ring-offset-2'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    title={color.name}
                  >
                    <div className={`w-6 h-6 rounded-full ${color.bg} mx-auto`} />
                    {formData.color === color.value && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                This color will be used as a visual identifier for your category
              </p>
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
                Active categories will be shown when uploading images
              </p>
            </div>
          </div>
        </div>

        {/* Preview Card */}
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-3">
            <Eye className="h-4 w-4 text-gray-500" />
            <h3 className="text-sm font-medium text-gray-900">Preview</h3>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <div 
                className="h-10 w-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: formData.color + '20' }}
              >
                <ImageIcon 
                  className="h-5 w-5" 
                  style={{ color: formData.color }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900">
                  {formData.name || 'Category Name'}
                </h4>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {formData.description || 'Category description will appear here...'}
                </p>
                <div className="flex items-center mt-2">
                  <div 
                    className="w-2 h-2 rounded-full mr-2"
                    style={{ backgroundColor: formData.color }}
                  />
                  <span className="text-xs text-gray-400">{selectedColor.name}</span>
                </div>
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
