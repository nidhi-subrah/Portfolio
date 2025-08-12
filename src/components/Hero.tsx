
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
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main floating orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/15 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Additional smaller elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-xl animate-float"></div>
        
        {/* Subtle geometric accents */}
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-purple-500/5 to-transparent rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-gradient-to-br from-blue-500/5 to-transparent -rotate-45 animate-pulse delay-1000"></div>
        
        {/* Moving light trails */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-1 h-32 bg-gradient-to-b from-purple-500/20 to-transparent animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-1 h-32 bg-gradient-to-b from-blue-500/20 to-transparent animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Logo in top left with animation */}
      <div className="fixed top-8 left-8 z-50">
        <div className={`text-white text-2xl font-bold transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}>
          NS
        </div>
      </div>

      <div className="text-center max-w-4xl relative z-10">
        {/* Greeting with staggered animation */}
        <div className={`mb-6 transition-all duration-1000 transform delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          <p className="text-gray-300 text-lg font-medium animate-bounce">
            👋 Hey! I'm
          </p>
        </div>

        {/* Main name with character-by-character reveal effect */}
        <div className={`mb-8 transition-all duration-1000 transform delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
            <span className="inline-block hover:text-purple-400 transition-colors duration-300 hover:scale-105 transform">Nidhi</span>
            <span className="mx-4"></span>
            <span className="inline-block hover:text-blue-400 transition-colors duration-300 hover:scale-105 transform">Subrahmanya</span>
          </h1>
        </div>

        {/* Subtitle with typewriter effect simulation */}
        <div className={`mb-12 transition-all duration-1000 transform delay-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Aspiring software engineer exploring technology through creativity and curiosity.
          </p>
        </div>

        {/* Enhanced buttons with staggered entrance */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 transform delay-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          <a
            href="#"
            className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Linkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">LinkedIn</span>
          </a>
          
          <a
            href="#"
            className="group flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-gray-500/25 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FileText size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Resume</span>
          </a>
          
          <a
            href="#"
            className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">GitHub</span>
          </a>
        </div>
      </div>

      {/* Enhanced scroll indicator with pulse animation */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}>
        <div className="animate-bounce hover:animate-pulse cursor-pointer group">
          <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center group-hover:border-white transition-colors duration-300">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse group-hover:bg-white transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
