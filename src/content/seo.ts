/** Default document title (keep in sync with `index.html` `<title>`). */
export const SEO_TITLE = 'OptionWise — Run option programs with less admin';

/** Meta description: used in `index.html`, Open Graph, Twitter, and JSON-LD. */
export const SEO_DESCRIPTION =
  'OptionWise helps companies and advisors manage employee participation, generate contracts, coordinate e-signing, and give employees a mobile app to follow their options.';

export const SEO_ORGANIZATION = 'TangCai Invest AB';
export const SEO_PRODUCT = 'OptionWise';

/** Optional: public site origin with no trailing slash, e.g. `https://www.example.com` (enables canonical, og:url, og:image). */
export function siteOrigin(): string | undefined {
  const raw = import.meta.env.VITE_SITE_URL?.trim();
  if (!raw) {
    return undefined;
  }
  return raw.replace(/\/$/, '');
}

/** Canonical URL for the deployed homepage (respects Vite `base`). */
export function canonicalHomeUrl(): string | undefined {
  const origin = siteOrigin();
  if (!origin) {
    return undefined;
  }
  const base = import.meta.env.BASE_URL;
  if (base === '/') {
    return `${origin}/`;
  }
  return `${origin}${base.replace(/\/$/, '')}/`;
}

/** Absolute URL for a path under the site (e.g. `/hero/...`). */
export function absoluteUrl(path: string): string | undefined {
  const origin = siteOrigin();
  if (!origin) {
    return undefined;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const base = import.meta.env.BASE_URL;
  if (base === '/') {
    return `${origin}${normalized}`;
  }
  const basePath = base.replace(/\/$/, '');
  return `${origin}${basePath}${normalized}`;
}
