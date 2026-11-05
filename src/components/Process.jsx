import { skillsContent } from '../data/portfolioData'

export default function Process() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff2a2a] block mb-2">
            {skillsContent.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase mb-4">
            {skillsContent.heading}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {skillsContent.description}
          </p>
        </div>

        {/* Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillsContent.cards.map((step, index) => (
            <div
              key={step.number}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="p-8 rounded-2xl bg-zinc-950 border border-white/10 hover:border-[#ff2a2a] transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl font-black text-zinc-700 group-hover:text-[#ff2a2a] transition-colors block mb-4">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ready to ship badge */}
        <div data-aos="fade-up" className="text-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-wider text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-[#ff2a2a]"></span>
            {skillsContent.endText}
          </span>
        </div>
      </div>
    </section>
  )
}
