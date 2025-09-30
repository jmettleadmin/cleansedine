import TestimonialCard from '../TestimonialCard';
import testimonialImage from '@assets/generated_images/Man_with_cat_testimonial_3b16d457.png';

export default function TestimonialCardExample() {
  return (
    <div className="p-6 max-w-md">
      <TestimonialCard
        name="Carlos Santos"
        petName="Whiskers"
        image={testimonialImage}
        text="BioPets supplements have made such a difference in my cat's health. His coat is shinier and he's more playful than ever!"
        rating={5}
      />
    </div>
  );
}
