import React from 'react';
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { useBag } from '../context/BagContext';
import { formatPkr } from '../data/menu';
import { PageKey } from '../utils/navigation';
import { SafeImage } from './SafeImage';

interface BagDrawerProps {
  onNavigate: (page: PageKey) => void;
}

export function BagDrawer({ onNavigate }: BagDrawerProps) {
  const {
    items,
    isOpen,
    totalCount,
    subtotalPkr,
    closeBag,
    updateQty,
    removeItem,
    clearBag,
  } = useBag();

  if (!isOpen) return null;

  const handleBrowseMenu = () => {
    closeBag();
    onNavigate('menu');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Demo order bag"
    >
      {/* Backdrop */}
      <div
        onClick={closeBag}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative z-10 w-full max-w-md bg-[var(--fo-cream)] text-[var(--fo-charcoal)] h-full flex flex-col border-l border-[var(--fo-charcoal)]/20 shadow-2xl">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--fo-charcoal)]/15">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[var(--fo-orange)]" aria-hidden="true" />
            <h2 className="font-display text-xl font-bold tracking-tight">
              Your Crave Bag ({totalCount})
            </h2>
          </div>
          <button
            type="button"
            onClick={closeBag}
            aria-label="Close bag drawer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[var(--fo-charcoal)]/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Honest Demo Notice */}
        <div className="px-6 py-3 bg-[var(--fo-charcoal)] text-[var(--fo-cream)] text-xs leading-relaxed">
          <strong className="text-[var(--fo-lime)] font-semibold">Demo Bag Preview:</strong>{' '}
          Plan your meal and check PKR totals here. No payment, checkout, or database submission is enabled.
        </div>

        {/* Bag Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[var(--fo-charcoal)]/10 flex items-center justify-center">
                <ShoppingBag className="w-7 h-7 text-[var(--fo-charcoal)]/60" aria-hidden="true" />
              </div>
              <div className="space-y-1.5">
                <p className="font-display text-lg font-bold">Your bag is empty</p>
                <p className="text-sm text-[var(--fo-text-muted)] max-w-[28ch]">
                  Add smash burgers, loaded fries, or campus combos from the menu to preview your total.
                </p>
              </div>
              <button
                type="button"
                onClick={handleBrowseMenu}
                className="px-5 py-2.5 min-h-[42px] rounded-lg bg-[var(--fo-orange)] text-[var(--fo-charcoal)] font-bold text-sm hover:bg-[var(--fo-orange-hover)] transition-colors cursor-pointer"
              >
                Explore Menu
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 rounded-xl bg-white border border-[var(--fo-charcoal)]/12"
              >
                <SafeImage
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover shrink-0"
                />
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xs text-[var(--fo-text-muted)]">{item.category}</p>
                      <h3 className="font-display text-sm font-bold truncate">
                        {item.name}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.name} from bag`}
                      className="p-1.5 rounded-md text-[var(--fo-text-muted)] hover:text-[var(--fo-orange)] hover:bg-[var(--fo-charcoal)]/5 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="font-mono-tabular text-sm font-bold">
                      {formatPkr(item.pricePkr * item.quantity)}
                    </span>
                    <div className="inline-flex items-center gap-1 border border-[var(--fo-charcoal)]/15 rounded-lg p-0.5">
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, -1)}
                        aria-label={`Decrease quantity of ${item.name}`}
                        className="w-7 h-7 flex items-center justify-center rounded hover:bg-[var(--fo-charcoal)]/10 cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                      <span className="font-mono-tabular w-6 text-center text-xs font-bold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, 1)}
                        aria-label={`Increase quantity of ${item.name}`}
                        className="w-7 h-7 flex items-center justify-center rounded hover:bg-[var(--fo-charcoal)]/10 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Totals */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[var(--fo-charcoal)]/15 bg-white space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[var(--fo-text-muted)]">
                Estimated Subtotal
              </span>
              <span className="font-mono-tabular text-xl font-bold">
                {formatPkr(subtotalPkr)}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={clearBag}
                className="flex-1 py-2.5 px-4 min-h-[44px] rounded-lg border border-[var(--fo-charcoal)]/25 text-sm font-semibold hover:bg-[var(--fo-charcoal)]/5 transition-colors cursor-pointer"
              >
                Clear Bag
              </button>
              <button
                type="button"
                onClick={handleBrowseMenu}
                className="flex-1 py-2.5 px-4 min-h-[44px] rounded-lg bg-[var(--fo-orange)] text-[var(--fo-charcoal)] text-sm font-bold hover:bg-[var(--fo-orange-hover)] transition-colors cursor-pointer"
              >
                Add More Items
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
