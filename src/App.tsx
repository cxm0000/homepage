import { SeoHead } from './components/SeoHead';
import { SeoJsonLd } from './components/SeoJsonLd';
import { SiteFooter } from './components/layout/SiteFooter';
import { SiteHeader } from './components/layout/SiteHeader';
import { ChallengeSection } from './components/sections/ChallengeSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';
import { HeroSection } from './components/sections/HeroSection';
import { PlatformSection } from './components/sections/PlatformSection';
import { TrustPositioningSection } from './components/sections/TrustPositioningSection';

export function App() {
  return (
    <>
      <SeoHead />
      <SeoJsonLd />
      <div className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ow-surface focus:px-4 focus:py-2 focus:text-ow-text focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ow-primary focus:ring-offset-2"
        >
          Skip to main content
        </a>

        <SiteHeader />

        <main id="main" className="flex-1">
          <HeroSection />
          <TrustPositioningSection />
          <ChallengeSection />
          <PlatformSection />
          <FinalCtaSection />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
