/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_B2B_APP_URL?: string;
  readonly VITE_BOOK_DEMO_URL?: string;
  /** Public origin, no trailing slash (e.g. `https://pages.example.com`). Enables canonical, og:url, og:image. */
  readonly VITE_SITE_URL?: string;
  /** App Store listing URL for the employee app (store badges). */
  readonly VITE_APP_STORE_URL?: string;
  /** Google Play listing URL for the employee app (store badges). */
  readonly VITE_PLAY_STORE_URL?: string;
  readonly VITE_LINKEDIN_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
