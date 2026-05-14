import { CONTACT_EMAIL } from '../content/site';
import {
  SEO_DESCRIPTION,
  SEO_ORGANIZATION,
  SEO_PRODUCT,
  SEO_TITLE,
  canonicalHomeUrl,
} from '../content/seo';

function buildSchema() {
  const pageUrl = canonicalHomeUrl();
  const orgId = pageUrl ? `${pageUrl}#organization` : '#organization';
  const webId = pageUrl ? `${pageUrl}#website` : '#website';

  const organization: Record<string, unknown> = {
    '@type': 'Organization',
    '@id': orgId,
    name: SEO_ORGANIZATION,
    email: CONTACT_EMAIL,
    brand: {
      '@type': 'Brand',
      name: SEO_PRODUCT,
    },
  };
  if (pageUrl) {
    organization.url = pageUrl;
  }

  const website: Record<string, unknown> = {
    '@type': 'WebSite',
    '@id': webId,
    name: SEO_TITLE,
    description: SEO_DESCRIPTION,
    publisher: { '@id': orgId },
    inLanguage: 'en',
  };
  if (pageUrl) {
    website.url = pageUrl;
  }

  const software: Record<string, unknown> = {
    '@type': 'SoftwareApplication',
    name: SEO_PRODUCT,
    description: SEO_DESCRIPTION,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    provider: { '@id': orgId },
    areaServed: {
      '@type': 'Country',
      name: 'Sweden',
    },
  };
  if (pageUrl) {
    software.url = pageUrl;
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, website, software],
  };
}

export function SeoJsonLd() {
  const json = JSON.stringify(buildSchema());
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
