import { Code, Database, Sparkles, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: <Code className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      skills: ['React JS', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      category: 'Backend & Databases',
      icon: <Database className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      skills: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'PostgreSQL', 'REST APIs', 'Supabase'],
    },
    {
      category: 'AI Tools',
      icon: <Sparkles className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      skills: ['ChatGPT', 'AI Prompts', 'Claude', 'GitHub Copilot', 'AI Integration'],
    },
    {
      category: 'Other Skills',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      skills: ['Git & GitHub', 'Problem Solving', 'Data Science', 'Machine Learning', 'Team Collaboration'],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 bg-gradient-to-r ${category.color} bg-opacity-20 border border-white/20 rounded-lg text-white font-medium hover:scale-110 transition-transform duration-300 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
