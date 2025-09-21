'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Package, 
  Plus, 
  FolderOpen, 
  Tag, 
  Image, 
  Images,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const sidebarItems: SidebarItem[] = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    name: 'All Products',
    href: '/admin/products',
    icon: Package,
  },
  {
    name: 'New Product',
    href: '/admin/products/newproduct',
    icon: Plus,
  },
  {
    name: 'Categories',  
    href: '/admin/categories',
    icon: FolderOpen,
  },
  {
    name: 'New Category',
    href: '/admin/categories/new',
    icon: Tag,
  },
  {
    name: 'Gallery',
    href: '/admin/gallery',
    icon: Images,
  },
  {
    name: 'Gallery Category',
    href: '/admin/gallery/categories',
    icon: Image,
  },
];

export default function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    } min-h-screen flex flex-col flex-shrink-0`}> {/* Remove fixed positioning, add flex-shrink-0 */}
      
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!isCollapsed && (
          <h2 className="text-lg font-semibold text-gray-800 truncate">Admin Panel</h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5 text-gray-600" />
          ) : (
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.href)}
              className={`w-full flex items-center px-3 py-2.5 text-left rounded-lg transition-colors ${
                isActive
                  ? 'bg-pink-50 text-pink-700 border border-pink-200'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
              title={isCollapsed ? item.name : ''}
            >
              <Icon className={`h-5 w-5 flex-shrink-0 ${isActive ? 'text-pink-700' : 'text-gray-500'}`} />
              {!isCollapsed && (
                <span className="ml-3 font-medium truncate">{item.name}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        {!isCollapsed && (
          <div className="text-xs text-gray-500 text-center">
            AyurVeda Admin v1.0
          </div>
        )}
      </div>
    </div>
  );
}
