"use client"

import ProjectPageLayout from '../components/layout/ProjectPageLayout';

const UpendoProjectPage = () => {
    const pageTitle = "Upendo: Website voor Klant";
    const metaTitle = "Upendo Website Ontwikkeling";
    const metaDescription = "Een groepsproject door Roy van Heeswijk en team voor de ontwikkeling van de Upendo website met Next.js, Tailwind CSS en Storyblok CMS.";
    const technologies = ["Next.js", "JavaScript", "Tailwind CSS", "Storyblok CMS", "GitHub"];

    const githubUrl = "https://github.com/RoyvHeeswijk";

    const description = (
        <>
            <p className="mb-6">
                Voor het bedrijf &quot;UPENDO&quot; heb ik in teamverband een nieuwe website ontwikkeld.
                Dit project was gericht op het leveren van een moderne, gebruiksvriendelijke en eenvoudig te beheren online aanwezigheid voor de klant.
            </p>
            <p className="mb-6">
                Het kernidee was om de website te bouwen met Next.js voor optimale prestaties en SEO,
                Tailwind CSS voor een strak en responsief design, en Storyblok als headless CMS.
                Dankzij Storyblok kan de klant nu zelf eenvoudig content op de website aanpassen en uitbreiden zonder technische kennis.
            </p>
            <p className="mb-4">
                Mijn rol in het project omvatte onder andere:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 pl-4">
                <li>Frontend ontwikkeling met Next.js en Tailwind CSS.</li>
                <li>Implementatie van herbruikbare componenten.</li>
                <li>Integratie met het Storyblok CMS voor dynamische content.</li>
                <li>Samenwerking binnen het team via Git en GitHub.</li>
                <li>Bijdragen aan het designproces en de gebruikerservaring.</li>
            </ul>
            <p>
                Dit project was een waardevolle ervaring in het werken voor een externe klant,
                het toepassen van een headless CMS in een moderne tech stack, en het effectief samenwerken in een ontwikkelteam.
            </p>
        </>
    );

    return (
        <ProjectPageLayout
            metaTitle={metaTitle}
            metaDescription={metaDescription}
            pageTitle={pageTitle}
            role="Front-end Developer (teamproject)"
            intro={description}
            projectImage="/Upendo.png"
            technologies={technologies}
            githubUrl={githubUrl}
        >
            <></>
        </ProjectPageLayout>
    );
};

export default UpendoProjectPage;
