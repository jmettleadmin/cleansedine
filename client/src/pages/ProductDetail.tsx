import { useState } from 'react';
import { useRoute, Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus, ShoppingCart, ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/lib/cart-context';
import { useToast } from '@/hooks/use-toast';

export default function ProductDetail() {
  const [, params] = useRoute('/product/:id');
  const product = products.find(p => p.id === params?.id);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { toast } = useToast();

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-heading font-bold mb-4">Product not found</h2>
            <Link href="/">
              <Button>Back to Shop</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product.id);
    }
    toast({
      title: 'Added to cart',
      description: `${quantity} × ${product.name} added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-6">
          <Link href="/" data-testid="link-back-to-shop">
            <Button variant="ghost" className="mb-6" data-testid="button-back-to-shop">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-lg"
                data-testid="img-product-detail"
              />
            </div>

            <div>
              <Badge variant="secondary" className="mb-4" data-testid="badge-product-category">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-heading font-bold mb-4" data-testid="text-product-detail-name">
                {product.name}
              </h1>
              <div className="text-3xl font-bold text-primary mb-6" data-testid="text-product-detail-price">
                ₱{(product.price / 100).toFixed(2)}
              </div>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold mb-3">Description</h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid="text-product-detail-description">
                    {product.description}
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold mb-3">Stock Status</h3>
                  {product.inStock ? (
                    <Badge variant="default" data-testid="badge-in-stock">In Stock</Badge>
                  ) : (
                    <Badge variant="secondary" data-testid="badge-out-of-stock">Out of Stock</Badge>
                  )}
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-semibold">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={!product.inStock}
                      data-testid="button-decrease-quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium" data-testid="text-quantity-display">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={!product.inStock}
                      data-testid="button-increase-quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  data-testid="button-add-to-cart-detail"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
