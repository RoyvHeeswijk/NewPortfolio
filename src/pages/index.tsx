import { useState, useEffect, useRef, useCallback, MouseEvent as ReactMouseEvent } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useMotionValue } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import {
  SiJavascript, SiReact, SiNextdotjs, SiVuedotjs, SiNodedotjs, SiThreedotjs,
  SiTypescript, SiShopify, SiPython, SiTailwindcss, SiGithub, SiFigma,
} from 'react-icons/si';

// ── Data ──

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live: string;
  liveDemo?: string;
  logoImage?: boolean;
}

const projectsData: Project[] = [
  { id: 1, title: "FORGE — Webshop", description: "Interactieve webshop voor outdoor gear met winkelwagen, filteren en zoeken.", image: "/Forge.png", tags: ["HTML", "CSS", "JavaScript", "Lovable", "Cursor"], github: "https://github.com/RoyvHeeswijk/Forge", live: "/Forge", liveDemo: "https://forge-eight-nu.vercel.app" },
  { id: 2, title: "SalesFlow", description: "Fictief e-commerce adviesbureau dat bedrijven helpt hun online verkoop te maximaliseren.", image: "/SalesFlow.svg", tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"], github: "https://github.com/RoyvHeeswijk/SalesFlow", live: "/SalesFlow", liveDemo: "https://sales-flow-dun.vercel.app", logoImage: true },
  { id: 3, title: "Charla — Spraak-naar-Tekst", description: "Real-time spraak-naar-tekst applicatie, mogelijk gemaakt door Next.js en OpenAI API.", image: "/Charla.png", tags: ["Next.js", "React", "TypeScript", "OpenAI API", "Tailwind CSS"], github: "https://github.com/RoyvHeeswijk", live: "/Charla", liveDemo: "https://persoonlijkproject-saj9.vercel.app/" },
  { id: 4, title: "CineMatch AI", description: "AI-gedreven film aanbevelingsplatform met gepersonaliseerde suggesties.", image: "/video.png", tags: ["Next.js", "React", "AI", "OpenAI API", "Tailwind CSS"], github: "https://github.com/RoyvHeeswijk/CineMatch", live: "/CineMatchpage" },
];

const skillsData = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Three.js", icon: SiThreedotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Liquid", icon: SiShopify, color: "#7AB55C" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
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
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = words[wordIndex];

    // Wacht op pauze voordat we gaan deleten (alleen wanneer het woord volledig getypt is)
    if (!isDeleting && text === current && current.length > 0) {
      pauseTimeoutRef.current = setTimeout(() => setIsDeleting(true), pause);
      return () => {
        if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = null;
      };
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, speed, pause]);

  return text;
}

// ── Scramble Typewriter voor naam (random letters → juiste letter,zelfde tempo) ──

const NAME_TARGET = "Roy v Heeswijk";
const RANDOM_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";

function useScrambleName(speed = 70) {
  const [mounted, setMounted] = useState(false);
  const [revealedLength, setRevealedLength] = useState(0);
  const [randomChar, setRandomChar] = useState('R'); // Vaste waarde voor SSR, wordt overschreven na mount

  useEffect(() => setMounted(true), []);

  // Snel wisselende random letter voor de huidige positie (alleen op client)
  useEffect(() => {
    if (!mounted || revealedLength >= NAME_TARGET.length) return;
    const interval = setInterval(() => {
      setRandomChar(RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)]);
    }, 40);
    return () => clearInterval(interval);
  }, [mounted, revealedLength]);

  // Elke `speed` ms één letter verder (zelfde tempo als role typewriter)
  useEffect(() => {
    if (!mounted || revealedLength >= NAME_TARGET.length) return;
    const timeout = setTimeout(() => setRevealedLength((p) => p + 1), speed);
    return () => clearTimeout(timeout);
  }, [mounted, revealedLength, speed]);

  // Server en eerste client render: vaste naam (voorkomt hydration mismatch)
  if (!mounted) return NAME_TARGET;

  const display =
    revealedLength < NAME_TARGET.length
      ? NAME_TARGET.slice(0, revealedLength) + randomChar
      : NAME_TARGET;

  return display;
}

// ── Animation Variants ──

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const fadeInLeft = { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } };
const fadeInRight = { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } };
const stagger = { animate: { transition: { staggerChildren: 0.08 } } };

const heroFadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 } };
const heroStagger = { animate: { transition: { staggerChildren: 0.06 } } };

// ── Page ──

