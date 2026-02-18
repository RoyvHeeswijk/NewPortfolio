import { useState, useEffect, useRef, useCallback, MouseEvent as ReactMouseEvent } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaEnvelope, FaLinkedin } from 'react-icons/fa';

// ── Data ──

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
}

const projectsData: Project[] = [
  { id: 1, title: "Sphere & Dice", description: "3D interactieve ervaring met een roterende bol en dobbelsteen, gebouwd met THREE.js.", image: "/Threejs.png", tags: ["THREE.js", "JavaScript", "3D Graphics"], github: "https://github.com/RoyvHeeswijk", live: "/Threejs" },
  { id: 2, title: "Charla — Spraak-naar-Tekst", description: "Real-time spraak-naar-tekst applicatie, mogelijk gemaakt door Next.js en OpenAI API.", image: "/Charla.png", tags: ["Next.js", "React", "TypeScript", "OpenAI API"], github: "https://github.com/RoyvHeeswijk", live: "/Charla" },
  { id: 3, title: "Upendo E-commerce", description: "Modern e-commerce platform met productfiltering en Storyblok CMS.", image: "/Upendo.png", tags: ["Next.js", "Tailwind CSS", "Storyblok"], github: "https://github.com/RoyvHeeswijk", live: "/Upendo" },
  { id: 4, title: "CineMatch AI", description: "AI-gedreven film aanbevelingsplatform met gepersonaliseerde suggesties.", image: "/video.png", tags: ["Next.js", "AI", "React", "OpenAI API"], github: "https://github.com/RoyvHeeswijk", live: "/CineMatchpage" },
];

const skillsData = [
  "JavaScript", "React", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind CSS",
  "Node.js", "Git", "OpenAI", "VS Code", "Figma", "GitHub", "THREE.js", "Cursor",
];

const roles = ["Front End Developer", "UI Designer"];

// ── Colors ──

const teal = 'hsl(172, 66%, 50%)';
const teal10 = 'hsl(172, 66%, 50%, 0.1)';
const teal20 = 'hsl(172, 66%, 50%, 0.2)';
const teal30 = 'hsl(172, 66%, 50%, 0.3)';
const cardBg = 'hsl(220, 18%, 7%)';
const borderColor = 'hsl(220, 14%, 16%)';
const mutedText = 'hsl(215, 12%, 55%)';
const lightText = 'hsl(210, 20%, 92%)';

// ── Typewriter Hook ──

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, speed, pause]);

  return text;
}

// ── Animation Variants ──

const fadeInUp = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } };
const fadeInLeft = { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } };
const fadeInRight = { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } };
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

// ── Page ──

