# Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing the work and skills of Christian Ace Masayon - a fullstack web developer and UX/UI designer.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes with mobile-first approach
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Modern UI**: Clean, professional design using Tailwind CSS and Radix UI components
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Mobile Navigation**: Collapsible mobile menu with smooth transitions
- **Project Showcase**: Interactive carousel displaying featured projects
- **Skills Section**: Comprehensive display of technical skills and tools
- **Contact Information**: Easy access to social links and contact details

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.5.6**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

### UI Components
- **Radix UI**
- **Class Variance Authority** 
- **Tailwind Merge**

### Development Tools
- **ESLint**
- **PostCSS**
- **Next Themes**

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── projects/          # Projects page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── svg/               # SVG icons
│   │   ├── ui/                # UI components (Button, Card, etc.)
│   │   ├── header.tsx         # Navigation header
│   │   ├── mobile-menu.tsx    # Mobile navigation
│   │   ├── footer.tsx         # Site footer
│   │   └── theme-toggle.tsx   # Theme switcher
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/
│   ├── images/                # Static images
│   └── docs/                  # Documents (resume, etc.)
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Projects
1. Add project images to `public/images/`
2. Update the projects section in `src/app/page.tsx`
3. Modify the carousel content as needed

### Updating Personal Information
- **Home page**: Edit `src/app/page.tsx`
- **About page**: Edit `src/app/about/page.tsx`
- **Contact links**: Update social media links in the components

### Styling
- Global styles: `src/app/globals.css`
- Component styles: Use Tailwind classes
- Theme customization: Modify CSS variables in `globals.css`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Theme Support

- **Light Theme**: Clean, professional appearance
- **Dark Theme**: Easy on the eyes for low-light environments
- **System Theme**: Automatically follows user's system preference

## 📄 Pages

- **Home** (`/`) - Landing page with hero section, skills, and featured projects
- **About** (`/about`) - Personal information and background
- **Projects** (`/projects`) - Detailed project showcase

## 🔧 Development

### Code Style
- ESLint configuration for consistent code style
- TypeScript for type safety
- Component-based architecture

### Performance
- Next.js optimization features
- Image optimization with Next.js Image component
- Code splitting and lazy loading

## 📞 Contact

**Christian Ace Masayon**
- Fullstack Web Developer
- UX/UI Designer
- Based in Tagum City, Davao del Norte, Philippines

## 📄 License

This project is private and for portfolio purposes.

---

Built with ❤️ using Next.js and modern web technologies.
