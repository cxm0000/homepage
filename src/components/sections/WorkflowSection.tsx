import { Container } from '../ui/Container';
import { homepageCopy } from '../../content/homepage';
import { SECTION_IDS } from '../../content/nav';

export function WorkflowSection() {
  const { label, steps } = homepageCopy.workflow;

  return (
    <section
      id={SECTION_IDS.workflow}
      className="scroll-mt-[5.5rem] border-b border-ow-border bg-ow-bg-soft/80 py-12 sm:py-14"
      aria-labelledby={`${SECTION_IDS.workflow}-heading`}
    >
      <Container className="max-w-6xl">
        <h2
          id={`${SECTION_IDS.workflow}-heading`}
          className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ow-primary"
        >
          {label}
        </h2>
        <ol className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5 lg:gap-4">
          {steps.map((step, index) => (
            <li key={step.title} className="text-center lg:text-left">
              <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-ow-primary text-xs font-bold text-white lg:mx-0">
                {index + 1}
              </span>
              <h3 className="mt-2.5 text-base font-bold text-ow-text">{step.title}</h3>
              <p className="mt-1 text-sm leading-snug text-ow-text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
