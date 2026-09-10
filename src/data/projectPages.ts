import type { ProjectPageData } from '@/types/projectPage';
import { projectsData } from './projects';

const forge = projectsData.find((p) => p.live === '/Forge')!;
const uiFoundry = projectsData.find((p) => p.live === '/UIFoundry')!;
const salesFlow = projectsData.find((p) => p.live === '/SalesFlow')!;
const gymTrack = projectsData.find((p) => p.live === '/GymTrack')!;

export const forgePage: ProjectPageData = {
  metaTitle: 'FORGE Webshop | Roy van Heeswijk',
  metaDescription: 'FORGE is een interactieve e-commerce webshop voor outdoor gear met filteren, zoeken en winkelwagen.',
  pageTitle: 'FORGE',
  summary: forge.summary!,
  body: [
    'FORGE is een webshop voor een fictief outdoor-merk. Ik bouwde de volledige shop-ervaring in HTML, CSS en JavaScript: producten bekijken, filteren, zoeken en items toevoegen aan een winkelwagen.',
    'Het project draait om interactie en overzicht in een productcatalogus. Ik wilde laten zien dat ik een complete frontend kan bouwen zonder framework, met aandacht voor responsive gedrag en feedback aan de gebruiker.',
  ],
  highlights: forge.highlights!,
  role: 'Front-end Developer',
  technologies: forge.tags,
  githubUrl: forge.github,
  liveUrl: forge.liveDemo,
  projectImage: '/Forge.png',
  imageCaption: 'Shop-interface met productoverzicht',
  sections: [
    {
      number: '01',
      title: 'Het project',
      paragraphs: [
        'Ik bouwde meerdere pagina\'s (home, collectie, productdetail, over ons) en koppelde die aan één winkelwagen-systeem. Filteren op categorie, zoeken op trefwoord en hoeveelheid aanpassen werken zonder page reload.',
      ],
    },
    {
      number: '02',
      title: 'Aanpak',
      steps: [
        { title: 'Concept & structuur', description: 'Eerst bepaald welke pagina\'s en shop-acties nodig waren: browsen, filteren, product bekijken, winkelwagen.' },
        { title: 'Visueel ontwerp', description: 'Donker kleurenschema met koperen accenten gekozen passend bij outdoor gear.' },
        { title: 'Bouwen', description: 'HTML-structuur, CSS-layout en JavaScript-interacties stap voor stap gekoppeld.' },
        { title: 'Responsive testen', description: 'Layout en navigatie getest op mobiel, inclusief hamburger-menu en touch-vriendelijke knoppen.' },
      ],
    },
    {
      number: '03',
      title: 'Ontwerp & interactie',
      choices: [
        { label: 'Probleem', text: 'In een webshop met veel producten moet je snel kunnen filteren én zoeken. Alleen categorieknoppen of alleen een zoekbalk is te beperkt.' },
        { label: 'Keuze', text: 'Ik combineerde filters en zoeken, zodat je de catalogus kunt verkleinen op categorie en daarna verder kunt verfijnen met trefwoorden.' },
        { label: 'Keuze', text: 'De winkelwagen opent als slide-in panel in plaats van een aparte pagina, zodat je context behoudt terwijl je verder shopt.' },
      ],
    },
    {
      number: '04',
      title: 'Development',
      paragraphs: [
        'Alles draait op vanilla JavaScript: DOM-manipulatie voor filters, zoekresultaten, winkelwagen-state en toast-meldingen. CSS zorgt voor hover-states, animaties en responsive breakpoints zonder extern framework.',
        'De winkelwagen blijft bewaard tussen pagina\'s via localStorage, zodat je niet opnieuw begint als je een product bekijkt en teruggaat naar de collectie.',
      ],
    },
    {
      number: '05',
      title: 'Geleerd',
      bullets: [
        'Zonder component-structuur wordt JavaScript snel onoverzichtelijk. Ik heb functies en DOM-updates later bewuster gegroepeerd per feature (filter, cart, search).',
        'Kleine feedback, zoals een toast bij "toegevoegd aan winkelwagen", maakt een shop direct duidelijker. Dat kost weinig code maar veel voor de ervaring.',
      ],
    },
  ],
};

