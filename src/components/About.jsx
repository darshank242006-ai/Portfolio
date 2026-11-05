import { useState } from 'react'
import { motion } from 'framer-motion'
import QRCode from 'react-qr-code'
import stackImage from '../assets/about/profile.png'
import { aboutContent, personalInfo, socialLinks } from '../data/portfolioData'

export default function About() {
  const [flipped, setFlipped] = useState(false)

  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative 4-point star - Top Right */}
      <svg
        className="absolute top-10 right-12 w-10 h-10 fill-black opacity-30 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Decorative 4-point star - Bottom Left */}
      <svg
        className="absolute bottom-28 left-8 w-12 h-12 fill-black opacity-30 animate-pulse pointer-events-none"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 24 24"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        {/* Left: ID badge on a lanyard with Flip Card */}
        <div className="md:w-[350px] shrink-0 relative flex justify-center w-full md:w-auto">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              type: 'spring',
              stiffness: 110,
              damping: 9,
              mass: 1.1,
            }}
            className="relative flex flex-col items-center w-[280px]"
          >
            {/* Black lanyard string extending above the badge */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black pointer-events-none" />

            {/* Grey clip rectangle */}
            <div className="w-8 h-4 bg-gray-400 rounded-sm mx-auto mb-1 relative z-10 shadow pointer-events-none" />

            {/* Flip Card Wrapper Button */}
            <button
              type="button"
              aria-label="Flip ID card"
              onClick={() => setFlipped((prev) => !prev)}
              className="relative w-[280px] h-[375px] max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] perspective-1200 focus:outline-none cursor-pointer text-left block select-none"
              style={{ perspective: '1200px' }}
            >
              <div
                className="relative w-full h-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d] preserve-3d"
                style={{
                  transformStyle: 'preserve-3d',
                  WebkitTransformStyle: 'preserve-3d',
                  transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* FRONT Face: ID Badge with Cutout Slot & Portrait */}
                <div
                  className="absolute inset-0 [backface-visibility:hidden] backface-hidden bg-gray-900 rounded-2xl p-3 shadow-2xl flex flex-col justify-between"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)',
                  }}
                >
                  <div className="w-10 h-1.5 bg-gray-700 rounded-full mx-auto mb-2 shrink-0" />
                  <img
                    src={stackImage}
                    alt="Darshan K — Java Developer, TAP Academy student"
                    className="w-full h-full aspect-[3/4] rounded-xl object-cover object-top"
                  />
                </div>

                {/* BACK Face: Visiting Card */}
                <div
                  className="absolute inset-0 [backface-visibility:hidden] backface-hidden [transform:rotateY(180deg)] bg-gradient-to-br from-[#141414] to-[#1f1f1f] rounded-2xl shadow-2xl flex flex-col justify-between text-left text-white border border-white/10"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  {/* 6px red bar across the top */}
                  <div className="h-[6px] w-full bg-[#ff2a2a] rounded-t-2xl shrink-0" />

                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Brand Name */}
                      <h3 className="text-xl font-black text-white leading-tight">
                        {personalInfo.brandName}
                        <span className="text-[#ff2a2a]">.</span>
                      </h3>

                      {/* Title */}
                      <p className="text-xs uppercase tracking-widest text-red-400 font-bold mb-2">
                        {personalInfo.title}
                      </p>

                      {/* Thin Divider */}
                      <div className="border-b border-white/10 my-2" />

                      {/* Contact Details Rows */}
                      <div className="space-y-1.5 text-xs text-white/85">
                        {personalInfo.emails.primary && (
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-red-400 shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            <a
                              href={`mailto:${personalInfo.emails.primary}`}
                              onClick={(e) => e.stopPropagation()}
                              className="hover:underline hover:text-white truncate"
                            >
                              {personalInfo.emails.primary}
                            </a>
                          </div>
                        )}

                        {personalInfo.phone && (
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-red-400 shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                            <a
                              href={`tel:${personalInfo.phone}`}
                              onClick={(e) => e.stopPropagation()}
                              className="hover:underline hover:text-white"
                            >
                              {personalInfo.phone}
                            </a>
                          </div>
                        )}

                        {personalInfo.location && (
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-red-400 shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            <span className="truncate">{personalInfo.location}</span>
                          </div>
                        )}

                        {socialLinks.linkedin && (
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-red-400 shrink-0 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <a
                              href={socialLinks.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="hover:underline hover:text-white"
                            >
                              LinkedIn
                            </a>
                          </div>
                        )}

                        {socialLinks.github && (
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-red-400 shrink-0 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              />
                            </svg>
                            <a
                              href={socialLinks.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="hover:underline hover:text-white"
                            >
                              GitHub
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* QR Code and Caption at the bottom */}
                    <div className="flex items-center gap-3 pt-2.5 border-t border-white/10 mt-2">
                      <div className="bg-white rounded-lg p-1.5 shrink-0">
                        <QRCode
                          value={
                            socialLinks.linkedin ||
                            'mailto:' + personalInfo.emails.primary
                          }
                          size={72}
                        />
                      </div>
                      <span className="text-[10px] text-white/60 leading-tight">
                        Scan to connect
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {/* Tap to flip hint */}
            <p className="text-xs font-bold text-black/60 mt-4 select-none">
              Tap the card to flip ↻
            </p>
          </motion.div>
        </div>

        {/* Right Content */}
        <div data-aos="fade-left" className="flex-1">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            {aboutContent.heading}
          </h2>
          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* White torn-paper SVG divider along the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-12 md:h-20 fill-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  )
}
