import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import MaskedText from '../ui/MaskedText';
import Reveal from '../ui/Reveal';
import Rule from '../ui/Rule';

interface ProjectPageLayoutProps {
    metaTitle: string;
    metaDescription: string;
    pageTitle: string;
    summary?: string;
    role: string;
    intro: ReactNode;
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
    intro,
    projectImage,
    projectPreviewImage,
    imageCaption,
    projectVideoId,
    technologies,
    githubUrl,
    liveUrl,
    children,
}: ProjectPageLayoutProps) {
    return (
        <>
            <Head>
                <title>{`${metaTitle} | Project | Roy van Heeswijk`}</title>
                <meta name="description" content={metaDescription} />
            </Head>

            <div className="max-w-[1200px] mx-auto px-8 pt-28 pb-20 min-h-screen">
                <Reveal>
                    <Link
                        href="/#projects"
                        className="inline-flex items-center font-mono text-xs uppercase tracking-label text-muted-foreground hover:text-primary transition-colors link-underline mb-10 group"
                    >
                        <motion.span
                            className="mr-2 inline-block"
                            whileHover={{ x: -4 }}
                            transition={{ duration: 0.15 }}
                        >
                            <FaArrowLeft size={11} />
                        </motion.span>
                        Terug naar projecten
                    </Link>
                </Reveal>

                {projectVideoId && (
                    <Reveal>
                        <div className="mb-10 aspect-video max-w-4xl border border-border overflow-hidden">
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${projectVideoId}`}
                                title={`YouTube video player - ${pageTitle}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </Reveal>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    {/* Sidebar eerst op mobiel, sticky rechts op desktop */}
                    <div className="lg:col-span-4 order-first lg:order-last">
                        <div className="lg:sticky lg:top-28 space-y-6">
                            {projectPreviewImage && !projectVideoId && (
                                <Reveal delay={0.05}>
                                    <div className="border border-border overflow-hidden bg-background">
                                        <Image
                                            src={projectPreviewImage}
                                            alt={`Preview van ${pageTitle}`}
                                            width={390}
                                            height={844}
                                            sizes="(max-width: 1024px) 100vw, 320px"
                                            className="object-cover object-top w-full aspect-[390/844]"
                                            priority
                                        />
                                    </div>
                                    {imageCaption && (
                                        <p className="font-mono text-[10px] uppercase tracking-label text-muted-foreground mt-2">
                                            {imageCaption}
                                        </p>
                                    )}
                                </Reveal>
                            )}

                            {projectImage && !projectVideoId && !projectPreviewImage && (
                                <Reveal delay={0.05}>
                                    <div className="border border-border p-6 flex items-center justify-center bg-white">
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
                                    {imageCaption && (
                                        <p className="font-mono text-[10px] uppercase tracking-label text-muted-foreground mt-2">
                                            {imageCaption}
                                        </p>
                                    )}
                                </Reveal>
                            )}

                            <Reveal delay={0.1}>
                                <div>
                                    <h3 className="font-mono text-xs uppercase tracking-label text-primary mb-3">Details</h3>
                                    <Rule className="mb-5" />

                                    <p className="font-mono text-[10px] uppercase tracking-label text-muted-foreground mb-1">Rol</p>
                                    <p className="text-sm text-foreground mb-5">{role}</p>

                                    <p className="font-mono text-[10px] uppercase tracking-label text-muted-foreground mb-2">Technologie</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="font-mono text-[10px] uppercase tracking-label text-foreground border border-border px-2 py-1"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {(githubUrl || liveUrl) && (
                                        <div className="space-y-3 pt-5 border-t border-border">
                                            {liveUrl && (
                                                <a
                                                    href={liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn-primary w-full justify-center"
                                                >
                                                    <FaExternalLinkAlt size={12} /> Bekijk Live Project
                                                </a>
                                            )}
                                            {githubUrl && (
                                                <a
                                                    href={githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-mono text-xs uppercase tracking-label text-muted-foreground hover:text-primary transition-colors link-underline flex items-center justify-center gap-2 w-full py-3 border border-border"
                                                >
                                                    <FaGithub size={13} /> Bekijk op GitHub
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* Hoofdcontent links op desktop */}
                    <div className="lg:col-span-8 order-last lg:order-first">
                        <Reveal>
                            <p className="font-mono text-xs uppercase tracking-label text-primary mb-3">Project</p>
                            <MaskedText
                                text={pageTitle}
                                as="h1"
                                className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4"
                            />
                            {summary && (
                                <p className="text-base text-foreground/90 leading-relaxed mb-5 max-w-prose">
                                    {summary}
                                </p>
                            )}
                            <div className="text-sm text-foreground/85 leading-relaxed space-y-3 mb-8 max-w-prose [&_p]:mb-0">
                                {intro}
                            </div>
                        </Reveal>

                        <div className="max-w-prose">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
