import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { homepageCopy } from '../../content/homepage';

export function ValueSection() {
  const { label, title, description, blocks } = homepageCopy.value;

  return (
    <section
      className="border-b border-ow-border bg-ow-bg py-20 sm:py-24 lg:py-28"
      aria-labelledby="value-heading"
    >
      <Container>
        <SectionHeading id="value-heading" label={label} title={title} description={description} />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:gap-10">
          {blocks.map((block) => (
            <article key={block.title} className="border-t-2 border-ow-primary-soft pt-6">
              <h3 className="text-lg font-bold text-ow-text">{block.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ow-text-muted">{block.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
