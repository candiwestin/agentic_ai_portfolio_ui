import React from 'react'

const stats = [
  { value: '28+', label: 'Years in Data Engineering' },
  { value: '4',   label: 'Agentic AI Pipelines Built' },
  { value: '5',   label: 'Certifications Earned' },
  { value: '∞',   label: 'Problems Left to Solve' },
]

const skills = [
  {
    category: 'Agentic AI & LLMs',
    items: ['LangChain', 'LangGraph', 'Agentic Workflow Design', 'Multi-Agent Systems', 'CrewAI', 'RAG Pipelines', 'ChromaDB', 'FAISS', 'HuggingFace', 'MCP Protocol'],
  },
  {
    category: 'Languages & Scripting',
    items: ['SQL', 'Python (scripting/automation)', 'Bash/Shell'],
  },
  {
    category: 'Data Engineering',
    items: ['ETL/ELT', 'Data Integration', 'Star Schema', 'Medallion Architecture', 'PostgreSQL', 'BigQuery', 'Oracle', 'SQL Server', 'DataStage', 'Data Governance', 'Data Integrity'],
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['GCP', 'Apache Airflow', 'Hadoop Ecosystem', 'Docker (personal projects)'],
  },
  {
    category: 'Big Data',
    items: ['Hadoop', 'Spark SQL', 'Avro', 'Parquet', 'YAML', 'JSON'],
  },
  {
    category: 'DevOps & CI/CD',
    items: ['Jenkins', 'Bitbucket', 'SourceTree', 'Control-M', 'GitHub'],
  },
  {
    category: 'Methodology',
    items: ['Agile', 'Scrum', 'Kanban', 'Modern Software Engineering'],
  },
]

const certifications = [
  { name: 'Agile Fever Agentic AI Certification', icon: '🤖' },
  { name: 'Google Cloud Digital Leader', icon: '☁️' },
  { name: 'Astronomer Certification for Apache Airflow Fundamentals', icon: '🔄' },
  { name: 'Leading SAFe 4 Agilist', icon: '⚡' },
  { name: 'GCP Cloud Scholarship — NuCamp Backend, SQL & DevOps with Python Bootcamp', icon: '🎓' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 24px', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--amber)', letterSpacing: '0.15em', marginBottom: 16 }}>
          // ABOUT
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

          {/* Left — bio + stats */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 28, color: 'var(--text)' }}>
              Data engineering depth.<br />
              <span style={{ color: 'var(--amber)' }}>AI at the frontier.</span>
            </h2>

            <p style={{ color: 'var(--text-dim)', lineHeight: 1.9, marginBottom: 20, fontWeight: 300 }}>
              I've spent nearly three decades building the data systems that power business decisions —
              ETL pipelines, data warehouses, operational reporting, and enterprise-scale transformations.
              That's not background noise. That's the foundation everything else stands on.
            </p>

            <p style={{ color: 'var(--text-dim)', lineHeight: 1.9, marginBottom: 20, fontWeight: 300 }}>
              Now I'm applying that foundation to agentic AI. Not because it's trendy —
              because I see exactly where AI agents fit inside data architectures, and I know
              how to build them to production standards.
            </p>

            <p style={{ color: 'var(--text-dim)', lineHeight: 1.9, fontWeight: 300 }}>
              My personal project, <strong style={{ color: 'var(--text)' }}>Data Foundry</strong>, is where
              those two worlds collide: an agentic data platform that uses LLM agents to design,
              generate, and orchestrate Airflow pipelines across a medallion lakehouse architecture.
            </p>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, marginTop: 40, border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{
                  padding: '20px 24px',
                  background: i % 2 === 0 ? 'var(--surface)' : 'var(--surface2)',
                  borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 800, color: 'var(--amber)', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', marginTop: 6, letterSpacing: '0.06em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — skills + certs + currently building */}
          <div>

            {/* Skills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {skills.map(group => (
                <div key={group.category}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--amber)', letterSpacing: '0.1em', marginBottom: 8 }}>
                    {group.category.toUpperCase()}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {group.items.map(item => (
                      <span
                        key={item}
                        style={{
                          fontFamily: 'var(--font-mono)', fontSize: 11,
                          color: 'var(--text-dim)',
                          border: '1px solid var(--border2)',
                          background: 'var(--surface)',
                          padding: '4px 10px', borderRadius: 4,
                          transition: 'all 0.2s', cursor: 'default',
                        }}
                        onMouseEnter={e => {
                          e.target.style.borderColor = 'var(--amber-dim)'
                          e.target.style.color = 'var(--text)'
                          e.target.style.background = 'var(--amber-glow)'
                        }}
                        onMouseLeave={e => {
                          e.target.style.borderColor = 'var(--border2)'
                          e.target.style.color = 'var(--text-dim)'
                          e.target.style.background = 'var(--surface)'
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div style={{
              marginTop: 16,
              border: '1px solid var(--border2)',
              borderLeft: '3px solid #06b6d4',
              background: 'var(--surface)',
              borderRadius: '0 8px 8px 0',
              padding: '16px 18px',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#06b6d4', letterSpacing: '0.1em', marginBottom: 12 }}>
                CERTIFICATIONS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {certifications.map((cert, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>{cert.icon}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-dim)', lineHeight: 1.5 }}>{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
