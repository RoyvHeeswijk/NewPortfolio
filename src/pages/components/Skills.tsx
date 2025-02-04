const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "OpenAI",
    "VS Code",
]

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <span key={index} className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

