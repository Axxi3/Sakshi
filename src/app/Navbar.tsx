'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll effect for extra elegance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? '  mt-0' 
        : '   mt-3'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                <Leaf className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-[#4a4a3f] animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg tracking-wide">AyurVeda</span>
              <div className="text-orange-200 text-xs -mt-1 font-light">Wellness Center</div>
            </div>
          </Link>

          {/* Enhanced Centered Navigation - Desktop */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-xl rounded-full px-8 py-3 border border-white/30 shadow-2xl hover:bg-white/25 transition-all duration-300">
              <NavLink href="/" label="Home" />
              <div className="w-px h-5 bg-white/30 mx-2"></div>
              <NavLink href="/about" label="About" />
              <div className="w-px h-5 bg-white/30 mx-2"></div>
              <NavLink href="/treatments" label="Treatments" />
              <div className="w-px h-5 bg-white/30 mx-2"></div>
              <NavLink href="/gallery" label="Gallery" />
              <div className="w-px h-5 bg-white/30 mx-2"></div>
              <NavLink href="/contact" label="Contact" />
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/consultation" 
              className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/30 overflow-hidden group"
            >
              <span className="relative z-10">Book Consultation</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2.5 rounded-lg bg-white/20 hover:bg-white/30 transition-all duration-200 backdrop-blur-sm border border-white/20"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'max-h-80 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="bg-white/20 backdrop-blur-xl rounded-2xl mx-4 my-4 border border-white/30 shadow-2xl overflow-hidden">
            <div className="py-6 space-y-1">
              <MobileNavLink href="/" label="Home" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/about" label="About" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/treatments" label="Treatments" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/gallery" label="Gallery" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/contact" label="Contact" onClick={() => setIsMenuOpen(false)} />
              
              <div className="px-6 pt-6">
                <Link 
                  href="/consultation" 
                  className="block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-center px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg transform hover:scale-[1.02]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Enhanced Desktop Nav Link with better contrast
const NavLink: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <Link 
    href={href} 
    className="relative text-orange-500  text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 group"
  >
    <span className="relative z-10">{label}</span>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-orange-400 group-hover:w-6 transition-all duration-300 rounded-full"></div>
  </Link>
);

// Enhanced Mobile Nav Link with better visibility
const MobileNavLink: React.FC<{ href: string; label: string; onClick: () => void }> = ({ href, label, onClick }) => (
  <Link 
    href={href} 
    className="block text-white hover:text-orange-200 hover:bg-white/15 px-6 py-3 transition-all duration-200 font-medium border-l-2 border-transparent hover:border-orange-400"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;
