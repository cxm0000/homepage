import { cn } from '../../lib/cn';
import { SECTION_IDS, hash } from '../../content/nav';
import { resolveAppStoreUrl, resolvePlayStoreUrl } from '../../content/site';

const base = import.meta.env.BASE_URL;
const APP_STORE_BADGE = `${base}badges/download-on-the-app-store.svg`;
/** English “Get it on Google Play” vector (viewBox 239×70.9); matches Apple badge as SVG for consistent scaling. */
const GOOGLE_PLAY_BADGE = `${base}badges/google-play-badge.svg`;

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2 rounded-md';

/** Equal-width columns: one row, no wrap (flex-wrap was stacking badges in narrow cards). */
const badgeRowClass = 'grid w-full grid-cols-2 gap-x-3 items-center';

const badgeSlotHeight = {
  hero: 'h-10 sm:h-11',
  compact: 'h-9 sm:h-10',
} as const;

type StoreBadgesProps = {
  className?: string;
  variant?: 'hero' | 'compact';
};

type BadgeImgProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

function BadgeImage({ src, alt, width, height }: BadgeImgProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="h-full w-full min-h-0 min-w-0 object-contain object-center"
      loading="lazy"
      decoding="async"
    />
  );
}

export function StoreBadges({ className, variant = 'hero' }: StoreBadgesProps) {
  const appStore = resolveAppStoreUrl();
  const playStore = resolvePlayStoreUrl();
  const useContactFallback = !appStore && !playStore;
  const contactHref = hash(SECTION_IDS.contact);

  const h = badgeSlotHeight[variant];

  const slotClass = cn(
    'flex w-full min-w-0 items-center justify-center overflow-hidden',
    h,
  );

  const apple = (
    <BadgeImage src={APP_STORE_BADGE} alt="Download on the App Store" width={120} height={40} />
  );

  const play = (
    <BadgeImage src={GOOGLE_PLAY_BADGE} alt="Get it on Google Play" width={239} height={71} />
  );

  if (useContactFallback) {
    return (
      <a
        href={contactHref}
        className={cn(
          badgeRowClass,
          'rounded-lg transition hover:opacity-95',
          focusRing,
          className,
        )}
        aria-label="Contact us for App Store and Google Play download links"
      >
        <span className={slotClass}>{apple}</span>
        <span className={slotClass}>{play}</span>
      </a>
    );
  }

  return (
    <div className={cn(badgeRowClass, className)}>
      {appStore ? (
        <a
          href={appStore}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(slotClass, 'transition hover:opacity-90', focusRing)}
        >
          {apple}
        </a>
      ) : null}
      {playStore ? (
        <a
          href={playStore}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(slotClass, 'transition hover:opacity-90', focusRing)}
        >
          {play}
        </a>
      ) : null}
    </div>
  );
}
