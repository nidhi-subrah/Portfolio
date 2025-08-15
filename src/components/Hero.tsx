
import { useState, useEffect } from "react";
import { Linkedin, Github, FileText } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
      {/* Animated background elements - keeping your existing animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00C0C0]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#007bff]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Logo in top left with animation - keeping your existing animation */}
      <div className="fixed top-8 left-8 z-50">
        <div className={`text-white text-2xl font-bold transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}>
          <span className="text-gradient">NS</span>
        </div>
      </div>

      <div className="text-center max-w-4xl relative z-10">
        {/* Greeting with staggered animation */}
        <div className={`mb-6 transition-all duration-1000 transform delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          <p className="text-[#FFA500] text-lg font-medium">
            👋 Hey! I'm
          </p>
        </div>

        {/* Main name with character-by-character reveal effect */}
        <div className={`mb-8 transition-all duration-1000 transform delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
            <span className="inline-block hover:text-[#00C0C0] transition-colors duration-300 hover:scale-105 transform">Nidhi</span>
            <span className="mx-4"></span>
            <span className="inline-block hover:text-[#007bff] transition-colors duration-300 hover:scale-105 transform">Subrahmanya</span>
          </h1>
        </div>

        {/* Subtitle with typewriter effect simulation */}
        <div className={`mb-12 transition-all duration-1000 transform delay-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          <p className="text-xl md:text-2xl text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed">
            Currently coding, learning, and building at the University of Waterloo.
          </p>
        </div>

        {/* Enhanced buttons with staggered entrance */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 transform delay-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          <a
            href="#"
            className="group flex items-center gap-3 bg-[#007bff] hover:bg-[#007bff]/90 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-[#007bff]/25 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#007bff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Linkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">LinkedIn</span>
          </a>
          
          <a
            href="#"
            className="group flex items-center gap-3 bg-[#333333] hover:bg-[#404040] text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-[#333333]/25 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FileText size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Resume</span>
          </a>
          
          <a
            href="#"
            className="group flex items-center gap-3 bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-[#8B5CF6]/25 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#8B5CF6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">GitHub</span>
          </a>
        </div>
      </div>

      {/* Enhanced scroll indicator with pulse animation - keeping your existing animation */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}>
        <div className="animate-bounce hover:animate-pulse cursor-pointer group">
          <div className="w-8 h-12 border-2 border-[#E0E0E0] rounded-full flex justify-center group-hover:border-[#00C0C0] transition-colors duration-300">
            <div className="w-1 h-3 bg-[#E0E0E0] rounded-full mt-2 animate-pulse group-hover:bg-[#00C0C0] transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
