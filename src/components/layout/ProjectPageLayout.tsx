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
    projectImage?: string;
    projectPreviewImage?: string;
    projectVideoId?: string;
    description: ReactNode;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    children?: ReactNode;
}

export default function ProjectPageLayout({
    metaTitle,
    metaDescription,
    pageTitle,
    projectImage,
    projectPreviewImage,
    projectVideoId,
    description,
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
                {/* Back link */}
                <Reveal>
                    <Link
                        href="/#projects"
                        className="inline-flex items-center font-mono text-xs uppercase tracking-label text-muted-foreground hover:text-primary transition-colors link-underline mb-12 group"
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

                {/* Hero */}
                <Reveal>
                    <p className="font-mono text-xs uppercase tracking-label text-primary mb-4">Project</p>
                    <MaskedText
                        text={pageTitle}
                        as="h1"
                        className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
                    />
                    <Rule className="mb-8" />

                    <div className="flex flex-wrap gap-2 mb-8">
                        {technologies.map((tech, i) => (
                            <motion.span
                                key={tech}
                                className="font-mono text-[10px] uppercase tracking-label text-muted-foreground border border-border px-2.5 py-1"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + i * 0.04, duration: 0.3 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>

                    {(githubUrl || liveUrl) && (
                        <div className="flex flex-wrap gap-4 mb-12">
                            {liveUrl && (
                                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                    <FaExternalLinkAlt size={12} /> Bekijk Live Project
                                </a>
                            )}
                            {githubUrl && (
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-xs uppercase tracking-label text-muted-foreground hover:text-primary transition-colors link-underline inline-flex items-center gap-2 px-6 py-3 border border-border"
                                >
                                    <FaGithub size={13} /> Bekijk op GitHub
                                </a>
                            )}
                        </div>
                    )}
                </Reveal>

                {/* Video */}
                {projectVideoId && (
                    <Reveal>
                        <div className="mb-12 aspect-video max-w-4xl border border-border overflow-hidden">
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

                {/* Content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    <Reveal className="lg:col-span-8">
                        <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">Projectbeschrijving</h2>
                        <Rule className="mb-8" />
                        <div className="prose-editorial max-w-prose">
                            {description}
                        </div>
                        {children && <div className="mt-8">{children}</div>}
                    </Reveal>

                    <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start space-y-8">
                        {projectPreviewImage && !projectVideoId && (
                            <Reveal delay={0.1}>
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
                            </Reveal>
                        )}

                        {projectImage && !projectVideoId && !projectPreviewImage && (
                            <Reveal delay={0.1}>
                                <div className="border border-border p-8 flex items-center justify-center">
                                    <Image
                                        src={projectImage}
                                        alt={`Logo voor ${pageTitle}`}
                                        width={220}
                                        height={56}
                                        sizes="220px"
                                        className="object-contain w-auto max-w-full max-h-16"
                                        priority
                                    />
                                </div>
                            </Reveal>
                        )}

                        <Reveal delay={0.15}>
                            <div>
                                <h3 className="font-mono text-xs uppercase tracking-label text-primary mb-4">Details</h3>
                                <Rule className="mb-6" />

                                <p className="font-mono text-[10px] uppercase tracking-label text-muted-foreground mb-3">Skills</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="font-mono text-[10px] uppercase tracking-label text-muted-foreground border border-border px-2 py-1"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {(githubUrl || liveUrl) && (
                                    <div className="space-y-3 pt-6 border-t border-border">
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
            </div>
        </>
    );
}
