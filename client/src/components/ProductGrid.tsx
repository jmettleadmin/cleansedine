import ProductCard from './ProductCard';
import type { Product } from '@shared/schema';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="py-16" id="products">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4" data-testid="text-products-title">
            Our Premium Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-products-subtitle">
            Carefully formulated products to support your pet's health and happiness at every stage of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
