import { Metadata } from "next";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Privacy Policy | MotionForge",
  description: "Privacy Policy for using MotionForge.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12 text-muted leading-relaxed">
            <div className="border-b border-border pb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
              <p className="text-lg">Effective Date: September 2026</p>
            </div>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
              <p>
                MotionForge respects your privacy and is committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong className="text-foreground">Contact Data</strong> includes email address.</li>
                <li><strong className="text-foreground">Transaction Data</strong> includes details about payments to and from you and other details of products or services you have purchased from us.</li>
                <li><strong className="text-foreground">Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. How We Use Information</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., providing access to purchased components).</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Cookies and Similar Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Analytics and Third-Party Services</h2>
              <p>
                We may use third-party Service Providers to monitor and analyze the use of our Service, such as Vercel Web Analytics or similar platforms. These providers have their own privacy policies addressing how they use such information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Payments</h2>
              <p>
                We provide paid products and/or services. We use third-party services for payment processing (e.g., Stripe). We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Data Storage and Security</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Children&apos;s Privacy</h2>
              <p>
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Changes to This Privacy Policy</h2>
              <p>
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our official support channels.
              </p>
            </section>

            <div className="mt-16 p-4 bg-surface border border-border rounded-lg text-sm">
              <strong className="text-foreground">Disclaimer:</strong> This Privacy Policy is a generic template. It does not constitute legal advice and does not guarantee compliance with GDPR, CCPA, or other data protection regulations. It must be reviewed and adapted by legal counsel before production use.
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
