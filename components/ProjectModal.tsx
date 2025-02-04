// interface ProjectModalProps {
//     project: {
//         id: number
//         title: string
//         description: string
//         image: string
//         tags: string[]
//     } | null
//     onClose: () => void
// }

// export function ProjectModal({ project, onClose }: ProjectModalProps) {
//     if (!project) return null

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-gray-900 p-8 rounded-lg max-w-2xl w-full">
//                 <h2 className="text-3xl font-bold mb-4 text-white">{project.title}</h2>
//                 <p className="text-gray-300 mb-6">{project.description}</p>
//                 <img
//                     src={project.image || "/placeholder.svg"}
//                     alt={project.title}
//                     className="w-full h-64 object-cover rounded-lg mb-6"
//                 />
//                 <div className="flex flex-wrap gap-2 mb-6">
//                     {project.tags.map((tag, index) => (
//                         <span key={index} className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
//                             {tag}
//                         </span>
//                     ))}
//                 </div>
//                 <button
//                     onClick={onClose}
//                     className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
//                 >
//                     Close
//                 </button>
//             </div>
//         </div>
//     )
// }
