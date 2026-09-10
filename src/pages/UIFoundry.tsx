"use client"

import ProjectPageLayout from '../components/layout/ProjectPageLayout';
import ProjectContentSection from '../components/project/ProjectContentSection';
import ProjectProcess from '../components/project/ProjectProcess';
import ProjectInsight from '../components/project/ProjectInsight';

const UIFoundryProjectPage = () => {
    const pageTitle = "UI Foundry";
    const metaTitle = "UI Foundry | Roy van Heeswijk";
    const metaDescription = "UI Foundry is een interactieve design-system tool waarmee componenten, tokens en patterns beheerd, getest en gedocumenteerd worden.";
    const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS"];
    const liveUrl = "https://temporary-quick-delta-5hc7rpj.vercel.app/";

    return (
        <ProjectPageLayout
            metaTitle={metaTitle}
            metaDescription={metaDescription}
            pageTitle={pageTitle}
            summary="Interactieve tool om design systems te beheren, testen en documenteren."
            role="UX/UI Designer & Front-end Developer"
            intro={
                <>
                    <p>
                        UI Foundry is een werkende webapp waarmee je componenten, design tokens, patterns en
                        toegankelijkheid op één plek kunt beheren. Ik bouwde het als een product dat laat zien
                        hoe ik nadenk over interface-structuur, herbruikbaarheid en documentatie.
                    </p>
                    <p>
                        Het doel was niet een statische showcase, maar een tool waarin alles echt werkt: live
                        theme editing, een playground met gegenereerde code, en health checks op basis van
                        echte componentdata.
                    </p>
                </>
            }
            projectImage="/UIFoundry.png"
            imageCaption="Projectlogo UI Foundry"
            technologies={technologies}
            liveUrl={liveUrl}
        >
            <ProjectContentSection number="01" title="Het project">
                <p>
                    Ik bouwde UI Foundry als design-system platform met een dashboard, component library,
                    playground, token editor, pattern library, accessibility lab en page builder. Alle
                    onderdelen delen dezelfde componentdefinities, zodat wijzigingen direct door de hele app
                    lopen.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="02" title="Mijn aanpak" delay={0.03}>
                <ProjectProcess
                    steps={[
                        {
                            title: 'Structuur bepalen',
                            description: 'Eerst de navigatie, pagina-indeling en welke onderdelen een design system nodig heeft vastgelegd.',
                        },
                        {
                            title: 'Componentdata centraal zetten',
                            description: 'Alle componentinfo in één databron gezet, zodat overview, detail, playground en health score dezelfde bron gebruiken.',
                        },
                        {
                            title: 'Bouwen & koppelen',
                            description: 'Pagina voor pagina gebouwd en direct gekoppeld aan tokens, localStorage en live previews.',
                        },
                        {
                            title: 'Testen & aanscherpen',
                            description: 'Flows getest op desktop en mobiel, en interacties aangepast waar iets onduidelijk of te zwaar voelde.',
                        },
                    ]}
                />
            </ProjectContentSection>

            <ProjectContentSection number="03" title="Ontwerp" delay={0.06}>
                <ProjectInsight
                    items={[
                        {
                            label: 'Probleem',
                            text: 'Component libraries laten vaak zien hóe iets eruitziet, maar niet waarom een component bestaat of wanneer je het wel/niet gebruikt.',
                        },
                        {
                            label: 'Keuze',
                            text: 'Ik voegde bij elk component een "Why does this exist?"-sectie toe met when to use, when not to use en het UX-probleem dat het oplost.',
                        },
                        {
                            label: 'Keuze',
                            text: 'Ik koos voor een rustige developer-tool stijl met veel witruimte en een vaste sidebar, zodat je snel kunt scannen zonder visuele ruis.',
                        },
                    ]}
                />
            </ProjectContentSection>

            <ProjectContentSection number="04" title="Development" delay={0.09}>
                <p>
                    Ik bouwde de app in Next.js met TypeScript en Tailwind CSS. Componentdefinities sturen
                    de playground, code-export en accessibility checks. Theme-wijzigingen gaan via design
                    tokens en worden opgeslagen in localStorage, zodat de hele interface direct meeverandert.
                </p>
                <p>
                    De page builder en playground genereren echte React-code op basis van gekozen properties.
                    Copy-to-clipboard en responsive previews zijn onderdeel van de workflow, niet alleen decoratie.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="05" title="Resultaat" delay={0.12}>
                <p>
                    UI Foundry is een volledig werkende V1 met 21 componenten, 8 patterns, live theme editing
                    en een design system health score. Het laat zien dat ik een complex idee kan structureren
                    en omzetten naar een consistent, bruikbaar product.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="06" title="Wat ik heb geleerd" delay={0.15}>
                <ul>
                    <li>Ik merkte dat losse pagina&apos;s snel tot dubbele data leiden. Door alles vanuit één componentdefinitie te laten lopen, werd het product consistenter en makkelijker uit te breiden.</li>
                    <li>Documentatie hoort niet achteraf. Door UX-uitleg direct naast de preview te zetten, werd duidelijk dat design systems meer zijn dan visuele varianten.</li>
                </ul>
            </ProjectContentSection>
        </ProjectPageLayout>
    );
};

export default UIFoundryProjectPage;
