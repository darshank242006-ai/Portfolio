import { internshipsList, education } from '../data/portfolioData'

export default function Experience() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div data-aos="fade-up" className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff2a2a] block mb-2">
            Background
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase mb-4">
            Experience & Education
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Professional internship training, practical software development, and academic foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Internship Experience */}
          <div data-aos="fade-up" className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
              Internship Experience
            </h3>

            {internshipsList.map((item) => (
              <div
                key={item.organization}
                className="p-8 rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xl font-bold text-white">{item.role}</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                    {item.duration}
                  </span>
                </div>

                <div className="text-sm font-semibold text-[#ff2a2a] mb-5">
                  {item.organization}
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
                    Key Practical Learnings
                  </h4>
                  <ul className="space-y-2">
                    {item.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2">
                        <span className="text-[#ff2a2a] font-bold">✓</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded text-xs bg-white/5 text-zinc-400 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Education */}
          <div data-aos="fade-up" data-aos-delay="100" className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
              Education
            </h3>

            <div className="p-8 rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/20 transition-all duration-300">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff2a2a] block mb-2">
                Degree
              </span>
              <h4 className="text-xl font-bold text-white mb-1">
                {education.degree}
              </h4>
              <p className="text-sm text-zinc-300 mb-4">
                {education.institution}
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                <span>Graduation Timeline</span>
                <span className="font-semibold text-white">{education.graduation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
