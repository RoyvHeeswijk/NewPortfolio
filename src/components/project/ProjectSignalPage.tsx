'use client';

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SignalMarker from '../home/SignalMarker';
import ProjectSectionSignal from './ProjectSectionSignal';
import type { ProjectPageData } from '@/types/projectPage';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { isPhoneViewport } from '@/lib/viewport';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSignalPage({
  metaTitle,
  metaDescription,
  pageTitle,
  summary,
  body,
  highlights,
  role,
  technologies,
  githubUrl,
  liveUrl,
  projectImage,
  projectPreviewImage,
  imageCaption,
  sections,
}: ProjectPageData) {
  const heroRef = useRef<HTMLElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const hasMedia = Boolean(projectPreviewImage || projectImage);

  useEffect(() => {
    document.documentElement.style.removeProperty('overflow');
    document.body.style.removeProperty('overflow');
    ScrollTrigger.refresh();

    if (reducedMotion || isPhoneViewport()) return;

    const hero = heroRef.current;
    const overview = overviewRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      const heroBits = gsap.utils.toArray<HTMLElement>('[data-hero-reveal]', hero);
      gsap.fromTo(
        heroBits,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          stagger: 0.1,
          duration: 0.7,
        },
      );

      if (overview) {
        const overviewBits = gsap.utils.toArray<HTMLElement>('[data-overview-reveal]', overview);
        gsap.fromTo(
          overviewBits,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            stagger: 0.07,
            scrollTrigger: {
              trigger: overview,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 0.55,
            },
          },
        );
      }
    }, hero);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [reducedMotion, pageTitle]);

  return (
    <div className="overflow-visible">
      <Head>
        <title>{`${metaTitle} | Project | Roy van Heeswijk`}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <section ref={heroRef} className="pt-28 md:pt-32 pb-10 md:pb-14 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <Link
            data-hero-reveal
            href="/#projects"
            className="signal-link inline-flex items-center gap-2 mb-8 md:mb-10"
          >
            <FaArrowLeft size={11} aria-hidden />
            Terug naar projecten
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-8">
              <p data-hero-reveal className="signal-label text-primary mb-4 flex items-center gap-2">
                <SignalMarker /> Project
              </p>
              <h1
                data-hero-reveal
                className="font-display text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.9] text-foreground mb-4 md:mb-5"
              >
                {pageTitle}
              </h1>
              <p data-hero-reveal className="signal-label text-primary mb-4">{role}</p>
              <p data-hero-reveal className="signal-body max-w-2xl mb-8">{summary}</p>

              {(liveUrl || githubUrl) && (
                <div data-hero-reveal className="flex flex-wrap items-center gap-4">
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="signal-btn inline-flex items-center gap-2"
                    >
                      Bekijk live demo
                      <FaExternalLinkAlt size={11} aria-hidden />
                    </a>
                  )}
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="signal-link inline-flex items-center gap-2 py-3 px-1"
                    >
                      <FaGithub size={13} aria-hidden />
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>

            {hasMedia && (
              <div data-hero-reveal className="lg:col-span-4">
                {projectPreviewImage && (
                  <div className="border-2 border-border overflow-hidden bg-background">
                    <Image
                      src={projectPreviewImage}
                      alt={`Preview van ${pageTitle}`}
                      width={390}
                      height={844}
                      sizes="(max-width: 1024px) 100vw, 360px"
                      className="object-cover object-top w-full max-h-[360px] lg:max-h-[320px]"
                      priority
                    />
                  </div>
                )}
                {projectImage && !projectPreviewImage && (
                  <div className="border-2 border-border p-8 flex items-center justify-center bg-card">
                    <Image
                      src={projectImage}
                      alt={`Logo voor ${pageTitle}`}
                      width={320}
                      height={96}
                      sizes="(max-width: 1024px) 100vw, 320px"
                      className="object-contain w-full max-h-28"
                      priority
                    />
                  </div>
                )}
                {imageCaption && (
                  <p className="signal-label text-muted-foreground mt-3">{imageCaption}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-28 pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8 min-w-0 max-w-full order-2 lg:order-1">
              <div ref={overviewRef} className="mb-14 md:mb-20 max-w-2xl">
                <p data-overview-reveal className="signal-label text-primary mb-5 flex items-center gap-2">
                  <SignalMarker /> Over dit project
                </p>
                <div className="space-y-5 md:space-y-6 border-l-2 border-primary/40 pl-6 md:pl-8 mb-8">
                  {body.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)} data-overview-reveal className="signal-body">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {highlights.length > 0 && (
                  <div>
                    <p data-overview-reveal className="signal-label text-primary mb-4 flex items-center gap-2">
                      <SignalMarker /> Wat ik bouwde
                    </p>
                    <ul className="space-y-3 list-none pl-0">
                      {highlights.map((item) => (
                        <li key={item} data-overview-reveal className="flex items-start gap-3 signal-body-muted">
                          <span className="w-1.5 h-1.5 bg-primary shrink-0 mt-2.5" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {sections.map((section) => (
                <ProjectSectionSignal
                  key={section.number}
                  section={section}
                  technologies={technologies}
                />
              ))}

              <div className="border-t-2 border-border pt-10 md:pt-12">
                <Link
                  href="/#projects"
                  className="group flex items-baseline justify-between gap-6 py-2 transition-colors hover:text-primary"
                >
                  <span className="font-display text-[clamp(1.75rem,4vw,3rem)] uppercase leading-[0.9] text-foreground group-hover:text-primary transition-colors">
                    Meer projecten
                  </span>
                  <span className="signal-label text-muted-foreground group-hover:text-primary transition-colors" aria-hidden>
                    →
                  </span>
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-4 lg:sticky lg:top-24 w-full order-1 lg:order-2">
              <div className="relative border-2 border-primary/80 bg-background p-5 md:p-6">
                <SignalMarker variant="frame" className="absolute inset-0 pointer-events-none" />

                <div className="relative">
                  <p className="signal-label text-primary mb-5 flex items-center gap-2">
                    <SignalMarker /> Details
                  </p>

                  <dl className="space-y-0 border border-border mb-6">
                    <div className="px-4 py-4 bg-card">
                      <dt className="signal-label text-muted-foreground mb-1.5">Rol</dt>
                      <dd className="signal-body text-base">{role}</dd>
                    </div>
                    <div className="px-4 py-4 bg-card border-t border-border">
                      <dt className="signal-label text-muted-foreground mb-2">Technologie</dt>
                      <dd>
                        <div className="flex flex-wrap gap-2">
                          {technologies.map((tech) => (
                            <span
                              key={tech}
                              className="signal-label text-muted-foreground border border-border px-2.5 py-1.5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </dd>
                    </div>
                  </dl>

                  {(githubUrl || liveUrl) && (
                    <div className="border-t-2 border-border">
                      {liveUrl && (
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-4 py-5 border-b-2 border-border group transition-colors hover:border-primary"
                        >
                          <span className="font-display text-lg uppercase leading-tight text-foreground group-hover:text-primary transition-colors">
                            Live demo
                          </span>
                          <FaExternalLinkAlt size={11} className="text-primary shrink-0" aria-hidden />
                        </a>
                      )}
                      {githubUrl && (
                        <a
                          href={githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-4 py-5 group transition-colors"
                        >
                          <span className="signal-link inline-flex items-center gap-2">
                            <FaGithub size={12} aria-hidden /> GitHub
                          </span>
                          <span className="font-mono text-sm text-primary opacity-40 group-hover:opacity-100 transition-all" aria-hidden>
                            →
                          </span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
