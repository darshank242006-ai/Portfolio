import { heroContent, personalInfo, socialLinks, academy } from '../data/portfolioData'
import profileImg from '../assets/about/profile.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff2a2a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Availability Badge */}
            <div
              data-aos="fade-down"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-zinc-300 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Open to Java Developer Opportunities</span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-400">{personalInfo.location}</span>
            </div>

            {/* Greeting */}
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-zinc-400 text-lg sm:text-xl font-medium mb-3 tracking-wide"
            >
              {heroContent.greeting}
            </h2>

            {/* Headline */}
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-tight mb-6"
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
              className="max-w-xl text-base sm:text-lg text-zinc-400 font-normal leading-relaxed mb-8 mx-auto lg:mx-0"
            >
              {heroContent.subtitle}
            </p>

            {/* Call to Actions */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <a
                href={heroContent.ctaPrimary.href}
                className="px-7 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#ff2a2a] text-white hover:bg-[#e02020] transition-all duration-300 shadow-lg shadow-[#ff2a2a]/20 hover:scale-105 active:scale-95"
              >
                {heroContent.ctaPrimary.text}
              </a>

              <a
                href={heroContent.ctaSecondary.href}
                className="px-7 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 border border-white/15 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                {heroContent.ctaSecondary.text}
              </a>

              <a
                href={heroContent.ctaResume.href}
                download
                className="px-7 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-transparent text-zinc-300 hover:text-white border border-white/20 hover:border-white transition-all duration-300"
              >
                {heroContent.ctaResume.text}
              </a>
            </div>

            {/* Social Links & Highlights */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 border-t border-white/10 text-zinc-400 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-4">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>GitHub</span>
                  <span className="text-[#ff2a2a]">↗</span>
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>LinkedIn</span>
                  <span className="text-[#ff2a2a]">↗</span>
                </a>
              </div>

              <div className="hidden sm:block text-zinc-700">|</div>

              <div className="text-zinc-400 text-xs">
                Trained at <span className="text-zinc-200 font-semibold">{academy.name}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Illustrated Portrait */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative animate-float">
              {/* Decorative Red Backdrop Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#ff2a2a] to-transparent rounded-3xl blur-lg opacity-40"></div>

              {/* Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl max-w-sm sm:max-w-md">
                <img
                  src={profileImg}
                  alt={`${personalInfo.name} Illustrated Portrait`}
                  className="w-full h-auto object-cover"
                />

                {/* Bottom Floating Tech Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black tracking-wide text-white uppercase">
                      {personalInfo.brandName}
                    </p>
                    <p className="text-[10px] text-[#ff2a2a] font-medium">
                      Java • Spring Boot • MySQL
                    </p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a2a] animate-ping"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