export default function HomePage() {
  const pathname = usePathname();
  const [heroHovered, setHeroHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glowStrength, setGlowStrength] = useState(0.08);
  const [glowSize, setGlowSize] = useState(600);
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const typedRole = useTypewriter(roles, 90, 2800);
  const typedName = useScrambleName(90);

  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.set(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [scrollProgress]);

  // Scroll naar hash-sectie zodat Over Mij, Projecten, Contact werken (homepage én vanaf projectpagina's)
  useEffect(() => {
    if (pathname !== '/') return;

    const scrollToHash = () => {
      const hash = typeof window !== 'undefined' ? window.location.hash : '';
      if (hash) {
        const id = hash.slice(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    const timer = setTimeout(scrollToHash, 100);
    window.addEventListener('hashchange', scrollToHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, [pathname]);

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
        style={{ scaleX: scrollProgress, background: `linear-gradient(90deg, ${teal}, hsl(200, 80%, 60%))` }}
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
            className="flex flex-col md:flex-row items-center justify-between gap-16"
            initial="initial"
            animate="animate"
            variants={heroStagger}
          >
            <motion.div className="flex-1 text-center md:text-left order-2 md:order-1" variants={heroStagger}>
              <motion.div
                className="text-base md:text-lg font-semibold tracking-[0.2em] uppercase mb-5 h-7"
                style={{ color: teal }}
                variants={heroFadeIn}
                transition={{ duration: 0.5 }}
              >
                {typedRole}
                <motion.span
                  className="inline-block w-[2px] h-5 ml-0.5 align-middle"
                  style={{ backgroundColor: teal }}
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                />
              </motion.div>
              <motion.h1
                className="text-4xl md:text-6xl font-bold leading-tight mb-6 min-h-[3rem] md:min-h-[4.5rem]"
                style={{ color: lightText }}
                variants={heroFadeIn}
                transition={{ duration: 0.5 }}
              >
                {typedName.slice(0, 4)}
                <span className="text-gradient">{typedName.slice(4)}</span>
                {typedName.length < NAME_TARGET.length && (
                  <motion.span
                    className="inline-block w-[3px] h-[0.9em] ml-0.5 align-middle"
                    style={{ backgroundColor: teal }}
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                  />
                )}
              </motion.h1>
              <motion.p
                className="text-base md:text-lg leading-relaxed max-w-lg mb-8"
                style={{ color: mutedText }}
                variants={heroFadeIn}
                transition={{ duration: 0.5 }}
              >
                Ik creëer interactieve gebruikersinterfaces en zet designs om in vloeiende webapplicaties. Met AI als hulpmiddel zorg ik voor een soepel en efficiënt proces van idee tot eindresultaat.
              </motion.p>
              <motion.div
                className="flex flex-row items-center justify-center md:justify-start gap-4"
                variants={heroFadeIn}
                transition={{ duration: 0.5 }}
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
              variants={heroFadeIn}
              transition={{ duration: 0.5 }}
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
                  className="relative w-56 h-56 md:w-72 md:h-72 overflow-hidden"
                  style={{ borderRadius: '1rem', border: `2px solid ${heroHovered ? teal30 : borderColor}`, transition: 'border-color 0.5s' }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image src="/Profiel.png" alt="Roy van Heeswijk" fill sizes="(max-width: 768px) 14rem, 18rem" priority className="object-cover" style={{ borderRadius: '1rem' }} />
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
                  technologie en creativiteit samen in elk project. Geboren in Drunen, heb ik mezelf
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
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-3">
                {skillsData.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-xl cursor-default"
                    style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                      borderColor: teal,
                      boxShadow: `0 0 20px -5px hsl(172, 66%, 50%, 0.3)`,
                      transition: { duration: 0.12 },
                    }}
                  >
                    <skill.icon size={24} style={{ color: skill.color }} />
                    <span className="text-xs font-medium" style={{ color: lightText }}>{skill.name}</span>
                  </motion.div>
                ))}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, i) => (
              <motion.div
                key={project.id}
                className="group rounded-2xl overflow-hidden transition-shadow duration-300 flex flex-col"
                style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}
                initial={i % 2 === 0 ? { opacity: 0, x: -40 } : { opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{
                  borderColor: teal30,
                  boxShadow: `0 0 30px -10px hsl(172, 66%, 50%, 0.15)`,
                }}
              >
                <Link href={project.live || "#"}>
                  <div className={`relative h-40 md:h-48 w-full overflow-hidden flex items-center justify-center ${project.logoImage ? 'p-4' : ''}`} style={project.logoImage ? { backgroundColor: 'hsl(220, 18%, 7%)' } : {}}>
                    <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className={project.logoImage ? 'object-contain object-center p-4 group-hover:scale-105 transition-transform duration-700 ease-out' : 'object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out'} />
                    {!project.logoImage && <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsl(220, 18%, 7%) 0%, transparent 60%)' }} />}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle at 50% 50%, hsl(172, 66%, 50%, 0.08), transparent 70%)` }}
                    />
                  </div>
                </Link>
                <div className="p-5 flex flex-col flex-1">
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
                  <div className="flex items-center gap-5 pt-3 mt-auto" style={{ borderTop: `1px solid ${borderColor}` }}>
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
                    {project.liveDemo && (
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium"
                        style={{ color: mutedText }}
                        whileHover={{ x: 3, color: teal }}
                        transition={{ duration: 0.15 }}
                      >
                        <FaExternalLinkAlt size={13} /> Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: lightText }}>
              Neem <span className="text-gradient">Contact Op</span>
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto mb-10" style={{ background: `linear-gradient(90deg, ${teal}, hsl(200, 80%, 60%))` }} />
            <p className="text-lg md:text-xl leading-relaxed mb-12" style={{ color: mutedText }}>
              Wil je contact met me opnemen? Ik sta open voor nieuwe uitdagingen en interessante projecten.
              Of je nu een vraag hebt of wilt samenwerken, ik hoor graag van je!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <motion.div whileHover={{ scale: 1.05, boxShadow: `0 0 30px -5px hsl(172, 66%, 50%, 0.4)` }} whileTap={{ scale: 0.97 }} className="rounded-lg">
                <Link
                  href="mailto:royvanheeswijk.r@gmail.com"
                  className="px-8 py-3.5 text-base font-semibold rounded-lg inline-flex items-center gap-2.5"
                  style={{ backgroundColor: teal, color: 'hsl(220, 20%, 4%)' }}
                >
                  <FaEnvelope size={16} /> E-mail Sturen
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="rounded-lg">
                <a
                  href="https://www.linkedin.com/in/roy-van-heeswijk-34919135b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 text-base font-semibold rounded-lg inline-flex items-center gap-2.5 transition-all duration-300"
                  style={{ color: mutedText, border: `1px solid ${borderColor}` }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = teal30; e.currentTarget.style.color = lightText; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = borderColor; e.currentTarget.style.color = mutedText; }}
                >
                  <FaLinkedin size={16} /> LinkedIn
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
