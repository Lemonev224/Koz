'use client';
 
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
 
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="KÖZ Authentic Turkish Charcoal Grill"
              width={56}
              height={56}
            />
          </Link>
 
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/menu"
              className="text-sm font-medium text-white hover:text-stone-300 transition-colors uppercase tracking-wider"
            >
              Menu
            </Link>
            <a
              href="/#about"
              className="text-sm font-medium text-white hover:text-stone-300 transition-colors uppercase tracking-wider"
            >
              About
            </a>
            <a
              href="/#find-us"
              className="text-sm font-medium text-white hover:text-stone-300 transition-colors uppercase tracking-wider"
            >
              Find us
            </a>
 
            {/* Order Now CTA */}
            <a
              href="https://ordara.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-stone-200 text-black font-medium text-sm uppercase tracking-wider transition-all duration-300"
            >
              Order now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
 
          {/* Mobile Order Button */}
          <a
            href="https://ordara.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center gap-2 px-5 py-2 bg-white hover:bg-stone-200 text-black font-medium text-sm uppercase tracking-wider transition-all duration-300"
          >
            Order
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}