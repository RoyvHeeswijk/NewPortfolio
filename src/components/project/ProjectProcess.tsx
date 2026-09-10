interface ProcessStep {
  title: string;
  description: string;
}

interface ProjectProcessProps {
  steps: ProcessStep[];
}

export default function ProjectProcess({ steps }: ProjectProcessProps) {
  return (
    <ol className="space-y-2 list-none pl-0">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-2.5">
          <span className="font-mono text-[10px] text-primary shrink-0 pt-0.5">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-label text-foreground mb-0.5">{step.title}</p>
            <p className="text-sm text-foreground/85 leading-snug">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
