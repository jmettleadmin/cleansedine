import { Link } from 'wouter';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/lib/cart-context';

export default function Header() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-6">
        <Link href="/" data-testid="link-home">
          <div className="flex items-center gap-2 cursor-pointer">
            <Heart className="h-8 w-8 text-primary fill-primary" />
            <span className="text-2xl font-heading font-bold text-foreground">BioPets</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" data-testid="link-shop">
            <span className="text-sm font-medium cursor-pointer hover-elevate px-3 py-2 rounded-md">Shop</span>
          </Link>
          <Link href="/about" data-testid="link-about">
            <span className="text-sm font-medium cursor-pointer hover-elevate px-3 py-2 rounded-md">About</span>
          </Link>
          <Link href="/testimonials" data-testid="link-testimonials">
            <span className="text-sm font-medium cursor-pointer hover-elevate px-3 py-2 rounded-md">Testimonials</span>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/cart" data-testid="link-cart">
            <Button variant="ghost" size="icon" className="relative" data-testid="button-cart">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  data-testid="badge-cart-count"
                >
                  {itemCount}
                </Badge>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
