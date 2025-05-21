"use client"

import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
}

// Updated project data - replace with your actual project details
const projectsData: Project[] = [
  {
    id: 1,
    title: "Sphere & Dice",
    description: "Een 3D interactieve ervaring met een roterende bol en dobbelsteen, gebouwd met THREE.js.",
    image: "/Threejs.png", // Ensure this image exists in public/
    tags: ["THREE.js", "JavaScript", "3D Graphics"],
    github: "https://github.com/RoyvHeeswijk",
    live: "/Threejs" // Verwijst naar src/pages/Threejs.tsx
  },
  {
    id: 2,
    title: "Charla - Spraak-naar-Tekst",
    description: "Een real-time spraak-naar-tekst applicatie, mogelijk gemaakt door Next.js en AI transcriptiediensten.",
    image: "/Charla.png", // Ensure this image exists in public/
    tags: ["Next.js", "React", "TypeScript", "OpenAI API"],
    github: "https://github.com/RoyvHeeswijk",
    live: "/Charla" // Verwijst naar src/pages/Charla.tsx
  },
  {
    id: 3,
    title: "Upendo E-commerce",
    description: "Een modern e-commerce platform voor Upendo, met geavanceerde productfiltering en een strakke UI.",
    image: "/Upendo.png", // Ensure this image exists in public/
    tags: ["Next.js", "Tailwind CSS", "E-commerce"],
    github: "https://github.com/RoyvHeeswijk",
    live: "/Upendo" // Verwijst naar src/pages/Upendo.tsx
  },
  {
    id: 4,
    title: "CineMatch AI",
    description: "Een AI-gedreven film aanbevelingsplatform dat gepersonaliseerde suggesties biedt.",
    image: "/video.png", // Ensure this image exists in public/
    tags: ["Next.js", "AI", "React", "Tailwind CSS", "OpenAI API", "IMTB API"],
    github: "https://github.com/RoyvHeeswijk",
    live: "/CineMatchpage" // Verwijst naar src/pages/CineMatchpage.tsx
  },
];

