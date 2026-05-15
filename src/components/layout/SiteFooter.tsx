import { Container } from '../ui/Container';
import { SECTION_IDS } from '../../content/nav';
import { footerProductLinks } from '../../content/links';
import { CONTACT_EMAIL, resolveLinkedInUrl } from '../../content/site';

const footerLinkClass =
  'text-sm font-medium text-ow-text-muted transition hover:text-ow-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2 rounded';

const columnTitleClass =
  'text-xs font-semibold uppercase tracking-[0.1em] text-ow-text-soft';

export function SiteFooter() {
  const year = new Date().getFullYear();
  const linkedInUrl = resolveLinkedInUrl();

  return (
    <footer className="border-t border-ow-border bg-ow-surface-muted/60">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:items-start lg:gap-10 xl:gap-14">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ow-primary text-sm font-bold text-white">
                OW
              </span>
              <span className="text-lg font-bold tracking-tight text-ow-text">OptionWise</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ow-text-muted">
              OptionWise helps companies, advisors, and employees manage option and warrant programmes with less
              administration and clearer communication.
            </p>
          </div>

          <nav className="lg:col-span-4" aria-label="On this page">
            <p className={columnTitleClass}>On this page</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:gap-x-10">
              {footerProductLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={footerLinkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div
            id={SECTION_IDS.contact}
            className="scroll-mt-[5.5rem] lg:col-span-3"
          >
            <p className={columnTitleClass}>Get in touch</p>
            <p className="mt-4 text-sm leading-relaxed text-ow-text-muted">
              Questions about demos, security, or how OptionWise fits your programme?
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 inline-block text-sm font-semibold text-ow-primary underline decoration-ow-border-strong underline-offset-4 transition hover:text-ow-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2 rounded"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ow-border pt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-sm text-ow-text-soft">© {year} TangCai Invest AB. All rights reserved.</p>
          {linkedInUrl ? (
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ow-primary hover:text-ow-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2 rounded"
            >
              LinkedIn
            </a>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
