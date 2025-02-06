"use client"

import { Globe, Github } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { StarryBackground } from "../../components/StarryBackground"
import { motion } from "framer-motion"

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
        title: "Sphere & Diece",
        description: "This is a project where I use THREE.js to make a sphere & diece rotate.",
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

export default function Charla() {
    return (
        <main className="w-full bg-black">
            <StarryBackground />
            <div className="fixed top-0 w-full z-50">
                <Navbar />
            </div>
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 z-0 bg-transparent" />
                <motion.div
                    className="absolute inset-0 flex md:items-center justify-center md:justify-start md:ml-20 items-start pt-20 z-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
                        <Image src="/Charla.png" alt="Charla Logo" layout="fill" objectFit="contain" />
                    </div>
                </motion.div>

                <div className="relative z-10 flex flex-col md:flex-row w-full h-full">
                    <div className="flex-[3] flex items-center justify-center mt-[300px] md:mt-0">
                        <h1
                            className={`text-6xl md:text-8xl font-black text-white ${classicFont} font-bold md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2`}
                        >
                            CHARLA
                        </h1>
                    </div>

                    <motion.div
                        className="flex-1 flex flex-col justify-center items-center md:items-start px-4 md:px-12 mt-8 md:mt-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <p className="text-white text-center md:text-center text-sm md:text-base mb-8 max-w-[90%] md:max-w-none">
                            For this project, I used the skills below to create a Speech-to-text app.
                            <br />
                            <br />
                            The goal of this project was to create a Speech-to-text app using the OPENAI API key, allowing you to send
                            messages that were originally your speech.
                            <br />
                            <br />
                            Click on the GitHub logo or the globe logo below for the result. <br />
                        </p>

                        <section className="bg-black bg-opacity-50 py-12">
                            <div className="container mx-auto px-4">
                                <div className="flex flex-wrap justify-center gap-4 w-full mb-4">
                                    {[
                                        { name: "Next.js" },
                                        { name: "Tailwind CSS" },
                                        {
                                            name: "JavaScript",
                                        },
                                        { name: "Figma" },
                                        { name: "VS Code" },
                                        { name: "OpenAI" },
                                    ].map((skill, index) => (
                                        <motion.a
                                            key={index}
                                            className="flex items-center bg-blue-500 text-white text-xs font-semibold mr-2 px-4 py-2 rounded transition-all hover:bg-blue-600 hover:scale-105"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span className="text-sm">{skill.name}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <div className="flex justify-center w-full space-x-6 mb-8 md:mb-0 md:mr-12">
                            <motion.a
                                href="https://github.com/RoyvHeeswijk/persoonlijikproject"
                                className="text-white hover:text-blue-300 transition-colors"
                                aria-label="GitHub Repository"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Github size={36} />
                            </motion.a>
                            <motion.a
                                href="https://persoonlijkproject-saj9.vercel.app/"
                                className="text-white hover:text-blue-300 transition-colors"
                                aria-label="Live Demo"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Globe size={36} />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <motion.section
                id="otherprojects"
                className="my-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center text-white">My Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={project.href}>
                                    <div className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
                                        <img
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                                            <p className="text-gray-400">{project.description}</p>
                                            <div className="mt-2">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="inline-block bg-blue-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </main>
    )
}

