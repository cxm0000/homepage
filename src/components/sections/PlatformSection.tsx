import { Container } from '../ui/Container';
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
  const { cards } = homepageCopy.audience;

  return (
    <section
      id={SECTION_IDS.platform}
      className="scroll-mt-[5.5rem] border-b border-ow-border bg-ow-surface py-20 sm:py-24 lg:py-28"
      aria-labelledby={`${SECTION_IDS.platform}-heading`}
    >
      <Container>
        <h2 id={`${SECTION_IDS.platform}-heading`} className="sr-only">
          OptionWise for companies, employees, and advisors
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {cards.map((card) => {
            const Preview = previewByCardId[card.id];
            const showStores = 'showStoreBadges' in card && card.showStoreBadges;

            return (
              <article
                key={card.id}
                id={card.id}
                className="scroll-mt-[5.5rem] flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-ow-border bg-ow-surface shadow-card"
              >
                <div className="flex h-64 shrink-0 flex-col overflow-hidden border-b border-ow-border bg-ow-surface-muted/30 p-5 sm:h-72 lg:h-80">
                  <div className="min-h-0 flex-1">
                    <Preview />
                  </div>
                </div>
                <div className="flex min-h-0 flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ow-primary">{card.label}</p>
                  <h3 className="mt-2 text-xl font-bold text-ow-text">{card.title}</h3>
                  <ul className="mt-4 flex-1 space-y-2.5">
                    {card.features.map((feature) => (
                      <li
                        key={feature}
                        className="border-l-2 border-ow-primary-soft pl-3 text-sm leading-snug text-ow-text-muted"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className={showStores ? 'mt-6 space-y-4' : 'mt-6'}>
                    <a
                      href={card.footerLink.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-ow-primary hover:text-ow-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2 rounded"
                    >
                      {card.footerLink.label}
                      <span aria-hidden>→</span>
                    </a>
                    {showStores ? <StoreBadges variant="compact" /> : null}
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
