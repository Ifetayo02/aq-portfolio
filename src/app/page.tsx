import Nav from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="site">
      <Nav />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}