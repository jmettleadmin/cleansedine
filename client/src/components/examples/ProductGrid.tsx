import ProductGrid from '../ProductGrid';
import { CartProvider } from '@/lib/cart-context';
import { products } from '@/data/products';

export default function ProductGridExample() {
  return (
    <CartProvider>
      <ProductGrid products={products} />
    </CartProvider>
  );
}
