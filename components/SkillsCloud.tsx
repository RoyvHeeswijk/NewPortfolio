"use client"

const skills = [
    { name: "Next.js", },
    { name: "Tailwind CSS", },
    { name: "JavaScript", },
    { name: "Figma", },
    { name: "VS Code", },
    { name: "Storyblok", },
    { name: "TypeScript",  },
    { name: "HTML", },
    { name: "CSS",  },
    { name: "Github",  },
    { name: "OpenAI", },
    { name: "THREE.js", },
    { name: "Cursor",  },
]

export function SkillsCloud() {
    return (
        <section className="bg-black bg-opacity-50 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-4 w-full mb-4">
                    {skills.map((skill, index) => (
                        <a
                            key={index}
                        
                        
                            className="flex items-center bg-blue-500 text-white text-xs font-semibold mr-2 px-4 py-2 rounded transition-all hover:bg-blue-600 hover:scale-105"
                        >
                            <span className="text-sm">{skill.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

