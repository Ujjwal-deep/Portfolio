# Ujjwal Deep - Professional Portfolio

A high-performance, aesthetically driven professional portfolio built with **React** and **Vite**. This project features a fully decoupled content system, allowing for complete site updates via a single JSON file without touching the core code.

## 🚀 Key Features

- **JSON-Driven Content**: All personal details, projects, and experiences are managed in `src/data/portfolio.json`.
- **Custom Cursor Interaction**: Interactive cursor system that reacts to link hovers and navigation.
- **Scroll Animations**: Advanced scroll-reveal and staggered reveal animations using `IntersectionObserver`.
- **Terminal UI Component**: Interactive terminal-style "whoami" component on the hero section.
- **Modern Tech Stack**: Built with React 18, Vite for lightning-fast HMR, and vanilla CSS for maximum design control.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (Custom Variables + Glassmorphism)
- **Deployment**: Optimized for [Cloudflare Pages](https://pages.cloudflare.com/)

## 📂 Project Structure

```text
src/
├── components/         # Reusable React components (Hero, Navbar, etc.)
├── data/               # Content management
│   └── portfolio.json  # THE SINGLE SOURCE OF TRUTH FOR YOUR DATA
├── App.jsx             # Main application layout and animation logic
├── index.css           # Global styles and design system
└── main.jsx           # Application entry point
```

## ⚙️ How to Update Content

You don't need to touch any `.jsx` or `.css` files to update your resume or portfolio. 

1. Open `src/data/portfolio.json`.
2. Update the values in the `user`, `skills`, `projects`, or `experience` arrays.
3. Save the file.
4. The site will automatically update with the new content while maintaining all styles and animations.

## 🏃 Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0 or higher)
- [npm](https://www.npmjs.com/)

### Setup

```bash
# Navigate to the project directory
cd ujjwal-portfolio-react

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```
The output will be in the `dist/` directory, ready to be deployed to any static hosting service.

---
