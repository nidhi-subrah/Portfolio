
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
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/15 via-transparent to-purple-900/15"></div>
        
        {/* Neural Network Background */}
        <div className="opacity-20">
          <NeuralNetwork />
        </div>
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-5">
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
