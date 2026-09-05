"use server";

import { animations } from "@/data/animations";
import { AnimationComponent } from "@/types";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
}

export async function getVideoManifest(): Promise<
  AnimationComponent[]
> {
  const manifest = animations.filter(
    (animation) => Boolean(animation.video)
  );

  return shuffleArray(manifest);
}