import { useState } from 'react'
import { personalInfo, heroContent } from '../data/portfolioData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Process', href: '#process' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/85 border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#home"
          className="text-2xl font-black tracking-tight text-white hover:text-[#ff2a2a] transition-colors flex items-center gap-2"
        >
          <span className="w-3 h-3 rounded-full bg-[#ff2a2a] inline-block animate-pulse"></span>
          {personalInfo.brandName}
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-[#ff2a2a] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Resume CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={heroContent.ctaResume.href}
            download
            className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-transparent text-white border border-white/20 hover:border-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white transition-all duration-300"
          >
            {heroContent.ctaResume.text}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-zinc-300 hover:text-white focus:outline-none p-2"
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-zinc-300 hover:text-[#ff2a2a] py-2 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={heroContent.ctaResume.href}
              download
              onClick={() => setIsOpen(false)}
              className="block text-center py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff2a2a] text-white hover:bg-[#e02020] transition-colors"
            >
              {heroContent.ctaResume.text}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
