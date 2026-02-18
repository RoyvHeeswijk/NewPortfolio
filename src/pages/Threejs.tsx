"use client"

import { Globe, Github } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { StarryBackground } from "../../components/StarryBackground"
import { motion } from "framer-motion"
import ProjectPageLayout from '../components/layout/ProjectPageLayout';

const classicFont = "font-American-Captain"

interface NavItemProps {
    text: string
    href: string
}

function NavItem({ text, href }: NavItemProps) {
    return (
        <Link href={href} className="cursor-pointer hover:text-gray-600 transition-colors px-4 sm:px-8">
            <span className={`text-sm md:text-3xl lg:text-4xl ${classicFont} font-bold`}>{text}</span>
        </Link>
    )
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
        title: "CineMatch",
        description: "This is a project where I use Tailwind CSS & JavaScript to create a website for my project: CineMatch.",
        image: "video.png",
        tags: ["JavaScript", "AI", "Next.js", "Tailwind CSS"],
        href: "/CineMatchpage",
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
        title: "Upendo",
        description: "This is a project where I use Tailwind CSS & JavaScript to create a website for the company Upendo.",
        image: "Upendo.png",
        tags: ["Javascript", "Tailwind CSS", "Next.js", "Github"],
        href: "/Upendo",
    },
]

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
                <div className="p-6 rounded-xl" style={{ backgroundColor: 'hsl(220, 16%, 12%)', border: '1px solid hsl(220, 14%, 16%)' }}>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: 'hsl(172, 66%, 50%)' }}>Sphere</h3>
                    <p className="mb-4 text-sm" style={{ color: 'hsl(215, 12%, 55%)' }}>
                        Een geanimeerde 3D-bol die continu roteert, wat de basisprincipes van scene setup,
                        camera, geometrie en materiaal in THREE.js demonstreert.
                    </p>
                    <div className="flex space-x-4">
                        <motion.a
                            href="https://github.com/RoyvHeeswijk"
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center text-sm transition-colors"
                            style={{ color: 'hsl(215, 12%, 55%)' }}
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(172, 66%, 50%)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(215, 12%, 55%)'}
                        >
                            <Github size={16} className="mr-2" /> GitHub
                        </motion.a>
                        <motion.a
                            href="https://i539880.hera.fontysict.net/portfolio/livewall2/persoonlijk3/index.html"
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center text-sm transition-colors"
                            style={{ color: 'hsl(215, 12%, 55%)' }}
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(172, 66%, 50%)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(215, 12%, 55%)'}
                        >
                            <Globe size={16} className="mr-2" /> Live Demo
                        </motion.a>
                    </div>
                </div>

                <div className="p-6 rounded-xl" style={{ backgroundColor: 'hsl(220, 16%, 12%)', border: '1px solid hsl(220, 14%, 16%)' }}>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: 'hsl(172, 66%, 50%)' }}>Dice</h3>
                    <p className="mb-4 text-sm" style={{ color: 'hsl(215, 12%, 55%)' }}>
                        Een interactieve 3D-dobbelsteen. Dit onderdeel verkent complexere texturen,
                        event handling en mogelijk physics binnen THREE.js.
                    </p>
                    <div className="flex space-x-4">
                        <motion.a
                            href="https://github.com/RoyvHeeswijk"
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center text-sm transition-colors"
                            style={{ color: 'hsl(215, 12%, 55%)' }}
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(172, 66%, 50%)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(215, 12%, 55%)'}
                        >
                            <Github size={16} className="mr-2" /> GitHub
                        </motion.a>
                        <motion.a
                            href="https://i539880.hera.fontysict.net/portfolio/livewall2/persoonlijk3.2/index.html"
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center text-sm transition-colors"
                            style={{ color: 'hsl(215, 12%, 55%)' }}
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(172, 66%, 50%)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(215, 12%, 55%)'}
                        >
                            <Globe size={16} className="mr-2" /> Live Demo
                        </motion.a>
                    </div>
                </div>
            </div>
            <p>
                Klik op de GitHub logo's of de wereldbol icoontjes hierboven om de code te bekijken of de live demo's te ervaren.
            </p>
        </>
    );

    return (
        <ProjectPageLayout
            metaTitle={metaTitle}
            metaDescription={metaDescription}
            pageTitle={pageTitle}
            projectImage="/Threejs.png" // Hoofdafbeelding voor het project
            description={description}
            technologies={technologies}
        // Globale GitHub/Live links kunnen hier als de beschrijving te complex wordt
        // githubUrl="EEN_ALGEMENE_GITHUB_LINK_INDIEN_VAN_TOEPASSING"
        // liveUrl="EEN_ALGEMENE_LIVE_LINK_INDIEN_VAN_TOEPASSING"
        />
    );
};

export default ThreeJsProjectPage;

