import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '32px 24px',
      background: 'var(--bg)',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 24, height: 24, borderRadius: 6,
            background: 'linear-gradient(135deg, #f59e0b, #b45309)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 10, fontWeight: 700, color: '#080b10',
            fontFamily: 'var(--font-mono)',
          }}>CW</div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>
            Candi Westin · Data & AI Engineer
          </span>
        </div>

        <div style={{ display: 'flex', gap: 24 }}>
          {[
            { label: 'GitHub', href: 'https://github.com/candiwestin/agentic_ai_portfolio' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/candi-westin-6269069/' },
            { label: 'Email', href: 'mailto:candiwestin@gmail.com' },
          ].map(link => (
            <a key={link.label} href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                color: 'var(--text-muted)', textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--amber)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >{link.label}</a>
          ))}
        </div>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
          Built with React + Vite · Deployed on Vercel
        </div>
      </div>
    </footer>
  )
}
