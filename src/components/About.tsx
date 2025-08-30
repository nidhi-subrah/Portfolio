import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython, SiOpenjdk,
  SiMysql, SiMongodb, SiAmazon, SiDocker, SiGit, SiGraphql 
} from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400' },
  { name: 'Python', icon: SiPython, color: 'text-blue-300' },
  { name: 'Java', icon: SiOpenjdk, color: 'text-orange-400' },
  { name: 'SQL', icon: SiMysql, color: 'text-blue-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'AWS', icon: SiAmazon, color: 'text-orange-300' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
  { name: 'Git', icon: SiGit, color: 'text-red-400' },
  { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-400' }
];

const interests = [
  'Full-Stack Development', 'Machine Learning', 'Cloud Computing',
  'Open Source', 'UI/UX Design', 'Data Science'
];

export const About = () => {
  return (
    <section id="about-details" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary cursor-default" style={{ position: 'relative', display: 'inline-block' }}>
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions through code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Bio */}
          <Card className="p-8 tech-border hover:shadow-tech transition-all duration-300 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science student at the University of Waterloo, passionate about 
                building elegant solutions to complex problems. My journey in tech started with 
                curiosity and has evolved into a deep love for creating impactful software.
              </p>
              <p>
                Currently exploring the intersection of web development, machine learning, and 
                user experience design. I believe in writing clean, maintainable code and 
                creating products that make a difference.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open source projects, 
                learning new technologies, or mentoring fellow students.
              </p>
            </div>
          </Card>

          {/* Photo - Full Right Side */}
          <Card className="p-8 tech-border hover:shadow-tech transition-all duration-300 bg-card/50 backdrop-blur-sm flex items-center justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl border-2 border-primary/30 flex items-center justify-center text-muted-foreground hover:border-primary/50 transition-all duration-300">
              <div className="text-center">
                <div className="text-lg mb-3">Profile Photo</div>
                <div className="text-sm opacity-70">Coming Soon</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Skills & Interests */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill.name} 
                  variant="secondary" 
                  className="text-sm py-2 px-4 tech-border hover:shadow-glow transition-all duration-300 animate-fade-in flex items-center gap-2 hover:scale-105 hover:-translate-y-1 group cursor-default"
                  style={{ 
                    animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <skill.icon className={`w-4 h-4 ${skill.color} group-hover:scale-110 transition-transform duration-200`} />
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Interests</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <Badge 
                  key={interest} 
                  variant="outline" 
                  className="text-sm py-2 px-4 tech-border hover:shadow-glow transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};