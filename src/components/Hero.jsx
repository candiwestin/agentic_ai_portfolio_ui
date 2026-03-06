import React, { useEffect, useState } from 'react'

const TITLES = ['Data & AI Engineer', 'Agentic Pipeline Architect', 'Senior Data Engineer']

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = TITLES[titleIndex]
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2200)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
        return () => clearTimeout(t)
      } else {
        setTitleIndex((i) => (i + 1) % TITLES.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, titleIndex])

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: '0 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative vertical line */}
      <div style={{
        position: 'absolute', left: '50%', top: 0, bottom: 0,
        width: 1, background: 'linear-gradient(to bottom, transparent, rgba(245,158,11,0.15), transparent)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', paddingTop: 80 }}>
        <div style={{ maxWidth: 760 }}>

          {/* Badges */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 0 }}>
          <div className="animate-fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            border: '1px solid rgba(245,158,11,0.5)',
            background: 'rgba(245,158,11,0.07)',
            padding: '6px 14px', borderRadius: 20,
          }}>
            <div style={{
              width: 7, height: 7, borderRadius: '50%',
              background: 'var(--success)',
              animation: 'pulse-amber 2s infinite',
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              color: 'var(--amber)', letterSpacing: '0.08em', fontWeight: 600,
            }}>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          {/* DoD Clearance badge */}
          <div className="animate-fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            border: '1px solid rgba(245,158,11,0.5)',
            background: 'rgba(245,158,11,0.07)',
            padding: '6px 14px', borderRadius: 20,
          }}>
            <span style={{ fontSize: 13 }}>🔐</span>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              color: 'var(--amber)', letterSpacing: '0.08em', fontWeight: 600,
            }}>DoD SECRET SECURITY CLEARANCE</span>
          </div>
          </div>
          <div style={{ marginBottom: 32 }} />

          {/* Name */}
          <h1 className="animate-fade-up-1" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 8vw, 88px)',
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: 16,
          }}>
            Candi<br />
            <span style={{
              WebkitTextStroke: '1px rgba(226,232,240,0.3)',
              color: 'transparent',
            }}>Westin</span>
          </h1>

          {/* Typewriter title */}
          <div className="animate-fade-up-2" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            color: 'var(--amber)',
            marginBottom: 28,
            minHeight: 32,
            letterSpacing: '0.02em',
          }}>
            {displayed}
            <span style={{
              display: 'inline-block', width: 2, height: '1em',
              background: 'var(--amber)', marginLeft: 2, verticalAlign: 'text-bottom',
              animation: 'blink 1s step-end infinite',
            }} />
          </div>

          {/* Bio */}
          <p className="animate-fade-up-3" style={{
            fontSize: 18, color: 'var(--text-dim)', lineHeight: 1.8,
            maxWidth: 500, marginBottom: 48,
            fontWeight: 300, textAlign: 'left',
          }}>
            28 years building data systems that businesses depend on.
            Now applying that foundation to <strong style={{ color: 'var(--text)', fontWeight: 500 }}>agentic AI pipelines</strong> —
            RAG, LangGraph, MCP workflows, and multi-agent orchestration.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 64 }}>
            <button onClick={() => document.getElementById('pipelines')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'var(--amber)', color: '#080b10',
                border: 'none', borderRadius: 8, padding: '13px 28px',
                fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600,
                cursor: 'pointer', letterSpacing: '0.05em',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.target.style.opacity = '0.85'}
              onMouseLeave={e => e.target.style.opacity = '1'}
            >VIEW PIPELINES →</button>

            <button onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'transparent', color: 'var(--text)',
                border: '1px solid var(--border2)', borderRadius: 8, padding: '13px 28px',
                fontFamily: 'var(--font-mono)', fontSize: 13,
                cursor: 'pointer', letterSpacing: '0.05em',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.target.style.borderColor = 'var(--amber)'; e.target.style.color = 'var(--amber)' }}
              onMouseLeave={e => { e.target.style.borderColor = 'var(--border2)'; e.target.style.color = 'var(--text)' }}
            >RUN DEMOS</button>

            <a href="/resume.pdf" download
              style={{
                background: 'transparent', color: 'var(--text-dim)',
                border: '1px solid var(--border)', borderRadius: 8, padding: '13px 28px',
                fontFamily: 'var(--font-mono)', fontSize: 13,
                cursor: 'pointer', letterSpacing: '0.05em',
                textDecoration: 'none', display: 'inline-block',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
            >↓ RESUME</a>
          </div>

          {/* Social links */}
          <div className="animate-fade-up-5" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/candi-westin-6269069/' },
              { label: 'GitHub', href: 'https://github.com/candiwestin' },
              { label: 'candiwestin@gmail.com', href: 'mailto:candiwestin@gmail.com' },
            ].map(link => (
              <a key={link.label} href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  color: 'var(--text-muted)', textDecoration: 'none',
                  letterSpacing: '0.05em', transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--amber)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >{link.label}</a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>SCROLL</span>
          <div style={{
            width: 1, height: 40,
            background: 'linear-gradient(to bottom, var(--amber), transparent)',
          }} />
        </div>
      </div>
    </section>
  )
}
