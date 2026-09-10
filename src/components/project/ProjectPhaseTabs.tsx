'use client';

import { ReactNode, useCallback, useEffect, useState } from 'react';
import SignalMarker from '../home/SignalMarker';

export interface ProjectPhase {
  id: string;
  label: string;
  content: ReactNode;
}

interface ProjectPhaseTabsProps {
  phases: ProjectPhase[];
}

export default function ProjectPhaseTabs({ phases }: ProjectPhaseTabsProps) {
  const [activeId, setActiveId] = useState(phases[0]?.id ?? '');
  const activeIndex = phases.findIndex((phase) => phase.id === activeId);
  const activePhase = phases[activeIndex >= 0 ? activeIndex : 0];

  const selectPhase = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const selectByOffset = useCallback(
    (offset: number) => {
      if (phases.length === 0) return;
      const current = phases.findIndex((phase) => phase.id === activeId);
      const base = current >= 0 ? current : 0;
      const next = (base + offset + phases.length) % phases.length;
      setActiveId(phases[next].id);
    },
    [activeId, phases],
  );

  useEffect(() => {
    if (!phases.some((phase) => phase.id === activeId)) {
      setActiveId(phases[0]?.id ?? '');
    }
  }, [activeId, phases]);

  if (phases.length === 0) return null;

  return (
    <div className="flex flex-col flex-1 min-h-0 border-t-2 border-border pt-4 lg:pt-5">
      <p className="signal-label text-primary mb-3 flex items-center gap-2 shrink-0">
        <SignalMarker /> Verken het project
      </p>

      <div
        role="tablist"
        aria-label="Projectfases"
        className="flex flex-wrap gap-x-1 gap-y-1 border-b-2 border-border pb-3 shrink-0"
      >
        {phases.map((phase) => {
          const isActive = phase.id === activeId;
          return (
            <button
              key={phase.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`phase-panel-${phase.id}`}
              id={`phase-tab-${phase.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => selectPhase(phase.id)}
              onKeyDown={(event) => {
                if (event.key === 'ArrowRight') {
                  event.preventDefault();
                  selectByOffset(1);
                }
                if (event.key === 'ArrowLeft') {
                  event.preventDefault();
                  selectByOffset(-1);
                }
              }}
              className={`signal-label inline-flex items-center gap-2 px-3 py-2 border-b-2 -mb-[calc(0.75rem+2px)] transition-colors ${
                isActive
                  ? 'text-primary border-primary'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              <SignalMarker className={isActive ? 'opacity-100' : 'opacity-0'} />
              {phase.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`phase-panel-${activePhase.id}`}
        aria-labelledby={`phase-tab-${activePhase.id}`}
        className="relative border-2 border-primary/80 bg-background mt-4 p-5 md:p-6 flex-1 min-h-0 overflow-hidden"
      >
        <SignalMarker variant="frame" className="absolute inset-0 pointer-events-none" />
        <div key={activePhase.id} className="relative project-prose project-phase-panel-enter animate-in fade-in duration-200">
          {activePhase.content}
        </div>
      </div>
    </div>
  );
}
