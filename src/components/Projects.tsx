import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'TheraMind – AI Therapist',
    description: 'A conversational therapy platform providing real-time AI support with daily check-ins, personalized history and curated mental health resources.',
    technologies: ['React', 'Gemini API', 'MongoDB', 'Next.js'],
    image: '/images/TheraMind.png',
    liveUrl: 'https://www.youtube.com/watch?v=cHi-_mFTqFc',
    githubUrl: 'https://github.com/nidhi-subrah/ai-therapist',
    featured: true
  },
  {
    title: 'DermaCare – AI-Powered Skincare Scanner',
    description: 'A web app that scans skincare product barcodes, analyzes ingredients, and generates safety scores with personalized recommendations.',
    technologies: ['Flask', 'Tailwind CSS', 'QuaggaJS', 'INCIBeauty API'],
    image: '/images/Dermacare.png',
    liveUrl: 'https://youtu.be/j2ykAA4lfdY',
    githubUrl: 'https://github.com/nidhi-subrah/DermaCare',
    featured: true
  },
  {
    title: 'Podcastify – Textbook-to-Podcast Web App',
    description: 'An app that transforms textbooks into podcasts in seconds using NLP, with an interactive chatbot for deeper learning.',
    technologies: ['Vue.js', 'Flask', 'spaCy', 'NLTK', 'Speechify API', 'Voiceflow API'],
    image: '/images/Podcastify.png',
    liveUrl: '/images/Podcastify.mp4',
    githubUrl: 'https://github.com/nidhi-subrah/Podcastify',
    featured: false
  },
  {
    title: 'Water Buddy - Automated Soil Irrigation System',
    description: 'Developed a portable, low-power prototype with real-time moisture detection to support individuals with Alzheimer’s and Dementia in garden care. ',
    technologies: ['C', 'STM32 Microcontrollers', 'Embedded Systems'],
    image: '/images/STM32.jpg',
    liveUrl: '#',
    githubUrl: 'https://github.com/nidhi-subrah/Automated-Soil-Irrigation-System',
    featured: false
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-item">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 section-gradient cursor-default"
            style={{ position: 'relative', display: 'inline-block' }}
          >
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-reveal">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden tech-border hover-lift hover-glow transition-all duration-500 bg-card/50 backdrop-blur-sm reveal-item relative flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Banner */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Animated tech particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="absolute text-xs text-primary/60 animate-float"
                      style={{
                        left: `${20 + techIndex * 25}%`,
                        top: `${30 + techIndex * 15}%`,
                        animationDelay: `${techIndex * 0.5}s`
                      }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                
                {/* Hover overlay with shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              <div className="p-6 relative flex flex-col">
                <div className="flex items-center justify-between mb-4 h-12">
                  <h3 className="text-2xl font-semibold text-primary group-hover:text-primary-glow transition-colors duration-300">{project.title}</h3>
                  <Badge variant="default" className="bg-primary/20 text-primary border-primary/30 pulse-glow">
                    Featured
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300 h-20 overflow-hidden">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 h-10">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="tech-border hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="tech" 
                    size="sm" 
                    className="group/btn hover-lift"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group/btn hover-glow"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden tech-border hover-lift hover-glow transition-all duration-500 bg-card/50 backdrop-blur-sm reveal-item relative flex flex-col"
              style={{ animationDelay: `${(index + 2) * 0.2}s` }}
            >
              {/* Project Mini Banner */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Animated tech particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="absolute text-xs text-primary/60 animate-float"
                      style={{
                        left: `${20 + techIndex * 25}%`,
                        top: `${30 + techIndex * 15}%`,
                        animationDelay: `${techIndex * 0.5}s`
                      }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                
                {/* Hover overlay with shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Subtle background animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-6 flex flex-col">
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary-glow transition-colors duration-300 h-8">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-300 h-16 overflow-hidden">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5 h-8">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="text-xs tech-border hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.liveUrl && project.liveUrl !== '#' ? (
                    <Button 
                      variant="glow" 
                      size="sm" 
                      className="text-xs group/btn hover-lift"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 mr-1 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Demo
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs group/btn hover-glow"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-3 h-3 mr-1 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 reveal-item">
          <Button 
            variant="hero" 
            size="lg" 
            className="hover-lift hover-glow group"
            onClick={() => window.open('https://github.com/nidhi-subrah', '_blank')}
          >
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

