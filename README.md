# OptionWise marketing homepage

Static marketing site built with Vite, React 19, TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env` and set:

- **`VITE_B2B_APP_URL`** — Full origin of the B2B web app (e.g. `https://app.example.com`). Primary CTAs use this URL. If unset, the header shows “Get started” and scrolls to the bottom section instead of a direct app link.

## Production build

```bash
npm run build
npm run preview
```

Serve the `dist/` folder from any static host or CDN.
