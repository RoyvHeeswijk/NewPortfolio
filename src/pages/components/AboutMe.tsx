"use client"
import { motion } from "framer-motion"

export function AboutMe() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <motion.p
                className="text-gray-300 mb-4 text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                I am Roy van Heeswijk, 19 years old and live in Drunen, where I was born and raised. I study ICT & Media Design at Fontys in Tilburg.
            </motion.p>
            <motion.p
                className="text-gray-300 mb-4 text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                With a passion for technology and creativity, I enjoy working on projects where I can challenge myself and learn new things. On my portfolio, you will find an overview of my work and the steps I take in my development.
            </motion.p>
            <motion.p
                className="text-gray-300 text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
            >
                Below you can my skills and above you can see what I have progressed in. Feel free to take a look!
            </motion.p>
        </motion.div>
    )
}

