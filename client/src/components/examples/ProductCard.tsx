import ProductCard from '../ProductCard';
import { CartProvider } from '@/lib/cart-context';
import { products } from '@/data/products';

export default function ProductCardExample() {
  return (
    <CartProvider>
      <div className="p-6 max-w-sm">
        <ProductCard product={products[0]} />
      </div>
    </CartProvider>
  );
}
