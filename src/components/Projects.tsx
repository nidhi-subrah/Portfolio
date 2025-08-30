import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'EcoTrack',
    description: 'A comprehensive sustainability tracking platform that helps users monitor their carbon footprint and discover eco-friendly alternatives.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'AWS'],
    image: '/api/placeholder/600/400',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'StudySync',
    description: 'Real-time collaborative study platform for students with integrated video calling, whiteboard, and resource sharing.',
    technologies: ['Vue.js', 'Socket.io', 'Express', 'PostgreSQL'],
    image: '/api/placeholder/600/400',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'AI Content Analyzer',
    description: 'Machine learning tool that analyzes text content for sentiment, topics, and readability using natural language processing.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'Docker'],
    image: '/api/placeholder/600/400',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    title: 'TaskFlow',
    description: 'Modern project management tool with kanban boards, team collaboration features, and automated reporting.',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
    image: '/api/placeholder/600/400',
    liveUrl: '#',
    githubUrl: '#',
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
              className="group overflow-hidden tech-border hover-lift hover-glow transition-all duration-500 bg-card/50 backdrop-blur-sm reveal-item relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Banner */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
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

              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-primary group-hover:text-primary-glow transition-colors duration-300">{project.title}</h3>
                  <Badge variant="default" className="bg-primary/20 text-primary border-primary/30 pulse-glow">
                    Featured
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
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
                  <Button variant="tech" size="sm" className="group/btn hover-lift">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="group/btn hover-glow">
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
              className="group overflow-hidden tech-border hover-lift hover-glow transition-all duration-500 bg-card/50 backdrop-blur-sm reveal-item relative"
              style={{ animationDelay: `${(index + 2) * 0.2}s` }}
            >
              {/* Project Mini Banner */}
              <div className="relative h-32 bg-gradient-to-br from-primary/15 to-accent/15 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 group-hover:from-primary/15 group-hover:to-accent/15 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
              </div>

              {/* Subtle background animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary-glow transition-colors duration-300">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
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
                  <Button variant="glow" size="sm" className="text-xs group/btn hover-lift">
                    <ExternalLink className="w-3 h-3 mr-1 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Demo
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs group/btn hover-glow">
                    <Github className="w-3 h-3 mr-1 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 reveal-item">
          <Button variant="hero" size="lg" className="hover-lift hover-glow group">
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};
