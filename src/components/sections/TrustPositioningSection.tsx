import { Container } from '../ui/Container';
import { homepageCopy } from '../../content/homepage';

export function TrustPositioningSection() {
  const { title } = homepageCopy.trustPositioning;

  return (
    <section className="border-b border-ow-border bg-ow-surface py-12 sm:py-14" aria-labelledby="trust-positioning-heading">
      <Container>
        <h2
          id="trust-positioning-heading"
          className="text-center text-xs font-semibold uppercase leading-relaxed tracking-[0.12em] text-ow-primary sm:text-sm"
        >
          {title}
        </h2>
      </Container>
    </section>
  );
}
