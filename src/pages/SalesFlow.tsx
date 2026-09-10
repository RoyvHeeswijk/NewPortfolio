"use client"

import ProjectPageLayout from '../components/layout/ProjectPageLayout';
import ProjectContentSection from '../components/project/ProjectContentSection';
import ProjectProcess from '../components/project/ProjectProcess';
import ProjectInsight from '../components/project/ProjectInsight';

const SalesFlowProjectPage = () => {
    const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

    return (
        <ProjectPageLayout
            metaTitle="SalesFlow | Roy van Heeswijk"
            metaDescription="SalesFlow is een fictieve bedrijfswebsite voor een e-commerce adviesbureau, gebouwd met Next.js en React."
            pageTitle="SalesFlow"
            summary="Bedrijfswebsite voor een fictief e-commerce adviesbureau."
            role="Front-end Developer & UI-design"
            intro={
                <p>
                    SalesFlow is de website van een fictief online sales adviesbureau. Ik bouwde een professionele
                    bedrijfsomgeving met pagina&apos;s voor diensten, over ons, prijzen en contact.
                </p>
            }
            projectImage="/SalesFlow.svg"
            imageCaption="Branding en logo SalesFlow"
            technologies={technologies}
            githubUrl="https://github.com/RoyvHeeswijk/SalesFlow"
            liveUrl="https://sales-flow-dun.vercel.app"
        >
            <ProjectContentSection number="01" title="Het project">
                <p>
                    Een meerpagina-website met diensten-secties, over-ons content en contactflow. Volledig responsive,
                    bedoeld om vertrouwen te wekken bij potentiële klanten.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="02" title="Aanpak & keuzes">
                <ProjectProcess
                    steps={[
                        { title: 'Concept', description: 'Doelgroep en diensten uitgewerkt: e-commerce advies voor ondernemers.' },
                        { title: 'Layout', description: 'Contentvolgorde: eerst waarde, dan diensten, dan contact.' },
                        { title: 'Bouwen', description: 'Herbruikbare componenten in Next.js, responsive en SEO-basis toegevoegd.' },
                    ]}
                />
                <ProjectInsight
                    items={[
                        { label: 'Keuze', text: 'Diensten direct prominent op homepage en in het menu, zodat bezoekers meteen zien wat SalesFlow doet.' },
                        { label: 'Keuze', text: 'Consistent kleurenpalet en typografie over alle pagina\'s, zodat het één merk voelt.' },
                    ]}
                />
            </ProjectContentSection>

            <ProjectContentSection number="03" title="Ontwikkeling">
                <p>
                    Next.js met TypeScript en Tailwind CSS. Herbruikbare componenten voor navigatie, knoppen en secties.
                    Statische content server-side, interactieve onderdelen client-side waar nodig.
                </p>
            </ProjectContentSection>

            <ProjectContentSection number="04" title="Resultaat & geleerd">
                <p>
                    Een professionele bedrijfswebsite met duidelijke dienstenstructuur en consistente styling.
                </p>
                <ul>
                    <li>Volgorde van informatie is belangrijker dan extra animaties op de homepage.</li>
                    <li>Herbruikbare componenten betaalden zich terug bij meerdere pagina&apos;s met dezelfde stijl.</li>
                </ul>
            </ProjectContentSection>
        </ProjectPageLayout>
    );
};

export default SalesFlowProjectPage;
