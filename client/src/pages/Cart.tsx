import { useState } from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { products } from '@/data/products';

export default function Cart() {
  const { items, updateQuantity, removeItem } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const cartProducts = items.map(item => ({
    ...products.find(p => p.id === item.productId)!,
    quantity: item.quantity,
  }));

  const subtotal = cartProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 5000 ? 0 : 200;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    setIsProcessing(true);
    console.log('Proceeding to checkout with items:', items);
    setTimeout(() => {
      window.location.href = '/checkout';
    }, 500);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-16 px-6">
            <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
            <h2 className="text-3xl font-heading font-bold mb-4" data-testid="text-empty-cart-title">
              Your cart is empty
            </h2>
            <p className="text-muted-foreground mb-8" data-testid="text-empty-cart-message">
              Add some products to get started!
            </p>
            <Link href="/" data-testid="link-continue-shopping-empty">
              <Button size="lg" data-testid="button-shop-now-empty">
                Start Shopping
              </Button>
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
          <h1 className="text-4xl font-heading font-bold mb-8" data-testid="text-cart-title">
            Shopping Cart
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartProducts.map(product => (
                <Card key={product.id} data-testid={`card-cart-item-${product.id}`}>
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-24 object-cover rounded-md"
                        data-testid={`img-cart-item-${product.id}`}
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-heading font-semibold mb-2" data-testid={`text-cart-item-name-${product.id}`}>
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3" data-testid={`text-cart-item-category-${product.id}`}>
                          {product.category}
                        </p>
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(product.id, product.quantity - 1)}
                              data-testid={`button-decrease-${product.id}`}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center font-medium" data-testid={`text-quantity-${product.id}`}>
                              {product.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(product.id, product.quantity + 1)}
                              data-testid={`button-increase-${product.id}`}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-xl font-bold" data-testid={`text-cart-item-price-${product.id}`}>
                              ₱{((product.price * product.quantity) / 100).toFixed(2)}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(product.id)}
                              data-testid={`button-remove-${product.id}`}
                            >
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle data-testid="text-order-summary-title">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium" data-testid="text-subtotal">₱{(subtotal / 100).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium" data-testid="text-shipping">
                      {shipping === 0 ? 'FREE' : `₱${(shipping / 100).toFixed(2)}`}
                    </span>
                  </div>
                  {subtotal < 5000 && (
                    <p className="text-xs text-muted-foreground">
                      Add ₱{((5000 - subtotal) / 100).toFixed(2)} more for free shipping!
                    </p>
                  )}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-2xl font-bold text-primary" data-testid="text-total">
                        ₱{(total / 100).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-3">
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={handleCheckout}
                    disabled={isProcessing}
                    data-testid="button-checkout"
                  >
                    {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
                  </Button>
                  <Link href="/" data-testid="link-continue-shopping">
                    <Button variant="outline" className="w-full" data-testid="button-continue-shopping">
                      Continue Shopping
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
