import { ArrowRight } from 'lucide-react';

export function OrderBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 
          className="text-5xl md:text-6xl lg:text-7xl text-stone-100 mb-6"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Hungry? Order Now
        </h2>
        
        <p 
          className="text-xl md:text-2xl text-stone-300 mb-10 max-w-3xl mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Order directly through Ordara — no third-party fees, just great food at great prices.
        </p>

        <a 
          href="https://ordara.co.uk" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-12 py-5 bg-white hover:bg-stone-200 text-black font-semibold text-xl uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-xl"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Order online now
          <ArrowRight className="w-6 h-6" />
        </a>

        <p 
          className="mt-6 text-sm text-stone-400"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Support local • Save on fees • Fast delivery
        </p>
      </div>
    </section>
  );
}