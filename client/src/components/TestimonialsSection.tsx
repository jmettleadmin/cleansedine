import TestimonialCard from './TestimonialCard';
import testimonial1 from '@assets/generated_images/Man_with_cat_testimonial_3b16d457.png';
import testimonial2 from '@assets/generated_images/Woman_with_beagle_testimonial_9386d2ee.png';
import testimonial3 from '@assets/generated_images/Elderly_couple_with_dog_testimonial_637d594e.png';

const testimonials = [
  {
    name: 'Carlos Santos',
    petName: 'Whiskers',
    image: testimonial1,
    text: 'Cleansedine Oral Care has been a game-changer for my cat\'s dental hygiene. His breath is fresher and the vet noticed less plaque buildup!',
    rating: 5,
  },
  {
    name: 'Maria Reyes',
    petName: 'Buddy',
    image: testimonial2,
    text: 'Fur-tastic Medicated Shampoo cleared up my beagle\'s skin issues within weeks. His coat is healthier and he\'s not scratching anymore!',
    rating: 5,
  },
  {
    name: 'Roberto & Elena Cruz',
    petName: 'Max',
    image: testimonial3,
    text: 'We use Cleansedine Antiseptic Solution for cleaning Max\'s paws after walks. It\'s gentle, effective, and we trust it completely for our senior dog.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4" data-testid="text-testimonials-title">
            Happy Pets, Happy Owners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-subtitle">
            Join thousands of pet parents who trust BioPets for their furry family members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
