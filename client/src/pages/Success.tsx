import { Link } from 'wouter';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Package, Mail } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export default function Success() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  const orderNumber = `BP${Date.now().toString().slice(-8)}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
              <h1 className="text-4xl font-heading font-bold mb-4" data-testid="text-success-title">
                Order Confirmed!
              </h1>
              <p className="text-lg text-muted-foreground mb-8" data-testid="text-success-message">
                Thank you for your purchase. Your order has been successfully placed.
              </p>

              <div className="bg-muted/30 rounded-lg p-6 mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Package className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Order Number</span>
                </div>
                <p className="text-2xl font-bold font-mono" data-testid="text-order-number">
                  {orderNumber}
                </p>
              </div>

              <div className="space-y-4 text-left mb-8">
                <div className="flex gap-4">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Confirmation Email</h3>
                    <p className="text-sm text-muted-foreground">
                      We've sent an order confirmation to your email with all the details.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Package className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Estimated Delivery</h3>
                    <p className="text-sm text-muted-foreground">
                      Your order will arrive within 3-5 business days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" data-testid="link-continue-shopping-success">
                  <Button size="lg" data-testid="button-continue-shopping-success">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
