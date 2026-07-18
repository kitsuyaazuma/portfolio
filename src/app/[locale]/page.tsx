import { Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { News } from "@/components/sections/News";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <main>
      {/* Hero is above-the-fold — no Suspense wrapper so it renders in the static shell */}
      <Hero />
      <Suspense fallback={null}>
        <News />
      </Suspense>
      <Suspense fallback={null}>
        <Skills />
      </Suspense>
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
    </main>
  );
}
