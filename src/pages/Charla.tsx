"use client"

import ProjectPageLayout from '../components/layout/ProjectPageLayout';

const CharlaProjectPage = () => {
    const pageTitle = "Charla: Real-time Spraak-naar-Tekst";
    const metaTitle = "Charla Spraak-naar-Tekst Applicatie";
    const metaDescription = "Een project van Roy van Heeswijk dat spraak omzet naar tekst via de OpenAI API, gebouwd met Next.js voor een soepele gebruikerservaring.";
    const technologies = ["Next.js", "React", "Tailwind CSS", "JavaScript", "OpenAI API", "Vercel"];

    const githubUrl = "https://github.com/RoyvHeeswijk";
    const liveUrl = "https://persoonlijkproject-saj9.vercel.app/";

    const description = (
        <>
            <p className="mb-6">
                Charla is een applicatie die ik heb ontwikkeld om spraak in real-time om te zetten naar tekst.
                Het project maakt gebruik van de kracht van de OpenAI API voor nauwkeurige transcripties.
            </p>
            <p className="mb-6">
                Het doel was om een intuïtieve interface te creëren waarmee gebruikers eenvoudig gesproken berichten kunnen opnemen,
                deze audio kunnen laten verwerken, en de getranscribeerde tekst direct kunnen zien en gebruiken.
                Dit project was een uitstekende gelegenheid om te werken met externe API&apos;s, asynchrone operaties in JavaScript,
                en state management binnen een Next.js applicatie.
            </p>
            <p className="mb-4">
                Belangrijke features zijn:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 pl-4">
                <li>Directe opname en verwerking van spraak.</li>
                <li>Integratie met OpenAI voor hoge kwaliteit transcriptie.</li>
                <li>Een duidelijke en gebruiksvriendelijke interface.</li>
                <li>Gebouwd met moderne webtechnologieën voor optimale performance.</li>
            </ul>
            <p>
                Dit project demonstreert mijn vaardigheden in het bouwen van interactieve webapplicaties en het integreren van AI-diensten.
            </p>
        </>
    );

    return (
        <ProjectPageLayout
            metaTitle={metaTitle}
            metaDescription={metaDescription}
            pageTitle={pageTitle}
            projectImage="/Charla.png"
            description={description}
            technologies={technologies}
            githubUrl={githubUrl}
            liveUrl={liveUrl}
        />
    );
};

export default CharlaProjectPage;
