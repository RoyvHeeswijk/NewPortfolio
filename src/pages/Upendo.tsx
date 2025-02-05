"use client"

import { Github } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { StarryBackground } from "../../components/StarryBackground"

const classicFont = "font-American-Captain"
interface NavItemProps {
    text: string
    href: string
}

function NavItem({ text, href }: NavItemProps) {
    const router = useRouter()
    return (
        <div
            className="cursor-pointer hover:text-gray-600 transition-colors px-4 sm:px-8"
            onClick={() => {
                if (href.startsWith("/")) {
                    router.push(href)
                } else {
                    const element = document.querySelector(href) as HTMLElement
                    if (element) {
                        const navbarHeight = 100 // Height of navbar
                        window.scrollTo({
                            top: element.offsetTop - navbarHeight,
                            behavior: "smooth",
                        })
                    }
                }
            }}
        >
            <span className={`text-sm md:text-3xl lg:text-4xl ${classicFont} font-bold`}>{text}</span>
        </div>
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
        <nav className={`sticky top-0 transition-colors duration-300 'bg-transparent'`}>
            <div className="px-4 sm:px-8 md:px-12 transition-all duration-300 w-full">
                <div className="flex items-center justify-start h-[100px]">
                    <div className="pl-0">
                        <a href="/" className="flex items-center">
                            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[20px] border-r-white" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const projects = [
    {
        id: 1,
        title: "Sphere & Diece",
        description: "This is a project where I use THREE.js to make a sphere & diece rotate.",
        image: "Threejs.png",
        tags: ["JavaScript", "THREE.js", "CSS", "VS Code"],
    },
    {
        id: 2,
        title: "Charla",
        description: "This is a project where I use Next.js to create a speech-to-text app.",
        image: "Charla.png",
        tags: ["Tailwind CSS", "JavaScript", "OpenAI", "Github", "Next.js", "Cursor"],
    },
    {
        id: 3,
        title: "Upendo",
        description: "This is a project where I use Tailwind CSS & JavaScript to create a website for the company Upendo.",
        image: "upendo.png",
        tags: ["Javascript", "Tailwind CSS", "Next.js", "Github"],
    },
]

export default function Upendo() {
    const router = useRouter()
    return (
        <main className="w-full bg-black">
            <StarryBackground />
            <div className="fixed top-0 w-full z-50">
                <Navbar />
            </div>
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 z-0 bg-transparent" />
                <div className="absolute inset-0 flex md:items-center justify-center md:justify-start md:ml-20 items-start pt-20 z-0">
                    <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
                        <Image src="/Upendo.png" alt="Upendo Logo" layout="fill" objectFit="contain" />
                    </div>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row w-full h-full">
                    <div className="flex-[3] flex items-center justify-center mt-[300px] md:mt-0">
                        <h1
                            className={`text-6xl md:text-8xl font-black text-white ${classicFont} font-bold md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2`}
                        >
                            UPENDO
                        </h1>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center md:items-start px-4 md:pr-4 mt-8 md:mt-0">
                        <p className="text-white text-center md:text-center text-sm md:text-base mb-8 max-w-[90%] md:max-w-none">
                            For this project, I worked with my group using the skills below to develop a website for the company
                            "UPENDO".
                            <br />
                            <br />
                            The goal of this project was to design and code a website for the client in Storyblok. So that the client
                            could manage and change their website.
                            <br />
                            <br />
                            Click on the GitHub logo below for the result. <br />
                        </p>

                        <section className="bg-black bg-opacity-50 py-12">
                            <div className="container mx-auto px-4">
                                <div className="flex flex-wrap justify-center gap-4 w-full mb-4">
                                    {[
                                        { name: "Next.js", icon: "/icons/nextdotjs.svg", url: "https://nextjs.org/" },
                                        { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg", url: "https://tailwindcss.com/" },
                                        {
                                            name: "JavaScript",
                                            icon: "/icons/javascript.svg",
                                            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                                        },
                                        { name: "Figma", icon: "/icons/figma.svg", url: "https://www.figma.com/" },
                                        { name: "VS Code", icon: "/icons/VScode.png", url: "https://code.visualstudio.com/" },
                                        { name: "Storyblok", icon: "/icons/storyblok.svg", url: "https://www.storyblok.com/" },
                                    ].map((skill, index) => (
                                        <a
                                            key={index}
                                            href={skill.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center bg-blue-500 text-white text-xs font-semibold mr-2 px-4 py-2 rounded transition-all hover:bg-blue-600 hover:scale-105"
                                        >
                                            <span className="text-sm">{skill.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <div className="flex justify-center w-full space-x-6 mb-8 md:mb-0">
                            <a
                                href="https://github.com/Lucvancasteren/upendo-storyblok"
                                className="text-white hover:text-blue-300 transition-colors"
                                aria-label="GitHub Repository"
                            >
                                <Github size={36} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="otherprojects" className="my-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center text-white">My Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105"
                                onClick={() => {
                                    if (project.id === 1) {
                                        router.push("/Threejs")
                                    } else if (project.id === 2) {
                                        router.push("/Charla")
                                    } else if (project.id === 3) {
                                        router.push("/Upendo")
                                    }
                                }}
                            >
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
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

