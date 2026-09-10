interface ProjectInsightProps {
  items: { label: string; text: string }[];
}

export default function ProjectInsight({ items }: ProjectInsightProps) {
  return (
    <div className="border border-border divide-y divide-border">
      {items.map((item) => (
        <div key={`${item.label}-${item.text.slice(0, 20)}`} className="px-3 py-2.5">
          <p className="font-mono text-[10px] uppercase tracking-label text-primary mb-0.5">{item.label}</p>
          <p className="text-sm text-foreground/85 leading-snug">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
