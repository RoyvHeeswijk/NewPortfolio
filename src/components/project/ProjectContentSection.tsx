import { ReactNode } from 'react';
import SignalMarker from '../home/SignalMarker';

interface ProjectContentSectionProps {
  number: string;
  title: string;
  children: ReactNode;
}

export default function ProjectContentSection({ number, title, children }: ProjectContentSectionProps) {
  return (
    <section className="border-t-2 border-border pt-7 pb-2 mb-8 last:mb-0">
      <h2 className="signal-label text-primary mb-5 flex items-center gap-2">
        <SignalMarker /> {number} / {title}
      </h2>
      <div className="project-prose space-y-4">{children}</div>
    </section>
  );
}
