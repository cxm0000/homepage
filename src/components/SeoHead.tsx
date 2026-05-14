import { useEffect } from 'react';
import { absoluteUrl, canonicalHomeUrl, SEO_DESCRIPTION, SEO_TITLE } from '../content/seo';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

/**
 * When `VITE_SITE_URL` is set at build time, sets canonical, og:url, and og:image
 * so crawlers and previews get absolute URLs (GitHub Pages–safe with `base`).
 */
export function SeoHead() {
  useEffect(() => {
    const canonical = canonicalHomeUrl();
    if (canonical) {
      setLink('canonical', canonical);
      setMeta('property', 'og:url', canonical);
    }

    const ogImage = absoluteUrl('/hero/optionwise-analytics-dashboard.png');
    if (ogImage) {
      setMeta('property', 'og:image', ogImage);
      setMeta(
        'property',
        'og:image:alt',
        'OptionWise Analytics Dashboard: employee stock option participation, vesting, and compliance overview.',
      );
      setMeta('name', 'twitter:image', ogImage);
    }

    setMeta('property', 'og:title', SEO_TITLE);
    setMeta('property', 'og:description', SEO_DESCRIPTION);
    setMeta('name', 'twitter:title', SEO_TITLE);
    setMeta('name', 'twitter:description', SEO_DESCRIPTION);
  }, []);

  return null;
}