const skillsData = [
  "JavaScript", "React", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind CSS",
  "Node.js", "Git", "OpenAI", "VS Code", "Figma", "Github", "THREE.js", "Cursor",
  "Storyblok", "IMTB API"
];

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Roy van Heeswijk - Front End Developer</title>
        <meta name="description" content="Portfolio van Roy van Heeswijk, een gepassioneerd Front End Developer die moderne en innovatieve weboplossingen creëert." />
        <meta name="keywords" content="Roy van Heeswijk, Portfolio, Front End Developer, Web Developer, Next.js, React, TypeScript, Programmeur, Nederlands" />
      </Head>

      {/* Hero Section - Uses the global animated background from Layout */}
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
        {/* The blob animations are now part of the Layout/global styles or Hero component if defined there */}
        <div className="container mx-auto px-4 z-10">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-5xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Profile Image */}
            <motion.div
              variants={fadeInUp}
              className="w-full md:w-2/5 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-teal-400 shadow-lg shadow-teal-400/20">
                <Image
                  src="/Profiel.png"
                  alt="Roy van Heeswijk"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Hero Text */}
            <motion.div
              className="w-full md:w-3/5 text-center md:text-left"
              variants={staggerContainer}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 text-teal-400"
                variants={fadeInUp}
              >
                Roy van Heeswijk
              </motion.h1>
              <motion.div
                className="mb-6"
                variants={fadeInUp}
              >
                <span className="inline-block bg-teal-400/20 text-teal-300 px-4 py-2 rounded-md text-xl font-medium">
                  Front End Developer
                </span>
              </motion.div>
              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
                variants={fadeInUp}
              >
                Ik creëer interactieve gebruikersinterfaces en zet designs om in vloeiende webapplicaties met moderne technologieën zoals React en Next.js.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex justify-center md:justify-start space-x-4">
                <Link
                  href="#projects"
                  className="px-8 py-3 bg-teal-500 text-white text-lg font-semibold rounded-md hover:bg-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Mijn Projecten
                </Link>
                <Link
                  href="#contact"
                  className="px-8 py-3 bg-transparent border-2 border-teal-500 text-teal-400 text-lg font-semibold rounded-md hover:bg-teal-500/10 transform hover:scale-105 transition-all duration-300"
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Over Mij Section */}
      <section id="about-me" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex items-center justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-0.5 bg-teal-500/30 w-16 mr-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Over Mij</h2>
            <div className="h-0.5 bg-teal-500/30 w-16 ml-4"></div>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Als 19-jarige student ICT & Media Design aan Fontys in Tilburg, breng ik mijn passie voor technologie en creativiteit samen in elk project. Geboren en getogen in Drunen, heb ik me ontwikkeld tot een gedreven front-end developer die graag nieuwe uitdagingen aangaat.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Mijn doel is om mezelf constant uit te dagen en te blijven leren. In mijn portfolio zie je niet alleen mijn werk, maar ook mijn groei als developer. Ik focus me op het creëren van moderne, gebruiksvriendelijke websites die niet alleen mooi zijn, maar ook effectief communiceren.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex items-center justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-0.5 bg-teal-500/30 w-16 mr-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Uitgelichte Projecten</h2>
            <div className="h-0.5 bg-teal-500/30 w-16 ml-4"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                className="bg-gray-800/60 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md border border-gray-700/50 transform hover:scale-[1.03] transition-all duration-400 group"
                variants={fadeInUp}
              >
                {project.live ? (
                  <>
                    <Link href={project.live}>
                      <div className="relative h-56 md:h-64 w-full overflow-hidden cursor-pointer">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
                      </div>
                    </Link>
                    <div className="p-6 md:p-8">
                      <Link href={project.live}>
                        <h3 className="text-2xl font-semibold mb-3 text-white cursor-pointer hover:text-teal-400 transition-colors">{project.title}</h3>
                      </Link>
                      <p className="text-gray-400 mb-5 text-sm leading-relaxed min-h-[60px]">{project.description}</p>
                      <div className="mb-5 flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-medium rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-teal-400 transition-colors flex items-center text-sm"
                          >
                            <FaGithub size={18} className="mr-2" /> GitHub
                          </a>
                        )}
                        <Link href={project.live}>
                          <span className="text-gray-400 hover:text-teal-400 transition-colors flex items-center text-sm font-medium cursor-pointer">
                            <FaExternalLinkAlt size={16} className="mr-2" /> Bekijk Live
                          </span>
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative h-56 md:h-64 w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                      <p className="text-gray-400 mb-5 text-sm leading-relaxed min-h-[60px]">{project.description}</p>
                      <div className="mb-5 flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-medium rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-teal-400 transition-colors flex items-center text-sm"
                          >
                            <FaGithub size={18} className="mr-2" /> GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex items-center justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-0.5 bg-teal-500/30 w-16 mr-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Vaardigheden</h2>
            <div className="h-0.5 bg-teal-500/30 w-16 ml-4"></div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skillsData.map((skill) => (
              <motion.div
                key={skill}
                className="px-5 py-3 bg-gray-800/50 border border-teal-500/20 text-gray-300 rounded-lg backdrop-blur-sm shadow-md text-sm font-medium hover:bg-teal-500/30 hover:text-white transition-all duration-300"
                variants={fadeInUp}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-24 bg-black/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center mb-10">
              <div className="h-0.5 bg-teal-500/30 w-16 mr-4"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Contact</h2>
              <div className="h-0.5 bg-teal-500/30 w-16 ml-4"></div>
            </div>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Wil je contact met me opnemen? Ik sta open voor nieuwe uitdagingen en interessante projecten.
              Of je nu een vraag hebt of wilt samenwerken, ik hoor graag van je!
            </p>
            <Link
              href="mailto:royvanheeswijk.r@gmail.com"
              className="inline-block px-10 py-4 bg-teal-500 text-white text-lg font-semibold rounded-md hover:bg-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Neem Contact Op
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

