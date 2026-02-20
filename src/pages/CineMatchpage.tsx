"use client"

import { Github, Globe } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { StarryBackground } from "../../components/StarryBackground"
import Link from "next/link"
import { motion } from "framer-motion"
import ProjectPageLayout from '../components/layout/ProjectPageLayout';
import Navbar from '../components/layout/Navbar';

const classicFont = "font-American-Captain"
interface NavItemProps {
    text: string
    href: string
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
        title: "Upendo",
        description: "This is a project where I use Tailwind CSS & JavaScript to create a website for the company Upendo.",
        image: "Upendo.png",
        tags: ["Javascript", "Tailwind CSS", "Next.js", "Github"],
        href: "/Upendo",
    },
]

const CineMatchPageProject = () => {
    const pageTitle = "CineMatch: Jouw Perfecte Film Vinden met AI";
    const metaTitle = "CineMatch: AI Film Aanbevelingen";
    const metaDescription = "Ontdek CineMatch, een AI-gedreven platform door Roy van Heeswijk dat helpt de perfecte film te vinden op basis van jouw voorkeuren.";
    const technologies = ["Next.js", "React", "Tailwind CSS", "JavaScript", "OpenAI API", "Vercel"];

    const githubUrl = "https://github.com/RoyvHeeswijk/CineMatch";
    // const liveUrl = "HIER_DE_LIVE_URL_INDIEN_BESCHIKBAAR"; // Toevoegen als je deze hebt

    const description = (
        <>
            <p className="mb-6">
                CineMatch is een applicatie die ik heb ontwikkeld om filmliefhebbers te helpen bij het vinden van hun
                ideale film. Door gebruik te maken van AI en gepersonaliseerde voorkeuren, maakt CineMatch het
                selectieproces eenvoudiger en leuker.
            </p>
            <p className="mb-6">
                Het doel van dit project was om een intuïtief platform te bouwen waar gebruikers moeiteloos
                films kunnen ontdekken die écht bij hun smaak passen. Of je nu op zoek bent naar een specifieke
                genre, acteur, of gewoon iets nieuws wilt proberen, CineMatch biedt aanbevelingen op maat.
            </p>
            <p className="mb-4">
                Kernfunctionaliteiten van CineMatch zijn onder andere:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 pl-4">
                <li>Intelligente matching op basis van gebruikersvoorkeuren en kijkgeschiedenis.</li>
                <li>Uitgebreide filmdatabase met gedetailleerde informatie.</li>
                <li>Integratie met AI (bijvoorbeeld OpenAI) voor het genereren van aanbevelingen en samenvattingen.</li>
                <li>Een moderne en responsieve interface voor een prettige gebruikerservaring.</li>
            </ul>
            <p>
                Met CineMatch wordt het vinden van de volgende film om te kijken een gepersonaliseerde en verrijkende ervaring.
            </p>
        </>
    );

    return (
        <ProjectPageLayout
            metaTitle={metaTitle}
            metaDescription={metaDescription}
            pageTitle={pageTitle}
            projectImage="/video.png"
            description={description}
            technologies={technologies}
            githubUrl={githubUrl}
        // liveUrl={liveUrl} // Uncomment en vul in als beschikbaar
        />
    );
};

export default CineMatchPageProject;
