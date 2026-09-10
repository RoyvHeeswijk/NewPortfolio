interface ProcessStep {
  title: string;
  description: string;
}

interface ProjectProcessProps {
  steps: ProcessStep[];
}

export default function ProjectProcess({ steps }: ProjectProcessProps) {
  return (
    <div className="space-y-0 my-4">
      {steps.map((step, i) => (
        <div key={step.title}>
          <div className="py-4">
            <p className="font-mono text-[10px] uppercase tracking-label text-foreground mb-1">{step.title}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
          </div>
          {i < steps.length - 1 && (
            <p className="font-mono text-xs text-primary pl-1 pb-2" aria-hidden>↓</p>
          )}
        </div>
      ))}
    </div>
  );
}
