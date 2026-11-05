import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Process from './components/Process'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ff2a2a] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechnicalSkills />
        <Process />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