export const uiFoundryPage: ProjectPageData = {
  metaTitle: 'UI Foundry | Roy van Heeswijk',
  metaDescription: 'UI Foundry is een webapp waarmee je website-onderdelen op één plek bekijkt, aanpast en testet: knoppen, formulieren, kleuren en stijlen.',
  pageTitle: 'UI Foundry',
  summary: uiFoundry.summary!,
  body: [
    'UI Foundry is een werkende webapp waarmee je componenten, design tokens, patterns en toegankelijkheid op één plek kunt beheren. Ik bouwde het als een product dat laat zien hoe ik nadenk over interface-structuur, herbruikbaarheid en documentatie.',
    'Het doel was niet een statische showcase, maar een tool waarin alles echt werkt: live theme editing, een playground met gegenereerde code, en health checks op basis van echte componentdata.',
  ],
  highlights: uiFoundry.highlights!,
  role: 'UX/UI Designer & Front-end Developer',
  technologies: uiFoundry.tags,
  liveUrl: uiFoundry.liveDemo,
  projectImage: '/UIFoundry.png',
  imageCaption: 'Projectlogo UI Foundry',
  sections: [
    {
      number: '01',
      title: 'Het project',
      paragraphs: [
        'Ik bouwde UI Foundry als design-system platform met een dashboard, component library, playground, token editor, pattern library, accessibility lab en page builder. Alle onderdelen delen dezelfde componentdefinities, zodat wijzigingen direct door de hele app lopen.',
      ],
    },
    {
      number: '02',
      title: 'Aanpak',
      steps: [
        { title: 'Structuur bepalen', description: 'Eerst de navigatie, pagina-indeling en welke onderdelen een design system nodig heeft vastgelegd.' },
        { title: 'Componentdata centraal zetten', description: 'Alle componentinfo in één databron gezet, zodat overview, detail, playground en health score dezelfde bron gebruiken.' },
        { title: 'Bouwen & koppelen', description: 'Pagina voor pagina gebouwd en direct gekoppeld aan tokens, localStorage en live previews.' },
        { title: 'Testen & aanscherpen', description: 'Flows getest op desktop en mobiel, en interacties aangepast waar iets onduidelijk of te zwaar voelde.' },
      ],
    },
    {
      number: '03',
      title: 'Ontwerp',
      choices: [
        { label: 'Probleem', text: 'Component libraries laten vaak zien hóe iets eruitziet, maar niet waarom een component bestaat of wanneer je het wel/niet gebruikt.' },
        { label: 'Keuze', text: 'Ik voegde bij elk component uitleg toe met when to use, when not to use en het UX-probleem dat het oplost.' },
        { label: 'Keuze', text: 'Ik koos voor een rustige developer-tool stijl met veel witruimte en een vaste sidebar, zodat je snel kunt scannen zonder visuele ruis.' },
      ],
    },
    {
      number: '04',
      title: 'Development',
      paragraphs: [
        'Ik bouwde de app in Next.js met TypeScript en Tailwind CSS. Componentdefinities sturen de playground, code-export en accessibility checks. Theme-wijzigingen gaan via design tokens en worden opgeslagen in localStorage.',
        'De page builder en playground genereren echte React-code op basis van gekozen properties. Copy-to-clipboard en responsive previews zijn onderdeel van de workflow, niet alleen decoratie.',
      ],
    },
    {
      number: '05',
      title: 'Resultaat',
      paragraphs: [
        'UI Foundry is een volledig werkende V1 met 21 componenten, 8 patterns, live theme editing en een design system health score. Het laat zien dat ik een complex idee kan structureren en omzetten naar een consistent, bruikbaar product.',
      ],
    },
    {
      number: '06',
      title: 'Geleerd',
      bullets: [
        'Losse pagina\'s leiden snel tot dubbele data. Eén componentdefinitie maakt het product consistenter en makkelijker uit te breiden.',
        'Documentatie hoort niet achteraf. UX-uitleg naast de preview maakt duidelijk dat design systems meer zijn dan visuele varianten.',
      ],
    },
  ],
};

