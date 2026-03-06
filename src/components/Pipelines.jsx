import React, { useState } from 'react'

const pipelines = [
  {
    id: 'basic-rag',
    number: '01',
    name: 'Basic RAG Workflow',
    tagline: 'Document intelligence without fine-tuning',
    description: 'Ingests PDFs and web documents, chunks them intelligently, embeds with HuggingFace sentence transformers, and answers questions grounded in source content using FAISS vector retrieval.',
    pattern: 'Retrieval-Augmented Generation',
    stack: ['LangChain', 'FAISS', 'HuggingFace', 'Groq', 'Python 3.11'],
    steps: ['Load → PDF or URL ingestion', 'Split → Recursive character chunking', 'Embed → Dense vector creation', 'Store → FAISS index', 'Retrieve → Top-5 semantic search', 'Generate → Grounded LLM response'],
    color: '#06b6d4',
  },
  {
    id: 'agentic-rag',
    number: '02',
    name: 'Agentic RAG Workflow',
    tagline: 'The agent decides how to answer',
    description: 'Combines local document retrieval with live web search. The agent reasons about each query and autonomously routes to the vector store, Tavily web search, or both — without being told which to use.',
    pattern: 'Tool-Use + RAG Hybrid',
    stack: ['LangChain', 'Tavily', 'FAISS', 'Groq', 'ReAct'],
    steps: ['Query arrives', 'Agent reasons: local vs web?', 'Route → vector store and/or web', 'Retrieve relevant context', 'Synthesize across sources', 'Return grounded answer'],
    color: '#f59e0b',
  },
  {
    id: 'langgraph',
    number: '03',
    name: 'LangGraph Chat Workflow',
    tagline: 'Stateful conversation with compiled graph',
    description: 'Multi-turn conversational agent built on LangGraph. Uses add_messages reducer for automatic state management — follow-up questions work naturally across the full session. Auto-generates workflow diagram on startup.',
    pattern: 'Compiled Graph Workflow',
    stack: ['LangGraph', 'Groq', 'Llama-3.1', 'Python'],
    steps: ['User message arrives', 'Graph receives state', 'Chatbot node processes', 'add_messages appends history', 'Response returned', 'State persists for next turn'],
    color: '#a78bfa',
  },
  {
    id: 'mcp',
    number: '04',
    name: 'MCP Agent Workflow',
    tagline: 'Standardized tool integration via protocol',
    description: 'Demonstrates the Model Context Protocol — Anthropic\'s open standard for connecting LLMs to tools. Agent discovers available tools at runtime through the MCP handshake, then calls them through a standardized interface.',
    pattern: 'Model Context Protocol',
    stack: ['LangGraph', 'FastMCP', 'MCP Protocol', 'Python'],
    steps: ['Agent starts up', 'MCP handshake: discover tools', 'User sends query', 'Agent selects tool', 'MCP server executes', 'Structured result returned'],
    color: '#10b981',
  },
  {
    id: 'crewai',
    number: '05',
    name: 'CrewAI Multi-Agent',
    tagline: 'Collaborative agents with defined roles',
    description: 'Multi-agent system where specialized agents collaborate to complete complex tasks. Each agent has a defined role, goal, and tool set. CrewAI orchestrates task delegation, sequencing, and inter-agent communication.',
    pattern: 'Multi-Agent Collaboration',
    stack: ['CrewAI', 'Groq', 'Python', 'Pydantic'],
    steps: ['Define crew & agent roles', 'Assign tasks to agents', 'Agents execute with tools', 'Results passed between agents', 'Crew synthesizes output', 'Final result returned'],
    color: '#f43f5e',
  },
]

export default function Pipelines() {
  const [active, setActive] = useState('basic-rag')
  const pipeline = pipelines.find(p => p.id === active)

  return (
    <section id="pipelines" style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--amber)', letterSpacing: '0.15em', marginBottom: 16 }}>
          // PIPELINES
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700, color: 'var(--text)', lineHeight: 1.1,
          }}>
            Five architectures.<br />One monorepo.
          </h2>
          <a href="https://github.com/candiwestin/agentic_ai_portfolio"
            target="_blank" rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              color: 'var(--amber)', border: '1px solid var(--amber-dim)',
              padding: '8px 18px', borderRadius: 6, textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.target.style.background = 'var(--amber-glow)'}
            onMouseLeave={e => e.target.style.background = 'transparent'}
          >View on GitHub ↗</a>
        </div>

        {/* Tab selector */}
        <div style={{
          display: 'flex', gap: 2, marginBottom: 2,
          background: 'var(--surface)', borderRadius: '10px 10px 0 0',
          border: '1px solid var(--border)', borderBottom: 'none',
          padding: 6, flexWrap: 'wrap',
        }}>
          {pipelines.map(p => (
            <button key={p.id} onClick={() => setActive(p.id)} style={{
              background: active === p.id ? 'var(--bg2)' : 'transparent',
              border: active === p.id ? '1px solid var(--border2)' : '1px solid transparent',
              borderRadius: 6, padding: '8px 16px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 8,
              transition: 'all 0.2s',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                color: active === p.id ? p.color : 'var(--text-muted)',
              }}>{p.number}</span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 12,
                color: active === p.id ? 'var(--text)' : 'var(--text-muted)',
              }}>{p.name}</span>
            </button>
          ))}
        </div>

        {/* Panel */}
        <div style={{
          border: '1px solid var(--border)', borderRadius: '0 0 10px 10px',
          background: 'var(--bg2)', overflow: 'hidden',
        }}>
          {/* Top bar */}
          <div style={{
            borderBottom: `2px solid ${pipeline.color}`,
            padding: '20px 28px',
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 800,
              color: pipeline.color, opacity: 0.3, lineHeight: 1,
            }}>{pipeline.number}</span>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text)' }}>
                {pipeline.name}
              </h3>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: pipeline.color, letterSpacing: '0.06em', marginTop: 2 }}>
                {pipeline.pattern}
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
            {/* Left */}
            <div style={{ padding: '28px', borderRight: '1px solid var(--border)' }}>
              <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: 28, fontWeight: 300 }}>
                {pipeline.description}
              </p>

              <div style={{ marginBottom: 24 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: 10 }}>
                  TECH STACK
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {pipeline.stack.map(t => (
                    <span key={t} style={{
                      fontFamily: 'var(--font-mono)', fontSize: 11,
                      border: `1px solid ${pipeline.color}44`,
                      color: pipeline.color, padding: '3px 10px',
                      borderRadius: 4, background: `${pipeline.color}0a`,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — workflow steps */}
            <div style={{ padding: '28px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: 16 }}>
                WORKFLOW
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {pipeline.steps.map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 2 }}>
                      <div style={{
                        width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                        border: `2px solid ${pipeline.color}`,
                        background: `${pipeline.color}15`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'var(--font-mono)', fontSize: 9, color: pipeline.color,
                      }}>{i + 1}</div>
                      {i < pipeline.steps.length - 1 && (
                        <div style={{ width: 1, height: 20, background: `${pipeline.color}30`, marginTop: 2 }} />
                      )}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: 12,
                      color: 'var(--text-dim)', paddingBottom: i < pipeline.steps.length - 1 ? 0 : 0,
                      lineHeight: 1.4, paddingTop: 2,
                    }}>{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #pipelines .grid-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
