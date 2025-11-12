import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#0ea5e9_0%,_transparent_40%),radial-gradient(circle_at_bottom_right,_#9333ea_0%,_transparent_40%)] opacity-30 animate-pulse"></div>

      {/* Animated floating blobs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-[28rem] h-[28rem] bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Gokul Prasanth S
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-2 tracking-wide">
              Software Developer
            </h2>
            <h3 className="text-xl md:text-2xl text-cyan-400 mb-6">
              React JS Developer
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl">
              Passionate full-stack developer, building visually stunning and high-performing web experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110"
              >
                Get In Touch
              </a>

              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
              >
                <Download size={20} />
                View Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/sjgokul12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-cyan-500 transition-all duration-300 transform hover:scale-125"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/gokulprasanth-sj-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-125"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:gokulprasanthsj@gmail.com"
                className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition-all duration-300 transform hover:scale-125"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Photo Section (Image size increased) */}
          <div className="flex-1 flex justify-center perspective">
            <div className="relative group">
              <div
                className="w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem] rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 shadow-2xl transition-transform duration-700 group-hover:rotate-3 group-hover:scale-110"
                style={{
                  boxShadow:
                    "0 0 100px rgba(14, 165, 233, 0.4), 0 0 150px rgba(147, 51, 234, 0.4)",
                }}
              >
                <div className="w-full h-full rounded-3xl overflow-hidden bg-slate-900 flex items-center justify-center">
                  <img
                    src="/gokul.jpeg"
                    alt="Gokul Prasanth"
                    className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-115"
                  />
                </div>
              </div>

              {/* Outer glow effects */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
