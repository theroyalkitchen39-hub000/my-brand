import React, { useEffect, useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  MenuCategory,
  PROMO_BANNERS,
  SPECIAL_DEALS,
} from '../data/menu';
import { ProductCard } from '../components/ProductCard';
import { DealCard } from '../components/DealCard';

interface MenuPageProps {
  initialCategory?: string;
}

export function MenuPage({ initialCategory }: MenuPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>(
    initialCategory && MENU_CATEGORIES.includes(initialCategory as MenuCategory)
      ? (initialCategory as MenuCategory)
      : 'All'
  );
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (initialCategory && MENU_CATEGORIES.includes(initialCategory as MenuCategory)) {
      setSelectedCategory(initialCategory as MenuCategory);
    }
  }, [initialCategory]);

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesQuery =
        q === '' ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, query]);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[var(--fo-charcoal)] text-[var(--fo-cream)] py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="font-mono-tabular text-xs font-bold uppercase tracking-widest text-[var(--fo-lime)]">
            All Prices in PKR · Fresh to Order
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-balance">
            The Craving Menu
          </h1>
          <p className="text-base text-[var(--fo-cream)]/75 max-w-2xl leading-relaxed">
            Filter by category, search your flavor, and build a demo bag to plan your order with friends.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-[var(--fo-charcoal)]/15">
          {/* Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Menu categories"
            className="flex flex-wrap items-center gap-2"
          >
            {MENU_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              const count =
                category === 'All'
                  ? MENU_ITEMS.length
                  : MENU_ITEMS.filter((i) => i.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-flex items-center gap-2 px-4 py-2 min-h-[42px] rounded-xl text-sm font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[var(--fo-orange)] text-[var(--fo-charcoal)]'
                      : 'bg-white text-[var(--fo-charcoal)] border border-[var(--fo-charcoal)]/15 hover:border-[var(--fo-charcoal)]'
                  }`}
                >
                  <span>{category}</span>
                  <span className="font-mono-tabular text-xs opacity-75">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search
              className="w-4 h-4 text-[var(--fo-text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search burgers, fries, honey..."
              aria-label="Search menu items"
              className="w-full pl-10 pr-9 py-2.5 min-h-[42px] rounded-xl bg-white border border-[var(--fo-charcoal)]/20 text-sm text-[var(--fo-charcoal)] placeholder:text-[var(--fo-text-muted)] focus:border-[var(--fo-orange)] focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search query"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-[var(--fo-charcoal)]/10 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center space-y-4">
            <p className="font-display text-2xl font-bold">
              No dishes matched “{query}”
            </p>
            <p className="text-sm text-[var(--fo-text-muted)]">
              Try clearing your search or switching back to All categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setQuery('');
              }}
              className="px-5 py-2.5 min-h-[42px] rounded-lg bg-[var(--fo-charcoal)] text-[var(--fo-cream)] font-bold text-sm cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>

      {/* Special Deals & Promotional Banners */}
      <section
        id="special-deals"
        aria-labelledby="special-deals-heading"
        className="bg-[var(--fo-surface-muted)] border-t border-[var(--fo-charcoal)]/15 py-16 sm:py-24"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-2">
            <p className="font-mono-tabular text-xs font-bold uppercase tracking-wider text-[var(--fo-orange)]">
              Combo Drops & Promos
            </p>
            <h2
              id="special-deals-heading"
              className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-balance"
            >
              Special Deals Built for Crews
            </h2>
          </div>

          {/* Combo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {SPECIAL_DEALS.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>

          {/* Promotional Banners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROMO_BANNERS.map((banner, idx) => (
              <div
                key={banner.id}
                className={`p-7 rounded-2xl flex flex-col justify-between gap-5 ${
                  idx === 0
                    ? 'bg-[var(--fo-lime)] text-[var(--fo-charcoal)]'
                    : 'bg-[var(--fo-charcoal)] text-[var(--fo-cream)]'
                }`}
              >
                <div className="space-y-2">
                  <p
                    className={`font-mono-tabular text-xs font-bold uppercase tracking-wider ${
                      idx === 0 ? 'text-[var(--fo-charcoal)]/80' : 'text-[var(--fo-orange)]'
                    }`}
                  >
                    {banner.kicker}
                  </p>
                  <h3 className="font-display text-2xl font-extrabold tracking-tight">
                    {banner.headline}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      idx === 0 ? 'text-[var(--fo-charcoal)]/85' : 'text-[var(--fo-cream)]/80'
                    }`}
                  >
                    {banner.detail}
                  </p>
                </div>

                {banner.targetCategory && (
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory(banner.targetCategory!);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`px-4 py-2.5 min-h-[40px] rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        idx === 0
                          ? 'bg-[var(--fo-charcoal)] text-[var(--fo-cream)] hover:bg-black'
                          : 'bg-[var(--fo-orange)] text-[var(--fo-charcoal)] hover:bg-[var(--fo-orange-hover)]'
                      }`}
                    >
                      {banner.actionLabel}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
