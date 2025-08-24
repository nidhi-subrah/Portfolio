
import { Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen px-8 py-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-heading">Get in Touch</h2>
        
        <div className="card p-8 mb-12">
          <p className="text-[#E0E0E0] text-lg leading-relaxed">
            I'm interested in Summer 2025 internship opportunities. Feel free to reach out if you'd like to connect!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-3"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          
          <a
            href="mailto:your.email@example.com"
            className="btn-secondary flex items-center gap-3"
          >
            <Mail size={20} />
            Email
          </a>
        </div>

        {/* Footer links */}
        <div className="mt-16 card p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-6">
            <div className="space-y-3">
              <div className="text-[#A0A0A0]">Summary</div>
              <div className="text-[#A0A0A0]">Experience</div>
              <div className="text-[#A0A0A0]">Projects</div>
              <div className="text-[#A0A0A0]">Contact</div>
            </div>
            <div className="space-y-3">
              <div className="text-[#A0A0A0]">LinkedIn</div>
              <div className="text-[#A0A0A0]">Resume</div>
              <div className="text-[#A0A0A0]">Email</div>
              <div className="text-[#A0A0A0]">GitHub</div>
            </div>
            <div className="space-y-3">
              <div className="text-[#A0A0A0]">[Your Projects]</div>
              <div className="text-[#A0A0A0]">[Will Be Listed]</div>
            </div>
            <div className="space-y-3">
              <div className="text-[#A0A0A0]">[Here When]</div>
              <div className="text-[#A0A0A0]">[You Add Them]</div>
            </div>
          </div>
          
          {/* Your name attribution */}
          <div className="border-t border-[#333333] pt-6">
            <p className="text-[#A0A0A0] text-sm">© Nidhi Subrahmanya</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
