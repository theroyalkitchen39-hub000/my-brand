import React from 'react';
import { Check, Plus } from 'lucide-react';
import { SpecialDeal, formatPkr } from '../data/menu';
import { useBag } from '../context/BagContext';
import { SafeImage } from './SafeImage';

interface DealCardProps {
  deal: SpecialDeal;
}

export function DealCard({ deal }: DealCardProps) {
  const { addItem, lastAddedId } = useBag();
  const isAdded = lastAddedId === deal.id;
  const savings = deal.originalPricePkr - deal.dealPricePkr;

  const handleAddDeal = () => {
    addItem({
      id: deal.id,
      name: deal.title,
      pricePkr: deal.dealPricePkr,
      image: deal.image,
      category: 'Combo Deal',
    });
  };

  return (
    <article className="flex flex-col bg-[var(--fo-charcoal)] text-[var(--fo-cream)] rounded-2xl overflow-hidden border border-[var(--fo-charcoal)]">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <SafeImage
          src={deal.image}
          alt={deal.imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between p-6 gap-5">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2 text-xs font-mono-tabular">
            <span className="text-[var(--fo-lime)] font-bold uppercase">
              {deal.scheduleSlot}
            </span>
            <span className="text-[var(--fo-orange)] font-bold">
              Save {formatPkr(savings)}
            </span>
          </div>

          <h3 className="font-display text-2xl font-bold tracking-tight">
            {deal.title}
          </h3>

          <p className="text-sm text-[var(--fo-cream)]/75 leading-relaxed">
            {deal.subtitle}
          </p>

          <ul className="pt-2 space-y-1.5 text-sm text-[var(--fo-cream)]/90 border-t border-white/15">
            {deal.includes.map((line) => (
              <li key={line} className="flex items-start gap-2">
                <span className="text-[var(--fo-lime)] font-bold" aria-hidden="true">
                  +
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-3">
          <div>
            <span className="block font-mono-tabular text-xs line-through text-[var(--fo-cream)]/50">
              {formatPkr(deal.originalPricePkr)}
            </span>
            <span className="font-mono-tabular text-xl font-bold text-[var(--fo-lime)]">
              {formatPkr(deal.dealPricePkr)}
            </span>
          </div>

          <button
            type="button"
            onClick={handleAddDeal}
            className={`inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[42px] rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              isAdded
                ? 'bg-[var(--fo-lime)] text-[var(--fo-charcoal)]'
                : 'bg-[var(--fo-orange)] text-[var(--fo-charcoal)] hover:bg-[var(--fo-orange-hover)]'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" aria-hidden="true" />
                <span>Added Deal</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" aria-hidden="true" />
                <span>Add Deal</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
