'use client';

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';
import SignalMarker from './SignalMarker';
import { projectsData } from '@/data/projects';
import type { ProjectItem } from '@/data/projects';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const AUTO_ROTATE_MS = 5000;

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="signal-label text-muted-foreground border border-border px-2.5 py-1.5"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ project }: { project: ProjectItem }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="signal-link inline-flex items-center gap-1.5">
          <FaGithub size={12} aria-hidden /> GitHub
        </a>
      )}
      {project.liveDemo && (
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="signal-link inline-flex items-center gap-1.5">
          <FaExternalLinkAlt size={10} aria-hidden /> Demo
        </a>
      )}
      <Link href={project.live} className="signal-link text-primary inline-flex items-center gap-1.5">
        Bekijk <span aria-hidden>→</span>
      </Link>
    </div>
  );
}

function ProjectDetail({
  project,
  index,
  total,
  fillHeight = false,
  compact = false,
}: {
  project: ProjectItem;
  index: number;
  total: number;
  fillHeight?: boolean;
  compact?: boolean;
}) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      className={`work-index-detail relative border-2 border-primary/80 bg-background/60 ${
        fillHeight
          ? 'h-full flex flex-col p-6 md:p-8'
          : compact
            ? 'p-5 border-t-0 border-x-0 border-b-0 bg-card/40'
            : 'p-6 md:p-10'
      }`}
    >
      <div className={fillHeight ? 'flex-1 min-h-0' : undefined}>
        {!compact && (
          <>
            <p className="font-mono text-xs text-primary mb-4">{num} / {String(total).padStart(2, '0')}</p>
            <Link
              href={project.live}
              className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <h3 className={`font-display uppercase leading-[0.9] text-foreground transition-colors hover:text-primary ${
                fillHeight
                  ? 'text-[clamp(2rem,4vw,3.5rem)] mb-3'
                  : 'text-[clamp(2.25rem,6vw,4.5rem)] mb-4'
              }`}>
                {project.title}
              </h3>
            </Link>
            <p className="signal-label text-primary mb-3">{project.role}</p>
          </>
        )}
        <p className="signal-body-muted max-w-prose mb-4">
          {project.description}
        </p>
        {project.summary && (
          <p className="signal-body max-w-prose mb-5">
            {project.summary}
          </p>
        )}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-2">
            <p className="signal-label text-primary mb-3 flex items-center gap-2">
              <SignalMarker /> Wat ik bouwde
            </p>
            <ul className="space-y-2.5">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5 signal-body-muted">
                  <span className="w-1.5 h-1.5 bg-primary shrink-0 mt-2" aria-hidden />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="shrink-0 pt-4 mt-auto border-t border-border space-y-4">
        <ProjectTags tags={project.tags} />
        <ProjectLinks project={project} />
      </div>
    </div>
  );
}

