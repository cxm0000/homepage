import { SECTION_IDS, hash } from './nav';

/** Visible homepage copy — aligned with product homepage mockup */
export const homepageCopy = {
  hero: {
    label: 'Employee option programs, from invitation to vesting',
    title: 'Run option programs.',
    titleAccent: 'Less admin. More value.',
    body: 'OptionWise helps companies and advisors manage employee participation, generate contracts, coordinate e-signing, and give employees a mobile app to follow their options.',
    primaryCta: 'Book a demo',
    secondaryCta: 'See how it works',
    secondaryCtaHref: hash(SECTION_IDS.workflow),
    trustPoints: [
      'Built for Swedish companies',
      'Secure & compliant by design',
      'Loved by companies and employees',
    ] as const,
  },
  workflow: {
    label: 'One workflow. Every step.',
    steps: [
      {
        title: 'Invite',
        body: 'Invite employees to the program with a clear, guided start.',
      },
      {
        title: 'Interest',
        body: 'Employees confirm participation and understand the offer before you proceed.',
      },
      {
        title: 'Grant',
        body: 'Record grants and allocations with program data kept in one place.',
      },
      {
        title: 'Contract and sign',
        body: 'Generate individual contracts and coordinate signing through your e-signing provider.',
      },
      {
        title: 'Follow',
        body: 'Employees follow vesting and value in the app. You keep full overview.',
      },
    ] as const,
  },
  audience: {
    cards: [
      {
        id: SECTION_IDS.forCompanies,
        label: 'For companies',
        title: 'Everything in one place',
        features: [
          'Program & participant management',
          'Automatic contract generation',
          'E-signing integrations',
          'Vesting & value overview',
          'Document and signing status',
          'Reports for HR and finance',
        ],
        footerLink: {
          label: 'Explore platform',
          href: hash(SECTION_IDS.forCompanies),
        },
      },
      {
        id: SECTION_IDS.employeeApp,
        label: 'For employees',
        title: 'Your options. Always with you.',
        features: [
          'Complete participation flow',
          'Sign documents securely',
          'Follow vesting progress',
          'See potential value over time',
          'Key dates and notifications',
          'Access agreements when you need them',
        ],
        footerLink: {
          label: 'See the app',
          href: hash(SECTION_IDS.employeeApp),
        },
        showStoreBadges: true,
      },
      {
        id: SECTION_IDS.forAdvisors,
        label: 'For advisors',
        title: 'Support more clients efficiently',
        features: [
          'Multi-client overview',
          'Structured data & reporting',
          'Document & signing status',
          'Professional client communication',
          'Less manual follow-up',
          'Scalable advisor workflows',
        ],
        footerLink: {
          label: 'Explore advisor tools',
          href: hash(SECTION_IDS.forAdvisors),
        },
      },
    ] as const,
  },
  integrations: {
    label: 'Works with your existing signing tools',
  },
  finalCta: {
    title: 'Ready to simplify your next option program?',
    body: 'Book a demo and see how OptionWise can help your team save time and create a better employee experience.',
    primaryCta: 'Book a demo',
    secondaryCta: 'Contact us',
    secondaryCtaHref: hash(SECTION_IDS.contact),
  },
} as const;
