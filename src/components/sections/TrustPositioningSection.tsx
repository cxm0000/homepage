import { Container } from '../ui/Container';

export function TrustPositioningSection() {
  return (
    <section className="border-b border-ow-border bg-ow-surface py-12 sm:py-14" aria-labelledby="trust-positioning-heading">
      <Container>
        <h2
          id="trust-positioning-heading"
          className="text-center text-xs font-semibold uppercase leading-relaxed tracking-[0.12em] text-ow-primary sm:text-sm"
        >
          Built for Swedish growth companies, listed companies, and equity advisors
        </h2>
      </Container>
    </section>
  );
}
