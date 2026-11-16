import React, { useState } from 'react';
import { ArrowRight, Maximize2, X } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { GALLERY_STORIES, GalleryStory } from '../data/brand';
import { PageKey } from '../utils/navigation';
import { SafeImage } from '../components/SafeImage';

interface GalleryPageProps {
  onNavigate: (page: PageKey, initialCategory?: string) => void;
}

export function GalleryPage({ onNavigate }: GalleryPageProps) {
  const shouldReduceMotion = useReducedMotion();
  const [lightboxStory, setLightboxStory] = useState<GalleryStory | null>(null);

  return (
    <div>
      {/* Editorial Header */}
      <section className="bg-[var(--fo-charcoal)] text-[var(--fo-cream)] py-14 sm:py-24 border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <p className="font-mono-tabular text-xs font-bold uppercase tracking-widest text-[var(--fo-lime)]">
            Visual Storytelling · Inside the Kitchen
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl text-balance">
            Crave Gallery: Fire, Crunch & Late-Night Hours
          </h1>
          <p className="text-base sm:text-lg text-[var(--fo-cream)]/75 max-w-2xl leading-relaxed">
            A visual log of how our patties blister on 450°F steel, why 48-hour sourdough matters, and the tables that stay full past midnight.
          </p>
        </div>
      </section>

      {/* Editorial Story Chapters */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">
        {GALLERY_STORIES.map((story) => {
          const isWide = story.layout === 'wide';
          const isRight = story.layout === 'split-right';

          return (
            <motion.article
              key={story.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {isWide ? (
                <div className="space-y-6">
                  <div className="relative rounded-2xl overflow-hidden bg-[var(--fo-charcoal)] aspect-[16/9]">
                    <SafeImage
                      src={story.image}
                      alt={story.imageAlt}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setLightboxStory(story)}
                      aria-label={`Inspect full view of ${story.title}`}
                      className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3.5 py-2 min-h-[40px] rounded-lg bg-[var(--fo-charcoal)]/90 text-[var(--fo-cream)] text-xs font-bold hover:bg-[var(--fo-orange)] hover:text-[var(--fo-charcoal)] transition-colors cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Expand Frame</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-5 space-y-2">
                      <p className="font-mono-tabular text-xs font-bold uppercase text-[var(--fo-orange)]">
                        {story.chapter}. {story.timeStamp}
                      </p>
                      <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
                        {story.title}
                      </h2>
                      <p className="font-semibold text-base text-[var(--fo-charcoal)]">
                        {story.caption}
                      </p>
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-base text-[var(--fo-text-muted)] leading-relaxed">
                        {story.storyText}
                      </p>
                      <button
                        type="button"
                        onClick={() => onNavigate('menu', story.linkedCategory)}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[var(--fo-charcoal)] hover:text-[var(--fo-orange)] transition-colors cursor-pointer"
                      >
                        <span>Order {story.linkedCategory} from Menu</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div
                    className={`lg:col-span-7 relative rounded-2xl overflow-hidden bg-[var(--fo-charcoal)] aspect-[4/3] ${
                      isRight ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <SafeImage
                      src={story.image}
                      alt={story.imageAlt}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setLightboxStory(story)}
                      aria-label={`Inspect full view of ${story.title}`}
                      className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3.5 py-2 min-h-[40px] rounded-lg bg-[var(--fo-charcoal)]/90 text-[var(--fo-cream)] text-xs font-bold hover:bg-[var(--fo-orange)] hover:text-[var(--fo-charcoal)] transition-colors cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Expand Frame</span>
                    </button>
                  </div>

                  <div
                    className={`lg:col-span-5 space-y-4 ${
                      isRight ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <p className="font-mono-tabular text-xs font-bold uppercase text-[var(--fo-orange)]">
                      {story.chapter}. {story.timeStamp}
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-balance">
                      {story.title}
                    </h2>
                    <p className="font-semibold text-base text-[var(--fo-charcoal)]">
                      {story.caption}
                    </p>
                    <p className="text-base text-[var(--fo-text-muted)] leading-relaxed">
                      {story.storyText}
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => onNavigate('menu', story.linkedCategory)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] rounded-xl bg-[var(--fo-charcoal)] text-[var(--fo-cream)] text-sm font-bold hover:bg-[var(--fo-orange)] hover:text-[var(--fo-charcoal)] transition-colors cursor-pointer"
                      >
                        <span>Explore {story.linkedCategory}</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.article>
          );
        })}
      </section>

      {/* Lightbox Modal */}
      {lightboxStory && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxStory.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
          onClick={() => setLightboxStory(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[var(--fo-charcoal)] text-[var(--fo-cream)] rounded-2xl overflow-hidden border border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxStory(null)}
              aria-label="Close photo preview"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-lg bg-black/75 text-white flex items-center justify-center hover:bg-[var(--fo-orange)] hover:text-[var(--fo-charcoal)] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
            <div className="aspect-[16/10] w-full bg-black">
              <SafeImage
                src={lightboxStory.image}
                alt={lightboxStory.imageAlt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-mono-tabular text-xs text-[var(--fo-lime)]">
                  {lightboxStory.chapter}. {lightboxStory.timeStamp}
                </p>
                <h3 className="font-display text-2xl font-bold mt-1">
                  {lightboxStory.title}
                </h3>
                <p className="text-sm text-[var(--fo-cream)]/75 mt-1">
                  {lightboxStory.caption}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const cat = lightboxStory.linkedCategory;
                  setLightboxStory(null);
                  onNavigate('menu', cat);
                }}
                className="px-4 py-2.5 min-h-[42px] rounded-lg bg-[var(--fo-orange)] text-[var(--fo-charcoal)] text-xs font-bold whitespace-nowrap shrink-0 cursor-pointer"
              >
                View {lightboxStory.linkedCategory}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
