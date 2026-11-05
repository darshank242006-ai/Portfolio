import { technicalSkills, softSkillsList } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff2a2a] block mb-2">
            Expertise & Capabilities
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase mb-4">
            Technical Stack
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Core programming languages, backend frameworks, databases, and developer tooling.
          </p>
        </div>

        {/* Technical Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {technicalSkills.categories.map((category, index) => (
            <div
              key={category.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-[#ff2a2a]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sm font-black text-[#ff2a2a] mb-5">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-2 text-sm text-zinc-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a]" />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div data-aos="fade-up" className="pt-8 border-t border-white/10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-2">
              Professional & Soft Skills
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Workplace strengths that support clean engineering and collaborative problem solving.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkillsList.map((skill, index) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="p-6 rounded-2xl bg-zinc-950/60 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h4 className="text-base font-bold text-white mb-2">{skill.name}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
