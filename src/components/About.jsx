import { aboutContent, personalInfo, academy, education } from '../data/portfolioData'
import profileImg from '../assets/about/profile.png'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff2a2a] block mb-2">
            Overview
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-950 uppercase">
            {aboutContent.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Illustrated Portrait */}
          <div data-aos="fade-right" className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Subtle background shadow / glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#ff2a2a]/20 to-zinc-200 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-950 shadow-xl max-w-sm">
                <img
                  src={profileImg}
                  alt={`${personalInfo.name} Portrait`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Floating Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white tracking-wide">
                      {personalInfo.name}
                    </p>
                    <p className="text-[10px] text-[#ff2a2a] font-semibold">
                      {personalInfo.title}
                    </p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Bio Text & Credentials */}
          <div data-aos="fade-left" className="lg:col-span-7 space-y-6">
            <div
              className="text-lg sm:text-xl text-zinc-700 leading-relaxed font-normal [&_span]:text-zinc-950 [&_span]:font-bold"
              dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
            />

            {/* Core Tech Stack Badges */}
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
                Primary Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {aboutContent.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-900 border border-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Stats / Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 block mb-1">
                  Location
                </span>
                <p className="text-base font-bold text-zinc-900">
                  {personalInfo.location}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 block mb-1">
                  Education
                </span>
                <p className="text-base font-bold text-zinc-900">
                  {education.degree}
                </p>
                <p className="text-xs text-zinc-600 mt-0.5">
                  {education.institution} ({education.graduation})
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 block mb-1">
                  Training Academy
                </span>
                <a
                  href={academy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-[#ff2a2a] hover:underline inline-flex items-center gap-1"
                >
                  {academy.name}
                  <span className="text-xs">↗</span>
                </a>
                <p className="text-xs text-zinc-600 mt-0.5">
                  Full-Stack Development & Placement Training
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
