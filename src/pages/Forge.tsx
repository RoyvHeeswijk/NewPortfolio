"use client"

import ProjectPageLayout from '../components/layout/ProjectPageLayout';
import ProjectContentSection from '../components/project/ProjectContentSection';
import ProjectProcess from '../components/project/ProjectProcess';
import ProjectInsight from '../components/project/ProjectInsight';

const ForgeProjectPage = () => {
    const pageTitle = "FORGE";
    const metaTitle = "FORGE Webshop | Roy van Heeswijk";
    const metaDescription = "FORGE is een interactieve e-commerce webshop voor outdoor gear met filteren, zoeken en winkelwagen.";
    const technologies = ["HTML", "CSS", "JavaScript"];

    const githubUrl = "https://github.com/RoyvHeeswijk/Forge";
    const liveUrl = "https://forge-eight-nu.vercel.app";

    return (
        <ProjectPageLayout
            metaTitle={metaTitle}
            metaDescription={metaDescription}
            pageTitle={pageTitle}
            summary="Interactieve e-commerce webshop voor outdoor gear."
            role="Front-end Developer"
            intro={
                <>
                    <p>
                        FORGE is een webshop voor een fictief outdoor-merk. Ik bouwde de volledige
                        shop-ervaring in HTML, CSS en JavaScript: producten bekijken, filteren, zoeken
                        en items toevoegen aan een winkelwagen.
                    </p>
                    <p>
                        Het project draait om interactie en overzicht in een productcatalogus. Ik wilde
                        laten zien dat ik een complete frontend kan bouwen zonder framework, met aandacht
                        voor responsive gedrag en feedback aan de gebruiker.
                    </p>
                </>
            }
            projectImage="/Forge.png"
            imageCaption="Shop-interface met productoverzicht"
            technologies={technologies}
            githubUrl={githubUrl}
            liveUrl={liveUrl}
        >
            <ProjectContentSection number="01" title="Het project">
                <p>
                    Ik bouwde meerdere pagina&apos;s (home, collectie, productdetail, over ons) en koppelde
                    die aan één winkelwagen-systeem. Filteren op categorie, zoeken op trefwoord en
                    hoeveelheid aanpassen werken zonder page reload.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="02" title="Mijn aanpak" delay={0.03}>
                <ProjectProcess
                    steps={[
                        {
                            title: 'Concept & structuur',
                            description: 'Eerst bepaald welke pagina\'s en shop-acties nodig waren: browsen, filteren, product bekijken, winkelwagen.',
                        },
                        {
                            title: 'Visueel ontwerp',
                            description: 'Donker kleurenschema met koperen accenten gekozen passend bij outdoor/outdoor gear.',
                        },
                        {
                            title: 'Bouwen',
                            description: 'HTML-structuur, CSS-layout en JavaScript-interacties stap voor stap gekoppeld.',
                        },
                        {
                            title: 'Responsive testen',
                            description: 'Layout en navigatie getest op mobiel, inclusief hamburger-menu en touch-vriendelijke knoppen.',
                        },
                    ]}
                />
            </ProjectContentSection>

            <ProjectContentSection number="03" title="Ontwerp & interactie" delay={0.06}>
                <ProjectInsight
                    items={[
                        {
                            label: 'Probleem',
                            text: 'In een webshop met veel producten moet je snel kunnen filteren én zoeken. Alleen categorieknoppen of alleen een zoekbalk is te beperkt.',
                        },
                        {
                            label: 'Keuze',
                            text: 'Ik combineerde filters en zoeken, zodat je de catalogus kunt verkleinen op categorie en daarna verder kunt verfijnen met trefwoorden.',
                        },
                        {
                            label: 'Keuze',
                            text: 'De winkelwagen opent als slide-in panel in plaats van een aparte pagina, zodat je context behoudt terwijl je verder shopt.',
                        },
                    ]}
                />
            </ProjectContentSection>

            <ProjectContentSection number="04" title="Development" delay={0.09}>
                <p>
                    Alles draait op vanilla JavaScript: DOM-manipulatie voor filters, zoekresultaten,
                    winkelwagen-state en toast-meldingen. CSS zorgt voor hover-states, animaties en
                    responsive breakpoints zonder extern framework.
                </p>
                <p>
                    De winkelwagen blijft bewaard tussen pagina&apos;s via localStorage, zodat je niet
                    opnieuw begint als je een product bekijkt en teruggaat naar de collectie.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="05" title="Wat ik heb geleerd" delay={0.12}>
                <ul>
                    <li>Zonder component-structuur wordt JavaScript snel onoverzichtelijk. Ik heb functies en DOM-updates later bewuster gegroepeerd per feature (filter, cart, search).</li>
                    <li>Kleine feedback, zoals een toast bij &quot;toegevoegd aan winkelwagen&quot;, maakt een shop direct duidelijker. Dat kost weinig code maar veel voor de ervaring.</li>
                </ul>
            </ProjectContentSection>
        </ProjectPageLayout>
    );
};

export default ForgeProjectPage;
