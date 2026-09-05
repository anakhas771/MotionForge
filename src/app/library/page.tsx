"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { FilterSidebar } from "@/components/library/filter-sidebar";
import { MobileFilter } from "@/components/library/mobile-filter";
import { ComponentGrid } from "@/components/library/component-grid";
import { SearchDialog } from "@/components/library/search-dialog";

import { normalizeCategory, type Category } from "@/lib/categories";
import { getVideoManifest } from "@/app/actions";
import type { AnimationComponent } from "@/types";

function LibraryContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchOpen, setSearchOpen] = useState(false);
  const [components, setComponents] = useState<AnimationComponent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // The URL is the single source of truth for the selected category.
  const activeCategory = useMemo(() => {
    const urlCategory = searchParams.get("category");

    if (!urlCategory) {
      return "All Components" as Category;
    }

    return normalizeCategory(urlCategory) as Category;
  }, [searchParams]);

  // Update the category through the URL.
  const setActiveCategory = (category: Category) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === "All Components") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    const queryString = params.toString();

    router.push(
      queryString
        ? `/library?${queryString}`
        : "/library",
      {
        scroll: false,
      }
    );
  };

  // Load all videos from the public animation folders.
  useEffect(() => {
    async function loadVideos() {
      try {
        console.log("🎬 Loading video manifest...");

        const videos = await getVideoManifest();

        console.log("🎥 Videos received:", videos);

        setComponents(videos);
      } catch (error) {
        console.error(
          "❌ Failed to load video manifest:",
          error
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadVideos();
  }, []);

  // Filter videos based on the category in the URL.
  const filteredComponents = useMemo(() => {
    if (activeCategory === "All Components") {
      return components;
    }

    return components.filter((component) => {
      const normalizedCategory = normalizeCategory(
        component.category as string
      );

      return normalizedCategory === activeCategory;
    });
  }, [components, activeCategory]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
              <span>✦</span>
              Motion Animation Library
            </div>

            <h1 className="text-5xl md:text-6xl font-bold">
              Motion, without the boilerplate.
            </h1>

            <p className="text-xl text-muted max-w-2xl">
              Explore production-ready animation patterns for modern interfaces.
            </p>
          </div>

          {/* Mobile Filter */}
          <div className="lg:hidden mb-6">
            <MobileFilter
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              componentCount={filteredComponents.length}
            />
          </div>

      {/* Main Layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Fixed Sidebar */}
            <aside className="hidden lg:block lg:w-64 lg:shrink-0">
              <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto scrollbar-thin">
                <FilterSidebar
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                  onSearchClick={() => setSearchOpen(true)}
                  componentCount={filteredComponents.length}
                />
              </div>
            </aside>

            {/* Animation Grid */}
            <div className="flex-1 min-w-0">
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
                      <div
                        className="aspect-[4/3] bg-surface relative overflow-hidden"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        <div
                          className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_ease-in-out_infinite]"
                          style={{
                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)",
                            animationDelay: `${i * 0.08}s`,
                          }}
                        />
                      </div>
                      <div className="p-4 space-y-2">
                        <div
                          className="h-4 bg-surface-hover rounded animate-pulse"
                          style={{ animationDelay: `${i * 0.05}s` }}
                        />
                        <div
                          className="h-3 bg-surface-hover rounded w-2/3 animate-pulse"
                          style={{ animationDelay: `${i * 0.07}s` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredComponents.length === 0 ? (
                <div className="py-20 text-center space-y-4">
                  <div className="text-4xl opacity-30">🎬</div>
                  <p className="text-muted text-lg">No animations found in this category.</p>
                </div>
              ) : (
                <ComponentGrid
                  components={filteredComponents}
                />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <SearchDialog
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}

export default function LibraryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-muted">
          Loading library...
        </div>
      }
    >
      <LibraryContent />
    </Suspense>
  );
}