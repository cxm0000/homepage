import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2';

const variants = {
  primary: cn(
    'inline-flex items-center justify-center rounded-xl bg-ow-primary px-[22px] py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-ow-primary-dark',
    focusRing,
  ),
  secondary: cn(
    'inline-flex items-center justify-center rounded-xl border border-ow-border-strong bg-white px-[22px] py-3.5 text-base font-semibold text-ow-primary transition hover:bg-ow-surface-muted',
    focusRing,
  ),
  ghost: cn(
    'inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold text-ow-text-muted transition hover:text-ow-text',
    focusRing,
  ),
  onDark: cn(
    'inline-flex items-center justify-center rounded-xl bg-white px-[22px] py-3.5 text-base font-semibold text-ow-primary shadow-sm transition hover:bg-ow-primary-soft',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ow-primary-dark',
  ),
  onDarkOutline: cn(
    'inline-flex items-center justify-center rounded-xl border border-white/50 bg-transparent px-[22px] py-3.5 text-base font-semibold text-white transition hover:bg-white/10',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ow-primary-dark',
  ),
} as const;

type Variant = keyof typeof variants;

type Common = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = Common &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant = 'primary', className, children, ...rest }: ButtonProps) {
  const classes = cn(variants[variant], 'disabled:pointer-events-none disabled:opacity-50', className);

  if ('href' in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const { type = 'button', ...buttonRest } = rest as ButtonAsButton;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
