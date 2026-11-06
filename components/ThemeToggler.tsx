"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function ThemeToggler() {
  return (
    <AnimatedThemeToggler
      type="button"
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-[#3dc9b2] bg-white text-[#045184] transition-colors hover:bg-[#eafaf7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#045184] [&_svg]:size-4"
    />
  );
}
