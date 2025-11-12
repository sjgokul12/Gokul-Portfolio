import { Code2, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Problem Solver',
      description: 'Creative solutions to complex challenges',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Fast Learner',
      description: 'Quick to adapt to new technologies',
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-cyan-500/20">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Hello! I'm <span className="text-cyan-400 font-semibold">Gokul Prasanth S</span>, a passionate
              software developer. I specialize in building exceptional digital experiences
              with a focus on React JS and full-stack development.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              With a strong foundation in computer science and hands-on experience in developing scalable
              web applications, I bring creative solutions to complex problems. I'm constantly learning and
              exploring new technologies to stay at the forefront of web development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-cyan-400 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
