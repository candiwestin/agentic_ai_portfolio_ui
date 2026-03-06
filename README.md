# Agentic AI Portfolio — React UI

Portfolio website for Candi Westin, Data & AI Engineer. Built with React + Vite. Showcases four agentic AI pipeline architectures with run instructions, tech stack details, and GitHub links to the working code.

Live site: https://agentic-ai-portfolio-ui.vercel.app  
Backend pipelines repo: https://github.com/candiwestin/agentic_ai_portfolio

---

## Tech Stack

- React 18
- Vite 5
- Deployed on Vercel

---

## Local Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
# Clone the repo
git clone https://github.com/candiwestin/agentic_ai_portfolio_ui.git
cd agentic_ai_portfolio_ui

# Create and activate a virtual environment (optional but recommended for tooling)
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate

# Install dependencies
npm install

# Start dev server
npm run dev
```

The site will be available at http://localhost:5173

---

## Build for Production

```bash
npm run build
```

Output goes to `/dist`.

---

## Project Structure

```
src/
  components/
    Nav.jsx          # Fixed navigation with scroll-aware active state
    Hero.jsx         # Landing section with typewriter animation
    About.jsx        # Skills, certifications, DoD clearance, currently building
    Pipelines.jsx    # Four pipeline architectures with tabbed detail view
    Demo.jsx         # "Run the Demos" section — clone instructions per pipeline
    Contact.jsx      # Contact links
  App.jsx            # Root component, scroll tracking
  main.jsx           # Entry point
  index.css          # Design system variables and global styles
```

---

## Deployment

Connected to Vercel via GitHub. Every push to `main` triggers an automatic deploy.

---

## Notes

- No API keys required — this is a static frontend only
- The live pipeline demos run locally from the backend repo
- Resume PDF lives at `/public/resume.pdf`
