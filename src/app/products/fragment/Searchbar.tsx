import React from 'react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onFilterToggle: () => void;
  resultsCount: number;
}

export default function SearchBar({
  searchQuery,
  onSearchChange,
  onFilterToggle,
  resultsCount
}: SearchBarProps) {
  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search products..."
          className="w-full pl-12 pr-4 py-4 text-base border border-gray-200 rounded-xl 
                   bg-white placeholder-gray-400 focus:outline-none focus:ring-1 
                   focus:ring-gray-400 focus:border-gray-400 transition-all"
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={onFilterToggle}
          className="lg:hidden flex items-center gap-2 px-4 py-2 text-sm border 
                   border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
          </svg>
          Filters
        </button>

        <span className="text-sm text-gray-600">
          {resultsCount} {resultsCount === 1 ? 'item' : 'items'}
        </span>
      </div>
    </div>
  );
}