export const salesFlowPage: ProjectPageData = {
  metaTitle: 'SalesFlow | Roy van Heeswijk',
  metaDescription: 'SalesFlow is een fictieve bedrijfswebsite voor een e-commerce adviesbureau, gebouwd met Next.js en React.',
  pageTitle: 'SalesFlow',
  summary: salesFlow.summary!,
  body: [
    'SalesFlow is de website van een fictief online sales adviesbureau. Ik bouwde een professionele bedrijfsomgeving met pagina\'s voor diensten, over ons, prijzen en contact.',
    'Het project liet me oefenen met een zakelijke tone-of-voice in layout en contentstructuur, en met het opzetten van een Next.js-site in herbruikbare React-componenten.',
  ],
  highlights: salesFlow.highlights!,
  role: 'Front-end Developer & UI-design',
  technologies: salesFlow.tags,
  githubUrl: salesFlow.github,
  liveUrl: salesFlow.liveDemo,
  projectImage: '/SalesFlow.svg',
  imageCaption: 'Branding en logo SalesFlow',
  sections: [
    {
      number: '01',
      title: 'Het project',
      paragraphs: [
        'Ik bouwde een meerpagina-website met duidelijke diensten-secties, team/over-ons content en een contactflow. De site is volledig responsive en bedoeld om vertrouwen te wekken bij potentiële klanten.',
      ],
    },
    {
      number: '02',
      title: 'Aanpak',
      steps: [
        { title: 'Concept bepalen', description: 'Doelgroep en diensten van het fictieve bureau uitgewerkt: e-commerce advies voor ondernemers.' },
        { title: 'Layout & hiërarchie', description: 'Paginastructuur en contentvolgorde bepaald: eerst waarde, dan diensten, dan contact.' },
        { title: 'Bouwen in Next.js', description: 'Componenten opgezet voor navigatie, secties en herhalende contentblokken.' },
        { title: 'Responsive & SEO', description: 'Breakpoints getest en metadata toegevoegd voor basis-zoekmachine-optimalisatie.' },
      ],
    },
    {
      number: '03',
      title: 'Ontwerp',
      choices: [
        { label: 'Probleem', text: 'Bij een adviesbureau moet binnen enkele seconden duidelijk zijn wat je aanbiedt en voor wie. Te veel tekst of onduidelijke navigatie werkt tegen.' },
        { label: 'Keuze', text: 'Ik zette diensten direct prominent op de homepage en in het menu, zodat bezoekers niet hoeven te zoeken naar wat SalesFlow doet.' },
        { label: 'Keuze', text: 'Ik hield het kleurenpalet en typografie consistent over alle pagina\'s, zodat het voelt als één merk en niet als losse onderdelen.' },
      ],
    },
    {
      number: '04',
      title: 'Development',
      paragraphs: [
        'De site draait op Next.js met TypeScript en Tailwind CSS. Ik werkte met herbruikbare componenten voor navigatie, knoppen en content-secties, zodat nieuwe pagina\'s dezelfde opbouw volgen.',
        'Client- en server-componenten zette ik in waar het paste: statische content en layout server-side, interactieve onderdelen client-side.',
      ],
    },
    {
      number: '05',
      title: 'Geleerd',
      bullets: [
        'Bij een bedrijfswebsite is de volgorde van informatie belangrijker dan extra animaties. Duidelijke secties werkten beter dan een drukke homepage.',
        'Herbruikbare componenten betaalden zich snel terug toen ik meerdere pagina\'s moest bijhouden met dezelfde stijl.',
      ],
    },
  ],
};

