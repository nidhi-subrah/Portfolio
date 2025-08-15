
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navigation />
      <Hero />
      <AboutMe />
      <Summary />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
