# Portfolio Website

A modern, responsive portfolio website built with Next.js

## 🛠️ Tech Stack

### Core
- **Next.js** - React framework with App Router
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework

### UI & Styling
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Content & SEO
- **MDX** - Markdown with JSX support
- **next/og** - Dynamic OG image generation
- **Vercel Analytics** - Performance monitoring

### Development
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **Dependabot** - Automated dependency updates

## 📁 Project Structure

```
portfolio/
├── src/
│ ├── app/ # Next.js App Router
│ │ ├── api/
│ │ │ └── og/
│ │ │ └── route.tsx # Dynamic OG image generation
│ │ ├── about/ # About page
│ │ ├── projects/ # Projects listing & detail pages
│ │ │ ├── [slug]/ # Dynamic project pages (MDX)
│ │ │ └── page.tsx # Projects listing page
│ │ ├── globals.css # Global styles & theme
│ │ ├── layout.tsx # Root layout with metadata
│ │ ├── page.tsx # Home page
│ │ ├── robots.ts # Robots.txt generation
│ │ └── sitemap.ts # Sitemap generation
│ ├── components/ # React components
│ │ ├── svg/ # SVG icon components
│ │ ├── ui/ # Reusable UI components (shadcn/ui)
│ │ ├── education-card.tsx # Education card component
│ │ ├── experience-card.tsx # Experience card component
│ │ ├── project-card.tsx # Project card component
│ │ ├── footer.tsx # Site footer
│ │ ├── header.tsx # Navigation header
│ │ ├── mobile-menu.tsx # Mobile navigation
│ │ ├── page-transition.tsx # Page transition animations
│ │ ├── theme-toggle.tsx # Theme switcher
│ │ └── theme-provider.tsx # Theme context provider
│ ├── content/ # MDX content files
│ │ └── projects/ # Project markdown files
│ ├── data/ # TypeScript data files
│ │ ├── projects.ts # Projects data
│ │ ├── experience.ts # Work experience data
│ │ └── education.ts # Education data
│ ├── types/ # TypeScript type definitions
│ │ ├── projects.ts # Project types
│ │ ├── experience.ts # Experience types
│ │ └── education.ts # Education types
│ └── lib/ # Utilities
│ ├── metadata.ts # SEO metadata helpers
│ ├── projects.ts # Project data helpers
│ └── utils.ts # General utilities
├── public/
│ ├── images/ # Static images (logo, projects, portrait)
│ └── docs/ # Documents (resume PDF)
├── .github/
│ └── dependabot.yml # Dependabot configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/csmasayon/portfolio.git
cd portfolio
```
2. **Install dependencies**
```bash
pnpm install
# or
npm install
```
3. **Run the development server**
```bash
pnpm dev
# or
npm run dev
```
4. **Access the application at [http://localhost:3000](http://localhost:3000)**

## 📝 Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint


## 📄 License

This project is private and for portfolio purposes.

---

Built with ❤️ by Christian Ace Masayon
