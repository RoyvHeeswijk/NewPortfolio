"use client"

import ProjectPageLayout from '../components/layout/ProjectPageLayout';
import ProjectContentSection from '../components/project/ProjectContentSection';
import ProjectProcess from '../components/project/ProjectProcess';
import ProjectInsight from '../components/project/ProjectInsight';

const SalesFlowProjectPage = () => {
    const pageTitle = "SalesFlow";
    const metaTitle = "SalesFlow | Roy van Heeswijk";
    const metaDescription = "SalesFlow is een fictieve bedrijfswebsite voor een e-commerce adviesbureau, gebouwd met Next.js en React.";
    const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

    const githubUrl = "https://github.com/RoyvHeeswijk/SalesFlow";
    const liveUrl = "https://sales-flow-dun.vercel.app";

    return (
        <ProjectPageLayout
            metaTitle={metaTitle}
            metaDescription={metaDescription}
            pageTitle={pageTitle}
            summary="Bedrijfswebsite voor een fictief e-commerce adviesbureau."
            role="Front-end Developer & UI-design"
            intro={
                <>
                    <p>
                        SalesFlow is de website van een fictief online sales adviesbureau. Ik bouwde
                        een professionele bedrijfsomgeving met pagina&apos;s voor diensten, over ons,
                        prijzen en contact.
                    </p>
                    <p>
                        Het project liet me oefenen met een zakelijke tone-of-voice in layout en
                        contentstructuur, en met het opzetten van een Next.js-site in herbruikbare
                        React-componenten.
                    </p>
                </>
            }
            projectImage="/SalesFlow.svg"
            imageCaption="Branding en logo SalesFlow"
            technologies={technologies}
            githubUrl={githubUrl}
            liveUrl={liveUrl}
        >
            <ProjectContentSection number="01" title="Het project">
                <p>
                    Ik bouwde een meerpagina-website met duidelijke diensten-secties, team/over-ons
                    content en een contactflow. De site is volledig responsive en bedoeld om
                    vertrouwen te wekken bij potentiële klanten.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="02" title="Mijn aanpak" delay={0.03}>
                <ProjectProcess
                    steps={[
                        {
                            title: 'Concept bepalen',
                            description: 'Doelgroep en diensten van het fictieve bureau uitgewerkt: e-commerce advies voor ondernemers.',
                        },
                        {
                            title: 'Layout & hiërarchie',
                            description: 'Paginastructuur en contentvolgorde bepaald: eerst waarde, dan diensten, dan contact.',
                        },
                        {
                            title: 'Bouwen in Next.js',
                            description: 'Componenten opgezet voor navigatie, secties en herhalende contentblokken.',
                        },
                        {
                            title: 'Responsive & SEO',
                            description: 'Breakpoints getest en metadata toegevoegd voor basis-zoekmachine-optimalisatie.',
                        },
                    ]}
                />
            </ProjectContentSection>

            <ProjectContentSection number="03" title="Ontwerp" delay={0.06}>
                <ProjectInsight
                    items={[
                        {
                            label: 'Probleem',
                            text: 'Bij een adviesbureau moet binnen enkele seconden duidelijk zijn wat je aanbiedt en voor wie. Te veel tekst of onduidelijke navigatie werkt tegen.',
                        },
                        {
                            label: 'Keuze',
                            text: 'Ik zette diensten direct prominent op de homepage en in het menu, zodat bezoekers niet hoeven te zoeken naar wat SalesFlow doet.',
                        },
                        {
                            label: 'Keuze',
                            text: 'Ik hield het kleurenpalet en typografie consistent over alle pagina\'s, zodat het voelt als één merk en niet als losse onderdelen.',
                        },
                    ]}
                />
            </ProjectContentSection>

            <ProjectContentSection number="04" title="Development" delay={0.09}>
                <p>
                    De site draait op Next.js met TypeScript en Tailwind CSS. Ik werkte met
                    herbruikbare componenten voor navigatie, knoppen en content-secties, zodat
                    nieuwe pagina&apos;s dezelfde opbouw volgen.
                </p>
                <p>
                    Client- en server-componenten zette ik in waar het paste: statische content
                    en layout server-side, interactieve onderdelen client-side.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="05" title="Wat ik heb geleerd" delay={0.12}>
                <ul>
                    <li>Bij een bedrijfswebsite is de volgorde van informatie belangrijker dan extra animaties. Duidelijke secties werkten beter dan een drukke homepage.</li>
                    <li>Herbruikbare componenten betaalden zich snel terug toen ik meerdere pagina&apos;s moest bijhouden met dezelfde stijl.</li>
                </ul>
            </ProjectContentSection>
        </ProjectPageLayout>
    );
};

export default SalesFlowProjectPage;
