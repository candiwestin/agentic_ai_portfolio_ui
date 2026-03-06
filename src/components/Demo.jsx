import { useState } from 'react'

const STREAMLIT_URL = 'https://agenticaiportfolio-5ndc3qztjacrga67ntuojf.streamlit.app'

const pipelines = [
  {
    id: 'basic-rag',
    number: '01',
    name: 'Basic RAG Workflow',
    color: '#06b6d4',
    tagline: 'Document intelligence without fine-tuning',
    description: 'Ingests PDFs and web documents, chunks them intelligently, embeds with HuggingFace sentence transformers, and answers questions grounded in source content using FAISS vector retrieval.',
    runInstructions: [
      'git clone https://github.com/candiwestin/agentic_ai_portfolio',
      'cd pipelines/basic_rag_workflow',
      'pip install -r ../../requirements.txt',
      'python basic_rag.py',
    ],
    repoPath: 'pipelines/basic_rag_workflow',
    streamlitPage: 'Basic_RAG',
    streamlitInteractive: true,
    highlights: ['LangChain + FAISS vector store', 'HuggingFace sentence transformers', 'PDF & URL document ingestion', 'Groq LLM for generation'],
  },
  {
    id: 'agentic-rag',
    number: '02',
    name: 'Agentic RAG Workflow',
    color: '#f59e0b',
    tagline: 'The agent decides how to answer',
    description: 'Combines local document retrieval with live web search. The agent autonomously routes to the vector store, Tavily web search, or both — without being told which to use.',
    runInstructions: [
      'git clone https://github.com/candiwestin/agentic_ai_portfolio',
      'cd pipelines/agentic_rag_workflow',
      'pip install -r ../../requirements.txt',
      'Add TAVILY_API_KEY to .env',
      'python agentic_rag.py',
    ],
    repoPath: 'pipelines/agentic_rag_workflow',
    streamlitPage: 'Agentic_RAG',
    streamlitInteractive: true,
    highlights: ['ReAct agent with tool selection', 'Tavily live web search integration', 'FAISS local vector store', 'Autonomous routing logic'],
  },
  {
    id: 'langgraph',
    number: '03',
    name: 'LangGraph Chat Workflow',
    color: '#a78bfa',
    tagline: 'Stateful conversation with compiled graph',
    description: 'Multi-turn conversational agent built on LangGraph. Uses add_messages reducer for automatic state management. Auto-generates a workflow diagram on startup.',
    runInstructions: [
      'git clone https://github.com/candiwestin/agentic_ai_portfolio',
      'cd pipelines/langgraph_chat_workflow',
      'pip install -r ../../requirements.txt',
      'python langgraph_chat.py',
    ],
    repoPath: 'pipelines/langgraph_chat_workflow',
    streamlitPage: 'LangGraph_Chat',
    streamlitInteractive: true,
    highlights: ['LangGraph compiled state graph', 'add_messages reducer for history', 'Auto-generated workflow diagram', 'Llama 3.1 via Groq'],
  },
  {
    id: 'mcp',
    number: '04',
    name: 'MCP Agent Workflow',
    color: '#10b981',
    tagline: 'Standardized tool integration via protocol',
    description: "Demonstrates Anthropic's Model Context Protocol — the open standard for connecting LLMs to tools. The agent discovers available tools at runtime through the MCP handshake. Requires local server — see architecture overview in Streamlit.",
    runInstructions: [
      'git clone https://github.com/candiwestin/agentic_ai_portfolio',
      'cd pipelines/mcp_agent_workflow',
      'pip install -r ../../requirements.txt',
      'python mcp_server.py  # terminal 1',
      'python mcp_client.py  # terminal 2',
    ],
    repoPath: 'pipelines/mcp_agent_workflow',
    streamlitPage: 'MCP_Agent_Workflow',
    streamlitInteractive: false,
    highlights: ['Full MCP protocol handshake', 'Runtime tool discovery', 'FastMCP server implementation', 'Client-server architecture'],
  },
  {
    id: 'crewai',
    number: '05',
    name: 'CrewAI Multi-Agent',
    color: '#f43f5e',
    tagline: 'Collaborative agents with defined roles',
    description: 'Multi-agent system using CrewAI where specialized agents collaborate to complete complex tasks. Each agent has a defined role, goal, and tool set. See architecture and workflow in Streamlit.',
    runInstructions: [
      'git clone https://github.com/candiwestin/agentic_ai_portfolio',
      'cd pipelines/crewai_workflow',
      'pip install -r ../../requirements.txt',
      'python crew.py',
    ],
    repoPath: 'pipelines/crewai_workflow',
    streamlitPage: 'CrewAI_Workflow',
    streamlitInteractive: false,
    highlights: ['Multi-agent role assignment', 'CrewAI orchestration', 'Specialized agent tools', 'Task delegation patterns'],
  },
]

