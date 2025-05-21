import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/30 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500/30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            {/* Main content */}
            <div className="container mx-auto px-4 z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-teal-400 to-blue-500 text-transparent bg-clip-text">
                            Roy van Alphen
                        </h1>
                        <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
                            Software Developer | Creative Problem Solver | Tech Enthusiast
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-full hover:from-teal-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex justify-center gap-6 mb-12"
                    >
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                        <HiArrowDown className="text-white text-2xl animate-bounce" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}