"use client"
import { motion } from "framer-motion"

const skills = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Github",
    "OpenAI",
    "VS Code",
    "Next.js",
    "THREE.js",
]

export function SkillsCloud() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
            <h2 className="text-3xl font-bold mb-8 text-center">Skills </h2>
            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                    <motion.span
                        key={skill}
                        className="bg-gradient-to-r from-blue-400 to-cyan-600 text-white px-3 py-1 rounded-full text-sm cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    )
}

