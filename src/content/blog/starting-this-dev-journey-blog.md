---
title: 'Starting this dev journey blog'
description: 'Why I set up a personal blog with RSS, and what I plan to write about.'
pubDate: 2026-06-17
---

I wanted a place that belongs to me — not a thread, not a repo wiki, not a platform feed that might change tomorrow.

So I built this: a small static site, Markdown posts in git, and an RSS feed at `/rss.xml`.

## Why RSS

RSS fits how I actually read. I can follow my own writing alongside other feeds in one reader, without depending on social algorithms or email lists I might abandon.

For a dev log, that matters. These posts are reference material as much as updates. I want them archived, searchable, and easy to pull into tools I already use.

## What I'll write

Expect a mix of:

- **Ship logs** — what changed this week and why
- **Debug stories** — the error message, the wrong assumption, the fix
- **Notes to future me** — configs, commands, patterns I don't want to relearn

I won't aim for a publishing schedule. The goal is consistency of documentation, not consistency of cadence.

## How this site works

Under the hood it's [Astro](https://astro.build/) with content in `src/content/blog/`. Each file is a post. Running `bun dev` starts a local server; `bun run build` outputs static HTML.

To add a post, create a new `.md` or `.mdx` file:

```md
---
title: 'My new post'
description: 'A short summary for the blog index and RSS.'
pubDate: 2026-06-17
---

Your content here.
```

That's it. The blog index and RSS feed pick it up automatically.

## First step done

The site exists. The feed works. Next up: real posts from real work — starting with whatever I'm building this week.
