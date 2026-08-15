import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Capabilities from './sections/Capabilities'
import Features from './sections/Features'
import ChatDemo from './sections/ChatDemo'
import CommandCenter from './sections/CommandCenter'
import Analytics from './sections/Analytics'
import Security from './sections/Security'
import Integrations from './sections/Integrations'
import Access from './sections/Access'
import HowItWorks from './sections/HowItWorks'
import Roadmap from './sections/Roadmap'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'
import Footer from './sections/Footer'

function App() {
  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    initLenis()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Features />
        <ChatDemo />
        <CommandCenter />
        <Analytics />
        <Security />
        <Integrations />
        <Access />
        <HowItWorks />
        <Roadmap />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
