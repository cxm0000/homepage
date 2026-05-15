import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { homepageCopy } from '../../content/homepage';
import { SECTION_IDS } from '../../content/nav';
import { resolveBookDemoActionUrl } from '../../content/site';

export function FinalCtaSection() {
  const bookDemoActionUrl = resolveBookDemoActionUrl();
  const { title, body, primaryCta, secondaryCta, secondaryCtaHref } = homepageCopy.finalCta;

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
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">{body}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href={bookDemoActionUrl} variant="onDark" className="w-full max-w-xs justify-center gap-2 sm:w-auto">
              {primaryCta}
              <span aria-hidden>→</span>
            </Button>
            <Button
              href={secondaryCtaHref}
              variant="onDarkOutline"
              className="w-full max-w-xs justify-center sm:w-auto"
            >
              {secondaryCta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
