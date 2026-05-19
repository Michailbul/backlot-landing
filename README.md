# backlot-landing

Landing page for **Backlot** — a writer's IDE for screenwriters and AI filmmakers.

Next.js (App Router, TypeScript). Single-screen hero. Brand system from the
laniameda Design System v2.0 — dark Obsidian theme, Darker Grotesque / Inter /
JetBrains Mono via `next/font`.

## Run

```bash
bun install
bun run dev      # http://localhost:3000
```

```bash
bun run build && bun run start
```

## Structure

- `app/layout.tsx` — fonts, metadata
- `app/page.tsx` — hero
- `app/globals.css` — brand tokens + layout
- `app/icon.svg` — favicon

The product app lives at https://github.com/Michailbul/backlot-app
