'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Edit2, Trash2, Plus, Image as ImageIcon, Eye, Calendar, Tag } from 'lucide-react';

interface GalleryImage {
  id: string;
  name: string;
  url: string;
  category: string;
  uploadDate: string;
  isActive: boolean;
  fileSize: string;
}

// Sample data - replace with your actual data
const sampleImages: GalleryImage[] = [
  {
    id: '1',
    name: 'Ayurvedic herbs collection',
    url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop&crop=center',
    category: 'Herbs',
    uploadDate: '2024-01-15',
    isActive: true,
    fileSize: '2.4 MB',
  },
  {
    id: '2',
    name: 'Essential oils setup',
    url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop&crop=center',
    category: 'Essential Oils',
    uploadDate: '2024-01-12',
    isActive: true,
    fileSize: '1.8 MB',
  },
  {
    id: '3',
    name: 'Meditation space',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center',
    category: 'Wellness',
    uploadDate: '2024-01-10',
    isActive: false,
    fileSize: '3.1 MB',
  },
  {
    id: '4',
    name: 'Herbal tea preparation',
    url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop&crop=center',
    category: 'Herbal Teas',
    uploadDate: '2024-01-08',
    isActive: true,
    fileSize: '2.7 MB',
  },
  {
    id: '5',
    name: 'Spa treatment room',
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop&crop=center',
    category: 'Wellness',
    uploadDate: '2024-01-05',
    isActive: true,
    fileSize: '4.2 MB',
  },
];

const categories = ['All', 'Herbs', 'Essential Oils', 'Wellness', 'Herbal Teas'];

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

export default function GalleryTable() {
  const [images, setImages] = useState<GalleryImage[]>(sampleImages);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const handleToggleActive = (imageId: string, isActive: boolean) => {
    setImages(prev => 
      prev.map(image => 
        image.id === imageId 
          ? { ...image, isActive }
          : image
      )
    );
    console.log(`Image ${imageId} active status: ${isActive}`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Gallery ({filteredImages.length})
            </h2>
            <p className="text-sm text-gray-600 sm:hidden">
              Manage your image gallery and media assets
            </p>
          </div>
          <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Upload Images
          </button>
        </div>

        {/* Category Filter */}
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-pink-100 text-pink-700 border border-pink-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-transparent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Upload Date
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
            {filteredImages.map((image) => (
              <tr key={image.id} className="hover:bg-gray-50 transition-colors">
                {/* Image Info */}
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-16 w-20">
                      <Image
                        src={image.url}
                        alt={image.name}
                        width={80}
                        height={64}
                        className="h-16 w-20 rounded-lg object-cover border border-gray-200 cursor-pointer hover:opacity-75 transition-opacity"
                        onClick={() => setSelectedImage(image)}
                      />
                    </div>
                    <div className="ml-4 flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 truncate">
                        {image.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {image.fileSize}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                      {image.category}
                    </span>
                  </div>
                </td>

                {/* Upload Date */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-900">
                      {formatDate(image.uploadDate)}
                    </span>
                  </div>
                </td>

                {/* Status */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <Toggle
                      checked={image.isActive}
                      onChange={(checked) => handleToggleActive(image.id, checked)}
                    />
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      image.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {image.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => setSelectedImage(image)}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      title="View Image"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Edit Image"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Image"
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
        {filteredImages.map((image) => (
          <div key={image.id} className="p-4 sm:p-6">
            <div className="flex items-start space-x-4">
              {/* Image Thumbnail */}
              <div className="flex-shrink-0">
                <Image
                  src={image.url}
                  alt={image.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-lg object-cover border border-gray-200 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                />
              </div>

              {/* Image Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {image.name}
                    </h3>
                    <div className="flex items-center space-x-3 mt-1">
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                        <Tag className="h-3 w-3 mr-1" />
                        {image.category}
                      </span>
                      <span className="text-xs text-gray-500">{image.fileSize}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(image.uploadDate)}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center space-x-1 ml-2">
                    <button
                      onClick={() => setSelectedImage(image)}
                      className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      title="View Image"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Edit Image"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button
                      className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Image"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Status Toggle */}
                <div className="flex items-center justify-between mt-3">
                  <div className="text-sm text-gray-600">Status</div>
                  <div className="flex items-center space-x-2">
                    <Toggle
                      checked={image.isActive}
                      onChange={(checked) => handleToggleActive(image.id, checked)}
                    />
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      image.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {image.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center py-12 px-4">
          <div className="text-gray-500">
            <ImageIcon className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <p className="text-base sm:text-lg font-medium mb-2">
              {selectedCategory === 'All' ? 'No images found' : `No images in ${selectedCategory} category`}
            </p>
            <p className="text-sm">Upload your first image to get started.</p>
          </div>
        </div>
      )}

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-full overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">{selectedImage.name}</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <Image
                src={selectedImage.url}
                alt={selectedImage.name}
                width={800}
                height={600}
                className="w-full h-auto max-h-96 object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-gray-50 px-4 sm:px-6 py-3 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-sm text-gray-700 text-center sm:text-left">
            Showing {filteredImages.length} images
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
