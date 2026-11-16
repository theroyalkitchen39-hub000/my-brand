import React, { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { NAV_ROUTES, PageKey } from '../utils/navigation';
import { BrandLogo } from './BrandLogo';
import { useBag } from '../context/BagContext';

interface NavbarProps {
  currentPage: PageKey;
  onNavigate: (page: PageKey) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const { totalCount, openBag } = useBag();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: PageKey
  ) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-40 h-16 bg-[var(--fo-cream)]/95 backdrop-blur-md border-b border-[var(--fo-charcoal)]/15">
      <div className="max-w-[1280px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="/index.html"
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="FOOD O'CLOCK Home"
          className="inline-flex items-center whitespace-nowrap shrink-0 focus-visible:rounded-md"
        >
          <BrandLogo variant="on-cream" />
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7"
        >
          {NAV_ROUTES.map((route) => {
            const isActive = currentPage === route.key;
            return (
              <a
                key={route.key}
                href={route.href}
                onClick={(e) => handleNavClick(e, route.key)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  isActive
                    ? 'text-[var(--fo-orange)]'
                    : 'text-[var(--fo-charcoal)] hover:text-[var(--fo-orange)]'
                }`}
              >
                {route.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[var(--fo-orange)]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={openBag}
            aria-label={`Open demo order bag, ${totalCount} items`}
            className="inline-flex items-center gap-2 px-4 py-2 min-h-[40px] rounded-lg bg-[var(--fo-charcoal)] text-[var(--fo-cream)] hover:bg-[var(--fo-orange)] hover:text-[var(--fo-charcoal)] font-semibold text-sm transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Bag</span>
            <span className="font-mono-tabular inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded bg-[var(--fo-lime)] text-[var(--fo-charcoal)] text-xs font-bold">
              {totalCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[var(--fo-charcoal)]/20 text-[var(--fo-charcoal)] hover:bg-[var(--fo-charcoal)]/5 transition-colors cursor-pointer"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden bg-[var(--fo-cream)] border-b border-[var(--fo-charcoal)]/20 px-4 py-4 shadow-lg"
        >
          <div className="flex flex-col gap-1">
            {NAV_ROUTES.map((route) => {
              const isActive = currentPage === route.key;
              return (
                <a
                  key={route.key}
                  href={route.href}
                  onClick={(e) => handleNavClick(e, route.key)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between px-3 py-3 min-h-[44px] rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-[var(--fo-charcoal)] text-[var(--fo-lime)]'
                      : 'text-[var(--fo-charcoal)] hover:bg-[var(--fo-charcoal)]/5'
                  }`}
                >
                  <span>{route.label}</span>
                  {isActive && (
                    <span className="text-xs font-mono-tabular uppercase">Active</span>
                  )}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
