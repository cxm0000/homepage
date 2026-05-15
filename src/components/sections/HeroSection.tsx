import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { HeroDashboardImage } from '../marketing/HeroDashboardImage';
import { homepageCopy } from '../../content/homepage';
import { resolveBookDemoUrl } from '../../content/site';

function TrustCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0 text-ow-primary">
      <circle cx="8" cy="8" r="8" className="fill-ow-primary-soft" />
      <path
        d="M5 8.2 7 10.2 11 6.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden className="shrink-0">
      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.25" />
      <path d="M7.25 6.5v5l4.5-2.5-4.5-2.5z" fill="currentColor" />
    </svg>
  );
}

export function HeroSection() {
  const bookDemoUrl = resolveBookDemoUrl();
  const {
    label,
    title,
    titleAccent,
    body,
    primaryCta,
    secondaryCta,
    secondaryCtaHref,
    trustPoints,
  } = homepageCopy.hero;

  return (
    <section
      className="border-b border-ow-border bg-gradient-to-b from-ow-bg via-ow-bg-soft/40 to-ow-bg pb-16 pt-10 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16"
      aria-labelledby="hero-heading"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl lg:max-w-none">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ow-primary">{label}</p>
            <h1
              id="hero-heading"
              className="mt-4 text-[2.375rem] font-bold leading-[1.08] tracking-tight text-ow-text sm:text-5xl lg:text-[3.5rem] lg:leading-[1.06]"
            >
              {title}{' '}
              <span className="text-ow-primary">{titleAccent}</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ow-text-muted sm:text-xl">{body}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href={bookDemoUrl} variant="primary" className="w-full justify-center gap-2 sm:w-auto">
                {primaryCta}
                <span aria-hidden>→</span>
              </Button>
              <Button
                href={secondaryCtaHref}
                variant="secondary"
                className="w-full justify-center gap-2 sm:w-auto"
              >
                <PlayIcon />
                {secondaryCta}
              </Button>
            </div>
            <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8" aria-label="Trust highlights">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm font-medium text-ow-text-muted">
                  <TrustCheck />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <HeroDashboardImage />
          </div>
        </div>
      </Container>
    </section>
  );
}
