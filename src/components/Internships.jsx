import { internshipsList } from '../data/portfolioData'

export function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top Row: Duration & Mini Badge */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs uppercase text-white/40 tracking-wider">
            {intern.duration}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white border border-white/15">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white mt-4 mb-1">
          {intern.role}
        </h3>
        <p className="text-xs uppercase tracking-widest font-bold text-red-200 mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained List */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider font-bold text-white/70 mb-3">
            Skills Gained:
          </h4>
          <ul className="space-y-2 text-xs md:text-sm text-red-50/90">
            {intern.skills.map((skill, sIdx) => (
              <li key={sIdx} className="flex items-start gap-2">
                <span className="text-white font-bold shrink-0">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technologies Row at the Bottom */}
      <div className="border-t border-white/10 pt-4 mt-auto">
        <h4 className="text-xs uppercase tracking-wider font-bold text-white/70 mb-2">
          Technologies:
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {intern.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded text-xs font-mono bg-black/40 text-white/90 border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Internships() {
  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Torn-paper divider at the top edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 -translate-y-[1px]">
        <svg
          className="relative block w-full h-12 md:h-20 fill-[#0a0a0a] rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative pulsing black star bottom-left */}
      <svg
        className="absolute bottom-10 left-8 w-12 h-12 fill-black opacity-20 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase mb-4">
            Work Experience
          </h2>
          <p className="text-red-100 text-sm md:text-base max-w-xl mx-auto">
            Practical development internships, hands-on production code, and professional engineering practices.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard
              key={intern.organization + index}
              intern={intern}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
