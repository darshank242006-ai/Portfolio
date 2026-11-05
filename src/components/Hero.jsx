import { heroContent, personalInfo, socialLinks } from '../data/portfolioData'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        {/* Availability Badge */}
        <div
          data-aos="fade-down"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-zinc-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Open to Java Developer Opportunities</span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-400">{personalInfo.location}</span>
        </div>

        {/* Greeting & Headline */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-zinc-400 text-lg sm:text-xl font-medium mb-3 tracking-wide"
        >
          {heroContent.greeting}
        </h2>

        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase leading-none mb-6"
        >
          <span className="block text-white">Full-Stack</span>
          <span className="block text-[#ff2a2a] drop-shadow-[0_0_35px_rgba(255,42,42,0.35)]">
            {heroContent.titleHighlight}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="max-w-2xl mx-auto text-base sm:text-xl text-zinc-400 font-normal leading-relaxed mb-10"
        >
          {heroContent.subtitle}
        </p>

        {/* Call to Actions */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href={heroContent.ctaPrimary.href}
            className="px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider bg-[#ff2a2a] text-white hover:bg-[#e02020] transition-all duration-300 shadow-lg shadow-[#ff2a2a]/20 hover:scale-105 active:scale-95"
          >
            {heroContent.ctaPrimary.text}
          </a>

          <a
            href={heroContent.ctaSecondary.href}
            className="px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 border border-white/15 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {heroContent.ctaSecondary.text}
          </a>

          <a
            href={heroContent.ctaResume.href}
            download
            className="px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider bg-transparent text-zinc-300 hover:text-white border border-white/20 hover:border-white transition-all duration-300"
          >
            {heroContent.ctaResume.text}
          </a>
        </div>

        {/* Social Links & Quick Highlights */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-white/10 text-zinc-400 text-sm"
        >
          <div className="flex items-center gap-6">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <span>GitHub</span>
              <span className="text-xs text-[#ff2a2a]">↗</span>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <span>LinkedIn</span>
              <span className="text-xs text-[#ff2a2a]">↗</span>
            </a>
          </div>

          <div className="hidden sm:block text-zinc-700">|</div>

          <div className="text-zinc-400 text-xs sm:text-sm">
            Core Focus: <span className="text-zinc-200 font-semibold">Java • Spring Boot • SQL • React</span>
          </div>
        </div>
      </div>
    </section>
  )
}
