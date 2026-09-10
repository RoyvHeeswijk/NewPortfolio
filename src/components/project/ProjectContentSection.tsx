import { ReactNode } from 'react';

interface ProjectContentSectionProps {
  number: string;
  title: string;
  children: ReactNode;
}

export default function ProjectContentSection({ number, title, children }: ProjectContentSectionProps) {
  return (
    <section className="mb-7 pb-7 border-b border-border last:mb-0 last:pb-0 last:border-b-0">
      <h2 className="font-mono text-xs uppercase tracking-label text-primary mb-3">
        {number} / {title}
      </h2>
      <div className="text-sm text-foreground leading-relaxed space-y-3 [&_p]:text-foreground/90 [&_ul]:list-none [&_ul]:pl-0 [&_ul]:space-y-2 [&_ul]:mt-2 [&_li]:relative [&_li]:pl-4 [&_li]:text-foreground/90 [&_li]:before:content-['·'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-primary">
        {children}
      </div>
    </section>
  );
}
