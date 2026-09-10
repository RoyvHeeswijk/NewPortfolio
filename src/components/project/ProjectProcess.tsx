interface ProcessStep {
  title: string;
  description: string;
}

interface ProjectProcessProps {
  steps: ProcessStep[];
}

export default function ProjectProcess({ steps }: ProjectProcessProps) {
  return (
    <ol className="space-y-3 my-2 list-none pl-0">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-3">
          <span className="font-mono text-[10px] text-primary shrink-0 pt-0.5">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-label text-foreground mb-1">{step.title}</p>
            <p className="text-sm text-foreground/90 leading-relaxed">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
