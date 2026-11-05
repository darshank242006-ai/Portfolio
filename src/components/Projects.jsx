import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div data-aos="fade-up" className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff2a2a] block mb-2">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase mb-4">
            Featured Projects
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Real-world web applications built with Java backend architectures and responsive user interfaces.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 relative ${
                project.isFlagship
                  ? 'bg-zinc-950 border-[#ff2a2a]/40 shadow-xl shadow-[#ff2a2a]/5'
                  : 'bg-zinc-950/80 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="max-w-2xl">
                  {/* Project Number & Badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                      Project #{project.number}
                    </span>
                    {project.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ff2a2a]/15 text-[#ff2a2a] border border-[#ff2a2a]/30">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techTags.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 text-zinc-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Action Links */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[180px]">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-center bg-white text-black hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>View GitHub</span>
                      <span className="text-xs">↗</span>
                    </a>
                  )}

                  {project.links.demo ? (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-center bg-[#ff2a2a] text-white hover:bg-[#e02020] transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Live Demo</span>
                      <span className="text-xs">↗</span>
                    </a>
                  ) : (
                    <span className="px-6 py-3 rounded-full text-xs font-medium uppercase tracking-wider text-center bg-zinc-900 text-zinc-500 border border-white/10 cursor-not-allowed">
                      Demo Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
