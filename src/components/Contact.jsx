import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  emailjsConfig,
  personalInfo,
  socialLinks,
} from '../data/portfolioData'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const firstName = formRef.current?.querySelector('#firstName')?.value.trim() || ''
    const lastName = formRef.current?.querySelector('#lastName')?.value.trim() || ''
    const email = formRef.current?.querySelector('#email')?.value.trim() || ''
    const message = formRef.current?.querySelector('#message')?.value.trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(
          `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`,
        )}`,
        '_blank',
      )
      setStatus('success')
      formRef.current?.reset()
      setTimeout(() => setStatus('idle'), 3000)
    } else {
      try {
        const emailjs = await import('@emailjs/browser')
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        setStatus('success')
        formRef.current?.reset()
      } catch (err) {
        console.error('EmailJS error:', err)
        setStatus('error')
      }
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Behind: Giant Parallax "Contact" Word */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/[0.04]"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* In front: Red Contact Card aligned to the right */}
      <div className="w-full relative z-10 flex justify-end">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 rounded-tl-3xl shadow-2xl"
        >
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Reach Me
            </span>
            <a
              href={socialLinks.instagram || 'https://instagram.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-black/20 hover:bg-black/30 text-white border border-white/20 transition-all backdrop-blur-sm"
            >
              DM on Instagram ↗
            </a>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column: Underline-only inputs */}
              <div className="space-y-8">
                <div>
                  <input
                    id="firstName"
                    name="first_name"
                    type="text"
                    required
                    placeholder="First Name *"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    id="lastName"
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="Email Address *"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Right Column: Textarea */}
              <div className="flex flex-col">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message *"
                  rows={5}
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors resize-none min-h-[120px] flex-1"
                />
              </div>
            </div>

            {/* Bottom Section */}
            <div className="space-y-6 pt-4 border-t border-white/20">
              {/* Permission Checkbox */}
              <label className="flex items-center gap-3 text-xs md:text-sm text-white/90 cursor-pointer select-none">
                <input
                  type="checkbox"
                  defaultChecked
                  required
                  className="w-4 h-4 rounded border-white/50 text-black focus:ring-0 accent-black cursor-pointer"
                />
                <span>
                  I consent to having this website store my submitted information
                  so they can respond to my inquiry.
                </span>
              </label>

              {/* Response Note */}
              <p className="text-xs text-white/80">
                Your message will be sent directly to my inbox. I typically
                respond within 24-48 hours.
              </p>

              {/* Urgent Email & Submit Button Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
                <div className="text-xs text-white/90">
                  Need urgent response?{' '}
                  <a
                    href={`mailto:${personalInfo.emails.primary}?subject=Urgent Inquiry – Portfolio`}
                    className="underline font-bold text-white hover:text-black transition-colors"
                  >
                    Send Direct Email ↗
                  </a>
                </div>

                {/* Submit Pill Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl border cursor-pointer ${
                    status === 'sending'
                      ? 'bg-gray-400/80 border-gray-400 text-gray-900 cursor-not-allowed'
                      : status === 'success'
                      ? 'bg-emerald-600 border-emerald-500 text-white'
                      : status === 'error'
                      ? 'bg-red-950 border-red-900 text-red-200'
                      : 'bg-black/30 border-white/30 text-white hover:bg-white hover:text-[#ff2a2a] hover:border-white'
                  }`}
                >
                  {status === 'sending' ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : status === 'success' ? (
                    <span>Sent Successfully ✓</span>
                  ) : status === 'error' ? (
                    <span>Failed — Try Again</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
