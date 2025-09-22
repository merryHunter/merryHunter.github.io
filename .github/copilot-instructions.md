# AI Agent Instructions for Tech Blog

## Project Overview
This is a **static Next.js blog** built for GitHub Pages deployment. It uses App Router, TypeScript, and exports to static HTML via `output: 'export'` in `next.config.ts`.

## Architecture Essentials

### Content Management System
- **Blog posts**: MDX files in `content/blog/` with frontmatter (title, date, excerpt, tags, author)
- **Static pages**: MDX files in `content/` (e.g., `about-me.mdx`)
- **Content processing**: `lib/posts.ts` for blog posts, `lib/content.ts` for static content
- Use `gray-matter` to parse frontmatter and `next-mdx-remote` for rendering

### Key Files & Patterns
- `app/layout.tsx`: Root layout with theme provider, header/footer structure
- `app/blog/[slug]/page.tsx`: Dynamic blog post pages with `generateStaticParams()`
- `components/Header.tsx`: Navigation with mobile menu (client component)
- `components/ThemeProvider.tsx`: Dark mode wrapper using `next-themes`

### Development Commands
```bash
npm run dev --turbopack     # Development with Turbopack
npm run build --turbopack   # Production build for GitHub Pages
npm start                   # Serve built static files
```

## Project-Specific Conventions

### Styling Approach
- **Tailwind CSS v4** with `@tailwindcss/typography` for markdown content
- Dark mode via `class` strategy (not media query)
- Responsive design with mobile-first approach
- Font variables: `--font-geist-sans`, `--font-geist-mono`

### Component Patterns
- Client components marked with `'use client'` directive
- Use async Server Components for data fetching (posts, content)
- Theme toggle and mobile menu require client-side state

### MDX Content Rules
- Frontmatter is **required** for all blog posts
- Date format: `"YYYY-MM-DD"` strings, not Date objects
- Images should be in `public/` and referenced with absolute paths
- Tags are arrays of strings for categorization

### Static Export Considerations
- Images use `unoptimized: true` for GitHub Pages compatibility
- No dynamic API routes - all content is file-based
- Use `generateStaticParams()` for dynamic routes to ensure static generation

## Common Tasks

### Adding Blog Posts
1. Create `.mdx` file in `content/blog/` with proper frontmatter
2. Build will automatically include it via `getAllPosts()` in `lib/posts.ts`
3. URL will be `/blog/[filename-without-extension]`

### Adding Components
- Place in `components/` directory
- Use TypeScript interfaces for props
- Import paths use `@/` alias for project root

### Troubleshooting Static Export
- Check `out/` directory for build output
- Ensure no dynamic imports that break static generation
- Verify all images are in `public/` and properly referenced