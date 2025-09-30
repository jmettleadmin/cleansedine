import { useState, FormEvent } from 'react';
import { Link, useLocation } from 'wouter';
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
import { useToast } from '@/hooks/use-toast';

export default function Checkout() {
  const { items, clearCart } = useCart();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postal: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const cartProducts = items.map(item => ({
    ...products.find(p => p.id === item.productId)!,
    quantity: item.quantity,
  }));

  const subtotal = cartProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 5000 ? 0 : 200;
  const total = subtotal + shipping;

  const handlePaymentMethodSelect = (method: string) => {
    setPaymentMethod(method);
    setErrors(prev => ({ ...prev, paymentMethod: '' }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^(\+63|0)[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid Philippine phone number';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Street address is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.postal.trim()) {
      newErrors.postal = 'Postal code is required';
    } else if (!/^[0-9]{4}$/.test(formData.postal)) {
      newErrors.postal = 'Postal code must be 4 digits';
    }
    if (!paymentMethod) {
      newErrors.paymentMethod = 'Please select a payment method';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleSubmitOrder = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all required fields correctly',
        variant: 'destructive'
      });
      return;
    }

    setIsProcessing(true);

    try {
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: total,
          paymentMethod,
          customerInfo: {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
          },
          shippingAddress: {
            address: formData.address,
            city: formData.city,
            postal: formData.postal,
          },
          items: cartProducts.map(p => ({
            name: p.name,
            quantity: p.quantity,
            amount: p.price,
          })),
        }),
      });

      const data = await response.json();

      if (response.ok && data.checkoutUrl) {
        // Redirect to Paymongo checkout page
        window.location.href = data.checkoutUrl;
      } else {
        throw new Error(data.error || 'Payment creation failed');
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: 'Payment Error',
        description: error instanceof Error ? error.message : 'Failed to process payment. Please try again.',
        variant: 'destructive'
      });
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-heading font-bold mb-4">Your cart is empty</h2>
            <Link href="/">
              <Button>Back to Shop</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-heading font-bold mb-8" data-testid="text-checkout-title">
            Checkout
          </h1>

          <form onSubmit={handleSubmitOrder}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle data-testid="text-contact-title">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          placeholder="Juan"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className={errors.firstName ? 'border-red-500' : ''}
                          data-testid="input-first-name"
                        />
                        {errors.firstName && (
                          <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          placeholder="Dela Cruz"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className={errors.lastName ? 'border-red-500' : ''}
                          data-testid="input-last-name"
                        />
                        {errors.lastName && (
                          <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="[email protected]"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={errors.email ? 'border-red-500' : ''}
                        data-testid="input-email"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+63 917 123 4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={errors.phone ? 'border-red-500' : ''}
                        data-testid="input-phone"
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle data-testid="text-shipping-title">Shipping Address</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        placeholder="123 Main Street"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className={errors.address ? 'border-red-500' : ''}
                        data-testid="input-address"
                      />
                      {errors.address && (
                        <p className="text-sm text-red-500 mt-1">{errors.address}</p>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          placeholder="Manila"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className={errors.city ? 'border-red-500' : ''}
                          data-testid="input-city"
                        />
                        {errors.city && (
                          <p className="text-sm text-red-500 mt-1">{errors.city}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="postal">Postal Code *</Label>
                        <Input
                          id="postal"
                          placeholder="1000"
                          value={formData.postal}
                          onChange={(e) => handleInputChange('postal', e.target.value)}
                          className={errors.postal ? 'border-red-500' : ''}
                          data-testid="input-postal"
                        />
                        {errors.postal && (
                          <p className="text-sm text-red-500 mt-1">{errors.postal}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle data-testid="text-payment-title">Payment Method *</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button
                      type="button"
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
                      type="button"
                      variant={paymentMethod === 'gcash' ? 'default' : 'outline'}
                      className="w-full justify-start gap-3 h-auto py-4"
                      onClick={() => handlePaymentMethodSelect('gcash')}
                      data-testid="button-payment-gcash"
                    >
                      <Smartphone className="h-5 w-5" />
                      <span className="flex-1 text-left">GCash</span>
                    </Button>
                    <Button
                      type="button"
                      variant={paymentMethod === 'grabpay' ? 'default' : 'outline'}
                      className="w-full justify-start gap-3 h-auto py-4"
                      onClick={() => handlePaymentMethodSelect('grabpay')}
                      data-testid="button-payment-grabpay"
                    >
                      <Smartphone className="h-5 w-5" />
                      <span className="flex-1 text-left">GrabPay</span>
                    </Button>
                    <Button
                      type="button"
                      variant={paymentMethod === 'paymaya' ? 'default' : 'outline'}
                      className="w-full justify-start gap-3 h-auto py-4"
                      onClick={() => handlePaymentMethodSelect('paymaya')}
                      data-testid="button-payment-paymaya"
                    >
                      <Smartphone className="h-5 w-5" />
                      <span className="flex-1 text-left">Maya</span>
                    </Button>
                    {errors.paymentMethod && (
                      <p className="text-sm text-red-500">{errors.paymentMethod}</p>
                    )}
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
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={isProcessing}
                      data-testid="button-place-order"
                    >
                      {isProcessing ? 'Processing...' : 'Place Order'}
                    </Button>
                    <Link href="/cart" data-testid="link-back-to-cart">
                      <Button type="button" variant="outline" className="w-full" data-testid="button-back-to-cart">
                        Back to Cart
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
