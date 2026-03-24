import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, ArrowDown } from 'lucide-react';

export function Hero() {
  const heroImage = "https://images.unsplash.com/photo-1730082311706-b6525f2febfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwa2ViYWIlMjBjaGFyY29hbCUyMGdyaWxsfGVufDF8fHx8MTc3NDA4NDcxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div id="home" className="relative min-h-screen bg-black text-white pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={heroImage}
          alt="Charcoal grilled kebab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            {/* New Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/30 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <span className="text-white text-sm font-medium uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                Now open in Oakham
              </span>
            </div>

            {/* Headline */}
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Authentic
              <br />
              <span className="font-semibold">Charcoal Grilled</span>
              <br />
              Turkish Cuisine
            </h1>

            {/* Subtext */}
            <p 
              className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Experience the rich flavors of Turkey in the heart of Rutland. Traditional recipes, premium halal meats, authentic charcoal grill.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16" style={{ fontFamily: 'Inter, sans-serif' }}>
              <a 
                href="https://ordara.co.uk" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-stone-200 text-black font-semibold text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
              >
                Order online
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/menu"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white hover:bg-white hover:text-black text-white font-semibold text-lg uppercase tracking-wider transition-all duration-300"
              >
                View menu
              </a>
            </div>

            {/* Stats Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl md:text-4xl font-semibold text-white mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  100%
                </p>
                <p className="text-sm text-gray-400 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Halal Certified
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-semibold text-white mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  15+
                </p>
                <p className="text-sm text-gray-400 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Signature Dishes
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-semibold text-white mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Daily
                </p>
                <p className="text-sm text-gray-400 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Fresh Prep
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}