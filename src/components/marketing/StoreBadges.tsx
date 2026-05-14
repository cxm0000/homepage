import { cn } from '../../lib/cn';
import { SECTION_IDS, hash } from '../../content/nav';
import { resolveAppStoreUrl, resolvePlayStoreUrl } from '../../content/site';

const base = import.meta.env.BASE_URL;
const APP_STORE_BADGE = `${base}badges/download-on-the-app-store.svg`;
const GOOGLE_PLAY_BADGE = `${base}badges/google-play-badge.png`;

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ow-primary focus-visible:ring-offset-2 rounded-md';

type StoreBadgesProps = {
  className?: string;
  /** Hero row uses slightly larger badges; platform card uses compact. */
  variant?: 'hero' | 'compact';
};

export function StoreBadges({ className, variant = 'hero' }: StoreBadgesProps) {
  const appStore = resolveAppStoreUrl();
  const playStore = resolvePlayStoreUrl();
  const useContactFallback = !appStore && !playStore;
  const contactHref = hash(SECTION_IDS.contact);

  const appleClass = variant === 'hero' ? 'h-10 w-auto sm:h-11' : 'h-9 w-auto sm:h-10';
  const playClass =
    variant === 'hero' ? 'h-[3.35rem] w-auto sm:h-[3.75rem]' : 'h-[2.85rem] w-auto sm:h-[3.1rem]';

  const appleImg = (
    <img
      src={APP_STORE_BADGE}
      alt="Download on the App Store"
      width={120}
      height={40}
      className={cn('w-auto', appleClass)}
      loading="lazy"
      decoding="async"
    />
  );

  const playImg = (
    <img
      src={GOOGLE_PLAY_BADGE}
      alt="Get it on Google Play"
      width={155}
      height={60}
      className={cn('w-auto', playClass)}
      loading="lazy"
      decoding="async"
    />
  );

  if (useContactFallback) {
    return (
      <a
        href={contactHref}
        className={cn(
          'inline-flex max-w-full flex-wrap items-center gap-3 rounded-lg transition hover:opacity-95',
          focusRing,
          className,
        )}
        aria-label="Contact us for App Store and Google Play download links"
      >
        {appleImg}
        {playImg}
      </a>
    );
  }

  return (
    <div className={cn('flex max-w-full flex-wrap items-center gap-3', className)}>
      {appStore ? (
        <a
          href={appStore}
          target="_blank"
          rel="noopener noreferrer"
          className={cn('inline-flex shrink-0 transition hover:opacity-90', focusRing)}
        >
          {appleImg}
        </a>
      ) : null}
      {playStore ? (
        <a
          href={playStore}
          target="_blank"
          rel="noopener noreferrer"
          className={cn('inline-flex shrink-0 transition hover:opacity-90', focusRing)}
        >
          {playImg}
        </a>
      ) : null}
    </div>
  );
}
