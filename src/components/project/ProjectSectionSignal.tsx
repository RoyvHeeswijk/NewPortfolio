'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SignalMarker from '../home/SignalMarker';
import type { ProjectSection, ProjectSectionVariant } from '@/types/projectPage';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { isPhoneViewport } from '@/lib/viewport';

gsap.registerPlugin(ScrollTrigger);

function resolveVariant(section: ProjectSection): ProjectSectionVariant {
  if (section.variant) return section.variant;
  const sectionNumber = parseInt(section.number, 10);
  if (section.title === 'Development') return 'development';
  if (section.title === 'Resultaat') return 'result';
  if (section.title === 'Geleerd' && sectionNumber >= 4) return 'learned';
  return 'classic';
}

function useSectionReveal(sectionKey: string) {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion || isPhoneViewport()) return;
    const root = sectionRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const bits = gsap.utils.toArray<HTMLElement>('[data-project-reveal]', root);
      gsap.fromTo(
        bits,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: root,
            start: 'top 82%',
            end: 'top 58%',
            scrub: 0.55,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [reducedMotion, sectionKey]);

  return sectionRef;
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <p data-project-reveal className="signal-label text-primary mb-6 flex items-center gap-2">
      <SignalMarker /> {number} / {title}
    </p>
  );
}

function ClassicSection({ section }: { section: ProjectSection }) {
  const sectionRef = useSectionReveal(`${section.number}-classic`);

  return (
    <section ref={sectionRef} className="border-t-2 border-border py-14 md:py-20">
      <SectionHeader number={section.number} title={section.title} />

      {section.paragraphs && section.paragraphs.length > 0 && (
        <div className="max-w-2xl border-l-2 border-primary/40 pl-6 md:pl-8 space-y-5 md:space-y-6">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} data-project-reveal className="signal-body">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {section.steps && section.steps.length > 0 && (
        <ol className="list-none pl-0 max-w-3xl">
          {section.steps.map((step, index) => (
            <li
              key={step.title}
              data-project-reveal
              className="group border-t-2 border-border py-5 md:py-6 transition-colors duration-300 hover:border-primary/50"
            >
              <div className="flex items-start gap-4 md:gap-5">
                <span className="font-mono text-xs text-muted-foreground group-hover:text-primary/70 transition-colors shrink-0 pt-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-display text-[clamp(1.15rem,2vw,1.65rem)] uppercase leading-[0.95] text-foreground mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </p>
                  <p className="signal-body-muted max-w-prose">{step.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      )}

      {section.choices && section.choices.length > 0 && (
        <div className="max-w-3xl border-2 border-border divide-y divide-border">
          {section.choices.map((choice) => (
            <div key={`${choice.label}-${choice.text.slice(0, 24)}`} data-project-reveal className="px-5 py-5 md:px-6 md:py-6 bg-card/40">
              <p className="signal-label text-primary mb-2">{choice.label}</p>
              <p className="signal-body-muted">{choice.text}</p>
            </div>
          ))}
        </div>
      )}

      {section.bullets && section.bullets.length > 0 && (
        <ul className="max-w-2xl space-y-3 list-none pl-0">
          {section.bullets.map((bullet) => (
            <li key={bullet} data-project-reveal className="flex items-start gap-3 signal-body">
              <span className="w-1.5 h-1.5 bg-primary shrink-0 mt-2.5" aria-hidden />
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function DevelopmentSection({
  section,
  technologies,
}: {
  section: ProjectSection;
  technologies: string[];
}) {
  const sectionRef = useSectionReveal(`${section.number}-development`);

  return (
    <section ref={sectionRef} className="border-t-2 border-border py-14 md:py-20">
      <SectionHeader number={section.number} title={section.title} />

      <div className="relative border-2 border-primary/80 bg-background">
        <SignalMarker variant="frame" className="absolute inset-0 pointer-events-none" />
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 p-6 md:p-8 lg:border-r-2 lg:border-border space-y-5 md:space-y-6">
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} data-project-reveal className="signal-body">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="lg:col-span-5 p-6 md:p-8 bg-card/30 border-t-2 lg:border-t-0 border-border">
            <p data-project-reveal className="signal-label text-primary mb-4 flex items-center gap-2">
              <SignalMarker /> Stack
            </p>
            <div data-project-reveal className="flex flex-wrap gap-2 mb-6">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] uppercase tracking-label text-foreground border border-primary/40 bg-primary/5 px-3 py-2"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p data-project-reveal className="font-mono text-xs text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-4">
              Client-side interactie, state en UI. Waar nodig gekoppeld aan backend, CMS of opslag.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultSection({ section }: { section: ProjectSection }) {
  const sectionRef = useSectionReveal(`${section.number}-result`);

  return (
    <section ref={sectionRef} className="border-t-2 border-border py-14 md:py-20">
      <SectionHeader number={section.number} title={section.title} />
      <div className="max-w-2xl border-l-2 border-primary/40 pl-6 md:pl-8 space-y-5">
        {section.paragraphs?.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} data-project-reveal className="signal-body">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

function LearnedSection({ section }: { section: ProjectSection }) {
  const sectionRef = useSectionReveal(`${section.number}-learned`);
  const bullets = section.bullets ?? [];

  return (
    <section ref={sectionRef} className="border-t-2 border-border py-14 md:py-20">
      <SectionHeader number={section.number} title={section.title} />

      <div className="max-w-3xl">
        {bullets.map((bullet, index) => (
          <div
            key={bullet}
            data-project-reveal
            className="group flex items-start gap-4 md:gap-6 border-t-2 border-border py-6 md:py-7 transition-colors duration-300 hover:border-primary/50"
          >
            <span className="font-mono text-xs text-primary shrink-0 pt-1">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="signal-body-muted group-hover:text-foreground transition-colors duration-300">
              {bullet}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

interface ProjectSectionSignalProps {
  section: ProjectSection;
  technologies?: string[];
}

export default function ProjectSectionSignal({ section, technologies = [] }: ProjectSectionSignalProps) {
  const variant = resolveVariant(section);

  switch (variant) {
    case 'development':
      return <DevelopmentSection section={section} technologies={technologies} />;
    case 'result':
      return <ResultSection section={section} />;
    case 'learned':
      return <LearnedSection section={section} />;
    default:
      return <ClassicSection section={section} />;
  }
}
