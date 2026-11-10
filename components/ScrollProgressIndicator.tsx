'use client';

import { useEffect, useState } from 'react';

const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * 19;

export default function ScrollProgressIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame: number | null = null;

    const updateProgress = () => {
      animationFrame = null;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        scrollableHeight > 0
          ? Math.round((window.scrollY / scrollableHeight) * 100)
          : 0;

      setProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    const scheduleUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateProgress);
      }
    };

    scheduleUpdate();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(document.documentElement);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      resizeObserver.disconnect();
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const strokeOffset =
    CIRCLE_CIRCUMFERENCE * (1 - progress / 100);

  return (
    <div
      role="progressbar"
      aria-label="Sivun vierityksen edistyminen"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      aria-valuetext={`${progress} % sivusta vieritetty`}
      className="fixed right-4 bottom-4 z-[60] flex size-14 items-center justify-center rounded-full bg-[#045184] shadow-[0_4px_16px_rgba(4,81,132,0.28)] sm:right-6 sm:bottom-6"
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 size-full -rotate-90"
        viewBox="0 0 44 44"
      >
        <circle
          cx="22"
          cy="22"
          r="19"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2.5"
        />
        <circle
          cx="22"
          cy="22"
          r="19"
          fill="none"
          stroke="#3DC9B2"
          strokeDasharray={CIRCLE_CIRCUMFERENCE}
          strokeDashoffset={strokeOffset}
          strokeLinecap="round"
          strokeWidth="2.5"
        />
      </svg>
      <span className="text-[13px] font-bold tabular-nums text-white">
        {progress}%
      </span>
    </div>
  );
}
