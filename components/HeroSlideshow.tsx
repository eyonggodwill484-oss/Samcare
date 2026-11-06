'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import LensEffect from '@/components/LensEffect';

const slides = [
  '/Images/Hero.jpg',
  '/Images/Hero%20image.png',
  '/Images/Hero%202.png',
];

export default function HeroSlideshow() {
  const [activeSlide, setActiveSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion !== false) return;

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [shouldReduceMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <LensEffect
        decorative
        lensSize={220}
        zoomFactor={1.35}
        className="relative z-0 h-full w-full overflow-hidden rounded-none"
      >
        {slides.map((src, index) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            animate={{
              opacity: index === activeSlide ? 1 : 0,
              scale:
                shouldReduceMotion || index !== activeSlide ? 1 : 1.045,
            }}
            transition={{
              opacity: {
                duration: shouldReduceMotion ? 0 : 1.2,
                ease: 'easeInOut',
              },
              scale: {
                duration: shouldReduceMotion ? 0 : 6,
                ease: 'linear',
              },
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              preload={index === 0}
              loading={index === 0 ? undefined : 'eager'}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        ))}
      </LensEffect>
    </div>
  );
}
