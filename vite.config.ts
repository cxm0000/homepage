import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** GitHub Pages: project sites use /repo-name/; user/org sites use /. Override with BASE_PATH. */
function pagesBase(): string {
  const explicit = process.env.BASE_PATH;
  if (explicit) {
    return explicit.endsWith('/') ? explicit : `${explicit}/`;
  }
  const repo = process.env.GITHUB_REPOSITORY;
  if (!repo) {
    return '/';
  }
  const name = repo.split('/')[1] ?? '';
  if (name.endsWith('.github.io')) {
    return '/';
  }
  return `/${name}/`;
}

export default defineConfig({
  base: pagesBase(),
  plugins: [react()],
});
