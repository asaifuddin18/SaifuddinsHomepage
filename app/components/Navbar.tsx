'use client';

import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-cream/90 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-serif text-[22px] tracking-tight font-medium">
          <span className="text-brown">Saifuddin&apos;s </span>
          <span className="text-copper">Family</span>
        </span>

        <div className="flex items-center gap-3">
          <Image
            src="/avatar.jpg"
            alt="Saifuddin family"
            width={32}
            height={32}
            className="rounded-full border border-border"
          />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