function ProjectAccordionMobile({
  project,
  index,
  total,
  isOpen,
  onToggle,
}: {
  project: ProjectItem;
  index: number;
  total: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const num = String(index + 1).padStart(2, '0');
  const panelId = `project-mobile-panel-${project.id}`;
  const buttonId = `project-mobile-tab-${project.id}`;

  return (
    <article className="work-index-mobile border-b-2 border-border bg-card overflow-hidden last:border-b-0">
      <button
        type="button"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className={`work-index-mobile-trigger group w-full text-left px-4 py-5 transition-colors duration-300 ${
          isOpen ? 'bg-card' : 'bg-background hover:bg-card/60'
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-3">
              <span className={`font-mono text-xs shrink-0 transition-colors duration-300 ${
                isOpen ? 'text-primary' : 'text-muted-foreground group-hover:text-primary/70'
              }`}>
                {num}
              </span>
              <span className={`font-display text-[clamp(1.5rem,7vw,2rem)] uppercase leading-[0.95] transition-colors duration-300 ${
                isOpen ? 'text-primary' : 'text-foreground'
              }`}>
                {project.title}
              </span>
            </div>
            <p className={`mt-2 ml-8 signal-label transition-colors duration-300 ${
              isOpen ? 'text-muted-foreground' : 'text-muted-foreground/80'
            }`}>
              {project.role}
            </p>
          </div>
          <HiChevronDown
            size={20}
            aria-hidden
            className={`shrink-0 text-primary transition-transform duration-300 mt-1 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </div>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className={isOpen ? 'block' : 'hidden'}
      >
        <ProjectDetail project={project} index={index} total={total} compact />
      </div>
    </article>
  );
}

export default function WorkIndex() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(0);
  const [autoPaused, setAutoPaused] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const overListRef = useRef(false);
  const overPanelRef = useRef(false);
  const total = projectsData.length;
  const reducedMotion = usePrefersReducedMotion();

  const selectProject = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const syncAutoPause = useCallback(() => {
    setAutoPaused(overListRef.current || overPanelRef.current);
  }, []);

  const onListEnter = useCallback(() => {
    overListRef.current = true;
    syncAutoPause();
  }, [syncAutoPause]);

  const onListLeave = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const related = event.relatedTarget as Node | null;
    if (panelRef.current?.contains(related)) return;
    overListRef.current = false;
    syncAutoPause();
  }, [syncAutoPause]);

  const onPanelEnter = useCallback(() => {
    overPanelRef.current = true;
    syncAutoPause();
  }, [syncAutoPause]);

  const onPanelLeave = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const related = event.relatedTarget as Node | null;
    if (listRef.current?.contains(related)) return;
    overPanelRef.current = false;
    syncAutoPause();
  }, [syncAutoPause]);

  useEffect(() => {
    if (reducedMotion || autoPaused) return;

    const mq = window.matchMedia('(min-width: 1024px)');
    if (!mq.matches) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, AUTO_ROTATE_MS);

    return () => window.clearInterval(interval);
  }, [autoPaused, reducedMotion, total]);

  const onListKeyDown = useCallback((event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      selectProject(Math.min(index + 1, total - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      selectProject(Math.max(index - 1, 0));
    }
  }, [selectProject, total]);

  return (
    <section id="projects" className="py-24 md:py-32 lg:py-40 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <p className="signal-label text-primary mb-4 flex items-center gap-2">
          <SignalMarker /> 03 / Werk
        </p>

        <div className="lg:hidden">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight text-foreground mb-8 md:mb-12 max-w-[14ch]">
            Projecten die ik bouwde.
          </h2>
          <div className="work-index-mobile-list border-t-2 border-border" role="list">
            {projectsData.map((project, i) => (
              <ProjectAccordionMobile
                key={project.id}
                project={project}
                index={i}
                total={total}
                isOpen={mobileOpenIndex === i}
                onToggle={() => setMobileOpenIndex((current) => (current === i ? null : i))}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16 lg:items-stretch">
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight text-foreground mb-12 md:mb-16 max-w-[14ch]">
              Projecten die ik bouwde.
            </h2>
            <div
              ref={listRef}
              role="tablist"
              aria-label="Projecten"
              onMouseEnter={onListEnter}
              onMouseLeave={onListLeave}
              onFocusCapture={onListEnter}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  overListRef.current = false;
                  syncAutoPause();
                }
              }}
            >
              {projectsData.map((project, i) => {
                const isActive = i === activeIndex;
                const num = String(i + 1).padStart(2, '0');

                return (
                  <button
                    key={project.id}
                    type="button"
                    role="tab"
                    id={`project-tab-${project.id}`}
                    aria-selected={isActive}
                    aria-controls={`project-panel-${project.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => selectProject(i)}
                    onMouseEnter={() => selectProject(i)}
                    onFocus={() => selectProject(i)}
                    onKeyDown={(e) => onListKeyDown(e, i)}
                    className={`work-index-row group w-full text-left border-t-2 py-6 transition-colors duration-300 ${
                      isActive ? 'border-primary' : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-baseline gap-4 md:gap-6">
                      <span className={`font-mono text-xs transition-colors duration-300 ${
                        isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary/70'
                      }`}>
                        {num}
                      </span>
                      <span className={`font-display text-[clamp(1.75rem,3vw,2.75rem)] uppercase leading-[0.95] transition-colors duration-300 ${
                        isActive ? 'text-primary' : 'text-foreground group-hover:text-foreground'
                      }`}>
                        {project.title}
                      </span>
                    </div>
                    <p className={`mt-2 ml-10 signal-label transition-colors duration-300 ${
                      isActive ? 'text-muted-foreground' : 'text-muted-foreground/80'
                    }`}>
                      {project.role}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            ref={panelRef}
            className="lg:col-span-7 min-h-0"
            role="tabpanel"
            id={`project-panel-${projectsData[activeIndex].id}`}
            aria-labelledby={`project-tab-${projectsData[activeIndex].id}`}
            onMouseEnter={onPanelEnter}
            onMouseLeave={onPanelLeave}
            onFocusCapture={onPanelEnter}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                overPanelRef.current = false;
                syncAutoPause();
              }
            }}
          >
            <div key={projectsData[activeIndex].id} className="work-index-panel h-full">
              <ProjectDetail
                project={projectsData[activeIndex]}
                index={activeIndex}
                total={total}
                fillHeight
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
