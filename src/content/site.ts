export const CONTACT_EMAIL = 'info@tangcai.se';

/** Same listing URLs as `OptionWiseB2BPlatform` (`backend/src/utils/emailService.ts`, `frontend/src/pages/MobileDeepLinkLandingPage.tsx`). */
export const DEFAULT_APP_STORE_URL =
  'https://apps.apple.com/se/app/optionwise/id6747363629?l=en-GB' as const;
export const DEFAULT_PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.optionwise.app' as const;

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

export function resolveB2BAppUrl(): string | undefined {
  const raw = import.meta.env.VITE_B2B_APP_URL?.trim();
  return raw || undefined;
}

/** Company LinkedIn profile; omit link in footer when unset. */
export function resolveLinkedInUrl(): string | undefined {
  const raw = import.meta.env.VITE_LINKEDIN_URL?.trim();
  return raw || undefined;
}

/** Calendar or landing URL; falls back to mailto `CONTACT_EMAIL` with a demo subject. */
export function resolveBookDemoUrl(): string {
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
