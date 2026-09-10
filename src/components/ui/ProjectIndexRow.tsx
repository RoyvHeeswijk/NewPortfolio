import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export interface ProjectIndexItem {
  id: number;
  title: string;
  role: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live: string;
  liveDemo?: string;
  logoImage?: boolean;
}

interface ProjectIndexRowProps {
  project: ProjectIndexItem;
  index: number;
}

export default function ProjectIndexRow({ project, index }: ProjectIndexRowProps) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <div className="group relative py-8 border-b border-border">
      {/* Accent bar that grows in from the left on hover */}
      <span className="absolute left-0 top-0 bottom-0 w-px bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start transition-[padding] duration-500 ease-out md:group-hover:pl-6">
        <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300 md:col-span-1">
          {num}
        </span>

        <div className="md:col-span-5">
          <Link href={project.live || '#'} className="block">
            <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
          </Link>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-label text-primary">
            {project.role}
          </p>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-prose">
            {project.description}
          </p>
        </div>

        <div className="md:col-span-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] uppercase tracking-label text-muted-foreground border border-border px-2 py-1 group-hover:border-primary/30 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="md:col-span-3 flex flex-wrap items-center gap-x-5 gap-y-2 md:justify-end">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-label text-muted-foreground hover:text-primary transition-colors link-underline inline-flex items-center gap-1.5"
            >
              <FaGithub size={12} /> GitHub
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-label text-muted-foreground hover:text-primary transition-colors link-underline inline-flex items-center gap-1.5"
            >
              <FaExternalLinkAlt size={10} /> Demo
            </a>
          )}
          <Link
            href={project.live || '#'}
            className="font-mono text-xs uppercase tracking-label text-primary link-underline inline-flex items-center gap-1.5"
          >
            Bekijk
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
