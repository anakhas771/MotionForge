"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";
import { Download, Calendar, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (mounted && !user) {
      router.push("/login");
    }
  }, [mounted, user, router]);

  if (!mounted || !user) {
    return null;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 bg-surface/30">
        <Container>
          <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  Welcome back, {user.name}
                </h1>
                <p className="text-muted">{user.email}</p>
              </div>
              <Button variant="outline" onClick={logout}>
                Logout
              </Button>
            </div>

            {/* Access Status */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-muted">Library Access</h3>
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-2xl font-bold">
                  {user.hasAccess ? "ACTIVE" : "NO ACCESS"}
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-muted">Purchased</h3>
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <p className="text-2xl font-bold">Animation Library</p>
                {user.purchasedAt && (
                  <p className="text-sm text-muted">
                    {new Date(user.purchasedAt).toLocaleDateString()}
                  </p>
                )}
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-muted">Access Type</h3>
                  <Download className="w-5 h-5 text-accent" />
                </div>
                <p className="text-2xl font-bold">Lifetime</p>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Button asChild size="lg" className="h-auto py-4">
                  <Link href="/library">
                    <div className="text-left">
                      <div className="font-bold mb-1">Explore Library</div>
                      <div className="text-sm opacity-80">
                        Browse all 50+ components
                      </div>
                    </div>
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="h-auto py-4">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Download functionality would be implemented here");
                    }}
                  >
                    <div className="text-left">
                      <div className="font-bold mb-1">Download Library</div>
                      <div className="text-sm opacity-80">
                        Get the complete source code
                      </div>
                    </div>
                  </a>
                </Button>
              </div>
            </div>

            {/* What's Included */}
            {user.hasAccess && (
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">What&apos;s Included</h2>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Full source code for all components</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>TypeScript definitions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Commercial usage license</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Future updates and new components</span>
                  </div>
                </div>
              </div>
            )}

          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
