import { Metadata } from "next";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "License | MotionForge",
  description: "License agreement for MotionForge components.",
};

export default function LicensePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12 text-muted leading-relaxed">
            <div className="border-b border-border pb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">MotionForge License</h1>
              <p className="text-lg">Effective Date: September 2026</p>
            </div>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Permitted Use</h2>
              <p>
                By downloading or copying components from MotionForge, you are granted a non-exclusive, non-transferable license to use the components in both personal and commercial projects. This includes integrating the code into websites, web applications, and digital products for yourself or your clients.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Modification</h2>
              <p>
                You are free to modify, adapt, and customize the downloaded components to suit the needs of your projects. You may change the styling, animation properties, and behavior without restriction, provided the usage still complies with the other terms of this license.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Restrictions</h2>
              <p>While you have broad usage rights, the following actions are strictly prohibited:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Redistribution:</strong> Do not redistribute the original files as a competing component library, template marketplace, or open-source repository.</li>
                <li><strong className="text-foreground">Reselling:</strong> Do not resell or sublicense individual components as standalone digital products.</li>
                <li><strong className="text-foreground">Authorship:</strong> Do not claim ownership or original authorship of the MotionForge component assets.</li>
                <li><strong className="text-foreground">Notices:</strong> Do not remove applicable copyright or license notices where required within the source code.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Commercial Projects</h2>
              <p>
                You may use MotionForge components in end-products that you sell or charge users to access (such as SaaS applications, premium themes, or client projects). The components must be integrated into a larger project and cannot be the primary value of the product being sold.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Ownership</h2>
              <p>
                MotionForge retains all intellectual property rights and ownership of the original component designs, source code, and assets. You are purchasing or accessing a license to use the components, not acquiring ownership of them.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Updates and Support</h2>
              <p>
                Access to the components includes updates and improvements to the existing library as they are released. Support is provided for integration and bug fixes related to the original provided code. We do not provide support for custom modifications made by the user.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
              <p>
                If you are unsure whether your intended use complies with this license, please reach out to our support team for clarification before proceeding.
              </p>
            </section>

            <div className="mt-16 p-4 bg-surface border border-border rounded-lg text-sm">
              <strong className="text-foreground">Disclaimer:</strong> This License agreement is a generic template. It should be reviewed and adapted by legal counsel for the actual business and legal requirements before production use.
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
