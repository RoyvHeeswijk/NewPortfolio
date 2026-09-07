"use client"

import { Globe, Github } from "lucide-react"
import ProjectPageLayout from '../components/layout/ProjectPageLayout';

const ThreeJsProjectPage = () => {
    const pageTitle = "THREE.js: Sphere & Dice";
    const metaTitle = "THREE.js Project: Sphere & Dice";
    const metaDescription = "Een interactief 3D project door Roy van Heeswijk, waarin een roterende sphere en een interactieve dice zijn gemaakt met THREE.js.";
    const technologies = ["THREE.js", "JavaScript", "HTML5", "CSS3"];

    const description = (
        <>
            <p className="mb-6">
                Voor dit project heb ik mijn vaardigheden in THREE.js ingezet om twee interactieve 3D-scènes te creëren:
                een roterende bol (Sphere) en een dobbelsteen (Dice) die je kunt beïnvloeden.
            </p>
            <p className="mb-6">
                Het hoofddoel was om dieper in de mogelijkheden van THREE.js te duiken en te experimenteren met 3D-rendering,
                animaties en gebruikersinteractie in de browser.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 border border-border bg-secondary">
                    <h3 className="font-display text-xl text-primary mb-3">Sphere</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                        Een geanimeerde 3D-bol die continu roteert, wat de basisprincipes van scene setup,
                        camera, geometrie en materiaal in THREE.js demonstreert.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="https://github.com/RoyvHeeswijk"
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center text-sm font-mono text-xs uppercase tracking-label text-muted-foreground hover:text-primary transition-colors link-underline"
                        >
                            <Github size={16} className="mr-2" /> GitHub
                        </a>
                        <a
                            href="https://i539880.hera.fontysict.net/portfolio/livewall2/persoonlijk3/index.html"
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center text-sm font-mono text-xs uppercase tracking-label text-muted-foreground hover:text-primary transition-colors link-underline"
                        >
                            <Globe size={16} className="mr-2" /> Live Demo
                        </a>
                    </div>
                </div>

                <div className="p-6 border border-border bg-secondary">
                    <h3 className="font-display text-xl text-primary mb-3">Dice</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                        Een interactieve 3D-dobbelsteen. Dit onderdeel verkent complexere texturen,
                        event handling en mogelijk physics binnen THREE.js.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="https://github.com/RoyvHeeswijk"
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center text-sm font-mono text-xs uppercase tracking-label text-muted-foreground hover:text-primary transition-colors link-underline"
                        >
                            <Github size={16} className="mr-2" /> GitHub
                        </a>
                        <a
                            href="https://i539880.hera.fontysict.net/portfolio/livewall2/persoonlijk3.2/index.html"
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center text-sm font-mono text-xs uppercase tracking-label text-muted-foreground hover:text-primary transition-colors link-underline"
                        >
                            <Globe size={16} className="mr-2" /> Live Demo
                        </a>
                    </div>
                </div>
            </div>
            <p>
                Klik op de GitHub logo&apos;s of de wereldbol icoontjes hierboven om de code te bekijken of de live demo&apos;s te ervaren.
            </p>
        </>
    );

    return (
        <ProjectPageLayout
            metaTitle={metaTitle}
            metaDescription={metaDescription}
            pageTitle={pageTitle}
            projectImage="/Threejs.png"
            description={description}
            technologies={technologies}
        />
    );
};

export default ThreeJsProjectPage;
