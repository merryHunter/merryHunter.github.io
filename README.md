# Tech Blog - Next.js

A modern tech blog built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, responsive design with dark mode support
- 📝 MDX support for rich blog posts
- 🚀 Static site generation for optimal performance
- 🎨 Tailwind CSS for styling
- 📱 Mobile-friendly interface
- 🔍 SEO optimized

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/              # Next.js app router pages
├── components/       # React components
├── content/blog/     # MDX blog posts
├── lib/             # Utility functions
└── public/          # Static assets
```

## Adding Blog Posts

Create a new `.mdx` file in `content/blog/` with frontmatter:

```mdx
---
title: "Your Post Title"
date: "2024-01-01"
excerpt: "Brief description"
tags: ["tag1", "tag2"]
---

Your content here...
```

## Deployment

The site is configured to deploy automatically to GitHub Pages via GitHub Actions when pushing to the main branch.