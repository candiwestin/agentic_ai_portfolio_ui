import React, { useState, useEffect, useRef } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Pipelines from './components/Pipelines.jsx'
import Demo from './components/Demo.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = 'home'
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 120) {
          current = section.id
        }
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      {/* Subtle grid background */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: `
          radial-gradient(ellipse 80% 50% at 50% -10%, rgba(245,158,11,0.05) 0%, transparent 60%),
          linear-gradient(rgba(30,45,66,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(30,45,66,0.3) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 48px 48px, 48px 48px',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <Pipelines />
          <Demo />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
