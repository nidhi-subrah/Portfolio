import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-gradient cursor-default" style={{ position: 'relative', display: 'inline-block' }}>
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Always excited to discuss new opportunities and interesting projects!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="p-8 tech-border hover:shadow-tech transition-all duration-300 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center tech-glow">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-muted-foreground">n2subrah@uwaterloo.ca</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center tech-glow">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-muted-foreground">Toronto, Ontario</div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex gap-4">
                  <Button 
                    variant="tech" 
                    size="sm" 
                    className="group"
                    onClick={() => window.open('https://www.linkedin.com/in/nidhi-subrahmanya/', '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group"
                    onClick={() => window.open('https://github.com/nidhi-subrah', '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Message */}
          <Card className="p-8 tech-border hover:shadow-tech transition-all duration-300 bg-card/50 backdrop-blur-sm group">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Quick Message</h3>
            
            <div className="space-y-4">
              <div className="text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors duration-300">
                <p className="mb-4">
                  I'm always open to discussing new opportunities, collaborating on 
                  interesting projects, or just having a chat about technology and innovation.
                </p>
                <p className="mb-6">
                  Whether you're looking for a co-op student, want to collaborate on a project, 
                  or have questions about my work, feel free to reach out!
                </p>
              </div>

              <Button 
                variant="glow" 
                size="lg" 
                className="w-full group bg-transparent border-2 border-transparent text-foreground relative overflow-hidden hover:shadow-glow transition-all duration-300"
                onClick={() => {
                  const email = 'n2subrah@uwaterloo.ca';
                  const subject = 'Hello from your portfolio!';
                  const body = 'Hi Nidhi,\n\nI came across your portfolio and would like to connect...';
                  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  window.location.href = mailtoLink;
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-100 p-[2px] rounded-md">
                  <div className="bg-background rounded-md w-full h-full"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform relative z-10" />
                <span className="relative z-10">Send Email</span>
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Responds within 24 hours
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2025 Nidhi Subrahmanya. Built with &hearts; using React & TypeScript
          </p>
        </div>
      </div>
    </section>
  );
};