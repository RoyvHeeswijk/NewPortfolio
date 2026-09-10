interface ProjectInsightProps {
  items: { label: string; text: string }[];
}

export default function ProjectInsight({ items }: ProjectInsightProps) {
  return (
    <div className="border border-border divide-y divide-border my-3">
      {items.map((item) => (
        <div key={`${item.label}-${item.text.slice(0, 20)}`} className="px-4 py-3">
          <p className="font-mono text-[10px] uppercase tracking-label text-primary mb-1">{item.label}</p>
          <p className="text-sm text-foreground/90 leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
