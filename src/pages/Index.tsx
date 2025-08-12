
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 animate-pulse"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-2xl animate-float-slow"></div>
        
        {/* Abstract network pattern */}
        <div className="absolute inset-0 opacity-8">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Flowing network lines */}
            <path 
              d="M 100,200 Q 300,150 500,200 T 900,200 M 150,300 Q 350,250 550,300 T 850,300 M 200,400 Q 400,350 600,400 T 800,400 M 250,500 Q 450,450 650,500 T 750,500 M 300,600 Q 500,550 700,600 T 700,600 M 350,700 Q 550,650 750,700 T 650,700 M 400,800 Q 600,750 800,800 T 600,800"
              stroke="url(#blueGradient)" 
              strokeWidth="0.5" 
              fill="none" 
              opacity="0.3"
              filter="url(#glow)"
              className="animate-flow"
            />
            
            <path 
              d="M 900,150 Q 700,100 500,150 T 100,150 M 850,250 Q 650,200 450,250 T 150,250 M 800,350 Q 600,300 400,350 T 200,350 M 750,450 Q 550,400 350,450 T 250,450 M 700,550 Q 500,500 300,550 T 300,550 M 650,650 Q 450,600 250,650 T 350,650 M 600,750 Q 400,700 200,750 T 400,750"
              stroke="url(#purpleGradient)" 
              strokeWidth="0.5" 
              fill="none" 
              opacity="0.2"
              filter="url(#glow)"
              className="animate-flow-delayed"
            />
            
            {/* Glowing dots at intersections */}
            <circle cx="500" cy="200" r="1.5" fill="url(#blueGradient)" opacity="0.4" className="animate-pulse"/>
            <circle cx="550" cy="300" r="1.2" fill="url(#purpleGradient)" opacity="0.3" className="animate-pulse delay-500"/>
            <circle cx="600" cy="400" r="1.8" fill="url(#blueGradient)" opacity="0.35" className="animate-pulse delay-1000"/>
            <circle cx="650" cy="500" r="1.3" fill="url(#purpleGradient)" opacity="0.25" className="animate-pulse delay-1500"/>
            <circle cx="700" cy="600" r="1.6" fill="url(#blueGradient)" opacity="0.3" className="animate-pulse delay-2000"/>
            <circle cx="750" cy="700" r="1.4" fill="url(#purpleGradient)" opacity="0.2" className="animate-pulse delay-2500"/>
            <circle cx="800" cy="800" r="1.7" fill="url(#blueGradient)" opacity="0.25" className="animate-pulse delay-3000"/>
            
            {/* Additional scattered dots */}
            <circle cx="300" cy="250" r="0.8" fill="url(#blueGradient)" opacity="0.2" className="animate-pulse delay-750"/>
            <circle cx="450" cy="350" r="1.1" fill="url(#purpleGradient)" opacity="0.15" className="animate-pulse delay-1250"/>
            <circle cx="350" cy="450" r="0.9" fill="url(#blueGradient)" opacity="0.18" className="animate-pulse delay-1750"/>
            <circle cx="250" cy="550" r="1.3" fill="url(#purpleGradient)" opacity="0.12" className="animate-pulse delay-2250"/>
            <circle cx="400" cy="650" r="0.7" fill="url(#blueGradient)" opacity="0.16" className="animate-pulse delay-2750"/>
            
            {/* Gradients for the lines and dots */}
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: 'rgba(59, 130, 246, 0.6)', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: 'rgba(147, 51, 234, 0.6)', stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: 'rgba(147, 51, 234, 0.6)', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: 'rgba(59, 130, 246, 0.6)', stopOpacity: 1}} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Moving light rays */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full animate-spin-slow"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full animate-spin-slow-reverse"></div>
        </div>
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Summary />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
