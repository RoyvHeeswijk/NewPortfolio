"use client"

import ProjectPageLayout from '../components/layout/ProjectPageLayout';

const UIFoundryProjectPage = () => {
    const pageTitle = "UI Foundry — Design System Tool";
    const metaTitle = "UI Foundry | Roy van Heeswijk";
    const metaDescription = "UI Foundry is een interactieve design-system en frontend playground om componenten, tokens, patterns en accessibility centraal te beheren, testen en documenteren.";
    const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Lucide React"];

    const liveUrl = "https://temporary-quick-delta-5hc7rpj.vercel.app/";

    const description = (
        <>
            <p className="mb-6">
                UI Foundry is een volledig werkende webapplicatie voor designers en frontend developers
                die hun design system op één plek willen beheren, testen en documenteren. Het product
                voelt als een professionele developer tool — denk aan Linear, Vercel of Storybook —
                en geen statische showcase.
            </p>
            <p className="mb-6">
                Alle interacties werken daadwerkelijk: live theme editing, component playground met
                gegenereerde React/HTML/CSS-code, design tokens die direct door de hele interface lopen,
                accessibility checks op basis van echte componentdata, en een page builder met
                add/remove/reorder en automatische code-export.
            </p>
            <p className="mb-4">
                Kernfunctionaliteiten:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 pl-4">
                <li><strong>Component library</strong> — 21 componenten met variants, states, live preview en copy-to-clipboard code</li>
                <li><strong>Design tokens & theme editor</strong> — kleuren, typography, spacing, radius en shadows; wijzigingen direct zichtbaar en opgeslagen in localStorage</li>
                <li><strong>Playground & patterns</strong> — real-time component controls plus 8 UX-patterns (login, checkout, empty state, etc.)</li>
                <li><strong>Accessibility lab</strong> — contrast, focus, keyboard, labels en touch targets met score op basis van componentdefinities</li>
                <li><strong>Design system health</strong> — consistency-, accessibility- en documentation-score plus changelog</li>
                <li><strong>Page builder</strong> — pagina&apos;s samenstellen uit componenten met gegenereerde React-code</li>
            </ul>
            <p>
                UI Foundry demonstreert mijn vaardigheden in component-architectuur, design systems,
                toegankelijkheid en het bouwen van complexe, interactieve frontend tooling met Next.js
                en TypeScript.
            </p>
        </>
    );

    return (
        <ProjectPageLayout
            metaTitle={metaTitle}
            metaDescription={metaDescription}
            pageTitle={pageTitle}
            projectPreviewImage="/UIFoundry.png"
            description={description}
            technologies={technologies}
            liveUrl={liveUrl}
        />
    );
};

export default UIFoundryProjectPage;
