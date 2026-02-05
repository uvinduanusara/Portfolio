import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-foreground/10 selection:text-foreground">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
