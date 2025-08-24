import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Always excited to discuss new opportunities and interesting projects
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
                  <div className="text-muted-foreground">nidhi@example.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center tech-glow">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-muted-foreground">Waterloo, Ontario</div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex gap-4">
                  <Button variant="tech" size="sm" className="group">
                    <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="group">
                    <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Message */}
          <Card className="p-8 tech-border hover:shadow-tech transition-all duration-300 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Quick Message</h3>
            
            <div className="space-y-4">
              <div className="text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  I'm always open to discussing new opportunities, collaborating on 
                  interesting projects, or just having a chat about technology and innovation.
                </p>
                <p className="mb-6">
                  Whether you're looking for a co-op student, want to collaborate on a project, 
                  or have questions about my work, feel free to reach out!
                </p>
              </div>

              <Button variant="tech" size="lg" className="w-full group">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Send Email
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Usually responds within 24 hours
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 Nidhi Subrahmanya. Built with ❤️ using React & TypeScript
          </p>
        </div>
      </div>
    </section>
  );
};