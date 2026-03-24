import { ArrowRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <h3 
              className="text-4xl mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              KÖZ
            </h3>
            <p 
              className="text-gray-400 text-sm leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Authentic Turkish cuisine in the heart of Rutland. Charcoal grilled perfection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-lg mb-4 font-semibold"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#find-us" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Find Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="text-lg mb-4 font-semibold"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>2 High Street</li>
              <li>Oakham, Rutland</li>
              <li>LE15 6AL</li>
              <li className="pt-2">
                <a href="tel:+441572123456" className="hover:text-white transition-colors">
                 01572 827 820
                </a>
              </li>
            </ul>
          </div>

          {/* Order CTA */}
          <div>
            <h4 
              className="text-lg mb-4 font-semibold"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Order Online
            </h4>
            <a 
              href="https://ordara.co.uk" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-stone-200 text-black font-medium text-sm uppercase tracking-wider transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Order now
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-gray-500 mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              No fees • Direct ordering
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <p>© {currentYear} Köz Restaurant. All rights reserved.</p>
          <p>
            Made by{' '}
            <a href="https://www.verodigital.uk/" className="text-white hover:text-stone-300 transition-colors">
              Vero Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}