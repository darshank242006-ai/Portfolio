import { softSkillsList } from '../data/portfolioData'

export default function SoftSkills() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-[#ff2a2a] mb-4">
            Strengths
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-2">
            Soft Skills
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Core interpersonal strengths that support clean engineering and collaborative problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#ff2a2a]/40 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{skill.icon}</div>
              <h3 className="text-base font-bold text-white mb-2">{skill.name}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
