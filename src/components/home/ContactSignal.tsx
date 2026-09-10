'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SignalMarker from './SignalMarker';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const MAILTO = 'mailto:royvanheeswijk.r@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/roy-van-heeswijk-34919135b/';

function ContactRoute({
  index,
  title,
  hint,
  href,
  external = false,
}: {
  index: string;
  title: string;
  hint: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      data-contact-route
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="contact-route group flex items-baseline justify-between gap-6 border-t-2 border-border py-6 md:py-7 transition-colors duration-300 hover:border-primary focus-visible:border-primary focus-visible:outline-none"
    >
      <div className="flex items-baseline gap-4 md:gap-6 min-w-0">
        <span className="font-mono text-xs text-primary shrink-0">{index}</span>
        <span className="font-display text-[clamp(2rem,4.5vw,3.5rem)] uppercase leading-[0.9] text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </span>
      </div>
      <span className="signal-label text-muted-foreground shrink-0 hidden sm:inline group-hover:text-primary transition-colors duration-300">
        {hint}
      </span>
    </a>
  );
}

export default function ContactSignal() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    const label = section.querySelector<HTMLElement>('[data-contact-label]');
    const headlineLines = gsap.utils.toArray<HTMLElement>('[data-contact-headline]', section);
    const body = section.querySelector<HTMLElement>('[data-contact-body]');
    const routes = gsap.utils.toArray<HTMLElement>('[data-contact-route]', section);

    const ctx = gsap.context(() => {
      gsap.set(headlineLines, { y: '110%' });
      gsap.set([label, body, ...routes], { y: 28, opacity: 0 });
      gsap.set(line, { scaleX: 0, transformOrigin: 'left center' });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 72%',
            end: 'top 28%',
            scrub: 0.55,
          },
        })
        .to(label, { y: 0, opacity: 1, ease: 'none', duration: 0.12 })
        .to(headlineLines, { y: '0%', ease: 'none', duration: 0.2 }, 0.06)
        .to(body, { y: 0, opacity: 1, ease: 'none', duration: 0.14 }, 0.22)
        .to(line, { scaleX: 1, ease: 'none', duration: 0.18 }, 0.3)
        .to(
          routes,
          { y: 0, opacity: 1, stagger: { each: 0.09, from: 'start' }, ease: 'none', duration: 0.28 },
          0.38,
        );
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="contact-section scroll-mt-20 min-h-[calc(100dvh-10rem)] flex flex-col justify-center py-20 md:py-24 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 lg:items-end">
          <div className="lg:col-span-5">
            <p
              data-contact-label
              className="signal-label text-primary mb-5 flex items-center gap-2"
            >
              <SignalMarker /> 04 / Contact
            </p>

            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight text-foreground mb-6 md:mb-8 max-w-[14ch] overflow-hidden">
              <span data-contact-headline className="block">
                Neem contact op.
              </span>
            </h2>

            <p data-contact-body className="signal-body-muted max-w-prose">
              Wil je contact met me opnemen? Ik sta open voor nieuwe uitdagingen en interessante projecten.
              Of je nu een vraag hebt of wilt samenwerken, ik hoor graag van je!
            </p>
          </div>

          <div className="lg:col-span-7">
            <div
              ref={lineRef}
              className="contact-signal-line h-0.5 w-full bg-primary/80 mb-0 origin-left"
              aria-hidden
            />
            <div>
              <ContactRoute index="01" title="E-mail" hint="Mail-app →" href={MAILTO} />
              <ContactRoute index="02" title="LinkedIn" hint="Profiel →" href={LINKEDIN} external />
              <div className="border-t-2 border-border" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
