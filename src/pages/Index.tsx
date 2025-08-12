
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import NeuralNetwork from "@/components/NeuralNetwork";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 relative overflow-hidden">
      {/* Enhanced Abstract Background */}
      <div className="absolute inset-0">
        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
        
        {/* Neural Network Background */}
        <div className="opacity-15">
          <NeuralNetwork />
        </div>
        
        {/* Floating Abstract Shapes */}
        <div className="absolute inset-0">
          {/* Large floating orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/8 to-blue-500/6 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-500/8 to-cyan-500/6 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-500/6 to-pink-500/4 rounded-full blur-2xl animate-float"></div>
          
          {/* Geometric accents */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/5 to-transparent rotate-45 animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/5 to-transparent -rotate-45 animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 right-1/3 w-40 h-40 bg-gradient-to-br from-cyan-400/4 to-transparent rotate-12 animate-pulse delay-500"></div>
        </div>
        
        {/* Dynamic Light Rays */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/6 to-transparent rounded-full animate-spin-slow"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/6 to-transparent rounded-full animate-spin-slow-reverse"></div>
          <div className="absolute top-1/2 left-0 w-60 h-60 bg-gradient-to-br from-cyan-500/4 to-transparent rounded-full animate-spin-slow delay-2000"></div>
        </div>
        
        {/* Abstract Energy Flows */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1 h-32 bg-gradient-to-b from-purple-500/20 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-1 h-32 bg-gradient-to-b from-blue-500/20 to-transparent animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-0 w-1 h-24 bg-gradient-to-b from-cyan-500/15 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-0 w-1 h-28 bg-gradient-to-b from-purple-500/15 to-transparent animate-pulse delay-1500"></div>
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Enhanced noise texture */}
        <div className="absolute inset-0 opacity-4">
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
