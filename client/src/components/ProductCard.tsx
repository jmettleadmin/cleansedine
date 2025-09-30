import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '@shared/schema';
import { useCart } from '@/lib/cart-context';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem(product.id);
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="group overflow-hidden hover-elevate" data-testid={`card-product-${product.id}`}>
      <Link href={`/product/${product.id}`} data-testid={`link-product-${product.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-testid={`img-product-${product.id}`}
          />
          {!product.inStock && (
            <Badge
              variant="secondary"
              className="absolute top-3 right-3"
              data-testid={`badge-out-of-stock-${product.id}`}
            >
              Out of Stock
            </Badge>
          )}
        </div>
      </Link>

      <CardContent className="p-6">
        <Badge variant="secondary" className="mb-3" data-testid={`badge-category-${product.id}`}>
          {product.category}
        </Badge>
        <Link href={`/product/${product.id}`}>
          <h3 className="text-xl font-heading font-semibold mb-2 cursor-pointer hover:text-primary transition-colors" data-testid={`text-product-name-${product.id}`}>
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4" data-testid={`text-product-description-${product.id}`}>
          {product.description}
        </p>
        <div className="text-2xl font-bold text-primary" data-testid={`text-product-price-${product.id}`}>
          ₱{(product.price / 100).toFixed(2)}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          className="w-full"
          onClick={handleAddToCart}
          disabled={!product.inStock}
          data-testid={`button-add-to-cart-${product.id}`}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  );
}