export default function Demo() {
  const [active, setActive] = useState('basic-rag')
  const [copied, setCopied] = useState(null)
  const pipeline = pipelines.find(p => p.id === active)

  const copyCommand = (cmd, idx) => {
    navigator.clipboard.writeText(cmd)
    setCopied(idx)
    setTimeout(() => setCopied(null), 1500)
  }

  const streamlitUrl = `${STREAMLIT_URL}/${pipeline.streamlitPage}`

  return (
    <section id="demo" style={{ padding: '120px 24px', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--amber)', letterSpacing: '0.15em', marginBottom: 16 }}>
          // RUN THE DEMOS
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: 'var(--text)', lineHeight: 1.1 }}>
              Real pipelines.<br />
              <span style={{ color: 'var(--amber)' }}>Clone and run them.</span>
            </h2>
            <p style={{ color: 'var(--text-dim)', marginTop: 12, maxWidth: 480, fontSize: 14, lineHeight: 1.7 }}>
              Each pipeline is fully functional. Run them locally from GitHub or explore the interactive Streamlit demos live.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a
              href={STREAMLIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'var(--success)', color: '#080b10',
                padding: '12px 24px', borderRadius: 8,
                fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600,
                textDecoration: 'none', letterSpacing: '0.05em',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              ⚡ LAUNCH STREAMLIT DEMOS
            </a>
            <a
              href="https://github.com/candiwestin/agentic_ai_portfolio"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'var(--amber)', color: '#080b10',
                padding: '12px 24px', borderRadius: 8,
                fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600,
                textDecoration: 'none', letterSpacing: '0.05em',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              ↗ VIEW ON GITHUB
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 2, background: 'var(--surface)', borderRadius: '10px 10px 0 0', border: '1px solid var(--border)', borderBottom: 'none', padding: 6, flexWrap: 'wrap' }}>
          {pipelines.map(p => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              style={{
                background: active === p.id ? 'var(--bg2)' : 'transparent',
                border: active === p.id ? '1px solid var(--border2)' : '1px solid transparent',
                borderRadius: 6, padding: '8px 16px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.2s',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: active === p.id ? p.color : 'var(--text-muted)' }}>{p.number}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: active === p.id ? 'var(--text)' : 'var(--text-muted)' }}>{p.name}</span>
              {p.streamlitInteractive && (
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#10b981', border: '1px solid #10b98144', padding: '1px 6px', borderRadius: 3 }}>
                  LIVE
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div style={{ border: '1px solid var(--border)', borderRadius: '0 0 10px 10px', background: 'var(--bg2)', overflow: 'hidden' }}>

          {/* Header */}
          <div style={{ borderBottom: `2px solid ${pipeline.color}`, padding: '20px 28px', display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 800, color: pipeline.color, opacity: 0.3, lineHeight: 1 }}>
              {pipeline.number}
            </span>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text)' }}>{pipeline.name}</h3>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: pipeline.color, letterSpacing: '0.06em', marginTop: 2 }}>{pipeline.tagline}</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 10 }}>
              <a
                href={streamlitUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: pipeline.streamlitInteractive ? '#10b98120' : 'var(--surface)',
                  border: `1px solid ${pipeline.streamlitInteractive ? '#10b98155' : 'var(--border)'}`,
                  borderRadius: 6, padding: '6px 14px',
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  color: pipeline.streamlitInteractive ? '#10b981' : 'var(--text-muted)',
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                ⚡ {pipeline.streamlitInteractive ? 'Open Live Demo ↗' : 'View in Streamlit ↗'}
              </a>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>

            {/* Left: description + highlights + github link */}
            <div style={{ padding: '28px', borderRight: '1px solid var(--border)' }}>
              <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: 28, fontWeight: 300 }}>
                {pipeline.description}
              </p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: 12 }}>
                HIGHLIGHTS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {pipeline.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: pipeline.color, flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-dim)' }}>{h}</span>
                  </div>
                ))}
              </div>
              <a
                href={`https://github.com/candiwestin/agentic_ai_portfolio/tree/main/${pipeline.repoPath}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  marginTop: 28, color: pipeline.color,
                  border: `1px solid ${pipeline.color}44`,
                  background: `${pipeline.color}0a`,
                  padding: '8px 16px', borderRadius: 6,
                  fontFamily: 'var(--font-mono)', fontSize: 12,
                  textDecoration: 'none', transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = `${pipeline.color}18`}
                onMouseLeave={e => e.currentTarget.style.background = `${pipeline.color}0a`}
              >
                Browse /{pipeline.repoPath} ↗
              </a>
            </div>

            {/* Right: terminal + prerequisites */}
            <div style={{ padding: '28px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: 16 }}>
                HOW TO RUN LOCALLY
              </div>
              <div style={{ background: '#0a0e14', border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden' }}>
                <div style={{ padding: '8px 14px', borderBottom: '1px solid var(--border)', display: 'flex', gap: 6, alignItems: 'center' }}>
                  {['#f87171','#fbbf24','#34d399'].map((c,i) => (
                    <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                  ))}
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', marginLeft: 8 }}>terminal</span>
                </div>
                <div style={{ padding: '16px' }}>
                  {pipeline.runInstructions.map((cmd, i) => {
                    const isComment = cmd.startsWith('#') || cmd.startsWith('Add')
                    return (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: i < pipeline.runInstructions.length - 1 ? 10 : 0 }}>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center', minWidth: 0 }}>
                          <span style={{ color: pipeline.color, fontFamily: 'var(--font-mono)', fontSize: 12, flexShrink: 0 }}>$</span>
                          <span style={{
                            fontFamily: 'var(--font-mono)', fontSize: 12,
                            color: isComment ? 'var(--text-muted)' : '#e2e8f0',
                            fontStyle: isComment ? 'italic' : 'normal',
                            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                          }}>
                            {cmd}
                          </span>
                        </div>
                        {!isComment && (
                          <button
                            onClick={() => copyCommand(cmd, i)}
                            style={{
                              background: 'none', border: '1px solid var(--border)', borderRadius: 4,
                              color: copied === i ? pipeline.color : 'var(--text-muted)',
                              fontFamily: 'var(--font-mono)', fontSize: 9,
                              padding: '2px 7px', cursor: 'pointer', flexShrink: 0,
                              transition: 'all 0.2s',
                            }}
                          >
                            {copied === i ? 'COPIED' : 'COPY'}
                          </button>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              <div style={{ marginTop: 20, padding: '14px 16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: 6 }}>
                  PREREQUISITES
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.6 }}>
                  Python 3.11+ · pip · A <span style={{ color: 'var(--amber)' }}>GROQ_API_KEY</span> in your <code style={{ color: 'var(--text)' }}>.env</code> file
                  {pipeline.id === 'agentic-rag' && <> · <span style={{ color: 'var(--amber)' }}>TAVILY_API_KEY</span></>}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
