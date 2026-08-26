import Nav from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="site">
      <Nav />
      <Hero />
      <div className="about-stack-layout">
        <About />
        <TechStack />
      </div>
      <Projects />
      <Contact />
    </main>
  );
}