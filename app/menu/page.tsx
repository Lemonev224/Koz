import { FullMenu } from '../components/FullMenu';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
 
export const metadata = {
  title: 'Menu — KÖZ Authentic Turkish Charcoal Grill',
  description: 'Full menu of authentic Turkish dishes at KÖZ, Oakham.',
};
 
export default function MenuPage() {
  return (
    <div className="size-full">
      <Navbar />
 
      {/* Page header */}
      <div className="bg-black pt-28 pb-12 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-stone-400 hover:text-white text-sm uppercase tracking-wider transition-colors mb-6"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        <h1
          className="text-6xl md:text-7xl text-white"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Our Menu
        </h1>
        <p
          className="text-stone-400 mt-4 text-lg max-w-xl mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          All dishes are freshly prepared using authentic recipes and premium halal ingredients.
        </p>
      </div>
 
      <FullMenu />
      <Footer />
    </div>
  );
}