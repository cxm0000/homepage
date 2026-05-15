export const SECTION_IDS = {
  platform: 'platform',
  workflow: 'workflow',
  forCompanies: 'for-companies',
  employeeApp: 'employee-app',
  forAdvisors: 'for-advisors',
  integrations: 'integrations',
  finalCta: 'demo',
  contact: 'contact',
} as const;

export function hash(id: (typeof SECTION_IDS)[keyof typeof SECTION_IDS]) {
  return `#${id}`;
}
