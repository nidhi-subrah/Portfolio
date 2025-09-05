import { Button } from '@/components/ui/button';
import { Github, Linkedin, FileText, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showShimmer, setShowShimmer] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
      if (!prefersReducedMotion) {
        // Start shimmer after all characters are revealed
        const shimmerTimer = setTimeout(() => {
          setShowShimmer(true);
          // Remove shimmer after it completes
          setTimeout(() => setShowShimmer(false), 1200);
        }, 800);
        return () => clearTimeout(shimmerTimer);
      }
    }, delay);
    
    return () => {
      clearTimeout(timer);
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [delay, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <span className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {text}
      </span>
    );
  }

  return (
    <span className="relative inline-block">
      <span className="sr-only">{text}</span>
      <span 
        className="relative inline-block overflow-hidden"
        aria-hidden="true"
      >
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 30}ms` : '0ms',
              background: 'inherit',
              WebkitBackgroundClip: 'inherit',
              backgroundClip: 'inherit',
              WebkitTextFillColor: 'inherit'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
        {/* Shimmer effect */}
        {showShimmer && (
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer-sweep" />
        )}
      </span>
    </span>
  );
};

export const Hero = () => {

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Greeting */}
        <div className="mb-8 animate-fade-in">
          <span className="inline-flex items-center gap-2 text-lg text-gray-400">
            👋 Hey! I'm
          </span>
        </div>
        {/* Name (always visible, with animation if possible) */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}>
          <span className="hero-shine gradient-text cursor-default" style={{ position: 'relative', display: 'inline-block' }}>
            Nidhi Subrahmanya
            <span className="shine" aria-hidden="true"></span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in"
           style={{ animationDelay: '0.4s' }}>
          Engineering the future with software, systems and AI at the University of Waterloo.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in"
             style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="glow" 
            size="xl" 
            className="group bg-blue-500/20 border-blue-500/50 text-white hover:bg-blue-500/30"
            onClick={() => window.open('https://www.linkedin.com/in/nidhi-subrahmanya/', '_blank')}
          >
            <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            LinkedIn
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="glow" 
            size="xl" 
            className="group text-white"
            onClick={() => window.open('https://github.com/nidhi-subrah', '_blank')}
          >
            <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            GitHub
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="mx-auto w-6 h-10 border-2 border-primary/50 rounded-full relative hover:border-primary transition-colors group cursor-pointer" onClick={() => document.getElementById('about-details')?.scrollIntoView({ behavior: 'smooth' })}>
            <div className="w-1 h-3 bg-primary rounded-full mx-auto mt-2 group-hover:bg-primary-glow transition-colors duration-300" style={{ 
              animation: 'scroll-bounce 2s ease-in-out infinite',
              transformOrigin: 'center'
            }}></div>
          </div>
          <div className="mt-2 flex flex-col items-center">
            <div className="text-xs text-primary/70 font-medium tracking-wider uppercase">Discover</div>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-1 h-1 bg-primary/50 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-primary/70 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};