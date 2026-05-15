# OptionWise homepage — agent notes

## What this is

Marketing / product homepage for **OptionWise**: a professional B2B site for **employee stock option and warrant programme** management (companies, advisors, and employees). Stack: **Vite + React + TypeScript** SPA with **Tailwind CSS**.

## Design source of truth

1. **`docs/optionwise_homepage_design_guidance.md`** — structure, copy, colour tokens (`:root` CSS variables), typography, components, layout, tone, **§22 SEO and AI-agent-friendly content**, and the **§23 quality checklist**.
2. **`docs/design_elements.md`** — shared typography: **Inter** plus the canonical web/system fallback stack (see Tailwind `fontFamily.sans` and `font-sans` on `body` in `src/index.css`).
3. **`docs/image.png`** — high-fidelity layout reference (hero, nav, platform cards, CTA band, footer). Treat it as visual intent alongside the written spec.

### Positioning and UI rules (summary)

- **Mature Nordic B2B**: purple / lavender theme, deep navy text, white cards, subtle shadows — not generic “AI SaaS” or playful consumer fintech.
- **Primary CTA**: **Book a demo** in the hero. **App Store / Google Play** badges on the **“For employees”** platform card use **default store URLs** from `OptionWiseB2BPlatform` (overridable with `VITE_APP_STORE_URL` / `VITE_PLAY_STORE_URL`).
- **Minimal icons**: prefer typography, thin dividers, status pills, progress bars, and **realistic product UI** (dashboard / mobile / advisor previews), not icon-heavy feature grids.
- **Trust row**: use the **positioning line** from the doc (Swedish growth / listed / advisors). **Do not ship fake customer logos** unless they are verified customers or partners (the mock image may show placeholders; production must not imply endorsements).

## Stack and layout

| Area        | Location                          |
|------------|-----------------------------------|
| App shell  | `src/App.tsx`                     |
| Sections   | `src/components/sections/`      |
| Layout     | `src/components/layout/`        |
| UI         | `src/components/ui/`            |
| Marketing  | `src/components/marketing/` — employee app PNG: `public/hero/optionwise-mobile-app.png` (**product-owned**; do not replace unless design/product ships a new file). |
| Content    | `src/content/`                    |
| SEO copy   | `src/content/seo.ts`              |
| Entry      | `src/main.tsx`, `index.html`    |
| Styles     | `src/index.css` (Tailwind layers) |
| Build      | `vite.config.ts`                 |

When implementing the full page, align section order, nav labels, hero copy, dashboard mock content, problem blocks, three audience cards, final CTA, and footer columns with the design doc (and mock where they agree).

## Architecture and development principles

Goals: **maintainable** code, **reusable** UI building blocks, and **stack-appropriate** patterns — without premature abstraction.

### Maintainability

- **One clear responsibility per module** — e.g. layout shell vs. section vs. primitive; avoid thousand-line single files; split sections when the page grows.
- **Stable, explicit TypeScript** — type component props and public helpers; use `as const` for static content where it improves inference; keep `strict` compliance (project already uses strict TS).
- **Colocation** — keep section-specific helpers next to that section (same file or sibling) until a pattern is reused; then promote to `src/components/`.
- **Predictable data flow** — this app is mostly static marketing content; prefer props and simple composition over global state unless requirements change.
- **Readable Tailwind** — group classes logically (layout → spacing → typography → colour → state variants); extract repeated class strings into small components or `cn()` helpers if duplication becomes noisy.

### Reusable components

- **Primitives first** — buttons, links, section wrappers, headings/labels, cards: one implementation, consistent focus/hover/disabled behaviour and accessible names.
- **Sections compose primitives** — Hero, Problem, Platform, CTA, Footer should assemble smaller pieces rather than duplicating markup and classes.
- **Props for variation, not copy-paste** — e.g. optional `variant` (`"primary" | "secondary"`), `as` polymorphism only when it stays simple (e.g. `as="h2"` for headings).
- **Avoid overly generic “kitchen sink” components** — if a component needs many unrelated boolean flags, split it or use composition (children, slots) instead.
- **File layout** — prefer `src/components/` for shared UI; keep `App.tsx` as orchestration or thin layout if the page grows large.

### Stack-aligned best practices

**React (function components, hooks)**

