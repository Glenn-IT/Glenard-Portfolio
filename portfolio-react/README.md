# 🚀 Glenard Pagurayan — Portfolio (React + Vite + Tailwind CSS)

A modern, fully responsive personal portfolio website built with **Vite + React + Tailwind CSS**, designed for GitHub Pages deployment.

## 🌐 Live Site

**[https://glenn-it.github.io/Glenard-Portfolio/](https://glenn-it.github.io/Glenard-Portfolio/)**

---

## 🎨 Tech Stack

| Layer      | Technology     |
| ---------- | -------------- |
| Framework  | React 18       |
| Build Tool | Vite 5         |
| Styling    | Tailwind CSS 3 |
| Icons      | Lucide React   |
| Deployment | GitHub Pages   |
| CI/CD      | GitHub Actions |

## 🎨 Color Palette

| Color                    | Hex       | Usage               |
| ------------------------ | --------- | ------------------- |
| Amethyst                 | `#9B59B6` | Primary brand color |
| Slate Blue               | `#6A5ACD` | Secondary accents   |
| Violet Blue              | `#4B0082` | Deep accents        |
| International Klein Blue | `#002FA7` | Highlight elements  |
| Federal Blue             | `#00008B` | Deep backgrounds    |

---

## 📁 Project Structure

```
portfolio-react/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav with dark mode toggle
│   │   ├── Hero.jsx            # Typing animation hero section
│   │   ├── About.jsx           # About + stats
│   │   ├── Skills.jsx          # Categorized skill bars
│   │   ├── Projects.jsx        # Filterable project cards
│   │   ├── Experience.jsx      # Timeline experience + training
│   │   ├── Contact.jsx         # Social contact links
│   │   ├── Footer.jsx          # Footer with links
│   │   ├── ScrollToTop.jsx     # Back to top button
│   │   └── ParticleBackground.jsx  # Canvas particle animation
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm v9+

### Installation & Development

```bash
# Navigate to project folder
cd portfolio-react

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in `portfolio-react/dist/`.

---

## 🌐 GitHub Pages Deployment

### Automatic (Recommended)

This repo includes a **GitHub Actions workflow** (`.github/workflows/deploy.yml`) that:

1. Triggers on every push to `main`
2. Installs dependencies and builds the project
3. Deploys the `dist/` folder to GitHub Pages

**To enable:**

1. Go to your GitHub repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the workflow will deploy automatically ✅

### Manual Deployment

```bash
cd portfolio-react
npm run build

# Install gh-pages if needed
npm install -g gh-pages

# Deploy
npx gh-pages -d dist
```

---

## ✨ Features

- ⚡ **Fast** — Built with Vite for lightning-fast HMR
- 📱 **Fully Responsive** — Mobile-first design
- 🌙 **Dark Mode Toggle** — Persistent theme switching
- 🎆 **Particle Background** — Canvas-based animated particles
- ⌨️ **Typing Animation** — Role cycling in hero section
- 🗂️ **Filterable Projects** — Category-based project filtering
- 🔄 **Smooth Animations** — CSS transitions + IntersectionObserver reveals
- 📊 **Animated Skill Bars** — Progress bars triggered on scroll
- 📜 **Experience Timeline** — Vertical timeline layout
- ⬆️ **Scroll to Top** — Floating back-to-top button
- 🔍 **SEO Optimized** — Meta tags for search engines

---

## 🧩 Sections

| Section    | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| Hero       | Name, typing role animation, CTA buttons, social links      |
| About      | Bio, highlights, stats (projects, certs, experience)        |
| Skills     | Frontend, Backend, Dev Tools, IT Support with progress bars |
| Projects   | Card grid with filters, tech tags, GitHub/Demo links        |
| Experience | Work timeline (COMELEC, DENR-EMB, Freelance) + Training     |
| Contact    | Social links grid + info panel                              |

---

## 📄 License

MIT — Feel free to use this as a template for your own portfolio.

---

Built with ❤️ by **Glenard Pagurayan** · Philippines 🇵🇭
