# Amna Sheikh - Portfolio Website

A modern, dark-themed portfolio website with purple accents and starry background, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌌 Dark theme with animated starry background
- 💜 Purple accent colors throughout
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 🎯 Smooth scrolling navigation with active section highlighting
- 📧 Contact form with direct contact information
- 💼 Professional project showcase with previews
- 📊 Stats section with experience metrics
- 🎨 Skill progress bars with animations
- 👤 Personal info and language badges

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── Navigation.tsx    # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Experience.tsx    # Experience section
│   ├── Education.tsx     # Education section
│   └── Contact.tsx       # Contact section
├── data/
│   └── portfolio.ts      # Portfolio data
└── public/               # Static assets
```

## Deployment

This portfolio is ready to be deployed on Vercel or Netlify:

### Vercel
1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with default settings

### Netlify
1. Push your code to GitHub
2. Import your repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

## Customization

All portfolio data is stored in `data/portfolio.ts`. You can easily update:
- Personal information
- Summary
- Skills
- Experience and projects
- Education

## License

This project is open source and available under the MIT License.

