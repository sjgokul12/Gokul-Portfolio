import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Gokul Prasanth S
          </div>

          <p className="text-gray-400 mb-6 text-center max-w-md">
            Building digital experiences with passion and precision
          </p>

          <div className="flex gap-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-cyan-500 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:gokulprasanthsj@gmail.com"
              className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>by Gokul Prasanth S</span>
          </div>

          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
