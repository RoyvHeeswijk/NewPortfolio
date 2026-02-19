"use client"

import ProjectPageLayout from '../components/layout/ProjectPageLayout';

const ForgeProjectPage = () => {
    const pageTitle = "FORGE — Webshop voor Outdoor Gear";
    const metaTitle = "FORGE Webshop | Roy van Heeswijk";
    const metaDescription = "Een interactieve webshop voor FORGE, een fictief bedrijf dat outdoor-uitrusting verkoopt. Ontwikkeld met HTML, CSS en JavaScript. Met winkelwagen, filteren, zoeken en responsive design.";
    const technologies = ["HTML", "CSS", "JavaScript", "Lovable", "Cursor"];

    const githubUrl = "https://github.com/RoyvHeeswijk/Forge";
    const liveUrl = "https://forge-eight-nu.vercel.app";

    const description = (
        <>
            <p className="mb-6">
                FORGE is een interactieve webshop die ik heb ontwikkeld voor een fictief bedrijf dat outdoor-uitrusting verkoopt,
                zoals messen, zaklampen, waterflessen en multitools. Het project combineert een modern design met een donker kleurenschema
                en koperen accenten voor een strakke en professionele uitstraling.
            </p>
            <p className="mb-6">
                Het doel was om een volledig functionele e-commerce ervaring te bouwen met aandacht voor gebruiksvriendelijkheid
                en visuele details. De webshop is gebouwd met HTML, CSS en JavaScript, met ondersteuning van tools zoals Lovable en Cursor.
            </p>
            <p className="mb-4">
                Kernfunctionaliteiten:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 pl-4">
                <li><strong>Meerdere pagina&apos;s</strong> — Home, Collectie, Over ons en productdetailpagina&apos;s</li>
                <li><strong>Winkelwagen</strong> — Producten toevoegen, hoeveelheid aanpassen en verwijderen. De winkelwagen blijft bewaard tussen pagina&apos;s</li>
                <li><strong>Filteren & zoeken</strong> — Producten filteren op categorie (messen, zaklampen, flessen, multitools) en zoeken op trefwoord</li>
                <li><strong>Responsive</strong> — Werkt op desktop, tablet en mobiel met een hamburger-menu voor kleinere schermen</li>
                <li><strong>Interactief design</strong> — Hover-effecten, animaties, toast-meldingen en een slide-in winkelwagen</li>
            </ul>
            <p>
                FORGE demonstreert mijn vaardigheden in het bouwen van complete, gebruiksvriendelijke webshops met een moderne en professionele uitstraling.
            </p>
        </>
    );

    return (
        <ProjectPageLayout
            metaTitle={metaTitle}
            metaDescription={metaDescription}
            pageTitle={pageTitle}
            projectImage="/Forge.png"
            description={description}
            technologies={technologies}
            githubUrl={githubUrl}
            liveUrl={liveUrl}
        />
    );
};

export default ForgeProjectPage;
