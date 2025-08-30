import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Tech Innovators Inc.',
    location: 'Toronto, ON',
    period: 'May 2024 - Present',
    description: 'Developing scalable web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-impact features for 10,000+ users.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    current: true
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    period: 'Sep 2023 - Apr 2024',
    description: 'Built and maintained web applications from conception to deployment. Implemented CI/CD pipelines and improved application performance by 40%.',
    technologies: ['Vue.js', 'Python', 'Django', 'Docker', 'MongoDB'],
    current: false
  },
  {
    title: 'Research Assistant',
    company: 'University of Waterloo',
    location: 'Waterloo, ON',
    period: 'Jan 2023 - Aug 2023',
    description: 'Conducted research on machine learning algorithms for natural language processing. Published findings in academic conference.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Jupyter', 'LaTeX'],
    current: false
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-item">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary cursor-default" style={{ position: 'relative', display: 'inline-block' }}>
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-reveal">
            My professional journey and key contributions
          </p>
        </div>

        {/* Experience Tabs */}
        <div className="reveal-item">
          <Tabs defaultValue="0" className="w-full">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Panel - Company List */}
              <div className="lg:w-1/3">
                <TabsList className="flex flex-col h-auto w-full bg-card/50 backdrop-blur-sm p-2 space-y-2">
                  {experiences.map((exp, index) => (
                    <TabsTrigger 
                      key={index}
                      value={index.toString()}
                      className="w-full justify-start text-left p-4 rounded-lg data-[state=active]:bg-primary/20 data-[state=active]:text-primary hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <div className="flex flex-col items-start w-full">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium group-hover:text-primary transition-colors duration-300">{exp.company}</span>
                          {exp.current && (
                            <Badge variant="default" className="bg-primary/20 text-primary border-primary/30 text-xs">
                              Current
                            </Badge>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground group-data-[state=active]:text-primary/80">
                          {exp.title}
                        </span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Right Panel - Experience Details */}
              <div className="lg:w-2/3">
                {experiences.map((exp, index) => (
                  <TabsContent key={index} value={index.toString()} className="mt-0">
                    <Card className="p-8 tech-border hover-lift hover-glow transition-all duration-500 bg-card/50 backdrop-blur-sm group relative overflow-hidden">
                      {/* Animated background gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <div className="mb-6">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-semibold text-primary group-hover:text-primary-glow transition-all duration-300">
                              {exp.company}
                            </h3>
                          </div>
                          <h4 className="text-xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                            {exp.title}
                          </h4>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mb-6">
                            <div className="flex items-center gap-1 group-hover:text-primary/80 transition-colors duration-300">
                              <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                              <span className="text-sm">{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1 group-hover:text-primary/80 transition-colors duration-300">
                              <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/90 transition-colors duration-300">
                          {exp.description}
                        </p>

                        <div>
                          <h5 className="text-sm font-medium text-foreground mb-3">Skills</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge 
                                key={techIndex}
                                variant="secondary"
                                className="tech-border hover:shadow-glow hover:scale-105 transition-all duration-300 hover:bg-primary/10"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};