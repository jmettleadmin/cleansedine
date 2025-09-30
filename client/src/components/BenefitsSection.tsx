import { Card, CardContent } from '@/components/ui/card';
import { Leaf, ShieldCheck, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: 'Natural Ingredients',
    description: 'Only the finest natural and organic ingredients in every product.',
  },
  {
    icon: ShieldCheck,
    title: 'Vet Approved',
    description: 'Formulated and approved by licensed veterinarians.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Crafted with care for the health and happiness of your pets.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="text-center hover-elevate" data-testid={`card-benefit-${index}`}>
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3" data-testid={`text-benefit-title-${index}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`text-benefit-description-${index}`}>
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
