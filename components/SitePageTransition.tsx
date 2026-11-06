'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

export default function SitePageTransition({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={pathname}
        initial={
          prefersReducedMotion ? false : { opacity: 0, y: 8 }
        }
        animate={{ opacity: 1, y: 0 }}
        exit={
          prefersReducedMotion ? undefined : { opacity: 0, y: -8 }
        }
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
