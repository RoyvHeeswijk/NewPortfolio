interface ProjectBulletListProps {
  items: string[];
}

export default function ProjectBulletList({ items }: ProjectBulletListProps) {
  return (
    <ul className="space-y-2.5 list-none pl-0">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 signal-body-muted">
          <span className="w-1.5 h-1.5 bg-primary shrink-0 mt-2.5" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}
