import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  petName: string;
  image: string;
  text: string;
  rating: number;
}

export default function TestimonialCard({ name, petName, image, text, rating }: TestimonialCardProps) {
  return (
    <Card className="hover-elevate" data-testid={`card-testimonial-${name.replace(/\s/g, '-').toLowerCase()}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-16 w-16" data-testid={`avatar-${name.replace(/\s/g, '-').toLowerCase()}`}>
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold text-lg" data-testid={`text-testimonial-name-${name.replace(/\s/g, '-').toLowerCase()}`}>{name}</h4>
            <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-pet-${name.replace(/\s/g, '-').toLowerCase()}`}>
              Owner of {petName}
            </p>
          </div>
        </div>

        <div className="flex gap-1 mb-3" data-testid={`rating-${name.replace(/\s/g, '-').toLowerCase()}`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? 'fill-primary text-primary' : 'text-muted'}`}
            />
          ))}
        </div>

        <p className="text-base leading-relaxed" data-testid={`text-testimonial-content-${name.replace(/\s/g, '-').toLowerCase()}`}>
          "{text}"
        </p>
      </CardContent>
    </Card>
  );
}
