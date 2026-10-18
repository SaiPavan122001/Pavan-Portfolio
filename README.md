# 🎬 SAI PAVAN — DEV.ENGINE | Devflix Developer Series

A cinematic, Netflix-inspired developer portfolio built with **React 18 + TypeScript + Vite**, featuring GSAP scroll animations, a Devflix-themed UI, interactive project cards with downloadable technical project reports, and a fully responsive layout.

> **Live demo:** _https://saipavan122001.github.io/Pavan-Portfolio/_

---

## ✨ Features

- **Devflix "developer series" theme** — episodes, playlists, and cinematic section headers
- **GSAP + ScrollTrigger animations** — staggered reveals, clip-mask titles, floating hero, marquees
- **Featured projects grid** — equal-sized cards with GitHub links and 📄 Report buttons that open full technical project reports (PDF) in a new tab
- **Skills deck & capabilities sections** — animated card stacks and expertise rows
- **Contact section** — direct email (mailto), phone, GitHub, and LinkedIn links
- **Fully responsive** — desktop, tablet, and mobile breakpoints
- **Reduced-motion support** — respects `prefers-reduced-motion`

## 🗂️ Featured Projects

| # | Project | Stack | Links |
|---|---------|-------|-------|
| EP.01 | **Enterprise AI Operations Copilot** — multi-agent diagnostic workflow automating root cause analysis | FastAPI, LangGraph, Qdrant, React | [GitHub](https://github.com/SaiPavan122001/Enterprise-ai-operations-copilot) · [Report](public/reports/Enterprise_AI_Operations_Copilot_Report.pdf) |
| EP.02 | **Multimodal AI Chatbot** (★ Featured) — RAG + OCR + multimodal conversational AI | Python, RAG, LLM, OCR | [GitHub](https://github.com/SaiPavan122001/Multimodal-AI-Chatbot) · [Report](public/reports/Multimodal_AI_Chatbot_Report.pdf) |
| EP.03 | **HR & Payroll SaaS Platform (SLATE AI)** — multi-tenant HR platform | React.js, Spring Boot, PostgreSQL, MongoDB | [GitHub](https://github.com/SaiPavan122001/HRMS) · [Report](public/reports/HRMS_Report.pdf) |
| EP.04 | **Sales Analytics & Reporting** — PyQt5 desktop analytics & branded report generation | Python, PyQt5, Pandas | [GitHub](https://github.com/SaiPavan122001/Sales-Analytics-and-Reporting) · [Report](public/reports/Sales_Analytics_Report.pdf) |

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Animation:** GSAP (ScrollTrigger)
- **Styling:** Hand-written CSS (custom properties, grid/flex, responsive breakpoints)
- **Testing:** Playwright (layout & interaction verification scripts)

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install & run locally

```bash
# clone the repo
git clone https://github.com/SaiPavan122001/Pavan-Portfolio.git
cd Pavan-Portfolio

# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# type-check + production build (outputs to dist/)
npm run build

# preview the production build locally (http://localhost:4173)
npm run preview
```

## 📁 Project Structure

```
Pavan-Portfolio/
├── public/
│   ├── profile.svg              # hero photo fallback
│   └── reports/                 # technical project report PDFs (open in new tab)
├── src/
│   ├── components/              # Nav, Hero, About, Experience, Capabilities,
│   │                            # Skills, Projects, Contact, Background
│   ├── data/
│   │   ├── content.ts           # profile, experience
│   │   └── extras.ts            # capabilities, skill decks, projects
│   ├── styles/                  # base tokens, ui, sections, responsive CSS
│   ├── App.tsx
│   └── main.tsx
├── scripts/
│   └── clicktest.mjs            # Playwright verification (links, layout)
├── index.html
├── vite.config.ts
└── package.json
```

## 📦 Deployment

### GitHub Pages (included workflow)
This repo ships with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys the site to **GitHub Pages** on every push to `main`.

To enable it:
1. Push the repository to GitHub.
2. Go to **Settings → Pages → Source → GitHub Actions**.

### Manual deployment
```bash
npm run build     # generates dist/
# upload the dist/ folder to any static host
# (Netlify, Vercel, S3, Azure Static Web Apps, etc.)
```

## 🧪 Verification Scripts

`scripts/clicktest.mjs` uses Playwright to verify that all project GitHub/Report buttons and contact links open in new tabs, and that the project cards render at equal sizes:

```bash
node scripts/clicktest.mjs http://localhost:5173
```

## 📬 Contact

**Adusumalli Sai Pavan** — Full Stack & AI Developer

- 📧 Email: [saipavanadusumalli2001@gmail.com](mailto:saipavanadusumalli2001@gmail.com)
- 💼 LinkedIn: [adusumalli-sai-pavan](https://www.linkedin.com/in/adusumalli-sai-pavan-111836208/)
- 🐙 GitHub: [SaiPavan122001](https://github.com/SaiPavan122001)
- 📱 Phone: +91 9347726208

---

⭐ If you like this portfolio, consider giving it a star!
