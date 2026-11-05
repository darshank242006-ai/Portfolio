import { projects, socialLinks } from '../data/portfolioData'

export function GitHubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  )
}

export function ExternalLinkIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={`${className} stroke-current fill-none`}
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export function ProjectCard({ project, aosDelay }) {
  const isFlagship = project.isFlagship

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`p-[1px] rounded-2xl transition-all duration-300 ${
        isFlagship
          ? 'bg-gradient-to-r from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/80 hover:via-white/20 hover:to-red-500/60 shadow-xl shadow-red-500/5'
          : 'bg-white/10 hover:bg-white/20'
      }`}
    >
      <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90 h-full flex flex-col justify-between">
        <div>
          {/* Optional Badge */}
          {project.badge && (
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#ff2a2a] bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 mb-4">
              {project.badge}
            </span>
          )}

          {/* Number & Title */}
          <div className="flex items-baseline gap-4 mb-3">
            <span className="text-5xl font-black text-white/10 italic font-serif select-none shrink-0">
              {project.number}
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Tag Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techTags.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-white/80 hover:bg-[#ff2a2a] hover:border-[#ff2a2a] hover:text-white transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 items-center pt-2">
          {project.links && project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}

          {project.links &&
          project.links.demo &&
          project.links.demo.trim() !== '' ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff2a2a] hover:bg-[#e02020] text-white transition-all shadow-md shadow-red-500/20"
            >
              <span>Live Demo</span>
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 text-white/40 border border-white/10 cursor-not-allowed select-none">
              <span>Demo Coming Soon</span>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-[#ff2a2a] mb-4">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase mb-4">
            Work that speaks for itself
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto">
            Practical full-stack web applications featuring clean architectures, database management, and robust functionality.
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="flex flex-col gap-6 md:gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              aosDelay={(index + 1) * 100}
            />
          ))}
        </div>

        {/* Explore All Repositories CTA */}
        <div data-aos="fade-up" className="text-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-105 shadow-lg"
          >
            <GitHubIcon className="w-5 h-5" />
            <span>Explore All My Repositories</span>
            <span className="text-[#ff2a2a]">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
