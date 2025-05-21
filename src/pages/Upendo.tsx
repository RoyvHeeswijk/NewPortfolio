"use client"

import { Github } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { StarryBackground } from "../../components/StarryBackground"
import Link from "next/link"
import { motion } from "framer-motion"
import ProjectPageLayout from '../components/layout/ProjectPageLayout';

const classicFont = "font-American-Captain"
interface NavItemProps {
    text: string
    href: string
}

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.nav
            className={`sticky top-0 transition-colors duration-300 'bg-transparent'`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="px-4 sm:px-8 md:px-12 transition-all duration-300 w-full">
                <div className="flex items-center justify-start h-[100px]">
                    <div className="pl-0">
                        <Link href="/" className="flex items-center">
                            <div className="w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}

const projects = [
    {
        id: 1,
        title: "Sphere & Dice",
        description: "This is a project where I use THREE.js to make a sphere & dice rotate.",
        image: "Threejs.png",
        tags: ["JavaScript", "THREE.js", "CSS", "VS Code"],
        href: "/Threejs",
    },
    {
        id: 2,
        title: "Charla",
        description: "This is a project where I use Next.js to create a speech-to-text app.",
        image: "Charla.png",
        tags: ["Tailwind CSS", "JavaScript", "OpenAI", "Github", "Next.js", "Cursor"],
        href: "/Charla",
    },
    {
        id: 3,
        title: "CineMatch",
        description: "This is a project where I use Tailwind CSS & JavaScript to create a website for my project: CineMatch.",
        image: "video.png",
        tags: ["JavaScript", "AI", "Next.js", "Tailwind CSS"],
        href: "/CineMatchpage",
    },
]

const UpendoProjectPage = () => {
    const pageTitle = "Upendo: Website voor Klant";
    const metaTitle = "Upendo Website Ontwikkeling";
    const metaDescription = "Een groepsproject door Roy van Heeswijk en team voor de ontwikkeling van de Upendo website met Next.js, Tailwind CSS en Storyblok CMS.";
    const technologies = ["Next.js", "JavaScript", "Tailwind CSS", "Storyblok CMS", "GitHub"];

    const githubUrl = "https://github.com/RoyvHeeswijk";
    // const liveUrl = "HIER_DE_LIVE_URL_INDIEN_BESCHIKBAAR"; // Toevoegen als je deze hebt

    const description = (
        <>
            <p className="mb-6">
                Voor het bedrijf "UPENDO" heb ik in teamverband een nieuwe website ontwikkeld.
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
            projectImage="/Upendo.png" // Zorg dat deze afbeelding in /public staat
            description={description}
            technologies={technologies}
            githubUrl={githubUrl}
        // liveUrl={liveUrl} // Uncomment en vul in als beschikbaar
        />
    );
};

export default UpendoProjectPage;

