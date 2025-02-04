interface ProjectCardProps {
    project: {
        id: number
        title: string
        description: string
        image: string
        tags: string[]
    }
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 border-2 border-gray-900">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

