import { technicalSkills } from '../data/portfolioData'

export function SkillBadge({ name }) {
  return (
    <span className="inline-flex items-center rounded-full px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-red-600/20 transition-all duration-300">
      {name}
    </span>
  )
}

export function SkillCard({ category, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_25px_rgba(239,68,68,0.2)] transition-all duration-300 flex flex-col"
    >
      <h3 className="text-xl font-black uppercase text-white tracking-wider border-b border-white/10 pb-4 mb-5">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} />
        ))}
      </div>
    </div>
  )
}

export default function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Two blurred red circles in the background */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header (Centered) */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-[#ff2a2a] mb-4">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-4">
            My Skillset
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto">
            Technologies, frameworks, databases, and developer tools I use to build robust software.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
