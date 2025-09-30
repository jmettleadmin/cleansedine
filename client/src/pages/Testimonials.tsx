import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-5xl font-heading font-bold mb-6" data-testid="text-testimonials-page-title">
                Customer Testimonials
              </h1>
              <p className="text-xl text-muted-foreground" data-testid="text-testimonials-page-subtitle">
                Hear from pet parents who've seen the BioPets difference in their furry friends' lives.
              </p>
            </div>
          </div>
        </section>
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
