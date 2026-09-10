'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SignalMarker from './SignalMarker';
import { heroIntro, heroRoles } from '@/data/homepage';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { useTypewriter } from '@/hooks/useTypewriter';
import { isPhoneViewport } from '@/lib/viewport';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSignal() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const typedRole = useTypewriter(heroRoles, 90, 2800);
  const roleLabel = reducedMotion ? heroRoles.join(' · ') : typedRole;

  useEffect(() => {
    if (reducedMotion || isPhoneViewport()) return;
    const section = sectionRef.current;
    const title = titleRef.current;
    const photo = photoRef.current;
    const footer = footerRef.current;
    if (!section || !title || !photo || !footer) return;

    const ctx = gsap.context(() => {
      gsap.to(title, {
        scale: 0.55,
        y: -60,
        transformOrigin: 'left top',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
        },
      });

      gsap.to(photo, {
        x: 120,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '70% top',
          scrub: 0.8,
        },
      });

      gsap.to(footer, {
        y: -30,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '50% top',
          scrub: 0.8,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
    >
      <div className="flex-1 flex flex-col justify-between pt-28 pb-10 px-6 md:px-8 max-w-[1400px] mx-auto w-full">
        <p className="signal-label text-primary flex items-center gap-3">
          <SignalMarker />
          <span>
            Portfolio · {roleLabel}
            {!reducedMotion && (
              <span
                className="inline-block w-px h-[0.75em] ml-1 bg-primary align-middle animate-pulse"
                aria-hidden
              />
            )}
          </span>
        </p>

        <div className="relative flex-1 flex flex-col md:flex-row md:items-center py-8 md:py-12 gap-8 md:gap-0 overflow-hidden">
          <div ref={titleRef} className="relative z-10 will-change-transform min-w-0">
            <h1 className="font-display uppercase leading-[0.85] text-foreground notranslate" translate="no">
              <span className="block text-[clamp(3.5rem,18vw,14rem)] tracking-[-0.04em]">Roy</span>
              <span className="block text-[clamp(2.75rem,12vw,9rem)] tracking-[-0.03em]">
                <span className="text-primary lowercase">v</span> Heeswijk
              </span>
            </h1>
          </div>

          <div
            ref={photoRef}
            className="relative md:absolute md:right-8 md:top-1/2 md:-translate-y-1/2 w-full max-w-[180px] md:w-[38vw] md:max-w-[320px] aspect-[3/5] z-20 will-change-transform shrink-0 self-center md:self-auto mx-auto md:mx-0"
          >
            <div className="relative h-full w-full overflow-hidden border-2 border-primary/60">
              <Image
                src="/Profiel.jpg"
                alt="Roy van Heeswijk"
                fill
                priority
                sizes="(max-width: 768px) 200px, 320px"
                className="object-cover object-[center_12%] scale-105"
              />
            </div>
          </div>
        </div>

        <div ref={footerRef} className="relative z-30 grid grid-cols-1 md:grid-cols-12 gap-8 items-end will-change-transform">
          <p className="md:col-span-7 signal-body max-w-prose">
            {heroIntro}
          </p>
          <div className="md:col-span-5 flex flex-wrap items-center gap-5 md:justify-end">
            <Link href="#projects" className="signal-btn">
              Projecten →
            </Link>
            <Link href="#contact" className="signal-link">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
