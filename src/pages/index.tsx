import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import {
  SiJavascript, SiReact, SiNextdotjs, SiVuedotjs, SiNodedotjs, SiThreedotjs,
  SiTypescript, SiShopify, SiPython, SiTailwindcss, SiGithub, SiFigma,
  SiSupabase, SiVite, SiOpenai, SiHtml5, SiShadcnui, SiLucide,
} from 'react-icons/si';
import MaskedText from '../components/ui/MaskedText';
import SectionLabel from '../components/ui/SectionLabel';
import ProjectIndexRow from '../components/ui/ProjectIndexRow';
import PortraitFrame from '../components/ui/PortraitFrame';
import Reveal from '../components/ui/Reveal';

function CursorIcon({ size = 16, className, style }: { size?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden>
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2v20M3 7l18 10M21 7L3 17" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

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
  { id: 1, title: "UI Foundry", description: "Interactieve design-system en frontend playground om componenten, tokens, patterns en accessibility centraal te beheren en testen.", image: "/UIFoundry.png", tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"], live: "/UIFoundry", liveDemo: "https://temporary-quick-delta-5hc7rpj.vercel.app/" },
  { id: 2, title: "FORGE — Webshop", description: "Interactieve webshop voor outdoor gear met winkelwagen, filteren en zoeken.", image: "/Forge.png", tags: ["HTML", "CSS", "JavaScript", "Lovable", "Cursor"], github: "https://github.com/RoyvHeeswijk/Forge", live: "/Forge", liveDemo: "https://forge-eight-nu.vercel.app" },
  { id: 3, title: "SalesFlow", description: "Fictief e-commerce adviesbureau dat bedrijven helpt hun online verkoop te maximaliseren.", image: "/SalesFlow.svg", tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"], github: "https://github.com/RoyvHeeswijk/SalesFlow", live: "/SalesFlow", liveDemo: "https://sales-flow-dun.vercel.app", logoImage: true },
  { id: 4, title: "GymTrack", description: "AI-gedreven workout planner en tracker met 3D-spier-heatmap, schema-architect en progressie-analyse.", image: "/GymTrack.png", tags: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vite"], github: "https://github.com/RoyvHeeswijk/GymTrack", live: "/GymTrack", liveDemo: "https://gym-track-bice.vercel.app/" },
  { id: 5, title: "CineMatch AI", description: "AI-gedreven film aanbevelingsplatform met gepersonaliseerde suggesties.", image: "/video.png", tags: ["Next.js", "React", "AI", "OpenAI API", "Tailwind CSS"], github: "https://github.com/RoyvHeeswijk/CineMatch", live: "/CineMatchpage" },
];

const skillsData = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Three.js", icon: SiThreedotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML & CSS", icon: SiHtml5, color: "#E34F26" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "shadcn/ui", icon: SiShadcnui, color: "#FFFFFF" },
  { name: "Lucide", icon: SiLucide, color: "#F56565" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
  { name: "OpenAI", icon: SiOpenai, color: "#FFFFFF" },
  { name: "Cursor", icon: CursorIcon, color: "#FFFFFF" },
  { name: "Liquid", icon: SiShopify, color: "#7AB55C" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const roles = ["Front End Developer", "UI Designer"];

const aboutFacts = [
  { label: "Leeftijd", value: "21 jaar" },
  { label: "Opleiding", value: "ICT & Human Centered Design — Fontys Tilburg" },
  { label: "Minor", value: "Psychologie & Technologie" },
  { label: "Herkomst", value: "Drunen" },
];

// ── Hooks ──

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = words[wordIndex];
    if (!isDeleting && text === current && current.length > 0) {
      pauseTimeoutRef.current = setTimeout(() => setIsDeleting(true), pause);
      return () => {
        if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = null;
      };
    }
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < current.length) setText(current.slice(0, text.length + 1));
      } else {
        if (text.length > 0) setText(current.slice(0, text.length - 1));
        else { setIsDeleting(false); setWordIndex((prev) => (prev + 1) % words.length); }
      }
    }, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, speed, pause]);

  return text;
}

// ── Page ──

