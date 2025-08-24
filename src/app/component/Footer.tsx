// components/Footer.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#55211C] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-white/5 rounded-full -z-10"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/5 rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AyurVeda</h3>
                <p className="text-orange-200 text-sm -mt-1">Wellness Center</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed text-sm">
              Experience authentic Ayurvedic healing and wellness treatments designed to restore balance and promote holistic health through time-tested natural therapies.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-philosopher">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-orange-400 transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-white/80 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Our Treatments
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/80 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="text-white/80 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-philosopher">Our Treatments</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/treatments/panchakarma" className="text-white/80 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Panchakarma
                </Link>
              </li>
              <li>
                <Link href="/treatments/abhyanga" className="text-white/80 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Abhyanga Massage
                </Link>
              </li>
              <li>
                <Link href="/treatments/shirodhara" className="text-white/80 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Shirodhara Therapy
                </Link>
              </li>
              <li>
                <Link href="/treatments/nasya" className="text-white/80 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Nasya Treatment
                </Link>
              </li>
              <li>
                <Link href="/treatments/udvartana" className="text-white/80 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Udvartana
                </Link>
              </li>
              <li>
                <Link href="/treatments/marma" className="text-white/80 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Marma Therapy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-philosopher">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    123 Wellness Street,<br />
                    Ayurveda District,<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">+91 98765 43210</p>
                  <p className="text-white/80 text-sm">+91 98765 43211</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <p className="text-white/80 text-sm">info@ayurvedawellness.com</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-8">
              <h5 className="text-white font-semibold mb-3 text-sm">Working Hours</h5>
              <div className="text-white/80 text-sm space-y-1">
                <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                <p>Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/20 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-philosopher font-semibold mb-4">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-white/80 text-sm">
                Stay updated with the latest wellness tips, treatment offers, and Ayurvedic wisdom.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-orange-400 focus:bg-white/15 transition-all duration-300"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 AyurVeda Wellness Center. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-white/60 hover:text-orange-400 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-orange-400 text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-white/60 hover:text-orange-400 text-sm transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
