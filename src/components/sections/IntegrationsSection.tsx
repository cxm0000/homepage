import { Container } from '../ui/Container';
import { homepageCopy } from '../../content/homepage';
import { integrationPartners } from '../../content/integrations';
import { SECTION_IDS } from '../../content/nav';

const base = import.meta.env.BASE_URL;

export function IntegrationsSection() {
  const { label } = homepageCopy.integrations;

  return (
    <section
      id={SECTION_IDS.integrations}
      className="scroll-mt-[5.5rem] border-y border-ow-border bg-ow-surface-muted/80 py-10 sm:py-12"
      aria-labelledby={`${SECTION_IDS.integrations}-heading`}
    >
      <Container>
        <p
          id={`${SECTION_IDS.integrations}-heading`}
          className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ow-text-soft"
        >
          {label}
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 lg:gap-x-16">
          {integrationPartners.map((partner) => (
            <li key={partner.id} className="flex shrink-0 items-center justify-center">
              <img
                src={`${base}${partner.logoSrc}`}
                alt={partner.name}
                width={160}
                height={32}
                loading="lazy"
                decoding="async"
                className={`max-w-full object-contain object-center ${partner.logoClassName}`}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
