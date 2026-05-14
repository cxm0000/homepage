import { useEffect, useId, useState } from 'react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { cn } from '../../lib/cn';
import { SECTION_IDS, hash } from '../../content/nav';
import { resolveBookDemoUrl, resolveB2BAppUrl } from '../../content/site';

const navLinks = [
  { label: 'Product', href: hash(SECTION_IDS.platform) },
  { label: 'For Companies', href: hash(SECTION_IDS.forCompanies) },
  { label: 'For Employees', href: hash(SECTION_IDS.employeeApp) },
  { label: 'For Advisors', href: hash(SECTION_IDS.forAdvisors) },
  { label: 'Resources', href: hash(SECTION_IDS.resourceLinks) },
  { label: 'About Us', href: hash(SECTION_IDS.aboutCompany) },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const appUrl = resolveB2BAppUrl();
  const bookDemoUrl = resolveBookDemoUrl();

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-white/90 backdrop-blur-md transition-colors supports-[backdrop-filter]:bg-white/80">
      <Container className="relative flex h-[72px] items-center justify-between gap-4">
        <a
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-lg text-ow-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ow-primary text-sm font-bold text-white">
            OW
          </span>
          <span className="text-lg font-bold tracking-tight">OptionWise</span>
        </a>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-ow-text-muted transition hover:text-ow-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2 rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          {appUrl ? (
            <a
              href={appUrl}
              className="text-sm font-semibold text-ow-text-muted transition hover:text-ow-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2 rounded px-1"
            >
              Log in
            </a>
          ) : (
            <a
              href={hash(SECTION_IDS.contact)}
              className="text-sm font-semibold text-ow-text-muted transition hover:text-ow-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2 rounded px-1"
            >
              Log in
            </a>
          )}
          <Button href={bookDemoUrl} variant="primary" className="!py-3">
            Book a demo
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button href={bookDemoUrl} variant="primary" className="!px-4 !py-2.5 text-sm">
            Book a demo
          </Button>
          <button
            type="button"
            className={cn(
              'inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ow-border bg-ow-surface text-ow-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2',
            )}
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className="text-ow-text">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile panel */}
      <div
        id={panelId}
        className={cn(
          'border-t border-ow-border bg-white lg:hidden',
          open ? 'block' : 'hidden',
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-3 text-base font-semibold text-ow-text hover:bg-ow-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-2 border-t border-ow-border pt-4">
            {appUrl ? (
              <a
                href={appUrl}
                className="rounded-lg px-3 py-3 text-base font-semibold text-ow-primary hover:bg-ow-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2"
                onClick={() => setOpen(false)}
              >
                Log in
              </a>
            ) : (
              <a
                href={hash(SECTION_IDS.contact)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-ow-primary hover:bg-ow-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2"
                onClick={() => setOpen(false)}
              >
                Log in
              </a>
            )}
          </div>
        </Container>
      </div>
    </header>
  );
}
