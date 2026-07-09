'use client';

import { LogoImage } from '@/components/LogoImage';
import { useHeaderScroll } from '@/hooks/useHeaderScroll';

const navigationItems = [
  { label: 'New In', href: '#new' },
  { label: 'Bestsellers', href: '#bestsellers' },
  { label: 'Our Story', href: '#story' },
  { label: 'Reviews', href: '#reviews' }
];

export function Header() {
  const isScrolled = useHeaderScroll(60);

  return (
    <header id="siteHeader" className={isScrolled ? 'scrolled' : undefined}>
      <nav>
        <a href="#" className="logo logo-image" aria-label="Free Fit home">
          <LogoImage priority />
        </a>
        <div className="nav-links">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <a href="#new" className="nav-cta">
          Shop Now
        </a>
      </nav>
    </header>
  );
}
