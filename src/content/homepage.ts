import { SECTION_IDS, hash } from './nav';

/** Visible homepage copy — aligned with docs/optionwise_homepage_design_guidance.md */
export const homepageCopy = {
  hero: {
    label: 'Employee stock options. Made clear.',
    title: 'A clearer way to manage employee stock option programs',
    body: 'OptionWise helps companies, advisors, and employees manage option and warrant programs, follow value over time, and reduce administration.',
    primaryCta: 'Book a demo',
    secondaryCta: 'See the employee app',
    secondaryCtaHref: hash(SECTION_IDS.employeeApp),
    trustPoints: [
      'Built for Swedish companies',
      'Secure and compliant by design',
      'Advisor-friendly workflows',
    ] as const,
  },
  trustPositioning: {
    title: 'Built for Swedish growth companies, listed companies, and equity advisors',
  },
  challenge: {
    label: 'The challenge',
    title: 'Option programs are valuable. But often hard to manage.',
    description:
      'Scattered data, manual work, and unclear communication make it difficult for companies and employees to stay updated and make informed decisions.',
    blocks: [
      {
        title: 'Manual and time-consuming',
        body: 'Spreadsheets and emails create extra work and increase the risk of errors.',
      },
      {
        title: 'Unclear for employees',
        body: 'Employees struggle to understand their options, vesting, and potential value.',
      },
      {
        title: 'Hard to get a full overview',
        body: 'Important information is scattered across systems, documents, and advisors.',
      },
      {
        title: 'Difficult to communicate',
        body: 'Explaining programs, changes, and value takes time and often lacks consistency.',
      },
    ] as const,
  },
  platform: {
    label: 'The OptionWise platform',
    title: 'Everything you need in one platform',
    cards: [
      {
        id: SECTION_IDS.forCompanies,
        title: 'For companies',
        body: 'Manage programs, employees, vesting, documents, and reports in one secure place.',
        footerLink: {
          label: 'Explore for companies',
          href: hash(SECTION_IDS.forCompanies),
        },
      },
      {
        id: SECTION_IDS.employeeApp,
        title: 'For employees',
        body: 'A simple mobile app that shows value, vesting, key dates, and important documents.',
        footerLink: {
          label: 'See the employee app',
          href: hash(SECTION_IDS.employeeApp),
        },
      },
      {
        id: SECTION_IDS.forAdvisors,
        title: 'For advisors',
        body: 'Support your clients more efficiently with clear overviews and professional reporting.',
        footerLink: {
          label: 'Explore for advisors',
          href: hash(SECTION_IDS.forAdvisors),
        },
      },
    ] as const,
  },
  value: {
    label: 'Why OptionWise',
    title: 'Less administration. Clearer communication.',
    description:
      'One platform for program data, employee-facing explanations, and advisor-ready reporting—so option and warrant programmes stay organised end to end.',
    blocks: [
      {
        title: 'One source of truth',
        body: 'Programs, grants, vesting schedules, and documents stay connected—so HR and finance are not reconciling files and inboxes.',
      },
      {
        title: 'Employees stay informed',
        body: 'Participants see vesting, potential value, and key dates in plain language, which cuts down on repeated questions every quarter.',
      },
      {
        title: 'Advisor-ready reporting',
        body: 'Structured client overviews and exportable reports help advisors support more companies without duplicating manual work.',
      },
      {
        title: 'Fewer manual touchpoints',
        body: 'Status updates, eligibility changes, and reporting workflows reduce the spreadsheet-and-email overhead that slows teams down.',
      },
    ] as const,
  },
  security: {
    label: 'Security & compliance',
    title: 'Designed for sensitive equity data',
    description:
      'Option programmes involve personal and financial information. OptionWise is built with access control, clear roles, and data handling suited to Swedish companies and their advisors.',
    points: [
      'Role-based access for company administrators and advisors',
      'Secure storage for programme documents and agreements',
      'Clear separation between company, advisor, and employee views',
    ] as const,
  },
  finalCta: {
    title: 'Ready to simplify your option program management?',
    body: 'Book a demo and see how OptionWise can help your company, employees, and advisors.',
    primaryCta: 'Book a demo',
    emailLeadIn: 'or email us at',
  },
} as const;
