const projects = [
    {
        id: 1,
        title: "Design",
        description: "A brief description of Project 1",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 2,
        title: "Project 2",
        description: "A brief description of Project 2",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 3,
        title: "Project 3",
        description: "A brief description of Project 3",
        image: "/placeholder.svg?height=200&width=300",
    },
]

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-transparent">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-400">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

