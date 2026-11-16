import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { BRAND_CONFIG } from '../data/brand';
import { MENU_ITEMS, PROMO_BANNERS, SPECIAL_DEALS } from '../data/menu';
import { PageKey } from '../utils/navigation';
import { AnnouncementTicker } from '../components/AnnouncementTicker';
import { CravingClock } from '../components/CravingClock';
import { ProductCard } from '../components/ProductCard';
import { DealCard } from '../components/DealCard';
import { SafeImage } from '../components/SafeImage';

interface HomePageProps {
  onNavigate: (page: PageKey, initialCategory?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const shouldReduceMotion = useReducedMotion();
  const featuredItems = MENU_ITEMS.filter((item) => item.featured).slice(0, 6);
  const heroBanner = PROMO_BANNERS[0];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Hero Typography Column */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between gap-8 py-2"
          >
            <div className="space-y-5">
              <p className="font-mono-tabular text-xs font-bold uppercase tracking-widest text-[var(--fo-orange)]">
                {BRAND_CONFIG.concept} · {BRAND_CONFIG.city}
              </p>

              <h1 className="font-display text-4xl sm:text-6xl xl:text-[4.25rem] font-extrabold tracking-tight leading-[0.98] text-[var(--fo-charcoal)] text-balance">
                IT’S ALWAYS FOOD O’CLOCK.
              </h1>

              <p className="text-base sm:text-lg text-[var(--fo-text-muted)] max-w-xl leading-relaxed">
                Lacy-edge smash beef, 48-hour blistered sourdough pizza, and loaded volcanic fries built for midday campus breaks and 2 AM hunger calls.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('menu')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl bg-[var(--fo-orange)] text-[var(--fo-charcoal)] font-bold text-sm sm:text-base hover:bg-[var(--fo-orange-hover)] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Explore Full Menu</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('gallery')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl border border-[var(--fo-charcoal)]/25 bg-white text-[var(--fo-charcoal)] font-semibold text-sm sm:text-base hover:border-[var(--fo-charcoal)] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Crave Gallery</span>
                </button>
              </div>

              {/* Clean unboxed proof row */}
              <div className="pt-5 border-t border-[var(--fo-charcoal)]/15 grid grid-cols-3 gap-4">
                <div>
                  <p className="font-mono-tabular text-lg sm:text-xl font-bold text-[var(--fo-charcoal)]">
                    450°F
                  </p>
                  <p className="text-xs text-[var(--fo-text-muted)]">Fresh Flat-Top Sear</p>
                </div>
                <div>
                  <p className="font-mono-tabular text-lg sm:text-xl font-bold text-[var(--fo-charcoal)]">
                    48 hrs
                  </p>
                  <p className="text-xs text-[var(--fo-text-muted)]">Cold Pizza Ferment</p>
                </div>
                <div>
                  <p className="font-mono-tabular text-lg sm:text-xl font-bold text-[var(--fo-charcoal)]">
                    3:00 AM
                  </p>
                  <p className="text-xs text-[var(--fo-text-muted)]">Thu–Sun Night Grill</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual Column */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative rounded-2xl overflow-hidden bg-[var(--fo-charcoal)] min-h-[320px] lg:min-h-[480px]"
          >
            <SafeImage
              src="/src/assets/images/hero_smash_burger_1794861035577.jpg"
              alt="Double O'Clock Smash beef burger with melted cheddar and house chili mayo"
              loading="eager"
              className="w-full h-full object-cover lg:absolute lg:inset-0"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4 text-[var(--fo-cream)]">
              <div>
                <p className="font-mono-tabular text-xs uppercase text-[var(--fo-lime)]">
                  Signature Drop
                </p>
                <p className="font-display text-xl sm:text-2xl font-bold">
                  Double O’Clock Smash
                </p>
              </div>
              <span className="font-mono-tabular text-base font-bold bg-[var(--fo-lime)] text-[var(--fo-charcoal)] px-3 py-1.5 rounded-lg shrink-0">
                PKR 1,350
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ANNOUNCEMENT TICKER */}
      <AnnouncementTicker />

      {/* 3. ANIMATED CRAVING CLOCK */}
      <CravingClock onNavigate={(page) => onNavigate(page)} />

      {/* 4. FEATURED FOOD PRODUCTS */}
      <section
        aria-labelledby="featured-menu-heading"
        className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <p className="font-mono-tabular text-xs font-bold uppercase tracking-wider text-[var(--fo-orange)]">
              Fresh Off The Grill
            </p>
            <h2
              id="featured-menu-heading"
              className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-balance"
            >
              Crowd Favorites Right Now
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--fo-charcoal)] hover:text-[var(--fo-orange)] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>See all {MENU_ITEMS.length} menu items</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 5. SPECIAL COMBOS & PROMO BANNER */}
      <section
        aria-labelledby="deals-spotlight-heading"
        className="bg-[var(--fo-surface-muted)] border-y border-[var(--fo-charcoal)]/12 py-16 sm:py-24"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Promo Banner */}
          <div className="rounded-2xl bg-[var(--fo-orange)] text-[var(--fo-charcoal)] p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <p className="font-mono-tabular text-xs font-bold uppercase tracking-wider">
                {heroBanner.kicker}
              </p>
              <h2
                id="deals-spotlight-heading"
                className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-balance"
              >
                {heroBanner.headline}
              </h2>
              <p className="text-sm sm:text-base font-medium opacity-90">
                {heroBanner.detail}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('menu', heroBanner.targetCategory)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[46px] rounded-xl bg-[var(--fo-charcoal)] text-[var(--fo-cream)] font-bold text-sm hover:bg-black transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{heroBanner.actionLabel}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* 3 Combo Deal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {SPECIAL_DEALS.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. BRAND STORY SECTION */}
      <section
        aria-labelledby="brand-story-heading"
        className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden bg-[var(--fo-charcoal)] aspect-[4/3]">
            <SafeImage
              src="/src/assets/images/gallery_late_night_hangout_1794861039792.jpg"
              alt="Friends sharing FOOD O'CLOCK burgers, fries, and pizza boxes late at night"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <p className="font-mono-tabular text-xs font-bold uppercase tracking-wider text-[var(--fo-orange)]">
              Our Story · Since {BRAND_CONFIG.established}
            </p>
            <h2
              id="brand-story-heading"
              className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-balance"
            >
              Born for late library nights, post-concert feeds, and real hunger.
            </h2>
            <p className="text-base text-[var(--fo-text-muted)] leading-relaxed">
              We started FOOD O’CLOCK with a single 450°F flat-top grill because good fast food shouldn’t clock out at 11 PM or taste like a freezer. Every patty is smashed fresh, every crust ferments for two days, and every booth stays loud.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-xl bg-[var(--fo-charcoal)] text-[var(--fo-cream)] font-bold text-sm hover:bg-[var(--fo-orange)] hover:text-[var(--fo-charcoal)] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Read Our Story</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-xl border border-[var(--fo-charcoal)]/25 text-[var(--fo-charcoal)] font-semibold text-sm hover:border-[var(--fo-charcoal)] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Locations & Hours</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
