import React from 'react';
import { TICKER_ITEMS } from '../data/brand';

export function AnnouncementTicker() {
  const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="fo-marquee-wrapper bg-[var(--fo-charcoal)] text-[var(--fo-lime)] border-y border-[var(--fo-charcoal)] overflow-hidden py-3 select-none"
      aria-label="Kitchen announcements"
    >
      <div className="fo-marquee-track items-center gap-8">
        {repeated.map((text, index) => (
          <div
            key={`${text}-${index}`}
            className="flex items-center gap-8 shrink-0 whitespace-nowrap"
          >
            <span className="font-display text-sm sm:text-base font-bold tracking-wide uppercase">
              {text}
            </span>
            <span
              aria-hidden="true"
              className="w-2 h-2 rounded-full bg-[var(--fo-orange)] shrink-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
