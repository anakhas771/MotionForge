import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Hero } from "@/components/marketing/hero";
import { StatsStrip } from "@/components/marketing/stats-strip";
import { ShowcaseGrid } from "@/components/marketing/showcase-grid";
import { InfiniteShowcase } from "@/components/marketing/infinite-showcase";
import { FinalCTA } from "@/components/marketing/final-cta";
import { getVideoManifest } from "@/app/actions";
import { AnimationComponent } from "@/types";

function getDiverseAnimations(components: AnimationComponent[], count: number) {
  const categoryMap = new Map<string, AnimationComponent[]>();
  
  // Sort deterministically by slug so the result is always stable
  const sortedComponents = [...components].sort((a, b) => a.slug.localeCompare(b.slug));

  for (const comp of sortedComponents) {
    if (!categoryMap.has(comp.category)) {
      categoryMap.set(comp.category, []);
    }
    categoryMap.get(comp.category)!.push(comp);
  }

  const result: AnimationComponent[] = [];
  const categories = Array.from(categoryMap.keys());
  
  // Pick one from each category iteratively until we reach count
  let round = 0;
  while (result.length < count && categories.length > 0) {
    let addedInRound = false;
    for (const category of categories) {
      if (result.length >= count) break;
      
      const categoryItems = categoryMap.get(category)!;
      if (round < categoryItems.length) {
        result.push(categoryItems[round]);
        addedInRound = true;
      }
    }
    if (!addedInRound) break; 
    round++;
  }
  
  return result;
}

export default async function HomePage() {
  const allAnimations = await getVideoManifest();
  const heroAnimations = getDiverseAnimations(allAnimations, 8);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <InfiniteShowcase />
        <ShowcaseGrid animations={heroAnimations} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
