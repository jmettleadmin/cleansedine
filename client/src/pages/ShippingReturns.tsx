import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, RotateCcw, Clock, MapPin } from 'lucide-react';

export default function ShippingReturns() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-heading font-bold mb-8" data-testid="text-shipping-returns-title">
            Shipping & Returns
          </h1>

          <div className="grid gap-8 max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Package className="h-6 w-6 text-primary" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Delivery Coverage
                  </h3>
                  <p className="text-muted-foreground">
                    We deliver nationwide across the Philippines. Metro Manila deliveries are processed within 1-2 business days, while provincial deliveries take 3-5 business days.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Processing Time
                  </h3>
                  <p className="text-muted-foreground">
                    Orders are processed within 1 business day. Orders placed on weekends or holidays will be processed on the next business day.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Shipping Rates</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Metro Manila: ₱150.00</li>
                    <li>• Luzon: ₱200.00</li>
                    <li>• Visayas & Mindanao: ₱250.00</li>
                    <li>• <strong>FREE SHIPPING</strong> on orders over ₱5,000.00</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Order Tracking</h3>
                  <p className="text-muted-foreground">
                    Once your order is shipped, you'll receive a tracking number via email and SMS to monitor your delivery status.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <RotateCcw className="h-6 w-6 text-primary" />
                  Returns & Refunds
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Return Policy</h3>
                  <p className="text-muted-foreground mb-3">
                    We want you to be completely satisfied with your purchase. If you're not happy with your order, we accept returns within 7 days of delivery.
                  </p>
                  <p className="font-semibold mb-2">Items must be:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Unopened and unused</li>
                    <li>• In original packaging with all seals intact</li>
                    <li>• With original receipt or proof of purchase</li>
                    <li>• Free from any damage or tampering</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Non-Returnable Items</h3>
                  <p className="text-muted-foreground">
                    For safety and hygiene reasons, we cannot accept returns on opened or used products. Products with broken seals or damaged packaging cannot be returned.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Refund Process</h3>
                  <p className="text-muted-foreground mb-2">
                    Once we receive and inspect your returned item, we'll process your refund within 5-7 business days. Refunds will be issued to your original payment method.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Note: Shipping fees are non-refundable unless the return is due to our error or a defective product.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Damaged or Defective Products</h3>
                  <p className="text-muted-foreground">
                    If you receive a damaged or defective product, please contact us within 48 hours of delivery with photos of the item and packaging. We'll arrange for a replacement or full refund at no additional cost.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">How to Return</h3>
                  <ol className="space-y-1 text-muted-foreground list-decimal list-inside">
                    <li>Contact our customer service team at [email protected]</li>
                    <li>Provide your order number and reason for return</li>
                    <li>We'll provide you with return instructions and address</li>
                    <li>Ship the item back using a trackable shipping method</li>
                    <li>Once received, we'll process your refund or replacement</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Have questions about shipping or returns? We're here to help!
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: [email protected]</p>
                  <p>Phone: +63 917 123 4567</p>
                  <p>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM (PHT)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
