
import { Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen px-8 py-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Get in Touch</h2>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700 mb-16">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            I'm interested in internship opportunities and always open to connecting with fellow students and professionals. Feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            
            <a
              href="#"
              className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
            >
              <Mail size={20} />
              Email
            </a>
          </div>
        </div>

        {/* Footer links */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-6">
            <div className="space-y-3">
              <div className="text-gray-400">Summary</div>
              <div className="text-gray-400">Experience</div>
              <div className="text-gray-400">Projects</div>
              <div className="text-gray-400">Contact</div>
            </div>
            <div className="space-y-3">
              <div className="text-gray-400">LinkedIn</div>
              <div className="text-gray-400">Resume</div>
              <div className="text-gray-400">Email</div>
              <div className="text-gray-400">GitHub</div>
            </div>
            <div className="space-y-3">
              <div className="text-gray-400">[Your Projects]</div>
              <div className="text-gray-400">[Will Be Listed]</div>
            </div>
            <div className="space-y-3">
              <div className="text-gray-400">[Here When]</div>
              <div className="text-gray-400">[You Add Them]</div>
            </div>
          </div>
          
          {/* Your name attribution */}
          <div className="border-t border-gray-600 pt-6">
            <p className="text-gray-400 text-sm">© Nidhi Subrahmanya</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
