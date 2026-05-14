import { cn } from '../../lib/cn';

/** Centers mockups vertically inside the fixed-height platform card preview strip. */
const platformPreviewSlotClass =
  'flex h-full min-h-0 w-full max-w-md flex-col justify-center';

const mockCardClass =
  'overflow-hidden rounded-2xl border border-ow-border bg-ow-surface-muted/50';

const MOBILE_APP_SRC = `${import.meta.env.BASE_URL}hero/optionwise-mobile-app.png`;

const ADVISOR_TREND_BAR_HEIGHTS = [32, 48, 36, 56, 40, 64, 52] as const;

const phoneTiltClass =
  'md:motion-safe:transition-[transform,box-shadow] md:motion-safe:duration-300 md:motion-safe:ease-out md:motion-safe:hover:[transform:perspective(1200px)_rotateY(0deg)] md:motion-safe:[transform:perspective(1200px)_rotateY(-6deg)]';

export function CompanyPlatformPreview() {
  return (
    <div className={platformPreviewSlotClass} aria-hidden>
      <div className={mockCardClass}>
        <div className="border-b border-ow-border bg-ow-surface px-3 py-2 text-xs font-semibold text-ow-text">
          Programs
        </div>
        <div className="p-3">
          <table className="w-full text-left text-[11px]">
            <thead>
              <tr className="text-ow-text-soft">
                <th className="pb-2 font-medium">Program</th>
                <th className="pb-2 font-medium">Status</th>
                <th className="pb-2 font-medium text-right">Participants</th>
              </tr>
            </thead>
            <tbody className="text-ow-text-muted">
              <tr className="border-t border-ow-border">
                <td className="py-2 font-medium text-ow-text">Option Plan 2024</td>
                <td className="py-2">
                  <span className="rounded-full bg-ow-positive/15 px-2 py-0.5 text-[10px] font-semibold text-ow-positive">
                    Active
                  </span>
                </td>
                <td className="py-2 text-right">142</td>
              </tr>
              <tr className="border-t border-ow-border">
                <td className="py-2 font-medium text-ow-text">Warrant Plan 2023</td>
                <td className="py-2">
                  <span className="rounded-full bg-ow-warning/15 px-2 py-0.5 text-[10px] font-semibold text-ow-warning">
                    Upcoming
                  </span>
                </td>
                <td className="py-2 text-right">38</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/**
 * Employee app marketing screenshot (`public/hero/optionwise-mobile-app.png`).
 * Do not replace that file unless design/product ships an explicit update.
 */
export function EmployeeAppPreview() {
  return (
    <figure className="m-0 flex h-full min-h-0 w-full items-center justify-center px-0.5">
      <div
        className={cn(
          'mx-auto flex h-full min-h-0 w-full max-w-[148px] items-center justify-center',
          phoneTiltClass,
        )}
      >
        <div
          className={cn(
            'relative w-full max-h-full min-h-0 rounded-[1.35rem] bg-gradient-to-b from-slate-200 via-slate-50 to-slate-200 p-[2px]',
            'shadow-[0_16px_32px_-10px_rgba(15,23,42,0.38),0_8px_16px_-6px_rgba(15,23,42,0.2)] ring-1 ring-slate-900/10',
          )}
        >
          {/* Decorative side control (volume) */}
          <span
            className="pointer-events-none absolute -left-px top-[20%] hidden h-6 w-0.5 rounded-l-sm bg-gradient-to-b from-slate-300 to-slate-500 shadow-sm md:block"
            aria-hidden
          />
          <div className="max-h-full min-h-0 overflow-hidden rounded-[1.12rem] bg-slate-950 shadow-[inset_0_1px_5px_rgba(0,0,0,0.45)]">
            <img
              src={MOBILE_APP_SRC}
              alt="OptionWise mobile app in a phone frame: My Options with warrants, SEK premium and exercise price, potential value, vesting, and bottom navigation."
              width={470}
              height={1024}
              className="block h-auto max-h-full w-full object-contain object-top"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </figure>
  );
}

export function AdvisorPlatformPreview() {
  return (
    <div className={platformPreviewSlotClass} aria-hidden>
      <div className={cn(mockCardClass, 'p-3')}>
        <p className="text-xs font-semibold text-ow-text">Client overview</p>
        <div className="mt-3 flex gap-3">
          <div className="flex flex-1 flex-col justify-end rounded-xl bg-ow-surface p-2">
            <div className="flex h-20 items-end justify-stretch gap-1">
              {ADVISOR_TREND_BAR_HEIGHTS.map((h, i) => (
                <div
                  key={i}
                  className="min-w-[6px] flex-1 rounded-t bg-ow-primary/80"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            <p className="mt-2 text-[10px] font-medium text-ow-text-soft">Participation trend</p>
          </div>
          <div className="flex w-24 flex-col items-center justify-center rounded-xl border border-ow-border bg-ow-surface p-2">
            <div
              className="h-14 w-14 shrink-0 rounded-full border-[5px] border-ow-primary-soft border-t-ow-primary border-r-ow-primary/60"
              aria-hidden
            />
            <p className="mt-2 text-center text-[10px] font-semibold text-ow-text">Reports</p>
            <p className="text-[9px] text-ow-text-soft">Q2 ready</p>
          </div>
        </div>
      </div>
    </div>
  );
}
