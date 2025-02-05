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
    "Cursor",
    "Figma",
    "Storyblok"
]

export function SkillsCloud() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative bg-gradient-to-b from-black via-blue-900 to-black p-10 rounded-lg shadow-lg"
        >
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {skills.map((skill, index) => (
                    <motion.span
                        key={skill}
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-sm cursor-pointer shadow-lg shadow-blue-500/50"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>

            <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: `${Math.random() * 4}px`,
                            height: `${Math.random() * 4}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.8 + 0.2,
                        }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                ))}
            </div>
        </motion.div>
    )
}
