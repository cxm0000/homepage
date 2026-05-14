const features = [
  {
    title: 'Programs & grants',
    body: 'Structure offerings, track allocations, and keep a clear record of what each participant holds.',
  },
  {
    title: 'Employee experience',
    body: 'Give people a straightforward path to understand their equity—from interest to signatures.',
  },
  {
    title: 'Governance-ready',
    body: 'Built for multi-tenant B2B: strong boundaries between companies and audit-friendly workflows.',
  },
] as const;

function resolveAppUrl(): string | undefined {
  const raw = import.meta.env.VITE_B2B_APP_URL?.trim();
  return raw || undefined;
}

export function App() {
  const appUrl = resolveAppUrl();

  return (
    <div className="min-h-dvh flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent-500"
      >
        Skip to main content
      </a>

      <header className="border-b border-brand-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="/" className="text-lg font-semibold tracking-tight text-brand-900">
            OptionWise
          </a>
          <nav aria-label="Primary" className="flex items-center gap-6 text-sm font-medium text-brand-600">
            <a href="#features" className="hover:text-brand-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 rounded">
              Features
            </a>
            <a href="#how" className="hover:text-brand-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 rounded">
              How it works
            </a>
            {appUrl ? (
              <a
                href={appUrl}
                className="rounded-lg bg-brand-900 px-4 py-2 text-white shadow-sm hover:bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
              >
                Sign in
              </a>
            ) : (
              <a
                href="#get-started"
                className="rounded-lg bg-brand-900 px-4 py-2 text-white shadow-sm hover:bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
              >
                Get started
              </a>
            )}
          </nav>
        </div>
      </header>

      <main id="main" className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-brand-900 text-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden
            style={{
              backgroundImage:
                'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(168, 85, 247, 0.35), transparent)',
            }}
          />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
            <p className="text-sm font-medium uppercase tracking-widest text-brand-300">B2B equity platform</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Employee equity your team can actually follow.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-200">
              OptionWise helps HR and finance run stock option and similar programs with a clear story for
              employees—without sacrificing control or compliance.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {appUrl ? (
                <a
                  href={appUrl}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-brand-900 shadow-lg transition hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
                >
                  Open the app
                </a>
              ) : (
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-brand-900 shadow-lg transition hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
                >
                  Talk to us
                </a>
              )}
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
              >
                Explore capabilities
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="border-b border-brand-100 bg-brand-50/50 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">What teams use OptionWise for</h2>
            <p className="mt-4 max-w-2xl text-lg text-brand-600">
              One place to coordinate programs, participants, and the paperwork that makes grants real.
            </p>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <li
                  key={f.title}
                  className="rounded-2xl border border-brand-200/80 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-brand-900">{f.title}</h3>
                  <p className="mt-2 text-brand-600 leading-relaxed">{f.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="how" className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">How it fits together</h2>
            <ol className="mt-12 grid gap-8 sm:grid-cols-3">
              {[
                { step: '1', title: 'Design the program', body: 'Define terms, pools, and what employees should see.' },
                { step: '2', title: 'Invite & engage', body: 'Participants get a guided path tailored to their role and company.' },
                { step: '3', title: 'Operate with confidence', body: 'Stay on top of status, documents, and downstream workflows.' },
              ].map((item) => (
                <li key={item.step}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/15 text-sm font-bold text-accent-600">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-brand-900">{item.title}</h3>
                  <p className="mt-2 text-brand-600 leading-relaxed">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="get-started" className="border-t border-brand-200 bg-brand-900 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Ready when you are</h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-200">
              Deploy this site next to your B2B app and set <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm">VITE_B2B_APP_URL</code> so
              primary buttons deep-link to your environment.
            </p>
            {appUrl ? (
              <a
                href={appUrl}
                className="mt-8 inline-flex rounded-xl bg-white px-8 py-3 text-base font-semibold text-brand-900 shadow-lg hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
              >
                Go to OptionWise
              </a>
            ) : (
              <p className="mt-8 text-sm text-brand-300">
                Configure <code className="rounded bg-white/10 px-1.5 py-0.5">VITE_B2B_APP_URL</code> in <code className="rounded bg-white/10 px-1.5 py-0.5">.env</code> for a live sign-in link.
              </p>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-brand-500 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} OptionWise</p>
          <p className="text-center sm:text-right">Equity operations for modern companies.</p>
        </div>
      </footer>
    </div>
  );
}
