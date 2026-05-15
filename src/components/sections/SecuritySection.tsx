import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { homepageCopy } from '../../content/homepage';

export function SecuritySection() {
  const { label, title, description, points } = homepageCopy.security;

  return (
    <section
      className="border-b border-ow-border bg-ow-surface-muted/50 py-20 sm:py-24 lg:py-28"
      aria-labelledby="security-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            id="security-heading"
            label={label}
            title={title}
            description={description}
            align="center"
          />
          <ul className="mt-10 space-y-4 text-left sm:mx-auto sm:max-w-xl">
            {points.map((point) => (
              <li
                key={point}
                className="relative border-t border-ow-border pt-4 pl-0 text-base leading-relaxed text-ow-text-muted first:border-t-0 first:pt-0"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
