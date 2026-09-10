"use client"

import ProjectPageLayout from '../components/layout/ProjectPageLayout';
import ProjectContentSection from '../components/project/ProjectContentSection';
import ProjectProcess from '../components/project/ProjectProcess';
import ProjectInsight from '../components/project/ProjectInsight';

const UIFoundryProjectPage = () => {
    const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

    return (
        <ProjectPageLayout
            metaTitle="UI Foundry | Roy van Heeswijk"
            metaDescription="UI Foundry is een interactieve design-system tool om componenten, tokens en patterns te beheren, testen en documenteren."
            pageTitle="UI Foundry"
            summary="Design-system tool om componenten, tokens en patterns te beheren en testen."
            role="UX/UI Designer & Front-end Developer"
            intro={
                <p>
                    UI Foundry is een werkende webapp waarin alles echt functioneert: theme editing, playground met code-export,
                    accessibility checks en een page builder. Geen statische showcase.
                </p>
            }
            projectImage="/UIFoundry.png"
            imageCaption="Projectlogo UI Foundry"
            technologies={technologies}
            liveUrl="https://temporary-quick-delta-5hc7rpj.vercel.app/"
        >
            <ProjectContentSection number="01" title="Het project">
                <p>
                    Ik bouwde een platform met dashboard, component library, playground, token editor, patterns,
                    accessibility lab en page builder. Alle onderdelen delen dezelfde componentdefinities, zodat wijzigingen
                    direct door de hele app lopen.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="02" title="Aanpak & keuzes">
                <ProjectProcess
                    steps={[
                        { title: 'Structuur', description: 'Navigatie en pagina-indeling bepaald op basis van wat een design system nodig heeft.' },
                        { title: 'Centrale data', description: 'Componentinfo in één databron voor overview, detail, playground en health score.' },
                        { title: 'Bouwen & testen', description: 'Pagina voor pagina gekoppeld aan tokens en live previews, getest op desktop en mobiel.' },
                    ]}
                />
                <ProjectInsight
                    items={[
                        { label: 'Keuze', text: 'Bij elk component een "Why does this exist?"-sectie: wanneer wel/niet gebruiken en welk UX-probleem het oplost.' },
                        { label: 'Keuze', text: 'Rustige developer-tool stijl met vaste sidebar, zodat je snel kunt scannen zonder visuele ruis.' },
                    ]}
                />
            </ProjectContentSection>

            <ProjectContentSection number="03" title="Ontwikkeling">
                <p>
                    Next.js, TypeScript en Tailwind CSS. Componentdefinities sturen playground, code-export en accessibility checks.
                    Theme-wijzigingen via tokens en localStorage. Page builder en playground genereren echte React-code op basis van properties.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="04" title="Resultaat & geleerd">
                <p>
                    Een werkende V1 met 21 componenten, 8 patterns, live theme editing en design system health score.
                </p>
                <ul>
                    <li>Losse pagina&apos;s leiden snel tot dubbele data; één componentdefinitie maakte alles consistenter.</li>
                    <li>UX-uitleg naast de preview is net zo belangrijk als de visuele varianten zelf.</li>
                </ul>
            </ProjectContentSection>
        </ProjectPageLayout>
    );
};

export default UIFoundryProjectPage;
