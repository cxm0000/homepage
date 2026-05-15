import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { HeroDashboardImage } from '../marketing/HeroDashboardImage';
import { resolveBookDemoUrl } from '../../content/site';

export function HeroSection() {
  const bookDemoUrl = resolveBookDemoUrl();

  return (
    <section
      className="border-b border-ow-border bg-gradient-to-b from-ow-bg via-ow-bg-soft/40 to-ow-bg pb-16 pt-10 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16"
      aria-labelledby="hero-heading"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl lg:max-w-none">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ow-primary">
              Employee stock options. Made clear.
            </p>
            <h1
              id="hero-heading"
              className="mt-4 text-[2.375rem] font-bold leading-[1.08] tracking-tight text-ow-text sm:text-5xl lg:text-[3.5rem] lg:leading-[1.06]"
            >
              A clearer way to manage employee stock option programs
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ow-text-muted sm:text-xl">
              OptionWise helps companies, advisors, and employees manage option and warrant programs, follow value over
              time, and reduce administration.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href={bookDemoUrl} variant="primary" className="w-full justify-center sm:w-auto">
                Book a demo
              </Button>
            </div>
            <ul
              className="mt-10 m-0 grid list-none grid-cols-1 divide-y divide-ow-border p-0 text-left text-sm font-medium leading-snug text-ow-text-muted sm:grid-cols-3 sm:divide-x sm:divide-y-0"
              aria-label="Trust highlights"
            >
              <li className="py-3 sm:px-4 sm:py-4 md:px-6">Built for Swedish companies</li>
              <li className="py-3 sm:px-4 sm:py-4 md:px-6">Secure and compliant by design</li>
              <li className="py-3 sm:px-4 sm:py-4 md:px-6">Loved by companies and employees</li>
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
