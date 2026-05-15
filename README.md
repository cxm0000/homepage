# OptionWise marketing homepage

Static marketing site built with Vite, React 19, TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env` and set:

- **`VITE_B2B_APP_URL`** — Overrides the default **Log in** URL (`https://optionwise.se`) in the header.

## Production build

```bash
npm run build
npm run preview
```

Serve the `dist/` folder from any static host or CDN.
