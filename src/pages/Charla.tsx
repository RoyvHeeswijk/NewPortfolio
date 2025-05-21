"use client"

import { Globe, Github } from "lucide-react"
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

function Navbar() {
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
        title: "CineMatch",
        description: "This is a project where I use Tailwind CSS & JavaScript to create a website for my project: CineMatch.",
        image: "video.png",
        tags: ["JavaScript", "AI", "Next.js", "Tailwind CSS"],
        href: "/CineMatchpage",
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
                Dit project was een uitstekende gelegenheid om te werken met externe API's, asynchrone operaties in JavaScript,
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

