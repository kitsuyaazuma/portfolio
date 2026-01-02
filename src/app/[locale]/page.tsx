import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { PickUp } from "@/components/PickUp";
import { Skills } from "@/components/Skills";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <PickUp />
      <Skills />
      <Experience />
    </main>
  );
}
