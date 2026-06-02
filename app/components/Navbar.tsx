'use client';

import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-cream/90 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-serif text-[22px] tracking-tight font-medium">
          <span className="text-brown">Saifuddin&apos;s </span>
          <span className="text-copper">Family</span>
        </span>
        <ThemeToggle />
      </div>
    </nav>
  );
}
