import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { StoreBadges } from '../marketing/StoreBadges';
import { SECTION_IDS, hash } from '../../content/nav';
import {
  AdvisorPlatformPreview,
  CompanyPlatformPreview,
  EmployeeAppPreview,
} from '../marketing/PlatformPreviews';

const platformCards = [
  {
    id: SECTION_IDS.forCompanies,
    title: 'For companies',
    body: 'Manage programs, employees, vesting, documents, and reports in one secure place.',
    Preview: CompanyPlatformPreview,
    footer: { type: 'link' as const, label: 'Explore for companies', href: hash(SECTION_IDS.platform) },
  },
  {
    id: SECTION_IDS.employeeApp,
    title: 'For employees',
    body: 'A simple mobile app that shows value, vesting, key dates, and important documents.',
    Preview: EmployeeAppPreview,
    footer: { type: 'stores' as const },
  },
  {
    id: SECTION_IDS.forAdvisors,
    title: 'For advisors',
    body: 'Support your clients more efficiently with clear overviews and professional reporting.',
    Preview: AdvisorPlatformPreview,
    footer: { type: 'link' as const, label: 'Explore for advisors', href: hash(SECTION_IDS.platform) },
  },
] as const;

export function PlatformSection() {
  return (
    <section
      id={SECTION_IDS.platform}
      className="scroll-mt-[5.5rem] border-b border-ow-border bg-ow-surface py-20 sm:py-24 lg:py-28"
      aria-labelledby={`${SECTION_IDS.platform}-heading`}
    >
      <Container>
        <SectionHeading
          id={`${SECTION_IDS.platform}-heading`}
          label="The OptionWise platform"
          title="Everything you need in one platform"
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {platformCards.map(({ id, title, body, footer, Preview }) => (
            <article
              key={id}
              id={id}
              className="scroll-mt-[5.5rem] flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-ow-border bg-ow-surface-muted/40 shadow-card"
            >
              <div className="flex h-64 shrink-0 flex-col overflow-hidden border-b border-ow-border bg-ow-surface p-5 sm:h-72 lg:h-80">
                <div className="min-h-0 flex-1">
                  <Preview />
                </div>
              </div>
              <div className="flex min-h-0 flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-ow-text">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ow-text-muted">{body}</p>
                {footer.type === 'link' ? (
                  <a
                    href={footer.href}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ow-primary hover:text-ow-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2 rounded"
                  >
                    {footer.label}
                    <span aria-hidden>→</span>
                  </a>
                ) : (
                  <StoreBadges variant="compact" className="mt-6" />
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
