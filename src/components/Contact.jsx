import { useState } from "react";
import { Mail, Linkedin, Github, FileText, Check } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("candiwestin@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{ padding: "6rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ marginBottom: "3rem" }}>
        <span style={{ color: "var(--amber)", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
          05 / CONTACT
        </span>
        <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-display)", marginTop: "0.5rem", color: "var(--text)" }}>
          Let's Connect
        </h2>
        <p style={{ color: "var(--amber)", maxWidth: "500px", lineHeight: 1.7 }}>
          Open to senior data engineering and AI/ML engineering roles.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
        <div onClick={copyEmail} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1.5rem", cursor: "pointer" }}>
          <div style={{ color: "var(--amber)", marginBottom: "0.75rem" }}><Mail size={24} /></div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>EMAIL</div>
          <div style={{ color: "var(--text)", fontSize: "0.9rem", marginTop: "0.25rem" }}>candiwestin@gmail.com</div>
          <div style={{ color: "var(--amber)", fontSize: "0.75rem", marginTop: "0.5rem", fontFamily: "var(--font-mono)" }}>{copied ? "Copied!" : "Click to copy"}</div>
        </div>
        <a href="https://www.linkedin.com/in/candi-westin-6269069/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1.5rem" }}>
            <div style={{ color: "var(--cyan)", marginBottom: "0.75rem" }}><Linkedin size={24} /></div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>LINKEDIN</div>
            <div style={{ color: "var(--text)", fontSize: "0.9rem", marginTop: "0.25rem" }}>Candi Westin</div>
            <div style={{ color: "var(--cyan)", fontSize: "0.75rem", marginTop: "0.5rem", fontFamily: "var(--font-mono)" }}>View profile →</div>
          </div>
        </a>
        <a href="https://github.com/candiwestin" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1.5rem" }}>
            <div style={{ color: "var(--text-muted)", marginBottom: "0.75rem" }}><Github size={24} /></div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>GITHUB</div>
            <div style={{ color: "var(--text)", fontSize: "0.9rem", marginTop: "0.25rem" }}>candiwestin</div>
            <div style={{ color: "var(--amber)", fontSize: "0.75rem", marginTop: "0.5rem", fontFamily: "var(--font-mono)" }}>View repos →</div>
          </div>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1.5rem" }}>
            <div style={{ color: "var(--amber)", marginBottom: "0.75rem" }}><FileText size={24} /></div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>RESUME</div>
            <div style={{ color: "var(--text)", fontSize: "0.9rem", marginTop: "0.25rem" }}>Download PDF</div>
            <div style={{ color: "var(--amber)", fontSize: "0.75rem", marginTop: "0.5rem", fontFamily: "var(--font-mono)" }}>Open →</div>
          </div>
        </a>
      </div>
    </section>
  );
}
