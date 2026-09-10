"use client"

import ProjectPageLayout from '../components/layout/ProjectPageLayout';
import ProjectContentSection from '../components/project/ProjectContentSection';
import ProjectProcess from '../components/project/ProjectProcess';
import ProjectInsight from '../components/project/ProjectInsight';

const GymTrackProjectPage = () => {
    const pageTitle = "GymTrack";
    const metaTitle = "GymTrack | Roy van Heeswijk";
    const metaDescription = "GymTrack is een mobiele fitnessapp voor krachtsporters met workout tracking, spier-visualisatie en AI-ondersteuning.";
    const technologies = ["React", "TypeScript", "Tailwind CSS", "Supabase", "Recharts", "Three.js"];

    const githubUrl = "https://github.com/RoyvHeeswijk/GymTrack";
    const liveUrl = "https://gym-track-bice.vercel.app/";

    return (
        <ProjectPageLayout
            metaTitle={metaTitle}
            metaDescription={metaDescription}
            pageTitle={pageTitle}
            summary="Fitnessapp voor krachtsporters, gericht op snel loggen tijdens het trainen."
            role="UX/UI Designer & Front-end Developer"
            intro={
                <>
                    <p>
                        GymTrack is een mobiele fitnessapp waarmee krachtsporters trainingen kunnen plannen,
                        bijhouden en analyseren. Ik richtte het product op gebruikers die in de gym snel
                        sets willen loggen zonder veel te hoeven zoeken of typen.
                    </p>
                    <p>
                        Ik ontwierp en bouwde de interface als responsive React-app met Supabase voor
                        accounts en data. AI-ondersteuning helpt bij het maken van schema&apos;s, maar de
                        kern blijft de workout-ervaring zelf.
                    </p>
                </>
            }
            projectPreviewImage="/GymTrack.png"
            imageCaption="Login-scherm mobiele interface"
            technologies={technologies}
            githubUrl={githubUrl}
            liveUrl={liveUrl}
        >
            <ProjectContentSection number="01" title="Het project">
                <p>
                    Ik bouwde GymTrack als mobiel-first webapp met een schema-architect, workout coach,
                    progressie-analyse, dashboard en trainingshistorie. De 3D-spier-heatmap maakt zichtbaar
                    welke spiergroepen belast worden, en grafieken tonen progressie over tijd.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="02" title="Mijn aanpak" delay={0.03}>
                <ProjectProcess
                    steps={[
                        {
                            title: 'Probleem scherp krijgen',
                            description: 'Eerst bepaald welke stappen tijdens het trainen het meest tijd kosten: navigeren, invoeren en terugvinden van eerdere prestaties.',
                        },
                        {
                            title: 'Flows schetsen',
                            description: 'De belangrijkste schermen uitgewerkt: inloggen, schema bekijken, workout loggen en resultaten terugzien.',
                        },
                        {
                            title: 'Bouwen',
                            description: 'Interface opgebouwd in React met herbruikbare componenten, gekoppeld aan Supabase voor auth en data.',
                        },
                        {
                            title: 'Testen op mobiel',
                            description: 'Flows op telefoonformaat getest en knoppen, navigatie en invoervelden aangepast waar het te veel stappen vroeg.',
                        },
                    ]}
                />
            </ProjectContentSection>

            <ProjectContentSection number="03" title="Ontwerp" delay={0.06}>
                <ProjectInsight
                    items={[
                        {
                            label: 'Probleem',
                            text: 'Tijdens een training wil je niet veel scrollen of lange formulieren invullen. Elke extra stap voelt storend als je tussen sets zit.',
                        },
                        {
                            label: 'Keuze',
                            text: 'Ik koos voor een mobiel-first layout met een vaste bottom navigation, zodat de belangrijkste acties altijd bereikbaar blijven.',
                        },
                        {
                            label: 'Keuze',
                            text: 'Ik gebruikte een 3D-spier-heatmap om spierbelasting visueel te maken. Zo hoef je niet alles uit een lijst te halen om te snappen wat je traint.',
                        },
                    ]}
                />
            </ProjectContentSection>

            <ProjectContentSection number="04" title="Development" delay={0.09}>
                <p>
                    Ik bouwde de app met React en TypeScript. Supabase regelt authenticatie en opslag van
                    trainingen. Recharts gebruik ik voor progressiegrafieken, Three.js voor de spier-heatmap.
                </p>
                <p>
                    State en data zijn gekoppeld aan concrete schermen: wat je logt tijdens een workout
                    komt direct terug in historie, PR-detectie en trendanalyse. Dat vroeg om duidelijke
                    componentstructuur per flow, niet per losse pagina.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="05" title="Resultaat" delay={0.12}>
                <p>
                    GymTrack is een werkende app met login, schema&apos;s, workout logging, dashboard en
                    historie. De interface is gebouwd voor gebruik op mobiel, met visuele feedback via
                    heatmap en grafieken in plaats van alleen tabellen.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="06" title="Wat ik heb geleerd" delay={0.15}>
                <ul>
                    <li>Ik merkte dat ik te snel features toevoegde zonder eerst de workout-flow strak te zetten. Door eerst de kernflow te verbeteren, werd de rest van de app logischer.</li>
                    <li>Visualisaties zoals de heatmap zijn alleen nuttig als ze snel te begrijpen zijn. Ik heb moeten schrappen en vereenvoudigen tot het echt hielp in plaats van alleen indruk maakte.</li>
                </ul>
            </ProjectContentSection>
        </ProjectPageLayout>
    );
};

export default GymTrackProjectPage;
