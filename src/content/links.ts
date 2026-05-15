import { SECTION_IDS, hash } from './nav';

/** Homepage root (respects Vite `base` on GitHub Pages). */
export function homeUrl(): string {
  const base = import.meta.env.BASE_URL;
  return base.endsWith('/') ? base : `${base}/`;
}

/** In-page section anchors that exist on the homepage. */
export const pageAnchors = {
  platform: hash(SECTION_IDS.platform),
  forCompanies: hash(SECTION_IDS.forCompanies),
  employeeApp: hash(SECTION_IDS.employeeApp),
  forAdvisors: hash(SECTION_IDS.forAdvisors),
  workflow: hash(SECTION_IDS.workflow),
  integrations: hash(SECTION_IDS.integrations),
  demo: hash(SECTION_IDS.finalCta),
  contact: hash(SECTION_IDS.contact),
  main: '#main',
} as const;

/** Header/footer links only where the target is a visible section on this page. */
export const headerNavLinks = [
  { label: 'Product', href: pageAnchors.platform },
  { label: 'For Companies', href: pageAnchors.forCompanies },
  { label: 'For Employees', href: pageAnchors.employeeApp },
  { label: 'For Advisors', href: pageAnchors.forAdvisors },
] as const;

export const footerProductLinks = [
  { label: 'Overview', href: pageAnchors.platform },
  { label: 'For Companies', href: pageAnchors.forCompanies },
  { label: 'For Employees', href: pageAnchors.employeeApp },
  { label: 'For Advisors', href: pageAnchors.forAdvisors },
  { label: 'Book a demo', href: pageAnchors.demo },
] as const;
