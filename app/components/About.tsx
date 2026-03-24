import { ImageWithFallback } from './figma/ImageWithFallback';
import { Flame, Award, Utensils } from 'lucide-react';

export function About() {
  const kitchenImage = "https://images.unsplash.com/photo-1730082311706-b6525f2febfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwY2hhcmNvYWx8ZW58MXx8fHwxNzc0MDg0NzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={kitchenImage}
                alt="Köz charcoal grill kitchen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-stone-200 mb-6">
              <span className="text-gray-900 text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                Our Story
              </span>
            </div>

            <h2 
              className="text-5xl md:text-6xl mb-6 text-gray-900 leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Tradition Meets
              <br />
              <span className="font-semibold">Excellence</span>
            </h2>

            <p 
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              KÖZ brings the authentic flavors of Turkish cuisine to Oakham, combining centuries-old recipes with premium halal ingredients. Our charcoal grill technique, passed down through generations, creates the distinctive smoky flavor that makes our dishes unforgettable.
            </p>

            <p 
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Every dish is prepared fresh daily with care and passion, honoring the rich culinary heritage of Turkey while serving the heart of Rutland.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-stone-200 text-gray-900 rounded-full mb-3">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Charcoal Grill
                </h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Traditional method
                </p>
              </div>

              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-stone-200 text-gray-900 rounded-full mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Halal Certified
                </h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  100% guaranteed
                </p>
              </div>

              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-stone-200 text-gray-900 rounded-full mb-3">
                  <Utensils className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Fresh Daily
                </h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Quality ingredients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}