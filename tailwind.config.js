/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ow: {
          bg: 'var(--ow-bg)',
          'bg-soft': 'var(--ow-bg-soft)',
          surface: 'var(--ow-surface)',
          'surface-muted': 'var(--ow-surface-muted)',
          primary: 'var(--ow-primary)',
          'primary-dark': 'var(--ow-primary-dark)',
          'primary-soft': 'var(--ow-primary-soft)',
          text: 'var(--ow-text)',
          'text-muted': 'var(--ow-text-muted)',
          'text-soft': 'var(--ow-text-soft)',
          border: 'var(--ow-border)',
          'border-strong': 'var(--ow-border-strong)',
          positive: 'var(--ow-positive)',
          warning: 'var(--ow-warning)',
          danger: 'var(--ow-danger)',
        },
      },
      maxWidth: {
        content: '1240px',
      },
      boxShadow: {
        card: '0 24px 60px rgba(37, 28, 89, 0.08)',
      },
      // docs/design_elements.md — Inter + system UI fallbacks (web / iOS / Android parity)
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
