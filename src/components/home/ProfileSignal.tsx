'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SignalMarker from './SignalMarker';
import { aboutFacts, profileBody, profileStatement } from '@/data/homepage';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { isPhoneViewport } from '@/lib/viewport';

gsap.registerPlugin(ScrollTrigger);

export default function ProfileSignal() {
  const sectionRef = useRef<HTMLElement>(null);
  const linesRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion || isPhoneViewport()) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      linesRef.current.forEach((line, i) => {
        if (!line) return;
        gsap.fromTo(
          line,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 0.6,
            },
            delay: i * 0.05,
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section id="about-me" ref={sectionRef} className="py-24 md:py-32 lg:py-40 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="relative p-5 sm:p-6 md:p-10 border-y-2 sm:border-2 border-primary/80 mb-12 md:mb-16 -mx-6 sm:mx-0 px-6 sm:px-6 md:px-10">
              <SignalMarker variant="frame" className="absolute inset-0 pointer-events-none" />
              <div className="relative space-y-1 md:space-y-2">
                {profileStatement.map((line, i) => (
                  <p
                    key={line}
                    ref={(el) => { linesRef.current[i] = el; }}
                    className={`font-display text-[clamp(1.65rem,5.5vw,4.5rem)] leading-[1.05] ${
                      i === profileStatement.length - 1 ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="max-w-2xl">
              <p className="signal-label text-primary mb-5 flex items-center gap-2">
                <SignalMarker /> Over mij
              </p>
              <div className="space-y-6 md:space-y-7 border-l-2 border-primary/40 pl-6 md:pl-8">
                {profileBody.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="signal-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:pt-4">
            <p className="signal-label text-primary mb-6 flex items-center gap-2">
              <SignalMarker /> Spec
            </p>
            <dl className="space-y-0 border border-border">
              {aboutFacts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`px-5 py-4 bg-card ${i > 0 ? 'border-t border-border' : ''}`}
                >
                  <dt className="signal-label text-muted-foreground mb-1.5">
                    {fact.label}
                  </dt>
                  <dd className="text-base text-foreground/90 leading-relaxed">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
