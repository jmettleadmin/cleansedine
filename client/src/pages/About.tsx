import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import aboutImage from '@assets/biopets_1759242906401.png';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-heading font-bold mb-6 text-center" data-testid="text-about-title">
                About BioPets
              </h1>
              <p className="text-xl text-muted-foreground text-center mb-12" data-testid="text-about-subtitle">
                Vet-Approved, Pet Adored. Care you can count on.
              </p>

              <div className="mb-12 bg-white rounded-lg p-8">
                <img
                  src={aboutImage}
                  alt="BioPets - Veterinary care products"
                  className="w-full max-w-2xl mx-auto"
                  data-testid="img-about-team"
                />
              </div>

              <div className="space-y-8">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-heading font-semibold mb-4" data-testid="text-about-mission-title">
                      Our Mission
                    </h2>
                    <p className="text-muted-foreground leading-relaxed" data-testid="text-about-mission-content">
                      At BioPets, we believe that pets deserve the best veterinary care products. Our mission is to provide 
                      professional-grade disinfectants, grooming solutions, and oral care products that keep your pets healthy, 
                      clean, and protected. Every product is veterinarian-approved and formulated with effective, pet-safe ingredients.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-heading font-semibold mb-4" data-testid="text-about-quality-title">
                      Our Commitment to Quality
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-about-quality-content">
                      BioPets products are formulated with pharmaceutical-grade active ingredients like Chlorhexidine Gluconate 
                      and Ketoconazole. Each product undergoes strict quality control to ensure effectiveness and safety for your 
                      beloved pets. Our antiseptic and disinfectant solutions are trusted by veterinarians and pet owners alike.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Veterinarian-approved formulations</li>
                      <li>Pharmaceutical-grade active ingredients</li>
                      <li>Effective against bacteria, fungi, and parasites</li>
                      <li>Safe for pets when used as directed</li>
                      <li>Alcohol-free, skin-friendly options available</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-heading font-semibold mb-4" data-testid="text-about-story-title">
                      Our Story
                    </h2>
                    <p className="text-muted-foreground leading-relaxed" data-testid="text-about-story-content">
                      BioPets was founded to bridge the gap between professional veterinary care and everyday pet maintenance. 
                      Working closely with veterinarians and pet care specialists in the Philippines, we developed a comprehensive 
                      line of disinfectants, medicated shampoos, and oral care solutions. From our Cleansedine antiseptic products 
                      to our Fur-tastic medicated shampoo and Purepet multi-surface disinfectant, each product is designed to provide 
                      veterinary-grade care that pet owners can trust and afford.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
