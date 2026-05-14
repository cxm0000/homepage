const HERO_DASHBOARD_SRC = `${import.meta.env.BASE_URL}hero/optionwise-analytics-dashboard.png`;

/** Real product screenshot for the hero (see `public/hero/`). */
export function HeroDashboardImage() {
  return (
    <figure className="m-0 overflow-hidden rounded-3xl border border-ow-border bg-ow-surface shadow-card">
      <img
        src={HERO_DASHBOARD_SRC}
        alt="OptionWise Analytics Dashboard showing employee stock option program performance: participation rate, vesting progress, compliance score, and program summaries."
        className="block h-auto w-full"
        width={1024}
        height={835}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </figure>
  );
}
