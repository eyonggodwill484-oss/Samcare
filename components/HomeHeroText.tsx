'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

const words = ['Do', 'you', 'need', 'help?'];

export default function HomeHeroText() {
  const shouldReduceMotion = useReducedMotion();
  const duration = shouldReduceMotion ? 0 : 0.68;

  const contentVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.12,
        staggerChildren: shouldReduceMotion ? 0 : 0.16,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div
      className="max-w-[740px]"
      variants={contentVariants}
      initial={shouldReduceMotion ? false : 'hidden'}
      animate="visible"
    >
      <motion.h1
        aria-label="Do you need help?"
        className="font-serif text-[clamp(3rem,7vw,5.75rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: shouldReduceMotion ? 0 : 0.055,
            },
          },
        }}
      >
        {words.map((word, index) => (
          <span key={word}>
            {index > 0 ? ' ' : null}
            <motion.span
              aria-hidden="true"
              className="inline-block"
              variants={wordVariants}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h1>
      <motion.p
        className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#62ddc9] sm:mt-5 sm:text-4xl"
        variants={itemVariants}
      >
        The nurse is near you.
      </motion.p>
      <motion.p
        className="mt-5 max-w-[570px] text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg"
        variants={itemVariants}
      >
        Unhurried home care and nursing, shaped around your needs and delivered
        with warmth, respect and professionalism.
      </motion.p>
      <motion.div variants={itemVariants}>
        <Button
          href="/ajanvaraus"
          size="lg"
          lensEffect
          className="mt-8 rounded-md uppercase tracking-[0.08em] shadow-[0_8px_24px_rgba(0,0,0,0.2)] sm:mt-9 sm:px-9"
        >
          Order a free survey
          <ArrowRight aria-hidden="true" className="ml-3 size-5" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
