import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      <Navigation />
      <Hero />
      <Projects />
      <CTASection />
      <Footer />
    </main>
  );
}
