
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
    <nav className={`fixed top-0 right-0 z-50 p-8 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md bg-gray-900/20' : ''
    }`}>
      <div className="flex space-x-8">
        {navItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-sm font-medium transition-all duration-300 transform hover:scale-110 relative group ${
              activeSection === item.id 
                ? "text-white" 
                : "text-gray-400 hover:text-white"
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {item.label}
            
            {/* Active indicator */}
            <div className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform transition-all duration-300 ${
              activeSection === item.id ? 'scale-x-100' : 'scale-x-0'
            }`}></div>
            
            {/* Hover effect */}
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
