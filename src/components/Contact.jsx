import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { personalInfo, socialLinks, emailjsConfig } from '../data/portfolioData'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: null })

    // Check if valid EmailJS credentials are configured
    const hasValidEmailJS =
      emailjsConfig.serviceId &&
      emailjsConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      emailjsConfig.templateId &&
      emailjsConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      emailjsConfig.publicKey &&
      emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (hasValidEmailJS) {
      try {
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: personalInfo.name,
          },
          emailjsConfig.publicKey,
        )
        setStatus({ submitting: false, submitted: true, error: null })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } catch (err) {
        console.error('EmailJS error:', err)
        setStatus({
          submitting: false,
          submitted: false,
          error: 'Failed to send message via EmailJS. Please reach out directly via email.',
        })
      }
    } else {
      // Direct mailto fallback
      const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry',
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`,
      )}`
      window.location.href = mailtoUrl
      setStatus({ submitting: false, submitted: true, error: null })
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div data-aos="fade-up" className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff2a2a] block mb-2">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-950 uppercase mb-4">
            Let's Connect
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Have a question, job opportunity, or collaboration idea? Feel free to reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details */}
          <div data-aos="fade-up" className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 block mb-1">
                Email Address
              </span>
              <a
                href={`mailto:${personalInfo.emails.primary}`}
                className="text-base font-bold text-zinc-900 hover:text-[#ff2a2a] transition-colors break-all"
              >
                {personalInfo.emails.primary}
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 block mb-1">
                Phone Number
              </span>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-base font-bold text-zinc-900 hover:text-[#ff2a2a] transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 block mb-1">
                Location
              </span>
              <p className="text-base font-bold text-zinc-900">
                {personalInfo.location}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 block mb-2">
                Social Profiles
              </span>
              <div className="flex flex-wrap gap-4 text-sm font-bold text-zinc-900">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff2a2a] transition-colors flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <span className="text-xs text-[#ff2a2a]">↗</span>
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff2a2a] transition-colors flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <span className="text-xs text-[#ff2a2a]">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-up" data-aos-delay="150" className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50 border border-zinc-200 shadow-sm">
              <h3 className="text-xl font-bold text-zinc-900 mb-6">
                Send a Direct Message
              </h3>

              {status.submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm">
                  Thank you! Your message inquiry has been triggered. I will get back to you shortly.
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-[#ff2a2a] text-sm">
                  {status.error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#ff2a2a] text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#ff2a2a] text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Opportunity Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#ff2a2a] text-sm transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#ff2a2a] text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-[#ff2a2a] text-white hover:bg-[#e02020] transition-colors shadow-md disabled:opacity-50"
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
