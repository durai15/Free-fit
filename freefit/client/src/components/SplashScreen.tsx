'use client';

import { useEffect, useState } from 'react';
import { LogoImage } from '@/components/LogoImage';

const SPLASH_VISIBLE_MS = 1800;
const SPLASH_EXIT_MS = 500;

export function SplashScreen() {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const unmountTimer = window.setTimeout(
      () => setIsMounted(false),
      SPLASH_VISIBLE_MS + SPLASH_EXIT_MS
    );

    return () => {
      window.clearTimeout(unmountTimer);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className="splash-screen"
      aria-label="Loading Free Fit"
      role="status"
    >
      <div className="splash-logo-container">
        <LogoImage priority className="splash-logo-img" />
      </div>
    </div>
  );
}