- Prefer **composition** (`children`, small subcomponents) over deep prop trees.
- Use **semantic HTML** (`header`, `nav`, `main`, `section`, `footer`, heading hierarchy) and stable **`key`s** only where lists are dynamic.
- **Accessibility**: focus-visible styles, keyboard operable controls, meaningful labels; do not strip focus outlines without replacements.

**TypeScript**

- Narrow types at boundaries (env, JSON); avoid `any`; use discriminated unions when modelling variants.

**Tailwind CSS**

- **Mobile-first** breakpoints; match design tokens from the guidance doc (map to theme / CSS variables in `index.css` or `tailwind.config` when centralising colours).
- Prefer **utilities in JSX** over large `@apply` blocks; use `@apply` sparingly for true design tokens (e.g. base `body` styles).
- Use **`import.meta.env`** only for `VITE_*` variables; document new env vars here.

**Vite**

- Static assets in **`public/`** when referenced by URL; imported assets through modules when bundled.
- Respect **`base`** for GitHub Pages — use root-relative or Vite-aware paths for assets; avoid hard-coded absolute site roots in code.

### SEO and AI-agent-friendly delivery

- Treat **search and machine-readable clarity** as first-class: see **`docs/optionwise_homepage_design_guidance.md` §22** for the full principle list (titles, meta description, one H1, heading ladder, semantic HTML, meaningful links and `alt` text, text-not-only-in-images, stable section anchors, optional `llms.txt` when maintained).
- When changing copy or structure, update **`index.html`** `title` / `description` (and any future OG tags) so they stay aligned with the visible hero and sections.

### Hygiene

- Small, reviewable diffs; no unrelated refactors mixed with feature work.
- After non-trivial UI or logic changes, run **`npm run build`** before shipping.
- No secrets or PII in the repo; placeholders and env for real URLs.

## Commands

- `npm run dev` — local dev server  
- `npm run build` — production build to `dist/`  
- `npm run preview` — serve `dist` locally  

After non-trivial changes, run `npm run build` (and tests if added later).

## Environment

- `VITE_B2B_APP_URL` — optional; overrides the default **Log in** URL (`https://optionwise.se`) in the header (`src/content/site.ts`, `src/components/layout/SiteHeader.tsx`).
- `VITE_BOOK_DEMO_URL` — optional; when set, all **Book a demo** actions use this URL (e.g. calendar). When unset, header/hero/footer scroll to `#demo`; the button in the final CTA band opens `mailto:info@tangcai.se` with a demo subject (`src/content/site.ts`).
- `VITE_SITE_URL` — optional public origin **with no trailing slash** (e.g. `https://your-org.github.io` or `https://www.example.com`). When set at **build** time, the client sets **canonical**, **og:url**, and **og:image** to absolute URLs (`src/content/seo.ts`, `src/components/SeoHead.tsx`). Omit on local dev if you do not need social previews.
- `VITE_APP_STORE_URL` — optional; overrides the **default App Store** URL for store badges (`src/content/site.ts`; default matches `OptionWiseB2BPlatform` email templates).
- `VITE_PLAY_STORE_URL` — optional; overrides the **default Google Play** URL for store badges (same source).
- Do not commit secrets; use env vars and placeholders.

### SEO / AI-friendly assets

- **`public/llms.txt`** — short factual summary and anchors for tools that read `llms.txt`. Update when positioning or contact details change.
- **`public/robots.txt`** — allows all crawlers. For GitHub **project** Pages, the file is served under the repo `base` path (e.g. `/repo/robots.txt`), not necessarily site root.

## GitHub Pages

`vite.config.ts` sets `base` from `GITHUB_REPOSITORY` in CI (project repo → `/<repo>/`; `*.github.io` repo → `/`). Override with `BASE_PATH` if needed. Deploy workflow: `.github/workflows/deploy-pages.yml`.

For **SEO** (canonical URL, `og:url`, `og:image` in the built `index.html` for non-JS crawlers), set a GitHub **repository variable** named **`PUBLIC_SITE_URL`** to your public origin with **no trailing slash** (for example `https://your-org.github.io/your-repo`). The workflow passes it as `VITE_SITE_URL` during `npm run build`. If unset, the site still works; only runtime `SeoHead` can add those tags when `VITE_SITE_URL` exists in a local `.env`.
