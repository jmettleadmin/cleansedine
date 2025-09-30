import { useState } from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Smartphone } from 'lucide-react';
import { SiMastercard, SiVisa } from 'react-icons/si';
import { useCart } from '@/lib/cart-context';
import { products } from '@/data/products';

export default function Checkout() {
  const { items } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  const cartProducts = items.map(item => ({
    ...products.find(p => p.id === item.productId)!,
    quantity: item.quantity,
  }));

  const subtotal = cartProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 5000 ? 0 : 200;
  const total = subtotal + shipping;

  const handlePaymentMethodSelect = (method: string) => {
    setPaymentMethod(method);
    console.log('Payment method selected:', method);
  };

  const handleSubmitOrder = () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    setIsProcessing(true);
    console.log('Processing order with Paymongo:', {
      items,
      total,
      paymentMethod,
    });

    setTimeout(() => {
      window.location.href = '/success';
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-heading font-bold mb-8" data-testid="text-checkout-title">
            Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle data-testid="text-contact-title">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Juan" data-testid="input-first-name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Dela Cruz" data-testid="input-last-name" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="[email protected]" data-testid="input-email" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+63 917 123 4567" data-testid="input-phone" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle data-testid="text-shipping-title">Shipping Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" placeholder="123 Main Street" data-testid="input-address" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Manila" data-testid="input-city" />
                    </div>
                    <div>
                      <Label htmlFor="postal">Postal Code</Label>
                      <Input id="postal" placeholder="1000" data-testid="input-postal" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle data-testid="text-payment-title">Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant={paymentMethod === 'card' ? 'default' : 'outline'}
                    className="w-full justify-start gap-3 h-auto py-4"
                    onClick={() => handlePaymentMethodSelect('card')}
                    data-testid="button-payment-card"
                  >
                    <CreditCard className="h-5 w-5" />
                    <span className="flex-1 text-left">Credit / Debit Card</span>
                    <div className="flex gap-2">
                      <SiVisa className="h-6 w-6" />
                      <SiMastercard className="h-6 w-6" />
                    </div>
                  </Button>
                  <Button
                    variant={paymentMethod === 'gcash' ? 'default' : 'outline'}
                    className="w-full justify-start gap-3 h-auto py-4"
                    onClick={() => handlePaymentMethodSelect('gcash')}
                    data-testid="button-payment-gcash"
                  >
                    <Smartphone className="h-5 w-5" />
                    <span className="flex-1 text-left">GCash</span>
                  </Button>
                  <Button
                    variant={paymentMethod === 'grabpay' ? 'default' : 'outline'}
                    className="w-full justify-start gap-3 h-auto py-4"
                    onClick={() => handlePaymentMethodSelect('grabpay')}
                    data-testid="button-payment-grabpay"
                  >
                    <Smartphone className="h-5 w-5" />
                    <span className="flex-1 text-left">GrabPay</span>
                  </Button>
                  <Button
                    variant={paymentMethod === 'paymaya' ? 'default' : 'outline'}
                    className="w-full justify-start gap-3 h-auto py-4"
                    onClick={() => handlePaymentMethodSelect('paymaya')}
                    data-testid="button-payment-paymaya"
                  >
                    <Smartphone className="h-5 w-5" />
                    <span className="flex-1 text-left">Maya</span>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle data-testid="text-order-summary-checkout-title">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {cartProducts.map(product => (
                      <div key={product.id} className="flex justify-between text-sm" data-testid={`item-summary-${product.id}`}>
                        <span className="text-muted-foreground">
                          {product.name} × {product.quantity}
                        </span>
                        <span className="font-medium">₱{((product.price * product.quantity) / 100).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium" data-testid="text-checkout-subtotal">₱{(subtotal / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium" data-testid="text-checkout-shipping">
                        {shipping === 0 ? 'FREE' : `₱${(shipping / 100).toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-2xl font-bold text-primary" data-testid="text-checkout-total">
                        ₱{(total / 100).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardContent className="pt-0 space-y-3">
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={handleSubmitOrder}
                    disabled={isProcessing || !paymentMethod}
                    data-testid="button-place-order"
                  >
                    {isProcessing ? 'Processing...' : 'Place Order'}
                  </Button>
                  <Link href="/cart" data-testid="link-back-to-cart">
                    <Button variant="outline" className="w-full" data-testid="button-back-to-cart">
                      Back to Cart
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
