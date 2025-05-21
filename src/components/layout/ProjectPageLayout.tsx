import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

interface ProjectPageLayoutProps {
    metaTitle: string;
    metaDescription: string;
    pageTitle: string;
    projectImage?: string; // Optioneel, voor een hoofd afbeelding
    projectVideoId?: string; // Optioneel, voor een YouTube video ID
    description: ReactNode; // Kan JSX bevatten voor rijkere content
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    children?: ReactNode; // Voor extra content zoals image galleries
}

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
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

            <Navbar />

            <motion.div
                className="container mx-auto px-4 py-12 md:py-20 min-h-screen"
                initial="initial"
                animate="animate"
                variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            >
                {/* Back Button */}
                <motion.div variants={fadeInUp} className="mb-8 md:mb-12">
                    <Link href="/#projects" legacyBehavior>
                        <a className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors group">
                            <FaArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
                            Terug naar projecten
                        </a>
                    </Link>
                </motion.div>

                {/* Page Title */}
                <motion.h1
                    variants={fadeInUp}
                    className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white text-center bg-gradient-to-r from-purple-400 via-teal-400 to-blue-500 text-transparent bg-clip-text"
                >
                    {pageTitle}
                </motion.h1>

                {/* Optional Project Media (Video or Image) */}
                {projectVideoId && (
                    <motion.div variants={fadeInUp} className="my-8 md:my-12 rounded-xl overflow-hidden shadow-2xl aspect-video max-w-4xl mx-auto">
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
                {!projectVideoId && projectImage && (
                    <motion.div variants={fadeInUp} className="my-8 md:my-12 rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
                        <Image
                            src={projectImage}
                            alt={`Hoofdafbeelding voor ${pageTitle}`}
                            width={1200}
                            height={675} // Assuming 16:9 aspect ratio
                            className="object-cover w-full h-auto"
                            priority
                        />
                    </motion.div>
                )}

                {/* Main Content Area */}
                <motion.div
                    variants={fadeInUp}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12"
                >
                    {/* Left Column: Description & Custom Content */}
                    <div className="lg:col-span-2 bg-gray-800/50 p-6 md:p-8 rounded-xl backdrop-blur-md shadow-xl">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Projectbeschrijving</h2>
                        <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                            {description}
                        </div>
                        {children && <div className="mt-8">{children}</div>}
                    </div>

                    {/* Right Column: Details & Links */}
                    <div className="lg:col-span-1 bg-gray-800/50 p-6 md:p-8 rounded-xl backdrop-blur-md shadow-xl h-fit lg:sticky lg:top-28">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Details</h3>

                        <div className="mb-6">
                            <h4 className="text-lg font-medium mb-2 text-teal-400">Gebruikte Technologieën:</h4>
                            <div className="flex flex-wrap gap-2">
                                {technologies.map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-gray-700/70 text-gray-300 text-xs font-medium rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {(githubUrl || liveUrl) && (
                            <div className="space-y-3">
                                {liveUrl && (
                                    <a
                                        href={liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-md w-full"
                                    >
                                        <FaExternalLinkAlt className="mr-2" /> Bekijk Live Project
                                    </a>
                                )}
                                {githubUrl && (
                                    <a
                                        href={githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-300 shadow-md w-full"
                                    >
                                        <FaGithub className="mr-2" /> Bekijk op GitHub
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </motion.div>

            </motion.div>

            {/* <Footer /> */}
        </>
    );
} 