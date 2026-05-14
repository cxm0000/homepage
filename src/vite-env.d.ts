/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_B2B_APP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
