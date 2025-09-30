import TestimonialCard from './TestimonialCard';
import testimonial1 from '@assets/generated_images/Man_with_cat_testimonial_3b16d457.png';
import testimonial2 from '@assets/generated_images/Woman_with_beagle_testimonial_9386d2ee.png';
import testimonial3 from '@assets/generated_images/Elderly_couple_with_dog_testimonial_637d594e.png';

const testimonials = [
  {
    name: 'Carlos Santos',
    petName: 'Whiskers',
    image: testimonial1,
    text: 'BioPets supplements have made such a difference in my cat\'s health. His coat is shinier and he\'s more playful than ever!',
    rating: 5,
  },
  {
    name: 'Maria Reyes',
    petName: 'Buddy',
    image: testimonial2,
    text: 'I love that BioPets uses natural ingredients. My beagle has never been healthier, and I feel good about what I\'m giving him.',
    rating: 5,
  },
  {
    name: 'Roberto & Elena Cruz',
    petName: 'Max',
    image: testimonial3,
    text: 'Our senior dog Max has more energy now thanks to the joint support formula. We\'re so grateful to have found BioPets!',
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
