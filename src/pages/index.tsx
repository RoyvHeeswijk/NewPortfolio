"use client"

import { useState } from "react"
import { useRouter } from "next/router"
import { StarryBackground } from "./components/StarryBackground"
import { ProjectCard } from "./components/ProjectCard"
import { SkillsCloud } from "./components/SkillsCloud"
import { AboutMe } from "./components/AboutMe"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sphere & Diece",
    description: "This is a project where I use THREE.js to make a sphere & diece rotate.",
    image: "Threejs.png",
    tags: ["JavaScript", "THREE.js", "VS Code"],
  },
  {
    id: 2,
    title: "Charla",
    description: "This is a project where I use Next.js to create a speech-to-text app.",
    image: "Charla.png",
    tags: ["Tailwind CSS", "JavaScript", "OpenAI", "Github", "Next.js"],
  },
  {
    id: 3,
    title: "Upendo",
    description: "This is a project where I use Tailwind CSS & JavaScript to create a website for the company Upendo.",
    image: "upendo.png",
    tags: ["Javascript", "Tailwind CSS", "Next.js", "Github"],
  },
]

export default function Portfolio() {
  const router = useRouter();

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden relative">
      <StarryBackground />
      <main className="container mx-auto px-4 py-20 relative z-10">
        <h1 className="text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">
          Roy van Heeswijk
        </h1>
        <p className="text-xl mb-12 text-center text-gray-300">Student at Fontys ICT & Media Design</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-20">
          <AboutMe />
          <SkillsCloud />
        </div>

        <div className="my-20">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} onClick={() => {
                if (project.id === 1) {
                  router.push('/Threejs'); // Navigate to Threejs.tsx
                } else if (project.id === 2) {
                  router.push('/Charla'); // Navigate to Charla.tsx
                } else if (project.id === 3) {
                  router.push('/Upendo'); // Navigate to Upendo.tsx
                }
              }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
