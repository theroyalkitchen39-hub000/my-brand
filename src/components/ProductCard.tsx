import React from 'react';
import { Check, Plus } from 'lucide-react';
import { MenuItem, formatPkr } from '../data/menu';
import { useBag } from '../context/BagContext';
import { SafeImage } from './SafeImage';

interface ProductCardProps {
  item: MenuItem;
}

export function ProductCard({ item }: ProductCardProps) {
  const { addItem, lastAddedId } = useBag();
  const isJustAdded = lastAddedId === item.id;

  const handleAdd = () => {
    addItem({
      id: item.id,
      name: item.name,
      pricePkr: item.pricePkr,
      image: item.image,
      category: item.category,
    });
  };

  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-[var(--fo-charcoal)]/12 overflow-hidden transition-transform duration-200 hover:-translate-y-0.5">
      {/* 4:3 Uniform Food Photography */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-[var(--fo-surface-muted)]">
        <SafeImage
          src={item.image}
          alt={item.imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      {/* Card Body */}
      <div className="flex-1 flex flex-col justify-between p-5 gap-4">
        <div className="space-y-2">
          {/* Unboxed clean metadata line (zero pill spam) */}
          <div className="flex items-center gap-2 text-xs font-medium text-[var(--fo-text-muted)]">
            <span className="uppercase tracking-wider">{item.category}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono-tabular">{item.prepTime}</span>
            {item.note && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-[var(--fo-orange)] font-semibold">{item.note}</span>
              </>
            )}
          </div>

          <h3 className="font-display text-xl font-bold tracking-tight text-[var(--fo-charcoal)]">
            {item.name}
          </h3>

          <p className="text-sm text-[var(--fo-text-muted)] leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Bottom Price + Add to Bag Row */}
        <div className="pt-3 border-t border-[var(--fo-charcoal)]/10 flex items-center justify-between gap-3">
          <span className="font-mono-tabular text-base font-bold text-[var(--fo-charcoal)]">
            {formatPkr(item.pricePkr)}
          </span>

          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Add ${item.name} to demo bag`}
            className={`inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-lg text-xs font-bold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
              isJustAdded
                ? 'bg-[var(--fo-lime)] text-[var(--fo-charcoal)]'
                : 'bg-[var(--fo-charcoal)] text-[var(--fo-cream)] hover:bg-[var(--fo-orange)] hover:text-[var(--fo-charcoal)]'
            }`}
          >
            {isJustAdded ? (
              <>
                <Check className="w-4 h-4" aria-hidden="true" />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" aria-hidden="true" />
                <span>Add to Bag</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
