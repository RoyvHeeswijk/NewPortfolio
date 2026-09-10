interface ProjectInsightProps {
  items: { label: string; text: string }[];
}

export default function ProjectInsight({ items }: ProjectInsightProps) {
  return (
    <div className="border border-border divide-y divide-border my-6">
      {items.map((item) => (
        <div key={item.label} className="p-4">
          <p className="font-mono text-[10px] uppercase tracking-label text-primary mb-2">{item.label}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
