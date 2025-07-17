import ParticleBackground from "@/components/ui/particle-background";
import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--portfolio-primary)] text-slate-50 relative">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
