# AGENTS.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm run dev          # Start dev server
pnpm run build        # Prebuild (blog scrape) + Next.js build
pnpm run lint         # ESLint
pnpm run lint:fix     # ESLint with auto-fix
pnpm run format       # Prettier (js, jsx, ts, tsx, json)
pnpm run format:check # Check formatting without writing
pnpm run update:ogp   # Fetch/update blog OGP metadata from Hatenablog
```

CI runs: `lint` → `format:check` → `build` on push/PR to main.

## Architecture

**Framework:** Next.js 16 App Router with React 19, React Compiler enabled.

**i18n:** `next-intl` with `[locale]` route segments. Locales: `en` (English), `ja` (Japanese, default). Messages live in `messages/en.json` and `messages/ja.json`. Use locale-aware navigation from `src/i18n/navigation.ts` (not `next/link` directly).

**Styling:** Tailwind CSS + DaisyUI with custom green theme. Dark mode via `[data-theme="dark"]` selector (selector strategy, not `class`).

**Component boundaries:**
- Most components are async **Server Components** — they call `getTranslations("SectionName")` from `next-intl/server`
- **Client Components** are only: `SkillsChart` (Recharts), `ThemeProvider`, and interactive header elements

**SEO/metadata:** Constants (`SITE_URL`, `AUTHOR_NAME`, `SOCIAL_URLS`) live in `src/lib/seo.ts`. Update there when changing the canonical URL or author identity.

**i18n middleware:** Lives in `src/proxy.ts` (not the conventional `middleware.ts`) — this is intentional for the project's routing setup.

**Zod validation:** Translation JSON values are parsed with Zod schemas server-side (e.g., `AboutItemsSchema`, `ExperienceItemSchema` in section components) for type-safe structured data embedded in messages.

**Prebuild:** `prebuild.mjs` scrapes the Hatena blog for post count and writes to `src/data/blog.ts` before each build.

## Directory Structure

```
src/
├── app/[locale]/          # Pages: page.tsx, publications/, bookshelf/
├── components/
│   ├── layout/            # RootLayout, Header, Footer, ThemeProvider
│   ├── sections/          # Page-level sections (Hero, About, Skills, Experience, News…)
│   └── ui/                # Reusable UI components (SkillsChart, ReadingListCard…)
├── i18n/                  # routing.ts, request.ts, navigation.ts
├── lib/                   # gtag.ts, GoogleAnalytics.tsx
├── types/                 # data.ts, messages.ts, gtag.d.ts
└── data/                  # blog.ts (generated), reading.ts, social.ts
```

## Adding Content

- **New page sections:** Create in `src/components/sections/`, add translations in both `messages/*.json`, parse with Zod if structured data is needed.
- **New locale strings:** Add to both `messages/en.json` and `messages/ja.json`. Update `src/types/messages.ts` if the shape changes.
- **New remote image domains:** Add to `remotePatterns` in `next.config.ts`.
- **Reading list / social links:** Edit `src/data/reading.ts` / `src/data/social.ts`.
