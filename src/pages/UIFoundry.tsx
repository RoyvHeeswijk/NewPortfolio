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
            metaDescription="UI Foundry is een webapp waarmee je website-onderdelen op één plek bekijkt, aanpast en testet — knoppen, formulieren, kleuren en stijlen."
            pageTitle="UI Foundry"
            summary="Een online werkplaats voor website-onderdelen: knoppen, formulieren en stijlen op één plek bekijken, aanpassen en testen."
            role="UX/UI Designer & Front-end Developer"
            intro={
                <>
                    <p>
                        <strong className="text-foreground">Wat is het?</strong> UI Foundry is een webapp voor designers
                        en developers die aan een website of app werken. In plaats van losse screenshots of losse code,
                        zie je hier al je bouwstenen bij elkaar: knoppen, invoervelden, kaarten, navigatie, enzovoort.
                    </p>
                    <p>
                        Je kunt bijvoorbeeld de hoofdkleur of afgeronde hoeken aanpassen en meteen zien hoe álle
                        onderdelen meeveranderen. Ook kun je code kopiëren en pagina&apos;s in elkaar klikken om te
                        testen hoe iets eruitziet voordat je het in een echt project gebruikt.
                    </p>
                </>
            }
            projectImage="/UIFoundry.png"
            imageCaption="Projectlogo UI Foundry"
            technologies={technologies}
            liveUrl="https://temporary-quick-delta-5hc7rpj.vercel.app/"
        >
            <ProjectContentSection number="01" title="Het project">
                <p>
                    Ik bouwde UI Foundry als volwaardige webapp met onder andere:
                </p>
                <ul>
                    <li><strong>Componentenbibliotheek</strong> — alle knoppen, formulieren en andere UI-onderdelen overzichtelijk op één plek</li>
                    <li><strong>Stijleditor</strong> — kleuren, lettertypes en spacing aanpassen en direct het resultaat zien</li>
                    <li><strong>Playground</strong> — een onderdeel kiezen, instellingen wijzigen en de bijbehorende code kopiëren</li>
                    <li><strong>Patroonvoorbeelden</strong> — kant-en-klare combinaties zoals een loginformulier of instellingenpagina</li>
                    <li><strong>Page builder</strong> — zelf een pagina samenstellen uit onderdelen en de code daarvan bekijken</li>
                </ul>
                <p>
                    Alles hangt aan dezelfde databron. Pas je ergens een kleur aan, dan verandert die overal tegelijk.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="02" title="Aanpak & keuzes">
                <ProjectProcess
                    steps={[
                        { title: 'Structuur', description: 'Eerst bepaald welke onderdelen een tool als deze nodig heeft: overzicht, detail, testen en documentatie.' },
                        { title: 'Centrale data', description: 'Alle info over knoppen en formulieren in één databron, zodat het overzicht en de playground altijd kloppen.' },
                        { title: 'Bouwen & testen', description: 'Elke pagina gekoppeld aan live previews en op desktop én mobiel getest.' },
                    ]}
                />
                <ProjectInsight
                    items={[
                        { label: 'Keuze', text: 'Bij elk onderdeel leg ik uit waarvoor je het gebruikt en wanneer je iets anders beter kunt kiezen — niet alleen hóe het eruitziet.' },
                        { label: 'Keuze', text: 'Rustige, overzichtelijke layout met vaste sidebar, vergelijkbaar met tools als Figma of Storybook.' },
                    ]}
                />
            </ProjectContentSection>

            <ProjectContentSection number="03" title="Ontwikkeling">
                <p>
                    Gebouwd met Next.js, TypeScript en Tailwind CSS. De playground en page builder genereren
                    echte React-code die je kunt kopiëren. Stijlwijzigingen worden opgeslagen in de browser,
                    zodat je instellingen bewaard blijven als je terugkomt.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="04" title="Resultaat & geleerd">
                <p>
                    Een werkende app met 21 UI-onderdelen, 8 patroonvoorbeelden, live stijleditor en een
                    score die laat zien hoe consistent alles is.
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
