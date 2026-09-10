'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import SignalMarker from '../home/SignalMarker';

const navItems = [
  { name: 'Home', path: '/#hero', hash: 'hero' },
  { name: 'Profiel', path: '/#about-me', hash: 'about-me' },
  { name: 'Expertise', path: '/#skills', hash: 'skills' },
  { name: 'Projecten', path: '/#projects', hash: 'projects' },
  { name: 'Contact', path: '/#contact', hash: 'contact' },
];

const SCROLL_SECTIONS: { id: string; hash: string }[] = [
  { id: 'contact', hash: 'contact' },
  { id: 'projects', hash: 'projects' },
  { id: 'skills', hash: 'skills' },
  { id: 'about-me', hash: 'about-me' },
  { id: 'hero', hash: 'hero' },
];

const NAV_OFFSET = 140;

function getActiveHashFromScroll(): string {
  if (typeof window === 'undefined') return 'hero';
  if (window.scrollY < 80) return 'hero';

  for (const { id, hash } of SCROLL_SECTIONS) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= NAV_OFFSET) {
      return hash;
    }
  }

  return 'hero';
}

export default function SignalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('hero');

  const updateActiveSection = useCallback(() => {
    setActiveHash(getActiveHashFromScroll());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      updateActiveSection();
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', updateActiveSection);
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [updateActiveSection]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-background/95 border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-sm md:text-base uppercase tracking-tight text-foreground hover:text-primary transition-colors notranslate"
          translate="no"
        >
          Roy <span className="text-primary lowercase">v</span> Heeswijk
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeHash === item.hash;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`signal-link inline-flex items-center gap-2 transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <SignalMarker className={isActive ? 'opacity-100' : 'opacity-0'} />
                {item.name}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          className="md:hidden text-foreground p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = activeHash === item.hash;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-2 py-3 signal-label transition-colors ${
                  isActive ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <SignalMarker className={isActive ? 'opacity-100' : 'opacity-30'} />
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
