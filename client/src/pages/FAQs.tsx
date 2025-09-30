import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-heading font-bold mb-4" data-testid="text-faqs-title">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Find answers to common questions about our products and services
          </p>

          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">Products</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger data-testid="faq-trigger-products-safe">
                    Are BioPets products safe for all pets?
                  </AccordionTrigger>
                  <AccordionContent data-testid="faq-content-products-safe">
                    Yes, all BioPets products are veterinarian-approved and safe for use on dogs, cats, and other small animals. Our formulations use pet-safe ingredients that are effective yet gentle. However, always follow the usage instructions and consult your veterinarian if your pet has specific health conditions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What is Chlorhexidine Gluconate?</AccordionTrigger>
                  <AccordionContent>
                    Chlorhexidine Gluconate is a safe, effective antiseptic and disinfectant commonly used in veterinary medicine. It has broad-spectrum antimicrobial properties that help kill bacteria, fungi, and viruses. Our products use pharmaceutical-grade Chlorhexidine Gluconate at safe concentrations (0.5% w/v) recommended for pets.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How often should I use Cleansedine products?</AccordionTrigger>
                  <AccordionContent>
                    For Cleansedine Antiseptic/Disinfectant Solution, you can use it daily for cleaning wounds, skin irritations, or general disinfection. For Cleansedine Oral Care, use 2-3 times per week for routine oral hygiene, or as recommended by your veterinarian. Always follow the specific usage instructions on each product label.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Can I use Fur-tastic Medicated Shampoo on puppies and kittens?</AccordionTrigger>
                  <AccordionContent>
                    Fur-tastic Medicated Shampoo is generally safe for puppies and kittens over 8 weeks old. For younger animals or pets with sensitive skin, please consult your veterinarian first. Always avoid contact with eyes, ears, and mouth during bathing.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I store BioPets products?</AccordionTrigger>
                  <AccordionContent>
                    Store all BioPets products in a cool, dry place away from direct sunlight. Keep containers tightly closed when not in use. Store out of reach of children and pets. Do not refrigerate or freeze. Check the expiration date on each product and dispose of properly after expiration.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">Orders & Shipping</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-6">
                  <AccordionTrigger>How long does delivery take?</AccordionTrigger>
                  <AccordionContent>
                    Metro Manila deliveries typically arrive within 1-2 business days. Provincial deliveries take 3-5 business days. Orders are processed within 1 business day (excluding weekends and holidays). You'll receive a tracking number once your order ships.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>Do you offer free shipping?</AccordionTrigger>
                  <AccordionContent>
                    Yes! We offer FREE shipping on all orders over ₱5,000.00 anywhere in the Philippines. For orders below ₱5,000, shipping fees range from ₱150-₱250 depending on your location.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>Can I change or cancel my order?</AccordionTrigger>
                  <AccordionContent>
                    You can change or cancel your order within 2 hours of placing it by contacting our customer service team immediately. Once your order is processed and shipped, we cannot cancel it, but you can return it following our return policy.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit and debit cards (Visa, Mastercard), as well as popular e-wallets including GCash, GrabPay, and Maya. All payments are processed securely through Paymongo.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">Returns & Support</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-10">
                  <AccordionTrigger>What is your return policy?</AccordionTrigger>
                  <AccordionContent>
                    We accept returns within 7 days of delivery for unopened, unused products in original packaging. Products must have intact seals and include the original receipt. Opened or used products cannot be returned for safety and hygiene reasons. See our Shipping & Returns page for full details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11">
                  <AccordionTrigger>What if I receive a damaged product?</AccordionTrigger>
                  <AccordionContent>
                    If you receive a damaged or defective product, please contact us within 48 hours of delivery with photos of the item and packaging. We'll arrange for a free replacement or full refund, including shipping costs. Your satisfaction is our priority!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-12">
                  <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
                  <AccordionContent>
                    You can reach our customer support team via email at [email protected] or call us at +63 917 123 4567. We're available Monday through Friday, 9:00 AM to 6:00 PM (PHT). We typically respond to emails within 24 hours.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-13">
                  <AccordionTrigger>Do you offer bulk discounts for veterinary clinics or pet shops?</AccordionTrigger>
                  <AccordionContent>
                    Yes! We offer special pricing for veterinary clinics, pet shops, groomers, and other businesses. Please contact us at [email protected] with details about your business and volume requirements for a custom quote.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
