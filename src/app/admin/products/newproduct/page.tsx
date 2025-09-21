'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  Upload, 
  X, 
  Package, 
  DollarSign, 
  FileText, 
  Tag, 
  Image as ImageIcon,
  Save,
  ArrowLeft
} from 'lucide-react';

interface ProductFormData {
  name: string;
  description: string;
  price: string;
  category: string;
  images: File[];
  isActive: boolean;
}

const categories = [
  'Face Care',
  'Body Care', 
  'Hair Care',
  'Essential Oils',
  'Herbal Teas',
  'Supplements',
  'Aromatherapy',
  'Meditation'
];

export default function AddProductForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    description: '',
    price: '',
    category: '',
    images: [],
    isActive: true
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleInputChange = (field: keyof ProductFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    // Validate file types
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const validFiles = files.filter(file => validTypes.includes(file.type));

    if (validFiles.length !== files.length) {
      setErrors(prev => ({ ...prev, images: 'Please select only valid image files (JPG, PNG, WebP)' }));
      return;
    }

    // Limit to 5 images
    const totalImages = formData.images.length + validFiles.length;
    if (totalImages > 5) {
      setErrors(prev => ({ ...prev, images: 'Maximum 5 images allowed' }));
      return;
    }

    // Create preview URLs
    const newPreviewUrls = validFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls(prev => [...prev, ...newPreviewUrls]);
    setFormData(prev => ({ ...prev, images: [...prev.images, ...validFiles] }));
    setErrors(prev => ({ ...prev, images: '' }));
  };

  const removeImage = (index: number) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    const newPreviewUrls = previewUrls.filter((_, i) => i !== index);
    
    // Revoke the URL to prevent memory leaks
    URL.revokeObjectURL(previewUrls[index]);
    
    setFormData(prev => ({ ...prev, images: newImages }));
    setPreviewUrls(newPreviewUrls);
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Product name is required';
    } else if (formData.name.length < 3) {
      newErrors.name = 'Product name must be at least 3 characters';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    }

    if (!formData.price) {
      newErrors.price = 'Price is required';
    } else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = 'Please enter a valid price';
    }

    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    if (formData.images.length === 0) {
      newErrors.images = 'At least one product image is required';
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
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would upload images and create product
      console.log('Product data:', formData);
      
      // Redirect to products list
      router.push('/admin/products');
    } catch (error) {
      console.error('Error creating product:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </button>
        
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 bg-pink-100 rounded-lg">
            <Package className="h-6 w-6 text-pink-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Add New Product</h1>
        </div>
        <p className="text-gray-600">Create a new product for your Ayurveda wellness collection</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Product Images */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <ImageIcon className="h-5 w-5 text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900">Product Images</h2>
          </div>
          
          {previewUrls.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
              {previewUrls.map((url, index) => (
                <div key={index} className="relative group">
                  <Image
                    src={url}
                    alt={`Product ${index + 1}`}
                    width={120}
                    height={120}
                    className="w-full h-24 object-cover rounded-lg border border-gray-200"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 p-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-pink-400 transition-colors">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload" className="cursor-pointer">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-1">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-500">
                PNG, JPG, WebP up to 5MB (max 5 images)
              </p>
            </label>
          </div>
          
          {errors.images && (
            <p className="mt-2 text-sm text-red-600">{errors.images}</p>
          )}
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="h-5 w-5 text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900">Product Details</h2>
          </div>

          {/* Product Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full px-4 py-3 border text-black rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                errors.name ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Enter product name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-black mb-2">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 text-black focus:ring-pink-500 focus:border-transparent ${
                errors.description ? 'border-red-300' : 'border-black'
              }`}
              placeholder="Describe your product's benefits and ingredients"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description}</p>
            )}
          </div>

          {/* Price and Category Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Price */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-black mb-2">
                Price (USD)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  id="price"
                  step="0.01"
                  min="0"
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 text-black border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                    errors.price ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="0.00"
                />
              </div>
              {errors.price && (
                <p className="mt-1 text-sm text-red-600">{errors.price}</p>
              )}
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-black mb-2">
                Category
              </label>
              <div className="relative">
                <Tag className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border text-black rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                    errors.category ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              {errors.category && (
                <p className="mt-1 text-sm text-red-600">{errors.category}</p>
              )}
            </div>
          </div>

          {/* Active Status */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="isActive"
              checked={formData.isActive}
              onChange={(e) => handleInputChange('isActive', e.target.checked)}
              className="w-4 h-4 text-pink-600  border-gray-300 rounded focus:ring-pink-500"
            />
            <label htmlFor="isActive" className="text-sm font-medium text-black">
              Make this product active and visible to customers
            </label>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-3 border border-gray-300 text-black rounded-lg hover:bg-gray-50 transition-colors order-2 sm:order-1"
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
                Creating Product...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Create Product
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
