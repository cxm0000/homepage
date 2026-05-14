import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { SECTION_IDS } from '../../content/nav';

const blocks = [
  {
    title: 'Manual and time-consuming',
    body: 'Spreadsheets and emails create extra work and increase the risk of errors.',
  },
  {
    title: 'Unclear for employees',
    body: 'Employees struggle to understand their options, vesting, and potential value.',
  },
  {
    title: 'Hard to get a full overview',
    body: 'Important information is scattered across systems, documents, and advisors.',
  },
  {
    title: 'Difficult to communicate',
    body: 'Explaining programs, changes, and value takes time and often lacks consistency.',
  },
] as const;

export function ChallengeSection() {
  return (
    <section
      id={SECTION_IDS.challenge}
      className="scroll-mt-[5.5rem] border-b border-ow-border bg-ow-bg py-20 sm:py-24 lg:py-28"
      aria-labelledby={`${SECTION_IDS.challenge}-heading`}
    >
      <Container>
        <SectionHeading
          id={`${SECTION_IDS.challenge}-heading`}
          label="The challenge"
          title="Option programs are valuable. But often hard to manage."
          description="Scattered data, manual work, and unclear communication make it difficult for companies and employees to stay updated and make informed decisions."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:gap-10">
          {blocks.map((block) => (
            <article
              key={block.title}
              className="border-t-2 border-ow-primary-soft pt-6"
            >
              <h3 className="text-lg font-bold text-ow-text">{block.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ow-text-muted">{block.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
