import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

export interface BagEntry {
  id: string;
  name: string;
  pricePkr: number;
  image: string;
  category: string;
  quantity: number;
}

interface BagContextValue {
  items: BagEntry[];
  isOpen: boolean;
  totalCount: number;
  subtotalPkr: number;
  lastAddedId: string | null;
  openBag: () => void;
  closeBag: () => void;
  addItem: (item: Omit<BagEntry, 'quantity'>) => void;
  updateQty: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clearBag: () => void;
}

const BagContext = createContext<BagContextValue | undefined>(undefined);

export function BagProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<BagEntry[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [lastAddedId, setLastAddedId] = useState<string | null>(null);

  const openBag = useCallback(() => setIsOpen(true), []);
  const closeBag = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((entry: Omit<BagEntry, 'quantity'>) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === entry.id);
      if (existing) {
        return prev.map((i) =>
          i.id === entry.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...entry, quantity: 1 }];
    });
    setLastAddedId(entry.id);
    window.setTimeout(() => {
      setLastAddedId((current) => (current === entry.id ? null : current));
    }, 1100);
  }, []);

  const updateQty = useCallback((id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clearBag = useCallback(() => {
    setItems([]);
  }, []);

  const totalCount = useMemo(
    () => items.reduce((acc, item) => acc + item.quantity, 0),
    [items]
  );

  const subtotalPkr = useMemo(
    () => items.reduce((acc, item) => acc + item.pricePkr * item.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      isOpen,
      totalCount,
      subtotalPkr,
      lastAddedId,
      openBag,
      closeBag,
      addItem,
      updateQty,
      removeItem,
      clearBag,
    }),
    [
      items,
      isOpen,
      totalCount,
      subtotalPkr,
      lastAddedId,
      openBag,
      closeBag,
      addItem,
      updateQty,
      removeItem,
      clearBag,
    ]
  );

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
}

export function useBag() {
  const ctx = useContext(BagContext);
  if (!ctx) {
    throw new Error('useBag must be used inside BagProvider');
  }
  return ctx;
}
