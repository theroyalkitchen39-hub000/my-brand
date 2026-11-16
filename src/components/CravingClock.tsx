import React, { useEffect, useState } from 'react';
import { ArrowRight, Check, Clock } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { CRAVING_SLOTS } from '../data/brand';
import { MENU_ITEMS, formatPkr } from '../data/menu';
import { useBag } from '../context/BagContext';
import { PageKey } from '../utils/navigation';

interface CravingClockProps {
  onNavigate: (page: PageKey) => void;
}

export function CravingClock({ onNavigate }: CravingClockProps) {
  const shouldReduceMotion = useReducedMotion();
  const { addItem, lastAddedId } = useBag();
  const [activeIndex, setActiveIndex] = useState(2); // Default to Prime Dinner (08:30 PM)
  const [secondsAngle, setSecondsAngle] = useState(0);

  const activeSlot = CRAVING_SLOTS[activeIndex];
  const recommendedItem = MENU_ITEMS.find(
    (m) => m.id === activeSlot.recommendedItemId
  );

  // Smooth ticking second hand
  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = window.setInterval(() => {
      const now = new Date();
      setSecondsAngle(now.getSeconds() * 6);
    }, 1000);
    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  const handleAddRecommended = () => {
    if (!recommendedItem) return;
    addItem({
      id: recommendedItem.id,
      name: recommendedItem.name,
      pricePkr: recommendedItem.pricePkr,
      image: recommendedItem.image,
      category: recommendedItem.category,
    });
  };

  const isAdded = recommendedItem && lastAddedId === recommendedItem.id;

  return (
    <section
      aria-labelledby="craving-clock-heading"
      className="bg-[var(--fo-charcoal)] text-[var(--fo-cream)] py-16 sm:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Interactive Animated Analog Clock Dial */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              <svg
                viewBox="0 0 260 260"
                className="w-full h-full"
                role="img"
                aria-label={`Craving Clock showing ${activeSlot.hourLabel} — ${activeSlot.clockTime}`}
              >
                {/* Outer Ring */}
                <circle
                  cx="130"
                  cy="130"
                  r="122"
                  fill="#2A2A2A"
                  stroke="#FFF3E0"
                  strokeWidth="3"
                />
                {/* Accent Quarter Arc */}
                <circle
                  cx="130"
                  cy="130"
                  r="108"
                  fill="none"
                  stroke="rgba(255, 243, 224, 0.14)"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />

                {/* 12 Hour Markers */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x1 = 130 + Math.sin(angle) * 98;
                  const y1 = 130 - Math.cos(angle) * 98;
                  const x2 = 130 + Math.sin(angle) * 110;
                  const y2 = 130 - Math.cos(angle) * 110;
                  const isCardinal = i % 3 === 0;
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={isCardinal ? '#FF5A1F' : '#FFF3E0'}
                      strokeWidth={isCardinal ? 4 : 2}
                      strokeLinecap="round"
                    />
                  );
                })}

                {/* Dial Brand Stamp */}
                <text
                  x="130"
                  y="78"
                  textAnchor="middle"
                  fill="#C6F235"
                  fontSize="11"
                  fontWeight="700"
                  letterSpacing="2"
                  fontFamily="JetBrains Mono, monospace"
                >
                  FOOD O’CLOCK
                </text>
                <text
                  x="130"
                  y="194"
                  textAnchor="middle"
                  fill="#FFF3E0"
                  fontSize="12"
                  fontWeight="700"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {activeSlot.hourLabel}
                </text>

                {/* Hour Hand */}
                <motion.g
                  animate={{ rotate: activeSlot.hourAngle }}
                  transition={{
                    type: 'spring',
                    stiffness: 120,
                    damping: 16,
                  }}
                  style={{ originX: '130px', originY: '130px' }}
                >
                  <line
                    x1="130"
                    y1="130"
                    x2="130"
                    y2="76"
                    stroke="#FFF3E0"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </motion.g>

                {/* Minute Hand */}
                <motion.g
                  animate={{ rotate: activeSlot.minuteAngle }}
                  transition={{
                    type: 'spring',
                    stiffness: 110,
                    damping: 18,
                  }}
                  style={{ originX: '130px', originY: '130px' }}
                >
                  <line
                    x1="130"
                    y1="130"
                    x2="130"
                    y2="50"
                    stroke="#FF5A1F"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </motion.g>

                {/* Second Hand */}
                <g
                  transform={`rotate(${secondsAngle} 130 130)`}
                  style={{ transition: shouldReduceMotion ? 'none' : 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <line
                    x1="130"
                    y1="145"
                    x2="130"
                    y2="42"
                    stroke="#C6F235"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>

                {/* Center Cap */}
                <circle
                  cx="130"
                  cy="130"
                  r="8"
                  fill="#C6F235"
                  stroke="#202020"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>

          {/* Right: Craving Schedule Selector & Recommended Dish */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-tabular uppercase tracking-wider text-[var(--fo-lime)]">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span>Interactive Craving Clock</span>
              </div>
              <h2
                id="craving-clock-heading"
                className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-balance"
              >
                Your Cravings Have a Schedule.
              </h2>
              <p className="text-base text-[var(--fo-cream)]/75 max-w-xl leading-relaxed">
                Pick an hour on the dial to preview what our flat-top grill and sourdough oven are firing for that exact craving window.
              </p>
            </div>

            {/* 4 Interactive Time Buttons */}
            <div
              role="tablist"
              aria-label="Craving schedule time slots"
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {CRAVING_SLOTS.map((slot, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <button
                    key={slot.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveIndex(idx)}
                    className={`px-4 py-3 rounded-xl text-left transition-all duration-150 border cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--fo-orange)] text-[var(--fo-charcoal)] border-[var(--fo-orange)] font-bold'
                        : 'bg-[var(--fo-charcoal-elevated)] text-[var(--fo-cream)] border-white/15 hover:border-[var(--fo-lime)]'
                    }`}
                  >
                    <span className="block font-mono-tabular text-xs opacity-85">
                      {slot.hourLabel}
                    </span>
                    <span className="block font-display text-sm font-bold mt-0.5 truncate">
                      {slot.clockTime}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Slot Recommendation Card */}
            <div className="p-6 rounded-2xl bg-[var(--fo-charcoal-elevated)] border border-white/15 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-mono-tabular uppercase text-[var(--fo-lime)]">
                    {activeSlot.hourLabel} · {activeSlot.clockTime}
                  </p>
                  <h3 className="font-display text-2xl font-bold mt-1">
                    {activeSlot.moodTitle}
                  </h3>
                </div>
                <span className="font-mono-tabular text-lg font-bold text-[var(--fo-orange)] shrink-0">
                  {formatPkr(activeSlot.pricePkr)}
                </span>
              </div>

              <p className="text-sm text-[var(--fo-cream)]/80 leading-relaxed">
                {activeSlot.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleAddRecommended}
                  className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg bg-[var(--fo-lime)] text-[var(--fo-charcoal)] font-bold text-sm hover:bg-[var(--fo-lime-hover)] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" aria-hidden="true" />
                      <span>Added {activeSlot.recommendedName}</span>
                    </>
                  ) : (
                    <span>Add {activeSlot.recommendedName}</span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('menu')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg border border-white/25 text-[var(--fo-cream)] font-semibold text-sm hover:border-[var(--fo-orange)] hover:text-[var(--fo-orange)] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Full Menu</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
