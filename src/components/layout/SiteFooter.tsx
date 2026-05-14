import type { ReactNode } from 'react';
import { Container } from '../ui/Container';
import { SECTION_IDS, hash } from '../../content/nav';
import { CONTACT_EMAIL, mailtoContact } from '../../content/site';

const footerProduct = [
  { label: 'Overview', href: hash(SECTION_IDS.platform) },
  { label: 'For Companies', href: hash(SECTION_IDS.forCompanies) },
  { label: 'For Employees', href: hash(SECTION_IDS.employeeApp) },
  { label: 'For Advisors', href: hash(SECTION_IDS.forAdvisors) },
  { label: 'Security', href: hash(SECTION_IDS.challenge) },
] as const;

const footerResources = [
  { label: 'Blog', href: hash(SECTION_IDS.resourceLinks) },
  { label: 'Help Center', href: hash(SECTION_IDS.resourceLinks) },
  { label: 'Guides', href: hash(SECTION_IDS.resourceLinks) },
  { label: 'Templates', href: hash(SECTION_IDS.resourceLinks) },
] as const;

const footerCompany = [
  { label: 'About Us', href: hash(SECTION_IDS.aboutCompany) },
  { label: 'Careers', href: hash(SECTION_IDS.aboutCompany) },
  { label: 'Contact', href: mailtoContact({ subject: 'Contact — OptionWise' }) },
] as const;

const footerLegal = [
  { label: 'Privacy Policy', href: mailtoContact({ subject: 'Privacy policy', body: 'Please send the privacy policy.' }) },
  { label: 'Terms of Service', href: mailtoContact({ subject: 'Terms of service', body: 'Please send the terms of service.' }) },
] as const;

function FooterColumn({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <div id={id}>
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ow-text-soft">{title}</p>
      <ul className="mt-4 space-y-3">{children}</ul>
    </div>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ow-border bg-ow-surface-muted/60">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_repeat(4,minmax(0,1fr))]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ow-primary text-sm font-bold text-white">
                OW
              </span>
              <span className="text-lg font-bold text-ow-text">OptionWise</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ow-text-muted">
              OptionWise helps companies, advisors, and employees manage option and warrant programmes with less
              administration and clearer communication.
            </p>
            <p className="mt-8 text-sm text-ow-text-soft">© {year} TangCai Invest AB. All rights reserved.</p>
          </div>

          <FooterColumn title="Product">
            {footerProduct.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-ow-text-muted transition hover:text-ow-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2 rounded"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Resources" id={SECTION_IDS.resourceLinks}>
            {footerResources.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-ow-text-muted transition hover:text-ow-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2 rounded"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Company" id={SECTION_IDS.aboutCompany}>
            {footerCompany.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-ow-text-muted transition hover:text-ow-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2 rounded"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Legal" id="legal">
            {footerLegal.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-ow-text-muted transition hover:text-ow-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2 rounded"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ow-text-soft">Follow us</p>
              <a
                href={mailtoContact({ subject: 'LinkedIn', body: 'Please share your LinkedIn company page.' })}
                className="mt-2 inline-block text-sm font-semibold text-ow-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2 rounded"
              >
                LinkedIn
              </a>
            </li>
          </FooterColumn>
        </div>

        <div id={SECTION_IDS.contact} className="mt-12 border-t border-ow-border pt-8">
          <p className="text-sm text-ow-text-muted">
            Questions?{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-ow-primary underline decoration-ow-border-strong underline-offset-4 hover:text-ow-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2 rounded"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
