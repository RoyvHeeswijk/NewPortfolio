"use client"

import ProjectPageLayout from '../components/layout/ProjectPageLayout';

const SalesFlowProjectPage = () => {
    const pageTitle = "SalesFlow — E-commerce Adviesbureau";
    const metaTitle = "SalesFlow | Roy van Heeswijk";
    const metaDescription = "SalesFlow is een fictief online sales adviesbureau dat bedrijven helpt hun e-commerce omzet te maximaliseren. Gebouwd met Next.js, React en Tailwind CSS.";
    const technologies = ["Next.js", "React", "Tailwind CSS", "TypeScript"];

    const githubUrl = "https://github.com/RoyvHeeswijk/SalesFlow";
    const liveUrl = "https://sales-flow-dun.vercel.app";

    const description = (
        <>
            <p className="mb-6">
                SalesFlow is een fictief online sales adviesbureau dat bedrijven helpt hun e-commerce omzet te maximaliseren.
                Het concept staat voor data-gedreven groei en bewezen verkoopstrategieën voor ondernemers die online willen groeien.
            </p>
            <p className="mb-6">
                De bedrijfswebsite presenteert diensten op het gebied van online verkoop: e-commerce strategie, conversie-optimalisatie,
                marketplace management (Amazon, Bol.com), sales automatisering, analytics en sales training. Er zijn pagina&apos;s voor
                diensten, over ons, prijzen en contact. De content is in het Nederlands en gericht op het aantrekken van potentiële
                klanten via een professionele, moderne uitstraling.
            </p>
            <p className="mb-4">
                Kernfunctionaliteiten:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 pl-4">
                <li><strong>Meerdere pagina&apos;s</strong> — Home, Diensten, Over ons, Prijzen en Contact</li>
                <li><strong>Responsive design</strong> — Werkt op desktop, tablet en mobiel</li>
                <li><strong>Component-gebaseerd</strong> — Gebouwd met React en Next.js</li>
                <li><strong>SEO</strong> — Metadata en optimalisatie voor zoekmachines</li>
                <li><strong>Moderne stack</strong> — TypeScript, Tailwind CSS, client & server components</li>
            </ul>
            <p>
                SalesFlow demonstreert mijn vaardigheden in het bouwen van professionele bedrijfswebsites met een moderne tech stack en aandacht voor gebruiksvriendelijkheid.
            </p>
        </>
    );

    return (
        <ProjectPageLayout
            metaTitle={metaTitle}
            metaDescription={metaDescription}
            pageTitle={pageTitle}
            projectImage="/SalesFlow.svg"
            description={description}
            technologies={technologies}
            githubUrl={githubUrl}
            liveUrl={liveUrl}
        />
    );
};

export default SalesFlowProjectPage;
