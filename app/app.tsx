import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuHighlights } from './components/MenuHighlights';
import { About } from './components/About';
import { OrderBanner } from './components/OrderBanner';
import { FindUs } from './components/FindUs';
import { Footer } from './components/Footer';
 
export default function App() {
  return (
    <div className="size-full">
      <Navbar />
      <Hero />
      <MenuHighlights />
      <About />
      <OrderBanner />
      <FindUs />
      <Footer />
    </div>
  );
}