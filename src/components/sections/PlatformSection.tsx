import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { StoreBadges } from '../marketing/StoreBadges';
import { homepageCopy } from '../../content/homepage';
import { SECTION_IDS } from '../../content/nav';
import {
  AdvisorPlatformPreview,
  CompanyPlatformPreview,
  EmployeeAppPreview,
} from '../marketing/PlatformPreviews';

const previewByCardId = {
  [SECTION_IDS.forCompanies]: CompanyPlatformPreview,
  [SECTION_IDS.employeeApp]: EmployeeAppPreview,
  [SECTION_IDS.forAdvisors]: AdvisorPlatformPreview,
} as const;

export function PlatformSection() {
  const { label, title, cards } = homepageCopy.platform;

  return (
    <section
      id={SECTION_IDS.platform}
      className="scroll-mt-[5.5rem] border-b border-ow-border bg-ow-surface py-20 sm:py-24 lg:py-28"
      aria-labelledby={`${SECTION_IDS.platform}-heading`}
    >
      <Container>
        <SectionHeading id={`${SECTION_IDS.platform}-heading`} label={label} title={title} />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {cards.map(({ id, title: cardTitle, body, footerLink }) => {
            const Preview = previewByCardId[id];
            const isEmployeeCard = id === SECTION_IDS.employeeApp;

            return (
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
                  <h3 className="text-xl font-bold text-ow-text">{cardTitle}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ow-text-muted">{body}</p>
                  <div className={isEmployeeCard ? 'mt-6 space-y-4' : 'mt-6'}>
                    <a
                      href={footerLink.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-ow-primary hover:text-ow-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2 rounded"
                    >
                      {footerLink.label}
                      <span aria-hidden>→</span>
                    </a>
                    {isEmployeeCard ? <StoreBadges variant="compact" /> : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
