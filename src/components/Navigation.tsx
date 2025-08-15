
import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("summary");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "summary", label: "Summary" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md bg-[#1A1A1A]/80 border-b border-[#333333]' : ''
    }`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo/Initials */}
        <div className="text-white text-2xl font-bold">
          <span className="text-gradient">NS</span>
        </div>
        
        {/* Navigation Items */}
        <div className="flex space-x-8">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-all duration-300 transform hover:scale-110 relative group ${
                activeSection === item.id 
                  ? "text-[#00C0C0]" 
                  : "text-[#E0E0E0] hover:text-white"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
              
              {/* Active indicator */}
              <div className={`absolute -bottom-2 left-0 w-full h-0.5 bg-[#00C0C0] transform transition-all duration-300 ${
                activeSection === item.id ? 'scale-x-100' : 'scale-x-0'
              }`}></div>
              
              {/* Hover effect */}
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
