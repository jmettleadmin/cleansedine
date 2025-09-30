import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BenefitsSection from '@/components/BenefitsSection';
import ProductGrid from '@/components/ProductGrid';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { products } from '@/data/products';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <BenefitsSection />
        <ProductGrid products={products} />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
