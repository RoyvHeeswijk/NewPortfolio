export interface ProjectItem {
  id: number;
  title: string;
  role: string;
  description: string;
  summary?: string;
  highlights?: string[];
  image: string;
  tags: string[];
  github?: string;
  live: string;
  liveDemo?: string;
  logoImage?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: 'UI Foundry',
    role: 'UX/UI & Front-end',
    description: 'Webapp om website-onderdelen (knoppen, formulieren, stijlen) op één plek te bekijken, aanpassen en testen.',
    summary:
      'Een online werkplaats voor UI: pas kleur, spacing of stijl aan en zie meteen hoe elke knop, elk formulier en elke kaart meeverandert. Ideaal om te testen vóór je iets in een echt project zet.',
    highlights: [
      '21 UI-onderdelen en 8 patroonvoorbeelden in één bibliotheek',
      'Live stijleditor: één wijziging, direct zichtbaar overal',
      'Playground en page builder om code te kopiëren en pagina\'s te testen',
    ],
    image: '/UIFoundry.png',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    live: '/UIFoundry',
    liveDemo: 'https://temporary-quick-delta-5hc7rpj.vercel.app/',
    logoImage: true,
  },
  {
    id: 2,
    title: 'FORGE',
    role: 'Front-end',
    description: 'Interactieve e-commerce webshop waarin ik productnavigatie, filtering en responsive frontend combineerde.',
    summary:
      'Een fictieve outdoor-webshop, volledig gebouwd in HTML, CSS en JavaScript. Geen frameworks: wel filteren, zoeken, winkelwagen en een shop die aanvoelt als een echte store.',
    highlights: [
      'Home, collectie, productdetail en over ons in één shop-systeem',
      'Filter op categorie plus zoeken op trefwoord, zonder page reload',
      'Slide-in winkelwagen met localStorage tussen pagina\'s',
    ],
    image: '/Forge.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/RoyvHeeswijk/Forge',
    live: '/Forge',
    liveDemo: 'https://forge-eight-nu.vercel.app',
  },
  {
    id: 3,
    title: 'SalesFlow',
    role: 'UI & Front-end',
    description: 'Bedrijfswebsite voor een fictief adviesbureau, opgezet met duidelijke dienstenstructuur en herbruikbare componenten.',
    summary:
      'Website voor een fictief sales adviesbureau. Duidelijke diensten, sterke homepage en een contactflow die vertrouwen moet wekken bij potentiële klanten.',
    highlights: [
      'Meerdere pagina\'s met een logische content-hiërarchie',
      'Herbruikbare componenten voor snelle, consistente pagina\'s',
      'Zakelijke uitstraling die past bij een adviesbureau',
    ],
    image: '/SalesFlow.svg',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/RoyvHeeswijk/SalesFlow',
    live: '/SalesFlow',
    liveDemo: 'https://sales-flow-dun.vercel.app',
    logoImage: true,
  },
  {
    id: 4,
    title: 'GymTrack',
    role: 'UX/UI & Front-end',
    description: 'Fitnessapp voor krachtsporters, ontworpen rond snelle workout-flows en gebouwd als responsive webapp.',
    summary:
      'Mobiel-first fitnessapp voor krachtsporters. Supabase voor accounts en data, maar de focus ligt op snel loggen in de gym: schema\'s volgen, progressie zien, niet nadenken over de app.',
    highlights: [
      'Workout logging en schema\'s in één snelle flow',
      'Dashboard met grafieken, PR-detectie en trainingshistorie',
      '3D-spier-heatmap om belasting visueel te maken',
    ],
    image: '/GymTrack.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/RoyvHeeswijk/GymTrack',
    live: '/GymTrack',
    liveDemo: 'https://gym-track-bice.vercel.app/',
  },
];
