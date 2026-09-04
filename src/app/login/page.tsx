"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const success = await login(email, password);
    if (success) {
      router.push("/dashboard");
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 flex items-center">
        <Container size="narrow">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2">Welcome back</h1>
              <p className="text-muted">Log in to your account</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="email"
                  label="Email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <Input
                  type="password"
                  label="Password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Log In"}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm">
                <span className="text-muted">Don&apos;t have an account? </span>
                <Link href="/signup" className="text-accent hover:underline">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
