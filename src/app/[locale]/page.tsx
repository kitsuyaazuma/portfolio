import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { PickUp } from "@/components/PickUp";
import { Skills } from "@/components/Skills";
import { Chat } from "@/components/Chat";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Chat />
      <PickUp />
      <Skills />
      <Experience />
    </main>
  );
}
