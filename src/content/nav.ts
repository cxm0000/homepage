export const SECTION_IDS = {
  platform: 'platform',
  challenge: 'challenge',
  forCompanies: 'for-companies',
  employeeApp: 'employee-app',
  forAdvisors: 'for-advisors',
  finalCta: 'demo',
  contact: 'contact',
  resourceLinks: 'resource-links',
  aboutCompany: 'about-company',
} as const;

export function hash(id: (typeof SECTION_IDS)[keyof typeof SECTION_IDS]) {
  return `#${id}`;
}
