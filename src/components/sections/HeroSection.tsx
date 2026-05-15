import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { HeroDashboardImage } from '../marketing/HeroDashboardImage';
import { homepageCopy } from '../../content/homepage';
import { resolveBookDemoUrl } from '../../content/site';

export function HeroSection() {
  const bookDemoUrl = resolveBookDemoUrl();
  const { label, title, body, primaryCta, secondaryCta, secondaryCtaHref, trustPoints } = homepageCopy.hero;

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
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ow-text-muted sm:text-xl">{body}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href={bookDemoUrl} variant="primary" className="w-full justify-center sm:w-auto">
                {primaryCta}
              </Button>
              <Button href={secondaryCtaHref} variant="secondary" className="w-full justify-center sm:w-auto">
                {secondaryCta}
              </Button>
            </div>
            <ul
              className="mt-10 m-0 grid list-none grid-cols-1 divide-y divide-ow-border p-0 text-left text-sm font-medium leading-snug text-ow-text-muted sm:grid-cols-3 sm:divide-x sm:divide-y-0"
              aria-label="Trust highlights"
            >
              {trustPoints.map((point) => (
                <li key={point} className="py-3 sm:px-4 sm:py-4 md:px-6">
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
