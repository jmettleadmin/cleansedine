import { Link } from 'wouter';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-primary fill-primary" />
              <span className="text-xl font-heading font-bold">BioPets</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium pet grooming, oral care, and disinfectant products for your furry family members.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" data-testid="link-footer-shop">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">Shop</span>
                </Link>
              </li>
              <li>
                <Link href="/about" data-testid="link-footer-about">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/testimonials" data-testid="link-footer-testimonials">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">Testimonials</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shipping-returns" data-testid="link-footer-shipping">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">Shipping & Returns</span>
                </Link>
              </li>
              <li>
                <Link href="/faqs" data-testid="link-footer-faqs">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">FAQs</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" data-testid="link-footer-privacy">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">Privacy Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                [email protected]
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +63 917 123 4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Manila, Philippines
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BioPets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