export default function HomePage() {
  const [heroHovered, setHeroHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glowStrength, setGlowStrength] = useState(0.08);
  const [glowSize, setGlowSize] = useState(600);
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const typedRole = useTypewriter(roles, 70, 2200);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const handlePageMouse = useCallback((e: ReactMouseEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });

    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const heroMid = rect.top + rect.height * 0.45;

      if (e.clientY <= heroMid) {
        setGlowStrength(0.08);
        setGlowSize(600);
      } else {
        const fadeEnd = rect.bottom + 60;
        const fadeRange = fadeEnd - heroMid;
        const t = Math.min(Math.max((e.clientY - heroMid) / fadeRange, 0), 1);
        setGlowStrength(0.08 * (1 - t));
        setGlowSize(600 - 300 * t);
      }
    }
  }, []);

  return (
    <div ref={pageRef} onMouseMove={handlePageMouse}>
      <Head>
        <title>Roy van Heeswijk - Front End Developer</title>
        <meta name="description" content="Portfolio van Roy van Heeswijk, een gepassioneerd Front End Developer die moderne en innovatieve weboplossingen creëert." />
      </Head>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
        style={{ scaleX, background: `linear-gradient(90deg, ${teal}, hsl(200, 80%, 60%))` }}
      />

      {/* Mouse glow — fades + shrinks smoothly from mid-hero */}
      <div
        className="fixed pointer-events-none z-30 rounded-full blur-3xl"
        style={{
          width: glowSize,
          height: glowSize,
          background: `radial-gradient(circle, hsl(172, 66%, 50%, ${glowStrength}) 0%, transparent 70%)`,
          left: mousePos.x - glowSize / 2,
          top: mousePos.y - glowSize / 2,
          opacity: mousePos.x && glowStrength > 0.002 ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="max-w-[1200px] mx-auto px-8 w-full z-10">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-12"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div className="flex-1 text-center md:text-left order-2 md:order-1" variants={stagger}>
              <motion.div
                className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 h-6"
                style={{ color: teal }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                {typedRole}
                <motion.span
                  className="inline-block w-[2px] h-4 ml-0.5 align-middle"
                  style={{ backgroundColor: teal }}
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                />
              </motion.div>
              <motion.h1
                className="text-5xl md:text-7xl font-bold leading-tight mb-6"
                style={{ color: lightText }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="text-gradient">Roy</span> van Heeswijk
              </motion.h1>
              <motion.p
                className="text-base md:text-lg leading-relaxed max-w-lg mb-10"
                style={{ color: mutedText }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ik creëer interactieve gebruikersinterfaces en zet designs om in vloeiende webapplicaties met moderne technologieën zoals React en Next.js.
              </motion.p>
              <motion.div
                className="flex flex-row items-center justify-center md:justify-start gap-4"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div whileHover={{ scale: 1.05, boxShadow: `0 0 30px -5px hsl(172, 66%, 50%, 0.4)` }} whileTap={{ scale: 0.97 }} className="rounded-lg">
                  <Link
                    href="#projects"
                    className="px-6 py-3 text-sm font-semibold rounded-lg inline-flex items-center gap-2 whitespace-nowrap"
                    style={{ backgroundColor: teal, color: 'hsl(220, 20%, 4%)' }}
                  >
                    Mijn Projecten <FaArrowRight className="text-xs" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="rounded-lg">
                  <Link
                    href="#contact"
                    className="px-6 py-3 text-sm font-semibold rounded-lg whitespace-nowrap transition-all duration-300"
                    style={{ color: mutedText, border: `1px solid ${borderColor}` }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = teal30; e.currentTarget.style.color = lightText; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = borderColor; e.currentTarget.style.color = mutedText; }}
                  >
                    Contact
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Profile photo with glow */}
            <motion.div
              className="relative order-1 md:order-2 shrink-0"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              onMouseEnter={() => setHeroHovered(true)}
              onMouseLeave={() => setHeroHovered(false)}
            >
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-xl -z-10"
                style={{ backgroundColor: teal10, border: `1px solid ${teal20}` }}
                animate={{ rotate: heroHovered ? 6 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 rounded-xl -z-10"
                style={{ backgroundColor: teal10, border: `1px solid ${teal20}` }}
                animate={{ rotate: heroHovered ? -6 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />

              <motion.div
                className="relative"
                style={{ borderRadius: '1rem' }}
                animate={{
                  boxShadow: heroHovered
                    ? `0 0 60px -10px hsl(172, 66%, 50%, 0.45)`
                    : `0 0 40px -10px hsl(172, 66%, 50%, 0.15)`,
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-56 h-56 md:w-72 md:h-72 overflow-hidden"
                  style={{ borderRadius: '1rem', border: `2px solid ${heroHovered ? teal30 : borderColor}`, transition: 'border-color 0.5s' }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image src="/Profiel.png" alt="Roy van Heeswijk" fill className="object-cover" style={{ borderRadius: '1rem' }} />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== OVER MIJ + SKILLS ===== */}
      <section id="about-me" className="py-24 relative">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              className="lg:col-span-3"
              variants={fadeInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: lightText }}>
                Over <span className="text-gradient">Mij</span>
              </h2>
              <div className="w-16 h-1 rounded-full mb-8" style={{ background: `linear-gradient(90deg, ${teal}, hsl(200, 80%, 60%))` }} />
              <div className="space-y-5 text-base leading-relaxed" style={{ color: mutedText }}>
                <p>
                  Als 20-jarige student ICT & Human Centered Design aan Fontys in Tilburg, breng ik mijn passie voor
                  technologie en creativiteit samen in elk project. Geboren in Drunen, heb ik me
                  ontwikkeld tot een gedreven front-end developer die graag nieuwe uitdagingen aangaat.
                </p>
                <p>
                  Mijn doel is om mezelf constant uit te dagen en te blijven leren. In mijn portfolio zie je
                  niet alleen mijn werk, maar ook mijn groei als developer. Ik focus me op het creëren van
                  moderne, gebruiksvriendelijke websites die niet alleen mooi zijn, maar ook effectief communiceren.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-2"
              id="skills"
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: lightText }}>
                Mijn <span className="text-gradient">Skills</span>
              </h2>
              <div className="w-16 h-1 rounded-full mb-8" style={{ background: `linear-gradient(90deg, ${teal}, hsl(200, 80%, 60%))` }} />
              <div className="flex flex-wrap gap-2">
                {skillsData.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg cursor-default"
                    style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, color: lightText }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    whileHover={{
                      y: -4,
                      scale: 1.08,
                      borderColor: teal,
                      color: teal,
                      boxShadow: `0 0 20px -5px hsl(172, 66%, 50%, 0.3)`,
                      transition: { duration: 0.12 },
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              <div className="mt-8 pt-6" style={{ borderTop: `1px solid ${borderColor}` }}>
                <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: lightText }}>
                  Neem <span className="text-gradient">Contact Op</span>
                </h2>
                <div className="w-16 h-1 rounded-full mb-6" style={{ background: `linear-gradient(90deg, ${teal}, hsl(200, 80%, 60%))` }} />
                <div className="flex gap-2">
                  <motion.a
                    href="mailto:royvanheeswijk.r@gmail.com"
                    aria-label="Email"
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, color: mutedText }}
                    whileHover={{ scale: 1.1, borderColor: teal, color: teal }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEnvelope size={16} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/roy-van-heeswijk-34919135b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, color: mutedText }}
                    whileHover={{ scale: 1.1, borderColor: teal, color: teal }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTEN ===== */}
      <section id="projects" className="py-24 relative">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: lightText }}>
              Uitgelichte <span className="text-gradient">Projecten</span>
            </h2>
            <div className="w-16 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${teal}, hsl(200, 80%, 60%))` }} />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projectsData.map((project, i) => (
              <motion.div
                key={project.id}
                className="group rounded-2xl overflow-hidden transition-shadow duration-300"
                style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}
                variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                transition={{ duration: 0.6 }}
                whileHover={{
                  borderColor: teal30,
                  boxShadow: `0 0 30px -10px hsl(172, 66%, 50%, 0.15)`,
                }}
              >
                <Link href={project.live || "#"}>
                  <div className="relative h-40 md:h-48 w-full overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsl(220, 18%, 7%) 0%, transparent 60%)' }} />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle at 50% 50%, hsl(172, 66%, 50%, 0.08), transparent 70%)` }}
                    />
                  </div>
                </Link>
                <div className="p-5">
                  <Link href={project.live || "#"}>
                    <h3
                      className="text-lg font-semibold mb-2 transition-colors duration-200 cursor-pointer"
                      style={{ color: lightText }}
                      onMouseEnter={(e) => e.currentTarget.style.color = teal}
                      onMouseLeave={(e) => e.currentTarget.style.color = lightText}
                    >
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: mutedText }}>{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-0.5 text-xs font-medium rounded-full" style={{ backgroundColor: teal10, color: teal, border: `1px solid ${teal20}` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-5 pt-3" style={{ borderTop: `1px solid ${borderColor}` }}>
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium"
                        style={{ color: mutedText }}
                        whileHover={{ x: 3, color: teal }}
                        transition={{ duration: 0.15 }}
                      >
                        <FaGithub size={15} /> GitHub
                      </motion.a>
                    )}
                    {project.live && (
                      <Link href={project.live}>
                        <motion.span
                          className="flex items-center gap-1.5 text-sm font-medium cursor-pointer"
                          style={{ color: mutedText }}
                          whileHover={{ x: 3, color: teal }}
                          transition={{ duration: 0.15 }}
                        >
                          <FaExternalLinkAlt size={13} /> Live Demo
                        </motion.span>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: lightText }}>
              Neem <span className="text-gradient">Contact Op</span>
            </h2>
            <div className="w-16 h-1 rounded-full mx-auto mb-8" style={{ background: `linear-gradient(90deg, ${teal}, hsl(200, 80%, 60%))` }} />
            <p className="text-base leading-relaxed mb-10" style={{ color: mutedText }}>
              Wil je contact met me opnemen? Ik sta open voor nieuwe uitdagingen en interessante projecten.
              Of je nu een vraag hebt of wilt samenwerken, ik hoor graag van je!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05, boxShadow: `0 0 30px -5px hsl(172, 66%, 50%, 0.4)` }} whileTap={{ scale: 0.97 }} className="rounded-lg">
                <Link
                  href="mailto:royvanheeswijk.r@gmail.com"
                  className="px-7 py-3 text-sm font-semibold rounded-lg inline-flex items-center gap-2"
                  style={{ backgroundColor: teal, color: 'hsl(220, 20%, 4%)' }}
                >
                  <FaEnvelope /> E-mail Sturen
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="rounded-lg">
                <a
                  href="https://www.linkedin.com/in/roy-van-heeswijk-34919135b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 text-sm font-semibold rounded-lg inline-flex items-center gap-2 transition-all duration-300"
                  style={{ color: mutedText, border: `1px solid ${borderColor}` }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = teal30; e.currentTarget.style.color = lightText; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = borderColor; e.currentTarget.style.color = mutedText; }}
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
