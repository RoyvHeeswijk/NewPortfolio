import { ReactNode } from 'react';
import Reveal from '../ui/Reveal';
import Rule from '../ui/Rule';

interface ProjectContentSectionProps {
  number: string;
  title: string;
  children: ReactNode;
  delay?: number;
}

export default function ProjectContentSection({ number, title, children, delay = 0 }: ProjectContentSectionProps) {
  return (
    <Reveal delay={delay} className="mb-14 last:mb-0">
      <p className="font-mono text-xs uppercase tracking-label text-primary mb-3">
        {number} / {title}
      </p>
      <Rule className="mb-6" />
      <div className="prose-editorial max-w-prose space-y-4">
        {children}
      </div>
    </Reveal>
  );
}
