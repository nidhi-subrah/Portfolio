import { TechBackground } from '@/components/TechBackground';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { StartupAnimation } from '@/components/StartupAnimation';
import { useEffect, useState } from 'react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      // Block pointer events only while visible
      if (typeof document !== 'undefined') {
        const root = document.getElementById('root');
        if (root) root.style.pointerEvents = 'none';
      }

      const timer = setTimeout(() => {
        setIsVisible(false);
        if (typeof document !== 'undefined') {
          const root = document.getElementById('root');
          if (root) root.style.pointerEvents = 'auto';
        }
      }, 8000); // Total animation time

      return () => clearTimeout(timer);
    } else {
      if (typeof document !== 'undefined') {
        const root = document.getElementById('root');
        if (root) root.style.pointerEvents = 'auto';
      }
    }
  }, [isVisible]);

  return (
    <div className="min-h-screen relative">
      {/* Startup Animation */}{isVisible && <StartupAnimation />}

      {/* Enhanced Tech Background */}
      {!isVisible && <TechBackground />}

      {/* Navigation */}
      {!isVisible && <Navigation />}

      {/* Main Content */}
      <main className="relative z-10">
        {!isVisible && <Hero />}
        {!isVisible && <About />}
        {!isVisible && <Experience />}
        {!isVisible && <Projects />}
        {!isVisible && <Contact />}
      </main>
    </div>
  );
};

export default Index;

