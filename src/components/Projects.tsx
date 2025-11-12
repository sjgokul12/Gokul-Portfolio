import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Shoe Shop E-Commerce",
    category: "React Project",
    image: "/Shoe Shop E-Commerce.jpeg",
    link: "https://your-shoe-shop-demo-link.com",
  },
  {
    title: "Portfolio Website",
    category: "React Project",
    image: "/Portfolio Website.jpeg",
    link: "https://your-portfolio-demo-link.com",
  },
  {
    title: "Deep Learning Model",
    category: "AI & Machine Learning",
    image: "/Deep Learning.jpeg",
    link: "https://your-deep-learning-demo-link.com",
  },
  {
    title: "Weather API App",
    category: "JavaScript Project",
    image: "/Weather API.jpeg",
    link: "https://your-weather-app-demo-link.com",
  },
  {
    title: "IoT Car Pollution Detection",
    category: "IoT Project",
    image: "/iot.jpeg",
    link: "https://your-iot-demo-link.com",
  },
  {
    title: "Company Web Portal",
    category: "Full Stack Project",
    image: "/Company Web Portal.jpeg",
    link: "https://your-company-portal-demo-link.com",
  },
  {
    title: "Icon App",
    category: "Frontend Project",
    image: "/Icon App.jpeg",
    link: "https://your-icon-app-demo-link.com",
  },
  {
    title: "Travel App",
    category: "React Project",
    image: "/Travel App.jpeg",
    link: "https://your-travel-app-demo-link.com",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my best web, IoT, and AI-based projects with modern designs and real functionality.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
            >
              {/* Project image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-opacity duration-500"></div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white p-2 rounded-full shadow-lg">
                    <ExternalLink className="text-cyan-600" size={20} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.category}</p>
                <div className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-cyan-600 text-white">
                  {project.category}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
