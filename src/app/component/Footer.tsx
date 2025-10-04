// components/Footer.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

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
          <div>
            <Link href="/" className="flex items-center space-x-3 group mb-6">
              <div className="relative">
                <div className="w-15 h-15 p-2 group-hover:shadow-orange-500/25 transition-all duration-300 group-hover:scale-105">
                  <Image
                    src="/logo.avif"
                    alt="Shree Samadhan Ayurveda"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </Link>
            <h3 className="text-lg font-semibold mb-3 font-philosopher">Shree Samadhan Hospital Of Ayurveda</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Traditional Ayurvedic healing for modern wellness needs
            </p>
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
            <h4 className="text-lg font-semibold mb-6 font-philosopher">Our Locations</h4>
            <div className="space-y-6">
              {/* Main Branch */}
              <div>
                <h5 className="text-white font-semibold mb-3 text-sm">Main Branch - Dehradun</h5>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white/80 text-sm leading-relaxed">
                    Vansh Tower, 1st Floor, 3 EC Road,<br />
                    Next to Udupi Cafe and Restaurant,<br />
                    Dehradun, Uttarakhand
                  </p>
                </div>
              </div>

              {/* Rishikesh Branch */}
              <div>
                <h5 className="text-white font-semibold mb-3 text-sm">Rishikesh Branch</h5>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Avlokan Clinic<br />
                      58, Railway Road, Ambedkar Chowk,<br />
                      Next to Burger Singh, Near Neeraj Bhawan,<br />
                      Rishikesh
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">+91 74540 58199</p>
                </div>
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

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 Shree Samadhan Hospital Of Ayurveda. All rights reserved.
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
