import { ReactNode } from 'react';

interface ProjectOverviewPanelProps {
  children: ReactNode;
  highlights?: string[];
}

export default function ProjectOverviewPanel({ children, highlights }: ProjectOverviewPanelProps) {
  return (
    <div className="space-y-3">
      <div className="project-prose space-y-2.5 signal-body-muted text-sm">{children}</div>
      {highlights && highlights.length > 0 && (
        <ul className="space-y-1.5 list-none pl-0 pt-2 border-t border-border">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-foreground/85 leading-snug">
              <span className="w-1 h-1 bg-primary shrink-0 mt-2" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
