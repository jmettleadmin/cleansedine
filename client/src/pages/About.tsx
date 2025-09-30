import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import aboutImage from '@assets/generated_images/BioPets_team_and_quality_care_5c0fdf23.png';

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
                Dedicated to the health and happiness of your furry family members
              </p>

              <div className="mb-12">
                <img
                  src={aboutImage}
                  alt="BioPets team and facilities"
                  className="w-full rounded-lg shadow-lg"
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
                      At BioPets, we believe that pets are family. Our mission is to provide the highest quality,
                      natural nutrition and wellness products that help your pets live longer, healthier, and happier lives.
                      Every product is carefully formulated with premium ingredients and approved by licensed veterinarians.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-heading font-semibold mb-4" data-testid="text-about-quality-title">
                      Our Commitment to Quality
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-about-quality-content">
                      We source only the finest natural and organic ingredients from trusted suppliers. Each batch
                      undergoes rigorous testing to ensure purity, potency, and safety. Our state-of-the-art facility
                      follows strict manufacturing standards to deliver products you can trust.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>100% natural and organic ingredients</li>
                      <li>Veterinarian formulated and approved</li>
                      <li>Third-party tested for quality and safety</li>
                      <li>Made in GMP-certified facilities</li>
                      <li>No artificial colors, flavors, or preservatives</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-heading font-semibold mb-4" data-testid="text-about-story-title">
                      Our Story
                    </h2>
                    <p className="text-muted-foreground leading-relaxed" data-testid="text-about-story-content">
                      BioPets was founded by a team of pet lovers who were frustrated by the lack of truly natural,
                      high-quality pet nutrition options in the Philippines. After years of research and collaboration
                      with veterinarians and pet nutritionists, we created a line of products that we're proud to give
                      to our own pets. Today, we're honored to serve thousands of pet families across the country.
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
