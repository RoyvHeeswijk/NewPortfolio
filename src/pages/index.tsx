"use client"

import { useRouter } from "next/router"
import { StarryBackground } from "../../components/StarryBackground"
import { ProjectCard } from "../../components/ProjectCard"
import { SkillsCloud } from "../../components/SkillsCloud"
import { AboutMe } from "../../components/AboutMe"

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
    tags: ["JavaScript", "THREE.js","CSS", "VS Code"],
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
          <SkillsCloud/>
        </div>

        <div className="my-20">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105" onClick={() => {
                if (project.id === 1) {
                  router.push('/Threejs'); // Navigate to Threejs.tsx
                } else if (project.id === 2) {
                  router.push('/Charla'); // Navigate to Charla.tsx
                } else if (project.id === 3) {
                  router.push('/Upendo'); // Navigate to Upendo.tsx
                }
              }}>
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="mt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="inline-block bg-blue-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
