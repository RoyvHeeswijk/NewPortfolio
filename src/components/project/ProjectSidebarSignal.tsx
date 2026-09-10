import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SignalMarker from '../home/SignalMarker';

interface ProjectSidebarSignalProps {
  pageTitle: string;
  role: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  projectImage?: string;
  projectPreviewImage?: string;
  imageCaption?: string;
  variant?: 'compact' | 'featured';
}

export default function ProjectSidebarSignal({
  pageTitle,
  role,
  technologies,
  githubUrl,
  liveUrl,
  projectImage,
  projectPreviewImage,
  imageCaption,
  variant = 'compact',
}: ProjectSidebarSignalProps) {
  const hasMedia = Boolean(projectPreviewImage || projectImage);
  const isFeatured = variant === 'featured';

  if (!hasMedia && !githubUrl && !liveUrl) return null;

  return (
    <aside className={`w-full ${isFeatured ? 'lg:sticky lg:top-24' : 'lg:sticky lg:top-24'}`}>
      {hasMedia && (
        <div className={isFeatured ? 'mb-8' : 'mb-6'}>
          {projectPreviewImage && (
            <div className={`relative border-2 overflow-hidden bg-background ${isFeatured ? 'border-primary/80 p-3 md:p-4' : 'border-border'}`}>
              {isFeatured && (
                <SignalMarker variant="frame" className="absolute inset-0 pointer-events-none" />
              )}
              <Image
                src={projectPreviewImage}
                alt={`Preview van ${pageTitle}`}
                width={390}
                height={844}
                sizes="(max-width: 1024px) 100vw, 360px"
                className={`relative object-cover object-top w-full ${
                  isFeatured ? 'max-h-[480px] lg:max-h-[520px]' : 'max-h-[420px] lg:max-h-[360px]'
                }`}
                priority={!isFeatured}
              />
            </div>
          )}
          {projectImage && !projectPreviewImage && (
            <div
              className={`relative flex items-center justify-center bg-card ${
                isFeatured
                  ? 'border-2 border-primary/80 p-10 md:p-14 min-h-[220px] md:min-h-[280px]'
                  : 'border-2 border-border p-8'
              }`}
            >
              {isFeatured && (
                <SignalMarker variant="frame" className="absolute inset-0 pointer-events-none" />
              )}
              <Image
                src={projectImage}
                alt={`Logo voor ${pageTitle}`}
                width={320}
                height={96}
                sizes="(max-width: 1024px) 100vw, 320px"
                className={`relative object-contain w-full ${isFeatured ? 'max-h-36 md:max-h-44' : 'max-h-28'}`}
                priority={!isFeatured}
              />
            </div>
          )}
          {imageCaption && (
            <p className={`signal-label text-muted-foreground mt-3 ${isFeatured ? 'text-center lg:text-left' : ''}`}>
              {imageCaption}
            </p>
          )}
        </div>
      )}

      <div className={`relative bg-background ${isFeatured ? 'border-2 border-border p-5 md:p-6' : 'border-2 border-primary/80 p-5 md:p-6'}`}>
        {!isFeatured && (
          <SignalMarker variant="frame" className="absolute inset-0 pointer-events-none" />
        )}

        <div className="relative">
          <p className="signal-label text-primary mb-5 flex items-center gap-2">
            <SignalMarker /> {isFeatured ? 'Project info' : 'Details'}
          </p>

          {isFeatured && (
            <p className="font-display text-xl md:text-2xl uppercase leading-[0.95] text-foreground mb-5">
              {pageTitle}
            </p>
          )}

          <dl className="space-y-0 border border-border mb-6">
            <div className="px-4 py-4 bg-card">
              <dt className="signal-label text-muted-foreground mb-1.5">Rol</dt>
              <dd className="signal-body text-base">{role}</dd>
            </div>
            <div className="px-4 py-4 bg-card border-t border-border">
              <dt className="signal-label text-muted-foreground mb-2">Technologie</dt>
              <dd>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="signal-label text-muted-foreground border border-border px-2.5 py-1.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </dd>
            </div>
          </dl>

          {(githubUrl || liveUrl) && (
            <div className="border-t-2 border-border">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between gap-4 border-b-2 border-border group transition-colors hover:border-primary ${
                    isFeatured ? 'py-6' : 'py-5'
                  }`}
                >
                  <span className={`font-display uppercase leading-tight text-foreground group-hover:text-primary transition-colors ${
                    isFeatured ? 'text-xl md:text-2xl' : 'text-lg'
                  }`}>
                    Live demo
                  </span>
                  <FaExternalLinkAlt size={11} className="text-primary shrink-0" aria-hidden />
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between gap-4 group transition-colors ${isFeatured ? 'py-6' : 'py-5'}`}
                >
                  <span className="signal-link inline-flex items-center gap-2">
                    <FaGithub size={12} aria-hidden /> GitHub
                  </span>
                  <span className="font-mono text-sm text-primary opacity-40 group-hover:opacity-100 transition-all" aria-hidden>
                    →
                  </span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
