'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SignalMarker from './SignalMarker';
import { skills, type SkillEntry } from '@/data/homepage';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { isPhoneViewport } from '@/lib/viewport';

gsap.registerPlugin(ScrollTrigger);

function SkillItem({ item, index }: { item: SkillEntry; index: number }) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <li
      data-skill-item
      className="skill-wall-item group/item border-t-2 border-border py-5 md:py-6 pr-2 transition-colors duration-300 hover:border-primary/50"
    >
      <div className="flex items-center gap-3 md:gap-4">
        <span className="font-mono text-xs text-muted-foreground group-hover/item:text-primary/70 transition-colors duration-300 shrink-0 w-6">
          {num}
        </span>
        {item.icon ? (
          <item.icon
            size={18}
            style={{ color: item.color }}
            className="skill-wall-icon shrink-0 opacity-70"
            aria-hidden
          />
        ) : (
          <span className="skill-wall-dot w-2 h-2 bg-primary/60 shrink-0" aria-hidden />
        )}
        <span className="skill-wall-name font-display text-[clamp(1.25rem,2.2vw,1.85rem)] leading-[0.95] text-foreground uppercase tracking-tight transition-colors duration-300 group-hover/item:text-primary">
          {item.name}
        </span>
      </div>
    </li>
  );
}

export default function ExpertiseSignal() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const wallRef = useRef<HTMLUListElement>(null);
  const wallWrapRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion || isPhoneViewport()) return;

    const section = sectionRef.current;
    const header = headerRef.current;
    const wall = wallRef.current;
    const wallWrap = wallWrapRef.current;
    if (!section || !header || !wall || !wallWrap) return;

    const items = gsap.utils.toArray<HTMLElement>('[data-skill-item]', wall);
    const headerBits = gsap.utils.toArray<HTMLElement>('[data-skill-fade]', header);
    const exitTargets = items;

    const ctx = gsap.context(() => {
      gsap.set(headerBits, { y: 16, opacity: 0 });
      gsap.set(items, { y: 20, opacity: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 92%',
            end: 'top 76%',
            scrub: 0.5,
          },
        })
        .to(headerBits, {
          y: 0,
          opacity: 1,
          stagger: { each: 0.04, from: 'start' },
          ease: 'none',
          duration: 0.45,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: wallWrap,
            start: 'top bottom',
            end: 'top 52%',
            scrub: 0.5,
          },
        })
        .to(items, {
          y: 0,
          opacity: 1,
          stagger: { each: 0.045, from: 'start' },
          ease: 'none',
          duration: 1,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        })
        .to({}, { duration: 0.88 })
        .to(exitTargets, {
          y: -14,
          opacity: 0,
          stagger: { each: 0.012, from: 'end' },
          ease: 'none',
          duration: 0.12,
        });

      ScrollTrigger.create({
        trigger: wallWrap,
        start: 'top 88%',
        onEnterBack: () => {
          gsap.to(exitTargets, { opacity: 1, y: 0, duration: 0.2, overwrite: 'auto' });
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-28 lg:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div ref={headerRef}>
          <p data-skill-fade className="signal-label text-primary mb-4 flex items-center gap-2">
            <SignalMarker /> 02 / Expertise
          </p>
          <h2
            data-skill-fade
            className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight text-foreground mb-12 md:mb-16 max-w-[16ch]"
          >
            Van inzicht naar interface.
          </h2>
        </div>

        <div ref={wallWrapRef}>
          <ul
            ref={wallRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-10 gap-y-0"
          >
            {skills.map((item, index) => (
              <SkillItem key={item.name} item={item} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
