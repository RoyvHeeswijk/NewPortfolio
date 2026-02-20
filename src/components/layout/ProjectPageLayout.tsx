import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ProjectPageLayoutProps {
    metaTitle: string;
    metaDescription: string;
    pageTitle: string;
    projectImage?: string;
    projectVideoId?: string;
    description: ReactNode;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    children?: ReactNode;
}

const teal = 'hsl(172, 66%, 50%)';
const teal10 = 'hsl(172, 66%, 50%, 0.1)';
const teal20 = 'hsl(172, 66%, 50%, 0.2)';
const cardBg = 'hsl(220, 18%, 7%)';
const borderColor = 'hsl(220, 14%, 16%)';
const mutedText = 'hsl(215, 12%, 55%)';
const lightText = 'hsl(210, 20%, 92%)';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
};

const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
};

export default function ProjectPageLayout({
    metaTitle,
    metaDescription,
    pageTitle,
    projectImage,
    projectVideoId,
    description,
    technologies,
    githubUrl,
    liveUrl,
    children
}: ProjectPageLayoutProps) {
    return (
        <>
            <Head>
                <title>{`${metaTitle} | Project | Roy van Heeswijk`}</title>
                <meta name="description" content={metaDescription} />
            </Head>

            <motion.div
                className="max-w-[1200px] mx-auto px-8 py-12 md:py-20 min-h-screen"
                initial="initial"
                animate="animate"
                variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
            >
                <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="mb-8 md:mb-12">
                    <Link href="/#projects" legacyBehavior>
                        <motion.a
                            className="inline-flex items-center text-sm font-medium group cursor-pointer text-[#2dd4bf]"
                            whileHover={{ x: -6 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaArrowLeft size={14} className="mr-2" />
                            Terug naar projecten
                        </motion.a>
                    </Link>
                </motion.div>

                <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">
                        {pageTitle}
                    </h2>
                    <div className="w-16 h-1 rounded-full mt-4" style={{ background: `linear-gradient(90deg, ${teal}, hsl(200, 80%, 60%))` }} />
                </motion.div>

                {projectVideoId && (
                    <motion.div
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="my-8 md:my-12 rounded-2xl overflow-hidden aspect-video max-w-4xl"
                        style={{ border: `1px solid ${borderColor}` }}
                        whileHover={{ boxShadow: `0 0 40px -10px hsl(172, 66%, 50%, 0.2)` }}
                    >
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${projectVideoId}`}
                            title={`YouTube video player - ${pageTitle}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </motion.div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 mt-6 md:mt-8">
                    <motion.div
                        className="lg:col-span-2 p-6 md:p-8 rounded-2xl"
                        style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}
                        variants={fadeInLeft}
                        transition={{ duration: 0.6 }}
                        whileHover={{ borderColor: 'hsl(220, 14%, 22%)' }}
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: lightText }}>
                            Projectbeschrijving
                        </h2>
                        <div className="prose prose-invert prose-lg max-w-none leading-relaxed" style={{ color: mutedText }}>
                            {description}
                        </div>
                        {children && <div className="mt-8">{children}</div>}
                    </motion.div>

                    <div className="lg:col-span-1 flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
                        {projectImage && !projectVideoId && (
                            <motion.div
                                className="p-6 md:p-8 rounded-2xl flex items-center justify-center min-h-[100px]"
                                style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}
                                variants={fadeInRight}
                                transition={{ duration: 0.6 }}
                                whileHover={{ borderColor: 'hsl(220, 14%, 22%)' }}
                            >
                                <div className="flex justify-center items-center w-full">
                                    <Image
                                        src={projectImage}
                                        alt={`Logo voor ${pageTitle}`}
                                        width={220}
                                        height={56}
                                        className="object-contain object-center w-auto max-w-full max-h-14 md:max-h-16"
                                        priority
                                    />
                                </div>
                            </motion.div>
                        )}
                        <motion.div
                            className="p-6 md:p-8 rounded-2xl h-fit"
                            style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}
                            variants={fadeInRight}
                            transition={{ duration: 0.6 }}
                            whileHover={{ borderColor: 'hsl(220, 14%, 22%)' }}
                        >
                        <h3 className="text-xl md:text-2xl font-semibold mb-5" style={{ color: lightText }}>Details</h3>

                        <div className="mb-6">
                            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: teal }}>
                                Skills
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech, i) => (
                                    <motion.span
                                        key={tech}
                                        className="px-3 py-1 text-xs font-medium rounded-full"
                                        style={{ backgroundColor: teal10, color: teal, border: `1px solid ${teal20}` }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
                                        whileHover={{ scale: 1.1, boxShadow: `0 0 12px -4px hsl(172, 66%, 50%, 0.3)` }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {(githubUrl || liveUrl) && (
                            <div className="space-y-3 pt-5" style={{ borderTop: `1px solid ${borderColor}` }}>
                                {liveUrl && (
                                    <motion.a
                                        href={liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center px-6 py-3 font-semibold rounded-lg w-full text-sm"
                                        style={{ backgroundColor: teal, color: 'hsl(220, 20%, 4%)' }}
                                        whileHover={{ scale: 1.03, boxShadow: `0 0 25px -5px hsl(172, 66%, 50%, 0.4)` }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <FaExternalLinkAlt className="mr-2" /> Bekijk Live Project
                                    </motion.a>
                                )}
                                {githubUrl && (
                                    <motion.a
                                        href={githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center px-6 py-3 font-semibold rounded-lg w-full text-sm"
                                        style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, color: mutedText }}
                                        whileHover={{ scale: 1.03, borderColor: teal, color: lightText }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <FaGithub className="mr-2" /> Bekijk op GitHub
                                    </motion.a>
                                )}
                            </div>
                        )}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
