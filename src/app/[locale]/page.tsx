import { Hero } from "@/components/common/Hero";
import { About } from "@/components/home/About";
import { Experience } from "@/components/home/Experience";
import { PickUp } from "@/components/home/PickUp";
import { Skills } from "@/components/home/Skills";

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
