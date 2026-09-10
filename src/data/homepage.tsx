import type { IconType } from 'react-icons';
import {
  SiJavascript, SiReact, SiNextdotjs, SiVuedotjs, SiNodedotjs, SiThreedotjs,
  SiTypescript, SiShopify, SiPython, SiTailwindcss, SiGithub, SiFigma,
  SiSupabase, SiOpenai, SiHtml5,
} from 'react-icons/si';

function CursorIcon({ size = 16, className, style }: { size?: number | string; className?: string; style?: React.CSSProperties }) {
  const dim = typeof size === 'number' ? size : 16;
  return (
    <svg width={dim} height={dim} viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden>
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2v20M3 7l18 10M21 7L3 17" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export interface SkillEntry {
  name: string;
  icon?: IconType;
  color?: string;
}

export const aboutFacts = [
  { label: 'Leeftijd', value: '21 jaar' },
  { label: 'Opleiding', value: 'ICT & Human Centered Design, Fontys Tilburg' },
  { label: 'Minor', value: 'Psychologie & Technologie' },
  { label: 'Herkomst', value: 'Drunen' },
];

export const profileStatement = [
  'Ik ben nieuwsgierig',
  'naar hoe mensen denken.',
  'En wat ze nodig hebben.',
];

export const profileBody = [
  'Als 21-jarige student ICT & Human Centered Design aan Fontys Tilburg volg ik de minor Psychologie & Technologie. Daarin leer ik hoe gebruikers denken en handelen, zodat ik betere ontwerpkeuzes kan maken. Ik combineer UX/UI met frontend development en werk graag aan producten die echt gebruikt worden.',
  'In mijn projecten laat ik zien hoe ik nadenk over gebruikers, interfaces en techniek. Niet alleen het eindresultaat, maar ook mijn aanpak, keuzes en wat ik ervan leer.',
];

export const profileStage = {
  company: 'Indicia E-commerce',
  role: 'Stagiair UX/UI & Shopify',
  period: 'Sept 2025 – Feb 2026',
  intro:
    'Bij Indicia E-commerce ontwierp en bouwde ik Shopify-webshops voor verschillende klanten, van concept tot live oplevering.',
  highlights: [
    'Shopify-thema\'s en shop-ervaringen uitgewerkt in een agency-omgeving.',
    'Meerdere klantwebsites opgeleverd met oog voor merk, conversie en onderhoud.',
  ] as string[],
  featuredWork: {
    label: 'Bubbels & Bo',
    href: 'https://bubblesandbo.nl/',
  },
};

export const heroRoles = ['UI Designer', 'Front End Developer'];

export const heroIntro =
  'Ik ontwerp en bouw digitale interfaces waarbij UX, design en frontend samenkomen. Van schets tot werkend product: ik denk mee over gebruikers, structuur en techniek.';

export const skills: SkillEntry[] = [
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#14110E' },
  { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'HTML & CSS', icon: SiHtml5, color: '#E34F26' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Supabase', icon: SiSupabase, color: '#3FCF8E' },
  { name: 'Three.js', icon: SiThreedotjs, color: '#14110E' },
  { name: 'OpenAI', icon: SiOpenai, color: '#14110E' },
  { name: 'GitHub', icon: SiGithub, color: '#14110E' },
  { name: 'Cursor', icon: CursorIcon, color: '#14110E' },
  { name: 'Liquid', icon: SiShopify, color: '#7AB55C' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
];
