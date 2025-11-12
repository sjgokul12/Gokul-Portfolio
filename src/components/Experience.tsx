import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Aviontive LLP',
      location: 'Coimbatore',
      duration: 'Completed',
      description: 'Developing and maintaining full-stack web applications using modern technologies',
      skills: ['React', 'Node.js', 'Database Management', 'API Development'],
    },
    {
      role: 'Data Science Intern',
      company: 'Hindusthan College of Arts & Science',
      location: 'Coimbatore',
      duration: 'During BSc IT',
      description: 'Worked on data analysis projects and machine learning implementations',
      skills: ['Python', 'Data Analysis', 'Machine Learning', 'Data Visualization'],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center text-white">
                    <Briefcase className="w-8 h-8" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-cyan-400 text-lg font-semibold mb-3">{exp.company}</p>

                  <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
