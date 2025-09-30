import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@assets/generated_images/Happy_pet_owner_with_dog_9f5fd36e.png';

export default function Hero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
      </div>

      <div className="relative container mx-auto h-full flex items-center px-6">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-6" data-testid="text-hero-title">
            Premium Nutrition for Your Best Friend
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed" data-testid="text-hero-subtitle">
            Natural ingredients, vet-approved formulas, and made with love for the health and happiness of your furry family members.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#products" data-testid="link-shop-now">
              <Button size="lg" className="text-lg px-8" data-testid="button-shop-now">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about" data-testid="link-learn-more">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 backdrop-blur-md bg-white/20 border-2 border-white text-white hover:bg-white/30"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
