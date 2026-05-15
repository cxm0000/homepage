import { SECTION_IDS, hash } from './nav';

export const CONTACT_EMAIL = 'info@tangcai.se';

/** Same listing URLs as `OptionWiseB2BPlatform` (`backend/src/utils/emailService.ts`, `frontend/src/pages/MobileDeepLinkLandingPage.tsx`). */
export const DEFAULT_APP_STORE_URL =
  'https://apps.apple.com/se/app/optionwise/id6747363629?l=en-GB' as const;
export const DEFAULT_PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.optionwise.app' as const;

/** B2B web app sign-in. `VITE_B2B_APP_URL` overrides the default. */
export const DEFAULT_B2B_APP_URL = 'https://optionwise.se' as const;

/** App Store listing for the employee app. `VITE_APP_STORE_URL` overrides the default. */
export function resolveAppStoreUrl(): string {
  const raw = import.meta.env.VITE_APP_STORE_URL?.trim();
  return raw || DEFAULT_APP_STORE_URL;
}

/** Google Play listing for the employee app. `VITE_PLAY_STORE_URL` overrides the default. */
export function resolvePlayStoreUrl(): string {
  const raw = import.meta.env.VITE_PLAY_STORE_URL?.trim();
  return raw || DEFAULT_PLAY_STORE_URL;
}

/** B2B app URL for header “Log in”. Defaults to `https://optionwise.se`. */
export function resolveB2BAppUrl(): string {
  const raw = import.meta.env.VITE_B2B_APP_URL?.trim();
  return raw || DEFAULT_B2B_APP_URL;
}

/** Company LinkedIn profile; omit link in footer when unset. */
export function resolveLinkedInUrl(): string | undefined {
  const raw = import.meta.env.VITE_LINKEDIN_URL?.trim();
  return raw || undefined;
}

/**
 * Primary “Book a demo” target for header, hero, and footer.
 * Uses `VITE_BOOK_DEMO_URL` when set; otherwise scrolls to the on-page demo CTA (`#demo`).
 */
export function resolveBookDemoUrl(): string {
  const raw = import.meta.env.VITE_BOOK_DEMO_URL?.trim();
  if (raw) {
    return raw;
  }
  return hash(SECTION_IDS.finalCta);
}

/**
 * Action in the final CTA band: external booking URL when configured, otherwise mailto.
 */
export function resolveBookDemoActionUrl(): string {
  const raw = import.meta.env.VITE_BOOK_DEMO_URL?.trim();
  if (raw) {
    return raw;
  }
  const subject = encodeURIComponent('Book a demo — OptionWise');
  return `mailto:${CONTACT_EMAIL}?subject=${subject}`;
}

export function mailtoContact(opts?: { body?: string; subject?: string }): string {
  const params = new URLSearchParams();
  params.set('subject', opts?.subject ?? 'OptionWise');
  if (opts?.body) {
    params.set('body', opts.body);
  }
  return `mailto:${CONTACT_EMAIL}?${params.toString()}`;
}
