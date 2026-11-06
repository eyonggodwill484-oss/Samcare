'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  animateOnLoad?: boolean;
  direction?: 'up' | 'left' | 'right';
};

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  animateOnLoad = false,
  direction = 'up',
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const elementRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const offset = {
    up: { x: 0, y: 24 },
    left: { x: -24, y: 0 },
    right: { x: 24, y: 0 },
  }[direction];
  const visible = { opacity: 1, x: 0, y: 0 };
  const hidden = { opacity: 0, ...offset };

  useEffect(() => {
    if (prefersReducedMotion) return;

    const element = elementRef.current;
    if (!element) return;

    let revealFrame: number | undefined;

    const show = () => {
      if (revealFrame !== undefined) return;

      revealFrame = window.requestAnimationFrame(() => {
        revealFrame = undefined;
        setIsVisible(true);
        window.removeEventListener('scroll', checkVisibility);
        window.removeEventListener('resize', checkVisibility);
      });
    };

    const checkVisibility = () => {
      const { top, bottom } = element.getBoundingClientRect();

      if (top < window.innerHeight * 0.9 && bottom > 0) {
        window.requestAnimationFrame(show);
      }
    };

    setIsReady(true);

    if (animateOnLoad) {
      window.requestAnimationFrame(show);
    } else {
      window.addEventListener('scroll', checkVisibility, { passive: true });
      window.addEventListener('resize', checkVisibility);
      checkVisibility();
    }

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
      if (revealFrame !== undefined) {
        window.cancelAnimationFrame(revealFrame);
      }
    };
  }, [animateOnLoad, prefersReducedMotion]);

  return (
    <motion.div
      className={className}
      data-motion-reveal
      ref={elementRef}
      initial={false}
      animate={
        isReady && !prefersReducedMotion
          ? isVisible
            ? visible
            : hidden
          : undefined
      }
      transition={{
        duration: isVisible ? 0.7 : 0,
        delay: isVisible ? delay / 1000 : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
