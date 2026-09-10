"use client"

import ProjectPageLayout from '../components/layout/ProjectPageLayout';
import ProjectContentSection from '../components/project/ProjectContentSection';
import ProjectProcess from '../components/project/ProjectProcess';
import ProjectInsight from '../components/project/ProjectInsight';

const GymTrackProjectPage = () => {
    const technologies = ["React", "TypeScript", "Tailwind CSS", "Supabase", "Recharts", "Three.js"];

    return (
        <ProjectPageLayout
            metaTitle="GymTrack | Roy van Heeswijk"
            metaDescription="GymTrack is een mobiele fitnessapp voor krachtsporters met workout tracking, spier-visualisatie en AI-ondersteuning."
            pageTitle="GymTrack"
            summary="Fitnessapp voor krachtsporters, gericht op snel loggen tijdens het trainen."
            role="UX/UI Designer & Front-end Developer"
            intro={
                <p>
                    Ik ontwierp en bouwde GymTrack als mobiel-first webapp. Supabase regelt accounts en data,
                    AI helpt bij schema&apos;s, maar de kern is de workout-ervaring zelf.
                </p>
            }
            projectPreviewImage="/GymTrack.png"
            imageCaption="Login-scherm mobiele interface"
            technologies={technologies}
            githubUrl="https://github.com/RoyvHeeswijk/GymTrack"
            liveUrl="https://gym-track-bice.vercel.app/"
        >
            <ProjectContentSection number="01" title="Het project">
                <p>
                    GymTrack combineert schema&apos;s, workout logging, progressie-analyse en een dashboard in één app.
                    Ik bouwde onder andere een schema-architect, workout coach, 3D-spier-heatmap, grafieken en trainingshistorie.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="02" title="Aanpak & keuzes">
                <ProjectProcess
                    steps={[
                        { title: 'Probleem scherp krijgen', description: 'Welke stappen kosten tijd tijdens het trainen: navigeren, invoeren, eerdere prestaties terugvinden.' },
                        { title: 'Flows schetsen', description: 'Kernschermen uitgewerkt: inloggen, schema, workout loggen, resultaten bekijken.' },
                        { title: 'Bouwen & testen', description: 'React-app gekoppeld aan Supabase, daarna flows op telefoonformaat getest en aangescherpt.' },
                    ]}
                />
                <ProjectInsight
                    items={[
                        { label: 'Keuze', text: 'Vaste bottom navigation op mobiel, zodat belangrijkste acties tijdens het trainen bereikbaar blijven.' },
                        { label: 'Keuze', text: '3D-spier-heatmap om spierbelasting visueel te maken in plaats van alleen lijsten te tonen.' },
                    ]}
                />
            </ProjectContentSection>

            <ProjectContentSection number="03" title="Ontwikkeling">
                <p>
                    React en TypeScript voor de interface, Supabase voor auth en data. Recharts voor progressiegrafieken,
                    Three.js voor de heatmap. State en schermen zijn gekoppeld: wat je logt komt terug in historie, PR-detectie en trends.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="04" title="Resultaat & geleerd">
                <p>
                    Een werkende app met login, schema&apos;s, workout logging en dashboard. De interface is gebouwd voor mobiel gebruik
                    in de gym.
                </p>
                <ul>
                    <li>Eerst de workout-flow strak zetten werkte beter dan meteen veel features toevoegen.</li>
                    <li>Visualisaties moeten snel te begrijpen zijn; ik heb de heatmap vereenvoudigd tot het echt hielp.</li>
                </ul>
            </ProjectContentSection>
        </ProjectPageLayout>
    );
};

export default GymTrackProjectPage;
