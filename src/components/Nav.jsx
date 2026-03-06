import React, { useState, useEffect } from 'react'

const links = [
  { id: 'home',      label: 'Home' },
  { id: 'about',     label: 'About' },
  { id: 'pipelines', label: 'Pipelines' },
  { id: 'demo',      label: 'Run Demos' },
  { id: 'contact',   label: 'Contact' },
]

export default function Nav({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(8,11,16,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(30,45,66,0.8)' : '1px solid transparent',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 24px',
        height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <button onClick={() => scrollTo('home')} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg, #f59e0b, #b45309)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, fontWeight: 700, color: '#080b10',
            fontFamily: 'var(--font-mono)',
          }}>CW</div>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 16, color: 'var(--text)', letterSpacing: '0.02em',
          }}>Candi Westin</span>
        </button>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 4 }} className="desktop-nav">
          {links.map(link => (
            <button key={link.id} onClick={() => scrollTo(link.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '6px 14px', borderRadius: 6,
              fontFamily: 'var(--font-mono)', fontSize: 12,
              letterSpacing: '0.05em',
              color: activeSection === link.id ? 'var(--amber)' : 'var(--text-dim)',
              background: activeSection === link.id ? 'var(--amber-glow)' : 'transparent',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { if (activeSection !== link.id) e.target.style.color = 'var(--text)' }}
            onMouseLeave={e => { if (activeSection !== link.id) e.target.style.color = 'var(--text-dim)' }}
            >{link.label}</button>
          ))}
        </nav>

        {/* CTA */}
        <a href="https://github.com/candiwestin/agentic_ai_portfolio"
          target="_blank" rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono)', fontSize: 12,
            color: 'var(--amber)', border: '1px solid var(--amber-dim)',
            padding: '7px 16px', borderRadius: 6, textDecoration: 'none',
            transition: 'all 0.2s', letterSpacing: '0.05em',
          }}
          onMouseEnter={e => { e.target.style.background = 'var(--amber-glow)' }}
          onMouseLeave={e => { e.target.style.background = 'transparent' }}
        >GitHub ↗</a>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </header>
  )
}
