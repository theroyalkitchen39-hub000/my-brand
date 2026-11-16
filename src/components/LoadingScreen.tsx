import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { BrandLogo } from './BrandLogo';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const shouldReduceMotion = useReducedMotion();
  const [visible, setVisible] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('fo_intro_seen') !== '1';
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!visible) {
      onComplete?.();
      return;
    }

    const duration = shouldReduceMotion ? 120 : 820;
    const timer = window.setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem('fo_intro_seen', '1');
      } catch {
        // Ignore storage restriction
      }
      onComplete?.();
    }, duration);

    return () => window.clearTimeout(timer);
  }, [visible, shouldReduceMotion, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-label="Loading FOOD O'CLOCK"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -16 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--fo-charcoal)] text-[var(--fo-cream)] px-6"
        >
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-5 text-center"
          >
            <motion.div
              animate={shouldReduceMotion ? undefined : { rotate: [0, 12, 0] }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <BrandLogo variant="on-dark" />
            </motion.div>
            <p className="font-mono-tabular text-xs tracking-widest uppercase text-[var(--fo-lime)]">
              IT’S ALWAYS FOOD O’CLOCK.
            </p>
            <div className="w-40 h-1 bg-white/15 overflow-hidden rounded-full">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: shouldReduceMotion ? 0.05 : 0.7, ease: 'easeOut' }}
                className="h-full bg-[var(--fo-orange)]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
