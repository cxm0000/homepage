import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** GitHub Pages: project sites use /repo-name/; user/org sites use /. Override with BASE_PATH. */
function pagesBase(): string {
  const explicit = process.env.BASE_PATH;
  if (explicit) {
    return explicit.endsWith('/') ? explicit : `${explicit}/`;
  }
  const repo = process.env.GITHUB_REPOSITORY;
  if (!repo) {
    return '/';
  }
  const name = repo.split('/')[1] ?? '';
  if (name.endsWith('.github.io')) {
    return '/';
  }
  return `/${name}/`;
}

function siteOriginFromEnv(): string | undefined {
  const raw = process.env.VITE_SITE_URL?.trim();
  return raw ? raw.replace(/\/$/, '') : undefined;
}

/** Absolute homepage URL for canonical / Open Graph when `VITE_SITE_URL` is set at build time. */
function canonicalHomeForBuild(): string | undefined {
  const origin = siteOriginFromEnv();
  if (!origin) {
    return undefined;
  }
  const base = pagesBase();
  if (base === '/') {
    return `${origin}/`;
  }
  return `${origin}${base.replace(/\/$/, '')}/`;
}

function ogImageAbsoluteForBuild(): string | undefined {
  const origin = siteOriginFromEnv();
  if (!origin) {
    return undefined;
  }
  const base = pagesBase();
  const path =
    base === '/'
      ? '/hero/optionwise-analytics-dashboard.png'
      : `${base.replace(/\/$/, '')}/hero/optionwise-analytics-dashboard.png`;
  return `${origin}${path}`;
}

/** Injects canonical + absolute og:url / og:image for crawlers that do not execute JS. */
function injectSeoMetaPlugin() {
  return {
    name: 'inject-seo-meta',
    transformIndexHtml(html: string) {
      const canonical = canonicalHomeForBuild();
      const ogImage = ogImageAbsoluteForBuild();
      if (!canonical || !ogImage) {
        return html;
      }
      const block = `    <link rel="canonical" href="${canonical}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${ogImage}" />
`;
      return html.replace('</head>', `${block}  </head>`);
    },
  };
}

export default defineConfig({
  base: pagesBase(),
  plugins: [react(), injectSeoMetaPlugin()],
});