export const gymTrackPage: ProjectPageData = {
  metaTitle: 'GymTrack | Roy van Heeswijk',
  metaDescription: 'GymTrack is een mobiele fitnessapp voor krachtsporters met workout tracking, spier-visualisatie en AI-ondersteuning.',
  pageTitle: 'GymTrack',
  summary: gymTrack.summary!,
  body: [
    'GymTrack is een mobiele fitnessapp waarmee krachtsporters trainingen kunnen plannen, bijhouden en analyseren. Ik richtte het product op gebruikers die in de gym snel sets willen loggen zonder veel te hoeven zoeken of typen.',
    'Ik ontwierp en bouwde de interface als responsive React-app met Supabase voor accounts en data. AI-ondersteuning helpt bij het maken van schema\'s, maar de kern blijft de workout-ervaring zelf.',
  ],
  highlights: gymTrack.highlights!,
  role: 'UX/UI Designer & Front-end Developer',
  technologies: [...gymTrack.tags, 'Recharts', 'Three.js'],
  githubUrl: gymTrack.github,
  liveUrl: gymTrack.liveDemo,
  projectPreviewImage: '/GymTrack.png',
  imageCaption: 'Login-scherm mobiele interface',
  sections: [
    {
      number: '01',
      title: 'Het project',
      paragraphs: [
        'Ik bouwde GymTrack als mobiel-first webapp met een schema-architect, workout coach, progressie-analyse, dashboard en trainingshistorie. De 3D-spier-heatmap maakt zichtbaar welke spiergroepen belast worden, en grafieken tonen progressie over tijd.',
      ],
    },
    {
      number: '02',
      title: 'Aanpak',
      steps: [
        { title: 'Probleem scherp krijgen', description: 'Eerst bepaald welke stappen tijdens het trainen het meest tijd kosten: navigeren, invoeren en terugvinden van eerdere prestaties.' },
        { title: 'Flows schetsen', description: 'De belangrijkste schermen uitgewerkt: inloggen, schema bekijken, workout loggen en resultaten terugzien.' },
        { title: 'Bouwen', description: 'Interface opgebouwd in React met herbruikbare componenten, gekoppeld aan Supabase voor auth en data.' },
        { title: 'Testen op mobiel', description: 'Flows op telefoonformaat getest en knoppen, navigatie en invoervelden aangepast waar het te veel stappen vroeg.' },
      ],
    },
    {
      number: '03',
      title: 'Ontwerp',
      choices: [
        { label: 'Probleem', text: 'Tijdens een training wil je niet veel scrollen of lange formulieren invullen. Elke extra stap voelt storend als je tussen sets zit.' },
        { label: 'Keuze', text: 'Ik koos voor een mobiel-first layout met een vaste bottom navigation, zodat de belangrijkste acties altijd bereikbaar blijven.' },
        { label: 'Keuze', text: 'Ik gebruikte een 3D-spier-heatmap om spierbelasting visueel te maken. Zo hoef je niet alles uit een lijst te halen om te snappen wat je traint.' },
      ],
    },
    {
      number: '04',
      title: 'Development',
      paragraphs: [
        'Ik bouwde de app met React en TypeScript. Supabase regelt authenticatie en opslag van trainingen. Recharts gebruik ik voor progressiegrafieken, Three.js voor de spier-heatmap.',
        'State en data zijn gekoppeld aan concrete schermen: wat je logt tijdens een workout komt direct terug in historie, PR-detectie en trendanalyse.',
      ],
    },
    {
      number: '05',
      title: 'Resultaat',
      paragraphs: [
        'GymTrack is een werkende app met login, schema\'s, workout logging, dashboard en historie. De interface is gebouwd voor gebruik op mobiel, met visuele feedback via heatmap en grafieken in plaats van alleen tabellen.',
      ],
    },
    {
      number: '06',
      title: 'Geleerd',
      bullets: [
        'Ik merkte dat ik te snel features toevoegde zonder eerst de workout-flow strak te zetten. Door eerst de kernflow te verbeteren, werd de rest van de app logischer.',
        'Visualisaties zoals de heatmap zijn alleen nuttig als ze snel te begrijpen zijn. Ik heb moeten schrappen en vereenvoudigen tot het echt hielp.',
      ],
    },
  ],
};

export const threeJsPage: ProjectPageData = {
  metaTitle: 'THREE.js Project: Sphere & Dice',
  metaDescription: 'Een interactief 3D project door Roy van Heeswijk, waarin een roterende sphere en een interactieve dice zijn gemaakt met THREE.js.',
  pageTitle: 'THREE.js: Sphere & Dice',
  summary: 'Twee interactieve 3D-scènes in THREE.js: een roterende sphere en een dobbelsteen die je zelf kunt beïnvloeden.',
  body: [
    'Voor dit project heb ik mijn vaardigheden in THREE.js ingezet om twee interactieve 3D-scènes te creëren: een roterende bol (Sphere) en een dobbelsteen (Dice) die je kunt beïnvloeden.',
    'Het hoofddoel was om dieper in de mogelijkheden van THREE.js te duiken en te experimenteren met 3D-rendering, animaties en gebruikersinteractie in de browser.',
  ],
  highlights: [
    'Roterende 3D-sphere: scene setup, camera, geometrie en materiaal in de praktijk.',
    'Interactieve dobbelsteen met texturen, events en een vleugje physics.',
    'Twee losse scènes om verschillende THREE.js-concepten te verkennen.',
  ],
  role: 'Front-end Developer',
  technologies: ['THREE.js', 'JavaScript', 'HTML5', 'CSS3'],
  githubUrl: 'https://github.com/RoyvHeeswijk',
  liveUrl: 'https://i539880.hera.fontysict.net/portfolio/livewall2/persoonlijk3/index.html',
  projectImage: '/Threejs.png',
  sections: [
    {
      number: '01',
      title: 'Het project',
      paragraphs: [
        'Beide scènes draaien los van elkaar, zodat ik per demo kon focussen op een ander aspect van THREE.js: de sphere op basisanimatie en scene-opbouw, de dice op interactie en complexere materialen.',
      ],
      bullets: [
        'Sphere live demo: i539880.hera.fontysict.net/portfolio/livewall2/persoonlijk3/index.html',
        'Dice live demo: i539880.hera.fontysict.net/portfolio/livewall2/persoonlijk3.2/index.html',
      ],
    },
    {
      number: '02',
      title: 'Aanpak',
      steps: [
        { title: 'Scene opzetten', description: 'Renderer, camera, lights en geometrie per demo apart opgebouwd.' },
        { title: 'Animatie & interactie', description: 'Sphere kreeg een continue rotatie-loop, dice kreeg input events en texture mapping.' },
        { title: 'Testen in browser', description: 'Performance en respons op verschillende schermformaten gecontroleerd.' },
      ],
    },
    {
      number: '03',
      title: 'Geleerd',
      variant: 'learned',
      bullets: [
        'THREE.js vraagt om een heldere scene-structuur voordat je animaties stapelt.',
        'Interactiviteit maakt alles zwaarder. Klein beginnen en per laag uitbreiden werkt het best.',
      ],
    },
  ],
};

