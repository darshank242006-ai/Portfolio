import { personalInfo, academy, footerContent } from '../data/portfolioData'

export default function Footer() {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Process', href: '#process' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Brand & Taglines */}
        <div>
          <a
            href="#home"
            className="text-2xl font-black tracking-tight text-white hover:text-[#ff2a2a] transition-colors inline-block mb-2"
          >
            {personalInfo.brandName}
          </a>
          <p className="text-xs text-zinc-400">
            {footerContent.taglines.join(' • ')}
          </p>
        </div>

        {/* Anchor Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-zinc-400">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#ff2a2a] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* TAP Academy Credit & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-1.5 text-xs text-zinc-500">
          <div>
            <span>Trained at </span>
            <a
              href={academy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 font-semibold hover:text-[#ff2a2a] underline decoration-zinc-700 underline-offset-4 transition-colors"
            >
              {academy.name}
            </a>
          </div>
          <div>{footerContent.copyright}</div>
        </div>
      </div>
    </footer>
  )
}
