import { TechBackground } from '@/components/TechBackground';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { StartupAnimation } from '@/components/StartupAnimation';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Startup Animation */}
      <StartupAnimation />
      
      {/* Enhanced Tech Background */}
      <TechBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
