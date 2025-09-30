import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-heading font-bold mb-4" data-testid="text-privacy-policy-title">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: September 30, 2025</p>

          <Card className="max-w-4xl">
            <CardContent className="prose prose-sm max-w-none p-8">
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  BioPets ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and purchase our products.
                </p>
                <p className="text-muted-foreground">
                  By using our website, you consent to the practices described in this Privacy Policy. If you do not agree with this policy, please do not use our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                <p className="text-muted-foreground mb-3">
                  We collect information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>Place an order or make a purchase</li>
                  <li>Create an account</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact customer support</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="text-muted-foreground mb-3">This information may include:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Payment information (processed securely through Paymongo)</li>
                  <li>Order history and purchase preferences</li>
                  <li>Pet information (if provided for product recommendations)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
                <p className="text-muted-foreground mb-3">
                  When you visit our website, we automatically collect certain information about your device and browsing actions, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Device information and operating system</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-3">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Process and fulfill your orders</li>
                  <li>Send order confirmations and shipping updates</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Improve our website and product offerings</li>
                  <li>Send promotional emails (you can opt out anytime)</li>
                  <li>Prevent fraud and enhance security</li>
                  <li>Comply with legal obligations</li>
                  <li>Analyze website usage and trends</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Service Providers:</strong> We share information with trusted third-party service providers who assist us in operating our website, processing payments (Paymongo), and delivering products (shipping partners).</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner.</li>
                  <li><strong>Protection of Rights:</strong> We may disclose information to protect our rights, property, or safety, or that of our users or others.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure payment processing through PCI-compliant payment gateways</li>
                  <li>Regular security assessments and updates</li>
                  <li>Restricted access to personal information</li>
                </ul>
                <p className="text-muted-foreground">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">Your Privacy Rights</h2>
                <p className="text-muted-foreground mb-3">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>Access and review your personal information</li>
                  <li>Correct or update your information</li>
                  <li>Request deletion of your information (subject to legal obligations)</li>
                  <li>Opt out of marketing communications</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                </ul>
                <p className="text-muted-foreground">
                  To exercise these rights, please contact us at [email protected]. We will respond to your request within 30 days.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. Cookies are small text files stored on your device.
                </p>
                <p className="text-muted-foreground mb-3">We use the following types of cookies:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li><strong>Essential Cookies:</strong> Required for website functionality (e.g., shopping cart)</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
                <p className="text-muted-foreground">
                  You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our website is not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will delete the information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">Third-Party Links</h2>
                <p className="text-muted-foreground">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our website after changes are posted constitutes acceptance of the updated policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="text-muted-foreground space-y-2">
                  <p><strong>BioPets</strong></p>
                  <p>Email: [email protected]</p>
                  <p>Phone: +63 917 123 4567</p>
                  <p>Address: Manila, Philippines</p>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
