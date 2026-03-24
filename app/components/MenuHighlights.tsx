import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function MenuHighlights() {
  const dishes = [
    {
      name: "Cold Mix Mezze",
      category: "Starters",
      image: "https://images.unsplash.com/photo-1763637674539-5ef67d4a4506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXp6ZSUyMHBsYXR0ZXIlMjBtZWRpdGVycmFuZWFufGVufDF8fHx8MTc3NDA4NDcxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Hummus, cacik, kisir, saksuka & tarama with bread"
    },
    {
      name: "Lamb Shish",
      category: "Charcoal Grills",
      image: "https://images.unsplash.com/photo-1749802585605-a459271b4358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW1iJTIwc2hpc2glMjBrZWJhYiUyMHNrZXdlcnxlbnwxfHx8fDE3NzQwODQ3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Tender cubes of marinated lamb on charcoal"
    },
    {
      name: "Adana Kebab",
      category: "Charcoal Grills",
      image: "https://images.unsplash.com/photo-1730082311711-8c8ad53eebfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGFuYSUyMGtlYmabiTIwZ3JpbGxlZCUyMG1lYXR8ZW58MXx8fHwxNzc0MDg0NzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Minced meat with herbs & spices on charcoal"
    },
    {
      name: "Baklava",
      category: "Desserts",
      image: "https://images.unsplash.com/photo-1654005104168-cc94abbfb70d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtsYXZhJTIwZGVzc2VydHxlbnwxfHx8fDE3NzQwMTk4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Filo pastry layered with chopped nuts & syrup"
    }
  ];

  return (
    <section id="menu" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-stone-200 mb-4">
            <span className="text-gray-900 text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our Menu
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl mb-6 text-gray-900"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Signature Dishes
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A taste of what awaits you. Each dish prepared fresh daily with authentic recipes and premium ingredients.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {dishes.map((dish, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-white shadow-lg mb-4 aspect-[4/5]">
                <ImageWithFallback
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-center">
                <p className="text-gray-900 text-xs font-semibold uppercase tracking-wider mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {dish.category}
                </p>
                <h3 className="text-2xl mb-2 text-gray-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {dish.name}
                </h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gray-900 hover:bg-gray-700 text-white font-semibold text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            See full menu
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
            View our complete menu with prices
          </p>
        </div>
      </div>
    </section>
  );
}