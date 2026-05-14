import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { SECTION_IDS } from '../../content/nav';
import { CONTACT_EMAIL, resolveBookDemoUrl } from '../../content/site';

export function FinalCtaSection() {
  const bookDemoUrl = resolveBookDemoUrl();

  return (
    <section
      id={SECTION_IDS.finalCta}
      className="scroll-mt-[5.5rem] bg-ow-bg py-16 sm:py-20 lg:py-24"
      aria-labelledby={`${SECTION_IDS.finalCta}-heading`}
    >
      <Container>
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-ow-primary via-ow-primary to-ow-primary-dark px-6 py-14 text-center shadow-card sm:px-12 sm:py-16 lg:px-16">
          <h2
            id={`${SECTION_IDS.finalCta}-heading`}
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            Ready to simplify your option program management?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Book a demo and see how OptionWise can help your company, employees, and advisors.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Button href={bookDemoUrl} variant="onDark" className="w-full max-w-xs justify-center sm:w-auto">
              Book a demo
            </Button>
            <p className="text-sm text-white/95">
              or email us at{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold underline decoration-white/50 underline-offset-4 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ow-primary-dark rounded"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
