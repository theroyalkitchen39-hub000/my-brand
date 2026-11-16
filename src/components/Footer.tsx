import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brand';
import { NAV_ROUTES, PageKey } from '../utils/navigation';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (page: PageKey) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, page: PageKey) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--fo-charcoal)] text-[var(--fo-cream)] border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo variant="on-dark" />
            <p className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--fo-cream)] max-w-sm">
              {BRAND_CONFIG.tagline}
            </p>
            <p className="text-sm text-[var(--fo-cream)]/75 max-w-md leading-relaxed">
              {BRAND_CONFIG.concept} Fresh-smashed beef, 48-hour sourdough pies, and loaded fries crafted for campus breaks and late-night crews.
            </p>
          </div>

          {/* Pages Column */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-mono-tabular text-xs font-bold uppercase tracking-wider text-[var(--fo-lime)]">
              Explore Pages
            </h3>
            <ul className="space-y-2.5">
              {NAV_ROUTES.map((route) => (
                <li key={route.key}>
                  <a
                    href={route.href}
                    onClick={(e) => handleLink(e, route.key)}
                    className="text-sm font-medium text-[var(--fo-cream)]/85 hover:text-[var(--fo-orange)] transition-colors"
                  >
                    {route.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kitchen Info & Socials */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-mono-tabular text-xs font-bold uppercase tracking-wider text-[var(--fo-lime)]">
              Kitchen Hours & Socials
            </h3>
            <div className="space-y-2 text-sm text-[var(--fo-cream)]/80">
              <p>{BRAND_CONFIG.flagshipAddress}</p>
              <p>{BRAND_CONFIG.hours}</p>
              <p className="font-mono-tabular text-[var(--fo-cream)]">{BRAND_CONFIG.phone}</p>
              <p>{BRAND_CONFIG.email}</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              {BRAND_CONFIG.socials.map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--fo-cream)] hover:text-[var(--fo-lime)] transition-colors"
                >
                  <span>{soc.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[var(--fo-cream)]/65">
          <p>
            © {new Date().getFullYear()} {BRAND_CONFIG.name}. All rights reserved.
          </p>
          <p className="font-mono-tabular">
            {BRAND_CONFIG.city} · Est. {BRAND_CONFIG.established}
          </p>
        </div>
      </div>
    </footer>
  );
}
