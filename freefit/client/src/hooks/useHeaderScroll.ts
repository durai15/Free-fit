'use client';

import { useEffect, useState } from 'react';

export function useHeaderScroll(threshold = 60) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeaderState = () => setIsScrolled(window.scrollY > threshold);

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });

    return () => window.removeEventListener('scroll', updateHeaderState);
  }, [threshold]);

  return isScrolled;
}
