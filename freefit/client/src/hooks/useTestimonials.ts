'use client';

import { useEffect, useState } from 'react';

export function useTestimonials(totalSlides: number, intervalMs: number) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (totalSlides <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % totalSlides);
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [intervalMs, totalSlides]);

  return { activeIndex, setActiveIndex };
}
