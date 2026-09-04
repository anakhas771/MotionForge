import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { getVideoManifest } from "@/app/actions";
import { VideoPreview } from "@/components/library/video-preview";
import { Badge } from "@/components/ui/badge";
import { Download, Lock } from "lucide-react";

export async function generateStaticParams() {
  const components = await getVideoManifest();
  return components.map((c) => ({
    slug: c.slug,
  }));
}

export default async function CodePage({ 
  params,
  searchParams,
}: { 
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const categoryParam = resolvedSearchParams?.category;
  
  const backHref = categoryParam ? `/library?category=${encodeURIComponent(categoryParam as string)}` : "/library";
  const components = await getVideoManifest();
  const component = components.find((c) => c.slug === slug);

  if (!component) {
    notFound();
  }



  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Link href={backHref} className="inline-flex items-center gap-2 text-muted hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Library
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Video Preview */}
            <div className="space-y-6">
              <div className="aspect-4/3 rounded-xl border border-border bg-card overflow-hidden shadow-lg">
                <VideoPreview 
                  videoSrc={component.video} 
                  fallback={<div className="w-full h-full bg-surface flex items-center justify-center text-muted text-sm">Preview not available</div>}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Information and Download */}
            <div className="space-y-6 flex flex-col h-full justify-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="accent">{component.category}</Badge>
                  <Badge variant="outline" className="text-emerald-400 border-emerald-400/30 bg-emerald-400/10">Free</Badge>
                </div>
                <h1 className="text-3xl font-bold">{component.name}</h1>
                <p className="text-muted text-lg">{component.description}</p>
                
                {component.technologies && component.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {component.technologies.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-md bg-surface border border-border text-muted-foreground capitalize">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-8 border-t border-border">
                {component.hasDownload && component.downloadUrl ? (
                  <div className="space-y-4">
                    <a 
                      href={component.downloadUrl}
                      download
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-xl hover:bg-foreground/90 transition-colors shadow-lg shadow-foreground/20"
                    >
                      <Download className="w-5 h-5" />
                      Download ZIP
                    </a>
                    <p className="text-sm text-muted">
                      Free to download and use in your projects.
                    </p>
                  </div>
                ) : (
                  <div className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-surface text-muted font-medium rounded-xl border border-border cursor-not-allowed">
                    <Lock className="w-4 h-4" />
                    ZIP Locked
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
