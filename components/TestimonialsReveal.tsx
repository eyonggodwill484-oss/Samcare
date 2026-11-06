"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type TestimonialsRevealProps = {
  children: ReactNode;
  className?: string;
};

export default function TestimonialsReveal({
  children,
  className = "",
}: TestimonialsRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("[data-testimonial-card]"),
    );
    if (cards.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      cards.forEach((card) => {
        const parts = card.querySelectorAll<HTMLElement>(
          "[data-testimonial-part]",
        );
        if (parts.length === 0) return;

        gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        }).fromTo(
          parts,
          { autoAlpha: 0, y: 14 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.48,
            stagger: 0.1,
            ease: "power2.out",
          },
        );
      });
    }, container);

    return () => context.revert();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
