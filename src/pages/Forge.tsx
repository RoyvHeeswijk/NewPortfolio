"use client"

import ProjectPageLayout from '../components/layout/ProjectPageLayout';
import ProjectContentSection from '../components/project/ProjectContentSection';
import ProjectProcess from '../components/project/ProjectProcess';
import ProjectInsight from '../components/project/ProjectInsight';

const ForgeProjectPage = () => {
    const technologies = ["HTML", "CSS", "JavaScript"];

    return (
        <ProjectPageLayout
            metaTitle="FORGE Webshop | Roy van Heeswijk"
            metaDescription="FORGE is een interactieve e-commerce webshop voor outdoor gear met filteren, zoeken en winkelwagen."
            pageTitle="FORGE"
            summary="Interactieve e-commerce webshop voor outdoor gear."
            role="Front-end Developer"
            intro={
                <p>
                    FORGE is een fictieve outdoor-webshop die ik volledig in HTML, CSS en JavaScript bouwde:
                    producten bekijken, filteren, zoeken en items toevoegen aan een winkelwagen.
                </p>
            }
            projectImage="/Forge.png"
            imageCaption="Shop-interface met productoverzicht"
            technologies={technologies}
            githubUrl="https://github.com/RoyvHeeswijk/Forge"
            liveUrl="https://forge-eight-nu.vercel.app"
        >
            <ProjectContentSection number="01" title="Het project">
                <p>
                    Ik bouwde pagina&apos;s voor home, collectie, productdetail en over ons, gekoppeld aan één winkelwagen-systeem.
                    Filteren op categorie, zoeken op trefwoord en hoeveelheid aanpassen werken zonder page reload.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="02" title="Aanpak & keuzes">
                <ProjectProcess
                    steps={[
                        { title: 'Structuur', description: 'Pagina\'s en shop-acties bepaald: browsen, filteren, product bekijken, winkelwagen.' },
                        { title: 'Visueel ontwerp', description: 'Donker schema met koperen accenten passend bij outdoor gear.' },
                        { title: 'Bouwen & testen', description: 'HTML, CSS en JavaScript gekoppeld; responsive getest inclusief hamburger-menu.' },
                    ]}
                />
                <ProjectInsight
                    items={[
                        { label: 'Keuze', text: 'Filters én zoeken gecombineerd, zodat je de catalogus kunt verkleinen op categorie en trefwoord.' },
                        { label: 'Keuze', text: 'Winkelwagen als slide-in panel, zodat je context behoudt terwijl je verder shopt.' },
                    ]}
                />
            </ProjectContentSection>

            <ProjectContentSection number="03" title="Ontwikkeling">
                <p>
                    Vanilla JavaScript voor filters, zoekresultaten, cart-state en toast-meldingen. CSS voor hover-states,
                    animaties en responsive breakpoints. Winkelwagen blijft bewaard via localStorage tussen pagina&apos;s.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="04" title="Resultaat & geleerd">
                <p>
                    Een volledig werkende webshop met winkelwagen, filteren, zoeken en responsive layout.
                </p>
                <ul>
                    <li>Zonder component-structuur wordt JavaScript snel onoverzichtelijk; functies later bewuster gegroepeerd per feature.</li>
                    <li>Kleine feedback, zoals een toast bij &quot;toegevoegd aan winkelwagen&quot;, maakt veel verschil voor de ervaring.</li>
                </ul>
            </ProjectContentSection>
        </ProjectPageLayout>
    );
};

export default ForgeProjectPage;
