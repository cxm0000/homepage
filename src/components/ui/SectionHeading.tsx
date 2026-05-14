import { cn } from '../../lib/cn';

type SectionHeadingProps = {
  id?: string;
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  id,
  label,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(align === 'center' && 'mx-auto max-w-3xl text-center', className)}
    >
      {label ? (
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ow-primary">{label}</p>
      ) : null}
      <h2
        id={id}
        className={cn(
          'mt-2 text-3xl font-bold tracking-tight text-ow-text sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12]',
          label && 'mt-3',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-ow-text-muted sm:text-xl">{description}</p>
      ) : null}
    </div>
  );
}
