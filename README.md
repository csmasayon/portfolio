# Portfolio Website

A modern, responsive portfolio website built with Next.js

## 🛠️ Tech Stack

### Core
- **Next.js 16.0.7** - React framework with App Router
- **React 19.2.1** - UI library
- **TypeScript 5.9.3** - Type safety
- **Tailwind CSS 4.1.17** - Utility-first CSS framework

### UI & Styling
- **Radix UI** - Accessible component primitives
- **Framer Motion 12.23.25** - Animation library
- **Lucide React 0.555.0** - Icon library
- **next-themes 0.4.6** - Theme management
- **Class Variance Authority** - Component variants

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
│ │ │ └── [slug]/ # Dynamic project pages (MDX)
│ │ ├── globals.css # Global styles & theme
│ │ ├── layout.tsx # Root layout with metadata
│ │ └── page.tsx # Home page
│ ├── components/ # React components
│ │ ├── svg/ # SVG icon components
│ │ ├── ui/ # Reusable UI components
│ │ ├── header.tsx # Navigation header
│ │ ├── footer.tsx # Site footer
│ │ ├── mobile-menu.tsx # Mobile navigation
│ │ ├── theme-toggle.tsx # Theme switcher
│ │ └── theme-provider.tsx # Theme context provider
│ ├── content/ # MDX content files
│ │ └── projects/ # Project markdown files
│ └── lib/ # Utilities
│ ├── metadata.ts # SEO metadata helpers
│ └── utils.ts # General utilities
├── public/
│ ├── images/ # Static images (logo, projects, etc.)
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
   git clone <repository-url>
   cd portfolio
   2. **Install dependencies**sh
   pnpm install
   # or
   npm install
   3. **Run the development server**ash
   pnpm dev
   # or
   npm run dev
   4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint


## 📄 License

This project is private and for portfolio purposes.

---

Built with ❤️ by Christian Ace Masayon
