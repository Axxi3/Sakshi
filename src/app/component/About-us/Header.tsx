// components/PageHeader.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  breadcrumbs: Array<{
    label: string;
    href?: string;
  }>;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  breadcrumbs,
  backgroundImage = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
}) => {
  return (
    <section className="relative h-80 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-100 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10"></div>
        <img 
          src={backgroundImage}
          alt={`${title} page header`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="font-philosopher text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center space-x-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {index === 0 ? (
                <Home className="w-4 h-4 text-white/80" />
              ) : null}
              
              {crumb.href ? (
                <Link 
                  href={crumb.href}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
              
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="w-4 h-4 text-white/60" />
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default PageHeader;
