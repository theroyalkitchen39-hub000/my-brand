import React from 'react';

/**
 * ============================================================================
 * REPLACEABLE BRAND LOGO COMPONENT
 * ============================================================================
 * To replace with a custom PNG/SVG logo file:
 * 1. Place your logo file in `/public/logo.svg` or `/src/assets/logo.png`.
 * 2. Swap the `<svg>` icon below with `<img src="/logo.svg" alt="FOOD O'CLOCK" ... />`.
 * ============================================================================
 */

interface BrandLogoProps {
  variant?: 'on-cream' | 'on-dark';
  showWordmark?: boolean;
  className?: string;
}

export function BrandLogo({
  variant = 'on-cream',
  showWordmark = true,
  className = '',
}: BrandLogoProps) {
  const isDarkBg = variant === 'on-dark';
  const textColor = isDarkBg ? 'text-[var(--fo-cream)]' : 'text-[var(--fo-charcoal)]';
  const dialStroke = isDarkBg ? '#FFF3E0' : '#202020';

  return (
    <span className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 ${className}`}>
      {/* Stylized FOOD O'CLOCK Dial Mark */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Outer clock badge */}
        <circle cx="20" cy="20" r="18" fill="#FF5A1F" stroke={dialStroke} strokeWidth="2.5" />
        {/* Inner clock ticks */}
        <circle cx="20" cy="6.5" r="1.4" fill="#202020" />
        <circle cx="33.5" cy="20" r="1.4" fill="#202020" />
        <circle cx="20" cy="33.5" r="1.4" fill="#202020" />
        <circle cx="6.5" cy="20" r="1.4" fill="#202020" />
        {/* Clock hands set at Craving O'Clock (10:10) */}
        <path
          d="M20 20L13.5 14.5M20 20L28.5 13"
          stroke="#202020"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Lime center pin */}
        <circle cx="20" cy="20" r="3" fill="#C6F235" stroke="#202020" strokeWidth="1.5" />
      </svg>

      {showWordmark && (
        <span
          className={`font-display text-lg sm:text-xl font-extrabold tracking-tight uppercase leading-none ${textColor}`}
        >
          FOOD O’CLOCK
        </span>
      )}
    </span>
  );
}
