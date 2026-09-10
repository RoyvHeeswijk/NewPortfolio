"use client"

import ProjectPageLayout from '../components/layout/ProjectPageLayout';

const GymTrackProjectPage = () => {
    const pageTitle = "GymTrack: Workout Tracker";
    const metaTitle = "GymTrack | Roy van Heeswijk";
    const metaDescription = "GymTrack is een AI-gedreven, visuele workout planner en tracker voor krachtsporters. Gebouwd met React, TypeScript, Tailwind CSS en Supabase.";
    const technologies = ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vite", "Recharts", "Three.js"];

    const githubUrl = "https://github.com/RoyvHeeswijk/GymTrack";
    const liveUrl = "https://gym-track-bice.vercel.app/";

    const description = (
        <>
            <p className="mb-6">
                GymTrack is een mobiele fitness-app voor jongvolwassen krachtsporters die verder gaat dan
                traditionele tracking. Het project combineert een AI-gedreven schema-architect, begeleiding
                tijdens workouts en automatische progressie-analyse in één visuele ervaring, van het plannen
                van een schema tot het loggen van sets en het begrijpen van je resultaten.
            </p>
            <p className="mb-6">
                Het doel was om frictie weg te nemen in de volledige trainingscyclus: schema&apos;s genereren
                op basis van doelen en beperkingen, oefeningen herkennen via informele benamingen, alternatieven
                voorstellen als een apparaat bezet is, en na afloop trends en records automatisch samenvatten.
                Accounts en dataopslag lopen via Supabase, met een mobiel-first interface gebouwd in React en Vite.
            </p>
            <p className="mb-4">
                Kernfunctionaliteiten:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 pl-4">
                <li><strong>AI Schema-Architect:</strong> Doelen en beperkingen invoeren in natuurlijke taal, automatisch trainingsschema met 3D-spier-heatmap</li>
                <li><strong>Workout coach:</strong> Synoniemherkenning, uitvoeringsstappen, form cues en historische prestaties per oefening</li>
                <li><strong>Gym intelligence:</strong> Alternatieven voorstellen met dezelfde spiergroep als een apparaat bezet is</li>
                <li><strong>Progressie-analyse:</strong> Automatische samenvattingen, PR-detectie, trendanalyse en spierbelasting per training</li>
                <li><strong>Dashboard & historie:</strong> PR&apos;s, mijlpalen, progressiegrafieken en volledige trainingsgeschiedenis</li>
            </ul>
            <p>
                GymTrack demonstreert mijn vaardigheden in het bouwen van data-gedreven, interactieve webapps
                met aandacht voor gebruikerservaring, visualisatie en een moderne mobiele tech stack.
            </p>
        </>
    );

    return (
        <ProjectPageLayout
            metaTitle={metaTitle}
            metaDescription={metaDescription}
            pageTitle={pageTitle}
            projectPreviewImage="/GymTrack.png"
            description={description}
            technologies={technologies}
            githubUrl={githubUrl}
            liveUrl={liveUrl}
        />
    );
};

export default GymTrackProjectPage;
