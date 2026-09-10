'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SignalMarker from './SignalMarker';
import { aboutFacts, profileBody, profileStage, profileStatement } from '@/data/homepage';
import { FaExternalLinkAlt } from 'react-icons/fa';
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 xl:gap-16 gap-y-10">
          <div className="lg:col-span-8 lg:row-start-1">
            <div className="profile-quote-frame relative border-2 border-primary/80 p-5 sm:p-6 md:p-8 lg:p-10 -mx-6 sm:mx-0">
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
          </div>

          <aside className="lg:col-span-4 lg:row-start-1 lg:col-start-9 lg:self-start">
              <p className="signal-label text-primary mb-5 lg:mb-6 flex items-center gap-2">
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

          <div className="lg:col-span-12 lg:row-start-2 profile-columns flex flex-col md:flex-row md:justify-between md:items-stretch gap-10 md:gap-[10%] pt-4 lg:pt-8 lg:mt-1">
              <article className="w-full md:w-[45%] md:shrink-0 flex flex-col min-h-0">
                <p className="signal-label text-primary mb-5 flex items-center gap-2">
                  <SignalMarker /> Over mij
                </p>
                <div className="flex-1 border-l-2 border-primary/40 pl-5 md:pl-6 space-y-5">
                  {profileBody.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)} className="signal-body">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>

              <article className="w-full md:w-[45%] md:shrink-0 flex flex-col min-h-0">
                <p className="signal-label text-primary mb-5 flex items-center gap-2">
                  <SignalMarker /> Eerdere stage
                </p>
                <div className="flex-1 border-l-2 border-primary/40 pl-5 md:pl-6 flex flex-col">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <h3 className="font-display text-[clamp(1.15rem,2.5vw,1.5rem)] uppercase leading-tight text-foreground">
                      {profileStage.company}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-label text-muted-foreground">
                      {profileStage.period}
                    </span>
                  </div>

                  <p className="signal-label text-primary/90 mb-4">{profileStage.role}</p>
                  <p className="signal-body-muted mb-5">{profileStage.intro}</p>

                  <ul className="space-y-2.5 list-none pl-0 mb-5">
                    {profileStage.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 signal-body-muted">
                        <span className="w-1.5 h-1.5 bg-primary shrink-0 mt-2" aria-hidden />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-auto signal-body-muted">
                    Uitgelicht:{' '}
                    <a
                      href={profileStage.featuredWork.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="signal-link inline-flex items-center gap-1.5 text-foreground hover:text-primary"
                    >
                      {profileStage.featuredWork.label}
                      <FaExternalLinkAlt size={9} aria-hidden />
                    </a>
                  </p>
                </div>
              </article>
          </div>
        </div>
      </div>
    </section>
  );
}
