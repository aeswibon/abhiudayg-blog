# abhiudayg-blog

Personal development blog — notes, experiments, and lessons from building software.

**Live site:** [abhiudayg-blog.vercel.app](https://abhiudayg-blog.vercel.app)  
**RSS feed:** [abhiudayg-blog.vercel.app/rss.xml](https://abhiudayg-blog.vercel.app/rss.xml)

## Stack

- [Astro](https://astro.build/) — static site generator
- [Bun](https://bun.sh/) — package manager and runtime
- [Vercel](https://vercel.com/) — hosting
- GitHub Actions — CI/CD on every new post

## Local development

```bash
bun install
bun dev
```

Open [http://localhost:4321](http://localhost:4321).

| Command | Description |
|---------|-------------|
| `bun dev` | Start dev server |
| `bun run build` | Build static site to `dist/` |
| `bun run preview` | Preview production build |

## Writing a post

Create a Markdown file in `src/content/blog/`:

```md
---
title: 'Post title'
description: 'Short summary for the blog index and RSS feed.'
pubDate: 2026-06-17
---

Your content here.
```

The filename becomes the URL slug:

```
src/content/blog/my-new-post.md → /blog/my-new-post/
```

Optional frontmatter fields:

| Field | Description |
|-------|-------------|
| `updatedDate` | When the post was last revised |
| `heroImage` | Cover image path relative to the post file |

Push to `main` and GitHub Actions builds and deploys to Vercel automatically.

## Project structure

```
src/
  content/blog/     # Blog posts (Markdown / MDX)
  components/       # Shared UI components
  layouts/          # Page layouts
  pages/            # Routes (home, blog, about, RSS)
  styles/           # Global CSS
  consts.ts         # Site title, author, links
```

## Deployment

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which:

1. Installs dependencies with Bun
2. Builds the site
3. Triggers a Vercel production deploy via deploy hook

The project is also connected to Vercel Git for automatic deployments on push.

Required GitHub secret: `VERCEL_DEPLOY_HOOK` (already configured).

## License

[MIT](LICENSE)
