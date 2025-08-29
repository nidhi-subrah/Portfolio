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
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Start name animation after a brief delay
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Greeting */}
        <div className="mb-8 animate-fade-in">
          <span className="inline-flex items-center gap-2 text-lg text-muted-foreground">
            👋 Hey! I'm
          </span>
        </div>
        {/* Name (always visible, with animation if possible) */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}>
          <span className="gradient-text cursor-default relative">
            Nidhi Subrahmanya
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in"
           style={{ animationDelay: '0.4s' }}>
          Currently coding, learning, and building at the University of Waterloo.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in"
             style={{ animationDelay: '0.6s' }}>
          <Button variant="glow" size="xl" className="group bg-blue-500/20 border-blue-500/50 text-blue-400 hover:bg-blue-500/30">
            <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            LinkedIn
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="glow" size="xl" className="group bg-transparent border-2 border-transparent text-foreground relative overflow-hidden hover:shadow-glow transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-100 p-[2px] rounded-md">
              <div className="bg-background rounded-md w-full h-full"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform relative z-10" />
            <span className="relative z-10">Resume</span>
          </Button>
          
          <Button variant="glow" size="xl" className="group">
            <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            GitHub
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in animate-float" style={{ animationDelay: '0.8s' }}>
          <div className="mx-auto w-6 h-10 border-2 border-primary/50 rounded-full relative hover:border-primary transition-colors">
            <div className="w-1 h-3 bg-primary rounded-full mx-auto mt-2" style={{ animation: 'tech-pulse 2s ease-in-out infinite' }}></div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};