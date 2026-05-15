import { useEffect, useId, useState } from 'react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { cn } from '../../lib/cn';
import { headerNavLinks, homeUrl } from '../../content/links';
import { appIconSrc } from '../../content/brand';
import { resolveBookDemoUrl, resolveB2BAppUrl } from '../../content/site';

const navLinkClass =
  'whitespace-nowrap rounded-md px-1.5 py-2 text-[0.8125rem] font-semibold leading-none text-ow-text-muted transition hover:text-ow-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2 xl:text-sm';

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
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ow-border bg-white/95 shadow-[0_1px_0_rgba(15,23,42,0.04)] supports-[backdrop-filter]:bg-white/90 supports-[backdrop-filter]:backdrop-blur-sm">
      <Container className="flex h-[72px] items-center justify-between gap-3 sm:gap-4 lg:gap-6">
        <a
          href={homeUrl()}
          className="flex min-w-0 shrink-0 items-center gap-2 rounded-lg text-ow-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2"
        >
          <img
            src={appIconSrc}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 rounded-xl object-cover shadow-sm"
          />
          <span className="truncate text-lg font-bold tracking-tight">OptionWise</span>
        </a>

        <nav
          className="hidden min-w-0 flex-1 justify-center overflow-x-auto overflow-y-visible px-1 [scrollbar-width:none] lg:flex [&::-webkit-scrollbar]:hidden"
          aria-label="Primary"
        >
          <ul className="mx-auto flex max-w-max flex-nowrap items-center gap-x-2 xl:gap-x-4 2xl:gap-x-6">
            {headerNavLinks.map((link) => (
              <li key={link.label} className="shrink-0">
                <a href={link.href} className={navLinkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex lg:gap-4">
          <a
            href={appUrl}
            className="whitespace-nowrap text-sm font-semibold text-ow-text-muted transition hover:text-ow-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2 rounded-md px-1 py-2"
          >
            Log in
          </a>
          <Button href={bookDemoUrl} variant="primary" className="shrink-0 !py-2.5 !text-sm">
            Book a demo
          </Button>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <Button href={bookDemoUrl} variant="secondary" className="!px-4 !py-2.5 text-sm">
            Book a demo
          </Button>
          <button
            type="button"
            className={cn(
              'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ow-border bg-ow-surface text-ow-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2',
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
          {headerNavLinks.map((link) => (
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
            <a
              href={appUrl}
              className="rounded-lg px-3 py-3 text-base font-semibold text-ow-primary hover:bg-ow-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2"
              onClick={() => setOpen(false)}
            >
              Log in
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