export const upendoPage: ProjectPageData = {
  metaTitle: 'Upendo Website Ontwikkeling',
  metaDescription: 'Een groepsproject door Roy van Heeswijk en team voor de ontwikkeling van de Upendo website met Next.js, Tailwind CSS en Storyblok CMS.',
  pageTitle: 'Upendo: Website voor Klant',
  summary: 'Teamproject voor klant UPENDO: een moderne website met Next.js, Tailwind CSS en Storyblok CMS.',
  body: [
    'Voor het bedrijf UPENDO heb ik in teamverband een nieuwe website ontwikkeld. Dit project was gericht op het leveren van een moderne, gebruiksvriendelijke en eenvoudig te beheren online aanwezigheid voor de klant.',
    'Het kernidee was Next.js voor performance en SEO, Tailwind CSS voor design, en Storyblok als headless CMS zodat de klant zelf content kan aanpassen zonder technische kennis.',
  ],
  highlights: [
    'Nieuwe website voor klant UPENDO: modern, responsive en zelf te beheren.',
    'Next.js en Tailwind CSS voor snelle pagina\'s en strak design.',
    'Storyblok CMS zodat de klant content kan aanpassen zonder developer.',
  ],
  role: 'Front-end Developer (teamproject)',
  technologies: ['Next.js', 'JavaScript', 'Tailwind CSS', 'Storyblok CMS', 'GitHub'],
  githubUrl: 'https://github.com/RoyvHeeswijk',
  projectImage: '/Upendo.png',
  sections: [
    {
      number: '01',
      title: 'Het project',
      paragraphs: [
        'We leverden een volledige website voor een externe klant: van structuur en design tot implementatie en koppeling met Storyblok. Het team werkte via Git/GitHub met duidelijke verdeling van taken en regelmatige afstemming.',
      ],
    },
    {
      number: '02',
      title: 'Aanpak',
      steps: [
        { title: 'Klantbehoefte in kaart', description: 'Doelgroep, content en beheerwensen van UPENDO besproken en vertaald naar paginastructuur.' },
        { title: 'Design & componenten', description: 'Herbruikbare UI-componenten ontworpen en gebouwd in Next.js met Tailwind CSS.' },
        { title: 'CMS-koppeling', description: 'Storyblok geïntegreerd zodat content dynamisch en door de klant zelf te beheren is.' },
        { title: 'Oplevering', description: 'Samen getest, feedback verwerkt en website opgeleverd aan de klant.' },
      ],
    },
    {
      number: '03',
      title: 'Mijn rol',
      bullets: [
        'Frontend bouwen met Next.js en Tailwind CSS.',
        'Herbruikbare componenten maken en koppelen aan Storyblok CMS.',
        'Samenwerken via Git/GitHub en meedenken over design en UX.',
      ],
    },
    {
      number: '04',
      title: 'Geleerd',
      bullets: [
        'Voor een echte klant moet scope en oplevering vanaf dag één helder zijn.',
        'Een headless CMS geeft klanten vrijheid zonder dat ze code hoeven te kennen.',
      ],
    },
  ],
};
