import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  SiPython, 
  SiC, 
  SiCplusplus, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiVuedotjs, 
  SiFlask, 
  SiTailwindcss, 
  SiPostgresql, 
  SiSupabase, 
  SiMongodb,
  SiLinkedin,
  SiGithub
} from 'react-icons/si';

import { 
  BiCodeAlt // neutral Java icon
} from 'react-icons/bi';

import { 
  AiFillCloud,   // Fallback for Power Automate + MS Fabric
  AiFillDatabase // Fallback for Dataverse
} from 'react-icons/ai';

import { FileText } from 'lucide-react';
const skills = [
  { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
  { name: 'C', icon: SiC, color: 'text-blue-400' },
  { name: 'C++', icon: SiCplusplus, color: 'text-blue-400' },
  { name: 'Java', icon: BiCodeAlt, color: 'text-red-500' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-300' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'React', icon: SiReact, color: 'text-sky-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black' },
  { name: 'Vue.js', icon: SiVuedotjs, color: 'text-green-400' },
  { name: 'Flask', icon: SiFlask, color: 'text-gray-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
  { name: 'Supabase', icon: SiSupabase, color: 'text-green-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { name: 'Power BI', icon: BiCodeAlt, color: 'text-yellow-500' },
  { name: 'Power Automate', icon: AiFillCloud, color: 'text-blue-500' },
  { name: 'MS Fabric', icon: AiFillCloud, color: 'text-indigo-500' },
  { name: 'Dataverse', icon: AiFillDatabase, color: 'text-purple-500' }
];


const interests = [
  'Artificial Intelligence', 'Machine Learning', 'Cloud Computing',
   'UI/UX Design', 'Data Analysis'
];

export const About = () => {
  return (
    <section id="about-details" className="py-24 relative transition-opacity duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-gradient cursor-default" style={{ position: 'relative', display: 'inline-block' }}>
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions through code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Bio */}
          <Card className="p-8 tech-border hover:shadow-tech transition-all duration-300 bg-card/50 backdrop-blur-sm group">
            <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors duration-300">
              <p>
                Hi! I'm Nidhi Subrahmanya, a Computer Engineering student at the University of Waterloo with a passion for building intelligent, data-driven systems. My journey so far has taken me from hardware foundations to developing scalable web applications and applying AI/ML to solve real-world problems through internships and projects.
              </p>
              <p>
                I'm especially interested in the intersection of software engineering and AI, where I can create solutions that are both impactful and accessible. Outside of tech, I enjoy exploring music and creativity through video and audio editing for my YouTube channel, which has over 4.1K subscribers!
              </p>
            </div>
          </Card>

          {/* Photo - Full Right Side */}
          <Card className="p-8 tech-border hover:shadow-tech transition-all duration-300 bg-card/50 backdrop-blur-sm flex items-center justify-center">
            <div className="w-full h-96 rounded-xl overflow-hidden">
              <img 
                src="/images/Personal Pic.jpg" 
                alt="Nidhi Subrahmanya"
                className="w-full h-full object-cover object-center ml-4"
              />
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
                  className="text-sm py-2 px-4 tech-border hover:shadow-glow transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:-translate-y-1 group cursor-default opacity-0 animate-fade-in-up"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {skill.icon && <skill.icon className={`h-4 w-4 ${skill.color}`} />}
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