export default function HomePage() {
  const router = useRouter();
  const pathname = router.pathname;
  const typedRole = useTypewriter(roles, 90, 2800);

  useEffect(() => {
    if (pathname !== '/') return;
    const scrollToHash = () => {
      const hash = typeof window !== 'undefined' ? window.location.hash : '';
      if (hash) {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    const timer = setTimeout(scrollToHash, 100);
    window.addEventListener('hashchange', scrollToHash);
    return () => { clearTimeout(timer); window.removeEventListener('hashchange', scrollToHash); };
  }, [pathname]);

  return (
    <>
      <Head>
        <title>Roy van Heeswijk - Front End Developer</title>
        <meta name="description" content="Portfolio van Roy van Heeswijk, een gepassioneerd Front End Developer die moderne en innovatieve weboplossingen creëert." />
      </Head>

      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center pt-28 pb-20">
        <div className="max-w-[1200px] mx-auto px-8 w-full">
          <div className="flex items-end gap-6 md:gap-8 lg:gap-12 xl:gap-16">
            <div className="flex-1 min-w-0">
              <p className="font-mono text-xs uppercase tracking-label text-primary mb-8">
                Portfolio — {typedRole}
                <motion.span
                  className="inline-block w-px h-3 ml-1 bg-primary align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                />
              </p>

              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground mb-8 notranslate" translate="no">
                <span className="block">Roy <span className="text-primary">v</span></span>
                <span className="block">Heeswijk</span>
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-prose mb-10">
                Ik creëer interactieve gebruikersinterfaces en zet designs om in vloeiende webapplicaties. Met AI als hulpmiddel zorg ik voor een soepel en efficiënt proces van idee tot eindresultaat.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <Link href="#projects" className="btn-primary">
                  Mijn Projecten →
                </Link>
                <Link href="#contact" className="font-mono text-xs uppercase tracking-label text-muted-foreground hover:text-primary transition-colors link-underline">
                  Contact
                </Link>
              </div>
            </div>

            <Reveal className="hidden min-[720px]:flex shrink-0 justify-end">
              <PortraitFrame src="/Profiel.jpg" alt="Roy van Heeswijk" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 01 PROFIEL ── */}
      <section id="about-me" className="py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionLabel number="01" label="Profiel" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <div className="space-y-6 text-base leading-relaxed text-muted-foreground max-w-prose">
                <p>
                  Als 21-jarige student ICT & Human Centered Design aan Fontys in Tilburg volg ik op dit moment
                  de minor Psychologie & Technologie. Daarin wil ik meer leren over gebruikers en hun handelingen,
                  zodat ik producten en ontwerpen gericht kan verbeteren. Geboren in Drunen, breng ik mijn passie voor
                  technologie en creativiteit samen in elk project en heb ik mezelf ontwikkeld tot een gedreven
                  front-end developer die graag nieuwe uitdagingen aangaat.
                </p>
                <p>
                  Mijn doel is om mezelf constant uit te dagen en te blijven leren. In mijn portfolio zie je
                  niet alleen mijn werk, maar ook mijn groei als developer. Ik focus me op het creëren van
                  moderne, gebruiksvriendelijke websites die niet alleen mooi zijn, maar ook effectief communiceren.
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={0.1}>
              <dl className="space-y-0">
                {aboutFacts.map((fact, i) => (
                  <div key={fact.label} className={`py-5 ${i > 0 ? 'border-t border-border' : ''}`}>
                    <dt className="font-mono text-[10px] uppercase tracking-label text-primary mb-1">{fact.label}</dt>
                    <dd className="text-sm text-foreground">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 02 EXPERTISE ── */}
      <section id="skills" className="py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionLabel number="02" label="Expertise" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12">
            {skillsData.map((skill, i) => (
              <Reveal key={skill.name} delay={i * 0.03}>
                <div className={`flex items-center gap-3 py-4 ${i >= 3 ? 'border-t border-border' : ''} ${i % 3 !== 0 && i >= 3 ? '' : i >= 3 ? '' : ''}`}>
                  <skill.icon size={16} style={{ color: skill.color }} className="shrink-0" />
                  <span className="font-mono text-xs uppercase tracking-label text-foreground">{skill.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 WERK ── */}
      <section id="projects" className="py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionLabel number="03" label="Werk" />

          <div className="border-t border-border">
            {projectsData.map((project, i) => (
              <ProjectIndexRow key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 CONTACT ── */}
      <section id="contact" className="py-32">
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionLabel number="04" label="Contact" />

          <Reveal>
            <MaskedText
              text="Neem Contact Op"
              as="h2"
              className="font-display text-4xl md:text-6xl text-foreground mb-8"
            />
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-prose mb-12">
              Wil je contact met me opnemen? Ik sta open voor nieuwe uitdagingen en interessante projecten.
              Of je nu een vraag hebt of wilt samenwerken, ik hoor graag van je!
            </p>

            <a
              href="mailto:royvanheeswijk.r@gmail.com"
              className="font-display text-3xl md:text-5xl text-foreground hover:text-primary transition-colors duration-300 block mb-6 link-underline"
            >
              royvanheeswijk.r@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/roy-van-heeswijk-34919135b/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-label text-muted-foreground hover:text-primary transition-colors link-underline inline-flex items-center gap-2"
            >
              <FaLinkedin size={14} /> LinkedIn
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
