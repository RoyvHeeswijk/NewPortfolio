import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SignalMarker from '../home/SignalMarker';

interface ProjectPageLayoutProps {
  metaTitle: string;
  metaDescription: string;
  pageTitle: string;
  summary?: string;
  role: string;
  projectImage?: string;
  projectPreviewImage?: string;
  imageCaption?: string;
  projectVideoId?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  children: ReactNode;
}

export default function ProjectPageLayout({
  metaTitle,
  metaDescription,
  pageTitle,
  summary,
  role,
  projectImage,
  projectPreviewImage,
  imageCaption,
  projectVideoId,
  technologies,
  githubUrl,
  liveUrl,
  children,
}: ProjectPageLayoutProps) {
  const hasMedia = Boolean(
    (projectPreviewImage || projectImage) && !projectVideoId,
  );

  return (
    <>
      <Head>
        <title>{`${metaTitle} | Project | Roy van Heeswijk`}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 pt-24 pb-20 min-h-screen">
        <Link
          href="/#projects"
          className="signal-link inline-flex items-center gap-2 mb-6 lg:mb-5 shrink-0"
        >
          <FaArrowLeft size={11} aria-hidden />
          Terug naar projecten
        </Link>

        {projectVideoId && (
          <div className="mb-10 aspect-video max-w-4xl border-2 border-border overflow-hidden">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${projectVideoId}`}
              title={`YouTube video player - ${pageTitle}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 lg:flex-1 lg:min-h-0 lg:items-stretch">
          <div className="lg:col-span-8 order-last lg:order-first min-w-0 flex flex-col lg:min-h-0">
            <div className="max-w-prose shrink-0">
              <p className="signal-label text-primary mb-2 flex items-center gap-2">
                <SignalMarker /> Project
              </p>
              <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] uppercase leading-[0.95] text-foreground mb-3">
                {pageTitle}
              </h1>

              {summary && (
                <p className="signal-body-muted text-sm md:text-base leading-relaxed lg:line-clamp-2 mb-4 lg:mb-5">
                  {summary}
                </p>
              )}
            </div>

            <div className="max-w-prose flex flex-col flex-1 min-h-0">{children}</div>
          </div>

          <aside className="lg:col-span-4 order-first lg:order-last w-full lg:min-h-0 flex flex-col">
            {hasMedia && (
              <div className="mb-5 lg:mb-5 shrink-0">
                {projectPreviewImage && (
                  <div className="border-2 border-border overflow-hidden bg-background max-h-[320px] lg:max-h-[200px]">
                    <Image
                      src={projectPreviewImage}
                      alt={`Preview van ${pageTitle}`}
                      width={390}
                      height={844}
                      sizes="(max-width: 1024px) 100vw, 320px"
                      className="object-cover object-top w-full h-full min-h-[200px] lg:min-h-0 lg:h-[200px]"
                      priority
                    />
                  </div>
                )}
                {projectImage && !projectPreviewImage && (
                  <div className="border-2 border-border p-6 flex items-center justify-center bg-card">
                    <Image
                      src={projectImage}
                      alt={`Logo voor ${pageTitle}`}
                      width={320}
                      height={96}
                      sizes="(max-width: 1024px) 100vw, 320px"
                      className="object-contain w-full max-h-24"
                      priority
                    />
                  </div>
                )}
                {imageCaption && (
                  <p className="signal-label text-muted-foreground mt-3">{imageCaption}</p>
                )}
              </div>
            )}

            <div className="lg:flex-1 lg:min-h-0">
              <div className="relative border-2 border-primary/80 bg-background p-4 md:p-5 h-full">
                <SignalMarker variant="frame" className="absolute inset-0 pointer-events-none" />

                <div className="relative">
                  <p className="signal-label text-primary mb-5 flex items-center gap-2">
                    <SignalMarker /> Details
                  </p>

                  <div className="space-y-5 mb-6">
                    <div>
                      <p className="signal-label text-muted-foreground mb-1.5">Rol</p>
                      <p className="signal-body">{role}</p>
                    </div>
                    <div>
                      <p className="signal-label text-muted-foreground mb-2">Technologie</p>
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
                    </div>
                  </div>

                  {(githubUrl || liveUrl) && (
                    <div className="border-t-2 border-border">
                      {liveUrl && (
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-4 py-5 border-b-2 border-border group transition-colors hover:border-primary"
                        >
                          <span className="font-display text-lg uppercase leading-tight text-foreground group-hover:text-primary transition-colors">
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
                          className="flex items-center justify-between gap-4 py-5 group transition-colors"
                        >
                          <span className="signal-link inline-flex items-center gap-2">
                            <FaGithub size={12} aria-hidden /> GitHub
                          </span>
                          <span
                            className="font-mono text-sm text-primary opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                            aria-hidden
                          >
                            →
                          </span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
