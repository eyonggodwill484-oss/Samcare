"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type AnimatedStatProps = {
  value: number;
  start?: number;
  suffix?: string;
  className?: string;
};

export default function AnimatedStat({
  value,
  start = 0,
  suffix = "",
  className = "",
}: AnimatedStatProps) {
  const valueRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const element = valueRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const counter = { value: start };
    element.textContent = `${start}${suffix}`;

    const context = gsap.context(() => {
      gsap.to(counter, {
        value,
        duration: 1.6,
        ease: "power2.out",
        snap: { value: 1 },
        onUpdate: () => {
          element.textContent = `${counter.value}${suffix}`;
        },
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          once: true,
        },
      });
    }, element);

    return () => context.revert();
  }, [start, suffix, value]);

  return (
    <span ref={valueRef} className={className}>
      {value}
      {suffix}
    </span>
  );
}
