# Christian Ace Masayon — Portfolio

Personal portfolio site for [csmasayon.com](https://csmasayon.com). Built with Next.js App Router, MDX case studies, and a content-driven data layer so projects, experience, and education stay easy to update.

## Features

- **Home** — hero, experience preview, featured projects, skills, contact CTA
- **About** — intro, story, full experience timeline, education
- **Projects** — listing page + MDX case studies (`/projects/[slug]`)
- **Dark / light mode** — system-aware theme toggle
- **SEO** — metadata helpers, sitemap, robots.txt, dynamic OG images, Person JSON-LD
- **Responsive layout** — mobile menu, wide `PageContainer` layout on desktop
- **Analytics** — Vercel Analytics

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16, React 19, TypeScript |
| Styling | Tailwind CSS 4, shadcn/ui, Radix UI |
| Content | MDX (`@next/mdx`) |
| Motion | Framer Motion |
| Icons | Lucide React, custom SVG skill icons |
| Deploy | Vercel (recommended) |

## Project structure

```
src/
├── app/                  # Routes (App Router)
│   ├── page.tsx          # Home
│   ├── about/            # About page
│   ├── projects/         # Projects list + [slug] case studies
│   └── api/og/           # Dynamic Open Graph image
├── components/           # UI and page sections
├── content/projects/     # MDX case study files
├── data/                 # projects, experience, education, skills
├── types/                # Shared TypeScript types
└── lib/                  # metadata, project helpers, utils

public/
├── images/               # Logos, portrait, project screenshots
└── docs/                 # Resume PDF
```

## Getting started

**Requirements:** Node.js 18+, [pnpm](https://pnpm.io/) (recommended)

```bash
git clone https://github.com/csmasayon/portfolio.git
cd portfolio
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm start` | Run production build locally |
| `pnpm lint` | ESLint |

## Updating content

Most site copy lives in typed data files — no need to touch components for routine updates.

| What to change | File |
| --- | --- |
| Work experience | `src/data/experience.ts` |
| Education | `src/data/education.ts` |
| Project cards (listing) | `src/data/projects.ts` |
| Project case study (long form) | `src/content/projects/*.mdx` |
| Skills | `src/data/skills.ts` |
| Site metadata / SEO defaults | `src/lib/metadata.ts` |
| Resume | `public/docs/MASAYON-Resume.pdf` |
| Portrait & assets | `public/images/` |

### Adding a project

1. Add an entry to `src/data/projects.ts` (title, description, image, links, `featured`, etc.).
2. Create `src/content/projects/your-slug.mdx` for the case study page.
3. Use the same slug in `readMoreHref` (e.g. `/projects/your-slug`).

Project slugs for static generation are derived from `projects.ts` via `getProjectSlugs()`.

## Deployment

Deploy to Vercel (or any Node host that supports Next.js):

```bash
pnpm build
```

**Note:** Static assets in `public/` are case-sensitive on Linux. Use lowercase filenames in code and git (e.g. `portrait.png`, not `portrait.PNG`).

## License

Private — portfolio use only.

---

Built by [Christian Ace Masayon](https://csmasayon.com)
