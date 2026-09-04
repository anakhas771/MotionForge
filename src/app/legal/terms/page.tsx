import { Metadata } from "next";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Terms of Service | MotionForge",
  description: "Terms of Service for using MotionForge.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12 text-muted leading-relaxed">
            <div className="border-b border-border pb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
              <p className="text-lg">Effective Date: September 2026</p>
            </div>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing and using MotionForge (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Description of the Service</h2>
              <p>
                MotionForge provides a digital library of UI animation components, code snippets, and related resources designed for modern web development.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Accounts and User Responsibilities</h2>
              <p>
                To access premium components, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and complete information when registering.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Purchases and Payments</h2>
              <p>
                All purchases are processed securely through our authorized payment providers. Prices are subject to change. Access to premium content is granted immediately upon successful payment verification.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Digital Products and Downloads</h2>
              <p>
                Due to the nature of digital goods, all sales are considered final once the digital content has been accessed or downloaded, unless otherwise specified in our refund policy or required by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by MotionForge and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Acceptable Use</h2>
              <p>
                You agree not to use the Service to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Redistribute or resell the components as a competing library.</li>
                <li>Attempt to bypass or hack any security mechanisms of the Service.</li>
                <li>Use the components in a way that violates the applicable License Agreement.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Third-Party Services</h2>
              <p>
                Our Service may contain links to third-party web sites or services that are not owned or controlled by MotionForge. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Disclaimer of Warranties</h2>
              <p>
                The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. MotionForge makes no representations or warranties of any kind, express or implied, as to the operation of their services, or the information, content or materials included therein.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Limitation of Liability</h2>
              <p>
                In no event shall MotionForge, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. Changes to These Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes by posting the new Terms on this page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">13. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us through our official support channels.
              </p>
            </section>

            <div className="mt-16 p-4 bg-surface border border-border rounded-lg text-sm">
              <strong className="text-foreground">Disclaimer:</strong> This is a generic Terms of Service template. It should be reviewed and adapted by legal counsel for the actual business and legal requirements before production use.
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
